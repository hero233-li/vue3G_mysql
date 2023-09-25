/*
 Navicat Premium Data Transfer

 Source Server         : win10Mysql
 Source Server Type    : MySQL
 Source Server Version : 80032 (8.0.32)
 Source Host           : localhost:3306
 Source Schema         : vue3g

 Target Server Type    : MySQL
 Target Server Version : 80032 (8.0.32)
 File Encoding         : 65001

 Date: 25/09/2023 13:32:10
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for gdepartment
-- ----------------------------
DROP TABLE IF EXISTS `gdepartment`;
CREATE TABLE `gdepartment`  (
  `department_id` bigint NOT NULL AUTO_INCREMENT,
  `department_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `department_group` bigint NOT NULL,
  `department_sort` bigint NULL DEFAULT NULL,
  `department_state` bigint NULL DEFAULT NULL,
  `department_remark` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  PRIMARY KEY (`department_id`) USING BTREE,
  INDEX `depart-group`(`department_group` ASC) USING BTREE,
  CONSTRAINT `depart-group` FOREIGN KEY (`department_group`) REFERENCES `gdepartment_group` (`department_group_id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of gdepartment
-- ----------------------------
INSERT INTO `gdepartment` VALUES (1, '超级管理员', 1, NULL, NULL, NULL);
INSERT INTO `gdepartment` VALUES (2, '测试', 1, NULL, NULL, NULL);

-- ----------------------------
-- Table structure for gdepartment_group
-- ----------------------------
DROP TABLE IF EXISTS `gdepartment_group`;
CREATE TABLE `gdepartment_group`  (
  `department_group_id` bigint NOT NULL AUTO_INCREMENT,
  `department_group_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `department_group_father_id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `department_group_sort` bigint NULL DEFAULT NULL,
  `department_group_state` bigint NULL DEFAULT NULL,
  `department_group_remark` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  PRIMARY KEY (`department_group_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of gdepartment_group
-- ----------------------------
INSERT INTO `gdepartment_group` VALUES (1, '特殊账号组', NULL, NULL, NULL, NULL);

-- ----------------------------
-- Table structure for gmenu_group_tab
-- ----------------------------
DROP TABLE IF EXISTS `gmenu_group_tab`;
CREATE TABLE `gmenu_group_tab`  (
  `menu_group_id` bigint NOT NULL AUTO_INCREMENT,
  `menu_group_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `menu_group_father` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `menu_group_sort` bigint NULL DEFAULT NULL,
  `menu_group_icon` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `menu_group_router` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `menu_group_state` bigint NULL DEFAULT NULL,
  `menu_group_external_link` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `menu_group_show` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `data_hiding` bigint(20) UNSIGNED ZEROFILL NOT NULL,
  `menu_chirlden` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  PRIMARY KEY (`menu_group_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of gmenu_group_tab
-- ----------------------------
INSERT INTO `gmenu_group_tab` VALUES (1, '系统设置', '0', 2, 'Setting', '/main/system', 1, '0', '1', 00000000000000000000, '');
INSERT INTO `gmenu_group_tab` VALUES (2, '系统总览', '0', 1, 'Monitor', '/main/analysis', 1, '0', '1', 00000000000000000000, NULL);

-- ----------------------------
-- Table structure for gmenu_tab
-- ----------------------------
DROP TABLE IF EXISTS `gmenu_tab`;
CREATE TABLE `gmenu_tab`  (
  `menu_id` bigint NOT NULL AUTO_INCREMENT,
  `menu_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `menu_group_id` bigint NULL DEFAULT NULL,
  `menu_sort` bigint NULL DEFAULT NULL,
  `menu_icon` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `menu_router` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `menu_state` bigint NULL DEFAULT NULL,
  `menu_external_link` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `menu_show` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  PRIMARY KEY (`menu_id`) USING BTREE,
  INDEX `menu_group_id`(`menu_group_id` ASC) USING BTREE,
  CONSTRAINT `gmenu_tab_ibfk_1` FOREIGN KEY (`menu_group_id`) REFERENCES `gmenu_group_tab` (`menu_group_id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 10 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of gmenu_tab
-- ----------------------------
INSERT INTO `gmenu_tab` VALUES (5, '角色管理', 1, 11, NULL, '/GMain/system/role', NULL, NULL, NULL);
INSERT INTO `gmenu_tab` VALUES (6, '用户管理', 1, 12, NULL, '/GMain/system/account', NULL, NULL, NULL);
INSERT INTO `gmenu_tab` VALUES (7, '部门管理', 1, 13, NULL, '/GMain/system/department', NULL, NULL, NULL);
INSERT INTO `gmenu_tab` VALUES (8, '菜单管理', 1, 14, NULL, '/GMain/system/menu', NULL, NULL, NULL);
INSERT INTO `gmenu_tab` VALUES (9, '关于项目', 2, 15, NULL, '/GMain/analysis/overview', NULL, NULL, NULL);

-- ----------------------------
-- Table structure for grole
-- ----------------------------
DROP TABLE IF EXISTS `grole`;
CREATE TABLE `grole`  (
  `role_id` bigint NOT NULL AUTO_INCREMENT COMMENT '角色ID',
  `role_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '角色名称',
  `role_sort` bigint NULL DEFAULT NULL COMMENT '角色排序',
  `role_state` bigint NULL DEFAULT NULL COMMENT '角色状态',
  `role_createtime` datetime NULL DEFAULT NULL COMMENT '角色创建时间',
  `role_menu` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '角色菜单',
  `role_remark` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '角色备注',
  PRIMARY KEY (`role_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 4 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of grole
-- ----------------------------
INSERT INTO `grole` VALUES (1, '超级管理员', NULL, NULL, NULL, '5,6', NULL);
INSERT INTO `grole` VALUES (2, '测试角色1 ', NULL, NULL, NULL, '7,8', NULL);
INSERT INTO `grole` VALUES (3, '测试角色2', NULL, NULL, NULL, '6,9,10,11,12', NULL);

-- ----------------------------
-- Table structure for guser
-- ----------------------------
DROP TABLE IF EXISTS `guser`;
CREATE TABLE `guser`  (
  `uuid` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `username` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `useraccount` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT 'defaultuser',
  `useriphone` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `useremail` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `userpwd` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `userrole` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT '0',
  `userdepartment` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT '0',
  `userstate` bigint NOT NULL DEFAULT 1 COMMENT '账号状态0-停用1-启用',
  `userremark` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '账号备注',
  `createTime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `updateTime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`uuid`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of guser
-- ----------------------------
INSERT INTO `guser` VALUES ('08B920C7-723A-4602-8A15-D3F53AAFECB0', '默认用户', 'defaultuser', '13988874645', 'c.txstmebdep@shxdjtcyb.vg', 'E2EC654FD2B0B0228EB108674659D69B', '0', '0', 1, NULL, '2023-09-25 00:18:02', '2023-09-25 00:18:02');
INSERT INTO `guser` VALUES ('1056EBEB-7AEC-4E33-836F-A47441A6FED1', '默认用户', 'defaultuser', '13422284607', 'h.etg@kitbywqxjw.gi', '2567BC4FF9973B62E95E56065AC2C1E1', '0', '0', 1, NULL, '2023-09-25 00:17:58', '2023-09-25 00:17:58');
INSERT INTO `guser` VALUES ('1EDB8076-6A55-4413-AF39-543F5FC730C6', '默认用户', 'defaultuser', '19856234668', 'f.whm@mtvbppk.gp', 'FB9ECE7B205CA5D2A94112320F24F2CE', '1,2,3', '0', 1, NULL, '2023-09-25 00:28:58', '2023-09-25 00:32:06');
INSERT INTO `guser` VALUES ('2F324915-B57A-486C-A924-78861CD122B6', '默认用户', 'defaultuser', '13476526475', 'q.sgegw@znjf.kz', '70A6C86317085B788AC8643D17C8A97B', '0', '0', 1, NULL, '2023-09-25 00:18:04', '2023-09-25 00:18:04');
INSERT INTO `guser` VALUES ('3B1E0620-1439-4B33-8DB8-BD7F20351A35', '默认用户', 'defaultuser', '13661543320', 'g.kkfapygved@onbthu.pa', 'DE8B042AF26D1137679FD2838E95FD7A', '0', '0', 1, NULL, '2023-09-25 00:18:03', '2023-09-25 00:18:03');
INSERT INTO `guser` VALUES ('458EBA4B-DF05-4AB4-9A2A-5026A4C82E67', '默认用户', 'admin', '18173428255', 'f.iojumhyakr@ivnwe.ie', 'D137627FD027C4929108487FAEE6C23A', '1,2,3', '0', 1, NULL, '2023-09-24 13:25:28', '2023-09-24 23:26:52');
INSERT INTO `guser` VALUES ('45A5DD7F-9CD1-409D-BDEB-C717ED7E5D93', '默认用户', 'defaultuser', '18144507344', 's.etdq@pngkocql.gh', '79B1CB61626E371DC433152E8AB5CD8F', '0', '0', 1, NULL, '2023-09-25 00:18:02', '2023-09-25 00:18:02');
INSERT INTO `guser` VALUES ('7AECD732-2B21-4134-A853-89AE9752FB19', '默认用户', 'defaultuser', '18610065703', 'v.ybeblb@rbspmy.gm', '5D5C3B00A194DD593189B023FB2386CB', '0', '0', 1, NULL, '2023-09-25 00:18:01', '2023-09-25 00:18:01');
INSERT INTO `guser` VALUES ('8F4BA39F-1510-495D-9C79-B0239A3A1A77', '默认用户', 'defaultuser', '18172939383', 'j.uxkkif@ytngmfyyj.zr', 'C80D1428403E3764F702D7783EBE2AAA', '0', '0', 1, NULL, '2023-09-25 00:28:54', '2023-09-25 00:28:54');
INSERT INTO `guser` VALUES ('B23B05C8-AFED-4987-B6A9-E010B40268B6', '默认用户', 'admin', '18130732422', 's.hliwny@hrxmnyjjo.gw', 'B34D8804E73BAF8AA81CB0C676A97AC7', '1,2,3', '0', 1, NULL, '2023-09-24 13:25:28', '2023-09-24 23:26:52');
INSERT INTO `guser` VALUES ('B50CC3E2-1D1D-4ECC-B6F5-ED291752283F', '默认用户', 'defaultuser', '18121903204', 'k.ikeafyooq@oblifggy.as', '7EAE0774F37C51E8BA4F75753E0434E0', '0', '0', 1, NULL, '2023-09-25 00:18:00', '2023-09-25 00:18:00');
INSERT INTO `guser` VALUES ('C48AB0D4-4465-43CF-BF56-B687E56A2CE8', '默认用户', 'defaultuser', '19834986844', 'n.sutxf@wgioqamju.biz', 'AA10C222018350CF59E2F1C9EA9F5691', '0', '0', 1, NULL, '2023-09-25 00:18:00', '2023-09-25 00:18:00');
INSERT INTO `guser` VALUES ('D5F9D4C4-EB2C-4BBF-8C34-FAE195A2BCCB', '默认用户', 'defaultuser', '18153452489', 'i.srg@tqksls.mq', 'B51A732B62D30CB4A344A4CDBCB70146', '0', '0', 1, NULL, '2023-09-25 00:17:57', '2023-09-25 00:17:57');
INSERT INTO `guser` VALUES ('D8C32136-E540-4A0F-B8DC-237B8CC45D6E', '默认用户', 'defaultuser', '18666761417', 'y.prhbigr@kbfp.np', '8E6094D48649BEB57B4637F4207B3D3B', '0', '0', 1, NULL, '2023-09-25 00:18:04', '2023-09-25 00:18:04');
INSERT INTO `guser` VALUES ('E8FA3AA3-A3F9-4056-A210-7BDE985C1C3A', '默认用户', 'defaultuser', '18154261578', 'n.hxcluoo@fczbzusfqq.cr', '538F3B50E805BF35E6F0A8A7B30B23CA', '0', '0', 1, NULL, '2023-09-25 00:17:59', '2023-09-25 00:17:59');
INSERT INTO `guser` VALUES ('F93BED73-181E-4474-A296-841ED19CC609', '默认用户', 'defaultuser', '18161478175', 'v.mdsinj@wvixsmfqd.cc', 'D94454B401D2C776470338D926DE8D48', '0', '0', 1, NULL, '2023-09-25 00:17:55', '2023-09-25 00:17:55');

SET FOREIGN_KEY_CHECKS = 1;
