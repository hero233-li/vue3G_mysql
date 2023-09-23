const { connection } = require('../../app/database')

class MenuService {
  async queryAllMenu() {
    // const statement = 'select * from gmenu_tab '
    const statementMenu = `select  a.menu_id,a.menu_group_id,a.menu_name,a.menu_icon,a.menu_sort from gmenu_tab a`
    const [valuesMenu] = await connection.execute(statementMenu)
    return valuesMenu
  }
  async queryAllMenuGroup() {
    const statementMenuGroup = `select b.menu_group_id,b.menu_group_name,b.menu_group_icon ,b.menu_chirlden from gmenu_group_tab b`
    const [valuesMenuGroup] = await connection.execute(statementMenuGroup)
    return valuesMenuGroup
  }

  /**
   *     //todo mysql2的in查询，不能用execute，须要用query
   * @param uuid
   * @returns {Promise<number>}
   */
  async queryUserMenu(uuid) {
    const SQLRole = `select a.userrole from guser a where a.uuid=?`
    const [[resultRoleID]] = await connection.execute(SQLRole, [uuid])
    const roleID = resultRoleID.userrole

    const RoleStr = [roleID].toString().split(',')
    const SQLrole_menuID = `select group_concat(b.role_menu) as menuid  from grole b where b.role_id in(?)`
    const [[resultMenuID]] = await connection.query(SQLrole_menuID, [RoleStr])
    const menuID = resultMenuID.menuid

    const menuStr = [menuID].toString().split(',')
    const SQLGroupID = `select group_concat(menu_group_id) as  menuGroupid from gmenu_tab c where c.menu_id in (?)`
    const [[resultMenuGroupID]] = await connection.query(SQLGroupID, [menuStr])
    const menuGroupid = resultMenuGroupID.menuGroupid

    const menuGroupStr = [menuGroupid].toString().split(',')
    const SQLGroupInfo = `select * from gmenu_group_tab d where d.menu_group_id  in (?) order by d.menu_group_sort`
    const [resultMenuGroupInfo] = await connection.query(SQLGroupInfo, [menuGroupStr])

    const SQLMenuInfo = ` select * from gmenu_tab c where c.menu_id  in (?)`
    const [resultMenuInfo] = await connection.query(SQLMenuInfo, [menuStr])

    const MenuGroupData = Object.assign({}, resultMenuGroupInfo)
    const MenuData = Object.assign({}, resultMenuInfo)

    const GroupLength = Object.values(MenuGroupData).length
    const MenuItemLength = Object.values(MenuData).length

    for (let i = 0; i < GroupLength; i++) {
      MenuGroupData[i].menu_chirlden = {}

      for (let j = 0; j < MenuItemLength; j++) {
        const isChirlden = MenuData[j].menu_group_id === MenuGroupData[i].menu_group_id
        console.log(isChirlden)
        if (isChirlden) {
          MenuGroupData[i].menu_chirlden[j] = JSON.parse(JSON.stringify(MenuData[j]))
        }
      }
    }

    console.log(MenuGroupData[0].menu_chirlden)
    return MenuGroupData
  }
}

module.exports = new MenuService()
