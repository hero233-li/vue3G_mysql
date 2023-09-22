// const app = require('../app')
const {
  IPHONE_EXIST_40001,
  REGISTER_SUCCESS_40002,
  LOGIN_ERROR_ACCOUNT_40004,
  NULL_ERROR_40005
} = require('../../config/error-contanst')
const { app } = require('../../app')
app.on('registerError', (error, ctx) => {
  let code = 0
  let message = ''
  let description = ''
  switch (error) {
    /**
     * 40100-注册问题
     */
    case IPHONE_EXIST_40001:
      code = 40001
      message = '注册号码存在'
      description = ''
      break
    case NULL_ERROR_40005:
      code = 40005
      message = '请求数据为空'
      description = ''
      break
  }
  ctx.body = { code, message, description }
}),
  app.on('registerOk', (error, ctx) => {
    let code = 0
    let message = ''
    let description = ''
    switch (error) {
      /**
       * 40100-成功返回
       */
      case REGISTER_SUCCESS_40002:
        code = 40002
        message = '用户注册成功'
        description = ''
        break
    }
    ctx.body = { code, message, description }
  })
