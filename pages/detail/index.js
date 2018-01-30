let app = getApp();
var promise = require('../../utils/es6-promise.js');
var uctooPay = require('../../utils/uctoo-pay.js');
var loginuct = require('../../utils/uctoo-login.js');
Page({
    data: {
        
      
        "goodsTag": [{
            "pic": "/images/icon/7.png",
            "view": "7天包退",
            "data": "签收7日内，商品不影响二次销售，无条件退货"
        }, {
            "pic": "/images/icon/ziti.png",
            "view": "到店自提",
            "data": "下单后货品可自行前往门店提取"
        }, {
            "pic": "/images/icon/shop.png",
            "view": "门店配送",
            "data": "下单后货品由妈妈好专业配送人员送货上门"
        }, 
        { 
            "pic": "/images/icon/ziying.png", 
            "view": "自营", 
            "data": "自产自销的运营模式"
        }],
        "deliveryTime": {"beginTime": "", "endTime": "", "arriveType": 0, "isKuaidi": false},
        "priceSection": "499",
        "mbeanSection": "499",
        "isShare": true,
        "shareData": {
            "title": "NIKE耐克男小童运动鞋",
            "desc": "PHYLITE中底设计，超强弹性耐久性，减少有害弯曲。",
            "image": "http://img.mamhao.cn/477702/main_477702402_01.jpg@1e_200w_200h_0c_0i_0o_80q_1x",
            "link": "http://m.mamahao.com/goods/detail/?inlet\u003d6\u0026templateId\u003d51420\u0026itemId\u003d314622"
        },
       
        currTabIndex: 0,
        tabs: [
            {
                title: '商品图片',
                tplName: 'goods-desc',
                data: {
                    pic: null
                }
            },
            {
                title: '商品介绍',
                tplName: 'goods-params',
                data: {
                    params: null
                }
            },
            {
                title: '商品评价',
                tplName: 'goods-comments',
                data: {
                    rating: null,
                    commentList: null
                }
            },
        ],
        
       
        //订单
        order :{
            price :0,
            goods_id : 0,
            goods_num :1,
            goods_address :'',
            spec_val:0,
            spec_name:'',
            mailPrice : 0,//邮费
        },
        //商品详情
        goods: [],
        goods_num: 1,
        sales_out:true,//卖完
        sku: {
          is_show:false,
        },
        is_show : false,
        price: 0,//价格
        singlePrice:0,//单价
        total_price:0,//总价
        spec:[],//规格
        check : -1,//选择规格
        //判断规格或者地址是否已选
        check_spec :0,
        check_addr :0,
        deliveryAddress: '',//获取地址
        // store_count : 10,//存量
        is_delivery:0,//支持快递
        is_takes:0,//支持自提
        addressArray :[],//快递地址
        deliveryArray:[],
        personAddr:[],//个人地址
        addrIndex : 0,
        express:true,//快递
        takes :true,//自取
        method : 0,//收货方式
        mailPri:0,//邮费
        mailhidden : true,//隐藏邮费
        which:1,//那种方法

                      
    },
    onLoad (e){

      console.log('接收参数', e);
      if (e.indexId || e.shopId) {
        wx.setStorageSync('groupId', e.shopId);//当前选择
        wx.setStorageSync('indexId', e.indexId);//当前索引
      }

      //判断登陆
      var login = wx.getStorageSync('login');
      if (!login) {
        loginuct.login();
      }
      const me = this;

      // let check_spc = wx.getStorageSync('check_addr');
      // let check_addr = wx.getStorageSync('check_spec');
        
        // var address = wx.getStorageSync('city');//dizhi 
        // console.log(address,'dizhi')
        //获取商品
        wx.request({
          url: `${app.globalData.API_URL}/goods?id=` + e.id,
          method:'get',
          success : function(res){
            console.log(res,'商品');
            me.setData({
              goods:res.data[0],
              // deliveryAddress : address
            });

            var promises = new promise(function (resolve, reject) {
              resolve(1);
              reject('数据错误');
              // resolve(me.data.deliveryArray);
            });
            promises.then(function(){
              //获取评论
              wx.request({
                url: `${app.globalData.API_URL}/comment`,
                method:'get',
                data:{
                  goods_id : e.id,
                },
                success:function(res){
                  console.log(res,'评论**************************************')
                  me.setData({
                    goodsCommentList: res.data                    
                  })
                }
              })
            }).then(function () {
              // 配送快递
              if (res.data[0].shipping_ids){
                wx.request({
                  url: `${app.globalData.API_URL}/delivery`,
                  method: 'get',
                  data: {
                    id: res.data[0].shipping_ids,
                  },
                  success: function (e) {
                    let del = e.data;
                    if (del.length != 0) {
                      me.setData({
                        deliveryArray: del,
                        is_delivery: 1,
                      });
                    }

                    // console.log(del, '异步1')
                  }
                });
              }
             
              // return me.data.deliveryArray;
            }).then(function (value) {
             
              
                
              
            });//.catch(function(){
              // console.log('错误'+reason);
            //});
            
  
          }
        });
        //获取规格
        wx.request({
          url: `${app.globalData.API_URL}/spec?id=` + e.id,
          method : 'get',
          success : function(ret){
            console.log('规格',ret)
             me.setData({spec:ret.data,
               store_count: ret.data[0][2]
             });
             me.data.spec = ret.data;
          },
          complete:function(e){
            // wx.hideLoading();
          }
        })
        
        //tabs
        
        me.setData({
            tabs: me.data.tabs
        });

       

    },
    onShow(){
      wx.showToast({
        title: '加载中...',
        icon: 'loading',
        mask: true,
        duration: 10000
      });


      //移除选择妆
      wx.removeStorageSync('check_addr');
      wx.removeStorageSync('check_spec');
      
console.log('ONSHOW')
          
      var login = wx.getStorageSync('login');
      var me = this;

    //判断群权限
      var shopId = wx.getStorageSync('groupId');//当前选择
      var indexId = wx.getStorageSync('indexId');//当前索引
      if (indexId || shopId) {
        //获取群数据
        wx.request({
          url: `${app.globalData.API_URL}/group?id=` + shopId,
          data: {},
          method: 'GET',
          success: function (res) {
            let shop = res.data;
            //验证权限
            wx.request({
              url: `${app.globalData.API_URL}/check`,
              data: {
                "group": shop.id,
                "owner_id": shop.shop_owner_id,
                "user": login.mid

              },
              method: 'GET',
              success: function (ret) {
                console.log(ret, '详情检查')
                if (ret.data == 1) {
                  // wx.setStorageSync('shopInfo', shop_info);
                  wx.setStorageSync('groupId', shopId);//当前选择
                  wx.setStorageSync('indexId', indexId);//当前索引

                } else {
                  wx.redirectTo({
                    url: '/pages/login/login?indexId=' + indexId,
                  })
                }
              },
            })
          }
        })
      }

      //个人地址
      wx.request({
        url: `${app.globalData.API_URL}/address?user_id=` + login.mid,
        data: {},
        method: 'GET',
        success: function (res) {
          // success
          console.log(res.data, '个人地址')
          var addname = res.data;
          me.setData({
            personAddr: addname,
            method: 0, 
            express:true
          });
        },
        complete: function (e) {
          wx.hideToast();
        }
      });

       //获取用户电话
      var that = this;
      wx.request({
        url: `${app.globalData.API_URL}/user`,
        method: 'get',
        data: {
          id: login.mid
        },
        success: function (e) {
          that.setData({
            userPhone: e.data.mobile
          })
        }
      });
      
    },
    //分享
    onShareAppMessage: function () {
      var goods = this.data.goods;
      var shopId = wx.getStorageSync('groupId');
      var indexId = wx.getStorageSync('indexId');
      return {
        title: goods.goods_name,
        path: '/pages/detail/index?id='+goods.id +'&shopId='+shopId + '&indexId='+indexId,
        image: goods.image,
        success: function (res) {
          // 转发成功
        },
        fail: function (res) {
          // 转发失败
        }
      }
    },
    _handleTabChange(e){
      console.log(e,'切换');
        const me = this;
        me.setData({
            currTabIndex: e.currentTarget.dataset.index
        })
    },
//立即
  dir:function(e){
    this.setData({
      is_show:true,
      witch:1
    })
  },
  addCart: function(e){
    this.setData({
      is_show: true,
      witch: 2
    })
  },
  
    sku_hidden: function () {
      var that = this
      var sku = that.data.sku
      sku.is_show = false
      that.setData({
        sku: sku,
        is_show : false
      })
    },
    to_buy: function () {
      var url = '/pages/order_conform/order_conform?' +
        'product_id=' + this.data.product.id +
        '&cid=' + this.data.product.cid +
        '&name=' + this.data.product.name +
        '&sku_id=' + this.data.sku.sku_id +
        '&img_url=' + this.data.sku.img_url +
        '&price=' + this.data.sku.price +
        '&num=' + this.data.sku.num +
        '&quantity=' + this.data.sku.quantity +
        '&sku_properties_name=' + this.data.sku.prop_properties_name

      wx.navigateTo({
        url: url
      })
    },
    //加入购物车
    addToCart: function (e) {
      console.log(e, '购物车');
      let check_spc = wx.getStorageSync('check_addr');
      let check_addr = wx.getStorageSync('check_spec');

      console.log(check_addr, '地址缓存');
      console.log(check_spc, '规格缓存');
      if (check_addr == '' || check_spc == '') {
        wx.showModal({
          title: '错误',
          content: '请选择规格快递',
          showCancel: false
        })
        return false;
      }
      let cartInfo = e.detail.value;
      let carts = wx.getStorageSync('shoppingCartInfo');
      console.log(carts, '购物车2')
      if (carts) {
        console.log(carts, '能否进来')
        var arrInfo = carts;
        var flag = true;
        var show = false;

        //已存在则增加数量
        arrInfo.forEach(function(item,index){
          //规格数量
          if (item.specname == cartInfo.specname) {
            let sum = parseInt(item.goods_sum) + parseInt(cartInfo.goods_sum);
            if (sum > cartInfo.spec_sum) {
              flag = false;
              wx.showModal({
                title: '错误',
                content: '所选择规格数量不足',
                showCancel: false
              })
              return false;
            }
          }
          if (item.specname == cartInfo.specname && item.address == cartInfo.address){
            item.goods_sum = parseInt(item.goods_sum) + parseInt(cartInfo.goods_sum);
            flag = false;
            show = true;
          } else if (item.address !== cartInfo.address && item.specname == cartInfo.specname  ){
            flag = false;
            console.log('进入条件')
            wx.showModal({
              title: '提示',
              content: '购物车已有相同商品，请先结算',
              cancelText: '取消',
              success:function(res){
                if (res.confirm) {
                  wx.switchTab({
                    url: "../shoppingCart/shoppingCart"
                  })
                } 
              }
            })
            
            return false;
          }
          
        });
        //加入数据
        wx.setStorageSync('shoppingCartInfo', arrInfo);

        if (flag) {
          arrInfo.push(cartInfo);
          wx.setStorageSync('shoppingCartInfo', arrInfo);
          
          show = true;

          //移除选择妆
          wx.removeStorageSync('check_addr');
          wx.removeStorageSync('check_spec');
        }
        
        if(show){
          wx.showModal({
            title: '添加购物车成功！',
            content: '',
            cancelText: '继续购物',
            confirmText: '去结算',
            success: function (res) {
              if (res.confirm) {
                wx.switchTab({
                  url: "../shoppingCart/shoppingCart"
                })
              }else{
                wx.switchTab({
                  url:'../index/index'
                })
              }
            }
          });
          
        }

      } else {
        console.log('else')
        var arrInfo = [];
        arrInfo.push(cartInfo);
        //去掉选择
        wx.removeStorageSync('check_addr');
        wx.removeStorageSync('check_spec');

        wx.setStorageSync('shoppingCartInfo', arrInfo);
        wx.showModal({
          title: '添加购物车成功！',
          content: '',
          cancelText: '继续购物',
          confirmText: '去结算',
          success: function (res) {
            if (res.confirm) {
              wx.switchTab({
                url: "../shoppingCart/shoppingCart"
              })
            }
            if(res.cancel){
              wx.switchTab({
                url: '../index/index'
              })
            }
          }
        });
      }

      
    },
  //立即购买
    dirBuy : function(e) {
      
      var value = e.detail.value;//商品
      let check_spc = wx.getStorageSync('check_addr');
      let check_addr = wx.getStorageSync('check_spec');

      console.log(value, '详细');
      console.log(check_spc, '规格缓存');
      if (check_addr == '' || check_spc == '') {
        wx.showModal({
          title: '错误',
          content: '请选择规格快递',
          showCancel: false
        })
        return false;
      }else {
        wx.showToast({
          title: '正在下单...',
          icon: 'loading',
          mask: true,
          duration: 10000
        });
        var that = this
        var price = this.data.price;
        var total_price = this.data.total_price;
        var login = wx.getStorageSync('login');
        var shop = wx.getStorageSync('shopInfo');

        wx.request({
          url: `${app.globalData.API_URL}` + '/orders',
          data: {
            goods_price: total_price,
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

           //let sum = Math.round((parseFloat(value.goods_num) * parseFloat(value.goods_price) + parseFloat(value.mailprice)) * 100) / 100;
            wx.request({
              url: `${app.globalData.API_URL}/ordergoods`,
              data: {
                order_id: id,
                goods_id: value.goods_id,
                goods_name: value.goods_name,
                goods_price: value.goods_price,
                mail_price: value.mailprice,
                goods_num: value.goods_sum,
                goods_img: value.image,
                spec_key_name: value.specname,
                address: value.address,
                user_id: login.mid,
                user_name: login.nickName,
                openid: login.openId,
                order_total: total_price,
                sum: total_price,
              },
              method: 'POST',
              success: function (res) {
                console.log(res, '提交返回订单商品');
                if (res.data.status == false) {
                  wx.showModal({
                    title: '提示',
                    content: res.data.data,
                    showCancel: false,
                    success: function (e) {
                      if (e.confirm) {

                      }
                    }
                  });
                  return false;
                }else{
                  //直接支付
                  uctooPay.generateOrder();
                }
              },

            });


          },
          

        });
      }
    },
    //计算总价
    calcuteAllMoney: function ( num=1) {
      var that = this;
      var sum = 0; 
      var mailPri = this.data.mailPri * num;
      var goods_price = this.data.singlePrice;
      if(num == 0)
        num = this.data.goods_num;
      sum = sum + parseFloat(goods_price) * parseFloat(num) + parseFloat(mailPri);
      
      console.log(goods_price, '订单价钱')
      console.log(num, '订单数量')
      console.log(mailPri, '运费价钱')
      sum = Math.round(sum * 100) / 100;
      that.setData({
        total_price: sum,
        goods_price:goods_price,
        // mailPrice : mailPri
      })
      return num;

    },
    //数量
  add : function (that) {
    var order = this.data.order;
    var num = order.goods_num;
    if (num < this.data.store_count) {
      num++;
      order.goods_num = num;
      this.setData({
        order : order,
        goods_num:num
      });
      this.calcuteAllMoney(num);
    }
  },

move:function (e) {
    console.log(e,'----')
    var order = this.data.order;
    var num = order.goods_num;
    if (num > 1) {
      num--;
      order.goods_num = num;
      this.setData({
        order: order,
        goods_num: num
      });
      this.calcuteAllMoney(num);
    }
  },

update : function(e) {
  var num = this.data.store_count;
  console.log(num);
  console.log(e.detail)
  var order = this.data.order;
    if (e.detail.value > num) {
      order.goods_num = num;
    } else if (e.detail.value ==0) {
      order.goods_num = 1;
    } else {
      order.goods_num = e.detail.value;
    }
    this.setData({
      order: order,
      goods_num: e.detail.value
    })
  },
  //选择状态
checked:function(e){
  console.log(e);
  var order = this.data.order;
  var goods_num = this.data.goods_num;
    let that = this;
    let target = e.currentTarget.dataset.y;
    let spec = this.data.spec;
    if (spec[target][2] < 1 || !spec[target][2] || goods_num > spec[target][2]){
      wx.showModal({
        title: '错误',
        content: '所选择规格数量不足',
        showCancel: false
      })
      return false;
    }
    this.setData({
      goods_price:spec[target][1],
      singlePrice: spec[target][1],
      specname:spec[target][0],
      check:target,
      check_spec:1,//status
      store_count: spec[target][2],
      spec_sum:spec[target][2]
    });
    wx.setStorageSync('check_spec', 1);
    this.calcuteAllMoney(goods_num);
    
},
//自提选择
takes : function(event){
  var goods_num = this.data.goods_num;
  console.log(event)
  let add = this.data.goods.address;
  let addArr = add.split(',');
  this.setData({
    addressArray:addArr,
    method: 1,
    addrIndex: 0,
    takes:false,
    express: true,
    mailhidden: true,
    mailPri: 0,
    address: addArr[0],
    check_addr: 1,
  });
  wx.setStorageSync('check_addr', 1);
  this.calcuteAllMoney(goods_num);

},
////快递选择
express: function(e){
  let del = this.data.personAddr;
  var goods_num = this.data.goods_num;
  if(del.length == 0){
    this.setData({
      express: false,
      method: 2,
      takes: true,
    })
  }else{
    console.log(del,'del')
    let delArr = new Array();
    del.forEach(function (item) {
      let deladdr = item.name + '-手机:' + item.phone + '-地址:' + item.province + item.city + item.town + item.address;
      delArr.push(deladdr);
    });
    //匹配运费
    let deliveryArray = this.data.deliveryArray;
    var mailPri = 0;
    var me = this;
    deliveryArray.forEach(function (item) {
      if (del[0].city == item.city && del[0].province == item.province && item.type == '同城') {
        mailPri = item.price;
        me.setData({
          mailPri: mailPri
        })
        console.group(item, '遍历1')
        
      } else if (del[0].city != item.city && del[0].province == item.province && item.type == '省内') {
        mailPri = item.price;
        me.setData({
          mailPri: mailPri
        });
        console.group(item, '遍历2')
      } else if (del[0].city != item.city && del[0].province != item.province && item.type == '省外') {
        mailPri = item.price;
        me.setData({
          mailPri: mailPri
        })
        console.group(item, '遍历3')
      }
    });
    wx.setStorageSync('check_addr', 1);
    let mail = this.data.mailPri;
    console.log(mail, '运费')
    console.log(mailPri, '运费')
    let addre = del[0].name + '-手机:' + del[0].phone + '-地址:' + del[0].province + del[0].city + del[0].town + del[0].address;
    this.setData({
      addressArray: del,
      addrIndex: 0,
      method: 2,
      express: false,
      takes: true,
      delArr: delArr,
      address: addre,
      mailhidden: false,
      mailPri: mail,
      check_addr: 1,
    });
  }
  
  this.calcuteAllMoney(goods_num);
},
//自提
  bindPickerAddr: function(e){
    let index = e.detail.value;
    let address = this.data.addressArray;
    this.setData({
      addrIndex:index,
      address : address[index]
    })
  },
  //快递
  bindPickerPer:function(e){
    console.log(e,'bindPickerPer')
    var goods_num = this.data.goods_num;
    let index = e.detail.value;
    let address = this.data.personAddr;
    let pickAddr = address[e.detail.value];
    console.log(pickAddr, '当前地址')
    let deladdr = pickAddr.name + ':' + '-手机:' + pickAddr.phone + '-地址:' + pickAddr.province + pickAddr.city + pickAddr.town + pickAddr.address;
    let deliveryArray = this.data.deliveryArray;
    var mailPri = 0;
    deliveryArray.forEach(function(item){
      if (pickAddr.city == item.city && pickAddr.province == item.province && item.type == '同城'){

          console.log(item, '同城')
          mailPri = item.price;
          return false;
      } else if (pickAddr.city != item.city && pickAddr.province == item.province && item.type == '省内') {
          console.log(item, 'item2')
         mailPri = item.price;
          return false;
      } else if (pickAddr.city != item.city && pickAddr.province != item.province && item.type == '省外') {
          console.log(item, 'item3')
         mailPri = item.price;
          return false;
        }
    });
    this.setData({
      addrIndex:index,
      mailPri :mailPri,
      address: deladdr,
    }); 
    this.calcuteAllMoney(goods_num);
  }
});