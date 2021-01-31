// 全局帮助方法
export default {
  /**
   *
   * @param {Array} array [遍历的数组]
   * @param {Function} callback [回调]
   *
   */
  $each (array, callback) {
    if (!array) return array

    let i = array.length
    while(i > 0)  {
      i--
      callback(array[i])
    }
  },
}


