(self.webpackChunkzxuqian_cn=self.webpackChunkzxuqian_cn||[]).push([[8743],{2122:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,{Z:function(){return r}})},9756:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}n.d(t,{Z:function(){return r}})},3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),s=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,k=d["".concat(o,".").concat(m)]||d[m]||c[m]||l;return n?r.createElement(k,u(u({ref:t},p),{},{components:n})):r.createElement(k,u({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,u=new Array(l);u[0]=d;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:a,u[1]=i;for(var s=2;s<l;s++)u[s]=n[s];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3919:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return a}})},4996:function(e,t,n){"use strict";n.d(t,{C:function(){return l},Z:function(){return u}});var r=n(2263),a=n(3919);function l(){var e=(0,r.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,l=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var l=void 0===r?{}:r,u=l.forcePrependBaseUrl,i=void 0!==u&&u,o=l.absolute,s=void 0!==o&&o;if(!n)return n;if(n.startsWith("#"))return n;if((0,a.b)(n))return n;if(i)return t+n;var p=n.startsWith(t)?n:t+n.replace(/^\//,"");return s?e+p:p}(l,n,e,t)}}}function u(e,t){return void 0===t&&(t={}),(0,l().withBaseUrl)(e,t)}},7431:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return o},metadata:function(){return s},toc:function(){return p},default:function(){return d}});var r=n(2122),a=n(9756),l=(n(7294),n(3905)),u=n(4996),i={slug:"deploy-a-docusaurus-site",title:"\u4f7f\u7528 Docusaurus \u642d\u5efa\u4e2a\u4eba\u535a\u5ba2\u6559\u7a0b\uff08\u4e00\uff09",author:"\u5cf0\u534e",author_title:"\u524d\u7aef\u5de5\u7a0b\u5e08 / B\u7ad9UP\u4e3b",author_url:"https://github.com/zxuqian",author_image_url:"https://tvax3.sinaimg.cn/crop.0.0.1080.1080.180/b2745d44ly8g8s4muqeggj20u00u0n0k.jpg?KID=imgbed,tva&Expires=1582389585&ssig=EvXmyu%2FXsX",tags:["\u524d\u7aef","\u804c\u4e1a"],bvid:"av93748753",oid:"93748753"},o=void 0,s={permalink:"/en/deploy-a-docusaurus-site",source:"@site/blog/2020-03-03-deploy-a-docusaurus-site.md",title:"\u4f7f\u7528 Docusaurus \u642d\u5efa\u4e2a\u4eba\u535a\u5ba2\u6559\u7a0b\uff08\u4e00\uff09",description:"\u6211\u4ee5\u524d\u603b\u4e5f\u627e\u4e0d\u5230\u4e00\u4e2a\u6ee1\u610f\u7684\u535a\u5ba2\u7cfb\u7edf\uff0cwordpress \u8fd9\u4e2a\u7a0b\u5e8f\u53c8\u5927\uff0c\u7136\u540e\u914d\u7f6e\u4e5f\u4e0d\u65b9\u4fbf\u3002\u5360\u7528\u7684\u670d\u52a1\u5668\u7684\u8d44\u6e90\u4e5f\u591a\u3002\u6211\u5c31\u60f3\u6709\u6ca1\u6709\u4e00\u4e2a\u53c8\u7b80\u5355\u53c8\u5feb\u901f\u7684\u535a\u5ba2\u5e73\u53f0\uff0c\u540e\u6765\u53d1\u73b0\u4e86\u4e00\u4e9b\u9759\u6001\u7684\u7f51\u7ad9\u751f\u6210\u5668\uff0c\u50cf hexo \u8fd9\u79cd\uff0c\u4f46\u662f\u53d1\u73b0\u4e0a\u9762\u7684\u4e3b\u9898\u53c8\u4e0d\u597d\u770b\uff0c\u53c8\u61d2\u5f97\u81ea\u5df1\u53bb\u5199\u3002\u540e\u6765\u5c31\u6709\u4e00\u9635\u5b50\u6211\u5c31\u76f4\u63a5\u628a\u535a\u5ba2\u5c31\u53d1\u5e03\u5728\u4e86\u5176\u4ed6\u7684\u7b2c\u4e09\u65b9\u7684\u535a\u5ba2\u5e73\u53f0\u4e0a\u3002\u73b0\u5728\u53d1\u73b0\u4e86\u8fd9\u4e2a docusaurus, \u5b83\u7684\u4e3b\u9898\u8ddf\u6211\u4e4b\u524d\u770b\u5230\u7684\u4e00\u4e2a\u5927\u4f6c Dan Abramov\uff0c\u5b83\u7684 overreacted.io \u535a\u5ba2\uff0c\u98ce\u683c\u662f\u4e00\u6a21\u4e00\u6837\u7684\uff0c\u56e0\u4e3a\u4ed6\u662f react \u7684\u4f5c\u8005\u4e4b\u4e00\uff0c\u4f30\u8ba1\u8fd9\u4e2a\u4ed6\u4eec\u8fd9\u4e2a\u6837\u5f0f\u90fd\u662f\u4e92\u76f8\u501f\u9274\uff0c\u5b83\u8fd9\u4e2a\u4e3b\u9898\u53ef\u4ee5\u5207\u6362\u6697\u9ed1\u548c\u767d\u5929\u6a21\u5f0f\uff0c\u6bd4\u8f83\u597d\u770b\u3002\u5b89\u88c5\u548c\u90e8\u7f72\u4e5f\u7279\u522b\u7b80\u5355\uff0c\u6211\u7684\u535a\u5ba2\u4e5f\u662f\u7528\u5b83\u8fd9\u4e2a\u642d\u5efa\u7684\u3002",date:"2020-03-03T00:00:00.000Z",formattedDate:"March 3, 2020",tags:[{label:"\u524d\u7aef",permalink:"/en/tags/\u524d\u7aef"},{label:"\u804c\u4e1a",permalink:"/en/tags/\u804c\u4e1a"}],readingTime:1.975,truncated:!0,prevItem:{title:"\u4f7f\u7528 Docusaurus \u642d\u5efa\u4e2a\u4eba\u535a\u5ba2\u6559\u7a0b\uff08\u4e8c\uff09",permalink:"/en/deploy-a-docusaurus-site-part2"},nextItem:{title:"\u7a0b\u5e8f\u5458\u5982\u4f55\u63d0\u5347\u82f1\u8bed\u6c34\u5e73",permalink:"/en/learning-english-for-coders"}},p=[{value:"\u535a\u5ba2\u6709\u5565\u7528\uff1f",id:"\u535a\u5ba2\u6709\u5565\u7528\uff1f",children:[]},{value:"Docusaurus \u7b80\u4ecb",id:"docusaurus-\u7b80\u4ecb",children:[]},{value:"\u5b89\u88c5\u8fd0\u884c\u73af\u5883",id:"\u5b89\u88c5\u8fd0\u884c\u73af\u5883",children:[{value:"\u5b89\u88c5 docusaurus",id:"\u5b89\u88c5-docusaurus",children:[]},{value:"\u8fd0\u884c docusaurus",id:"\u8fd0\u884c-docusaurus",children:[]},{value:"\u9879\u76ee\u7ed3\u6784",id:"\u9879\u76ee\u7ed3\u6784",children:[]},{value:"\u914d\u7f6e\u4e3a\u535a\u5ba2\u6a21\u5f0f",id:"\u914d\u7f6e\u4e3a\u535a\u5ba2\u6a21\u5f0f",children:[]},{value:"\u53d1\u8868\u7b2c\u4e00\u7bc7\u535a\u5ba2",id:"\u53d1\u8868\u7b2c\u4e00\u7bc7\u535a\u5ba2",children:[]}]}],c={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u6211\u4ee5\u524d\u603b\u4e5f\u627e\u4e0d\u5230\u4e00\u4e2a\u6ee1\u610f\u7684\u535a\u5ba2\u7cfb\u7edf\uff0cwordpress \u8fd9\u4e2a\u7a0b\u5e8f\u53c8\u5927\uff0c\u7136\u540e\u914d\u7f6e\u4e5f\u4e0d\u65b9\u4fbf\u3002\u5360\u7528\u7684\u670d\u52a1\u5668\u7684\u8d44\u6e90\u4e5f\u591a\u3002\u6211\u5c31\u60f3\u6709\u6ca1\u6709\u4e00\u4e2a\u53c8\u7b80\u5355\u53c8\u5feb\u901f\u7684\u535a\u5ba2\u5e73\u53f0\uff0c\u540e\u6765\u53d1\u73b0\u4e86\u4e00\u4e9b\u9759\u6001\u7684\u7f51\u7ad9\u751f\u6210\u5668\uff0c\u50cf ",(0,l.kt)("inlineCode",{parentName:"p"},"hexo")," \u8fd9\u79cd\uff0c\u4f46\u662f\u53d1\u73b0\u4e0a\u9762\u7684\u4e3b\u9898\u53c8\u4e0d\u597d\u770b\uff0c\u53c8\u61d2\u5f97\u81ea\u5df1\u53bb\u5199\u3002\u540e\u6765\u5c31\u6709\u4e00\u9635\u5b50\u6211\u5c31\u76f4\u63a5\u628a\u535a\u5ba2\u5c31\u53d1\u5e03\u5728\u4e86\u5176\u4ed6\u7684\u7b2c\u4e09\u65b9\u7684\u535a\u5ba2\u5e73\u53f0\u4e0a\u3002\u73b0\u5728\u53d1\u73b0\u4e86\u8fd9\u4e2a docusaurus, \u5b83\u7684\u4e3b\u9898\u8ddf\u6211\u4e4b\u524d\u770b\u5230\u7684\u4e00\u4e2a\u5927\u4f6c Dan Abramov\uff0c\u5b83\u7684 ",(0,l.kt)("a",{parentName:"p",href:"https://overreacted.io"},"overreacted.io")," \u535a\u5ba2\uff0c\u98ce\u683c\u662f\u4e00\u6a21\u4e00\u6837\u7684\uff0c\u56e0\u4e3a\u4ed6\u662f react \u7684\u4f5c\u8005\u4e4b\u4e00\uff0c\u4f30\u8ba1\u8fd9\u4e2a\u4ed6\u4eec\u8fd9\u4e2a\u6837\u5f0f\u90fd\u662f\u4e92\u76f8\u501f\u9274\uff0c\u5b83\u8fd9\u4e2a\u4e3b\u9898\u53ef\u4ee5\u5207\u6362\u6697\u9ed1\u548c\u767d\u5929\u6a21\u5f0f\uff0c\u6bd4\u8f83\u597d\u770b\u3002\u5b89\u88c5\u548c\u90e8\u7f72\u4e5f\u7279\u522b\u7b80\u5355\uff0c\u6211\u7684\u535a\u5ba2\u4e5f\u662f\u7528\u5b83\u8fd9\u4e2a\u642d\u5efa\u7684\u3002"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://www.bilibili.com/video/av93748753/"},"B \u7ad9\u89c6\u9891 - \u70b9\u51fb\u4f20\u9001")),(0,l.kt)("h2",{id:"\u535a\u5ba2\u6709\u5565\u7528\uff1f"},"\u535a\u5ba2\u6709\u5565\u7528\uff1f"),(0,l.kt)("p",null,"\u9996\u5148\u5148\u5f04\u6e05\u4e00\u4e2a\u95ee\u9898\uff0c",(0,l.kt)("em",{parentName:"p"},"\u4e3a\u4ec0\u4e48\u8981\u6709\u4e00\u4e2a\u81ea\u5df1\u7684\u535a\u5ba2\uff1f"),"\uff0c\u535a\u5ba2\u7684\u597d\u5904\u5c31\u662f\u5bf9\u4e8e\u54b1\u4eec\u7a0b\u5e8f\u5458\u6765\u8bf4\uff1a"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u5b83\u53ef\u4ee5\u5f53\u6210\u662f\u54b1\u4eec\u7684\u526f\u4e1a\u3002\u5982\u679c\u54b1\u4eec\u5728\u5199\u4ee3\u7801\u7684\u65f6\u5019\u9047\u5230\u4e86\u95ee\u9898\uff0c\u6216\u8005\u662f\u5728\u5b66\u4e60\u4e00\u4e2a\u65b0\u7684\u6280\u672f\u7684\u65f6\u5019\uff0c\u54b1\u4eec\u53ef\u4ee5\u628a\u8fd9\u4e9b\u5b66\u5230\u7684\u4e1c\u897f\u90fd\u7ed9\u6574\u7406\u6210\u535a\u5ba2\uff0c\u7136\u540e\u53d1\u8868\u51fa\u6765\uff0c\u8fd9\u6837\u7684\u8bdd\u5462\uff0c\u65e2\u53ef\u4ee5\u80fd\u5de9\u56fa\u54b1\u4eec\u7684\u77e5\u8bc6\uff0c\u68c0\u6d4b\u54b1\u4eec\u8fd9\u4e2a\u6280\u672f\u6709\u6ca1\u6709\u5b66\u61c2\uff0c\u7136\u540e\u5462\u8fd8\u80fd\u8ba9\u5176\u4ed6\u60f3\u5b66\u8fd9\u4e9b\u4e1c\u897f\u7684\u4eba\u4e5f\u80fd\u770b\u89c1\uff0c\u7b49\u8fd9\u4e9b\u5206\u4eab\u7684\u4eba\u591a\u4e86\u4e4b\u540e\uff0c\u4f60\u5c31\u4f1a\u6162\u6162\u6512\u4e00\u4e9b\u7c89\u4e1d\uff0c\u90a3\u8fd9\u6837\u4f60\u7684\u535a\u5ba2\u5c31\u53ef\u4ee5\u6210\u4e3a",(0,l.kt)("em",{parentName:"p"},"\u4f60\u7684\u4e00\u4e2a\u54c1\u724c"),"\uff0c\u6709\u4e86\u8fd9\u4e2a\u54c1\u724c\u4e4b\u540e\uff0c\u4f60\u518d\u53bb\u9762\u8bd5\u6216\u8005\u662f\u5e72\u561b\u7684\uff0c\u4f60\u5c31\u53ef\u4ee5\u628a\u5b83\u62ff\u51fa\u6765\uff0c\u7136\u540e\u5927\u5bb6\u53ef\u4ee5\u770b\u5230\u4f60\u7684\u4f5c\u54c1\uff0c\u8fd9\u6837\u7684\u8bdd\u5bf9\u4e8e\u4f60\u4ee5\u540e\u7684\u804c\u4e1a\u53d1\u5c55\u8fd8\u662f\u5f88\u6709\u53d1\u8d22\u5347\u5b98\u90fd\u6709\u5e2e\u52a9\u3002\u73b0\u5728\u4f60\u4e5f\u4e86\u89e3\u8fd9\u4e2a\u535a\u5ba2\u7684\u597d\u5904\u4e86\u5427\uff0c\u90a3\u54b1\u4eec\u5f00\u59cb\u7528\u8fd9\u4e2a Docusaurus \u642d\u5efa\u4e00\u4e2a\u535a\u5ba2")),(0,l.kt)("h2",{id:"docusaurus-\u7b80\u4ecb"},"Docusaurus \u7b80\u4ecb"),(0,l.kt)("p",null,"\u5b83\u662f\u4e00\u4e2a\u9759\u6001\u7f51\u7ad9\u751f\u6210\u5668\uff0c\u4e4b\u524d\u6211\u5728\u6211\u7684\u524d\u7aef\u8def\u7ebf\u56fe\u7684\u89c6\u9891\u91cc\u9762\u63d0\u5230\u8fc7\u8fd9\u4e2a\u6982\u5ff5\uff0c\u4ed6\u662f\u7528 React \u5199\u7684\u6e90\u4ee3\u7801\uff0c\u7136\u540e\u7f16\u8bd1\u6210\u7684\u662f\u9759\u6001\u7684 HTML css\u3002\u4ed6\u8fd9\u4e2a\u5199\u6587\u7ae0\u652f\u6301 Markdown \u8bed\u6cd5\uff0c\u5e76\u4e14\u5462\uff0c\u5b83\u8fd9\u4e2a marketdown \u662f\u7528\u7684 mdx \u4e5f\u5c31\u662f\u652f\u6301 jsx \u8bed\u6cd5\u7684 markdown\uff0c\u65e0\u7f1d\u7ed3\u5408 React, \u91cc\u8fb9\u53ef\u4ee5\u5f15\u5165\u81ea\u5b9a\u4e49\u7684\u7ec4\u4ef6\uff0c\u7136\u540e\u5462\u4ed6\u4e5f\u652f\u6301\u63d2\u4ef6\uff0c\u8fd8\u6709\u4e3b\u9898\uff0c\u54b1\u4eec\u4e5f\u53ef\u4ee5\u5199\u81ea\u5b9a\u4e49\u7684\u7ec4\u4ef6\uff0c\u628a\u5b83\u9ed8\u8ba4\u7684\u4e3b\u9898\u7684\u67d0\u4e00\u4e2a\u7ec4\u4ef6\u7ed9\u8986\u76d6\u6389\uff0c\u7279\u522b\u65b9\u4fbf\u3002"),(0,l.kt)("img",{alt:"",src:(0,u.Z)("img/2020-03-02-deploy-a-docusaurus-site/2020-03-04-22-04-02.png")}),(0,l.kt)("h2",{id:"\u5b89\u88c5\u8fd0\u884c\u73af\u5883"},"\u5b89\u88c5\u8fd0\u884c\u73af\u5883"),(0,l.kt)("p",null,"\u56e0\u4e3a\u4ed6\u662f\u4e2a node \u7684\u9879\u76ee\uff0c\u6240\u4ee5\u5f97\u5b89\u88c5\u4e00\u4e0b node js \u7684\u73af\u5883\uff0c\u8fd8\u6709\u5305\u7ba1\u7406\u5668\uff0c \u6bd4\u5982\u8bf4 yarn\uff0c\u6216\u8005\u4e0d\u5b89\u88c5\u7528\u81ea\u5e26\u7684 npm \u4e5f\u53ef\u4ee5\uff0c\u6211\u4e60\u60ef\u7528 yarn\u3002\u5177\u4f53\u600e\u4e48\u5b89\u88c5 Node.js \u8fd8\u6709\u600e\u4e48\u5b89\u88c5 yarn \u53ef\u4ee5\u770b\u6211\u4e4b\u524d\u53d1\u7684\u90a3\u4e9b\u89c6\u9891\uff1a"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://nodejs.org/en/"},"Node.js")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://classic.yarnpkg.com/en/"},"Yarn")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://www.bilibili.com/video/av88759392/"},"\u5b89\u88c5 Node.js \u89c6\u9891\u6559\u7a0b")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://www.bilibili.com/video/av89451285/"},"\u5b89\u88c5 Yarn \u89c6\u9891\u6559\u7a0b")),(0,l.kt)("h3",{id:"\u5b89\u88c5-docusaurus"},"\u5b89\u88c5 docusaurus"),(0,l.kt)("p",null,"\u5148\u521b\u5efa Docusarus \u8fd9\u4e2a\u9879\u76ee\uff0c\u5b83\u6709\u4e00\u4e2a\u811a\u624b\u67b6\uff0c\u539f\u672c\u662f\u4e00\u4e2a node \u7684\u5168\u5c40\u5e93\uff0c\u4f46\u662f\u5229\u7528 npx \u53ef\u4ee5\u76f4\u63a5\u7528\u5b83\u7ed9\u54b1\u4eec\u521b\u5efa\u4e00\u4e0b\u9879\u76ee\u5c31\u53ef\u4ee5\u4e86\uff0c\u4e0d\u7528\u5b89\u88c5\u5230\u5168\u5c40\u5e93\u91cc\u3002\u8fd0\u884c\u4e0b\u8fb9\u7684\u547d\u4ee4\u521b\u5efa\u9879\u76ee\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npx @docusaurus/init@latest init [name] [template]\n")),(0,l.kt)("p",null,"\u8fd9\u4e2a name \u5c31\u662f\u9879\u76ee\u540d\uff0c\u7136\u540e template \u662f\u6a21\u677f\uff0c\u6a21\u677f\u4e00\u5f00\u59cb\u5c31\u7528\u5b83\u5b98\u65b9\u7684 classic\uff0c\u7ecf\u5178\u7684,\u5c31\u884c\u3002\u6211\u8fd9\u91cc\u521b\u5efa\u4e00\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},"fh-blog")," \u9879\u76ee\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npx @docusaurus/init@latest init fh-blog classic\n")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://v2.docusaurus.io/"},"Docusaurus V2 \u5b98\u7f51")),(0,l.kt)("h3",{id:"\u8fd0\u884c-docusaurus"},"\u8fd0\u884c docusaurus"),(0,l.kt)("p",null,"\u521b\u5efa\u5b8c\u4e86\u4e4b\u540e\uff0c\u5c31\u8fdb\u5165\u5230\u8fd9\u4e2a fh-blog \u7684\u6587\u4ef6\u5939\u91cc\u9762\uff0c\u8fd0\u884c"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"yarn start\n")),(0,l.kt)("p",null,"\u6216\u8005\u7528 npm \u8fd0\u884c\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npm start\n")),(0,l.kt)("p",null,"\u8fd0\u884c\u6210\u529f\u4e86\u4e4b\u540e\u5462\uff0c\u5b83\u4f1a\u81ea\u52a8\u6253\u5f00\u4e00\u4e2a\u6d4f\u89c8\u5668\uff0c\u7136\u540e\u8bbf\u95ee\u7684\u662f",(0,l.kt)("inlineCode",{parentName:"p"},"http://localhost:3000"),"\uff0c\u53ef\u4ee5\u770b\u5230\u4ed6\u8fd9\u4e2a\u754c\u9762\uff0c\u8ddf\u54b1\u4eec\u4e4b\u524d\u770b\u5230\u7684\u5b98\u7f51\u7684\u6587\u6863\u662f\u4e00\u6837\u7684\u3002\u4e0a\u9762\u6709\u6587\u6863\u3001\u535a\u5ba2\u3001\u8fd8\u6709 github \u94fe\u63a5\uff0c\u5207\u6362\u6697\u9ed1\u548c\u767d\u5929\u6a21\u5f0f\u3002"),(0,l.kt)("img",{alt:"",src:(0,u.Z)("img/2020-03-02-deploy-a-docusaurus-site/2020-03-04-22-16-57.png")}),(0,l.kt)("h3",{id:"\u9879\u76ee\u7ed3\u6784"},"\u9879\u76ee\u7ed3\u6784"),(0,l.kt)("p",null,"\u8fd9\u4e2a\u9879\u76ee\uff0c\u5927\u4f53\u7684\u7ed3\u6784\u662f\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"my-website\n\u251c\u2500\u2500 blog\n\u2502   \u251c\u2500\u2500 2019-05-28-hola.md\n\u2502   \u251c\u2500\u2500 2019-05-29-hello-world.md\n\u2502   \u2514\u2500\u2500 2020-05-30-welcome.md\n\u251c\u2500\u2500 docs\n\u2502   \u251c\u2500\u2500 doc1.md\n\u2502   \u251c\u2500\u2500 doc2.md\n\u2502   \u251c\u2500\u2500 doc3.md\n\u2502   \u2514\u2500\u2500 mdx.md\n\u251c\u2500\u2500 package.json\n\u251c\u2500\u2500 src\n\u2502   \u251c\u2500\u2500 css\n\u2502   \u2502   \u2514\u2500\u2500 custom.css\n\u2502   \u2514\u2500\u2500 pages\n\u2502       \u251c\u2500\u2500 styles.module.css\n\u2502       \u2514\u2500\u2500 index.js\n\u251c\u2500\u2500 static\n\u2502   \u2514\u2500\u2500 img\n\u251c\u2500\u2500 docusaurus.config.js\n\u251c\u2500\u2500 package.json\n\u251c\u2500\u2500 README.md\n\u251c\u2500\u2500 sidebars.js\n\u2514\u2500\u2500 yarn.lock\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"/blog/")," - \u91cc\u9762\u5c31\u662f\u5199\u535a\u5ba2\u6587\u7ae0\u7684\uff0c\u90fd\u662f markdown \u6587\u4ef6\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"/docs/")," - \u91cc\u9762\u5c31\u662f\u5199\u6587\u6863\u7684\uff0c\u4e5f\u90fd\u662f markdown \u6587\u4ef6\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"/src/")," - \u6e90\u4ee3\u7801\u6587\u4ef6\u5939\uff0c\u91cc\u9762\u6709\u4e00\u4e2a ",(0,l.kt)("inlineCode",{parentName:"li"},"css")," \u6587\u4ef6\u5939\uff0c\u7136\u540e\u5b83\u91cc\u8fb9\u6709\u4e2a ",(0,l.kt)("inlineCode",{parentName:"li"},"custom.css")," \u91cc\u9762\u662f\u5199\u81ea\u5b9a\u4e49\u7684 css \u4ee3\u7801\u7684\u3002",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"/src/pages")," - \u91cc\u8fb9\u653e\u4e00\u4e9b\u81ea\u5b9a\u4e49\u7684\u9875\u9762\uff0c\u4f7f\u7528 react \u8bed\u6cd5\u6765\u5199\u3002"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"/static/")," - \u653e\u9759\u6001\u8d44\u6e90\u6587\u4ef6\uff0c\u8fd9\u4e9b\u6587\u4ef6\u4f1a\u51fa\u73b0\u5728\u6700\u540e\u6253\u5305\u51fa\u6765\u7684\u9759\u6001\u7f51\u7ad9\u91cc\u9762\uff0c\u5728\u5b83\u7684\u6839\u76ee\u5f55\u4e0b\u8fb9\uff0c\u5b83\u4e0b\u8fb9\u7684 ",(0,l.kt)("inlineCode",{parentName:"li"},"img")," \u6587\u4ef6\u5939\u662f\u653e\u9759\u6001\u56fe\u7247\u7684\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"/docusaurus.config.js")," - \u8fd9\u4e2a\u662f\u914d\u7f6e\u8fd9\u4e2a\u7ad9\u70b9\u7684\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"/package.json")," - node.js \u7684\u5de5\u7a0b\u914d\u7f6e\u6587\u4ef6\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"/sidebar.js")," - \u914d\u7f6e\u6587\u6863\u9875\u9762\u4fa7\u8fb9\u680f\uff0c\u53ea\u6709\u6587\u6863\u9875\u9762\u624d\u6709\uff0c\u7528\u5b83\u6765\u5b9a\u4e49\u6587\u6863\u7684\u76ee\u5f55\u7ed3\u6784\u3002")),(0,l.kt)("p",null,"\u53e6\u5916\u5462\uff0c\u4e5f\u53ef\u4ee5\u81ea\u5df1\u521b\u5efa\u4e00\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},"theme")," \u6587\u4ef6\u5939\uff0c\u91cc\u8fb9\u53ef\u4ee5\u5b9a\u4e49\u4e00\u4e9b\u7ec4\u4ef6\u7528\u6765\u66ff\u6362\u9ed8\u8ba4\u4e3b\u9898\u91cc\u9762\u7684\u4e00\u4e9b\u7ec4\u4ef6\u3002"),(0,l.kt)("h3",{id:"\u914d\u7f6e\u4e3a\u535a\u5ba2\u6a21\u5f0f"},"\u914d\u7f6e\u4e3a\u535a\u5ba2\u6a21\u5f0f"),(0,l.kt)("p",null,"docusaurus \u9ed8\u8ba4\u662f\u6587\u6863\u98ce\u683c\u7684\u4e3b\u9875\uff0c\u8981\u662f\u628a\u5b83\u6539\u6210\u4e00\u4e2a\u535a\u5ba2\u5f62\u5f0f\u7684\uff0c\u9700\u8981\u505a\u4e00\u70b9\u70b9\u7684\u914d\u7f6e\u3002\u6253\u5f00\u5b83\u7684\u914d\u7f6e\u6587\u4ef6\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js")," \u3002\u628a ",(0,l.kt)("inlineCode",{parentName:"p"},"presets")," \u8fd9\u4e2a\u914d\u7f6e\u6539\u6210\u5982\u4e0b\u6240\u793a\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'presets: [\n  [\n    "@docusaurus/preset-classic",\n    {\n      // docs: {\n      //   sidebarPath: require.resolve(\'./sidebars.js\'),\n      //   editUrl:\n      //     \'https://github.com/facebook/docusaurus/edit/master/website/\',\n      // },\n      blog: {\n        path: "./blog",\n        routeBasePath: "/"\n      }\n      // \u7701\u7565\u5176\u5b83\u4ee3\u7801\n    }\n  ]\n];\n')),(0,l.kt)("p",null,"\u5982\u679c\u4e0d\u7528\u6587\u6863\u7684\u8bdd\uff0c\u5c31\u628a ",(0,l.kt)("inlineCode",{parentName:"p"},"docs")," \u8fd9\u4e2a\u5220\u9664\u6216\u8005\u6ce8\u91ca\u4e86\uff0c\u7136\u540e\u52a0\u4e0a blog \uff0c\u91cc\u8fb9\u6dfb\u52a0\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"path")," \u5c5e\u6027\uff0c\u5b83\u7684\u503c\u4e3a\u201d./blog\u201d\uff0c\u4e5f\u5c31\u662f\u6307\u5411 blog \u7684\u6587\u4ef6\u5939\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"routeBasePath")," \u5c5e\u6027\uff0c\u8fd9\u4e2a\u662f\u8bbf\u95ee\u8fd9\u4e2a\u535a\u5ba2\u7684\u8def\u5f84\uff0c\u8bbe\u7f6e\u6210",(0,l.kt)("inlineCode",{parentName:"li"},"/"),"\u659c\u6760\u5c31\u662f\u9ed8\u8ba4\u7f51\u7ad9\u7684\u9996\u9875\u3002")),(0,l.kt)("p",null,"\u7136\u540e\u628a ",(0,l.kt)("inlineCode",{parentName:"p"},"src/pages")," \u4e0b\u8fb9 ",(0,l.kt)("inlineCode",{parentName:"p"},"index.js")," \u7684\u6539\u6210\u522b\u7684\u540d\u5b57\u6216\u8005\u662f\u7ed9\u5220\u9664\uff0c\u8fd9\u6837\u7684\u8bdd\u4ed6\u5c31\u4e0d\u4f1a\u540c\u65f6\u5339\u914d\u8fd9\u4e24\u4e2a\u6587\u4ef6\u4e86\u3002"),(0,l.kt)("p",null,"\u9876\u90e8\u5bfc\u822a\u7684 docs \u5982\u679c\u8981\u53bb\u6389\u7684\u8bdd\uff0c\u53ef\u4ee5\u627e\u5230 navBar \u8fd9\u4e2a\u914d\u7f6e\u9879\uff0c\u628a links \u4e2d\u7684\u6709\u5173 docs \u7684\u8fd9\u6bb5\u5220\u6389\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'{ to: "docs/doc1", label: "Docs", position: "left" }\n')),(0,l.kt)("h3",{id:"\u53d1\u8868\u7b2c\u4e00\u7bc7\u535a\u5ba2"},"\u53d1\u8868\u7b2c\u4e00\u7bc7\u535a\u5ba2"),(0,l.kt)("p",null,"\u5199\u535a\u5ba2\u5c31\u662f\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"blog")," \u91cc\u8fb9\u521b\u5efa\u4e00\u4e2a markdown \u6587\u4ef6\u3002\u6807\u9898\u5f00\u59cb\u90e8\u5206\u662f\u4e00\u4e2a\u65e5\u671f\u683c\u5f0f\u3002Docusaurus \u4f1a\u81ea\u52a8\u628a\u8fd9\u4e2a\u65e5\u671f\u89e3\u6790\u6210\u54b1\u4eec\u8fd9\u4e2a\u535a\u5ba2\u7684\u53d1\u8868\u65e5\u671f\uff0c\u540e\u8fb9\u8ddf\u7740\u8fd9\u4e2a\u6587\u4ef6\u7684\u540d\u5b57\uff0c\u53ef\u4ee5\u8d77\u4e2a\u6709\u610f\u4e49\u7684\uff0c\u6bd4\u5982\u8bf4\u662f\u535a\u5ba2\u7684\u6807\u9898\u7684\u82f1\u6587\uff0c\u4f8b\u5982\u9879\u76ee\u91cc\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"Welcome")," \u535a\u5ba2\uff1a"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"2019-05-30-welcome.md")),(0,l.kt)("p",null,"\u6587\u4ef6\uff0c\u91cc\u9762\u7b2c\u4e00\u6bb5\u5c31\u662f\u914d\u7f6e\u8fd9\u4e2a\u535a\u5ba2\u7684\u4e00\u4e9b\u57fa\u672c\u4fe1\u606f\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"---\nid: welcome\ntitle: Welcome\nauthor: Yangshun Tay\nauthor_title: Front End Engineer @ Facebook\nauthor_url: https://github.com/yangshun\nauthor_image_url: https://avatars0.githubusercontent.com/u/1315101?s=400&v=4\ntags: [facebook, hello, docusaurus]\n---\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"id")," - \u8bbf\u95ee\u8fd9\u4e2a\u535a\u5ba2\u7684 URL\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"title")," - \u6807\u9898\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"author")," - \u4f5c\u8005\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"author_title")," - \u5c31\u662f\u4f5c\u8005\u7b80\u77ed\u7684\u81ea\u6211\u4ecb\u7ecd\uff0c\u804c\u4f4d\u4e4b\u7c7b\u7684\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"author_image_url")," - \u5934\u50cf\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"tags")," - \u535a\u5ba2\u6807\u7b7e, \u662f\u4e2a\u6570\u7ec4\u5f62\u5f0f\u3002")),(0,l.kt)("p",null,"\u5982\u679c\u6587\u7ae0\u592a\u957f\u60f3\u53ea\u5c55\u793a\u4e00\u90e8\u5206\u7684\u8bdd\uff0c\u53ef\u4ee5\u52a0\u4e0a\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\x3c!--truncate--\x3e\n")),(0,l.kt)("p",null,"\u8fd9\u4e2a\u6ce8\u91ca\u5c31\u53ef\u4ee5\u4e86\uff0c\u5b83\u4f1a\u628a\u5b83\u540e\u8fb9\u7684\u5185\u5bb9\u9690\u85cf\uff0c\u7136\u540e\u663e\u793a\u4e00\u4e2a\u9605\u8bfb\u66f4\u591a\u94fe\u63a5\u3002"),(0,l.kt)("p",null,"\u8fd9\u6837\u7b2c\u4e00\u4e2a\u535a\u5ba2\u5c31\u5b8c\u6210\u4e86\uff0c\u73b0\u5728\u662f\u8dd1\u5728\u672c\u5730\u4e0a\uff0c\u540e\u8fb9\u518d\u8bb2\u600e\u4e48\u628a\u5b83\u90e8\u7f72\u5230\u670d\u52a1\u5668\u4e0a\u3002"))}d.isMDXComponent=!0}}]);