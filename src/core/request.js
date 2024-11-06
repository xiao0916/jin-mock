import Emitter, { EVENT_ENUM } from "../utils/emitter";
import mergeObj from "../utils/merge-obj";
import { appendMock } from "../components/mock";
import generateEventName from "../utils/generate-event-name";

const mockRequest_defaultOptions = {
  realRequest: () => Promise.resolve(),
  enable: true,
  scope: "",
};

/**
 * 模拟请求
 * @param {string} scope - 作用域, 为接口路径
 */
export default function mockRequest(options = {}) {
  const { scope, enable, realRequest } = mergeObj(
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

  const { eventId } = appendMock(scope);

  return new Promise((resolve, reject) => {
    Emitter.on(generateEventName(EVENT_ENUM.SUCCESS, eventId), (res) => {
      Emitter.off(generateEventName(EVENT_ENUM.SUCCESS, eventId));
      resolve(res);
    });
    Emitter.on(generateEventName(EVENT_ENUM.FAIL, eventId), (res) => {
      Emitter.off(generateEventName(EVENT_ENUM.FAIL, eventId));
      reject(res);
    });
    Emitter.on(generateEventName(EVENT_ENUM.CANCEL, eventId), () => {
      Emitter.off(generateEventName(EVENT_ENUM.CANCEL, eventId));
      resolve("cancel");
    });
    Emitter.on(generateEventName(EVENT_ENUM.REAL_REQUEST, eventId), () => {
      realRequest?.()
        .then(resolve, reject)
        .finally(() => {
          Emitter.off(generateEventName(EVENT_ENUM.REAL_REQUEST, eventId));
        });
    });
  });
}
