const { connection } = require('../app/database')
const uuid = require('node-uuid')
const { encryptionMD5 } = require('../utils/encryptionMD5')

class UserService {
  /**
   * 注册
   * @param user
   * @returns {Promise<*>}
   */
  async register(user) {
    const { email, iphone, password } = user
    const username = '默认用户'

    const statement =
      'insert into Guser (uuid, username, useriphone, useremail, userpwd) VALUE (?,?,?,?,?)'
    const [result] = await connection.execute(statement, [
      uuid().toUpperCase(),
      username,
      iphone,
      email,
      password
    ])
    return result
  }

  /**
   * 根据手机号查询uuid
   * @param iphone
   * @returns {Promise<*>}
   * @constructor
   */
  async InquireIphone(iphone) {
    const statement = `select uuid from Guser a where a.useriphone  = ?`
    const [values] = await connection.execute(statement, [iphone])
    return values
  }
  async InquireAccount(data) {
    const statement = 'select uuid from Guser where useraccount=? and userpwd=?'
    const password = encryptionMD5(data.password)
    const [values] = await connection.execute(statement, [data.account, password])
    console.log('InquireAccount:查询到的uuid', values)
    return values
  }
  async InquireAccountIPhone(data) {
    const statement = 'select uuid from Guser where useriphone=? and userpwd=?'
    const password = encryptionMD5(data.password)
    const [values] = await connection.execute(statement, [data.iphone, password])
    console.log('InquireAccount:查询到的uuid', values)
    return values
  }
  async InquireAccountEmail(data) {
    const statement = 'select uuid from Guser where useremail=? and userpwd=?'
    const password = encryptionMD5(data.password)
    const [values] = await connection.execute(statement, [data.email, password])
    console.log('InquireAccount:查询到的uuid', values)
    return values
  }
}
module.exports = new UserService()
