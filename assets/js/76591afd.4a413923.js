(self.webpackChunkzxuqian_cn=self.webpackChunkzxuqian_cn||[]).push([[5006],{2122:function(t,e,r){"use strict";function n(){return(n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}r.d(e,{Z:function(){return n}})},9756:function(t,e,r){"use strict";function n(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}r.d(e,{Z:function(){return n}})},3905:function(t,e,r){"use strict";r.d(e,{Zo:function(){return f},kt:function(){return m}});var n=r(7294);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function c(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var u=n.createContext({}),l=function(t){var e=n.useContext(u),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},f=function(t){var e=l(t.components);return n.createElement(u.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var r=t.components,o=t.mdxType,a=t.originalType,u=t.parentName,f=c(t,["components","mdxType","originalType","parentName"]),s=l(r),m=o,d=s["".concat(u,".").concat(m)]||s[m]||p[m]||a;return r?n.createElement(d,i(i({ref:e},f),{},{components:r})):n.createElement(d,i({ref:e},f))}));function m(t,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=r.length,i=new Array(a);i[0]=s;var c={};for(var u in e)hasOwnProperty.call(e,u)&&(c[u]=e[u]);c.originalType=t,c.mdxType="string"==typeof t?t:o,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},3919:function(t,e,r){"use strict";function n(t){return!0===/^(\w*:|\/\/)/.test(t)}function o(t){return void 0!==t&&!n(t)}r.d(e,{b:function(){return n},Z:function(){return o}})},4996:function(t,e,r){"use strict";r.d(e,{C:function(){return a},Z:function(){return i}});var n=r(2263),o=r(3919);function a(){var t=(0,n.Z)().siteConfig,e=(t=void 0===t?{}:t).baseUrl,r=void 0===e?"/":e,a=t.url;return{withBaseUrl:function(t,e){return function(t,e,r,n){var a=void 0===n?{}:n,i=a.forcePrependBaseUrl,c=void 0!==i&&i,u=a.absolute,l=void 0!==u&&u;if(!r)return r;if(r.startsWith("#"))return r;if((0,o.b)(r))return r;if(c)return e+r;var f=r.startsWith(e)?r:e+r.replace(/^\//,"");return l?t+f:f}(a,r,t,e)}}}function i(t,e){return void 0===e&&(e={}),(0,a().withBaseUrl)(t,e)}},8861:function(t,e,r){"use strict";r.r(e),r.d(e,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return l},default:function(){return p}});var n=r(2122),o=r(9756),a=(r(7294),r(3905)),i=(r(4996),{slug:"React-intro",title:"\u4ec0\u4e48\u662f React\uff1f\u4f60\u4e3a\u4ec0\u4e48\u5e94\u8be5\u5b66React\uff1f",author:"\u5cf0\u534e",author_title:"\u524d\u7aef\u5de5\u7a0b\u5e08 / B\u7ad9UP\u4e3b",author_url:"https://github.com/zxuqian",author_image_url:"https://tvax3.sinaimg.cn/crop.0.0.1080.1080.180/b2745d44ly8g8s4muqeggj20u00u0n0k.jpg?KID=imgbed,tva&Expires=1582389585&ssig=EvXmyu%2FXsX",description:"Hello! \u4eca\u5929\u6765\u5e26\u4f60\u8d70\u8fdb React \u7684\u5927\u95e8\uff01\u6211\u7b2c\u4e00\u6b21\u542c\u8bf4 React \u662f\u6211\u5728\u7f8e\u56fd\u8bfb\u7814\u7684\u65f6\u5019\uff0c\u5ba4\u53cb\u9009\u4e86 web programming \u8fd9\u8282\u8bfe\uff0c\u7136\u540e\u9047\u5230\u4e86\u5173\u4e8e react \u7684\u597d\u591a\u95ee\u9898...",tags:["\u524d\u7aef","React"],bvid:"av95815105",oid:"95815105"}),c=void 0,u={permalink:"/React-intro",source:"@site/blog/2020-03-12-introduction-to-react.md",title:"\u4ec0\u4e48\u662f React\uff1f\u4f60\u4e3a\u4ec0\u4e48\u5e94\u8be5\u5b66React\uff1f",description:"Hello! \u4eca\u5929\u6765\u5e26\u4f60\u8d70\u8fdb React \u7684\u5927\u95e8\uff01\u6211\u7b2c\u4e00\u6b21\u542c\u8bf4 React \u662f\u6211\u5728\u7f8e\u56fd\u8bfb\u7814\u7684\u65f6\u5019\uff0c\u5ba4\u53cb\u9009\u4e86 web programming \u8fd9\u8282\u8bfe\uff0c\u7136\u540e\u9047\u5230\u4e86\u5173\u4e8e react \u7684\u597d\u591a\u95ee\u9898...",date:"2020-03-12T00:00:00.000Z",formattedDate:"2020\u5e743\u670812\u65e5",tags:[{label:"\u524d\u7aef",permalink:"/tags/\u524d\u7aef"},{label:"React",permalink:"/tags/react"}],readingTime:1.895,truncated:!0,prevItem:{title:"React Props \u6559\u7a0b - \u5236\u4f5c\u4e00\u4e2a\u6309\u94ae",permalink:"/learn-react-props-buttons"},nextItem:{title:"\u4f7f\u7528 Docusaurus \u642d\u5efa\u4e2a\u4eba\u535a\u5ba2\u6559\u7a0b\uff08\u4e8c\uff09",permalink:"/deploy-a-docusaurus-site-part2"}},l=[],f={toc:l};function p(t){var e=t.components,r=(0,o.Z)(t,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},f,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Hello! \u4eca\u5929\u6765\u5e26\u4f60\u8d70\u8fdb React \u7684\u5927\u95e8\uff01\u6211\u7b2c\u4e00\u6b21\u542c\u8bf4 React \u662f\u6211\u5728\u7f8e\u56fd\u8bfb\u7814\u7684\u65f6\u5019\uff0c\u5ba4\u53cb\u9009\u4e86 web programming \u8fd9\u8282\u8bfe\uff0c\u7136\u540e\u9047\u5230\u4e86\u5173\u4e8e react \u7684\u597d\u591a\u95ee\u9898\uff0c\u5c31\u662f\u603b\u4e5f\u914d\u7f6e\u4e0d\u597d\u3002\u6211\u770b\u4ed6\u90a3\u4e2a\u65f6\u5019 React \u7684\u914d\u7f6e\u7279\u522b\u9ebb\u70e6\uff0c\u8981\u5f15\u5165\u4e00\u5806\u4f9d\u8d56\uff0c\u50cf bower, babel \u7b49\u7b49... \u8fd8\u6709\u6587\u6863\u5199\u7684\u4e5f\u4e0d\u6e05\u695a\u3002\u6709\u4e00\u6b21\u4ed6\u521a\u5f00\u59cb\u505a\u4e00\u4e2a\u4f5c\u4e1a\uff0c\u95ee\u4e86\u6211\u4e00\u4e2a\u95ee\u9898\uff0c\u5927\u6982\u662f\u6709\u4e00\u4e2a\u7ec4\u4ef6\u663e\u793a\u4e0d\u51fa\u6765\uff0c\u7ed3\u679c\u770b\u4e86\u534a\u5929\u6211\u4e5f\u4e0d\u77e5\u9053\u662f\u600e\u4e48\u56de\u4e8b\u554a\uff0c\u56e0\u4e3a\u6211\u4e5f\u6ca1\u5b66\u8fc7\u3002\u540e\u6765\u4ed6\u81ea\u5df1\u7814\u7a76\u51fa\u6765\u4e86\uff0c\u662f\u56e0\u4e3a\u8fd9\u4e2a\u7ec4\u4ef6\u5728\u4f7f\u7528\u7684\u65f6\u5019\u6ca1\u6709\u5927\u5199\u3002"))}p.isMDXComponent=!0}}]);