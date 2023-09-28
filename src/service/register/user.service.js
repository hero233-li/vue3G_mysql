const { connection } = require('../../app/database')
const uuid = require('node-uuid')
const { encryptionMD5 } = require('../../utils/encryptionMD5')

class UserService {
  /**
   * 注册
   * @param user
   * @returns {Promise<*>}
   */
  async register(user) {
    const { email, iphone, account, password } = user
    const username = '默认用户'
    console.log(user)
    const statement =
      'insert into Guser (uuid, username, useriphone,useraccount, useremail, userpwd) VALUE (?,?,?,?,?,?)'
    const [result] = await connection.execute(statement, [
      uuid().toUpperCase(),
      username,
      iphone,
      account,
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
}
module.exports = new UserService()
