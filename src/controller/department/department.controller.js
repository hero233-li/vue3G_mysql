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
}

module.exports = new DepartmentController()
