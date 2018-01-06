var city = require("../../utils/city.js");
var username = '';
var address = '';
var iphone = '';
var app = getApp();
Page({
  data: {
    username: username,
    address: address,
    iphone: iphone,
    id:0,
    address:{
      name:'',
      phone:'',
      address:''
    }
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数  
    var that = this;
    console.log(options,'id')
    if(options.id){
      wx.request({
        url: `${app.globalData.API_URL}/address`,
        data: {
          id: options.id
        },
        method: 'GET',
        success: function (res) {
          console.log(res.data, '返回')
          that.setData({
            address: res.data[0],
            id:options.id
          })
          // wx.setStorageSync('aid', res.data[0].id);
        }
      })
    }
    city.init(that);
  },
  
  bindblurname: function (e) {
    let add = this.data.address;

    
    add.name = e.detail.value;
    console.log(add);
    wx.setStorageSync('usernames', e.detail.value);
    this.setData({
      address:add
    })
  },
  bindblurphone: function (e) {
    var userphone = e.detail.value;
    let add = this.data.address;
    wx.setStorageSync('userphones', userphone);
    let that = this;
    if (!(/^1(3|4|5|7|8)\d{9}$/.test(userphone))) {
      add.phone = '';
      wx.showModal({
        title: '提示',
        content: '手机号码有误',
        showCancel: false,
        success: function (res) {
          that.setData({
            address: add
          })
        }
      })
    }else{
      add.phone = userphone;
      that.setData({
        address: add
      });
    }
  },
  
  //详细地址
  particularFn: function (e) {
    var particularAddress = e.detail.value;
    wx.setStorageSync('particularAddress', particularAddress);
  },
  hasAddress: function (e) {
    // 地址缓存
    var id =  this.data.id;
    var address = e.detail.value.address;
    var province = wx.getStorageSync('provinceStorage');
    var city = wx.getStorageSync('cityStorage');
    var district = wx.getStorageSync('districtStorage');
    // 名字缓存
    var usernames = wx.getStorageSync('usernames'); 
    var login = wx.getStorageSync('login')
    // 电话缓存
    var userphones = wx.getStorageSync('userphones');
    if (usernames == '') {
      wx.showModal({
        title: '提示',
        content: '请填写收信人姓名',
        showCancel: false,
        success: function (res) {

        }
      })
    } else if (userphones == '') {
      wx.showModal({
        title: '提示',
        content: '请填写收信人电话',
        showCancel: false,
        success: function (res) {

        }
      })
    } else {
      wx.request({
        url: `${app.globalData.API}/address`,
        data: {
          id:id,
          user_id : login.mid,
          name: usernames,
          phone:userphones,
          city:city,
          province:province,
          town:district,
          address : address
        },
        method: 'POST',
        success: function (res) {
          if (res.data == 1) {
            wx.showToast({
              title: '成功',
              icon: 'success',
              duration: 1000
            });

            
            //获取最新
            var login = wx.getStorageSync('login')
            wx.request({
              url: `${app.globalData.API_URL}/address?id=` + login.mid,
              data: {},
              method: 'GET',
              success: function (res) {
                // success
                var addname = res.data[0];
                wx.setStorageSync('address', addname);
              }
            });
          }
        },
        complete:function(){
          wx.removeStorageSync('userphones');
          wx.removeStorageSync('usernames');

        }
      });

      wx.navigateBack({
        delta: 1, // 回退前 delta(默认为1) 页面
      });
    }
  },

})