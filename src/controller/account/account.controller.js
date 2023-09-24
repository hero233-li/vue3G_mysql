// const menuService = require('../../service/menu/menu.service')
const AccountService = require('../../service/account/account.service')
// require('../../service/login/login.service')
class AccountController {
  async queryAllAccount(ctx, next) {
    const searchInfo = ctx.request.body
    const accountList = await AccountService.queryAllAccount(searchInfo)
    const accountCount = await AccountService.queryAccountCount(searchInfo)
    ctx.body = {
      list: accountList,
      totalCount: accountCount
    }
  }
  async removeAccount(ctx, next) {
    const { uuid } = ctx.request.body
    await AccountService.deleteAccount(uuid)
  }
  async addAccount(ctx, next) {
    const userinfo = ctx.request.body
    userinfo.userpwd = '000000'
    await AccountService.addAccount(userinfo)
    ctx.body = { code: 0, message: '注册成功' }
  }
}
module.exports = new AccountController()
