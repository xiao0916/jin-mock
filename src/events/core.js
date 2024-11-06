import Emitter, { EVENT_ENUM } from "../utils/emitter";
import pickData from "../utils/pick-data";
import generateEventName from "../utils/generate-event-name";
import $ from "jquery";

export function onSuccess({ scope, mockId, eventId }) {
  Emitter.emit(
    generateEventName(EVENT_ENUM.SUCCESS, eventId),
    pickData({ scope, status: "success", mockId })?.data
  );
}

export function onFail({ scope, mockId, eventId }) {
  Emitter.emit(
    generateEventName(EVENT_ENUM.FAIL, eventId),
    pickData({ scope, status: "fail", mockId })?.data
  );
}

export function onCancel(eventId) {
  Emitter.emit(generateEventName(EVENT_ENUM.CANCEL, eventId));
}

export function onRealRequest(eventId) {
  Emitter.emit(generateEventName(EVENT_ENUM.REAL_REQUEST, eventId));
}

export function onDestroyMock(eventId) {
  Emitter.emit(generateEventName(EVENT_ENUM.DESTROY_MOCK, eventId));
  // 激活其他的mock modal
  $("jin-mock").attr("active", "false");
  $("jin-mock").last().attr("active", "true");
}
