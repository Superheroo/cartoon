// pages/chapter/chapter.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

    id: 157974,
    comicName: "航海王",
    chapterId: 157974,
    imageList: [
      {
        "imageUrl": "http://imgs.juheapi.com/comic_xin/ur26o831/157974/0-MTU3OTc0MA==.jpg",
        "id": 1
      },
      {
        "imageUrl": "http://imgs.juheapi.com/comic_xin/ur26o831/157974/1-MTU3OTc0MQ==.jpg",
        "id": 2
      },
      {
        "imageUrl": "http://imgs.juheapi.com/comic_xin/ur26o831/157974/2-MTU3OTc0Mg==.jpg",
        "id": 3
      },
      {
        "imageUrl": "http://imgs.juheapi.com/comic_xin/ur26o831/157974/3-MTU3OTc0Mw==.jpg",
        "id": 4
      },
      {
        "imageUrl": "http://imgs.juheapi.com/comic_xin/ur26o831/157974/4-MTU3OTc0NA==.jpg",
        "id": 5
      },
      {
        "imageUrl": "http://imgs.juheapi.com/comic_xin/ur26o831/157974/5-MTU3OTc0NQ==.jpg",
        "id": 6
      },
      {
        "imageUrl": "http://imgs.juheapi.com/comic_xin/ur26o831/157974/6-MTU3OTc0Ng==.jpg",
        "id": 7
      },
      {
        "imageUrl": "http://imgs.juheapi.com/comic_xin/ur26o831/157974/7-MTU3OTc0Nw==.jpg",
        "id": 8
      },
      {
        "imageUrl": "http://imgs.juheapi.com/comic_xin/ur26o831/157974/8-MTU3OTc0OA==.jpg",
        "id": 9
      },
      {
        "imageUrl": "http://imgs.juheapi.com/comic_xin/ur26o831/157974/9-MTU3OTc0OQ==.jpg",
        "id": 10
      },
      {
        "imageUrl": "http://imgs.juheapi.com/comic_xin/ur26o831/157974/10-MTU3OTc0MTA=.jpg",
        "id": 11
      },
      {
        "imageUrl": "http://imgs.juheapi.com/comic_xin/ur26o831/157974/11-MTU3OTc0MTE=.jpg",
        "id": 12
      },
      {
        "imageUrl": "http://imgs.juheapi.com/comic_xin/ur26o831/157974/12-MTU3OTc0MTI=.jpg",
        "id": 13
      },
      {
        "imageUrl": "http://imgs.juheapi.com/comic_xin/ur26o831/157974/13-MTU3OTc0MTM=.jpg",
        "id": 14
      },
      {
        "imageUrl": "http://imgs.juheapi.com/comic_xin/ur26o831/157974/14-MTU3OTc0MTQ=.jpg",
        "id": 15
      },
      {
        "imageUrl": "http://imgs.juheapi.com/comic_xin/ur26o831/157974/15-MTU3OTc0MTU=.jpg",
        "id": 16
      },
      {
        "imageUrl": "http://imgs.juheapi.com/comic_xin/ur26o831/157974/16-MTU3OTc0MTY=.jpg",
        "id": 17
      },
      {
        "imageUrl": "http://imgs.juheapi.com/comic_xin/ur26o831/157974/17-MTU3OTc0MTc=.jpg",
        "id": 18
      },
      {
        "imageUrl": "http://imgs.juheapi.com/comic_xin/ur26o831/157974/18-MTU3OTc0MTg=.jpg",
        "id": 19
      },
      {
        "imageUrl": "http://imgs.juheapi.com/comic_xin/ur26o831/157974/19-MTU3OTc0MTk=.jpg",
        "id": 20
      },
      {
        "imageUrl": "http://imgs.juheapi.com/comic_xin/ur26o831/157974/20-MTU3OTc0MjA=.jpg",
        "id": 21
      },
      {
        "imageUrl": "http://imgs.juheapi.com/comic_xin/ur26o831/157974/21-MTU3OTc0MjE=.jpg",
        "id": 22
      },
      {
        "imageUrl": "http://imgs.juheapi.com/comic_xin/ur26o831/157974/22-MTU3OTc0MjI=.jpg",
        "id": 23
      },
      {
        "imageUrl": "http://imgs.juheapi.com/comic_xin/ur26o831/157974/23-MTU3OTc0MjM=.jpg",
        "id": 24
      },
      {
        "imageUrl": "http://imgs.juheapi.com/comic_xin/ur26o831/157974/24-MTU3OTc0MjQ=.jpg",
        "id": 25
      },
      {
        "imageUrl": "http://imgs.juheapi.com/comic_xin/ur26o831/157974/25-MTU3OTc0MjU=.jpg",
        "id": 26
      },
      {
        "imageUrl": "http://imgs.juheapi.com/comic_xin/ur26o831/157974/26-MTU3OTc0MjY=.jpg",
        "id": 27
      },
      {
        "imageUrl": "http://imgs.juheapi.com/comic_xin/ur26o831/157974/27-MTU3OTc0Mjc=.jpg",
        "id": 28
      },
      {
        "imageUrl": "http://imgs.juheapi.com/comic_xin/ur26o831/157974/28-MTU3OTc0Mjg=.jpg",
        "id": 29
      },
      {
        "imageUrl": "http://imgs.juheapi.com/comic_xin/ur26o831/157974/29-MTU3OTc0Mjk=.jpg",
        "id": 30
      },
      {
        "imageUrl": "http://imgs.juheapi.com/comic_xin/ur26o831/157974/30-MTU3OTc0MzA=.jpg",
        "id": 31
      },
      {
        "imageUrl": "http://imgs.juheapi.com/comic_xin/ur26o831/157974/31-MTU3OTc0MzE=.jpg",
        "id": 32
      },
      {
        "imageUrl": "http://imgs.juheapi.com/comic_xin/ur26o831/157974/32-MTU3OTc0MzI=.jpg",
        "id": 33
      },
      {
        "imageUrl": "http://imgs.juheapi.com/comic_xin/ur26o831/157974/33-MTU3OTc0MzM=.jpg",
        "id": 34
      },
      {
        "imageUrl": "http://imgs.juheapi.com/comic_xin/ur26o831/157974/34-MTU3OTc0MzQ=.jpg",
        "id": 35
      },
      {
        "imageUrl": "http://imgs.juheapi.com/comic_xin/ur26o831/157974/35-MTU3OTc0MzU=.jpg",
        "id": 36
      },
      {
        "imageUrl": "http://imgs.juheapi.com/comic_xin/ur26o831/157974/36-MTU3OTc0MzY=.jpg",
        "id": 37
      },
      {
        "imageUrl": "http://imgs.juheapi.com/comic_xin/ur26o831/157974/37-MTU3OTc0Mzc=.jpg",
        "id": 38
      },
      {
        "imageUrl": "http://imgs.juheapi.com/comic_xin/ur26o831/157974/38-MTU3OTc0Mzg=.jpg",
        "id": 39
      },
      {
        "imageUrl": "http://imgs.juheapi.com/comic_xin/ur26o831/157974/39-MTU3OTc0Mzk=.jpg",
        "id": 40
      },
      {
        "imageUrl": "http://imgs.juheapi.com/comic_xin/ur26o831/157974/40-MTU3OTc0NDA=.jpg",
        "id": 41
      },
      {
        "imageUrl": "http://imgs.juheapi.com/comic_xin/ur26o831/157974/41-MTU3OTc0NDE=.jpg",
        "id": 42
      },
      {
        "imageUrl": "http://imgs.juheapi.com/comic_xin/ur26o831/157974/42-MTU3OTc0NDI=.jpg",
        "id": 43
      },
      {
        "imageUrl": "http://imgs.juheapi.com/comic_xin/ur26o831/157974/43-MTU3OTc0NDM=.jpg",
        "id": 44
      },
      {
        "imageUrl": "http://imgs.juheapi.com/comic_xin/ur26o831/157974/44-MTU3OTc0NDQ=.jpg",
        "id": 45
      },
      {
        "imageUrl": "http://imgs.juheapi.com/comic_xin/ur26o831/157974/45-MTU3OTc0NDU=.jpg",
        "id": 46
      },
      {
        "imageUrl": "http://imgs.juheapi.com/comic_xin/ur26o831/157974/46-MTU3OTc0NDY=.jpg",
        "id": 47
      },
      {
        "imageUrl": "http://imgs.juheapi.com/comic_xin/ur26o831/157974/47-MTU3OTc0NDc=.jpg",
        "id": 48
      },
      {
        "imageUrl": "http://imgs.juheapi.com/comic_xin/ur26o831/157974/48-MTU3OTc0NDg=.jpg",
        "id": 49
      },
      {
        "imageUrl": "http://imgs.juheapi.com/comic_xin/ur26o831/157974/49-MTU3OTc0NDk=.jpg",
        "id": 50
      },
      {
        "imageUrl": "http://imgs.juheapi.com/comic_xin/ur26o831/157974/50-MTU3OTc0NTA=.jpg",
        "id": 51
      },
      {
        "imageUrl": "http://imgs.juheapi.com/comic_xin/ur26o831/157974/51-MTU3OTc0NTE=.jpg",
        "id": 52
      },
      {
        "imageUrl": "http://imgs.juheapi.com/comic_xin/ur26o831/157974/52-MTU3OTc0NTI=.jpg",
        "id": 53
      },
      {
        "imageUrl": "http://imgs.juheapi.com/comic_xin/ur26o831/157974/53-MTU3OTc0NTM=.jpg",
        "id": 54
      },
      {
        "imageUrl": "http://imgs.juheapi.com/comic_xin/ur26o831/157974/54-MTU3OTc0NTQ=.jpg",
        "id": 55
      },
      {
        "imageUrl": "http://imgs.juheapi.com/comic_xin/ur26o831/157974/55-MTU3OTc0NTU=.jpg",
        "id": 56
      },
      {
        "imageUrl": "http://imgs.juheapi.com/comic_xin/ur26o831/157974/56-MTU3OTc0NTY=.jpg",
        "id": 57
      },
      {
        "imageUrl": "http://imgs.juheapi.com/comic_xin/ur26o831/157974/57-MTU3OTc0NTc=.jpg",
        "id": 58
      },
      {
        "imageUrl": "http://imgs.juheapi.com/comic_xin/ur26o831/157974/58-MTU3OTc0NTg=.jpg",
        "id": 59
      },
      {
        "imageUrl": "http://imgs.juheapi.com/comic_xin/ur26o831/157974/59-MTU3OTc0NTk=.jpg",
        "id": 60
      },
      {
        "imageUrl": "http://imgs.juheapi.com/comic_xin/ur26o831/157974/60-MTU3OTc0NjA=.jpg",
        "id": 61
      },
      {
        "imageUrl": "http://imgs.juheapi.com/comic_xin/ur26o831/157974/61-MTU3OTc0NjE=.jpg",
        "id": 62
      },
      {
        "imageUrl": "http://imgs.juheapi.com/comic_xin/ur26o831/157974/62-MTU3OTc0NjI=.jpg",
        "id": 63
      },
      {
        "imageUrl": "http://imgs.juheapi.com/comic_xin/ur26o831/157974/63-MTU3OTc0NjM=.jpg",
        "id": 64
      },
      {
        "imageUrl": "http://imgs.juheapi.com/comic_xin/ur26o831/157974/64-MTU3OTc0NjQ=.jpg",
        "id": 65
      },
      {
        "imageUrl": "http://imgs.juheapi.com/comic_xin/ur26o831/157974/65-MTU3OTc0NjU=.jpg",
        "id": 66
      },
      {
        "imageUrl": "http://imgs.juheapi.com/comic_xin/ur26o831/157974/66-MTU3OTc0NjY=.jpg",
        "id": 67
      },
      {
        "imageUrl": "http://imgs.juheapi.com/comic_xin/ur26o831/157974/67-MTU3OTc0Njc=.jpg",
        "id": 68
      },
      {
        "imageUrl": "http://imgs.juheapi.com/comic_xin/ur26o831/157974/68-MTU3OTc0Njg=.jpg",
        "id": 69
      },
      {
        "imageUrl": "http://imgs.juheapi.com/comic_xin/ur26o831/157974/69-MTU3OTc0Njk=.jpg",
        "id": 70
      },
      {
        "imageUrl": "http://imgs.juheapi.com/comic_xin/ur26o831/157974/70-MTU3OTc0NzA=.jpg",
        "id": 71
      },
      {
        "imageUrl": "http://imgs.juheapi.com/comic_xin/ur26o831/157974/71-MTU3OTc0NzE=.jpg",
        "id": 72
      },
      {
        "imageUrl": "http://imgs.juheapi.com/comic_xin/ur26o831/157974/72-MTU3OTc0NzI=.jpg",
        "id": 73
      },
      {
        "imageUrl": "http://imgs.juheapi.com/comic_xin/ur26o831/157974/73-MTU3OTc0NzM=.jpg",
        "id": 74
      },
      {
        "imageUrl": "http://imgs.juheapi.com/comic_xin/ur26o831/157974/74-MTU3OTc0NzQ=.jpg",
        "id": 75
      },
      {
        "imageUrl": "http://imgs.juheapi.com/comic_xin/ur26o831/157974/75-MTU3OTc0NzU=.jpg",
        "id": 76
      },
      {
        "imageUrl": "http://imgs.juheapi.com/comic_xin/ur26o831/157974/76-MTU3OTc0NzY=.jpg",
        "id": 77
      },
      {
        "imageUrl": "http://imgs.juheapi.com/comic_xin/ur26o831/157974/77-MTU3OTc0Nzc=.jpg",
        "id": 78
      },
      {
        "imageUrl": "http://imgs.juheapi.com/comic_xin/ur26o831/157974/78-MTU3OTc0Nzg=.jpg",
        "id": 79
      },
      {
        "imageUrl": "http://imgs.juheapi.com/comic_xin/ur26o831/157974/79-MTU3OTc0Nzk=.jpg",
        "id": 80
      },
      {
        "imageUrl": "http://imgs.juheapi.com/comic_xin/ur26o831/157974/80-MTU3OTc0ODA=.jpg",
        "id": 81
      },
      {
        "imageUrl": "http://imgs.juheapi.com/comic_xin/ur26o831/157974/81-MTU3OTc0ODE=.jpg",
        "id": 82
      },
      {
        "imageUrl": "http://imgs.juheapi.com/comic_xin/ur26o831/157974/82-MTU3OTc0ODI=.jpg",
        "id": 83
      },
      {
        "imageUrl": "http://imgs.juheapi.com/comic_xin/ur26o831/157974/83-MTU3OTc0ODM=.jpg",
        "id": 84
      },
      {
        "imageUrl": "http://imgs.juheapi.com/comic_xin/ur26o831/157974/84-MTU3OTc0ODQ=.jpg",
        "id": 85
      },
      {
        "imageUrl": "http://imgs.juheapi.com/comic_xin/ur26o831/157974/85-MTU3OTc0ODU=.jpg",
        "id": 86
      },
      {
        "imageUrl": "http://imgs.juheapi.com/comic_xin/ur26o831/157974/86-MTU3OTc0ODY=.jpg",
        "id": 87
      },
      {
        "imageUrl": "http://imgs.juheapi.com/comic_xin/ur26o831/157974/87-MTU3OTc0ODc=.jpg",
        "id": 88
      },
      {
        "imageUrl": "http://imgs.juheapi.com/comic_xin/ur26o831/157974/88-MTU3OTc0ODg=.jpg",
        "id": 89
      },
      {
        "imageUrl": "http://imgs.juheapi.com/comic_xin/ur26o831/157974/89-MTU3OTc0ODk=.jpg",
        "id": 90
      },
      {
        "imageUrl": "http://imgs.juheapi.com/comic_xin/ur26o831/157974/90-MTU3OTc0OTA=.jpg",
        "id": 91
      },
      {
        "imageUrl": "http://imgs.juheapi.com/comic_xin/ur26o831/157974/91-MTU3OTc0OTE=.jpg",
        "id": 92
      },
      {
        "imageUrl": "http://imgs.juheapi.com/comic_xin/ur26o831/157974/92-MTU3OTc0OTI=.jpg",
        "id": 93
      },
      {
        "imageUrl": "http://imgs.juheapi.com/comic_xin/ur26o831/157974/93-MTU3OTc0OTM=.jpg",
        "id": 94
      },
      {
        "imageUrl": "http://imgs.juheapi.com/comic_xin/ur26o831/157974/94-MTU3OTc0OTQ=.jpg",
        "id": 95
      },
      {
        "imageUrl": "http://imgs.juheapi.com/comic_xin/ur26o831/157974/95-MTU3OTc0OTU=.jpg",
        "id": 96
      },
      {
        "imageUrl": "http://imgs.juheapi.com/comic_xin/ur26o831/157974/96-MTU3OTc0OTY=.jpg",
        "id": 97
      },
      {
        "imageUrl": "http://imgs.juheapi.com/comic_xin/ur26o831/157974/97-MTU3OTc0OTc=.jpg",
        "id": 98
      },
      {
        "imageUrl": "http://imgs.juheapi.com/comic_xin/ur26o831/157974/98-MTU3OTc0OTg=.jpg",
        "id": 99
      },
      {
        "imageUrl": "http://imgs.juheapi.com/comic_xin/ur26o831/157974/99-MTU3OTc0OTk=.jpg",
        "id": 100
      },
      {
        "imageUrl": "http://imgs.juheapi.com/comic_xin/ur26o831/157974/100-MTU3OTc0MTAw.jpg",
        "id": 101
      },
      {
        "imageUrl": "http://imgs.juheapi.com/comic_xin/ur26o831/157974/101-MTU3OTc0MTAx.jpg",
        "id": 102
      },
      {
        "imageUrl": "http://imgs.juheapi.com/comic_xin/ur26o831/157974/102-MTU3OTc0MTAy.jpg",
        "id": 103
      },
      {
        "imageUrl": "http://imgs.juheapi.com/comic_xin/ur26o831/157974/103-MTU3OTc0MTAz.jpg",
        "id": 104
      },
      {
        "imageUrl": "http://imgs.juheapi.com/comic_xin/ur26o831/157974/104-MTU3OTc0MTA0.jpg",
        "id": 105
      },
      {
        "imageUrl": "http://imgs.juheapi.com/comic_xin/ur26o831/157974/105-MTU3OTc0MTA1.jpg",
        "id": 106
      },
      {
        "imageUrl": "http://imgs.juheapi.com/comic_xin/ur26o831/157974/106-MTU3OTc0MTA2.jpg",
        "id": 107
      },
      {
        "imageUrl": "http://imgs.juheapi.com/comic_xin/ur26o831/157974/107-MTU3OTc0MTA3.jpg",
        "id": 108
      },
      {
        "imageUrl": "http://imgs.juheapi.com/comic_xin/ur26o831/157974/108-MTU3OTc0MTA4.jpg",
        "id": 109
      },
      {
        "imageUrl": "http://imgs.juheapi.com/comic_xin/ur26o831/157974/109-MTU3OTc0MTA5.jpg",
        "id": 110
      }
    ]
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