-- phpMyAdmin SQL Dump
-- version 4.0.10deb1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: May 28, 2016 at 05:43 PM
-- Server version: 5.5.49-0ubuntu0.14.04.1
-- PHP Version: 5.5.9-1ubuntu4.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `modu`
--

-- --------------------------------------------------------

--
-- Table structure for table `brands`
--

CREATE TABLE IF NOT EXISTS `brands` (
  `brand_id` int(100) NOT NULL AUTO_INCREMENT,
  `brand_title` text COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`brand_id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=3 ;

--
-- Dumping data for table `brands`
--

INSERT INTO `brands` (`brand_id`, `brand_title`) VALUES
(1, 'Apple'),
(2, 'Microsoft');

-- --------------------------------------------------------

--
-- Table structure for table `cart`
--

CREATE TABLE IF NOT EXISTS `cart` (
  `pro_id` int(100) NOT NULL,
  `user_ip` varchar(255) NOT NULL,
  `totq` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE IF NOT EXISTS `category` (
  `cat_id` int(100) NOT NULL AUTO_INCREMENT,
  `cat_title` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`cat_id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=4 ;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`cat_id`, `cat_title`) VALUES
(1, 'Book'),
(2, 'Computer'),
(3, 'ббыйб');

-- --------------------------------------------------------

--
-- Table structure for table `menu`
--

CREATE TABLE IF NOT EXISTS `menu` (
  `menu_id` int(100) NOT NULL AUTO_INCREMENT,
  `menu_title` text COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`menu_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `menus`
--

CREATE TABLE IF NOT EXISTS `menus` (
  `menu_id` int(100) NOT NULL AUTO_INCREMENT,
  `menu_title` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `menu_url` varchar(255) CHARACTER SET latin1 NOT NULL,
  PRIMARY KEY (`menu_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=3 ;

--
-- Dumping data for table `menus`
--

INSERT INTO `menus` (`menu_id`, `menu_title`, `menu_url`) VALUES
(1, 'Нүүр хуудас', '#'),
(2, 'Бараа нэмэх', '/admin/add.php');

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE IF NOT EXISTS `product` (
  `product_id` int(255) NOT NULL AUTO_INCREMENT,
  `product_cat` int(255) NOT NULL,
  `product_brand` int(255) NOT NULL,
  `product_title` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `product_price` int(255) NOT NULL,
  `product_desc` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `product_image` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `product_keywords` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`product_id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=6 ;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`product_id`, `product_cat`, `product_brand`, `product_title`, `product_price`, `product_desc`, `product_image`, `product_keywords`) VALUES
(3, 1, 1, 'das', 0, '<p>dsad</p>', '12755413_917377748383969_1363239992_o.jpg', 'dasd'),
(4, 1, 1, 'dasdasd', 1, '<p>asdas</p>', '12755413_917377748383969_1363239992_o.jpg', 'dasd'),
(5, 2, 1, 'dasdasd', 111, '<p>dasdas</p>', '12755413_917377748383969_1363239992_o.jpg', 'dasda');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
