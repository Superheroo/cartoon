//app.js
App({
  onLaunch: function () {
    // 0.getSetting()返回的authSetting的信息可以判断用户是否允许权限

    // 1.先通过用户信息（authSetting）判断是否登录过

    //    1.1 若有登录，则通过getSetting（）和getUserInfo（）获取用户信息并赋给app.globalData

    //    1.2 若没有登录 执行 wx.login（） 

    //        1.2.1   若用户允许授权登录，则通过getUserInfo（）获取用户信息

    //        1.2.2   若用户不允许授权，则弹出模态框提示用户，并且打开设置界面引导用户开启openSetting()



  // 登录
  // wx.login()

  // 获取用户信息
  // wx.getSetting({
  //   success: (res)=>{
  //     console.log( res )
  //   }
  // })







    // 获取用户信息
    wx.getSetting({
      success: (res) => {
        console.log(res.authSetting)
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              console.log(res)
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        } else {
          // 登录
          wx.getUserInfo({
            success: (res) => {
              console.log(res);
              if (res.userInfo) {
                console.log("if")
                this.globalData.userInfo = res.userInfo
              } else {
                console.log("else")
                wx.login({
                  success: (res) => {
                    console.log("logined!!!!!!")
                    // 发送 res.code 到后台换取 openId, sessionKey, unionId
                  },
                  fail: (res) => {
                    console.log("登录失败")
                    
                  }


                })
              }
            },
            fail:(err)=>{
              console.log(err)
              wx.showModal({
                title: '授权失败！！！',
                content: '这是一个模态弹窗，是因为你不肯授权才出现的',
                showCancel: false,
                success: (res) => {
                  console.log(res)
                  if( res.confirm ){
                    // 打开设置界面
                    wx.openSetting({
                      success:(res)=>{
                        console.log(res)

                      }
                    })
                  }
                }
              })
            }
          })
        }
      }
    })





  },
  globalData: {
    userInfo: null
  },
  myData:"hahaha"
})