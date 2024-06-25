/*! For license information please see 3da5423d.bfdfa2a3.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[16084],{78393:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>n,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var s=t(85893),a=t(11151);const o={sidebar_label:"Page.locator"},n="Page.locator() method",i={id:"api/puppeteer.page.locator",title:"Page.locator() method",description:"Creates a locator for the provided selector. See Locator for details and supported actions.",source:"@site/versioned_docs/version-22.12.0/api/puppeteer.page.locator.md",sourceDirName:"api",slug:"/api/puppeteer.page.locator",permalink:"/api/puppeteer.page.locator",draft:!1,unlisted:!1,tags:[],version:"22.12.0",frontMatter:{sidebar_label:"Page.locator"},sidebar:"api",previous:{title:"Page.isServiceWorkerBypassed",permalink:"/api/puppeteer.page.isserviceworkerbypassed"},next:{title:"Page.locator_1",permalink:"/api/puppeteer.page.locator_1"}},p={},c=[{value:"Signature:",id:"signature",level:4},{value:"Parameters",id:"parameters",level:2}];function l(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",h4:"h4",p:"p",pre:"pre",strong:"strong",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.h1,{id:"pagelocator-method",children:"Page.locator() method"}),"\n",(0,s.jsxs)(r.p,{children:["Creates a locator for the provided selector. See ",(0,s.jsx)(r.a,{href:"/api/puppeteer.locator",children:"Locator"})," for details and supported actions."]}),"\n",(0,s.jsx)(r.h4,{id:"signature",children:"Signature:"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-typescript",children:"class Page {\n  locator<Selector extends string>(\n    selector: Selector\n  ): Locator<NodeFor<Selector>>;\n}\n"})}),"\n",(0,s.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)("table",{children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:(0,s.jsx)(r.p,{children:"Parameter"})}),(0,s.jsx)("th",{children:(0,s.jsx)(r.p,{children:"Type"})}),(0,s.jsx)("th",{children:(0,s.jsx)(r.p,{children:"Description"})})]})}),(0,s.jsx)("tbody",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:"selector"})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:"Selector"})}),(0,s.jsx)("td",{children:(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.a,{href:"https://pptr.dev/guides/page-interactions#selectors",children:"selector"})," to query page for. ",(0,s.jsx)(r.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors",children:"CSS selectors"})," can be passed as-is and a ",(0,s.jsx)(r.a,{href:"https://pptr.dev/guides/page-interactions#non-css-selectors",children:"Puppeteer-specific selector syntax"})," allows quering by ",(0,s.jsx)(r.a,{href:"https://pptr.dev/guides/page-interactions#text-selectors--p-text",children:"text"}),", ",(0,s.jsx)(r.a,{href:"https://pptr.dev/guides/page-interactions#aria-selectors--p-aria",children:"a11y role and name"}),", and ",(0,s.jsx)(r.a,{href:"https://pptr.dev/guides/page-interactions#xpath-selectors--p-xpath",children:"xpath"})," and ",(0,s.jsx)(r.a,{href:"https://pptr.dev/guides/page-interactions#querying-elements-in-shadow-dom",children:"combining these queries across shadow roots"}),". Alternatively, you can specify the selector type using a prefix ",(0,s.jsx)(r.a,{href:"https://pptr.dev/guides/page-interactions#prefixed-selector-syntax",children:"prefix"}),"."]})})]})})]}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"Returns:"})}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.a,{href:"/api/puppeteer.locator",children:"Locator"}),"<",(0,s.jsx)(r.a,{href:"/api/puppeteer.nodefor",children:"NodeFor"}),"<Selector>>"]})]})}function d(e={}){const{wrapper:r}={...(0,a.a)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},75251:(e,r,t)=>{var s=t(67294),a=Symbol.for("react.element"),o=Symbol.for("react.fragment"),n=Object.prototype.hasOwnProperty,i=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function c(e,r,t){var s,o={},c=null,l=null;for(s in void 0!==t&&(c=""+t),void 0!==r.key&&(c=""+r.key),void 0!==r.ref&&(l=r.ref),r)n.call(r,s)&&!p.hasOwnProperty(s)&&(o[s]=r[s]);if(e&&e.defaultProps)for(s in r=e.defaultProps)void 0===o[s]&&(o[s]=r[s]);return{$$typeof:a,type:e,key:c,ref:l,props:o,_owner:i.current}}r.Fragment=o,r.jsx=c,r.jsxs=c},85893:(e,r,t)=>{e.exports=t(75251)},11151:(e,r,t)=>{t.d(r,{Z:()=>i,a:()=>n});var s=t(67294);const a={},o=s.createContext(a);function n(e){const r=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:n(e.components),s.createElement(o.Provider,{value:r},e.children)}}}]);