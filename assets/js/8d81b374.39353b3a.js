"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[91568],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,p=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=s(r),h=a,d=m["".concat(l,".").concat(h)]||m[h]||u[h]||p;return r?n.createElement(d,o(o({ref:t},c),{},{components:r})):n.createElement(d,o({ref:t},c))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=r.length,o=new Array(p);o[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<p;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},71307:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>p,metadata:()=>i,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const p={},o="Page.screenshot() method",i={unversionedId:"api/puppeteer.page.screenshot",id:"api/puppeteer.page.screenshot",title:"Page.screenshot() method",description:"Signature:",source:"@site/../docs/api/puppeteer.page.screenshot.md",sourceDirName:"api",slug:"/api/puppeteer.page.screenshot",permalink:"/puppeteer/api/puppeteer.page.screenshot",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Page.reload() method",permalink:"/puppeteer/api/puppeteer.page.reload"},next:{title:"Page.select() method",permalink:"/puppeteer/api/puppeteer.page.select"}},l={},s=[{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2}],c={toc:s};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"pagescreenshot-method"},"Page.screenshot() method"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Signature:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"screenshot(options?: ScreenshotOptions): Promise<Buffer | string>;\n")),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"options"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/puppeteer/api/puppeteer.screenshotoptions"},"ScreenshotOptions")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("i",null,"(Optional)"))))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns:")),(0,a.kt)("p",null,"Promise","<","Buffer ","|"," string",">"),(0,a.kt)("p",null,"Promise which resolves to buffer or a base64 string (depending on the value of ",(0,a.kt)("inlineCode",{parentName:"p"},"encoding"),") with captured screenshot."),(0,a.kt)("h2",{id:"remarks"},"Remarks"),(0,a.kt)("p",null,"Options object which might have the following properties:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"path")," : The file path to save the image to. The screenshot type will be inferred from file extension. If ",(0,a.kt)("inlineCode",{parentName:"p"},"path")," is a relative path, then it is resolved relative to ",(0,a.kt)("a",{parentName:"p",href:"https://nodejs.org/api/process.html#process_process_cwd"},"current working directory"),". If no path is provided, the image won't be saved to the disk.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"type")," : Specify screenshot type, can be either ",(0,a.kt)("inlineCode",{parentName:"p"},"jpeg")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"png"),". Defaults to 'png'.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"quality")," : The quality of the image, between 0-100. Not applicable to ",(0,a.kt)("inlineCode",{parentName:"p"},"png")," images.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"fullPage")," : When true, takes a screenshot of the full scrollable page. Defaults to ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"clip")," : An object which specifies clipping region of the page. Should have the following fields:",(0,a.kt)("br",null)," - ",(0,a.kt)("inlineCode",{parentName:"p"},"x")," : x-coordinate of top-left corner of clip area.",(0,a.kt)("br",null)," - ",(0,a.kt)("inlineCode",{parentName:"p"},"y")," : y-coordinate of top-left corner of clip area.",(0,a.kt)("br",null)," - ",(0,a.kt)("inlineCode",{parentName:"p"},"width")," : width of clipping area.",(0,a.kt)("br",null)," - ",(0,a.kt)("inlineCode",{parentName:"p"},"height")," : height of clipping area.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"omitBackground")," : Hides default white background and allows capturing screenshots with transparency. Defaults to ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"encoding")," : The encoding of the image, can be either base64 or binary. Defaults to ",(0,a.kt)("inlineCode",{parentName:"p"},"binary"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"captureBeyondViewport")," : When true, captures screenshot ",(0,a.kt)("a",{parentName:"p",href:"https://chromedevtools.github.io/devtools-protocol/tot/Page/#method-captureScreenshot"},"beyond the viewport"),". When false, falls back to old behaviour, and cuts the screenshot by the viewport size. Defaults to ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"fromSurface")," : When true, captures screenshot ",(0,a.kt)("a",{parentName:"p",href:"https://chromedevtools.github.io/devtools-protocol/tot/Page/#method-captureScreenshot"},"from the surface rather than the view"),". When false, works only in headful mode and ignores page viewport (but not browser window's bounds). Defaults to ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),"."))),(0,a.kt)("p",null,"NOTE: Screenshots take at least 1/6 second on OS X. See ",(0,a.kt)("a",{parentName:"p",href:"https://crbug.com/741689"},"https://crbug.com/741689")," for discussion."))}u.isMDXComponent=!0}}]);