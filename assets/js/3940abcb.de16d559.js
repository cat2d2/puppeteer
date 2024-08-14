/*! For license information please see 3940abcb.de16d559.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[20969],{26092:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>t,default:()=>p,frontMatter:()=>d,metadata:()=>c,toc:()=>h});var s=n(85893),i=n(11151);const d={sidebar_label:"LaunchOptions"},t="LaunchOptions interface",c={id:"api/puppeteer.launchoptions",title:"LaunchOptions interface",description:"Generic launch options that can be passed when launching any browser.",source:"@site/../docs/api/puppeteer.launchoptions.md",sourceDirName:"api",slug:"/api/puppeteer.launchoptions",permalink:"/next/api/puppeteer.launchoptions",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{sidebar_label:"LaunchOptions"},sidebar:"api",previous:{title:"launch",permalink:"/next/api/puppeteer.launch"},next:{title:"LocatorClickOptions",permalink:"/next/api/puppeteer.locatorclickoptions"}},l={},h=[{value:"Signature",id:"signature",level:3},{value:"Properties",id:"properties",level:2}];function o(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.h1,{id:"launchoptions-interface",children:"LaunchOptions interface"}),"\n",(0,s.jsx)(r.p,{children:"Generic launch options that can be passed when launching any browser."}),"\n",(0,s.jsx)(r.h3,{id:"signature",children:"Signature"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-typescript",children:"export interface LaunchOptions\n"})}),"\n",(0,s.jsx)(r.h2,{id:"properties",children:"Properties"}),"\n",(0,s.jsxs)("table",{children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:(0,s.jsx)(r.p,{children:"Property"})}),(0,s.jsx)("th",{children:(0,s.jsx)(r.p,{children:"Modifiers"})}),(0,s.jsx)("th",{children:(0,s.jsx)(r.p,{children:"Type"})}),(0,s.jsx)("th",{children:(0,s.jsx)(r.p,{children:"Description"})}),(0,s.jsx)("th",{children:(0,s.jsx)(r.p,{children:"Default"})})]})}),(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"browser",children:"browser"})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:(0,s.jsx)(r.code,{children:"optional"})})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/next/api/puppeteer.supportedbrowser",children:"SupportedBrowser"})})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:"Which browser to launch."})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:(0,s.jsx)(r.code,{children:"chrome"})})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"channel",children:"channel"})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:(0,s.jsx)(r.code,{children:"optional"})})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/next/api/puppeteer.chromereleasechannel",children:"ChromeReleaseChannel"})})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:"Chrome Release Channel"})}),(0,s.jsx)("td",{})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"dumpio",children:"dumpio"})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:(0,s.jsx)(r.code,{children:"optional"})})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:"boolean"})}),(0,s.jsx)("td",{children:(0,s.jsxs)(r.p,{children:["If true, pipes the browser process stdout and stderr to ",(0,s.jsx)(r.code,{children:"process.stdout"})," and ",(0,s.jsx)(r.code,{children:"process.stderr"}),"."]})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:(0,s.jsx)(r.code,{children:"false"})})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"env",children:"env"})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:(0,s.jsx)(r.code,{children:"optional"})})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:"Record<string, string | undefined>"})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:"Specify environment variables that will be visible to the browser."})}),(0,s.jsx)("td",{children:(0,s.jsxs)(r.p,{children:["The contents of ",(0,s.jsx)(r.code,{children:"process.env"}),"."]})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"executablepath",children:"executablePath"})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:(0,s.jsx)(r.code,{children:"optional"})})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:"string"})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:"Path to a browser executable to use instead of the bundled Chromium. Note that Puppeteer is only guaranteed to work with the bundled Chromium, so use this setting at your own risk."})}),(0,s.jsx)("td",{})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"extraprefsfirefox",children:"extraPrefsFirefox"})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:(0,s.jsx)(r.code,{children:"optional"})})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:"Record<string, unknown>"})}),(0,s.jsx)("td",{children:(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.a,{href:"https://searchfox.org/mozilla-release/source/modules/libpref/init/all.js",children:"Additional preferences"})," that can be passed when launching with Firefox."]})}),(0,s.jsx)("td",{})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"handlesighup",children:"handleSIGHUP"})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:(0,s.jsx)(r.code,{children:"optional"})})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:"boolean"})}),(0,s.jsx)("td",{children:(0,s.jsxs)(r.p,{children:["Close the browser process on ",(0,s.jsx)(r.code,{children:"SIGHUP"}),"."]})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:(0,s.jsx)(r.code,{children:"true"})})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"handlesigint",children:"handleSIGINT"})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:(0,s.jsx)(r.code,{children:"optional"})})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:"boolean"})}),(0,s.jsx)("td",{children:(0,s.jsxs)(r.p,{children:["Close the browser process on ",(0,s.jsx)(r.code,{children:"Ctrl+C"}),"."]})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:(0,s.jsx)(r.code,{children:"true"})})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"handlesigterm",children:"handleSIGTERM"})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:(0,s.jsx)(r.code,{children:"optional"})})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:"boolean"})}),(0,s.jsx)("td",{children:(0,s.jsxs)(r.p,{children:["Close the browser process on ",(0,s.jsx)(r.code,{children:"SIGTERM"}),"."]})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:(0,s.jsx)(r.code,{children:"true"})})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"ignoredefaultargs",children:"ignoreDefaultArgs"})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:(0,s.jsx)(r.code,{children:"optional"})})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:"boolean | string[]"})}),(0,s.jsx)("td",{children:(0,s.jsxs)(r.p,{children:["If ",(0,s.jsx)(r.code,{children:"true"}),", do not use ",(0,s.jsx)(r.code,{children:"puppeteer.defaultArgs()"})," when creating a browser. If an array is provided, these args will be filtered out. Use this with care - you probably want the default arguments Puppeteer uses."]})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:(0,s.jsx)(r.code,{children:"false"})})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"pipe",children:"pipe"})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:(0,s.jsx)(r.code,{children:"optional"})})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:"boolean"})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:"Connect to a browser over a pipe instead of a WebSocket. Only supported with Chrome."})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:(0,s.jsx)(r.code,{children:"false"})})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"timeout",children:"timeout"})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:(0,s.jsx)(r.code,{children:"optional"})})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:"number"})}),(0,s.jsx)("td",{children:(0,s.jsxs)(r.p,{children:["Maximum time in milliseconds to wait for the browser to start. Pass ",(0,s.jsx)(r.code,{children:"0"})," to disable the timeout."]})}),(0,s.jsx)("td",{children:(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.code,{children:"30_000"})," (30 seconds)."]})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"waitforinitialpage",children:"waitForInitialPage"})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:(0,s.jsx)(r.code,{children:"optional"})})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:"boolean"})}),(0,s.jsx)("td",{children:(0,s.jsxs)(r.p,{children:["Whether to wait for the initial page to be ready. Useful when a user explicitly disables that (e.g. ",(0,s.jsx)(r.code,{children:"--no-startup-window"})," for Chrome)."]})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:(0,s.jsx)(r.code,{children:"true"})})})]})]})]})]})}function p(e={}){const{wrapper:r}={...(0,i.a)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},75251:(e,r,n)=>{var s=n(67294),i=Symbol.for("react.element"),d=Symbol.for("react.fragment"),t=Object.prototype.hasOwnProperty,c=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function h(e,r,n){var s,d={},h=null,o=null;for(s in void 0!==n&&(h=""+n),void 0!==r.key&&(h=""+r.key),void 0!==r.ref&&(o=r.ref),r)t.call(r,s)&&!l.hasOwnProperty(s)&&(d[s]=r[s]);if(e&&e.defaultProps)for(s in r=e.defaultProps)void 0===d[s]&&(d[s]=r[s]);return{$$typeof:i,type:e,key:h,ref:o,props:d,_owner:c.current}}r.Fragment=d,r.jsx=h,r.jsxs=h},85893:(e,r,n)=>{e.exports=n(75251)},11151:(e,r,n)=>{n.d(r,{Z:()=>c,a:()=>t});var s=n(67294);const i={},d=s.createContext(i);function t(e){const r=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),s.createElement(d.Provider,{value:r},e.children)}}}]);