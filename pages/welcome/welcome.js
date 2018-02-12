Page({
  onLoad: function () {
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          start_img: res.windowHeight
        })
      },
    })
    setTimeout(function(){
      wx.redirectTo({
        url: '../index/index',
      })
    },500)

  }
})
