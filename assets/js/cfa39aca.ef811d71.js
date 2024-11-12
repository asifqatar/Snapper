"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8010],{5680:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>y});var n=r(6540);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var d=n.createContext({}),a=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=a(e.components);return n.createElement(d.Provider,{value:t},e.children)},l="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,c=e.originalType,d=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),l=a(r),g=o,y=l["".concat(d,".").concat(g)]||l[g]||u[g]||c;return r?n.createElement(y,s(s({ref:t},p),{},{components:r})):n.createElement(y,s({ref:t},p))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=r.length,s=new Array(c);s[0]=g;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[l]="string"==typeof e?e:o,s[1]=i;for(var a=2;a<c;a++)s[a]=r[a];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},9951:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>s,default:()=>l,frontMatter:()=>c,metadata:()=>i,toc:()=>d});var n=r(8168),o=(r(6540),r(5680));const c={},s=void 0,i={unversionedId:"API/detectors/README",id:"API/detectors/README",isDocsHomePage:!1,title:"README",description:"Snapper Project \u2022 Docs",source:"@site/docs/API/detectors/README.md",sourceDirName:"API/detectors",slug:"/API/detectors/README",permalink:"/Snapper/API/detectors/README",editUrl:"https://github.com/sayfer-io/Snapper/blob/main/docs/API/detectors/README.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"PotentialOutdatedEngineDetector",permalink:"/Snapper/API/detectors/PotentialOutdatedEngine/classes/PotentialOutdatedEngineDetector"},next:{title:"README",permalink:"/Snapper/API/detectors/UnhandledPromiseRejection/README"}},d=[{value:"References",id:"references",children:[{value:"BroadPermissionsDetector",id:"broadpermissionsdetector",children:[]},{value:"ConsoleLogDetector",id:"consolelogdetector",children:[]},{value:"DangerousFunctionsDetector",id:"dangerousfunctionsdetector",children:[]},{value:"DependencyOutdatedDetector",id:"dependencyoutdateddetector",children:[]},{value:"DependencyVersioningDetector",id:"dependencyversioningdetector",children:[]},{value:"DeprecatedFunctionsDetector",id:"deprecatedfunctionsdetector",children:[]},{value:"DeprecatedPermissionsDetector",id:"deprecatedpermissionsdetector",children:[]},{value:"DetectorBase",id:"detectorbase",children:[]},{value:"ESLintingDetector",id:"eslintingdetector",children:[]},{value:"ExcessiveCommentsDetector",id:"excessivecommentsdetector",children:[]},{value:"FloatingPointPrecisionDetector",id:"floatingpointprecisiondetector",children:[]},{value:"HardcodedSecretsDetector",id:"hardcodedsecretsdetector",children:[]},{value:"ImproperTypeUsageDetector",id:"impropertypeusagedetector",children:[]},{value:"InsecureCryptographyDetector",id:"insecurecryptographydetector",children:[]},{value:"InsecureCryptoLibrariesDetector",id:"insecurecryptolibrariesdetector",children:[]},{value:"InsecureRandomnessDetector",id:"insecurerandomnessdetector",children:[]},{value:"LackOfExceptionHandlingDetector",id:"lackofexceptionhandlingdetector",children:[]},{value:"LeftoverTODOsDetector",id:"leftovertodosdetector",children:[]},{value:"MissingExplicitStrictTypeCheckingDetector",id:"missingexplicitstricttypecheckingdetector",children:[]},{value:"OriginValidationDetector",id:"originvalidationdetector",children:[]},{value:"PotentialOutdatedEngineDetector",id:"potentialoutdatedenginedetector",children:[]},{value:"UnhandledPromiseRejectionDetector",id:"unhandledpromiserejectiondetector",children:[]},{value:"UnusedFunctionsDetector",id:"unusedfunctionsdetector",children:[]},{value:"UnusedImportsDetector",id:"unusedimportsdetector",children:[]},{value:"UnusedPermissionsDetector",id:"unusedpermissionsdetector",children:[]},{value:"UnusedVariablesDetector",id:"unusedvariablesdetector",children:[]},{value:"UsedBeforeDefinedArrowFunctionsDetector",id:"usedbeforedefinedarrowfunctionsdetector",children:[]},{value:"UsedBeforeDefinedFunctionsDetector",id:"usedbeforedefinedfunctionsdetector",children:[]},{value:"UsedBeforeDefinedInterfacesDetector",id:"usedbeforedefinedinterfacesdetector",children:[]}]}],a={toc:d},p="wrapper";function l(e){let{components:t,...r}=e;return(0,o.yg)(p,(0,n.A)({},a,r,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"/Snapper/API/README"},(0,o.yg)("strong",{parentName:"a"},"Snapper Project"))," \u2022 ",(0,o.yg)("strong",{parentName:"p"},"Docs")),(0,o.yg)("hr",null),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"/Snapper/API/README"},"Snapper Project")," / detectors"),(0,o.yg)("h1",{id:"detectors"},"detectors"),(0,o.yg)("h2",{id:"references"},"References"),(0,o.yg)("h3",{id:"broadpermissionsdetector"},"BroadPermissionsDetector"),(0,o.yg)("p",null,"Re-exports ",(0,o.yg)("a",{parentName:"p",href:"/Snapper/API/detectors/BroadPermissions/classes/BroadPermissionsDetector"},"BroadPermissionsDetector")),(0,o.yg)("hr",null),(0,o.yg)("h3",{id:"consolelogdetector"},"ConsoleLogDetector"),(0,o.yg)("p",null,"Re-exports ",(0,o.yg)("a",{parentName:"p",href:"/Snapper/API/detectors/ConsoleLog/classes/ConsoleLogDetector"},"ConsoleLogDetector")),(0,o.yg)("hr",null),(0,o.yg)("h3",{id:"dangerousfunctionsdetector"},"DangerousFunctionsDetector"),(0,o.yg)("p",null,"Re-exports ",(0,o.yg)("a",{parentName:"p",href:"/Snapper/API/detectors/DangerousFunctions/classes/DangerousFunctionsDetector"},"DangerousFunctionsDetector")),(0,o.yg)("hr",null),(0,o.yg)("h3",{id:"dependencyoutdateddetector"},"DependencyOutdatedDetector"),(0,o.yg)("p",null,"Re-exports ",(0,o.yg)("a",{parentName:"p",href:"/Snapper/API/detectors/DependencyOutdated/classes/DependencyOutdatedDetector"},"DependencyOutdatedDetector")),(0,o.yg)("hr",null),(0,o.yg)("h3",{id:"dependencyversioningdetector"},"DependencyVersioningDetector"),(0,o.yg)("p",null,"Re-exports ",(0,o.yg)("a",{parentName:"p",href:"/Snapper/API/detectors/DependencyVersioning/classes/DependencyVersioningDetector"},"DependencyVersioningDetector")),(0,o.yg)("hr",null),(0,o.yg)("h3",{id:"deprecatedfunctionsdetector"},"DeprecatedFunctionsDetector"),(0,o.yg)("p",null,"Re-exports ",(0,o.yg)("a",{parentName:"p",href:"/Snapper/API/detectors/DeprecatedFunctions/classes/DeprecatedFunctionsDetector"},"DeprecatedFunctionsDetector")),(0,o.yg)("hr",null),(0,o.yg)("h3",{id:"deprecatedpermissionsdetector"},"DeprecatedPermissionsDetector"),(0,o.yg)("p",null,"Re-exports ",(0,o.yg)("a",{parentName:"p",href:"/Snapper/API/detectors/DeprecatedPermissions/classes/DeprecatedPermissionsDetector"},"DeprecatedPermissionsDetector")),(0,o.yg)("hr",null),(0,o.yg)("h3",{id:"detectorbase"},"DetectorBase"),(0,o.yg)("p",null,"Re-exports ",(0,o.yg)("a",{parentName:"p",href:"/Snapper/API/detectors/DetectorBase/classes/DetectorBase"},"DetectorBase")),(0,o.yg)("hr",null),(0,o.yg)("h3",{id:"eslintingdetector"},"ESLintingDetector"),(0,o.yg)("p",null,"Re-exports ",(0,o.yg)("a",{parentName:"p",href:"/Snapper/API/detectors/ESLinting/classes/ESLintingDetector"},"ESLintingDetector")),(0,o.yg)("hr",null),(0,o.yg)("h3",{id:"excessivecommentsdetector"},"ExcessiveCommentsDetector"),(0,o.yg)("p",null,"Re-exports ",(0,o.yg)("a",{parentName:"p",href:"/Snapper/API/detectors/ExcessiveComments/classes/ExcessiveCommentsDetector"},"ExcessiveCommentsDetector")),(0,o.yg)("hr",null),(0,o.yg)("h3",{id:"floatingpointprecisiondetector"},"FloatingPointPrecisionDetector"),(0,o.yg)("p",null,"Re-exports ",(0,o.yg)("a",{parentName:"p",href:"/Snapper/API/detectors/FloatingPointPrecision/classes/FloatingPointPrecisionDetector"},"FloatingPointPrecisionDetector")),(0,o.yg)("hr",null),(0,o.yg)("h3",{id:"hardcodedsecretsdetector"},"HardcodedSecretsDetector"),(0,o.yg)("p",null,"Re-exports ",(0,o.yg)("a",{parentName:"p",href:"/Snapper/API/detectors/HardcodedSecrets/classes/HardcodedSecretsDetector"},"HardcodedSecretsDetector")),(0,o.yg)("hr",null),(0,o.yg)("h3",{id:"impropertypeusagedetector"},"ImproperTypeUsageDetector"),(0,o.yg)("p",null,"Re-exports ",(0,o.yg)("a",{parentName:"p",href:"/Snapper/API/detectors/ImproperTypeUsage/classes/ImproperTypeUsageDetector"},"ImproperTypeUsageDetector")),(0,o.yg)("hr",null),(0,o.yg)("h3",{id:"insecurecryptographydetector"},"InsecureCryptographyDetector"),(0,o.yg)("p",null,"Re-exports ",(0,o.yg)("a",{parentName:"p",href:"/Snapper/API/detectors/InsecureCryptography/classes/InsecureCryptographyDetector"},"InsecureCryptographyDetector")),(0,o.yg)("hr",null),(0,o.yg)("h3",{id:"insecurecryptolibrariesdetector"},"InsecureCryptoLibrariesDetector"),(0,o.yg)("p",null,"Re-exports ",(0,o.yg)("a",{parentName:"p",href:"/Snapper/API/detectors/InsecureCryptoLibraries/classes/InsecureCryptoLibrariesDetector"},"InsecureCryptoLibrariesDetector")),(0,o.yg)("hr",null),(0,o.yg)("h3",{id:"insecurerandomnessdetector"},"InsecureRandomnessDetector"),(0,o.yg)("p",null,"Re-exports ",(0,o.yg)("a",{parentName:"p",href:"/Snapper/API/detectors/InsecureRandomness/classes/InsecureRandomnessDetector"},"InsecureRandomnessDetector")),(0,o.yg)("hr",null),(0,o.yg)("h3",{id:"lackofexceptionhandlingdetector"},"LackOfExceptionHandlingDetector"),(0,o.yg)("p",null,"Re-exports ",(0,o.yg)("a",{parentName:"p",href:"/Snapper/API/detectors/LackOfExceptionHandling/classes/LackOfExceptionHandlingDetector"},"LackOfExceptionHandlingDetector")),(0,o.yg)("hr",null),(0,o.yg)("h3",{id:"leftovertodosdetector"},"LeftoverTODOsDetector"),(0,o.yg)("p",null,"Re-exports ",(0,o.yg)("a",{parentName:"p",href:"/Snapper/API/detectors/LeftoverTODOs/classes/LeftoverTODOsDetector"},"LeftoverTODOsDetector")),(0,o.yg)("hr",null),(0,o.yg)("h3",{id:"missingexplicitstricttypecheckingdetector"},"MissingExplicitStrictTypeCheckingDetector"),(0,o.yg)("p",null,"Re-exports ",(0,o.yg)("a",{parentName:"p",href:"/Snapper/API/detectors/MissingExplicitStrictTypeChecking/classes/MissingExplicitStrictTypeCheckingDetector"},"MissingExplicitStrictTypeCheckingDetector")),(0,o.yg)("hr",null),(0,o.yg)("h3",{id:"originvalidationdetector"},"OriginValidationDetector"),(0,o.yg)("p",null,"Re-exports ",(0,o.yg)("a",{parentName:"p",href:"/Snapper/API/detectors/OriginValidation/classes/OriginValidationDetector"},"OriginValidationDetector")),(0,o.yg)("hr",null),(0,o.yg)("h3",{id:"potentialoutdatedenginedetector"},"PotentialOutdatedEngineDetector"),(0,o.yg)("p",null,"Re-exports ",(0,o.yg)("a",{parentName:"p",href:"/Snapper/API/detectors/PotentialOutdatedEngine/classes/PotentialOutdatedEngineDetector"},"PotentialOutdatedEngineDetector")),(0,o.yg)("hr",null),(0,o.yg)("h3",{id:"unhandledpromiserejectiondetector"},"UnhandledPromiseRejectionDetector"),(0,o.yg)("p",null,"Re-exports ",(0,o.yg)("a",{parentName:"p",href:"/Snapper/API/detectors/UnhandledPromiseRejection/classes/UnhandledPromiseRejectionDetector"},"UnhandledPromiseRejectionDetector")),(0,o.yg)("hr",null),(0,o.yg)("h3",{id:"unusedfunctionsdetector"},"UnusedFunctionsDetector"),(0,o.yg)("p",null,"Re-exports ",(0,o.yg)("a",{parentName:"p",href:"/Snapper/API/detectors/UnusedFunctions/classes/UnusedFunctionsDetector"},"UnusedFunctionsDetector")),(0,o.yg)("hr",null),(0,o.yg)("h3",{id:"unusedimportsdetector"},"UnusedImportsDetector"),(0,o.yg)("p",null,"Re-exports ",(0,o.yg)("a",{parentName:"p",href:"/Snapper/API/detectors/UnusedImports/classes/UnusedImportsDetector"},"UnusedImportsDetector")),(0,o.yg)("hr",null),(0,o.yg)("h3",{id:"unusedpermissionsdetector"},"UnusedPermissionsDetector"),(0,o.yg)("p",null,"Re-exports ",(0,o.yg)("a",{parentName:"p",href:"/Snapper/API/detectors/UnusedPermissions/classes/UnusedPermissionsDetector"},"UnusedPermissionsDetector")),(0,o.yg)("hr",null),(0,o.yg)("h3",{id:"unusedvariablesdetector"},"UnusedVariablesDetector"),(0,o.yg)("p",null,"Re-exports ",(0,o.yg)("a",{parentName:"p",href:"/Snapper/API/detectors/UnusedVariables/classes/UnusedVariablesDetector"},"UnusedVariablesDetector")),(0,o.yg)("hr",null),(0,o.yg)("h3",{id:"usedbeforedefinedarrowfunctionsdetector"},"UsedBeforeDefinedArrowFunctionsDetector"),(0,o.yg)("p",null,"Re-exports ",(0,o.yg)("a",{parentName:"p",href:"/Snapper/API/detectors/UsedBeforeDefinedArrowFunctions/classes/UsedBeforeDefinedArrowFunctionsDetector"},"UsedBeforeDefinedArrowFunctionsDetector")),(0,o.yg)("hr",null),(0,o.yg)("h3",{id:"usedbeforedefinedfunctionsdetector"},"UsedBeforeDefinedFunctionsDetector"),(0,o.yg)("p",null,"Re-exports ",(0,o.yg)("a",{parentName:"p",href:"/Snapper/API/detectors/UsedBeforeDefinedFunctions/classes/UsedBeforeDefinedFunctionsDetector"},"UsedBeforeDefinedFunctionsDetector")),(0,o.yg)("hr",null),(0,o.yg)("h3",{id:"usedbeforedefinedinterfacesdetector"},"UsedBeforeDefinedInterfacesDetector"),(0,o.yg)("p",null,"Re-exports ",(0,o.yg)("a",{parentName:"p",href:"/Snapper/API/detectors/UsedBeforeDefinedInterfaces/classes/UsedBeforeDefinedInterfacesDetector"},"UsedBeforeDefinedInterfacesDetector")))}l.isMDXComponent=!0}}]);