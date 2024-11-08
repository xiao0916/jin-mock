import $ from "jquery";
import {
  onSuccess,
  onFail,
  onCancel,
  onRealRequest,
  onDestroyMock,
} from "../events/core";
import defineMock from "./define-mock";
import EventStack from "../utils/event-stack";
const eventStack = new EventStack();

const createSuccessButton = (scope) => {
  const mockData = (window.__MOCK_CONFIG__.mock || {})[scope];
  if (!mockData) return;

  let btnList = [];
  mockData
    ?.filter((i) => i.status === "success")
    .forEach(({ mockId, name }) => {
      const button = $("<button>");
      button
        .attr("type", "sendRequest")
        .data({
          mockId,
          status: "success",
        })
        .text(name || mockId);
      btnList.push(button);
    });
  return btnList;
};

const createFailButton = (scope) => {
  const mockData = (window.__MOCK_CONFIG__.mock || {})[scope];
  if (!mockData) return;

  let btnList = [];
  mockData
    ?.filter((i) => i.status === "fail")
    .forEach(({ mockId, name }) => {
      const button = $("<button>");
      button
        .attr("type", "sendRequest")
        .data({
          mockId,
          status: "fail",
        })
        .text(name || mockId);
      btnList.push(button);
    });
  return btnList;
};

/**
 * 渲染MOCK元素
 * @returns {void}
 */
function createMockContent(scope) {
  const content = $("<div>");
  const realRequestTitle = $("<h3>").text("真实的请求");
  const successTitle = $("<h3>").text("成功的请求");
  const failTitle = $("<h3>").text("失败的请求");
  const realRequestContainer = $("<div>");
  const successContainer = $("<div>");
  const failContainer = $("<div>");
  realRequestContainer.append(
    $("<button>")
      .attr("type", "sendRequest")
      .data({
        realRequest: true,
      })
      .text("发送请求")
  );
  successContainer.append(createSuccessButton(scope));
  failContainer.append(createFailButton(scope));
  content.on("click", "button[type=sendRequest]", (e) => {
    let eventId = "";
    if ($(e.target).data("status") === "fail") {
      eventId = onFail(scope, $(e.target).data("mockId"));
    } else if ($(e.target).data("status") === "success") {
      eventId = onSuccess(scope, $(e.target).data("mockId"));
    } else if ($(e.target).data("realRequest")) {
      eventId = onRealRequest(scope);
    }
    onDestroyMock(eventId, scope);
  });
  content
    .append(realRequestTitle)
    .append(realRequestContainer)
    .append(successTitle)
    .append(successContainer)
    .append(failTitle)
    .append(failContainer);
  return content;
}

const activateMock = (eventId) => {
  $("jin-mock").attr("active", "false");
  $(`jin-mock[id=${eventId}]`).attr("active", "true");
};

export function appendMock(scope, eventId = eventStack.getLatest(scope)) {
  defineMock();
  const jinMock = $("<jin-mock></jin-mock>");
  jinMock.attr("scope", scope).attr("id", eventId).appendTo("body");
  activateMock(eventId);
  $(jinMock.get(0).shadowRoot)
    .find(".jm-modal-body")
    .empty()
    .append(createMockContent(scope));

  return {
    eventId,
    close: () => {
      onDestroyMock(scope);
    },
  };
}
