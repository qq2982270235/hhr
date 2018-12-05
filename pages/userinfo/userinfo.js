Page({
  data: {
    
  },
  //点击沟通 跳转到聊天
  jumpChat:function(){
    wx.navigateTo({
      url: '../chat/chat',
    });
  },
  //关注
  followFriend:function(){
    var that = this;
    wx.showModal({
      title: '关注好友',
      content: '确认要关注此好友吗？',
      confirmText:'关注',
      confirmColor:'#b50029',
      success:function(res){
        if(res.confirm){
          console.log("关注好友");
        }
      }
    })
  },
  //添加好友
  addFriend:function(){
    var that = this;
    wx.showModal({
      title: '添加好友',
      content: '确认要添加此好友吗？',
      confirmText: '添加',
      confirmColor: '#b50029',
      success: function (res) {
        if (res.confirm) {
          console.log("添加好友");
        }
      }
    })
  },
  //分享
  onShareAppMessage: function () {
    return {
      title: '好友信息',
      path: '/pages/userinfo/userinfo'
    }
  }
})