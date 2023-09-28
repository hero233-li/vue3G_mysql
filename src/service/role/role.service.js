const { connection } = require('../../app/database')
class RoleService {
  async queryAllRole() {
    let statement = `select * from grole r `
    const [result] = await connection.query(statement)
    return result
  }
  async queryRoleName() {
    let statement = `select r.role_name,role_id from grole r  `
    const [result] = await connection.query(statement)
    return result
  }
}

module.exports = new RoleService()
