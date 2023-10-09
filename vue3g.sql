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

 Date: 09/10/2023 08:15:11
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
  `createTime` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`department_id`) USING BTREE,
  INDEX `depart-group`(`department_group` ASC) USING BTREE,
  CONSTRAINT `depart-group` FOREIGN KEY (`department_group`) REFERENCES `gdepartment_group` (`department_group_id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 5 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of gdepartment
-- ----------------------------
INSERT INTO `gdepartment` VALUES (1, '超级管理员', 1, NULL, 1, NULL, '2023-09-29 22:28:38');
INSERT INTO `gdepartment` VALUES (2, '测试', 1, NULL, 1, NULL, '2023-09-29 22:28:38');
INSERT INTO `gdepartment` VALUES (3, 'gg', 2, NULL, 1, NULL, '2023-09-29 22:28:38');
INSERT INTO `gdepartment` VALUES (4, '44', 2, NULL, 1, NULL, '2023-09-29 22:50:54');

-- ----------------------------
-- Table structure for gdepartment_group
-- ----------------------------
DROP TABLE IF EXISTS `gdepartment_group`;
CREATE TABLE `gdepartment_group`  (
  `department_group_id` bigint NOT NULL AUTO_INCREMENT,
  `department_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `department_group_father_id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `department_group_sort` bigint NULL DEFAULT NULL,
  `department_state` bigint NULL DEFAULT NULL,
  `department_group_remark` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `department_children` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `createTime` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`department_group_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 4 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of gdepartment_group
-- ----------------------------
INSERT INTO `gdepartment_group` VALUES (1, '特殊账号组', NULL, NULL, 1, NULL, NULL, '2023-09-29 22:28:25');
INSERT INTO `gdepartment_group` VALUES (2, 'cc', NULL, NULL, 0, NULL, NULL, '2023-09-29 22:28:25');
INSERT INTO `gdepartment_group` VALUES (3, 'ss', ' ', NULL, 1, NULL, NULL, '2023-09-29 22:28:25');

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
  `data_hiding` bigint(20) UNSIGNED ZEROFILL NOT NULL DEFAULT 00000000000000000001,
  `menu_chirlden` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  PRIMARY KEY (`menu_group_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 7 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of gmenu_group_tab
-- ----------------------------
INSERT INTO `gmenu_group_tab` VALUES (3, '系统总览', NULL, NULL, NULL, '/GMain/analysis', NULL, NULL, NULL, 00000000000000000001, NULL);
INSERT INTO `gmenu_group_tab` VALUES (4, '系统设置', NULL, NULL, NULL, '/GMain/system', NULL, NULL, NULL, 00000000000000000001, NULL);
INSERT INTO `gmenu_group_tab` VALUES (5, '审批管理', NULL, NULL, NULL, '/GMain/approval/', NULL, NULL, NULL, 00000000000000000001, NULL);
INSERT INTO `gmenu_group_tab` VALUES (6, '事项管理', NULL, NULL, NULL, '/GMain/work/', NULL, NULL, NULL, 00000000000000000001, NULL);

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
) ENGINE = InnoDB AUTO_INCREMENT = 12 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of gmenu_tab
-- ----------------------------
INSERT INTO `gmenu_tab` VALUES (5, '角色管理', 4, 11, NULL, '/GMain/system/role', NULL, NULL, NULL);
INSERT INTO `gmenu_tab` VALUES (6, '用户管理', 4, 12, NULL, '/GMain/system/account', NULL, NULL, NULL);
INSERT INTO `gmenu_tab` VALUES (7, '部门管理', 4, 13, NULL, '/GMain/system/department', NULL, NULL, NULL);
INSERT INTO `gmenu_tab` VALUES (8, '菜单管理', 4, 14, NULL, '/GMain/system/menu', NULL, NULL, NULL);
INSERT INTO `gmenu_tab` VALUES (9, '关于项目', 3, 21, NULL, '/GMain/analysis/overview', NULL, NULL, NULL);
INSERT INTO `gmenu_tab` VALUES (10, '假勤管理', 5, 31, NULL, '/GMain/approval/fakework', NULL, NULL, NULL);
INSERT INTO `gmenu_tab` VALUES (11, '待办事项', 6, 41, NULL, '/GMain/work/agency', NULL, NULL, NULL);

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
) ENGINE = InnoDB AUTO_INCREMENT = 5 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of grole
-- ----------------------------
INSERT INTO `grole` VALUES (1, '超级管理员', NULL, NULL, NULL, '1,2,3,4,5,6,7,8,9,10,11,12,13,14', NULL);
INSERT INTO `grole` VALUES (2, '测试角色1 ', NULL, NULL, NULL, '7,8', NULL);
INSERT INTO `grole` VALUES (4, '00', NULL, NULL, NULL, NULL, NULL);

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
INSERT INTO `guser` VALUES ('976E71E5-BF6B-4929-8813-65A959DE7E16', '默认用户', 'admin', '', '', '691D15B744BF18A83014601561DF2851', '1', '0', 1, NULL, '2023-09-28 15:22:56', '2023-09-29 23:49:45');

SET FOREIGN_KEY_CHECKS = 1;
