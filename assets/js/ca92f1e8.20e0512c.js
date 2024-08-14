/*! For license information please see ca92f1e8.20e0512c.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[82857],{23024:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var r=i(85893),n=i(11151);const s={sidebar_label:"WaitForOptions"},o="WaitForOptions interface",l={id:"api/puppeteer.waitforoptions",title:"WaitForOptions interface",description:"Signature",source:"@site/versioned_docs/version-23.0.2/api/puppeteer.waitforoptions.md",sourceDirName:"api",slug:"/api/puppeteer.waitforoptions",permalink:"/api/puppeteer.waitforoptions",draft:!1,unlisted:!1,tags:[],version:"23.0.2",frontMatter:{sidebar_label:"WaitForOptions"},sidebar:"api",previous:{title:"WaitForNetworkIdleOptions",permalink:"/api/puppeteer.waitfornetworkidleoptions"},next:{title:"WaitForSelectorOptions",permalink:"/api/puppeteer.waitforselectoroptions"}},a={},p=[{value:"Signature",id:"signature",level:3},{value:"Properties",id:"properties",level:2}];function c(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,n.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"waitforoptions-interface",children:"WaitForOptions interface"}),"\n",(0,r.jsx)(t.h3,{id:"signature",children:"Signature"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"export interface WaitForOptions\n"})}),"\n",(0,r.jsx)(t.h2,{id:"properties",children:"Properties"}),"\n",(0,r.jsxs)("table",{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:(0,r.jsx)(t.p,{children:"Property"})}),(0,r.jsx)("th",{children:(0,r.jsx)(t.p,{children:"Modifiers"})}),(0,r.jsx)("th",{children:(0,r.jsx)(t.p,{children:"Type"})}),(0,r.jsx)("th",{children:(0,r.jsx)(t.p,{children:"Description"})}),(0,r.jsx)("th",{children:(0,r.jsx)(t.p,{children:"Default"})})]})}),(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("span",{id:"signal",children:"signal"})}),(0,r.jsx)("td",{children:(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:"optional"})})}),(0,r.jsx)("td",{children:(0,r.jsx)(t.p,{children:"AbortSignal"})}),(0,r.jsx)("td",{children:(0,r.jsx)(t.p,{children:"A signal object that allows you to cancel the call."})}),(0,r.jsx)("td",{})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("span",{id:"timeout",children:"timeout"})}),(0,r.jsx)("td",{children:(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:"optional"})})}),(0,r.jsx)("td",{children:(0,r.jsx)(t.p,{children:"number"})}),(0,r.jsxs)("td",{children:[(0,r.jsx)(t.p,{children:"Maximum wait time in milliseconds. Pass 0 to disable the timeout."}),(0,r.jsxs)(t.p,{children:["The default value can be changed by using the ",(0,r.jsx)(t.a,{href:"/api/puppeteer.page.setdefaulttimeout",children:"Page.setDefaultTimeout()"})," or ",(0,r.jsx)(t.a,{href:"/api/puppeteer.page.setdefaultnavigationtimeout",children:"Page.setDefaultNavigationTimeout()"})," methods."]})]}),(0,r.jsx)("td",{children:(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:"30000"})})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("span",{id:"waituntil",children:"waitUntil"})}),(0,r.jsx)("td",{children:(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:"optional"})})}),(0,r.jsx)("td",{children:(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/api/puppeteer.puppeteerlifecycleevent",children:"PuppeteerLifeCycleEvent"})," | ",(0,r.jsx)(t.a,{href:"/api/puppeteer.puppeteerlifecycleevent",children:"PuppeteerLifeCycleEvent"}),"[]"]})}),(0,r.jsx)("td",{children:(0,r.jsx)(t.p,{children:"When to consider waiting succeeds. Given an array of event strings, waiting is considered to be successful after all events have been fired."})}),(0,r.jsx)("td",{children:(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:"'load'"})})})]})]})]})]})}function d(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},75251:(e,t,i)=>{var r=i(67294),n=Symbol.for("react.element"),s=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function p(e,t,i){var r,s={},p=null,c=null;for(r in void 0!==i&&(p=""+i),void 0!==t.key&&(p=""+t.key),void 0!==t.ref&&(c=t.ref),t)o.call(t,r)&&!a.hasOwnProperty(r)&&(s[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===s[r]&&(s[r]=t[r]);return{$$typeof:n,type:e,key:p,ref:c,props:s,_owner:l.current}}t.Fragment=s,t.jsx=p,t.jsxs=p},85893:(e,t,i)=>{e.exports=i(75251)},11151:(e,t,i)=>{i.d(t,{Z:()=>l,a:()=>o});var r=i(67294);const n={},s=r.createContext(n);function o(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);