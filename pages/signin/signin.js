Page({
  data: {

  },
  //点击注册按钮
  signInSubmitBtn:function(){
    var that = this;
    wx.redirectTo({
      url: '../index/index',
    });
  },
 
  onShareAppMessage: function () {
    return {
      title: '注册',
      path: '/pages/signin/signin'
    }
  }
})