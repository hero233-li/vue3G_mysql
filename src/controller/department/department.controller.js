const DepartmentService = require('../../service/department/department.service')
class DepartmentController {
  async queryAllDepartment(ctx, next) {
    ctx.body = await DepartmentService.queryAllDepartment()
  }
}

module.exports = new DepartmentController()
