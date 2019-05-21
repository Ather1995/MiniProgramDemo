//index.js
//获取应用实例
const app = getApp()
var fileData = require('../../utils/data.js')
Page({
  data: {
    keyword:"",
    motto: 'Hello World',
    showData: ""
  },
  //事件处理函数
  bindinput:function(e){
    this.setData({
      keyword:e.detail.value
    })
    console.log(e.detail.value)
  },
  bindViewTap: function() {
    if(this.data.keyword){
      wx.navigateTo({
        url: '../searchResult/searchResult' + "?keyword="+this.data.keyword
      })
    }else{
      wx.showToast({
        title: '请输入文本！',
        icon: 'none',
        duration: 2000
      })
    } 
  },
  onLoad: function () {
    this.setData({
      showData: fileData.mtData().list
    })
  }
})
