(self.webpackChunkzxuqian_cn=self.webpackChunkzxuqian_cn||[]).push([[3048],{2122:function(e,r,n){"use strict";function t(){return(t=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}n.d(r,{Z:function(){return t}})},9756:function(e,r,n){"use strict";function t(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}n.d(r,{Z:function(){return t}})},3905:function(e,r,n){"use strict";n.d(r,{Zo:function(){return c},kt:function(){return g}});var t=n(7294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function d(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=t.createContext({}),p=function(e){var r=t.useContext(i),n=r;return e&&(n="function"==typeof e?e(r):d(d({},r),e)),n},c=function(e){var r=p(e.components);return t.createElement(i.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},u=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),g=a,m=u["".concat(i,".").concat(g)]||u[g]||s[g]||o;return n?t.createElement(m,d(d({ref:r},c),{},{components:n})):t.createElement(m,d({ref:r},c))}));function g(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=n.length,d=new Array(o);d[0]=u;var l={};for(var i in r)hasOwnProperty.call(r,i)&&(l[i]=r[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,d[1]=l;for(var p=2;p<o;p++)d[p]=n[p];return t.createElement.apply(null,d)}return t.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1712:function(e,r,n){"use strict";n.d(r,{Z:function(){return i}});var t=n(7294),a=n(5697),o=n.n(a),d="videoFrame_d6vX";function l(e){var r=e.src;e.bsrc;return t.createElement(t.Fragment,null,t.createElement("iframe",{src:r,loading:"lazy",scrolling:"no",border:0,frameBorder:"no",framespacing:0,allowFullScreen:!0,className:d}))}l.propTypes={src:o().string.isRequired,bsrc:o().string};var i=l},6652:function(e,r,n){"use strict";n.r(r),n.d(r,{frontMatter:function(){return l},contentTitle:function(){return i},metadata:function(){return p},toc:function(){return c},default:function(){return u}});var t=n(2122),a=n(9756),o=(n(7294),n(3905)),d=n(1712),l={id:"native-drag-drop",title:"\u4f7f\u7528\u539f\u751f JS Drag & Drop API \u5b9e\u73b0\u5143\u7d20\u62d6\u62fd\u548c\u6587\u4ef6\u62d6\u653e",slug:"../native-drag-drop",description:"\u6709\u65f6\u5019\u7ecf\u5e38\u4f1a\u597d\u5947\u90a3\u4e9b\u53ef\u89c6\u5316\u62d6\u62fd\u7684\u5de5\u5177\uff0c\u8fd8\u6709\u62d6\u653e\u6587\u4ef6\u4e0a\u4f20\u662f\u600e\u4e48\u5b9e\u73b0\u7684\uff0c\u662f\u4e0d\u662f\u5f97\u76d1\u542c\u9f20\u6807\u70b9\u51fb\uff0c\u79fb\u52a8\u548c\u91ca\u653e\u4e8b\u4ef6\uff0c\u7136\u540e\u540c\u65f6\u8ba1\u7b97\u65b0\u4f4d\u7f6e\u7684\u5750\u6807\uff1f\u5176\u5b9e\u4e0d\u7528\u90a3\u4e48\u9ebb\u70e6\uff0c\u6d4f\u89c8\u5668\u63d0\u4f9b\u4e86\u5185\u7f6e\u7684 Drag & Drop API\uff0c\u80fd\u5f88\u65b9\u4fbf\u7684\u5b9e\u73b0\u62d6\u62fd\u529f\u80fd\u3002",keywords:["dom","bom","drag","drop","\u524d\u7aef","frontend"]},i=void 0,p={unversionedId:"videos/browser/native-drag-drop/native-drag-drop",id:"videos/browser/native-drag-drop/native-drag-drop",isDocsHomePage:!1,title:"\u4f7f\u7528\u539f\u751f JS Drag & Drop API \u5b9e\u73b0\u5143\u7d20\u62d6\u62fd\u548c\u6587\u4ef6\u62d6\u653e",description:"\u6709\u65f6\u5019\u7ecf\u5e38\u4f1a\u597d\u5947\u90a3\u4e9b\u53ef\u89c6\u5316\u62d6\u62fd\u7684\u5de5\u5177\uff0c\u8fd8\u6709\u62d6\u653e\u6587\u4ef6\u4e0a\u4f20\u662f\u600e\u4e48\u5b9e\u73b0\u7684\uff0c\u662f\u4e0d\u662f\u5f97\u76d1\u542c\u9f20\u6807\u70b9\u51fb\uff0c\u79fb\u52a8\u548c\u91ca\u653e\u4e8b\u4ef6\uff0c\u7136\u540e\u540c\u65f6\u8ba1\u7b97\u65b0\u4f4d\u7f6e\u7684\u5750\u6807\uff1f\u5176\u5b9e\u4e0d\u7528\u90a3\u4e48\u9ebb\u70e6\uff0c\u6d4f\u89c8\u5668\u63d0\u4f9b\u4e86\u5185\u7f6e\u7684 Drag & Drop API\uff0c\u80fd\u5f88\u65b9\u4fbf\u7684\u5b9e\u73b0\u62d6\u62fd\u529f\u80fd\u3002",source:"@site/docs/videos/browser/05-native-drag-drop/index.md",sourceDirName:"videos/browser/05-native-drag-drop",slug:"/videos/browser/native-drag-drop",permalink:"/docs/videos/browser/native-drag-drop",editUrl:"https://github.com/qzyzz/Blog/tree/master/docs/videos/browser/05-native-drag-drop/index.md",version:"current",lastUpdatedAt:1690355864,formattedLastUpdatedAt:"2023/7/26",frontMatter:{id:"native-drag-drop",title:"\u4f7f\u7528\u539f\u751f JS Drag & Drop API \u5b9e\u73b0\u5143\u7d20\u62d6\u62fd\u548c\u6587\u4ef6\u62d6\u653e",slug:"../native-drag-drop",description:"\u6709\u65f6\u5019\u7ecf\u5e38\u4f1a\u597d\u5947\u90a3\u4e9b\u53ef\u89c6\u5316\u62d6\u62fd\u7684\u5de5\u5177\uff0c\u8fd8\u6709\u62d6\u653e\u6587\u4ef6\u4e0a\u4f20\u662f\u600e\u4e48\u5b9e\u73b0\u7684\uff0c\u662f\u4e0d\u662f\u5f97\u76d1\u542c\u9f20\u6807\u70b9\u51fb\uff0c\u79fb\u52a8\u548c\u91ca\u653e\u4e8b\u4ef6\uff0c\u7136\u540e\u540c\u65f6\u8ba1\u7b97\u65b0\u4f4d\u7f6e\u7684\u5750\u6807\uff1f\u5176\u5b9e\u4e0d\u7528\u90a3\u4e48\u9ebb\u70e6\uff0c\u6d4f\u89c8\u5668\u63d0\u4f9b\u4e86\u5185\u7f6e\u7684 Drag & Drop API\uff0c\u80fd\u5f88\u65b9\u4fbf\u7684\u5b9e\u73b0\u62d6\u62fd\u529f\u80fd\u3002",keywords:["dom","bom","drag","drop","\u524d\u7aef","frontend"]},sidebar:"videos",previous:{title:"JS HTML DOM \u64cd\u4f5c\u5165\u95e8\u6559\u7a0b",permalink:"/docs/videos/browser/js-dom-manipulate"},next:{title:"Web Components \u524d\u7aef\u5f00\u53d1\u5165\u95e8\u6559\u7a0b",permalink:"/docs/videos/browser/web-components-get-started"}},c=[{value:"\u539f\u7406",id:"\u539f\u7406",children:[]},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",children:[{value:"\u7ed3\u6784\u4e0e\u6837\u5f0f",id:"\u7ed3\u6784\u4e0e\u6837\u5f0f",children:[]},{value:"\u62d6\u62fd\u4e8b\u4ef6",id:"\u62d6\u62fd\u4e8b\u4ef6",children:[]}]}],s={toc:c};function u(e){var r=e.components,n=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,t.Z)({},s,n,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u6709\u65f6\u5019\u7ecf\u5e38\u4f1a\u597d\u5947\u90a3\u4e9b\u53ef\u89c6\u5316\u62d6\u62fd\u7684\u5de5\u5177\uff0c\u8fd8\u6709\u62d6\u653e\u6587\u4ef6\u4e0a\u4f20\u662f\u600e\u4e48\u5b9e\u73b0\u7684\uff0c\u662f\u4e0d\u662f\u5f97\u76d1\u542c\u9f20\u6807\u70b9\u51fb\uff0c\u79fb\u52a8\u548c\u91ca\u653e\u4e8b\u4ef6\uff0c\u7136\u540e\u540c\u65f6\u8ba1\u7b97\u65b0\u4f4d\u7f6e\u7684\u5750\u6807\uff1f\u5176\u5b9e\u4e0d\u7528\u90a3\u4e48\u9ebb\u70e6\uff0c\u6d4f\u89c8\u5668\u63d0\u4f9b\u4e86\u5185\u7f6e\u7684 Drag & Drop API\uff0c\u80fd\u5f88\u65b9\u4fbf\u7684\u5b9e\u73b0\u62d6\u62fd\u529f\u80fd\u3002"),(0,o.kt)(d.Z,{src:"//player.bilibili.com/player.html?aid=459257162&bvid=BV1i5411E7hk&cid=299756621&page=1",mdxType:"BVideo"}),(0,o.kt)("h2",{id:"\u539f\u7406"},"\u539f\u7406"),(0,o.kt)("p",null,"Drag Drop API \u7684\u5de5\u4f5c\u539f\u7406\u662f\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u7ed9\u9700\u8981\u62d6\u62fd\u7684\u5143\u7d20\u6dfb\u52a0 draggable \u5c5e\u6027\u5e76\u8bbe\u7f6e\u4e3a true\uff0c\u7136\u540e\u6dfb\u52a0 ondrag \u4e8b\u4ef6\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u7ed9\u63a5\u6536\u62d6\u62fd\u5143\u7d20\u7684\u653e\u7f6e\u5143\u7d20\u540c\u65f6\u8bbe\u7f6e ondragover \u548c ondrop \u4e8b\u4ef6\uff0c\u5fc5\u987b\u5728\u91cc\u8fb9\u963b\u6b62\u9ed8\u8ba4\u4e8b\u4ef6\uff0c\u56e0\u4e3a\u6d4f\u89c8\u5668\u5bf9\u62d6\u62fd\u4e8b\u4ef6\u9ed8\u8ba4\u7684\u5904\u7406\u65b9\u5f0f\u662f\u7981\u6b62\u62d6\u62fd\u3002")),(0,o.kt)("p",null,"ondrag \u4e8b\u4ef6\u662f\u7528\u4e8e\u62d6\u62fd\u5f00\u59cb\u65f6\uff0c\u7ed9\u4e8b\u4ef6\u6dfb\u52a0\u4e00\u4e9b\u6570\u636e\uff0c\u4f8b\u5982\u62d6\u62fd\u5143\u7d20\u7684 id\u3002ondragover() \u662f\u5f53\u62d6\u62fd\u5143\u7d20\u8fdb\u5165\u5230\u653e\u7f6e\u533a\u57df\u65f6\u6240\u89e6\u53d1\u7684\u4e8b\u4ef6\uff0c ondrop \u662f\u5143\u7d20\u653e\u7f6e\u540e\u89e6\u53d1\u7684\u4e8b\u4ef6\u3002"),(0,o.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,o.kt)("p",null,"\u5047\u8bbe\u6211\u4eec\u6709\u4e00\u4e2a\u9700\u8981\u62d6\u62fd\u7684\u5143\u7d20\uff0c\u4f7f\u7528\u4e00\u4e2a\u84dd\u8272\u7684\u77e9\u5f62\u8868\u793a\uff0c\u653e\u5728\u5de6\u8fb9\uff0c\u8fd8\u6709\u4e00\u4e2a\u653e\u7f6e\u533a\u57df\uff0c\u4f7f\u7528\u84dd\u8272\u865a\u7ebf\u8868\u793a\uff0c\u91cc\u8fb9\u6587\u6848\u5199\u7740\u201c\u8bf7\u62d6\u653e\u5230\u6b64\u533a\u57df\u201d\uff0c\u653e\u5728\u53f3\u8fb9\u3002\u5f53\u62d6\u62fd\u5de6\u8fb9\u5143\u7d20\u5230\u53f3\u8fb9\u653e\u7f6e\u533a\u57df\u65f6\uff0c\u865a\u7ebf\u53d8\u4e3a\u6a59\u8272\uff0c\u653e\u7f6e\u6210\u529f\u540e\u865a\u7ebf\u53d8\u4e3a\u7eff\u8272\u3002\u73b0\u5728\u6765\u770b\u4e00\u4e0b\u600e\u4e48\u5b9e\u73b0\u5b83\u3002"),(0,o.kt)("span",null,"\n    ",(0,o.kt)("ins",{parentName:"span",className:"adsbygoogle",style:{display:"block",textAlign:"center"},"data-ad-layout":"in-article","data-ad-format":"fluid","data-ad-client":"ca-pub-3487507367729662","data-ad-slot":"3539166782"}),"\n  ",(0,o.kt)("script",{parentName:"span"},"\n     (adsbygoogle = window.adsbygoogle || []).push({});\n  ")),(0,o.kt)("h3",{id:"\u7ed3\u6784\u4e0e\u6837\u5f0f"},"\u7ed3\u6784\u4e0e\u6837\u5f0f"),(0,o.kt)("p",null,"\u9996\u5148\u5b9a\u4e49 HTML \u7ed3\u6784\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'<main>\n  <div class="draggable-container">\n    <div id="draggable" class="draggable" draggable="true"></div>\n  </div>\n  <div id="droppable" class="droppable"></div>\n</main>\n')),(0,o.kt)("p",null,"main \u5143\u7d20\u7528\u4e8e\u628a\u9875\u9762\u5212\u5206\u4e3a\u4e24\u5217\u7684\u6805\u683c\uff0c\u5e76\u4e14\u8fd9\u4e24\u5217\u5c45\u4e2d\u5bf9\u9f50\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"main {\n  width: 100vw;\n  height: 100vh;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  place-items: center;\n  background-color: hsl(0deg, 0%, 10%);\n}\n")),(0,o.kt)("p",null,"\u7136\u540e\u53ef\u62d6\u62fd\u7684\u5143\u7d20 id \u4e3a draggable \u653e\u5728\u4e86 draggable-container \u5bb9\u5668\u4e2d\uff0c\u8fd9\u4e2a\u5bb9\u5668\u662f\u4e3a\u4e86\u9632\u6b62\u5143\u7d20\u88ab\u62d6\u8d70\u4e4b\u540e\uff0c\u6805\u683c\u5e03\u5c40\u88ab\u7834\u574f\uff0c\u6240\u4ee5\u9700\u8981\u5b83\u628a\u7b2c 1 \u5217\u6491\u5f00\uff0c\u5b83\u4e5f\u4f7f\u7528 grid \u5e03\u5c40\uff0c\u628a\u53ef\u62d6\u62fd\u7684\u5143\u7d20\u653e\u5230\u4e2d\u95f4\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},".draggable-container {\n  width: 100%;\n  height: 100%;\n  display: grid;\n  place-items: center;\n}\n")),(0,o.kt)("p",null,"\u53ef\u62d6\u62fd\u7684\u5143\u7d20\u8bbe\u7f6e\u4e86 draggable \u5c5e\u6027\u4e3a true\uff0c\u5b83\u7684\u6837\u5f0f\u5c31\u662f\u7b80\u5355\u7684\u8bbe\u7f6e\u4e86\u5bbd\u9ad8\u3001\u5706\u89d2\u548c\u80cc\u666f\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},".draggable,\n.droppable {\n  border-radius: 4px;\n}\n\n.draggable {\n  width: 25vw;\n  height: 25vw;\n  background: #00d9ff;\n}\n")),(0,o.kt)("p",null,"droppable \u4e3a\u653e\u7f6e\u533a\u57df\uff0c\u5b83\u7684\u6837\u5f0f\u4e0e draggable \u7c7b\u4f3c\uff0c\u53ea\u662f\u4f7f\u7528\u4e86\u865a\u7ebf\u8fb9\u6846\uff0c\u4e14\u4f7f\u7528\u4e86\u76f8\u5bf9\u5b9a\u4f4d\uff0c\u7528\u4e8e\u5b9a\u4f4d\u5176\u4e2d\u7684\u6587\u6848\u3002\u6587\u6848\u4f7f\u7528\u7684\u662f ::before \u4f2a\u5143\u7d20\u8bbe\u7f6e\u7684\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'.droppable {\n  width: 30vw;\n  height: 30vw;\n  border: 8px dashed #00d9ff;\n  position: relative;\n  display: grid;\n  place-items: center;\n}\n\n.droppable::before {\n  display: block;\n  content: "\u8bf7\u62d6\u653e\u5230\u6b64\u533a\u57df";\n  position: absolute;\n  color: white;\n  font-family: sans-serif;\n  font-size: 3vw;\n  color: hsl(0, 0%, 30%);\n}\n')),(0,o.kt)("p",null,"\u4f7f\u7528 content \u8bbe\u7f6e\u6587\u672c\uff0c\u5e76\u8bbe\u7f6e\u4e3a absolute \u5e03\u5c40\u3002\u63a5\u4e0b\u6765\u8bbe\u7f6e\u62d6\u62fd\u5143\u7d20\u8fdb\u5165\u653e\u7f6e\u533a\u57df\u7684\u8fb9\u6846\u6837\u5f0f\u548c\u653e\u7f6e\u540e\u7684\u8fb9\u6846\u6837\u5f0f\uff0c\u6700\u540e\u8bbe\u7f6e\u6587\u6848\u7684\u6837\u5f0f\uff0c\u5728\u628a\u62d6\u62fd\u5143\u7d20\u653e\u7f6e\u597d\u540e\uff0c\u901a\u8fc7 z-index \u628a\u6587\u6848\u653e\u5728\u5143\u7d20\u7684\u4e0b\u65b9\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},".dragover {\n  border: 8px dashed #ffae00;\n}\n.dropped {\n  border: 8px dashed #48ff00;\n}\n.dropped::before {\n  z-index: -1;\n}\n")),(0,o.kt)("h3",{id:"\u62d6\u62fd\u4e8b\u4ef6"},"\u62d6\u62fd\u4e8b\u4ef6"),(0,o.kt)("p",null,"\u63a5\u4e0b\u6765\u770b\u62d6\u62fd\u4e8b\u4ef6\uff0c\u9996\u5148\u83b7\u53d6 draggable \u548c droppable \u5143\u7d20\u5bf9\u8c61\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'const draggable = document.getElementById("draggable");\nconst droppable = document.getElementById("droppable");\n')),(0,o.kt)("p",null,"\u7ed9 draggable \u53ef\u62d6\u62fd\u5143\u7d20\u6dfb\u52a0 dragstart \u4e8b\u4ef6\u76d1\u542c\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'draggable.addEventListener("dragstart", handleDragStart);\n')),(0,o.kt)("p",null,"handleDragStart \u76d1\u542c\u5668\u4e2d\u4f7f\u7528\u4e8b\u4ef6\u4e2d\u7684 dataTransfer \u5c5e\u6027\uff0c\u8c03\u7528\u5b83\u7684 setData() \u65b9\u6cd5\u6dfb\u52a0\u4e86\u4e00\u4e2a\u666e\u901a\u6587\u672c\u7c7b\u578b\u7684\u6570\u636e\uff0c\u5c31\u662f\u62d6\u62fd\u5143\u7d20\u7684 id\u3002\u8fd9\u91cc\u7b2c 1 \u4e2a\u53c2\u6570\u53ef\u4ee5\u662f MIME Type\uff08text/html\u3001image/png\u3001text/uri-list\uff09 \u4e5f\u53ef\u4ee5\u662f\u81ea\u5b9a\u4e49\u7684\u7c7b\u578b\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'function handleDragStart(e) {\n  e.dataTransfer.setData("text/plain", e.target.id);\n}\n')),(0,o.kt)("p",null,"\u63a5\u7740\u7ed9 droppable  \u653e\u7f6e\u533a\u57df\u6dfb\u52a0 dragover \u4e8b\u4ef6\u76d1\u542c\uff0c\u5728\u91cc\u8fb9\u8c03\u7528 preventDefault() \u963b\u6b62\u9ed8\u8ba4\u4e8b\u4ef6\uff0c\u7136\u540e\u6dfb\u52a0 dragover \u6837\u5f0f\u628a\u865a\u7ebf\u8bbe\u7f6e\u4e3a\u6a59\u8272\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'droppable.addEventListener("dragover", handleDragover);\nfunction handleDragover(e) {\n  e.preventDefault();\n  droppable.classList.add("dragover");\n}\n')),(0,o.kt)("p",null,"\u518d\u6dfb\u52a0 dragleave \u4e8b\u4ef6\u76d1\u542c\uff0c\u5f53\u62d6\u62fd\u5143\u7d20\u79bb\u5f00\u653e\u7f6e\u533a\u57df\u65f6\uff0c\u53bb\u6389 dragover \u6837\u5f0f\u628a\u8fb9\u6846\u989c\u8272\u8fd8\u539f\u6210\u84dd\u8272\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'droppable.addEventListener("dragleave", handleDragLeave);\nfunction handleDragLeave(e) {\n  droppable.classList.remove("dragover");\n}\n')),(0,o.kt)("p",null,"\u6700\u540e\u6dfb\u52a0 drop \u4e8b\u4ef6\u76d1\u542c\uff0c\u5148\u963b\u6b62\u9ed8\u8ba4\u4e8b\u4ef6\uff0c\u7136\u540e\u901a\u8fc7 dataTransfer \u7684 getData() \u65b9\u6cd5\u83b7\u53d6\u62d6\u62fd\u5143\u7d20\u7684 id\uff0c\u8fd9\u91cc\u7684\u53c2\u6570\u5c31\u662f\u4e4b\u524d setData() \u4e2d\u8bbe\u7f6e\u7684 MIME Type\uff0c\u6bcf\u79cd MIME Type \u53ea\u80fd\u8bbe\u7f6e\u4e00\u6b21\uff0c\u5982\u679c\u591a\u6b21\u8bbe\u7f6e\u4f1a\u8986\u76d6\u524d\u8fb9\u7684\u503c\uff0c\u4e4b\u540e\u4f7f\u7528 document.getElementById() \u83b7\u53d6\u5230\u8be5\u5143\u7d20\u5e76\u6dfb\u52a0\u5230\u653e\u7f6e\u533a\u57df\u4e2d\uff0c\u628a\u653e\u7f6e\u533a\u57df\u7684\u8fb9\u6846\u8bbe\u7f6e\u4e3a\u7eff\u8272\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'droppable.addEventListener("drop", handleDrop);\nfunction handleDrop(e) {\n  e.preventDefault();\n  const draggedId = e.dataTransfer.getData("text/plain");\n  droppable.appendChild(document.getElementById(draggedId));\n  droppable.classList.add("dropped");\n}\n')),(0,o.kt)("p",null,"\u8fd9\u6837\u5c31\u5b8c\u6210\u4e86\u5143\u7d20\u7684\u62d6\u62fd\u529f\u80fd\u3002\u62d6\u62fd\u4e5f\u652f\u6301\u4ece\u5916\u90e8\u62d6\u62fd\u6587\u4ef6\u8fdb\u6765\uff0c\u4f8b\u5982\u62d6\u8fdb\u6765\u7684\u662f\u4e00\u5f20\u56fe\u7247\uff0c\u90a3\u4e48\u53ef\u4ee5\u5728 drop \u4e8b\u4ef6\u76d1\u542c\u4e2d\u83b7\u53d6\u56fe\u7247\u6587\u4ef6\u5bf9\u8c61\uff0c\u7136\u540e\u751f\u6210 img \u5143\u7d20\u653e\u7f6e\u5230\u9884\u89c8\u533a\u57df\u4e2d\u3002\u4f8b\u5982\u628a droppable \u6539\u4e3a\u63a5\u6536\u62d6\u62fd\u7684\u56fe\u7247\uff0c\u5148\u628a handleDrop() \u4e8b\u4ef6\u5904\u7406\u51fd\u6570\u4e2d\u7684\u4ee3\u7801\u6ce8\u91ca\u6389\uff0c\u9664\u4e86 e.preventDefault()\uff0c\u7136\u540e\u904d\u5386 dataTransfer.items \u5c5e\u6027\uff0c\u901a\u8fc7 item \u4e2d\u7684 kind \u5c5e\u6027\u5224\u65ad\u662f\u4e0d\u662f\u6587\u4ef6\uff0c\u5982\u679c\u662f\u5c31\u8c03\u7528 getAsFile() \u65b9\u6cd5\u83b7\u53d6\u6587\u4ef6\u5bf9\u8c61\uff0c\u7136\u540e\u8c03\u7528 createPreview() \u751f\u6210\u9884\u89c8\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'[...e.dataTransfer.items].forEach((item) => {\n  if (item.kind === "file") {\n    const file = item.getAsFile();\n    createPreview(file);\n  }\n});\n')),(0,o.kt)("p",null,"createPreview() \u4e2d\u9996\u5148\u5224\u65ad\u6587\u4ef6\u7684 MIME type \u662f\u5426\u4ee5 image/ \u5f00\u5934\uff0c\u4e0d\u662f\u5c31\u76f4\u63a5\u8fd4\u56de\uff0c\u8fd9\u6837\u5b83\u53ea\u63a5\u6536\u56fe\u7247\u7c7b\u578b\u7684\u6587\u4ef6\u3002\u63a5\u7740\u521b\u5efa\u4e00\u4e2a img \u5143\u7d20\uff0c\u5e76\u4f7f\u7528 URL.createObjectURL() \u6839\u636e\u6587\u4ef6\u5bf9\u8c61\u521b\u5efa\u4e00\u4e2a object url\uff0c\u7528\u4f5c image \u7684 src \u5c5e\u6027\uff0c\u5f53\u56fe\u7247\u52a0\u8f7d\u4e4b\u540e\u8fd9\u4e2a Object url \u5c31\u6ca1\u7528\u4e86\uff0c\u6240\u4ee5\u76d1\u542c image \u7684 onload \u4e8b\u4ef6\uff0c\u4f7f\u7528 URL.revokeObjectURL \u628a\u8fd9\u4e2a url \u56de\u6536\u6389\uff0c\u6700\u540e\u628a\u56fe\u7247\u8ffd\u52a0\u5230\u653e\u7f6e\u533a\u57df\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'function createPreview(imageFile) {\n  if (!imageFile.type.startsWith("image/")) {\n    return;\n  }\n\n  const image = document.createElement("img");\n  image.src = URL.createObjectURL(imageFile);\n  image.onload = function () {\n    URL.revokeObjectURL(this.src);\n  };\n  droppable.appendChild(image);\n}\n')),(0,o.kt)("p",null,"\u56fe\u7247\u4e5f\u6709\u4e00\u4e9b CSS \u6837\u5f0f\u8bbe\u7f6e\u5bbd\u9ad8\u548c\u7f29\u653e\u5f62\u5f0f\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},".droppable img {\n  width: 80%;\n  height: 80%;\n  object-fit: contain;\n}\n")),(0,o.kt)("span",null,"\n    ",(0,o.kt)("ins",{parentName:"span",className:"adsbygoogle",style:{display:"block",textAlign:"center"},"data-ad-layout":"in-article","data-ad-format":"fluid","data-ad-client":"ca-pub-3487507367729662","data-ad-slot":"1964508460"}),"\n  ",(0,o.kt)("script",{parentName:"span"},"\n     (adsbygoogle = window.adsbygoogle || []).push({});\n  ")),(0,o.kt)("p",null,"\u597d\u4e86\uff0c\u8fd9\u4e2a\u5c31\u662f\u539f\u751f\u7684 Drag & Drop API \u4f7f\u7528\u65b9\u5f0f\uff0c\u4f60\u5b66\u4f1a\u4e86\u5417\uff1f\u793a\u4f8b\u4ee3\u7801\u53ef\u4ee5\u4ece\u89c6\u9891\u7b80\u4ecb\u4e2d\u7684 github \u4ed3\u5e93\u5730\u5740\u627e\u5230\u3002\u5982\u679c\u89c9\u5f97\u89c6\u9891\u6709\u5e2e\u52a9\u8bf7\u4e09\u8fde\uff0c\u60f3\u4f18\u96c5\u7684\u5b66\u524d\u7aef\uff0c\u8bf7\u5173\u6ce8\u5cf0\u534e\u524d\u7aef\u5de5\u7a0b\u5e08\uff0c\u611f\u8c22\u89c2\u770b\uff01"))}u.isMDXComponent=!0}}]);