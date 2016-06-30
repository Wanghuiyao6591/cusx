# Host: localhost  (Version: 5.5.40)
# Date: 2016-06-02 19:51:17
# Generator: MySQL-Front 5.3  (Build 4.120)

/*!40101 SET NAMES utf8 */;

#
# Structure for table "liuyan"
#

DROP TABLE IF EXISTS `liuyan`;
CREATE TABLE `liuyan` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Id',
  `textarea` varchar(500) NOT NULL COMMENT '邮件内容',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=27 DEFAULT CHARSET=utf8 COMMENT='邮箱信息表';

#
# Data for table "liuyan"
#

/*!40000 ALTER TABLE `liuyan` DISABLE KEYS */;
INSERT INTO `liuyan` VALUES (26,'12324');
/*!40000 ALTER TABLE `liuyan` ENABLE KEYS */;

#
# Structure for table "massage"
#

DROP TABLE IF EXISTS `massage`;
CREATE TABLE `massage` (
  `ID` int(11) NOT NULL AUTO_INCREMENT COMMENT '流ID',
  `PERSONNAME` varchar(20) DEFAULT NULL COMMENT '发送人姓名',
  `PERSONXIBIE` varchar(40) DEFAULT NULL COMMENT '发送人所属系',
  `PERSONCLASS` varchar(20) DEFAULT NULL COMMENT '发送人所属班级',
  `PERSONE_MAIL` varchar(30) DEFAULT NULL COMMENT '发送人邮箱',
  `PERSONPHONE` varchar(20) DEFAULT NULL COMMENT '发送人电话',
  `MAINSEND` varchar(30) DEFAULT NULL COMMENT '发送主题',
  `MAIN` varchar(4000) DEFAULT NULL COMMENT '发送内容',
  `SENDTO` varchar(20) DEFAULT NULL COMMENT '接收人ID',
  `PERSONID` varchar(20) DEFAULT NULL COMMENT '发送人ID',
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COMMENT='站内信主表';

#
# Data for table "massage"
#

INSERT INTO `massage` VALUES (1,'1','2','3','4','5','6','7',NULL,NULL),(2,'1','2','3','4','5','6','7',NULL,NULL);

#
# Structure for table "reply"
#

DROP TABLE IF EXISTS `reply`;
CREATE TABLE `reply` (
  `ID` int(11) NOT NULL AUTO_INCREMENT COMMENT '回复ID',
  `AREAID` int(11) DEFAULT NULL COMMENT '主内容ID',
  `REPLYREMARK` varchar(4000) DEFAULT NULL COMMENT '回复内容',
  `ATTRIBUTE1` varchar(20) DEFAULT NULL COMMENT '备用字段1',
  `ATTRIBUTE2` varchar(20) DEFAULT NULL COMMENT '备用字段2',
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='回复内容表';

#
# Data for table "reply"
#


#
# Structure for table "zhuce"
#

DROP TABLE IF EXISTS `zhuce`;
CREATE TABLE `zhuce` (
  `ID` int(11) NOT NULL AUTO_INCREMENT COMMENT '流ID',
  `xuehao` varchar(20) DEFAULT NULL COMMENT '学号',
  `name` varchar(40) DEFAULT NULL COMMENT '姓名',
  `xibie` varchar(20) DEFAULT NULL COMMENT '系别',
  `class` varchar(30) DEFAULT NULL COMMENT '班级',
  `password` varchar(30) DEFAULT NULL COMMENT '密码',
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8 COMMENT='站内注册表';

#
# Data for table "zhuce"
#

INSERT INTO `zhuce` VALUES (1,'1','2','3','4','5'),(2,'admin','3','4','2','123456'),(3,'1','2','3','4','5'),(4,'','','','',''),(5,'','','','',''),(6,'1','35','5','5','5');
