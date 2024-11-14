"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5735],{5680:(e,r,n)=>{n.d(r,{xA:()=>l,yg:()=>y});var t=n(6540);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function s(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function a(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=t.createContext({}),c=function(e){var r=t.useContext(p),n=r;return e&&(n="function"==typeof e?e(r):s(s({},r),e)),n},l=function(e){var r=c(e.components);return t.createElement(p.Provider,{value:r},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},f=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),u=c(n),f=o,y=u["".concat(p,".").concat(f)]||u[f]||d[f]||i;return n?t.createElement(y,s(s({ref:r},l),{},{components:n})):t.createElement(y,s({ref:r},l))}));function y(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=f;var a={};for(var p in r)hasOwnProperty.call(r,p)&&(a[p]=r[p]);a.originalType=e,a[u]="string"==typeof e?e:o,s[1]=a;for(var c=2;c<i;c++)s[c]=n[c];return t.createElement.apply(null,s)}return t.createElement.apply(null,n)}f.displayName="MDXCreateElement"},2898:(e,r,n)=>{n.r(r),n.d(r,{contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>p});var t=n(8168),o=(n(6540),n(5680));const i={},s=void 0,a={unversionedId:"API/processor/functions/processFiles",id:"API/processor/functions/processFiles",isDocsHomePage:!1,title:"processFiles",description:"*",source:"@site/docs/API/processor/functions/processFiles.md",sourceDirName:"API/processor/functions",slug:"/API/processor/functions/processFiles",permalink:"/Snapper/API/processor/functions/processFiles",editUrl:"https://github.com/sayfer-io/Snapper/blob/main/docs/API/processor/functions/processFiles.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"UsedBeforeDefinedInterfacesDetector",permalink:"/Snapper/API/detectors/UsedBeforeDefinedInterfaces/classes/UsedBeforeDefinedInterfacesDetector"},next:{title:"Confidence",permalink:"/Snapper/API/structures/enumerations/Confidence"}},p=[{value:"Parameters",id:"parameters",children:[]},{value:"Returns",id:"returns",children:[]},{value:"Defined in",id:"defined-in",children:[]}],c={toc:p},l="wrapper";function u(e){let{components:r,...n}=e;return(0,o.yg)(l,(0,t.A)({},c,n,{components:r,mdxType:"MDXLayout"}),(0,o.yg)("hr",null),(0,o.yg)("h1",{id:"function-processfiles"},"Function: processFiles()"),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},(0,o.yg)("strong",{parentName:"p"},"processFiles"),"(",(0,o.yg)("inlineCode",{parentName:"p"},"projectPath"),", ",(0,o.yg)("inlineCode",{parentName:"p"},"detectorNames"),"?): ",(0,o.yg)("inlineCode",{parentName:"p"},"Promise"),"\\<",(0,o.yg)("a",{parentName:"p",href:"/Snapper/API/types/type-aliases/Finding"},(0,o.yg)("inlineCode",{parentName:"a"},"Finding")),"[]",">")),(0,o.yg)("p",null,"Processes files in a TypeScript project to find issues based on specified detectors."),(0,o.yg)("h2",{id:"parameters"},"Parameters"),(0,o.yg)("p",null,"\u2022 ",(0,o.yg)("strong",{parentName:"p"},"projectPath"),": ",(0,o.yg)("inlineCode",{parentName:"p"},"string")),(0,o.yg)("p",null,"The path to the TypeScript project."),(0,o.yg)("p",null,"\u2022 ",(0,o.yg)("strong",{parentName:"p"},"detectorNames?"),": ",(0,o.yg)("inlineCode",{parentName:"p"},"string"),"[]"),(0,o.yg)("p",null,"The list of detectors to run. If not provided, all detectors will be applied."),(0,o.yg)("h2",{id:"returns"},"Returns"),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"Promise"),"\\<",(0,o.yg)("a",{parentName:"p",href:"/Snapper/API/types/type-aliases/Finding"},(0,o.yg)("inlineCode",{parentName:"a"},"Finding")),"[]",">"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"A promise that resolves to an array of findings.")),(0,o.yg)("h2",{id:"defined-in"},"Defined in"),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"https://github.com/asifqatar/Snapper/blob/906ddfcaf1558e94a3ec8d6df532b24adee091b6/processor.ts#L48"},"processor.ts:48")))}u.isMDXComponent=!0}}]);