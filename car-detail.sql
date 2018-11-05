/*
SQLyog  v12.2.6 (64 bit)
MySQL - 8.0.12 : Database - car_detail
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`car_detail` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */;

USE `car_detail`;

/*Table structure for table `detail` */

DROP TABLE IF EXISTS `detail`;

CREATE TABLE `detail` (
  `id` int(11) NOT NULL,
  `chanpinshangbiao` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `qiyemingcheng` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `cheliangxinghao` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `gonggaopici` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `waixingchicun` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `meitirongji` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `zongzhiliang` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `edingzhiliang` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `zhengbeizhiliang` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `qianpaichengke` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `zhouhe` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `mianzheng` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `zuigaoshisu` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `ranyou` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `youhao` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `huanbao` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `ranyouleixing` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `paifangbiaozhun` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `zhuyao_qita` text,
  `dipanxinghao` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `dipanpinpai` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `zhoushu` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `qianlunju` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `zhouju` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `houlunju` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `luntaishu` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `luntaiguige` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `jiejinliqujiao` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `qianxuanhouxuan` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `fadongjixinghao` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `fadongjishengchanqiye` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `pailiang` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `gonglv` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
