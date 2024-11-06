"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3892],{5680:(e,n,t)=>{t.d(n,{xA:()=>l,yg:()=>m});var r=t(6540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},l=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},y=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=s(t),y=a,m=u["".concat(c,".").concat(y)]||u[y]||d[y]||i;return t?r.createElement(m,o(o({ref:n},l),{},{components:t})):r.createElement(m,o({ref:n},l))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=y;var p={};for(var c in n)hasOwnProperty.call(n,c)&&(p[c]=n[c]);p.originalType=e,p[u]="string"==typeof e?e:a,o[1]=p;for(var s=2;s<i;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},7240:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var r=t(8168),a=(t(6540),t(5680));const i={},o=void 0,p={unversionedId:"API/utils/dynamicSnapHelpers/functions/buildSnap",id:"API/utils/dynamicSnapHelpers/functions/buildSnap",isDocsHomePage:!1,title:"buildSnap",description:"Snapper Project \u2022 Docs",source:"@site/docs/API/utils/dynamicSnapHelpers/functions/buildSnap.md",sourceDirName:"API/utils/dynamicSnapHelpers/functions",slug:"/API/utils/dynamicSnapHelpers/functions/buildSnap",permalink:"/docs-site/docs/docs/API/utils/dynamicSnapHelpers/functions/buildSnap",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/API/utils/dynamicSnapHelpers/functions/buildSnap.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"README",permalink:"/docs-site/docs/docs/API/utils/dynamicSnapHelpers/README"},next:{title:"connectSnapServer",permalink:"/docs-site/docs/docs/API/utils/dynamicSnapHelpers/functions/connectSnapServer"}},c=[{value:"Parameters",id:"parameters",children:[]},{value:"Returns",id:"returns",children:[]},{value:"Defined in",id:"defined-in",children:[]}],s={toc:c},l="wrapper";function u(e){let{components:n,...t}=e;return(0,a.yg)(l,(0,r.A)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"/docs-site/docs/docs/API/README"},(0,a.yg)("strong",{parentName:"a"},"Snapper Project"))," \u2022 ",(0,a.yg)("strong",{parentName:"p"},"Docs")),(0,a.yg)("hr",null),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"/docs-site/docs/docs/API/README"},"Snapper Project")," / ",(0,a.yg)("a",{parentName:"p",href:"/docs-site/docs/docs/API/utils/dynamicSnapHelpers/README"},"utils/dynamicSnapHelpers")," / buildSnap"),(0,a.yg)("h1",{id:"function-buildsnap"},"Function: buildSnap()"),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},(0,a.yg)("strong",{parentName:"p"},"buildSnap"),"(",(0,a.yg)("inlineCode",{parentName:"p"},"projectFolderPath"),"): ",(0,a.yg)("inlineCode",{parentName:"p"},"Promise"),"\\<",(0,a.yg)("inlineCode",{parentName:"p"},"void"),">")),(0,a.yg)("p",null,"Prepares the Snap by setting up dependencies and building it."),(0,a.yg)("h2",{id:"parameters"},"Parameters"),(0,a.yg)("p",null,"\u2022 ",(0,a.yg)("strong",{parentName:"p"},"projectFolderPath"),": ",(0,a.yg)("inlineCode",{parentName:"p"},"string")),(0,a.yg)("p",null,"The directory of the Snap."),(0,a.yg)("h2",{id:"returns"},"Returns"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"Promise"),"\\<",(0,a.yg)("inlineCode",{parentName:"p"},"void"),">"),(0,a.yg)("h2",{id:"defined-in"},"Defined in"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://github.com/asifqatar/Snapper/blob/efbcec64e60623713bea5b66951928dbe973c565/utils/dynamicSnapHelpers.ts#L91"},"utils/dynamicSnapHelpers.ts:91")))}u.isMDXComponent=!0}}]);