var host = "http://192.168.0.93:90"

var config = {
  // 下面的地址配合 Server 工作
  host,
  //获取项目列表
  project_list: `${host}/customer/index/appProjectList`,
};
module.exports = config;