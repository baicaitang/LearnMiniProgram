//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
   title:''
  },
  handleToPage(){
   wx.navigateTo({
     url: '/pages/detail/detail?text=hello',
   })
  }
})
