// pages/main/index.js
var QR = require("../../utils/qrcode.js");
var app=getApp()
Page({
  data:{
    id:0,
    maskHidden:true,
    imagePath:'',
    placeholder:'http://wxapp-union.com'//默认二维码生成文本
  },
  onLoad:function(options){
    console.log(options.id,'订单id');
    this.setData({id:options.id});
    // 页面初始化 options为页面跳转所带来的参数
    //接收页面的url
   this.qrcode(`${app.globalData.API_URL}/code?id=`+options.id)
  },
  onReady:function(){
  	var size = this.setCanvasSize();//动态设置画布大小
    var initUrl = this.data.placeholder;
    this.createQrCode(initUrl,"mycanvas",size.w,size.h);
  },
  
  //适配不同屏幕大小的canvas
  setCanvasSize:function(){
    var size={};
    try {
        var res = wx.getSystemInfoSync();
        var scale = 750/686;//不同屏幕下canvas的适配比例；设计稿是750宽
        var width = res.windowWidth/scale;
        var height = width;//canvas画布为正方形
        size.w = width;
        size.h = height;
      } catch (e) {
        // Do something when catch error
        console.log("获取设备信息失败"+e);
      } 
    return size;
  } ,
  createQrCode:function(url,canvasId,cavW,cavH){
    //调用插件中的draw方法，绘制二维码图片
    QR.qrApi.draw(url,canvasId,cavW,cavH);

  },
  //获取临时缓存照片路径，存入data中
  canvasToTempImage:function(){
    var that = this;
    wx.canvasToTempFilePath({
      canvasId: 'mycanvas',
      success: function (res) {
          var tempFilePath = res.tempFilePath;
          console.log("********"+tempFilePath);
          that.setData({
              imagePath:tempFilePath,
          });
      },
      fail: function (res) {
          console.log(res);
      }
    });
  },
  //点击图片进行预览，长按保存分享图片
  previewImg:function(e){
    wx.canvasToTempFilePath({
      canvasId: 'mycanvas',
      success: function (res) {
          var tempFilePath = res.tempFilePath;
					wx.previewImage({
      			current: tempFilePath, // 当前显示图片的http链接
      			urls: [tempFilePath] // 需要预览的图片http链接列表
    			})
      },
      fail: function (res) {
          console.log(res);
      }
    });
    
  },
  qrcode: function(url) {
    var that = this;
    that.setData({
      maskHidden:false,
    });
    wx.showToast({
      title: '请稍候...',
      icon: 'loading',
      duration:2000
    });
    var st = setTimeout(function(){
      wx.hideToast()
      var size = that.setCanvasSize();
      //绘制二维码
      that.createQrCode(url,"mycanvas",size.w,size.h);
      that.setData({
        maskHidden:true
      });
      clearTimeout(st);
    },2000)
    
  },
  //确认收获
  formSubmit : function(){
    
    wx.request({
      url: `${app.globalData.API_URL}/orders/`+this.data.id,
      data: {},
      method: 'PUT', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function(res){
        wx.showToast({
          title: '确认成功',
          icon: 'success',
          duration: 2000
        });
        wx.navigateBack({
          delta: 1,
        })
      },
    })
  }

})