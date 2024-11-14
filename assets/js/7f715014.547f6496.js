"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7956],{5680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>d});var r=t(6540);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u=r.createContext({}),s=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(u.Provider,{value:n},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=s(t),f=i,d=c["".concat(u,".").concat(f)]||c[f]||g[f]||o;return t?r.createElement(d,a(a({ref:n},p),{},{components:t})):r.createElement(d,a({ref:n},p))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=f;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l[c]="string"==typeof e?e:i,a[1]=l;for(var s=2;s<o;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},4604:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>a,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=t(8168),i=(t(6540),t(5680));const o={},a=void 0,l={unversionedId:"API/utils/config/functions/configureYargs",id:"API/utils/config/functions/configureYargs",isDocsHomePage:!1,title:"configureYargs",description:"*",source:"@site/docs/API/utils/config/functions/configureYargs.md",sourceDirName:"API/utils/config/functions",slug:"/API/utils/config/functions/configureYargs",permalink:"/Snapper/API/utils/config/functions/configureYargs",editUrl:"https://github.com/sayfer-io/Snapper/blob/main/docs/API/utils/config/functions/configureYargs.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"runCommandDetached",permalink:"/Snapper/API/utils/commandUtils/functions/runCommandDetached"},next:{title:"buildSnap",permalink:"/Snapper/API/utils/dynamicSnapHelpers/functions/buildSnap"}},u=[{value:"Returns",id:"returns",children:[]},{value:"Defined in",id:"defined-in",children:[]}],s={toc:u},p="wrapper";function c(e){let{components:n,...t}=e;return(0,i.yg)(p,(0,r.A)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("hr",null),(0,i.yg)("h1",{id:"function-configureyargs"},"Function: configureYargs()"),(0,i.yg)("blockquote",null,(0,i.yg)("p",{parentName:"blockquote"},(0,i.yg)("strong",{parentName:"p"},"configureYargs"),"(): ",(0,i.yg)("inlineCode",{parentName:"p"},"CliOptions"))),(0,i.yg)("p",null,"Configures command-line arguments using yargs."),(0,i.yg)("p",null,"This function sets up the command-line argument parsing using the ",(0,i.yg)("inlineCode",{parentName:"p"},"yargs"),"\nlibrary. It defines the following options:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"path"),": The path to the project directory. This is a required option."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"detectors"),": An array of detector names to run. This is an optional option."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"verbose"),": A flag to enable verbose logging. This is an optional option."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"output"),": The path to the output file. This is an optional option."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"logFile"),": The path to the log file. This is an optional option.")),(0,i.yg)("p",null,"The function also includes error handling to display a helpful error message\nif the provided arguments are invalid, and then exits the process."),(0,i.yg)("h2",{id:"returns"},"Returns"),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"CliOptions")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"The parsed command-line arguments.")),(0,i.yg)("h2",{id:"defined-in"},"Defined in"),(0,i.yg)("p",null,(0,i.yg)("a",{parentName:"p",href:"https://github.com/asifqatar/Snapper/blob/906ddfcaf1558e94a3ec8d6df532b24adee091b6/utils/config.ts#L31"},"utils/config.ts:31")))}c.isMDXComponent=!0}}]);