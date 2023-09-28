const RoleService = require('../../service/role/role.service')
class RoleController {
  async queryAllRole(ctx, next) {
    ctx.body = await RoleService.queryAllRole()
  }
  async queryRoleName(ctx, next) {
    ctx.body = await RoleService.queryRoleName()
    const result = await RoleService.queryRoleName()
    const resRoleID = console.log(result)
  }
}

module.exports = new RoleController()
