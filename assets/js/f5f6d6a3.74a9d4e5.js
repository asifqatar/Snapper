"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7086],{5680:(e,n,t)=>{t.d(n,{xA:()=>l,yg:()=>f});var r=t(6540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},y=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=c(t),y=a,f=u["".concat(s,".").concat(y)]||u[y]||d[y]||o;return t?r.createElement(f,i(i({ref:n},l),{},{components:t})):r.createElement(f,i({ref:n},l))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=y;var p={};for(var s in n)hasOwnProperty.call(n,s)&&(p[s]=n[s]);p.originalType=e,p[u]="string"==typeof e?e:a,i[1]=p;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},5712:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var r=t(8168),a=(t(6540),t(5680));const o={},i=void 0,p={unversionedId:"API/utils/dynamicSnapHelpers/functions/startAndConnectToSnap",id:"API/utils/dynamicSnapHelpers/functions/startAndConnectToSnap",isDocsHomePage:!1,title:"startAndConnectToSnap",description:"Snapper Project \u2022 Docs",source:"@site/docs/API/utils/dynamicSnapHelpers/functions/startAndConnectToSnap.md",sourceDirName:"API/utils/dynamicSnapHelpers/functions",slug:"/API/utils/dynamicSnapHelpers/functions/startAndConnectToSnap",permalink:"/API/utils/dynamicSnapHelpers/functions/startAndConnectToSnap",editUrl:"https://github.com/sayfer-io/Snapper/blob/main/docs/API/utils/dynamicSnapHelpers/functions/startAndConnectToSnap.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"sleep",permalink:"/API/utils/dynamicSnapHelpers/functions/sleep"},next:{title:"startSnapServer",permalink:"/API/utils/dynamicSnapHelpers/functions/startSnapServer"}},s=[{value:"Parameters",id:"parameters",children:[]},{value:"Returns",id:"returns",children:[]},{value:"Defined in",id:"defined-in",children:[]}],c={toc:s},l="wrapper";function u(e){let{components:n,...t}=e;return(0,a.yg)(l,(0,r.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"/API/README"},(0,a.yg)("strong",{parentName:"a"},"Snapper Project"))," \u2022 ",(0,a.yg)("strong",{parentName:"p"},"Docs")),(0,a.yg)("hr",null),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"/API/README"},"Snapper Project")," / ",(0,a.yg)("a",{parentName:"p",href:"/API/utils/dynamicSnapHelpers/README"},"utils/dynamicSnapHelpers")," / startAndConnectToSnap"),(0,a.yg)("h1",{id:"function-startandconnecttosnap"},"Function: startAndConnectToSnap()"),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},(0,a.yg)("strong",{parentName:"p"},"startAndConnectToSnap"),"(",(0,a.yg)("inlineCode",{parentName:"p"},"directory"),"): ",(0,a.yg)("inlineCode",{parentName:"p"},"Promise"),"\\<",(0,a.yg)("inlineCode",{parentName:"p"},"any"),">")),(0,a.yg)("p",null,"Starts the Snap server and connects to it."),(0,a.yg)("p",null,"This function first starts the Snap server in the background using the\n",(0,a.yg)("inlineCode",{parentName:"p"},"startSnapServer")," function, then waits for a few seconds before attempting\nto connect to the Snap server using the ",(0,a.yg)("inlineCode",{parentName:"p"},"connectSnapServer")," function. It\nreturns an object containing the Snap server functions and the port number."),(0,a.yg)("h2",{id:"parameters"},"Parameters"),(0,a.yg)("p",null,"\u2022 ",(0,a.yg)("strong",{parentName:"p"},"directory"),": ",(0,a.yg)("inlineCode",{parentName:"p"},"string")),(0,a.yg)("p",null,"The directory where the Snap server should be started."),(0,a.yg)("h2",{id:"returns"},"Returns"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"Promise"),"\\<",(0,a.yg)("inlineCode",{parentName:"p"},"any"),">"),(0,a.yg)("p",null,"The Snap instance if connected successfully."),(0,a.yg)("h2",{id:"defined-in"},"Defined in"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://github.com/asifqatar/Snapper/blob/745a7dc53ba74a10939f2917619e05af16a1385f/utils/dynamicSnapHelpers.ts#L154"},"utils/dynamicSnapHelpers.ts:154")))}u.isMDXComponent=!0}}]);