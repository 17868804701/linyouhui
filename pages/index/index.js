var app = getApp();
var shop_info = wx.getStorageSync('shopInfo');
Page({
  data: {
    open: false,
    display: "none",
    swiper: [],
    goods: [],
    current:0
  },
  //详情页跳转
  lookdetail: function (e) {
    var lookid = e.currentTarget.dataset;
    console.log(e.currentTarget.dataset);
    wx.navigateTo({
      // url: "../list/detail/detail?id=" + lookid.id
      url: "../detail/index?id="+lookid.id
    })
  },
  //下拉刷新
  onPullDownRefresh: function() {
    this.onShow();
    this.setData({
      current: 0
    });
  },
  //分享
  onShareAppMessage: function () {
    var indexId = wx.getStorageSync('indexId');
    var that = this;
    return {
      title: '邻友惠',
      path: '/pages/login/login?indexId=' + indexId
    }
  },
  onLoad: function (option) {
    
    var login=wx.getStorageSync('login')
    console.log(login)
    if(!login){
      wx.redirectTo({
        url: '/pages/login/login',
      })
    }

    this.onShow;
    // var shop = wx.getStorageSync('shopInfo');
    // var user = wx.getStorageInfoSync('login');
    

  },
  onShow: function () {
    var that = this;
    var login = wx.getStorageSync('login')
    // var shop_info = wx.getStorageSync('shopInfo');//渲染幻灯片
    
    let groupid = wx.getStorageSync('groupId');
    console.log('店铺ID', groupid);
    if (!groupid) {
      wx.redirectTo({
        url: '/pages/login/login',
      })
    }
    //获取群数据
    var that = this;
    wx.request({
      url: `${app.globalData.API_URL}/group?id=` + groupid,
      data: {},
      method: 'GET',
      success: function (res) {
        console.log(res, '店铺res')
        // wx.removeStorageSync('currentShopInfo');
        // if (res.data.slides)
          that.setData({ 
            swiper: res.data.slides,
            shopid : res.data.id, 
          });
        wx.setNavigationBarTitle({
          title: '邻友惠-' + res.data.shop_name
        });
        //管理员
        if (res.data.shop_owner_id == login.mid) {
          wx.setStorageSync('admin', 1);
        } else {
          wx.setStorageSync('admin', 0);
        }

        //商品

        wx.request({
          url: `${app.globalData.API_URL}/goods`,
          data: {
            shop_id: res.data.id,
          },
          method: 'GET',
          success: function (ret) {
            console.log(ret, '商品详情');
            that.setData({
              goods: ret.data
            });
          },
        })
        wx.setStorageSync('shopInfo', res.data);
      },
      complete: function () {
        wx.hideLoading();
      }
    });   

    

  },
  //热点 //最低最高
  hot : function(e){
    wx.showLoading({
      title: '加载中...',
    })
    let num = e.currentTarget.dataset.hot;
    console.log(num);
    var that = this
    var shop= wx.getStorageSync('shopInfo')
    wx.request({
      url: `${app.globalData.API_URL}/goods`,
      data:{
        hot:num,
        shop_id: shop.id,
      },
      method: 'GET',
      success: function (res) {
        that.setData({
          goods: res.data,
          current: num
        });
        wx.hideLoading();
        
      },
      complete:function(){
        
      },
    })
  },
  
  //最新
  new : function(e){
    let num = e.currentTarget.dataset.hot;
    this.onShow();
    this.setData({
      current: num
    });
  },
  // 轮播
  tap_filter: function (e) {
    if (this.data.open) {
      this.setData({
        open: false,
        display: "none"
      });
    } else {
      this.setData({
        open: true,
        display: "block"
      });
    }
  }
})