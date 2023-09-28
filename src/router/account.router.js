const KoaRouter = require('@koa/router')
const AccountController = require('../controller/account/account.controller')
const { verifyAuth } = require('../middleware/login/login.middleware')

const accountRouter = new KoaRouter({
  prefix: '/api/account'
})
accountRouter.post('/queryList', verifyAuth, AccountController.queryAllAccount)
accountRouter.delete('/deleteAccount', verifyAuth, AccountController.removeAccount)
accountRouter.post('/addAccount', verifyAuth, AccountController.addAccount)
accountRouter.post('/editAccount', verifyAuth, AccountController.editAccount)
accountRouter.post('/editState', verifyAuth, AccountController.editState)

module.exports = {
  accountRouter
}
