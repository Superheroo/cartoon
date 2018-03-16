let storageFun = {
  // 缓存内容为数组对象时，检查是否已经有该成员（例如成员name），
  check: (keyName, matchKey, matchValue) => {
    var value = wx.getStorageSync(keyName);
    // 先判断是否该缓存是否存在
    if (value) {
      value = JSON.parse(value);
      for(let v of value){
        if (v[matchKey] == matchValue){
          return true;
        }
      }
    }
    return false;
  },
  // 缓存内容为数组对象时，删除该成员的
  delete: (keyName, matchKey, matchValue)=>{
    var value = wx.getStorageSync(keyName);
    // 先判断是否该缓存是否存在
    if (value) {
      value = JSON.parse(value);
      for (let v in value) {
        if (value[v][matchKey] == matchValue) {
          value.splice(v,1);
        }
      }
    }
    wx.setStorageSync(keyName, JSON.stringify(value));
  }
}

module.exports = {
  storageFun
}