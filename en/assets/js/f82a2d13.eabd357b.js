(self.webpackChunkzxuqian_cn=self.webpackChunkzxuqian_cn||[]).push([[6567],{2122:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,{Z:function(){return r}})},9756:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}n.d(t,{Z:function(){return r}})},3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=l(n),m=o,g=f["".concat(s,".").concat(m)]||f[m]||p[m]||a;return n?r.createElement(g,i(i({ref:t},u),{},{components:n})):r.createElement(g,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},2533:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return l},default:function(){return p}});var r=n(2122),o=n(9756),a=(n(7294),n(3905)),i={slug:"css-is-pseudo-class-selector",title:"CSS :is() \u4f2a\u7c7b\u9009\u62e9\u5668\u4f7f\u7528\u6307\u5357",author:"\u5cf0\u534e",author_title:"\u524d\u7aef\u5de5\u7a0b\u5e08 / B\u7ad9UP\u4e3b",author_url:"https://github.com/zxuqian",author_image_url:"https://tvax3.sinaimg.cn/crop.0.0.1080.1080.180/b2745d44ly8g8s4muqeggj20u00u0n0k.jpg?KID=imgbed,tva&Expires=1582389585&ssig=EvXmyu%2FXsX",description:"css :is() \u4f2a\u7c7b\u9009\u62e9\u5668\u8fd8\u662f\u4e00\u4e2a\u6b63\u5728\u9010\u6b65\u89c4\u8303\u5316\u7684\u65b0\u7279\u6027\uff0c\u6240\u4ee5\u5728\u4f7f\u7528\u4e0a\u4e5f\u9700\u8981\u6ce8\u610f\u4e00\u4e0b\u53d8\u52a8\uff0c\u603b\u4e4b\uff0c\u5b83\u53ef\u4ee5\u8ba9\u6211\u4eec\u51cf\u5c11\u7f16\u5199\u91cd\u590d\u9009\u62e9\u5668\u7684\u6b21\u6570\uff0c\u5b9e\u73b0\u50cf SASS/Less \u7b49 CSS \u9884\u5904\u7406\u7f16\u8bd1\u5668\u7c7b\u4f3c\u7684\u5d4c\u5957\u8bed\u6cd5\u3002",tags:["css","selectors","is","css\u9009\u62e9\u5668","is\u9009\u62e9\u5668"],activityId:"533932840843140885",oid:"138305326"},c=void 0,s={permalink:"/en/css-is-pseudo-class-selector",source:"@site/blog/2021-06-07-css-is-pseudo-class-selector.md",title:"CSS :is() \u4f2a\u7c7b\u9009\u62e9\u5668\u4f7f\u7528\u6307\u5357",description:"css :is() \u4f2a\u7c7b\u9009\u62e9\u5668\u8fd8\u662f\u4e00\u4e2a\u6b63\u5728\u9010\u6b65\u89c4\u8303\u5316\u7684\u65b0\u7279\u6027\uff0c\u6240\u4ee5\u5728\u4f7f\u7528\u4e0a\u4e5f\u9700\u8981\u6ce8\u610f\u4e00\u4e0b\u53d8\u52a8\uff0c\u603b\u4e4b\uff0c\u5b83\u53ef\u4ee5\u8ba9\u6211\u4eec\u51cf\u5c11\u7f16\u5199\u91cd\u590d\u9009\u62e9\u5668\u7684\u6b21\u6570\uff0c\u5b9e\u73b0\u50cf SASS/Less \u7b49 CSS \u9884\u5904\u7406\u7f16\u8bd1\u5668\u7c7b\u4f3c\u7684\u5d4c\u5957\u8bed\u6cd5\u3002",date:"2021-06-07T00:00:00.000Z",formattedDate:"June 7, 2021",tags:[{label:"css",permalink:"/en/tags/css"},{label:"selectors",permalink:"/en/tags/selectors"},{label:"is",permalink:"/en/tags/is"},{label:"css\u9009\u62e9\u5668",permalink:"/en/tags/css\u9009\u62e9\u5668"},{label:"is\u9009\u62e9\u5668",permalink:"/en/tags/is\u9009\u62e9\u5668"}],readingTime:.915,truncated:!0,prevItem:{title:"\u7b2c\u4e00\u7bc7\u535a\u5ba2",permalink:"/en/first-blog"},nextItem:{title:"Web\u6027\u80fd\u4f18\u5316\uff1a\u4f7f\u7528\u56fe\u7247\u61d2\u52a0\u8f7d\u63a8\u8fdf\u5c4f\u5e55\u5916\u56fe\u7247\u7684\u52a0\u8f7d",permalink:"/en/web-performance-optimization-image-lazy-loading"}},l=[],u={toc:l};function p(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u5728\u4f7f\u7528 CSS \u7f16\u5199\u9875\u9762\u6837\u5f0f\u7684\u65f6\u5019\uff0c\u4f60\u662f\u4e0d\u662f\u5199\u8fc7\u7c7b\u4f3c\u7684\u4ee3\u7801\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},"li a,\nartcile a,\nsection a {\n  color: #000000;\n}\nh1 a,\nh2 a,\nh3 a {\n  color: blue;\n}\n")),(0,a.kt)("p",null,"\u4e3a\u4e86\u7ed9\u4e00\u7bc7\u6587\u7ae0\u4e2d\uff0c\u4e0d\u540c\u4f4d\u7f6e\u7684\u8d85\u94fe\u63a5\u8bbe\u7f6e\u4e0d\u540c\u7684\u989c\u8272\uff0c\u9700\u8981\u5728\u591a\u4e2a\u9009\u62e9\u5668\u4e2d\uff0c\u91cd\u590d\u7684\u9009\u62e9 ",(0,a.kt)("inlineCode",{parentName:"p"},"a"),"\xa0 \u5143\u7d20\uff0c\u5982\u679c\u662f\u5176\u5b83\u540d\u5b57\u6bd4\u8f83\u957f\u7684\u5143\u7d20\u6216\u8005 class\uff0c\u90a3\u4e48\u5199\u8d77\u6765\u4f1a\u7279\u522b\u9ebb\u70e6\uff0c\u7a0d\u52a0\u4e0d\u6ce8\u610f\u5c31\u4f1a\u5199\u9519\u3002"))}p.isMDXComponent=!0}}]);