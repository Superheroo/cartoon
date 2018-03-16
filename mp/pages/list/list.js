// pages/list/list.js
let app = getApp();
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
    console.log(options.cat)
    
    if ( wx.getStorageSync(options.cat) ){
      let s = JSON.parse(wx.getStorageSync(options.cat));

      // 添加到
      this.setData({
        list: s.list,
        length: s.length
      })
    }else{
      // 获取分类数据
      let listData ;

      new Promise((resolve, reject) => {
        this.searchList(resolve, reject, "", options.cat);
      }).then((res)=>{

        console.log(res)
        // 添加到
        this.setData({
          list: res.bookList,
          length: res.bookList.length
        })

        // 用于缓存搜索结果
        let catlist = {
          list: res.bookList,
          length: res.bookList.length
        }

        // 缓存
        wx.setStorageSync(options.cat, JSON.stringify(catlist))
      });


    }

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

  // 跳转到详细页
  goToDetail: function (event) {
    var comicName = event.currentTarget.dataset.comicname;
    // 暂时存放在全局数据里
    // 小程序.全局数据.当前选中的漫画(自定义) = 事件.事件触发的元素.元素上的所有自定义属性.漫画数据（自定义）
    app.globalData.currentComic = event.currentTarget.dataset.comicdata;
    wx.navigateTo({
      url: `/pages/detail/detail?name=${comicName}`,
    })
  },
})