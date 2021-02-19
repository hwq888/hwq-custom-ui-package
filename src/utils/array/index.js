/***
 * js数组的运用
 * */
export default {
  // 数组去重
  removeRepeatItem (arr) {
    const newArr = []
    for (let i = 0; i < arr.length; i++) {
      if (newArr.indexOf(arr[i]) === -1) {
        newArr.push(arr[i])
      }
    }
    return newArr
  },
  /*
  * 说明：数组乱序
  * a：数组对象
  * */
  shuffle (a) {
    for (let i = a.length; i; i--) {
      const j = Math.floor(Math.random() * i);
      [a[i - 1], a[j]] = [a[j], a[i - 1]]
    }
    return a
  }
}
