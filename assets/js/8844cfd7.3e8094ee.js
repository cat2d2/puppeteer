"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[11734],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>f});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function u(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=n.createContext({}),i=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):u(u({},r),e)),t},c=function(e){var r=i(e.components);return n.createElement(p.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},y=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),y=i(t),f=o,d=y["".concat(p,".").concat(f)]||y[f]||s[f]||a;return t?n.createElement(d,u(u({ref:r},c),{},{components:t})):n.createElement(d,u({ref:r},c))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,u=new Array(a);u[0]=y;var l={};for(var p in r)hasOwnProperty.call(r,p)&&(l[p]=r[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,u[1]=l;for(var i=2;i<a;i++)u[i]=t[i];return n.createElement.apply(null,u)}return n.createElement.apply(null,t)}y.displayName="MDXCreateElement"},9357:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>l,default:()=>y,frontMatter:()=>u,metadata:()=>p,toc:()=>c});t(67294);var n=t(3905);function o(){return o=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},o.apply(this,arguments)}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}const u={sidebar_label:"CustomQueryHandler.queryAll"},l="CustomQueryHandler.queryAll property",p={unversionedId:"api/puppeteer.customqueryhandler.queryall",id:"version-19.2.0/api/puppeteer.customqueryhandler.queryall",title:"CustomQueryHandler.queryAll property",description:"Signature:",source:"@site/versioned_docs/version-19.2.0/api/puppeteer.customqueryhandler.queryall.md",sourceDirName:"api",slug:"/api/puppeteer.customqueryhandler.queryall",permalink:"/api/puppeteer.customqueryhandler.queryall",draft:!1,tags:[],version:"19.2.0",frontMatter:{sidebar_label:"CustomQueryHandler.queryAll"},sidebar:"sidebar",previous:{title:"CustomQueryHandler",permalink:"/api/puppeteer.customqueryhandler"},next:{title:"CustomQueryHandler.queryOne",permalink:"/api/puppeteer.customqueryhandler.queryone"}},i={},c=[{value:"Signature:",id:"signature",level:4}],s={toc:c};function y(e){var{components:r}=e,t=a(e,["components"]);return(0,n.kt)("wrapper",o({},s,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",o({},{id:"customqueryhandlerqueryall-property"}),"CustomQueryHandler.queryAll property"),(0,n.kt)("h4",o({},{id:"signature"}),"Signature:"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-typescript"}),"interface CustomQueryHandler {\n  queryAll?: (node: Node, selector: string) => Node[];\n}\n")))}y.isMDXComponent=!0}}]);