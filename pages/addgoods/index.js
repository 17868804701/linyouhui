var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    address: [],
    delivery: [],
    hidden: true,
    currTabIndex: 1,//tab
    user_id: 0,
    express: 0,//是否已选快递
    //fenlei
    typeArray: [],
    typeindex: 0,
    imgurl: '',//image
    imgurlArr: ['../../images/avatar/add.png'],
    pannel: false
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var shop = wx.getStorageSync('shopInfo');
    var login = wx.getStorageSync('login');
    // console.clear();
    //拼装地址数组
    var id = options.id;


    wx.request({
      url: `${app.globalData.API_URL}/goods?id=` + id,
      method: 'get',
      success: function (res) {
        console.log(res, '商品详情');
        console.log(res.data[0].goods_name)
        that.setData({
          goods_name: res.data[0].goods_name,
          // typeindex: res.data[0].cat_name,
          one: res.data[0].goods_price,
          mobile: res.data[0].mobile,
          goods_content: res.data[0].goods_content,
          imgurl: res.data[0].image,
          two: res.data[0].store_count,

        })
      }
    })



    var checkboxItems = shop.address;
    let address = [];
    for (var i = 0, lenI = checkboxItems.length; i < lenI; ++i) {
      address[i] = { 'value': i, 'name': checkboxItems[i], 'checked': false }
    }
    this.data.address = address;
    this.setData({
      address: address,
      user_id: login.mid,
      shop_id: shop.id,
      shop_name: shop.shop_name,
      owner_id: shop.shop_owner_id,
      user_name: login.nickName,
      user_img: login.avatarUrl,
    });
    //去掉缓存
    wx.removeStorageSync('check_addr');
    //分类
    let that = this;
    wx.request({
      url: `${app.globalData.API_URL}/shop_product_cats`,
      method: 'GET',
      success: function (res) {
        console.log(res.data)
        var arr = [];
        var arrid = [];
        for (var i = 0; i < res.data.length; i++) {
          arr.push(res.data[i].title)
          arrid.push(res.data[i].id)
        }
        that.setData({
          typeArray: arr
        })
      },

    });
    //运费
    this.onShow();
  },
  onShow: function (e) {
    var shop = wx.getStorageSync('shopInfo');
    var login = wx.getStorageSync('login');
    //去掉缓存
    wx.removeStorageSync('check_addr');
    var that = this;
    //快递模版
    wx.request({
      url: `${app.globalData.API_URL}/delivery`,
      method: 'get',
      data: {
        shop_id: shop.id,
        user_id: login.mid
      },
      success: function (res) {
        wx.setStorageSync('delivery', res.data);
        that.data.delivery = res.data;

        console.log(res.data, '快递')
        that.setData({
          delivery: res.data
        });
      }
    });
  },
  //分类
  bindPickerChangeType: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      typeindex: e.detail.value
    })
  },
  //验证数字
  checknum: function (e) {
    console.log(e)
    var reg = new RegExp("^[0-9.]*$");
    var va = e.currentTarget.dataset.id;
    var arr = {};
    arr[va] = '';
    console.log(arr)
    let that = this;
    var userphone = e.detail.value;
    if (!(/^[0-9.]*$/.test(userphone))) {
      wx.showModal({
        title: '提示',
        content: '请输入数字',
        showCancel: false,
        success: function (res) {
          that.setData(arr)
        }
      })
    }
  },
  bindblurphone: function (e) {
    var userphone = e.detail.value;
    let that = this;
    if (!(/^1(3|4|5|7|8)\d{9}$/.test(userphone))) {
      wx.showModal({
        title: '提示',
        content: '手机号码有误',
        showCancel: false,
        success: function (res) {
          that.setData({
            mobile: ''
          })
        }
      })
    }
  },
  //logo
  choicePic: function () {
    var that = this;
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        that.setData({
          imgurl: res.tempFilePaths[0]
        })
      }
    })
  },
  //自提地点 
  checkboxChange: function (e) {
    console.log('checkbox发生change事件，携带value值为：', e.detail.value);
    var check = 0;
    let receive = '';
    var checkboxItems = this.data.address, values = e.detail.value;

    for (var i = 0, lenI = checkboxItems.length; i < lenI; ++i) {
      checkboxItems[i].checked = false;
      for (var j = 0, lenJ = values.length; j < lenJ; ++j) {

        if (checkboxItems[i].value == values[j]) {
          check = 1;
          // wx.setStorageSync('check_addr', 1);
          if (receive != '')
            receive += ',';
          checkboxItems[i].checked = true;
          receive += checkboxItems[i].name;
          break;
        }
      }
    }

    console.log(check, 'check')
    this.setData({
      address: checkboxItems,
      receive: receive,
      express: 1
    });
    wx.setStorageSync('check_addr1', check);
  },
  //kuaidi
  checkboxDelivery: function (e) {
    //移除快递

    console.log('checkbox发生change事件，携带value值为：', e.detail.value);
    let delivery = '';
    var checkboxItems = this.data.delivery;
    let values = e.detail.value;
    var check = 0;
    var checkDel = new Array();
    wx.removeStorageSync('del');
    console.log(checkboxItems, '快递')
    for (var i = 0, lenI = checkboxItems.length; i < lenI; ++i) {

      checkboxItems[i].checked = false;
      for (var j = 0, lenJ = values.length; j < lenJ; ++j) {
        if (i == values[j]) {
          if (delivery != '') {
            delivery += ',';

          }
          check = 1;
          checkDel.push(checkboxItems[i].title);
          checkboxItems[i].checked = true;
          delivery += checkboxItems[i].id;
          wx.setStorageSync('del', checkDel);
          break;
        }
      }
    }
    console.log(check, 'check快递');
    wx.setStorageSync('check_addr2', check);

    console.group(checkDel, '数组');
    this.setData({
      delivery: checkboxItems,
      delive: delivery,
      express: 1
    });
  },
  switchTap: function (e) {
    console.log(e)
    let index = e.currentTarget.dataset.index;
    this.setData({
      currTabIndex: index
    })
  },
  //提交表单
  SubmitData: function (e) {
    var check = 0;
    var check1 = wx.getStorageSync('check_addr1');
    var check2 = wx.getStorageSync('check_addr2');
    if (check1 != 0 || check2 != 0)
      check = 1;
    console.log(check, 'check')
    var that = this;
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
    var imgurl = that.data.imgurl;//logo
    var value = e.detail.value;
    if (value.goods_name == '' || value.sepc1 == '' || value.price1 == '' || value.store1 == '' || imgurl == '' || check != 1) {
      wx.showModal({
        title: '错误',
        content: '信息填写不完整(必填内容:名称、价格、照片、规格、发货方式)',
        showCancel: false,

      })
    } else {
      wx.showToast({
        title: '上传中...',
        icon: 'loading',
        mask: true,
        duration: 10000
      })
      //上传图片

      wx.uploadFile({
        url: `${app.globalData.API_URL}/goods`,
        filePath: imgurl,
        name: 'picture',
        formData: value,
        success: function (res) {
          var data = res.data
          console.log(res, '成功')
          wx.hideToast();
          wx.redirectTo({
            url: '../collect/collect',
          });



        },
        fail: function (res) {
          console.log(res)
          wx.hideToast();
          wx.showModal({
            title: '提交失败',
            content: '重新提交',
            showCancel: false,
            success: function (res) {
              if (res.confirm) {


              }

            }
          });
        },

      })

    }

  },
  //清空表单
  Reset: function () {
    this.onLoad();
  },
  //弹出框
  Chosedel: function (e) {
    this.setData({ hidden: false, pannel: true });
  },
  confirmTag: function (e) {
    let del = wx.getStorageSync('del');
    console.log(del, '确认按钮')
    console.log(del.length, '确认按钮1')
    if (del && del.length < 3) {
      wx.showModal({
        title: '警告',
        content: '选择快递必须同时选择同城、省内、省外三个运费模板',
        showCancel: false
      })
    } else {
      this.setData({ hidden: true, pannel: false })
    }

  },

  //添加多图
  addinfo: function () {
    var that = this;
    wx.chooseImage({
      count: 5, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths;
        that.setData({
          imgurlArr: tempFilePaths
        });
        //上传  
        var length = tempFilePaths.length; //总共个数
        var i = 0; //第几个
        var img = '';
        wx.showLoading({
          title: '图片上传中...',
        });
        that.uploadIMG(tempFilePaths, i, length, img);
      }
    })
  },
  // 上传多文件时递归的函数体体   
  uploadIMG(filePaths, i, length, img) {

    wx.uploadFile({
      url: `${app.globalData.API_URL}/upload`,
      filePath: filePaths[i],
      name: 'picture',
      success: (res) => {
        console.log(res.data, '多图回来');
        img += res.data;
        i++;
        if (i == length) {
          wx.hideLoading();
          this.setData({ goods_img: img })
        }
        else {  //递归调用函数
          img += ',';
          this.uploadIMG(filePaths, i, length, img);
        }
      },
      complete: (res) => {
        console.log(img, '多图')
      },
    });
  },


})