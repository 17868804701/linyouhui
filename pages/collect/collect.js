// pages/collect/collect.js
var app = getApp();
Page({
  data: {
    listgoods: [],
    mygoods:[],
    owner:4,
    currentIndex:4
  },
  onLoad: function (options) {

    // var login = wx.getStorageSync('login');
    // console.log(login);
   this.onShow();

  },
  onPullDownRefresh: function () {
    wx.stopPullDownRefresh()
  },
  onShow: function () {
    // 页面显示
    var that = this;
    var login = wx.getStorageSync('login');
    var shop = wx.getStorageSync('shopInfo');

    // 等待审核
    wx.request({
      url: `${app.globalData.API_URL}/mygoods`,
      data: {
        uid: login.mid,
        shop: shop.id,
        status: 1, //1是下架
      },
      method: 'GET',
      success: function (res) {
        console.log(res.data, '商品000')
        // success
        that.setData({
          listgoods: res.data,
        })
      },

    });

    // 通过审核
    wx.request({
      url: `${app.globalData.API_URL}/mygoods`,
      data: {
        uid: login.mid,
        shop: shop.id,
        status: 0
      },
      method: 'GET',
      success: function (res) {
        console.log(res.data, '商品111')
        // success
        that.setData({
          mygoods: res.data,
        })
      },

    });

    // 商品销量
    wx.request({
      url: `${app.globalData.API_URL}/mygoods`,
      data: {
        uid: login.mid,
        shop: shop.id,
      },
      method: 'GET',
      success: function (res) {
        console.log(res.data, '商品22')
        // success
        that.setData({
          allgoods: res.data,
        })
      },

    });
    //评论
    wx.request({
      url: `${app.globalData.API_URL}/comment`,
      method: 'get',
      data: {
        parent_id: login.mid,
      },
      success: function (res) {
        console.log(res, '评论')
        that.setData({
          goodsCommentList: res.data
        })
      }
    })
  },
  onPullDownRefresh: function () {
    this.onShow();
    wx.stopPullDownRefresh()
  },
  //切换
  switchSlider : function(e){
    let index = e.currentTarget.dataset.index;
    this.setData({
      currentIndex : index
    })
  },
  //上架
  addgood:function(e){
    var login = wx.getStorageSync('login');
    var shop = wx.getStorageSync('shopInfo');
    let id = e.currentTarget.dataset.id; 
    let name = e.currentTarget.dataset.name;
    wx.request({
      url: `${app.globalData.API_URL}/mygoods/`+id,
      data: {
        user_id: login.mid,
        user_name : login.nickName,
        user_img: login.avatarUrl,
        goods_name:name,
        goods_id: e.currentTarget.dataset.id,
        shop_id:shop.id,
        shop_name:shop.shop_name,
        owner_id: shop.shop_owner_id,
        goods_img: e.currentTarget.dataset.image
      },
      method: 'put',
      success: function (res) {
        console.log(res);
        if(res.data){
          wx.showModal({
            title: '提示',
            content: '申请成功，请等待管理员审核',
            showCancel:false,
          })
        }
      },
    })
  },
  //下架
  upgood: function (e) {
    var that = this
    var login = wx.getStorageSync('login')
    wx.request({
      url: `${app.globalData.API_URL}/mygoods`,
      data: {
        user_id: login.mid,
        id: e.currentTarget.dataset.id,
        status: String(e.currentTarget.dataset.status)
      },
      method: 'POST', 
      success: function (res) {
        // success
        console.log(res);
        that.onShow();
        // that.onLoad()
      },
    })
  },
  delgood: function (e) {
    var that = this
    console.log(e.currentTarget.dataset)
    wx.request({
      url: `${app.globalData.API_URL}/mygoods/` + e.currentTarget.dataset.id,
      data: {},
      method: 'DELETE',
      success: function (res) {
        that.onShow();
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
  // 修改商品跳转
  editGoods:function(){
    wx.navigateTo({
      url: '../addgoods/index',
    })
  }
})