(self.webpackChunkzxuqian_cn=self.webpackChunkzxuqian_cn||[]).push([[3852],{2122:function(t,e,n){"use strict";function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}n.d(e,{Z:function(){return r}})},9756:function(t,e,n){"use strict";function r(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}n.d(e,{Z:function(){return r}})},3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var c=r.createContext({}),l=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=l(t.components);return r.createElement(c.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},p=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,c=t.parentName,u=s(t,["components","mdxType","originalType","parentName"]),p=l(n),f=a,m=p["".concat(c,".").concat(f)]||p[f]||d[f]||o;return n?r.createElement(m,i(i({ref:e},u),{},{components:n})):r.createElement(m,i({ref:e},u))}));function f(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var c in e)hasOwnProperty.call(e,c)&&(s[c]=e[c]);s.originalType=t,s.mdxType="string"==typeof t?t:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},9294:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return l},default:function(){return d}});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),i={id:"css-tutorial-intro",title:"CSS \u5b8c\u5168\u6307\u5357\u7b80\u4ecb",date:new Date("2023-05-20T00:00:00.000Z"),description:"CSS \u5b8c\u5168\u6307\u5357\u6559\u7a0b\u7528\u4e8e\u5b66\u4e60 CSS \u7684\u8bed\u6cd5\u3001\u5e38\u89c1\u7684\u5e03\u5c40\u5b9e\u73b0\uff08\u4f8b\u5982 Grid\u3001Flex \u5e03\u5c40\uff09\u3001\u4ee5\u53ca\u8fdb\u9636\u7684\u6837\u5f0f\u5b9e\u73b0\uff08\u4f8b\u5982\u54cd\u5e94\u5f0f\u5e03\u5c40\u3001\u52a8\u753b\u30013D\u53d8\u6362\u548c\u7ed8\u56fe\u76f8\u5173)",keywords:["css","css \u5b8c\u5168\u6307\u5357","css \u6559\u7a0b","frontend"]},s=void 0,c={unversionedId:"css/css-tutorial-intro",id:"css/css-tutorial-intro",isDocsHomePage:!1,title:"CSS \u5b8c\u5168\u6307\u5357\u7b80\u4ecb",description:"CSS \u5b8c\u5168\u6307\u5357\u6559\u7a0b\u7528\u4e8e\u5b66\u4e60 CSS \u7684\u8bed\u6cd5\u3001\u5e38\u89c1\u7684\u5e03\u5c40\u5b9e\u73b0\uff08\u4f8b\u5982 Grid\u3001Flex \u5e03\u5c40\uff09\u3001\u4ee5\u53ca\u8fdb\u9636\u7684\u6837\u5f0f\u5b9e\u73b0\uff08\u4f8b\u5982\u54cd\u5e94\u5f0f\u5e03\u5c40\u3001\u52a8\u753b\u30013D\u53d8\u6362\u548c\u7ed8\u56fe\u76f8\u5173)",source:"@site/docs/css/01-css-tutorial-intro.md",sourceDirName:"css",slug:"/css/css-tutorial-intro",permalink:"/en/docs/css/css-tutorial-intro",editUrl:"https://github.com/qzyzz/Blog/tree/master/docs/css/01-css-tutorial-intro.md",version:"current",lastUpdatedAt:1685603254,formattedLastUpdatedAt:"6/1/2023",sidebarPosition:1,frontMatter:{id:"css-tutorial-intro",title:"CSS \u5b8c\u5168\u6307\u5357\u7b80\u4ecb",date:"2023-05-20T00:00:00.000Z",description:"CSS \u5b8c\u5168\u6307\u5357\u6559\u7a0b\u7528\u4e8e\u5b66\u4e60 CSS \u7684\u8bed\u6cd5\u3001\u5e38\u89c1\u7684\u5e03\u5c40\u5b9e\u73b0\uff08\u4f8b\u5982 Grid\u3001Flex \u5e03\u5c40\uff09\u3001\u4ee5\u53ca\u8fdb\u9636\u7684\u6837\u5f0f\u5b9e\u73b0\uff08\u4f8b\u5982\u54cd\u5e94\u5f0f\u5e03\u5c40\u3001\u52a8\u753b\u30013D\u53d8\u6362\u548c\u7ed8\u56fe\u76f8\u5173)",keywords:["css","css \u5b8c\u5168\u6307\u5357","css \u6559\u7a0b","frontend"]},sidebar:"css_tutorials",next:{title:"CSS \u7b80\u4ecb",permalink:"/en/docs/css/basic/css-intro"}},l=[{value:"\u76ee\u6807\u8bfb\u8005",id:"\u76ee\u6807\u8bfb\u8005",children:[]},{value:"CSS \u96be\u5417\uff1f",id:"css-\u96be\u5417\uff1f",children:[]},{value:"\u5982\u4f55\u5b66\u4e60",id:"\u5982\u4f55\u5b66\u4e60",children:[]}],u={toc:l};function d(t){var e=t.components,n=(0,a.Z)(t,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"CSS \u5b8c\u5168\u6307\u5357\u6559\u7a0b\u7528\u4e8e\u5b66\u4e60 CSS \u7684\u8bed\u6cd5\u3001\u5e38\u89c1\u7684\u5e03\u5c40\u5b9e\u73b0\uff08\u4f8b\u5982 Grid\u3001Flex \u5e03\u5c40\uff09\u3001\u4ee5\u53ca\u8fdb\u9636\u7684\u6837\u5f0f\u5b9e\u73b0\uff08\u4f8b\u5982\u54cd\u5e94\u5f0f\u5e03\u5c40\u3001\u52a8\u753b\u30013D\u53d8\u6362\u548c\u7ed8\u56fe\u76f8\u5173)\u3002"),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"\u6ce8\u610f")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u672c\u6559\u7a0b\u4f1a\u6301\u7eed\u66f4\u65b0\uff0c\u524d\u671f\u5148\u628a\u5185\u5bb9\u66f4\u65b0\u5b8c\u6210\uff0c\u540e\u671f\u4f1a\u8fdb\u884c\u6821\u5bf9\u3001\u8865\u5145\u548c\u4fee\u6539\uff0c\u4f7f\u5f97\u6559\u7a0b\u66f4\u52a0\u5b8c\u5584\uff0c\u8bf7\u6301\u7eed\u5173\u6ce8\uff01"))),(0,o.kt)("h2",{id:"\u76ee\u6807\u8bfb\u8005"},"\u76ee\u6807\u8bfb\u8005"),(0,o.kt)("p",null,"\u8fd9\u4e2a\u6559\u7a0b\u7684\u76ee\u6807\u8bfb\u8005\u662f\u521a\u5165\u95e8\u5b66\u4e60 CSS \u7684\u8f6f\u4ef6\u5de5\u7a0b\u5e08\uff0c\u6216\u8005\u5bf9 CSS\u3001\u7f51\u9875\u8bbe\u8ba1\u4e0e\u5236\u4f5c\u611f\u5174\u8da3\u7684\u4eba\u3002\u5728\u5b66\u5b8c\u672c\u6559\u7a0b\u4e4b\u540e\uff0c\u4f60\u5c31\u53ef\u4ee5\u4f7f\u7528 CSS\uff0c\u5236\u4f5c\u51fa\u4efb\u4f55\u4f60\u60f3\u505a\u7684 UI\u3001\u9875\u9762\u3001\u56fe\u5f62\u548c\u52a8\u6548\u3002"),(0,o.kt)("h2",{id:"css-\u96be\u5417\uff1f"},"CSS \u96be\u5417\uff1f"),(0,o.kt)("p",null,"\u4e00\u822c\u524d\u7aef\u5de5\u7a0b\u5e08\u90fd\u89c9\u5f97 CSS \u6bd4\u8f83\u96be\uff0c\u8fd9\u4e3b\u8981\u662f\u56e0\u4e3a CSS \u5bf9\u4e8e\u5ba1\u7f8e\u3001\u8bbe\u8ba1\u548c\u827a\u672f\u65b9\u9762\u6709\u4e00\u70b9\u70b9\u7684\u8981\u6c42\u3002\u5728\u638c\u63e1\u4e86\u57fa\u7840\u8bed\u6cd5\u4e4b\u540e\uff0c\u6211\u4eec\u9700\u8981\u5728\u719f\u6089\u8fd9\u4e9b\u8bed\u6cd5\u7684\u57fa\u7840\u4e0a\uff0c\u53bb\u53d1\u6325\u81ea\u5df1\u7684\u521b\u610f\uff0c\u6765\u6784\u9020\u5343\u53d8\u4e07\u5316\u7684\u6837\u5f0f\u3002CSS \u96be\u5c31\u96be\u5728",(0,o.kt)("strong",{parentName:"p"},"\u5b83\u80fd\u7ec4\u5408\u51fa\u6765\u7684\u4e1c\u897f\u662f\u591a\u79cd\u591a\u6837\uff0c\u662f\u65e0\u6570\u7684"),"\uff0c\u4f60\u6709\u591a\u5927\u7684\u521b\u610f\uff0c\u5c31\u80fd\u5199\u51fa\u591a\u7eda\u4e3d\u7684\u6548\u679c\u3002"),(0,o.kt)("p",null,"\u6240\u4ee5\u5e76\u4e0d\u662f\u8bf4\u628a CSS \u57fa\u7840\u5b66\u4f1a\u4e86\uff0c\u5c31\u80fd\u591f\u505a\u51fa\u4e1c\u897f\u6765\u4e86\uff0c\u800c\u662f\u9700\u8981\u6162\u6162\u7684\u79ef\u7d2f\uff0c\u628a\u4e00\u4e9b\u5e38\u89c1\u7684\u6837\u5f0f\u548c\u52a8\u6548\u638c\u63e1\u4e86\uff0c\u7b49\u6709\u4e86\u79ef\u7d2f\u4e4b\u540e\uff0c\u5c31\u80fd\u591f\u5728\u8fd9\u4e9b\u57fa\u7840\u4e0a\u5b9e\u73b0\u66f4\u590d\u6742\u7684\u6837\u5f0f\u3002"),(0,o.kt)("h2",{id:"\u5982\u4f55\u5b66\u4e60"},"\u5982\u4f55\u5b66\u4e60"),(0,o.kt)("p",null,"\u672c\u6559\u7a0b\u4f1a\u7528\u901a\u4fd7\u7b80\u7ec3\u7684\u8bed\u8a00\u3001\u751f\u52a8\u7684\u793a\u4f8b\uff0c\u6765\u5b8c\u6574\u7684\u4ecb\u7ecd CSS \u7684\u5404\u9879\u8bed\u6cd5\u89c4\u5219\u548c\u4f7f\u7528\u65b9\u6cd5\u3002\u6bcf\u4e2a\u5c0f\u8282\u90fd\u5df2",(0,o.kt)("strong",{parentName:"p"},"\u5177\u4f53\u8981\u5b9e\u73b0\u7684\u76ee\u6807\u4e3a\u6807\u9898"),"\uff0c\u65b9\u4fbf\u5927\u5bb6\u5feb\u901f\u7684\u67e5\u8be2\uff0c\u627e\u5230\u60f3\u8981\u5b9e\u73b0\u7684\u6548\u679c\u3002\u5982\u679c\u4f60\u6709\u65f6\u95f4\u7684\u8bdd\uff0c\u5c3d\u91cf\u628a\u6bcf\u4e00\u4e2a\u5c0f\u8282\u7684\u4ee3\u7801\u90fd\u81ea\u5df1\u53bb\u5199\u4e00\u904d\uff0c\u8fd9\u6837\u624d\u80fd\u8bb0\u5f97\u4f4f\u3001\u5b66\u7684\u4f1a\u3002"),(0,o.kt)("span",null,"\n    ",(0,o.kt)("ins",{parentName:"span",className:"adsbygoogle",style:{display:"block",textAlign:"center"},"data-ad-layout":"in-article","data-ad-format":"fluid","data-ad-client":"ca-pub-3487507367729662","data-ad-slot":"3539166782"}),"\n  ",(0,o.kt)("script",{parentName:"span"},"\n     (adsbygoogle = window.adsbygoogle || []).push({});\n  ")),(0,o.kt)("span",null,"\n    ",(0,o.kt)("ins",{parentName:"span",className:"adsbygoogle",style:{display:"block",textAlign:"center"},"data-ad-layout":"in-article","data-ad-format":"fluid","data-ad-client":"ca-pub-3487507367729662","data-ad-slot":"1964508460"}),"\n  ",(0,o.kt)("script",{parentName:"span"},"\n     (adsbygoogle = window.adsbygoogle || []).push({});\n  ")),(0,o.kt)("p",null,"\u597d\u4e86\uff0c\u73b0\u5728\u8ba9\u6211\u4eec\u5f00\u59cb\u5b66\u4e60\u5427\uff01"))}d.isMDXComponent=!0}}]);