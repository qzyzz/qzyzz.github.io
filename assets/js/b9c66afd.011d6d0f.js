(self.webpackChunkzxuqian_cn=self.webpackChunkzxuqian_cn||[]).push([[3262],{2122:function(e,t,n){"use strict";function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}n.d(t,{Z:function(){return a}})},9756:function(e,t,n){"use strict";function a(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}n.d(t,{Z:function(){return a}})},3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),i=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=i(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=i(n),d=r,k=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return n?a.createElement(k,l(l({ref:t},c),{},{components:n})):a.createElement(k,l({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:r,l[1]=p;for(var i=2;i<o;i++)l[i]=n[i];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3919:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}n.d(t,{b:function(){return a},Z:function(){return r}})},4996:function(e,t,n){"use strict";n.d(t,{C:function(){return o},Z:function(){return l}});var a=n(2263),r=n(3919);function o(){var e=(0,a.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var o=void 0===a?{}:a,l=o.forcePrependBaseUrl,p=void 0!==l&&l,s=o.absolute,i=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if((0,r.b)(n))return n;if(p)return t+n;var c=n.startsWith(t)?n:t+n.replace(/^\//,"");return i?e+c:c}(o,n,e,t)}}}function l(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},4791:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return s},metadata:function(){return i},toc:function(){return c},default:function(){return m}});var a=n(2122),r=n(9756),o=(n(7294),n(3905)),l=n(4996),p={slug:"learn-react-props-buttons",title:"React Props \u6559\u7a0b - \u5236\u4f5c\u4e00\u4e2a\u6309\u94ae",author:"\u5cf0\u534e",author_title:"\u524d\u7aef\u5de5\u7a0b\u5e08 / B\u7ad9UP\u4e3b",author_url:"https://github.com/zxuqian",author_image_url:"https://tvax3.sinaimg.cn/crop.0.0.1080.1080.180/b2745d44ly8g8s4muqeggj20u00u0n0k.jpg?KID=imgbed,tva&Expires=1582389585&ssig=EvXmyu%2FXsX",description:"Rect Props \u662f\u7f16\u5199\u53ef\u590d\u7528\u7ec4\u4ef6\u7684\u6838\u5fc3\uff0c\u53ef\u4ee5\u5229\u7528 Prop \u8ba9\u7ec4\u4ef6\u63a5\u6536\u4e0d\u540c\u7684\u53c2\u6570\uff0c\u7136\u540e\u6839\u636e\u8fd9\u4e9b\u53c2\u6570\u4f5c\u51fa\u4e0d\u540c\u7684\u8868\u73b0\uff0c\u5982\u5f62\u72b6\u3001\u989c\u8272\u7b49\u3002",tags:["\u524d\u7aef","React"],bvid:"av96612743",oid:"96612743"},s=void 0,i={permalink:"/learn-react-props-buttons",source:"@site/blog/2022-03-15-learn-react-props-buttons.md",title:"React Props \u6559\u7a0b - \u5236\u4f5c\u4e00\u4e2a\u6309\u94ae",description:"Rect Props \u662f\u7f16\u5199\u53ef\u590d\u7528\u7ec4\u4ef6\u7684\u6838\u5fc3\uff0c\u53ef\u4ee5\u5229\u7528 Prop \u8ba9\u7ec4\u4ef6\u63a5\u6536\u4e0d\u540c\u7684\u53c2\u6570\uff0c\u7136\u540e\u6839\u636e\u8fd9\u4e9b\u53c2\u6570\u4f5c\u51fa\u4e0d\u540c\u7684\u8868\u73b0\uff0c\u5982\u5f62\u72b6\u3001\u989c\u8272\u7b49\u3002",date:"2022-03-15T00:00:00.000Z",formattedDate:"2022\u5e743\u670815\u65e5",tags:[{label:"\u524d\u7aef",permalink:"/tags/\u524d\u7aef"},{label:"React",permalink:"/tags/react"}],readingTime:2.98,truncated:!0,prevItem:{title:"CSS \u9009\u62e9\u5668\u4f18\u5148\u7ea7\u7279\u5f02\u6027\u6743\u91cd\u8be6\u89e3",permalink:"/css-selector-specificity"}},c=[{value:"\u4f60\u5c06\u5b66\u5230\u7684",id:"\u4f60\u5c06\u5b66\u5230\u7684",children:[]},{value:"\u521b\u5efa React \u5de5\u7a0b",id:"\u521b\u5efa-react-\u5de5\u7a0b",children:[]},{value:"\u521b\u5efa Button \u7ec4\u4ef6",id:"\u521b\u5efa-button-\u7ec4\u4ef6",children:[]},{value:"\u7f16\u5199 Button \u9ed8\u8ba4\u6837\u5f0f",id:"\u7f16\u5199-button-\u9ed8\u8ba4\u6837\u5f0f",children:[]},{value:"\u7528 Props \u7ed9 Button \u4e0d\u540c\u7684\u6837\u5f0f",id:"\u7528-props-\u7ed9-button-\u4e0d\u540c\u7684\u6837\u5f0f",children:[{value:"classnames \u7ec4\u5408\u6837\u5f0f",id:"classnames-\u7ec4\u5408\u6837\u5f0f",children:[]},{value:"\u7ebf\u6846\u6837\u5f0f",id:"\u7ebf\u6846\u6837\u5f0f",children:[]}]},{value:"\u663e\u793a\u6240\u6709\u6309\u94ae\u6837\u5f0f",id:"\u663e\u793a\u6240\u6709\u6309\u94ae\u6837\u5f0f",children:[]}],u={toc:c};function m(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u4f60\u5728\u5199 HTML \u9875\u9762\u7684\u65f6\u5019\u80af\u5b9a\u77e5\u9053\uff0chtml \u6807\u7b7e\u7684\u5c5e\u6027\u90fd\u662f\u56fa\u5b9a\u7684\uff0c\u6bd4\u5982 ",(0,o.kt)("inlineCode",{parentName:"p"},"a")," \u6807\u7b7e\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"href"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"input")," \u91cc\u8fb9\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"type")," \u5c5e\u6027\u3002\u8fd9\u4e9b\u5c5e\u6027\u90fd\u662f\u5185\u7f6e\u7684\uff0c\u4e0d\u65b9\u4fbf\u6269\u5c55\u548c\u590d\u7528\u3002\u800c\u7528 React \u521b\u5efa\u7ec4\u4ef6\u7684\u8bdd\uff0c\u53ef\u4ee5\u7ed9\u5b83\u5b9a\u4e49\u4e00\u4e9b\u66f4\u7b26\u5408\u8bed\u4e49\u548c\u903b\u8f91\u7684\u5c5e\u6027\uff0c\u6bd4\u5982\u989c\u8272\u3001\u5c3a\u5bf8\u7b49\u3002",(0,o.kt)("inlineCode",{parentName:"p"},"\x3c!-- truncate --\x3e"),"\u8fd9\u4e9b\u5c5e\u6027\u5728 React \u91cc\u8fb9\u53eb\u505a props\uff0c\u4f60\u53ef\u4ee5\u81ea\u5df1\u5b9a\u4e49\u8fd9\u4e9b\u5c5e\u6027\u5c06\u4f1a\u5f71\u54cd\u5230\u7ec4\u4ef6\u7684\u54ea\u4e9b\u90e8\u5206\u3002\u8fd9\u6837\u7684\u4e00\u4e2a\u7ec4\u4ef6\uff0c\u901a\u8fc7\u7ed9\u5b83\u4e00\u4e2a\u5408\u9002\u7684\u540d\u5b57\uff0c\u6bd4\u5982 Button\uff0c\u90a3\u4e48\u6240\u6709\u6309\u94ae\u7684\u5c55\u73b0\u90fd\u53ef\u4ee5\u7528\u5b83\u6765\u5b9e\u73b0\uff0c\u53ea\u9700\u8981\u6539\u53d8\u5b83\u7684\u5c5e\u6027\u5c31\u53ef\u4ee5\u5c55\u793a\u4e3a\u4e0d\u540c\u7684\u6837\u5f0f\u3002\u90a3\u4eca\u5929\u6211\u5c31\u6559\u4f60\u5b9a\u4e49\u4e00\u4e2a\u8fd9\u6837\u7684\u6309\u94ae\u7ec4\u4ef6\uff0c\u5b83\u6709\u9ed8\u8ba4\u7684\u80cc\u666f\u8272\u3001\u6587\u5b57\u989c\u8272\u3001\u8fd8\u6709\u5b9e\u5fc3\u548c\u7ebf\u6846\u6837\u5f0f\uff0c\u540e\u8fb9\u901a\u8fc7\u5c5e\u6027\uff0cprops\uff0c\u6765\u63a7\u5236\u5b83\u662f\u84dd\u8272\u3001\u7ea2\u8272\u8fd8\u662f\u9ed1\u8272\uff0c\u7136\u540e\u5229\u7528\u53e6\u4e00\u4e2a\u5c5e\u6027\u6765\u63a7\u5236\u5b83\u662f\u5b9e\u5fc3\u7684\u80cc\u666f\u8fd8\u662f\u7ebf\u6846\u7684\u3002\u597d\uff0c\u90a3\u54b1\u4eec\u5f00\u59cb\u5427\u3002"),(0,o.kt)("h2",{id:"\u4f60\u5c06\u5b66\u5230\u7684"},"\u4f60\u5c06\u5b66\u5230\u7684"),(0,o.kt)("p",null,"\u4e0a\u4e00\u5f20\u6548\u679c\u56fe\uff1a"),(0,o.kt)("img",{alt:"",src:(0,l.Z)("img/2020-03-15-learn-react-props-buttons/2020-03-15-19-02-33.png")}),(0,o.kt)("h2",{id:"\u521b\u5efa-react-\u5de5\u7a0b"},"\u521b\u5efa React \u5de5\u7a0b"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u4f7f\u7528 create-react-app \u521b\u5efa\u4e00\u4e2a\u5de5\u7a0b\uff1a"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn create react-app react-button-props\n")),(0,o.kt)("p",{parentName:"li"},"\u7b49\u540c\u4e8e"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npx create-react-app react-button-props\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u6dfb\u52a0 ",(0,o.kt)("inlineCode",{parentName:"p"},"classnames"),"\u4f9d\u8d56\uff08\u7a0d\u540e\u89e3\u91ca\u5b83\u7684\u4f5c\u7528\uff09"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add classnames\n")))),(0,o.kt)("h2",{id:"\u521b\u5efa-button-\u7ec4\u4ef6"},"\u521b\u5efa Button \u7ec4\u4ef6"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"src")," \u4e0b\u8fb9\u65b0\u5efa\u4e00\u4e2a ",(0,o.kt)("inlineCode",{parentName:"p"},"Button")," \u6587\u4ef6\u5939\u3002\u7ec4\u4ef6\u5e94\u8be5\u6709\u81ea\u5df1\u72ec\u7acb\u7684\u6587\u4ef6\u5939\uff0c\u6240\u6709\u8ddf\u8fd9\u4e2a\u7ec4\u4ef6\u6709\u5173\u7684\u6587\u4ef6\uff0c\u6bd4\u5982 css\u3001hooks \u7b49\u90fd\u653e\u5230\u4e00\u8d77\uff0c\u8fd9\u6837\u5728\u67e5\u770b\u4e00\u4e2a\u7ec4\u4ef6\u6e90\u7801\u65f6\uff0c\u76f8\u5e94\u7684\u6587\u4ef6\u90fd\u4f1a\u5728\u4e00\u5757\uff0c\u65b9\u4fbf\u67e5\u627e\u3002\u53e6\u5916\u4e5f\u65b9\u4fbf\u548c\u5176\u4ed6\u4eba\u5171\u4eab\u8fd9\u4e2a\u7ec4\u4ef6\uff0c\u5b83\u662f\u4e00\u4e2a\u72ec\u7acb\u7684\u6574\u4f53\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"Button")," \u6587\u4ef6\u5939\u521b\u5efa ",(0,o.kt)("inlineCode",{parentName:"p"},"index.js")," \u6587\u4ef6\uff0c\u91cc\u8fb9\u653e\u7528\u6765\u5b9a\u4e49\u6309\u94ae\u7ec4\u4ef6\u7684\u4ee3\u7801\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"Button")," \u6587\u4ef6\u5939\u4e0b\u521b\u5efa ",(0,o.kt)("inlineCode",{parentName:"p"},"style.modules.css")," \u6587\u4ef6\uff0c\u5728\u8fd9\u91cc\u54b1\u4eec\u5148\u7528\u666e\u901a\u7684 css \u6765\u5b9a\u4e49\u6309\u94ae\u7684\u6837\u5f0f\uff0c\u540e\u7eed\u7684\u6559\u7a0b\u91cc\u6211\u518d\u7ed9\u4f60\u4ecb\u7ecd ",(0,o.kt)("inlineCode",{parentName:"p"},"styled-components"),"\u3002\u5b83\u662f\u4e00\u4e2a css-in-js \u7684\u89e3\u51b3\u65b9\u6848"),(0,o.kt)("div",{parentName:"li",className:"admonition admonition-important alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"CSS modules \u7684\u4f5c\u7528")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u8fd9\u4e2a\u5e26 modules \u7684 css \u6587\u4ef6\u4f7f\u7528\u4e86 ",(0,o.kt)("inlineCode",{parentName:"p"},"css modules")," \u5e93\uff0c\u5b83\u662f create-react-app \u5de5\u5177\u91cc\u81ea\u5e26\u7684\uff0c\u7528\u6765\u907f\u514d\u5168\u5c40 class \u540d\u5b57\u51b2\u7a81\uff0c\u5728\u666e\u901a css \u4e0b\uff0c\u5982\u679c\u4e0d\u540c\u7684\u6837\u5f0f\u6587\u4ef6\u90fd\u540c\u65f6\u4f7f\u7528\u4e86 ",(0,o.kt)("inlineCode",{parentName:"p"},".button")," \u8fd9\u6837\u7684 class \u540d\uff0c\u90a3\u4e48\u540e\u9762\u7684\u5c31\u4f1a\u628a\u524d\u9762\u7684\u8986\u76d6\u3002\u4f7f\u7528\u4e86 ",(0,o.kt)("inlineCode",{parentName:"p"},"css modules"),"\u4e4b\u540e\uff0c\u5b83\u4f1a\u81ea\u52a8\u751f\u6210\u968f\u673a\u7684 class \u540d\u5b57\u3002\u8fd9\u6837\u8fd9\u4e2a\u7ec4\u4ef6\u91cc\u8fb9\u5b9a\u4e49\u7684 class \u5c31\u4e0d\u4f1a\u88ab\u5176\u4ed6\u7ec4\u4ef6\u5b9a\u4e49\u7684\u540c\u540d\u7684 class \u7ed9\u8986\u76d6\u3002\u5f53\u7136\u4f60\u4e5f\u53ef\u4ee5\u4e0d\u7528\u5b83\uff0c\u6709\u4e9b\u5168\u5c40\u7684 css \u53ef\u4ee5\u76f4\u63a5\u5b9a\u4e49\u5728\u666e\u901a\u7684 css \u6587\u4ef6\u91cc\u3002")))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u7f16\u5199 ",(0,o.kt)("inlineCode",{parentName:"p"},"button")," \u7ec4\u4ef6\u7684\u4ee3\u7801\uff1a"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'import React from "react";\n\nfunction Button(props) {\n  return <button>{props.children}</button>;\n}\n\nexport default Button;\n')),(0,o.kt)("p",{parentName:"li"},"react \u4e2d\u7684\u7ec4\u4ef6\u9ed8\u8ba4\u90fd\u4f1a\u88ab\u4f20\u9012\u4e00\u4e2a ",(0,o.kt)("inlineCode",{parentName:"p"},"props")," \u5c5e\u6027\uff0c\u91cc\u8fb9\u4f1a\u9ed8\u8ba4\u5305\u542b\u4e00\u4e2a children \u5c5e\u6027\uff0c\u4e5f\u5c31\u662f\u8bf4\u5728\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"<Button />")," \u7ec4\u4ef6\u65f6\uff0c\u4e24\u4e2a\u6807\u7b7e\u4e2d\u95f4\u6240\u6709\u7684\u4ee3\u7801\u90fd\u4f1a\u5f53\u4f5c children \u4f20\u9012\u8fdb\u6765\u3002\u4e0a\u8fb9\u7684\u4ee3\u7801\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u7528 rest \u64cd\u4f5c\u7b26\u7b80\u5316\uff1a"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"function Button({ children }) {\n  return <button>{children}</button>;\n}\n")),(0,o.kt)("p",{parentName:"li"},"\u6bd4\u5982\uff1a"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"function App() {\n  // \u4f5c\u4e3a\u6f14\u793a\uff0c\u6211\u5728 App \u7ec4\u4ef6\u91cc\u53c8\u5b9a\u4e49\u4e86\u4e00\u4e2a Button \u7ec4\u4ef6\n  function Button({ children }) {\n    return <button>{children}</button>;\n  }\n  return <Button>\u6309\u94ae</Button>;\n}\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u5220\u9664 App \u7684 return \u4e2d\u7684\u6240\u6709\u7684\u4ee3\u7801\uff0c\u5bfc\u5165 Button \u7ec4\u4ef6\uff0c\u7136\u540e\u628a\u5b83\u5199\u5728 return \u91cc\u8fb9\uff1a"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"function App() {\n  return <Button>\u9ed8\u8ba4\u6309\u94ae</Button>;\n}\n")))),(0,o.kt)("h2",{id:"\u7f16\u5199-button-\u9ed8\u8ba4\u6837\u5f0f"},"\u7f16\u5199 Button \u9ed8\u8ba4\u6837\u5f0f"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u6253\u5f00 Button \u7ec4\u4ef6\u4e0b\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"style.modules.css")," \u6587\u4ef6\uff0c\u5199\u4e0a\u4e0b\u8fb9\u7684 css \u4ee3\u7801\uff1a"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-css"},".button {\n  padding: 12px 48px;\n  border-radius: 24px;\n  background-color: #0076ff;\n  box-shadow: 0px 4px 10px rgba(135, 167, 171, 0.5);\n  font-size: 14px;\n  color: white;\n  font-weight: 500;\n  text-shadow: 0px 0.5px 1px rgba(0, 0, 0, 0.15);\n  outline: none;\n  cursor: pointer;\n}\n")),(0,o.kt)("p",{parentName:"li"},"\u8fd9\u91cc\u628a\u6309\u94ae\u8bbe\u7f6e\u4e86\u80cc\u666f\u3001\u5706\u89d2\u8fb9\u6846\u3001\u5b57\u4f53\u3001\u6307\u9488\u6837\u5f0f\u548c\u9634\u5f71\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u6253\u5f00 Button \u7ec4\u4ef6\u7684 index.js \u6587\u4ef6\uff0c\u5bfc\u5165 css \u6587\u4ef6\u5e76\u8d4b\u503c\u7ed9\u4e00\u4e2a\u53d8\u91cf\uff0c\u8fd9\u91cc\u53eb ",(0,o.kt)("inlineCode",{parentName:"p"},"styles"),"\uff1a"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'import styles from "./styles.module.css";\n'))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u7ed9 Button \u7ec4\u4ef6\u52a0\u4e0a className \u5c5e\u6027\uff0c\u8fd9\u91cc\u53ef\u4ee5\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"styles.button")," \u6765\u8bbf\u95ee css \u6587\u4ef6\u4e2d\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},".button")," \u7684\u6837\u5f0f\uff1a"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"<button className={styles.button}>{children}</button>\n")),(0,o.kt)("p",{parentName:"li"},"\u53ef\u4ee5\u5728\u9875\u9762\u4e0a\u770b\u5230\uff0c\u8fd9\u4e2a\u9ed8\u8ba4\u6309\u94ae\u7684\u6837\u5f0f\u5df2\u7ecf\u52a0\u8f7d\u597d\u4e86\u3002"))),(0,o.kt)("h2",{id:"\u7528-props-\u7ed9-button-\u4e0d\u540c\u7684\u6837\u5f0f"},"\u7528 Props \u7ed9 Button \u4e0d\u540c\u7684\u6837\u5f0f"),(0,o.kt)("p",null,"\u5728\u7ed9 Button \u5199\u5b8c\u9ed8\u8ba4\u6837\u5f0f\u4e4b\u540e\uff0c\u54b1\u4eec\u518d\u6765\u5b9a\u4e49\u5b83\u51e0\u4e2a\u53d8\u4f53\uff0c\u6bd4\u5982\u7ea2\u8272\u3001\u9ed1\u8272\u3002\u4f60\u53ef\u4ee5\u5728 Button \u91cc\u591a\u6dfb\u52a0\u4e00\u4e2a color \u5c5e\u6027\uff0c\u4ee3\u8868\u5176\u4ed6\u7ec4\u4ef6\u4f7f\u7528\u5b83\u65f6\uff0c\u53ef\u4ee5\u4f20\u9012\u4e00\u4e2a color \u5c5e\u6027\uff0cButton \u4f1a\u6839\u636e\u5b83\u7684\u503c\u663e\u793a\u4e0d\u540c\u7684\u989c\u8272\uff0c\u8fd9\u91cc\u6211\u5047\u8bbe\u5b83\u6709\u4e09\u79cd\uff0c\u4e00\u79cd\u662f\u9ed8\u8ba4\u7684\u84dd\uff0c\u5c31\u662f\u4e0d\u4f20 color \u7684\u65f6\u5019\u7684\u989c\u8272\uff0c\u4e00\u79cd\u662f\u7ea2\u8272\uff0ccolor \u7684\u503c\u4e3a red \u7684\u65f6\u5019\u663e\u793a\uff0c\u4e00\u79cd\u662f\u9ed1\u8272\uff0c\u5728 color \u4e3a black \u7684\u65f6\u5019\u663e\u793a\u3002\u9996\u5148\u54b1\u4eec\u5148\u628a\u8fd9\u4e24\u79cd\u989c\u8272\u7684 css \u6837\u5f0f\u5b9a\u4e49\u597d\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-css"},".red {\n  background-color: #ff4059;\n}\n\n.black {\n  background-color: #2e3434;\n}\n")),(0,o.kt)("h3",{id:"classnames-\u7ec4\u5408\u6837\u5f0f"},"classnames \u7ec4\u5408\u6837\u5f0f"),(0,o.kt)("p",null,"\u5728\u5b9a\u4e49\u5b8c\u8fd9\u4e24\u4e2a\u989d\u5916\u7684\u6837\u5f0f\u4e4b\u540e\uff0c\u9700\u8981\u628a\u5b83\u548c ",(0,o.kt)("inlineCode",{parentName:"p"},".button"),"\u5b9a\u4e49\u7684\u6837\u5f0f\u7ec4\u5408\u8d77\u6765\u3002\u8fd9\u91cc\u53ef\u4ee5\u624b\u52a8\u53bb\u62fc\uff0c\u4e5f\u53ef\u4ee5\u7528\u4e4b\u524d\u521a\u5f00\u59cb\u5b89\u88c5\u7684 classnames \u4f9d\u8d56\u5e93\u3002\u5b83\u53ef\u4ee5\u6839\u636e\u6761\u4ef6\u6765\u7ec4\u5408 className\uff0c\u53ea\u6709\u6ee1\u8db3\u4e00\u5b9a\u6761\u4ef6\u7684 class \u624d\u4f1a\u88ab\u7ec4\u5408\u8fdb\u6765\uff0c\u5728\u54b1\u4eec\u8fd9\u91cc\uff0c\u53ef\u4ee5\u8fd9\u6837\u4f7f\u7528\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'<button\n  className={classNames(styles.button, {\n    [styles.red]: color === "red",\n    [styles.black]: color === "black"\n  })}\n>\n  {children}\n</button>\n')),(0,o.kt)("p",null,"\u5b83\u63a5\u6536\u591a\u4e2a\u53c2\u6570\uff0c\u7b2c\u4e00\u4e2a\u76f4\u63a5\u4f20\u9012\u4e86 styles.button \u8fd9\u4e2a class\uff0c\u8bf4\u660e\u5b83\u65e0\u8bba\u5176\u5b83\u5c5e\u6027\u600e\u4e48\u53d8\u5316\uff0c\u5b83\u90fd\u662f\u8981\u6709\u7684\uff0c\u6700\u540e\u4f20\u9012\u4e86\u4e00\u4e2a\u5bf9\u8c61\uff0c\u5bf9\u8c61\u7684 key \u662f styles \u4e2d\u7684 class \u7684\u540d\u5b57\uff0cvalue \u662f boolean \u7c7b\u578b\u7684\uff0c\u9700\u8981\u4e00\u4e2a\u6761\u4ef6\uff0c\u8fd4\u56de true \u5c31\u628a\u8fd9\u4e2a class \u52a0\u5230\u7ec4\u5408\u4e2d\uff0cfalse \u5c31\u4e0d\u52a0\u3002\u90a3\u8fd9\u91cc\uff0c\u5982\u679c color \u7684\u503c\u662f red\uff0c\u90a3\u4e48 button \u4e2d\u5c31\u4f1a\u6709 ",(0,o.kt)("inlineCode",{parentName:"p"},".red")," \u5b9a\u4e49\u7684\u6837\u5f0f\u3002"),(0,o.kt)("p",null,"\u518d\u5728 App.js \u4e2d\u6dfb\u52a0\u4e24\u4e2a\u6309\u94ae \b\uff0c\u4e00\u4e2a color \u8bbe\u7f6e\u4e3a red\uff0c\u4e00\u4e2a color \u8bbe\u7f6e\u4e3a black:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'<main>\n  <div>\n    <Button>\u9ed8\u8ba4\u6309\u94ae</Button>\n    <Button color="red">\u7ea2\u8272\u6309\u94ae</Button>\n    <Button color="black">\u9ed1\u8272\u6309\u94ae</Button>\n  </div>\n</main>\n')),(0,o.kt)("p",null,"\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0creact \u8981\u6c42\u5728\u8fd4\u56de\u7684 JSX \u4e2d\u53ea\u80fd\u6709\u4e00\u4e2a\u9876\u7ea7\u7684\u6807\u7b7e\uff0c\u4e0d\u80fd\u6709\u5e76\u5217\u7684\u591a\u4e2a\uff0c\u6bd4\u5982\u4e0d\u80fd\u540c\u65f6\u5199\u4e09\u4e2a button\uff0c\u9700\u8981\u628a\u5b83\u4eec\u5305\u88c5\u5728\u4e00\u4e2a\u5927\u7684\u6807\u7b7e\u4e0b\uff0c\u8fd9\u91cc\u6211\u7528\u4e86\u4e00\u4e2a main\uff0c\u4f5c\u4e3a\u5185\u5bb9\u5bb9\u5668\uff0c\u91cc\u8fb9\u6709\u4e00\u4e2a div \u662f button \u7684\u5bb9\u5668\u3002"),(0,o.kt)("h3",{id:"\u7ebf\u6846\u6837\u5f0f"},"\u7ebf\u6846\u6837\u5f0f"),(0,o.kt)("p",null,"\u5982\u679c\u518d\u52a0\u4e00\u7ec4\u7ebf\u6846\u6837\u5f0f\u7684\u6309\u94ae\u5462\uff1f\u5f88\u7b80\u5355\uff0c\u6211\u518d\u52a0\u4e00\u4e2a ",(0,o.kt)("inlineCode",{parentName:"p"},"type"),"\u5c5e\u6027\uff0c\u9ed8\u8ba4\u662f ",(0,o.kt)("inlineCode",{parentName:"p"},"primary"),"\u7684\uff0c\u4e3b\u8981\u6309\u94ae\uff0c\u7ebf\u6846\u6309\u94ae\u7684 type \u53eb\u5b83 ",(0,o.kt)("inlineCode",{parentName:"p"},"secondary")," \u6b21\u8981\u6309\u94ae\uff0c\u7136\u540e classnames \u6dfb\u52a0\u4e00\u4e2a\u65b0\u7684 class\uff0c\u5728 type \u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"secondary")," \u7684\u65f6\u5019\u8ffd\u52a0\u5230\u7ec4\u5408\u4e2d\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'function Button({ children, type = "primary", color = "blue" }) {\n  return (\n    <button\n      className={classNames(styles.button, {\n        [styles.red]: color === "red",\n        [styles.black]: color === "black",\n        [styles.secondary]: type === "secondary"\n      })}\n    >\n      {children}\n    </button>\n  );\n}\n')),(0,o.kt)("p",null,"\u63a5\u4e0b\u6765\u5b9a\u4e49 ",(0,o.kt)("inlineCode",{parentName:"p"},"secondary")," \u6837\u5f0f\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-css"},".secondary {\n  background: none;\n  border: 2px solid #0076ff;\n  color: #0076ff;\n}\n\n.secondary.red {\n  border-color: #ff4059;\n  color: #ff4059;\n}\n\n.secondary.black {\n  border-color: #2e3434;\n  color: #2e3434;\n}\n")),(0,o.kt)("p",null,"\u5728\u8fd9\u91cc\u6211\u628a\u9ed8\u8ba4\u84dd\u8272\u3001\u7ea2\u8272\u3001\u9ed1\u8272\u6309\u94ae\u7684\u8fb9\u6846\u548c\u6587\u5b57\u90fd\u8bbe\u7f6e\u4e86\u4e0d\u540c\u7684\u989c\u8272\u3002"),(0,o.kt)("h2",{id:"\u663e\u793a\u6240\u6709\u6309\u94ae\u6837\u5f0f"},"\u663e\u793a\u6240\u6709\u6309\u94ae\u6837\u5f0f"),(0,o.kt)("p",null,"\u5728 App.js \u4e2d\u54b1\u4eec\u663e\u793a\u6240\u6709\u4e0d\u540c\u5c5e\u6027\u7684\u6309\u94ae\uff0c\u7136\u540e\u7ed9\u6309\u94ae\u5bb9\u5668\u52a0\u4e0a\u4e00\u4e2a className\uff0c\u7528\u6765\u5bf9\u6309\u94ae\u8fdb\u884c\u6392\u7248\uff0c\u8fd9\u91cc\u6211\u76f4\u63a5\u7528\u4e86\u666e\u901a\u7684 css \u6837\u5f0f\uff0c\u4e5f\u5c31\u662f\u521b\u5efa\u5de5\u7a0b\u65f6\u7ed9\u751f\u6210\u597d\u7684 App.css\uff0c\u76f4\u63a5\u628a\u5b83\u5bfc\u5165\u8fdb\u6765\uff1a"),(0,o.kt)("p",null,"App.js"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'// \u7701\u7565\u51fd\u6570\u5b9a\u4e49\n<main>\n  <div className="btn__container">\n    <Button>\u9ed8\u8ba4\u6309\u94ae</Button>\n    <Button color="red">\u7ea2\u8272\u6309\u94ae</Button>\n    <Button color="black">\u9ed1\u8272\u6309\u94ae</Button>\n    <Button type="secondary">\u7ebf\u6846\u6309\u94ae</Button>\n    <Button type="secondary" color="red">\n      \u7ebf\u6846\u6309\u94ae\n    </Button>\n    <Button type="secondary" color="black">\n      \u7ebf\u6846\u6309\u94ae\n    </Button>\n  </div>\n</main>\n')),(0,o.kt)("p",null,"App.css"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-css"},"main {\n  width: 100vw;\n  height: 100vh;\n  background-color: #f2f2f2;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.btn__container {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  column-gap: 24px;\n  row-gap: 24px;\n  align-content: center;\n  justify-items: center;\n}\n")),(0,o.kt)("p",null,"\u597d\u4e86\uff0c\u8fd9\u4e2a\u4f7f\u7528 React Props \u6765\u5c55\u793a\u4e0d\u540c\u6837\u5f0f\u7684\u6309\u94ae\u5230\u8fd9\u91cc\u5c31\u7ed3\u675f\u4e86\uff0c\u91cc\u8fb9\u51e0\u4e2a\u6982\u5ff5\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"React \u7ec4\u4ef6\u9ed8\u8ba4\u4f1a\u4f20\u9012 Props \u53c2\u6570"),(0,o.kt)("li",{parentName:"ul"},"\u4f7f\u7528 props \u53ef\u4ee5\u4f20\u9012\u4efb\u4f55\u81ea\u5b9a\u4e49\u7684\u5c5e\u6027"),(0,o.kt)("li",{parentName:"ul"},"\u7ec4\u4ef6\u76f8\u5173\u7684\u6587\u4ef6\u90fd\u653e\u5230\u4e00\u4e2a\u6587\u4ef6\u5939\u91cc"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"css modules")," - \u7528\u6765\u751f\u6210\u968f\u673a\u5c40\u90e8 class \u540d\u5b57"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"classnames")," - \u7528\u6765\u7ec4\u5408\u591a\u4e2a class")))}m.isMDXComponent=!0}}]);