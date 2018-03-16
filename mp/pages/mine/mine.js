// pages/mine/mine.js
// 引入app
let app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    user: {},
    collects:[]
  },
  getUserInfo:()=>{
    console.log( app.globalData.userInfo )
  },

  goToDetail: function (event) {
    var col = event.currentTarget.dataset.col;
    // 暂时存放在全局数据里
    app.globalData.currentComic = event.currentTarget.dataset.col;
    wx.navigateTo({
      url: `/pages/detail/detail?name=${col.name}`,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {


  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log("onShow",app.globalData.userInfo);
    var collects = wx.getStorageSync("collect") ? JSON.parse(wx.getStorageSync("collect")):[];
    this.setData({
      user: app.globalData.userInfo,
      collects
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})