const {
  LOGIN_SUCCESS_40003,
  LOGIN_ERROR_ACCOUNT_40004,
  NULL_ERROR_40005,
  IPHONE_NULL_EXIST_40006,
  EMAIL_NULL_EXIST_40007,
  ACCOUNT_NUMBER_NULL_EXIST_40008,
  PASSWORD_ERROR_40009,
  NOT_LOGIN_40010
} = require('../../config/error-contanst')
const { app } = require('../../app')
app.on('LoginError', (error, ctx) => {
  let code = 0
  let message = ''
  let description = ''
  switch (error) {
    /**
     * 40100-登录问题
     */
    case LOGIN_ERROR_ACCOUNT_40004:
      code = 40004
      message = '账号或密码错误'
      description = ''
      break
    case NULL_ERROR_40005:
      code = 40005
      message = '请求数据为空'
      description = ''
      break
    case IPHONE_NULL_EXIST_40006:
      code = 40006
      message = '手机号不存在'
      description = ''
      break
    case EMAIL_NULL_EXIST_40007:
      code = 40007
      message = '邮箱号不存在'
      description = ''
      break
    case ACCOUNT_NUMBER_NULL_EXIST_40008:
      code = 40008
      message = '账号不存在'
      description = ''
      break
    case PASSWORD_ERROR_40009:
      code = 40009
      message = '密码错误'
      description = ''
      break
    case NOT_LOGIN_40010:
      code = 40010
      message = '用户未登录'
      description = ''
      break
  }
  ctx.body = { code, message, description }
}),
  app.on('LoginOk', (error, ctx) => {
    let code = 0
    let message = ''
    let description = ''
    switch (error) {
      /**
       * 40100-成功返回
       */

      case LOGIN_SUCCESS_40003:
        code = 40003
        message = '用户登录成功'
        description = ''
        break
    }
    ctx.body = { code, message, description }
  })
