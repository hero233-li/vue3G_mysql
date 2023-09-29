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
  async queryListMenu(ctx, next) {
    const searchInfo = ctx.request.body
    const list = await menuService.queryListMenu(searchInfo)
    const totalCount = await menuService.queryCountMenu()
    ctx.body = {
      list,
      totalCount
    }
  }
}

module.exports = new MenuController()
