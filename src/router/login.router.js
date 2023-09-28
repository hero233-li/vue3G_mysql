const KoaRouter = require('@koa/router')
const loginController = require('../controller/login/login.controller')
const { verifyLogin, verifyAuth } = require('../middleware/login/login.middleware')
const jwt = require('jsonwebtoken')

const loginRouter = new KoaRouter({
  prefix: '/api/login'
})
loginRouter.post('/iphone', verifyLogin, loginController.accountLogin)
loginRouter.post('/account', verifyLogin, loginController.accountLogin)
loginRouter.post('/email', verifyLogin, loginController.accountLogin)

loginRouter.get('/query', verifyAuth, loginController.QueryAccountInfo)
module.exports = {
  loginRouter
}
