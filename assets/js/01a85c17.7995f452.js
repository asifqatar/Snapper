"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8209],{19:(e,t,n)=>{n.d(t,{A:()=>b});var a=n(6540),r=n(53),l=n(467),c=n(4676);const s="sidebar_q+wC",o="sidebarItemTitle_9G5K",i="sidebarItemList_6T4b",m="sidebarItem_cjdF",u="sidebarItemLink_zyXk",d="sidebarItemLinkActive_wcJs";var f=n(4798);function g(e){let{sidebar:t}=e;return 0===t.items.length?null:a.createElement("nav",{className:(0,r.A)(s,"thin-scrollbar"),"aria-label":(0,f.T)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},a.createElement("div",{className:(0,r.A)(o,"margin-bottom--md")},t.title),a.createElement("ul",{className:i},t.items.map((e=>a.createElement("li",{key:e.permalink,className:m},a.createElement(c.A,{isNavLink:!0,to:e.permalink,className:u,activeClassName:d},e.title))))))}var E=n(1461);const b=function(e){const{sidebar:t,toc:n,children:c,...s}=e,o=t&&t.items.length>0;return a.createElement(l.A,s,a.createElement("div",{className:"container margin-vert--lg"},a.createElement("div",{className:"row"},o&&a.createElement("aside",{className:"col col--3"},a.createElement(g,{sidebar:t})),a.createElement("main",{className:(0,r.A)("col",{"col--7":o,"col--9 col--offset-1":!o}),itemScope:!0,itemType:"http://schema.org/Blog"},c),n&&a.createElement("div",{className:"col col--2"},a.createElement(E.A,{toc:n})))))}},5776:(e,t,n)=>{n.r(t),n.d(t,{default:()=>s});var a=n(6540),r=n(19),l=n(8853),c=n(9777);const s=function(e){const{tags:t,sidebar:n}=e,s=(0,c.bi)();return a.createElement(r.A,{title:s,wrapperClassName:c.GN.wrapper.blogPages,pageClassName:c.GN.page.blogTagsListPage,searchMetadatas:{tag:"blog_tags_list"},sidebar:n},a.createElement("h1",null,s),a.createElement(l.A,{tags:Object.values(t)}))}},1461:(e,t,n)=>{n.d(t,{m:()=>f,A:()=>g});var a=n(6540),r=n(53),l=n(9777);function c(e){const t=e.getBoundingClientRect();return t.top===t.bottom?c(e.parentNode):t}function s(e){let{anchorTopOffset:t}=e;const n=Array.from(document.querySelectorAll(".anchor.anchor__h2, .anchor.anchor__h3")),a=n.find((e=>c(e).top>=t));if(a){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(c(a))?a:n[n.indexOf(a)-1]??null}return n[n.length-1]}function o(){const e=(0,a.useRef)(0),{navbar:{hideOnScroll:t}}=(0,l.pN)();return(0,a.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}const i=function(e){const t=(0,a.useRef)(void 0),n=o();(0,a.useEffect)((()=>{const{linkClassName:a,linkActiveClassName:r}=e;function l(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(a),l=s({anchorTopOffset:n.current}),c=e.find((e=>l&&l.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current?.classList.remove(r),e.classList.add(r),t.current=e):e.classList.remove(r)}(e,e===c)}))}return document.addEventListener("scroll",l),document.addEventListener("resize",l),l(),()=>{document.removeEventListener("scroll",l),document.removeEventListener("resize",l)}}),[e,n])},m="tableOfContents_vrFS",u="table-of-contents__link",d={linkClassName:u,linkActiveClassName:"table-of-contents__link--active"};function f(e){let{toc:t,isChild:n}=e;return t.length?a.createElement("ul",{className:n?"":"table-of-contents table-of-contents__left-border"},t.map((e=>a.createElement("li",{key:e.id},a.createElement("a",{href:`#${e.id}`,className:u,dangerouslySetInnerHTML:{__html:e.value}}),a.createElement(f,{isChild:!0,toc:e.children}))))):null}const g=function(e){let{toc:t}=e;return i(d),a.createElement("div",{className:(0,r.A)(m,"thin-scrollbar")},a.createElement(f,{toc:t}))}},3373:(e,t,n)=>{n.d(t,{A:()=>i});var a=n(6540),r=n(53),l=n(4676);const c="tag_WK-t",s="tagRegular_LXbV",o="tagWithCount_S5Zl";const i=function(e){const{permalink:t,name:n,count:i}=e;return a.createElement(l.A,{href:t,className:(0,r.A)(c,{[s]:!i,[o]:i})},n,i&&a.createElement("span",null,i))}},8853:(e,t,n)=>{n.d(t,{A:()=>o});var a=n(6540),r=n(3373),l=n(9777);const c="tag_7kA+";function s(e){let{letterEntry:t}=e;return a.createElement("article",null,a.createElement("h2",null,t.letter),a.createElement("ul",{className:"padding--none"},t.tags.map((e=>a.createElement("li",{key:e.permalink,className:c},a.createElement(r.A,e))))),a.createElement("hr",null))}const o=function(e){let{tags:t}=e;const n=(0,l.QW)(t);return a.createElement("section",{className:"margin-vert--lg"},n.map((e=>a.createElement(s,{key:e.letter,letterEntry:e}))))}}}]);