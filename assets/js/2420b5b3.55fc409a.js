/*! For license information please see 2420b5b3.55fc409a.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[19041],{50787:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var r=i(74848),n=i(28453);const s={sidebar_label:"WaitForOptions"},o="WaitForOptions interface",l={id:"api/puppeteer.waitforoptions",title:"WaitForOptions interface",description:"Signature",source:"@site/versioned_docs/version-23.6.0/api/puppeteer.waitforoptions.md",sourceDirName:"api",slug:"/api/puppeteer.waitforoptions",permalink:"/api/puppeteer.waitforoptions",draft:!1,unlisted:!1,tags:[],version:"23.6.0",frontMatter:{sidebar_label:"WaitForOptions"},sidebar:"api",previous:{title:"WaitForNetworkIdleOptions",permalink:"/api/puppeteer.waitfornetworkidleoptions"},next:{title:"WaitForSelectorOptions",permalink:"/api/puppeteer.waitforselectoroptions"}},a={},c=[{value:"Signature",id:"signature",level:3},{value:"Properties",id:"properties",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"waitforoptions-interface",children:"WaitForOptions interface"})}),"\n",(0,r.jsx)(t.h3,{id:"signature",children:"Signature"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"export interface WaitForOptions\n"})}),"\n",(0,r.jsx)(t.h2,{id:"properties",children:"Properties"}),"\n",(0,r.jsxs)("table",{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:(0,r.jsx)(t.p,{children:"Property"})}),(0,r.jsx)("th",{children:(0,r.jsx)(t.p,{children:"Modifiers"})}),(0,r.jsx)("th",{children:(0,r.jsx)(t.p,{children:"Type"})}),(0,r.jsx)("th",{children:(0,r.jsx)(t.p,{children:"Description"})}),(0,r.jsx)("th",{children:(0,r.jsx)(t.p,{children:"Default"})})]})}),(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("span",{id:"signal",children:"signal"})}),(0,r.jsx)("td",{children:(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:"optional"})})}),(0,r.jsx)("td",{children:(0,r.jsx)(t.p,{children:"AbortSignal"})}),(0,r.jsx)("td",{children:(0,r.jsx)(t.p,{children:"A signal object that allows you to cancel the call."})}),(0,r.jsx)("td",{})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("span",{id:"timeout",children:"timeout"})}),(0,r.jsx)("td",{children:(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:"optional"})})}),(0,r.jsx)("td",{children:(0,r.jsx)(t.p,{children:"number"})}),(0,r.jsxs)("td",{children:[(0,r.jsx)(t.p,{children:"Maximum wait time in milliseconds. Pass 0 to disable the timeout."}),(0,r.jsxs)(t.p,{children:["The default value can be changed by using the ",(0,r.jsx)(t.a,{href:"/api/puppeteer.page.setdefaulttimeout",children:"Page.setDefaultTimeout()"})," or ",(0,r.jsx)(t.a,{href:"/api/puppeteer.page.setdefaultnavigationtimeout",children:"Page.setDefaultNavigationTimeout()"})," methods."]})]}),(0,r.jsx)("td",{children:(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:"30000"})})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("span",{id:"waituntil",children:"waitUntil"})}),(0,r.jsx)("td",{children:(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:"optional"})})}),(0,r.jsx)("td",{children:(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/api/puppeteer.puppeteerlifecycleevent",children:"PuppeteerLifeCycleEvent"})," | ",(0,r.jsx)(t.a,{href:"/api/puppeteer.puppeteerlifecycleevent",children:"PuppeteerLifeCycleEvent"}),"[]"]})}),(0,r.jsx)("td",{children:(0,r.jsx)(t.p,{children:"When to consider waiting succeeds. Given an array of event strings, waiting is considered to be successful after all events have been fired."})}),(0,r.jsx)("td",{children:(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:"'load'"})})})]})]})]})]})}function p(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},21020:(e,t,i)=>{var r=i(96540),n=Symbol.for("react.element"),s=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,i){var r,s={},c=null,d=null;for(r in void 0!==i&&(c=""+i),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(d=t.ref),t)o.call(t,r)&&!a.hasOwnProperty(r)&&(s[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===s[r]&&(s[r]=t[r]);return{$$typeof:n,type:e,key:c,ref:d,props:s,_owner:l.current}}t.Fragment=s,t.jsx=c,t.jsxs=c},74848:(e,t,i)=>{e.exports=i(21020)},28453:(e,t,i)=>{i.d(t,{R:()=>o,x:()=>l});var r=i(96540);const n={},s=r.createContext(n);function o(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);