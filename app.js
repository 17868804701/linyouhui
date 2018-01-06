//app.js
var app = getApp()

App({
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    // var logs = wx.getStorageSync('logs') || []
    // wx.setStorageSync('logs', logs)
    wx.removeStorageSync('shoppingCartInfo');
  },
  getUserInfo:function(cb){
    var that = this
    if(this.globalData.userInfo){ 
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },
  onError: function (msg) {
    console.log(msg,'错误')
  },
  globalData:{
    // API_URL:'https://www.linlibang123.com',
    API_URL:'http://127.0.0.1/index.php',
    API:'http://127.0.0.1/index.php',
    // API:'https://www.linlibang123.com',
    mp_id : '026d56fe7b4db2e57c8209cf01aacc78',
    userInfo:null
  }
})