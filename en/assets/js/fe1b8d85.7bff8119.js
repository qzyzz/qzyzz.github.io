(self.webpackChunkzxuqian_cn=self.webpackChunkzxuqian_cn||[]).push([[4830],{2122:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,{Z:function(){return r}})},9756:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}n.d(t,{Z:function(){return r}})},3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return y}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),f=l(n),y=o,m=f["".concat(u,".").concat(y)]||f[y]||p[y]||a;return n?r.createElement(m,i(i({ref:t},s),{},{components:n})):r.createElement(m,i({ref:t},s))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},8710:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return l},default:function(){return p}});var r=n(2122),o=n(9756),a=(n(7294),n(3905)),i={slug:"css-font-display-intro",title:"Web \u6027\u80fd\u4f18\u5316\uff1a\u4f7f\u7528 CSS font-display \u63a7\u5236\u5b57\u4f53\u52a0\u8f7d\u548c\u66ff\u6362",author:"\u5cf0\u534e",author_title:"\u524d\u7aef\u5de5\u7a0b\u5e08 / B\u7ad9UP\u4e3b",author_url:"https://github.com/zxuqian",author_image_url:"https://tvax3.sinaimg.cn/crop.0.0.1080.1080.180/b2745d44ly8g8s4muqeggj20u00u0n0k.jpg?KID=imgbed,tva&Expires=1582389585&ssig=EvXmyu%2FXsX",description:"\u5728\u7f16\u5199\u7f51\u7ad9\u7684\u65f6\u5019\uff0c\u6216\u591a\u6216\u5c11\u90fd\u4f1a\u7528\u5230\u4e00\u4e9b\u7f51\u7edc\u4e0a\u7684\u5b57\u4f53\uff0cCSS 3 \u4e2d\u867d\u7136\u52a0\u5165\u4e86\u5bf9 Web Fonts\uff08\u7f51\u7edc\u5b57\u4f53\uff09\u7684\u652f\u6301\uff0c\u4f46\u662f\u6d4f\u89c8\u5668\u5bf9\u5b83\u4eec\u7684\u52a0\u8f7d\u548c\u9ed8\u8ba4\u5904\u7406\u65b9\u5f0f\u4f1a\u6781\u5927\u7684\u5f71\u54cd\u7f51\u7ad9\u7684\u6027\u80fd\u548c\u7528\u6237\u4f53\u9a8c\u3002\u4f8b\u5982\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u5728 Web Fonts \u52a0\u8f7d\u65f6\uff0c\u4f7f\u7528\u8be5\u5b57\u4f53\u7684\u5730\u65b9\u4f1a\u663e\u793a\u7a7a\u767d\uff0c\u76f4\u5230\u5b57\u4f53\u4e0b\u8f7d\u5b8c\u6210\u4e4b\u540e\u624d\u4f1a\u663e\u793a\uff0c\u8fd9\u65f6\u901a\u8fc7\u6539\u53d8 CSS \u4e2d\u7684 `font-display` \u5c5e\u6027\uff0c\u5c31\u53ef\u4ee5\u907f\u514d\u8fd9\u4e2a\u95ee\u9898\u3002",tags:["\u524d\u7aef","css","\u6027\u80fd\u4f18\u5316"],activityId:"500549825279095997"},c=void 0,u={permalink:"/en/css-font-display-intro",source:"@site/blog/2021-03-09-css-font-display-intro.md",title:"Web \u6027\u80fd\u4f18\u5316\uff1a\u4f7f\u7528 CSS font-display \u63a7\u5236\u5b57\u4f53\u52a0\u8f7d\u548c\u66ff\u6362",description:"\u5728\u7f16\u5199\u7f51\u7ad9\u7684\u65f6\u5019\uff0c\u6216\u591a\u6216\u5c11\u90fd\u4f1a\u7528\u5230\u4e00\u4e9b\u7f51\u7edc\u4e0a\u7684\u5b57\u4f53\uff0cCSS 3 \u4e2d\u867d\u7136\u52a0\u5165\u4e86\u5bf9 Web Fonts\uff08\u7f51\u7edc\u5b57\u4f53\uff09\u7684\u652f\u6301\uff0c\u4f46\u662f\u6d4f\u89c8\u5668\u5bf9\u5b83\u4eec\u7684\u52a0\u8f7d\u548c\u9ed8\u8ba4\u5904\u7406\u65b9\u5f0f\u4f1a\u6781\u5927\u7684\u5f71\u54cd\u7f51\u7ad9\u7684\u6027\u80fd\u548c\u7528\u6237\u4f53\u9a8c\u3002\u4f8b\u5982\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u5728 Web Fonts \u52a0\u8f7d\u65f6\uff0c\u4f7f\u7528\u8be5\u5b57\u4f53\u7684\u5730\u65b9\u4f1a\u663e\u793a\u7a7a\u767d\uff0c\u76f4\u5230\u5b57\u4f53\u4e0b\u8f7d\u5b8c\u6210\u4e4b\u540e\u624d\u4f1a\u663e\u793a\uff0c\u8fd9\u65f6\u901a\u8fc7\u6539\u53d8 CSS \u4e2d\u7684 `font-display` \u5c5e\u6027\uff0c\u5c31\u53ef\u4ee5\u907f\u514d\u8fd9\u4e2a\u95ee\u9898\u3002",date:"2021-03-09T00:00:00.000Z",formattedDate:"March 9, 2021",tags:[{label:"\u524d\u7aef",permalink:"/en/tags/\u524d\u7aef"},{label:"css",permalink:"/en/tags/css"},{label:"\u6027\u80fd\u4f18\u5316",permalink:"/en/tags/\u6027\u80fd\u4f18\u5316"}],readingTime:1.32,truncated:!0,prevItem:{title:"\u5b9e\u73b0\u524d\u7aef\u7f51\u9875 WebRTC \u89c6\u9891\u901a\u8bdd\u4ee5\u53ca\u6362\u8138\u7279\u6548",permalink:"/en/webrtc-avatarify-face-swap-tutorial"},nextItem:{title:"JavaScript \u6e38\u620f\u5f00\u53d1 - \u7269\u7406\u78b0\u649e\u5f15\u64ce\u5b9e\u73b0",permalink:"/en/javascript-collision-physics"}},l=[],s={toc:l};function p(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u5728\u7f16\u5199\u7f51\u7ad9\u7684\u65f6\u5019\uff0c\u6216\u591a\u6216\u5c11\u90fd\u4f1a\u7528\u5230\u4e00\u4e9b\u7f51\u7edc\u4e0a\u7684\u5b57\u4f53\uff0cCSS 3 \u4e2d\u867d\u7136\u52a0\u5165\u4e86\u5bf9 Web Fonts\uff08\u7f51\u7edc\u5b57\u4f53\uff09\u7684\u652f\u6301\uff0c\u4f46\u662f\u6d4f\u89c8\u5668\u5bf9\u5b83\u4eec\u7684\u52a0\u8f7d\u548c\u9ed8\u8ba4\u5904\u7406\u65b9\u5f0f\u4f1a\u6781\u5927\u7684\u5f71\u54cd\u7f51\u7ad9\u7684\u6027\u80fd\u548c\u7528\u6237\u4f53\u9a8c\u3002\u4f8b\u5982\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u5728 Web Fonts \u52a0\u8f7d\u65f6\uff0c\u4f7f\u7528\u8be5\u5b57\u4f53\u7684\u5730\u65b9\u4f1a\u663e\u793a\u7a7a\u767d\uff0c\u76f4\u5230\u5b57\u4f53\u4e0b\u8f7d\u5b8c\u6210\u4e4b\u540e\u624d\u4f1a\u663e\u793a\uff0c\u8fd9\u65f6\u901a\u8fc7\u6539\u53d8 CSS \u4e2d\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"font-display")," \u5c5e\u6027\uff0c\u5c31\u53ef\u4ee5\u907f\u514d\u8fd9\u4e2a\u95ee\u9898\u3002"))}p.isMDXComponent=!0}}]);