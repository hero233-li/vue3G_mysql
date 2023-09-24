const RoleService = require('../../service/role/role.service')
class RoleController {
  async queryAllRole(ctx, next) {
    ctx.body = await RoleService.queryAllRole()
  }
}

module.exports = new RoleController()
