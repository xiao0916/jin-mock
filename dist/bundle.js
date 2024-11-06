!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("core-js/modules/es6.object.assign.js"),require("core-js/modules/es6.array.slice.js"),require("core-js/modules/es6.object.to-string.js"),require("core-js/modules/es6.promise.js"),require("core-js/modules/es6.array.filter.js"),require("core-js/modules/es6.function.name.js"),require("core-js/modules/es6.array.find.js"),require("core-js/modules/es6.weak-map.js"),require("core-js/modules/es6.string.iterator.js"),require("core-js/modules/es6.array.iterator.js"),require("core-js/modules/web.dom.iterable.js"),require("core-js/modules/es6.regexp.to-string.js"),require("jquery")):"function"==typeof define&&define.amd?define(["exports","core-js/modules/es6.object.assign.js","core-js/modules/es6.array.slice.js","core-js/modules/es6.object.to-string.js","core-js/modules/es6.promise.js","core-js/modules/es6.array.filter.js","core-js/modules/es6.function.name.js","core-js/modules/es6.array.find.js","core-js/modules/es6.weak-map.js","core-js/modules/es6.string.iterator.js","core-js/modules/es6.array.iterator.js","core-js/modules/web.dom.iterable.js","core-js/modules/es6.regexp.to-string.js","jquery"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).jinMock={},null,null,null,null,null,null,null,null,null,null,null,null,e.$)}(this,(function(e,t,n,o,r,i,s,c,u,a,l,f,d,p){"use strict";var m=function(){};function y(){return Object.assign.apply(Object,[{}].concat(Array.prototype.slice.call(arguments)))}function v(e,t,n){return t=g(t),function(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,w()?Reflect.construct(t,[],g(e).constructor):t.apply(e,n))}function b(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function j(e,t){return e.get(function(e,t,n){if("function"==typeof e?e===t:e.has(t))return arguments.length<3?t:n;throw new TypeError("Private element is not present on this object")}(e,t))}function h(e,t,n){(function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")})(e,t),t.set(e,n)}function k(e,t,n){return t&&function(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,O(o.key),o)}}(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function g(e){return g=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},g(e)}function w(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(w=function(){return!!e})()}function _(e,t){return _=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},_(e,t)}function O(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,t||"default");if("object"!=typeof o)return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}function x(e){return x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},x(e)}function q(e){var t="function"==typeof Map?new Map:void 0;return q=function(e){if(null===e||!function(e){try{return-1!==Function.toString.call(e).indexOf("[native code]")}catch(t){return"function"==typeof e}}(e))return e;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,n)}function n(){return function(e,t,n){if(w())return Reflect.construct.apply(null,arguments);var o=[null];o.push.apply(o,t);var r=new(e.bind.apply(e,o));return n&&_(r,n.prototype),r}(e,arguments,g(this).constructor)}return n.prototype=Object.create(e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),_(n,e)},q(e)}function I(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var C,E={exports:{}};var M=function(){if(C)return E.exports;function e(){}return C=1,e.prototype={on:function(e,t,n){var o=this.e||(this.e={});return(o[e]||(o[e]=[])).push({fn:t,ctx:n}),this},once:function(e,t,n){var o=this;function r(){o.off(e,r),t.apply(n,arguments)}return r._=t,this.on(e,r,n)},emit:function(e){for(var t=[].slice.call(arguments,1),n=((this.e||(this.e={}))[e]||[]).slice(),o=0,r=n.length;o<r;o++)n[o].fn.apply(n[o].ctx,t);return this},off:function(e,t){var n=this.e||(this.e={}),o=n[e],r=[];if(o&&t)for(var i=0,s=o.length;i<s;i++)o[i].fn!==t&&o[i].fn._!==t&&r.push(o[i]);return r.length?n[e]=r:delete n[e],this}},E.exports=e,E.exports.TinyEmitter=e,E.exports}(),R="mock:success",S="mock:fail",P="mock:cancel",T="mock:realRequest",F="mock:destroyMock",D=new(I(M));function N(e){var t,n=e.scope,o=e.status,r=e.mockId;if(!n)throw new Error("scope is required");var i=null===(t=window.__MOCK_CONFIG__)||void 0===t?void 0:t.mock;o=o||"success";var s=null,c=i[n];return c&&(s=c.filter((function(e){return e.status===o})),s=r?s.find((function(e){return e.mockId===r})):s[0]),s}function G(e,t){return"".concat(e).concat(t?"-".concat(t):"")}function K(e){var t,n=e.scope,o=e.mockId,r=e.eventId;D.emit(G(R,r),null===(t=N({scope:n,status:"success",mockId:o}))||void 0===t?void 0:t.data)}function z(e){var t,n=e.scope,o=e.mockId,r=e.eventId;D.emit(G(S,r),null===(t=N({scope:n,status:"fail",mockId:o}))||void 0===t?void 0:t.data)}function A(e){D.emit(G(P,e))}function B(e){D.emit(G(T,e))}function H(e){D.emit(G(F,e)),p("jin-mock").attr("active","false"),p("jin-mock").last().attr("active","true")}var L,W,$,J=new WeakMap,Q=function(){return k((function e(){b(this,e),h(this,J,function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10;return Math.random().toString(36).slice(-e)}())}),[{key:"getEventId",value:function(){return j(J,this)}},{key:"onSuccess",value:function(e,t){K({scope:e,mockId:t,eventId:j(J,this)})}},{key:"onFail",value:function(e,t){z({scope:e,mockId:t,eventId:j(J,this)})}},{key:"onCancel",value:function(){A(j(J,this))}},{key:"onRealRequest",value:function(){B(j(J,this))}},{key:"onDestroyMock",value:function(){H(j(J,this))}}])}(),U=function(e){function t(){return b(this,t),v(this,t)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&_(e,t)}(t,e),k(t,[{key:"connectedCallback",value:function(){var e=this;this.render(),D.on(G(F,this.id),(function(){e.remove()}))}},{key:"disconnectedCallback",value:function(){this.innerHTML=""}},{key:"attributeChangedCallback",value:function(e,t,n){"active"===e&&(console.log("attributeChangedCallback",e,t,n),p(this.shadowRoot).find(".jm-container").css({display:"true"===n?"block":"none"}))}},{key:"scope",get:function(){return this._scope},set:function(e){this._scope=e}},{key:"renderDom",value:function(){var e=this,t=p('<div class="jm-container"></div>');return p(t).append(p('<div class="jm-mask"></div>\n        <div class="jm-modal">\n          <div class="jm-modal-header">\n            <h3 class="jm-modal-title">Mock 请求</h3>\n            <button class="jm-modal-close">\n              <span class="jm-modal-close-x">×</span>\n            </button>\n          </div>\n          <div class="jm-modal-body">\n          </div>\n        </div>')).find(".jm-modal-close").on("click",(function(){H(e.id)})),t}},{key:"renderStyle",value:function(){return p("<style>\n      .jm-container {\n        position: fixed;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        z-index: 9999;\n      }\n      .jm-mask {\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        background-color: rgba(0, 0, 0, 0.5);\n      }\n      .jm-modal {\n        position: absolute;\n        top: 50%;\n        left: 50%;\n        transform: translate(-50%, -50%);\n        width: 500px;\n        background-color: #fff;\n        box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);\n      }\n      .jm-modal-header {\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        padding: 10px;\n        background-color: #f5f5f5;\n      }\n      .jm-modal-title {\n        margin: 0;\n        font-size: 18px;\n      }\n      .jm-modal-close {\n        border: none;\n        background-color: transparent;\n        cursor: pointer;\n      }\n      .jm-modal-close-x {\n        font-size: 24px;\n        font-weight: bold;\n      }\n      .jm-modal-body {\n        padding: 10px;\n      }\n    </style>")}},{key:"render",value:function(){p(this.attachShadow({mode:"open"})).append(this.renderStyle()).append(this.renderDom())}}])}(q(HTMLElement));L=U,$=["scope","id","active"],(W=O(W="observedAttributes"))in L?Object.defineProperty(L,W,{value:$,enumerable:!0,configurable:!0,writable:!0}):L[W]=$;function V(e,t){var n=p("<div>"),o=p("<h3>").text("真实的请求"),r=p("<h3>").text("成功的请求"),i=p("<h3>").text("失败的请求"),s=p("<div>"),c=p("<div>"),u=p("<div>");return s.append(p("<button>").attr("type","sendRequest").data({realRequest:!0}).text("发送请求")),c.append(function(e){var t=(window.__MOCK_CONFIG__.mock||{})[e];if(t){var n=[];return null==t||t.filter((function(e){return"success"===e.status})).forEach((function(e){var t=e.mockId,o=e.name,r=p("<button>");r.attr("type","sendRequest").data({mockId:t,status:"success"}).text(t||o),n.push(r)})),n}}(e)),u.append(function(e){var t=(window.__MOCK_CONFIG__.mock||{})[e];if(t){var n=[];return null==t||t.filter((function(e){return"fail"===e.status})).forEach((function(e){var t=e.mockId,o=e.name,r=p("<button>");r.attr("type","sendRequest").data({mockId:t,status:"fail"}).text(t||o),n.push(r)})),n}}(e)),n.on("click","button[type=sendRequest]",(function(n){"fail"===p(n.target).data("status")?t.onFail(e,p(n.target).data("mockId")):"success"===p(n.target).data("status")?t.onSuccess(e,p(n.target).data("mockId")):p(n.target).data("realRequest")&&t.onRealRequest(),t.onDestroyMock()})),n.append(o).append(s).append(r).append(c).append(i).append(u),n}function X(e){var t=new Q;customElements.get("jin-mock")||customElements.define("jin-mock",U);var n,o=p("<jin-mock></jin-mock>");return o.attr("scope",e).attr("id",t.getEventId()).appendTo("body"),n=t.getEventId(),p("jin-mock").attr("active","false"),p("jin-mock[id=".concat(n,"]")).attr("active","true"),p(o.get(0).shadowRoot).find(".jm-modal-body").empty().append(V(e,t)),{eventId:t.getEventId(),close:function(){t.onDestroyMock()}}}var Y={realRequest:function(){return Promise.resolve()},enable:!0,scope:""};function Z(){var e,t=y(Y,arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}),n=t.scope,o=t.enable,r=t.realRequest;if(!n)throw new Error("scope is required");void 0===o&&(null!==(e=window.__MOCK_CONFIG__)&&void 0!==e&&e.enable,function(e){throw new TypeError('"'+e+'" is read-only')}("enable"));if(!o||o&&"object"===x(o)&&void 0!==o[n]&&!o[n])return r?r():Promise.resolve();var i=X(n).eventId;return new Promise((function(e,t){D.on(G(R,i),(function(t){console.log("onSuccess"),e(t)})),D.on(G(S,i),(function(e){console.log("onFail"),t(e)})),D.on(G(P,i),(function(){console.log("onCancel"),e("cancel")})),D.on(G(T,i),(function(){console.log("real request"),null==r||r().then(e,t)}))}))}var ee={global:!0,mock:null,onSuccess:m,onFail:m,onCancel:m};e.createMock=function(){var e,t,n,o=y(ee,arguments.length>0&&void 0!==arguments[0]?arguments[0]:{});return e={global:o.global,mock:o.mock,enable:o.enable},t=e.global,n=e.mock,"undefined"!=typeof window&&(window.__MOCK_CONFIG__=y(window.__MOCK_CONFIG__,{global:t,mock:n})),Z},e.onCancel=A,e.onDestroyMock=H,e.onFail=z,e.onRealRequest=B,e.onSuccess=K}));