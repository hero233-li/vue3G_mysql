const loginService = require('../service/login.service')
const { LOGIN_ERROR_ACCOUNT_40004, LOGIN_SUCCESS_40003 } = require('../config/error-contanst')

/**
 * 登录空中
 * 判断账号密是否为空
 * 判断查询的手机号、邮箱、账号的uuid是否存在
 * 查询密码是否一致
 * 颁发token
 */
class LoginController {
  /**
   * 手机号登录
   * @param ctx
   * @param next
   * @returns {Promise<void>}
   */
  async iphoneLogin(ctx, next) {
    const userLoginInfo = ctx.request.body
    console.log(userLoginInfo)
    const result = await loginService.InquireAccountIPhone(userLoginInfo)
    if (result.length < 1) {
      ctx.app.emit('error', LOGIN_ERROR_ACCOUNT_40004, ctx)
    } else {
      ctx.app.emit('ok', LOGIN_SUCCESS_40003, ctx)
    }
  }
}
module.exports = new LoginController()
