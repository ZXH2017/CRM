var host = "http://192.168.0.93:90"

var config = {
  // 下面的地址配合 Server 工作
  host,
  //获取项目列表
  project_list: `${host}/customer/index/appProjectList`,

  //获取业主客户列表
  owner_list: `${host}/customer/index/appOwnerList`,

  //获取企业客户列表
  company_list: `${host}/customer/index/appBidCompanyList`,

  //获取站点列表
  site_list: `${host}/customer/index/appSiteList`,
  
  //获取我的文档列表
  file_list: `${host}/customer/index/appMyDocument`,
};
module.exports = config;