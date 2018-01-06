// pages/collect/collect.js
var app = getApp();
Page({
  data: {
    listgoods: [],
    owner: 0
  },
  onLoad: function (options) {
    this.onShow();
  },
  onPullDownRefresh: function () {
    wx.stopPullDownRefresh()
  },
  upgood: function (e) {
    var that = this
    var login = wx.getStorageSync('login')
    wx.request({
      url: `${app.globalData.API_URL}/allgoods`,
      data: {
        user_id: login.mid,
        id: e.currentTarget.dataset.id,
        status: String(e.currentTarget.dataset.status)
      },
      method: 'POST',
      success: function (res) {
        // success
        console.log(res);
        that.onLoad()
        that.onReady()
      },
    })
  },
  delgood: function (e) {
    var that = this
    console.log(e.currentTarget.dataset)
    wx.request({
      url: `${app.globalData.API_URL}/allgoods/` + e.currentTarget.dataset.id,
      data: {},
      method: 'DELETE',
      success: function (res) {
        // success
        console.log(res)
        that.onLoad()
      },
    })
  },
  onShow: function () {
    // 页面显示
    var that = this;
    var login = wx.getStorageSync('login');
    var shop = wx.getStorageSync('shopInfo');
    wx.request({
      url: `${app.globalData.API_URL}/allgoods`,
      data: {
        uid: login.mid,
        shop: shop.id
      },
      method: 'GET',
      success: function (res) {
        console.log(res.data, '商品')
        // success
        that.setData({
          listgoods: res.data,
        })
      },

    })
  },
  //查看详情
  lookdetail: function (e) {
    console.log(e)
    var lookid = e.currentTarget.dataset;
    console.log(e.currentTarget.dataset);
    wx.navigateTo({
      url: "../detail/index?id=" + lookid.id
    })
  },
})