// pages/classify/classify.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    category:[
      "少年漫画",
      "青年漫画",
      "少女漫画",
      "耽美漫画"
    ],
    getRes:false,
    skip:0,
    searchRes:[] 
  },
  selectCategory:function(event){
    let cat = event.currentTarget.dataset.cat;
    wx.navigateTo({
      url: `/pages/list/list?cat=${cat}`,
    })
  },

})