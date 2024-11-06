"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6585],{5680:(e,t,n)=>{n.d(t,{xA:()=>s,yg:()=>f});var r=n(6540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,f=u["".concat(l,".").concat(d)]||u[d]||g[d]||i;return n?r.createElement(f,o(o({ref:t},s),{},{components:n})):r.createElement(f,o({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:a,o[1]=c;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1785:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var r=n(8168),a=(n(6540),n(5680));const i={},o=void 0,c={unversionedId:"API/utils/fileUtils/functions/detectPackageManager",id:"API/utils/fileUtils/functions/detectPackageManager",isDocsHomePage:!1,title:"detectPackageManager",description:"Snapper Project \u2022 Docs",source:"@site/docs/API/utils/fileUtils/functions/detectPackageManager.md",sourceDirName:"API/utils/fileUtils/functions",slug:"/API/utils/fileUtils/functions/detectPackageManager",permalink:"/Snapper/docs/API/utils/fileUtils/functions/detectPackageManager",editUrl:"https://github.com/sayfer-io/Snapper/blob/main/docs/API/utils/fileUtils/functions/detectPackageManager.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"deleteLockFiles",permalink:"/Snapper/docs/API/utils/fileUtils/functions/deleteLockFiles"},next:{title:"detectPackageManagerVersion",permalink:"/Snapper/docs/API/utils/fileUtils/functions/detectPackageManagerVersion"}},l=[{value:"Parameters",id:"parameters",children:[]},{value:"Returns",id:"returns",children:[]},{value:"Throws",id:"throws",children:[]},{value:"Defined in",id:"defined-in",children:[]}],p={toc:l},s="wrapper";function u(e){let{components:t,...n}=e;return(0,a.yg)(s,(0,r.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"/Snapper/docs/API/README"},(0,a.yg)("strong",{parentName:"a"},"Snapper Project"))," \u2022 ",(0,a.yg)("strong",{parentName:"p"},"Docs")),(0,a.yg)("hr",null),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"/Snapper/docs/API/README"},"Snapper Project")," / ",(0,a.yg)("a",{parentName:"p",href:"/Snapper/docs/API/utils/fileUtils/README"},"utils/fileUtils")," / detectPackageManager"),(0,a.yg)("h1",{id:"function-detectpackagemanager"},"Function: detectPackageManager()"),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},(0,a.yg)("strong",{parentName:"p"},"detectPackageManager"),"(",(0,a.yg)("inlineCode",{parentName:"p"},"workingDir"),"): ",(0,a.yg)("inlineCode",{parentName:"p"},"string"))),(0,a.yg)("p",null,"Detects the package manager used in the project.\nIt checks for Yarn, npm, and pnpm based on the package.json and lock files."),(0,a.yg)("h2",{id:"parameters"},"Parameters"),(0,a.yg)("p",null,"\u2022 ",(0,a.yg)("strong",{parentName:"p"},"workingDir"),": ",(0,a.yg)("inlineCode",{parentName:"p"},"string")),(0,a.yg)("p",null,"The directory where package.json is located."),(0,a.yg)("h2",{id:"returns"},"Returns"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"string")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},'The detected package manager ("yarn", "npm", or "pnpm").')),(0,a.yg)("h2",{id:"throws"},"Throws"),(0,a.yg)("p",null,"Will throw an error if no package.json is found in the working directory."),(0,a.yg)("h2",{id:"defined-in"},"Defined in"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://github.com/asifqatar/Snapper/blob/efbcec64e60623713bea5b66951928dbe973c565/utils/fileUtils.ts#L113"},"utils/fileUtils.ts:113")))}u.isMDXComponent=!0}}]);