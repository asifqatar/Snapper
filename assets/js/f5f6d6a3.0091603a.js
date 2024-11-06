"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7086],{5680:(e,n,t)=>{t.d(n,{xA:()=>l,yg:()=>m});var r=t(6540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},y=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(t),y=a,m=d["".concat(c,".").concat(y)]||d[y]||u[y]||o;return t?r.createElement(m,i(i({ref:n},l),{},{components:t})):r.createElement(m,i({ref:n},l))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=y;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s[d]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},5712:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=t(8168),a=(t(6540),t(5680));const o={},i=void 0,s={unversionedId:"API/utils/dynamicSnapHelpers/functions/startAndConnectToSnap",id:"API/utils/dynamicSnapHelpers/functions/startAndConnectToSnap",isDocsHomePage:!1,title:"startAndConnectToSnap",description:"Snapper Project \u2022 Docs",source:"@site/docs/API/utils/dynamicSnapHelpers/functions/startAndConnectToSnap.md",sourceDirName:"API/utils/dynamicSnapHelpers/functions",slug:"/API/utils/dynamicSnapHelpers/functions/startAndConnectToSnap",permalink:"/docs-site/docs/docs/API/utils/dynamicSnapHelpers/functions/startAndConnectToSnap",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/API/utils/dynamicSnapHelpers/functions/startAndConnectToSnap.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"sleep",permalink:"/docs-site/docs/docs/API/utils/dynamicSnapHelpers/functions/sleep"},next:{title:"startSnapServer",permalink:"/docs-site/docs/docs/API/utils/dynamicSnapHelpers/functions/startSnapServer"}},c=[{value:"Parameters",id:"parameters",children:[]},{value:"Returns",id:"returns",children:[]},{value:"Defined in",id:"defined-in",children:[]}],p={toc:c},l="wrapper";function d(e){let{components:n,...t}=e;return(0,a.yg)(l,(0,r.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"/docs-site/docs/docs/API/README"},(0,a.yg)("strong",{parentName:"a"},"Snapper Project"))," \u2022 ",(0,a.yg)("strong",{parentName:"p"},"Docs")),(0,a.yg)("hr",null),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"/docs-site/docs/docs/API/README"},"Snapper Project")," / ",(0,a.yg)("a",{parentName:"p",href:"/docs-site/docs/docs/API/utils/dynamicSnapHelpers/README"},"utils/dynamicSnapHelpers")," / startAndConnectToSnap"),(0,a.yg)("h1",{id:"function-startandconnecttosnap"},"Function: startAndConnectToSnap()"),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},(0,a.yg)("strong",{parentName:"p"},"startAndConnectToSnap"),"(",(0,a.yg)("inlineCode",{parentName:"p"},"directory"),"): ",(0,a.yg)("inlineCode",{parentName:"p"},"Promise"),"\\<",(0,a.yg)("inlineCode",{parentName:"p"},"any"),">")),(0,a.yg)("p",null,"Starts the Snap server and connects to it."),(0,a.yg)("h2",{id:"parameters"},"Parameters"),(0,a.yg)("p",null,"\u2022 ",(0,a.yg)("strong",{parentName:"p"},"directory"),": ",(0,a.yg)("inlineCode",{parentName:"p"},"string")),(0,a.yg)("p",null,"The directory where the Snap server should be started."),(0,a.yg)("h2",{id:"returns"},"Returns"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"Promise"),"\\<",(0,a.yg)("inlineCode",{parentName:"p"},"any"),">"),(0,a.yg)("p",null,"The Snap instance if connected successfully."),(0,a.yg)("h2",{id:"defined-in"},"Defined in"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://github.com/asifqatar/Snapper/blob/efbcec64e60623713bea5b66951928dbe973c565/utils/dynamicSnapHelpers.ts#L109"},"utils/dynamicSnapHelpers.ts:109")))}d.isMDXComponent=!0}}]);