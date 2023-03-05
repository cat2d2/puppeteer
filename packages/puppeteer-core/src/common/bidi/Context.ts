/**
 * Copyright 2023 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import * as Bidi from 'chromium-bidi/lib/cjs/protocol/protocol.js';

import {stringifyFunction} from '../../util/Function.js';
import {EventEmitter} from '../EventEmitter.js';
import {EvaluateFunc, HandleFor} from '../types.js';
import {isString} from '../util.js';

import {Connection} from './Connection.js';
import {ElementHandle} from './ElementHandle.js';
import {JSHandle} from './JSHandle.js';
import {BidiSerializer} from './Serializer.js';

/**
 * @internal
 */
export class Context extends EventEmitter {
  #connection: Connection;
  _contextId: string;

  constructor(connection: Connection, contextId: string) {
    super();
    this.#connection = connection;
    this._contextId = contextId;
  }

  get connection(): Connection {
    return this.#connection;
  }

  get id(): string {
    return this._contextId;
  }

  async evaluateHandle<
    Params extends unknown[],
    Func extends EvaluateFunc<Params> = EvaluateFunc<Params>
  >(
    pageFunction: Func | string,
    ...args: Params
  ): Promise<HandleFor<Awaited<ReturnType<Func>>>> {
    return this.#evaluate(false, pageFunction, ...args);
  }

  async evaluate<
    Params extends unknown[],
    Func extends EvaluateFunc<Params> = EvaluateFunc<Params>
  >(
    pageFunction: Func | string,
    ...args: Params
  ): Promise<Awaited<ReturnType<Func>>> {
    return this.#evaluate(true, pageFunction, ...args);
  }

  async #evaluate<
    Params extends unknown[],
    Func extends EvaluateFunc<Params> = EvaluateFunc<Params>
  >(
    returnByValue: true,
    pageFunction: Func | string,
    ...args: Params
  ): Promise<Awaited<ReturnType<Func>>>;
  async #evaluate<
    Params extends unknown[],
    Func extends EvaluateFunc<Params> = EvaluateFunc<Params>
  >(
    returnByValue: false,
    pageFunction: Func | string,
    ...args: Params
  ): Promise<HandleFor<Awaited<ReturnType<Func>>>>;
  async #evaluate<
    Params extends unknown[],
    Func extends EvaluateFunc<Params> = EvaluateFunc<Params>
  >(
    returnByValue: boolean,
    pageFunction: Func | string,
    ...args: Params
  ): Promise<HandleFor<Awaited<ReturnType<Func>>> | Awaited<ReturnType<Func>>> {
    let responsePromise;
    const resultOwnership = returnByValue ? 'none' : 'root';
    if (isString(pageFunction)) {
      responsePromise = this.#connection.send('script.evaluate', {
        expression: pageFunction,
        target: {context: this._contextId},
        resultOwnership,
        awaitPromise: true,
      });
    } else {
      responsePromise = this.#connection.send('script.callFunction', {
        functionDeclaration: stringifyFunction(pageFunction),
        arguments: await Promise.all(
          args.map(arg => {
            return BidiSerializer.serialize(arg, this);
          })
        ),
        target: {context: this._contextId},
        resultOwnership,
        awaitPromise: true,
      });
    }

    const {result} = await responsePromise;

    if ('type' in result && result.type === 'exception') {
      throw new Error(result.exceptionDetails.text);
    }

    return returnByValue
      ? BidiSerializer.deserialize(result.result)
      : getBidiHandle(this, result.result);
  }
}

/**
 * @internal
 */
export function getBidiHandle(
  context: Context,
  result: Bidi.CommonDataTypes.RemoteValue
): JSHandle | ElementHandle<Node> {
  if (result.type === 'node' || result.type === 'window') {
    return new ElementHandle(context, result);
  }
  return new JSHandle(context, result);
}