"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2891],{5680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>m});var a=n(6540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),g=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=g(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=g(n),y=r,m=d["".concat(l,".").concat(y)]||d[y]||c[y]||o;return n?a.createElement(m,s(s({ref:t},p),{},{components:n})):a.createElement(m,s({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=y;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:r,s[1]=i;for(var g=2;g<o;g++)s[g]=n[g];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},3749:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var a=n(8168),r=(n(6540),n(5680));const o={},s=void 0,i={unversionedId:"API/detectors/ConsoleLog/classes/ConsoleLogDetector",id:"API/detectors/ConsoleLog/classes/ConsoleLogDetector",isDocsHomePage:!1,title:"ConsoleLogDetector",description:"Snapper Project \u2022 Docs",source:"@site/docs/API/detectors/ConsoleLog/classes/ConsoleLogDetector.md",sourceDirName:"API/detectors/ConsoleLog/classes",slug:"/API/detectors/ConsoleLog/classes/ConsoleLogDetector",permalink:"/API/detectors/ConsoleLog/classes/ConsoleLogDetector",editUrl:"https://github.com/sayfer-io/Snapper/blob/main/docs/API/detectors/ConsoleLog/classes/ConsoleLogDetector.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"README",permalink:"/API/detectors/ConsoleLog/README"},next:{title:"README",permalink:"/API/detectors/DangerousFunctions/README"}},l=[{value:"Extends",id:"extends",children:[]},{value:"Constructors",id:"constructors",children:[{value:"new ConsoleLogDetector()",id:"new-consolelogdetector",children:[]}]},{value:"Properties",id:"properties",children:[{value:"allowedFileRegexes",id:"allowedfileregexes",children:[]},{value:"findings",id:"findings",children:[]},{value:"name",id:"name",children:[]},{value:"riskRating",id:"riskrating",children:[]}]},{value:"Methods",id:"methods",children:[{value:"addFinding()",id:"addfinding",children:[]},{value:"clearFindings()",id:"clearfindings",children:[]},{value:"getFindings()",id:"getfindings",children:[]},{value:"getName()",id:"getname",children:[]},{value:"logDebug()",id:"logdebug",children:[]},{value:"logError()",id:"logerror",children:[]},{value:"logInfo()",id:"loginfo",children:[]},{value:"logWarning()",id:"logwarning",children:[]},{value:"run()",id:"run",children:[]}]}],g={toc:l},p="wrapper";function d(e){let{components:t,...n}=e;return(0,r.yg)(p,(0,a.A)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"/API/README"},(0,r.yg)("strong",{parentName:"a"},"Snapper Project"))," \u2022 ",(0,r.yg)("strong",{parentName:"p"},"Docs")),(0,r.yg)("hr",null),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"/API/README"},"Snapper Project")," / ",(0,r.yg)("a",{parentName:"p",href:"/API/detectors/ConsoleLog/README"},"detectors/ConsoleLog")," / ConsoleLogDetector"),(0,r.yg)("h1",{id:"class-consolelogdetector"},"Class: ConsoleLogDetector"),(0,r.yg)("p",null,"Detector for identifying console.log statements in the code.\nExtends the DetectorBase class to implement detection functionality for console logging."),(0,r.yg)("h2",{id:"extends"},"Extends"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/API/detectors/DetectorBase/classes/DetectorBase"},(0,r.yg)("inlineCode",{parentName:"a"},"DetectorBase")))),(0,r.yg)("h2",{id:"constructors"},"Constructors"),(0,r.yg)("h3",{id:"new-consolelogdetector"},"new ConsoleLogDetector()"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},(0,r.yg)("strong",{parentName:"p"},"new ConsoleLogDetector"),"(): ",(0,r.yg)("a",{parentName:"p",href:"/API/detectors/ConsoleLog/classes/ConsoleLogDetector"},(0,r.yg)("inlineCode",{parentName:"a"},"ConsoleLogDetector")))),(0,r.yg)("p",null,"Constructor for the ConsoleLogDetector.\nInitializes the detector with a name and assigns a low-risk rating."),(0,r.yg)("h4",{id:"returns"},"Returns"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"/API/detectors/ConsoleLog/classes/ConsoleLogDetector"},(0,r.yg)("inlineCode",{parentName:"a"},"ConsoleLogDetector"))),(0,r.yg)("h4",{id:"overrides"},"Overrides"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"/API/detectors/DetectorBase/classes/DetectorBase"},(0,r.yg)("inlineCode",{parentName:"a"},"DetectorBase")),".",(0,r.yg)("a",{parentName:"p",href:"/API/detectors/DetectorBase/classes/DetectorBase#constructors"},(0,r.yg)("inlineCode",{parentName:"a"},"constructor"))),(0,r.yg)("h4",{id:"defined-in"},"Defined in"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://github.com/asifqatar/Snapper/blob/745a7dc53ba74a10939f2917619e05af16a1385f/detectors/ConsoleLog.ts#L23"},"detectors/ConsoleLog.ts:23")),(0,r.yg)("h2",{id:"properties"},"Properties"),(0,r.yg)("h3",{id:"allowedfileregexes"},"allowedFileRegexes"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},(0,r.yg)("strong",{parentName:"p"},"allowedFileRegexes"),": ",(0,r.yg)("inlineCode",{parentName:"p"},"RegExp"),"[]")),(0,r.yg)("h4",{id:"inherited-from"},"Inherited from"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"/API/detectors/DetectorBase/classes/DetectorBase"},(0,r.yg)("inlineCode",{parentName:"a"},"DetectorBase")),".",(0,r.yg)("a",{parentName:"p",href:"/API/detectors/DetectorBase/classes/DetectorBase#allowedfileregexes"},(0,r.yg)("inlineCode",{parentName:"a"},"allowedFileRegexes"))),(0,r.yg)("h4",{id:"defined-in-1"},"Defined in"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://github.com/asifqatar/Snapper/blob/745a7dc53ba74a10939f2917619e05af16a1385f/detectors/DetectorBase.ts#L19"},"detectors/DetectorBase.ts:19")),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"findings"},"findings"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},(0,r.yg)("inlineCode",{parentName:"p"},"protected")," ",(0,r.yg)("strong",{parentName:"p"},"findings"),": ",(0,r.yg)("a",{parentName:"p",href:"/API/types/type-aliases/Finding"},(0,r.yg)("inlineCode",{parentName:"a"},"Finding")),"[] = ",(0,r.yg)("inlineCode",{parentName:"p"},"[]"))),(0,r.yg)("h4",{id:"inherited-from-1"},"Inherited from"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"/API/detectors/DetectorBase/classes/DetectorBase"},(0,r.yg)("inlineCode",{parentName:"a"},"DetectorBase")),".",(0,r.yg)("a",{parentName:"p",href:"/API/detectors/DetectorBase/classes/DetectorBase#findings"},(0,r.yg)("inlineCode",{parentName:"a"},"findings"))),(0,r.yg)("h4",{id:"defined-in-2"},"Defined in"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://github.com/asifqatar/Snapper/blob/745a7dc53ba74a10939f2917619e05af16a1385f/detectors/DetectorBase.ts#L16"},"detectors/DetectorBase.ts:16")),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"name"},"name"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},(0,r.yg)("inlineCode",{parentName:"p"},"protected")," ",(0,r.yg)("strong",{parentName:"p"},"name"),": ",(0,r.yg)("inlineCode",{parentName:"p"},"string"))),(0,r.yg)("h4",{id:"inherited-from-2"},"Inherited from"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"/API/detectors/DetectorBase/classes/DetectorBase"},(0,r.yg)("inlineCode",{parentName:"a"},"DetectorBase")),".",(0,r.yg)("a",{parentName:"p",href:"/API/detectors/DetectorBase/classes/DetectorBase#name"},(0,r.yg)("inlineCode",{parentName:"a"},"name"))),(0,r.yg)("h4",{id:"defined-in-3"},"Defined in"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://github.com/asifqatar/Snapper/blob/745a7dc53ba74a10939f2917619e05af16a1385f/detectors/DetectorBase.ts#L14"},"detectors/DetectorBase.ts:14")),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"riskrating"},"riskRating"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},(0,r.yg)("inlineCode",{parentName:"p"},"protected")," ",(0,r.yg)("strong",{parentName:"p"},"riskRating"),": ",(0,r.yg)("a",{parentName:"p",href:"/API/structures/enumerations/RiskRating"},(0,r.yg)("inlineCode",{parentName:"a"},"RiskRating")))),(0,r.yg)("h4",{id:"inherited-from-3"},"Inherited from"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"/API/detectors/DetectorBase/classes/DetectorBase"},(0,r.yg)("inlineCode",{parentName:"a"},"DetectorBase")),".",(0,r.yg)("a",{parentName:"p",href:"/API/detectors/DetectorBase/classes/DetectorBase#riskrating"},(0,r.yg)("inlineCode",{parentName:"a"},"riskRating"))),(0,r.yg)("h4",{id:"defined-in-4"},"Defined in"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://github.com/asifqatar/Snapper/blob/745a7dc53ba74a10939f2917619e05af16a1385f/detectors/DetectorBase.ts#L15"},"detectors/DetectorBase.ts:15")),(0,r.yg)("h2",{id:"methods"},"Methods"),(0,r.yg)("h3",{id:"addfinding"},"addFinding()"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},(0,r.yg)("strong",{parentName:"p"},"addFinding"),"(",(0,r.yg)("inlineCode",{parentName:"p"},"description"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"filePath"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"lineNum"),"): ",(0,r.yg)("inlineCode",{parentName:"p"},"void"))),(0,r.yg)("p",null,"Adds a finding to the findings array.\nThis method creates a Finding object and logs a debug message before adding it to the findings list."),(0,r.yg)("h4",{id:"parameters"},"Parameters"),(0,r.yg)("p",null,"\u2022 ",(0,r.yg)("strong",{parentName:"p"},"description"),": ",(0,r.yg)("inlineCode",{parentName:"p"},"string")),(0,r.yg)("p",null,"Description of the finding."),(0,r.yg)("p",null,"\u2022 ",(0,r.yg)("strong",{parentName:"p"},"filePath"),": ",(0,r.yg)("inlineCode",{parentName:"p"},"string")),(0,r.yg)("p",null,"Path of the file where the finding was detected."),(0,r.yg)("p",null,"\u2022 ",(0,r.yg)("strong",{parentName:"p"},"lineNum"),": ",(0,r.yg)("inlineCode",{parentName:"p"},"number")," = ",(0,r.yg)("inlineCode",{parentName:"p"},"1")),(0,r.yg)("p",null,"Line number where the finding was detected (default is 1)."),(0,r.yg)("h4",{id:"returns-1"},"Returns"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"void")),(0,r.yg)("h4",{id:"inherited-from-4"},"Inherited from"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"/API/detectors/DetectorBase/classes/DetectorBase"},(0,r.yg)("inlineCode",{parentName:"a"},"DetectorBase")),".",(0,r.yg)("a",{parentName:"p",href:"/API/detectors/DetectorBase/classes/DetectorBase#addfinding"},(0,r.yg)("inlineCode",{parentName:"a"},"addFinding"))),(0,r.yg)("h4",{id:"defined-in-5"},"Defined in"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://github.com/asifqatar/Snapper/blob/745a7dc53ba74a10939f2917619e05af16a1385f/detectors/DetectorBase.ts#L41"},"detectors/DetectorBase.ts:41")),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"clearfindings"},"clearFindings()"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},(0,r.yg)("strong",{parentName:"p"},"clearFindings"),"(): ",(0,r.yg)("inlineCode",{parentName:"p"},"void"))),(0,r.yg)("p",null,"Clears all findings from the detector.\nThis method resets the findings array to an empty state."),(0,r.yg)("h4",{id:"returns-2"},"Returns"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"void")),(0,r.yg)("h4",{id:"inherited-from-5"},"Inherited from"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"/API/detectors/DetectorBase/classes/DetectorBase"},(0,r.yg)("inlineCode",{parentName:"a"},"DetectorBase")),".",(0,r.yg)("a",{parentName:"p",href:"/API/detectors/DetectorBase/classes/DetectorBase#clearfindings"},(0,r.yg)("inlineCode",{parentName:"a"},"clearFindings"))),(0,r.yg)("h4",{id:"defined-in-6"},"Defined in"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://github.com/asifqatar/Snapper/blob/745a7dc53ba74a10939f2917619e05af16a1385f/detectors/DetectorBase.ts#L59"},"detectors/DetectorBase.ts:59")),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"getfindings"},"getFindings()"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},(0,r.yg)("strong",{parentName:"p"},"getFindings"),"(): ",(0,r.yg)("a",{parentName:"p",href:"/API/types/type-aliases/Finding"},(0,r.yg)("inlineCode",{parentName:"a"},"Finding")),"[]")),(0,r.yg)("p",null,"Retrieves all findings collected by the detector."),(0,r.yg)("h4",{id:"returns-3"},"Returns"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"/API/types/type-aliases/Finding"},(0,r.yg)("inlineCode",{parentName:"a"},"Finding")),"[]"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Array of findings.")),(0,r.yg)("h4",{id:"inherited-from-6"},"Inherited from"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"/API/detectors/DetectorBase/classes/DetectorBase"},(0,r.yg)("inlineCode",{parentName:"a"},"DetectorBase")),".",(0,r.yg)("a",{parentName:"p",href:"/API/detectors/DetectorBase/classes/DetectorBase#getfindings"},(0,r.yg)("inlineCode",{parentName:"a"},"getFindings"))),(0,r.yg)("h4",{id:"defined-in-7"},"Defined in"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://github.com/asifqatar/Snapper/blob/745a7dc53ba74a10939f2917619e05af16a1385f/detectors/DetectorBase.ts#L75"},"detectors/DetectorBase.ts:75")),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"getname"},"getName()"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},(0,r.yg)("strong",{parentName:"p"},"getName"),"(): ",(0,r.yg)("inlineCode",{parentName:"p"},"string"))),(0,r.yg)("p",null,"Gets the name of the detector."),(0,r.yg)("h4",{id:"returns-4"},"Returns"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"string")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"The name of the detector.")),(0,r.yg)("h4",{id:"inherited-from-7"},"Inherited from"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"/API/detectors/DetectorBase/classes/DetectorBase"},(0,r.yg)("inlineCode",{parentName:"a"},"DetectorBase")),".",(0,r.yg)("a",{parentName:"p",href:"/API/detectors/DetectorBase/classes/DetectorBase#getname"},(0,r.yg)("inlineCode",{parentName:"a"},"getName"))),(0,r.yg)("h4",{id:"defined-in-8"},"Defined in"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://github.com/asifqatar/Snapper/blob/745a7dc53ba74a10939f2917619e05af16a1385f/detectors/DetectorBase.ts#L67"},"detectors/DetectorBase.ts:67")),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"logdebug"},"logDebug()"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},(0,r.yg)("strong",{parentName:"p"},"logDebug"),"(",(0,r.yg)("inlineCode",{parentName:"p"},"message"),"): ",(0,r.yg)("inlineCode",{parentName:"p"},"void"))),(0,r.yg)("p",null,"Logs a debug message.\nThis method formats the message with the detector's name and logs it at the debug level."),(0,r.yg)("h4",{id:"parameters-1"},"Parameters"),(0,r.yg)("p",null,"\u2022 ",(0,r.yg)("strong",{parentName:"p"},"message"),": ",(0,r.yg)("inlineCode",{parentName:"p"},"string")),(0,r.yg)("p",null,"The message to log."),(0,r.yg)("h4",{id:"returns-5"},"Returns"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"void")),(0,r.yg)("h4",{id:"inherited-from-8"},"Inherited from"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"/API/detectors/DetectorBase/classes/DetectorBase"},(0,r.yg)("inlineCode",{parentName:"a"},"DetectorBase")),".",(0,r.yg)("a",{parentName:"p",href:"/API/detectors/DetectorBase/classes/DetectorBase#logdebug"},(0,r.yg)("inlineCode",{parentName:"a"},"logDebug"))),(0,r.yg)("h4",{id:"defined-in-9"},"Defined in"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://github.com/asifqatar/Snapper/blob/745a7dc53ba74a10939f2917619e05af16a1385f/detectors/DetectorBase.ts#L93"},"detectors/DetectorBase.ts:93")),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"logerror"},"logError()"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},(0,r.yg)("strong",{parentName:"p"},"logError"),"(",(0,r.yg)("inlineCode",{parentName:"p"},"message"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"error"),"?): ",(0,r.yg)("inlineCode",{parentName:"p"},"void"))),(0,r.yg)("p",null,"Logs an error message.\nThis method formats the message with the detector's name and logs it at the error level."),(0,r.yg)("h4",{id:"parameters-2"},"Parameters"),(0,r.yg)("p",null,"\u2022 ",(0,r.yg)("strong",{parentName:"p"},"message"),": ",(0,r.yg)("inlineCode",{parentName:"p"},"string")),(0,r.yg)("p",null,"The message to log."),(0,r.yg)("p",null,"\u2022 ",(0,r.yg)("strong",{parentName:"p"},"error?"),": ",(0,r.yg)("inlineCode",{parentName:"p"},"Error")),(0,r.yg)("p",null,"Optional error object to log alongside the message."),(0,r.yg)("h4",{id:"returns-6"},"Returns"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"void")),(0,r.yg)("h4",{id:"inherited-from-9"},"Inherited from"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"/API/detectors/DetectorBase/classes/DetectorBase"},(0,r.yg)("inlineCode",{parentName:"a"},"DetectorBase")),".",(0,r.yg)("a",{parentName:"p",href:"/API/detectors/DetectorBase/classes/DetectorBase#logerror"},(0,r.yg)("inlineCode",{parentName:"a"},"logError"))),(0,r.yg)("h4",{id:"defined-in-10"},"Defined in"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://github.com/asifqatar/Snapper/blob/745a7dc53ba74a10939f2917619e05af16a1385f/detectors/DetectorBase.ts#L103"},"detectors/DetectorBase.ts:103")),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"loginfo"},"logInfo()"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},(0,r.yg)("strong",{parentName:"p"},"logInfo"),"(",(0,r.yg)("inlineCode",{parentName:"p"},"message"),"): ",(0,r.yg)("inlineCode",{parentName:"p"},"void"))),(0,r.yg)("p",null,"Logs an informational message.\nThis method formats the message with the detector's name and logs it at the info level."),(0,r.yg)("h4",{id:"parameters-3"},"Parameters"),(0,r.yg)("p",null,"\u2022 ",(0,r.yg)("strong",{parentName:"p"},"message"),": ",(0,r.yg)("inlineCode",{parentName:"p"},"string")),(0,r.yg)("p",null,"The message to log."),(0,r.yg)("h4",{id:"returns-7"},"Returns"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"void")),(0,r.yg)("h4",{id:"inherited-from-10"},"Inherited from"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"/API/detectors/DetectorBase/classes/DetectorBase"},(0,r.yg)("inlineCode",{parentName:"a"},"DetectorBase")),".",(0,r.yg)("a",{parentName:"p",href:"/API/detectors/DetectorBase/classes/DetectorBase#loginfo"},(0,r.yg)("inlineCode",{parentName:"a"},"logInfo"))),(0,r.yg)("h4",{id:"defined-in-11"},"Defined in"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://github.com/asifqatar/Snapper/blob/745a7dc53ba74a10939f2917619e05af16a1385f/detectors/DetectorBase.ts#L84"},"detectors/DetectorBase.ts:84")),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"logwarning"},"logWarning()"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},(0,r.yg)("strong",{parentName:"p"},"logWarning"),"(",(0,r.yg)("inlineCode",{parentName:"p"},"message"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"error"),"?): ",(0,r.yg)("inlineCode",{parentName:"p"},"void"))),(0,r.yg)("p",null,"Logs a warning message.\nThis method formats the message with the detector's name and logs it at the warning level."),(0,r.yg)("h4",{id:"parameters-4"},"Parameters"),(0,r.yg)("p",null,"\u2022 ",(0,r.yg)("strong",{parentName:"p"},"message"),": ",(0,r.yg)("inlineCode",{parentName:"p"},"string")),(0,r.yg)("p",null,"The message to log."),(0,r.yg)("p",null,"\u2022 ",(0,r.yg)("strong",{parentName:"p"},"error?"),": ",(0,r.yg)("inlineCode",{parentName:"p"},"Error")),(0,r.yg)("p",null,"Optional error object to log alongside the message."),(0,r.yg)("h4",{id:"returns-8"},"Returns"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"void")),(0,r.yg)("h4",{id:"inherited-from-11"},"Inherited from"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"/API/detectors/DetectorBase/classes/DetectorBase"},(0,r.yg)("inlineCode",{parentName:"a"},"DetectorBase")),".",(0,r.yg)("a",{parentName:"p",href:"/API/detectors/DetectorBase/classes/DetectorBase#logwarning"},(0,r.yg)("inlineCode",{parentName:"a"},"logWarning"))),(0,r.yg)("h4",{id:"defined-in-12"},"Defined in"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://github.com/asifqatar/Snapper/blob/745a7dc53ba74a10939f2917619e05af16a1385f/detectors/DetectorBase.ts#L113"},"detectors/DetectorBase.ts:113")),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"run"},"run()"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},(0,r.yg)("strong",{parentName:"p"},"run"),"(",(0,r.yg)("inlineCode",{parentName:"p"},"file"),"): ",(0,r.yg)("a",{parentName:"p",href:"/API/types/type-aliases/Finding"},(0,r.yg)("inlineCode",{parentName:"a"},"Finding")),"[]")),(0,r.yg)("p",null,"Runs the detector on the given file, finding all instances of console.log\nor related console methods, and adds findings for each instance."),(0,r.yg)("h4",{id:"parameters-5"},"Parameters"),(0,r.yg)("p",null,"\u2022 ",(0,r.yg)("strong",{parentName:"p"},"file"),": ",(0,r.yg)("inlineCode",{parentName:"p"},"SourceFile")),(0,r.yg)("p",null,"The source file to analyze for console logs."),(0,r.yg)("h4",{id:"returns-9"},"Returns"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"/API/types/type-aliases/Finding"},(0,r.yg)("inlineCode",{parentName:"a"},"Finding")),"[]"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Array of findings, each corresponding to a detected console log call.")),(0,r.yg)("h4",{id:"overrides-1"},"Overrides"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"/API/detectors/DetectorBase/classes/DetectorBase"},(0,r.yg)("inlineCode",{parentName:"a"},"DetectorBase")),".",(0,r.yg)("a",{parentName:"p",href:"/API/detectors/DetectorBase/classes/DetectorBase#run"},(0,r.yg)("inlineCode",{parentName:"a"},"run"))),(0,r.yg)("h4",{id:"defined-in-13"},"Defined in"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://github.com/asifqatar/Snapper/blob/745a7dc53ba74a10939f2917619e05af16a1385f/detectors/ConsoleLog.ts#L54"},"detectors/ConsoleLog.ts:54")))}d.isMDXComponent=!0}}]);