// pages/database/database.js
const project_list = require('../../config').project_list;
console.log(project_list)

Page({

  /**
   * 页面的初始数据
   */
  data: {
    modules: [{ id: '1', name: '项目' }, { id: '2', name: '业主客户' }, { id: '3', name: '企业客户' }, { id: '4', name: '站点' }, { id: '5', name: '我的文档' }],
    currentItem: "1",
    proList: {},
  },
  // 点击导航选择查看对应模块列表
  partClick: function (options) {
    var that = this;
    var id = options.currentTarget.dataset.id;
    that.setData({
      'currentItem': id
    })
  },

  getProjectListMethod: function () {
    var that = this;
    wx.request({
      url: project_list,
      method: "GET",
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        if (res.data.code == 200) {
          that.setData({
            proList: res.data
          })
        }
      },
      fail: function (res) {
        console.log(res)
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    that.getProjectListMethod();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})