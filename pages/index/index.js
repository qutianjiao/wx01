//Page Object
Page({
  data: {
    // 导航 数组
    catesList:[],
    // 楼层数据
    floorList:[],
    name:"F1",
  },
  //页面开始加载 就会触发
  onLoad: function () {
    var _this = this;
    //1、引用数据库
    const db = wx.cloud.database({
      //这个是环境ID不是环境名称
      //env: 'qutianjiao-bd871'
    })
    //2、开始查询数据了  news对应的是集合的名称
    db.collection('test').get({
      //如果查询成功的话
      success: res => {
        //这一步很重要，给ne赋值，没有这一步的话，前台就不会显示值
        this.setData({
          name: res.name
        })
      },
      fail:res => {
        console.log(name)
      }
      
    })
  },

  handleCalendar(e)
  {
    // console.log(e);
  },
  dayClick:function(e) {
    console.log(event.detail);  
  },
  viewClick:function(e)
  {
    wx.navigateTo({
      url: '/pages/reserve/index',
    });
    console.log("111");
  }
});