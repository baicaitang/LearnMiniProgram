// pages/home/home.js
Page({
  data: {

  },
  test(){
    console.log('aaaaaaa')
  },
  handleToast(){
    wx.showToast({
      title: 'hello!!!',
      duration:2000,
      icon:'loading',
      image:'/assets/images/detail/collect.png',
      mask:true,
      success:function(){
        console.log('success!!!')
      },
      fail:function(){
        console.log('fail!!!')
      },
      complete:function(){
        console.log('complete!!!')
      }
    })
  },
  handleModal(){
    wx.showModal({
      title:'tips',
      content:'hahahahha',
      success (res) {
        if (res.confirm) {
        console.log('用户点击确定')
        } else if (res.cancel) {
        console.log('用户点击取消')
        }
      },
      // showCancel:false
      cancelText:'abcdefg'
    })
  },
  handleLoding(){
    wx.showLoading({
      title:'loding???',
      mask:true
    })
    // 必须手动调用wx.hideLoading才能把wx.showLoading消失
    setTimeout(()=>{
      wx.hideLoading({
        complete: (res) => {},
      })
    },2000)
  },
  handleActionSheet(){
    wx.showActionSheet({
      itemList:['相册','拍照'],
      itemColor:'blue',
      success:res=>{
        console.log(res)
      }
    })
  },
  // onShareAppMessage(Object object)
  // 监听用户点击页面内转发按钮（button 组件 open-type="share"）或右上角菜单“转发”按钮的行为，并自定义转发内容。
  onShareAppMessage(options){
    return {
      title:'hello???',
      path:'/pages/home/home',
      imageUrl:'/assets/images/home/recommend_bg.jpg'
    }
  }
})