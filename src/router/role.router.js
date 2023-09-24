const KoaRouter = require('@koa/router')
const RoleController = require('../controller/role/role.controller')
const { verifyAuth } = require('../middleware/login/login.middleware')

const roleRouter = new KoaRouter({
  prefix: '/api/role'
})
// accountRouter.post('/queryList', verifyAuth, AccountController.queryAllAccount)
// accountRouter.delete('/deleteAccount', verifyAuth, AccountController.removeAccount)
roleRouter.post('/queryList', verifyAuth, RoleController.queryAllRole)
module.exports = {
  roleRouter
}
