"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9354],{5680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>m});var a=t(6540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var g=a.createContext({}),l=function(e){var n=a.useContext(g),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=l(e.components);return a.createElement(g.Provider,{value:n},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},y=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,g=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(t),y=r,m=d["".concat(g,".").concat(y)]||d[y]||c[y]||i;return t?a.createElement(m,o(o({ref:n},p),{},{components:t})):a.createElement(m,o({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=y;var s={};for(var g in n)hasOwnProperty.call(n,g)&&(s[g]=n[g]);s.originalType=e,s[d]="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=t[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}y.displayName="MDXCreateElement"},1409:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>g});var a=t(8168),r=(t(6540),t(5680));const i={},o=void 0,s={unversionedId:"API/detectors/DependencyVersioning/classes/DependencyVersioningDetector",id:"API/detectors/DependencyVersioning/classes/DependencyVersioningDetector",isDocsHomePage:!1,title:"DependencyVersioningDetector",description:"Snapper Project \u2022 Docs",source:"@site/docs/API/detectors/DependencyVersioning/classes/DependencyVersioningDetector.md",sourceDirName:"API/detectors/DependencyVersioning/classes",slug:"/API/detectors/DependencyVersioning/classes/DependencyVersioningDetector",permalink:"/API/detectors/DependencyVersioning/classes/DependencyVersioningDetector",editUrl:"https://github.com/sayfer-io/Snapper/blob/main/docs/API/detectors/DependencyVersioning/classes/DependencyVersioningDetector.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"README",permalink:"/API/detectors/DependencyVersioning/README"},next:{title:"README",permalink:"/API/detectors/DeprecatedFunctions/README"}},g=[{value:"Extends",id:"extends",children:[]},{value:"Constructors",id:"constructors",children:[{value:"new DependencyVersioningDetector()",id:"new-dependencyversioningdetector",children:[]}]},{value:"Properties",id:"properties",children:[{value:"allowedFileRegexes",id:"allowedfileregexes",children:[]},{value:"findings",id:"findings",children:[]},{value:"name",id:"name",children:[]},{value:"riskRating",id:"riskrating",children:[]}]},{value:"Methods",id:"methods",children:[{value:"addFinding()",id:"addfinding",children:[]},{value:"clearFindings()",id:"clearfindings",children:[]},{value:"getFindings()",id:"getfindings",children:[]},{value:"getName()",id:"getname",children:[]},{value:"logDebug()",id:"logdebug",children:[]},{value:"logError()",id:"logerror",children:[]},{value:"logInfo()",id:"loginfo",children:[]},{value:"logWarning()",id:"logwarning",children:[]},{value:"run()",id:"run",children:[]}]}],l={toc:g},p="wrapper";function d(e){let{components:n,...t}=e;return(0,r.yg)(p,(0,a.A)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"/API/README"},(0,r.yg)("strong",{parentName:"a"},"Snapper Project"))," \u2022 ",(0,r.yg)("strong",{parentName:"p"},"Docs")),(0,r.yg)("hr",null),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"/API/README"},"Snapper Project")," / ",(0,r.yg)("a",{parentName:"p",href:"/API/detectors/DependencyVersioning/README"},"detectors/DependencyVersioning")," / DependencyVersioningDetector"),(0,r.yg)("h1",{id:"class-dependencyversioningdetector"},"Class: DependencyVersioningDetector"),(0,r.yg)("p",null,'Class to detect dependencies with non-exact versions in the package.json file.\nNon-exact versions (e.g., versions starting with "^" or "~") allow the installation\nof newer versions of a dependency, which may introduce breaking changes or vulnerabilities.'),(0,r.yg)("h2",{id:"extends"},"Extends"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/API/detectors/DetectorBase/classes/DetectorBase"},(0,r.yg)("inlineCode",{parentName:"a"},"DetectorBase")))),(0,r.yg)("h2",{id:"constructors"},"Constructors"),(0,r.yg)("h3",{id:"new-dependencyversioningdetector"},"new DependencyVersioningDetector()"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},(0,r.yg)("strong",{parentName:"p"},"new DependencyVersioningDetector"),"(): ",(0,r.yg)("a",{parentName:"p",href:"/API/detectors/DependencyVersioning/classes/DependencyVersioningDetector"},(0,r.yg)("inlineCode",{parentName:"a"},"DependencyVersioningDetector")))),(0,r.yg)("p",null,"Constructor for the DependencyVersioningDetector.\nInitializes the detector with a name and assigns a medium-risk rating."),(0,r.yg)("h4",{id:"returns"},"Returns"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"/API/detectors/DependencyVersioning/classes/DependencyVersioningDetector"},(0,r.yg)("inlineCode",{parentName:"a"},"DependencyVersioningDetector"))),(0,r.yg)("h4",{id:"overrides"},"Overrides"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"/API/detectors/DetectorBase/classes/DetectorBase"},(0,r.yg)("inlineCode",{parentName:"a"},"DetectorBase")),".",(0,r.yg)("a",{parentName:"p",href:"/API/detectors/DetectorBase/classes/DetectorBase#constructors"},(0,r.yg)("inlineCode",{parentName:"a"},"constructor"))),(0,r.yg)("h4",{id:"defined-in"},"Defined in"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://github.com/asifqatar/Snapper/blob/745a7dc53ba74a10939f2917619e05af16a1385f/detectors/DependencyVersioning.ts#L21"},"detectors/DependencyVersioning.ts:21")),(0,r.yg)("h2",{id:"properties"},"Properties"),(0,r.yg)("h3",{id:"allowedfileregexes"},"allowedFileRegexes"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},(0,r.yg)("strong",{parentName:"p"},"allowedFileRegexes"),": ",(0,r.yg)("inlineCode",{parentName:"p"},"RegExp"),"[]")),(0,r.yg)("h4",{id:"overrides-1"},"Overrides"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"/API/detectors/DetectorBase/classes/DetectorBase"},(0,r.yg)("inlineCode",{parentName:"a"},"DetectorBase")),".",(0,r.yg)("a",{parentName:"p",href:"/API/detectors/DetectorBase/classes/DetectorBase#allowedfileregexes"},(0,r.yg)("inlineCode",{parentName:"a"},"allowedFileRegexes"))),(0,r.yg)("h4",{id:"defined-in-1"},"Defined in"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://github.com/asifqatar/Snapper/blob/745a7dc53ba74a10939f2917619e05af16a1385f/detectors/DependencyVersioning.ts#L14"},"detectors/DependencyVersioning.ts:14")),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"findings"},"findings"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},(0,r.yg)("inlineCode",{parentName:"p"},"protected")," ",(0,r.yg)("strong",{parentName:"p"},"findings"),": ",(0,r.yg)("a",{parentName:"p",href:"/API/types/type-aliases/Finding"},(0,r.yg)("inlineCode",{parentName:"a"},"Finding")),"[] = ",(0,r.yg)("inlineCode",{parentName:"p"},"[]"))),(0,r.yg)("h4",{id:"inherited-from"},"Inherited from"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"/API/detectors/DetectorBase/classes/DetectorBase"},(0,r.yg)("inlineCode",{parentName:"a"},"DetectorBase")),".",(0,r.yg)("a",{parentName:"p",href:"/API/detectors/DetectorBase/classes/DetectorBase#findings"},(0,r.yg)("inlineCode",{parentName:"a"},"findings"))),(0,r.yg)("h4",{id:"defined-in-2"},"Defined in"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://github.com/asifqatar/Snapper/blob/745a7dc53ba74a10939f2917619e05af16a1385f/detectors/DetectorBase.ts#L16"},"detectors/DetectorBase.ts:16")),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"name"},"name"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},(0,r.yg)("inlineCode",{parentName:"p"},"protected")," ",(0,r.yg)("strong",{parentName:"p"},"name"),": ",(0,r.yg)("inlineCode",{parentName:"p"},"string"))),(0,r.yg)("h4",{id:"inherited-from-1"},"Inherited from"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"/API/detectors/DetectorBase/classes/DetectorBase"},(0,r.yg)("inlineCode",{parentName:"a"},"DetectorBase")),".",(0,r.yg)("a",{parentName:"p",href:"/API/detectors/DetectorBase/classes/DetectorBase#name"},(0,r.yg)("inlineCode",{parentName:"a"},"name"))),(0,r.yg)("h4",{id:"defined-in-3"},"Defined in"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://github.com/asifqatar/Snapper/blob/745a7dc53ba74a10939f2917619e05af16a1385f/detectors/DetectorBase.ts#L14"},"detectors/DetectorBase.ts:14")),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"riskrating"},"riskRating"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},(0,r.yg)("inlineCode",{parentName:"p"},"protected")," ",(0,r.yg)("strong",{parentName:"p"},"riskRating"),": ",(0,r.yg)("a",{parentName:"p",href:"/API/structures/enumerations/RiskRating"},(0,r.yg)("inlineCode",{parentName:"a"},"RiskRating")))),(0,r.yg)("h4",{id:"inherited-from-2"},"Inherited from"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"/API/detectors/DetectorBase/classes/DetectorBase"},(0,r.yg)("inlineCode",{parentName:"a"},"DetectorBase")),".",(0,r.yg)("a",{parentName:"p",href:"/API/detectors/DetectorBase/classes/DetectorBase#riskrating"},(0,r.yg)("inlineCode",{parentName:"a"},"riskRating"))),(0,r.yg)("h4",{id:"defined-in-4"},"Defined in"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://github.com/asifqatar/Snapper/blob/745a7dc53ba74a10939f2917619e05af16a1385f/detectors/DetectorBase.ts#L15"},"detectors/DetectorBase.ts:15")),(0,r.yg)("h2",{id:"methods"},"Methods"),(0,r.yg)("h3",{id:"addfinding"},"addFinding()"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},(0,r.yg)("strong",{parentName:"p"},"addFinding"),"(",(0,r.yg)("inlineCode",{parentName:"p"},"description"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"filePath"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"lineNum"),"): ",(0,r.yg)("inlineCode",{parentName:"p"},"void"))),(0,r.yg)("p",null,"Adds a finding to the findings array.\nThis method creates a Finding object and logs a debug message before adding it to the findings list."),(0,r.yg)("h4",{id:"parameters"},"Parameters"),(0,r.yg)("p",null,"\u2022 ",(0,r.yg)("strong",{parentName:"p"},"description"),": ",(0,r.yg)("inlineCode",{parentName:"p"},"string")),(0,r.yg)("p",null,"Description of the finding."),(0,r.yg)("p",null,"\u2022 ",(0,r.yg)("strong",{parentName:"p"},"filePath"),": ",(0,r.yg)("inlineCode",{parentName:"p"},"string")),(0,r.yg)("p",null,"Path of the file where the finding was detected."),(0,r.yg)("p",null,"\u2022 ",(0,r.yg)("strong",{parentName:"p"},"lineNum"),": ",(0,r.yg)("inlineCode",{parentName:"p"},"number")," = ",(0,r.yg)("inlineCode",{parentName:"p"},"1")),(0,r.yg)("p",null,"Line number where the finding was detected (default is 1)."),(0,r.yg)("h4",{id:"returns-1"},"Returns"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"void")),(0,r.yg)("h4",{id:"inherited-from-3"},"Inherited from"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"/API/detectors/DetectorBase/classes/DetectorBase"},(0,r.yg)("inlineCode",{parentName:"a"},"DetectorBase")),".",(0,r.yg)("a",{parentName:"p",href:"/API/detectors/DetectorBase/classes/DetectorBase#addfinding"},(0,r.yg)("inlineCode",{parentName:"a"},"addFinding"))),(0,r.yg)("h4",{id:"defined-in-5"},"Defined in"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://github.com/asifqatar/Snapper/blob/745a7dc53ba74a10939f2917619e05af16a1385f/detectors/DetectorBase.ts#L41"},"detectors/DetectorBase.ts:41")),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"clearfindings"},"clearFindings()"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},(0,r.yg)("strong",{parentName:"p"},"clearFindings"),"(): ",(0,r.yg)("inlineCode",{parentName:"p"},"void"))),(0,r.yg)("p",null,"Clears all findings from the detector.\nThis method resets the findings array to an empty state."),(0,r.yg)("h4",{id:"returns-2"},"Returns"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"void")),(0,r.yg)("h4",{id:"inherited-from-4"},"Inherited from"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"/API/detectors/DetectorBase/classes/DetectorBase"},(0,r.yg)("inlineCode",{parentName:"a"},"DetectorBase")),".",(0,r.yg)("a",{parentName:"p",href:"/API/detectors/DetectorBase/classes/DetectorBase#clearfindings"},(0,r.yg)("inlineCode",{parentName:"a"},"clearFindings"))),(0,r.yg)("h4",{id:"defined-in-6"},"Defined in"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://github.com/asifqatar/Snapper/blob/745a7dc53ba74a10939f2917619e05af16a1385f/detectors/DetectorBase.ts#L59"},"detectors/DetectorBase.ts:59")),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"getfindings"},"getFindings()"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},(0,r.yg)("strong",{parentName:"p"},"getFindings"),"(): ",(0,r.yg)("a",{parentName:"p",href:"/API/types/type-aliases/Finding"},(0,r.yg)("inlineCode",{parentName:"a"},"Finding")),"[]")),(0,r.yg)("p",null,"Retrieves all findings collected by the detector."),(0,r.yg)("h4",{id:"returns-3"},"Returns"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"/API/types/type-aliases/Finding"},(0,r.yg)("inlineCode",{parentName:"a"},"Finding")),"[]"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Array of findings.")),(0,r.yg)("h4",{id:"inherited-from-5"},"Inherited from"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"/API/detectors/DetectorBase/classes/DetectorBase"},(0,r.yg)("inlineCode",{parentName:"a"},"DetectorBase")),".",(0,r.yg)("a",{parentName:"p",href:"/API/detectors/DetectorBase/classes/DetectorBase#getfindings"},(0,r.yg)("inlineCode",{parentName:"a"},"getFindings"))),(0,r.yg)("h4",{id:"defined-in-7"},"Defined in"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://github.com/asifqatar/Snapper/blob/745a7dc53ba74a10939f2917619e05af16a1385f/detectors/DetectorBase.ts#L75"},"detectors/DetectorBase.ts:75")),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"getname"},"getName()"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},(0,r.yg)("strong",{parentName:"p"},"getName"),"(): ",(0,r.yg)("inlineCode",{parentName:"p"},"string"))),(0,r.yg)("p",null,"Gets the name of the detector."),(0,r.yg)("h4",{id:"returns-4"},"Returns"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"string")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"The name of the detector.")),(0,r.yg)("h4",{id:"inherited-from-6"},"Inherited from"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"/API/detectors/DetectorBase/classes/DetectorBase"},(0,r.yg)("inlineCode",{parentName:"a"},"DetectorBase")),".",(0,r.yg)("a",{parentName:"p",href:"/API/detectors/DetectorBase/classes/DetectorBase#getname"},(0,r.yg)("inlineCode",{parentName:"a"},"getName"))),(0,r.yg)("h4",{id:"defined-in-8"},"Defined in"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://github.com/asifqatar/Snapper/blob/745a7dc53ba74a10939f2917619e05af16a1385f/detectors/DetectorBase.ts#L67"},"detectors/DetectorBase.ts:67")),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"logdebug"},"logDebug()"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},(0,r.yg)("strong",{parentName:"p"},"logDebug"),"(",(0,r.yg)("inlineCode",{parentName:"p"},"message"),"): ",(0,r.yg)("inlineCode",{parentName:"p"},"void"))),(0,r.yg)("p",null,"Logs a debug message.\nThis method formats the message with the detector's name and logs it at the debug level."),(0,r.yg)("h4",{id:"parameters-1"},"Parameters"),(0,r.yg)("p",null,"\u2022 ",(0,r.yg)("strong",{parentName:"p"},"message"),": ",(0,r.yg)("inlineCode",{parentName:"p"},"string")),(0,r.yg)("p",null,"The message to log."),(0,r.yg)("h4",{id:"returns-5"},"Returns"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"void")),(0,r.yg)("h4",{id:"inherited-from-7"},"Inherited from"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"/API/detectors/DetectorBase/classes/DetectorBase"},(0,r.yg)("inlineCode",{parentName:"a"},"DetectorBase")),".",(0,r.yg)("a",{parentName:"p",href:"/API/detectors/DetectorBase/classes/DetectorBase#logdebug"},(0,r.yg)("inlineCode",{parentName:"a"},"logDebug"))),(0,r.yg)("h4",{id:"defined-in-9"},"Defined in"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://github.com/asifqatar/Snapper/blob/745a7dc53ba74a10939f2917619e05af16a1385f/detectors/DetectorBase.ts#L93"},"detectors/DetectorBase.ts:93")),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"logerror"},"logError()"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},(0,r.yg)("strong",{parentName:"p"},"logError"),"(",(0,r.yg)("inlineCode",{parentName:"p"},"message"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"error"),"?): ",(0,r.yg)("inlineCode",{parentName:"p"},"void"))),(0,r.yg)("p",null,"Logs an error message.\nThis method formats the message with the detector's name and logs it at the error level."),(0,r.yg)("h4",{id:"parameters-2"},"Parameters"),(0,r.yg)("p",null,"\u2022 ",(0,r.yg)("strong",{parentName:"p"},"message"),": ",(0,r.yg)("inlineCode",{parentName:"p"},"string")),(0,r.yg)("p",null,"The message to log."),(0,r.yg)("p",null,"\u2022 ",(0,r.yg)("strong",{parentName:"p"},"error?"),": ",(0,r.yg)("inlineCode",{parentName:"p"},"Error")),(0,r.yg)("p",null,"Optional error object to log alongside the message."),(0,r.yg)("h4",{id:"returns-6"},"Returns"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"void")),(0,r.yg)("h4",{id:"inherited-from-8"},"Inherited from"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"/API/detectors/DetectorBase/classes/DetectorBase"},(0,r.yg)("inlineCode",{parentName:"a"},"DetectorBase")),".",(0,r.yg)("a",{parentName:"p",href:"/API/detectors/DetectorBase/classes/DetectorBase#logerror"},(0,r.yg)("inlineCode",{parentName:"a"},"logError"))),(0,r.yg)("h4",{id:"defined-in-10"},"Defined in"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://github.com/asifqatar/Snapper/blob/745a7dc53ba74a10939f2917619e05af16a1385f/detectors/DetectorBase.ts#L103"},"detectors/DetectorBase.ts:103")),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"loginfo"},"logInfo()"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},(0,r.yg)("strong",{parentName:"p"},"logInfo"),"(",(0,r.yg)("inlineCode",{parentName:"p"},"message"),"): ",(0,r.yg)("inlineCode",{parentName:"p"},"void"))),(0,r.yg)("p",null,"Logs an informational message.\nThis method formats the message with the detector's name and logs it at the info level."),(0,r.yg)("h4",{id:"parameters-3"},"Parameters"),(0,r.yg)("p",null,"\u2022 ",(0,r.yg)("strong",{parentName:"p"},"message"),": ",(0,r.yg)("inlineCode",{parentName:"p"},"string")),(0,r.yg)("p",null,"The message to log."),(0,r.yg)("h4",{id:"returns-7"},"Returns"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"void")),(0,r.yg)("h4",{id:"inherited-from-9"},"Inherited from"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"/API/detectors/DetectorBase/classes/DetectorBase"},(0,r.yg)("inlineCode",{parentName:"a"},"DetectorBase")),".",(0,r.yg)("a",{parentName:"p",href:"/API/detectors/DetectorBase/classes/DetectorBase#loginfo"},(0,r.yg)("inlineCode",{parentName:"a"},"logInfo"))),(0,r.yg)("h4",{id:"defined-in-11"},"Defined in"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://github.com/asifqatar/Snapper/blob/745a7dc53ba74a10939f2917619e05af16a1385f/detectors/DetectorBase.ts#L84"},"detectors/DetectorBase.ts:84")),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"logwarning"},"logWarning()"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},(0,r.yg)("strong",{parentName:"p"},"logWarning"),"(",(0,r.yg)("inlineCode",{parentName:"p"},"message"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"error"),"?): ",(0,r.yg)("inlineCode",{parentName:"p"},"void"))),(0,r.yg)("p",null,"Logs a warning message.\nThis method formats the message with the detector's name and logs it at the warning level."),(0,r.yg)("h4",{id:"parameters-4"},"Parameters"),(0,r.yg)("p",null,"\u2022 ",(0,r.yg)("strong",{parentName:"p"},"message"),": ",(0,r.yg)("inlineCode",{parentName:"p"},"string")),(0,r.yg)("p",null,"The message to log."),(0,r.yg)("p",null,"\u2022 ",(0,r.yg)("strong",{parentName:"p"},"error?"),": ",(0,r.yg)("inlineCode",{parentName:"p"},"Error")),(0,r.yg)("p",null,"Optional error object to log alongside the message."),(0,r.yg)("h4",{id:"returns-8"},"Returns"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"void")),(0,r.yg)("h4",{id:"inherited-from-10"},"Inherited from"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"/API/detectors/DetectorBase/classes/DetectorBase"},(0,r.yg)("inlineCode",{parentName:"a"},"DetectorBase")),".",(0,r.yg)("a",{parentName:"p",href:"/API/detectors/DetectorBase/classes/DetectorBase#logwarning"},(0,r.yg)("inlineCode",{parentName:"a"},"logWarning"))),(0,r.yg)("h4",{id:"defined-in-12"},"Defined in"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://github.com/asifqatar/Snapper/blob/745a7dc53ba74a10939f2917619e05af16a1385f/detectors/DetectorBase.ts#L113"},"detectors/DetectorBase.ts:113")),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"run"},"run()"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},(0,r.yg)("strong",{parentName:"p"},"run"),"(",(0,r.yg)("inlineCode",{parentName:"p"},"sourceFile"),"): ",(0,r.yg)("a",{parentName:"p",href:"/API/types/type-aliases/Finding"},(0,r.yg)("inlineCode",{parentName:"a"},"Finding")),"[]")),(0,r.yg)("p",null,'Runs the detector on the given source file to identify any non-exact versioning in dependencies.\nThis method checks both "dependencies" and "devDependencies" in the package.json file.'),(0,r.yg)("h4",{id:"parameters-5"},"Parameters"),(0,r.yg)("p",null,"\u2022 ",(0,r.yg)("strong",{parentName:"p"},"sourceFile"),": ",(0,r.yg)("inlineCode",{parentName:"p"},"SourceFile")),(0,r.yg)("p",null,"The source file to analyze."),(0,r.yg)("h4",{id:"returns-9"},"Returns"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"/API/types/type-aliases/Finding"},(0,r.yg)("inlineCode",{parentName:"a"},"Finding")),"[]"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Array of findings with details about the detected issues.")),(0,r.yg)("h4",{id:"overrides-2"},"Overrides"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"/API/detectors/DetectorBase/classes/DetectorBase"},(0,r.yg)("inlineCode",{parentName:"a"},"DetectorBase")),".",(0,r.yg)("a",{parentName:"p",href:"/API/detectors/DetectorBase/classes/DetectorBase#run"},(0,r.yg)("inlineCode",{parentName:"a"},"run"))),(0,r.yg)("h4",{id:"defined-in-13"},"Defined in"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://github.com/asifqatar/Snapper/blob/745a7dc53ba74a10939f2917619e05af16a1385f/detectors/DependencyVersioning.ts#L32"},"detectors/DependencyVersioning.ts:32")))}d.isMDXComponent=!0}}]);