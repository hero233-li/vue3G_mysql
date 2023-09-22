const userService = require('../service/user.service')
const {
  REGISTER_SUCCESS_40002,
  LOGIN_SUCCESS_40003,
  LOGIN_ERROR_ACCOUNT_40004
} = require('../config/error-contanst')
class UserController {
  async create(ctx, next) {
    //获取信息
    const user = ctx.request.body
    const result = await userService.register(user)
    if (result) {
      ctx.app.emit('ok', REGISTER_SUCCESS_40002, ctx)
    }
  }
}
module.exports = new UserController()
