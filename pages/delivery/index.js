var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showToast({
      title: '加载中...',
      icon:'loading',
      duration:1000,
    });

    
    
    this.onShow();
  },

  
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

    var shop = wx.getStorageSync('shopInfo');
    var login = wx.getStorageSync('login');
      let that = this;
      wx.request({
        url: `${app.globalData.API_URL}/delivery`,
        method : 'get',
        data : {
          shop_id: shop.id,
          user_id : login.mid
        },
        success: function(res){
          console.log(res)
            that.setData({
              list : res.data
            })
            wx.hideToast();
        },
        complete:function(e){
          
        }
      });
  },

  Toadd : function(){
    wx.navigateTo({
      url: '../delivery/add',
    })
  },
  //v编辑
  edit:function(e){
      let id = e.currentTarget.dataset.ids;
      wx.navigateTo({
        url: 'add?id='+id,
      })
      
  },
  //删除
  del : function(e){
      let id = e.currentTarget.dataset.id;
      let that = this;
      console.log(e)
      wx.showModal({
        title: '提示',
        content: '删除将会影响已发布商品,确定?',
        showCancel: true,
        success: function (res) {
          if(res.confirm){
            wx.request({
              url: `${app.globalData.API_URL}/delivery/` + id,
              method: 'delete',
              data: {},
              success: function (res) {
                that.onShow();
              }
            })
          }else{

          }
        }
      });
      
  },
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})