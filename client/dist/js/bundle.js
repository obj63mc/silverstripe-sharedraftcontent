!function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s="./client/src/bundles/bundle.js")}({"./client/src/boot/index.js":function(e,t,n){"use strict";var o=n("./client/src/boot/registerComponents.js"),r=function(e){return e&&e.__esModule?e:{default:e}}(o);window.document.addEventListener("DOMContentLoaded",function(){(0,r.default)()})},"./client/src/boot/registerComponents.js":function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n("lib/Injector"),c=o(r),i=n("./client/src/components/ShareDraftContent/ShareDraftContent.js"),u=o(i);t.default=function(){c.default.component.registerMany({ShareDraftContent:u.default})}},"./client/src/bundles/bundle.js":function(e,t,n){"use strict";n("./client/src/legacy/ShareDraftContentEntwine.js"),n("./client/src/boot/index.js")},"./client/src/components/ShareDraftContent/ShareDraftContent.js":function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.Component=void 0;var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),u=n("react"),a=function(e){return e&&e.__esModule?e:{default:e}}(u),s=n("lib/Injector"),l=function(e){function t(){return o(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return c(t,e),i(t,[{key:"render",value:function(){var e=this.props.PopoverField;return a.default.createElement("div",{className:"share-draft-content__wrapper"},a.default.createElement(e,{id:"testing",title:"testing"}))}}]),t}(u.Component);t.Component=l,t.default=(0,s.inject)(["PopoverField"])(l)},"./client/src/legacy/ShareDraftContentEntwine.js":function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=n("jquery"),c=o(r),i=n("react-dom"),u=o(i),a=n("lib/Injector");c.default.entwine("ss",function(e){e(".js-injector-boot .history-viewer__container").entwine({onmatch:function(){var e=this.closest(".cms-content").attr("id"),t=e?{context:e}:{},n=(0,a.loadComponent)("ShareDraftContent",t);u.default.render(React.createElement(n,{url:"http://google.com",contextKey:this.data("context-key")}),this[0])},onunmatch:function(){u.default.unmountComponentAtNode(this[0])}})})},jquery:function(e,t){e.exports=jQuery},"lib/Injector":function(e,t){e.exports=Injector},react:function(e,t){e.exports=React},"react-dom":function(e,t){e.exports=ReactDom}});