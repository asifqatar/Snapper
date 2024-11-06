"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2502],{5680:(e,r,t)=>{t.d(r,{xA:()=>c,yg:()=>b});var n=t(6540);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=n.createContext({}),s=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},c=function(e){var r=s(e.components);return n.createElement(p.Provider,{value:r},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},y=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(t),y=o,b=u["".concat(p,".").concat(y)]||u[y]||g[y]||a;return t?n.createElement(b,i(i({ref:r},c),{},{components:t})):n.createElement(b,i({ref:r},c))}));function b(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=y;var l={};for(var p in r)hasOwnProperty.call(r,p)&&(l[p]=r[p]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}y.displayName="MDXCreateElement"},6796:(e,r,t)=>{t.r(r),t.d(r,{contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var n=t(8168),o=(t(6540),t(5680));const a={},i=void 0,l={unversionedId:"API/utils/logger/functions/enableLogVerbosity",id:"API/utils/logger/functions/enableLogVerbosity",isDocsHomePage:!1,title:"enableLogVerbosity",description:"Snapper Project \u2022 Docs",source:"@site/docs/API/utils/logger/functions/enableLogVerbosity.md",sourceDirName:"API/utils/logger/functions",slug:"/API/utils/logger/functions/enableLogVerbosity",permalink:"/Snapper/docs/API/utils/logger/functions/enableLogVerbosity",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/API/utils/logger/functions/enableLogVerbosity.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"enableLogFile",permalink:"/Snapper/docs/API/utils/logger/functions/enableLogFile"},next:{title:"default",permalink:"/Snapper/docs/API/utils/logger/variables/default"}},p=[{value:"Parameters",id:"parameters",children:[]},{value:"Returns",id:"returns",children:[]},{value:"Defined in",id:"defined-in",children:[]}],s={toc:p},c="wrapper";function u(e){let{components:r,...t}=e;return(0,o.yg)(c,(0,n.A)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"/Snapper/docs/API/README"},(0,o.yg)("strong",{parentName:"a"},"Snapper Project"))," \u2022 ",(0,o.yg)("strong",{parentName:"p"},"Docs")),(0,o.yg)("hr",null),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"/Snapper/docs/API/README"},"Snapper Project")," / ",(0,o.yg)("a",{parentName:"p",href:"/Snapper/docs/API/utils/logger/README"},"utils/logger")," / enableLogVerbosity"),(0,o.yg)("h1",{id:"function-enablelogverbosity"},"Function: enableLogVerbosity()"),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},(0,o.yg)("strong",{parentName:"p"},"enableLogVerbosity"),"(",(0,o.yg)("inlineCode",{parentName:"p"},"verbose"),"): ",(0,o.yg)("inlineCode",{parentName:"p"},"void"))),(0,o.yg)("p",null,"Sets up the logger based on the verbosity flag."),(0,o.yg)("h2",{id:"parameters"},"Parameters"),(0,o.yg)("p",null,"\u2022 ",(0,o.yg)("strong",{parentName:"p"},"verbose"),": ",(0,o.yg)("inlineCode",{parentName:"p"},"boolean")),(0,o.yg)("p",null,"Flag to enable verbose logging."),(0,o.yg)("h2",{id:"returns"},"Returns"),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"void")),(0,o.yg)("h2",{id:"defined-in"},"Defined in"),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"https://github.com/asifqatar/Snapper/blob/efbcec64e60623713bea5b66951928dbe973c565/utils/logger.ts#L35"},"utils/logger.ts:35")))}u.isMDXComponent=!0}}]);