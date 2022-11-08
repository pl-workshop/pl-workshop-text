"use strict";(self.webpackChunkpl_workshop_text=self.webpackChunkpl_workshop_text||[]).push([[672],{3905:(e,t,r)=>{r.d(t,{Zo:()=>i,kt:()=>k});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},i=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),d=c(r),k=a,m=d["".concat(s,".").concat(k)]||d[k]||u[k]||l;return r?n.createElement(m,o(o({ref:t},i),{},{components:r})):n.createElement(m,o({ref:t},i))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var c=2;c<l;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8145:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const l={sidebar_position:2},o="\u8db3\u3057\u7b97\u3092\u8ffd\u52a0\u3057\u3088\u3046",p={unversionedId:"tutorial-basics/add",id:"tutorial-basics/add",title:"\u8db3\u3057\u7b97\u3092\u8ffd\u52a0\u3057\u3088\u3046",description:"\u69cb\u6587\u89e3\u6790",source:"@site/docs/tutorial-basics/add.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/add",permalink:"/pl-workshop-text/docs/tutorial-basics/add",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tutorial-basics/add.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\u306f\u3058\u3081\u306e\u4e00\u6b69",permalink:"/pl-workshop-text/docs/tutorial-basics/firststep"},next:{title:"\u639b\u3051\u7b97\u3092\u8ffd\u52a0\u3057\u3088\u3046",permalink:"/pl-workshop-text/docs/tutorial-basics/mul"}},s={},c=[{value:"\u69cb\u6587\u89e3\u6790",id:"\u69cb\u6587\u89e3\u6790",level:2},{value:"\u8a55\u4fa1",id:"\u8a55\u4fa1",level:2}],i={toc:c};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},i,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u8db3\u3057\u7b97\u3092\u8ffd\u52a0\u3057\u3088\u3046"},"\u8db3\u3057\u7b97\u3092\u8ffd\u52a0\u3057\u3088\u3046"),(0,a.kt)("h2",{id:"\u69cb\u6587\u89e3\u6790"},"\u69cb\u6587\u89e3\u6790"),(0,a.kt)("p",null,"\u6b21\u306f\u3001\u8db3\u3057\u7b97\u3092\u8ffd\u52a0\u3057\u307e\u3059\u3002\u8db3\u3057\u7b97\u306e\u6587\u6cd5\u3068\u3057\u3066\u306f\u3001\u4e00\u822c\u7684\u306a1+2+3\u306e\u3088\u3046\u306a\u4e2d\u7f6e\u8a18\u6cd5\u306b\u3057\u307e\u3057\u3087\u3046\u3002(\u30dd\u30fc\u30e9\u30f3\u30c9\u8a18\u6cd5\u304c\u826f\u3044\u4eba\u306f\u9811\u5f35\u3063\u3066\u304f\u3060\u3055\u3044\u3002)"),(0,a.kt)("p",null,"\u3055\u3089\u306b\u30011+2+3\u306f(1+2)+3\u3088\u3046\u306b\u8a08\u7b97\u3055\u308c\u308b\u3001\u3064\u307e\u308a+\u306f\u5de6\u7d50\u5408\u306e\u6f14\u7b97\u5b50\u3068\u3044\u3046\u3053\u3068\u306b\u3057\u307e\u3059\u3002\u305d\u308c\u3067\u306f\u3001\u307e\u305a\u3001\u6587\u6cd5\u5b9a\u7fa9\u3092\u8003\u3048\u3066\u307f\u308b\u524d\u306b\u3001peg.js\u306e\u6587\u6cd5\u5b9a\u7fa9\u65b9\u6cd5\u306e\u8a73\u7d30\u3092\u898b\u3066\u3044\u304d\u307e\u3057\u3087\u3046\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},'""'),"\u3067\u56f2\u307e\u308c\u305f\u6587\u5b57\u5217\u306f\u3001\u305d\u306e\u6587\u5b57\u5217\u81ea\u8eab\u306b\u30de\u30c3\u30c1\u3057\u307e\u3059\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'plus = "+" // plus\u306f+\u306b\u30de\u30c3\u30c1\u3059\u308b\u6587\u6cd5\n')),(0,a.kt)("p",null,"\u7a7a\u767d\u306b\u3088\u3063\u3066\u533a\u5207\u3089\u308c\u305f\u6587\u6cd5\u5217\u306f\u3001\u305d\u306e\u6587\u6cd5\u5217\u306e\u5de6\u304b\u3089\u30de\u30c3\u30c1\u3057\u3066\u3044\u304f\u3053\u3068\u3092\u8868\u3057\u3066\u3044\u307e\u3059\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'Integer "+" Integer // \u6570\u5b57+\u6570\u5b57 \u306e\u4e26\u3073(e.g. 1+1)\u306b\u30de\u30c3\u30c1\u3059\u308b\u6587\u6cd5\n')),(0,a.kt)("p",null,"\u6700\u5f8c\u306b\u3001\u4efb\u610f\u306e\u6587\u6cd5\u306e\u672b\u5c3e\u306b","*","\u3092\u4ed8\u3051\u308b\u3068\u3001\u305d\u306e\u6587\u6cd5\u304c0\u56de\u4ee5\u4e0a\u7e70\u308a\u8fd4\u3055\u308c\u308b\u3053\u3068\u3092\u610f\u5473\u3057\u3066\u3044\u307e\u3059\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'"+"* // 0\u500b\u4ee5\u4e0a\u306e+\u306e\u4e26\u3073(e.g. ++++)\u306b\u30de\u30c3\u30c1\u3059\u308b\u6587\u6cd5\n("+" Integer)* // +\u6570\u5b57 \u306e\u7d44\u307f\u5408\u308f\u305b\u304c0\u500b\u4ee5\u4e0a\u7e70\u308a\u8fd4\u3055\u308c\u305f\u4e26\u3073(e.g. +1+2+3)\u306b\u30de\u30c3\u30c1\u3059\u308b\u6587\u6cd5(()\u3067\u6587\u6cd5\u3092\u30b0\u30eb\u30fc\u30d7\u5316\u51fa\u6765\u308b\u3053\u3068\u306b\u6ce8\u610f\u3057\u3066\u304f\u3060\u3055\u3044)\n')),(0,a.kt)("p",null,"\u305d\u308c\u3067\u306f\u3001\u8db3\u3057\u7b97\u306e\u6587\u6cd5\u5b9a\u7fa9\u3092\u8003\u3048\u3066\u898b\u307e\u3057\u3087\u3046\u3002(\u4e0b\u306b\u7b54\u3048\u3092\u66f8\u304f\u306e\u3067\u3001\u8003\u3048\u305f\u3044\u4eba\u306f\u6c17\u3092\u3064\u3051\u3066\u4e0b\u3055\u3044)"),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},'Expression = Factor ("+" Factor)*'),"\u3068\u3059\u308b\u3053\u3068\u3067\u3001Expression\u306f\u8db3\u3057\u7b97\u306b\u30de\u30c3\u30c1\u3059\u308b\u6587\u6cd5\u3068\u306a\u308a\u307e\u3059\u3002\u6b21\u306b\u3001Expression\u306e\u623b\u308a\u5024\u3092\u5b9a\u7fa9\u3057\u307e\u3057\u3087\u3046\u3002\u307e\u305a\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"Factor"),"\u3068",(0,a.kt)("inlineCode",{parentName:"p"},'("+" Factor)*'),'\u306e\u7d50\u679c\u3092\u53d6\u308a\u51fa\u3057\u307e\u3059\u3002("+" Factor)',"*",'\u306e\u623b\u308a\u5024\u306f\u30010\u756a\u76ee\u306e\u8981\u7d20\u306b"+", 1\u756a\u76ee\u306e\u8981\u7d20\u306bFactor\u306e\u623b\u308a\u5024\u304c\u5165\u3063\u305f\u914d\u5217\u3001\u306e\u914d\u5217\u3067\u3059\u3002(e.g. +1+2\u3067\u3042\u308c\u3070',(0,a.kt)("inlineCode",{parentName:"p"},'[["+", {tag: "Number", value: 1}], ["+", {tag: "Number", value: 2}]]'),")"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'Expression = e1: Factor e2: ("+" Factor)*\n')),(0,a.kt)("p",null,'\u6b21\u306b\u3001\u4e2d\u62ec\u5f27\u5185\u90e8\u3092\u66f8\u3044\u3066\u3044\u304d\u307e\u3059\u3002\u8db3\u3057\u7b97\u306eAST\u306etag\u306f\u3001"Add"\u306b\u3057\u307e\u3057\u3087\u3046\u3002e1\u306e\u5024\u3092\u3001e2\u3092for\u6587\u3067\u56de\u3057\u306a\u304c\u3089\u5909\u3048\u3066\u3044\u304f\u306e\u304c\u826f\u3044\u3067\u3057\u3087\u3046\u3002(reduce\u3092\u4f7f\u3063\u3066\u66f8\u304f\u306e\u3082\u826f\u3044\u3067\u3059)'),(0,a.kt)("p",null,"\u4ee5\u4e0b\u4e00\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'Expression = e1: Factor e2: ("+" Factor)* {\n    let result = e1\n    for (const e of e2) {\n        result = {tag: "Add", lh: result, rh: e[1]}\n    }\n    return result\n}\n')),(0,a.kt)("p",null,"\u305d\u308c\u3067\u306f\u3001\u5b9f\u969b\u306b\u6570\u5f0f\u3092\u5165\u529b\u306b\u5165\u308c\u3066\u8a66\u3057\u3066\u898b\u307e\u3057\u3087\u3046\u3002\u671f\u5f85\u3057\u305f\u7d50\u679c\u306f\u51fa\u307e\u3057\u305f\u304b\uff1f\u3053\u3053\u3067\u3001\u4f8b\u3048\u30701+2+3\u306e\u5834\u5408\u30011+2\u306e\u90e8\u5206\u6728\u304c\u6728\u306e\u3088\u308a\u6df1\u3044\u4f4d\u7f6e\u306b\u3042\u308b\u3053\u3068\u306b\u6ce8\u610f\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,a.kt)("h2",{id:"\u8a55\u4fa1"},"\u8a55\u4fa1"),(0,a.kt)("p",null,"\u8db3\u3057\u7b97\u306e\u8a55\u4fa1\u898f\u5247\u306f\u3001",(0,a.kt)("a",{parentName:"p",href:"/pl-workshop-text/docs/intro"},"\u306f\u3058\u3081\u306b"),"\u306e",(0,a.kt)("a",{parentName:"p",href:"/pl-workshop-text/docs/intro#%E8%A9%95%E4%BE%A1"},"\u8a55\u4fa1"),"\u3067\u78ba\u8a8d\u3057\u307e\u3057\u305f\u3002\u305d\u306e\u8a55\u4fa1\u898f\u5247\u3092\u5b9f\u969b\u306beval\u95a2\u6570\u306b\u66f8\u304d\u4e0b\u3057\u3066\u3044\u304d\u307e\u3057\u3087\u3046\u3002"),(0,a.kt)("p",null,"\u307e\u305a+\u306e\u5de6\u5074\u3092\u8a55\u4fa1\u3057\u307e\u3059\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"eval(ast.lh)\n")),(0,a.kt)("p",null,"\u6b21\u306b+\u306e\u53f3\u5074\u3092\u8a55\u4fa1\u3057\u307e\u3059\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"eval(ast.rh)\n")),(0,a.kt)("p",null,"\u6700\u5f8c\u306b\u3001\u5de6\u5074\u3092\u8a55\u4fa1\u3057\u305f\u5024\u3068\u53f3\u5074\u3092\u8a55\u4fa1\u3057\u305f\u5024\u3092\u8db3\u3057\u305f\u5024\u3092\u8fd4\u3057\u307e\u3059\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'const eval = (ast) => {\n    switch (ast.tag) {\n            \ufe19\n        case "Add": return eval(ast.lh) + eval(ast.rh)\n    }\n}\n')),(0,a.kt)("p",null,"\u305d\u308c\u3067\u306f\u3001\u5b9f\u969b\u306b",(0,a.kt)("strong",{parentName:"p"},"Eval!"),"\u30dc\u30bf\u30f3\u3092\u62bc\u3057\u3066\u78ba\u304b\u3081\u3066\u307f\u307e\u3057\u3087\u3046\u3002\u671f\u5f85\u901a\u308a\u306e\u7d50\u679c\u306b\u306a\u308a\u307e\u3057\u305f\u304b\uff1f"))}u.isMDXComponent=!0}}]);