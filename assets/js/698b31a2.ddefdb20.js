"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6963],{5680:(e,r,n)=>{n.d(r,{xA:()=>c,yg:()=>m});var t=n(6540);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function p(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?p(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function o(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},p=Object.keys(e);for(t=0;t<p.length;t++)n=p[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(t=0;t<p.length;t++)n=p[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=t.createContext({}),l=function(e){var r=t.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},c=function(e){var r=l(e.components);return t.createElement(s.Provider,{value:r},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},d=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,p=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=l(n),d=a,m=u["".concat(s,".").concat(d)]||u[d]||y[d]||p;return n?t.createElement(m,i(i({ref:r},c),{},{components:n})):t.createElement(m,i({ref:r},c))}));function m(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var p=n.length,i=new Array(p);i[0]=d;var o={};for(var s in r)hasOwnProperty.call(r,s)&&(o[s]=r[s]);o.originalType=e,o[u]="string"==typeof e?e:a,i[1]=o;for(var l=2;l<p;l++)i[l]=n[l];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8255:(e,r,n)=>{n.r(r),n.d(r,{contentTitle:()=>i,default:()=>u,frontMatter:()=>p,metadata:()=>o,toc:()=>s});var t=n(8168),a=(n(6540),n(5680));const p={},i=void 0,o={unversionedId:"API/utils/dynamicSnapHelpers/functions/startSnapServer",id:"API/utils/dynamicSnapHelpers/functions/startSnapServer",isDocsHomePage:!1,title:"startSnapServer",description:"Snapper Project \u2022 Docs",source:"@site/docs/API/utils/dynamicSnapHelpers/functions/startSnapServer.md",sourceDirName:"API/utils/dynamicSnapHelpers/functions",slug:"/API/utils/dynamicSnapHelpers/functions/startSnapServer",permalink:"/API/utils/dynamicSnapHelpers/functions/startSnapServer",editUrl:"https://github.com/sayfer-io/Snapper/blob/main/docs/API/utils/dynamicSnapHelpers/functions/startSnapServer.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"startAndConnectToSnap",permalink:"/API/utils/dynamicSnapHelpers/functions/startAndConnectToSnap"},next:{title:"verifyDirectoryExists",permalink:"/API/utils/dynamicSnapHelpers/functions/verifyDirectoryExists"}},s=[{value:"Parameters",id:"parameters",children:[]},{value:"Returns",id:"returns",children:[]},{value:"Defined in",id:"defined-in",children:[]}],l={toc:s},c="wrapper";function u(e){let{components:r,...n}=e;return(0,a.yg)(c,(0,t.A)({},l,n,{components:r,mdxType:"MDXLayout"}),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"/API/README"},(0,a.yg)("strong",{parentName:"a"},"Snapper Project"))," \u2022 ",(0,a.yg)("strong",{parentName:"p"},"Docs")),(0,a.yg)("hr",null),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"/API/README"},"Snapper Project")," / ",(0,a.yg)("a",{parentName:"p",href:"/API/utils/dynamicSnapHelpers/README"},"utils/dynamicSnapHelpers")," / startSnapServer"),(0,a.yg)("h1",{id:"function-startsnapserver"},"Function: startSnapServer()"),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},(0,a.yg)("strong",{parentName:"p"},"startSnapServer"),"(",(0,a.yg)("inlineCode",{parentName:"p"},"snapDirectory"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"port"),"): ",(0,a.yg)("inlineCode",{parentName:"p"},"void"))),(0,a.yg)("p",null,"Starts the Snap server in the background."),(0,a.yg)("p",null,"This function uses the ",(0,a.yg)("inlineCode",{parentName:"p"},"runCommandDetached")," utility to start the Snap server\nin the background. The Snap server is started using the ",(0,a.yg)("inlineCode",{parentName:"p"},"npx mm-snap serve"),"\ncommand, with the specified port number and ",(0,a.yg)("inlineCode",{parentName:"p"},"--verboseErrors")," flag."),(0,a.yg)("h2",{id:"parameters"},"Parameters"),(0,a.yg)("p",null,"\u2022 ",(0,a.yg)("strong",{parentName:"p"},"snapDirectory"),": ",(0,a.yg)("inlineCode",{parentName:"p"},"string")),(0,a.yg)("p",null,"The directory where the Snap server should be started."),(0,a.yg)("p",null,"\u2022 ",(0,a.yg)("strong",{parentName:"p"},"port"),": ",(0,a.yg)("inlineCode",{parentName:"p"},"number")),(0,a.yg)("p",null,"The port number to use for the Snap server."),(0,a.yg)("h2",{id:"returns"},"Returns"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"void")),(0,a.yg)("h2",{id:"defined-in"},"Defined in"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://github.com/asifqatar/Snapper/blob/745a7dc53ba74a10939f2917619e05af16a1385f/utils/dynamicSnapHelpers.ts#L63"},"utils/dynamicSnapHelpers.ts:63")))}u.isMDXComponent=!0}}]);