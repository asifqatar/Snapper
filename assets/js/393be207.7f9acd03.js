"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4134],{5680:(e,r,t)=>{t.d(r,{xA:()=>u,yg:()=>y});var n=t(6540);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),i=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},u=function(e){var r=i(e.components);return n.createElement(l.Provider,{value:r},e.children)},f="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},s=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),f=i(t),s=o,y=f["".concat(l,".").concat(s)]||f[s]||m[s]||a;return t?n.createElement(y,c(c({ref:r},u),{},{components:t})):n.createElement(y,c({ref:r},u))}));function y(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=s;var p={};for(var l in r)hasOwnProperty.call(r,l)&&(p[l]=r[l]);p.originalType=e,p[f]="string"==typeof e?e:o,c[1]=p;for(var i=2;i<a;i++)c[i]=t[i];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}s.displayName="MDXCreateElement"},1509:(e,r,t)=>{t.r(r),t.d(r,{contentTitle:()=>c,default:()=>f,frontMatter:()=>a,metadata:()=>p,toc:()=>l});var n=t(8168),o=(t(6540),t(5680));const a={title:"Markdown page example"},c="Markdown page example",p={type:"mdx",permalink:"/markdown-page",source:"@site/src/pages/markdown-page.md"},l=[],i={toc:l},u="wrapper";function f(e){let{components:r,...t}=e;return(0,o.yg)(u,(0,n.A)({},i,t,{components:r,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"markdown-page-example"},"Markdown page example"),(0,o.yg)("p",null,"You don't need React to write simple standalone pages."))}f.isMDXComponent=!0}}]);