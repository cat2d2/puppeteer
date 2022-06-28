"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3361],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>d});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},p=Object.keys(e);for(r=0;r<p.length;r++)a=p[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)a=p[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),u=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,p=e.originalType,o=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),s=u(a),d=n,g=s["".concat(o,".").concat(d)]||s[d]||c[d]||p;return a?r.createElement(g,l(l({ref:t},m),{},{components:a})):r.createElement(g,l({ref:t},m))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=a.length,l=new Array(p);l[0]=s;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var u=2;u<p;u++)l[u]=a[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}s.displayName="MDXCreateElement"},81639:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>c,frontMatter:()=>p,metadata:()=>i,toc:()=>u});var r=a(87462),n=(a(67294),a(3905));const p={},l="Page.emulateMediaType() method",i={unversionedId:"api/puppeteer.page.emulatemediatype",id:"api/puppeteer.page.emulatemediatype",title:"Page.emulateMediaType() method",description:"Signature:",source:"@site/../docs/api/puppeteer.page.emulatemediatype.md",sourceDirName:"api",slug:"/api/puppeteer.page.emulatemediatype",permalink:"/puppeteer/api/puppeteer.page.emulatemediatype",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Page.emulateMediaFeatures() method",permalink:"/puppeteer/api/puppeteer.page.emulatemediafeatures"},next:{title:"Page.emulateNetworkConditions() method",permalink:"/puppeteer/api/puppeteer.page.emulatenetworkconditions"}},o={},u=[{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2}],m={toc:u};function c(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"pageemulatemediatype-method"},"Page.emulateMediaType() method"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Signature:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"emulateMediaType(type?: string): Promise<void>;\n")),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"type"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("i",null,"(Optional)")," Changes the CSS media type of the page. The only allowed values are ",(0,n.kt)("code",null,"screen"),", ",(0,n.kt)("code",null,"print")," and ",(0,n.kt)("code",null,"null"),". Passing ",(0,n.kt)("code",null,"null")," disables CSS media emulation.")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Returns:")),(0,n.kt)("p",null,"Promise","<","void",">"),(0,n.kt)("h2",{id:"example"},"Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"await page.evaluate(() => matchMedia('screen').matches);\n// \u2192 true\nawait page.evaluate(() => matchMedia('print').matches);\n// \u2192 false\n\nawait page.emulateMediaType('print');\nawait page.evaluate(() => matchMedia('screen').matches);\n// \u2192 false\nawait page.evaluate(() => matchMedia('print').matches);\n// \u2192 true\n\nawait page.emulateMediaType(null);\nawait page.evaluate(() => matchMedia('screen').matches);\n// \u2192 true\nawait page.evaluate(() => matchMedia('print').matches);\n// \u2192 false\n")))}c.isMDXComponent=!0}}]);