const crypto = require('crypto')

function encryptionMD5(password) {
  const md5 = crypto.createHash('md5')
  const newPwd = password + 'vue3后台管理'
  const md5Pwd = md5.update(newPwd).digest('hex')
  return md5Pwd.toUpperCase()
}
module.exports = {
  encryptionMD5
}
