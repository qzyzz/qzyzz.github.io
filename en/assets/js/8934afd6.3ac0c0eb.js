(self.webpackChunkzxuqian_cn=self.webpackChunkzxuqian_cn||[]).push([[874],{2122:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,{Z:function(){return r}})},9756:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}n.d(t,{Z:function(){return r}})},3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return f},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},f=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,f=a(e,["components","mdxType","originalType","parentName"]),p=l(n),m=o,b=p["".concat(c,".").concat(m)]||p[m]||s[m]||i;return n?r.createElement(b,u(u({ref:t},f),{},{components:n})):r.createElement(b,u({ref:t},f))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,u=new Array(i);u[0]=p;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,u[1]=a;for(var l=2;l<i;l++)u[l]=n[l];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3919:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return o}})},4996:function(e,t,n){"use strict";n.d(t,{C:function(){return i},Z:function(){return u}});var r=n(2263),o=n(3919);function i(){var e=(0,r.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var i=void 0===r?{}:r,u=i.forcePrependBaseUrl,a=void 0!==u&&u,c=i.absolute,l=void 0!==c&&c;if(!n)return n;if(n.startsWith("#"))return n;if((0,o.b)(n))return n;if(a)return t+n;var f=n.startsWith(t)?n:t+n.replace(/^\//,"");return l?e+f:f}(i,n,e,t)}}}function u(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},1023:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return a},metadata:function(){return c},toc:function(){return l},default:function(){return s}});var r=n(2122),o=n(9756),i=(n(7294),n(3905)),u=(n(4996),{slug:"css-flex-box-layout",title:"CSS Flexbox \u5e03\u5c40\u6700\u5bb9\u6613\u7406\u89e3\u5b8c\u5168\u6559\u7a0b",author:"\u5cf0\u534e",author_title:"\u524d\u7aef\u5de5\u7a0b\u5e08 / B\u7ad9UP\u4e3b",author_url:"https://github.com/zxuqian",author_image_url:"https://tvax3.sinaimg.cn/crop.0.0.1080.1080.180/b2745d44ly8g8s4muqeggj20u00u0n0k.jpg?KID=imgbed,tva&Expires=1582389585&ssig=EvXmyu%2FXsX",description:"CSS flexbox \u5e03\u5c40\u5341\u5206\u5f3a\u5927\uff0c\u5b83\u53ef\u4ee5\u5bf9\u5143\u7d20\u8fdb\u884c\u6c34\u5e73\u548c\u5782\u76f4\u65b9\u5411\u4e0a\u7684\u5bf9\u9f50\uff0c\u4e5f\u652f\u6301\u81ea\u7531\u7f29\u653e\uff0c\u65b9\u4fbf\u54cd\u5e94\u5f0f\u5e03\u5c40\u7684\u5f00\u53d1\u3002\u8fd9\u4e2a\u6587\u7ae0\u5c31\u6559\u4f60\u8ba4\u8bc6 flex-box \u5e03\u5c40\uff0c\u770b\u5b8c\u4e4b\u540e\u4f60\u4e5f\u80fd\u719f\u7ec3\u7684\u8fd0\u7528\u5b83\uff01",tags:["\u524d\u7aef","React"],bvid:"BV1P7411m7Nu",oid:"99087136"}),a=void 0,c={permalink:"/en/css-flex-box-layout",source:"@site/blog/2020-04-05-css-flex-box-layout.md",title:"CSS Flexbox \u5e03\u5c40\u6700\u5bb9\u6613\u7406\u89e3\u5b8c\u5168\u6559\u7a0b",description:"CSS flexbox \u5e03\u5c40\u5341\u5206\u5f3a\u5927\uff0c\u5b83\u53ef\u4ee5\u5bf9\u5143\u7d20\u8fdb\u884c\u6c34\u5e73\u548c\u5782\u76f4\u65b9\u5411\u4e0a\u7684\u5bf9\u9f50\uff0c\u4e5f\u652f\u6301\u81ea\u7531\u7f29\u653e\uff0c\u65b9\u4fbf\u54cd\u5e94\u5f0f\u5e03\u5c40\u7684\u5f00\u53d1\u3002\u8fd9\u4e2a\u6587\u7ae0\u5c31\u6559\u4f60\u8ba4\u8bc6 flex-box \u5e03\u5c40\uff0c\u770b\u5b8c\u4e4b\u540e\u4f60\u4e5f\u80fd\u719f\u7ec3\u7684\u8fd0\u7528\u5b83\uff01",date:"2020-04-05T00:00:00.000Z",formattedDate:"April 5, 2020",tags:[{label:"\u524d\u7aef",permalink:"/en/tags/\u524d\u7aef"},{label:"React",permalink:"/en/tags/react"}],readingTime:5.865,truncated:!0,prevItem:{title:"5\u4e2a\u6280\u5de7\u52a9\u4f60\u6210\u4e3a CSS \u5927\u795e",permalink:"/en/5-tips-to-master-css"},nextItem:{title:"CSS \u9009\u62e9\u5668\u4f18\u5148\u7ea7\u7279\u5f02\u6027\u6743\u91cd\u8be6\u89e3",permalink:"/en/css-selector-specificity"}},l=[],f={toc:l};function s(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u5728 CSS flexbox \u5e03\u5c40\u51fa\u73b0\u4ee5\u524d\uff0c\u5982\u679c\u8981\u63a7\u5236 HTML \u5143\u7d20\u7684\u5e03\u5c40\uff0c\u8981\u7528\u5230\u5f88\u591a\u79cd\u5947\u8469\u7684\u65b9\u5f0f\u3002\u5728\u6c34\u5e73\u65b9\u5411\u4e0a\u5f97\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"float"),"\u63a7\u5236\u5de6\u53f3\u5bf9\u9f50\uff0c\u7a0d\u4e00\u4e0d\u6ce8\u610f\uff0c\u5c31\u4f1a\u6709\u6d6e\u52a8\u7684\u5143\u7d20\u98de\u6765\u98de\u53bb~\u3002\u5728\u5782\u76f4\u65b9\u5411\u4e0a\u5c31\u66f4\u662f\u767e\u5bb6\u4e89\u9e23\u4e86\uff1a\u8981\u4e48\u624b\u52a8\u8ba1\u7b97\u9ad8\u5ea6\u7136\u540e\u7b97\u51fa\u4e2d\u5fc3\u70b9\uff0c\u8981\u4e48\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"line-height")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"height")," \u7684\u7ed3\u5408\uff0c\u8981\u4e48\u7528\u5341\u4e4b\u516b\u4e5d\u4e0d\u751f\u6548\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"vertical-align")," \u5c5e\u6027\u7b49\u7b49\u7b49\u7b49\u3002\u81ea\u4ece flex-box \u51fa\u73b0\u4ee5\u540e\uff0c\u4e00\u5207\u4f3c\u4e4e\u5c31\u8c41\u7136\u5f00\u6717\u4e86\uff0c\u6c34\u5e73\u5782\u76f4\u5404\u79cd\u82b1\u5f0f\u5bf9\u9f50\uff0c\u7a7a\u95f4\u5206\u914d\u7531\u4f60\u505a\u4e3b\u3002\u5f53\u7136\uff0c\u8981\u7528\u597d\u5b83\uff0c\u7528\u5bf9\u5b83\u4e5f\u4e0d\u662f\u4e00\u4ef6\u5bb9\u6613\u7684\u4e8b\uff0c\u4eca\u5929\u5c31\u7ed9\u4f60\u8bf4\u8bf4 flex-box \u5e03\u5c40\uff0c\u770b\u5b8c\u4e4b\u540e\u4f60\u4e5f\u80fd\u719f\u7ec3\u7684\u8fd0\u7528\u5b83\uff01\uff08\u535a\u5ba2\u4e2d\u7684\u793a\u4f8b\u90fd\u662f\u771f\u5b9e\u7684 HTML \u4ee3\u7801\uff0c\u53ef\u4ee5\u4f7f\u7528 chrome \u5f00\u53d1\u8005\u5de5\u5177\u67e5\u770b\u5c5e\u6027\u3002(\u6b64\u6587\u4e3a\u4e86\u6f14\u793a\u67d0\u4e9b flex \u793a\u4f8b\uff0c\u5728\u5c0f\u5c4f\u5e55\u4e0b\u4f1a\u6709\u6a2a\u5411\u6eda\u52a8\u6761)"))}s.isMDXComponent=!0}}]);