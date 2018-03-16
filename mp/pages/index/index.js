//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    hot:[],
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {

    wx.showShareMenu({
    })
    // 页面加载时请求热门数据
    this.getHotJson();

  },
  onShow:function(){
    console.log(app)
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  // 获取热门漫画数据
  getHotJson: function(){
    wx.showLoading({
      title: '充钱加载更快！！',
      mask:true
    })
    // 请求
    wx.request({
      url: "http://swebttsd.gitee.io/mp-comics/source/data/hot.json",
      method:"get",
      dataType:"json",
      header: {
        'content-type': 'application/json' // 默认值
      },
      success:  (res)=> {
        console.log(res.data);
        
        this.setData({
          hot :  res.data.hot, 
        })

        wx.hideLoading()
      }
    })



  },
  // 跳转到详细页
  goToDetail:function(event){
    var comicName = event.currentTarget.dataset.comicname;
    // 暂时存放在全局数据里
    // 小程序.全局数据.当前选中的漫画(自定义) = 事件.事件触发的元素.元素上的所有自定义属性.漫画数据（自定义）
    app.globalData.currentComic = event.currentTarget.dataset.comicdata;
    wx.navigateTo({
      url:`/pages/detail/detail?name=${comicName}`,
    })
  },


})
