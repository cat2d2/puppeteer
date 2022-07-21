"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[718],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},p=Object.keys(e);for(a=0;a<p.length;a++)r=p[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)r=p[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,p=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=c(r),d=n,f=u["".concat(l,".").concat(d)]||u[d]||m[d]||p;return r?a.createElement(f,o(o({ref:t},s),{},{components:r})):a.createElement(f,o({ref:t},s))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=r.length,o=new Array(p);o[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var c=2;c<p;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},64452:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>p,metadata:()=>i,toc:()=>c});var a=r(87462),n=(r(67294),r(3905));const p={sidebar_label:"Page.createPDFStream"},o="Page.createPDFStream() method",i={unversionedId:"api/puppeteer.page.createpdfstream",id:"version-15.4.0/api/puppeteer.page.createpdfstream",title:"Page.createPDFStream() method",description:"Generates a PDF of the page with the print CSS media type.",source:"@site/versioned_docs/version-15.4.0/api/puppeteer.page.createpdfstream.md",sourceDirName:"api",slug:"/api/puppeteer.page.createpdfstream",permalink:"/15.4.0/api/puppeteer.page.createpdfstream",draft:!1,tags:[],version:"15.4.0",frontMatter:{sidebar_label:"Page.createPDFStream"},sidebar:"sidebar",previous:{title:"Page.coverage",permalink:"/15.4.0/api/puppeteer.page.coverage"},next:{title:"Page.deleteCookie",permalink:"/15.4.0/api/puppeteer.page.deletecookie"}},l={},c=[{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2}],s={toc:c};function m(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"pagecreatepdfstream-method"},"Page.createPDFStream() method"),(0,n.kt)("p",null,"Generates a PDF of the page with the ",(0,n.kt)("inlineCode",{parentName:"p"},"print")," CSS media type."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Signature:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"class Page {\n  createPDFStream(options?: PDFOptions): Promise<Readable>;\n}\n")),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"options"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/15.4.0/api/puppeteer.pdfoptions"},"PDFOptions")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("i",null,"(Optional)")," options for generating the PDF.")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Returns:")),(0,n.kt)("p",null,"Promise","<","Readable",">"),(0,n.kt)("h2",{id:"remarks"},"Remarks"),(0,n.kt)("p",null,"NOTE: PDF generation is only supported in Chrome headless mode."),(0,n.kt)("p",null,"To generate a PDF with the ",(0,n.kt)("inlineCode",{parentName:"p"},"screen")," media type, call ",(0,n.kt)("a",{parentName:"p",href:"/15.4.0/api/puppeteer.page.emulatemediatype"},"`","page.emulateMediaType('screen')","`")," before calling ",(0,n.kt)("inlineCode",{parentName:"p"},"page.pdf()"),"."),(0,n.kt)("p",null,"By default, ",(0,n.kt)("inlineCode",{parentName:"p"},"page.pdf()")," generates a pdf with modified colors for printing. Use the ",(0,n.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-print-color-adjust"},"`","-webkit-print-color-adjust","`")," property to force rendering of exact colors."))}m.isMDXComponent=!0}}]);