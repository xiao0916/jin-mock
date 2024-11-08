/**
 * 生成事件名称
 * @param {*} type - 事件类型
 * @param {*} eventId - 事件id
 * @returns {string} - 事件名称
 */
export default function generateEventName(type, eventId) {
  // console.log(`${type}${eventId ? `-${eventId}` : ""}`);
  return `${type}${eventId ? `-${eventId}` : ""}`;
}
