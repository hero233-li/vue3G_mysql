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
  async accountLogin(ctx, next) {
    const userLoginInfo = ctx.request.body
    console.log('accountLogin:获取到传入的信息', userLoginInfo)
    const result = await userService.InquireAccount(userLoginInfo)
    console.log('accountLogin:返回的result', result)
    if (result.length < 1) {
      ctx.app.emit('error', LOGIN_ERROR_ACCOUNT_40004, ctx)
    } else {
      ctx.app.emit('ok', LOGIN_SUCCESS_40003, ctx)
    }
  }
  async EmailLogin(ctx, next) {
    const userLoginInfo = ctx.request.body
    console.log('accountLogin:获取到传入的信息', userLoginInfo)
    const result = await userService.InquireAccountEmail(userLoginInfo)
    console.log('accountLogin:返回的result', result)
    if (result.length < 1) {
      ctx.app.emit('error', LOGIN_ERROR_ACCOUNT_40004, ctx)
    } else {
      ctx.app.emit('ok', LOGIN_SUCCESS_40003, ctx)
    }
  }
  async IphoneLogin(ctx, next) {
    const userLoginInfo = ctx.request.body
    console.log('accountLogin:获取到传入的信息', userLoginInfo)
    const result = await userService.InquireAccountIPhone(userLoginInfo)
    console.log('accountLogin:返回的result', result)
    if (result.length < 1) {
      ctx.app.emit('error', LOGIN_ERROR_ACCOUNT_40004, ctx)
    } else {
      ctx.app.emit('ok', LOGIN_SUCCESS_40003, ctx)
    }
  }
}
module.exports = new UserController()
