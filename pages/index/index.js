//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: '哈哈哈哈',
    count:0
  },
  //事件处理函数
  touched:function(event){
    console.log(event)
    //this.setData({}) 界面会同时改变数据
    this.setData({
      count:this.data.count+1
    })
    console.log(this.data.count)
  }

})
