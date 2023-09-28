const {
  NULL_ERROR_40005,
  IPHONE_NULL_EXIST_40006,
  EMAIL_NULL_EXIST_40007,
  ACCOUNT_NUMBER_NULL_EXIST_40008,
  PASSWORD_ERROR_40009,
  NOT_LOGIN_40010
} = require('../../config/error-contanst')
const loginService = require('../../service/login/login.service')
const { encryptionMD5 } = require('../../utils/encryptionMD5')
const jwt = require('jsonwebtoken')
const { PUBLIC_KEY } = require('../../config/key/screct')
/**
 * 判断账号密是否为空
 * 判断查询的手机号、邮箱、账号的uuid是否存在
 * 查询密码是否一致
 * @param ctx
 * @param next
 * @returns {Promise<void>}
 */
const verifyLogin = async (ctx, next) => {
  if (JSON.stringify(ctx.request.body) === '{}') {
    return ctx.app.emit('LoginError', NULL_ERROR_40005, ctx)
  }
  const user = ctx.request.body

  const { iphone, email, account, password } = user.accountData
  let Current = 0
  let users = {}
  if (iphone) {
    Current = 1
    users = await loginService.InquireUserIphone(iphone)
  } else if (email) {
    Current = 2
    users = await loginService.InquireUserEmail(email)
  } else if (account) {
    Current = 3
    users = await loginService.InquireUserAccount(account)
  }
  if (!user) {
    return ctx.app.emit('LoginError', NULL_ERROR_40005, ctx)
  } else if (Current === 1 && (await loginService.InquireUserIphone(iphone)).length < 1) {
    return ctx.app.emit('LoginError', IPHONE_NULL_EXIST_40006, ctx)
  } else if (Current === 2 && (await loginService.InquireUserEmail(email)).length < 1) {
    return ctx.app.emit('LoginError', EMAIL_NULL_EXIST_40007, ctx)
  } else if (Current === 3 && (await loginService.InquireUserAccount(account))?.length < 1) {
    return ctx.app.emit('LoginError', ACCOUNT_NUMBER_NULL_EXIST_40008, ctx)
  } else if (encryptionMD5(password) !== users[0].userpwd) {
    return ctx.app.emit('LoginError', PASSWORD_ERROR_40009, ctx)
  }
  ctx.user = users[0]
  await next()
}

const verifyAuth = async (ctx, next) => {
  const authorization = ctx.headers.authorization
  try {
    const token = authorization.replace('Bearer', '')
    const result = jwt.verify(token, PUBLIC_KEY, {
      algorithms: ['RS256']
    })
    ctx.user = result
    await next()
  } catch (error) {
    ctx.app.emit('LoginError', NOT_LOGIN_40010, ctx)
  }
}

module.exports = {
  verifyLogin,
  verifyAuth
}
