webpackJsonp([55],{3:function(n,t,e){"use strict";e(7),e(6);var a=Math.floor(window.devicePixelRatio||1);a>=2&&document.querySelector("html").classList.add("pixel-ratio-"+a)},6:function(n,t){},7:function(n,t){},12:function(n,t){"use strict";function e(n,t){var e={},a={};return Object.keys(n).forEach(function(s){t.indexOf(s)!==-1?e[s]=n[s]:a[s]=n[s]}),[e,a]}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=e,n.exports=t["default"]},16:function(n,t,e){"use strict";function a(n){return n&&n.__esModule?n:{"default":n}}function s(n){if(n&&n.__esModule)return n;var t={};if(null!=n)for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e]);return t["default"]=n,t}function o(n,t){for(var e=Object.getOwnPropertyNames(t),a=0;a<e.length;a++){var s=e[a],o=Object.getOwnPropertyDescriptor(t,s);o&&o.configurable&&void 0===n[s]&&Object.defineProperty(n,s,o)}return n}function r(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function p(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function c(n,t){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?n:t}function l(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(n,t):o(n,t))}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var i=e(1),u=s(i),f=e(2),d=a(f),k=function(n){function t(){return p(this,t),c(this,n.apply(this,arguments))}return l(t,n),t.prototype.render=function(){var n,t=this.props,e=t.prefixCls,a=t.size,s=t.className,o=t.style,p=t.onClick,c=(0,d["default"])((n={},r(n,""+e,!0),r(n,s,!!s),r(n,e+"-ws"+a,!0),n));return u.createElement("div",{className:c,style:o,onClick:p})},t}(u.Component);t["default"]=k,k.defaultProps={prefixCls:"am-whitespace",size:8},n.exports=t["default"]},17:function(n,t,e){"use strict";e(3),e(19)},19:function(n,t){},29:function(n,t,e){"use strict";function a(n){return n&&n.__esModule?n:{"default":n}}function s(n){if(n&&n.__esModule)return n;var t={};if(null!=n)for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e]);return t["default"]=n,t}function o(n,t){for(var e=Object.getOwnPropertyNames(t),a=0;a<e.length;a++){var s=e[a],o=Object.getOwnPropertyDescriptor(t,s);o&&o.configurable&&void 0===n[s]&&Object.defineProperty(n,s,o)}return n}function r(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function p(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function c(n,t){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?n:t}function l(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(n,t):o(n,t))}function i(n){return"string"==typeof n}function u(n){return i(n.type)&&j(n.props.children)?b.cloneElement(n,{},n.props.children.split("").join(" ")):i(n)?(j(n)&&(n=n.split("").join(" ")),b.createElement("span",null,n)):n}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var f=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a])}return n},d=function(){function n(n,t){var e=[],a=!0,s=!1,o=void 0;try{for(var r,p=n[Symbol.iterator]();!(a=(r=p.next()).done)&&(e.push(r.value),!t||e.length!==t);a=!0);}catch(c){s=!0,o=c}finally{try{!a&&p["return"]&&p["return"]()}finally{if(s)throw o}}return e}return function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return n(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),k=e(1),b=s(k),m=e(2),y=a(m),h=e(23),g=a(h),v=e(12),w=a(v),O=/^[\u4e00-\u9fa5]{2}$/,j=O.test.bind(O),P=function(n){function t(){p(this,t);for(var e=arguments.length,a=Array(e),s=0;s<e;s++)a[s]=arguments[s];var o=c(this,n.call.apply(n,[this].concat(a)));return o.onClick=function(){o.props.onClick(o)},o}return l(t,n),t.prototype.render=function(){var n,t=(0,w["default"])(this.props,["children","className","prefixCls","type","size","ghost","inline","disabled","htmlType","icon","loading"]),e=d(t,2),a=e[0],s=a.children,o=a.className,p=a.prefixCls,c=a.type,l=a.size,i=a.ghost,k=a.inline,m=a.disabled,h=a.htmlType,v=a.icon,O=a.loading,j=e[1],P=(0,y["default"])((n={},r(n,o,o),r(n,p,!0),r(n,p+"-primary","primary"===c),r(n,p+"-ghost",i),r(n,p+"-warning","warning"===c),r(n,p+"-small","small"===l&&k),r(n,p+"-loading",O),r(n,p+"-inline",k),r(n,p+"-disabled",m),n)),x=O?"loading":v,E=b.Children.map(s,u);return b.createElement("button",f({},j,{type:h||"button",className:P,disabled:m,onClick:this.onClick}),x?b.createElement(g["default"],{type:x}):null,E)},t}(b.Component);t["default"]=P,P.propTypes={prefixCls:k.PropTypes.string,size:k.PropTypes.oneOf(["large","small"]),htmlType:k.PropTypes.oneOf(["submit","button","reset"]),icon:k.PropTypes.bool},P.defaultProps={prefixCls:"am-button",size:"large",ghost:!1,inline:!1,disabled:!1,loading:!1,onClick:function(){}},n.exports=t["default"]},35:function(n,t,e){"use strict";function a(n){return n&&n.__esModule?n:{"default":n}}function s(n){if(n&&n.__esModule)return n;var t={};if(null!=n)for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e]);return t["default"]=n,t}function o(n,t){for(var e=Object.getOwnPropertyNames(t),a=0;a<e.length;a++){var s=e[a],o=Object.getOwnPropertyDescriptor(t,s);o&&o.configurable&&void 0===n[s]&&Object.defineProperty(n,s,o)}return n}function r(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function p(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function c(n,t){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?n:t}function l(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(n,t):o(n,t))}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var i=e(1),u=s(i),f=e(2),d=a(f),k=function(n){function t(){return p(this,t),c(this,n.apply(this,arguments))}return l(t,n),t.prototype.render=function(){var n,t=this.props,e=t.prefixCls,a=t.size,s=t.className,o=t.children,p=t.style,c=(0,d["default"])((n={},r(n,""+e,!0),r(n,s,!!s),r(n,e+"-wb"+a,!0),n));return u.createElement("div",{className:c,style:p},o)},t}(u.Component);t["default"]=k,k.defaultProps={prefixCls:"am-wingblank",size:8},n.exports=t["default"]},36:function(n,t,e){"use strict";e(3),e(39)},39:function(n,t){},55:function(n,t,e){"use strict";function a(n){return n&&n.__esModule?n:{"default":n}}function s(n){if(n&&n.__esModule)return n;var t={};if(null!=n)for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e]);return t["default"]=n,t}function o(n,t){for(var e=Object.getOwnPropertyNames(t),a=0;a<e.length;a++){var s=e[a],o=Object.getOwnPropertyDescriptor(t,s);o&&o.configurable&&void 0===n[s]&&Object.defineProperty(n,s,o)}return n}function r(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function p(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function c(n,t){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?n:t}function l(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(n,t):o(n,t))}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var i=e(1),u=s(i),f=e(2),d=a(f),k=function(n){function t(){return p(this,t),c(this,n.apply(this,arguments))}return l(t,n),t.prototype.render=function(){var n,t=this.props,e=t.direction,a=t.wrap,s=t.justify,o=t.align,p=t.alignContent,c=t.className,l=t.children,i=t.prefixCls,f=t.style,k=t.onClick,b=(0,d["default"])((n={},r(n,i,!0),r(n,i+"-dir-row","row"===e),r(n,i+"-dir-row-reverse","row-reverse"===e),r(n,i+"-dir-column","column"===e),r(n,i+"-dir-column-reverse","column-reverse"===e),r(n,i+"-nowrap","nowrap"===a),r(n,i+"-wrap","wrap"===a),r(n,i+"-wrap-reverse","wrap-reverse"===a),r(n,i+"-justify-start","start"===s),r(n,i+"-justify-end","end"===s),r(n,i+"-justify-center","center"===s),r(n,i+"-justify-between","between"===s),r(n,i+"-justify-around","around"===s),r(n,i+"-align-top","top"===o||"start"===o),r(n,i+"-align-middle","middle"===o||"center"===o),r(n,i+"-align-bottom","bottom"===o||"end"===o),r(n,i+"-align-baseline","baseline"===o),r(n,i+"-align-stretch","stretch"===o),r(n,i+"-align-content-start","start"===p),r(n,i+"-align-content-end","end"===p),r(n,i+"-align-content-center","center"===p),r(n,i+"-align-content-between","between"===p),r(n,i+"-align-content-around","around"===p),r(n,i+"-align-content-stretch","stretch"===p),r(n,c,c),n));return u.createElement("div",{className:b,style:f,onClick:k},l)},t}(u.Component);t["default"]=k,k.propTypes={direction:i.PropTypes.oneOf(["row","row-reverse","column","column-reverse"]),wrap:i.PropTypes.oneOf(["nowrap","wrap","wrap-reverse"]),justify:i.PropTypes.oneOf(["start","end","center","between","around"]),align:i.PropTypes.oneOf(["start","end","center","top","middle","bottom","baseline","stretch"]),alignContent:i.PropTypes.oneOf(["start","end","center","between","around","stretch"])},k.defaultProps={prefixCls:"am-flexbox",align:"center",onClick:function(){}},n.exports=t["default"]},56:function(n,t,e){"use strict";function a(n){return n&&n.__esModule?n:{"default":n}}function s(n){if(n&&n.__esModule)return n;var t={};if(null!=n)for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e]);return t["default"]=n,t}function o(n,t){for(var e=Object.getOwnPropertyNames(t),a=0;a<e.length;a++){var s=e[a],o=Object.getOwnPropertyDescriptor(t,s);o&&o.configurable&&void 0===n[s]&&Object.defineProperty(n,s,o)}return n}function r(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function p(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function c(n,t){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?n:t}function l(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(n,t):o(n,t))}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var i=e(1),u=s(i),f=e(2),d=a(f),k=function(n){function t(){return p(this,t),c(this,n.apply(this,arguments))}return l(t,n),t.prototype.render=function(){var n,t=this.props,e=t.children,a=t.className,s=t.prefixCls,o=t.style,p=t.onClick,c=(0,d["default"])((n={},r(n,s+"-item",!0),r(n,a,a),n));return u.createElement("div",{className:c,style:o,onClick:p},e)},t}(u.Component);t["default"]=k,k.defaultProps={prefixCls:"am-flexbox"},n.exports=t["default"]},57:function(n,t,e){"use strict";function a(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(t,"__esModule",{value:!0});var s=e(55),o=a(s),r=e(56),p=a(r);o["default"].Item=p["default"],t["default"]=o["default"],n.exports=t["default"]},388:function(n,t,e){"use strict";function a(n){return n&&n.__esModule?n:{"default":n}}function s(n){if(n&&n.__esModule)return n;var t={};if(null!=n)for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e]);return t["default"]=n,t}function o(n,t){for(var e=Object.getOwnPropertyNames(t),a=0;a<e.length;a++){var s=e[a],o=Object.getOwnPropertyDescriptor(t,s);o&&o.configurable&&void 0===n[s]&&Object.defineProperty(n,s,o)}return n}function r(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function p(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function c(n,t){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?n:t}function l(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(n,t):o(n,t))}function i(){}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var u=e(1),f=s(u),d=e(2),k=a(d),b=e(29),m=a(b),y=e(57),h=a(y),g=function(n){function t(e){p(this,t);var a=c(this,n.call(this,e));return a.state={current:e.current},a.onPrev=a.onPrev.bind(a),a.onNext=a.onNext.bind(a),a}return l(t,n),t.prototype.componentWillReceiveProps=function(n){this.setState({current:n.current})},t.prototype._hasPrev=function(){return this.state.current>0},t.prototype._hasNext=function(){return this.state.current<this.props.total},t.prototype._handleChange=function(n){return this.setState({current:n}),this.props.onChange(n),n},t.prototype.onPrev=function(){this._handleChange(this.state.current-1)},t.prototype.onNext=function(){this._handleChange(this.state.current+1)},t.prototype.getIndexes=function(n){for(var t=[],e=0;e<n;e++)t.push(e);return t},t.prototype.render=function(){var n,t=this.props,e=t.prefixCls,a=t.className,s=t.mode,o=t.total,p=t.size,c=t.simple,l=t.prevText,i=t.nextText,u=this.state.current,d=(0,k["default"])((n={className:a},r(n,e+"-wrap",!0),r(n,e+"-wrap-lg","large"===p),r(n,e+"-wrap-sm","small"===p),n)),b=void 0;switch(s){case"button":b=f.createElement(h["default"],null,f.createElement(h["default"].Item,{className:e+"-wrap-btn"},f.createElement(m["default"],{size:p,inline:!0,disabled:u<=0,onClick:this.onPrev},l)),this.props.children?f.createElement(h["default"].Item,null,this.props.children):!c&&f.createElement(h["default"].Item,{className:d},f.createElement("span",{className:"active"},u+1),"/",f.createElement("span",null,o)),f.createElement(h["default"].Item,null,f.createElement(m["default"],{size:p,disabled:u>=o-1,inline:!0,onClick:this.onNext},i)));break;case"number":b=f.createElement("div",{className:d},f.createElement("span",{className:"active"},u+1),"/",f.createElement("span",null,o));break;case"pointer":var y=this.getIndexes(o);b=f.createElement("div",{className:d},y.map(function(n){var t,a=(0,k["default"])((t={},r(t,e+"-wrap-dot",!0),r(t,e+"-wrap-dot-active",n===u),t));return f.createElement("div",{className:a,key:"dot-"+n},f.createElement("span",null))}));break;default:b=!1}return f.createElement("div",{className:e},b)},t}(f.Component);t["default"]=g,g.defaultProps={prefixCls:"am-pagination",mode:"button",size:"large",current:0,simple:!1,prevText:"Prev",nextText:"Next",onChange:i},n.exports=t["default"]},389:function(n,t,e){"use strict";e(3),e(404)},404:function(n,t){},796:function(n,t,e){"use strict";function a(n){return n&&n.__esModule?n:{"default":n}}var s=(e(36),e(35)),o=a(s),r=(e(389),e(388)),p=a(r),c=(e(17),e(16)),l=a(c),i=e(1),u=a(i),f=e(4);a(f);n.exports={content:[["p","\u57fa\u672c\u7684\u5206\u9875\u5668\u3002"]],meta:{order:1,title:"\u6570\u5b57\u5f62\u6001",filename:"components/pagination/demo/number.md",id:"components-pagination-demo-number"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Pagination<span class="token punctuation" >,</span> WhiteSpace<span class="token punctuation" >,</span> WingBlank <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd-mobile\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >let</span> App <span class="token operator" >=</span> React<span class="token punctuation" >.</span><span class="token function" >createClass</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n  <span class="token function" >render</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >(</span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>pagination-container<span class="token punctuation" >"</span></span> <span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WhiteSpace</span> <span class="token attr-name" >size</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >20</span><span class="token punctuation" >}</span></span> <span class="token punctuation" >/></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WingBlank</span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>p</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>title<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u53ea\u663e\u793a\u6570\u5b57<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>p</span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Pagination</span>\n              <span class="token attr-name" >mode</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>number<span class="token punctuation" >"</span></span>\n              <span class="token attr-name" >total</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >5</span><span class="token punctuation" >}</span></span>\n              <span class="token attr-name" >activeIndex</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >2</span><span class="token punctuation" >}</span></span>\n            <span class="token punctuation" >/></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>WingBlank</span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WhiteSpace</span> <span class="token attr-name" >size</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >20</span><span class="token punctuation" >}</span></span> <span class="token punctuation" >/></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WingBlank</span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Pagination</span>\n              <span class="token attr-name" >mode</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>number<span class="token punctuation" >"</span></span>\n              <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>small<span class="token punctuation" >"</span></span>\n              <span class="token attr-name" >total</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >5</span><span class="token punctuation" >}</span></span>\n              <span class="token attr-name" >activeIndex</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token operator" >-</span><span class="token number" >1</span><span class="token punctuation" >}</span></span>\n            <span class="token punctuation" >/></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>WingBlank</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n    <span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>App</span> <span class="token punctuation" >/></span></span><span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){var n=u["default"].createClass({displayName:"App",render:function(){return u["default"].createElement("div",null,u["default"].createElement("div",{className:"pagination-container"},u["default"].createElement(l["default"],{size:20}),u["default"].createElement(o["default"],null,u["default"].createElement("p",{className:"title"},"\u53ea\u663e\u793a\u6570\u5b57"),u["default"].createElement(p["default"],{mode:"number",total:5,activeIndex:2})),u["default"].createElement(l["default"],{size:20}),u["default"].createElement(o["default"],null,u["default"].createElement(p["default"],{mode:"number",size:"small",total:5,activeIndex:-1}))))}});return u["default"].createElement(n,null)},style:".loading-example .title {\n  margin-right: 20px;\n}",highlightedStyle:'<span class="token selector" ><span class="token class" >.loading-example</span> <span class="token class" >.title</span> </span><span class="token punctuation" >{</span>\n  <span class="token property" >margin-right</span><span class="token punctuation" >:</span> <span class="token number" >20</span>px<span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>'}}});