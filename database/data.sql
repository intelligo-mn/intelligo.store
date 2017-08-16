DROP TABLE IF EXISTS `org_type`;
CREATE TABLE IF NOT EXISTS `category` (
  `org_type_id` int(11) NOT NULL AUTO_INCREMENT,
  `org_type_name` varchar(50) NOT NULL,
  `org_type_image` text NOT NULL,
  PRIMARY KEY (`org_type_id`)
) ENGINE=MyISAM AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

INSERT INTO `org_type` (`org_type_id`, `org_type_name`, `org_type_image`) VALUES
(1, 'Төрийн бус байгууллага', 'upload/images/tbb.png'),
(2, 'Цагдаагийн ерөнхий газар', 'upload/images/police.png'),
(3, 'Эмнэлэг', 'upload/images/ambulance.png');

DROP TABLE IF EXISTS `organization`;
CREATE TABLE IF NOT EXISTS `organization` (
  `org_id` int(11) NOT NULL AUTO_INCREMENT,
  `org_name` varchar(255) NOT NULL,
  `org_type_id` int(11) NOT NULL,
  `org_about` text NOT NULL,
  `org_image` varchar(255) NOT NULL,
  `org_email` varchar(255) NOT NULL,
  `org_phone` int(20) NOT NULL,
  `org_fb` varchar(255) NOT NULL,
  `org_web` varchar(255) NOT NULL,
  `org_location` varchar(255) NOT NULL,
  PRIMARY KEY (`org_id`)
) ENGINE=MyISAM AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

DROP TABLE IF EXISTS `project`;
CREATE TABLE IF NOT EXISTS `project` (
  `project_id` int(11) NOT NULL AUTO_INCREMENT,
  `project_name` varchar(255) NOT NULL,
  `org_id` int(11) NOT NULL,
  `project_about` text NOT NULL,
  `project_image` varchar(255) NOT NULL,
  `project_email` varchar(255) NOT NULL,
  `project_phone` int(20) NOT NULL,
  `project_fb` varchar(255) NOT NULL,
  `project_web` text NOT NULL,
  PRIMARY KEY (`project_id`)
) ENGINE=MyISAM AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

