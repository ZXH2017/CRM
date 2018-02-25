// pages/database/database.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    module: [{ id: '1', name: '项目' }, { id: '2', name: '业主客户' }, { id: '3', name: '企业客户' }, { id: '4', name: '站点' }, { id: '5', name: '我的文档' }],
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
          "letter": "B",
          "data": [
            {
              "id": 78,
              "token": "Z7gLOYc8",
              "project_name": "b465",
              "project_type": "65",
              "business_type": "4",
              "data_source": "654",
              "project_collect_time": "0000-00-00 00:00:00",
              "founder": "654",
              "initials": "B"
            }
          ]
        },
        {
          "letter": "C",
          "data": [
            {
              "id": 80,
              "token": "FTtaGC@t",
              "project_name": "测试地区",
              "project_type": "宏站",
              "business_type": "软件类",
              "data_source": "中标单位上传",
              "project_collect_time": "2018-01-18 02:43:00",
              "founder": "实打实大",
              "initials": "C"
            },
            {
              "id": 169,
              "token": "Dd*yIp2i",
              "project_name": "cvvcx",
              "project_type": "宏站",
              "business_type": "通讯类",
              "data_source": "业主上传",
              "project_collect_time": "2018-02-01 00:00:00",
              "founder": "fdfd",
              "initials": "C"
            }
          ]
        },
        {
          "letter": "D",
          "data": [
            {
              "id": 94,
              "token": "p5YDRy@!",
              "project_name": "dsfs",
              "project_type": "基站",
              "business_type": "软件类",
              "data_source": "业主上传",
              "project_collect_time": "2018-01-18 06:29:00",
              "founder": "dsfsdf",
              "initials": "D"
            },
            {
              "id": 164,
              "token": "uiAFhp8w",
              "project_name": "dsd",
              "project_type": "fdf",
              "business_type": "fdfd",
              "data_source": "fdfd",
              "project_collect_time": "0000-00-00 00:00:00",
              "founder": "dffd",
              "initials": "D"
            },
            {
              "id": 166,
              "token": "SVpXZPEv",
              "project_name": "dffd",
              "project_type": "dffd",
              "business_type": "dffd",
              "data_source": "dffd",
              "project_collect_time": "2018-02-01 00:00:00",
              "founder": "fddf",
              "initials": "D"
            },
            {
              "id": 167,
              "token": "nklGaP85",
              "project_name": "dsdsf",
              "project_type": "sdsd",
              "business_type": "sdds",
              "data_source": "dsds",
              "project_collect_time": "2018-01-30 00:00:00",
              "founder": "sdds",
              "initials": "D"
            },
            {
              "id": 170,
              "token": "nFxrNbMQ",
              "project_name": "dfd",
              "project_type": "宏站",
              "business_type": "通讯类",
              "data_source": "中标单位上传",
              "project_collect_time": "2018-02-01 00:00:00",
              "founder": "dffd",
              "initials": "D"
            }
          ]
        },
        {
          "letter": "F",
          "data": [
            {
              "id": 165,
              "token": "o*IgEFPz",
              "project_name": "ffggf",
              "project_type": "fdf",
              "business_type": "dfdf",
              "data_source": "dfdf",
              "project_collect_time": "2018-01-31 00:00:00",
              "founder": "dfdf",
              "initials": "F"
            },
            {
              "id": 175,
              "token": "$dHMDkgj",
              "project_name": "fgfd",
              "project_type": "宏站",
              "business_type": "通讯类",
              "data_source": "中标单位上传",
              "project_collect_time": "2018-02-01 00:00:00",
              "founder": "fddf",
              "initials": "F"
            }
          ]
        },
        {
          "letter": "H",
          "data": [
            {
              "id": 79,
              "token": "h5v21WV$",
              "project_name": "好的",
              "project_type": "5",
              "business_type": "5",
              "data_source": "55",
              "project_collect_time": "2018-01-15 00:00:00",
              "founder": "5",
              "initials": "H"
            },
            {
              "id": 87,
              "token": "IZB$61GD",
              "project_name": "好看国",
              "project_type": "基站",
              "business_type": "软件类",
              "data_source": "业主上传",
              "project_collect_time": "2018-01-18 03:38:00",
              "founder": "挂号费的",
              "initials": "H"
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
          "letter": "L",
          "data": [
            {
              "id": 160,
              "token": "pFQgp$xU",
              "project_name": "老友",
              "project_type": "宏站",
              "business_type": "软件类",
              "data_source": "业主上传",
              "project_collect_time": "2018-02-01 01:31:00",
              "founder": "我",
              "initials": "L"
            },
            {
              "id": 168,
              "token": "zGbIXmrV",
              "project_name": "来",
              "project_type": "驻地网",
              "business_type": "软件类",
              "data_source": "业务员上传",
              "project_collect_time": "2018-02-01 06:43:00",
              "founder": "体会过",
              "initials": "L"
            }
          ]
        },
        {
          "letter": "R",
          "data": [
            {
              "id": 83,
              "token": "7VNKQxQ0",
              "project_name": "rwerere",
              "project_type": "宏站",
              "business_type": "通讯类",
              "data_source": "业务员上传",
              "project_collect_time": "2018-01-18 03:26:00",
              "founder": "ewrwer",
              "initials": "R"
            },
            {
              "id": 153,
              "token": "GMkj4aLo",
              "project_name": "rtret",
              "project_type": "基站",
              "business_type": "软件类",
              "data_source": "业主上传",
              "project_collect_time": "2018-01-23 02:53:00",
              "founder": "fdgdf",
              "initials": "R"
            }
          ]
        },
        {
          "letter": "S",
          "data": [
            {
              "id": 84,
              "token": "P9hRwQba",
              "project_name": "撒旦as",
              "project_type": "驻地网",
              "business_type": "通讯类",
              "data_source": "中标单位上传",
              "project_collect_time": "2018-01-18 03:29:00",
              "founder": "阿斯顿",
              "initials": "S"
            },
            {
              "id": 85,
              "token": "LfbV3Um@",
              "project_name": "撒大声地",
              "project_type": "基站",
              "business_type": "通讯类",
              "data_source": "业务员上传",
              "project_collect_time": "2018-01-18 03:30:00",
              "founder": "撒旦",
              "initials": "S"
            },
            {
              "id": 112,
              "token": "1OqMFi8r",
              "project_name": "S3GZ2014120809GBSL/2014年中国联通（集采）WCDMA九期项目--广东子项目",
              "project_type": "基站",
              "business_type": "通讯类",
              "data_source": "分包",
              "project_collect_time": "2018-01-20 00:00:00",
              "founder": "陈鸿",
              "initials": "S"
            },
            {
              "id": 120,
              "token": "Ze0YNvrc",
              "project_name": "S3GZ2017022010FDDL/2017年中国联通（集采）LTE项目-广东子项目",
              "project_type": "基站",
              "business_type": "通讯类",
              "data_source": "分包",
              "project_collect_time": "2018-01-20 00:00:00",
              "founder": "陈鸿",
              "initials": "S"
            }
          ]
        },
        {
          "letter": "W",
          "data": [
            {
              "id": 93,
              "token": "3@0@i9rI",
              "project_name": "wwwwwwwwwwww",
              "project_type": "宏站",
              "business_type": "软件类",
              "data_source": "业务员上传",
              "project_collect_time": "2018-01-18 06:28:00",
              "founder": "asdasd",
              "initials": "W"
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
        },
        {
          "letter": "Z",
          "data": [
            {
              "id": 127,
              "token": "v6FfI2mY",
              "project_name": "中国移动2016至2017年通信设备安装工程施工服务集中采购框架协议（设备施工：一级集采）",
              "project_type": "基站",
              "business_type": "通讯类",
              "data_source": "招投标",
              "project_collect_time": "2018-01-20 00:00:00",
              "founder": "陈鸿",
              "initials": "Z"
            },
            {
              "id": 128,
              "token": "DvUvomQI",
              "project_name": "中国移动2016至2017年通信设备安装工程施工服务集中采购框架协议（设备施工：一级集采）",
              "project_type": "基站",
              "business_type": "通讯类",
              "data_source": "招投标",
              "project_collect_time": "2018-01-21 00:00:00",
              "founder": "陈鸿",
              "initials": "Z"
            }
          ]
        },
        {
          "letter": "#",
          "data": [
            {
              "id": 72,
              "token": "0ep!KbWs",
              "project_name": "4",
              "project_type": "64",
              "business_type": "654",
              "data_source": "654",
              "project_collect_time": "2018-01-26 00:00:00",
              "founder": "46",
              "initials": "#"
            },
            {
              "id": 115,
              "token": "cS@YxA2M",
              "project_name": "2015年中国联通（集采）WCDMA项目-广东子项目",
              "project_type": "基站",
              "business_type": "通讯类",
              "data_source": "分包",
              "project_collect_time": "2018-01-20 00:00:00",
              "founder": "陈鸿",
              "initials": "#"
            },
            {
              "id": 118,
              "token": "Sb8crQlI",
              "project_name": "2016年中国移动（集采）TD-LTE四期项目-广东子项目",
              "project_type": "基站",
              "business_type": "通讯类",
              "data_source": "分包",
              "project_collect_time": "2018-01-20 00:00:00",
              "founder": "陈鸿",
              "initials": "#"
            },
            {
              "id": 125,
              "token": "xPRu9Sxx",
              "project_name": "2016-2017年网络工程服务电信工程专业监理",
              "project_type": "基站",
              "business_type": "通讯类",
              "data_source": "招投标",
              "project_collect_time": "2018-01-20 00:00:00",
              "founder": "陈鸿",
              "initials": "#"
            },
            {
              "id": 136,
              "token": "lqsiQBzL",
              "project_name": "2016-2017年网络工程无线网主设备施工",
              "project_type": "基站",
              "business_type": "通讯类",
              "data_source": "招投标",
              "project_collect_time": "2018-01-29 00:00:00",
              "founder": "陈鸿",
              "initials": "#"
            }
          ]
        }
      ],
      "msg": "成功"
    },
    currentItem:"1"
  },
  // 点击导航选择查看对应模块列表
  partClick: function (options) {
    var that = this;
    var id = options.currentTarget.dataset.id;
    that.setData({
      'currentItem': id
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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