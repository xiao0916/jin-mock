import noop from "../utils/noop";
import mergeObj from "../utils/merge-obj";
import mockRequest from "./request";

const createMock_defaultOptions = {
  mock: null,
  onSuccess: noop,
  onFail: noop,
  onCancel: noop,
  useModal: true,
  enable: true,
};

/**
 * 注入window
 * @param {*} options
 */
const injectWindow = ({ mock, enable, ...rest }) => {
  if (!window) return;

  if (typeof enable === "boolean" && enable) {
    enable = Object.fromEntries(
      Object.keys(mock).map((scope) => [scope, true])
    );
  }

  window.__MOCK_CONFIG__ = mergeObj(window.__MOCK_CONFIG__, {
    enable,
    mock,
    ...rest,
  });
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
const createMock = (options = {}) => {
  injectWindow(mergeObj(createMock_defaultOptions, options));

  return mockRequest;
};

export { createMock as default };
