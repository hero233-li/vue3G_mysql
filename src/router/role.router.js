const KoaRouter = require('@koa/router')
const { verifyAuth } = require('../middleware/login/login.middleware')
const menuController = require('../controller/menu/menu.controller')
const roleController = require('../controller/role/role.controller')
const roleRouter = new KoaRouter({
  prefix: '/api/role'
})

// roleRouter.post('/queryList', verifyAuth, RoleController.queryAllRole)
// roleRouter.post('/roleName', verifyAuth, RoleController.queryRoleName)
roleRouter.post('/queryList', verifyAuth, roleController.queryListRole)

module.exports = {
  roleRouter
}
