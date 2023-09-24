const KoaRouter = require('@koa/router')
const AccountController = require('../controller/account/account.controller')
const { verifyAuth } = require('../middleware/login/login.middleware')
const DepartmentController = require('../controller/department/department.controller')

const departmentRouter = new KoaRouter({
  prefix: '/api/department'
})
// accountRouter.post('/queryList', verifyAuth, AccountController.queryAllAccount)
departmentRouter.post('/queryList', verifyAuth, DepartmentController.queryAllDepartment)
module.exports = {
  departmentRouter
}
