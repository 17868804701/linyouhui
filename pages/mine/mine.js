var app = getApp(); 
Page({
  data: {
    userInfo: '',
    num1:0,
    num3:0,
    num2:0
  },
  onLoad: function (options) {
   

    var loginInfo = wx.getStorageSync('login');
    this.setData({ userInfo: loginInfo})
    // 页面初始化 options为页面跳转所带来的参数
    this.onShow();
  },
  //显示
  onShow: function () {
    var shop = wx.getStorageSync('shopInfo');
    wx.setNavigationBarTitle({
      title: '我的-' + shop.shop_name
    });
    var that = this
    var loginInfo = wx.getStorageSync('login');
    let admin = wx.getStorageSync('admin');
    console.log(admin, '管理员')
    this.setData({  admin: admin })

      wx.request({
        url: `${app.globalData.API_URL}/message`,
        data: {
          id: loginInfo.mid,
          status:1,
          read :0,
        },
        method: 'GET', 
        success: function (res) {
          let nums = res.data.length;
          console.log(nums, '消息')
          that.setData({
            num1: nums
          })
        },
    });

      wx.request({
        url: `${app.globalData.API_URL}/message`,
        data: {
          id: loginInfo.mid,
          status: 2,
          read: 0,
        },
        method: 'GET',
        success: function (res) {
          let nums = res.data.length;
          console.log(nums, '消息')
          that.setData({
            num2: nums
          })
        },
      });

      wx.request({
        url: `${app.globalData.API_URL}/message`,
        data: {
          id: loginInfo.mid,
          status: 3,
          read: 0,
        },
        method: 'GET',
        success: function (res) {
          let nums = res.data.length;
          console.log(nums, '消息')
          that.setData({
            num3 : nums
          })
        },
      });
    
  
  },
  //管理店铺
  tap_Manage: function (e) {
    wx.navigateTo({
      url: "../manage/index"
    })
  },
  //审核商品
  addgoods: function (e) {
    wx.navigateTo({
      url: "../review/review"
    })
  },
  //审核入群
  apply:function(e){
    wx.navigateTo({
      url: '../join/index',
    })
  },
  // 编辑资料
  onEditTap: function (e) {
    wx.navigateTo({
      url: "../edit/edit"
    })
  },
  // 会员注册
  onRegTap: function (e) {
    wx.navigateTo({
      url: "../login/register/register"
    })
  },
  // 我的订单
  tap_order: function (e) {
    wx.navigateTo({
      url: "../order/order"
    })
  },
  // 我的收藏
  tap_collect: function (e) {
    wx.navigateTo({
      url: "../login/login"
    })
  },
  // 联系地址
  tap_address: function (e) {
    wx.navigateTo({
      url: "../address/user-address/user-address"
    })
  },
  // 商品管理
  tap_mallManage: function (e) {
    wx.navigateTo({
      url: "../collect/collect"
    })
  },//提交商品
  tap_addgoods: function (e) {
    wx.navigateTo({
      url: "../addgoods/index"
    })
  },
  //买家订单
  tap_orderAdmin: function () {
    wx.navigateTo({
      url: "../orderAdmin/orderAdmin"
    })
  },
  //短信消息
  tap_review: function (e) {
    wx.navigateTo({
      url: "../message/index"
    })
  },
  //快递
  to_delivery:function(e){
    wx.navigateTo({
      url: '../delivery/index',
    })
  }
})