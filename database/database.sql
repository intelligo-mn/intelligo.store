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
  `Category_ID` int(11) NOT NULL AUTO_INCREMENT,
  `Category_name` varchar(20) NOT NULL,
  `Category_image` text NOT NULL,
  PRIMARY KEY (`Category_ID`)
) ENGINE=MyISAM AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`Category_ID`, `Category_name`, `Category_image`) VALUES
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
  `department_ID` int(11) NOT NULL AUTO_INCREMENT,
  `department_name` varchar(20) NOT NULL,
  `department_image` text NOT NULL,
  PRIMARY KEY (`department_ID`)
) ENGINE=MyISAM AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `department`
--

INSERT INTO `department` (`department_ID`, `department_name`, `department_image`) VALUES
(1, 'Боловсрол', 'upload/images/5615-2017-03-04.png'),
(2, 'Байгаль орчин', 'upload/images/8195-2017-03-04.png'),
(3, 'Барилга угсралт', 'upload/images/8571-2017-03-04.png'),
(4, 'Гэр ахуй', 'upload/images/2787-2017-03-04.png');
-- --------------------------------------------------------

--
-- Table structure for table `company`
--

DROP TABLE IF EXISTS `company`;
CREATE TABLE IF NOT EXISTS `company` (
  `company_ID` int(11) NOT NULL AUTO_INCREMENT,
  `company_name` varchar(20) NOT NULL,
  `company_image` text NOT NULL,
  PRIMARY KEY (`company_ID`)
) ENGINE=MyISAM AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `company`
--

INSERT INTO `company` (`company_ID`, `company_name`, `company_image`) VALUES
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
  `Product_ID` int(11) NOT NULL AUTO_INCREMENT,
  `Product_name` varchar(50) NOT NULL,
  `Category_ID` int(11) NOT NULL,
  `Price` double NOT NULL,
  `Serve_for` varchar(45) NOT NULL,
  `Product_image` text NOT NULL,
  `Description` text NOT NULL,
  `Quantity` int(11) NOT NULL,
  PRIMARY KEY (`Product_ID`)
) ENGINE=MyISAM AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`Product_ID`, `Product_name`, `Category_ID`, `Price`, `Serve_for`, `Product_image`, `Description`, `Quantity`) VALUES
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
  `Variable` varchar(20) NOT NULL,
  `Value` varchar(5) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;


INSERT INTO `setting` (`Variable`, `Value`) VALUES
('Tax', '0'),
('Currency', 'MNT');

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `Username` varchar(15) NOT NULL,
  `Password` text NOT NULL,
  `Email` varchar(100) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`ID`, `Username`, `Password`, `Email`) VALUES
(1, 'admin', 'd82494f05d6917ba02f7aaa29689ccb444bb73f20380876cb05d1f37537b7892', 'toroo.byamba@gmail.com');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
