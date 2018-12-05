Page({
  data: {
    navIndex: '0',//选项卡默认第一个
    barIndex:'0'//第二个选项卡
  },
  onLoad:function(options){
    var that = this;
    if(options.navIndex!=undefined && options.navIndex!=''){
      that.setData({
        navIndex:options.navIndex
      });
    }
  },
  //导航切换
  changeNav: function (e) {
    var that = this;
    var index = e.currentTarget.dataset.index;
    if (that.data.navIndex === index) {
      return false;
    } else {
      that.setData({
        navIndex: index
      });
    }
  },
  //合伙人 导航切换
  changeBar: function (e) {
    var that = this;
    var index = e.currentTarget.dataset.index;
    if (that.data.barIndex === index) {
      return false;
    } else {
      that.setData({
        barIndex: index
      });
    }
  },
  //分享
  onShareAppMessage: function () {
    return {
      title: '消息',
      path: '/pages/message/message'
    }
  }
})