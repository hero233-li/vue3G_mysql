const Koa = require('koa')
const bodyParse = require('koa-bodyparser')
const { userRouter } = require('../router/user.router')
const { loginRouter } = require('../router/login.router')
const app = new Koa()
app.use(bodyParse())
app.use(userRouter.routes())

app.use(loginRouter.routes())
/**
 * router必须在allowedMethods上面
 */
app.use(userRouter.allowedMethods)
app.use(loginRouter.allowedMethods)
module.exports = {
  app
}
