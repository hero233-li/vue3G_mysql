const { connection } = require('../../app/database')
const mysql = require('mysql2')
class DepartmentService {
  /**
   * 查出所有的父组元素，查出所有的子组元素
   * @param searchInfo
   * @returns {Promise<*>}
   * @constructor
   */
  async SQLQueryAllDepartment(searchInfo) {
    const SQLChirlden =
      `select * from gdepartment gm ` +
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
    const [resultItemData] = await connection.query(SQLChirlden)
    const SQLParent = `select * from gdepartment_group ggp `
    const [resultGroupData] = await connection.query(SQLParent)
    const GroupData = Object.assign({}, resultGroupData)
    const ItemData = Object.assign({}, resultItemData)
    const GroupLength = Object.values(GroupData).length
    const ItemLength = Object.values(ItemData).length

    for (let i = 0; i < GroupLength; i++) {
      GroupData[i].children = {}
      for (let j = 0; j < ItemLength; j++) {
        const isChirlden = ItemData[j].department_group === GroupData[i].department_group_id
        if (isChirlden) {
          GroupData[i].children[j] = JSON.parse(JSON.stringify(ItemData[j]))
        }
      }
    }
    for (let i = 0; i < GroupLength; i++) {
      const item = GroupData[i]
      item.children = Object.values(item.children)
    }
    return GroupData
  }
  async SQLQueryCountDepartment() {
    const statement = `select count(*) as totalCount from gdepartment gm`
    const [[result]] = await connection.query(statement)
    return result.totalCount
  }
}

module.exports = new DepartmentService()
