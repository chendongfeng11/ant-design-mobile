webpackJsonp([85],{3:function(n,t,e){"use strict";e(7),e(6);var a=Math.floor(window.devicePixelRatio||1);a>=2&&document.querySelector("html").classList.add("pixel-ratio-"+a)},6:function(n,t){},7:function(n,t){},12:function(n,t){"use strict";function e(n,t){var e={},a={};return Object.keys(n).forEach(function(s){t.indexOf(s)!==-1?e[s]=n[s]:a[s]=n[s]}),[e,a]}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=e,n.exports=t["default"]},29:function(n,t,e){"use strict";function a(n){return n&&n.__esModule?n:{"default":n}}function s(n){if(n&&n.__esModule)return n;var t={};if(null!=n)for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e]);return t["default"]=n,t}function o(n,t){for(var e=Object.getOwnPropertyNames(t),a=0;a<e.length;a++){var s=e[a],o=Object.getOwnPropertyDescriptor(t,s);o&&o.configurable&&void 0===n[s]&&Object.defineProperty(n,s,o)}return n}function r(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function p(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function l(n,t){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?n:t}function c(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(n,t):o(n,t))}function i(n){return"string"==typeof n}function u(n){return i(n.type)&&j(n.props.children)?b.cloneElement(n,{},n.props.children.split("").join(" ")):i(n)?(j(n)&&(n=n.split("").join(" ")),b.createElement("span",null,n)):n}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var f=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a])}return n},d=function(){function n(n,t){var e=[],a=!0,s=!1,o=void 0;try{for(var r,p=n[Symbol.iterator]();!(a=(r=p.next()).done)&&(e.push(r.value),!t||e.length!==t);a=!0);}catch(l){s=!0,o=l}finally{try{!a&&p["return"]&&p["return"]()}finally{if(s)throw o}}return e}return function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return n(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),m=e(1),b=s(m),y=e(2),k=a(y),g=e(23),h=a(g),v=e(12),O=a(v),w=/^[\u4e00-\u9fa5]{2}$/,j=w.test.bind(w),P=function(n){function t(){p(this,t);for(var e=arguments.length,a=Array(e),s=0;s<e;s++)a[s]=arguments[s];var o=l(this,n.call.apply(n,[this].concat(a)));return o.onClick=function(){o.props.onClick(o)},o}return c(t,n),t.prototype.render=function(){var n,t=(0,O["default"])(this.props,["children","className","prefixCls","type","size","ghost","inline","disabled","htmlType","icon","loading"]),e=d(t,2),a=e[0],s=a.children,o=a.className,p=a.prefixCls,l=a.type,c=a.size,i=a.ghost,m=a.inline,y=a.disabled,g=a.htmlType,v=a.icon,w=a.loading,j=e[1],P=(0,k["default"])((n={},r(n,o,o),r(n,p,!0),r(n,p+"-primary","primary"===l),r(n,p+"-ghost",i),r(n,p+"-warning","warning"===l),r(n,p+"-small","small"===c&&m),r(n,p+"-loading",w),r(n,p+"-inline",m),r(n,p+"-disabled",y),n)),x=w?"loading":v,C=b.Children.map(s,u);return b.createElement("button",f({},j,{type:g||"button",className:P,disabled:y,onClick:this.onClick}),x?b.createElement(h["default"],{type:x}):null,C)},t}(b.Component);t["default"]=P,P.propTypes={prefixCls:m.PropTypes.string,size:m.PropTypes.oneOf(["large","small"]),htmlType:m.PropTypes.oneOf(["submit","button","reset"]),icon:m.PropTypes.bool},P.defaultProps={prefixCls:"am-button",size:"large",ghost:!1,inline:!1,disabled:!1,loading:!1,onClick:function(){}},n.exports=t["default"]},34:function(n,t,e){"use strict";e(3),e(40),e(38)},38:function(n,t){},220:function(n,t,e){"use strict";function a(n){return n&&n.__esModule?n:{"default":n}}function s(n){if(n&&n.__esModule)return n;var t={};if(null!=n)for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e]);return t["default"]=n,t}function o(n,t){for(var e=Object.getOwnPropertyNames(t),a=0;a<e.length;a++){var s=e[a],o=Object.getOwnPropertyDescriptor(t,s);o&&o.configurable&&void 0===n[s]&&Object.defineProperty(n,s,o)}return n}function r(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function p(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function l(n,t){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?n:t}function c(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(n,t):o(n,t))}function i(){}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var u=e(1),f=s(u),d=e(29),m=a(d),b=e(2),y=a(b),k=function(n){function t(){return p(this,t),l(this,n.apply(this,arguments))}return c(t,n),t.prototype.render=function(){var n,t=this.props,e=t.prefixCls,a=t.imgUrl,s=t.title,o=t.message,p=t.buttonTxt,l=t.buttonClick,c=t.buttonType,i=t.buttonGhost,u=t.className,d=(0,y["default"])((n={},r(n,""+e,!0),r(n,u,u),n));return f.createElement("div",{className:d},f.createElement("div",{className:e+"-pic",style:{backgroundImage:"url("+a+")"}}),""!==s?f.createElement("div",{className:e+"-title"},s):null,""!==o?f.createElement("div",{className:e+"-message"},o):null,""!==p?f.createElement("div",{className:e+"-button"},f.createElement(m["default"],{type:c,ghost:i,onClick:l},p)):null)},t}(f.Component);t["default"]=k,k.defaultProps={prefixCls:"am-page-result",imgUrl:"",title:"",message:"",buttonTxt:"",buttonType:"",buttonGhost:!1,buttonClick:i},n.exports=t["default"]},221:function(n,t,e){"use strict";e(3),e(34),e(234)},234:function(n,t){},791:function(n,t,e){"use strict";function a(n){return n&&n.__esModule?n:{"default":n}}var s=(e(221),e(220)),o=a(s),r=e(1),p=a(r),l=e(4);a(l);n.exports={content:[],meta:{order:0,title:"\u51fa\u9519",filename:"components/page-result/demo/error.md",id:"components-page-result-demo-error"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> PageResult <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd-mobile\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> PageResultExample <span class="token operator" >=</span> <span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>PageResult</span>\n    <span class="token attr-name" >imgUrl</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>https://os.alipayobjects.com/rmsportal/SgCjcxAQTmmNUWi.png<span class="token punctuation" >"</span></span>\n    <span class="token attr-name" >title</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u52a0\u8f7d\u51fa\u9519<span class="token punctuation" >"</span></span>\n    <span class="token attr-name" >buttonTxt</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u91cd\u65b0\u52a0\u8f7d<span class="token punctuation" >"</span></span>\n    <span class="token attr-name" >buttonClick</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token function" >alert</span><span class="token punctuation" >(</span><span class="token string" >\'\u70b9\u51fb\u4e86\u6309\u94ae\'</span><span class="token punctuation" >)</span><span class="token punctuation" >}</span></span>\n  <span class="token punctuation" >/></span></span>\n<span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>PageResultExample</span> <span class="token punctuation" >/></span></span><span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){var n=function(){return p["default"].createElement(o["default"],{imgUrl:"https://os.alipayobjects.com/rmsportal/SgCjcxAQTmmNUWi.png",title:"\u52a0\u8f7d\u51fa\u9519",buttonTxt:"\u91cd\u65b0\u52a0\u8f7d",buttonClick:function(){return alert("\u70b9\u51fb\u4e86\u6309\u94ae")}})};return p["default"].createElement(n,null)}}}});