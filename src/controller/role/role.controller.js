const RoleService = require('../../service/role/role.service')
const menuService = require('../../service/menu/menu.service')
class RoleController {
  async queryAllRole(ctx, next) {
    ctx.body = await RoleService.SQLQueryAllRole()
  }
  async queryRoleName(ctx, next) {
    ctx.body = await RoleService.queryRoleName()
    const result = await RoleService.SQLQueryRoleName()
    const resRoleID = console.log(result)
  }
  async queryListRole(ctx, next) {
    const searchInfo = ctx.request.body
    const list = await RoleService.SQLQueryListRole(searchInfo)
    const totalCount = await RoleService.SQLQueryCountRole()
    ctx.body = {
      list,
      totalCount
    }
  }
}

module.exports = new RoleController()
