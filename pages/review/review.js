// pages/review/review.js
var app=getApp()
Page({
  data: {
    primarySize:'default',
    reviewData: []
  },
  onPullDownRefresh: function(){
    wx.stopPullDownRefresh()
  },
  // 审核通过
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
        shop_id: listdata[index].shop_id,
        user_id: listdata[index].user_id,
        owner_id: listdata[index].owner_id,
        types: listdata[index].type,
        goods_id: listdata[index].goods_id,
        goods_name: listdata[index].goods_name
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
  // 审核不通过
  notPass:function(e){
    console.log("notpass")
    var index=e.currentTarget.dataset.id;
    var listdata=this.data.reviewData
    wx.request({
      url: `${app.globalData.API_URL}/message/`+listdata[index].id,
      data: {
        id: listdata[index].id,
        shop_id: listdata[index].shop_id,
        user_id: listdata[index].user_id,
        owner_id: listdata[index].owner_id,
        types: listdata[index].type,
        goods_id: listdata[index].goods_id,
        goods_name: listdata[index].goods_name
      },
      method: 'DELETE', 
      success: function(res){
        console.log(res)
        wx.showToast({
          title: '成功',
          icon:'success',
          duration:500,
        });

      },
      
    });
    this.onShow();
  },

  
  //详情页跳转
  lookdetail: function (e) {
    var lookid = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: "../detail/index?id=" + lookid
    })
  },
  lookuser:function(e){
    var lookid = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: "../edit/index?id=" + lookid
    })
  },

 





  onLoad: function (options) {
    this.onShow();
  },
  onShow: function () {
    // 页面渲染完成
    var that=this
    var loginInfo = wx.getStorageSync('login')
    wx.request({
      url: `${app.globalData.API_URL}/message?id=`+loginInfo.mid,
      data: {
        status:1
      },
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function(res){
        // success
        console.log(res)
        that.setData({
          reviewData:res.data
        })

      },
    })
  },
  
 //已读
  read : function(e){
    var index = e.currentTarget.dataset.id;
    var listdata = this.data.reviewData;
    var that = this;
    console.log("pass")
    wx.request({
      url: `${app.globalData.API_URL}/message/` + listdata[index].id+'/edit',
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