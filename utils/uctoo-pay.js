//支付功能
//常量
var app = getApp();
var DOMAIN = `${app.globalData.API_URL}`;
// var API_URL_API='https://www.pangxx.cn/api';

function generateOrder() {
    var that = this
    //统一支付
    wx.showToast({
        title: '正在处理订单，请稍候...',
        icon: 'loading',
        duration: 10000,
        mask:true
    })
    var login = wx.getStorageSync('login')
    var orderidStorage = wx.getStorageSync('orderid')
    setTimeout(function () {
        wx.request({
            url: `${app.globalData.API_URL}/mpbase/wxapp/wxpay/mp_id/${app.globalData.mp_id}/id/` + orderidStorage,
            method: 'post',
            data: {
                // session_3rd: login.session_3rd
            },
            success: function (res) {
              console.log(res.data+"______________________________")
                var pay = res.data;
                //发起支付
                //支付
                payFn(pay);
            },
        })
    }, 2000)

}
/* 支付   */
function payFn(param) {
    console.log(param,'发起支付');
    wx.hideToast();
    console.log(param.timeStamp+"___________________________________")
    console.log(param.nonceStr + "___________________________________")
    console.log(param.package + "___________________________________")
    console.log(param.signType + "___________________________________")
    console.log(param.paySign + "___________________________________")
    wx.requestPayment({
        timeStamp: param.timeStamp,
        nonceStr: param.nonceStr,
        package: param.package,
        signType: param.signType,
        paySign: param.paySign,
        success: function (res) {
          wx.showModal({
            title: '提示',
            content: '支付成功',
            showCancel: false,
            success: function (res) {
              wx.removeStorageSync('check_addr');
              wx.removeStorageSync('check_spec');
              if (res.confirm) {
                wx.navigateTo({
                  url: '../order/order',
                });
              }
            }
          })
            // wx.navigateBack({
                // delta: 1, // 回退前 delta(默认为1) 页面
                // success: function (res) {
                //     wx.showToast({
                //         title: '支付成功',
                //         icon: 'success',
                //         duration: 2000
                //     })
                // },
            // })
        },
        fail: function (res) {
            // fail
            console.log("支付失败")
            console.log(res)
            wx.showModal({ 
              title: '提示', 
              content: '支付失败', 
              showCancel:false,
              success:function(res){
                if(res.confirm){
                  wx.navigateTo({
                    url: '../order/order',
                  });
                }
              }
            })
            return
        },
        complete: function () {
        }
    })
}
module.exports = {
    generateOrder: generateOrder
}