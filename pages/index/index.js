Page({
  data: {
    swiperCurrent: 0,
    bannerList: [
      { 'img': '/images/banner.jpg' },
      { 'img': '/images/banner.jpg' },
      { 'img': '/images/banner.jpg' },
      { 'img': '/images/banner.jpg' },
    ]
  },
  onLoad:function(){
    var that = this;
    wx.showModal({
      title: '温馨提示',
      content: '请前往完善个人信息，有助于好友了解你！',
      confirmColor:'#b50029',
      success:function(res){
        if(res.confirm){
          wx.redirectTo({
            url: '../personal/personal',
          })
        }
      }
    })
  },
  //调整Banner轮播图
  changDot(e) {
    this.setData({
      swiperCurrent: e.detail.current
    });
  },
  onShareAppMessage: function () {
    return {
      title: '首页',
      path: '/pages/index/index'
    }
  }
})