var msgs = [
  { id: "msg1", message: '去结婚吧', messageType: 1, url: '../../images/lyf.png' },
  { id: "msg2", message: '走！', messageType: 0, url: '../../images/5.png' },
  { id: "msg3", message: '真的么？？？我有点不敢相信自己的眼睛', messageType: 1, url: '../../images/lyf.png' },
  { id: "msg4", message: '哈哈哈，当然是假的，我一定是在做梦', messageType: 0, url: '../../images/5.png' },
  { id: "msg5", message: '是的，孩子，醒醒吧，有多少分量自己还不清楚呢', messageType: 1, url: '../../images/lyf.png' },
  { id: "msg6", message: ':)', messageType: 0, url: '../../images/5.png' },
  { id: "msg7", message: '滚滚滚，别来烦老娘', messageType: 1, url: '../../images/lyf.png' },
  { id: "msg8", message: '女神的威怒', messageType: 0, url: '../../images/5.png' },
  { id: "msg9", message: '屌丝也配有女神', messageType: 1, url: '../../images/lyf.png' },
  { id: "msg10", message: '你这么说就有点不对了。。。', messageType: 0, url: '../../images/5.png' },
  { id: "msg11", message: '实话实说，等你变成高富帅再说吧', messageType: 1, url: '../../images/lyf.png' },
  { id: "msg12", message: '高是不可能了，变富吧，哈哈哈哈', messageType: 0, url: '../../images/5.png' }
]

Page({
  data: {
    messages: [],         // 聊天记录
    msg: '',              // 当前输入
    scrollTop: 0,         // 页面的滚动值
    socketOpen: false,    // websocket是否打开
    lastId: '',           // 最后一条消息的ID
    isFirstSend: true     // 是否第一次发送消息(区分历史和新加)
  },
  onLoad:function(){
    var that = this;
    that.setData({
      messages: msgs
    });
  },
  onShareAppMessage: function () {
    return {
      title: '聊天',
      path: '/pages/chat/chat'
    }
  }
})