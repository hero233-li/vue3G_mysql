// const app = require('../app')
const {
  IPHONE_EXIST_40001,
  SUCCESS_0,
  REGISTER_SUCCESS_40002,
  LOGIN_SUCCESS_40003,
  LOGIN_ERROR_ACCOUNT_40004
} = require('../config/error-contanst')
const { app } = require('../app')
app.on('error', (error, ctx) => {
  let code = 0
  let message = ''
  let description = ''
  switch (error) {
    /**
     * 40100-登录问题
     */
    case IPHONE_EXIST_40001:
      code = 40001
      message = '注册号码存在'
      description = ''
      break
    case LOGIN_ERROR_ACCOUNT_40004:
      code = 40004
      message = '账号或密码错误'
      description = ''
      break
  }
  ctx.body = { code, message, description }
}),
  app.on('ok', (error, ctx) => {
    let code = 0
    let message = ''
    let description = ''
    switch (error) {
      case SUCCESS_0:
        code = 0
        message = 'ok'
        description = ''
        break
      /**
       * 40100-成功返回
       */
      case REGISTER_SUCCESS_40002:
        code = 40002
        message = '用户注册成功'
        description = ''
        break
      case LOGIN_SUCCESS_40003:
        code = 40003
        message = '用户登录成功'
        description = ''
        break
    }
    ctx.body = { code, message, description }
  })
