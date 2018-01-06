var app = getApp();
Page({
  data:{
    userInfo:''
  },
  onLoad:function(options){
    wx.showModal({
      title: '提示',
      content: '信息涉及到金钱交易，请认真填写勿随意更改',
      showCancel:false,
    })
    // 生命周期函数--监听页面加载
    var userInfo=wx.getStorageSync('login');
    var that = this;
    wx.request({
      url: `${app.globalData.API_URL}/user`,
      method:'get',
      data :{
        id : userInfo.mid
      },
      success : function(e){
        console.log(e,'返回用户')
        that.setData({
          userInfo: e.data
        })
      }
    })
    
  },
  formSubmit:function(e){
    console.log(e,'formData')
    let datas = e.detail.value;
    wx.request({
      url: `${app.globalData.API_URL}/user`,
      method : 'post',
      data : datas,
      success:function(e){
        wx.showToast({
          title: '保存成功',
          icon:'success',
          duration:1000
        });
        wx.navigateBack({
          delta: 1,
        });
      }
    })
    wx.setStorageSync('phone', e.detail.value)
  },
  onReady:function(){
    // 生命周期函数--监听页面初次渲染完成
    
  },
  addphone:function(){

  },
  onShow:function(){
    // 生命周期函数--监听页面显示
    
  },
  bindblurphone: function (e) {
    var userphone = e.detail.value;
    let add = this.data.userInfo;
    wx.setStorageSync('userphones', userphone);
    let that = this;
    if (!(/^1(3|4|5|7|8)\d{9}$/.test(userphone))) {
      add.mobile = '';
      wx.showModal({
        title: '提示',
        content: '手机号码有误',
        showCancel: false,
        success: function (res) {
          that.setData({
            userInfo: add
          })
        }
      })
    } else {
      add.phone = userphone;
      that.setData({
        address: add
      });
    }
  },

  // onShareAppMessage: function() {
  //   // 用户点击右上角分享
  //   return {
  //     title: 'title', // 分享标题
  //     desc: 'desc', // 分享描述
  //     path: 'path' // 分享路径
  //   }
  // }
})