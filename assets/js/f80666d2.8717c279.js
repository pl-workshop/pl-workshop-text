"use strict";(self.webpackChunkpl_workshop_text=self.webpackChunkpl_workshop_text||[]).push([[534],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),f=u(r),m=a,d=f["".concat(i,".").concat(m)]||f[m]||c[m]||o;return r?n.createElement(d,l(l({ref:t},s),{},{components:r})):n.createElement(d,l({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=f;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var u=2;u<o;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},528:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>p,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:2},l="if\u5f0f\u3092\u8ffd\u52a0\u3057\u3088\u3046",p={unversionedId:"tutorial-extras/if",id:"tutorial-extras/if",title:"if\u5f0f\u3092\u8ffd\u52a0\u3057\u3088\u3046",description:"\u69cb\u6587\u89e3\u6790",source:"@site/docs/tutorial-extras/if.md",sourceDirName:"tutorial-extras",slug:"/tutorial-extras/if",permalink:"/pl-workshop-text/docs/tutorial-extras/if",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tutorial-extras/if.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\u5909\u6570\u3092\u8ffd\u52a0\u3057\u3088\u3046",permalink:"/pl-workshop-text/docs/tutorial-extras/var"},next:{title:"\u95a2\u6570\u5b9a\u7fa9\u30fb\u9069\u7528\u3092\u8ffd\u52a0\u3057\u3088\u3046",permalink:"/pl-workshop-text/docs/tutorial-extras/function"}},i={},u=[{value:"\u69cb\u6587\u89e3\u6790",id:"\u69cb\u6587\u89e3\u6790",level:2},{value:"\u8a55\u4fa1",id:"\u8a55\u4fa1",level:2}],s={toc:u};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"if\u5f0f\u3092\u8ffd\u52a0\u3057\u3088\u3046"},"if\u5f0f\u3092\u8ffd\u52a0\u3057\u3088\u3046"),(0,a.kt)("h2",{id:"\u69cb\u6587\u89e3\u6790"},"\u69cb\u6587\u89e3\u6790"),(0,a.kt)("p",null,"if\u5f0f\u306e\u69cb\u6587\u3092\u8003\u3048\u307e\u3057\u3087\u3046\u3002\u4eca\u56de\u306f\u4f8b\u3068\u3057\u3066\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u69cb\u6587\u3068\u3057\u307e\u3059\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"if \u6761\u4ef6\u5f0f then \u6761\u4ef6\u304c\u771f\u306e\u6642\u5b9f\u884c\u3055\u308c\u308b\u5f0f else \u6761\u4ef6\u304c\u507d\u306e\u6642\u5b9f\u884c\u3055\u308c\u308b\u5f0f\n")),(0,a.kt)("p",null,"\u307e\u305a\u3001\u6761\u4ef6\u5f0f\u3067\u4f7f\u308f\u308c\u308b\u7b49\u53f7\u3084\u4e0d\u7b49\u53f7\u306e\u69cb\u6587\u89e3\u6790\u3092\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\u7b49\u53f7\u3084\u4e0d\u7b49\u53f7\u306f\u3001\u8db3\u3057\u7b97\u3084\u639b\u3051\u7b97\u3088\u308a\u3082\u512a\u5148\u5ea6\u304c\u4f4e\u3044\u3067\u3059\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"3+2==1+4 // (3+2)==(1+4)\u3068\u69cb\u6587\u89e3\u6790\u3055\u308c\u308b\n")),(0,a.kt)("p",null,"\u3055\u3089\u306b\u3001\u7b49\u53f7\u3084\u4e0d\u7b49\u53f7\u306f",(0,a.kt)("strong",{parentName:"p"},"\u975e\u7d50\u5408"),"\u306a\u6f14\u7b97\u5b50\u3067\u3059\u3002\u975e\u7d50\u5408\u3068\u306f\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"1<2<3"),"\u3084",(0,a.kt)("inlineCode",{parentName:"p"},"x==y==z"),"\u306e\u3088\u3046\u306a\u6587\u5b57\u5217\u306f\u6587\u6cd5\u7684\u306b\u6b63\u3057\u304f\u306a\u3044\u3001\u3068\u3044\u3046\u3053\u3068\u3067\u3059\u3002"),(0,a.kt)("p",null,"(python\u3092\u4f7f\u3063\u305f\u3053\u3068\u306e\u3042\u308b\u4eba\u306f\u3001python\u3067\u306f",(0,a.kt)("inlineCode",{parentName:"p"},"1<x<3"),"\u306e\u3088\u3046\u306a\u6761\u4ef6\u5f0f\u304c\u4f7f\u3048\u308b\u306e\u3092\u77e5\u3063\u3066\u3044\u308b\u304b\u3082\u3057\u308c\u307e\u305b\u3093\u3002\u3053\u308c\u306f\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"(\u5f0f)<(\u5f0f)<(\u5f0f)"),"\u3068\u3044\u3046\u6587\u5b57\u5217\u3092\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"(\u5f0f)<(\u5f0f) && (\u5f0f)<(\u5f0f)"),"\u3068\u89e3\u91c8\u3059\u308b\u3088\u3046\u306a\u6587\u6cd5\u306b\u306a\u3063\u3066\u3044\u308b\u304b\u3089\u3067\u3059\u3002\u3053\u306e\u3088\u3046\u306a\u6587\u6cd5\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u307f\u308b\u306e\u3082\u9762\u767d\u3044\u3067\u3057\u3087\u3046\u3002)"),(0,a.kt)("p",null,"\u3088\u3063\u3066\u7b49\u53f7\u3084\u4e0d\u7b49\u53f7\u306e\u6587\u6cd5\u306f\u6b21\u306e\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'Compare = Expression ("<" / ">" / "==") Expression\n')),(0,a.kt)("p",null,'AST\u306b\u5909\u63db\u3059\u308b\u90e8\u5206\u306f\u5bb9\u6613\u306b\u66f8\u3051\u307e\u3059\u3002"<", ">", "=="\u306etag\u306f\u305d\u308c\u305e\u308cLT, GT, EQ\u7b49\u304c\u826f\u3044\u3067\u3057\u3087\u3046\u3002'),(0,a.kt)("p",null,"\u305d\u308c\u3067\u306f\u3001if\u5f0f\u306e\u65b9\u306e\u69cb\u6587\u89e3\u6790\u306b\u53d6\u308a\u639b\u304b\u308a\u307e\u3059\u3002\u3053\u308c\u3082\u30b7\u30f3\u30d7\u30eb\u3067\u3059\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'IfExpr = "if " _ Compare _ "then " _ Compare _ "else " _ Compare\n')),(0,a.kt)("p",null,"(",(0,a.kt)("inlineCode",{parentName:"p"},"_"),"\u306f0\u500b\u4ee5\u4e0a\u306e\u7a7a\u767d\u3001\u6539\u884c\u3092\u7121\u8996\u3059\u308b\u305f\u3081\u306b\u5165\u3063\u3066\u3044\u307e\u3059\u3002)"),(0,a.kt)("p",null,"Assign\u3067\u4f7f\u308f\u308c\u3066\u3044\u308bExpression\u3092IfExpr\u306b\u5909\u3048\u308b\u306e\u3092\u5fd8\u308c\u306a\u3044\u3088\u3046\u306b\u3057\u307e\u3057\u3087\u3046\u3002"),(0,a.kt)("h2",{id:"\u8a55\u4fa1"},"\u8a55\u4fa1"),(0,a.kt)("p",null,"<, ==, >\u306e\u8a55\u4fa1\u306f\u4eca\u307e\u3067\u306e\u56db\u5247\u6f14\u7b97\u3092\u53c2\u8003\u306b\u3057\u307e\u3057\u3087\u3046\u3002if\u5f0f\u306e\u8a55\u4fa1\u898f\u5247\u306f\u3001"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u307e\u305a\u6761\u4ef6\u5f0f\u3092\u8a55\u4fa1"),(0,a.kt)("li",{parentName:"ol"},"\u6761\u4ef6\u5f0f\u304ctrue\u3060\u3063\u305f\u3089then\u4ee5\u4e0b\u3092\u8a55\u4fa1"),(0,a.kt)("li",{parentName:"ol"},"\u305d\u3046\u3067\u306a\u3051\u308c\u3070else\u4ee5\u4e0b\u3092\u8a55\u4fa1")),(0,a.kt)("p",null,"\u3068\u306a\u308a\u307e\u3059\u3002\u3053\u3053\u3067\u3001\u4f55\u3092\u3082\u3063\u3066true\u3068\u3059\u308b\u304b\u3068\u3044\u3046\u6240\u306b\u9078\u629e\u306e\u4f59\u5730\u304c\u3042\u308b\u308f\u3051\u3067\u3059\u304c\u3001\u4eca\u56de\u306fJavaScript\u3067true\u3068\u3055\u308c\u308b\u5024\u304ctrue\u3067\u3042\u308b\u3068\u3044\u3046\u3053\u3068\u306b\u3057\u307e\u3057\u3087\u3046\u3002"),(0,a.kt)("p",null,"\u66f8\u304d\u7d42\u3048\u305f\u3089\u3001"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"if 3<5 then 1 else 2\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"if 3==5 then 1 else 2\n")),(0,a.kt)("p",null,"\u3092\u5b9f\u884c\u3057\u3066\u307f\u3066\u3001\u6b63\u3057\u304f\u52d5\u304f\u304b\u78ba\u8a8d\u3057\u307e\u3057\u3087\u3046\u3002"))}c.isMDXComponent=!0}}]);