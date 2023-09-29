const KoaRouter = require('@koa/router')
const menuController = require('../controller/menu/menu.controller')
const { verifyAuth } = require('../middleware/login/login.middleware')

const menuRouter = new KoaRouter({
  prefix: '/api/menu'
})
menuRouter.get('/queryAllMenu', verifyAuth, menuController.queryAllMenu)
menuRouter.get('/queryAllMenuGroup', verifyAuth, menuController.queryAllMenuGroup)
menuRouter.get('/queryUserMenu', verifyAuth, menuController.queryUserMenu)
menuRouter.post('/queryList', verifyAuth, menuController.queryListMenu)

module.exports = {
  menuRouter
}
