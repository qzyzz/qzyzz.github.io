(self.webpackChunkzxuqian_cn=self.webpackChunkzxuqian_cn||[]).push([[5460],{2122:function(e,t,r){"use strict";function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}r.d(t,{Z:function(){return n}})},9756:function(e,t,r){"use strict";function n(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}r.d(t,{Z:function(){return n}})},3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return d},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=l(r),m=a,f=u["".concat(s,".").concat(m)]||u[m]||p[m]||i;return r?n.createElement(f,o(o({ref:t},d),{},{components:r})):n.createElement(f,o({ref:t},d))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},2924:function(e,t,r){"use strict";var n=r(7294).createContext(void 0);t.Z=n},5350:function(e,t,r){"use strict";var n=r(7294),a=r(2924);t.Z=function(){var e=(0,n.useContext)(a.Z);if(null==e)throw new Error('"useThemeContext" is used outside of "Layout" component. Please see https://docusaurus.io/docs/api/themes/configuration#usethemecontext.');return e}},1712:function(e,t,r){"use strict";r.d(t,{Z:function(){return s}});var n=r(7294),a=r(5697),i=r.n(a),o="videoFrame_d6vX";function c(e){var t=e.src;e.bsrc;return n.createElement(n.Fragment,null,n.createElement("iframe",{src:t,loading:"lazy",scrolling:"no",border:0,frameBorder:"no",framespacing:0,allowFullScreen:!0,className:o}))}c.propTypes={src:i().string.isRequired,bsrc:i().string};var s=c},7349:function(e,t,r){"use strict";r.r(t),r.d(t,{contentTitle:function(){return u},default:function(){return y},frontMatter:function(){return p},metadata:function(){return m},toc:function(){return f}});var n=r(2122),a=r(9756),i=r(7294),o=r(3905),c=r(1712),s=(r(5697),r(5350));function l(e){var t=e.slug,r=e.title,n=e.height,a=void 0===n?"600px":n,o="https://codesandbox.io/embed/"+t+"?fontsize=14&hidenavigation=1&view=preview&theme="+((0,s.Z)().isDarkTheme?"dark":"light");return i.createElement("div",null,i.createElement("iframe",{src:o,style:{width:"100%",height:a,border:0,"border-radius":"4px",overflow:"hidden"},title:r,allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}))}l.propTypes={};var d=l,p={id:"5-react-spring-animations",title:"\u7cbe\u9009 5 \u4e2a React Spring \u524d\u7aef\u52a8\u753b",description:"\u6765\u81ea react-spring \u5b98\u7f51\u7684 5 \u4e2a\u9177\u70ab\u3001\u590d\u6742\u7684\u52a8\u753b\u793a\u4f8b\uff0c\u901a\u8fc7\u5b66\u4e60\u4ee3\u7801\u53ef\u4ee5\u638c\u63e1\u9ad8\u7ea7\u52a8\u753b\u7684\u5b9e\u73b0\u65b9\u5f0f\u3002React Spring \u662f\u4e00\u4e2a\u7269\u7406\u5f39\u7c27\u4eff\u771f\u52a8\u753b\u5b9e\u73b0\u5e93\u3002",slug:"../5-react-spring-examples"},u=void 0,m={unversionedId:"videos/react/03-5-react-spring-animations/5-react-spring-animations",id:"videos/react/03-5-react-spring-animations/5-react-spring-animations",isDocsHomePage:!1,title:"\u7cbe\u9009 5 \u4e2a React Spring \u524d\u7aef\u52a8\u753b",description:"\u6765\u81ea react-spring \u5b98\u7f51\u7684 5 \u4e2a\u9177\u70ab\u3001\u590d\u6742\u7684\u52a8\u753b\u793a\u4f8b\uff0c\u901a\u8fc7\u5b66\u4e60\u4ee3\u7801\u53ef\u4ee5\u638c\u63e1\u9ad8\u7ea7\u52a8\u753b\u7684\u5b9e\u73b0\u65b9\u5f0f\u3002React Spring \u662f\u4e00\u4e2a\u7269\u7406\u5f39\u7c27\u4eff\u771f\u52a8\u753b\u5b9e\u73b0\u5e93\u3002",source:"@site/docs/videos/react/03-5-react-spring-animations/index.md",sourceDirName:"videos/react/03-5-react-spring-animations",slug:"/videos/react/5-react-spring-examples",permalink:"/en/docs/videos/react/5-react-spring-examples",editUrl:"https://github.com/qzyzz/Blog/tree/master/docs/videos/react/03-5-react-spring-animations/index.md",version:"current",lastUpdatedAt:1684829501,formattedLastUpdatedAt:"5/23/2023",frontMatter:{id:"5-react-spring-animations",title:"\u7cbe\u9009 5 \u4e2a React Spring \u524d\u7aef\u52a8\u753b",description:"\u6765\u81ea react-spring \u5b98\u7f51\u7684 5 \u4e2a\u9177\u70ab\u3001\u590d\u6742\u7684\u52a8\u753b\u793a\u4f8b\uff0c\u901a\u8fc7\u5b66\u4e60\u4ee3\u7801\u53ef\u4ee5\u638c\u63e1\u9ad8\u7ea7\u52a8\u753b\u7684\u5b9e\u73b0\u65b9\u5f0f\u3002React Spring \u662f\u4e00\u4e2a\u7269\u7406\u5f39\u7c27\u4eff\u771f\u52a8\u753b\u5b9e\u73b0\u5e93\u3002",slug:"../5-react-spring-examples"},sidebar:"videos",previous:{title:"React \u72b6\u6001\u548c\u4e8b\u4ef6\u5904\u7406\uff0c\u5236\u4f5c\u6e10\u53d8\u80cc\u666f\u751f\u6210\u5668",permalink:"/en/docs/videos/react/react-state-event-exmaple"},next:{title:"React + Docusaurus \u535a\u5ba2\u5217\u8868\u89c6\u56fe\u5b9e\u73b0",permalink:"/en/docs/videos/react/react-docusaurus-blog-list-view"}},f=[{value:"\u89c6\u9891",id:"\u89c6\u9891",children:[]},{value:"\u53ef\u62d6\u62fd\u5217\u8868",id:"\u53ef\u62d6\u62fd\u5217\u8868",children:[]},{value:"\u89c6\u5dee\u6eda\u52a8",id:"\u89c6\u5dee\u6eda\u52a8",children:[]},{value:"\u6251\u514b\u724c",id:"\u6251\u514b\u724c",children:[]},{value:"\u8f6e\u64ad\u56fe",id:"\u8f6e\u64ad\u56fe",children:[]},{value:"\u52a8\u6001\u6392\u5217",id:"\u52a8\u6001\u6392\u5217",children:[]}],g={toc:f};function y(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u89c6\u9891"},"\u89c6\u9891"),(0,o.kt)(c.Z,{src:"//player.bilibili.com/player.html?aid=5430561488&bvid=BV1Ei4y157bU&cid=265332393&page=1",bsrc:"https://www.bilibili.com/video/BV1Ei4y157bU/",mdxType:"BVideo"}),(0,o.kt)("h2",{id:"\u53ef\u62d6\u62fd\u5217\u8868"},"\u53ef\u62d6\u62fd\u5217\u8868"),(0,o.kt)(d,{slug:"r5qmj8m6lq",title:"\u53ef\u62d6\u62fd\u5217\u8868",mdxType:"CodeSandBox"}),(0,o.kt)("h2",{id:"\u89c6\u5dee\u6eda\u52a8"},"\u89c6\u5dee\u6eda\u52a8"),(0,o.kt)(d,{slug:"py912w5k6m",title:"\u89c6\u5dee\u6eda\u52a8",mdxType:"CodeSandBox"}),(0,o.kt)("h2",{id:"\u6251\u514b\u724c"},"\u6251\u514b\u724c"),(0,o.kt)("span",null,"\n    ",(0,o.kt)("ins",{parentName:"span",className:"adsbygoogle",style:{display:"block",textAlign:"center"},"data-ad-layout":"in-article","data-ad-format":"fluid","data-ad-client":"ca-pub-3487507367729662","data-ad-slot":"3539166782"}),"\n  ",(0,o.kt)("script",{parentName:"span"},"\n     (adsbygoogle = window.adsbygoogle || []).push({});\n  ")),(0,o.kt)(d,{slug:"j0y0vpz59",title:"\u6251\u514b\u724c",mdxType:"CodeSandBox"}),(0,o.kt)("h2",{id:"\u8f6e\u64ad\u56fe"},"\u8f6e\u64ad\u56fe"),(0,o.kt)(d,{slug:"n9vo1my91p",title:"\u8f6e\u64ad\u56fe",mdxType:"CodeSandBox"}),(0,o.kt)("h2",{id:"\u52a8\u6001\u6392\u5217"},"\u52a8\u6001\u6392\u5217"),(0,o.kt)("span",null,"\n    ",(0,o.kt)("ins",{parentName:"span",className:"adsbygoogle",style:{display:"block",textAlign:"center"},"data-ad-layout":"in-article","data-ad-format":"fluid","data-ad-client":"ca-pub-3487507367729662","data-ad-slot":"1964508460"}),"\n  ",(0,o.kt)("script",{parentName:"span"},"\n     (adsbygoogle = window.adsbygoogle || []).push({});\n  ")),(0,o.kt)(d,{slug:"26mjowzpr",title:"\u52a8\u6001\u6392\u5217",mdxType:"CodeSandBox"}))}y.isMDXComponent=!0}}]);