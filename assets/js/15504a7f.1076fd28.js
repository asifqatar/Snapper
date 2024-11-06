"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2808],{5680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>u});var i=t(6540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=i.createContext({}),s=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=s(e.components);return i.createElement(l.Provider,{value:n},e.children)},y="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},g=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),y=s(t),g=r,u=y["".concat(l,".").concat(g)]||y[g]||d[g]||o;return t?i.createElement(u,a(a({ref:n},c),{},{components:t})):i.createElement(u,a({ref:n},c))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,a=new Array(o);a[0]=g;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p[y]="string"==typeof e?e:r,a[1]=p;for(var s=2;s<o;s++)a[s]=t[s];return i.createElement.apply(null,a)}return i.createElement.apply(null,t)}g.displayName="MDXCreateElement"},5304:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>a,default:()=>y,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var i=t(8168),r=(t(6540),t(5680));const o={},a=void 0,p={unversionedId:"API/types/type-aliases/Finding",id:"API/types/type-aliases/Finding",isDocsHomePage:!1,title:"Finding",description:"Snapper Project \u2022 Docs",source:"@site/docs/API/types/type-aliases/Finding.md",sourceDirName:"API/types/type-aliases",slug:"/API/types/type-aliases/Finding",permalink:"/Snapper/docs/API/types/type-aliases/Finding",editUrl:"https://github.com/sayfer-io/Snapper/blob/main/docs/API/types/type-aliases/Finding.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"README",permalink:"/Snapper/docs/API/types/README"},next:{title:"README",permalink:"/Snapper/docs/API/utils/commandUtils/README"}},l=[{value:"Type declaration",id:"type-declaration",children:[{value:"description",id:"description",children:[]},{value:"position",id:"position",children:[]},{value:"position.filePath",id:"positionfilepath",children:[]},{value:"position.lineNum",id:"positionlinenum",children:[]},{value:"riskRating",id:"riskrating",children:[]},{value:"type",id:"type",children:[]}]},{value:"Defined in",id:"defined-in",children:[]}],s={toc:l},c="wrapper";function y(e){let{components:n,...t}=e;return(0,r.yg)(c,(0,i.A)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"/Snapper/docs/API/README"},(0,r.yg)("strong",{parentName:"a"},"Snapper Project"))," \u2022 ",(0,r.yg)("strong",{parentName:"p"},"Docs")),(0,r.yg)("hr",null),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"/Snapper/docs/API/README"},"Snapper Project")," / ",(0,r.yg)("a",{parentName:"p",href:"/Snapper/docs/API/types/README"},"types")," / Finding"),(0,r.yg)("h1",{id:"type-alias-finding"},"Type Alias: Finding"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},(0,r.yg)("strong",{parentName:"p"},"Finding"),": ",(0,r.yg)("inlineCode",{parentName:"p"},"object"))),(0,r.yg)("p",null,"Represents a finding in the source code."),(0,r.yg)("h2",{id:"type-declaration"},"Type declaration"),(0,r.yg)("h3",{id:"description"},"description"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},(0,r.yg)("strong",{parentName:"p"},"description"),": ",(0,r.yg)("inlineCode",{parentName:"p"},"string"))),(0,r.yg)("p",null,"A description of the finding."),(0,r.yg)("h3",{id:"position"},"position"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},(0,r.yg)("strong",{parentName:"p"},"position"),": ",(0,r.yg)("inlineCode",{parentName:"p"},"object"))),(0,r.yg)("p",null,"The position of the finding in the source code."),(0,r.yg)("h3",{id:"positionfilepath"},"position.filePath"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},(0,r.yg)("strong",{parentName:"p"},"filePath"),": ",(0,r.yg)("inlineCode",{parentName:"p"},"string"))),(0,r.yg)("p",null,"The file path where the finding is located."),(0,r.yg)("h3",{id:"positionlinenum"},"position.lineNum"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},(0,r.yg)("strong",{parentName:"p"},"lineNum"),": ",(0,r.yg)("inlineCode",{parentName:"p"},"number"))),(0,r.yg)("p",null,"The line number where the finding is located."),(0,r.yg)("h3",{id:"riskrating"},"riskRating"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},(0,r.yg)("strong",{parentName:"p"},"riskRating"),": ",(0,r.yg)("inlineCode",{parentName:"p"},"RiskRating"))),(0,r.yg)("p",null,"The risk rating associated with the finding."),(0,r.yg)("h3",{id:"type"},"type"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},(0,r.yg)("strong",{parentName:"p"},"type"),": ",(0,r.yg)("inlineCode",{parentName:"p"},"string"))),(0,r.yg)("p",null,"The type of the finding."),(0,r.yg)("h2",{id:"defined-in"},"Defined in"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://github.com/asifqatar/Snapper/blob/efbcec64e60623713bea5b66951928dbe973c565/types/index.d.ts#L6"},"types/index.d.ts:6")))}y.isMDXComponent=!0}}]);