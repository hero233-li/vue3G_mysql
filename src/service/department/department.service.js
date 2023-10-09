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
    console.log(typeof searchInfo.department_name === 'undefined')
    searchInfo.department_name =
      typeof searchInfo.department_name === 'undefined' ? '' : searchInfo.department_name
    searchInfo.department_state =
      typeof searchInfo.department_state === 'undefined' ? '' : searchInfo.department_state
    const SQLChirlden =
      `select * from gdepartment gm ` +
      ' where (gm.department_name like' +
      mysql.escape('%' + searchInfo.department_name + '%') +
      ' and  gm.department_state like' +
      mysql.escape('%' + searchInfo.department_state + '%') +
      ')' +
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
    console.log(SQLChirlden)
    return GroupData
  }
  async SQLQueryCountDepartment() {
    const statement = `select count(*) as totalCount from gdepartment gm`
    const [[result]] = await connection.query(statement)
    return result.totalCount
  }
  async SQLQueryGroupDepartment() {
    const statement = `select * from gdepartment_group ggp`
    const [result] = await connection.query(statement)
    return result
  }
  async SQLEditStatusDepartment(info) {
    const statement = `update gdepartment_group set   department_state=? where department_group_id = ?`
    const result = await connection.execute(statement, [info.state, info.id])

    return result
  }
}

module.exports = new DepartmentService()
