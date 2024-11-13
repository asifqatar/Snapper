"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7549],{5680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>y});var r=t(6540);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(t),m=i,y=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return t?r.createElement(y,o(o({ref:n},c),{},{components:t})):r.createElement(y,o({ref:n},c))}));function y(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=m;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p[u]="string"==typeof e?e:i,o[1]=p;for(var s=2;s<a;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},871:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>p,toc:()=>l});var r=t(8168),i=(t(6540),t(5680));const a={},o=void 0,p={unversionedId:"API/utils/dynamicSnapHelpers/functions/sleep",id:"API/utils/dynamicSnapHelpers/functions/sleep",isDocsHomePage:!1,title:"sleep",description:"Snapper Project \u2022 Docs",source:"@site/docs/API/utils/dynamicSnapHelpers/functions/sleep.md",sourceDirName:"API/utils/dynamicSnapHelpers/functions",slug:"/API/utils/dynamicSnapHelpers/functions/sleep",permalink:"/Snapper/API/utils/dynamicSnapHelpers/functions/sleep",editUrl:"https://github.com/sayfer-io/Snapper/blob/main/docs/API/utils/dynamicSnapHelpers/functions/sleep.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"installDependencies",permalink:"/Snapper/API/utils/dynamicSnapHelpers/functions/installDependencies"},next:{title:"startAndConnectToSnap",permalink:"/Snapper/API/utils/dynamicSnapHelpers/functions/startAndConnectToSnap"}},l=[{value:"Parameters",id:"parameters",children:[]},{value:"Returns",id:"returns",children:[]},{value:"Defined in",id:"defined-in",children:[]}],s={toc:l},c="wrapper";function u(e){let{components:n,...t}=e;return(0,i.yg)(c,(0,r.A)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Snapper Project")," \u2022 ",(0,i.yg)("strong",{parentName:"p"},"Docs")),(0,i.yg)("hr",null),(0,i.yg)("h1",{id:"function-sleep"},"Function: sleep()"),(0,i.yg)("blockquote",null,(0,i.yg)("p",{parentName:"blockquote"},(0,i.yg)("strong",{parentName:"p"},"sleep"),"(",(0,i.yg)("inlineCode",{parentName:"p"},"ms"),"): ",(0,i.yg)("inlineCode",{parentName:"p"},"Promise"),"\\<",(0,i.yg)("inlineCode",{parentName:"p"},"void"),">")),(0,i.yg)("p",null,"Sleeps for the specified number of milliseconds."),(0,i.yg)("p",null,"This function provides a simple way to pause the execution of the code for a\ngiven duration. It returns a Promise that resolves after the specified\nnumber of milliseconds."),(0,i.yg)("h2",{id:"parameters"},"Parameters"),(0,i.yg)("p",null,"\u2022 ",(0,i.yg)("strong",{parentName:"p"},"ms"),": ",(0,i.yg)("inlineCode",{parentName:"p"},"number")),(0,i.yg)("p",null,"The number of milliseconds to sleep."),(0,i.yg)("h2",{id:"returns"},"Returns"),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"Promise"),"\\<",(0,i.yg)("inlineCode",{parentName:"p"},"void"),">"),(0,i.yg)("h2",{id:"defined-in"},"Defined in"),(0,i.yg)("p",null,(0,i.yg)("a",{parentName:"p",href:"https://github.com/asifqatar/Snapper/blob/1d48336393770932279ea1b6ba1c8407a2b1d178/utils/dynamicSnapHelpers.ts#L18"},"utils/dynamicSnapHelpers.ts:18")))}u.isMDXComponent=!0}}]);