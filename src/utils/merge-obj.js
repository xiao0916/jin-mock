/**
 * 合并对象
 * @returns {*} - 合并后的对象
 */
export default function mergeObj() {
  return Object.assign({}, ...arguments);
}
