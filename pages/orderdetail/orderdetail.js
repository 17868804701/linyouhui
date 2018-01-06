var app = getApp();
Page({
  data:{},
  onLoad:function(options){
    var id = options.id;
    var that = this;
    wx.request({
      url: `${app.globalData.API_URL}/buyorder/create`,
      data: {
        order_id : id
      },
      method: 'GET', 
      success: function(res){
        console.log(res.data);
        let order = res.data;
        let num = order.goods.length;
        that.setData({
          order : res.data,
          num : num
        })
      },
      fail: function(res) {
        // fail
      },
      complete: function(res) {
        // complete
      }
    })
  },
  detail: function (e) {
    console.log(e.currentTarget.dataset.id,'跳转商品')
    var id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: "../list/detail/detail?id=" + id
    })
  },
})