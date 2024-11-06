import generateUnionid from "../utils/generate-unionid";
import {
  onSuccess,
  onFail,
  onCancel,
  onRealRequest,
  onDestroyMock,
} from "./core";

export default class Events {
  #eventId = generateUnionid();

  getEventId() {
    return this.#eventId;
  }

  onSuccess(scope, mockId) {
    onSuccess({ scope, mockId, eventId: this.#eventId });
  }

  onFail(scope, mockId) {
    onFail({ scope, mockId, eventId: this.#eventId });
  }

  onCancel() {
    onCancel(this.#eventId);
  }

  onRealRequest() {
    onRealRequest(this.#eventId);
  }

  onDestroyMock() {
    onDestroyMock(this.#eventId);
  }
}
