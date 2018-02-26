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
    proList: {
      "code": 200,
      "data": [
        {
          "letter": "A",
          "data": [
            {
              "id": 154,
              "token": "52gSttT1",
              "project_name": "aaxxn",
              "project_type": "基站",
              "business_type": "软件类",
              "data_source": "业务员上传",
              "project_collect_time": "2018-01-23 11:02:00",
              "founder": "xxnjq",
              "initials": "A"
            },
            {
              "id": 162,
              "token": "lq7thhEO",
              "project_name": "a测试图片",
              "project_type": "驻地网",
              "business_type": "软件类",
              "data_source": "业务员上传",
              "project_collect_time": "2018-02-01 02:05:00",
              "founder": "gvc",
              "initials": "A"
            },
            {
              "id": 173,
              "token": "SGDoc2!p",
              "project_name": "A_ZXH2017",
              "project_type": "基站",
              "business_type": "通讯类",
              "data_source": "业务员上传",
              "project_collect_time": "2018-02-01 09:33:00",
              "founder": "SDAS ",
              "initials": "A"
            },
            {
              "id": 174,
              "token": "!lgH52@I",
              "project_name": "AZ_a_small_insect",
              "project_type": "基站",
              "business_type": "软件类",
              "data_source": "业主上传",
              "project_collect_time": "2018-02-01 09:34:00",
              "founder": "ASDA",
              "initials": "A"
            }
          ]
        },
        {
          "letter": "K",
          "data": [
            {
              "id": 157,
              "token": "UHNtan9W",
              "project_name": "可口可乐了看看",
              "project_type": "驻地网",
              "business_type": "软件类",
              "data_source": "业主上传",
              "project_collect_time": "2018-01-24 02:39:00",
              "founder": "兔兔",
              "initials": "K"
            }
          ]
        },
        {
          "letter": "X",
          "data": [
            {
              "id": 81,
              "token": "J7C!$7D1",
              "project_name": "项目名称",
              "project_type": "项目类型",
              "business_type": "业务类型",
              "data_source": "数据来源",
              "project_collect_time": "0000-00-00 00:00:00",
              "founder": "创建人",
              "initials": "X"
            },
            {
              "id": 82,
              "token": "OZgi96*0",
              "project_name": "项目名称",
              "project_type": "项目类型",
              "business_type": "业务类型",
              "data_source": "数据来源",
              "project_collect_time": "0000-00-00 00:00:00",
              "founder": "创建人",
              "initials": "X"
            },
            {
              "id": 86,
              "token": "2NjYV1Z8",
              "project_name": "项目名称",
              "project_type": "项目类型",
              "business_type": "业务类型",
              "data_source": "数据来源",
              "project_collect_time": "0000-00-00 00:00:00",
              "founder": "创建人",
              "initials": "X"
            }
          ]
        }
      ],
      "msg": "成功"
    },
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
          that.setData = ({
            proList: res.data
          })
        }
        console.log(res.data);
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