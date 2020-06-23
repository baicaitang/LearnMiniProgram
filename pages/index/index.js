//index.js
import request from '../../service/network.js'

//获取应用实例
const app = getApp()

Page({
  data: {
    motto: '哈哈哈哈',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    counter:0
  },
  //事件处理函数
  handleItemClick(event){
    console.log(event)
  },
  handlecounter(event){
    // console.log(event)
    // 拿到组件对象
    const sel = this.selectComponent('#sel')
    console.log(sel)
    // 不推荐直接修改数据
    // sel.setData({
      // counter:sel.data.counter + 20
    // })
    sel.increateCounter(10)
  },

  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  getOriginRequest(){
    wx.request({
      url: '',
      data:'',
      success:res=>{

      },
      method:'GET'
    })
  },
  onLoad: function (options) {
    // 原生获取网络请求
    this.getOriginRequest()

    // 使用封装的request发送网络请求,降低网络请求的耦合度
    // Promise可以防止回调地狱
    request({
      url:'http://152.136.185.210:8000/api/n3/recommend'
    }).then(res=>{
      console.log(res)
    }).catch(err=>{
      console.log(err)
    })
    
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
