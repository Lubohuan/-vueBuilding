import request from '@/utils/request'
// const baseUrl = 'http://172.16.7.135:8081';
// const baseUrl = 'http://172.16.7.135';
const baseUrl = 'http://autobuild.jiguantong.com/bimScheduleService';
// 查询统计单位接口
export function getUnitPage(data) {
  return request({
    url: baseUrl + '/basicData/getUnitPage',
    method: 'get',
    params: data
  })
}
// 添加统计单位接口
export function addUnit(data) {
  return request({
    url: baseUrl + '/basicData/addUnit',
    method: 'post',
    data: data
  })
}
// 修改统计单位接口
export function updateUnitById(data) {
  return request({
    url: baseUrl + '/basicData/updateUnitById',
    method: 'put',
    data: data
  })
}
// 删除统计单位接口
export function deleteUnitById(data) {
  return request({
    url: baseUrl + '/basicData/deleteUnitById/' + data,
    method: 'delete',
  })
}
// 删除分部分项接口
export function deleteSubsectionById(data) {
  return request({
    url: baseUrl + '/basicData/deleteSubsectionById/' + data,
    method: 'delete',
  })
}
// 分页查询任务预警记录
export function getTaskWarningLogPage(data) {
  return request({
    url: baseUrl + '/warning/getTaskWarningLogPage',
    method: 'get',
    params: data
  })
}
// 分页查询进度预警
export function getTaskWarningPage(data) {
  return request({
    url: baseUrl + '/warning/getTaskWarningPage',
    method: 'get',
    params: data
  })
}
// 解除任务预警
export function relieveTaskWarning(data) {
  return request({
    url: baseUrl + '/warning/relieveTaskWarning',
    method: 'put',
    data: data
  })
}
// 任务督办
export function urgeTask(data) {
  return request({
    url: baseUrl + '/warning/urgeTask',
    method: 'put',
    data: data
  })
}
// 查询所在组织可用的分部分项信息
export function getSubsectionPage(data) {
  return request({
    url: baseUrl + '/basicData/listSubsection',
    method: 'get',
    params: data
  })
}
// 添加分部分项
export function addSubsection(data) {
  return request({
    url: baseUrl + '/basicData/addSubsection',
    method: 'post',
    data: data
  })
}
// 修改分部分项
export function updateSubsection(data) {
  return request({
    url: baseUrl + '/basicData/updateSubsection',
    method: 'put',
    data: data
  })
}
// 分页查询进度计划
export function getConstructPlanPage(data) {
  return request({
    url: baseUrl + '/task/getConstructPlanPage',
    method: 'get',
    params: data
  })
}
// 添加施工记录
export function addConstructLog(data) {
  return request({
    url: baseUrl + '/task/addConstructLog',
    method: 'post',
    data: data
  })
}
// 添加进度计划
export function addConstructPlan(data) {
  return request({
    url: baseUrl + '/task/addConstructPlan',
    method: 'post',
    data: data
  })
}
// 启用施工进度计划
export function startConstructPlan(data) {
  return request({
    url: baseUrl + '/task/startConstructPlan/' + data,
    method: 'put'
  })
}
// 禁用施工进度计划
export function stopVisualStatItem(data) {
  return request({
    url: baseUrl + '/task/stopVisualStatItem/' + data,
    method: 'put'
  })
}
// 删除施工进度计划
export function deleteConstructPlanById(data) {
  return request({
    url: baseUrl + '/task/deleteConstructPlanById/' + data,
    method: 'delete',
  })
}
// 根据父ID查询施工区域
export function listRegion(data) {
  return request({
    url: baseUrl + '/project/listRegion',
    method: 'get',
    params: data
  })
}
// 添加施工区域
export function addRegion(data) {
  return request({
    url: baseUrl + '/project/addRegion',
    method: 'post',
    data: data
  })
}
// 添加形象进度统计项
export function addVisualStatItem(data) {
  return request({
    url: baseUrl + '/project/addVisualStatItem',
    method: 'post',
    data: data
  })
}
// 删除（逻辑删除）施工区域
export function deleteRegionById(data) {
  return request({
    url: baseUrl + '/project/deleteRegionById/' + data,
    method: 'delete',
  })
}
// 分页查询形象进度统计项
export function getVisualStatItemPage(data) {
  return request({
    url: baseUrl + '/project/getVisualStatItemPage',
    method: 'get',
    params: data
  })
}
// 启用形象进度统计项
export function startVisualStatItem(data) {
  return request({
    url: baseUrl + '/project/startVisualStatItem/' + data,
    method: 'get'
  })
}
// 禁用形象进度统计项
export function stopVisualStatItems(data) {
  return request({
    url: baseUrl + '/project/stopVisualStatItem/' + data,
    method: 'get'
  })
}
// 修改施工区域
export function updateRegion(data) {
  return request({
    url: baseUrl + '/project/updateRegion',
    method: 'put',
    data:data
  })
}
// 修改进度计划
export function updateConstructPlan(data) {
  return request({
    url: baseUrl + '/task/updateConstructPlan',
    method: 'put',
    data:data
  })
}
// 分页查询形象进度详请信息
export function getConstructPlanDetail(data) {
  return request({
    url: baseUrl + '/task/getConstructPlanDetail',
    method: 'get',
    params:data
  })
}
// 获取分部分项统计报表
export function getSubsectionReport(data) {
  return request({
    url: baseUrl + '/workStat/getSubsectionReport',
    method: 'get',
    params:data
  })
}
// 分页查询进度监视信息
export function getVisualStatMonitorPage(data) {
  return request({
    url: baseUrl + '/workStat/getVisualStatMonitorPage',
    method: 'get',
    params:data
  })
}
// 获取形象进度统计报表
export function getVisualStatReport(data) {
  return request({
    url: baseUrl + '/workStat/getVisualStatReport',
    method: 'get',
    params:data
  })
}
// 查询形象进度进展信息列表(指挥中心形象进度进展)
export function getVisualStatProgressPage(data) {
  return request({
    url: baseUrl + '/workStat/getVisualStatProgressPage',
    method: 'get',
    params:data
  })
}
// 查询项目下拉框
export function listOrgInfo(data) {
  return request({
    url: baseUrl + '/system/listOrgInfo',
    method: 'get',
    params:data
  })
}
// 查询项目类型
export function listProjectType(data) {
  return request({
    url: baseUrl + '/basicData/listProjectType',
    method: 'get',
    params:data
  })
}
// 删除项目类型
export function deleteProjectType(data) {
  return request({
    url: baseUrl + '/basicData/deleteProjectType/' + data,
    method: 'delete',
  })
}
// 添加项目类型
export function addProjectType(data) {
  return request({
    url: baseUrl + '/basicData/addProjectType',
    method: 'post',
    data:data
  })
}
// 修改项目类型
export function updateProjectType(data) {
  return request({
    url: baseUrl + '/basicData/updateProjectType',
    method: 'post',
    data:data
  })
}
//分页查询形象进度任务详请信息(形象进度任务管理分页查询)
export function getPlanTaskPage(data) {
  return request({
    url: baseUrl + '/task/getPlanTaskPage',
    method: 'get',
    params:data
  })
}
//根据id查询进度计划详情(形象进度任务管理)
export function getConstructPlanDetailById(data) {
  return request({
    url: baseUrl + '/task/getConstructPlanDetailById/'+ data,
    method: 'get'
  })
}
//根据进度计划ID分页查询施工日志信息(形象进度任务管理)
export function getConstructLogPage(data) {
  return request({
    url: baseUrl + '/task/getConstructLogPage',
    method: 'get',
    params:data
  })
}
// 修改形象进度统计项
export function updateVisualStatItemById(data) {
  return request({
    url: baseUrl + '/project/updateVisualStatItemById',
    method: 'post',
    data:data
  })
}
//根据id查询进度计划详情
export function getConstructPlanById(data) {
  return request({
    url: baseUrl + '/task/getConstructPlanById/' + data,
    method: 'get'
  })
}
//获取当前登录用户所在组织中的所有用户
export function listUserInfo(data) {
  return request({
    url: baseUrl + '/system/listUserInfo',
    method: 'get',
    params:data
  })
}
//首页表盘
export function getDashBoard(data) {
  return request({
    url: baseUrl + '/workStat/getDashBoard',
    method: 'get',
    params:data
  })
}
//切换用户当前所在的项目
export function changeOrg(data) {
  return request({
    url: baseUrl + '/system/changeOrg',
    method: 'get',
    params:data
  })
}