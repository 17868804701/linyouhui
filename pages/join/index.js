// pages/review/review.js
var app = getApp()
Page({
  data: {
    primarySize: 'default',
    reviewData: []
  },
  onPullDownRefresh: function () {
    wx.stopPullDownRefresh()
  },
  onShow: function () {
    // 页面渲染完成
    var that = this
    var loginInfo = wx.getStorageSync('login')
    wx.request({
      url: `${app.globalData.API_URL}/message?id=` + loginInfo.mid,
      data: {
        status: 2
      },
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function (res) {
        // success
        console.log(res)
        that.setData({
          reviewData: res.data
        })

      },
    })
  },

  notPass: function (e) {
    console.log("notpass")
    var index = e.currentTarget.dataset.id;
    var listdata = this.data.reviewData
    wx.request({
      url: `${app.globalData.API_URL}/check/` + listdata[index].id,
      data: {
        id: listdata[index].id,
        shop_id: listdata[index].shop_id,
        user_id: listdata[index].owner_id,
        owner_id: listdata[index].user_id,
        shop_name: listdata[index].shop_name
      },
      method: 'DELETE',
      success: function (res) {
        console.log(res)
      },

    })
  },
  pass: function (e) {
    console.log(e)
    var that = this
    var index = e.currentTarget.dataset.id;
    var listdata = this.data.reviewData
    console.log(listdata,"pass")
    wx.request({
      url: `${app.globalData.API_URL}/check/` + listdata[index].id,
      data: {
        id: listdata[index].id,
        shop_id: listdata[index].shop_id,
        user_id: listdata[index].owner_id,
        owner_id: listdata[index].user_id,
        shop_name: listdata[index].shop_name
      },
      method: 'put',
      success: function (res) {
                // success
        if(res.data == 1){
          wx.showToast({
            title: '成功',
            icon: 'success',
            duration: 1000,
            mask : true
          });
        }
        that.onShow();         
      },

    })

  },
  onLoad: function (options) {
    this.onShow();
  },
  onShow: function () {
    // 页面渲染完成
    var that = this
    var loginInfo = wx.getStorageSync('login')
    wx.request({
      url: `${app.globalData.API_URL}/message?id=` + loginInfo.mid,
      data: {
        status:2
      },
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function (res) {
        // success
        console.log(res)
        that.setData({
          reviewData: res.data
        })

      },
    })
  },
  //详情页跳转
  lookdetail: function (e) {
    var lookid = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: "../detail/index?id=" + lookid
    })
  },
  lookuser: function (e) {
    var lookid = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: "../edit/index?id=" + lookid
    })
  },

  //已读
  read: function (e) {
    var index = e.currentTarget.dataset.id;
    var listdata = this.data.reviewData;
    var that = this;
    console.log("pass")
    wx.request({
      url: `${app.globalData.API_URL}/message/` + listdata[index].id + '/edit',
      data: {},
      method: 'GET',
      success: function (res) {
        that.onShow();
        // success
        wx.showToast({
          title: '成功',
          icon: 'success',
          duration: 1000
        });



      },

    })
  }
})