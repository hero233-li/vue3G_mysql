const menuService = require('../../service/menu/menu.service')
require('../../service/login/login.service')
class MenuController {
  async queryAllMenu(ctx, next) {
    ctx.body = await menuService.queryAllMenu()
  }
  async queryAllMenuGroup(ctx, next) {
    ctx.body = await menuService.queryAllMenuGroup()
  }
  async queryUserMenu(ctx, next) {
    const uuid = ctx.user.uuid

    ctx.body = await menuService.queryUserMenu(uuid)
  }
}

module.exports = new MenuController()
