"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6533],{5680:(e,n,t)=>{t.d(n,{xA:()=>s,yg:()=>m});var r=t(6540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=r.createContext({}),c=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(o.Provider,{value:n},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,p=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(t),d=a,m=u["".concat(o,".").concat(d)]||u[d]||y[d]||p;return t?r.createElement(m,i(i({ref:n},s),{},{components:t})):r.createElement(m,i({ref:n},s))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var p=t.length,i=new Array(p);i[0]=d;var l={};for(var o in n)hasOwnProperty.call(n,o)&&(l[o]=n[o]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<p;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},2170:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>i,default:()=>u,frontMatter:()=>p,metadata:()=>l,toc:()=>o});var r=t(8168),a=(t(6540),t(5680));const p={},i=void 0,l={unversionedId:"API/utils/dynamicSnapHelpers/functions/installDependencies",id:"API/utils/dynamicSnapHelpers/functions/installDependencies",isDocsHomePage:!1,title:"installDependencies",description:"Snapper Project \u2022 Docs",source:"@site/docs/API/utils/dynamicSnapHelpers/functions/installDependencies.md",sourceDirName:"API/utils/dynamicSnapHelpers/functions",slug:"/API/utils/dynamicSnapHelpers/functions/installDependencies",permalink:"/Snapper/API/utils/dynamicSnapHelpers/functions/installDependencies",editUrl:"https://github.com/sayfer-io/Snapper/blob/main/docs/API/utils/dynamicSnapHelpers/functions/installDependencies.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"copySnapToTempDirectory",permalink:"/Snapper/API/utils/dynamicSnapHelpers/functions/copySnapToTempDirectory"},next:{title:"sleep",permalink:"/Snapper/API/utils/dynamicSnapHelpers/functions/sleep"}},o=[{value:"Parameters",id:"parameters",children:[]},{value:"Returns",id:"returns",children:[]},{value:"Defined in",id:"defined-in",children:[]}],c={toc:o},s="wrapper";function u(e){let{components:n,...t}=e;return(0,a.yg)(s,(0,r.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"/Snapper/API/README"},(0,a.yg)("strong",{parentName:"a"},"Snapper Project"))," \u2022 ",(0,a.yg)("strong",{parentName:"p"},"Docs")),(0,a.yg)("hr",null),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"/Snapper/API/README"},"Snapper Project")," / ",(0,a.yg)("a",{parentName:"p",href:"/Snapper/API/utils/dynamicSnapHelpers/README"},"utils/dynamicSnapHelpers")," / installDependencies"),(0,a.yg)("h1",{id:"function-installdependencies"},"Function: installDependencies()"),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},(0,a.yg)("strong",{parentName:"p"},"installDependencies"),"(",(0,a.yg)("inlineCode",{parentName:"p"},"tempDir"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"packageManager"),"): ",(0,a.yg)("inlineCode",{parentName:"p"},"void"))),(0,a.yg)("p",null,"Installs dependencies in the temporary directory."),(0,a.yg)("p",null,"This function installs the project dependencies in the temporary directory\nusing the specified package manager (pnpm, yarn, or npm). It uses the\n",(0,a.yg)("inlineCode",{parentName:"p"},"runCommand")," utility to execute the appropriate command for each package\nmanager."),(0,a.yg)("h2",{id:"parameters"},"Parameters"),(0,a.yg)("p",null,"\u2022 ",(0,a.yg)("strong",{parentName:"p"},"tempDir"),": ",(0,a.yg)("inlineCode",{parentName:"p"},"string")),(0,a.yg)("p",null,"The path to the temporary directory."),(0,a.yg)("p",null,"\u2022 ",(0,a.yg)("strong",{parentName:"p"},"packageManager"),": ",(0,a.yg)("inlineCode",{parentName:"p"},"string")),(0,a.yg)("p",null,"The package manager to use."),(0,a.yg)("h2",{id:"returns"},"Returns"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"void")),(0,a.yg)("h2",{id:"defined-in"},"Defined in"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://github.com/asifqatar/Snapper/blob/745a7dc53ba74a10939f2917619e05af16a1385f/utils/dynamicSnapHelpers.ts#L88"},"utils/dynamicSnapHelpers.ts:88")))}u.isMDXComponent=!0}}]);