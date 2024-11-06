"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3874],{5680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>f});var r=n(6540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),d=a,f=u["".concat(c,".").concat(d)]||u[d]||g[d]||i;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},989:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(8168),a=(n(6540),n(5680));const i={},o=void 0,s={unversionedId:"API/utils/fileUtils/functions/detectPackageManagerVersion",id:"API/utils/fileUtils/functions/detectPackageManagerVersion",isDocsHomePage:!1,title:"detectPackageManagerVersion",description:"Snapper Project \u2022 Docs",source:"@site/docs/API/utils/fileUtils/functions/detectPackageManagerVersion.md",sourceDirName:"API/utils/fileUtils/functions",slug:"/API/utils/fileUtils/functions/detectPackageManagerVersion",permalink:"/docs-site/docs/docs/API/utils/fileUtils/functions/detectPackageManagerVersion",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/API/utils/fileUtils/functions/detectPackageManagerVersion.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"detectPackageManager",permalink:"/docs-site/docs/docs/API/utils/fileUtils/functions/detectPackageManager"},next:{title:"findTsConfig",permalink:"/docs-site/docs/docs/API/utils/fileUtils/functions/findTsConfig"}},c=[{value:"Parameters",id:"parameters",children:[]},{value:"Returns",id:"returns",children:[]},{value:"Throws",id:"throws",children:[]},{value:"Defined in",id:"defined-in",children:[]}],l={toc:c},p="wrapper";function u(e){let{components:t,...n}=e;return(0,a.yg)(p,(0,r.A)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"/docs-site/docs/docs/API/README"},(0,a.yg)("strong",{parentName:"a"},"Snapper Project"))," \u2022 ",(0,a.yg)("strong",{parentName:"p"},"Docs")),(0,a.yg)("hr",null),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"/docs-site/docs/docs/API/README"},"Snapper Project")," / ",(0,a.yg)("a",{parentName:"p",href:"/docs-site/docs/docs/API/utils/fileUtils/README"},"utils/fileUtils")," / detectPackageManagerVersion"),(0,a.yg)("h1",{id:"function-detectpackagemanagerversion"},"Function: detectPackageManagerVersion()"),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},(0,a.yg)("strong",{parentName:"p"},"detectPackageManagerVersion"),"(",(0,a.yg)("inlineCode",{parentName:"p"},"workingDir"),"): ",(0,a.yg)("inlineCode",{parentName:"p"},"string"))),(0,a.yg)("p",null,"Detects the package manager version specified in package.json.\nIt checks for supported package managers: Yarn, npm, and pnpm."),(0,a.yg)("h2",{id:"parameters"},"Parameters"),(0,a.yg)("p",null,"\u2022 ",(0,a.yg)("strong",{parentName:"p"},"workingDir"),": ",(0,a.yg)("inlineCode",{parentName:"p"},"string")),(0,a.yg)("p",null,"The directory where package.json is located."),(0,a.yg)("h2",{id:"returns"},"Returns"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"string")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},'The package manager version string (e.g., "',(0,a.yg)("a",{parentName:"li",href:"mailto:yarn@3.2.1"},"yarn@3.2.1"),'" or "',(0,a.yg)("a",{parentName:"li",href:"mailto:npm@8.0.0"},"npm@8.0.0"),'").')),(0,a.yg)("h2",{id:"throws"},"Throws"),(0,a.yg)("p",null,"Will throw an error if the package manager format is invalid or unsupported."),(0,a.yg)("h2",{id:"defined-in"},"Defined in"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://github.com/asifqatar/Snapper/blob/efbcec64e60623713bea5b66951928dbe973c565/utils/fileUtils.ts#L91"},"utils/fileUtils.ts:91")))}u.isMDXComponent=!0}}]);