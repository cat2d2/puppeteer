/*! For license information please see df98a9cd.69374fbc.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[82330],{67608:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>a,contentTitle:()=>o,default:()=>l,frontMatter:()=>i,metadata:()=>d,toc:()=>p});var n=s(85893),t=s(11151);const i={sidebar_label:"Keyboard.press"},o="Keyboard.press() method",d={id:"api/puppeteer.keyboard.press",title:"Keyboard.press() method",description:"Shortcut for Keyboard.down() and Keyboard.up().",source:"@site/versioned_docs/version-22.13.1/api/puppeteer.keyboard.press.md",sourceDirName:"api",slug:"/api/puppeteer.keyboard.press",permalink:"/api/puppeteer.keyboard.press",draft:!1,unlisted:!1,tags:[],version:"22.13.1",frontMatter:{sidebar_label:"Keyboard.press"},sidebar:"api",previous:{title:"Keyboard.down",permalink:"/api/puppeteer.keyboard.down"},next:{title:"Keyboard.sendCharacter",permalink:"/api/puppeteer.keyboard.sendcharacter"}},a={},p=[{value:"Signature:",id:"signature",level:4},{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2}];function c(e){const r={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h4:"h4",p:"p",pre:"pre",strong:"strong",...(0,t.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:"keyboardpress-method",children:"Keyboard.press() method"}),"\n",(0,n.jsxs)(r.p,{children:["Shortcut for ",(0,n.jsx)(r.a,{href:"/api/puppeteer.keyboard.down",children:"Keyboard.down()"})," and ",(0,n.jsx)(r.a,{href:"/api/puppeteer.keyboard.up",children:"Keyboard.up()"}),"."]}),"\n",(0,n.jsx)(r.h4,{id:"signature",children:"Signature:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"class Keyboard {\n  abstract press(\n    key: KeyInput,\n    options?: Readonly<KeyPressOptions>\n  ): Promise<void>;\n}\n"})}),"\n",(0,n.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)("table",{children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:(0,n.jsx)(r.p,{children:"Parameter"})}),(0,n.jsx)("th",{children:(0,n.jsx)(r.p,{children:"Type"})}),(0,n.jsx)("th",{children:(0,n.jsx)(r.p,{children:"Description"})})]})}),(0,n.jsxs)("tbody",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(r.p,{children:"key"})}),(0,n.jsx)("td",{children:(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"/api/puppeteer.keyinput",children:"KeyInput"})})}),(0,n.jsx)("td",{children:(0,n.jsxs)(r.p,{children:["Name of key to press, such as ",(0,n.jsx)(r.code,{children:"ArrowLeft"}),". See ",(0,n.jsx)(r.a,{href:"/api/puppeteer.keyinput",children:"KeyInput"})," for a list of all key names."]})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(r.p,{children:"options"})}),(0,n.jsx)("td",{children:(0,n.jsxs)(r.p,{children:["Readonly<",(0,n.jsx)(r.a,{href:"/api/puppeteer.keypressoptions",children:"KeyPressOptions"}),">"]})}),(0,n.jsx)("td",{children:(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.em,{children:"(Optional)"})," An object of options. Accepts text which, if specified, generates an input event with this text. Accepts delay which, if specified, is the time to wait between ",(0,n.jsx)(r.code,{children:"keydown"})," and ",(0,n.jsx)(r.code,{children:"keyup"})," in milliseconds. Defaults to 0. Accepts commands which, if specified, is the commands of keyboard shortcuts, see ",(0,n.jsx)(r.a,{href:"https://source.chromium.org/chromium/chromium/src/+/main:third_party/blink/renderer/core/editing/commands/editor_command_names.h",children:"Chromium Source Code"})," for valid command names."]})})]})]})]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Returns:"})}),"\n",(0,n.jsx)(r.p,{children:"Promise<void>"}),"\n",(0,n.jsx)(r.h2,{id:"remarks",children:"Remarks"}),"\n",(0,n.jsxs)(r.p,{children:["If ",(0,n.jsx)(r.code,{children:"key"})," is a single character and no modifier keys besides ",(0,n.jsx)(r.code,{children:"Shift"})," are being held down, a ",(0,n.jsx)(r.code,{children:"keypress"}),"/",(0,n.jsx)(r.code,{children:"input"})," event will also generated. The ",(0,n.jsx)(r.code,{children:"text"})," option can be specified to force an input event to be generated."]}),"\n",(0,n.jsxs)(r.p,{children:["Modifier keys DO effect ",(0,n.jsx)(r.a,{href:"/api/puppeteer.keyboard.press",children:"Keyboard.press()"}),". Holding down ",(0,n.jsx)(r.code,{children:"Shift"})," will type the text in upper case."]})]})}function l(e={}){const{wrapper:r}={...(0,t.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},75251:(e,r,s)=>{var n=s(67294),t=Symbol.for("react.element"),i=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,d=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function p(e,r,s){var n,i={},p=null,c=null;for(n in void 0!==s&&(p=""+s),void 0!==r.key&&(p=""+r.key),void 0!==r.ref&&(c=r.ref),r)o.call(r,n)&&!a.hasOwnProperty(n)&&(i[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===i[n]&&(i[n]=r[n]);return{$$typeof:t,type:e,key:p,ref:c,props:i,_owner:d.current}}r.Fragment=i,r.jsx=p,r.jsxs=p},85893:(e,r,s)=>{e.exports=s(75251)},11151:(e,r,s)=>{s.d(r,{Z:()=>d,a:()=>o});var n=s(67294);const t={},i=n.createContext(t);function o(e){const r=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),n.createElement(i.Provider,{value:r},e.children)}}}]);