const KoaRouter = require('@koa/router')
const RoleController = require('../controller/role/role.controller')
const { verifyAuth } = require('../middleware/login/login.middleware')

const roleRouter = new KoaRouter({
  prefix: '/api/role'
})

roleRouter.post('/queryList', verifyAuth, RoleController.queryAllRole)
roleRouter.post('/roleName', verifyAuth, RoleController.queryRoleName)

module.exports = {
  roleRouter
}
