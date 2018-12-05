Page({
  data: {
    sexText:'',//性别
    marriageText:'',//婚姻
    educationText:'',//学历
  },
  //导航切换
  // changeNav: function (e) {
  //   var that = this;
  //   var index = e.currentTarget.dataset.index;
  //   if (that.data.navIndex === index) {
  //     return false;
  //   } else {
  //     that.setData({
  //       navIndex: index
  //     });
  //   }
  // },

  //点击消息 跳转到消息列表页面
  jumpMessage:function(){
    wx.navigateTo({
      url: '../message/message?navIndex=2',
    });
  },
  //点击发布 跳转到发布页面
  jumpRelease:function(){
    wx.navigateTo({
      url: '../release/release',
    });
  },
  //点击确定  保存个人信息
  keepPersonMessage:function(){
    var that = this;
  },


  //性别选择
  sexSelect: function () {
    var that = this;
    wx.showActionSheet({
      itemList: ['未知', '男', '女'],
      success: function (res) {
        if (!res.cancel) {
          var index = res.tapIndex;
          if (index == 0) {
            that.setData({
              sexText: '未知'
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
  //婚姻选择
  marriageSelect: function () {
    var that = this;
    wx.showActionSheet({
      itemList: ['未知', '已婚', '未婚'],
      success: function (res) {
        if (!res.cancel) {
          var index = res.tapIndex;
          if (index == 0) {
            that.setData({
              marriageText: '未知'
            });
          } else if (index == 1) {
            that.setData({
              marriageText: '已婚'
            });
          } else if (index == 2) {
            that.setData({
              marriageText: '未婚'
            });
          }
        }
      }
    });
  },
  //学历
  educationSelect: function () {
    var that = this;
    wx.showActionSheet({
      itemList: ['博士', '硕士', '本科', '大专', '高中', '初中及一下'],
      success: function (res) {
        if (!res.cancel) {
          var index = res.tapIndex;
          if (index == 0) {
            that.setData({
              educationText: '博士'
            });
          } else if (index == 1) {
            that.setData({
              educationText: '硕士'
            });
          } else if (index == 2) {
            that.setData({
              educationText: '本科'
            });
          } else if (index == 3){
            that.setData({
              educationText: '大专'
            });
          } else if (index == 4){
            that.setData({
              educationText: '高中'
            });
          } else if (index == 5){
            that.setData({
              educationText: '初中及一下'
            });
          }
        }
      }
    });
  },


  //分享
  onShareAppMessage: function () {
    return {
      title: '个人中心',
      path: '/pages/psersonal/psersonal'
    }
  }
})