-- phpMyAdmin SQL Dump
-- version 4.5.2
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Mar 04, 2017 at 05:24 PM
-- Server version: 5.7.9
-- PHP Version: 5.6.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ecommerce`
--

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
CREATE TABLE IF NOT EXISTS `category` (
  `category_id` int(11) NOT NULL AUTO_INCREMENT,
  `category_name` varchar(20) NOT NULL,
  `category_image` text NOT NULL,
  PRIMARY KEY (`category_id`)
) ENGINE=MyISAM AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`category_id`, `category_name`, `category_image`) VALUES
(1, 'Боловсрол', 'upload/images/5615-2017-03-04.png'),
(2, 'Байгаль орчин', 'upload/images/8195-2017-03-04.png'),
(3, 'Барилга угсралт', 'upload/images/8571-2017-03-04.png'),
(4, 'Гэр ахуй', 'upload/images/2787-2017-03-04.png');
-- --------------------------------------------------------

--
-- Table structure for table `department`
--

DROP TABLE IF EXISTS `department`;
CREATE TABLE IF NOT EXISTS `department` (
  `department_id` int(11) NOT NULL AUTO_INCREMENT,
  `department_name` varchar(20) NOT NULL,
  `department_image` text NOT NULL,
  PRIMARY KEY (`department_id`)
) ENGINE=MyISAM AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `department`
--

INSERT INTO `department` (`department_id`, `department_name`, `department_image`) VALUES
(1, 'Боловсрол', 'upload/images/5615-2017-03-04.png'),
(2, 'Байгаль орчин', 'upload/images/8195-2017-03-04.png'),
(3, 'Барилга угсралт', 'upload/images/8571-2017-03-04.png'),
(4, 'Гэр ахуй', 'upload/images/2787-2017-03-04.png');


DROP TABLE IF EXISTS `brand`;
CREATE TABLE IF NOT EXISTS `brand` (
  `brand_id` int(11) NOT NULL AUTO_INCREMENT,
  `brand_name` varchar(20) NOT NULL,
  `brand_image` text NOT NULL,
  PRIMARY KEY (`brand_id`)
) ENGINE=MyISAM AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

--
-- Table structure for table `company`
--

DROP TABLE IF EXISTS `company`;
CREATE TABLE IF NOT EXISTS `company` (
  `company_id` int(11) NOT NULL AUTO_INCREMENT,
  `company_name` varchar(20) NOT NULL,
  `company_image` text NOT NULL,
  PRIMARY KEY (`company_id`)
) ENGINE=MyISAM AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `company`
--

INSERT INTO `company` (`company_id`, `company_name`, `company_image`) VALUES
(1, 'Боловсрол', 'upload/images/5615-2017-03-04.png'),
(2, 'Байгаль орчин', 'upload/images/8195-2017-03-04.png'),
(3, 'Барилга угсралт', 'upload/images/8571-2017-03-04.png'),
(4, 'Гэр ахуй', 'upload/images/2787-2017-03-04.png');

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
CREATE TABLE IF NOT EXISTS `product` (
  `product_id` int(11) NOT NULL AUTO_INCREMENT,
  `product_name` varchar(50) NOT NULL,
  `category_id` int(11) NOT NULL,
  `price` double NOT NULL,
  `serve_for` varchar(45) NOT NULL,
  `product_image` text NOT NULL,
  `description` text NOT NULL,
  `quantity` int(11) NOT NULL,
  PRIMARY KEY (`product_id`)
) ENGINE=MyISAM AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`product_id`, `product_name`, `category_id`, `price`, `serve_for`, `product_image`, `description`, `quantity`) VALUES
(1, 'Бараа', 1, 15000, 'Available', 'upload/images/5816-2017-03-04.png', '<p>Дэлгэрэнгүй тайлбар</p>\r\n', 1),
(2, 'Бараа', 1, 15000, 'Available', 'upload/images/5816-2017-03-04.png', '<p>Дэлгэрэнгүй тайлбар</p>\r\n', 1),
(3, 'Бараа', 1, 15000, 'Available', 'upload/images/5816-2017-03-04.png', '<p>Дэлгэрэнгүй тайлбар</p>\r\n', 1),
(4, 'Бараа', 1, 15000, 'Available', 'upload/images/5816-2017-03-04.png', '<p>Дэлгэрэнгүй тайлбар</p>\r\n', 1),
(5, 'Бараа', 1, 15000, 'Available', 'upload/images/5816-2017-03-04.png', '<p>Дэлгэрэнгүй тайлбар</p>\r\n', 1),
(6, 'Бараа', 1, 15000, 'Available', 'upload/images/5816-2017-03-04.png', '<p>Дэлгэрэнгүй тайлбар</p>\r\n', 1),
(7, 'Бараа', 1, 15000, 'Available', 'upload/images/5816-2017-03-04.png', '<p>Дэлгэрэнгүй тайлбар</p>\r\n', 1),
(8, 'Бараа', 1, 15000, 'Available', 'upload/images/5816-2017-03-04.png', '<p>Дэлгэрэнгүй тайлбар</p>\r\n', 1),
(9, 'Бараа', 1, 15000, 'Available', 'upload/images/5816-2017-03-04.png', '<p>Дэлгэрэнгүй тайлбар</p>\r\n', 1),
(10, 'Бараа', 2, 15000, 'Available', 'upload/images/5816-2017-03-04.png', '<p>Дэлгэрэнгүй тайлбар</p>\r\n', 1),
(11, 'Бараа', 2, 15000, 'Available', 'upload/images/5816-2017-03-04.png', '<p>Дэлгэрэнгүй тайлбар</p>\r\n', 1),
(12, 'Бараа', 2, 15000, 'Available', 'upload/images/5816-2017-03-04.png', '<p>Дэлгэрэнгүй тайлбар</p>\r\n', 1),
(13, 'Бараа', 2, 15000, 'Available', 'upload/images/5816-2017-03-04.png', '<p>Дэлгэрэнгүй тайлбар</p>\r\n', 1),
(14, 'Бараа', 2, 15000, 'Available', 'upload/images/5816-2017-03-04.png', '<p>Дэлгэрэнгүй тайлбар</p>\r\n', 1);


CREATE TABLE IF NOT EXISTS `setting` (
  `variable` varchar(20) NOT NULL,
  `value` varchar(5) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;


INSERT INTO `setting` (`variable`, `value`) VALUES
('tax', '0'),
('currency', 'MNT');

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(15) NOT NULL,
  `password` text NOT NULL,
  `email` varchar(100) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `username`, `password`, `email`) VALUES
(1, 'admin', 'd82494f05d6917ba02f7aaa29689ccb444bb73f20380876cb05d1f37537b7892', 'toroo.byamba@gmail.com');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
