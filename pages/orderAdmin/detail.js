var app = getApp();
Page({
  data:{},
  onLoad:function(options){
    var id = options.id;
    var that = this;
    wx.request({
      url: `${app.globalData.API_URL}/buyorder`,
      data: {
        order_id : id
      },
      method: 'GET', 
      success: function(res){
        console.log(res.data,'单个商品');
        let order = res.data;
        let sum = Math.round((parseFloat(order.goods_num) * parseFloat(order.goods_price) + parseFloat(order.mail_price))*100 )/100;
        that.setData({
          order : res.data,
          sum:sum,
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