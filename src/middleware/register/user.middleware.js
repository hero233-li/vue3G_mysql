const userService = require('../../service/register/user.service')
const { IPHONE_EXIST_40001 } = require('../../config/error-contanst')
const { encryptionMD5 } = require('../../utils/encryptionMD5')
/**
 * 数据验证
 * @param ctx
 * @param next
 * @returns {Promise<void>}
 */
const verifyUser = async (ctx, next) => {
  const user = ctx.request.body

  /**
   * 数据库操作
   * 注册判断手机号存在
   * @type {*}
   */
  const iphoneUUID = await userService.InquireIphone(user.iphone)
  if (iphoneUUID.length > 0) {
    return ctx.app.emit('registerError', IPHONE_EXIST_40001, ctx)
  }
  await next()
}
/**
 * 密码加密
 */
const encryptionPwd = async (ctx, next) => {
  const { password } = ctx.request.body

  ctx.request.body.password = encryptionMD5(password)

  await next()
}

module.exports = {
  verifyUser,
  encryptionPwd
}
