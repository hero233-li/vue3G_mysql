const userService = require('../../service/register/user.service')
const { REGISTER_SUCCESS_40002 } = require('../../config/error-contanst')
class UserController {
  async create(ctx, next) {
    //获取信息
    const user = ctx.request.body
    const result = await userService.register(user)
    if (result) {
      ctx.app.emit('registerOk', REGISTER_SUCCESS_40002, ctx)
    }
  }
}
module.exports = new UserController()
