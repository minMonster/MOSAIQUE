/**
 * Created by PanJiaChen on 16/11/18.
 */

/**
 * @param {string} path
 * @returns {Boolean}
 */
export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
export function validUsername(str) {
  return str.length > 0
  // const valid_map = ['admin', 'editor']
  // return valid_map.indexOf(str.trim()) >= 0
}

/**
 * @param {number} money
 * @returns {Boolean}
 */
export function validPrice(money) {
  return money > 0
}

/**
 * @param {function} validator  - 原验证函数
 * @param error                 - 校检失败时传递给 callback 的值
 *                                若函数, 将接受 rule 和 val
 *                                返回值将被作为参数传递给callback
 *
 * @returns {function}          - 返回适用于async-validate中 validator 校检函数类型的函数
 */
export function getValidator(validator, error) {
  const isFunction = typeof error === 'function'

  function getError(rule, val) {
    const res = isFunction ? error(rule, val) : error
    return res instanceof Error ? res : new Error(res)
  }

  return (rule, val, callback) => {
    const result = validator(val)
    result === false
      ? callback(getError(rule, val))
      : callback()
  }
}
