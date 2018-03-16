// pages/detail/detail.js
// 引入全局app
let app = getApp();

let tool = require("../../utils/tool.js");

Page({
  /**
   * 页面的初始数据
   */
  data: {
    name:"",
    comicInfo:{},
    // 显示详情或者目录
    showOpt:"desc",
    isCollect:false,
    "chapterList": [
      {
        "name": "番外 第762话+",
        "id": 157935
      },
      {
        "name": "第01卷",
        "id": 157937
      },
      {
        "name": "第02卷",
        "id": 157939
      },
      {
        "name": "第03卷",
        "id": 157941
      },
      {
        "name": "第04卷",
        "id": 157943
      },
      {
        "name": "第05卷",
        "id": 157945
      },
      {
        "name": "第06卷",
        "id": 157947
      },
      {
        "name": "第07卷",
        "id": 157949
      },
      {
        "name": "第08卷",
        "id": 157951
      },
      {
        "name": "第09卷",
        "id": 157953
      },
      {
        "name": "第10卷",
        "id": 157954
      },
      {
        "name": "第11卷",
        "id": 157956
      },
      {
        "name": "第12卷",
        "id": 157958
      },
      {
        "name": "第13卷",
        "id": 157960
      },
      {
        "name": "第14卷",
        "id": 157962
      },
      {
        "name": "第15卷",
        "id": 157964
      },
      {
        "name": "第16卷",
        "id": 157966
      },
      {
        "name": "第17卷",
        "id": 157968
      },
      {
        "name": "第18卷",
        "id": 157970
      },
      {
        "name": "第19卷",
        "id": 157972
      }
    ]
  },
  // 选项卡： 切换介绍和目录
  toggleDesc:function(event){
    console.log(event.currentTarget)
    this.setData({
      showOpt : event.currentTarget.dataset.opt
    });
  },
  // 跳转详细页面
  goToChapter: function (event) {
    console.log(event.currentTarget)
    var charterid = event.currentTarget.dataset.chapterid
    wx.navigateTo({
      url: `../chapter/chapter?chap=${charterid}`,
    });
  }, 
  // 收藏
  toogleCollect:function(){
    this.setData({
      isCollect: !this.data.isCollect
    })
    if( this.data.isCollect ){
      // 漫画基本信息
      var newC = this.data.comicInfo;
      var oldData = wx.getStorageSync("collect");
      var arr ;
      // 
      if( !oldData){
        arr = [];
      }else{
        arr = JSON.parse(oldData);
      }
      arr.unshift(newC);
      wx.setStorageSync("collect", JSON.stringify(arr) )
    }else{
      tool.storageFun.delete("collect", "name", this.data.name)
    }
     
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)

    this.setData({
      name: options.name,
      comicInfo: app.globalData.currentComic,
      // 匹配缓存的成员
      isCollect: tool.storageFun.check("collect", "name", options.name)
    });

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var that = this;
  },

})