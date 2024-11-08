export default class EventStack {
  #stack = new Map();

  constructor() {
    // 单例模式
    if (EventStack.instance) {
      return EventStack.instance;
    }
    EventStack.instance = this;
  }

  log() {
    console.log(this.#stack);
  }

  push(scope, eventId) {
    const list = this.#stack.get(scope) || [];
    list.push(eventId);
    this.#stack.set(scope, list);
  }

  pop(scope) {
    const list = this.#stack.get(scope) || [];
    if (!list.length) {
      return;
    }
    const eventId = list.pop();
    if (!list.length) {
      this.#stack.delete(scope);
    } else {
      this.#stack.set(scope, list);
    }
    return eventId;
  }

  getLatest(scope) {
    const list = this.#stack.get(scope) || [];
    return list[list.length - 1];
  }
}
