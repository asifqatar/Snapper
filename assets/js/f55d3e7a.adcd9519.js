"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8863],{5680:(e,t,r)=>{r.d(t,{xA:()=>u,yg:()=>g});var n=r(6540);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(r),d=o,g=c["".concat(l,".").concat(d)]||c[d]||y[d]||a;return r?n.createElement(g,i(i({ref:t},u),{},{components:r})):n.createElement(g,i({ref:t},u))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7132:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=r(8168),o=(r(6540),r(5680));const a={sidebar_position:5},i="Deploy your site",s={unversionedId:"tutorial-basics/deploy-your-site",id:"tutorial-basics/deploy-your-site",isDocsHomePage:!1,title:"Deploy your site",description:"Docusaurus is a static-site-generator (also called Jamstack).",source:"@site/docs/tutorial-basics/deploy-your-site.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/deploy-your-site",permalink:"/Snapper/docs/tutorial-basics/deploy-your-site",editUrl:"https://github.com/sayfer-io/Snapper/blob/main/docs/tutorial-basics/deploy-your-site.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Markdown Features",permalink:"/Snapper/docs/tutorial-basics/markdown-features"},next:{title:"Congratulations!",permalink:"/Snapper/docs/tutorial-basics/congratulations"}},l=[{value:"Build your site",id:"build-your-site",children:[]},{value:"Deploy your site",id:"deploy-your-site-1",children:[]}],p={toc:l},u="wrapper";function c(e){let{components:t,...r}=e;return(0,o.yg)(u,(0,n.A)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"deploy-your-site"},"Deploy your site"),(0,o.yg)("p",null,"Docusaurus is a ",(0,o.yg)("strong",{parentName:"p"},"static-site-generator")," (also called ",(0,o.yg)("strong",{parentName:"p"},(0,o.yg)("a",{parentName:"strong",href:"https://jamstack.org/"},"Jamstack")),")."),(0,o.yg)("p",null,"It builds your site as simple ",(0,o.yg)("strong",{parentName:"p"},"static HTML, JavaScript and CSS files"),"."),(0,o.yg)("h2",{id:"build-your-site"},"Build your site"),(0,o.yg)("p",null,"Build your site ",(0,o.yg)("strong",{parentName:"p"},"for production"),":"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"npm run build\n")),(0,o.yg)("p",null,"The static files are generated in the ",(0,o.yg)("inlineCode",{parentName:"p"},"build")," folder."),(0,o.yg)("h2",{id:"deploy-your-site-1"},"Deploy your site"),(0,o.yg)("p",null,"Test your production build locally:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"npm run serve\n")),(0,o.yg)("p",null,"The ",(0,o.yg)("inlineCode",{parentName:"p"},"build")," folder is now served at ",(0,o.yg)("inlineCode",{parentName:"p"},"http://localhost:3000/"),"."),(0,o.yg)("p",null,"You can now deploy the ",(0,o.yg)("inlineCode",{parentName:"p"},"build")," folder ",(0,o.yg)("strong",{parentName:"p"},"almost anywhere")," easily, ",(0,o.yg)("strong",{parentName:"p"},"for free")," or very small cost (read the ",(0,o.yg)("strong",{parentName:"p"},(0,o.yg)("a",{parentName:"strong",href:"https://docusaurus.io/docs/deployment"},"Deployment Guide")),")."))}c.isMDXComponent=!0}}]);