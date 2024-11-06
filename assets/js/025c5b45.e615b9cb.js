"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[29],{5680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>m});var a=n(6540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},g="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),g=d(n),y=r,m=g["".concat(l,".").concat(y)]||g[y]||p[y]||i;return n?a.createElement(m,s(s({ref:t},c),{},{components:n})):a.createElement(m,s({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=y;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[g]="string"==typeof e?e:r,s[1]=o;for(var d=2;d<i;d++)s[d]=n[d];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},6287:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>s,default:()=>g,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var a=n(8168),r=(n(6540),n(5680));const i={},s=void 0,o={unversionedId:"API/detectors/DetectorBase/classes/DetectorBase",id:"API/detectors/DetectorBase/classes/DetectorBase",isDocsHomePage:!1,title:"DetectorBase",description:"Snapper Project \u2022 Docs",source:"@site/docs/API/detectors/DetectorBase/classes/DetectorBase.md",sourceDirName:"API/detectors/DetectorBase/classes",slug:"/API/detectors/DetectorBase/classes/DetectorBase",permalink:"/docs-site/docs/API/detectors/DetectorBase/classes/DetectorBase",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/API/detectors/DetectorBase/classes/DetectorBase.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"README",permalink:"/docs-site/docs/API/detectors/DetectorBase/README"},next:{title:"README",permalink:"/docs-site/docs/API/detectors/ESLinting/README"}},l=[{value:"Extended by",id:"extended-by",children:[]},{value:"Constructors",id:"constructors",children:[{value:"new DetectorBase()",id:"new-detectorbase",children:[]}]},{value:"Properties",id:"properties",children:[{value:"allowedFileRegexes",id:"allowedfileregexes",children:[]},{value:"findings",id:"findings",children:[]},{value:"name",id:"name",children:[]},{value:"riskRating",id:"riskrating",children:[]}]},{value:"Methods",id:"methods",children:[{value:"addFinding()",id:"addfinding",children:[]},{value:"clearFindings()",id:"clearfindings",children:[]},{value:"getFindings()",id:"getfindings",children:[]},{value:"getName()",id:"getname",children:[]},{value:"logDebug()",id:"logdebug",children:[]},{value:"logError()",id:"logerror",children:[]},{value:"logInfo()",id:"loginfo",children:[]},{value:"logWarning()",id:"logwarning",children:[]},{value:"run()",id:"run",children:[]}]}],d={toc:l},c="wrapper";function g(e){let{components:t,...n}=e;return(0,r.yg)(c,(0,a.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"/docs-site/docs/API/README"},(0,r.yg)("strong",{parentName:"a"},"Snapper Project"))," \u2022 ",(0,r.yg)("strong",{parentName:"p"},"Docs")),(0,r.yg)("hr",null),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"/docs-site/docs/API/README"},"Snapper Project")," / ",(0,r.yg)("a",{parentName:"p",href:"/docs-site/docs/API/detectors/DetectorBase/README"},"detectors/DetectorBase")," / DetectorBase"),(0,r.yg)("h1",{id:"class-abstract-detectorbase"},"Class: ",(0,r.yg)("inlineCode",{parentName:"h1"},"abstract")," DetectorBase"),(0,r.yg)("p",null,"Abstract base class for all detectors.\nThis class provides a common structure and utility methods for specific detectors\nthat will implement the run method to analyze source files for issues."),(0,r.yg)("h2",{id:"extended-by"},"Extended by"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/docs-site/docs/API/detectors/BroadPermissions/classes/BroadPermissionsDetector"},(0,r.yg)("inlineCode",{parentName:"a"},"BroadPermissionsDetector"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/docs-site/docs/API/detectors/ConsoleLog/classes/ConsoleLogDetector"},(0,r.yg)("inlineCode",{parentName:"a"},"ConsoleLogDetector"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/docs-site/docs/API/detectors/DangerousFunctions/classes/DangerousFunctionsDetector"},(0,r.yg)("inlineCode",{parentName:"a"},"DangerousFunctionsDetector"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/docs-site/docs/API/detectors/DependencyOutdated/classes/DependencyOutdatedDetector"},(0,r.yg)("inlineCode",{parentName:"a"},"DependencyOutdatedDetector"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/docs-site/docs/API/detectors/DependencyVersioning/classes/DependencyVersioningDetector"},(0,r.yg)("inlineCode",{parentName:"a"},"DependencyVersioningDetector"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/docs-site/docs/API/detectors/DeprecatedFunctions/classes/DeprecatedFunctionsDetector"},(0,r.yg)("inlineCode",{parentName:"a"},"DeprecatedFunctionsDetector"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/docs-site/docs/API/detectors/DeprecatedPermissions/classes/DeprecatedPermissionsDetector"},(0,r.yg)("inlineCode",{parentName:"a"},"DeprecatedPermissionsDetector"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/docs-site/docs/API/detectors/ESLinting/classes/ESLintingDetector"},(0,r.yg)("inlineCode",{parentName:"a"},"ESLintingDetector"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/docs-site/docs/API/detectors/ExcessiveComments/classes/ExcessiveCommentsDetector"},(0,r.yg)("inlineCode",{parentName:"a"},"ExcessiveCommentsDetector"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/docs-site/docs/API/detectors/FloatingPointPrecision/classes/FloatingPointPrecisionDetector"},(0,r.yg)("inlineCode",{parentName:"a"},"FloatingPointPrecisionDetector"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/docs-site/docs/API/detectors/HardcodedSecrets/classes/HardcodedSecretsDetector"},(0,r.yg)("inlineCode",{parentName:"a"},"HardcodedSecretsDetector"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/docs-site/docs/API/detectors/ImproperTypeUsage/classes/ImproperTypeUsageDetector"},(0,r.yg)("inlineCode",{parentName:"a"},"ImproperTypeUsageDetector"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/docs-site/docs/API/detectors/InsecureCryptoLibraries/classes/InsecureCryptoLibrariesDetector"},(0,r.yg)("inlineCode",{parentName:"a"},"InsecureCryptoLibrariesDetector"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/docs-site/docs/API/detectors/InsecureCryptography/classes/InsecureCryptographyDetector"},(0,r.yg)("inlineCode",{parentName:"a"},"InsecureCryptographyDetector"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/docs-site/docs/API/detectors/InsecureRandomness/classes/InsecureRandomnessDetector"},(0,r.yg)("inlineCode",{parentName:"a"},"InsecureRandomnessDetector"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/docs-site/docs/API/detectors/LackOfExceptionHandling/classes/LackOfExceptionHandlingDetector"},(0,r.yg)("inlineCode",{parentName:"a"},"LackOfExceptionHandlingDetector"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/docs-site/docs/API/detectors/LeftoverTODOs/classes/LeftoverTODOsDetector"},(0,r.yg)("inlineCode",{parentName:"a"},"LeftoverTODOsDetector"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/docs-site/docs/API/detectors/MissingExplicitStrictTypeChecking/classes/MissingExplicitStrictTypeCheckingDetector"},(0,r.yg)("inlineCode",{parentName:"a"},"MissingExplicitStrictTypeCheckingDetector"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/docs-site/docs/API/detectors/OriginValidation-temp/classes/OriginValidationDetector"},(0,r.yg)("inlineCode",{parentName:"a"},"OriginValidationDetector"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/docs-site/docs/API/detectors/OriginValidation/classes/OriginValidationDetector"},(0,r.yg)("inlineCode",{parentName:"a"},"OriginValidationDetector"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/docs-site/docs/API/detectors/PotentialOutdatedEngine/classes/PotentialOutdatedEngineDetector"},(0,r.yg)("inlineCode",{parentName:"a"},"PotentialOutdatedEngineDetector"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/docs-site/docs/API/detectors/UnhandledPromiseRejection/classes/UnhandledPromiseRejectionDetector"},(0,r.yg)("inlineCode",{parentName:"a"},"UnhandledPromiseRejectionDetector"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/docs-site/docs/API/detectors/UnusedFunctions/classes/UnusedFunctionsDetector"},(0,r.yg)("inlineCode",{parentName:"a"},"UnusedFunctionsDetector"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/docs-site/docs/API/detectors/UnusedImports/classes/UnusedImportsDetector"},(0,r.yg)("inlineCode",{parentName:"a"},"UnusedImportsDetector"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/docs-site/docs/API/detectors/UnusedPermissions/classes/UnusedPermissionsDetector"},(0,r.yg)("inlineCode",{parentName:"a"},"UnusedPermissionsDetector"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/docs-site/docs/API/detectors/UnusedVariables/classes/UnusedVariablesDetector"},(0,r.yg)("inlineCode",{parentName:"a"},"UnusedVariablesDetector"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/docs-site/docs/API/detectors/UsedBeforeDefinedArrowFunctions/classes/UsedBeforeDefinedArrowFunctionsDetector"},(0,r.yg)("inlineCode",{parentName:"a"},"UsedBeforeDefinedArrowFunctionsDetector"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/docs-site/docs/API/detectors/UsedBeforeDefinedFunctions/classes/UsedBeforeDefinedFunctionsDetector"},(0,r.yg)("inlineCode",{parentName:"a"},"UsedBeforeDefinedFunctionsDetector"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/docs-site/docs/API/detectors/UsedBeforeDefinedInterfaces/classes/UsedBeforeDefinedInterfacesDetector"},(0,r.yg)("inlineCode",{parentName:"a"},"UsedBeforeDefinedInterfacesDetector")))),(0,r.yg)("h2",{id:"constructors"},"Constructors"),(0,r.yg)("h3",{id:"new-detectorbase"},"new DetectorBase()"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},(0,r.yg)("strong",{parentName:"p"},"new DetectorBase"),"(",(0,r.yg)("inlineCode",{parentName:"p"},"name"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"riskRating"),"): ",(0,r.yg)("a",{parentName:"p",href:"/docs-site/docs/API/detectors/DetectorBase/classes/DetectorBase"},(0,r.yg)("inlineCode",{parentName:"a"},"DetectorBase")))),(0,r.yg)("p",null,"Constructor to initialize the detector with a name and risk rating."),(0,r.yg)("h4",{id:"parameters"},"Parameters"),(0,r.yg)("p",null,"\u2022 ",(0,r.yg)("strong",{parentName:"p"},"name"),": ",(0,r.yg)("inlineCode",{parentName:"p"},"string")),(0,r.yg)("p",null,"The name of the detector."),(0,r.yg)("p",null,"\u2022 ",(0,r.yg)("strong",{parentName:"p"},"riskRating"),": ",(0,r.yg)("a",{parentName:"p",href:"/docs-site/docs/API/structures/enumerations/RiskRating"},(0,r.yg)("inlineCode",{parentName:"a"},"RiskRating"))),(0,r.yg)("p",null,"The risk rating associated with the findings from this detector."),(0,r.yg)("h4",{id:"returns"},"Returns"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"/docs-site/docs/API/detectors/DetectorBase/classes/DetectorBase"},(0,r.yg)("inlineCode",{parentName:"a"},"DetectorBase"))),(0,r.yg)("h4",{id:"defined-in"},"Defined in"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://github.com/asifqatar/Snapper/blob/efbcec64e60623713bea5b66951928dbe973c565/detectors/DetectorBase.ts#L26"},"detectors/DetectorBase.ts:26")),(0,r.yg)("h2",{id:"properties"},"Properties"),(0,r.yg)("h3",{id:"allowedfileregexes"},"allowedFileRegexes"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},(0,r.yg)("strong",{parentName:"p"},"allowedFileRegexes"),": ",(0,r.yg)("inlineCode",{parentName:"p"},"RegExp"),"[]")),(0,r.yg)("h4",{id:"defined-in-1"},"Defined in"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://github.com/asifqatar/Snapper/blob/efbcec64e60623713bea5b66951928dbe973c565/detectors/DetectorBase.ts#L19"},"detectors/DetectorBase.ts:19")),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"findings"},"findings"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},(0,r.yg)("inlineCode",{parentName:"p"},"protected")," ",(0,r.yg)("strong",{parentName:"p"},"findings"),": ",(0,r.yg)("a",{parentName:"p",href:"/docs-site/docs/API/types/type-aliases/Finding"},(0,r.yg)("inlineCode",{parentName:"a"},"Finding")),"[] = ",(0,r.yg)("inlineCode",{parentName:"p"},"[]"))),(0,r.yg)("h4",{id:"defined-in-2"},"Defined in"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://github.com/asifqatar/Snapper/blob/efbcec64e60623713bea5b66951928dbe973c565/detectors/DetectorBase.ts#L16"},"detectors/DetectorBase.ts:16")),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"name"},"name"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},(0,r.yg)("inlineCode",{parentName:"p"},"protected")," ",(0,r.yg)("strong",{parentName:"p"},"name"),": ",(0,r.yg)("inlineCode",{parentName:"p"},"string"))),(0,r.yg)("h4",{id:"defined-in-3"},"Defined in"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://github.com/asifqatar/Snapper/blob/efbcec64e60623713bea5b66951928dbe973c565/detectors/DetectorBase.ts#L14"},"detectors/DetectorBase.ts:14")),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"riskrating"},"riskRating"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},(0,r.yg)("inlineCode",{parentName:"p"},"protected")," ",(0,r.yg)("strong",{parentName:"p"},"riskRating"),": ",(0,r.yg)("a",{parentName:"p",href:"/docs-site/docs/API/structures/enumerations/RiskRating"},(0,r.yg)("inlineCode",{parentName:"a"},"RiskRating")))),(0,r.yg)("h4",{id:"defined-in-4"},"Defined in"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://github.com/asifqatar/Snapper/blob/efbcec64e60623713bea5b66951928dbe973c565/detectors/DetectorBase.ts#L15"},"detectors/DetectorBase.ts:15")),(0,r.yg)("h2",{id:"methods"},"Methods"),(0,r.yg)("h3",{id:"addfinding"},"addFinding()"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},(0,r.yg)("strong",{parentName:"p"},"addFinding"),"(",(0,r.yg)("inlineCode",{parentName:"p"},"description"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"filePath"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"lineNum"),"): ",(0,r.yg)("inlineCode",{parentName:"p"},"void"))),(0,r.yg)("p",null,"Adds a finding to the findings array.\nThis method creates a Finding object and logs a debug message before adding it to the findings list."),(0,r.yg)("h4",{id:"parameters-1"},"Parameters"),(0,r.yg)("p",null,"\u2022 ",(0,r.yg)("strong",{parentName:"p"},"description"),": ",(0,r.yg)("inlineCode",{parentName:"p"},"string")),(0,r.yg)("p",null,"Description of the finding."),(0,r.yg)("p",null,"\u2022 ",(0,r.yg)("strong",{parentName:"p"},"filePath"),": ",(0,r.yg)("inlineCode",{parentName:"p"},"string")),(0,r.yg)("p",null,"Path of the file where the finding was detected."),(0,r.yg)("p",null,"\u2022 ",(0,r.yg)("strong",{parentName:"p"},"lineNum"),": ",(0,r.yg)("inlineCode",{parentName:"p"},"number")," = ",(0,r.yg)("inlineCode",{parentName:"p"},"1")),(0,r.yg)("p",null,"Line number where the finding was detected (default is 1)."),(0,r.yg)("h4",{id:"returns-1"},"Returns"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"void")),(0,r.yg)("h4",{id:"defined-in-5"},"Defined in"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://github.com/asifqatar/Snapper/blob/efbcec64e60623713bea5b66951928dbe973c565/detectors/DetectorBase.ts#L41"},"detectors/DetectorBase.ts:41")),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"clearfindings"},"clearFindings()"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},(0,r.yg)("strong",{parentName:"p"},"clearFindings"),"(): ",(0,r.yg)("inlineCode",{parentName:"p"},"void"))),(0,r.yg)("p",null,"Clears all findings from the detector.\nThis method resets the findings array to an empty state."),(0,r.yg)("h4",{id:"returns-2"},"Returns"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"void")),(0,r.yg)("h4",{id:"defined-in-6"},"Defined in"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://github.com/asifqatar/Snapper/blob/efbcec64e60623713bea5b66951928dbe973c565/detectors/DetectorBase.ts#L59"},"detectors/DetectorBase.ts:59")),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"getfindings"},"getFindings()"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},(0,r.yg)("strong",{parentName:"p"},"getFindings"),"(): ",(0,r.yg)("a",{parentName:"p",href:"/docs-site/docs/API/types/type-aliases/Finding"},(0,r.yg)("inlineCode",{parentName:"a"},"Finding")),"[]")),(0,r.yg)("p",null,"Retrieves all findings collected by the detector."),(0,r.yg)("h4",{id:"returns-3"},"Returns"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"/docs-site/docs/API/types/type-aliases/Finding"},(0,r.yg)("inlineCode",{parentName:"a"},"Finding")),"[]"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Array of findings.")),(0,r.yg)("h4",{id:"defined-in-7"},"Defined in"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://github.com/asifqatar/Snapper/blob/efbcec64e60623713bea5b66951928dbe973c565/detectors/DetectorBase.ts#L75"},"detectors/DetectorBase.ts:75")),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"getname"},"getName()"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},(0,r.yg)("strong",{parentName:"p"},"getName"),"(): ",(0,r.yg)("inlineCode",{parentName:"p"},"string"))),(0,r.yg)("p",null,"Gets the name of the detector."),(0,r.yg)("h4",{id:"returns-4"},"Returns"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"string")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"The name of the detector.")),(0,r.yg)("h4",{id:"defined-in-8"},"Defined in"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://github.com/asifqatar/Snapper/blob/efbcec64e60623713bea5b66951928dbe973c565/detectors/DetectorBase.ts#L67"},"detectors/DetectorBase.ts:67")),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"logdebug"},"logDebug()"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},(0,r.yg)("strong",{parentName:"p"},"logDebug"),"(",(0,r.yg)("inlineCode",{parentName:"p"},"message"),"): ",(0,r.yg)("inlineCode",{parentName:"p"},"void"))),(0,r.yg)("p",null,"Logs a debug message.\nThis method formats the message with the detector's name and logs it at the debug level."),(0,r.yg)("h4",{id:"parameters-2"},"Parameters"),(0,r.yg)("p",null,"\u2022 ",(0,r.yg)("strong",{parentName:"p"},"message"),": ",(0,r.yg)("inlineCode",{parentName:"p"},"string")),(0,r.yg)("p",null,"The message to log."),(0,r.yg)("h4",{id:"returns-5"},"Returns"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"void")),(0,r.yg)("h4",{id:"defined-in-9"},"Defined in"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://github.com/asifqatar/Snapper/blob/efbcec64e60623713bea5b66951928dbe973c565/detectors/DetectorBase.ts#L93"},"detectors/DetectorBase.ts:93")),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"logerror"},"logError()"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},(0,r.yg)("strong",{parentName:"p"},"logError"),"(",(0,r.yg)("inlineCode",{parentName:"p"},"message"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"error"),"?): ",(0,r.yg)("inlineCode",{parentName:"p"},"void"))),(0,r.yg)("p",null,"Logs an error message.\nThis method formats the message with the detector's name and logs it at the error level."),(0,r.yg)("h4",{id:"parameters-3"},"Parameters"),(0,r.yg)("p",null,"\u2022 ",(0,r.yg)("strong",{parentName:"p"},"message"),": ",(0,r.yg)("inlineCode",{parentName:"p"},"string")),(0,r.yg)("p",null,"The message to log."),(0,r.yg)("p",null,"\u2022 ",(0,r.yg)("strong",{parentName:"p"},"error?"),": ",(0,r.yg)("inlineCode",{parentName:"p"},"Error")),(0,r.yg)("p",null,"Optional error object to log alongside the message."),(0,r.yg)("h4",{id:"returns-6"},"Returns"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"void")),(0,r.yg)("h4",{id:"defined-in-10"},"Defined in"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://github.com/asifqatar/Snapper/blob/efbcec64e60623713bea5b66951928dbe973c565/detectors/DetectorBase.ts#L103"},"detectors/DetectorBase.ts:103")),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"loginfo"},"logInfo()"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},(0,r.yg)("strong",{parentName:"p"},"logInfo"),"(",(0,r.yg)("inlineCode",{parentName:"p"},"message"),"): ",(0,r.yg)("inlineCode",{parentName:"p"},"void"))),(0,r.yg)("p",null,"Logs an informational message.\nThis method formats the message with the detector's name and logs it at the info level."),(0,r.yg)("h4",{id:"parameters-4"},"Parameters"),(0,r.yg)("p",null,"\u2022 ",(0,r.yg)("strong",{parentName:"p"},"message"),": ",(0,r.yg)("inlineCode",{parentName:"p"},"string")),(0,r.yg)("p",null,"The message to log."),(0,r.yg)("h4",{id:"returns-7"},"Returns"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"void")),(0,r.yg)("h4",{id:"defined-in-11"},"Defined in"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://github.com/asifqatar/Snapper/blob/efbcec64e60623713bea5b66951928dbe973c565/detectors/DetectorBase.ts#L84"},"detectors/DetectorBase.ts:84")),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"logwarning"},"logWarning()"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},(0,r.yg)("strong",{parentName:"p"},"logWarning"),"(",(0,r.yg)("inlineCode",{parentName:"p"},"message"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"error"),"?): ",(0,r.yg)("inlineCode",{parentName:"p"},"void"))),(0,r.yg)("p",null,"Logs a warning message.\nThis method formats the message with the detector's name and logs it at the warning level."),(0,r.yg)("h4",{id:"parameters-5"},"Parameters"),(0,r.yg)("p",null,"\u2022 ",(0,r.yg)("strong",{parentName:"p"},"message"),": ",(0,r.yg)("inlineCode",{parentName:"p"},"string")),(0,r.yg)("p",null,"The message to log."),(0,r.yg)("p",null,"\u2022 ",(0,r.yg)("strong",{parentName:"p"},"error?"),": ",(0,r.yg)("inlineCode",{parentName:"p"},"Error")),(0,r.yg)("p",null,"Optional error object to log alongside the message."),(0,r.yg)("h4",{id:"returns-8"},"Returns"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"void")),(0,r.yg)("h4",{id:"defined-in-12"},"Defined in"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://github.com/asifqatar/Snapper/blob/efbcec64e60623713bea5b66951928dbe973c565/detectors/DetectorBase.ts#L113"},"detectors/DetectorBase.ts:113")),(0,r.yg)("hr",null),(0,r.yg)("h3",{id:"run"},"run()"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},(0,r.yg)("inlineCode",{parentName:"p"},"abstract")," ",(0,r.yg)("strong",{parentName:"p"},"run"),"(",(0,r.yg)("inlineCode",{parentName:"p"},"file"),"): ",(0,r.yg)("a",{parentName:"p",href:"/docs-site/docs/API/types/type-aliases/Finding"},(0,r.yg)("inlineCode",{parentName:"a"},"Finding")),"[] ","|"," ",(0,r.yg)("inlineCode",{parentName:"p"},"Promise"),"\\<",(0,r.yg)("a",{parentName:"p",href:"/docs-site/docs/API/types/type-aliases/Finding"},(0,r.yg)("inlineCode",{parentName:"a"},"Finding")),"[]",">")),(0,r.yg)("h4",{id:"parameters-6"},"Parameters"),(0,r.yg)("p",null,"\u2022 ",(0,r.yg)("strong",{parentName:"p"},"file"),": ",(0,r.yg)("inlineCode",{parentName:"p"},"SourceFile")),(0,r.yg)("h4",{id:"returns-9"},"Returns"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"/docs-site/docs/API/types/type-aliases/Finding"},(0,r.yg)("inlineCode",{parentName:"a"},"Finding")),"[] ","|"," ",(0,r.yg)("inlineCode",{parentName:"p"},"Promise"),"\\<",(0,r.yg)("a",{parentName:"p",href:"/docs-site/docs/API/types/type-aliases/Finding"},(0,r.yg)("inlineCode",{parentName:"a"},"Finding")),"[]",">"),(0,r.yg)("h4",{id:"defined-in-13"},"Defined in"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://github.com/asifqatar/Snapper/blob/efbcec64e60623713bea5b66951928dbe973c565/detectors/DetectorBase.ts#L32"},"detectors/DetectorBase.ts:32")))}g.isMDXComponent=!0}}]);