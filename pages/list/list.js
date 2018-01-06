var app = getApp();
Page({
  data: {
    itemlist: []
  },
  onLoad: function () {
   
    var that = this;
    wx.request({
      url: `${app.globalData.API_URL}/shop_product_cats`,//`${app.globalData.API_URL}/goods`
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function (res) {
        that.setData({
          itemlist: res.data,
        })
      },

    })
  },
  onShow: function (e) {
    var shop_info = wx.getStorageSync('shopInfo');
    console.log(shop_info, '首页店铺信息')
    wx.setNavigationBarTitle({
      title: '分类-' + shop_info.shop_name
    });

  }
})