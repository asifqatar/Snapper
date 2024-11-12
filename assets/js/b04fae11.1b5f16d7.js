"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5735],{5680:(e,r,t)=>{t.d(r,{xA:()=>l,yg:()=>d});var n=t(6540);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=n.createContext({}),c=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},l=function(e){var r=c(e.components);return n.createElement(i.Provider,{value:r},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=c(t),f=o,d=u["".concat(i,".").concat(f)]||u[f]||y[f]||a;return t?n.createElement(d,s(s({ref:r},l),{},{components:t})):n.createElement(d,s({ref:r},l))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=f;var p={};for(var i in r)hasOwnProperty.call(r,i)&&(p[i]=r[i]);p.originalType=e,p[u]="string"==typeof e?e:o,s[1]=p;for(var c=2;c<a;c++)s[c]=t[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},2898:(e,r,t)=>{t.r(r),t.d(r,{contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>p,toc:()=>i});var n=t(8168),o=(t(6540),t(5680));const a={},s=void 0,p={unversionedId:"API/processor/functions/processFiles",id:"API/processor/functions/processFiles",isDocsHomePage:!1,title:"processFiles",description:"Snapper Project \u2022 Docs",source:"@site/docs/API/processor/functions/processFiles.md",sourceDirName:"API/processor/functions",slug:"/API/processor/functions/processFiles",permalink:"/API/processor/functions/processFiles",editUrl:"https://github.com/sayfer-io/Snapper/blob/main/docs/API/processor/functions/processFiles.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"README",permalink:"/API/processor/README"},next:{title:"README",permalink:"/API/structures/README"}},i=[{value:"Parameters",id:"parameters",children:[]},{value:"Returns",id:"returns",children:[]},{value:"Defined in",id:"defined-in",children:[]}],c={toc:i},l="wrapper";function u(e){let{components:r,...t}=e;return(0,o.yg)(l,(0,n.A)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"/API/README"},(0,o.yg)("strong",{parentName:"a"},"Snapper Project"))," \u2022 ",(0,o.yg)("strong",{parentName:"p"},"Docs")),(0,o.yg)("hr",null),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"/API/README"},"Snapper Project")," / ",(0,o.yg)("a",{parentName:"p",href:"/API/processor/README"},"processor")," / processFiles"),(0,o.yg)("h1",{id:"function-processfiles"},"Function: processFiles()"),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},(0,o.yg)("strong",{parentName:"p"},"processFiles"),"(",(0,o.yg)("inlineCode",{parentName:"p"},"projectPath"),", ",(0,o.yg)("inlineCode",{parentName:"p"},"detectorNames"),"?): ",(0,o.yg)("inlineCode",{parentName:"p"},"Promise"),"\\<",(0,o.yg)("a",{parentName:"p",href:"/API/types/type-aliases/Finding"},(0,o.yg)("inlineCode",{parentName:"a"},"Finding")),"[]",">")),(0,o.yg)("p",null,"Processes files in a TypeScript project to find issues based on specified detectors."),(0,o.yg)("h2",{id:"parameters"},"Parameters"),(0,o.yg)("p",null,"\u2022 ",(0,o.yg)("strong",{parentName:"p"},"projectPath"),": ",(0,o.yg)("inlineCode",{parentName:"p"},"string")),(0,o.yg)("p",null,"The path to the TypeScript project."),(0,o.yg)("p",null,"\u2022 ",(0,o.yg)("strong",{parentName:"p"},"detectorNames?"),": ",(0,o.yg)("inlineCode",{parentName:"p"},"string"),"[]"),(0,o.yg)("p",null,"The list of detectors to run. If not provided, all detectors will be applied."),(0,o.yg)("h2",{id:"returns"},"Returns"),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"Promise"),"\\<",(0,o.yg)("a",{parentName:"p",href:"/API/types/type-aliases/Finding"},(0,o.yg)("inlineCode",{parentName:"a"},"Finding")),"[]",">"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"A promise that resolves to an array of findings.")),(0,o.yg)("h2",{id:"defined-in"},"Defined in"),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"https://github.com/asifqatar/Snapper/blob/745a7dc53ba74a10939f2917619e05af16a1385f/processor.ts#L48"},"processor.ts:48")))}u.isMDXComponent=!0}}]);