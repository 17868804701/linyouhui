var city = require('../../utils/city.js');
var login = require('../../utils/uctoo-login.js');
var app = getApp();
Page({
  data: {
    group: [],
    groupArr: [],
    groupId: 0,
    index:0,
    indexId:0,
    shop_name:'',
    shop_info:[],
    hidden : false,
  },
  
  onLoad: function (options) {
    //自动获取
    // if (!wx.getStorageSync('city')){
    //   city.getAddress();
    // }
    //登录
    login.login();

    let hidden = wx.getStorageSync('hidden');
    this.setData({ hidden: hidden });
    wx.showToast({
      title: '加载中',
      icon:'loading',
      duration:2000
    });
    
    // 页面初始化 options为页面跳转所带来的参数
    console.log(options);
    let indexId = wx.getStorageSync('indexId');
    
    if (options.indexId) {
      this.setData({
        indexId: options.indexId
      })
    } else if (indexId){
      this.setData({
        indexId: indexId
      })
    }
    //获取群数据
     var that = this;
    wx.request({
      url: `${app.globalData.API_URL}/group`,
      data: {},
      method: 'GET', 
      success: function (res) {
        console.log(res,'店铺')
        that.setData({
          group: res.data,
        })
        wx.setStorageSync('currentShopInfo', res.data[that.data.indexId]);
      },
      complete: function () {
        wx.hideLoading();
      }
    })
  },



  onShow:function(){
    
  },
  //协议
  opens: function (e) {
    wx.downloadFile({
      url: `${app.globalData.API_URL}/1.docx`,
      success: function (res) {
        var filePath = res.tempFilePath
        wx.openDocument({
          filePath: filePath,
          success: function (res) {
            console.log('打开文档成功')
          }
        })
      }
    })
  },
  //同意和取消
  agree:function(){
      this.setData({hidden:true});
      wx.setStorageSync('hidden', true);
      wx.navigateTo({
        url: '../edit/edit',
      });

  },
  logout:function(){
    wx.showToast({
      title: '请按返回键退出',
      icon:'success',
      duration:2000
    })
  },
  //选择
  bindPickerChange: function (e) {
    console.log(e,'picker')
    
    this.setData({
      groupId: this.data.group[e.detail.value]['id'],
      indexId: e.detail.value,
      shop_info: this.data.group[e.detail.value],
      shop_name: this.data.group[e.detail.value]['shop_name']
    });
    //缓存商店群组
    console.log(this.data.shop_info,'数据信息')
    wx.removeStorageSync('currentShopInfo');//移除店铺缓存
    wx.setStorageSync('currentShopInfo', this.data.group[e.detail.value]);
  },
  //分享
  onShareAppMessage: function () {
    var that = this;
    return {
      title: '邻友惠',
      path: '/pages/login/login?indexId=' + that.data.indexId
    }
  },


    //登录按钮
  loginbtn: function () {
    var that = this;
    var indexId = this.data.indexId;
    var loginInfo = wx.getStorageSync('login')
    if (!loginInfo) {
      login.login();
    };

      //判断用户名和群名称，如果是该群的跳转到首页
    let shop_info = wx.getStorageSync('currentShopInfo');
    console.log(shop_info.id,'提交店铺ID')
    let shop_id = shop_info.id;
      
      wx.request({
        url: `${app.globalData.API_URL}/check`,
        data: {
          "group": shop_id,
          "owner_id": shop_info.shop_owner_id,
          "user": loginInfo.mid

        },
        method: 'GET',
        success: function (res) {
          console.log(res, '店铺')
          if (res.data == 1) {
            // wx.setStorageSync('shopInfo', shop_info);
            wx.setStorageSync('groupId', shop_id);//当前选择
            wx.setStorageSync('indexId', indexId);//当前索引
            wx.removeStorageSync('currentShopInfo');//移除店铺缓存
            wx.switchTab({
              url: '/pages/index/index'
            })
          } else {
            wx.showModal({
              title: '邻友惠温馨提示',
              content: '你不在这个群，是否提交验证？',
              success: function (res) {
                if (res.confirm) {
                  that.checkbtn();
                }
              }
            })
          }
        },
      })


  },
  checkbtn: function () {
    //提交给后台验证
    var that = this;
    var loginInfo = wx.getStorageSync('login')
    console.log(loginInfo,'用户')
    if (!loginInfo) {
      login.login();
    };
    let shop_info = wx.getStorageSync('currentShopInfo');
    setTimeout(function () {
      wx.request({
        url: `${app.globalData.API_URL}/check`,
        data: {
          // "group":parseInt(that.data.groupId),//通过id找群
          shop_id: shop_info.id,
          user_id: loginInfo.mid,
          shop_name:shop_info.shop_name,
          user_name: loginInfo.nickName,
          user_img: loginInfo.avatarUrl,
          owner_id: shop_info.shop_owner_id,
        },
        method: 'POST', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
        // header: {}, // 设置请求的 header
        success: function (res) {
          console.log(res)
          if (res.data == 1) {
            wx.showToast({
              title: '验证已经提交！',
              icon: 'sucess',
              duration: 1000
            })
          } else {
            wx.showToast({
              title: '你已提交过验证！',
              icon: 'fail',
              duration: 1000
            })
          }
        },
        fail: function () {
          // fail
        },
        complete: function () {
          // complete
        }
      })

    }, 1000)


  },
  onReady: function () {
    // 页面渲染完成
   
  },
  onShow: function () {
    // 页面显示

  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  }
})