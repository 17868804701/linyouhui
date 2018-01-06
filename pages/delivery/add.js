var city = require("../../utils/city.js");
var username = '';
var address = '';
var iphone = '';
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    typeindex: ['同城',"省内",'省外'],
      index: 0, 
      username: username,
      address: address,
      iphone: iphone,

      
  },
  onLoad: function (options) {

    
    wx.showModal({
      title: '提示',
      content: '请务必同时添加同城、省内、省外三个模板，才能进行快递发货',
      showCancel: false
    });    

    var login = wx.getStorageSync('login');
    var shop = wx.getStorageSync('shopInfo');
    let id = options.id ? options.id : 0;
    console.log(options)
      let that = this;
      wx.request({
        url: `${app.globalData.API_URL}/delivery/` + id,
        method: 'get',
        success: function (e) {
          console.log(e);
          that.setData({
              del:e.data
          })
        }
      });
    
    // 页面初始化 options为页面跳转所带来的参数  
    city.init(that);
    console.log(login,'登陆')
    that.setData({
       user_id : login.mid,
       shop_id : shop.id
    })
  },
  
  //名称
  bindblurname: function (e) {

    var username = e.detail.value;

    wx.setStorageSync('names', username);
  },
  //价格
  bindblurprice: function (e) {
    console.log(e,'yunfei')
    var reg = new RegExp("^[0-9.]*$");
    var that = this;
    var price = {
      price:1,
    };
    console.log(price, 'price')
    var userphone = e.detail.value;
    if (!(/^[0-9.]*$/.test(userphone)) || userphone == 0){
      price.price = 1;
      that.setData({
        del: price
      })
      wx.showModal({
        title: '提示',
        content: '请输入大于0的数字',
        showCancel: false,
        success: function (res) {
          that.setData({
            del:price
          })
          return false;
        }
      })
    }
    wx.setStorageSync('price', userphone);
  },
  checkPhone: function (phone) {
    if (!(/^1(3|4|5|7|8)\d{9}$/.test(phone))) {
      wx.showModal({
        title: '提示',
        content: '手机号码有误',
        showCancel: false,
        success: function (res) {

        }
      })
    } 
  },
  //单选
  bindPickerChange : function(e){
    console.log(e);
    let types = this.data.typeindex;
    this.setData({
      index : e.detail.value,
      type : types[e.detail.value],
    })
  },
  hasAddress: function (e) {
    console.log(e,'表单')
    var detail = e.detail.value;
    // 地址缓存
    var addressBean = wx.getStorageSync('listaddress');
    let province = wx.getStorageSync('provinceStorage');
    let city = wx.getStorageSync('cityStorage');
    
    let district = wx.getStorageSync('districtStorage');
    console.log(city,'地区')
    this.setData({ citys: city })
    // 名字缓存
    // var usernames = wx.getStorageSync('names');
    // wx.removeStorageSync('names');
    // 电话缓存
    var userphones = wx.getStorageSync('price');
    wx.removeStorageSync('price');
    if (detail.title == '' || detail.price == '') {
      wx.showModal({
        title: '提示',
        content: '请填写名称或者价格',
        showCancel: false,
        success: function (res) {
        }
      })
    }else {
        wx.request({
          url: `${app.globalData.API_URL}/delivery`,
          method : 'post',
          data: e.detail.value,
          success: function(e){
            wx.navigateBack({
              delta: 1,
            })
          }
        })
    }
  },
  particularFn: function (e) {

    var particularAddress = e.detail.value;

    wx.setStorageSync('particularAddress', particularAddress);


    var addressBean = wx.getStorageSync('listaddress');

    addressBean = addressBean + particularAddress;

    wx.setStorageSync('listaddress', addressBean);

    var addressSemicolon = wx.getStorageSync('addressSemicolon');

    addressSemicolon = addressSemicolon + particularAddress;

    wx.setStorageSync('addressSemicolon', addressSemicolon);

  }

})