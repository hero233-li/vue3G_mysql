const KoaRouter = require('@koa/router')
const userController = require('../controller/user.controller')
const { verifyUser, encryptionPwd } = require('../middleware/user.middleware')
const userRouter = new KoaRouter({
  prefix: '/api/user'
})
userRouter.get('/list', (ctx, next) => {
  ctx.body = 'user list'
})

/**
 *
 */
userRouter.post('/register', verifyUser, encryptionPwd, userController.create)
/**
 * 用户账号登录
 */
userRouter.post('/login/email', userController.EmailLogin)
userRouter.post('/login/iphone', userController.IphoneLogin)
userRouter.post('/login/account', userController.accountLogin)

module.exports = {
  userRouter
}
