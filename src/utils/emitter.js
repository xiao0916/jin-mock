import Emitter from "tiny-emitter";

export const EVENT_ENUM = {
  SUCCESS: "mock:success",
  FAIL: "mock:fail",
  CANCEL: "mock:cancel",
  REAL_REQUEST: "mock:realRequest",
  DESTROY_MOCK: "mock:destroyMock",
};

export default new Emitter();
