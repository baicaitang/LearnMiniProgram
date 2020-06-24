// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  handleBack(){
    wx.navigateBack({
      delta:1
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
  },
  onUnload:function(){
    console.log('页面退出！')
    // 1.获取首页页面对象
    const pages = getCurrentPages()
    console.log(pages)
    const home = pages[pages.length - 2]
    // 2.调用页面对象的setData
    home.setData({
      title:'121223343756'
    })
  }
})