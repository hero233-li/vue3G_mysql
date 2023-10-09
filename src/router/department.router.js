const KoaRouter = require('@koa/router')
const AccountController = require('../controller/account/account.controller')
const { verifyAuth } = require('../middleware/login/login.middleware')
const DepartmentController = require('../controller/department/department.controller')
const menuController = require('../controller/menu/menu.controller')

const departmentRouter = new KoaRouter({
  prefix: '/api/department'
})
departmentRouter.post('/queryList', verifyAuth, DepartmentController.queryListDepartment)
departmentRouter.post('/queryGroup', verifyAuth, DepartmentController.queryGroupDepartment)
departmentRouter.post('/editStatus', verifyAuth, DepartmentController.editStatusDepartment)

module.exports = {
  departmentRouter
}
