/*! For license information please see 7c2a5266.54c1afe6.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[89155],{80086:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var o=n(85893),r=n(11151);const i={sidebar_label:"Page.emulateNetworkConditions"},s="Page.emulateNetworkConditions() method",a={id:"api/puppeteer.page.emulatenetworkconditions",title:"Page.emulateNetworkConditions() method",description:"This does not affect WebSockets and WebRTC PeerConnections (see https://crbug.com/563644). To set the page offline, you can use Page.setOfflineMode().",source:"@site/versioned_docs/version-22.4.0/api/puppeteer.page.emulatenetworkconditions.md",sourceDirName:"api",slug:"/api/puppeteer.page.emulatenetworkconditions",permalink:"/api/puppeteer.page.emulatenetworkconditions",draft:!1,unlisted:!1,tags:[],version:"22.4.0",frontMatter:{sidebar_label:"Page.emulateNetworkConditions"},sidebar:"api",previous:{title:"Page.emulateMediaType",permalink:"/api/puppeteer.page.emulatemediatype"},next:{title:"Page.emulateTimezone",permalink:"/api/puppeteer.page.emulatetimezone"}},d={},l=[{value:"Signature:",id:"signature",level:4},{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2}];function p(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"pageemulatenetworkconditions-method",children:"Page.emulateNetworkConditions() method"}),"\n",(0,o.jsxs)(t.p,{children:["This does not affect WebSockets and WebRTC PeerConnections (see ",(0,o.jsx)(t.a,{href:"https://crbug.com/563644",children:"https://crbug.com/563644"}),"). To set the page offline, you can use ",(0,o.jsx)(t.a,{href:"/api/puppeteer.page.setofflinemode",children:"Page.setOfflineMode()"}),"."]}),"\n",(0,o.jsxs)(t.p,{children:["A list of predefined network conditions can be used by importing ",(0,o.jsx)(t.a,{href:"/api/puppeteer.predefinednetworkconditions",children:"PredefinedNetworkConditions"}),"."]}),"\n",(0,o.jsx)(t.h4,{id:"signature",children:"Signature:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-typescript",children:"class Page {\n  abstract emulateNetworkConditions(\n    networkConditions: NetworkConditions | null\n  ): Promise<void>;\n}\n"})}),"\n",(0,o.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{children:"Parameter"}),(0,o.jsx)(t.th,{children:"Type"}),(0,o.jsx)(t.th,{children:"Description"})]})}),(0,o.jsx)(t.tbody,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"networkConditions"}),(0,o.jsxs)(t.td,{children:[(0,o.jsx)(t.a,{href:"/api/puppeteer.networkconditions",children:"NetworkConditions"})," | null"]}),(0,o.jsxs)(t.td,{children:["Passing ",(0,o.jsx)("code",{children:"null"})," disables network condition emulation."]})]})})]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"Returns:"})}),"\n",(0,o.jsx)(t.p,{children:"Promise<void>"}),"\n",(0,o.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-ts",children:"import {PredefinedNetworkConditions} from 'puppeteer';\nconst slow3G = PredefinedNetworkConditions['Slow 3G'];\n\n(async () => {\n  const browser = await puppeteer.launch();\n  const page = await browser.newPage();\n  await page.emulateNetworkConditions(slow3G);\n  await page.goto('https://www.google.com');\n  // other actions...\n  await browser.close();\n})();\n"})})]})}function c(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},75251:(e,t,n)=>{var o=n(67294),r=Symbol.for("react.element"),i=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var o,i={},l=null,p=null;for(o in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(p=t.ref),t)s.call(t,o)&&!d.hasOwnProperty(o)&&(i[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps)void 0===i[o]&&(i[o]=t[o]);return{$$typeof:r,type:e,key:l,ref:p,props:i,_owner:a.current}}t.Fragment=i,t.jsx=l,t.jsxs=l},85893:(e,t,n)=>{e.exports=n(75251)},11151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>s});var o=n(67294);const r={},i=o.createContext(r);function s(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);