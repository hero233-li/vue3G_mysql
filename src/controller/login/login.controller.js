const loginService = require('../../service/login/login.service')

const { PRIVATE_KEY } = require('../../config/key/screct')
const jwt = require('jsonwebtoken')

class LoginController {
  /**
   * 手机号登录
   * @param ctx
   * @param next
   * @returns {Promise<void>}
   */
  async iphoneLogin(ctx, next) {
    const { uuid, username } = ctx.user
    const token = jwt.sign({ uuid, username }, PRIVATE_KEY, {
      expiresIn: 24 * 60 * 60,
      algorithm: 'RS256'
    })
    ctx.body = { code: 0, data: { uuid, username, token }, message: '登录成功' }
  }
  async QueryAccountInfo(ctx, next) {
    const { uuid } = ctx.user
    const result = await loginService.getUserInfoById(uuid).then((res) => res[0])
    ctx.body = result
  }
}
module.exports = new LoginController()
