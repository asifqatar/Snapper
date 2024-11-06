"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8257],{5680:(e,t,r)=>{r.d(t,{xA:()=>l,yg:()=>m});var a=r(6540);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),g=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=g(e.components);return a.createElement(i.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=g(r),y=n,m=d["".concat(i,".").concat(y)]||d[y]||c[y]||o;return r?a.createElement(m,s(s({ref:t},l),{},{components:r})):a.createElement(m,s({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=y;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[d]="string"==typeof e?e:n,s[1]=p;for(var g=2;g<o;g++)s[g]=r[g];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}y.displayName="MDXCreateElement"},7203:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>i});var a=r(8168),n=(r(6540),r(5680));const o={},s=void 0,p={unversionedId:"API/detectors/ImproperTypeUsage/classes/ImproperTypeUsageDetector",id:"API/detectors/ImproperTypeUsage/classes/ImproperTypeUsageDetector",isDocsHomePage:!1,title:"ImproperTypeUsageDetector",description:"Snapper Project \u2022 Docs",source:"@site/docs/API/detectors/ImproperTypeUsage/classes/ImproperTypeUsageDetector.md",sourceDirName:"API/detectors/ImproperTypeUsage/classes",slug:"/API/detectors/ImproperTypeUsage/classes/ImproperTypeUsageDetector",permalink:"/Snapper/docs/API/detectors/ImproperTypeUsage/classes/ImproperTypeUsageDetector",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/API/detectors/ImproperTypeUsage/classes/ImproperTypeUsageDetector.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"README",permalink:"/Snapper/docs/API/detectors/ImproperTypeUsage/README"},next:{title:"README",permalink:"/Snapper/docs/API/detectors/InsecureCryptoLibraries/README"}},i=[{value:"Extends",id:"extends",children:[]},{value:"Constructors",id:"constructors",children:[{value:"new ImproperTypeUsageDetector()",id:"new-impropertypeusagedetector",children:[]}]},{value:"Properties",id:"properties",children:[{value:"allowedFileRegexes",id:"allowedfileregexes",children:[]},{value:"findings",id:"findings",children:[]},{value:"name",id:"name",children:[]},{value:"riskRating",id:"riskrating",children:[]}]},{value:"Methods",id:"methods",children:[{value:"addFinding()",id:"addfinding",children:[]},{value:"clearFindings()",id:"clearfindings",children:[]},{value:"getFindings()",id:"getfindings",children:[]},{value:"getName()",id:"getname",children:[]},{value:"logDebug()",id:"logdebug",children:[]},{value:"logError()",id:"logerror",children:[]},{value:"logInfo()",id:"loginfo",children:[]},{value:"logWarning()",id:"logwarning",children:[]},{value:"run()",id:"run",children:[]}]}],g={toc:i},l="wrapper";function d(e){let{components:t,...r}=e;return(0,n.yg)(l,(0,a.A)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"/Snapper/docs/API/README"},(0,n.yg)("strong",{parentName:"a"},"Snapper Project"))," \u2022 ",(0,n.yg)("strong",{parentName:"p"},"Docs")),(0,n.yg)("hr",null),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"/Snapper/docs/API/README"},"Snapper Project")," / ",(0,n.yg)("a",{parentName:"p",href:"/Snapper/docs/API/detectors/ImproperTypeUsage/README"},"detectors/ImproperTypeUsage")," / ImproperTypeUsageDetector"),(0,n.yg)("h1",{id:"class-impropertypeusagedetector"},"Class: ImproperTypeUsageDetector"),(0,n.yg)("p",null,"Detector class for identifying improper usage of 'any' type in TypeScript code."),(0,n.yg)("h2",{id:"extends"},"Extends"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/Snapper/docs/API/detectors/DetectorBase/classes/DetectorBase"},(0,n.yg)("inlineCode",{parentName:"a"},"DetectorBase")))),(0,n.yg)("h2",{id:"constructors"},"Constructors"),(0,n.yg)("h3",{id:"new-impropertypeusagedetector"},"new ImproperTypeUsageDetector()"),(0,n.yg)("blockquote",null,(0,n.yg)("p",{parentName:"blockquote"},(0,n.yg)("strong",{parentName:"p"},"new ImproperTypeUsageDetector"),"(): ",(0,n.yg)("a",{parentName:"p",href:"/Snapper/docs/API/detectors/ImproperTypeUsage/classes/ImproperTypeUsageDetector"},(0,n.yg)("inlineCode",{parentName:"a"},"ImproperTypeUsageDetector")))),(0,n.yg)("h4",{id:"returns"},"Returns"),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"/Snapper/docs/API/detectors/ImproperTypeUsage/classes/ImproperTypeUsageDetector"},(0,n.yg)("inlineCode",{parentName:"a"},"ImproperTypeUsageDetector"))),(0,n.yg)("h4",{id:"overrides"},"Overrides"),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"/Snapper/docs/API/detectors/DetectorBase/classes/DetectorBase"},(0,n.yg)("inlineCode",{parentName:"a"},"DetectorBase")),".",(0,n.yg)("a",{parentName:"p",href:"/Snapper/docs/API/detectors/DetectorBase/classes/DetectorBase#constructors"},(0,n.yg)("inlineCode",{parentName:"a"},"constructor"))),(0,n.yg)("h4",{id:"defined-in"},"Defined in"),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"https://github.com/asifqatar/Snapper/blob/efbcec64e60623713bea5b66951928dbe973c565/detectors/ImproperTypeUsage.ts#L17"},"detectors/ImproperTypeUsage.ts:17")),(0,n.yg)("h2",{id:"properties"},"Properties"),(0,n.yg)("h3",{id:"allowedfileregexes"},"allowedFileRegexes"),(0,n.yg)("blockquote",null,(0,n.yg)("p",{parentName:"blockquote"},(0,n.yg)("strong",{parentName:"p"},"allowedFileRegexes"),": ",(0,n.yg)("inlineCode",{parentName:"p"},"RegExp"),"[]")),(0,n.yg)("h4",{id:"inherited-from"},"Inherited from"),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"/Snapper/docs/API/detectors/DetectorBase/classes/DetectorBase"},(0,n.yg)("inlineCode",{parentName:"a"},"DetectorBase")),".",(0,n.yg)("a",{parentName:"p",href:"/Snapper/docs/API/detectors/DetectorBase/classes/DetectorBase#allowedfileregexes"},(0,n.yg)("inlineCode",{parentName:"a"},"allowedFileRegexes"))),(0,n.yg)("h4",{id:"defined-in-1"},"Defined in"),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"https://github.com/asifqatar/Snapper/blob/efbcec64e60623713bea5b66951928dbe973c565/detectors/DetectorBase.ts#L19"},"detectors/DetectorBase.ts:19")),(0,n.yg)("hr",null),(0,n.yg)("h3",{id:"findings"},"findings"),(0,n.yg)("blockquote",null,(0,n.yg)("p",{parentName:"blockquote"},(0,n.yg)("inlineCode",{parentName:"p"},"protected")," ",(0,n.yg)("strong",{parentName:"p"},"findings"),": ",(0,n.yg)("a",{parentName:"p",href:"/Snapper/docs/API/types/type-aliases/Finding"},(0,n.yg)("inlineCode",{parentName:"a"},"Finding")),"[] = ",(0,n.yg)("inlineCode",{parentName:"p"},"[]"))),(0,n.yg)("h4",{id:"inherited-from-1"},"Inherited from"),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"/Snapper/docs/API/detectors/DetectorBase/classes/DetectorBase"},(0,n.yg)("inlineCode",{parentName:"a"},"DetectorBase")),".",(0,n.yg)("a",{parentName:"p",href:"/Snapper/docs/API/detectors/DetectorBase/classes/DetectorBase#findings"},(0,n.yg)("inlineCode",{parentName:"a"},"findings"))),(0,n.yg)("h4",{id:"defined-in-2"},"Defined in"),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"https://github.com/asifqatar/Snapper/blob/efbcec64e60623713bea5b66951928dbe973c565/detectors/DetectorBase.ts#L16"},"detectors/DetectorBase.ts:16")),(0,n.yg)("hr",null),(0,n.yg)("h3",{id:"name"},"name"),(0,n.yg)("blockquote",null,(0,n.yg)("p",{parentName:"blockquote"},(0,n.yg)("inlineCode",{parentName:"p"},"protected")," ",(0,n.yg)("strong",{parentName:"p"},"name"),": ",(0,n.yg)("inlineCode",{parentName:"p"},"string"))),(0,n.yg)("h4",{id:"inherited-from-2"},"Inherited from"),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"/Snapper/docs/API/detectors/DetectorBase/classes/DetectorBase"},(0,n.yg)("inlineCode",{parentName:"a"},"DetectorBase")),".",(0,n.yg)("a",{parentName:"p",href:"/Snapper/docs/API/detectors/DetectorBase/classes/DetectorBase#name"},(0,n.yg)("inlineCode",{parentName:"a"},"name"))),(0,n.yg)("h4",{id:"defined-in-3"},"Defined in"),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"https://github.com/asifqatar/Snapper/blob/efbcec64e60623713bea5b66951928dbe973c565/detectors/DetectorBase.ts#L14"},"detectors/DetectorBase.ts:14")),(0,n.yg)("hr",null),(0,n.yg)("h3",{id:"riskrating"},"riskRating"),(0,n.yg)("blockquote",null,(0,n.yg)("p",{parentName:"blockquote"},(0,n.yg)("inlineCode",{parentName:"p"},"protected")," ",(0,n.yg)("strong",{parentName:"p"},"riskRating"),": ",(0,n.yg)("a",{parentName:"p",href:"/Snapper/docs/API/structures/enumerations/RiskRating"},(0,n.yg)("inlineCode",{parentName:"a"},"RiskRating")))),(0,n.yg)("h4",{id:"inherited-from-3"},"Inherited from"),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"/Snapper/docs/API/detectors/DetectorBase/classes/DetectorBase"},(0,n.yg)("inlineCode",{parentName:"a"},"DetectorBase")),".",(0,n.yg)("a",{parentName:"p",href:"/Snapper/docs/API/detectors/DetectorBase/classes/DetectorBase#riskrating"},(0,n.yg)("inlineCode",{parentName:"a"},"riskRating"))),(0,n.yg)("h4",{id:"defined-in-4"},"Defined in"),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"https://github.com/asifqatar/Snapper/blob/efbcec64e60623713bea5b66951928dbe973c565/detectors/DetectorBase.ts#L15"},"detectors/DetectorBase.ts:15")),(0,n.yg)("h2",{id:"methods"},"Methods"),(0,n.yg)("h3",{id:"addfinding"},"addFinding()"),(0,n.yg)("blockquote",null,(0,n.yg)("p",{parentName:"blockquote"},(0,n.yg)("strong",{parentName:"p"},"addFinding"),"(",(0,n.yg)("inlineCode",{parentName:"p"},"description"),", ",(0,n.yg)("inlineCode",{parentName:"p"},"filePath"),", ",(0,n.yg)("inlineCode",{parentName:"p"},"lineNum"),"): ",(0,n.yg)("inlineCode",{parentName:"p"},"void"))),(0,n.yg)("p",null,"Adds a finding to the findings array.\nThis method creates a Finding object and logs a debug message before adding it to the findings list."),(0,n.yg)("h4",{id:"parameters"},"Parameters"),(0,n.yg)("p",null,"\u2022 ",(0,n.yg)("strong",{parentName:"p"},"description"),": ",(0,n.yg)("inlineCode",{parentName:"p"},"string")),(0,n.yg)("p",null,"Description of the finding."),(0,n.yg)("p",null,"\u2022 ",(0,n.yg)("strong",{parentName:"p"},"filePath"),": ",(0,n.yg)("inlineCode",{parentName:"p"},"string")),(0,n.yg)("p",null,"Path of the file where the finding was detected."),(0,n.yg)("p",null,"\u2022 ",(0,n.yg)("strong",{parentName:"p"},"lineNum"),": ",(0,n.yg)("inlineCode",{parentName:"p"},"number")," = ",(0,n.yg)("inlineCode",{parentName:"p"},"1")),(0,n.yg)("p",null,"Line number where the finding was detected (default is 1)."),(0,n.yg)("h4",{id:"returns-1"},"Returns"),(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"void")),(0,n.yg)("h4",{id:"inherited-from-4"},"Inherited from"),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"/Snapper/docs/API/detectors/DetectorBase/classes/DetectorBase"},(0,n.yg)("inlineCode",{parentName:"a"},"DetectorBase")),".",(0,n.yg)("a",{parentName:"p",href:"/Snapper/docs/API/detectors/DetectorBase/classes/DetectorBase#addfinding"},(0,n.yg)("inlineCode",{parentName:"a"},"addFinding"))),(0,n.yg)("h4",{id:"defined-in-5"},"Defined in"),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"https://github.com/asifqatar/Snapper/blob/efbcec64e60623713bea5b66951928dbe973c565/detectors/DetectorBase.ts#L41"},"detectors/DetectorBase.ts:41")),(0,n.yg)("hr",null),(0,n.yg)("h3",{id:"clearfindings"},"clearFindings()"),(0,n.yg)("blockquote",null,(0,n.yg)("p",{parentName:"blockquote"},(0,n.yg)("strong",{parentName:"p"},"clearFindings"),"(): ",(0,n.yg)("inlineCode",{parentName:"p"},"void"))),(0,n.yg)("p",null,"Clears all findings from the detector.\nThis method resets the findings array to an empty state."),(0,n.yg)("h4",{id:"returns-2"},"Returns"),(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"void")),(0,n.yg)("h4",{id:"inherited-from-5"},"Inherited from"),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"/Snapper/docs/API/detectors/DetectorBase/classes/DetectorBase"},(0,n.yg)("inlineCode",{parentName:"a"},"DetectorBase")),".",(0,n.yg)("a",{parentName:"p",href:"/Snapper/docs/API/detectors/DetectorBase/classes/DetectorBase#clearfindings"},(0,n.yg)("inlineCode",{parentName:"a"},"clearFindings"))),(0,n.yg)("h4",{id:"defined-in-6"},"Defined in"),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"https://github.com/asifqatar/Snapper/blob/efbcec64e60623713bea5b66951928dbe973c565/detectors/DetectorBase.ts#L59"},"detectors/DetectorBase.ts:59")),(0,n.yg)("hr",null),(0,n.yg)("h3",{id:"getfindings"},"getFindings()"),(0,n.yg)("blockquote",null,(0,n.yg)("p",{parentName:"blockquote"},(0,n.yg)("strong",{parentName:"p"},"getFindings"),"(): ",(0,n.yg)("a",{parentName:"p",href:"/Snapper/docs/API/types/type-aliases/Finding"},(0,n.yg)("inlineCode",{parentName:"a"},"Finding")),"[]")),(0,n.yg)("p",null,"Retrieves all findings collected by the detector."),(0,n.yg)("h4",{id:"returns-3"},"Returns"),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"/Snapper/docs/API/types/type-aliases/Finding"},(0,n.yg)("inlineCode",{parentName:"a"},"Finding")),"[]"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Array of findings.")),(0,n.yg)("h4",{id:"inherited-from-6"},"Inherited from"),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"/Snapper/docs/API/detectors/DetectorBase/classes/DetectorBase"},(0,n.yg)("inlineCode",{parentName:"a"},"DetectorBase")),".",(0,n.yg)("a",{parentName:"p",href:"/Snapper/docs/API/detectors/DetectorBase/classes/DetectorBase#getfindings"},(0,n.yg)("inlineCode",{parentName:"a"},"getFindings"))),(0,n.yg)("h4",{id:"defined-in-7"},"Defined in"),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"https://github.com/asifqatar/Snapper/blob/efbcec64e60623713bea5b66951928dbe973c565/detectors/DetectorBase.ts#L75"},"detectors/DetectorBase.ts:75")),(0,n.yg)("hr",null),(0,n.yg)("h3",{id:"getname"},"getName()"),(0,n.yg)("blockquote",null,(0,n.yg)("p",{parentName:"blockquote"},(0,n.yg)("strong",{parentName:"p"},"getName"),"(): ",(0,n.yg)("inlineCode",{parentName:"p"},"string"))),(0,n.yg)("p",null,"Gets the name of the detector."),(0,n.yg)("h4",{id:"returns-4"},"Returns"),(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"string")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"The name of the detector.")),(0,n.yg)("h4",{id:"inherited-from-7"},"Inherited from"),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"/Snapper/docs/API/detectors/DetectorBase/classes/DetectorBase"},(0,n.yg)("inlineCode",{parentName:"a"},"DetectorBase")),".",(0,n.yg)("a",{parentName:"p",href:"/Snapper/docs/API/detectors/DetectorBase/classes/DetectorBase#getname"},(0,n.yg)("inlineCode",{parentName:"a"},"getName"))),(0,n.yg)("h4",{id:"defined-in-8"},"Defined in"),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"https://github.com/asifqatar/Snapper/blob/efbcec64e60623713bea5b66951928dbe973c565/detectors/DetectorBase.ts#L67"},"detectors/DetectorBase.ts:67")),(0,n.yg)("hr",null),(0,n.yg)("h3",{id:"logdebug"},"logDebug()"),(0,n.yg)("blockquote",null,(0,n.yg)("p",{parentName:"blockquote"},(0,n.yg)("strong",{parentName:"p"},"logDebug"),"(",(0,n.yg)("inlineCode",{parentName:"p"},"message"),"): ",(0,n.yg)("inlineCode",{parentName:"p"},"void"))),(0,n.yg)("p",null,"Logs a debug message.\nThis method formats the message with the detector's name and logs it at the debug level."),(0,n.yg)("h4",{id:"parameters-1"},"Parameters"),(0,n.yg)("p",null,"\u2022 ",(0,n.yg)("strong",{parentName:"p"},"message"),": ",(0,n.yg)("inlineCode",{parentName:"p"},"string")),(0,n.yg)("p",null,"The message to log."),(0,n.yg)("h4",{id:"returns-5"},"Returns"),(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"void")),(0,n.yg)("h4",{id:"inherited-from-8"},"Inherited from"),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"/Snapper/docs/API/detectors/DetectorBase/classes/DetectorBase"},(0,n.yg)("inlineCode",{parentName:"a"},"DetectorBase")),".",(0,n.yg)("a",{parentName:"p",href:"/Snapper/docs/API/detectors/DetectorBase/classes/DetectorBase#logdebug"},(0,n.yg)("inlineCode",{parentName:"a"},"logDebug"))),(0,n.yg)("h4",{id:"defined-in-9"},"Defined in"),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"https://github.com/asifqatar/Snapper/blob/efbcec64e60623713bea5b66951928dbe973c565/detectors/DetectorBase.ts#L93"},"detectors/DetectorBase.ts:93")),(0,n.yg)("hr",null),(0,n.yg)("h3",{id:"logerror"},"logError()"),(0,n.yg)("blockquote",null,(0,n.yg)("p",{parentName:"blockquote"},(0,n.yg)("strong",{parentName:"p"},"logError"),"(",(0,n.yg)("inlineCode",{parentName:"p"},"message"),", ",(0,n.yg)("inlineCode",{parentName:"p"},"error"),"?): ",(0,n.yg)("inlineCode",{parentName:"p"},"void"))),(0,n.yg)("p",null,"Logs an error message.\nThis method formats the message with the detector's name and logs it at the error level."),(0,n.yg)("h4",{id:"parameters-2"},"Parameters"),(0,n.yg)("p",null,"\u2022 ",(0,n.yg)("strong",{parentName:"p"},"message"),": ",(0,n.yg)("inlineCode",{parentName:"p"},"string")),(0,n.yg)("p",null,"The message to log."),(0,n.yg)("p",null,"\u2022 ",(0,n.yg)("strong",{parentName:"p"},"error?"),": ",(0,n.yg)("inlineCode",{parentName:"p"},"Error")),(0,n.yg)("p",null,"Optional error object to log alongside the message."),(0,n.yg)("h4",{id:"returns-6"},"Returns"),(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"void")),(0,n.yg)("h4",{id:"inherited-from-9"},"Inherited from"),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"/Snapper/docs/API/detectors/DetectorBase/classes/DetectorBase"},(0,n.yg)("inlineCode",{parentName:"a"},"DetectorBase")),".",(0,n.yg)("a",{parentName:"p",href:"/Snapper/docs/API/detectors/DetectorBase/classes/DetectorBase#logerror"},(0,n.yg)("inlineCode",{parentName:"a"},"logError"))),(0,n.yg)("h4",{id:"defined-in-10"},"Defined in"),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"https://github.com/asifqatar/Snapper/blob/efbcec64e60623713bea5b66951928dbe973c565/detectors/DetectorBase.ts#L103"},"detectors/DetectorBase.ts:103")),(0,n.yg)("hr",null),(0,n.yg)("h3",{id:"loginfo"},"logInfo()"),(0,n.yg)("blockquote",null,(0,n.yg)("p",{parentName:"blockquote"},(0,n.yg)("strong",{parentName:"p"},"logInfo"),"(",(0,n.yg)("inlineCode",{parentName:"p"},"message"),"): ",(0,n.yg)("inlineCode",{parentName:"p"},"void"))),(0,n.yg)("p",null,"Logs an informational message.\nThis method formats the message with the detector's name and logs it at the info level."),(0,n.yg)("h4",{id:"parameters-3"},"Parameters"),(0,n.yg)("p",null,"\u2022 ",(0,n.yg)("strong",{parentName:"p"},"message"),": ",(0,n.yg)("inlineCode",{parentName:"p"},"string")),(0,n.yg)("p",null,"The message to log."),(0,n.yg)("h4",{id:"returns-7"},"Returns"),(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"void")),(0,n.yg)("h4",{id:"inherited-from-10"},"Inherited from"),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"/Snapper/docs/API/detectors/DetectorBase/classes/DetectorBase"},(0,n.yg)("inlineCode",{parentName:"a"},"DetectorBase")),".",(0,n.yg)("a",{parentName:"p",href:"/Snapper/docs/API/detectors/DetectorBase/classes/DetectorBase#loginfo"},(0,n.yg)("inlineCode",{parentName:"a"},"logInfo"))),(0,n.yg)("h4",{id:"defined-in-11"},"Defined in"),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"https://github.com/asifqatar/Snapper/blob/efbcec64e60623713bea5b66951928dbe973c565/detectors/DetectorBase.ts#L84"},"detectors/DetectorBase.ts:84")),(0,n.yg)("hr",null),(0,n.yg)("h3",{id:"logwarning"},"logWarning()"),(0,n.yg)("blockquote",null,(0,n.yg)("p",{parentName:"blockquote"},(0,n.yg)("strong",{parentName:"p"},"logWarning"),"(",(0,n.yg)("inlineCode",{parentName:"p"},"message"),", ",(0,n.yg)("inlineCode",{parentName:"p"},"error"),"?): ",(0,n.yg)("inlineCode",{parentName:"p"},"void"))),(0,n.yg)("p",null,"Logs a warning message.\nThis method formats the message with the detector's name and logs it at the warning level."),(0,n.yg)("h4",{id:"parameters-4"},"Parameters"),(0,n.yg)("p",null,"\u2022 ",(0,n.yg)("strong",{parentName:"p"},"message"),": ",(0,n.yg)("inlineCode",{parentName:"p"},"string")),(0,n.yg)("p",null,"The message to log."),(0,n.yg)("p",null,"\u2022 ",(0,n.yg)("strong",{parentName:"p"},"error?"),": ",(0,n.yg)("inlineCode",{parentName:"p"},"Error")),(0,n.yg)("p",null,"Optional error object to log alongside the message."),(0,n.yg)("h4",{id:"returns-8"},"Returns"),(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"void")),(0,n.yg)("h4",{id:"inherited-from-11"},"Inherited from"),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"/Snapper/docs/API/detectors/DetectorBase/classes/DetectorBase"},(0,n.yg)("inlineCode",{parentName:"a"},"DetectorBase")),".",(0,n.yg)("a",{parentName:"p",href:"/Snapper/docs/API/detectors/DetectorBase/classes/DetectorBase#logwarning"},(0,n.yg)("inlineCode",{parentName:"a"},"logWarning"))),(0,n.yg)("h4",{id:"defined-in-12"},"Defined in"),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"https://github.com/asifqatar/Snapper/blob/efbcec64e60623713bea5b66951928dbe973c565/detectors/DetectorBase.ts#L113"},"detectors/DetectorBase.ts:113")),(0,n.yg)("hr",null),(0,n.yg)("h3",{id:"run"},"run()"),(0,n.yg)("blockquote",null,(0,n.yg)("p",{parentName:"blockquote"},(0,n.yg)("strong",{parentName:"p"},"run"),"(",(0,n.yg)("inlineCode",{parentName:"p"},"file"),"): ",(0,n.yg)("a",{parentName:"p",href:"/Snapper/docs/API/types/type-aliases/Finding"},(0,n.yg)("inlineCode",{parentName:"a"},"Finding")),"[]")),(0,n.yg)("p",null,"Analyzes the given source file for instances of 'any' type usage."),(0,n.yg)("h4",{id:"parameters-5"},"Parameters"),(0,n.yg)("p",null,"\u2022 ",(0,n.yg)("strong",{parentName:"p"},"file"),": ",(0,n.yg)("inlineCode",{parentName:"p"},"SourceFile")),(0,n.yg)("p",null,"The source file to analyze."),(0,n.yg)("h4",{id:"returns-9"},"Returns"),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"/Snapper/docs/API/types/type-aliases/Finding"},(0,n.yg)("inlineCode",{parentName:"a"},"Finding")),"[]"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"List of findings related to 'any' type usage.")),(0,n.yg)("h4",{id:"overrides-1"},"Overrides"),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"/Snapper/docs/API/detectors/DetectorBase/classes/DetectorBase"},(0,n.yg)("inlineCode",{parentName:"a"},"DetectorBase")),".",(0,n.yg)("a",{parentName:"p",href:"/Snapper/docs/API/detectors/DetectorBase/classes/DetectorBase#run"},(0,n.yg)("inlineCode",{parentName:"a"},"run"))),(0,n.yg)("h4",{id:"defined-in-13"},"Defined in"),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"https://github.com/asifqatar/Snapper/blob/efbcec64e60623713bea5b66951928dbe973c565/detectors/ImproperTypeUsage.ts#L26"},"detectors/ImproperTypeUsage.ts:26")))}d.isMDXComponent=!0}}]);