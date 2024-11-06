import noop from "../utils/noop";
import mergeObj from "../utils/merge-obj";
import mockRequest from "./request";

const createMock_defaultOptions = {
  global: true,
  mock: null,
  onSuccess: noop,
  onFail: noop,
  onCancel: noop,
};

/**
 * 注入window
 * @param {*} options
 */
const injectWindow = ({ global, mock, enable }) => {
  if (!window) return;

  if (typeof enable === "boolean") {
    enable = Object.fromEntries(
      Object.keys(mock).map((scope) => [scope, enable])
    );
  }
  window.__MOCK_CONFIG__ = mergeObj(window.__MOCK_CONFIG__, {
    global,
    mock,
    enable,
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
const createMock = (options = {}) => {
  const opts = mergeObj(createMock_defaultOptions, options);

  injectWindow({
    global: opts.global,
    mock: opts.mock,
    enable: opts.enable,
  });

  return mockRequest;
};

export { createMock as default };
