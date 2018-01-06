//获取应用实例
var uctooPay = require('../../utils/uctoo-pay.js')
var app = getApp();
var login = wx.getStorageSync('login');

Page({
  data: {
    current: 0,
    orderlist: [],
    modelHidden: true,
    send:true,
  },
  onLoad: function () {
    
  },

  onShow: function(i=0){
    wx.showLoading({
      title: '加载中...',
    });
    var that = this;
    var index = this.data.current;
    console.log(i,'选项卡')
    console.log(index, '选项卡')
    if(index != 0){
      that.setData({current:index});
      i = index;
    }
    var shop = wx.getStorageSync('shopInfo');
    var user = wx.getStorageSync('login');
    wx.request({
      url: `${app.globalData.API_URL}` + '/buyorder',
      data: {
        shopId: shop.id,
        status: i,
        user_id: user.mid
      },
      method: 'GET',
      success: function (res) {
        // success
        console.log(res, '我的订单')
        that.setData({
          orderlist: res.data,
          // current: i
        });
        wx.hideLoading();
      },

    })
  },
  onPullDownRefresh: function () {
    wx.stopPullDownRefresh()
  },
  //直接电话联系
  callphone: function () {
    wx.makePhoneCall({
      phoneNumber: '18679654648' //仅为示例，并非真实的电话号码
    })
  },
  //取消订单
  delorder: function (e) {
    wx.showToast({
      title: '正在取消订单，请稍候...',
      icon: 'loading',
      duration: 1000
    })
    var that = this
    console.log(e.target.dataset.id)
    let order_id = e.currentTarget.dataset.order;
    wx.request({
      url: `${app.globalData.API_URL}` + '/buyorder/' + e.currentTarget.dataset.id,
      data:{
        order:order_id
      },
      method: 'DELETE', //
      success: function (res) {
        if (res.data == 1) {
          that.onShow();
          wx.hideToast();
        }

      },

    })
  },
//发货
  send:function(e){
    console.log(e)
      let id = e.currentTarget.dataset.id;
      this.setData({
        id:id,
        send:false,
      })
      
  },
  cancle:function(e){
    this.setData({
      send: true,
    })
  },
  sendForm:function(e){
    var value = e.detail.value;
    wx.request({
      url: `${app.globalData.API_URL}` + '/buyorder/' + value.id,
      data: value,
      method: 'PUT', //
      success: function (res) {
        wx.showToast({
          title: '提示',
          icon:'success',
          duration:500
        });
        that.onShow();
      },
    });
    this.setData({
      send: true,
      current: 2,
    })
  },
  //已到货
  take:function(e){
    let that = this;
    let id = e.currentTarget.dataset.id;
    wx.request({
      url: `${app.globalData.API_URL}` + '/buyorder/' + id + '/edit',
      data: {
      },
      method: 'GET', //
      success: function (res) {
        if (res.data == 1) {
          wx.showModal({
            title: '提示',
            content: '已通知买家提货',
            showCancel:false,
            success:function(res){
              if (res.confirm) {
                that.onShow(2);
                // that.setData({
                //   current: 2,
                // })
              }
            }
          });
        }
      },

    });
  },

  //切换选项
  switchSlider: function (e) {
    wx.showToast({
      title: '加载中',
      icon:'loading',
      duration:1000
    });
    let index = e.currentTarget.dataset.index;
    this.setData({ current: index })
    this.onShow(index);
  },


  changeSlider: function (e) {
    this.setData({
      current: e.detail.current
    })
  },

  //查看详情
  detail : function(e){
     var id = e.currentTarget.dataset.id;
     wx.navigateTo({
       url: '../orderAdmin/detail?id='+id,
     })
  },
  //退款
  refund : function(e){
    var that = this;
    wx.showLoading({
      title: '正在退款',
    });
    let id = e.currentTarget.dataset.id;
    wx.request({
      url: `${app.globalData.API_URL}` + '/buyorder',
      data: {
        id: id,
        mp_id: `${app.globalData.mp_id}`
      },
      method: 'POST',
      success: function (res) {
        wx.hideLoading();
        console.log(res, '状态订单')
        wx.showToast({
          title: res.data,
          icon: 'success',
          duration: 1000
        });
        setTimeout(function(){
          that.onShow(3);
          // that.setData({
          //   current: 3,
          // })
        },1000)
        
      },
    })

  },
  //不退款
  refuse: function (e) {
    var that = this;
    let id = e.currentTarget.dataset.id;
    wx.request({
      url: `${app.globalData.API_URL}` + '/buyorder/'+id,
      data: {
      },
      method: 'get',
      success: function (res) {
        console.log(res, '状态订单')
        wx.showToast({
          title: res.data,
          icon: 'success',
          duration: 1000
        });
        that.onShow();
      },
    });
  }
})