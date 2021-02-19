/**
 * Storage操作
 * time:2021/2/19
 * 运用方式：
 * storage('session').set('test','123432'); //sessionStorage
 * storage().set('test','123432'); //localStorage
 * todo 可以补充新的
 * @params storage: local(localStorage) | session(sessionStorage)
 */
export default (storage = 'local') => {
  const Storage = storage === 'session' ? sessionStorage : localStorage
  return {
    /** **** string *****/
    get: (key) => {
      return Storage.getItem(key)
    },
    set: (key, value) => {
      // 类型判断
      value = typeof value === 'string' ? value : JSON.stringify(value)
      Storage.setItem(key, value)
    },

    /** **** hash *****/
    /**
     * hset('name', 'key', value)
     */
    hset: (hash, key, value) => {
      const data = JSON.parse(Storage.getItem(hash))
      data[key] = value
      Storage.setItem(hash, JSON.stringify(data))
    },
    /**
     * hget('name', 'key')
     *
     */
    hget: (hash, key) => {
      const jsonString = Storage.getItem(hash)
      if (jsonString) {
        const data = JSON.parse(jsonString)
        return data[key]
      }
      return null
    },

    /** **** list *****/
    // 向列表压入一条数据
    lpush: (key, value) => {
      const list = JSON.parse(Storage.getItem(key)) || []
      list.push(value)
      Storage.setItem(key, JSON.stringify(list))
    },
    // 返回存储列表的结果
    lget: (key) => {
      return JSON.parse(Storage.getItem(key)) || []
    },

    /**
     * 删除
     */
    del: (key) => {
      Storage.removeItem(key)
    }
  }
}
