"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7549],{5680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>y});var r=t(6540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=s(t),d=a,y=u["".concat(l,".").concat(d)]||u[d]||m[d]||i;return t?r.createElement(y,p(p({ref:n},c),{},{components:t})):r.createElement(y,p({ref:n},c))}));function y(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,p=new Array(i);p[0]=d;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o[u]="string"==typeof e?e:a,p[1]=o;for(var s=2;s<i;s++)p[s]=t[s];return r.createElement.apply(null,p)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},871:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>p,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var r=t(8168),a=(t(6540),t(5680));const i={},p=void 0,o={unversionedId:"API/utils/dynamicSnapHelpers/functions/sleep",id:"API/utils/dynamicSnapHelpers/functions/sleep",isDocsHomePage:!1,title:"sleep",description:"Snapper Project \u2022 Docs",source:"@site/docs/API/utils/dynamicSnapHelpers/functions/sleep.md",sourceDirName:"API/utils/dynamicSnapHelpers/functions",slug:"/API/utils/dynamicSnapHelpers/functions/sleep",permalink:"/API/utils/dynamicSnapHelpers/functions/sleep",editUrl:"https://github.com/sayfer-io/Snapper/blob/main/docs/API/utils/dynamicSnapHelpers/functions/sleep.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"installDependencies",permalink:"/API/utils/dynamicSnapHelpers/functions/installDependencies"},next:{title:"startAndConnectToSnap",permalink:"/API/utils/dynamicSnapHelpers/functions/startAndConnectToSnap"}},l=[{value:"Parameters",id:"parameters",children:[]},{value:"Returns",id:"returns",children:[]},{value:"Defined in",id:"defined-in",children:[]}],s={toc:l},c="wrapper";function u(e){let{components:n,...t}=e;return(0,a.yg)(c,(0,r.A)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"/API/README"},(0,a.yg)("strong",{parentName:"a"},"Snapper Project"))," \u2022 ",(0,a.yg)("strong",{parentName:"p"},"Docs")),(0,a.yg)("hr",null),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"/API/README"},"Snapper Project")," / ",(0,a.yg)("a",{parentName:"p",href:"/API/utils/dynamicSnapHelpers/README"},"utils/dynamicSnapHelpers")," / sleep"),(0,a.yg)("h1",{id:"function-sleep"},"Function: sleep()"),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},(0,a.yg)("strong",{parentName:"p"},"sleep"),"(",(0,a.yg)("inlineCode",{parentName:"p"},"ms"),"): ",(0,a.yg)("inlineCode",{parentName:"p"},"Promise"),"\\<",(0,a.yg)("inlineCode",{parentName:"p"},"void"),">")),(0,a.yg)("p",null,"Sleeps for the specified number of milliseconds."),(0,a.yg)("p",null,"This function provides a simple way to pause the execution of the code for a\ngiven duration. It returns a Promise that resolves after the specified\nnumber of milliseconds."),(0,a.yg)("h2",{id:"parameters"},"Parameters"),(0,a.yg)("p",null,"\u2022 ",(0,a.yg)("strong",{parentName:"p"},"ms"),": ",(0,a.yg)("inlineCode",{parentName:"p"},"number")),(0,a.yg)("p",null,"The number of milliseconds to sleep."),(0,a.yg)("h2",{id:"returns"},"Returns"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"Promise"),"\\<",(0,a.yg)("inlineCode",{parentName:"p"},"void"),">"),(0,a.yg)("h2",{id:"defined-in"},"Defined in"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://github.com/asifqatar/Snapper/blob/745a7dc53ba74a10939f2917619e05af16a1385f/utils/dynamicSnapHelpers.ts#L18"},"utils/dynamicSnapHelpers.ts:18")))}u.isMDXComponent=!0}}]);