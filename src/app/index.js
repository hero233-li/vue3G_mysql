const Koa = require('koa')
const bodyParse = require('koa-bodyparser')
const { userRouter } = require('../router/user.router')
const { loginRouter } = require('../router/login.router')
const { menuRouter } = require('../router/menu.router')
const { accountRouter } = require('../router/account.router')
const { roleRouter } = require('../router/role.router')
const { departmentRouter } = require('../router/department.router')
const app = new Koa()
app.use(bodyParse())
app.use(userRouter.routes())

app.use(loginRouter.routes())
app.use(menuRouter.routes())
app.use(accountRouter.routes())
app.use(roleRouter.routes())
app.use(departmentRouter.routes())
/**
 * router必须在allowedMethods上面
 */
app.use(departmentRouter.allowedMethods)
app.use(roleRouter.allowedMethods)
app.use(accountRouter.allowedMethods)
app.use(userRouter.allowedMethods)
app.use(userRouter.allowedMethods)
app.use(loginRouter.allowedMethods)
module.exports = {
  app
}
