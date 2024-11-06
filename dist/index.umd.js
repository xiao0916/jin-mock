(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('core-js/modules/es6.array.map.js'), require('core-js/modules/es6.object.keys.js'), require('core-js/modules/es6.object.assign.js'), require('core-js/modules/es6.array.slice.js'), require('core-js/modules/es6.object.to-string.js'), require('core-js/modules/es6.promise.js'), require('core-js/modules/es7.promise.finally.js'), require('core-js/modules/es6.array.filter.js'), require('core-js/modules/es6.function.name.js'), require('core-js/modules/es6.array.find.js'), require('core-js/modules/es6.weak-map.js'), require('core-js/modules/es6.string.iterator.js'), require('core-js/modules/es6.array.iterator.js'), require('core-js/modules/web.dom.iterable.js'), require('core-js/modules/es6.regexp.to-string.js'), require('jquery')) :
  typeof define === 'function' && define.amd ? define(['exports', 'core-js/modules/es6.array.map.js', 'core-js/modules/es6.object.keys.js', 'core-js/modules/es6.object.assign.js', 'core-js/modules/es6.array.slice.js', 'core-js/modules/es6.object.to-string.js', 'core-js/modules/es6.promise.js', 'core-js/modules/es7.promise.finally.js', 'core-js/modules/es6.array.filter.js', 'core-js/modules/es6.function.name.js', 'core-js/modules/es6.array.find.js', 'core-js/modules/es6.weak-map.js', 'core-js/modules/es6.string.iterator.js', 'core-js/modules/es6.array.iterator.js', 'core-js/modules/web.dom.iterable.js', 'core-js/modules/es6.regexp.to-string.js', 'jquery'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.jinMock = {}, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, global.$));
})(this, (function (exports, es6_array_map_js, es6_object_keys_js, es6_object_assign_js, es6_array_slice_js, es6_object_toString_js, es6_promise_js, es7_promise_finally_js, es6_array_filter_js, es6_function_name_js, es6_array_find_js, es6_weakMap_js, es6_string_iterator_js, es6_array_iterator_js, web_dom_iterable_js, es6_regexp_toString_js, $) { 'use strict';

  var noop = (function () {});

  /**
   * 合并对象
   * @returns {*} - 合并后的对象
   */
  function mergeObj() {
    return Object.assign.apply(Object, [{}].concat(Array.prototype.slice.call(arguments)));
  }

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

  // import { customAlphabet } from "nanoid";
  // const nanoid = customAlphabet("1234567890abcdef", 10);

  function generateUnionid() {
    var size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;
    return Math.random().toString(36).slice(-size);
    // return nanoid(size);
  }

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
    return "".concat(type).concat(eventId ? "-".concat(eventId) : "");
  }

  function onSuccess(_ref) {
    var _pickData;
    var scope = _ref.scope,
      mockId = _ref.mockId,
      eventId = _ref.eventId;
    Emitter.emit(generateEventName(EVENT_ENUM.SUCCESS, eventId), (_pickData = pickData({
      scope: scope,
      status: "success",
      mockId: mockId
    })) === null || _pickData === void 0 ? void 0 : _pickData.data);
  }
  function onFail(_ref2) {
    var _pickData2;
    var scope = _ref2.scope,
      mockId = _ref2.mockId,
      eventId = _ref2.eventId;
    Emitter.emit(generateEventName(EVENT_ENUM.FAIL, eventId), (_pickData2 = pickData({
      scope: scope,
      status: "fail",
      mockId: mockId
    })) === null || _pickData2 === void 0 ? void 0 : _pickData2.data);
  }
  function onCancel(eventId) {
    Emitter.emit(generateEventName(EVENT_ENUM.CANCEL, eventId));
  }
  function onRealRequest(eventId) {
    Emitter.emit(generateEventName(EVENT_ENUM.REAL_REQUEST, eventId));
  }
  function onDestroyMock(eventId) {
    Emitter.emit(generateEventName(EVENT_ENUM.DESTROY_MOCK, eventId));
    // 激活其他的mock modal
    $("jin-mock").attr("active", "false");
    $("jin-mock").last().attr("active", "true");
  }

  var _eventId = /*#__PURE__*/new WeakMap();
  var Events = /*#__PURE__*/function () {
    function Events() {
      _classCallCheck(this, Events);
      _classPrivateFieldInitSpec(this, _eventId, generateUnionid());
    }
    return _createClass(Events, [{
      key: "getEventId",
      value: function getEventId() {
        return _classPrivateFieldGet2(_eventId, this);
      }
    }, {
      key: "onSuccess",
      value: function onSuccess$1(scope, mockId) {
        onSuccess({
          scope: scope,
          mockId: mockId,
          eventId: _classPrivateFieldGet2(_eventId, this)
        });
      }
    }, {
      key: "onFail",
      value: function onFail$1(scope, mockId) {
        onFail({
          scope: scope,
          mockId: mockId,
          eventId: _classPrivateFieldGet2(_eventId, this)
        });
      }
    }, {
      key: "onCancel",
      value: function onCancel$1() {
        onCancel(_classPrivateFieldGet2(_eventId, this));
      }
    }, {
      key: "onRealRequest",
      value: function onRealRequest$1() {
        onRealRequest(_classPrivateFieldGet2(_eventId, this));
      }
    }, {
      key: "onDestroyMock",
      value: function onDestroyMock$1() {
        onDestroyMock(_classPrivateFieldGet2(_eventId, this));
      }
    }]);
  }();

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
          onDestroyMock(_this3.id);
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
  function createMockContent(scope, events) {
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
      if ($(e.target).data("status") === "fail") {
        events.onFail(scope, $(e.target).data("mockId"));
      } else if ($(e.target).data("status") === "success") {
        events.onSuccess(scope, $(e.target).data("mockId"));
      } else if ($(e.target).data("realRequest")) {
        events.onRealRequest();
      }
      events.onDestroyMock();
    });
    content.append(realRequestTitle).append(realRequestContainer).append(successTitle).append(successContainer).append(failTitle).append(failContainer);
    return content;
  }
  var activateMock = function activateMock(eventId) {
    $("jin-mock").attr("active", "false");
    $("jin-mock[id=".concat(eventId, "]")).attr("active", "true");
  };
  function appendMock(scope) {
    var events = new Events();
    defineMock();
    var jinMock = $("<jin-mock></jin-mock>");
    jinMock.attr("scope", scope).attr("id", events.getEventId()).appendTo("body");
    activateMock(events.getEventId());
    $(jinMock.get(0).shadowRoot).find(".jm-modal-body").empty().append(createMockContent(scope, events));
    return {
      eventId: events.getEventId(),
      close: function close() {
        events.onDestroyMock();
      }
    };
  }

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
    var _appendMock = appendMock(scope),
      eventId = _appendMock.eventId;
    return new Promise(function (resolve, reject) {
      Emitter.on(generateEventName(EVENT_ENUM.SUCCESS, eventId), function (res) {
        Emitter.off(generateEventName(EVENT_ENUM.SUCCESS, eventId));
        resolve(res);
      });
      Emitter.on(generateEventName(EVENT_ENUM.FAIL, eventId), function (res) {
        Emitter.off(generateEventName(EVENT_ENUM.FAIL, eventId));
        reject(res);
      });
      Emitter.on(generateEventName(EVENT_ENUM.CANCEL, eventId), function () {
        Emitter.off(generateEventName(EVENT_ENUM.CANCEL, eventId));
        resolve("cancel");
      });
      Emitter.on(generateEventName(EVENT_ENUM.REAL_REQUEST, eventId), function () {
        realRequest === null || realRequest === void 0 || realRequest().then(resolve, reject).finally(function () {
          Emitter.off(generateEventName(EVENT_ENUM.REAL_REQUEST, eventId));
        });
      });
    });
  }

  var createMock_defaultOptions = {
    global: true,
    mock: null,
    onSuccess: noop,
    onFail: noop,
    onCancel: noop
  };

  /**
   * 注入window
   * @param {*} options
   */
  var injectWindow = function injectWindow(_ref) {
    var global = _ref.global,
      mock = _ref.mock,
      enable = _ref.enable;
    if (!window) return;
    if (typeof enable === "boolean") {
      enable = Object.fromEntries(Object.keys(mock).map(function (scope) {
        return [scope, enable];
      }));
    }
    window.__MOCK_CONFIG__ = mergeObj(window.__MOCK_CONFIG__, {
      global: global,
      mock: mock,
      enable: enable
    });
  };

  /**
   * 创建mock
   * @param {*} options
   * @param {} options.global - 是否全局开启，所有接口都走mock，默认false
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
    var opts = mergeObj(createMock_defaultOptions, options);
    injectWindow({
      global: opts.global,
      mock: opts.mock,
      enable: opts.enable
    });
    return mockRequest;
  };

  exports.createMock = createMock;
  exports.onCancel = onCancel;
  exports.onDestroyMock = onDestroyMock;
  exports.onFail = onFail;
  exports.onRealRequest = onRealRequest;
  exports.onSuccess = onSuccess;

}));
