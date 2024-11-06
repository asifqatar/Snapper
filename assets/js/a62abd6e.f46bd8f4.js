"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6024],{5680:(e,n,r)=>{r.d(n,{xA:()=>s,yg:()=>m});var t=r(6540);function p(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){p(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,p=function(e,n){if(null==e)return{};var r,t,p={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(p[r]=e[r]);return p}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(p[r]=e[r])}return p}var c=t.createContext({}),l=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},s=function(e){var n=l(e.components);return t.createElement(c.Provider,{value:n},e.children)},y="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,p=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),y=l(r),d=p,m=y["".concat(c,".").concat(d)]||y[d]||u[d]||o;return r?t.createElement(m,a(a({ref:n},s),{},{components:r})):t.createElement(m,a({ref:n},s))}));function m(e,n){var r=arguments,p=n&&n.mdxType;if("string"==typeof e||p){var o=r.length,a=new Array(o);a[0]=d;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i[y]="string"==typeof e?e:p,a[1]=i;for(var l=2;l<o;l++)a[l]=r[l];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7445:(e,n,r)=>{r.r(n),r.d(n,{contentTitle:()=>a,default:()=>y,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var t=r(8168),p=(r(6540),r(5680));const o={},a=void 0,i={unversionedId:"API/utils/dynamicSnapHelpers/functions/copySnapToTempDirectory",id:"API/utils/dynamicSnapHelpers/functions/copySnapToTempDirectory",isDocsHomePage:!1,title:"copySnapToTempDirectory",description:"Snapper Project \u2022 Docs",source:"@site/docs/API/utils/dynamicSnapHelpers/functions/copySnapToTempDirectory.md",sourceDirName:"API/utils/dynamicSnapHelpers/functions",slug:"/API/utils/dynamicSnapHelpers/functions/copySnapToTempDirectory",permalink:"/Snapper/docs/API/utils/dynamicSnapHelpers/functions/copySnapToTempDirectory",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/API/utils/dynamicSnapHelpers/functions/copySnapToTempDirectory.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"connectSnapServer",permalink:"/Snapper/docs/API/utils/dynamicSnapHelpers/functions/connectSnapServer"},next:{title:"installDependencies",permalink:"/Snapper/docs/API/utils/dynamicSnapHelpers/functions/installDependencies"}},c=[{value:"Parameters",id:"parameters",children:[]},{value:"Returns",id:"returns",children:[]},{value:"Defined in",id:"defined-in",children:[]}],l={toc:c},s="wrapper";function y(e){let{components:n,...r}=e;return(0,p.yg)(s,(0,t.A)({},l,r,{components:n,mdxType:"MDXLayout"}),(0,p.yg)("p",null,(0,p.yg)("a",{parentName:"p",href:"/Snapper/docs/API/README"},(0,p.yg)("strong",{parentName:"a"},"Snapper Project"))," \u2022 ",(0,p.yg)("strong",{parentName:"p"},"Docs")),(0,p.yg)("hr",null),(0,p.yg)("p",null,(0,p.yg)("a",{parentName:"p",href:"/Snapper/docs/API/README"},"Snapper Project")," / ",(0,p.yg)("a",{parentName:"p",href:"/Snapper/docs/API/utils/dynamicSnapHelpers/README"},"utils/dynamicSnapHelpers")," / copySnapToTempDirectory"),(0,p.yg)("h1",{id:"function-copysnaptotempdirectory"},"Function: copySnapToTempDirectory()"),(0,p.yg)("blockquote",null,(0,p.yg)("p",{parentName:"blockquote"},(0,p.yg)("strong",{parentName:"p"},"copySnapToTempDirectory"),"(",(0,p.yg)("inlineCode",{parentName:"p"},"directory"),"): ",(0,p.yg)("inlineCode",{parentName:"p"},"string"))),(0,p.yg)("p",null,"Copies the Snap directory to a temporary directory."),(0,p.yg)("h2",{id:"parameters"},"Parameters"),(0,p.yg)("p",null,"\u2022 ",(0,p.yg)("strong",{parentName:"p"},"directory"),": ",(0,p.yg)("inlineCode",{parentName:"p"},"string")),(0,p.yg)("p",null,"The Snap directory to copy."),(0,p.yg)("h2",{id:"returns"},"Returns"),(0,p.yg)("p",null,(0,p.yg)("inlineCode",{parentName:"p"},"string")),(0,p.yg)("p",null,"The path to the temporary directory."),(0,p.yg)("h2",{id:"defined-in"},"Defined in"),(0,p.yg)("p",null,(0,p.yg)("a",{parentName:"p",href:"https://github.com/asifqatar/Snapper/blob/efbcec64e60623713bea5b66951928dbe973c565/utils/dynamicSnapHelpers.ts#L33"},"utils/dynamicSnapHelpers.ts:33")))}y.isMDXComponent=!0}}]);