// pages/review/review.js
var app = getApp()
Page({
  data: {
    primarySize: 'default',
    reviewData: []
  },
  onPullDownRefresh: function () {
    this.onShow();
    wx.stopPullDownRefresh()
  },
  notPass: function (e) {
    console.log("notpass")
    var index = e.currentTarget.dataset.id;
    var listdata = this.data.reviewData
    wx.request({
      url: `${app.globalData.API_URL}/message/` + listdata[index].id,
      data: {
        id: listdata[index].id,
        groupid: listdata[index].last_toast,
        userid: listdata[index].from_uid,
        adminid: listdata[index].to_uid,
        types: listdata[index].msg_type,
        goods: listdata[index].content_id
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
    console.log("pass")
    wx.request({
      url: `${app.globalData.API_URL}/message`,
      data: {
        id: listdata[index].id,
        groupid: listdata[index].last_toast,
        userid: listdata[index].from_uid,
        adminid: listdata[index].to_uid,
        types: listdata[index].msg_type,
        goods: listdata[index].content_id
      },
      method: 'POST',
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

  },
  onLoad: function (options) {
    this.onShow();
  },
  onShow: function () {
    // 页面渲染完成
    var that = this
    var loginInfo = wx.getStorageSync('login')
    wx.request({
      url: `${app.globalData.API_URL}/message`,
      data: {
        id : loginInfo.mid,
        status :3
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

  //已读
  read: function (e) {
    var index = e.currentTarget.dataset.id;
    var listdata = this.data.reviewData;
    var that = this;
    console.log("pass")
    wx.request({
      url: `${app.globalData.API_URL}/message/` + index + '/edit',
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