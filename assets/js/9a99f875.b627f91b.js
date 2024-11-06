"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3277],{5680:(e,t,n)=>{n.d(t,{xA:()=>l,yg:()=>y});var r=n(6540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),g=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=g(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=g(n),m=a,y=d["".concat(p,".").concat(m)]||d[m]||c[m]||s;return n?r.createElement(y,o(o({ref:t},l),{},{components:n})):r.createElement(y,o({ref:t},l))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[d]="string"==typeof e?e:a,o[1]=i;for(var g=2;g<s;g++)o[g]=n[g];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3459:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var r=n(8168),a=(n(6540),n(5680));const s={},o=void 0,i={unversionedId:"API/detectors/ExcessiveComments/classes/ExcessiveCommentsDetector",id:"API/detectors/ExcessiveComments/classes/ExcessiveCommentsDetector",isDocsHomePage:!1,title:"ExcessiveCommentsDetector",description:"Snapper Project \u2022 Docs",source:"@site/docs/API/detectors/ExcessiveComments/classes/ExcessiveCommentsDetector.md",sourceDirName:"API/detectors/ExcessiveComments/classes",slug:"/API/detectors/ExcessiveComments/classes/ExcessiveCommentsDetector",permalink:"/Snapper/docs/API/detectors/ExcessiveComments/classes/ExcessiveCommentsDetector",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/API/detectors/ExcessiveComments/classes/ExcessiveCommentsDetector.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"README",permalink:"/Snapper/docs/API/detectors/ExcessiveComments/README"},next:{title:"README",permalink:"/Snapper/docs/API/detectors/FloatingPointPrecision/README"}},p=[{value:"Extends",id:"extends",children:[]},{value:"Constructors",id:"constructors",children:[{value:"new ExcessiveCommentsDetector()",id:"new-excessivecommentsdetector",children:[]}]},{value:"Properties",id:"properties",children:[{value:"allowedFileRegexes",id:"allowedfileregexes",children:[]},{value:"findings",id:"findings",children:[]},{value:"name",id:"name",children:[]},{value:"riskRating",id:"riskrating",children:[]}]},{value:"Methods",id:"methods",children:[{value:"addFinding()",id:"addfinding",children:[]},{value:"clearFindings()",id:"clearfindings",children:[]},{value:"getFindings()",id:"getfindings",children:[]},{value:"getName()",id:"getname",children:[]},{value:"logDebug()",id:"logdebug",children:[]},{value:"logError()",id:"logerror",children:[]},{value:"logInfo()",id:"loginfo",children:[]},{value:"logWarning()",id:"logwarning",children:[]},{value:"run()",id:"run",children:[]}]}],g={toc:p},l="wrapper";function d(e){let{components:t,...n}=e;return(0,a.yg)(l,(0,r.A)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"/Snapper/docs/API/README"},(0,a.yg)("strong",{parentName:"a"},"Snapper Project"))," \u2022 ",(0,a.yg)("strong",{parentName:"p"},"Docs")),(0,a.yg)("hr",null),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"/Snapper/docs/API/README"},"Snapper Project")," / ",(0,a.yg)("a",{parentName:"p",href:"/Snapper/docs/API/detectors/ExcessiveComments/README"},"detectors/ExcessiveComments")," / ExcessiveCommentsDetector"),(0,a.yg)("h1",{id:"class-excessivecommentsdetector"},"Class: ExcessiveCommentsDetector"),(0,a.yg)("p",null,"Detector class for identifying excessive comments in the code."),(0,a.yg)("h2",{id:"extends"},"Extends"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/Snapper/docs/API/detectors/DetectorBase/classes/DetectorBase"},(0,a.yg)("inlineCode",{parentName:"a"},"DetectorBase")))),(0,a.yg)("h2",{id:"constructors"},"Constructors"),(0,a.yg)("h3",{id:"new-excessivecommentsdetector"},"new ExcessiveCommentsDetector()"),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},(0,a.yg)("strong",{parentName:"p"},"new ExcessiveCommentsDetector"),"(): ",(0,a.yg)("a",{parentName:"p",href:"/Snapper/docs/API/detectors/ExcessiveComments/classes/ExcessiveCommentsDetector"},(0,a.yg)("inlineCode",{parentName:"a"},"ExcessiveCommentsDetector")))),(0,a.yg)("h4",{id:"returns"},"Returns"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"/Snapper/docs/API/detectors/ExcessiveComments/classes/ExcessiveCommentsDetector"},(0,a.yg)("inlineCode",{parentName:"a"},"ExcessiveCommentsDetector"))),(0,a.yg)("h4",{id:"overrides"},"Overrides"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"/Snapper/docs/API/detectors/DetectorBase/classes/DetectorBase"},(0,a.yg)("inlineCode",{parentName:"a"},"DetectorBase")),".",(0,a.yg)("a",{parentName:"p",href:"/Snapper/docs/API/detectors/DetectorBase/classes/DetectorBase#constructors"},(0,a.yg)("inlineCode",{parentName:"a"},"constructor"))),(0,a.yg)("h4",{id:"defined-in"},"Defined in"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://github.com/asifqatar/Snapper/blob/efbcec64e60623713bea5b66951928dbe973c565/detectors/ExcessiveComments.ts#L15"},"detectors/ExcessiveComments.ts:15")),(0,a.yg)("h2",{id:"properties"},"Properties"),(0,a.yg)("h3",{id:"allowedfileregexes"},"allowedFileRegexes"),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},(0,a.yg)("strong",{parentName:"p"},"allowedFileRegexes"),": ",(0,a.yg)("inlineCode",{parentName:"p"},"RegExp"),"[]")),(0,a.yg)("h4",{id:"inherited-from"},"Inherited from"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"/Snapper/docs/API/detectors/DetectorBase/classes/DetectorBase"},(0,a.yg)("inlineCode",{parentName:"a"},"DetectorBase")),".",(0,a.yg)("a",{parentName:"p",href:"/Snapper/docs/API/detectors/DetectorBase/classes/DetectorBase#allowedfileregexes"},(0,a.yg)("inlineCode",{parentName:"a"},"allowedFileRegexes"))),(0,a.yg)("h4",{id:"defined-in-1"},"Defined in"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://github.com/asifqatar/Snapper/blob/efbcec64e60623713bea5b66951928dbe973c565/detectors/DetectorBase.ts#L19"},"detectors/DetectorBase.ts:19")),(0,a.yg)("hr",null),(0,a.yg)("h3",{id:"findings"},"findings"),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},(0,a.yg)("inlineCode",{parentName:"p"},"protected")," ",(0,a.yg)("strong",{parentName:"p"},"findings"),": ",(0,a.yg)("a",{parentName:"p",href:"/Snapper/docs/API/types/type-aliases/Finding"},(0,a.yg)("inlineCode",{parentName:"a"},"Finding")),"[] = ",(0,a.yg)("inlineCode",{parentName:"p"},"[]"))),(0,a.yg)("h4",{id:"inherited-from-1"},"Inherited from"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"/Snapper/docs/API/detectors/DetectorBase/classes/DetectorBase"},(0,a.yg)("inlineCode",{parentName:"a"},"DetectorBase")),".",(0,a.yg)("a",{parentName:"p",href:"/Snapper/docs/API/detectors/DetectorBase/classes/DetectorBase#findings"},(0,a.yg)("inlineCode",{parentName:"a"},"findings"))),(0,a.yg)("h4",{id:"defined-in-2"},"Defined in"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://github.com/asifqatar/Snapper/blob/efbcec64e60623713bea5b66951928dbe973c565/detectors/DetectorBase.ts#L16"},"detectors/DetectorBase.ts:16")),(0,a.yg)("hr",null),(0,a.yg)("h3",{id:"name"},"name"),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},(0,a.yg)("inlineCode",{parentName:"p"},"protected")," ",(0,a.yg)("strong",{parentName:"p"},"name"),": ",(0,a.yg)("inlineCode",{parentName:"p"},"string"))),(0,a.yg)("h4",{id:"inherited-from-2"},"Inherited from"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"/Snapper/docs/API/detectors/DetectorBase/classes/DetectorBase"},(0,a.yg)("inlineCode",{parentName:"a"},"DetectorBase")),".",(0,a.yg)("a",{parentName:"p",href:"/Snapper/docs/API/detectors/DetectorBase/classes/DetectorBase#name"},(0,a.yg)("inlineCode",{parentName:"a"},"name"))),(0,a.yg)("h4",{id:"defined-in-3"},"Defined in"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://github.com/asifqatar/Snapper/blob/efbcec64e60623713bea5b66951928dbe973c565/detectors/DetectorBase.ts#L14"},"detectors/DetectorBase.ts:14")),(0,a.yg)("hr",null),(0,a.yg)("h3",{id:"riskrating"},"riskRating"),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},(0,a.yg)("inlineCode",{parentName:"p"},"protected")," ",(0,a.yg)("strong",{parentName:"p"},"riskRating"),": ",(0,a.yg)("a",{parentName:"p",href:"/Snapper/docs/API/structures/enumerations/RiskRating"},(0,a.yg)("inlineCode",{parentName:"a"},"RiskRating")))),(0,a.yg)("h4",{id:"inherited-from-3"},"Inherited from"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"/Snapper/docs/API/detectors/DetectorBase/classes/DetectorBase"},(0,a.yg)("inlineCode",{parentName:"a"},"DetectorBase")),".",(0,a.yg)("a",{parentName:"p",href:"/Snapper/docs/API/detectors/DetectorBase/classes/DetectorBase#riskrating"},(0,a.yg)("inlineCode",{parentName:"a"},"riskRating"))),(0,a.yg)("h4",{id:"defined-in-4"},"Defined in"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://github.com/asifqatar/Snapper/blob/efbcec64e60623713bea5b66951928dbe973c565/detectors/DetectorBase.ts#L15"},"detectors/DetectorBase.ts:15")),(0,a.yg)("h2",{id:"methods"},"Methods"),(0,a.yg)("h3",{id:"addfinding"},"addFinding()"),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},(0,a.yg)("strong",{parentName:"p"},"addFinding"),"(",(0,a.yg)("inlineCode",{parentName:"p"},"description"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"filePath"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"lineNum"),"): ",(0,a.yg)("inlineCode",{parentName:"p"},"void"))),(0,a.yg)("p",null,"Adds a finding to the findings array.\nThis method creates a Finding object and logs a debug message before adding it to the findings list."),(0,a.yg)("h4",{id:"parameters"},"Parameters"),(0,a.yg)("p",null,"\u2022 ",(0,a.yg)("strong",{parentName:"p"},"description"),": ",(0,a.yg)("inlineCode",{parentName:"p"},"string")),(0,a.yg)("p",null,"Description of the finding."),(0,a.yg)("p",null,"\u2022 ",(0,a.yg)("strong",{parentName:"p"},"filePath"),": ",(0,a.yg)("inlineCode",{parentName:"p"},"string")),(0,a.yg)("p",null,"Path of the file where the finding was detected."),(0,a.yg)("p",null,"\u2022 ",(0,a.yg)("strong",{parentName:"p"},"lineNum"),": ",(0,a.yg)("inlineCode",{parentName:"p"},"number")," = ",(0,a.yg)("inlineCode",{parentName:"p"},"1")),(0,a.yg)("p",null,"Line number where the finding was detected (default is 1)."),(0,a.yg)("h4",{id:"returns-1"},"Returns"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"void")),(0,a.yg)("h4",{id:"inherited-from-4"},"Inherited from"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"/Snapper/docs/API/detectors/DetectorBase/classes/DetectorBase"},(0,a.yg)("inlineCode",{parentName:"a"},"DetectorBase")),".",(0,a.yg)("a",{parentName:"p",href:"/Snapper/docs/API/detectors/DetectorBase/classes/DetectorBase#addfinding"},(0,a.yg)("inlineCode",{parentName:"a"},"addFinding"))),(0,a.yg)("h4",{id:"defined-in-5"},"Defined in"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://github.com/asifqatar/Snapper/blob/efbcec64e60623713bea5b66951928dbe973c565/detectors/DetectorBase.ts#L41"},"detectors/DetectorBase.ts:41")),(0,a.yg)("hr",null),(0,a.yg)("h3",{id:"clearfindings"},"clearFindings()"),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},(0,a.yg)("strong",{parentName:"p"},"clearFindings"),"(): ",(0,a.yg)("inlineCode",{parentName:"p"},"void"))),(0,a.yg)("p",null,"Clears all findings from the detector.\nThis method resets the findings array to an empty state."),(0,a.yg)("h4",{id:"returns-2"},"Returns"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"void")),(0,a.yg)("h4",{id:"inherited-from-5"},"Inherited from"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"/Snapper/docs/API/detectors/DetectorBase/classes/DetectorBase"},(0,a.yg)("inlineCode",{parentName:"a"},"DetectorBase")),".",(0,a.yg)("a",{parentName:"p",href:"/Snapper/docs/API/detectors/DetectorBase/classes/DetectorBase#clearfindings"},(0,a.yg)("inlineCode",{parentName:"a"},"clearFindings"))),(0,a.yg)("h4",{id:"defined-in-6"},"Defined in"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://github.com/asifqatar/Snapper/blob/efbcec64e60623713bea5b66951928dbe973c565/detectors/DetectorBase.ts#L59"},"detectors/DetectorBase.ts:59")),(0,a.yg)("hr",null),(0,a.yg)("h3",{id:"getfindings"},"getFindings()"),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},(0,a.yg)("strong",{parentName:"p"},"getFindings"),"(): ",(0,a.yg)("a",{parentName:"p",href:"/Snapper/docs/API/types/type-aliases/Finding"},(0,a.yg)("inlineCode",{parentName:"a"},"Finding")),"[]")),(0,a.yg)("p",null,"Retrieves all findings collected by the detector."),(0,a.yg)("h4",{id:"returns-3"},"Returns"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"/Snapper/docs/API/types/type-aliases/Finding"},(0,a.yg)("inlineCode",{parentName:"a"},"Finding")),"[]"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Array of findings.")),(0,a.yg)("h4",{id:"inherited-from-6"},"Inherited from"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"/Snapper/docs/API/detectors/DetectorBase/classes/DetectorBase"},(0,a.yg)("inlineCode",{parentName:"a"},"DetectorBase")),".",(0,a.yg)("a",{parentName:"p",href:"/Snapper/docs/API/detectors/DetectorBase/classes/DetectorBase#getfindings"},(0,a.yg)("inlineCode",{parentName:"a"},"getFindings"))),(0,a.yg)("h4",{id:"defined-in-7"},"Defined in"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://github.com/asifqatar/Snapper/blob/efbcec64e60623713bea5b66951928dbe973c565/detectors/DetectorBase.ts#L75"},"detectors/DetectorBase.ts:75")),(0,a.yg)("hr",null),(0,a.yg)("h3",{id:"getname"},"getName()"),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},(0,a.yg)("strong",{parentName:"p"},"getName"),"(): ",(0,a.yg)("inlineCode",{parentName:"p"},"string"))),(0,a.yg)("p",null,"Gets the name of the detector."),(0,a.yg)("h4",{id:"returns-4"},"Returns"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"string")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"The name of the detector.")),(0,a.yg)("h4",{id:"inherited-from-7"},"Inherited from"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"/Snapper/docs/API/detectors/DetectorBase/classes/DetectorBase"},(0,a.yg)("inlineCode",{parentName:"a"},"DetectorBase")),".",(0,a.yg)("a",{parentName:"p",href:"/Snapper/docs/API/detectors/DetectorBase/classes/DetectorBase#getname"},(0,a.yg)("inlineCode",{parentName:"a"},"getName"))),(0,a.yg)("h4",{id:"defined-in-8"},"Defined in"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://github.com/asifqatar/Snapper/blob/efbcec64e60623713bea5b66951928dbe973c565/detectors/DetectorBase.ts#L67"},"detectors/DetectorBase.ts:67")),(0,a.yg)("hr",null),(0,a.yg)("h3",{id:"logdebug"},"logDebug()"),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},(0,a.yg)("strong",{parentName:"p"},"logDebug"),"(",(0,a.yg)("inlineCode",{parentName:"p"},"message"),"): ",(0,a.yg)("inlineCode",{parentName:"p"},"void"))),(0,a.yg)("p",null,"Logs a debug message.\nThis method formats the message with the detector's name and logs it at the debug level."),(0,a.yg)("h4",{id:"parameters-1"},"Parameters"),(0,a.yg)("p",null,"\u2022 ",(0,a.yg)("strong",{parentName:"p"},"message"),": ",(0,a.yg)("inlineCode",{parentName:"p"},"string")),(0,a.yg)("p",null,"The message to log."),(0,a.yg)("h4",{id:"returns-5"},"Returns"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"void")),(0,a.yg)("h4",{id:"inherited-from-8"},"Inherited from"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"/Snapper/docs/API/detectors/DetectorBase/classes/DetectorBase"},(0,a.yg)("inlineCode",{parentName:"a"},"DetectorBase")),".",(0,a.yg)("a",{parentName:"p",href:"/Snapper/docs/API/detectors/DetectorBase/classes/DetectorBase#logdebug"},(0,a.yg)("inlineCode",{parentName:"a"},"logDebug"))),(0,a.yg)("h4",{id:"defined-in-9"},"Defined in"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://github.com/asifqatar/Snapper/blob/efbcec64e60623713bea5b66951928dbe973c565/detectors/DetectorBase.ts#L93"},"detectors/DetectorBase.ts:93")),(0,a.yg)("hr",null),(0,a.yg)("h3",{id:"logerror"},"logError()"),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},(0,a.yg)("strong",{parentName:"p"},"logError"),"(",(0,a.yg)("inlineCode",{parentName:"p"},"message"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"error"),"?): ",(0,a.yg)("inlineCode",{parentName:"p"},"void"))),(0,a.yg)("p",null,"Logs an error message.\nThis method formats the message with the detector's name and logs it at the error level."),(0,a.yg)("h4",{id:"parameters-2"},"Parameters"),(0,a.yg)("p",null,"\u2022 ",(0,a.yg)("strong",{parentName:"p"},"message"),": ",(0,a.yg)("inlineCode",{parentName:"p"},"string")),(0,a.yg)("p",null,"The message to log."),(0,a.yg)("p",null,"\u2022 ",(0,a.yg)("strong",{parentName:"p"},"error?"),": ",(0,a.yg)("inlineCode",{parentName:"p"},"Error")),(0,a.yg)("p",null,"Optional error object to log alongside the message."),(0,a.yg)("h4",{id:"returns-6"},"Returns"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"void")),(0,a.yg)("h4",{id:"inherited-from-9"},"Inherited from"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"/Snapper/docs/API/detectors/DetectorBase/classes/DetectorBase"},(0,a.yg)("inlineCode",{parentName:"a"},"DetectorBase")),".",(0,a.yg)("a",{parentName:"p",href:"/Snapper/docs/API/detectors/DetectorBase/classes/DetectorBase#logerror"},(0,a.yg)("inlineCode",{parentName:"a"},"logError"))),(0,a.yg)("h4",{id:"defined-in-10"},"Defined in"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://github.com/asifqatar/Snapper/blob/efbcec64e60623713bea5b66951928dbe973c565/detectors/DetectorBase.ts#L103"},"detectors/DetectorBase.ts:103")),(0,a.yg)("hr",null),(0,a.yg)("h3",{id:"loginfo"},"logInfo()"),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},(0,a.yg)("strong",{parentName:"p"},"logInfo"),"(",(0,a.yg)("inlineCode",{parentName:"p"},"message"),"): ",(0,a.yg)("inlineCode",{parentName:"p"},"void"))),(0,a.yg)("p",null,"Logs an informational message.\nThis method formats the message with the detector's name and logs it at the info level."),(0,a.yg)("h4",{id:"parameters-3"},"Parameters"),(0,a.yg)("p",null,"\u2022 ",(0,a.yg)("strong",{parentName:"p"},"message"),": ",(0,a.yg)("inlineCode",{parentName:"p"},"string")),(0,a.yg)("p",null,"The message to log."),(0,a.yg)("h4",{id:"returns-7"},"Returns"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"void")),(0,a.yg)("h4",{id:"inherited-from-10"},"Inherited from"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"/Snapper/docs/API/detectors/DetectorBase/classes/DetectorBase"},(0,a.yg)("inlineCode",{parentName:"a"},"DetectorBase")),".",(0,a.yg)("a",{parentName:"p",href:"/Snapper/docs/API/detectors/DetectorBase/classes/DetectorBase#loginfo"},(0,a.yg)("inlineCode",{parentName:"a"},"logInfo"))),(0,a.yg)("h4",{id:"defined-in-11"},"Defined in"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://github.com/asifqatar/Snapper/blob/efbcec64e60623713bea5b66951928dbe973c565/detectors/DetectorBase.ts#L84"},"detectors/DetectorBase.ts:84")),(0,a.yg)("hr",null),(0,a.yg)("h3",{id:"logwarning"},"logWarning()"),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},(0,a.yg)("strong",{parentName:"p"},"logWarning"),"(",(0,a.yg)("inlineCode",{parentName:"p"},"message"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"error"),"?): ",(0,a.yg)("inlineCode",{parentName:"p"},"void"))),(0,a.yg)("p",null,"Logs a warning message.\nThis method formats the message with the detector's name and logs it at the warning level."),(0,a.yg)("h4",{id:"parameters-4"},"Parameters"),(0,a.yg)("p",null,"\u2022 ",(0,a.yg)("strong",{parentName:"p"},"message"),": ",(0,a.yg)("inlineCode",{parentName:"p"},"string")),(0,a.yg)("p",null,"The message to log."),(0,a.yg)("p",null,"\u2022 ",(0,a.yg)("strong",{parentName:"p"},"error?"),": ",(0,a.yg)("inlineCode",{parentName:"p"},"Error")),(0,a.yg)("p",null,"Optional error object to log alongside the message."),(0,a.yg)("h4",{id:"returns-8"},"Returns"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"void")),(0,a.yg)("h4",{id:"inherited-from-11"},"Inherited from"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"/Snapper/docs/API/detectors/DetectorBase/classes/DetectorBase"},(0,a.yg)("inlineCode",{parentName:"a"},"DetectorBase")),".",(0,a.yg)("a",{parentName:"p",href:"/Snapper/docs/API/detectors/DetectorBase/classes/DetectorBase#logwarning"},(0,a.yg)("inlineCode",{parentName:"a"},"logWarning"))),(0,a.yg)("h4",{id:"defined-in-12"},"Defined in"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://github.com/asifqatar/Snapper/blob/efbcec64e60623713bea5b66951928dbe973c565/detectors/DetectorBase.ts#L113"},"detectors/DetectorBase.ts:113")),(0,a.yg)("hr",null),(0,a.yg)("h3",{id:"run"},"run()"),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},(0,a.yg)("strong",{parentName:"p"},"run"),"(",(0,a.yg)("inlineCode",{parentName:"p"},"sourceFile"),"): ",(0,a.yg)("a",{parentName:"p",href:"/Snapper/docs/API/types/type-aliases/Finding"},(0,a.yg)("inlineCode",{parentName:"a"},"Finding")),"[]")),(0,a.yg)("p",null,"Analyzes the provided source file for excessive comments."),(0,a.yg)("h4",{id:"parameters-5"},"Parameters"),(0,a.yg)("p",null,"\u2022 ",(0,a.yg)("strong",{parentName:"p"},"sourceFile"),": ",(0,a.yg)("inlineCode",{parentName:"p"},"SourceFile")),(0,a.yg)("p",null,"The source file to analyze."),(0,a.yg)("h4",{id:"returns-9"},"Returns"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"/Snapper/docs/API/types/type-aliases/Finding"},(0,a.yg)("inlineCode",{parentName:"a"},"Finding")),"[]"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Array of findings related to excessive comments.")),(0,a.yg)("h4",{id:"overrides-1"},"Overrides"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"/Snapper/docs/API/detectors/DetectorBase/classes/DetectorBase"},(0,a.yg)("inlineCode",{parentName:"a"},"DetectorBase")),".",(0,a.yg)("a",{parentName:"p",href:"/Snapper/docs/API/detectors/DetectorBase/classes/DetectorBase#run"},(0,a.yg)("inlineCode",{parentName:"a"},"run"))),(0,a.yg)("h4",{id:"defined-in-13"},"Defined in"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://github.com/asifqatar/Snapper/blob/efbcec64e60623713bea5b66951928dbe973c565/detectors/ExcessiveComments.ts#L24"},"detectors/ExcessiveComments.ts:24")))}d.isMDXComponent=!0}}]);