const { connection } = require('../../app/database')
class LoginService {
  async InquireUserIphone(iphone = null) {
    const statement = 'select * from Guser where useriphone=?'
    const [values] = await connection.execute(statement, [iphone])
    return values
  }
  async InquireUserEmail(email = null) {
    const statement = 'select * from Guser where useremail=?'
    const [values] = await connection.execute(statement, [email])
    return values
  }
  async InquireUserAccount(account = null) {
    const statement = 'select * from Guser where useraccount=?'
    const [values] = await connection.execute(statement, [account])
    return values
  }
  async getUserInfoById(uuid) {
    const statement = `select * from guser where uuid=?`
    const [[values]] = await connection.execute(statement, [uuid])
    return values
  }
}
module.exports = new LoginService()
