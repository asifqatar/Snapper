"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2984],{5680:(e,t,r)=>{r.d(t,{xA:()=>l,yg:()=>m});var n=r(6540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=n.createContext({}),g=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=g(e.components);return n.createElement(d.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,d=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),p=g(r),y=a,m=p["".concat(d,".").concat(y)]||p[y]||c[y]||s;return r?n.createElement(m,i(i({ref:t},l),{},{components:r})):n.createElement(m,i({ref:t},l))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,i=new Array(s);i[0]=y;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[p]="string"==typeof e?e:a,i[1]=o;for(var g=2;g<s;g++)i[g]=r[g];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},9439:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var n=r(8168),a=(r(6540),r(5680));const s={},i=void 0,o={unversionedId:"API/detectors/DeprecatedPermissions/classes/DeprecatedPermissionsDetector",id:"API/detectors/DeprecatedPermissions/classes/DeprecatedPermissionsDetector",isDocsHomePage:!1,title:"DeprecatedPermissionsDetector",description:"Snapper Project \u2022 Docs",source:"@site/docs/API/detectors/DeprecatedPermissions/classes/DeprecatedPermissionsDetector.md",sourceDirName:"API/detectors/DeprecatedPermissions/classes",slug:"/API/detectors/DeprecatedPermissions/classes/DeprecatedPermissionsDetector",permalink:"/docs/API/detectors/DeprecatedPermissions/classes/DeprecatedPermissionsDetector",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/API/detectors/DeprecatedPermissions/classes/DeprecatedPermissionsDetector.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"README",permalink:"/docs/API/detectors/DeprecatedPermissions/README"},next:{title:"README",permalink:"/docs/API/detectors/DetectorBase/README"}},d=[{value:"Extends",id:"extends",children:[]},{value:"Constructors",id:"constructors",children:[{value:"new DeprecatedPermissionsDetector()",id:"new-deprecatedpermissionsdetector",children:[]}]},{value:"Properties",id:"properties",children:[{value:"allowedFileRegexes",id:"allowedfileregexes",children:[]},{value:"findings",id:"findings",children:[]},{value:"name",id:"name",children:[]},{value:"riskRating",id:"riskrating",children:[]}]},{value:"Methods",id:"methods",children:[{value:"addFinding()",id:"addfinding",children:[]},{value:"clearFindings()",id:"clearfindings",children:[]},{value:"getFindings()",id:"getfindings",children:[]},{value:"getName()",id:"getname",children:[]},{value:"logDebug()",id:"logdebug",children:[]},{value:"logError()",id:"logerror",children:[]},{value:"logInfo()",id:"loginfo",children:[]},{value:"logWarning()",id:"logwarning",children:[]},{value:"run()",id:"run",children:[]}]}],g={toc:d},l="wrapper";function p(e){let{components:t,...r}=e;return(0,a.yg)(l,(0,n.A)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"/docs/API/README"},(0,a.yg)("strong",{parentName:"a"},"Snapper Project"))," \u2022 ",(0,a.yg)("strong",{parentName:"p"},"Docs")),(0,a.yg)("hr",null),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"/docs/API/README"},"Snapper Project")," / ",(0,a.yg)("a",{parentName:"p",href:"/docs/API/detectors/DeprecatedPermissions/README"},"detectors/DeprecatedPermissions")," / DeprecatedPermissionsDetector"),(0,a.yg)("h1",{id:"class-deprecatedpermissionsdetector"},"Class: DeprecatedPermissionsDetector"),(0,a.yg)("p",null,"Class to detect deprecated permissions in the snap.manifest.json file.\nThis detector checks for deprecated permissions that should not be used in the current implementation\nof the Snap. It raises warnings when deprecated permissions are found."),(0,a.yg)("h2",{id:"extends"},"Extends"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/docs/API/detectors/DetectorBase/classes/DetectorBase"},(0,a.yg)("inlineCode",{parentName:"a"},"DetectorBase")))),(0,a.yg)("h2",{id:"constructors"},"Constructors"),(0,a.yg)("h3",{id:"new-deprecatedpermissionsdetector"},"new DeprecatedPermissionsDetector()"),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},(0,a.yg)("strong",{parentName:"p"},"new DeprecatedPermissionsDetector"),"(): ",(0,a.yg)("a",{parentName:"p",href:"/docs/API/detectors/DeprecatedPermissions/classes/DeprecatedPermissionsDetector"},(0,a.yg)("inlineCode",{parentName:"a"},"DeprecatedPermissionsDetector")))),(0,a.yg)("p",null,"Constructor for the DeprecatedPermissionsDetector.\nInitializes the detector with a name and assigns it a high-risk rating, as using deprecated permissions\ncan lead to security vulnerabilities or unstable behavior in the Snap."),(0,a.yg)("h4",{id:"returns"},"Returns"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"/docs/API/detectors/DeprecatedPermissions/classes/DeprecatedPermissionsDetector"},(0,a.yg)("inlineCode",{parentName:"a"},"DeprecatedPermissionsDetector"))),(0,a.yg)("h4",{id:"overrides"},"Overrides"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"/docs/API/detectors/DetectorBase/classes/DetectorBase"},(0,a.yg)("inlineCode",{parentName:"a"},"DetectorBase")),".",(0,a.yg)("a",{parentName:"p",href:"/docs/API/detectors/DetectorBase/classes/DetectorBase#constructors"},(0,a.yg)("inlineCode",{parentName:"a"},"constructor"))),(0,a.yg)("h4",{id:"defined-in"},"Defined in"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://github.com/asifqatar/Snapper/blob/efbcec64e60623713bea5b66951928dbe973c565/detectors/DeprecatedPermissions.ts#L30"},"detectors/DeprecatedPermissions.ts:30")),(0,a.yg)("h2",{id:"properties"},"Properties"),(0,a.yg)("h3",{id:"allowedfileregexes"},"allowedFileRegexes"),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},(0,a.yg)("strong",{parentName:"p"},"allowedFileRegexes"),": ",(0,a.yg)("inlineCode",{parentName:"p"},"RegExp"),"[]")),(0,a.yg)("h4",{id:"overrides-1"},"Overrides"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"/docs/API/detectors/DetectorBase/classes/DetectorBase"},(0,a.yg)("inlineCode",{parentName:"a"},"DetectorBase")),".",(0,a.yg)("a",{parentName:"p",href:"/docs/API/detectors/DetectorBase/classes/DetectorBase#allowedfileregexes"},(0,a.yg)("inlineCode",{parentName:"a"},"allowedFileRegexes"))),(0,a.yg)("h4",{id:"defined-in-1"},"Defined in"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://github.com/asifqatar/Snapper/blob/efbcec64e60623713bea5b66951928dbe973c565/detectors/DeprecatedPermissions.ts#L34"},"detectors/DeprecatedPermissions.ts:34")),(0,a.yg)("hr",null),(0,a.yg)("h3",{id:"findings"},"findings"),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},(0,a.yg)("inlineCode",{parentName:"p"},"protected")," ",(0,a.yg)("strong",{parentName:"p"},"findings"),": ",(0,a.yg)("a",{parentName:"p",href:"/docs/API/types/type-aliases/Finding"},(0,a.yg)("inlineCode",{parentName:"a"},"Finding")),"[] = ",(0,a.yg)("inlineCode",{parentName:"p"},"[]"))),(0,a.yg)("h4",{id:"inherited-from"},"Inherited from"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"/docs/API/detectors/DetectorBase/classes/DetectorBase"},(0,a.yg)("inlineCode",{parentName:"a"},"DetectorBase")),".",(0,a.yg)("a",{parentName:"p",href:"/docs/API/detectors/DetectorBase/classes/DetectorBase#findings"},(0,a.yg)("inlineCode",{parentName:"a"},"findings"))),(0,a.yg)("h4",{id:"defined-in-2"},"Defined in"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://github.com/asifqatar/Snapper/blob/efbcec64e60623713bea5b66951928dbe973c565/detectors/DetectorBase.ts#L16"},"detectors/DetectorBase.ts:16")),(0,a.yg)("hr",null),(0,a.yg)("h3",{id:"name"},"name"),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},(0,a.yg)("inlineCode",{parentName:"p"},"protected")," ",(0,a.yg)("strong",{parentName:"p"},"name"),": ",(0,a.yg)("inlineCode",{parentName:"p"},"string"))),(0,a.yg)("h4",{id:"inherited-from-1"},"Inherited from"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"/docs/API/detectors/DetectorBase/classes/DetectorBase"},(0,a.yg)("inlineCode",{parentName:"a"},"DetectorBase")),".",(0,a.yg)("a",{parentName:"p",href:"/docs/API/detectors/DetectorBase/classes/DetectorBase#name"},(0,a.yg)("inlineCode",{parentName:"a"},"name"))),(0,a.yg)("h4",{id:"defined-in-3"},"Defined in"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://github.com/asifqatar/Snapper/blob/efbcec64e60623713bea5b66951928dbe973c565/detectors/DetectorBase.ts#L14"},"detectors/DetectorBase.ts:14")),(0,a.yg)("hr",null),(0,a.yg)("h3",{id:"riskrating"},"riskRating"),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},(0,a.yg)("inlineCode",{parentName:"p"},"protected")," ",(0,a.yg)("strong",{parentName:"p"},"riskRating"),": ",(0,a.yg)("a",{parentName:"p",href:"/docs/API/structures/enumerations/RiskRating"},(0,a.yg)("inlineCode",{parentName:"a"},"RiskRating")))),(0,a.yg)("h4",{id:"inherited-from-2"},"Inherited from"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"/docs/API/detectors/DetectorBase/classes/DetectorBase"},(0,a.yg)("inlineCode",{parentName:"a"},"DetectorBase")),".",(0,a.yg)("a",{parentName:"p",href:"/docs/API/detectors/DetectorBase/classes/DetectorBase#riskrating"},(0,a.yg)("inlineCode",{parentName:"a"},"riskRating"))),(0,a.yg)("h4",{id:"defined-in-4"},"Defined in"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://github.com/asifqatar/Snapper/blob/efbcec64e60623713bea5b66951928dbe973c565/detectors/DetectorBase.ts#L15"},"detectors/DetectorBase.ts:15")),(0,a.yg)("h2",{id:"methods"},"Methods"),(0,a.yg)("h3",{id:"addfinding"},"addFinding()"),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},(0,a.yg)("strong",{parentName:"p"},"addFinding"),"(",(0,a.yg)("inlineCode",{parentName:"p"},"description"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"filePath"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"lineNum"),"): ",(0,a.yg)("inlineCode",{parentName:"p"},"void"))),(0,a.yg)("p",null,"Adds a finding to the findings array.\nThis method creates a Finding object and logs a debug message before adding it to the findings list."),(0,a.yg)("h4",{id:"parameters"},"Parameters"),(0,a.yg)("p",null,"\u2022 ",(0,a.yg)("strong",{parentName:"p"},"description"),": ",(0,a.yg)("inlineCode",{parentName:"p"},"string")),(0,a.yg)("p",null,"Description of the finding."),(0,a.yg)("p",null,"\u2022 ",(0,a.yg)("strong",{parentName:"p"},"filePath"),": ",(0,a.yg)("inlineCode",{parentName:"p"},"string")),(0,a.yg)("p",null,"Path of the file where the finding was detected."),(0,a.yg)("p",null,"\u2022 ",(0,a.yg)("strong",{parentName:"p"},"lineNum"),": ",(0,a.yg)("inlineCode",{parentName:"p"},"number")," = ",(0,a.yg)("inlineCode",{parentName:"p"},"1")),(0,a.yg)("p",null,"Line number where the finding was detected (default is 1)."),(0,a.yg)("h4",{id:"returns-1"},"Returns"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"void")),(0,a.yg)("h4",{id:"inherited-from-3"},"Inherited from"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"/docs/API/detectors/DetectorBase/classes/DetectorBase"},(0,a.yg)("inlineCode",{parentName:"a"},"DetectorBase")),".",(0,a.yg)("a",{parentName:"p",href:"/docs/API/detectors/DetectorBase/classes/DetectorBase#addfinding"},(0,a.yg)("inlineCode",{parentName:"a"},"addFinding"))),(0,a.yg)("h4",{id:"defined-in-5"},"Defined in"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://github.com/asifqatar/Snapper/blob/efbcec64e60623713bea5b66951928dbe973c565/detectors/DetectorBase.ts#L41"},"detectors/DetectorBase.ts:41")),(0,a.yg)("hr",null),(0,a.yg)("h3",{id:"clearfindings"},"clearFindings()"),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},(0,a.yg)("strong",{parentName:"p"},"clearFindings"),"(): ",(0,a.yg)("inlineCode",{parentName:"p"},"void"))),(0,a.yg)("p",null,"Clears all findings from the detector.\nThis method resets the findings array to an empty state."),(0,a.yg)("h4",{id:"returns-2"},"Returns"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"void")),(0,a.yg)("h4",{id:"inherited-from-4"},"Inherited from"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"/docs/API/detectors/DetectorBase/classes/DetectorBase"},(0,a.yg)("inlineCode",{parentName:"a"},"DetectorBase")),".",(0,a.yg)("a",{parentName:"p",href:"/docs/API/detectors/DetectorBase/classes/DetectorBase#clearfindings"},(0,a.yg)("inlineCode",{parentName:"a"},"clearFindings"))),(0,a.yg)("h4",{id:"defined-in-6"},"Defined in"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://github.com/asifqatar/Snapper/blob/efbcec64e60623713bea5b66951928dbe973c565/detectors/DetectorBase.ts#L59"},"detectors/DetectorBase.ts:59")),(0,a.yg)("hr",null),(0,a.yg)("h3",{id:"getfindings"},"getFindings()"),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},(0,a.yg)("strong",{parentName:"p"},"getFindings"),"(): ",(0,a.yg)("a",{parentName:"p",href:"/docs/API/types/type-aliases/Finding"},(0,a.yg)("inlineCode",{parentName:"a"},"Finding")),"[]")),(0,a.yg)("p",null,"Retrieves all findings collected by the detector."),(0,a.yg)("h4",{id:"returns-3"},"Returns"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"/docs/API/types/type-aliases/Finding"},(0,a.yg)("inlineCode",{parentName:"a"},"Finding")),"[]"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Array of findings.")),(0,a.yg)("h4",{id:"inherited-from-5"},"Inherited from"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"/docs/API/detectors/DetectorBase/classes/DetectorBase"},(0,a.yg)("inlineCode",{parentName:"a"},"DetectorBase")),".",(0,a.yg)("a",{parentName:"p",href:"/docs/API/detectors/DetectorBase/classes/DetectorBase#getfindings"},(0,a.yg)("inlineCode",{parentName:"a"},"getFindings"))),(0,a.yg)("h4",{id:"defined-in-7"},"Defined in"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://github.com/asifqatar/Snapper/blob/efbcec64e60623713bea5b66951928dbe973c565/detectors/DetectorBase.ts#L75"},"detectors/DetectorBase.ts:75")),(0,a.yg)("hr",null),(0,a.yg)("h3",{id:"getname"},"getName()"),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},(0,a.yg)("strong",{parentName:"p"},"getName"),"(): ",(0,a.yg)("inlineCode",{parentName:"p"},"string"))),(0,a.yg)("p",null,"Gets the name of the detector."),(0,a.yg)("h4",{id:"returns-4"},"Returns"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"string")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"The name of the detector.")),(0,a.yg)("h4",{id:"inherited-from-6"},"Inherited from"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"/docs/API/detectors/DetectorBase/classes/DetectorBase"},(0,a.yg)("inlineCode",{parentName:"a"},"DetectorBase")),".",(0,a.yg)("a",{parentName:"p",href:"/docs/API/detectors/DetectorBase/classes/DetectorBase#getname"},(0,a.yg)("inlineCode",{parentName:"a"},"getName"))),(0,a.yg)("h4",{id:"defined-in-8"},"Defined in"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://github.com/asifqatar/Snapper/blob/efbcec64e60623713bea5b66951928dbe973c565/detectors/DetectorBase.ts#L67"},"detectors/DetectorBase.ts:67")),(0,a.yg)("hr",null),(0,a.yg)("h3",{id:"logdebug"},"logDebug()"),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},(0,a.yg)("strong",{parentName:"p"},"logDebug"),"(",(0,a.yg)("inlineCode",{parentName:"p"},"message"),"): ",(0,a.yg)("inlineCode",{parentName:"p"},"void"))),(0,a.yg)("p",null,"Logs a debug message.\nThis method formats the message with the detector's name and logs it at the debug level."),(0,a.yg)("h4",{id:"parameters-1"},"Parameters"),(0,a.yg)("p",null,"\u2022 ",(0,a.yg)("strong",{parentName:"p"},"message"),": ",(0,a.yg)("inlineCode",{parentName:"p"},"string")),(0,a.yg)("p",null,"The message to log."),(0,a.yg)("h4",{id:"returns-5"},"Returns"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"void")),(0,a.yg)("h4",{id:"inherited-from-7"},"Inherited from"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"/docs/API/detectors/DetectorBase/classes/DetectorBase"},(0,a.yg)("inlineCode",{parentName:"a"},"DetectorBase")),".",(0,a.yg)("a",{parentName:"p",href:"/docs/API/detectors/DetectorBase/classes/DetectorBase#logdebug"},(0,a.yg)("inlineCode",{parentName:"a"},"logDebug"))),(0,a.yg)("h4",{id:"defined-in-9"},"Defined in"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://github.com/asifqatar/Snapper/blob/efbcec64e60623713bea5b66951928dbe973c565/detectors/DetectorBase.ts#L93"},"detectors/DetectorBase.ts:93")),(0,a.yg)("hr",null),(0,a.yg)("h3",{id:"logerror"},"logError()"),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},(0,a.yg)("strong",{parentName:"p"},"logError"),"(",(0,a.yg)("inlineCode",{parentName:"p"},"message"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"error"),"?): ",(0,a.yg)("inlineCode",{parentName:"p"},"void"))),(0,a.yg)("p",null,"Logs an error message.\nThis method formats the message with the detector's name and logs it at the error level."),(0,a.yg)("h4",{id:"parameters-2"},"Parameters"),(0,a.yg)("p",null,"\u2022 ",(0,a.yg)("strong",{parentName:"p"},"message"),": ",(0,a.yg)("inlineCode",{parentName:"p"},"string")),(0,a.yg)("p",null,"The message to log."),(0,a.yg)("p",null,"\u2022 ",(0,a.yg)("strong",{parentName:"p"},"error?"),": ",(0,a.yg)("inlineCode",{parentName:"p"},"Error")),(0,a.yg)("p",null,"Optional error object to log alongside the message."),(0,a.yg)("h4",{id:"returns-6"},"Returns"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"void")),(0,a.yg)("h4",{id:"inherited-from-8"},"Inherited from"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"/docs/API/detectors/DetectorBase/classes/DetectorBase"},(0,a.yg)("inlineCode",{parentName:"a"},"DetectorBase")),".",(0,a.yg)("a",{parentName:"p",href:"/docs/API/detectors/DetectorBase/classes/DetectorBase#logerror"},(0,a.yg)("inlineCode",{parentName:"a"},"logError"))),(0,a.yg)("h4",{id:"defined-in-10"},"Defined in"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://github.com/asifqatar/Snapper/blob/efbcec64e60623713bea5b66951928dbe973c565/detectors/DetectorBase.ts#L103"},"detectors/DetectorBase.ts:103")),(0,a.yg)("hr",null),(0,a.yg)("h3",{id:"loginfo"},"logInfo()"),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},(0,a.yg)("strong",{parentName:"p"},"logInfo"),"(",(0,a.yg)("inlineCode",{parentName:"p"},"message"),"): ",(0,a.yg)("inlineCode",{parentName:"p"},"void"))),(0,a.yg)("p",null,"Logs an informational message.\nThis method formats the message with the detector's name and logs it at the info level."),(0,a.yg)("h4",{id:"parameters-3"},"Parameters"),(0,a.yg)("p",null,"\u2022 ",(0,a.yg)("strong",{parentName:"p"},"message"),": ",(0,a.yg)("inlineCode",{parentName:"p"},"string")),(0,a.yg)("p",null,"The message to log."),(0,a.yg)("h4",{id:"returns-7"},"Returns"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"void")),(0,a.yg)("h4",{id:"inherited-from-9"},"Inherited from"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"/docs/API/detectors/DetectorBase/classes/DetectorBase"},(0,a.yg)("inlineCode",{parentName:"a"},"DetectorBase")),".",(0,a.yg)("a",{parentName:"p",href:"/docs/API/detectors/DetectorBase/classes/DetectorBase#loginfo"},(0,a.yg)("inlineCode",{parentName:"a"},"logInfo"))),(0,a.yg)("h4",{id:"defined-in-11"},"Defined in"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://github.com/asifqatar/Snapper/blob/efbcec64e60623713bea5b66951928dbe973c565/detectors/DetectorBase.ts#L84"},"detectors/DetectorBase.ts:84")),(0,a.yg)("hr",null),(0,a.yg)("h3",{id:"logwarning"},"logWarning()"),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},(0,a.yg)("strong",{parentName:"p"},"logWarning"),"(",(0,a.yg)("inlineCode",{parentName:"p"},"message"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"error"),"?): ",(0,a.yg)("inlineCode",{parentName:"p"},"void"))),(0,a.yg)("p",null,"Logs a warning message.\nThis method formats the message with the detector's name and logs it at the warning level."),(0,a.yg)("h4",{id:"parameters-4"},"Parameters"),(0,a.yg)("p",null,"\u2022 ",(0,a.yg)("strong",{parentName:"p"},"message"),": ",(0,a.yg)("inlineCode",{parentName:"p"},"string")),(0,a.yg)("p",null,"The message to log."),(0,a.yg)("p",null,"\u2022 ",(0,a.yg)("strong",{parentName:"p"},"error?"),": ",(0,a.yg)("inlineCode",{parentName:"p"},"Error")),(0,a.yg)("p",null,"Optional error object to log alongside the message."),(0,a.yg)("h4",{id:"returns-8"},"Returns"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"void")),(0,a.yg)("h4",{id:"inherited-from-10"},"Inherited from"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"/docs/API/detectors/DetectorBase/classes/DetectorBase"},(0,a.yg)("inlineCode",{parentName:"a"},"DetectorBase")),".",(0,a.yg)("a",{parentName:"p",href:"/docs/API/detectors/DetectorBase/classes/DetectorBase#logwarning"},(0,a.yg)("inlineCode",{parentName:"a"},"logWarning"))),(0,a.yg)("h4",{id:"defined-in-12"},"Defined in"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://github.com/asifqatar/Snapper/blob/efbcec64e60623713bea5b66951928dbe973c565/detectors/DetectorBase.ts#L113"},"detectors/DetectorBase.ts:113")),(0,a.yg)("hr",null),(0,a.yg)("h3",{id:"run"},"run()"),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},(0,a.yg)("strong",{parentName:"p"},"run"),"(",(0,a.yg)("inlineCode",{parentName:"p"},"sourceFile"),"): ",(0,a.yg)("a",{parentName:"p",href:"/docs/API/types/type-aliases/Finding"},(0,a.yg)("inlineCode",{parentName:"a"},"Finding")),"[]")),(0,a.yg)("p",null,"Runs the detector on the given source file to identify any deprecated permissions.\nIt checks if the permissions in the manifest match any deprecated ones and records findings accordingly."),(0,a.yg)("h4",{id:"parameters-5"},"Parameters"),(0,a.yg)("p",null,"\u2022 ",(0,a.yg)("strong",{parentName:"p"},"sourceFile"),": ",(0,a.yg)("inlineCode",{parentName:"p"},"SourceFile")),(0,a.yg)("p",null,"The source file to analyze for deprecated permissions."),(0,a.yg)("h4",{id:"returns-9"},"Returns"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"/docs/API/types/type-aliases/Finding"},(0,a.yg)("inlineCode",{parentName:"a"},"Finding")),"[]"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Array of findings with details about the detected deprecated permissions.")),(0,a.yg)("h4",{id:"overrides-2"},"Overrides"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"/docs/API/detectors/DetectorBase/classes/DetectorBase"},(0,a.yg)("inlineCode",{parentName:"a"},"DetectorBase")),".",(0,a.yg)("a",{parentName:"p",href:"/docs/API/detectors/DetectorBase/classes/DetectorBase#run"},(0,a.yg)("inlineCode",{parentName:"a"},"run"))),(0,a.yg)("h4",{id:"defined-in-13"},"Defined in"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://github.com/asifqatar/Snapper/blob/efbcec64e60623713bea5b66951928dbe973c565/detectors/DeprecatedPermissions.ts#L55"},"detectors/DeprecatedPermissions.ts:55")))}p.isMDXComponent=!0}}]);