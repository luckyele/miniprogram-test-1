// pages/map/map.js

var QQMapWX = require('../../libs/qqmap-wx-jssdk.min.js');

var qqmapsdk;

//获取应用实例
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    markers: [{
      iconPath: '/resources/others.png',
      id: 0,
      latitude: 31.871727,
      longitude: 117.299652,
      width: 50,
      height: 50
    }],

    areas: {
      "province": "内蒙古自治区",
      "city": "鄂尔多斯市",
      "time": 1
    }
  },

  onLoad: function (options) {
    qqmapsdk = new QQMapWX({
      key: 'KLPBZ-BSLKW-GI2RD-OV2T2-O756E-FJBO4'
    });
  },

  onShow: function () {
     this.setData({
       
     })        
  }, 

})