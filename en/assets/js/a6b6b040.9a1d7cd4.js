(self.webpackChunkzxuqian_cn=self.webpackChunkzxuqian_cn||[]).push([[4103],{2122:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,{Z:function(){return r}})},9756:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,i={},u=Object.keys(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}n.d(t,{Z:function(){return r}})},3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},u=Object.keys(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=r.createContext({}),c=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,u=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=c(n),d=i,m=s["".concat(o,".").concat(d)]||s[d]||f[d]||u;return n?r.createElement(m,a(a({ref:t},p),{},{components:n})):r.createElement(m,a({ref:t},p))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var u=n.length,a=new Array(u);a[0]=s;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var c=2;c<u;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},3919:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return i}})},4996:function(e,t,n){"use strict";n.d(t,{C:function(){return u},Z:function(){return a}});var r=n(2263),i=n(3919);function u(){var e=(0,r.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,u=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var u=void 0===r?{}:r,a=u.forcePrependBaseUrl,l=void 0!==a&&a,o=u.absolute,c=void 0!==o&&o;if(!n)return n;if(n.startsWith("#"))return n;if((0,i.b)(n))return n;if(l)return t+n;var p=n.startsWith(t)?n:t+n.replace(/^\//,"");return c?e+p:p}(u,n,e,t)}}}function a(e,t){return void 0===t&&(t={}),(0,u().withBaseUrl)(e,t)}},3454:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return l},metadata:function(){return o},toc:function(){return c},default:function(){return f}});var r=n(2122),i=n(9756),u=(n(7294),n(3905)),a=(n(4996),{slug:"backend-intro",title:"\u7ed9\u524d\u7aef\u5de5\u7a0b\u5e08\u770b\u7684\u540e\u7aef\u79d1\u666e",author:"\u5cf0\u534e",author_title:"\u524d\u7aef\u5de5\u7a0b\u5e08 / B\u7ad9UP\u4e3b",author_url:"https://github.com/zxuqian",author_image_url:"https://tvax3.sinaimg.cn/crop.0.0.1080.1080.180/b2745d44ly8g8s4muqeggj20u00u0n0k.jpg?KID=imgbed,tva&Expires=1582389585&ssig=EvXmyu%2FXsX",description:"\u524d\u7aef\u5de5\u7a0b\u5e08\u4e86\u89e3\u540e\u7aef\u7684\u529f\u80fd\u548c\u4f5c\u7528\u4e4b\u540e\uff0c\u80fd\u66f4\u597d\u7684\u548c\u540e\u7aef\u5de5\u7a0b\u5e08\u8fdb\u884c\u6c9f\u901a\uff0c\u51cf\u5c11\u6c9f\u901a\u6210\u672c\uff0c\u53e6\u5916\u4e5f\u6709\u52a9\u4e8e\u5411\u5168\u6808\u5de5\u7a0b\u5e08\u65b9\u5411\u53d1\u5c55\u3002",tags:["\u524d\u7aef","\u540e\u7aef"],bvid:"BV1XV411d7Cg",oid:"413073953"}),l=void 0,o={permalink:"/en/backend-intro",source:"@site/blog/2020-05-11-backend-intro.md",title:"\u7ed9\u524d\u7aef\u5de5\u7a0b\u5e08\u770b\u7684\u540e\u7aef\u79d1\u666e",description:"\u524d\u7aef\u5de5\u7a0b\u5e08\u4e86\u89e3\u540e\u7aef\u7684\u529f\u80fd\u548c\u4f5c\u7528\u4e4b\u540e\uff0c\u80fd\u66f4\u597d\u7684\u548c\u540e\u7aef\u5de5\u7a0b\u5e08\u8fdb\u884c\u6c9f\u901a\uff0c\u51cf\u5c11\u6c9f\u901a\u6210\u672c\uff0c\u53e6\u5916\u4e5f\u6709\u52a9\u4e8e\u5411\u5168\u6808\u5de5\u7a0b\u5e08\u65b9\u5411\u53d1\u5c55\u3002",date:"2020-05-11T00:00:00.000Z",formattedDate:"May 11, 2020",tags:[{label:"\u524d\u7aef",permalink:"/en/tags/\u524d\u7aef"},{label:"\u540e\u7aef",permalink:"/en/tags/\u540e\u7aef"}],readingTime:.485,truncated:!0,prevItem:{title:"\u5662\uff01\u539f\u6765\u8fd9\u5c31\u662f TypeScript",permalink:"/en/typescript-intro"},nextItem:{title:"\u524d\u540e\u7aef\u901a\u4fe1\u4e4b HTTP \u534f\u8bae\u7b80\u4ecb",permalink:"/en/http-protocol"}},c=[{value:"\u5e94\u7528\u7684\u6784\u6210",id:"\u5e94\u7528\u7684\u6784\u6210",children:[]},{value:"\u524d\u540e\u7aef\u5206\u79bb\u7684\u6f14\u5316",id:"\u524d\u540e\u7aef\u5206\u79bb\u7684\u6f14\u5316",children:[]},{value:"\u540e\u7aef\u7684\u4f5c\u7528",id:"\u540e\u7aef\u7684\u4f5c\u7528",children:[{value:"\u7b80\u5355\u6765\u8bb2...",id:"\u7b80\u5355\u6765\u8bb2",children:[]},{value:"\u5927\u89c4\u6a21\u540e\u7aef\u5e94\u7528",id:"\u5927\u89c4\u6a21\u540e\u7aef\u5e94\u7528",children:[]}]},{value:"\u6570\u636e\u3001\u7b97\u6cd5\u5de5\u7a0b\u5e08\u5404\u53f8\u5176\u804c",id:"\u6570\u636e\u3001\u7b97\u6cd5\u5de5\u7a0b\u5e08\u5404\u53f8\u5176\u804c",children:[]}],p={toc:c};function f(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,u.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,u.kt)("p",null,"\u524d\u7aef\u5de5\u7a0b\u5e08\u4e86\u89e3\u540e\u7aef\u7684\u529f\u80fd\u548c\u4f5c\u7528\u4e4b\u540e\uff0c\u80fd\u66f4\u597d\u7684\u548c\u540e\u7aef\u5de5\u7a0b\u5e08\u8fdb\u884c\u6c9f\u901a\uff0c\u51cf\u5c11\u6c9f\u901a\u6210\u672c\uff0c\u53e6\u5916\u4e5f\u6709\u52a9\u4e8e\u5411\u5168\u6808\u5de5\u7a0b\u5e08\u65b9\u5411\u53d1\u5c55\u3002\u5728\u5f00\u59cb\u4e4b\u524d\uff0c\u5148\u56de\u987e\u4e00\u4e0b\u5e94\u7528\u7684\u6784\u6210\uff1a"),(0,u.kt)("p",null,(0,u.kt)("a",{parentName:"p",href:"https://www.bilibili.com/video/BV1XV411d7Cg/"},"B \u7ad9\u89c6\u9891 - \u70b9\u51fb\u4f20\u9001")),(0,u.kt)("h2",{id:"\u5e94\u7528\u7684\u6784\u6210"},"\u5e94\u7528\u7684\u6784\u6210"),(0,u.kt)("p",null,"\u4e00\u4e2a\u5b8c\u6574\u7684\u5e94\u7528\u901a\u5e38\u5305\u62ec\u524d\u7aef\u548c\u540e\u7aef\u4e24\u4e2a\u90e8\u5206\u3002\u524d\u7aef\u662f\u76f4\u63a5\u4e0e\u7528\u6237\u6253\u4ea4\u9053\u7684\u90e8\u5206\uff0c\u901a\u5e38\u6307\u7684\u662f\u7f51\u9875\uff0c\u91c7\u7528 HTML/CSS/JS \u8bed\u8a00\u7f16\u5199\uff0c\u8fd0\u884c\u5728\u7528\u6237\u81ea\u5df1\u7535\u8111\u7684\u6d4f\u89c8\u5668\u4e0a\u3002\u540e\u7aef\u5219\u662f\u8fd0\u884c\u5728\u8fdc\u7a0b\u7684\u670d\u52a1\u5668\u4e0a\uff0c\u7528\u6765\u6536\u96c6\u548c\u5904\u7406\u7528\u6237\u4f20\u6765\u7684\u6570\u636e\uff0c\u7136\u540e\u628a\u7ed3\u679c\u518d\u4f20\u7ed9\u524d\u7aef\uff0c\u5c55\u73b0\u7ed9\u7528\u6237\u3002"),(0,u.kt)("h2",{id:"\u524d\u540e\u7aef\u5206\u79bb\u7684\u6f14\u5316"},"\u524d\u540e\u7aef\u5206\u79bb\u7684\u6f14\u5316"),(0,u.kt)("p",null,"\u5728\u4ee5\u524d\uff0c\u5f53 web \u5e94\u7528\u8fd8\u662f\u4e3b\u6d41\u7684\u65f6\u5019\uff0c\u524d\u540e\u7aef\u5e94\u7528\u5305\u542b\u5728\u540c\u4e00\u4e2a\u9879\u76ee\u4e2d\uff0c\u5de5\u7a0b\u5e08\u9700\u8981\u540c\u65f6\u8d1f\u8d23\u8fd9\u4e24\u4e2a\u90e8\u5206\uff0c\u63a5\u6536\u5230\u7528\u6237\u7684\u8bf7\u6c42\u540e\uff0c\u5904\u7406\u8bf7\u6c42\uff0c\u7136\u540e\u751f\u6210\u5bf9\u5e94\u7684 HTML\u9875\u9762\uff0c\u518d\u628a\u751f\u6210\u597d\u7684\u9875\u9762\u53d1\u9001\u7ed9\u7528\u6237\u3002"),(0,u.kt)("p",null,"\u540e\u6765\u968f\u7740\u624b\u673a\u548c\u667a\u80fd\u8bbe\u5907\u7684\u666e\u53ca\uff0c\u56e0\u4e3a\u79fb\u52a8 app \u5fc5\u987b\u5b89\u88c5\u5728\u5ba2\u6237\u7aef\u624b\u673a\u4e0a\uff0c\u8fd9\u6837\u5c31\u5bfc\u81f4\u8d8a\u6765\u8d8a\u591a\u73b0\u6709\u7684 web \u5e94\u7528\u9700\u8981\u5355\u72ec\u63d0\u4f9b\u63a5\u53e3\u7ed9 APP \u4f7f\u7528\uff0c\u5373\u4f7f\u4ed6\u4eec\u7528\u5230\u7684\u6570\u636e\u4e00\u6837\u7684\u3002\u4e00\u5957\u7a0b\u5e8f\u540c\u65f6\u7ef4\u62a4\u4e24\u5957\u63a5\u53e3\u5c31\u6253\u7834\u4e86\u201d\u4e0d\u7f16\u5199\u91cd\u590d\u4ee3\u7801\u201c\u7684\u539f\u5219\uff0c\u6240\u4ee5 web \u9875\u9762\u7684\u5c55\u73b0\u4e5f\u50cf APP \u4e00\u822c\u5206\u79bb\u4e86\u51fa\u6765\uff0c\u8fd9\u6837\u540e\u7aef\u53ea\u9700\u8981\u63d0\u4f9b\u4e00\u5957 API\uff0c\u5c31\u53ef\u4ee5\u8ba9 web\u548cAPP\u5171\u540c\u4f7f\u7528\u3002Web \u524d\u7aef\u4e5f\u5c31\u53d8\u6210\u4e86\u50cf App \u4e00\u6837\u7684\u5ba2\u6237\u7aef\u7a0b\u5e8f\uff0c\u7b2c\u4e00\u6b21\u8bbf\u95ee\u9875\u9762\u65f6\uff0c\u7531\u670d\u52a1\u5668\u76f4\u63a5\u628a\u6574\u4e2a\u524d\u7aef\u7a0b\u5e8f\u53d1\u9001\u5230\u6d4f\u89c8\u5668\u4e2d\uff0c\u5269\u4e0b\u7684\u8bf7\u6c42\u7edf\u4e00\u5728 web \u524d\u7aef\u5904\u7406\uff0c\u76f4\u63a5\u8bbf\u95ee\u540e\u7aef API \u63a5\u53e3\u3002\u5e7f\u4e49\u4e0a\u7684\u524d\u7aef\uff0c\u662f\u5305\u62ec app\u3001\u5c0f\u7a0b\u5e8f\u548c\u684c\u9762\u5e94\u7528\u7684\uff0c\u4e5f\u5c31\u662f\u6240\u8c13\u7684\u5927\u524d\u7aef\uff0c\u6240\u6709\u8d1f\u8d23\u6570\u636e\u5c55\u73b0\u5e76\u4e0e\u7528\u6237\u4ea4\u4e92\u7684\u7a0b\u5e8f\u90fd\u53ef\u4ee5\u79f0\u4e4b\u4e3a\u524d\u7aef\u3002\u7531\u6b64\uff0c\u6211\u4eec\u524d\u7aef\u5de5\u7a0b\u5e08\u4e13\u95e8\u8d1f\u8d23\u524d\u7aef\uff0c\u540e\u7aef\u5de5\u7a0b\u5e08\u8d1f\u8d23\u540e\u7aef\u3002"),(0,u.kt)("h2",{id:"\u540e\u7aef\u7684\u4f5c\u7528"},"\u540e\u7aef\u7684\u4f5c\u7528"),(0,u.kt)("p",null,"\u63a5\u4e0b\u6765\u770b\u4e00\u4e0b\u540e\u7aef\u7684\u4f5c\u7528\u548c\u7ec4\u6210\u90e8\u5206\u3002"),(0,u.kt)("h3",{id:"\u7b80\u5355\u6765\u8bb2"},"\u7b80\u5355\u6765\u8bb2..."),(0,u.kt)("p",null,"\u524d\u7aef\u5e94\u7528\u6839\u636e\u4e00\u5b9a\u534f\u8bae\uff08\u6bd4\u5982 HTTP) \u53d1\u9001\u8bf7\u6c42\u7ed9\u540e\u7aef\uff0c\u540e\u7aef\u63a5\u6536\u8bf7\u6c42\u540e\uff0c\u89e3\u6790\u8bf7\u6c42\u53c2\u6570\uff0c\u7136\u540e\u6839\u636e\u8fd9\u4e9b\u53c2\u6570\u6765\u8fdb\u884c\u6570\u636e\u7684\u8ba1\u7b97\u548c\u5904\u7406\uff0c\u6700\u540e\u628a\u7ed3\u679c\u8fd4\u56de\u7ed9\u524d\u7aef\u3002"),(0,u.kt)("p",null,"\u4e00\u4e2a\u6700\u57fa\u672c\u7684\u540e\u7aef\u5e94\u7528\u7531\u4e09\u4e2a\u90e8\u5206\u7ec4\u6210\uff1a"),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"\u670d\u52a1\u5668\u7a0b\u5e8f\uff0c\u7528\u4e8e\u63a5\u6536\u8bf7\u6c42\u548c\u53d1\u9001\u54cd\u5e94\u3002"),(0,u.kt)("li",{parentName:"ul"},"\u540e\u7aef\u5e94\u7528\u7a0b\u5e8f\uff0c\u7528\u4e8e\u5904\u7406\u8bf7\u6c42\uff0c\u5e76\u5b8c\u6210\u4e1a\u52a1\u903b\u8f91\uff0c\u7136\u540e\u5229\u7528\u670d\u52a1\u5668\u7a0b\u5e8f\u628a\u7ed3\u679c\u54cd\u5e94\u7ed9\u524d\u7aef\u3002"),(0,u.kt)("li",{parentName:"ul"},"\u6570\u636e\u5e93\uff1a\u7528\u4e8e\u4fdd\u5b58\u548c\u4e1a\u52a1\u903b\u8f91\u76f8\u5173\u7684\u6570\u636e\uff0c\u4fbf\u4e8e\u518d\u6b21\u4f7f\u7528\uff0c\u6bd4\u5982\u7528\u6237\u6ce8\u518c\u7684\u4fe1\u606f\u3001\u5e94\u7528\u7684\u5185\u5bb9\u7b49\u3002")),(0,u.kt)("h3",{id:"\u5927\u89c4\u6a21\u540e\u7aef\u5e94\u7528"},"\u5927\u89c4\u6a21\u540e\u7aef\u5e94\u7528"),(0,u.kt)("p",null,"\u540e\u7aef\uff0c\u6839\u636e\u89c4\u6a21\uff0c\u4f1a\u6709\u4e0d\u4e00\u6837\u7684\u7ec4\u6210\u90e8\u5206\u3002\u4e00\u4e2a\u7b80\u5355\u7684\u3001\u8f83\u5c11\u7528\u6237\u91cf\u7684\u5c0f\u89c4\u6a21\u5e94\u7528\uff0c\u5728\u4e00\u53f0\u670d\u52a1\u5668\u4e0a\u90e8\u7f72\u6574\u4e2a\u540e\u7aef\u5e94\u7528\u7a0b\u5e8f\u5c31\u8db3\u591f\u4e86\uff0c\u800c\u5bf9\u4e8e\u5927\u89c4\u6a21\u7684\u5e94\u7528\uff0c\u5f80\u5f80\u90e8\u7f72\u5728\u7531\u51e0\u53f0\u4e43\u81f3\u51e0\u5343\u53f0\u670d\u52a1\u5668\u7ec4\u6210\u7684\u96c6\u7fa4\u4e2d\uff0c\u5bf9\u4e8e\u8fd9\u79cd\uff0c\u540e\u7aef\u5e94\u7528\u4f1a\u6839\u636e API \u7ed3\u6784\u6216\u8005\u529f\u80fd\u8fdb\u884c\u62c6\u89e3\uff0c\u6bd4\u5982\u8ba4\u8bc1\u9274\u6743\u670d\u52a1\u3001\u8ba2\u5355\u670d\u52a1\u3001\u65e5\u5fd7\u670d\u52a1\u3001\u6570\u636e\u5e93\u7b49\u3002\u7136\u540e\u90e8\u7f72\u5230\u4e0d\u540c\u7684\u670d\u52a1\u5668\u4e0a\uff0c\u6bcf\u4e2a\u670d\u52a1\u4e5f\u53ef\u4ee5\u90e8\u7f72\u5230\u591a\u53f0\u670d\u52a1\u5668\u4e0a\u7528\u4e8e\u63d0\u5347\u6027\u80fd\u3001\u5bb9\u707e\u5bb9\u9519\u3002\u9664\u540e\u7aef\u670d\u52a1\u5916\uff0c\u5927\u89c4\u6a21\u5e94\u7528\u8fd8\u6709\u4ee5\u4e0b\u5e38\u89c1\u7684\u51e0\u4e2a\u7ec4\u4ef6\uff1a"),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"load balancer\uff08\u8d1f\u8f7d\u5747\u8861\u5668\uff09\uff0c\u7528\u4e8e\u628a\u8bf7\u6c42\u5206\u7ed9\u8d1f\u8f7d\u6bd4\u8f83\u4f4e\u7684\u670d\u52a1\u5668\u4e0a\u3002"),(0,u.kt)("li",{parentName:"ul"},"Api Gateway (API \u7f51\u5173)\uff0c\u7528\u4e8e\u7ec4\u5408\u5206\u6563\u7684 API\uff0c\u5bf9\u5916\u63d0\u4f9b\u7edf\u4e00\u5165\u53e3\uff0c\u4e5f\u8d77\u5230\u4fdd\u62a4\u5185\u90e8\u670d\u52a1\u7684\u4f5c\u7528\u3002"),(0,u.kt)("li",{parentName:"ul"},"Cache Service\uff08\u7f13\u5b58\u670d\u52a1\uff09\uff0c\u7528\u4e8e\u7f13\u5b58\u8ba1\u7b97\u7ed3\u679c\uff0c\u63d0\u5347\u6027\u80fd\u3002"),(0,u.kt)("li",{parentName:"ul"},"Centrialized Service\uff08\u4e2d\u5fc3\u7ba1\u7406\u670d\u52a1\uff09\uff0c\u7528\u4e8e\u4e3a\u670d\u52a1\u5668\u96c6\u7fa4\u63d0\u4f9b\u4e2d\u5fc3\u5316\u7684\u914d\u7f6e\u3001\u540c\u6b65\u548c\u7ba1\u7406\u670d\u52a1\u3002"),(0,u.kt)("li",{parentName:"ul"},"Message Service\uff08\u6d88\u606f\u670d\u52a1\uff09\uff0c\u7528\u4e8e\u5904\u7406\u57fa\u4e8e\u4e8b\u4ef6\uff08\u6216\u6d88\u606f\uff09\u7684\u670d\u52a1\uff0c\u652f\u6301\u6301\u4e45\u5316\uff08\u5373\u4fdd\u5b58\u6d88\u606f\uff09\uff0c\u5e38\u7528\u4e8e\u540e\u7aef\u670d\u52a1\u95f4\u7684\u901a\u4fe1\uff0c\u6216\u8005\u5b9e\u73b0 websocket \u534f\u8bae\u3002")),(0,u.kt)("h2",{id:"\u6570\u636e\u3001\u7b97\u6cd5\u5de5\u7a0b\u5e08\u5404\u53f8\u5176\u804c"},"\u6570\u636e\u3001\u7b97\u6cd5\u5de5\u7a0b\u5e08\u5404\u53f8\u5176\u804c"),(0,u.kt)("p",null,"\u4e0a\u8fb9\u4ecb\u7ecd\u4e86\u540e\u7aef\u5e94\u7528\u7684\u5e38\u89c1\u7ed3\u6784\uff0c\u5bf9\u4e8e\u73b0\u5728\u7684\u79d1\u6280\u53d1\u5c55\uff0c\u5355\u4ece\u4e1a\u52a1\u903b\u8f91\u4e0a\u53c8\u80fd\u5212\u5206\u6210\u72ec\u7acb\u7684\u670d\u52a1\u5355\u5143\uff0c\u6bd4\u5982"),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"\u5927\u6570\u636e\u5904\u7406\u670d\u52a1"),(0,u.kt)("li",{parentName:"ul"},"\u56fe\u50cf\u5904\u7406\u670d\u52a1"),(0,u.kt)("li",{parentName:"ul"},"\u81ea\u7136\u8bed\u8a00\u5904\u7406\u670d\u52a1"),(0,u.kt)("li",{parentName:"ul"},"\u722c\u866b\u670d\u52a1")),(0,u.kt)("p",null,"\u7531\u6b64\u4e5f\u5e26\u6765\u4e86\u7ec6\u5206\u7684\u5de5\u4f5c\u5c97\u4f4d\uff0c\u6bd4\u5982\u6570\u636e\u5de5\u7a0b\u5e08\uff0c\u7b97\u6cd5\u5de5\u7a0b\u5e08\uff0c\u722c\u866b\u5de5\u7a0b\u5e08\u7b49\u7b49\u3002"),(0,u.kt)("p",null,"\u4f60\u5b66\u4f1a\u4e86\u5417\uff1f\u5982\u679c\u6709\u95ee\u9898\uff0c\u6b22\u8fce\u901a\u8fc7\u4e0b\u65b9\u94fe\u63a5\u53c2\u4e0e\u8ba8\u8bba\u3002"))}f.isMDXComponent=!0}}]);