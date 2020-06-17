//app.js
App({
  onLaunch: function () {//生命周期回调——监听小程序初始化,只执行一次
    wx.getUserInfo({
      success: res => {
        console.log(res)
      }
    })

  },
  onShow:function(options){
    console.log(options)
    switch(options.scene){
      // 小程序进入场景
      case 1001:
        console.log(options.scene)
        break;
      case 1005:
        break;
    }
  },
  onHide:function(){

  },
  onError:function(msg){

  },
  globalData: { // 全局数据，可以在任何地方共享
    userInfo: null
  }
})