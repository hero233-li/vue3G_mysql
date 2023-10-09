const DepartmentService = require('../../service/department/department.service')
class DepartmentController {
  async queryListDepartment(ctx, next) {
    const searchInfo = ctx.request.body
    const Arraylist = await DepartmentService.SQLQueryAllDepartment(searchInfo)
    const totalCount = await DepartmentService.SQLQueryCountDepartment()
    const list = Object.values(Arraylist)
    ctx.body = {
      list,
      totalCount
    }
  }
  async queryGroupDepartment(ctx, next) {
    ctx.body = await DepartmentService.SQLQueryGroupDepartment()
  }
  async editStatusDepartment(ctx, next) {
    const statusInfo = ctx.request.body
    await DepartmentService.SQLEditStatusDepartment(statusInfo)
    ctx.body = { code: 0, message: '修改成功' }
  }
}

module.exports = new DepartmentController()
