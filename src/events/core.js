import $ from "jquery";
import Emitter, { EVENT_ENUM } from "../utils/emitter";
import pickData from "../utils/pick-data";
import generateEventName from "../utils/generate-event-name";
import EventStack from "../utils/event-stack";
const eventStack = new EventStack();

export function onSuccess(scope, mockId) {
  Emitter.emit(
    generateEventName(EVENT_ENUM.SUCCESS, eventStack.getLatest(scope)),
    pickData({ scope, status: "success", mockId })?.data
  );
  return eventStack.pop(scope);
}

export function onFail(scope, mockId) {
  Emitter.emit(
    generateEventName(EVENT_ENUM.FAIL, eventStack.getLatest(scope)),
    pickData({ scope, status: "fail", mockId })?.data
  );
  return eventStack.pop(scope);
}

export function onCancel(scope) {
  Emitter.emit(
    generateEventName(EVENT_ENUM.CANCEL, eventStack.getLatest(scope))
  );
  return eventStack.pop(scope);
}

export function onRealRequest(scope) {
  Emitter.emit(
    generateEventName(EVENT_ENUM.REAL_REQUEST, eventStack.getLatest(scope))
  );
  return eventStack.pop(scope);
}

export function onDestroyMock(eventId, scope) {
  Emitter.emit(
    generateEventName(
      EVENT_ENUM.DESTROY_MOCK,
      eventId || eventStack.getLatest(scope)
    )
  );

  if (window.__MOCK_CONFIG__.useModal) {
    // 激活其他的mock modal
    $("jin-mock").attr("active", "false");
    $("jin-mock").last().attr("active", "true");
  }

  if (eventId !== eventStack.getLatest(scope)) {
    return eventId;
  }
  return eventStack.pop(scope);
}
