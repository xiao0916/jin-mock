import Events from "../events";
import defineMock from "./define-mock";
import $ from "jquery";

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
        .text(mockId || name);
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
        .text(mockId || name);
      btnList.push(button);
    });
  return btnList;
};

/**
 * 渲染MOCK元素
 * @returns {void}
 */
export function createMockContent(scope, events) {
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
    if ($(e.target).data("status") === "fail") {
      events.onFail(scope, $(e.target).data("mockId"));
    } else if ($(e.target).data("status") === "success") {
      events.onSuccess(scope, $(e.target).data("mockId"));
    } else if ($(e.target).data("realRequest")) {
      events.onRealRequest();
    }
    events.onDestroyMock();
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

export function appendMock(scope) {
  const events = new Events();
  defineMock();
  const jinMock = $("<jin-mock></jin-mock>");
  jinMock.attr("scope", scope).attr("id", events.getEventId()).appendTo("body");
  activateMock(events.getEventId());
  $(jinMock.get(0).shadowRoot)
    .find(".jm-modal-body")
    .empty()
    .append(createMockContent(scope, events));

  return {
    eventId: events.getEventId(),
    close: () => {
      events.onDestroyMock();
    },
  };
}
