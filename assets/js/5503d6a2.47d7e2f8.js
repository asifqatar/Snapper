"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6533],{5680:(e,n,t)=>{t.d(n,{xA:()=>s,yg:()=>m});var r=t(6540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},y=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=c(t),y=a,m=u["".concat(l,".").concat(y)]||u[y]||d[y]||i;return t?r.createElement(m,p(p({ref:n},s),{},{components:t})):r.createElement(m,p({ref:n},s))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,p=new Array(i);p[0]=y;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o[u]="string"==typeof e?e:a,p[1]=o;for(var c=2;c<i;c++)p[c]=t[c];return r.createElement.apply(null,p)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},2170:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>p,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var r=t(8168),a=(t(6540),t(5680));const i={},p=void 0,o={unversionedId:"API/utils/dynamicSnapHelpers/functions/installDependencies",id:"API/utils/dynamicSnapHelpers/functions/installDependencies",isDocsHomePage:!1,title:"installDependencies",description:"Snapper Project \u2022 Docs",source:"@site/docs/API/utils/dynamicSnapHelpers/functions/installDependencies.md",sourceDirName:"API/utils/dynamicSnapHelpers/functions",slug:"/API/utils/dynamicSnapHelpers/functions/installDependencies",permalink:"/docs/API/utils/dynamicSnapHelpers/functions/installDependencies",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/API/utils/dynamicSnapHelpers/functions/installDependencies.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"copySnapToTempDirectory",permalink:"/docs/API/utils/dynamicSnapHelpers/functions/copySnapToTempDirectory"},next:{title:"sleep",permalink:"/docs/API/utils/dynamicSnapHelpers/functions/sleep"}},l=[{value:"Parameters",id:"parameters",children:[]},{value:"Returns",id:"returns",children:[]},{value:"Defined in",id:"defined-in",children:[]}],c={toc:l},s="wrapper";function u(e){let{components:n,...t}=e;return(0,a.yg)(s,(0,r.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"/docs/API/README"},(0,a.yg)("strong",{parentName:"a"},"Snapper Project"))," \u2022 ",(0,a.yg)("strong",{parentName:"p"},"Docs")),(0,a.yg)("hr",null),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"/docs/API/README"},"Snapper Project")," / ",(0,a.yg)("a",{parentName:"p",href:"/docs/API/utils/dynamicSnapHelpers/README"},"utils/dynamicSnapHelpers")," / installDependencies"),(0,a.yg)("h1",{id:"function-installdependencies"},"Function: installDependencies()"),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},(0,a.yg)("strong",{parentName:"p"},"installDependencies"),"(",(0,a.yg)("inlineCode",{parentName:"p"},"tempDir"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"packageManager"),"): ",(0,a.yg)("inlineCode",{parentName:"p"},"void"))),(0,a.yg)("p",null,"Installs dependencies in the temporary directory."),(0,a.yg)("h2",{id:"parameters"},"Parameters"),(0,a.yg)("p",null,"\u2022 ",(0,a.yg)("strong",{parentName:"p"},"tempDir"),": ",(0,a.yg)("inlineCode",{parentName:"p"},"string")),(0,a.yg)("p",null,"The path to the temporary directory."),(0,a.yg)("p",null,"\u2022 ",(0,a.yg)("strong",{parentName:"p"},"packageManager"),": ",(0,a.yg)("inlineCode",{parentName:"p"},"string")),(0,a.yg)("p",null,"The package manager to use."),(0,a.yg)("h2",{id:"returns"},"Returns"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"void")),(0,a.yg)("h2",{id:"defined-in"},"Defined in"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://github.com/asifqatar/Snapper/blob/efbcec64e60623713bea5b66951928dbe973c565/utils/dynamicSnapHelpers.ts#L63"},"utils/dynamicSnapHelpers.ts:63")))}u.isMDXComponent=!0}}]);