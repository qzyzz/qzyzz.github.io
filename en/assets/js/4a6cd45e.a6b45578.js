(self.webpackChunkzxuqian_cn=self.webpackChunkzxuqian_cn||[]).push([[8265],{2122:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,{Z:function(){return r}})},9756:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}n.d(t,{Z:function(){return r}})},3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),c=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,p=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),k=c(n),m=a,d=k["".concat(o,".").concat(m)]||k[m]||s[m]||p;return n?r.createElement(d,l(l({ref:t},u),{},{components:n})):r.createElement(d,l({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=n.length,l=new Array(p);l[0]=k;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<p;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},3919:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return a}})},4996:function(e,t,n){"use strict";n.d(t,{C:function(){return p},Z:function(){return l}});var r=n(2263),a=n(3919);function p(){var e=(0,r.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,p=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var p=void 0===r?{}:r,l=p.forcePrependBaseUrl,i=void 0!==l&&l,o=p.absolute,c=void 0!==o&&o;if(!n)return n;if(n.startsWith("#"))return n;if((0,a.b)(n))return n;if(i)return t+n;var u=n.startsWith(t)?n:t+n.replace(/^\//,"");return c?e+u:u}(p,n,e,t)}}}function l(e,t){return void 0===t&&(t={}),(0,p().withBaseUrl)(e,t)}},7216:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return o},metadata:function(){return c},toc:function(){return u},default:function(){return k}});var r=n(2122),a=n(9756),p=(n(7294),n(3905)),l=n(4996),i={slug:"typescript-intro",title:"\u8fd9\u5c31\u662f TypeScript",author:"\u5cf0\u534e",author_title:"\u524d\u7aef\u5de5\u7a0b\u5e08 / B\u7ad9UP\u4e3b",author_url:"https://github.com/zxuqian",author_image_url:"https://tvax3.sinaimg.cn/crop.0.0.1080.1080.180/b2745d44ly8g8s4muqeggj20u00u0n0k.jpg?KID=imgbed,tva&Expires=1582389585&ssig=EvXmyu%2FXsX",description:"TypeScript \u662f JavaScript \u7684\uff0c\u5e26\u6709\u7c7b\u578b\u7684\u8d85\u96c6\uff0c\u5e76\u4e14\u53ef\u4ee5\u7f16\u8bd1\u4e3a JavaScript \u811a\u672c\uff0c\u8fd9\u7bc7\u5e45\u6587\u7ae0\u5c06\u5e26\u4f60\u8ba4\u8bc6\u4e00\u4e0b TypeScript",tags:["\u524d\u7aef","TypeScript"],bvid:"BV1xp4y1D7ux",oid:"968467412"},o=void 0,c={permalink:"/en/typescript-intro",source:"@site/blog/2022-06-09-typescript-intro.md",title:"\u8fd9\u5c31\u662f TypeScript",description:"TypeScript \u662f JavaScript \u7684\uff0c\u5e26\u6709\u7c7b\u578b\u7684\u8d85\u96c6\uff0c\u5e76\u4e14\u53ef\u4ee5\u7f16\u8bd1\u4e3a JavaScript \u811a\u672c\uff0c\u8fd9\u7bc7\u5e45\u6587\u7ae0\u5c06\u5e26\u4f60\u8ba4\u8bc6\u4e00\u4e0b TypeScript",date:"2022-06-09T00:00:00.000Z",formattedDate:"June 9, 2022",tags:[{label:"\u524d\u7aef",permalink:"/en/tags/\u524d\u7aef"},{label:"TypeScript",permalink:"/en/tags/type-script"}],readingTime:4.575,truncated:!0,prevItem:{title:"\u6574\u7406\u4e865\u4e2aJavaScript\u602a\u5f02\u884c\u4e3a\u53ca\u5176\u539f\u56e0",permalink:"/en/5-javascript-tricky-problems"},nextItem:{title:"\u524d\u540e\u7aef\u901a\u4fe1\u4e4b HTTP \u534f\u8bae\u7b80\u4ecb",permalink:"/en/http-protocol"}},u=[{value:"\u4ec0\u4e48\u662f TypeScript",id:"\u4ec0\u4e48\u662f-typescript",children:[]},{value:"\u4e3a\u4ec0\u4e48\u7528 TypeScript",id:"\u4e3a\u4ec0\u4e48\u7528-typescript",children:[]},{value:"\u7f16\u5199\u548c\u8fd0\u884c TS \u4ee3\u7801",id:"\u7f16\u5199\u548c\u8fd0\u884c-ts-\u4ee3\u7801",children:[{value:"Node TSC",id:"node-tsc",children:[]},{value:"Deno",id:"deno",children:[]},{value:"tsconfig.json",id:"tsconfigjson",children:[]}]},{value:"\u57fa\u672c\u8bed\u6cd5",id:"\u57fa\u672c\u8bed\u6cd5",children:[{value:"\u57fa\u672c\u7c7b\u578b",id:"\u57fa\u672c\u7c7b\u578b",children:[]},{value:"\u7ec4\u5408\u7c7b\u578b",id:"\u7ec4\u5408\u7c7b\u578b",children:[]},{value:"\u5bf9\u8c61\u7c7b\u578b(interface)",id:"\u5bf9\u8c61\u7c7b\u578binterface",children:[]},{value:"\u6570\u7ec4\u7c7b\u578b",id:"\u6570\u7ec4\u7c7b\u578b",children:[]}]},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",children:[]}],s={toc:u};function k(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,p.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"\u8fd9\u7bc7\u6587\u7ae0\u4ecb\u7ecd\u4e00\u4e0b\u5982\u4f55\u7f16\u5199\u5e76\u8fd0\u884c TypeScript \u7a0b\u5e8f\uff0c\u5982\u4f55\u5b9a\u4e49\u7c7b\u578b\uff0c\u53e6\u5916\u5047\u8bbe\u4f60\u6709 JavaScript \u57fa\u7840\u3002"),(0,p.kt)("h2",{id:"\u4ec0\u4e48\u662f-typescript"},"\u4ec0\u4e48\u662f TypeScript"),(0,p.kt)("p",null,"\u90a3\u4e48\u5230\u5e95\u4ec0\u4e48\u662f TypeScript \u5462\uff1f\u5b98\u65b9\u7684\u5b9a\u4e49\u662f TypeScript \u662f JavaScript \u7684\u3001\u5e26\u6709\u7c7b\u578b\u7684\u8d85\u96c6\uff0c\u5e76\u4e14\u80fd\u591f\u7f16\u8bd1\u4e3a\u666e\u901a\u7684 JavaScript\u3002\u8fd9\u91cc\u6709\u4e09\u4e2a\u91cd\u70b9\uff0c\u4e00\u4e2a\u662f\u7f16\u8bd1\uff0c\u4e00\u4e2a\u662f\u5e26\u6709\u7c7b\u578b\uff0c\u4e00\u4e2a\u662f\u8d85\u96c6\u3002"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"\u6211\u4eec\u5148\u770b\u4e00\u4e0b\u7f16\u8bd1\uff0c\u7f16\u8bd1\u662f\u8bf4\uff0cTypeScript \u672c\u8eab\u662f\u4e0d\u80fd\u591f\u5728\u6d4f\u89c8\u5668\u6216 Node.js \u73af\u5883\u4e0b\u8fd0\u884c\u7684\uff08deno \u9664\u5916\uff09\uff0c\u9700\u8981\u4f7f\u7528 TypeScript \u7f16\u8bd1\u5668\u7f16\u8bd1\u6210\u666e\u901a\u7684 JavaScript\uff0c\u8fd9\u70b9\u5f88\u50cf C++ \u6216 Java\u3002"),(0,p.kt)("li",{parentName:"ul"},"\u800c\u5e26\u6709\u7c7b\u578b\uff0c\u662f\u8bf4 JavaScript \u5728\u5b9a\u4e49\u53d8\u91cf\u7684\u65f6\u5019\uff0c\u7c7b\u578b\u662f\u52a8\u6001\u7684\uff0c\u53ea\u6709\u5728\u8fd0\u884c\u7684\u65f6\u5019\u624d\u80fd\u77e5\u9053\u5b83\u7684\u5177\u4f53\u7c7b\u578b\uff0c\u6bd4\u5982 number \u6216\u8005 string\uff0c\u5e76\u4e14\u7c7b\u578b\u4e5f\u662f\u53ef\u4ee5\u52a8\u6001\u53d8\u5316\u7684\uff0c\u800c TypeScript \u5219\u662f\u8981\u6c42\u53d8\u91cf\u6709\u786e\u5b9a\u7684\u7c7b\u578b\uff0c\u5e76\u4e14\u5728\u7f16\u5199\u4ee3\u7801\u7684\u65f6\u5019\u5c31\u5df2\u7ecf\u786e\u5b9a\uff0c\u5982\u679c\u628a\u5b57\u7b26\u4e32\u8d4b\u7ed9\u7c7b\u578b\u4e3a number \uff0c\u6570\u5b57\u7c7b\u578b\u7684\u53d8\u91cf\uff0c\u5c31\u4f1a\u51fa\u9519\u3002"),(0,p.kt)("li",{parentName:"ul"},"\u8d85\u96c6\u662f\u8bf4\uff0cTypeScript \u672c\u8eab\u652f\u6301\u6240\u6709 JavaScript \u7684\u8bed\u6cd5\uff0c\u5e76\u5728\u6b64\u57fa\u7840\u4e0a\u6dfb\u52a0\u4e86\u989d\u5916\u7684\u529f\u80fd\u548c\u7279\u6027\uff0c\u8fd9\u6837\u5c31\u4f7f\u5f97\u6240\u6709\u7684 JavaScript \u4ee3\u7801\u53ef\u4ee5\u5b8c\u5168\u88ab TypeScript \u6b63\u786e\u7f16\u8bd1\u3002\u6240\u4ee5\u8bf4\u4f60\u53ef\u4ee5\u81ea\u5df1\u51b3\u5b9a\u4f7f\u7528\u591a\u5c11 TypeScript \u63d0\u4f9b\u7684\u7279\u6027\u3002")),(0,p.kt)("h2",{id:"\u4e3a\u4ec0\u4e48\u7528-typescript"},"\u4e3a\u4ec0\u4e48\u7528 TypeScript"),(0,p.kt)("p",null,"\u8ba4\u8bc6\u4e86 TypeScript \u4e4b\u540e\uff0c\u53ef\u80fd\u4f60\u53c8\u6709\u95ee\u9898\uff0c\u4e3a\u4ec0\u4e48\u8981\u5b66 TypeScript \u5462\uff1f\u5148\u770b\u4e00\u6761\u6570\u636e\uff0c\u5728 stackoverflow \u53d1\u8d77\u7684 2020 \u5e74\u7a0b\u5e8f\u5458\u8c03\u67e5\u4e2d\uff0cTypeScript \u5728\u7a0b\u5e8f\u5458\u6700\u7231\u7684\u7f16\u7a0b\u8bed\u8a00\u4e2d\u6392\u5728\u4e86\u7b2c\u4e8c\u4f4d\uff0c\u4ec5\u6b21\u4e8e Rust\uff1a"),(0,p.kt)("img",{alt:"",src:(0,l.Z)("img/2020-06-09-typescript-intro/2020-06-09-22-03-40.png")}),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"https://stackoverflow.blog/2020/05/27/2020-stack-overflow-developer-survey-results/"},"https://stackoverflow.blog/2020/05/27/2020-stack-overflow-developer-survey-results/")),(0,p.kt)("p",null,"\u4e4b\u6240\u4ee5\u5927\u5bb6\u559c\u6b22 TypeScript\uff0c\u662f\u56e0\u4e3a\uff1a"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"TypeScript \u6709\u7c7b\u578b\u68c0\u67e5\u673a\u5236\uff0c\u6211\u4eec\u53ef\u4ee5\u5728\u5199\u4ee3\u7801\u7684\u65f6\u5019\u5c31\u80fd\u591f\u53d1\u73b0\u9519\u8bef\uff0c\u6bd4\u5982\u7ed9\u51fd\u6570\u8bef\u4f20\u4e86\u7c7b\u578b\u4e0d\u540c\u7684\u53c2\u6570\uff0c\u90a3\u4e48\u901a\u8fc7 VS Code \u5bf9 TypeScript \u7684\u5f3a\u529b\u652f\u6301\uff0c\u6211\u4eec\u80fd\u7acb\u523b\u770b\u5230\u9519\u8bef\u3002"),(0,p.kt)("li",{parentName:"ul"},"\u53e6\u5916 VS Code \u80fd\u6839\u636e TypeScript \u7684\u7c7b\u578b\u4fe1\u606f\u63d0\u4f9b\u66f4\u597d\u7684\u4ee3\u7801\u63d0\u793a\u548c\u8865\u5168\u529f\u80fd\u3002"),(0,p.kt)("li",{parentName:"ul"},"\u6b64\u5916\uff0c\u5bf9\u4e8e\u5927\u578b\u9879\u76ee\u3001\u591a\u4eba\u534f\u4f5c\u7f16\u5199\u4ee3\u7801\u65f6\uff0c\u7c7b\u578b\u8d77\u5230\u4e86\u6587\u6863\u7684\u4f5c\u7528\uff0c\u53ef\u4ee5\u6e05\u695a\u7684\u77e5\u9053\u6211\u8fd9\u4e2a\u53d8\u91cf\u662f\u4ec0\u4e48\u7c7b\u578b\uff0c\u6216\u8005\u6211\u5b9a\u4e49\u7684\u51fd\u6570\u9700\u8981\u4ec0\u4e48\u6837\u7684\u53c2\u6570\uff0c\u6211\u7684\u5bf9\u8c61\u91cc\u53c8\u6709\u54ea\u4e9b\u5c5e\u6027\u3002\u8fd9\u6837\u8ba9\u4ee3\u7801\u66f4\u6613\u4e8e\u7ef4\u62a4\uff0c\u8fd9\u4e5f\u662f\u4e3a\u4ec0\u4e48\u5927\u516c\u53f8\u3001\u5927\u578b\u9879\u76ee\u66f4\u504f\u7231 TypeScript"),(0,p.kt)("li",{parentName:"ul"},"\u6700\u540e TypeScript \u5165\u95e8\u7684\u95e8\u69db\u4f4e\uff0c\u53ea\u8981\u4f60\u4f1a JavaScript\uff0c\u90a3\u4e48\u4f60\u5c31\u5df2\u7ecf\u80fd\u7f16\u5199 TypeScript \u4ee3\u7801\u4e86\u3002\u53e6\u5916\u56e0\u4e3a JS \u7684\u5feb\u901f\u53d1\u5c55\uff0c\u597d\u591a\u4ee5\u524d\u5728 typescript \u624d\u80fd\u7528\u7684\u529f\u80fd\uff0c\u4f60\u53ef\u80fd\u5728 JS \u91cc\u5df2\u7ecf\u7528\u5230\u4e86\uff0c\u6240\u4ee5\u8bf4\u8981\u5b66\u4e60\u7684\u4e1c\u897f\u5c31\u66f4\u5c11\u4e86\u3002")),(0,p.kt)("p",null,"\u9664\u4e86\u8fd9\u4e9b\u597d\u5904\u4e4b\u5916\uff0c\u5b83\u4e5f\u6709\u5176\u4ed6\u9759\u6001\u7c7b\u578b\u8bed\u8a00\u6bd4\u5982 Java/c++ \u7684\u901a\u75c5\uff0c\u5c31\u662f\u4ee3\u7801\u91cf\u4f1a\u589e\u52a0\uff0c\u5e76\u4e14\u6709\u65f6\u5019\u7c7b\u578b\u8fc7\u4e8e\u590d\u6742\u53cd\u800c\u4f7f\u5f97\u4ee3\u7801\u663e\u7684\u66f4\u96be\u9605\u8bfb\uff0c\u4e0d\u8fc7\u8ddf\u5b83\u5e26\u6765\u7684\u4f18\u52bf\u76f8\u6bd4\uff0c\u4e5f\u663e\u5f97\u4e0d\u90a3\u4e48\u7a81\u51fa\u4e86\u3002"),(0,p.kt)("h2",{id:"\u7f16\u5199\u548c\u8fd0\u884c-ts-\u4ee3\u7801"},"\u7f16\u5199\u548c\u8fd0\u884c TS \u4ee3\u7801"),(0,p.kt)("p",null,"\u5728\u4e86\u89e3 TypeScript \u4e4b\u540e\uff0c\u6211\u4eec\u6765\u770b\u4e00\u4e0b\u600e\u4e48\u7f16\u5199\u548c\u8fd0\u884c TypeScript \u4ee3\u7801\u3002TypeScript \u4ee3\u7801\u56e0\u4e3a\u9700\u8981\u7f16\u8bd1\uff0c\u624d\u80fd\u751f\u6210\u53ef\u8fd0\u884c\u7684 JavaScript \u4ee3\u7801\uff0c\u6240\u4ee5\u9700\u8981\u5b89\u88c5\u7f16\u8bd1\u5668\u3002\u4e0d\u8fc7\u6700\u8fd1\u521a\u521a\u53d1\u5e03\u6b63\u5f0f\u7248\u7684 deno\uff0c \u539f\u751f\u652f\u6301 typescript \u7684\u7f16\u8bd1\u548c\u8fd0\u884c\uff0c\u6240\u4ee5\u5c31\u4e0d\u9700\u8981\u518d\u5b89\u88c5\u7f16\u8bd1\u5668\u4e86\u3002\u6211\u4f1a\u4ecb\u7ecd\u8fd9\u4e24\u79cd\u8fd0\u884c\u73af\u5883\u3002"),(0,p.kt)("h3",{id:"node-tsc"},"Node TSC"),(0,p.kt)("p",null,"\u9996\u5148\u770b\u4e00\u4e0b node.js \u73af\u5883\u3002\u786e\u4fdd\u4f60\u7684\u7535\u8111\u5df2\u7ecf\u5b89\u88c5\u4e86 node.js \uff0c\u7136\u540e\u4f7f\u7528\u547d\u4ee4 ",(0,p.kt)("inlineCode",{parentName:"p"},"npm install -g typescript"),"\xa0 \u628a typescript \u7f16\u8bd1\u5668\u5b89\u88c5\u5230\u5168\u5c40\uff0c\u8fd9\u6837\u6240\u6709 typescript \u9879\u76ee\u90fd\u53ef\u4ee5\u4f7f\u7528\u5b83\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-bash"},"npm install -g typescript\n")),(0,p.kt)("p",null,"\u5b89\u88c5\u5b8c\u6210\u4e4b\u540e\u4f7f\u7528 vs code \u6253\u5f00\u4e00\u4e2a\u7a7a\u7684\u6587\u4ef6\u5939\uff0c\u65b0\u5efa\u4e00\u4e2a index.ts \u6587\u4ef6\uff0c\u5199\u4e0a\u4e00\u4e9b\u793a\u4f8b\u4ee3\u7801\uff0c\u6211\u7a0d\u540e\u518d\u89e3\u91ca\u5b83\u7684\u542b\u4e49\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"let a: number = 10;\nconsole.log(a);\n")),(0,p.kt)("p",null,"\u5199\u5b8c\u4e4b\u540e\uff0c\u6253\u5f00\u547d\u4ee4\u884c\uff0c\u8f93\u5165\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-bash"},"tsc index.ts\n")),(0,p.kt)("p",null,"TypeScript \u7f16\u8bd1\u5668\u5c31\u4f1a\u628a ts \u6587\u4ef6\u7f16\u8bd1\u6210 js \u6587\u4ef6\uff0c\u53ef\u4ee5\u770b\u5230\u751f\u6210\u4e86 index.js\uff0c\u7136\u540e\u8fd0\u884c\u4e00\u4e0b:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-bash"},"node index.js\n")),(0,p.kt)("p",null,"\u6765\u770b\u4e00\u4e0b\u7ed3\u679c\uff0c\u663e\u793a\u8f93\u51fa\u4e86 10\u3002"),(0,p.kt)("h3",{id:"deno"},"Deno"),(0,p.kt)("p",null,"\u56e0\u4e3a Deno \u672c\u8eab\u5c31\u652f\u6301 TypeScript\uff0c\u6240\u4ee5\u53ea\u9700\u8981\u5b89\u88c5 Deno \u8fd0\u884c\u73af\u5883\u5c31\u53ef\u4ee5\u4e86\uff0cmac/linux \u548c windows \u4e0b\u90fd\u53ef\u4ee5\u4f7f\u7528\u4e00\u6761\u547d\u4ee4\u5b89\u88c5."),(0,p.kt)("p",null,"mac/linux"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-bash"},"curl -fsSL https://deno.land/x/install/install.sh | sh\n")),(0,p.kt)("p",null,"windows (powershell)"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-bash"},"iwr https://deno.land/x/install/install.ps1 -useb | iex\n")),(0,p.kt)("p",null,"\u5982\u679c\u5b89\u88c5\u5b8c\u63d0\u793a\u9700\u8981\u6dfb\u52a0\u73af\u5883\u53d8\u91cf\u7684\u8bdd\uff0c\u6309\u7167\u63d0\u793a\u6b65\u9aa4\u64cd\u4f5c\u5c31\u53ef\u4ee5\u4e86\u3002\u5b89\u88c5\u5b8c\u6210\u4e4b\u540e\uff0c\u76f4\u63a5\u4f7f\u7528\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-bash"},"deno run index.ts\n")),(0,p.kt)("p",null,"\u5c31\u53ef\u4ee5\u4e86\u3002\u540c\u6837\u7684\u4e5f\u8f93\u51fa\u4e86 10\u3002\u540e\u9762\u7684\u4f8b\u5b50\u6211\u4eec\u7ee7\u7eed\u4f7f\u7528 Node.js\u3002"),(0,p.kt)("h3",{id:"tsconfigjson"},"tsconfig.json"),(0,p.kt)("p",null,"\u6211\u4eec\u6253\u5f00 tsc \u751f\u6210\u7684 js \u6587\u4ef6\u770b\u4e00\u4e0b\uff0c\u53d1\u73b0\u91cc\u8fb9\u9664\u4e86\u53bb\u6389\u4e86\u7c7b\u578b\u4e4b\u5916\uff0c\u6ca1\u6709\u4ec0\u4e48\u53d8\u5316\u3002\u90a3\u4e48\uff0cJavaScript \u7248\u672c\u90a3\u4e48\u591a\uff0cTSC \u600e\u4e48\u77e5\u9053\u8981\u7f16\u8bd1\u6210\u54ea\u4e00\u7248\u5462\uff1f\u7b54\u6848\u662f\uff0cTSC ",(0,p.kt)("strong",{parentName:"p"},"\u9ed8\u8ba4"),"\u4f1a\u7f16\u8bd1\u6210 ES3 \u90a3\u4e00\u7248\u3002\u6211\u4eec\u53ef\u4ee5\u8bd5\u8bd5\u5199\u4e00\u4e2a async \u7684\u51fd\u6570\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-javascript"},"async function func() {}\n")),(0,p.kt)("p",null,"\u518d\u7f16\u8bd1\u4e00\u6b21\u770b\u770b\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-javascript"},"var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n// ...\n")),(0,p.kt)("p",null,"\u53d1\u73b0\u751f\u6210\u4e86\u597d\u591a\u590d\u6742\u7684\u4ee3\u7801\u6765\u652f\u6301 async\u3002\u90a3\u6211\u5982\u679c\u8981\u751f\u6210 ES2017 \u7684\u4ee3\u7801\u5462\uff1f\u6bd5\u7adf aync/await \u662f\u8fd9\u4e2a\u7248\u672c\u51fa\u73b0\u7684\uff1f\u7b54\u6848\u5f88\u7b80\u5355\uff0c\u5728\u9879\u76ee\u6839\u76ee\u5f55\u4e0b\u65b0\u5efa\u4e00\u4e2a ",(0,p.kt)("inlineCode",{parentName:"p"},"tsconfig.json"),"\xa0 \u6587\u4ef6\uff0c\u8fd9\u4e2a\u662f\u914d\u7f6e typescript \u9879\u76ee\u7684\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7 ",(0,p.kt)("inlineCode",{parentName:"p"},"compilerOptions"),"\xa0 \u5c5e\u6027\u6765\u914d\u7f6e tsc \u7f16\u8bd1\u5668\uff0c\u7136\u540e\u4f7f\u7528 ",(0,p.kt)("inlineCode",{parentName:"p"},"target"),"\xa0 \u5c5e\u6027\u6765\u6307\u5b9a\u8981\u7f16\u8bd1\u6210\u7684\u7248\u672c\uff0c\u90a3\u4e48\u8fd9\u91cc\u8bbe\u7f6e\u6210 ES2017\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "compilerOptions": {\n    "target": "ES2017"\n  }\n}\n')),(0,p.kt)("p",null,"\u4fdd\u5b58\u4e00\u4e0b\uff0c",(0,p.kt)("strong",{parentName:"p"},"\u73b0\u5728"),"\u518d\u8fd0\u884c tsc\uff0c\u540e\u8fb9\u5c31\u4e0d\u9700\u8981\u52a0\u6587\u4ef6\u540d\u4e86\uff0c\u56e0\u4e3a\u6709\u4e86 tsconfig \u6587\u4ef6\u4e4b\u540e\uff0c\u8fd9\u4e2a\u6587\u4ef6\u5939\u4f1a\u81ea\u52a8\u6210\u4e3a typescript \u9879\u76ee\uff0ctsc \u4f1a\u81ea\u52a8\u627e\u5230 ts \u6587\u4ef6\u8fdb\u884c\u7f16\u8bd1\uff0c\u5982\u679c\u6307\u5b9a\u4e86\u6587\u4ef6\u540d\uff0c\u90a3\u4e48\u8fd9\u4e2a tsconfig \u7684\u914d\u7f6e\u5c31\u4f1a\u88ab\u5ffd\u7565\u3002\u6253\u5f00\u751f\u6210\u7684 js \u6587\u4ef6\uff0c\u53d1\u73b0 aync \u7684\u51fd\u6570\u548c ts \u6e90\u4ee3\u7801\u91cc\u7684\u4e00\u6837\u4e86\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-javascript"},"let a = 10;\nconsole.log(a);\nasync function func() {}\n")),(0,p.kt)("h2",{id:"\u57fa\u672c\u8bed\u6cd5"},"\u57fa\u672c\u8bed\u6cd5"),(0,p.kt)("p",null,"TypeScript \u7684\u6838\u5fc3\u5c31\u662f\u7c7b\u578b\uff0c\u8fd9\u91cc\u54b1\u4eec\u91cd\u70b9\u770b\u4e00\u4e0b\u5b83\u7684\u8bed\u6cd5\u3002"),(0,p.kt)("h3",{id:"\u57fa\u672c\u7c7b\u578b"},"\u57fa\u672c\u7c7b\u578b"),(0,p.kt)("p",null,"TypeScript \u7684\u57fa\u672c\u7c7b\u578b\u8ddf JavaScript \u4e2d\u7684\u4fdd\u6301\u4e00\u81f4\uff0c\u6709 boolean, number, string, undefined, null \u7b49\u5e38\u7528\u7c7b\u578b\u3002\u7ed9\u53d8\u91cf\u5b9a\u4e49\u7c7b\u578b\u6709\u4e24\u79cd\u65b9\u5f0f\uff0c\u4e00\u79cd\u662f\u9690\u5f0f\u7684\uff0c\u4e00\u79cd\u662f\u663e\u5f0f\u7684\u3002"),(0,p.kt)("h4",{id:"\u9690\u5f0f"},"\u9690\u5f0f"),(0,p.kt)("p",null,"\u9690\u5f0f\u7c7b\u578b\u662f\u7531 TypeScript \u6839\u636e\u53d8\u91cf\u7684\u503c\u6765\u63a8\u65ad\u7c7b\u578b\uff0c\u8fd9\u6837\u7684\u8bdd\uff0c\u4ee3\u7801\u7684\u5199\u6cd5\u8ddf JS \u5c31\u4e00\u6837\u4e86\uff0c\u4f46\u4e0d\u540c\u7684\u662f\u5b83\u540e\u8fb9\u4e0d\u80fd\u7528",(0,p.kt)("strong",{parentName:"p"},"\u5176\u4ed6\u7c7b\u578b"),"\u7684\u503c\u6765\u7ed9\u4ed6",(0,p.kt)("strong",{parentName:"p"},"\u91cd\u65b0\u8d4b\u503c"),'\uff0c\u6bd4\u5982\u5b9a\u4e49\u4e00\u4e2a\u53d8\u91cf a\uff0c\u4e0d\u7ed9\u5b83\u6307\u5b9a\u7c7b\u578b\uff0c\u4f46\u662f\u7ed9\u5b83\u8d4b\u4e0a\u4e00\u4e2a\u6570\u5b57\u7c7b\u578b\u7684\u503c\uff0c10\uff0c\u7136\u540e\u518d\u628a\u5b83\u6539\u6210\u5b57\u7b26\u4e32\u7c7b\u578b\u7684"hello"\uff0c\u90a3\u4e48\u5c31\u4f1a\u4ea7\u751f\u7f16\u8bd1\u9519\u8bef\uff0c\u63d0\u793a"hello"\u5b57\u7b26\u4e32\u4e0d\u80fd\u8d4b\u503c\u7ed9\u6570\u5b57\u7c7b\u578b\uff1a'),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-javascript"},"let a = 10;\na = \"hello\";\n// error TS2322: Type '\"hello\"' is not assignable to type 'number'.\n")),(0,p.kt)("h4",{id:"\u663e\u5f0f"},"\u663e\u5f0f"),(0,p.kt)("p",null,"\u663e\u5f0f\u7c7b\u578b\u7684\u5b9a\u4e49\uff0c\u5c31\u8ddf\u4e4b\u524d\u8fd0\u884c\u7684 TS \u4ee3\u7801\u793a\u4f8b\u4e00\u6837\uff0c\u6211\u4eec\u7528 ",(0,p.kt)("inlineCode",{parentName:"p"},":"),"\xa0+ ",(0,p.kt)("inlineCode",{parentName:"p"},"\u7c7b\u578b"),"\xa0 \u6765\u663e\u5f0f\u7684\u89c4\u5b9a\uff0c\u8fd9\u4e2a\u53d8\u91cf\u662f\u4ec0\u4e48\u7c7b\u578b\u7684\uff0c\u6bd4\u5982\u5b9a\u4e49\u4e00\u4e2a boolean \u7c7b\u578b\u7684\u53d8\u91cf b\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-javascript"},"let b: boolean = true;\n")),(0,p.kt)("p",null,'\u5982\u679c\u60f3\u8ba9\u4e00\u4e2a\u53d8\u91cf\u53ef\u4ee5\u662f\u4efb\u4f55\u7c7b\u578b\u7684\uff0c\u5c31\u50cf JS \u4e2d\u53ef\u4ee5\u968f\u610f\u66f4\u6539\uff0c\u90a3\u4e48\u53ef\u4ee5\u628a\u5b83\u7684\u7c7b\u578b\u5b9a\u4e49\u4e3a any\uff0c\u4f8b\u5982\u5b9a\u4e49\u4e00\u4e2a\u53d8\u91cf a\uff0c\u7c7b\u578b\u4e3a any\uff0c\u5f00\u59cb\u7ed9\u5b83\u4e00\u4e2a\u6570\u5b57\u7c7b\u578b\u7684\u503c\uff0c10\uff0c\u7136\u540e\u518d\u6539\u6210"hello"\uff0c\u8fd9\u65f6\u5c31\u4e0d\u63d0\u793a\u9519\u8bef\u4e86:'),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-javascript"},'let a: any = 10;\na = "hello";\n')),(0,p.kt)("p",null,"\u7c7b\u578b\u4e5f\u53ef\u4ee5\u7528\u5728\u51fd\u6570\u7684\u53c2\u6570\u548c\u8fd4\u56de\u503c\u4e2d\uff0c\u6bd4\u5982\u5b9a\u4e49\u4e00\u4e2a\u52a0\u6cd5\u51fd\u6570\uff0c\u5b83\u63a5\u6536\u4e00\u4e2a\u53c2\u6570 a\uff0c\u7c7b\u578b\u662f number\uff0c\u8fd8\u63a5\u6536\u53c2\u6570 b\uff0c\u4e5f\u662f number \u7c7b\u578b\uff0c\u6700\u540e\u8fd4\u56de\u503c\u7c7b\u578b\u4e5f\u662f number\uff0c\u8fd4\u56de\u503c\u7684\u7c7b\u578b\u5b9a\u4e49\u5728\u53c2\u6570\u5217\u8868\u7684\u5c0f\u62ec\u53f7\u540e\u8fb9\uff0c\u7136\u540e\u5b83\u7684\u540e\u8fb9\u624d\u662f\u51fd\u6570\u4f53\uff0c\u91cc\u8fb9\u76f4\u63a5\u8fd4\u56de a + b\uff0c\u8fd4\u56de\u503c\u7684\u7c7b\u578b\u53ef\u4ee5\u7701\u7565\uff0c\u56e0\u4e3a typescript \u53ef\u4ee5\u6839\u636e a+b \u63a8\u65ad\u51fa\u5b83\u7684\u8fd4\u56de\u503c\u4e5f\u662f number \u7c7b\u578b\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-javascript"},"function add(a: number, b: number): number {\n  return a + b;\n}\n")),(0,p.kt)("p",null,"\u8fd9\u91cc\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 add(1, 2)\u6765\u6b63\u5e38\u8c03\u7528\u8fd9\u4e2a\u51fd\u6570\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-javascript"},"add(1, 2);\n")),(0,p.kt)("p",null,"\u5982\u679c\u4f7f\u7528\u4e00\u4e2a\u5b57\u7b26\u4e32\u7c7b\u578b\u7684\u53d8\u91cf\u6765\u63a5\u6536\u51fd\u6570\u7684\u8fd4\u56de\u503c\uff0c\u90a3\u4e48\u5c31\u4f1a\u51fa\u9519\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-javascript"},"let res: string = add(1, 2);\n")),(0,p.kt)("p",null,"\u63d0\u793a\uff1a ",(0,p.kt)("inlineCode",{parentName:"p"},"Type 'number' is not assignable to type 'string'."),"\xa0number \u7c7b\u578b\u4e0d\u80fd\u8d4b\u7ed9 String \u7c7b\u578b\u3002"),(0,p.kt)("p",null,"\u5982\u679c\u7ed9\u51fd\u6570\u4f20\u9012\u4e00\u4e2a\u5b57\u7b26\u4e32\u8fdb\u53bb\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-javascript"},'add("1", 2);\n')),(0,p.kt)("p",null,"\u90a3\u4e48\u7f16\u8bd1\u5668\u5c31\u4f1a\u63d0\u793a ",(0,p.kt)("inlineCode",{parentName:"p"},"Argument of type '\"1\"' is not assignable to parameter of type 'number'"),'\xa0 \u5b57\u7b26\u4e32"1"\u4e0d\u80fd\u4f20\u7ed9 number \u7c7b\u578b\u7684\u53c2\u6570\u3002\n\u53e6\u5916\u8c03\u7528\u51fd\u6570\u65f6\uff0c\u5fc5\u987b\u4f20\u9012\u8ddf\u53c2\u6570\u5217\u8868\u6570\u91cf\u76f8\u540c\u7684\u53c2\u6570\uff0c\u4e0d\u50cf JS\uff0c\u53ef\u4ee5\u4e0d\u4f20\u6216\u53ea\u4f20\u524d\u8fb9\u51e0\u4e2a\u53c2\u6570\uff0c\u8fd9\u91cc\u5982\u679c\u53ea\u4f20\u4e00\u4e2a\u53c2\u6570\u7684\u8bdd\uff1a'),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-javascript"},"add(1);\n")),(0,p.kt)("p",null,"\u4f1a\u63d0\u793a ",(0,p.kt)("inlineCode",{parentName:"p"},"An argument for 'b' was not provided."),"\xa0 \u6ca1\u6709\u7ed9 b \u4f20\u503c\u3002\n\u6700\u540e\uff0c\u5982\u679c\u51fd\u6570\u4e0d\u8fd4\u56de\u503c\u7684\u8bdd\uff0c\u53ef\u4ee5\u4f7f\u7528 void \u7c7b\u578b\u4ee3\u8868\u51fd\u6570\u6ca1\u6709\u8fd4\u56de\u503c\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-javascript"},"function printLog(log: string): void {\n  console.log(log);\n}\n")),(0,p.kt)("h3",{id:"\u7ec4\u5408\u7c7b\u578b"},"\u7ec4\u5408\u7c7b\u578b"),(0,p.kt)("p",null,"\u5982\u679c\u4e00\u4e2a\u53d8\u91cf\u53ef\u4ee5\u6709\u591a\u4e2a\u7c7b\u578b\uff0c\u4f46\u662f\u53c8\u4e0d\u60f3\u4f7f\u7528 any \u7834\u574f\u7c7b\u578b\u68c0\u67e5\uff0c\u90a3\u4e48\u53ef\u4ee5\u4f7f\u7528\u7ec4\u5408\u7c7b\u578b\uff0c\u7ec4\u5408\u7c7b\u578b\u4f7f\u7528\u4e00\u6761\u7ad6\u7ebf\uff0c\u4e5f\u5c31\u662f\u6216\u64cd\u4f5c\u7b26\uff0c\u6765\u5b9a\u4e49\uff0c\u6bd4\u5982\u4e00\u4e2a\u53d8\u91cf\u65e2\u53ef\u4ee5\u662f number \u4e5f\u53ef\u4ee5\u662f string \u7c7b\u578b\uff0c\u90a3\u4e48\u53ef\u4ee5\u8fd9\u6837\u6765\u5b9a\u4e49\uff0c\u7ed9\u5b83\u8d4b\u4e0a\u4e00\u4e2a\u6570\u5b57\u7c7b\u578b\u7684\u503c 10\uff0c\u7136\u540e\u540e\u8fb9\u4fee\u6539\u6210\u5b57\u7b26\u4e32\u4e5f\u6ca1\u95ee\u9898\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-javascript"},'let a: number | string = 10;\na = "hello";\n')),(0,p.kt)("h4",{id:"\u7c7b\u578b\u522b\u540d"},"\u7c7b\u578b\u522b\u540d"),(0,p.kt)("p",null,"\u8fd9\u6837\u4ee3\u7801\u770b\u8d77\u6765\u4e0d\u592a\u65b9\u4fbf\uff0c\u5e76\u4e14\u8fd9\u4e2a\u7ec4\u5408\u7c7b\u578b\u53ea\u80fd\u7ed9 a \u4f7f\u7528\uff0c\u5982\u679c\u6709\u4e00\u4e2a\u53d8\u91cf b \u4e5f\u53ef\u4ee5\u540c\u65f6\u662f number \u6216 string \u7684\u7c7b\u578b\u7684\u8bdd\uff0c\u8fd8\u8981\u91cd\u590d\u5b9a\u4e49\u8fd9\u4e2a\u7c7b\u578b\u3002\u8981\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 type \u5173\u952e\u5b57\u6765\u7ed9\u8fd9\u4e2a\u7ec4\u5408\u7c7b\u578b\u8d77\u4e2a\u522b\u540d\uff0c\u8ba9\u4ee3\u7801\u66f4\u6613\u8bfb\uff0c\u4e5f\u65b9\u4fbf\u5176\u4ed6\u53d8\u91cf\u4f7f\u7528\uff0c\u8fd9\u91cc\u5b9a\u4e49\u4e00\u4e2a type \u540d\u5b57\u53eb NumStr\uff0c\u81ea\u5b9a\u4e49\u7684\u7c7b\u578b\u540d\u5b57\u63a8\u8350\u9996\u5b57\u6bcd\u5927\u5199\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"type NumStr = number | string;\n")),(0,p.kt)("p",null,"\u7136\u540e a \u53d8\u91cf\u5c31\u53ef\u4ee5\u8fd9\u6837\u5b9a\u4e49\uff0c\u7ed9\u5b83\u4e00\u4e2a\u6570\u5b57\u503c\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"let a: NumStr = 10;\n")),(0,p.kt)("p",null,"\u540c\u6837\u4e5f\u53ef\u4ee5\u518d\u5b9a\u4e49\u4e00\u4e2a b \u53d8\u91cf\uff0c\u7ed9\u5b83\u4e00\u4e2a\u5b57\u7b26\u4e32\u503c\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},'let b: NumStr = "hello";\n')),(0,p.kt)("p",null,'\u53e6\u5916\uff0c\u7ec4\u5408\u7c7b\u578b\u4e5f\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528\u5b57\u9762\u503c\u6765\u5b9a\u4e49\uff0c\u8fd9\u6837\u5c31\u89c4\u5b9a\u4e86\u4e00\u4e2a\u53d8\u91cf\u7684\u53d6\u503c\u8303\u56f4\uff0c\u6bd4\u5982\u6211\u60f3\u8ba9\u4e00\u4e2a\u5b57\u7b26\u4e32\u7c7b\u578b\u7684\u53d8\u91cf c\uff0c\u53ea\u80fd\u53d6"on"\u6216"off"\u4e24\u8005\u4e4b\u4e00\uff0c\u90a3\u4e48\u6211\u4eec\u53ef\u4ee5\u8fd9\u6837\u5b9a\u4e49\uff0c\u5728 c \u540e\u8fb9\u76f4\u63a5\u4f7f\u7528"on" | "off" \u6765\u5b9a\u4e49\u5b83\u80fd\u53d6\u7684\u503c\uff1a'),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},'let c: "on" | "off" = "on";\n')),(0,p.kt)("p",null,'\u73b0\u5728\u5b83\u7684\u503c\u662f on\uff0c\u5982\u679c\u7ed9\u5b83\u8d4b\u503c off \u662f\u53ef\u4ee5\u7684\uff0c\u4f46\u662f\u8d4b\u5176\u4ed6\u503c\u5c31\u4f1a\u51fa\u9519\uff0c\u6bd4\u5982\u7ed9\u5b83\u8d4b\u4e00\u4e2a"other"\u5b57\u7b26\u4e32\uff1a'),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},'let c: "on" | "off" = "on";\n\nc = "off";\n\nc = "other";\n')),(0,p.kt)("p",null,"\u63d0\u793a ",(0,p.kt)("inlineCode",{parentName:"p"},'error TS2322: Type \'"other"\' is not assignable to type \'"on" | "off"\'.'),'\xa0other \u4e0d\u80fd\u8d4b\u503c\u7ed9\u7528 "on" \u6216 "off" \u5b9a\u4e49\u7684\u7c7b\u578b\u91cc\u8fb9\u3002'),(0,p.kt)("h3",{id:"\u5bf9\u8c61\u7c7b\u578binterface"},"\u5bf9\u8c61\u7c7b\u578b(interface)"),(0,p.kt)("p",null,"\u4e0a\u8fb9\u4ecb\u7ecd\u7684\u90fd\u662f\u57fa\u672c\u7c7b\u578b\uff0c\u90a3\u4e48\u5982\u679c\u8981\u68c0\u67e5\u5bf9\u8c61\u91cc\u7684\u5c5e\u6027\u662f\u4e0d\u662f\u7b26\u5408\u89c4\u8303\u5462\uff1f\u90a3\u5c31\u8981\u4f7f\u7528 interface\uff0c\u63a5\u53e3\u4e86\u3002\u63a5\u53e3\u662f\u7528\u6765\u89c4\u8303\u4e00\u4e2a\u5bf9\u8c61\u91cc\u5e94\u8be5\u90fd\u6709\u54ea\u4e9b\u5c5e\u6027\uff0c\u5305\u62ec\u5b83\u7684\u540d\u5b57\uff0c\u8fd8\u6709\u5b83\u7684\u7c7b\u578b\u3002\u6211\u4eec\u6765\u770b\u4e00\u4e2a\u4f8b\u5b50\uff0c\u6bd4\u5982\u6709\u4e00\u4e2a post \u6587\u7ae0\u5bf9\u8c61\uff0c\u6211\u60f3\u8ba9\u5b83\u6709 title \u548c author \u5c5e\u6027\uff0c\u5e76\u4e14\u90fd\u662f string \u7c7b\u578b\u7684\uff0c\u90a3\u4e48\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528\u63a5\u53e3\u6765\u5b9a\u4e49\u4e00\u4e2a Post \u7c7b\u578b\uff0c\u4f7f\u7528 interface \u5173\u952e\u5b57\uff0c\u540e\u8fb9\u662f\u63a5\u53e3\u7684\u540d\u5b57\uff0c\u8fd9\u91cc\u53eb Post\uff0c\u7136\u540e\u540e\u8fb9\u8ddf\u4e00\u5bf9\u5927\u62ec\u53f7\uff0c\u91cc\u8fb9\u5199\u4e0a\u8be5\u6709\u7684\u5c5e\u6027\u548c\u7c7b\u578b\uff0c\u6ce8\u610f\u6bcf\u4e2a\u5c5e\u6027\u540e\u8fb9\u7528\u5206\u53f7\u7ed3\u5c3e\uff0c\u4e0d\u662f\u9017\u53f7\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"interface Post {\n  title: string;\n  author: string;\n}\n")),(0,p.kt)("p",null,"\u63a5\u7740\u5b9a\u4e49\u4e00\u4e2a post \u5bf9\u8c61\uff0c\u8ba9\u5b83\u4f7f\u7528 Post \u63a5\u53e3\u7c7b\u578b\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},'let post: Post = {\n  title: "\u6807\u9898",\n  author: "fh",\n};\n')),(0,p.kt)("p",null,'\u8fd9\u91cc\u6ca1\u6709\u95ee\u9898\uff0c\u5982\u679c\u518d\u6dfb\u52a0\u4e00\u4e2a"publishDate"\u5c5e\u6027\uff0c\u90a3\u4e48\u5c31\u4f1a\u51fa\u73b0\u9519\u8bef'),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},'let post: Post = {\n  title: "\u6807\u9898",\n  author: "fh",\n  publishDate: "2020-06-01",\n};\n')),(0,p.kt)("p",null,"\u63d0\u793a ",(0,p.kt)("inlineCode",{parentName:"p"},"error TS2322: Type '{ title: string; author: string; publishDate: string; }' is not assignable to type 'Post'. Object literal may only specify known properties, and 'publishDate' does not exist in type 'Post'."),"\xa0 \u8bf4\u5bf9\u8c61\u91cc\u8fb9\u53ea\u80fd\u5305\u62ec\u63a5\u53e3\u91cc\u5b9a\u4e49\u7684\u5c5e\u6027\u3002\u540c\u6837\u7684\uff0c\u5c11\u5b9a\u4e49\u4e00\u4e2a\u5c5e\u6027\uff0c\u4f8b\u5982\u53bb\u6389 title \u5c5e\u6027\uff0c\u4f1a\u63d0\u793a ",(0,p.kt)("inlineCode",{parentName:"p"},"Property 'title' is missing in type '{ author: string; }' but required in type 'Post'."),"\xa0 \u7f3a\u5c11 title \u5c5e\u6027\u3002"),(0,p.kt)("h4",{id:"\u63a5\u53e3\u4f5c\u4e3a\u51fd\u6570\u53c2\u6570\u7c7b\u578b"},"\u63a5\u53e3\u4f5c\u4e3a\u51fd\u6570\u53c2\u6570\u7c7b\u578b"),(0,p.kt)("p",null,"\u63a5\u53e3\u9664\u4e86\u53ef\u4ee5\u67e5\u68c0\u5bf9\u8c61\u662f\u5426\u7b26\u5408\u89c4\u8303\u5916\uff0c\u4e5f\u53ef\u4ee5\u7528\u4e8e\u51fd\u6570\u53c2\u6570\u7684\u7c7b\u578b\u68c0\u67e5\uff0c\u8fd9\u91cc\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u5982\u679c\u4f20\u9012\u8fdb\u6765\u7684\u5bf9\u8c61\u6ca1\u6709\u5b9a\u4e49\u7c7b\u578b\u7684\u8bdd\uff0c\u90a3\u4e48",(0,p.kt)("strong",{parentName:"p"},"\u53ea\u8981\u5b83\u7684\u5c5e\u6027\u6ee1\u8db3\u63a5\u53e3\u4e2d\u7684\u89c4\u8303\uff0c\u5c31\u53ef\u4ee5\u901a\u8fc7\u67e5\u68c0"),"\uff0c",(0,p.kt)("strong",{parentName:"p"},"\u54ea\u6015\u5b83\u6709\u989d\u5916\u7684\u5c5e\u6027"),"\uff0c\u6bd4\u5982\uff0c\u6709\u4e00\u4e2a\u51fd\u6570\u63a5\u6536 post \u7c7b\u578b\u7684\u53c2\u6570\uff0c\u91cc\u8fb9\u83b7\u53d6\u5b83\u7684 title \u5c5e\u6027\u5e76\u6253\u5370\u51fa\u6765\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"function getTitle(post: Post) {\n  console.log(post.title);\n}\n")),(0,p.kt)("p",null,"\u7136\u540e\u5b9a\u4e49\u4e00\u4e2a post \u53d8\u91cf\uff0c\u4e0d\u6307\u5b9a\u7c7b\u578b\uff0c\u7136\u540e\u8fd8\u5305\u62ec\u989d\u5916\u7684 ",(0,p.kt)("inlineCode",{parentName:"p"},"publishDate"),"\xa0 \u5c5e\u6027:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},'let post = { title: "\u6807\u9898", author: "fh", publishDate: "2020-06-01" };\n')),(0,p.kt)("p",null,"\u5b9a\u4e49\u597d\u4e4b\u540e\u628a\u5b83\u4f20\u7ed9 getTitle \u51fd\u6570\uff0c\u53d1\u73b0\u6ca1\u6709\u95ee\u9898\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"getTitle(post);\n")),(0,p.kt)("p",null,"\u5982\u679c\u60f3\u4e25\u683c\u68c0\u67e5\u5bf9\u8c61\u53c2\u6570\u7684\u8bdd\uff0c\u53ef\u4ee5\u50cf\u4e4b\u524d\u90a3\u6837\u628a post \u53d8\u91cf\u5b9a\u4e49\u4e3a Post \u63a5\u53e3\u7c7b\u578b\u7684\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},'let post: Post = { title: "\u6807\u9898", author: "fh", publishDate: "2020-06-01" };\n')),(0,p.kt)("p",null,"\u6216\u8005\u76f4\u63a5\u7ed9\u51fd\u6570\u4f20\u9012\u5bf9\u8c61\u5b57\u9762\u503c\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},'getTitle({ title: "\u6807\u9898", author: "fh", publishDate: "2020-06-01" });\n')),(0,p.kt)("p",null,"\u8fd9\u6837\u5c31\u4f1a\u63d0\u793a\u51fa\u9519\u3002"),(0,p.kt)("h3",{id:"\u6570\u7ec4\u7c7b\u578b"},"\u6570\u7ec4\u7c7b\u578b"),(0,p.kt)("p",null,"\u7ed9\u6570\u7ec4\u89c4\u5b9a\u7c7b\u578b\u53ef\u4ee5\u4fdd\u8bc1\u91cc\u9762\u7684\u5143\u7d20\u90fd\u662f\u540c\u4e00\u7c7b\u578b\uff0c\u4ee5\u9632\u5728\u7edf\u4e00\u5904\u7406\u6570\u7ec4\u5143\u7d20\u65f6\uff0c\u6df7\u8fdb\u6765\u5176\u4ed6\u7c7b\u578b\u7684\u5143\u7d20\uff0c\u5bfc\u81f4\u5f02\u5e38\uff0c\u6216\u8005\u9632\u6b62\u610f\u5916\u7ed9\u6570\u7ec4\u5143\u7d20\u8d4b\u4e86\u5176\u4ed6\u7c7b\u578b\u7684\u503c\u3002\u8981\u7ed9\u6570\u7ec4\u5b9a\u4e49\u7c7b\u578b\uff0c\u53ea\u9700\u8981\u5728\u7c7b\u578b\u540e\u8fb9\u52a0\u4e0a\u4e00\u5bf9\u7a7a\u7684\u65b9\u62ec\u53f7\u5c31\u53ef\u4ee5\u4e86\uff0c\u6bd4\u5982\u5b9a\u4e49\u4e00\u4e2a number \u7c7b\u578b\u7684\u6570\u7ec4\u53ef\u4ee5\u8fd9\u6837:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"let arr: number[] = [1, 2, 3];\n")),(0,p.kt)("h4",{id:"\u6cdb\u578b"},"\u6cdb\u578b"),(0,p.kt)("p",null,"\u8fd8\u6709\u4e00\u79cd\u65b9\u5f0f\u662f\u4f7f\u7528\u6cdb\u578b\uff0c\u6cdb\u578b\u662f\u5c5e\u4e8e\u9762\u5411\u5bf9\u8c61\u8bed\u8a00\u4e2d\u6bd4\u8f83\u9ad8\u7ea7\u7684\u7279\u6027\uff0c\u8fd9\u91cc\u7b80\u5355\u77e5\u9053\u4e00\u4e0b\u600e\u4e48\u4f7f\u7528\u5c31\u53ef\u4ee5\u4e86\uff0c\u8fd9\u91cc\u628a\u6cdb\u578b\u5e94\u7528\u5728\u6570\u7ec4\u8eab\u4e0a\uff0c\u540c\u6837\u53ef\u4ee5\u7528\u6765\u89c4\u5b9a\u6570\u7ec4\u91cc\u5143\u7d20\u7684\u7c7b\u578b\uff0c\u53ea\u662f\u8fd9\u91cc\u8981\u4f7f\u7528 Array class\uff0c\u6216\u8005\u8bf4\u662f\u6784\u9020\u51fd\u6570\uff0c\u6765\u5b9a\u4e49\uff0c\u6bd4\u5982\u540c\u6837\u7684 arr\uff0c\u4f7f\u7528\u6cdb\u578b\u7684\u8bdd\uff0c\u5c31\u628a number[] \u6539\u6210 Array \u6784\u9020\u51fd\u6570\u7684\u540d\u5b57\uff0c\u540e\u8fb9\u8ddf\u4e00\u4e2a\u5c16\u62ec\u53f7\uff0c\u91cc\u8fb9\u662f\u7c7b\u578b number\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"let arr: Array<number> = [1, 2, 3];\n")),(0,p.kt)("h4",{id:"tuple\uff08\u5143\u7ec4\uff09"},"tuple\uff08\u5143\u7ec4\uff09"),(0,p.kt)("p",null,"TypeScript \u91cc\u8fd8\u6709\u4e00\u4e2a\u6982\u5ff5\uff0c\u53eb tuple\uff0c\u5143\u7ec4\uff0c\u5b83\u662f\u4e00\u4e2a\u6709\u9650\u5143\u7d20\u6570\u91cf\u7684\u6570\u7ec4\uff0c\u4f46\u662f\u5462\u6bcf\u4e2a\u5143\u7d20\u9700\u8981\u5206\u522b\u6307\u5b9a\u662f\u4ec0\u4e48\u7c7b\u578b\uff0c\u6bd4\u5982\u6211\u8fd9\u91cc\u6709\u4e00\u4e2a\u4e09\u5143\u7ec4\uff0c\u5c31\u662f\u8bf4\u8fd9\u4e2a\u6570\u7ec4\u6709\u4e09\u4e2a\u5143\u7d20\uff0c\u7136\u540e\u6211\u89c4\u5b9a\u7b2c\u4e00\u4e2a\u5143\u7d20\u662f number \u7c7b\u578b\uff0c\u7b2c\u4e8c\u4e2a\u5143\u7d20\u662f string \u7c7b\u578b\uff0c\u7b2c\u4e09\u4e2a\u5143\u7d20\u662f boolean \u5e03\u5c14\u7c7b\u578b\uff0c\u90a3\u4e48\u53ef\u4ee5\u8fd9\u6837\u5b9a\u4e49 ",(0,p.kt)("inlineCode",{parentName:"p"},"let tup: [number, string, boolean]"),"\xa0\uff0c\u7136\u540e\u7ed9\u5b83\u8d4b\u4e0a\u5408\u9002\u7684\u503c ",(0,p.kt)("inlineCode",{parentName:"p"},'[1, "fh", true]'),"\xa0\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},'let tup: [number, string, boolean] = [1, "fh", true];\n')),(0,p.kt)("h2",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),(0,p.kt)("p",null,"\u597d\u4e86\uff0c\u5230\u8fd9\u91cc\u6211\u4eec\u4ecb\u7ecd\u4e86\uff1a"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"\u4ec0\u4e48\u662f TypeScript"),(0,p.kt)("li",{parentName:"ul"},"\u4e3a\u4ec0\u4e48\u8981\u5b66 TypeScript \u548c\u5b83\u6709\u4ec0\u4e48\u4f18\u70b9"),(0,p.kt)("li",{parentName:"ul"},"\u600e\u6837\u7f16\u5199\u548c\u8fd0\u884c TypeScript \u4ee3\u7801"),(0,p.kt)("li",{parentName:"ul"},"\u4ee5\u53ca\u5b83\u7684\u4e00\u4e9b\u57fa\u672c\u7684\u5e76\u4e14\u5e38\u7528\u7684\u8bed\u6cd5\u70b9")),(0,p.kt)("p",null,"\u8fd9\u6837\u4f60\u5c31\u80fd\u5bf9 TypeScript \u6709\u5927\u4f53\u7684\u8ba4\u8bc6\u4e86\uff0c\u4e5f\u80fd\u7f16\u5199\u7b80\u5355\u7684 TypeScript \u5e94\u7528\u5e76\u4e14\u770b\u61c2\u4e00\u90e8\u5206\u5176\u4ed6\u4eba\u7684\u4ee3\u7801\u4e86\u3002\u5230\u8fd9\u91cc\u4f60\u53ef\u80fd\u53d1\u73b0 TypeScript \u5e26\u6765\u7684\u529f\u80fd\u7279\u6027\u90fd\u662f\u96f6\u6563\u7684\uff0c\u56e0\u4e3a\u5b83\u672c\u8eab\u5c31\u662f\u7ed9 JS \u6dfb\u7816\u52a0\u74e6\uff0c\u6240\u4ee5\u5b83\u7684\u8bed\u6cd5\u70b9\u9010\u4e00\u7a81\u7834\u5c31\u597d\u4e86\u3002"))}k.isMDXComponent=!0}}]);