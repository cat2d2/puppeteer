/*! For license information please see 5e33b1f3.b4db911f.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[97123],{51333:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>i,contentTitle:()=>o,default:()=>l,frontMatter:()=>n,metadata:()=>h,toc:()=>d});var r=t(85893),c=t(11151);const n={sidebar_label:"Touchscreen"},o="Touchscreen class",h={id:"api/puppeteer.touchscreen",title:"Touchscreen class",description:"The Touchscreen class exposes touchscreen events.",source:"@site/versioned_docs/version-23.0.2/api/puppeteer.touchscreen.md",sourceDirName:"api",slug:"/api/puppeteer.touchscreen",permalink:"/api/puppeteer.touchscreen",draft:!1,unlisted:!1,tags:[],version:"23.0.2",frontMatter:{sidebar_label:"Touchscreen"},sidebar:"api",previous:{title:"Mouse.wheel",permalink:"/api/puppeteer.mouse.wheel"},next:{title:"Touchscreen.tap",permalink:"/api/puppeteer.touchscreen.tap"}},i={},d=[{value:"Signature",id:"signature",level:3},{value:"Remarks",id:"remarks",level:2},{value:"Methods",id:"methods",level:2}];function a(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,c.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h1,{id:"touchscreen-class",children:"Touchscreen class"}),"\n",(0,r.jsx)(s.p,{children:"The Touchscreen class exposes touchscreen events."}),"\n",(0,r.jsx)(s.h3,{id:"signature",children:"Signature"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-typescript",children:"export declare abstract class Touchscreen\n"})}),"\n",(0,r.jsx)(s.h2,{id:"remarks",children:"Remarks"}),"\n",(0,r.jsxs)(s.p,{children:["The constructor for this class is marked as internal. Third-party code should not call the constructor directly or create subclasses that extend the ",(0,r.jsx)(s.code,{children:"Touchscreen"})," class."]}),"\n",(0,r.jsx)(s.h2,{id:"methods",children:"Methods"}),"\n",(0,r.jsxs)("table",{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:(0,r.jsx)(s.p,{children:"Method"})}),(0,r.jsx)("th",{children:(0,r.jsx)(s.p,{children:"Modifiers"})}),(0,r.jsx)("th",{children:(0,r.jsx)(s.p,{children:"Description"})})]})}),(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("span",{id:"tap",children:(0,r.jsx)(s.a,{href:"/api/puppeteer.touchscreen.tap",children:"tap(x, y)"})})}),(0,r.jsx)("td",{}),(0,r.jsx)("td",{children:(0,r.jsxs)(s.p,{children:["Dispatches a ",(0,r.jsx)(s.code,{children:"touchstart"})," and ",(0,r.jsx)(s.code,{children:"touchend"})," event."]})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("span",{id:"touchend",children:(0,r.jsx)(s.a,{href:"/api/puppeteer.touchscreen.touchend",children:"touchEnd()"})})}),(0,r.jsx)("td",{}),(0,r.jsx)("td",{children:(0,r.jsxs)(s.p,{children:["Dispatches a ",(0,r.jsx)(s.code,{children:"touchend"})," event."]})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("span",{id:"touchmove",children:(0,r.jsx)(s.a,{href:"/api/puppeteer.touchscreen.touchmove",children:"touchMove(x, y)"})})}),(0,r.jsx)("td",{}),(0,r.jsxs)("td",{children:[(0,r.jsxs)(s.p,{children:["Dispatches a ",(0,r.jsx)(s.code,{children:"touchMove"})," event."]}),(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Remarks:"})}),(0,r.jsxs)(s.p,{children:["Not every ",(0,r.jsx)(s.code,{children:"touchMove"})," call results in a ",(0,r.jsx)(s.code,{children:"touchmove"})," event being emitted, depending on the browser's optimizations. For example, Chrome ",(0,r.jsx)(s.a,{href:"https://developer.chrome.com/blog/a-more-compatible-smoother-touch/#chromes-new-model-the-throttled-async-touchmove-model",children:"throttles"})," touch move events."]})]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("span",{id:"touchstart",children:(0,r.jsx)(s.a,{href:"/api/puppeteer.touchscreen.touchstart",children:"touchStart(x, y)"})})}),(0,r.jsx)("td",{}),(0,r.jsx)("td",{children:(0,r.jsxs)(s.p,{children:["Dispatches a ",(0,r.jsx)(s.code,{children:"touchstart"})," event."]})})]})]})]})]})}function l(e={}){const{wrapper:s}={...(0,c.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},75251:(e,s,t)=>{var r=t(67294),c=Symbol.for("react.element"),n=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,h=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function d(e,s,t){var r,n={},d=null,a=null;for(r in void 0!==t&&(d=""+t),void 0!==s.key&&(d=""+s.key),void 0!==s.ref&&(a=s.ref),s)o.call(s,r)&&!i.hasOwnProperty(r)&&(n[r]=s[r]);if(e&&e.defaultProps)for(r in s=e.defaultProps)void 0===n[r]&&(n[r]=s[r]);return{$$typeof:c,type:e,key:d,ref:a,props:n,_owner:h.current}}s.Fragment=n,s.jsx=d,s.jsxs=d},85893:(e,s,t)=>{e.exports=t(75251)},11151:(e,s,t)=>{t.d(s,{Z:()=>h,a:()=>o});var r=t(67294);const c={},n=r.createContext(c);function o(e){const s=r.useContext(n);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function h(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:o(e.components),r.createElement(n.Provider,{value:s},e.children)}}}]);