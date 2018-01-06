var app = getApp();
var uctoo = require('../../utils/uctoo-payorder.js')
var uctooPay = require('../../utils/uctoo-pay.js')
var promise = require('../../utils/es6-promise.js')
var login=require('../../utils/uctoo-login.js')
Page({
  data: {
    modalHidden: false,
    shoppingCartInfo: [],
    allMoney: 0,
    goods_name: '',
    goods_price: 0,
    sum: 0,
    order:[],

  },
  onLoad: function () {

    var shop = wx.getStorageSync('shopInfo');
    wx.setNavigationBarTitle({
      title: '购物车-'+shop.shop_name
    });
    var user = wx.getStorageSync('login');
    if (!user) {
      wx.showModal({
        title: '温馨提醒',
        content: '你没有授权登录！如有问题请联系客服电话：18679654648',
        success: function (res) {
          if (res.confirm) {
            login.login();
          }
        }
      });
    }
  },
  onShow: function () {
    var that = this;

    var arrInfo = wx.getStorageSync('shoppingCartInfo');
    console.log(arrInfo,'数组');
    if (arrInfo) {
      // var money = this.calcuteAllMoney(arrInfo);
      console.log(arrInfo, 'setData')

      that.setData({
        modalHidden: true,
        shoppingCartInfo: arrInfo,
        allMoney: 0
      });
    } else {
      that.setData({
        modalHidden: false
      });
    }
  },
  signConfirm: function () {
    wx.switchTab({
      url: '../index/index',
    })
  },
  signCancel : function(){
    var that = this;
    that.setData({modalHidden:true});
  },
  //---
  sub:function(event){
    var index = event.currentTarget.dataset.index;
    var arrInfo = wx.getStorageSync('shoppingCartInfo');
    if(arrInfo[index].goods_sum>1){
      arrInfo[index].goods_sum--;
    }

    // var money = this.calcuteAllMoney(arrInfo);
    this.setData({
      shoppingCartInfo: arrInfo,
      allMoney: 0
    });
    wx.setStorageSync('shoppingCartInfo', arrInfo);
  },
  //++++
  add: function (event) {
    var index = event.currentTarget.dataset.index;
    var arrInfo = wx.getStorageSync('shoppingCartInfo');
    console.log(index);
    if (arrInfo[index].goods_sum < arrInfo[index].spec_sum) {
      arrInfo[index].goods_sum++;
    }
    // var money = this.calcuteAllMoney(arrInfo);
    this.setData({
      shoppingCartInfo: arrInfo,
      allMoney: 0
    });
    wx.setStorageSync('shoppingCartInfo', arrInfo);
  },

  deleteGood: function (event) {
    var index = event.currentTarget.dataset.id;
    var arrInfo = wx.getStorageSync('shoppingCartInfo');
    arrInfo.splice(index, 1);
    // var money = this.calcuteAllMoney(arrInfo);
    this.setData({
      shoppingCartInfo: arrInfo,
      // allMoney: money
    });
    wx.setStorageSync('shoppingCartInfo', arrInfo);
  },
  //计算总价
  calcuteAllMoney: function (arr) {
    var that = this;
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
      sum = sum + parseFloat(arr[i].goods_price) * parseFloat(arr[i].goods_sum) + parseFloat(arr[i].mailprice) * parseFloat(arr[i].goods_sum);
    }
    // console.log(sum, '订单价钱')
    let num = Math.round(sum * 100) / 100;
    return num;

  },
  //勾选
  checkboxChange : function(e){
    let index = e.detail.value;
    wx.setStorageSync('checkId', e.detail.value);
    let order = Array();
    var arrInfo = wx.getStorageSync('shoppingCartInfo');
    // console.log(e.detail.value, '勾选');
    for (var i = 0, lenI = arrInfo.length; i < lenI; ++i) {
      arrInfo[i].checked = false;
      this.setData({allMoney: 0,});
      for (var j = 0, lenJ = index.length; j < lenJ; ++j) {
        if (i == index[j]) {
          arrInfo[i].checked = true;
          order.push(arrInfo[i]);
          break;
        }
      }
    }
    // wx.setStorageSync('shoppingCartInfo', arrInfo);

    var ind = wx.getStorageSync('checkId');
    console.log(ind, '索引');
    console.log(order,'订单')
    wx.setStorageSync('order', order);
    let sumMoney = this.calcuteAllMoney(order);
    // wx.setStorageSync('money', sumMoney);
    this.setData({
      shoppingCartInfo: arrInfo,
      order:order,
      allMoney: sumMoney,
    });
  },

  //结算提交
  checkOut: function () {
    var that=this
    var price = this.data.allMoney;
    console.log(price,'总价')
    // console.log(wx.getStorageSync('money'),'总价2')

    let goods_id = 0;
    var orderInfo = wx.getStorageSync('order');
    var shop = wx.getStorageSync('shopInfo');
    var login = wx.getStorageSync('login');
    if(price == 0){
        wx.showModal({
          title: '提示',
          content: '请先选择商品',
        })
    }else{
      wx.showToast({
        title: '正在下单...',
        icon: 'loading',
        mask: true,
        duration: 10000
      })
      var arrInfo = wx.getStorageSync('shoppingCartInfo');
      var ind = wx.getStorageSync('checkId');

      
        //全局订单ID和order_sn
        var order_sn =0;
      console.log(ind, '索引');
      console.log(arrInfo, '购物车商品')
      wx.request({
        url: `${app.globalData.API_URL}` + '/orders',
        data: {
          goods_price: price,
          user_id: login.mid,
          pay_name: login.nickName,
          parent_sn: shop.id,//店铺
        },
        method: 'POST',
        header: {
          'content-type': 'application/json'
        },
        success: function (res) {
          var order_id = res.data.order_sn;
          console.log(res.data, '订单返回')
          var id = res.data.id;
          wx.setStorageSync('orderid', order_id);
          console.log()

          var promises = new promise(function (resolve, reject) {
            resolve(orderInfo);
          });
          promises.then(function (value) {
            value.forEach(function (value) {
              console.log(value, 'foreach');
              let sum = 0; //Math.round((parseFloat(value.goods_num) * parseFloat(value.goods_price) + parseFloat(value.mailprice)) * 100) / 100;
              sum = sum + parseFloat(value.goods_price) * parseFloat(value.goods_sum) + parseFloat(value.mailprice) * parseFloat(value.goods_sum);
            
              console.log(sum, '订单价钱')
              let num = Math.round(sum * 100) / 100;
              console.log(num,'商品总价')
              wx.request({
                url: `${app.globalData.API_URL}/ordergoods`,
                data: {
                  order_id: res.data.id,
                  goods_id: value.goods_id,
                  goods_name: value.goods_name,
                  goods_price: value.goods_price,
                  mail_price: value.mailprice,
                  goods_num: value.goods_sum,
                  goods_img: value.image,
                  spec_key_name: value.specname,
                  address: value.address,
                  user_id: login.mid,
                  user_name : login.nickName,
                  openid: login.openId,
                  order_total: price,
                  sum: num,
                },
                method: 'POST',
                success: function (res) {
                  console.log(res,'提交返回订单商品');
                    if(res.data.status == false){
                      wx.showModal({
                        title: '提示',
                        content: res.data.data,
                        showCancel:false,
                        success: function(e){
                          if(e.confirm){

                          }
                        }
                      });
                      return false;
                    } else {
                      
                    }
                },

              });
            });
          });

          //直接支付
          uctooPay.generateOrder();


        },
        complete: function () {
          //提交订单后清空购物车
          // let id = ind.split(',');
          wx.removeStorageSync('order');
          let arrLen = arrInfo.length;
          for(var i in ind){
            if(arrInfo.length < arrLen && ind[i] == 0){
              arrInfo.splice(ind[i], 1);
            } else if (arrInfo.length == 1) {
              arrInfo.splice(0, 1);
            } else if (arrInfo.length < arrLen && ind[i] != 0){
              arrInfo.splice(--ind[i], 1);
            } else{
              arrInfo.splice(ind[i],1);
            }
            
          }
          wx.setStorageSync('shoppingCartInfo',arrInfo);
          that.setData({
            shoppingCartInfo: [],
            allMoney: 0
          });

        }

      });
    }
    
  },

  
});
