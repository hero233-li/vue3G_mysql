
const Koa  = require('koa')
const bodyParse = require('koa-bodyparser')
const {userRouter} = require("../router/user.router");
const app = new Koa()
app.use(bodyParse())
app.use(userRouter.routes())
app.use(userRouter.allowedMethods)
module.exports = {
    app
}
