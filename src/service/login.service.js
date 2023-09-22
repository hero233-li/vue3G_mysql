const { connection } = require('../app/database')
const { encryptionMD5 } = require('../utils/encryptionMD5')

class LoginService {
  async InquireAccountIPhone(data) {
    console.log('data', data)
    const { iphone, password } = data.iphoneData
    const statement = 'select uuid from Guser where useriphone=? and userpwd=?'

    const [values] = await connection.execute(statement, [iphone, encryptionMD5(password)])
    console.log('InquireAccount:查询到的uuid', values)
    return values
  }
}
module.exports = new LoginService()
