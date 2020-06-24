//app.js
const TOKEN = 'token'
App({
  onLaunch:function(){
    // 先从storage中取出token
    const token = wx.getStorageSync(TOKEN)
    // 判断token 是否有值
    if(token && token.length!==0){
      // 验证token是否过期
      this.check_token(token)
    }else{
      this.login()
    }
  },  
  check_token(token){
    wx.request({
      // url:'http://152.136.185.210:8000/api/n3/auth',
      method:'post',
      header:{
        token
      },
      success:res=>{
        console.log(res)
        if(!res.data.errCode){
          //token有效
          this.globalData.token = token
        }else{
          this.login()
        }
      },
      fail:err=>{
        console.log(err)
      }
    })
  },
  login(){
    // 登录操作
    wx.login({
      success:res=>{
        // code只有五分钟有效时间
        console.log(res)
        // 1.获取code
        const code = res.code;
        // 2.把code发送到开发服务器
        wx.request({
          // url:'http://152.136.185.210:8000/api/n3/login',
          method:'post',
          data:{
            code,
          },
          success:res=>{
            // 1.取出token
            const token = res.data.token;
            // 2.把token保存在globalData中
            this.globalData.token = token;
            // 3.进行本地存储
            wx.setStorageSync(TOKEN, token)
          }
        })


      }
    })
  },
  globalData(){
    token:''
  }
})