//index.js
//获取应用实例
const app = getApp()

Page({
  onLoad:function(){
    setTimeout(function(){
      wx.redirectTo({
        url: '../index/index',
      })
    },3000
    )
  }
        
  
})