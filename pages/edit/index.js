var app = getApp();
Page({
  data: {
    userInfo: ''
  },
  onLoad: function (options) {
    // 生命周期函数--监听页面加载
    var id = options.id;
    var that = this;
    wx.request({
      url: `${app.globalData.API_URL}/user`,
      method: 'get',
      data: {
        id: id
      },
      success: function (e) {
        console.log(e, '返回用户')
        that.setData({
          userInfo: e.data
        })
      }
    })

  },
  formSubmit: function (e) {
    console.log(e, 'formData')
    let datas = e.detail.value;
    wx.request({
      url: `${app.globalData.API_URL}/user`,
      method: 'post',
      data: datas,
      success: function (e) {
        wx.showToast({
          title: '保存成功',
          icon: 'success',
          duration: 1000
        });
        wx.navigateBack({
          delta: 1,
        });
      }
    })
    wx.setStorageSync('phone', e.detail.value)
  },
  onReady: function () {
    // 生命周期函数--监听页面初次渲染完成

  },
  addphone: function () {

  },
  onShow: function () {
    // 生命周期函数--监听页面显示

  },

  onShareAppMessage: function () {
    // 用户点击右上角分享
    return {
      title: 'title', // 分享标题
      desc: 'desc', // 分享描述
      path: 'path' // 分享路径
    }
  }
})