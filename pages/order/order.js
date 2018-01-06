//获取应用实例
var uctooPay = require('../../utils/uctoo-pay.js');
var promise = require('../../utils/es6-promise.js');
var app = getApp();


Page({
  data: {
    current: 0,
    orderlist:[],
    modelHidden:true,
    commentForm : true,
  },
  onLoad:function(){
    this.onShow();
  },
  onShow:function(i=0){
    var login = wx.getStorageSync('login');
    wx.showToast({
      title: '加载数据...',
      icon: 'loading',
      duration: 1000
    });
    var that = this;
    wx.request({
      url: `${app.globalData.API_URL}` + '/orders',
      data: {
        id: login.mid,
        status: i,
      },
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function (res) {
        // success
        console.log(res, '我的订单')
        that.setData({
          orderlist: res.data,
          current: i,
        })
      },
      complete:function(e){
        wx.hideToast();
      }

    })
  },
  //确认快递收获
  recive:function(e){
      var id = e.currentTarget.dataset.id;
      wx.request({
        url: `${app.globalData.API_URL}/orders/` + id,
        data: {},
        method: 'PUT', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
        // header: {}, // 设置请求的 header
        success: function (res) {
          wx.showToast({
            title: '确认成功',
            icon: 'success',
            duration: 2000
          });
      
        },
      });
      this.onShow(4);
  },
  //显示二维码
  openqrcode:function(e){
    console.log(e.currentTarget.dataset.id)
    var that=this
    var url = e.currentTarget.dataset.id
    console.log(url)
    wx.navigateTo({
      url: '/pages/qrcode/index?id='+e.currentTarget.dataset.id,
    })

  },
  //取消
  cancle: function (e) {
    this.setData({
      commentForm: true,
    })
  },
  
  payorder:function(e){
    var orderid = e.currentTarget.dataset.id;
    wx.setStorageSync('orderid', orderid)
    uctooPay.generateOrder();
  },
  //添加评论
  comment: function (e) {
    var login = wx.getStorageSync('login');
    let id = e.currentTarget.dataset.id;
    let goodid = e.currentTarget.dataset.goodid;
    let order = e.currentTarget.dataset.order;
    let spec = e.currentTarget.dataset.spec;
    this.setData({
      id:id,
      goods_id:goodid,
      order_id:order,
      user_id:login.mid,
      sku_id: spec,
      commentForm:false
    })
  },
  addComment: function (e) {
    wx.showLoading({
      title: '正在评论',
    });
    console.log(e);
    let value  = e.detail.value;
    wx.request({
      url: `${app.globalData.API_URL}` + '/comment',
      data :value,
      method:'post',
      success:function(e){
        if(e.data == 1){
          wx.hideLoading();
          wx.showModal({
            title: '提示',
            content: '添加成功',
            showCancel:false,
            success:function(e){
              if(e.confirm){
                wx.redirectTo({
                  url: '../order/order',
                })
                // wx.navigateTo({
                //   url: '../order/order',
                //   success: function(res) {},
                //   fail: function(res) {},
                //   complete: function(res) {},
                // })
              }
            }
          })
        }
      }
    });
    this.onShow(5);
  },

  //切换选项
  switchSlider: function (e) {
    wx.showToast({
      title: '加载数据...',
      icon: 'loading',
      duration: 1000
    });
    var that = this;
    let index = e.currentTarget.dataset.index;
    var login=wx.getStorageSync('login');
    this.setData({
      current: e.currentTarget.dataset.index
    });
    wx.request({
      url: `${app.globalData.API_URL}`+'/orders',
      data: {
        id : login.mid,
        status : index
      },
      method: 'GET', 
      success: function(res){
        console.log(res,'状态订单')
        that.setData({
          orderlist:res.data
        })
      },
      complete: function (e) {
        setTimeout(function(){
          wx.hideToast();},200);
      }
    })
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
       url: '../orderdetail/orderdetail?id='+id,
     })
  },
  lookdetail: function (e) {
    var id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '../orderAdmin/detail?id=' + id,
    })
  },
  //取消订单
  delorder:function(e){
  wx.showToast({
      title: '正在取消订单，请稍候...',
      icon: 'loading',
      duration: 10000
  })
    var that=this
    console.log(e.currentTarget.dataset.id)
    wx.request({
      url: `${app.globalData.API_URL}` + '/orders/' + e.currentTarget.dataset.id,
      method: 'DELETE', //
      success: function(res){
        if(res.data==1){
           that.onShow()
          wx.hideToast()
        }
       
      },
      
    })
  },

  //申请退款
  refund:function(e){
    wx.showToast({
      title: '已提交申请',
      icon: 'success',
      duration: 1000
    })
    var that = this;
    var login = wx.getStorageSync('login');
    var shop = wx.getStorageSync('shopIonfo');
    console.log(e.currentTarget.dataset.id)
    wx.request({
      url: `${app.globalData.API_URL}` + '/orders/' + e.currentTarget.dataset.id + '/edit',
      data:{
        user_id:login.mid,
        shop : shop.id,
      },
      method: 'GET', //
      success: function (res) {
        if (res.data == 1) {
          that.setData({
            current: 3,
          })
          wx.hideToast()
        }
        that.onShow(3);

      },

    })
  }
})