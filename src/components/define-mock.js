import $ from "jquery";
import Emitter, { EVENT_ENUM } from "../utils/emitter";
import generateEventName from "../utils/generate-event-name";
import { onDestroyMock } from "../events/core";

class Mock extends HTMLElement {
  static observedAttributes = ["scope", "id", "active"];
  #eventName = "";

  constructor() {
    super();
  }
  connectedCallback() {
    this.render();
    this.#eventName = generateEventName(EVENT_ENUM.DESTROY_MOCK, this.id);
    Emitter.on(this.#eventName, () => {
      Emitter.off(this.#eventName);
      this.remove();
    });
  }

  disconnectedCallback() {
    this.innerHTML = "";
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "active") {
      $(this.shadowRoot)
        .find(".jm-container")
        .css({
          display: newValue === "true" ? "block" : "none",
        });
    }
  }

  set scope(value) {
    this._scope = value;
  }

  get scope() {
    return this._scope;
  }

  renderDom() {
    const container = $('<div class="jm-container"></div>');
    $(container)
      .append(
        $(`<div class="jm-mask"></div>
        <div class="jm-modal">
          <div class="jm-modal-header">
            <h3 class="jm-modal-title">Mock 请求</h3>
            <button class="jm-modal-close">
              <span class="jm-modal-close-x">×</span>
            </button>
          </div>
          <div class="jm-modal-body">
          </div>
        </div>`)
      )
      .find(".jm-modal-close")
      .on("click", () => {
        onDestroyMock(this.id, this.scope);
        Emitter.off(this.#eventName);
      });
    return container;
  }

  renderStyle() {
    return $(`<style>
      .jm-container {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 9999;
      }
      .jm-mask {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
      }
      .jm-modal {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 500px;
        background-color: #fff;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
      }
      .jm-modal-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px;
        background-color: #f5f5f5;
      }
      .jm-modal-title {
        margin: 0;
        font-size: 18px;
      }
      .jm-modal-close {
        border: none;
        background-color: transparent;
        cursor: pointer;
      }
      .jm-modal-close-x {
        font-size: 24px;
        font-weight: bold;
      }
      .jm-modal-body {
        padding: 10px;
      }
    </style>`);
  }

  render() {
    $(this.attachShadow({ mode: "open" }))
      .append(this.renderStyle())
      .append(this.renderDom());
  }
}

export default function defineMock() {
  if (customElements.get("jin-mock")) {
    return;
  }
  customElements.define("jin-mock", Mock);
}
