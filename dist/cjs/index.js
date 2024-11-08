'use strict';

require('core-js/modules/es6.array.map.js');
require('core-js/modules/es6.object.keys.js');
require('core-js/modules/es6.object.assign.js');
require('core-js/modules/es6.array.slice.js');
require('core-js/modules/es6.object.to-string.js');
require('core-js/modules/es6.promise.js');
require('core-js/modules/es7.promise.finally.js');
require('core-js/modules/es6.array.filter.js');
require('core-js/modules/es6.function.name.js');
require('core-js/modules/es6.array.find.js');
var $ = require('jquery');
require('core-js/modules/es6.map.js');
require('core-js/modules/es6.string.iterator.js');
require('core-js/modules/es6.array.iterator.js');
require('core-js/modules/web.dom.iterable.js');
require('core-js/modules/es6.weak-map.js');
require('core-js/modules/es6.regexp.to-string.js');

function _assertClassBrand(e, t, n) {
  if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n;
  throw new TypeError("Private element is not present on this object");
}
function _assertThisInitialized(e) {
  if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function _callSuper(t, o, e) {
  return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, [], _getPrototypeOf(t).constructor) : o.apply(t, e));
}
function _checkPrivateRedeclaration(e, t) {
  if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object");
}
function _classCallCheck(a, n) {
  if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _classPrivateFieldGet2(s, a) {
  return s.get(_assertClassBrand(s, a));
}
function _classPrivateFieldInitSpec(e, t, a) {
  _checkPrivateRedeclaration(e, t), t.set(e, a);
}
function _classPrivateFieldSet2(s, a, r) {
  return s.set(_assertClassBrand(s, a), r), r;
}
function _construct(t, e, r) {
  if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments);
  var o = [null];
  o.push.apply(o, e);
  var p = new (t.bind.apply(t, o))();
  return r && _setPrototypeOf(p, r.prototype), p;
}
function _defineProperties(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);
  }
}
function _createClass(e, r, t) {
  return r && _defineProperties(e.prototype, r), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function _defineProperty(e, r, t) {
  return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}
function _getPrototypeOf(t) {
  return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, _getPrototypeOf(t);
}
function _inherits(t, e) {
  if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: t,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(t, "prototype", {
    writable: !1
  }), e && _setPrototypeOf(t, e);
}
function _isNativeFunction(t) {
  try {
    return -1 !== Function.toString.call(t).indexOf("[native code]");
  } catch (n) {
    return "function" == typeof t;
  }
}
function _isNativeReflectConstruct() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch (t) {}
  return (_isNativeReflectConstruct = function () {
    return !!t;
  })();
}
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
      _defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function _objectWithoutProperties(e, t) {
  if (null == e) return {};
  var o,
    r,
    i = _objectWithoutPropertiesLoose(e, t);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e);
    for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
  }
  return i;
}
function _objectWithoutPropertiesLoose(r, e) {
  if (null == r) return {};
  var t = {};
  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
    if (e.includes(n)) continue;
    t[n] = r[n];
  }
  return t;
}
function _possibleConstructorReturn(t, e) {
  if (e && ("object" == typeof e || "function" == typeof e)) return e;
  if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
  return _assertThisInitialized(t);
}
function _setPrototypeOf(t, e) {
  return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
    return t.__proto__ = e, t;
  }, _setPrototypeOf(t, e);
}
function _toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}
function _wrapNativeSuper(t) {
  var r = "function" == typeof Map ? new Map() : void 0;
  return _wrapNativeSuper = function (t) {
    if (null === t || !_isNativeFunction(t)) return t;
    if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function");
    if (void 0 !== r) {
      if (r.has(t)) return r.get(t);
      r.set(t, Wrapper);
    }
    function Wrapper() {
      return _construct(t, arguments, _getPrototypeOf(this).constructor);
    }
    return Wrapper.prototype = Object.create(t.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), _setPrototypeOf(Wrapper, t);
  }, _wrapNativeSuper(t);
}

var noop = (function () {});

/**
 * 合并对象
 * @returns {*} - 合并后的对象
 */
function mergeObj() {
  return Object.assign.apply(Object, [{}].concat(Array.prototype.slice.call(arguments)));
}

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

var tinyEmitter = {exports: {}};

var hasRequiredTinyEmitter;

function requireTinyEmitter () {
	if (hasRequiredTinyEmitter) return tinyEmitter.exports;
	hasRequiredTinyEmitter = 1;
	function E () {
	  // Keep this empty so it's easier to inherit from
	  // (via https://github.com/lipsmack from https://github.com/scottcorgan/tiny-emitter/issues/3)
	}

	E.prototype = {
	  on: function (name, callback, ctx) {
	    var e = this.e || (this.e = {});

	    (e[name] || (e[name] = [])).push({
	      fn: callback,
	      ctx: ctx
	    });

	    return this;
	  },

	  once: function (name, callback, ctx) {
	    var self = this;
	    function listener () {
	      self.off(name, listener);
	      callback.apply(ctx, arguments);
	    }
	    listener._ = callback;
	    return this.on(name, listener, ctx);
	  },

	  emit: function (name) {
	    var data = [].slice.call(arguments, 1);
	    var evtArr = ((this.e || (this.e = {}))[name] || []).slice();
	    var i = 0;
	    var len = evtArr.length;

	    for (i; i < len; i++) {
	      evtArr[i].fn.apply(evtArr[i].ctx, data);
	    }

	    return this;
	  },

	  off: function (name, callback) {
	    var e = this.e || (this.e = {});
	    var evts = e[name];
	    var liveEvents = [];

	    if (evts && callback) {
	      for (var i = 0, len = evts.length; i < len; i++) {
	        if (evts[i].fn !== callback && evts[i].fn._ !== callback)
	          liveEvents.push(evts[i]);
	      }
	    }

	    // Remove event from queue to prevent memory leak
	    // Suggested by https://github.com/lazd
	    // Ref: https://github.com/scottcorgan/tiny-emitter/commit/c6ebfaa9bc973b33d110a84a307742b7cf94c953#commitcomment-5024910

	    (liveEvents.length)
	      ? e[name] = liveEvents
	      : delete e[name];

	    return this;
	  }
	};

	tinyEmitter.exports = E;
	tinyEmitter.exports.TinyEmitter = E;
	return tinyEmitter.exports;
}

var tinyEmitterExports = requireTinyEmitter();
var Emitter$1 = /*@__PURE__*/getDefaultExportFromCjs(tinyEmitterExports);

var EVENT_ENUM = {
  SUCCESS: "mock:success",
  FAIL: "mock:fail",
  CANCEL: "mock:cancel",
  REAL_REQUEST: "mock:realRequest",
  DESTROY_MOCK: "mock:destroyMock"
};
var Emitter = new Emitter$1();

function pickData(_ref) {
  var _window$__MOCK_CONFIG;
  var scope = _ref.scope,
    status = _ref.status,
    mockId = _ref.mockId;
  if (!scope) {
    throw new Error("scope is required");
  }
  var mock = (_window$__MOCK_CONFIG = window.__MOCK_CONFIG__) === null || _window$__MOCK_CONFIG === void 0 ? void 0 : _window$__MOCK_CONFIG.mock;
  status = status || "success";
  var res = null;
  var resList = mock[scope];
  if (resList) {
    res = resList.filter(function (i) {
      return i.status === status;
    });
    if (mockId) {
      res = res.find(function (i) {
        return i.mockId === mockId;
      });
    } else {
      res = res[0];
    }
  }
  return res;
}

/**
 * 生成事件名称
 * @param {*} type - 事件类型
 * @param {*} eventId - 事件id
 * @returns {string} - 事件名称
 */
function generateEventName(type, eventId) {
  // console.log(`${type}${eventId ? `-${eventId}` : ""}`);
  return "".concat(type).concat(eventId ? "-".concat(eventId) : "");
}

var _stack = /*#__PURE__*/new WeakMap();
var EventStack = /*#__PURE__*/function () {
  function EventStack() {
    _classCallCheck(this, EventStack);
    _classPrivateFieldInitSpec(this, _stack, new Map());
    // 单例模式
    if (EventStack.instance) {
      return EventStack.instance;
    }
    EventStack.instance = this;
  }
  return _createClass(EventStack, [{
    key: "log",
    value: function log() {
      console.log(_classPrivateFieldGet2(_stack, this));
    }
  }, {
    key: "push",
    value: function push(scope, eventId) {
      var list = _classPrivateFieldGet2(_stack, this).get(scope) || [];
      list.push(eventId);
      _classPrivateFieldGet2(_stack, this).set(scope, list);
    }
  }, {
    key: "pop",
    value: function pop(scope) {
      var list = _classPrivateFieldGet2(_stack, this).get(scope) || [];
      if (!list.length) {
        return;
      }
      var eventId = list.pop();
      if (!list.length) {
        _classPrivateFieldGet2(_stack, this).delete(scope);
      } else {
        _classPrivateFieldGet2(_stack, this).set(scope, list);
      }
      return eventId;
    }
  }, {
    key: "getLatest",
    value: function getLatest(scope) {
      var list = _classPrivateFieldGet2(_stack, this).get(scope) || [];
      return list[list.length - 1];
    }
  }]);
}();

var eventStack$2 = new EventStack();
function onSuccess(scope, mockId) {
  var _pickData;
  Emitter.emit(generateEventName(EVENT_ENUM.SUCCESS, eventStack$2.getLatest(scope)), (_pickData = pickData({
    scope: scope,
    status: "success",
    mockId: mockId
  })) === null || _pickData === void 0 ? void 0 : _pickData.data);
  return eventStack$2.pop(scope);
}
function onFail(scope, mockId) {
  var _pickData2;
  Emitter.emit(generateEventName(EVENT_ENUM.FAIL, eventStack$2.getLatest(scope)), (_pickData2 = pickData({
    scope: scope,
    status: "fail",
    mockId: mockId
  })) === null || _pickData2 === void 0 ? void 0 : _pickData2.data);
  return eventStack$2.pop(scope);
}
function onCancel(scope) {
  Emitter.emit(generateEventName(EVENT_ENUM.CANCEL, eventStack$2.getLatest(scope)));
  return eventStack$2.pop(scope);
}
function onRealRequest(scope) {
  Emitter.emit(generateEventName(EVENT_ENUM.REAL_REQUEST, eventStack$2.getLatest(scope)));
  return eventStack$2.pop(scope);
}
function onDestroyMock(eventId, scope) {
  Emitter.emit(generateEventName(EVENT_ENUM.DESTROY_MOCK, eventId || eventStack$2.getLatest(scope)));
  if (window.__MOCK_CONFIG__.useModal) {
    // 激活其他的mock modal
    $("jin-mock").attr("active", "false");
    $("jin-mock").last().attr("active", "true");
  }
  if (eventId !== eventStack$2.getLatest(scope)) {
    return eventId;
  }
  return eventStack$2.pop(scope);
}

var _eventName = /*#__PURE__*/new WeakMap();
var Mock = /*#__PURE__*/function (_HTMLElement) {
  function Mock() {
    var _this;
    _classCallCheck(this, Mock);
    _this = _callSuper(this, Mock);
    _classPrivateFieldInitSpec(_this, _eventName, "");
    return _this;
  }
  _inherits(Mock, _HTMLElement);
  return _createClass(Mock, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      var _this2 = this;
      this.render();
      _classPrivateFieldSet2(_eventName, this, generateEventName(EVENT_ENUM.DESTROY_MOCK, this.id));
      Emitter.on(_classPrivateFieldGet2(_eventName, this), function () {
        Emitter.off(_classPrivateFieldGet2(_eventName, _this2));
        _this2.remove();
      });
    }
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      this.innerHTML = "";
    }
  }, {
    key: "attributeChangedCallback",
    value: function attributeChangedCallback(name, oldValue, newValue) {
      if (name === "active") {
        $(this.shadowRoot).find(".jm-container").css({
          display: newValue === "true" ? "block" : "none"
        });
      }
    }
  }, {
    key: "scope",
    get: function get() {
      return this._scope;
    },
    set: function set(value) {
      this._scope = value;
    }
  }, {
    key: "renderDom",
    value: function renderDom() {
      var _this3 = this;
      var container = $('<div class="jm-container"></div>');
      $(container).append($("<div class=\"jm-mask\"></div>\n        <div class=\"jm-modal\">\n          <div class=\"jm-modal-header\">\n            <h3 class=\"jm-modal-title\">Mock \u8BF7\u6C42</h3>\n            <button class=\"jm-modal-close\">\n              <span class=\"jm-modal-close-x\">\xD7</span>\n            </button>\n          </div>\n          <div class=\"jm-modal-body\">\n          </div>\n        </div>")).find(".jm-modal-close").on("click", function () {
        onDestroyMock(_this3.id, _this3.scope);
        Emitter.off(_classPrivateFieldGet2(_eventName, _this3));
      });
      return container;
    }
  }, {
    key: "renderStyle",
    value: function renderStyle() {
      return $("<style>\n      .jm-container {\n        position: fixed;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        z-index: 9999;\n      }\n      .jm-mask {\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        background-color: rgba(0, 0, 0, 0.5);\n      }\n      .jm-modal {\n        position: absolute;\n        top: 50%;\n        left: 50%;\n        transform: translate(-50%, -50%);\n        width: 500px;\n        background-color: #fff;\n        box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);\n      }\n      .jm-modal-header {\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        padding: 10px;\n        background-color: #f5f5f5;\n      }\n      .jm-modal-title {\n        margin: 0;\n        font-size: 18px;\n      }\n      .jm-modal-close {\n        border: none;\n        background-color: transparent;\n        cursor: pointer;\n      }\n      .jm-modal-close-x {\n        font-size: 24px;\n        font-weight: bold;\n      }\n      .jm-modal-body {\n        padding: 10px;\n      }\n    </style>");
    }
  }, {
    key: "render",
    value: function render() {
      $(this.attachShadow({
        mode: "open"
      })).append(this.renderStyle()).append(this.renderDom());
    }
  }]);
}(/*#__PURE__*/_wrapNativeSuper(HTMLElement));
_defineProperty(Mock, "observedAttributes", ["scope", "id", "active"]);
function defineMock() {
  if (customElements.get("jin-mock")) {
    return;
  }
  customElements.define("jin-mock", Mock);
}

var eventStack$1 = new EventStack();
var createSuccessButton = function createSuccessButton(scope) {
  var mockData = (window.__MOCK_CONFIG__.mock || {})[scope];
  if (!mockData) return;
  var btnList = [];
  mockData === null || mockData === void 0 || mockData.filter(function (i) {
    return i.status === "success";
  }).forEach(function (_ref) {
    var mockId = _ref.mockId,
      name = _ref.name;
    var button = $("<button>");
    button.attr("type", "sendRequest").data({
      mockId: mockId,
      status: "success"
    }).text(name || mockId);
    btnList.push(button);
  });
  return btnList;
};
var createFailButton = function createFailButton(scope) {
  var mockData = (window.__MOCK_CONFIG__.mock || {})[scope];
  if (!mockData) return;
  var btnList = [];
  mockData === null || mockData === void 0 || mockData.filter(function (i) {
    return i.status === "fail";
  }).forEach(function (_ref2) {
    var mockId = _ref2.mockId,
      name = _ref2.name;
    var button = $("<button>");
    button.attr("type", "sendRequest").data({
      mockId: mockId,
      status: "fail"
    }).text(name || mockId);
    btnList.push(button);
  });
  return btnList;
};

/**
 * 渲染MOCK元素
 * @returns {void}
 */
function createMockContent(scope) {
  var content = $("<div>");
  var realRequestTitle = $("<h3>").text("真实的请求");
  var successTitle = $("<h3>").text("成功的请求");
  var failTitle = $("<h3>").text("失败的请求");
  var realRequestContainer = $("<div>");
  var successContainer = $("<div>");
  var failContainer = $("<div>");
  realRequestContainer.append($("<button>").attr("type", "sendRequest").data({
    realRequest: true
  }).text("发送请求"));
  successContainer.append(createSuccessButton(scope));
  failContainer.append(createFailButton(scope));
  content.on("click", "button[type=sendRequest]", function (e) {
    var eventId = "";
    if ($(e.target).data("status") === "fail") {
      eventId = onFail(scope, $(e.target).data("mockId"));
    } else if ($(e.target).data("status") === "success") {
      eventId = onSuccess(scope, $(e.target).data("mockId"));
    } else if ($(e.target).data("realRequest")) {
      eventId = onRealRequest(scope);
    }
    onDestroyMock(eventId, scope);
  });
  content.append(realRequestTitle).append(realRequestContainer).append(successTitle).append(successContainer).append(failTitle).append(failContainer);
  return content;
}
var activateMock = function activateMock(eventId) {
  $("jin-mock").attr("active", "false");
  $("jin-mock[id=".concat(eventId, "]")).attr("active", "true");
};
function appendMock(scope) {
  var eventId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : eventStack$1.getLatest(scope);
  defineMock();
  var jinMock = $("<jin-mock></jin-mock>");
  jinMock.attr("scope", scope).attr("id", eventId).appendTo("body");
  activateMock(eventId);
  $(jinMock.get(0).shadowRoot).find(".jm-modal-body").empty().append(createMockContent(scope));
  return {
    eventId: eventId,
    close: function close() {
      onDestroyMock(scope);
    }
  };
}

// import { customAlphabet } from "nanoid";
// const nanoid = customAlphabet("1234567890abcdef", 10);

function generateUnionid() {
  var size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;
  return Math.random().toString(36).slice(-size);
  // return nanoid(size);
}

var eventStack = new EventStack();
var mockRequest_defaultOptions = {
  realRequest: function realRequest() {
    return Promise.resolve();
  }
};

/**
 * 模拟请求
 * @param {string} scope - 作用域, 为接口路径
 * @param {bool | { [scope]: bool }} enable - 是否启用mock，默认true
 * @param {function} realRequest - 真实请求函数，默认不执行
 */
function mockRequest() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _mergeObj = mergeObj(mockRequest_defaultOptions, options),
    scope = _mergeObj.scope,
    enable = _mergeObj.enable,
    realRequest = _mergeObj.realRequest;
  if (!scope) {
    throw new Error("scope is required");
  }
  if (enable === void 0) {
    var _window$__MOCK_CONFIG;
    enable = (_window$__MOCK_CONFIG = window.__MOCK_CONFIG__) === null || _window$__MOCK_CONFIG === void 0 ? void 0 : _window$__MOCK_CONFIG.enable;
  }
  if (!enable || enable && _typeof(enable) === "object" && enable[scope] !== void 0 && !enable[scope]) {
    return realRequest ? realRequest() : Promise.resolve();
  }

  // 事件标识
  var eventId = generateUnionid();
  eventStack.push(scope, eventId);
  if (window.__MOCK_CONFIG__.useModal) {
    appendMock(scope, eventId);
  }
  var clearAllEvent = function clearAllEvent() {
    Emitter.off(generateEventName(EVENT_ENUM.SUCCESS, eventId));
    Emitter.off(generateEventName(EVENT_ENUM.FAIL, eventId));
    Emitter.off(generateEventName(EVENT_ENUM.CANCEL, eventId));
    Emitter.off(generateEventName(EVENT_ENUM.DESTROY_MOCK, eventId));
    Emitter.off(generateEventName(EVENT_ENUM.REAL_REQUEST, eventId));
  };
  return new Promise(function (resolve, reject) {
    Emitter.on(generateEventName(EVENT_ENUM.SUCCESS, eventId), function (res) {
      console.log("onSuccess", res);
      // clearAllEvent();
      resolve(res);
    });
    Emitter.on(generateEventName(EVENT_ENUM.FAIL, eventId), function (res) {
      clearAllEvent();
      reject(res);
    });
    Emitter.on(generateEventName(EVENT_ENUM.CANCEL, eventId), function () {
      clearAllEvent();
      reject("cancel");
    });
    Emitter.on(generateEventName(EVENT_ENUM.DESTROY_MOCK, eventId), function () {
      clearAllEvent();
      reject("close");
    });
    Emitter.on(generateEventName(EVENT_ENUM.REAL_REQUEST, eventId), function () {
      realRequest === null || realRequest === void 0 || realRequest().then(resolve, reject).finally(function () {
        clearAllEvent();
      });
    });
  });
}

var _excluded = ["mock", "enable"];
var createMock_defaultOptions = {
  mock: null,
  onSuccess: noop,
  onFail: noop,
  onCancel: noop,
  useModal: true,
  enable: true
};

/**
 * 注入window
 * @param {*} options
 */
var injectWindow = function injectWindow(_ref) {
  var mock = _ref.mock,
    enable = _ref.enable,
    rest = _objectWithoutProperties(_ref, _excluded);
  if (!window) return;
  if (typeof enable === "boolean" && enable) {
    enable = Object.fromEntries(Object.keys(mock).map(function (scope) {
      return [scope, true];
    }));
  }
  window.__MOCK_CONFIG__ = mergeObj(window.__MOCK_CONFIG__, _objectSpread2({
    enable: enable,
    mock: mock
  }, rest));
};

/**
 * 创建mock
 * @param {*} options
 * @param {{}} options.mock - 接口配置，key为接口路径，value为mock数据
 * @param {function} options.onSuccess - 成功回调
 * @param {function} options.onFail - 失败回调
 * @param {function} options.onCancel - 取消回调
 * @param {function} options.useModal - 是否使用modal，默认false
 * @param {bool | { [scope]: bool }} options.enable - 是否启用mock，默认true
 * @returns {function} - mockRequest 函数
 */
var createMock = function createMock() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  injectWindow(mergeObj(createMock_defaultOptions, options));
  return mockRequest;
};

exports.createMock = createMock;
exports.onCancel = onCancel;
exports.onDestroyMock = onDestroyMock;
exports.onFail = onFail;
exports.onRealRequest = onRealRequest;
exports.onSuccess = onSuccess;
