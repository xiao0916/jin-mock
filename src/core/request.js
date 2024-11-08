import Emitter, { EVENT_ENUM } from "../utils/emitter";
import mergeObj from "../utils/merge-obj";
import { appendMock } from "../components/mock";
import generateEventName from "../utils/generate-event-name";
import EventStack from "../utils/event-stack";
const eventStack = new EventStack();
import generateUnionid from "../utils/generate-unionid";

const mockRequest_defaultOptions = {
  realRequest: () => Promise.resolve(),
};

/**
 * 模拟请求
 * @param {string} scope - 作用域, 为接口路径
 * @param {bool | { [scope]: bool }} enable - 是否启用mock，默认true
 * @param {function} realRequest - 真实请求函数，默认不执行
 */
export default function mockRequest(options = {}) {
  let { scope, enable, realRequest } = mergeObj(
    mockRequest_defaultOptions,
    options
  );

  if (!scope) {
    throw new Error("scope is required");
  }

  if (enable === void 0) {
    enable = window.__MOCK_CONFIG__?.enable;
  }

  if (
    !enable ||
    (enable &&
      typeof enable === "object" &&
      enable[scope] !== void 0 &&
      !enable[scope])
  ) {
    return realRequest ? realRequest() : Promise.resolve();
  }

  // 事件标识
  const eventId = generateUnionid();
  eventStack.push(scope, eventId);

  if (window.__MOCK_CONFIG__.useModal) {
    appendMock(scope, eventId);
  }

  const clearAllEvent = () => {
    Emitter.off(generateEventName(EVENT_ENUM.SUCCESS, eventId));
    Emitter.off(generateEventName(EVENT_ENUM.FAIL, eventId));
    Emitter.off(generateEventName(EVENT_ENUM.CANCEL, eventId));
    Emitter.off(generateEventName(EVENT_ENUM.DESTROY_MOCK, eventId));
    Emitter.off(generateEventName(EVENT_ENUM.REAL_REQUEST, eventId));
  };

  return new Promise((resolve, reject) => {
    Emitter.on(generateEventName(EVENT_ENUM.SUCCESS, eventId), (res) => {
      console.log("onSuccess", res);
      // clearAllEvent();
      resolve(res);
    });
    Emitter.on(generateEventName(EVENT_ENUM.FAIL, eventId), (res) => {
      clearAllEvent();
      reject(res);
    });
    Emitter.on(generateEventName(EVENT_ENUM.CANCEL, eventId), () => {
      clearAllEvent();
      reject("cancel");
    });
    Emitter.on(generateEventName(EVENT_ENUM.DESTROY_MOCK, eventId), () => {
      clearAllEvent();
      reject("close");
    });
    Emitter.on(generateEventName(EVENT_ENUM.REAL_REQUEST, eventId), () => {
      realRequest?.()
        .then(resolve, reject)
        .finally(() => {
          clearAllEvent();
        });
    });
  });
}
