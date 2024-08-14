/*! For license information please see 4bdd460c.75a6b1a1.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[81395],{96273:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>a,contentTitle:()=>p,default:()=>f,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var n=t(85893),s=t(11151);const o={sidebar_label:"HTTPResponse.buffer"},p="HTTPResponse.buffer() method",i={id:"api/puppeteer.httpresponse.buffer",title:"HTTPResponse.buffer() method",description:"Promise which resolves to a buffer with response body.",source:"@site/../docs/api/puppeteer.httpresponse.buffer.md",sourceDirName:"api",slug:"/api/puppeteer.httpresponse.buffer",permalink:"/next/api/puppeteer.httpresponse.buffer",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{sidebar_label:"HTTPResponse.buffer"},sidebar:"api",previous:{title:"HTTPResponse",permalink:"/next/api/puppeteer.httpresponse"},next:{title:"HTTPResponse.content",permalink:"/next/api/puppeteer.httpresponse.content"}},a={},u=[{value:"Signature",id:"signature",level:3},{value:"Remarks",id:"remarks",level:2}];function c(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:"httpresponsebuffer-method",children:"HTTPResponse.buffer() method"}),"\n",(0,n.jsx)(r.p,{children:"Promise which resolves to a buffer with response body."}),"\n",(0,n.jsx)(r.h3,{id:"signature",children:"Signature"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"class HTTPResponse {\n  buffer(): Promise<Buffer>;\n}\n"})}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Returns:"})}),"\n",(0,n.jsx)(r.p,{children:"Promise<Buffer>"}),"\n",(0,n.jsx)(r.h2,{id:"remarks",children:"Remarks"}),"\n",(0,n.jsxs)(r.p,{children:["The buffer might be re-encoded by the browser based on HTTP-headers or other heuristics. If the browser failed to detect the correct encoding, the buffer might be encoded incorrectly. See ",(0,n.jsx)(r.a,{href:"https://github.com/puppeteer/puppeteer/issues/6478",children:"https://github.com/puppeteer/puppeteer/issues/6478"}),"."]})]})}function f(e={}){const{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},75251:(e,r,t)=>{var n=t(67294),s=Symbol.for("react.element"),o=Symbol.for("react.fragment"),p=Object.prototype.hasOwnProperty,i=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function u(e,r,t){var n,o={},u=null,c=null;for(n in void 0!==t&&(u=""+t),void 0!==r.key&&(u=""+r.key),void 0!==r.ref&&(c=r.ref),r)p.call(r,n)&&!a.hasOwnProperty(n)&&(o[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===o[n]&&(o[n]=r[n]);return{$$typeof:s,type:e,key:u,ref:c,props:o,_owner:i.current}}r.Fragment=o,r.jsx=u,r.jsxs=u},85893:(e,r,t)=>{e.exports=t(75251)},11151:(e,r,t)=>{t.d(r,{Z:()=>i,a:()=>p});var n=t(67294);const s={},o=n.createContext(s);function p(e){const r=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:p(e.components),n.createElement(o.Provider,{value:r},e.children)}}}]);