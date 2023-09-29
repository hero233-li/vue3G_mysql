const { connection } = require('../../app/database')
class RoleService {
  async SQLQueryAllRole() {
    let statement = `select * from grole r `
    const [result] = await connection.query(statement)
    return result
  }
  async SQLQueryRoleName() {
    let statement = `select r.role_name,role_id from grole r  `
    const [result] = await connection.query(statement)
    return result
  }
  async SQLQueryListRole(searchInfo) {
    const statement =
      `select * from grole gr ` +
      // ' where (a.username like' +
      // mysql.escape('%' + searchInfo.username + '%') +
      // ' and  a.useraccount like' +
      // mysql.escape('%' + searchInfo.useraccount + '%') +
      // ' and a.useriphone like' +
      // mysql.escape('%' + searchInfo.useriphone + '%') +
      // ' and a.useremail like' +
      // mysql.escape('%' + searchInfo.useremail + '%') +
      // ' and a.userstate like' +
      // mysql.escape('%' + searchInfo.userstate + '%') +
      // ')' +
      ` limit ` +
      searchInfo.limit +
      ` offset ` +
      searchInfo.offset
    const [result] = await connection.query(statement)
    // console.log(result)
    return result
  }
  async SQLQueryCountRole() {
    const statement = `select count(*) as totalCount from grole gr `
    // ' where (a.username like' +
    // mysql.escape('%' + searchInfo.username + '%') +
    // ' and  a.useraccount like' +
    // mysql.escape('%' + searchInfo.useraccount + '%') +
    // ' and a.useriphone like' +
    // mysql.escape('%' + searchInfo.useriphone + '%') +
    // ' and a.useremail like' +
    // mysql.escape('%' + searchInfo.useremail + '%') +
    // ' and a.userstate like' +
    // mysql.escape('%' + searchInfo.userstate + '%') +
    // ')' +
    const [[result]] = await connection.query(statement)
    return result
  }
}

module.exports = new RoleService()
