/**
 * @param {String} prefix
 * @param {String} value
 * @param {Number} index
 * @returns {String} combination of input data
 * @description To generate key
 */
export function generateKey(prefix = '', value = '', index = 0) {
  return `${prefix}-${value}-${index}`.replace(/\s/g, '').toLowerCase();
}