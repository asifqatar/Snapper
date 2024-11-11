"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3976],{5680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>m});var r=n(6540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},g="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),g=p(n),y=a,m=g["".concat(s,".").concat(y)]||g[y]||u[y]||o;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=y;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[g]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},5436:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(8168),a=(n(6540),n(5680));const o={sidebar_position:1},i="Snapper \ud83d\udc20",l={unversionedId:"intro",id:"intro",isDocsHomePage:!1,title:"Snapper \ud83d\udc20",description:"Snapper aims to improve the overall security and reliability of Metamask Snaps by identifying vulnerabilities, potential issues, and ensuring best coding practices.",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/Snapper/docs/intro",editUrl:"https://github.com/sayfer-io/Snapper/blob/main/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Create a Page",permalink:"/Snapper/docs/tutorial-basics/create-a-page"}},s=[{value:"Getting Started",id:"getting-started",children:[]},{value:"Setting Up an Example Test",id:"setting-up-an-example-test",children:[]},{value:"Running the Test Case",id:"running-the-test-case",children:[]}],p={toc:s},c="wrapper";function g(e){let{components:t,...n}=e;return(0,a.yg)(c,(0,r.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"snapper-"},"Snapper \ud83d\udc20"),(0,a.yg)("p",null,"Snapper aims to improve the overall security and reliability of Metamask Snaps by identifying vulnerabilities, potential issues, and ensuring best coding practices."),(0,a.yg)("h2",{id:"getting-started"},"Getting Started"),(0,a.yg)("p",null,"To set up the environment, follow these steps:"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("strong",{parentName:"li"},"Install project dependencies"),":")),(0,a.yg)("p",null,"To install the required project dependencies, run:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"npm install\n")),(0,a.yg)("h2",{id:"setting-up-an-example-test"},"Setting Up an Example Test"),(0,a.yg)("p",null,"To prepare an example test, follow these steps:"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("strong",{parentName:"li"},"Clone the repository"),":")),(0,a.yg)("p",null,"Clone the example repository for a sample Metamask Snap:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/Consensys/starknet-snap\n")),(0,a.yg)("ol",{start:2},(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("strong",{parentName:"li"},"Navigate to the project directory"),":")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"cd starknet-snap\n")),(0,a.yg)("ol",{start:3},(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("strong",{parentName:"li"},"Reset the repository to a vulnerable commit"),":")),(0,a.yg)("p",null,"For consistent results, reset to a vulnerable commit:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"git reset --hard d9beafe\n")),(0,a.yg)("h2",{id:"running-the-test-case"},"Running the Test Case"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"Build the environment")),(0,a.yg)("p",null,"Set up the test environment by running:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"/bin/bash buildenv.sh\n")),(0,a.yg)("ol",{start:2},(0,a.yg)("li",{parentName:"ol"},"Verify the application runs")),(0,a.yg)("p",null,"Get the usage of the Snapper application with:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"npm run start --help\n\n> snapper@1.0.0 start\n> npx ts-node main.ts\n\nOptions:\n      --version    Show version number                                 [boolean]\n  -p, --path       Project path                              [string] [required]\n  -d, --detectors  Specify which detector to run, specify multiple detectors\n                   with a comma                                         [string]\n  -v, --verbose    Enable verbose logging             [boolean] [default: false]\n  -o, --output     Specify output file                                  [string]\n  -l, --logFile    Specify log file path                                [string]\n      --help       Show help                                           [boolean]\n")),(0,a.yg)("ol",{start:3},(0,a.yg)("li",{parentName:"ol"},"Run test cases")),(0,a.yg)("p",null,"Run Snapper against test cases in the specified directory:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"npm run start -- --path ./testcases\n")))}g.isMDXComponent=!0}}]);