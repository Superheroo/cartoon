// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

    skip: 0,
    searchRes: [] 
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  searching:()=>{
    var that = this;
    // request
    new Promise((resolve, reject) => {
      this.searchList(resolve, reject, "", options.target.dataset.cat)
    }).then((res) => {
      let Res = that.data.searchRes;
      Res.push(...that.tranData(res.bookList, "lastUpdate"));

      that.setData({
        searchRes: Res,
        getRes: true
      })

    }).catch((err) => {
      console.warn(err);
    })

  },
  // 遍历请求回来的数据,并对其修改
  tranData: function (data, keyName) {
    let newData = data.map((item) => {
      item[keyName] = this.format(item[keyName]);
      return item;
    })
    console.log(newData)
    return newData;
  },

  // 格式化时间
  format: function (time) {
    let t = String(time);
    return `${t.substr(0, 4)}/${t.substr(4, 2)}/${t.substr(6, 2)}`;
  },
  // 搜索请求
  searchList: (resolve, reject, Name = "", Type = "", skip = "") => {
    wx.showLoading({
      title: '搜索中...',
    })
    wx.request({
      url: "http://japi.juhe.cn/comic/book",
      data: {
        name: Name,
        type: Type,
        skip: skip,
        key: "22eddef5e3a3bdfdd1583a1c5ce201fb"
      },
      success: function (res) {
        wx.hideLoading();
        return resolve(res.data.result)
      },
      fail: function (err) {
        return reject(err)
      }
    })
  }, 

})