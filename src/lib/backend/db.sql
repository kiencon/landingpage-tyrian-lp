CREATE TABLE IF NOT EXISTS `caseopening` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `citizenid` varchar(255) NOT NULL DEFAULT '0',
  `goldcoin` int(11) NOT NULL DEFAULT 0,
  `silvercoin` int(11) NOT NULL DEFAULT 0,
  `discordId` varchar(255) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS `coinHistory` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `citizenid` varchar(255) NOT NULL DEFAULT '0',
  `money` int(11) NOT NULL DEFAULT 0,
  `discordId` varchar(255) NOT NULL DEFAULT 0,
  `createdAt` varchar(255) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;