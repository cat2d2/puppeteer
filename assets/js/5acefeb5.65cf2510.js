"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[28135],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>f});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function p(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?p(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)t=p[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)t=p[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=n.createContext({}),c=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},u=function(e){var r=c(e.components);return n.createElement(i.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,p=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(t),f=a,m=d["".concat(i,".").concat(f)]||d[f]||s[f]||p;return t?n.createElement(m,o(o({ref:r},u),{},{components:t})):n.createElement(m,o({ref:r},u))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var p=t.length,o=new Array(p);o[0]=d;var l={};for(var i in r)hasOwnProperty.call(r,i)&&(l[i]=r[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<p;c++)o[c]=t[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},60957:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>o,default:()=>s,frontMatter:()=>p,metadata:()=>l,toc:()=>c});var n=t(87462),a=(t(67294),t(3905));const p={sidebar_label:"HandleOr"},o="HandleOr type",l={unversionedId:"api/puppeteer.handleor",id:"version-15.3.2/api/puppeteer.handleor",title:"HandleOr type",description:"Signature:",source:"@site/versioned_docs/version-15.3.2/api/puppeteer.handleor.md",sourceDirName:"api",slug:"/api/puppeteer.handleor",permalink:"/15.3.2/api/puppeteer.handleor",draft:!1,tags:[],version:"15.3.2",frontMatter:{sidebar_label:"HandleOr"},sidebar:"sidebar",previous:{title:"HandleFor",permalink:"/15.3.2/api/puppeteer.handlefor"},next:{title:"Handler",permalink:"/15.3.2/api/puppeteer.handler"}},i={},c=[],u={toc:c};function s(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"handleor-type"},"HandleOr type"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Signature:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"export declare type HandleOr<T> = HandleFor<T> | JSHandle<T> | T;\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"References:")," ",(0,a.kt)("a",{parentName:"p",href:"/15.3.2/api/puppeteer.handlefor"},"HandleFor"),", ",(0,a.kt)("a",{parentName:"p",href:"/15.3.2/api/puppeteer.jshandle"},"JSHandle")))}s.isMDXComponent=!0}}]);