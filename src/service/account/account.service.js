const { connection } = require('../../app/database')
const mysql = require('mysql2')
const uuid = require('node-uuid')
class AccountService {
  async queryAllAccount(searchInfo) {
    let statement =
      `select * from guser a ` +
      // statement +=
      ' where (a.username like' +
      mysql.escape('%' + searchInfo.username + '%') +
      ' and  a.useraccount like' +
      mysql.escape('%' + searchInfo.useraccount + '%') +
      ' and a.useriphone like' +
      mysql.escape('%' + searchInfo.useriphone + '%') +
      ' and a.useremail like' +
      mysql.escape('%' + searchInfo.useremail + '%') +
      ' and a.userstate like' +
      mysql.escape('%' + searchInfo.userstate + '%') +
      ')' +
      ` limit ` +
      searchInfo.limit +
      ` offset ` +
      searchInfo.offset
    /**
     * 当 limit和offset组合使用的时候，limit后面只能有一个参数，表示要取的的数量,offset表示要跳过的数量 。
     * limit 表示一页显示多少，offest表示第几页-（0-无限）
     * 例如select * from article LIMIT 3 OFFSET 1 表示跳过1条数据,从第2条数据开始取，取3条数据，也就是取2,3,4三条数据
     */
    console.log(statement)
    const [result] = await connection.query(statement)
    return result
  }
  async queryAccountCount(searchInfo) {
    const statement =
      `select count(*) as totalCount from guser a ` +
      ' where (a.username like' +
      mysql.escape('%' + searchInfo.username + '%') +
      ' and  a.useraccount like' +
      mysql.escape('%' + searchInfo.useraccount + '%') +
      ' and a.useriphone like' +
      mysql.escape('%' + searchInfo.useriphone + '%') +
      ' and a.useremail like' +
      mysql.escape('%' + searchInfo.useremail + '%') +
      ' and a.userstate like' +
      mysql.escape('%' + searchInfo.userstate + '%') +
      ')'
    const [[result]] = await connection.query(statement)

    return result.totalCount
  }
  async deleteAccount(uuid) {
    const statement = `DELETE FROM guser where guser.uuid=? and guser.useraccount <> 'admin'`
    const result = await connection.execute(statement, [uuid])
  }
  async addAccount(userinfo) {
    console.log(userinfo)
    const statement = `
insert into guser 
(uuid, useraccount,userdepartment,useremail,username,userpwd,userremark,userrole,useriphone)
 VALUE 
 (?,?,?,?,?,?,?,?,?)
 `
    const result = await connection.execute(statement, [
      uuid().toUpperCase(),
      userinfo.useraccount,
      userinfo.userdepartment,
      userinfo.userrole,
      userinfo.username,
      userinfo.useremail,
      userinfo.userremark,
      userinfo.userpwd,
      userinfo.useriphone
    ])
  }
}

module.exports = new AccountService()
