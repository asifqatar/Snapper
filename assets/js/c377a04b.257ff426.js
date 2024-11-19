"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5742],{5680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>m});var r=n(6540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),y=a,m=u["".concat(s,".").concat(y)]||u[y]||g[y]||i;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=y;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},1866:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(8168),a=(n(6540),n(5680));const i={slug:"/",sidebar_position:1},o="Snapper \ud83d\udc20",l={unversionedId:"index",id:"index",isDocsHomePage:!1,title:"Snapper \ud83d\udc20",description:"Snapper aims to improve the overall security and reliability of Metamask Snaps by identifying vulnerabilities, potential issues, and ensuring best coding practices.",source:"@site/docs/index.md",sourceDirName:".",slug:"/",permalink:"/Snapper/",editUrl:"https://github.com/sayfer-io/Snapper/blob/main/docs/index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{slug:"/",sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"BroadPermissionsDetector",permalink:"/Snapper/API/detectors/BroadPermissions/classes/BroadPermissionsDetector"}},s=[{value:"Getting Started",id:"getting-started",children:[]},{value:"Setting Up an Example Test",id:"setting-up-an-example-test",children:[]},{value:"Running the Test Case",id:"running-the-test-case",children:[]}],p={toc:s},c="wrapper";function u(e){let{components:t,...n}=e;return(0,a.yg)(c,(0,r.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"snapper-"},"Snapper \ud83d\udc20"),(0,a.yg)("p",null,"Snapper aims to improve the overall security and reliability of Metamask Snaps by identifying vulnerabilities, potential issues, and ensuring best coding practices."),(0,a.yg)("h2",{id:"getting-started"},"Getting Started"),(0,a.yg)("p",null,"To set up the environment, follow these steps:"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("strong",{parentName:"li"},"Install project dependencies"),":")),(0,a.yg)("p",null,"To install the required project dependencies, run:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"npm install\n")),(0,a.yg)("h2",{id:"setting-up-an-example-test"},"Setting Up an Example Test"),(0,a.yg)("p",null,"To prepare an example test, follow these steps:"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("strong",{parentName:"li"},"Clone the repository"),":")),(0,a.yg)("p",null,"Clone the example repository for a sample Metamask Snap:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/Consensys/starknet-snap\n")),(0,a.yg)("ol",{start:2},(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("strong",{parentName:"li"},"Navigate to the project directory"),":")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"cd starknet-snap\n")),(0,a.yg)("ol",{start:3},(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("strong",{parentName:"li"},"Reset the repository to a vulnerable commit"),":")),(0,a.yg)("p",null,"For consistent results, reset to a vulnerable commit:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"git reset --hard d9beafe\n")),(0,a.yg)("h2",{id:"running-the-test-case"},"Running the Test Case"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"Build the environment")),(0,a.yg)("p",null,"Set up the test environment by running:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"/bin/bash buildenv.sh\n")),(0,a.yg)("ol",{start:2},(0,a.yg)("li",{parentName:"ol"},"Verify the application runs")),(0,a.yg)("p",null,"Get the usage of the Snapper application with:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"npm run start --help\n\n> snapper@1.0.0 start\n> npx ts-node main.ts\n\nOptions:\n      --version    Show version number                                 [boolean]\n  -p, --path       Project path                              [string] [required]\n  -d, --detectors  Specify which detector to run, specify multiple detectors\n                   with a comma                                         [string]\n  -v, --verbose    Enable verbose logging             [boolean] [default: false]\n  -o, --output     Specify output file                                  [string]\n  -l, --logFile    Specify log file path                                [string]\n      --help       Show help                                           [boolean]\n")),(0,a.yg)("ol",{start:3},(0,a.yg)("li",{parentName:"ol"},"Run test cases")),(0,a.yg)("p",null,"Run Snapper against test cases in the specified directory:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"npm run start -- --path ./testcases\n")))}u.isMDXComponent=!0}}]);