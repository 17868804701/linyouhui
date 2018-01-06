// pages/address/user-address/user-address.js
var app = getApp()
Page({
  data: {
    address: '',
    radioindex: '',
  },
  //地址函数
  showAddress : function(){
    
    
  },
  onLoad: function (options) {
    wx.showToast({
      title:'加载中...',
      icon:'loading',
      duration:500
    })
    
  },
  
  radioChange: function (e) {
    console.log(e)
    var that = this
    var login = wx.getStorageSync('login')
    console.log(that.data.address[e.detail.value],'单机丐帮')
    wx.setStorageSync('radioindex', e.detail.value)
    let addr = that.data.address[e.detail.value];
    wx.request({
      url: `${app.globalData.API}/address`,
      data: {
        id : addr.id,
        default:1
      },
      method: 'POST', 
      success: function (res) {
        console.log(res);
        wx.setStorageSync('address', res.data)
      },
      
    })
    this.onShow()
  },
 
  onShow: function () {
    var that = this;
    //获取物流地址
    var login = wx.getStorageSync('login')
    wx.request({
      url: `${app.globalData.API_URL}/address?user_id=` + login.mid,
      data: {},
      method: 'GET',
      success: function (res) {
        // success
        console.log(res)
        var addname = res.data
        console.log(addname, '地址列表')
        if (res.data[0] != '') {
          that.setData({
            hiddenAdd: true,
            address: addname,
          });
          // wx.setStorageSync('address',addname);
        } else {
          that.setData({
            hiddenAddress: true,
            hiddenAdd: false,
          })
        }
      }
    });

  },

  
  //编辑
  change : function(e){
    console.log(e,'地址sss');
    let id = e.currentTarget.dataset.ids;
    wx.navigateTo({
      url: '../add?id='+id,
    })
  }
})