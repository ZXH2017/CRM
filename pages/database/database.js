// pages/database/database.js
const project_list = require('../../config').project_list;
const owner_list = require('../../config').owner_list;
const company_list = require('../../config').company_list;
const site_list = require('../../config').site_list;
const file_list = require('../../config').file_list;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    modules: [{ id: '1', name: '项目' }, { id: '2', name: '业主客户' }, { id: '3', name: '企业客户' }, { id: '4', name: '站点' }, { id: '5', name: '我的文档' }],
    currentItem: "1",
    proList: {},
    show: [true],
  },
  // 点击导航选择查看对应模块列表
  partClick: function (options) {
    var that = this;
    var id = options.currentTarget.dataset.id;
    var show = [];

    for (var i = 0; i < 5; i++) {
      if (i == (id - 1)) {
        show[i] = true;
      } else {
        show[i] = false;
      }
    }
    that.setData({
      'currentItem': id,
      show: show
    })
  },
  //获取项目列表
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
  //获取业主客户列表
  getOwnerListMethod: function () {
    var that = this;
    wx.request({
      url: owner_list,
      method: "GET",
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        if (res.data.code == 200) {
          that.setData({
            ownerList: res.data
          })
        }
      },
      fail: function (res) {
        console.log(res)
      }
    })
  },
  //获取企业客户列表
  getCompanyListMethod: function () {
    var that = this;
    wx.request({
      url: company_list,
      method: "GET",
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        if (res.data.code == 200) {
          that.setData({
            companyList: res.data
          })
        }
      },
      fail: function (res) {
        console.log(res)
      }
    })
  },
  //获取站点列表
  getSiteListMethod: function () {
    var that = this;
    wx.request({
      url: site_list,
      method: "GET",
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        if (res.data.code == 200) {
          that.setData({
            siteList: res.data
          })
        }
      },
      fail: function (res) {
        console.log(res)
      }
    })
  },
  //获取站点列表
  getFileListMethod: function () {
    var that = this;
    wx.request({
      url: file_list,
      method: "GET",
      header: {
        'content-type': 'application/json' // 默认值
      },
      data: { user: 'admin' },
      success: function (res) {
        if (res.data.code == 200) {
          that.setData({
            fileList: res.data
          })
          console.log(res)
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
    that.getProjectListMethod();//获取项目列表
    that.getOwnerListMethod();
    that.getCompanyListMethod();
    that.getSiteListMethod();
    that.getFileListMethod();
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