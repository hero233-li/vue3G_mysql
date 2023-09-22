// const KoaRouter = require('@koa/router')
// const loginController = require('../controller/login.controller')
//
// const loginRouter = new KoaRouter({
//   prefix: '/api/user'
// })
// /**
//  * 手机号密码登录
//  */
// loginRouter.get('/aaa', (ctx, next) => {
//   ctx.body = 123
// })
//
// module.exports = { loginRouter }

const KoaRouter = require('@koa/router')
const loginRouter = new KoaRouter({
  prefix: '/api/login'
})
loginRouter.get('/list', (ctx, next) => {
  ctx.body = 'user list'
})

module.exports = {
  loginRouter
}
