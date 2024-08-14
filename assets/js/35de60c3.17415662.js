/*! For license information please see 35de60c3.17415662.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[92030],{76928:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>l,frontMatter:()=>i,metadata:()=>p,toc:()=>u});var t=r(85893),o=r(11151);const i={},s="Running Puppeteer in Chrome extensions",p={id:"guides/running-puppeteer-in-extensions",title:"Running Puppeteer in Chrome extensions",description:"Chrome extensions environment is significantly different from the usual Node.JS environment, therefore, the support for running Puppeteer in chrome.debugger",source:"@site/../docs/guides/running-puppeteer-in-extensions.md",sourceDirName:"guides",slug:"/guides/running-puppeteer-in-extensions",permalink:"/next/guides/running-puppeteer-in-extensions",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Running Puppeteer in the browser",permalink:"/next/guides/running-puppeteer-in-the-browser"},next:{title:"Integrations",permalink:"/next/category/integrations"}},a={},u=[{value:"How to run Puppeteer in the browser",id:"how-to-run-puppeteer-in-the-browser",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"running-puppeteer-in-chrome-extensions",children:"Running Puppeteer in Chrome extensions"}),"\n",(0,t.jsx)(n.admonition,{type:"caution",children:(0,t.jsxs)(n.p,{children:["Chrome extensions environment is significantly different from the usual Node.JS environment, therefore, the support for running Puppeteer in chrome.debugger\nis currently experimental. Please submit issues ",(0,t.jsx)(n.a,{href:"https://github.com/puppeteer/puppeteer/issues/new/choose",children:"https://github.com/puppeteer/puppeteer/issues/new/choose"})," if you encounted bugs."]})}),"\n",(0,t.jsxs)(n.p,{children:["Chrome Extensions allow accessing Chrome DevTools Protocol via ",(0,t.jsx)(n.a,{href:"https://developer.chrome.com/docs/extensions/reference/api/debugger",children:(0,t.jsx)(n.code,{children:"chrome.debugger"})}),".\n",(0,t.jsx)(n.a,{href:"https://developer.chrome.com/docs/extensions/reference/api/debugger",children:(0,t.jsx)(n.code,{children:"chrome.debugger"})})," provides a restricted access to CDP and allows attaching to one\npage at a time. Therefore, Puppeteer requires a different transport to be used and Puppeteer's view is limited to a single page. It means you can\ninteract with a single page and its frames and workers but cannot create new pages using Puppeteer. To create a new page you need to use the\n",(0,t.jsx)(n.a,{href:"https://developer.chrome.com/docs/extensions/reference/api/tabs",children:(0,t.jsx)(n.code,{children:"chrome.tabs"})})," API and establish a new Puppeteer connection."]}),"\n",(0,t.jsx)(n.h2,{id:"how-to-run-puppeteer-in-the-browser",children:"How to run Puppeteer in the browser"}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["See ",(0,t.jsx)(n.a,{href:"https://github.com/puppeteer/puppeteer/tree/main/examples/puppeteer-in-extension",children:"https://github.com/puppeteer/puppeteer/tree/main/examples/puppeteer-in-extension"})," for a complete example."]})}),"\n",(0,t.jsx)(n.p,{children:"To run Puppeteer in an extension, first you need to produce a browser-compatible build using a bundler such as rollup or webpack:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["When importing Puppeteer use the browser-specific entrypoint from puppeteer-core ",(0,t.jsx)(n.code,{children:"puppeteer-core/lib/esm/puppeteer/puppeteer-core-browser.js'"}),":"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"import {\n  connect,\n  ExtensionTransport,\n} from 'puppeteer-core/lib/esm/puppeteer/puppeteer-core-browser.js';\n\n// Create a tab or find a tab to attach to.\nconst tab = await chrome.tabs.create({\n  url,\n});\n// Connect Puppeteer using the ExtensionTransport.connectTab.\nconst browser = await connect({\n  transport: await ExtensionTransport.connectTab(tab.id),\n});\n// You will have a single page on the browser object, which corresponds\n// to the tab you connected the transport to.\nconst [page] = await browser.pages();\n// Perform the usual operations with Puppeteer page.\nconsole.log(await page.evaluate('document.title'));\nbrowser.disconnect();\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsx)(n.li,{children:"Build your extension using a bundler. For example, the following configuration can be used with rollup:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"import {nodeResolve} from '@rollup/plugin-node-resolve';\n\nexport default {\n  input: 'main.mjs',\n  output: {\n    format: 'esm',\n    dir: 'out',\n  },\n  // If you do not need to use WebDriver BiDi protocol,\n  // exclude chromium-bidi/lib/cjs/bidiMapper/BidiMapper.js to minimize the bundle size.\n  external: ['chromium-bidi/lib/cjs/bidiMapper/BidiMapper.js'],\n  plugins: [\n    nodeResolve({\n      // Indicate that we target a browser environment.\n      browser: true,\n      // Exclude any dependencies except for puppeteer-core.\n      // `npm install puppeteer-core` # To install puppeteer-core if needed.\n      resolveOnly: ['puppeteer-core'],\n    }),\n  ],\n};\n"})})]})}function l(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},75251:(e,n,r)=>{var t=r(67294),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,p=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function u(e,n,r){var t,i={},u=null,c=null;for(t in void 0!==r&&(u=""+r),void 0!==n.key&&(u=""+n.key),void 0!==n.ref&&(c=n.ref),n)s.call(n,t)&&!a.hasOwnProperty(t)&&(i[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===i[t]&&(i[t]=n[t]);return{$$typeof:o,type:e,key:u,ref:c,props:i,_owner:p.current}}n.Fragment=i,n.jsx=u,n.jsxs=u},85893:(e,n,r)=>{e.exports=r(75251)},11151:(e,n,r)=>{r.d(n,{Z:()=>p,a:()=>s});var t=r(67294);const o={},i=t.createContext(o);function s(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function p(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);