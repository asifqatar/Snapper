"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3874],{5680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>d});var r=t(6540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(t),f=a,d=u["".concat(c,".").concat(f)]||u[f]||g[f]||i;return t?r.createElement(d,o(o({ref:n},p),{},{components:t})):r.createElement(d,o({ref:n},p))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=f;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},989:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=t(8168),a=(t(6540),t(5680));const i={},o=void 0,l={unversionedId:"API/utils/fileUtils/functions/detectPackageManagerVersion",id:"API/utils/fileUtils/functions/detectPackageManagerVersion",isDocsHomePage:!1,title:"detectPackageManagerVersion",description:"*",source:"@site/docs/API/utils/fileUtils/functions/detectPackageManagerVersion.md",sourceDirName:"API/utils/fileUtils/functions",slug:"/API/utils/fileUtils/functions/detectPackageManagerVersion",permalink:"/Snapper/API/utils/fileUtils/functions/detectPackageManagerVersion",editUrl:"https://github.com/sayfer-io/Snapper/blob/main/docs/API/utils/fileUtils/functions/detectPackageManagerVersion.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"detectPackageManager",permalink:"/Snapper/API/utils/fileUtils/functions/detectPackageManager"},next:{title:"findTsConfig",permalink:"/Snapper/API/utils/fileUtils/functions/findTsConfig"}},c=[{value:"Parameters",id:"parameters",children:[]},{value:"Returns",id:"returns",children:[]},{value:"Throws",id:"throws",children:[]},{value:"Defined in",id:"defined-in",children:[]}],s={toc:c},p="wrapper";function u(e){let{components:n,...t}=e;return(0,a.yg)(p,(0,r.A)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("hr",null),(0,a.yg)("h1",{id:"function-detectpackagemanagerversion"},"Function: detectPackageManagerVersion()"),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},(0,a.yg)("strong",{parentName:"p"},"detectPackageManagerVersion"),"(",(0,a.yg)("inlineCode",{parentName:"p"},"workingDir"),"): ",(0,a.yg)("inlineCode",{parentName:"p"},"string"))),(0,a.yg)("p",null,"Detects the package manager version specified in package.json."),(0,a.yg)("p",null,"This function reads the ",(0,a.yg)("inlineCode",{parentName:"p"},"package.json")," file in the given working directory\nand extracts the ",(0,a.yg)("inlineCode",{parentName:"p"},"packageManager")," field. It supports the following package\nmanagers: Yarn, npm, and pnpm."),(0,a.yg)("h2",{id:"parameters"},"Parameters"),(0,a.yg)("p",null,"\u2022 ",(0,a.yg)("strong",{parentName:"p"},"workingDir"),": ",(0,a.yg)("inlineCode",{parentName:"p"},"string")),(0,a.yg)("p",null,"The directory where package.json is located."),(0,a.yg)("h2",{id:"returns"},"Returns"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"string")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},'The package manager version string (e.g., "',(0,a.yg)("a",{parentName:"li",href:"mailto:yarn@3.2.1"},"yarn@3.2.1"),'" or "',(0,a.yg)("a",{parentName:"li",href:"mailto:npm@8.0.0"},"npm@8.0.0"),'").')),(0,a.yg)("h2",{id:"throws"},"Throws"),(0,a.yg)("p",null,"Will throw an error if the package manager format is invalid or unsupported."),(0,a.yg)("h2",{id:"defined-in"},"Defined in"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://github.com/asifqatar/Snapper/blob/e47c50848996c5aee18aed9672ee3a5a1bb1ca7d/utils/fileUtils.ts#L116"},"utils/fileUtils.ts:116")))}u.isMDXComponent=!0}}]);