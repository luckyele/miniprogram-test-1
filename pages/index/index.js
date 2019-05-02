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
      "name": "合肥市图书馆" ,
      "city": "合肥市",
      "type": 1
    }
  },

  onLoad: function (options) {
    qqmapsdk = new QQMapWX({
      key: 'KLPBZ-BSLKW-GI2RD-OV2T2-O756E-FJBO4'
    });
  } 

})