Page({
  data: {
    ageText:'请选择年龄',
    sexText:'请选择性别',
    infoText:''
  },
  //能力选择
 
  //年龄选择
  ageSelect:function(){
    var that = this;
    wx.showActionSheet({
      itemList: ['不限', '25-30岁', '30-35岁','35-40岁','40-45岁','45-50岁'],
      success: function (res) {
        if (!res.cancel) {
          var index = res.tapIndex;
          if (index == 0) {
            that.setData({
              ageText: '不限'
            });
          } else if (index == 1) {
            that.setData({
              ageText: '25-30岁'
            });
          } else if (index == 2) {
            that.setData({
              ageText: '30-35岁'
            });
          } else if (index == 3){
            that.setData({
              ageText: '35-40岁'
            });
          } else if (index == 4){
            that.setData({
              ageText: '40-45岁'
            });
          } else if (index == 5){
            that.setData({
              ageText: '45-50岁'
            });
          } 
        }
      }
    });
  },
  //性别选择
  sexSelect:function(){
    var that = this;
    wx.showActionSheet({
      itemList: ['不限', '男', '女'],
      success: function (res) {
        if (!res.cancel) {
          var index = res.tapIndex;
          if (index == 0) {
            that.setData({
              sexText: '不限'
            });
          } else if (index == 1) {
            that.setData({
              sexText: '男'
            });
          } else if (index == 2) {
            that.setData({
              sexText: '女'
            });
          }
        }
        
      }
    });
  },
  //输入详细信息
  infoInsert:function(e){
    var that = this;
    that.setData({
      infoText:e.detail.value
    });
  },
  onShareAppMessage: function () {
    return {
      title: '发布消息',
      path: '/pages/release/release'
    }
  }
})