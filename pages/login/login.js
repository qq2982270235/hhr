Page({
  data: {
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    wx_avatarUrl:'/images/normal_header.png',
    wx_nickName: '',
  },
  onShow:function(){
    var that = this;
    that.bindIsAuthorize();
  },
  //判断是否授权
  bindIsAuthorize: function () {
    var that = this;
    wx.getSetting({
      success: function (res) {
        if (res.authSetting['scope.userInfo']) {//true
          //已经授权
          wx.getUserInfo({
            lang: 'zh_CN',
            success: function (res) {
              wx.login({
                success: function (logres) {
                  that.setData({
                    wx_code: logres.code
                  });
                }
              });
              that.setData({
                isAuthorize: false,
                wx_nickName: res.userInfo.nickName,
                wx_avatarUrl: res.userInfo.avatarUrl,
                // wx_gender: (res.userInfo.gender) == '0' ? 'unset' : (res.userInfo.gender) == '1' ? '男' : '女',
                // wx_city: res.userInfo.city,
                // wx_province: res.userInfo.province,
                // wx_country: res.userInfo.country,
              });
              if (that.userInfoReadyCallback) {
                that.userInfoReadyCallback(res);
              }
              setTimeout(function () {
                wx.redirectTo({
                  url: '../signin/signin',
                });
              }, 2000);
            },
            fail: function () {
              that.setData({
                isAuthorize: true,
              });
            }
          });
        } 
      }
    });
  },
  //点击授权按钮
  bindGetUserInfo: function (e) {
    var that = this;
    if (e.detail.userInfo) {
      //用户按了允许授权按钮
      wx.getUserInfo({
        lang: 'zh_CN',
        success: function (res) {
          //获取微信code
          wx.login({
            success: function (logres) {
              that.setData({
                wx_code: logres.code
              });
            }
          });
          that.setData({
            isAuthorize: false,
            wx_nickName: res.userInfo.nickName,
            wx_avatarUrl: res.userInfo.avatarUrl,
            // wx_gender: (res.userInfo.gender) == '0' ? 'unset' : (res.userInfo.gender) == '1' ? '男' : '女',
            // wx_city: res.userInfo.city,
            // wx_province: res.userInfo.province,
            // wx_country: res.userInfo.country,
          });
          if (that.userInfoReadyCallback) {
            that.userInfoReadyCallback(res);
          }
          setTimeout(function(){
            wx.redirectTo({
              url: '../signin/signin',
            });
          },2000);
        }     
      });
    } else {
      //点击拒绝按钮  返回授权
      wx.showModal({
        title: '温馨提示',
        content: '您点击了拒绝授权，将无法进入小程序，请授权之后再进入!',
        showCancel: false,
        confirmText: '返回授权',
        confirmColor: '#b50029'
      });
    }
  },
  onShareAppMessage: function () {
    return {
      title: '登陆',
      path: '/pages/login/login'
    }
  }
})