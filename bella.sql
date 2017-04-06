-- phpMyAdmin SQL Dump
-- version 4.5.2
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Nov 21, 2016 at 12:24 PM
-- Server version: 5.7.9
-- PHP Version: 5.6.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bella`
--

-- --------------------------------------------------------

--
-- Table structure for table `action_types`
--

DROP TABLE IF EXISTS `action_types`;
CREATE TABLE IF NOT EXISTS `action_types` (
  `id` int(10) UNSIGNED NOT NULL,
  `source_type` enum('tag','order','free_product','order_detail','paypal') COLLATE utf8_unicode_ci NOT NULL,
  `action` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `action_types`
--

INSERT INTO `action_types` (`id`, `source_type`, `action`) VALUES
(1, 'order', 'open'),
(2, 'order', 'pending'),
(3, 'order', 'comment'),
(8, 'order', 'closed'),
(9, 'order', 'cancelled'),
(10, 'order', 'received'),
(11, 'order', 'sent'),
(14, 'order', 'rate'),
(15, 'order', 'processing'),
(6, 'order', 'reload points'),
(7, 'order', 'check out'),
(4, 'order_detail', 'create'),
(5, 'order_detail', 'update'),
(12, 'free_product', 'check out'),
(13, 'paypal', 'buy points');

-- --------------------------------------------------------

--
-- Table structure for table `addresses`
--

DROP TABLE IF EXISTS `addresses`;
CREATE TABLE IF NOT EXISTS `addresses` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `user_id` int(10) UNSIGNED DEFAULT NULL,
  `default` tinyint(1) NOT NULL DEFAULT '1',
  `line1` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `line2` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `phone` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `name_contact` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `zipcode` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `city` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `country` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `state` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `addresses_user_id_foreign` (`user_id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `addresses`
--

INSERT INTO `addresses` (`id`, `user_id`, `default`, `line1`, `line2`, `phone`, `name_contact`, `zipcode`, `city`, `country`, `state`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 4, 0, '', 'UB', '+1794504648045', 'IT Park', '33489-1767', 'Ulaanbaatar', 'Mongolia', 'Sukhbaatar', '2016-11-20 19:01:20', '2016-11-20 19:01:20', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `businesses`
--

DROP TABLE IF EXISTS `businesses`;
CREATE TABLE IF NOT EXISTS `businesses` (
  `user_id` int(10) UNSIGNED NOT NULL,
  `business_name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `creation_date` date NOT NULL,
  `local_phone` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `rate_val` int(11) DEFAULT NULL,
  `rate_count` int(11) DEFAULT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `businesses`
--

INSERT INTO `businesses` (`user_id`, `business_name`, `creation_date`, `local_phone`, `rate_val`, `rate_count`) VALUES
(12, 'Huels-Predovic', '2006-12-13', '+0487858536901', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
CREATE TABLE IF NOT EXISTS `categories` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `category_id` int(10) UNSIGNED DEFAULT NULL,
  `name` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `description` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `icon` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `image` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '1',
  `type` enum('group','store') COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `categories_category_id_foreign` (`category_id`)
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `category_id`, `name`, `description`, `icon`, `image`, `status`, `type`, `created_at`, `updated_at`) VALUES
(1, NULL, 'Арьс арчилгаа', 'Qui dolores soluta illo tempore. Ut voluptate ut vitae assumenda.', 'fui-mic', 'test', 1, 'store', '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(2, NULL, 'Нүүр будалт', 'Culpa numquam sed et distinctio dolorem qui qui aliquam.', 'fui-user', 'test', 1, 'group', '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(3, NULL, 'Үс бие арчилгаа', 'Animi ea beatae ex at itaque unde. Et qui quo in aut fugit praesentium nobis.', 'fui-search', 'test', 1, 'store', '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(4, NULL, 'Үнэртэй ус', 'Omnis sit facere officiis eum architecto.', 'fui-info-circle', 'test', 1, 'group', '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(5, NULL, 'Эрүүл мэнд', 'Molestias tenetur et sed et laboriosam ut. Modi beatae quasi aliquid.', 'fui-location', 'test', 1, 'store', '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(6, NULL, 'Дижитал бараа', 'Tempora rem aut neque earum quos accusantium et nihil. Aut voluptas maiores nam ut.', 'fui-list', 'test', 1, 'group', '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(7, NULL, 'Багц', 'Cumque magnam similique ea quo. Et repudiandae quidem quaerat excepturi.', 'fui-info-circle', 'test', 1, 'store', '2016-11-20 19:01:20', '2016-11-20 19:01:20');

-- --------------------------------------------------------

--
-- Table structure for table `comments`
--

DROP TABLE IF EXISTS `comments`;
CREATE TABLE IF NOT EXISTS `comments` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `action_type_id` int(10) UNSIGNED NOT NULL,
  `source_id` int(10) UNSIGNED NOT NULL,
  `user_id` int(10) UNSIGNED NOT NULL,
  `comment` varchar(500) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `comments_action_type_id_foreign` (`action_type_id`),
  KEY `comments_user_id_foreign` (`user_id`)
) ENGINE=MyISAM AUTO_INCREMENT=21 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `comments`
--

INSERT INTO `comments` (`id`, `action_type_id`, `source_id`, `user_id`, `comment`, `created_at`, `updated_at`) VALUES
(1, 10, 374379, 5, 'Et voluptatem et earum dolorem officia enim.', '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(2, 10, 3909, 3, 'Dolorem doloremque non aut ipsa.', '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(3, 5, 171146, 5, 'Quasi laborum reiciendis ut voluptatem.', '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(4, 11, 979275, 4, 'Autem eveniet nihil et occaecati quis.', '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(5, 7, 537287, 12, 'Sunt tempore error qui sed modi aut commodi.', '2016-11-20 19:01:21', '2016-11-20 19:01:21'),
(6, 14, 223193, 5, 'Enim tenetur omnis at similique.', '2016-11-20 19:01:21', '2016-11-20 19:01:21'),
(7, 10, 808298, 12, 'Quam doloribus itaque ut et rem eos.', '2016-11-20 19:01:21', '2016-11-20 19:01:21'),
(8, 3, 14391, 2, 'Temporibus quod ut tenetur sequi est totam qui.', '2016-11-20 19:01:21', '2016-11-20 19:01:21'),
(9, 7, 559155, 5, 'Commodi est laudantium ut dicta ut.', '2016-11-20 19:01:21', '2016-11-20 19:01:21'),
(10, 4, 380159, 8, 'Aspernatur maxime perspiciatis modi eligendi.', '2016-11-20 19:01:21', '2016-11-20 19:01:21'),
(11, 8, 389127, 10, 'Eum eum corporis quaerat beatae tempora.', '2016-11-20 19:01:21', '2016-11-20 19:01:21'),
(12, 6, 301385, 1, 'Qui pariatur hic atque fuga.', '2016-11-20 19:01:21', '2016-11-20 19:01:21'),
(13, 6, 781073, 2, 'Sed non qui et et rerum commodi.', '2016-11-20 19:01:21', '2016-11-20 19:01:21'),
(14, 6, 158845, 7, 'Magnam aut ipsum nemo.', '2016-11-20 19:01:21', '2016-11-20 19:01:21'),
(15, 15, 797292, 6, 'Rerum veniam et aliquid nihil neque laborum sit.', '2016-11-20 19:01:21', '2016-11-20 19:01:21'),
(16, 15, 311474, 10, 'Nemo sit minus voluptatem ea ab.', '2016-11-20 19:01:21', '2016-11-20 19:01:21'),
(17, 6, 280601, 2, 'Non saepe ipsa dolorem facilis.', '2016-11-20 19:01:21', '2016-11-20 19:01:21'),
(18, 4, 363164, 1, 'Eaque quia quos rem a eaque est sed.', '2016-11-20 19:01:21', '2016-11-20 19:01:21'),
(19, 3, 174671, 12, 'Officia esse qui sed vel vel qui.', '2016-11-20 19:01:21', '2016-11-20 19:01:21'),
(20, 2, 615194, 8, 'Qui saepe quam dolorum sed minima neque.', '2016-11-20 19:01:21', '2016-11-20 19:01:21');

-- --------------------------------------------------------

--
-- Table structure for table `company`
--

DROP TABLE IF EXISTS `company`;
CREATE TABLE IF NOT EXISTS `company` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `contact_email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `sales_email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `support_email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `status` enum('active','inactive') COLLATE utf8_unicode_ci NOT NULL DEFAULT 'active',
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `website_name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `slogan` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `logo` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `theme` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `phone_number` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `cell_phone` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `address` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `state` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `city` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `zip_code` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `website` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `twitter` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `facebook` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `google_plus` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `facebook_app_id` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `description` longtext COLLATE utf8_unicode_ci NOT NULL,
  `keywords` longtext COLLATE utf8_unicode_ci NOT NULL,
  `about_us` longtext COLLATE utf8_unicode_ci NOT NULL,
  `refund_policy` longtext COLLATE utf8_unicode_ci NOT NULL,
  `privacy_policy` longtext COLLATE utf8_unicode_ci NOT NULL,
  `terms_of_service` longtext COLLATE utf8_unicode_ci NOT NULL,
  `google_maps_key_api` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `company_email_unique` (`email`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `company`
--

INSERT INTO `company` (`id`, `email`, `contact_email`, `sales_email`, `support_email`, `status`, `name`, `website_name`, `slogan`, `logo`, `theme`, `phone_number`, `cell_phone`, `address`, `state`, `city`, `zip_code`, `website`, `twitter`, `facebook`, `google_plus`, `facebook_app_id`, `description`, `keywords`, `about_us`, `refund_policy`, `privacy_policy`, `terms_of_service`, `google_maps_key_api`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 'info@bella.mn', 'contact@bella.mn', 'sales@bella.mn', 'support@bella.mn', 'active', 'Bella', 'Bella', 'bella', '/img/pt-default/133.jpg', '', '+5622282423765', '+8567160539538', 'MGl', 'Mongolia', 'Ulaanbaatar', '11289-7866', 'http://bella.mn', 'Bella', 'Bella', 'Bella', '90f3df864da6681f233f1ef82cb655c4', 'Bella salon', 'Salon, makeup', 'Бидний тухай', 'law.refund', 'law.privacy', 'law.terms', 'AIzaSyCutQnEgrqX8W2X-nBCYB7-CbsTC-LlRMw', '2016-11-20 19:01:21', '2016-11-20 19:01:21', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `company_features`
--

DROP TABLE IF EXISTS `company_features`;
CREATE TABLE IF NOT EXISTS `company_features` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `company_id` int(10) UNSIGNED NOT NULL,
  `description` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `company_features_company_id_foreign` (`company_id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `company_features`
--

INSERT INTO `company_features` (`id`, `company_id`, `description`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 1, 'Үнэгүй', '2016-11-20 19:01:21', '2016-11-20 19:01:21', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `logs`
--

DROP TABLE IF EXISTS `logs`;
CREATE TABLE IF NOT EXISTS `logs` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `action_type_id` int(10) UNSIGNED NOT NULL,
  `source_id` int(10) UNSIGNED NOT NULL,
  `user_id` int(10) UNSIGNED NOT NULL,
  `details` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `logs_action_type_id_foreign` (`action_type_id`),
  KEY `logs_user_id_foreign` (`user_id`)
) ENGINE=MyISAM AUTO_INCREMENT=41 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `logs`
--

INSERT INTO `logs` (`id`, `action_type_id`, `source_id`, `user_id`, `details`, `created_at`, `updated_at`) VALUES
(1, 1, 1, 4, 'Order #1 open', '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(2, 1, 2, 4, 'Order #2 open', '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(3, 1, 3, 4, 'Order #3 open', '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(4, 2, 4, 4, 'Order #4 pending', '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(5, 1, 5, 4, 'Order #5 open', '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(6, 1, 6, 4, 'Order #6 open', '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(7, 9, 7, 4, 'Order #7 cancelled', '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(8, 1, 8, 4, 'Order #8 open', '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(9, 1, 9, 4, 'Order #9 open', '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(10, 1, 10, 4, 'Order #10 open', '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(11, 1, 11, 4, 'Order #11 open', '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(12, 1, 12, 4, 'Order #12 open', '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(13, 1, 13, 4, 'Order #13 open', '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(14, 1, 14, 4, 'Order #14 open', '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(15, 10, 15, 4, 'Order #15 received', '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(16, 1, 16, 4, 'Order #16 open', '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(17, 1, 17, 4, 'Order #17 open', '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(18, 1, 18, 4, 'Order #18 open', '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(19, 1, 19, 4, 'Order #19 open', '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(20, 1, 20, 4, 'Order #20 open', '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(21, 15, 656968, 6, 'Sunt nesciunt quo a sit.', '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(22, 5, 523680, 5, 'Aut deserunt odio nisi culpa.', '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(23, 10, 75775, 11, 'Minima vel optio quod magni.', '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(24, 6, 763137, 5, 'Illum doloribus assumenda aut a.', '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(25, 11, 120895, 7, 'Neque quasi quam ratione.', '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(26, 15, 781212, 7, 'Eligendi aut quasi cupiditate fuga commodi eum.', '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(27, 1, 76382, 7, 'Eos saepe nam quisquam ut nesciunt et quis.', '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(28, 1, 461915, 8, 'Iste perferendis quo deserunt et error.', '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(29, 4, 787706, 9, 'Corporis omnis quibusdam fuga rerum dolorum.', '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(30, 13, 558229, 7, 'Dolore a molestiae velit ut.', '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(31, 6, 897297, 12, 'Non reprehenderit animi cumque et tempora.', '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(32, 14, 270412, 5, 'Error officiis ex quas sequi voluptates qui.', '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(33, 7, 755883, 11, 'Ipsam qui quibusdam culpa aut.', '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(34, 7, 491021, 3, 'Veritatis praesentium doloribus saepe accusamus.', '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(35, 9, 867320, 8, 'Tenetur architecto corporis qui.', '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(36, 3, 445709, 1, 'At totam a rerum qui qui minima.', '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(37, 14, 67510, 3, 'Est perspiciatis numquam quis et.', '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(38, 1, 95308, 3, 'Eos qui et veritatis sed.', '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(39, 7, 733145, 7, 'Porro voluptatem cum quia assumenda dolores.', '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(40, 11, 480058, 4, 'Autem nemo accusamus cum dolorem eveniet qui eum.', '2016-11-20 19:01:20', '2016-11-20 19:01:20');

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

DROP TABLE IF EXISTS `migrations`;
CREATE TABLE IF NOT EXISTS `migrations` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `migration` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=21 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2016_11_15_130736_create_addresses_table', 1),
(4, '2016_11_15_130755_create_product_table', 1),
(5, '2016_11_15_130817_create_categories_table', 1),
(6, '2016_11_15_130854_create_orders_table', 1),
(7, '2016_11_15_130917_create_product_details_table', 1),
(8, '2016_11_15_130946_create_product_offers_table', 1),
(9, '2016_11_15_131040_create_order_details_table', 1),
(10, '2016_11_15_131115_create_comments_table', 1),
(11, '2016_11_15_131141_create_user_points_table', 1),
(12, '2016_11_15_131317_create_action_types_table', 1),
(13, '2016_11_15_131327_create_logs_table', 1),
(14, '2016_11_15_131343_create_notices_table', 1),
(15, '2016_11_16_154443_create_type_preferences_table', 1),
(16, '2016_11_16_154509_create_persons_table', 1),
(17, '2016_11_16_154538_create_bussiness_table', 1),
(18, '2016_11_16_154621_create_company_table', 1),
(19, '2016_11_16_154644_create_company_features_table', 1),
(20, '2016_11_17_054420_create_change_zipcode_addresses_table', 1);

-- --------------------------------------------------------

--
-- Table structure for table `notices`
--

DROP TABLE IF EXISTS `notices`;
CREATE TABLE IF NOT EXISTS `notices` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `user_id` int(10) UNSIGNED NOT NULL,
  `sender_id` int(10) UNSIGNED NOT NULL,
  `action_type_id` int(10) UNSIGNED NOT NULL,
  `source_id` int(10) UNSIGNED NOT NULL,
  `status` enum('new','unread','read') COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `notices_user_id_foreign` (`user_id`),
  KEY `notices_sender_id_foreign` (`sender_id`),
  KEY `notices_action_type_id_foreign` (`action_type_id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `notices`
--

INSERT INTO `notices` (`id`, `user_id`, `sender_id`, `action_type_id`, `source_id`, `status`, `created_at`, `updated_at`) VALUES
(1, 4, 3, 2, 4, 'new', '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(2, 3, 4, 9, 7, 'new', '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(3, 4, 3, 9, 7, 'new', '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(4, 3, 4, 1, 20, 'new', '2016-11-20 19:01:20', '2016-11-20 19:01:20');

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
CREATE TABLE IF NOT EXISTS `orders` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `user_id` int(10) UNSIGNED NOT NULL,
  `address_id` int(10) UNSIGNED DEFAULT NULL,
  `seller_id` int(10) UNSIGNED DEFAULT NULL,
  `status` enum('cancelled','closed','open','paid','pending','received','sent') COLLATE utf8_unicode_ci NOT NULL,
  `type` enum('cart','wishlist','order','later','freeproduct') COLLATE utf8_unicode_ci NOT NULL,
  `description` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `end_date` datetime DEFAULT NULL,
  `rate` int(11) DEFAULT NULL,
  `rate_comment` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `rate_mail_sent` tinyint(1) NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `orders_user_id_foreign` (`user_id`),
  KEY `orders_address_id_foreign` (`address_id`),
  KEY `orders_seller_id_foreign` (`seller_id`)
) ENGINE=MyISAM AUTO_INCREMENT=21 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`id`, `user_id`, `address_id`, `seller_id`, `status`, `type`, `description`, `end_date`, `rate`, `rate_comment`, `rate_mail_sent`, `created_at`, `updated_at`) VALUES
(1, 4, 1, 3, 'open', 'wishlist', 'and Sons', NULL, NULL, NULL, 0, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(2, 4, 1, 3, 'open', 'cart', '', NULL, NULL, NULL, 0, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(3, 4, 1, 3, 'open', 'cart', '', NULL, NULL, NULL, 0, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(4, 4, 1, 3, 'pending', 'order', '', NULL, NULL, NULL, 0, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(5, 4, 1, 3, 'open', 'cart', '', NULL, NULL, NULL, 0, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(6, 4, 1, 3, 'open', 'wishlist', 'Ltd', NULL, NULL, NULL, 0, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(7, 4, 1, 3, 'cancelled', 'order', '', '1985-01-25 21:32:21', NULL, NULL, 0, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(8, 4, 1, 3, 'open', 'cart', '', NULL, NULL, NULL, 0, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(9, 4, 1, 3, 'open', 'cart', '', NULL, NULL, NULL, 0, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(10, 4, 1, 3, 'open', 'cart', '', NULL, NULL, NULL, 0, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(11, 4, 1, 3, 'open', 'cart', '', NULL, NULL, NULL, 0, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(12, 4, 1, 3, 'open', 'wishlist', 'PLC', NULL, NULL, NULL, 0, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(13, 4, 1, 3, 'open', 'cart', '', NULL, NULL, NULL, 0, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(14, 4, 1, 3, 'open', 'wishlist', 'and Sons', NULL, NULL, NULL, 0, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(15, 4, 1, 3, 'received', 'order', '', NULL, NULL, NULL, 0, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(16, 4, 1, 3, 'open', 'wishlist', 'and Sons', NULL, NULL, NULL, 0, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(17, 4, 1, 3, 'open', 'cart', '', NULL, NULL, NULL, 0, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(18, 4, 1, 3, 'open', 'wishlist', 'PLC', NULL, NULL, NULL, 0, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(19, 4, 1, 3, 'open', 'wishlist', 'LLC', NULL, NULL, NULL, 0, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(20, 4, 1, 3, 'open', 'order', '', NULL, NULL, NULL, 0, '2016-11-20 19:01:20', '2016-11-20 19:01:20');

-- --------------------------------------------------------

--
-- Table structure for table `order_details`
--

DROP TABLE IF EXISTS `order_details`;
CREATE TABLE IF NOT EXISTS `order_details` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `order_id` int(10) UNSIGNED NOT NULL,
  `product_id` int(10) UNSIGNED NOT NULL,
  `price` double(10,2) NOT NULL,
  `quantity` int(11) NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '1',
  `delivery_date` datetime DEFAULT NULL,
  `rate` int(11) DEFAULT NULL,
  `rate_comment` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `order_details_product_id_foreign` (`product_id`),
  KEY `order_details_order_id_foreign` (`order_id`)
) ENGINE=MyISAM AUTO_INCREMENT=74 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `order_details`
--

INSERT INTO `order_details` (`id`, `order_id`, `product_id`, `price`, `quantity`, `status`, `delivery_date`, `rate`, `rate_comment`, `created_at`, `updated_at`) VALUES
(1, 1, 5, 37.00, 3, 1, NULL, NULL, NULL, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(2, 1, 81, 22.00, 3, 1, NULL, NULL, NULL, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(3, 1, 39, 71.00, 3, 1, '1997-04-21 22:37:08', NULL, NULL, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(4, 1, 51, 78.00, 3, 1, NULL, NULL, NULL, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(5, 1, 95, 54.00, 3, 1, NULL, NULL, NULL, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(6, 2, 76, 32.00, 12, 1, '1989-11-11 08:18:56', NULL, NULL, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(7, 2, 47, 25.00, 12, 1, NULL, NULL, NULL, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(8, 2, 99, 14.00, 12, 1, '1990-05-24 21:48:08', NULL, NULL, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(9, 2, 35, 9.00, 12, 1, NULL, NULL, NULL, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(10, 3, 56, 8.00, 18, 1, NULL, NULL, NULL, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(11, 3, 25, 20.00, 18, 1, '1971-02-16 05:35:18', NULL, NULL, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(12, 3, 81, 22.00, 18, 1, '2015-02-23 05:01:51', NULL, NULL, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(13, 3, 16, 52.00, 18, 1, NULL, NULL, NULL, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(14, 3, 9, 16.00, 18, 1, '2015-12-14 13:56:32', NULL, NULL, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(15, 4, 60, 67.00, 8, 1, '1985-09-12 22:09:22', NULL, NULL, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(16, 4, 21, 28.00, 8, 1, NULL, NULL, NULL, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(17, 4, 36, 59.00, 8, 1, NULL, NULL, NULL, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(18, 4, 44, 52.00, 8, 1, NULL, NULL, NULL, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(19, 4, 39, 71.00, 8, 1, NULL, NULL, NULL, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(20, 5, 1, 19.00, 12, 1, '1999-01-21 06:07:00', NULL, NULL, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(21, 5, 80, 52.00, 12, 1, '2012-06-01 13:27:36', NULL, NULL, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(22, 5, 64, 24.00, 12, 1, NULL, NULL, NULL, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(23, 5, 52, 69.00, 12, 1, NULL, NULL, NULL, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(24, 5, 15, 78.00, 12, 1, NULL, NULL, NULL, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(25, 6, 91, 93.00, 8, 1, NULL, NULL, NULL, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(26, 6, 31, 72.00, 8, 1, '1970-09-11 00:10:14', NULL, NULL, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(27, 7, 97, 7.00, 12, 1, NULL, NULL, NULL, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(28, 7, 10, 99.00, 12, 1, NULL, NULL, NULL, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(29, 7, 85, 78.00, 12, 1, NULL, NULL, NULL, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(30, 7, 8, 80.00, 12, 1, NULL, NULL, NULL, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(31, 7, 58, 86.00, 12, 1, NULL, NULL, NULL, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(32, 8, 84, 72.00, 17, 1, '1981-08-23 09:56:45', NULL, NULL, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(33, 8, 49, 57.00, 17, 1, '2015-11-25 14:13:05', NULL, NULL, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(34, 8, 30, 30.00, 17, 1, '2002-07-16 04:10:31', NULL, NULL, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(35, 9, 79, 94.00, 3, 1, NULL, NULL, NULL, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(36, 9, 68, 4.00, 3, 1, NULL, NULL, NULL, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(37, 9, 1, 19.00, 3, 1, '1991-09-21 08:02:28', NULL, NULL, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(38, 10, 91, 93.00, 12, 1, NULL, NULL, NULL, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(39, 10, 25, 20.00, 12, 1, NULL, NULL, NULL, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(40, 10, 67, 73.00, 12, 1, NULL, NULL, NULL, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(41, 10, 41, 78.00, 12, 1, NULL, NULL, NULL, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(42, 10, 53, 92.00, 12, 1, NULL, NULL, NULL, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(43, 11, 52, 69.00, 9, 1, NULL, NULL, NULL, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(44, 11, 66, 1.00, 9, 1, NULL, NULL, NULL, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(45, 11, 99, 14.00, 9, 1, '2009-04-14 03:12:26', NULL, NULL, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(46, 11, 45, 5.00, 9, 1, '2007-07-26 02:48:42', NULL, NULL, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(47, 11, 13, 19.00, 9, 1, NULL, NULL, NULL, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(48, 12, 65, 56.00, 15, 1, NULL, NULL, NULL, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(49, 12, 72, 82.00, 15, 1, NULL, NULL, NULL, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(50, 13, 96, 70.00, 5, 1, '1970-09-04 10:12:29', NULL, NULL, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(51, 13, 36, 59.00, 5, 1, '1998-01-29 09:37:52', NULL, NULL, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(52, 14, 10, 99.00, 20, 1, '1983-01-31 20:06:18', NULL, NULL, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(53, 14, 47, 25.00, 20, 1, '1975-06-07 18:08:59', NULL, NULL, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(54, 14, 52, 69.00, 20, 1, NULL, NULL, NULL, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(55, 14, 87, 6.00, 20, 1, '2001-05-23 12:17:14', NULL, NULL, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(56, 15, 84, 72.00, 1, 1, '2016-06-24 09:00:02', NULL, NULL, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(57, 15, 91, 93.00, 1, 1, '1970-08-10 21:14:20', NULL, NULL, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(58, 16, 14, 25.00, 4, 1, '1976-06-30 23:01:54', NULL, NULL, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(59, 16, 98, 23.00, 4, 1, '1989-11-14 06:28:06', NULL, NULL, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(60, 16, 74, 24.00, 4, 1, '1999-11-15 00:31:55', NULL, NULL, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(61, 16, 41, 78.00, 4, 1, '1990-06-24 03:29:04', NULL, NULL, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(62, 16, 15, 78.00, 4, 1, '1993-04-30 16:25:20', NULL, NULL, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(63, 17, 16, 52.00, 18, 1, '2007-08-14 10:13:17', NULL, NULL, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(64, 17, 36, 59.00, 18, 1, '2011-06-28 17:02:13', NULL, NULL, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(65, 18, 36, 59.00, 14, 1, '1992-12-07 10:43:22', NULL, NULL, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(66, 18, 72, 82.00, 14, 1, '2012-05-08 22:21:44', NULL, NULL, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(67, 18, 12, 65.00, 14, 1, '1973-09-02 13:10:13', NULL, NULL, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(68, 19, 15, 78.00, 5, 1, '2004-03-16 02:43:01', NULL, NULL, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(69, 19, 26, 5.00, 5, 1, '2003-03-31 11:28:26', NULL, NULL, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(70, 19, 42, 70.00, 5, 1, NULL, NULL, NULL, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(71, 20, 40, 25.00, 8, 1, NULL, NULL, NULL, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(72, 20, 8, 80.00, 8, 1, NULL, NULL, NULL, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(73, 20, 90, 81.00, 8, 1, NULL, NULL, NULL, '2016-11-20 19:01:20', '2016-11-20 19:01:20');

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

DROP TABLE IF EXISTS `password_resets`;
CREATE TABLE IF NOT EXISTS `password_resets` (
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  KEY `password_resets_email_index` (`email`),
  KEY `password_resets_token_index` (`token`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `persons`
--

DROP TABLE IF EXISTS `persons`;
CREATE TABLE IF NOT EXISTS `persons` (
  `user_id` int(10) UNSIGNED NOT NULL,
  `first_name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `last_name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `birthday` date DEFAULT NULL,
  `sex` enum('female','male') COLLATE utf8_unicode_ci NOT NULL,
  `home_phone` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `persons`
--

INSERT INTO `persons` (`user_id`, `first_name`, `last_name`, `birthday`, `sex`, `home_phone`) VALUES
(1, 'Admin', 'root', '1996-06-24', 'male', '+8830738074221'),
(2, 'Odell', 'Konopelski', '1994-11-04', 'male', '+7718314304095'),
(3, 'Nash', 'Dare', '1976-11-22', 'female', '+9432641370836'),
(4, 'Johnson', 'Rodriguez', '1981-02-28', 'female', '+2739559631451'),
(5, 'Luis', 'Steuber', '1988-03-29', 'female', '+6522626785926'),
(6, 'Blake', 'Schaden', '1979-09-12', 'male', '+3971610358382'),
(7, 'Wilbert', 'Nolan', '1984-05-27', 'male', '+2006969759230'),
(8, 'Kylee', 'Parisian', '1988-02-10', 'female', '+2745983416024'),
(9, 'Tessie', 'Flatley', '1995-02-07', 'female', '+3752112735845'),
(10, 'Camron', 'Macejkovic', '1991-02-18', 'male', '+8720839816106'),
(11, 'Diana', 'Schulist', '1988-06-29', 'male', '+2034179396122');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
CREATE TABLE IF NOT EXISTS `products` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `category_id` int(10) UNSIGNED NOT NULL,
  `user_id` int(10) UNSIGNED NOT NULL,
  `parent_id` int(11) DEFAULT NULL,
  `products_group` int(10) UNSIGNED DEFAULT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '1',
  `type` enum('item','key','software','software_key','gift_card','freeproduct') COLLATE utf8_unicode_ci NOT NULL,
  `name` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `description` varchar(500) COLLATE utf8_unicode_ci NOT NULL,
  `price` double(10,2) NOT NULL,
  `stock` int(11) NOT NULL,
  `low_stock` int(11) NOT NULL DEFAULT '0',
  `bar_code` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `brand` varchar(30) COLLATE utf8_unicode_ci DEFAULT NULL,
  `condition` enum('new','refurbished','used') COLLATE utf8_unicode_ci NOT NULL,
  `tags` json DEFAULT NULL,
  `features` json NOT NULL,
  `rate_val` double(10,2) DEFAULT NULL,
  `rate_count` int(11) DEFAULT NULL,
  `sale_counts` int(10) UNSIGNED NOT NULL,
  `view_counts` int(10) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `products_user_id_foreign` (`user_id`),
  KEY `products_category_id_foreign` (`category_id`)
) ENGINE=MyISAM AUTO_INCREMENT=102 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `category_id`, `user_id`, `parent_id`, `products_group`, `status`, `type`, `name`, `description`, `price`, `stock`, `low_stock`, `bar_code`, `brand`, `condition`, `tags`, `features`, `rate_val`, `rate_count`, `sale_counts`, `view_counts`, `created_at`, `updated_at`) VALUES
(1, 4, 3, NULL, NULL, 1, '', '16 BRAND FINGERPEN', '', 19.00, 41, 5, NULL, '16 Brand', 'refurbished', '"16 BRAND FINGERPEN,16 BRAND FINGERPEN,16 BRAND FINGERPEN"', '{"images": ["/img/pt-default/5.jpg", "/img/pt-default/4.jpg", "/img/pt-default/1.jpg", "/img/pt-default/3.jpg", "/img/pt-default/6.jpg"]}', NULL, NULL, 838112269, 1, '2016-11-20 19:01:20', '2016-11-21 04:23:29'),
(2, 3, 3, NULL, NULL, 1, '', '16 BLUR PACT SPF50+PA+++', '', 75.00, 46, 10, NULL, 'DayCell', 'used', '"16 BRAND FINGERPEN,16 BRAND FINGERPEN,16 BRAND FINGERPEN"', '{"images": ["/img/pt-default/3.jpg", "/img/pt-default/4.jpg", "/img/pt-default/5.jpg", "/img/pt-default/2.jpg", "/img/pt-default/1.jpg"]}', NULL, NULL, 68936958, 384452245, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(3, 4, 3, NULL, NULL, 1, '', '16 BRAND BRICKIT SHADOW', '', 14.00, 44, 5, NULL, 'DayCell', 'new', '"16 BRAND FINGERPEN,16 BRAND FINGERPEN,16 BRAND FINGERPEN"', '{"images": ["/img/pt-default/5.jpg", "/img/pt-default/2.jpg", "/img/pt-default/5.jpg", "/img/pt-default/6.jpg", "/img/pt-default/7.jpg"]}', NULL, NULL, 293505556, 10290359, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(4, 3, 3, NULL, NULL, 1, '', '16 BLUR PACT SPF50+PA+++', '', 71.00, 41, 15, NULL, 'Clinique', 'used', '"16 BRAND FINGERPEN,16 BRAND FINGERPEN,16 BRAND FINGERPEN"', '{"images": ["/img/pt-default/6.jpg", "/img/pt-default/8.jpg", "/img/pt-default/2.jpg", "/img/pt-default/8.jpg", "/img/pt-default/7.jpg"]}', NULL, NULL, 380635288, 562752331, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(5, 5, 3, NULL, NULL, 1, '', 'PINK TONE UP', '', 37.00, 28, 15, NULL, '16 Brand', 'new', '"16 BRAND FOUNDATION,16 BRAND FOUNDATION,16 BRAND FOUNDATION"', '{"images": ["/img/pt-default/3.jpg", "/img/pt-default/6.jpg", "/img/pt-default/2.jpg", "/img/pt-default/7.jpg", "/img/pt-default/4.jpg"]}', NULL, NULL, 714797548, 693467141, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(6, 5, 3, NULL, NULL, 1, '', '16 BRAND FINGERPEN', '', 69.00, 44, 10, NULL, 'Son Park', 'refurbished', '"16 BRAND FINGERPEN,16 BRAND FINGERPEN,16 BRAND FINGERPEN"', '{"images": ["/img/pt-default/8.jpg", "/img/pt-default/3.jpg", "/img/pt-default/8.jpg", "/img/pt-default/3.jpg", "/img/pt-default/2.jpg"]}', NULL, NULL, 145742780, 763123629, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(7, 7, 3, NULL, NULL, 1, '', '16 BRAND FINGERPEN', '', 38.00, 20, 10, NULL, 'Skin1004', 'new', '"16 BRAND FINGERPEN,16 BRAND FINGERPEN,16 BRAND FINGERPEN"', '{"images": ["/img/pt-default/3.jpg", "/img/pt-default/7.jpg", "/img/pt-default/3.jpg", "/img/pt-default/6.jpg", "/img/pt-default/8.jpg"]}', NULL, NULL, 28369663, 248917174, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(8, 3, 3, NULL, NULL, 1, '', '16 BRAND FINGERPEN', '', 80.00, 30, 5, NULL, 'Ottie', 'new', '"16 BRAND FOUNDATION,16 BRAND FOUNDATION,16 BRAND FOUNDATION"', '{"images": ["/img/pt-default/4.jpg", "/img/pt-default/3.jpg", "/img/pt-default/2.jpg", "/img/pt-default/1.jpg", "/img/pt-default/3.jpg"]}', NULL, NULL, 530621006, 389190342, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(9, 3, 3, NULL, NULL, 1, '', '16 BLUR PACT SPF50+PA+++', '', 16.00, 50, 10, NULL, 'Skin1004', 'used', '"16 BRAND BRICKIT SHADOW,16 BRAND BRICKIT SHADOW,16 BRAND BRICKIT SHADOW"', '{"images": ["/img/pt-default/6.jpg", "/img/pt-default/1.jpg", "/img/pt-default/3.jpg", "/img/pt-default/4.jpg", "/img/pt-default/6.jpg"]}', NULL, NULL, 454163814, 548016781, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(10, 5, 3, NULL, NULL, 1, '', '16 BRAND BRICKIT SHADOW', '', 99.00, 29, 15, NULL, '16 Brand', 'used', '"PINK TONE UP,PINK TONE UP,PINK TONE UP"', '{"images": ["/img/pt-default/2.jpg", "/img/pt-default/6.jpg", "/img/pt-default/7.jpg", "/img/pt-default/3.jpg", "/img/pt-default/1.jpg"]}', NULL, NULL, 266555964, 360945623, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(11, 4, 3, NULL, NULL, 1, '', '16 BRAND BRICKIT SHADOW', '', 91.00, 37, 15, NULL, 'Ottie', 'refurbished', '"PINK TONE UP,PINK TONE UP,PINK TONE UP"', '{"images": ["/img/pt-default/2.jpg", "/img/pt-default/6.jpg", "/img/pt-default/7.jpg", "/img/pt-default/6.jpg", "/img/pt-default/4.jpg"]}', NULL, NULL, 42770448, 163029419, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(12, 4, 3, NULL, NULL, 1, '', '16 BLUR PACT SPF50+PA+++', '', 65.00, 22, 15, NULL, 'DayCell', 'new', '"PINK TONE UP,PINK TONE UP,PINK TONE UP"', '{"images": ["/img/pt-default/7.jpg", "/img/pt-default/7.jpg", "/img/pt-default/1.jpg", "/img/pt-default/5.jpg", "/img/pt-default/3.jpg"]}', NULL, NULL, 959379985, 658677423, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(13, 7, 3, NULL, NULL, 1, '', '16 BRAND FINGERPEN', '', 19.00, 24, 10, NULL, 'DayCell', 'used', '"PINK TONE UP,PINK TONE UP,PINK TONE UP"', '{"images": ["/img/pt-default/4.jpg", "/img/pt-default/3.jpg", "/img/pt-default/6.jpg", "/img/pt-default/1.jpg", "/img/pt-default/2.jpg"]}', NULL, NULL, 866209315, 224047323, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(14, 1, 3, NULL, NULL, 1, '', '16 BRAND BRICKIT SHADOW', '', 25.00, 29, 5, NULL, 'Skin1004', 'new', '"16 BLUR PACT SPF50+PA+++,16 BLUR PACT SPF50+PA+++,16 BLUR PACT SPF50+PA+++"', '{"images": ["/img/pt-default/4.jpg", "/img/pt-default/4.jpg", "/img/pt-default/7.jpg", "/img/pt-default/4.jpg", "/img/pt-default/7.jpg"]}', NULL, NULL, 754358130, 385018227, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(15, 6, 3, NULL, NULL, 1, '', '16 BRAND FINGERPEN', '', 78.00, 36, 15, NULL, 'Son Park', 'used', '"16 BRAND FINGERPEN,16 BRAND FINGERPEN,16 BRAND FINGERPEN"', '{"images": ["/img/pt-default/6.jpg", "/img/pt-default/7.jpg", "/img/pt-default/5.jpg", "/img/pt-default/3.jpg", "/img/pt-default/5.jpg"]}', NULL, NULL, 497884719, 885631610, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(16, 4, 3, NULL, NULL, 1, '', '16 BRAND FOUNDATION', '', 52.00, 39, 15, NULL, 'DayCell', 'used', '"16 BRAND BRICKIT SHADOW,16 BRAND BRICKIT SHADOW,16 BRAND BRICKIT SHADOW"', '{"images": ["/img/pt-default/2.jpg", "/img/pt-default/1.jpg", "/img/pt-default/6.jpg", "/img/pt-default/8.jpg", "/img/pt-default/1.jpg"]}', NULL, NULL, 53521503, 442734728, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(17, 5, 3, NULL, NULL, 1, '', 'PINK TONE UP', '', 33.00, 40, 15, NULL, 'Clinique', 'used', '"16 BLUR PACT SPF50+PA+++,16 BLUR PACT SPF50+PA+++,16 BLUR PACT SPF50+PA+++"', '{"images": ["/img/pt-default/5.jpg", "/img/pt-default/3.jpg", "/img/pt-default/1.jpg", "/img/pt-default/6.jpg", "/img/pt-default/4.jpg"]}', NULL, NULL, 494971314, 156360170, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(18, 3, 3, NULL, NULL, 1, '', 'PINK TONE UP', '', 97.00, 21, 5, NULL, 'Skin1004', 'new', '"16 BRAND FINGERPEN,16 BRAND FINGERPEN,16 BRAND FINGERPEN"', '{"images": ["/img/pt-default/5.jpg", "/img/pt-default/5.jpg", "/img/pt-default/3.jpg", "/img/pt-default/5.jpg", "/img/pt-default/1.jpg"]}', NULL, NULL, 545709101, 6721991, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(19, 5, 3, NULL, NULL, 1, '', '16 BRAND FINGERPEN', '', 64.00, 21, 10, NULL, 'Son Park', 'refurbished', '"16 BRAND FINGERPEN,16 BRAND FINGERPEN,16 BRAND FINGERPEN"', '{"images": ["/img/pt-default/3.jpg", "/img/pt-default/2.jpg", "/img/pt-default/7.jpg", "/img/pt-default/6.jpg", "/img/pt-default/6.jpg"]}', NULL, NULL, 57140061, 544199530, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(20, 3, 3, NULL, NULL, 1, '', '16 BRAND FINGERPEN', '', 11.00, 50, 10, NULL, '16 Brand', 'new', '"16 BRAND FINGERPEN,16 BRAND FINGERPEN,16 BRAND FINGERPEN"', '{"images": ["/img/pt-default/5.jpg", "/img/pt-default/3.jpg", "/img/pt-default/5.jpg", "/img/pt-default/2.jpg", "/img/pt-default/4.jpg"]}', NULL, NULL, 787394467, 669357978, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(21, 6, 3, NULL, NULL, 1, '', '16 BLUR PACT SPF50+PA+++', '', 28.00, 26, 5, NULL, 'DayCell', 'used', '"16 BRAND FINGERPEN,16 BRAND FINGERPEN,16 BRAND FINGERPEN"', '{"images": ["/img/pt-default/4.jpg", "/img/pt-default/2.jpg", "/img/pt-default/6.jpg", "/img/pt-default/3.jpg", "/img/pt-default/2.jpg"]}', NULL, NULL, 23073143, 529944963, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(22, 1, 3, NULL, NULL, 1, '', '16 BLUR PACT SPF50+PA+++', '', 72.00, 39, 10, NULL, 'Skin1004', 'new', '"16 BRAND FOUNDATION,16 BRAND FOUNDATION,16 BRAND FOUNDATION"', '{"images": ["/img/pt-default/4.jpg", "/img/pt-default/6.jpg", "/img/pt-default/1.jpg", "/img/pt-default/2.jpg", "/img/pt-default/8.jpg"]}', NULL, NULL, 235871834, 857007870, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(23, 1, 3, NULL, NULL, 1, '', 'PINK TONE UP', '', 91.00, 41, 15, NULL, 'Son Park', 'new', '"16 BRAND FINGERPEN,16 BRAND FINGERPEN,16 BRAND FINGERPEN"', '{"images": ["/img/pt-default/4.jpg", "/img/pt-default/2.jpg", "/img/pt-default/1.jpg", "/img/pt-default/5.jpg", "/img/pt-default/5.jpg"]}', NULL, NULL, 370966073, 926522359, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(24, 6, 3, NULL, NULL, 1, '', 'PINK TONE UP', '', 64.00, 42, 5, NULL, 'DayCell', 'new', '"16 BRAND FINGERPEN,16 BRAND FINGERPEN,16 BRAND FINGERPEN"', '{"images": ["/img/pt-default/7.jpg", "/img/pt-default/5.jpg", "/img/pt-default/1.jpg", "/img/pt-default/6.jpg", "/img/pt-default/1.jpg"]}', NULL, NULL, 76013341, 539416514, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(25, 6, 3, NULL, NULL, 1, '', '16 BRAND FINGERPEN', '', 20.00, 20, 5, NULL, '16 Brand', 'refurbished', '"PINK TONE UP,PINK TONE UP,PINK TONE UP"', '{"images": ["/img/pt-default/7.jpg", "/img/pt-default/1.jpg", "/img/pt-default/7.jpg", "/img/pt-default/1.jpg", "/img/pt-default/1.jpg"]}', NULL, NULL, 617595029, 816107359, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(26, 5, 3, NULL, NULL, 1, '', '16 BRAND FINGERPEN', '', 5.00, 22, 5, NULL, '16 Brand', 'refurbished', '"16 BRAND FINGERPEN,16 BRAND FINGERPEN,16 BRAND FINGERPEN"', '{"images": ["/img/pt-default/3.jpg", "/img/pt-default/1.jpg", "/img/pt-default/7.jpg", "/img/pt-default/5.jpg", "/img/pt-default/7.jpg"]}', NULL, NULL, 44887093, 533509226, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(27, 2, 3, NULL, NULL, 1, '', '16 BRAND FINGERPEN', '', 29.00, 46, 5, NULL, 'Ottie', 'new', '"16 BLUR PACT SPF50+PA+++,16 BLUR PACT SPF50+PA+++,16 BLUR PACT SPF50+PA+++"', '{"images": ["/img/pt-default/7.jpg", "/img/pt-default/4.jpg", "/img/pt-default/1.jpg", "/img/pt-default/3.jpg", "/img/pt-default/8.jpg"]}', NULL, NULL, 424201060, 974086798, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(28, 4, 3, NULL, NULL, 1, '', '16 BRAND FINGERPEN', '', 79.00, 41, 5, NULL, 'Clinique', 'used', '"16 BRAND BRICKIT SHADOW,16 BRAND BRICKIT SHADOW,16 BRAND BRICKIT SHADOW"', '{"images": ["/img/pt-default/5.jpg", "/img/pt-default/1.jpg", "/img/pt-default/3.jpg", "/img/pt-default/4.jpg", "/img/pt-default/7.jpg"]}', NULL, NULL, 488788805, 984211388, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(29, 5, 3, NULL, NULL, 1, '', '16 BRAND BRICKIT SHADOW', '', 32.00, 45, 10, NULL, 'Skin1004', 'refurbished', '"16 BRAND FINGERPEN,16 BRAND FINGERPEN,16 BRAND FINGERPEN"', '{"images": ["/img/pt-default/7.jpg", "/img/pt-default/6.jpg", "/img/pt-default/5.jpg", "/img/pt-default/5.jpg", "/img/pt-default/7.jpg"]}', NULL, NULL, 870914382, 220351885, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(30, 6, 3, NULL, NULL, 1, '', '16 BRAND FINGERPEN', '', 30.00, 44, 5, NULL, 'Clinique', 'new', '"16 BRAND FINGERPEN,16 BRAND FINGERPEN,16 BRAND FINGERPEN"', '{"images": ["/img/pt-default/6.jpg", "/img/pt-default/5.jpg", "/img/pt-default/3.jpg", "/img/pt-default/5.jpg", "/img/pt-default/1.jpg"]}', NULL, NULL, 646217958, 104899275, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(31, 3, 3, NULL, NULL, 1, '', '16 BRAND FOUNDATION', '', 72.00, 23, 5, NULL, 'Ottie', 'refurbished', '"16 BRAND FINGERPEN,16 BRAND FINGERPEN,16 BRAND FINGERPEN"', '{"images": ["/img/pt-default/6.jpg", "/img/pt-default/6.jpg", "/img/pt-default/8.jpg", "/img/pt-default/8.jpg", "/img/pt-default/8.jpg"]}', NULL, NULL, 797028858, 457815587, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(32, 1, 3, NULL, NULL, 1, '', '16 BRAND BRICKIT SHADOW', '', 16.00, 46, 10, NULL, 'Skin1004', 'new', '"16 BRAND FOUNDATION,16 BRAND FOUNDATION,16 BRAND FOUNDATION"', '{"images": ["/img/pt-default/1.jpg", "/img/pt-default/2.jpg", "/img/pt-default/4.jpg", "/img/pt-default/7.jpg", "/img/pt-default/4.jpg"]}', NULL, NULL, 993039729, 723623603, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(33, 1, 3, NULL, NULL, 1, '', 'PINK TONE UP', '', 59.00, 39, 15, NULL, '16 Brand', 'new', '"16 BRAND FINGERPEN,16 BRAND FINGERPEN,16 BRAND FINGERPEN"', '{"images": ["/img/pt-default/4.jpg", "/img/pt-default/7.jpg", "/img/pt-default/1.jpg", "/img/pt-default/2.jpg", "/img/pt-default/3.jpg"]}', NULL, NULL, 725603542, 722751969, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(34, 6, 3, NULL, NULL, 1, '', '16 BRAND BRICKIT SHADOW', '', 53.00, 29, 15, NULL, 'DayCell', 'refurbished', '"16 BRAND FINGERPEN,16 BRAND FINGERPEN,16 BRAND FINGERPEN"', '{"images": ["/img/pt-default/2.jpg", "/img/pt-default/1.jpg", "/img/pt-default/5.jpg", "/img/pt-default/5.jpg", "/img/pt-default/7.jpg"]}', NULL, NULL, 911467762, 392323412, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(35, 4, 3, NULL, NULL, 1, '', '16 BRAND BRICKIT SHADOW', '', 9.00, 29, 10, NULL, 'Son Park', 'new', '"16 BRAND DRAW COLOR,16 BRAND DRAW COLOR,16 BRAND DRAW COLOR"', '{"images": ["/img/pt-default/1.jpg", "/img/pt-default/6.jpg", "/img/pt-default/1.jpg", "/img/pt-default/7.jpg", "/img/pt-default/8.jpg"]}', NULL, NULL, 953741186, 608911076, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(36, 3, 3, NULL, NULL, 1, '', '16 BRAND FINGERPEN', '', 59.00, 43, 15, NULL, 'Clinique', 'refurbished', '"16 BRAND BRICKIT SHADOW,16 BRAND BRICKIT SHADOW,16 BRAND BRICKIT SHADOW"', '{"images": ["/img/pt-default/2.jpg", "/img/pt-default/1.jpg", "/img/pt-default/2.jpg", "/img/pt-default/6.jpg", "/img/pt-default/5.jpg"]}', NULL, NULL, 247387082, 12496601, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(37, 4, 3, NULL, NULL, 1, '', '16 BLUR PACT SPF50+PA+++', '', 39.00, 32, 15, NULL, 'Ottie', 'new', '"16 BRAND DRAW COLOR,16 BRAND DRAW COLOR,16 BRAND DRAW COLOR"', '{"images": ["/img/pt-default/3.jpg", "/img/pt-default/1.jpg", "/img/pt-default/2.jpg", "/img/pt-default/1.jpg", "/img/pt-default/5.jpg"]}', NULL, NULL, 832120608, 971707867, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(38, 4, 3, NULL, NULL, 1, '', '16 BLUR PACT SPF50+PA+++', '', 92.00, 33, 5, NULL, 'Skin1004', 'used', '"PINK TONE UP,PINK TONE UP,PINK TONE UP"', '{"images": ["/img/pt-default/4.jpg", "/img/pt-default/2.jpg", "/img/pt-default/4.jpg", "/img/pt-default/5.jpg", "/img/pt-default/3.jpg"]}', NULL, NULL, 303279577, 576733735, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(39, 6, 3, NULL, NULL, 1, '', '16 BRAND FINGERPEN', '', 71.00, 48, 15, NULL, 'Son Park', 'used', '"16 BLUR PACT SPF50+PA+++,16 BLUR PACT SPF50+PA+++,16 BLUR PACT SPF50+PA+++"', '{"images": ["/img/pt-default/4.jpg", "/img/pt-default/5.jpg", "/img/pt-default/4.jpg", "/img/pt-default/3.jpg", "/img/pt-default/8.jpg"]}', NULL, NULL, 224229670, 887595103, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(40, 7, 3, NULL, NULL, 1, '', '16 BRAND FINGERPEN', '', 25.00, 29, 5, NULL, '16 Brand', 'used', '"16 BRAND FINGERPEN,16 BRAND FINGERPEN,16 BRAND FINGERPEN"', '{"images": ["/img/pt-default/7.jpg", "/img/pt-default/4.jpg", "/img/pt-default/1.jpg", "/img/pt-default/8.jpg", "/img/pt-default/7.jpg"]}', NULL, NULL, 468517245, 498000075, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(41, 6, 3, NULL, NULL, 1, '', '16 BRAND FINGERPEN', '', 78.00, 32, 5, NULL, 'Son Park', 'refurbished', '"16 BRAND DRAW COLOR,16 BRAND DRAW COLOR,16 BRAND DRAW COLOR"', '{"images": ["/img/pt-default/5.jpg", "/img/pt-default/1.jpg", "/img/pt-default/6.jpg", "/img/pt-default/5.jpg", "/img/pt-default/1.jpg"]}', NULL, NULL, 899234922, 412832966, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(42, 4, 3, NULL, NULL, 1, '', '16 BRAND FINGERPEN', '', 70.00, 26, 15, NULL, 'Skin1004', 'new', '"16 BRAND DRAW COLOR,16 BRAND DRAW COLOR,16 BRAND DRAW COLOR"', '{"images": ["/img/pt-default/1.jpg", "/img/pt-default/6.jpg", "/img/pt-default/8.jpg", "/img/pt-default/7.jpg", "/img/pt-default/2.jpg"]}', NULL, NULL, 747860858, 652166753, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(43, 6, 3, NULL, NULL, 1, '', 'PINK TONE UP', '', 33.00, 40, 10, NULL, '16 Brand', 'refurbished', '"16 BRAND FOUNDATION,16 BRAND FOUNDATION,16 BRAND FOUNDATION"', '{"images": ["/img/pt-default/5.jpg", "/img/pt-default/4.jpg", "/img/pt-default/7.jpg", "/img/pt-default/4.jpg", "/img/pt-default/7.jpg"]}', NULL, NULL, 580786934, 128779565, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(44, 6, 3, NULL, NULL, 1, '', '16 BRAND FOUNDATION', '', 52.00, 43, 10, NULL, '16 Brand', 'new', '"16 BRAND FINGERPEN,16 BRAND FINGERPEN,16 BRAND FINGERPEN"', '{"images": ["/img/pt-default/2.jpg", "/img/pt-default/1.jpg", "/img/pt-default/2.jpg", "/img/pt-default/6.jpg", "/img/pt-default/7.jpg"]}', NULL, NULL, 31332853, 771711828, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(45, 1, 3, NULL, NULL, 1, '', '16 BRAND FINGERPEN', '', 5.00, 36, 5, NULL, 'Son Park', 'used', '"16 BLUR PACT SPF50+PA+++,16 BLUR PACT SPF50+PA+++,16 BLUR PACT SPF50+PA+++"', '{"images": ["/img/pt-default/1.jpg", "/img/pt-default/1.jpg", "/img/pt-default/8.jpg", "/img/pt-default/4.jpg", "/img/pt-default/4.jpg"]}', NULL, NULL, 701228363, 30744462, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(46, 2, 3, NULL, NULL, 1, '', '16 BRAND FINGERPEN', '', 28.00, 48, 5, NULL, 'DayCell', 'used', '"PINK TONE UP,PINK TONE UP,PINK TONE UP"', '{"images": ["/img/pt-default/4.jpg", "/img/pt-default/1.jpg", "/img/pt-default/7.jpg", "/img/pt-default/6.jpg", "/img/pt-default/7.jpg"]}', NULL, NULL, 473800835, 247900560, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(47, 1, 3, NULL, NULL, 1, '', '16 BRAND FINGERPEN', '', 25.00, 22, 15, NULL, 'Skin1004', 'refurbished', '"16 BRAND DRAW COLOR,16 BRAND DRAW COLOR,16 BRAND DRAW COLOR"', '{"images": ["/img/pt-default/2.jpg", "/img/pt-default/3.jpg", "/img/pt-default/1.jpg", "/img/pt-default/2.jpg", "/img/pt-default/6.jpg"]}', NULL, NULL, 19605690, 588116040, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(48, 7, 3, NULL, NULL, 1, '', '16 BRAND FOUNDATION', '', 2.00, 30, 10, NULL, '16 Brand', 'used', '"16 BRAND BRICKIT SHADOW,16 BRAND BRICKIT SHADOW,16 BRAND BRICKIT SHADOW"', '{"images": ["/img/pt-default/5.jpg", "/img/pt-default/6.jpg", "/img/pt-default/1.jpg", "/img/pt-default/8.jpg", "/img/pt-default/1.jpg"]}', NULL, NULL, 94461957, 53613528, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(49, 5, 3, NULL, NULL, 1, '', '16 BRAND FINGERPEN', '', 57.00, 36, 5, NULL, 'Skin1004', 'used', '"16 BRAND FOUNDATION,16 BRAND FOUNDATION,16 BRAND FOUNDATION"', '{"images": ["/img/pt-default/8.jpg", "/img/pt-default/2.jpg", "/img/pt-default/5.jpg", "/img/pt-default/8.jpg", "/img/pt-default/7.jpg"]}', NULL, NULL, 499941635, 690957016, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(50, 5, 3, NULL, NULL, 1, '', '16 BLUR PACT SPF50+PA+++', '', 95.00, 40, 10, NULL, 'DayCell', 'refurbished', '"16 BRAND DRAW COLOR,16 BRAND DRAW COLOR,16 BRAND DRAW COLOR"', '{"images": ["/img/pt-default/7.jpg", "/img/pt-default/3.jpg", "/img/pt-default/1.jpg", "/img/pt-default/6.jpg", "/img/pt-default/3.jpg"]}', NULL, NULL, 424485854, 846856718, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(51, 2, 3, NULL, NULL, 1, '', '16 BRAND DRAW COLOR', '', 78.00, 38, 5, NULL, 'DayCell', 'refurbished', '"PINK TONE UP,PINK TONE UP,PINK TONE UP"', '{"images": ["/img/pt-default/5.jpg", "/img/pt-default/7.jpg", "/img/pt-default/3.jpg", "/img/pt-default/4.jpg", "/img/pt-default/5.jpg"]}', NULL, NULL, 614410988, 363106246, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(52, 3, 3, NULL, NULL, 1, '', '16 BRAND BRICKIT SHADOW', '', 69.00, 42, 15, NULL, 'Skin1004', 'refurbished', '"16 BRAND FINGERPEN,16 BRAND FINGERPEN,16 BRAND FINGERPEN"', '{"images": ["/img/pt-default/3.jpg", "/img/pt-default/1.jpg", "/img/pt-default/8.jpg", "/img/pt-default/2.jpg", "/img/pt-default/8.jpg"]}', NULL, NULL, 375709956, 931936763, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(53, 1, 3, NULL, NULL, 1, '', '16 BRAND FINGERPEN', '', 92.00, 33, 15, NULL, 'DayCell', 'refurbished', '"16 BLUR PACT SPF50+PA+++,16 BLUR PACT SPF50+PA+++,16 BLUR PACT SPF50+PA+++"', '{"images": ["/img/pt-default/4.jpg", "/img/pt-default/4.jpg", "/img/pt-default/2.jpg", "/img/pt-default/2.jpg", "/img/pt-default/3.jpg"]}', NULL, NULL, 300733108, 263101289, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(54, 2, 3, NULL, NULL, 1, '', '16 BRAND FINGERPEN', '', 75.00, 26, 10, NULL, 'Son Park', 'new', '"PINK TONE UP,PINK TONE UP,PINK TONE UP"', '{"images": ["/img/pt-default/6.jpg", "/img/pt-default/7.jpg", "/img/pt-default/7.jpg", "/img/pt-default/4.jpg", "/img/pt-default/1.jpg"]}', NULL, NULL, 626769767, 86718975, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(55, 5, 3, NULL, NULL, 1, '', 'PINK TONE UP', '', 56.00, 45, 15, NULL, 'Ottie', 'new', '"16 BRAND DRAW COLOR,16 BRAND DRAW COLOR,16 BRAND DRAW COLOR"', '{"images": ["/img/pt-default/4.jpg", "/img/pt-default/1.jpg", "/img/pt-default/5.jpg", "/img/pt-default/3.jpg", "/img/pt-default/6.jpg"]}', NULL, NULL, 496600820, 606651539, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(56, 2, 3, NULL, NULL, 1, '', '16 BRAND BRICKIT SHADOW', '', 8.00, 26, 10, NULL, 'DayCell', 'new', '"16 BLUR PACT SPF50+PA+++,16 BLUR PACT SPF50+PA+++,16 BLUR PACT SPF50+PA+++"', '{"images": ["/img/pt-default/4.jpg", "/img/pt-default/4.jpg", "/img/pt-default/5.jpg", "/img/pt-default/2.jpg", "/img/pt-default/6.jpg"]}', NULL, NULL, 68813776, 737422664, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(57, 3, 3, NULL, NULL, 1, '', '16 BRAND BRICKIT SHADOW', '', 50.00, 20, 5, NULL, '16 Brand', 'new', '"16 BRAND FINGERPEN,16 BRAND FINGERPEN,16 BRAND FINGERPEN"', '{"images": ["/img/pt-default/5.jpg", "/img/pt-default/8.jpg", "/img/pt-default/1.jpg", "/img/pt-default/5.jpg", "/img/pt-default/5.jpg"]}', NULL, NULL, 999968308, 586280561, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(58, 6, 3, NULL, NULL, 1, '', '16 BRAND BRICKIT SHADOW', '', 86.00, 45, 10, NULL, 'Son Park', 'used', '"16 BRAND FOUNDATION,16 BRAND FOUNDATION,16 BRAND FOUNDATION"', '{"images": ["/img/pt-default/8.jpg", "/img/pt-default/6.jpg", "/img/pt-default/6.jpg", "/img/pt-default/7.jpg", "/img/pt-default/7.jpg"]}', NULL, NULL, 757907914, 108200255, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(59, 7, 3, NULL, NULL, 1, '', '16 BLUR PACT SPF50+PA+++', '', 58.00, 48, 10, NULL, 'Skin1004', 'new', '"16 BRAND FOUNDATION,16 BRAND FOUNDATION,16 BRAND FOUNDATION"', '{"images": ["/img/pt-default/1.jpg", "/img/pt-default/1.jpg", "/img/pt-default/8.jpg", "/img/pt-default/3.jpg", "/img/pt-default/7.jpg"]}', NULL, NULL, 481396613, 435658300, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(60, 2, 3, NULL, NULL, 1, '', '16 BRAND DRAW COLOR', '', 67.00, 43, 15, NULL, '16 Brand', 'refurbished', '"16 BRAND BRICKIT SHADOW,16 BRAND BRICKIT SHADOW,16 BRAND BRICKIT SHADOW"', '{"images": ["/img/pt-default/6.jpg", "/img/pt-default/5.jpg", "/img/pt-default/7.jpg", "/img/pt-default/7.jpg", "/img/pt-default/8.jpg"]}', NULL, NULL, 155266664, 639507517, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(61, 5, 3, NULL, NULL, 1, '', 'PINK TONE UP', '', 50.00, 44, 15, NULL, 'Ottie', 'refurbished', '"16 BRAND DRAW COLOR,16 BRAND DRAW COLOR,16 BRAND DRAW COLOR"', '{"images": ["/img/pt-default/7.jpg", "/img/pt-default/6.jpg", "/img/pt-default/7.jpg", "/img/pt-default/6.jpg", "/img/pt-default/4.jpg"]}', NULL, NULL, 536660169, 890422849, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(62, 3, 3, NULL, NULL, 1, '', 'PINK TONE UP', '', 78.00, 43, 15, NULL, 'Son Park', 'new', '"16 BRAND DRAW COLOR,16 BRAND DRAW COLOR,16 BRAND DRAW COLOR"', '{"images": ["/img/pt-default/4.jpg", "/img/pt-default/7.jpg", "/img/pt-default/8.jpg", "/img/pt-default/3.jpg", "/img/pt-default/6.jpg"]}', NULL, NULL, 738992887, 97364957, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(63, 4, 3, NULL, NULL, 1, '', '16 BRAND FOUNDATION', '', 37.00, 44, 10, NULL, 'Son Park', 'used', '"16 BRAND FINGERPEN,16 BRAND FINGERPEN,16 BRAND FINGERPEN"', '{"images": ["/img/pt-default/8.jpg", "/img/pt-default/1.jpg", "/img/pt-default/8.jpg", "/img/pt-default/4.jpg", "/img/pt-default/7.jpg"]}', NULL, NULL, 553819013, 366699411, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(64, 5, 3, NULL, NULL, 1, '', '16 BRAND BRICKIT SHADOW', '', 24.00, 35, 10, NULL, '16 Brand', 'used', '"16 BRAND FOUNDATION,16 BRAND FOUNDATION,16 BRAND FOUNDATION"', '{"images": ["/img/pt-default/5.jpg", "/img/pt-default/2.jpg", "/img/pt-default/1.jpg", "/img/pt-default/3.jpg", "/img/pt-default/3.jpg"]}', NULL, NULL, 343099642, 342971433, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(65, 5, 3, NULL, NULL, 1, '', '16 BRAND FINGERPEN', '', 56.00, 43, 15, NULL, 'Clinique', 'used', '"16 BRAND FINGERPEN,16 BRAND FINGERPEN,16 BRAND FINGERPEN"', '{"images": ["/img/pt-default/5.jpg", "/img/pt-default/4.jpg", "/img/pt-default/5.jpg", "/img/pt-default/5.jpg", "/img/pt-default/2.jpg"]}', NULL, NULL, 55033283, 123620138, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(66, 5, 3, NULL, NULL, 1, '', 'PINK TONE UP', '', 1.00, 32, 5, NULL, 'Ottie', 'refurbished', '"16 BRAND BRICKIT SHADOW,16 BRAND BRICKIT SHADOW,16 BRAND BRICKIT SHADOW"', '{"images": ["/img/pt-default/4.jpg", "/img/pt-default/8.jpg", "/img/pt-default/5.jpg", "/img/pt-default/7.jpg", "/img/pt-default/2.jpg"]}', NULL, NULL, 857751548, 366469203, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(67, 1, 3, NULL, NULL, 1, '', 'PINK TONE UP', '', 73.00, 34, 5, NULL, 'DayCell', 'new', '"16 BRAND DRAW COLOR,16 BRAND DRAW COLOR,16 BRAND DRAW COLOR"', '{"images": ["/img/pt-default/6.jpg", "/img/pt-default/4.jpg", "/img/pt-default/3.jpg", "/img/pt-default/6.jpg", "/img/pt-default/1.jpg"]}', NULL, NULL, 959091854, 719304473, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(68, 2, 3, NULL, NULL, 1, '', '16 BRAND DRAW COLOR', '', 4.00, 25, 10, NULL, 'Skin1004', 'refurbished', '"16 BRAND BRICKIT SHADOW,16 BRAND BRICKIT SHADOW,16 BRAND BRICKIT SHADOW"', '{"images": ["/img/pt-default/6.jpg", "/img/pt-default/3.jpg", "/img/pt-default/8.jpg", "/img/pt-default/2.jpg", "/img/pt-default/3.jpg"]}', NULL, NULL, 492753476, 211334323, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(69, 7, 3, NULL, NULL, 1, '', '16 BLUR PACT SPF50+PA+++', '', 42.00, 20, 15, NULL, 'Ottie', 'used', '"PINK TONE UP,PINK TONE UP,PINK TONE UP"', '{"images": ["/img/pt-default/1.jpg", "/img/pt-default/1.jpg", "/img/pt-default/6.jpg", "/img/pt-default/3.jpg", "/img/pt-default/1.jpg"]}', NULL, NULL, 266803894, 616215691, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(70, 7, 3, NULL, NULL, 1, '', 'PINK TONE UP', '', 99.00, 25, 15, NULL, '16 Brand', 'used', '"16 BRAND DRAW COLOR,16 BRAND DRAW COLOR,16 BRAND DRAW COLOR"', '{"images": ["/img/pt-default/2.jpg", "/img/pt-default/7.jpg", "/img/pt-default/5.jpg", "/img/pt-default/1.jpg", "/img/pt-default/8.jpg"]}', NULL, NULL, 841227096, 711367775, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(71, 5, 3, NULL, NULL, 1, '', '16 BLUR PACT SPF50+PA+++', '', 86.00, 43, 5, NULL, 'Ottie', 'used', '"16 BRAND DRAW COLOR,16 BRAND DRAW COLOR,16 BRAND DRAW COLOR"', '{"images": ["/img/pt-default/5.jpg", "/img/pt-default/5.jpg", "/img/pt-default/4.jpg", "/img/pt-default/8.jpg", "/img/pt-default/6.jpg"]}', NULL, NULL, 766989438, 445660938, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(72, 1, 3, NULL, NULL, 1, '', '16 BRAND BRICKIT SHADOW', '', 82.00, 25, 10, NULL, 'Son Park', 'new', '"PINK TONE UP,PINK TONE UP,PINK TONE UP"', '{"images": ["/img/pt-default/1.jpg", "/img/pt-default/5.jpg", "/img/pt-default/4.jpg", "/img/pt-default/3.jpg", "/img/pt-default/1.jpg"]}', NULL, NULL, 53573412, 417974394, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(73, 5, 3, NULL, NULL, 1, '', '16 BRAND FINGERPEN', '', 84.00, 29, 15, NULL, 'DayCell', 'used', '"PINK TONE UP,PINK TONE UP,PINK TONE UP"', '{"images": ["/img/pt-default/5.jpg", "/img/pt-default/5.jpg", "/img/pt-default/7.jpg", "/img/pt-default/6.jpg", "/img/pt-default/6.jpg"]}', NULL, NULL, 911265313, 196457940, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(74, 1, 3, NULL, NULL, 1, '', '16 BRAND DRAW COLOR', '', 24.00, 46, 15, NULL, 'Skin1004', 'refurbished', '"16 BLUR PACT SPF50+PA+++,16 BLUR PACT SPF50+PA+++,16 BLUR PACT SPF50+PA+++"', '{"images": ["/img/pt-default/8.jpg", "/img/pt-default/7.jpg", "/img/pt-default/3.jpg", "/img/pt-default/2.jpg", "/img/pt-default/5.jpg"]}', NULL, NULL, 420808958, 275140792, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(75, 6, 3, NULL, NULL, 1, '', '16 BRAND BRICKIT SHADOW', '', 52.00, 28, 10, NULL, '16 Brand', 'refurbished', '"16 BRAND FINGERPEN,16 BRAND FINGERPEN,16 BRAND FINGERPEN"', '{"images": ["/img/pt-default/8.jpg", "/img/pt-default/8.jpg", "/img/pt-default/3.jpg", "/img/pt-default/2.jpg", "/img/pt-default/1.jpg"]}', NULL, NULL, 444785928, 471966604, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(76, 3, 3, NULL, NULL, 1, '', '16 BRAND FINGERPEN', '', 32.00, 46, 15, NULL, 'DayCell', 'new', '"PINK TONE UP,PINK TONE UP,PINK TONE UP"', '{"images": ["/img/pt-default/3.jpg", "/img/pt-default/3.jpg", "/img/pt-default/3.jpg", "/img/pt-default/2.jpg", "/img/pt-default/5.jpg"]}', NULL, NULL, 875453723, 798059792, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(77, 2, 3, NULL, NULL, 1, '', '16 BRAND DRAW COLOR', '', 13.00, 50, 15, NULL, 'DayCell', 'new', '"PINK TONE UP,PINK TONE UP,PINK TONE UP"', '{"images": ["/img/pt-default/6.jpg", "/img/pt-default/8.jpg", "/img/pt-default/8.jpg", "/img/pt-default/5.jpg", "/img/pt-default/7.jpg"]}', NULL, NULL, 88516621, 267735781, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(78, 7, 3, NULL, NULL, 1, '', '16 BRAND FOUNDATION', '', 12.00, 38, 5, NULL, 'Skin1004', 'refurbished', '"16 BLUR PACT SPF50+PA+++,16 BLUR PACT SPF50+PA+++,16 BLUR PACT SPF50+PA+++"', '{"images": ["/img/pt-default/4.jpg", "/img/pt-default/5.jpg", "/img/pt-default/5.jpg", "/img/pt-default/6.jpg", "/img/pt-default/4.jpg"]}', NULL, NULL, 932525317, 620268653, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(79, 3, 3, NULL, NULL, 1, '', '16 BRAND FINGERPEN', '', 94.00, 32, 10, NULL, '16 Brand', 'refurbished', '"PINK TONE UP,PINK TONE UP,PINK TONE UP"', '{"images": ["/img/pt-default/6.jpg", "/img/pt-default/8.jpg", "/img/pt-default/5.jpg", "/img/pt-default/7.jpg", "/img/pt-default/2.jpg"]}', NULL, NULL, 36016773, 296594284, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(80, 3, 3, NULL, NULL, 1, '', 'PINK TONE UP', '', 52.00, 44, 5, NULL, 'Ottie', 'used', '"16 BRAND BRICKIT SHADOW,16 BRAND BRICKIT SHADOW,16 BRAND BRICKIT SHADOW"', '{"images": ["/img/pt-default/2.jpg", "/img/pt-default/5.jpg", "/img/pt-default/7.jpg", "/img/pt-default/2.jpg", "/img/pt-default/5.jpg"]}', NULL, NULL, 51056300, 707561661, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(81, 5, 3, NULL, NULL, 1, '', '16 BRAND DRAW COLOR', '', 22.00, 33, 15, NULL, 'Ottie', 'new', '"16 BRAND FINGERPEN,16 BRAND FINGERPEN,16 BRAND FINGERPEN"', '{"images": ["/img/pt-default/5.jpg", "/img/pt-default/4.jpg", "/img/pt-default/7.jpg", "/img/pt-default/7.jpg", "/img/pt-default/1.jpg"]}', NULL, NULL, 975219325, 776763343, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(82, 3, 3, NULL, NULL, 1, '', '16 BLUR PACT SPF50+PA+++', '', 12.00, 33, 5, NULL, 'DayCell', 'new', '"16 BRAND FINGERPEN,16 BRAND FINGERPEN,16 BRAND FINGERPEN"', '{"images": ["/img/pt-default/7.jpg", "/img/pt-default/5.jpg", "/img/pt-default/6.jpg", "/img/pt-default/4.jpg", "/img/pt-default/7.jpg"]}', NULL, NULL, 454631320, 154923296, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(83, 5, 3, NULL, NULL, 1, '', '16 BRAND BRICKIT SHADOW', '', 11.00, 42, 5, NULL, 'Clinique', 'used', '"16 BRAND FOUNDATION,16 BRAND FOUNDATION,16 BRAND FOUNDATION"', '{"images": ["/img/pt-default/5.jpg", "/img/pt-default/7.jpg", "/img/pt-default/4.jpg", "/img/pt-default/7.jpg", "/img/pt-default/7.jpg"]}', NULL, NULL, 449025768, 103531516, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(84, 1, 3, NULL, NULL, 1, '', '16 BRAND FINGERPEN', '', 72.00, 44, 15, NULL, 'DayCell', 'used', '"16 BLUR PACT SPF50+PA+++,16 BLUR PACT SPF50+PA+++,16 BLUR PACT SPF50+PA+++"', '{"images": ["/img/pt-default/8.jpg", "/img/pt-default/2.jpg", "/img/pt-default/6.jpg", "/img/pt-default/1.jpg", "/img/pt-default/5.jpg"]}', NULL, NULL, 925032134, 21127017, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(85, 6, 3, NULL, NULL, 1, '', '16 BRAND BRICKIT SHADOW', '', 78.00, 37, 5, NULL, 'DayCell', 'new', '"16 BRAND FOUNDATION,16 BRAND FOUNDATION,16 BRAND FOUNDATION"', '{"images": ["/img/pt-default/1.jpg", "/img/pt-default/1.jpg", "/img/pt-default/8.jpg", "/img/pt-default/7.jpg", "/img/pt-default/7.jpg"]}', NULL, NULL, 94317368, 364453226, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(86, 5, 3, NULL, NULL, 1, '', '16 BLUR PACT SPF50+PA+++', '', 57.00, 23, 5, NULL, '16 Brand', 'refurbished', '"16 BRAND DRAW COLOR,16 BRAND DRAW COLOR,16 BRAND DRAW COLOR"', '{"images": ["/img/pt-default/6.jpg", "/img/pt-default/1.jpg", "/img/pt-default/7.jpg", "/img/pt-default/3.jpg", "/img/pt-default/6.jpg"]}', NULL, NULL, 141003235, 293718980, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(87, 4, 3, NULL, NULL, 1, '', '16 BRAND FINGERPEN', '', 6.00, 41, 10, NULL, 'DayCell', 'new', '"16 BRAND DRAW COLOR,16 BRAND DRAW COLOR,16 BRAND DRAW COLOR"', '{"images": ["/img/pt-default/6.jpg", "/img/pt-default/8.jpg", "/img/pt-default/7.jpg", "/img/pt-default/7.jpg", "/img/pt-default/8.jpg"]}', NULL, NULL, 695354621, 261986334, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(88, 3, 3, NULL, NULL, 1, '', '16 BLUR PACT SPF50+PA+++', '', 88.00, 49, 15, NULL, 'Son Park', 'new', '"16 BRAND FINGERPEN,16 BRAND FINGERPEN,16 BRAND FINGERPEN"', '{"images": ["/img/pt-default/6.jpg", "/img/pt-default/3.jpg", "/img/pt-default/8.jpg", "/img/pt-default/1.jpg", "/img/pt-default/1.jpg"]}', NULL, NULL, 267137792, 755885978, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(89, 4, 3, NULL, NULL, 1, '', '16 BRAND DRAW COLOR', '', 72.00, 35, 5, NULL, 'Clinique', 'new', '"16 BRAND DRAW COLOR,16 BRAND DRAW COLOR,16 BRAND DRAW COLOR"', '{"images": ["/img/pt-default/3.jpg", "/img/pt-default/3.jpg", "/img/pt-default/4.jpg", "/img/pt-default/4.jpg", "/img/pt-default/3.jpg"]}', NULL, NULL, 92882591, 273298699, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(90, 1, 3, NULL, NULL, 1, '', '16 BRAND BRICKIT SHADOW', '', 81.00, 25, 10, NULL, 'Skin1004', 'refurbished', '"PINK TONE UP,PINK TONE UP,PINK TONE UP"', '{"images": ["/img/pt-default/7.jpg", "/img/pt-default/6.jpg", "/img/pt-default/6.jpg", "/img/pt-default/6.jpg", "/img/pt-default/3.jpg"]}', NULL, NULL, 4397990, 682300686, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(91, 3, 3, NULL, NULL, 1, '', '16 BRAND DRAW COLOR', '', 93.00, 49, 10, NULL, '16 Brand', 'refurbished', '"16 BRAND DRAW COLOR,16 BRAND DRAW COLOR,16 BRAND DRAW COLOR"', '{"images": ["/img/pt-default/8.jpg", "/img/pt-default/4.jpg", "/img/pt-default/7.jpg", "/img/pt-default/4.jpg", "/img/pt-default/5.jpg"]}', NULL, NULL, 163221482, 538655998, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(92, 5, 3, NULL, NULL, 1, '', '16 BRAND BRICKIT SHADOW', '', 38.00, 45, 10, NULL, 'Son Park', 'new', '"16 BRAND BRICKIT SHADOW,16 BRAND BRICKIT SHADOW,16 BRAND BRICKIT SHADOW"', '{"images": ["/img/pt-default/5.jpg", "/img/pt-default/4.jpg", "/img/pt-default/2.jpg", "/img/pt-default/1.jpg", "/img/pt-default/8.jpg"]}', NULL, NULL, 383161640, 79334603, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(93, 3, 3, NULL, NULL, 1, '', '16 BRAND FOUNDATION', '', 65.00, 41, 15, NULL, 'Clinique', 'new', '"PINK TONE UP,PINK TONE UP,PINK TONE UP"', '{"images": ["/img/pt-default/4.jpg", "/img/pt-default/3.jpg", "/img/pt-default/8.jpg", "/img/pt-default/3.jpg", "/img/pt-default/7.jpg"]}', NULL, NULL, 839716638, 717414324, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(94, 3, 3, NULL, NULL, 1, '', '16 BRAND FOUNDATION', '', 58.00, 36, 5, NULL, 'Clinique', 'refurbished', '"16 BRAND DRAW COLOR,16 BRAND DRAW COLOR,16 BRAND DRAW COLOR"', '{"images": ["/img/pt-default/6.jpg", "/img/pt-default/8.jpg", "/img/pt-default/4.jpg", "/img/pt-default/6.jpg", "/img/pt-default/8.jpg"]}', NULL, NULL, 719548576, 343059755, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(95, 3, 3, NULL, NULL, 1, '', '16 BRAND BRICKIT SHADOW', '', 54.00, 47, 15, NULL, 'Son Park', 'refurbished', '"PINK TONE UP,PINK TONE UP,PINK TONE UP"', '{"images": ["/img/pt-default/8.jpg", "/img/pt-default/8.jpg", "/img/pt-default/4.jpg", "/img/pt-default/6.jpg", "/img/pt-default/7.jpg"]}', NULL, NULL, 292181825, 325034635, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(96, 4, 3, NULL, NULL, 1, '', '16 BRAND BRICKIT SHADOW', '', 70.00, 29, 15, NULL, 'Skin1004', 'refurbished', '"16 BRAND DRAW COLOR,16 BRAND DRAW COLOR,16 BRAND DRAW COLOR"', '{"images": ["/img/pt-default/2.jpg", "/img/pt-default/3.jpg", "/img/pt-default/6.jpg", "/img/pt-default/7.jpg", "/img/pt-default/6.jpg"]}', NULL, NULL, 553448678, 196377819, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(97, 1, 3, NULL, NULL, 1, '', '16 BRAND FINGERPEN', '', 7.00, 28, 10, NULL, 'Ottie', 'new', '"16 BRAND BRICKIT SHADOW,16 BRAND BRICKIT SHADOW,16 BRAND BRICKIT SHADOW"', '{"images": ["/img/pt-default/2.jpg", "/img/pt-default/1.jpg", "/img/pt-default/4.jpg", "/img/pt-default/8.jpg", "/img/pt-default/2.jpg"]}', NULL, NULL, 812424908, 632123393, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(98, 1, 3, NULL, NULL, 1, '', '16 BRAND FOUNDATION', '', 23.00, 23, 10, NULL, 'Ottie', 'used', '"16 BRAND FINGERPEN,16 BRAND FINGERPEN,16 BRAND FINGERPEN"', '{"images": ["/img/pt-default/8.jpg", "/img/pt-default/3.jpg", "/img/pt-default/1.jpg", "/img/pt-default/7.jpg", "/img/pt-default/3.jpg"]}', NULL, NULL, 225954222, 892643264, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(99, 7, 3, NULL, NULL, 1, '', 'PINK TONE UP', '', 14.00, 47, 10, NULL, '16 Brand', 'used', '"16 BRAND FOUNDATION,16 BRAND FOUNDATION,16 BRAND FOUNDATION"', '{"images": ["/img/pt-default/4.jpg", "/img/pt-default/3.jpg", "/img/pt-default/2.jpg", "/img/pt-default/1.jpg", "/img/pt-default/1.jpg"]}', NULL, NULL, 884745439, 348450492, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(100, 4, 3, NULL, NULL, 1, '', '16 BRAND BRICKIT SHADOW', '', 10.00, 21, 10, NULL, 'Skin1004', 'used', '"16 BRAND FINGERPEN,16 BRAND FINGERPEN,16 BRAND FINGERPEN"', '{"images": ["/img/pt-default/3.jpg", "/img/pt-default/1.jpg", "/img/pt-default/6.jpg", "/img/pt-default/2.jpg", "/img/pt-default/1.jpg"]}', NULL, NULL, 811089337, 654864427, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(101, 1, 1, NULL, NULL, 1, 'item', 'Нүүрний тос', 'Нүүрний тос', 1000.00, 1, 1, '3123', 'BLa bla', 'new', NULL, '{"images": ["/img/products/image/1/c053f7dcadf00c33900192296f1d4a39.jpg", "/img/products/image/1/2c8da2a4d384115724173ec7aafe56f1.jpg", "/img/products/image/1/3ef7eb102867944f2d1d59da219daff9.jpg", "/img/products/image/1/837f785f636f052ac23ad6e186b9243f.jpg", "/img/products/image/1/5763462ceda242a9812f272fbf695508.jpg"]}', NULL, NULL, 0, 1, '2016-11-21 01:36:22', '2016-11-21 01:36:23');

-- --------------------------------------------------------

--
-- Table structure for table `product_details`
--

DROP TABLE IF EXISTS `product_details`;
CREATE TABLE IF NOT EXISTS `product_details` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `input_type` enum('text','select','radio','checkbox','image','document') COLLATE utf8_unicode_ci NOT NULL,
  `default_values` json NOT NULL,
  `validation_rules` json NOT NULL,
  `help_message` json NOT NULL,
  `type_products` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `max_num_values` smallint(6) NOT NULL DEFAULT '1',
  `status` enum('active','inactive') COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `product_details`
--

INSERT INTO `product_details` (`id`, `name`, `input_type`, `default_values`, `validation_rules`, `help_message`, `type_products`, `max_num_values`, `status`, `created_at`, `updated_at`) VALUES
(1, 'images', 'image', '{}', '{"images_1": "required_without_all:feature_images_2,feature_images_3,feature_images_4,feature_images_5,|", "images_2": "required_without_all:feature_images_1,feature_images_3,feature_images_4,feature_images_5,|", "images_3": "required_without_all:feature_images_1,feature_images_2,feature_images_4,feature_images_5,|", "images_4": "required_without_all:feature_images_1,feature_images_2,feature_images_3,feature_images_5,|", "images_5": "required_without_all:feature_images_1,feature_images_2,feature_images_3,feature_images_4,|"}', '{}', 'all', 5, 'active', '2016-11-20 19:01:20', '2016-11-20 19:01:20');

-- --------------------------------------------------------

--
-- Table structure for table `product_offers`
--

DROP TABLE IF EXISTS `product_offers`;
CREATE TABLE IF NOT EXISTS `product_offers` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `product_id` int(10) UNSIGNED NOT NULL,
  `day_start` datetime NOT NULL,
  `day_end` datetime NOT NULL,
  `percentage` double(2,2) NOT NULL,
  `price` double NOT NULL DEFAULT '0',
  `quantity` int(11) NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `product_offers_product_id_foreign` (`product_id`)
) ENGINE=MyISAM AUTO_INCREMENT=55 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `product_offers`
--

INSERT INTO `product_offers` (`id`, `product_id`, `day_start`, `day_end`, `percentage`, `price`, `quantity`, `created_at`, `updated_at`) VALUES
(1, 1, '1980-11-16 00:05:07', '2017-07-15 16:25:27', 0.99, 2.85, 21, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(2, 3, '1986-04-26 03:55:41', '2017-07-14 23:11:16', 0.99, 2.1, 22, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(3, 4, '2006-08-09 00:30:36', '2017-04-16 10:54:45', 0.99, 24.85, 21, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(4, 5, '1998-04-04 10:01:26', '2017-05-04 09:52:08', 0.99, 12.95, 14, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(5, 8, '1983-04-20 21:04:07', '2017-04-20 09:14:26', 0.99, 12, 15, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(6, 9, '1983-01-21 13:11:01', '2017-10-24 04:15:46', 0.99, 1.6, 25, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(7, 15, '1975-06-05 01:27:19', '2017-01-31 01:52:10', 0.99, 19.5, 18, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(8, 16, '2013-12-22 10:37:55', '2017-11-05 07:03:26', 0.99, 13, 20, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(9, 17, '1976-12-06 23:17:38', '2017-07-26 23:17:46', 0.99, 11.55, 20, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(10, 20, '1980-12-01 01:14:57', '2017-09-08 15:50:42', 0.99, 3.85, 25, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(11, 23, '1976-01-04 23:18:57', '2017-10-30 11:11:12', 0.99, 22.75, 21, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(12, 24, '1973-12-14 20:16:35', '2016-12-04 22:20:30', 0.99, 9.6, 21, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(13, 25, '2001-04-21 14:28:05', '2017-08-15 22:22:36', 0.99, 10, 10, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(14, 27, '1977-08-01 03:39:22', '2016-12-23 16:17:31', 0.99, 2.9, 23, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(15, 28, '2012-04-17 19:41:20', '2016-12-11 05:11:38', 0.99, 7.9, 21, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(16, 29, '2003-02-20 20:36:50', '2017-04-04 17:20:26', 0.99, 4.8, 23, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(17, 30, '1976-07-19 08:56:21', '2017-06-10 02:08:13', 0.99, 3, 22, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(18, 31, '1994-07-19 19:38:03', '2017-09-11 03:48:35', 0.99, 36, 12, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(19, 33, '1972-02-29 23:28:11', '2017-06-25 05:31:02', 0.99, 8.85, 20, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(20, 35, '2001-10-21 11:16:45', '2017-01-08 23:34:33', 0.99, 2.25, 15, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(21, 36, '1971-06-18 07:22:30', '2017-01-30 21:32:51', 0.99, 14.75, 22, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(22, 37, '1996-05-21 23:25:35', '2017-09-16 17:45:15', 0.99, 13.65, 16, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(23, 40, '2003-06-23 04:58:33', '2017-09-21 00:06:45', 0.99, 6.25, 15, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(24, 41, '1995-11-06 12:26:58', '2017-03-03 17:38:08', 0.99, 27.3, 16, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(25, 42, '2002-08-09 00:04:52', '2016-12-23 05:03:24', 0.99, 10.5, 13, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(26, 44, '2000-07-22 09:25:03', '2017-08-27 11:16:53', 0.99, 7.8, 22, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(27, 45, '2008-02-16 14:21:55', '2016-12-13 16:20:16', 0.99, 1.75, 18, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(28, 47, '2015-08-20 20:00:12', '2017-08-13 00:56:39', 0.99, 2.5, 11, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(29, 49, '1970-07-31 06:08:11', '2017-09-11 19:39:52', 0.99, 28.5, 18, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(30, 50, '1973-03-24 19:42:44', '2017-04-19 04:46:29', 0.99, 14.25, 20, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(31, 51, '2013-09-17 01:38:16', '2017-07-13 16:25:29', 0.99, 27.3, 19, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(32, 53, '2008-05-23 06:07:34', '2017-04-22 09:52:55', 0.99, 9.2, 17, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(33, 57, '1995-01-20 13:09:29', '2017-09-24 17:16:54', 0.99, 12.5, 10, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(34, 58, '1993-01-25 00:40:12', '2017-10-27 20:38:48', 0.99, 12.9, 23, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(35, 60, '1979-08-14 07:48:22', '2017-08-27 09:25:55', 0.99, 16.75, 22, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(36, 63, '1979-05-03 04:46:59', '2017-03-25 21:41:07', 0.99, 18.5, 22, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(37, 64, '1998-05-18 17:52:19', '2017-06-23 09:39:18', 0.99, 6, 18, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(38, 66, '1991-01-29 05:05:30', '2017-07-21 21:47:20', 0.99, 0.35, 16, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(39, 67, '2004-04-28 04:49:55', '2016-12-23 11:25:49', 0.99, 36.5, 17, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(40, 70, '1978-01-03 17:28:49', '2017-05-13 20:45:10', 0.99, 14.85, 13, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(41, 71, '2002-07-14 01:12:46', '2017-05-21 12:11:25', 0.99, 8.6, 22, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(42, 73, '2003-03-30 03:11:04', '2017-10-03 04:47:41', 0.99, 21, 15, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(43, 74, '1994-01-05 06:15:59', '2016-12-26 06:04:12', 0.99, 3.6, 23, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(44, 75, '2015-06-08 10:22:21', '2017-06-30 21:05:07', 0.99, 18.2, 14, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(45, 82, '1971-01-07 22:36:52', '2017-10-21 10:42:58', 0.99, 1.8, 17, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(46, 86, '1976-09-17 04:07:14', '2017-05-16 12:06:40', 0.99, 8.55, 12, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(47, 87, '1972-07-13 01:32:26', '2017-07-07 21:20:38', 0.99, 1.5, 21, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(48, 90, '1982-04-23 01:07:02', '2017-05-31 01:27:25', 0.99, 8.1, 13, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(49, 91, '1972-03-17 08:39:49', '2017-06-23 13:40:32', 0.99, 32.55, 25, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(50, 92, '2015-09-08 10:14:20', '2017-07-23 05:54:35', 0.99, 3.8, 23, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(51, 94, '1981-05-19 02:29:17', '2017-03-27 09:32:06', 0.99, 29, 18, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(52, 96, '2016-10-23 08:13:02', '2017-07-11 20:18:29', 0.99, 17.5, 15, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(53, 98, '2008-11-29 18:00:40', '2017-05-01 03:36:19', 0.99, 2.3, 12, '2016-11-20 19:01:20', '2016-11-20 19:01:20'),
(54, 99, '2011-08-11 08:33:39', '2017-07-09 18:43:35', 0.99, 7, 24, '2016-11-20 19:01:20', '2016-11-20 19:01:20');

-- --------------------------------------------------------

--
-- Table structure for table `type_preferences`
--

DROP TABLE IF EXISTS `type_preferences`;
CREATE TABLE IF NOT EXISTS `type_preferences` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `type` enum('string','date','json','number') COLLATE utf8_unicode_ci NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `nickname` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(60) COLLATE utf8_unicode_ci NOT NULL,
  `pic_url` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `language` varchar(255) COLLATE utf8_unicode_ci NOT NULL DEFAULT 'en',
  `mobile_phone` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `work_phone` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `website` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `twitter` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `facebook` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `description` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `time_zone` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `rate_val` int(11) DEFAULT NULL,
  `rate_count` int(11) DEFAULT NULL,
  `role` enum('admin','business','nonprofit','person') COLLATE utf8_unicode_ci NOT NULL DEFAULT 'person',
  `type` enum('normal','trusted') COLLATE utf8_unicode_ci NOT NULL DEFAULT 'normal',
  `verified` enum('yes','no') COLLATE utf8_unicode_ci NOT NULL DEFAULT 'no',
  `preferences` json DEFAULT NULL,
  `remember_token` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `disabled_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_nickname_unique` (`nickname`),
  UNIQUE KEY `users_email_unique` (`email`)
) ENGINE=MyISAM AUTO_INCREMENT=13 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `nickname`, `email`, `password`, `pic_url`, `language`, `mobile_phone`, `work_phone`, `website`, `twitter`, `facebook`, `description`, `time_zone`, `rate_val`, `rate_count`, `role`, `type`, `verified`, `preferences`, `remember_token`, `created_at`, `updated_at`, `disabled_at`, `deleted_at`) VALUES
(1, 'admin', 'admin@admin.com', '$2y$10$9pqFTINqLy8LXMBxJtBDeuf3lsFhDXg50E91jNA.4Pm0BayMvG8n.', '/img/pt-default/13.jpg', 'en', NULL, NULL, NULL, '@torooprogrammer', 'b.tortuvshin', NULL, NULL, NULL, NULL, 'admin', 'trusted', 'no', '{"my_searches": [], "product_shared": [], "product_viewed": [{"tag": "\\"16 BRAND FINGERPEN", "updated_at": "2016-11-21 12:23:29"}, {"tag": "16 BRAND FINGERPEN", "updated_at": "2016-11-21 12:23:29"}, {"tag": "16 BRAND FINGERPEN\\"", "updated_at": "2016-11-21 12:23:29"}], "product_purchased": [], "product_categories": [1, 3, 4, 5, 6, 7]}', NULL, '2016-11-20 19:01:17', '2016-11-21 04:23:29', NULL, NULL),
(2, 'graciela.botsford', 'myrtle.nikolaus@gmail.com', '$2y$10$C69KSKMslhiTjC2EQuop9OC5yRHesb185.tuKoRoZwBV2EE0LFdF6', '/img/pt-default/14.jpg', 'en', NULL, NULL, NULL, '@fadel.henderson', 'vchamplin', NULL, NULL, NULL, NULL, 'person', 'normal', 'no', '{"my_searches": [], "product_shared": [], "product_viewed": [], "product_purchased": [], "product_categories": []}', NULL, '2016-11-20 19:01:18', '2016-11-20 19:01:18', NULL, NULL),
(3, 'koepp.webster', 'roderick89@terry.org', '$2y$10$JLQkn3GJyDwuiKSKLZ8gIeFSrNMSo/BNMDrDYH2V9FixBwlMoU1w6', '/img/pt-default/20.jpg', 'en', NULL, NULL, NULL, '@denesik.antonietta', 'senger.wilhelmine', NULL, NULL, NULL, NULL, 'person', 'normal', 'no', '{"my_searches": [], "product_shared": [], "product_viewed": [], "product_purchased": [], "product_categories": []}', NULL, '2016-11-20 19:01:18', '2016-11-20 19:01:18', NULL, NULL),
(4, 'oschmitt', 'alfonzo.simonis@herman.net', '$2y$10$T7pA9d55UnveTgvM23kNPu/380DsOVvhymj.xls8YHUIx3VmEdIbu', '/img/pt-default/3.jpg', 'en', NULL, NULL, NULL, '@nico95', 'trobel', NULL, NULL, NULL, NULL, 'person', 'normal', 'no', '{"my_searches": [], "product_shared": [], "product_viewed": [], "product_purchased": [], "product_categories": []}', NULL, '2016-11-20 19:01:18', '2016-11-20 19:01:18', NULL, NULL),
(5, 'steuber.cicero', 'ross.homenick@gmail.com', '$2y$10$kOFsZhVxwH4SwD4SdG5y4eViuR6slhzBQFn7Slwt.v0JNsAi89XbC', '/img/pt-default/14.jpg', 'en', NULL, NULL, NULL, '@ayla08', 'eauer', NULL, NULL, NULL, NULL, 'person', 'normal', 'no', '{"my_searches": [], "product_shared": [], "product_viewed": [], "product_purchased": [], "product_categories": []}', NULL, '2016-11-20 19:01:18', '2016-11-20 19:01:18', NULL, NULL),
(6, 'casper.nayeli', 'emorissette@mertz.com', '$2y$10$zw8PS5Q3yzHyAgJqizYWmepUa/aqfDPnThxzsfP.z4dACAlw.L2em', '/img/pt-default/15.jpg', 'en', NULL, NULL, NULL, '@mraz.saige', 'wehner.eleanora', NULL, NULL, NULL, NULL, 'person', 'normal', 'no', '{"my_searches": [], "product_shared": [], "product_viewed": [], "product_purchased": [], "product_categories": []}', NULL, '2016-11-20 19:01:19', '2016-11-20 19:01:19', NULL, NULL),
(7, 'bkirlin', 'damon68@yahoo.com', '$2y$10$vl19m.I20g6EqFIoJ/oMUuLda6qBEVlEhLo0CutbZQTiTHkUNCy3O', '/img/pt-default/12.jpg', 'en', NULL, NULL, NULL, '@owen76', 'romaguera.lempi', NULL, NULL, NULL, NULL, 'person', 'normal', 'no', '{"my_searches": [], "product_shared": [], "product_viewed": [], "product_purchased": [], "product_categories": []}', NULL, '2016-11-20 19:01:19', '2016-11-20 19:01:19', NULL, NULL),
(8, 'dedric17', 'anne14@hotmail.com', '$2y$10$xcADP.OE/cItyeXv.1e2JOmGEWk8PbuiYCW0phbdw17HO6Cuc9BXG', '/img/pt-default/11.jpg', 'en', NULL, NULL, NULL, '@marianna38', 'elsa72', NULL, NULL, NULL, NULL, 'person', 'normal', 'no', '{"my_searches": [], "product_shared": [], "product_viewed": [], "product_purchased": [], "product_categories": []}', NULL, '2016-11-20 19:01:19', '2016-11-20 19:01:19', NULL, NULL),
(9, 'schiller.stewart', 'verna14@gmail.com', '$2y$10$.lJsrZ.VvdywKPQa7TZMmeMz3aW6DIIO/2uybXyk.O4zf8bEIJlFG', '/img/pt-default/20.jpg', 'en', NULL, NULL, NULL, '@ally07', 'zziemann', NULL, NULL, NULL, NULL, 'person', 'normal', 'no', '{"my_searches": [], "product_shared": [], "product_viewed": [], "product_purchased": [], "product_categories": []}', NULL, '2016-11-20 19:01:19', '2016-11-20 19:01:19', NULL, NULL),
(10, 'tiffany.schaden', 'ccarroll@hotmail.com', '$2y$10$fdb2xpiOrkv5XBm0ioQnku5RV/Yske1QbM1E6.HgutEfaJ8TlQi36', '/img/pt-default/14.jpg', 'en', NULL, NULL, NULL, '@elta.franecki', 'otilia96', NULL, NULL, NULL, NULL, 'person', 'normal', 'no', '{"my_searches": [], "product_shared": [], "product_viewed": [], "product_purchased": [], "product_categories": []}', NULL, '2016-11-20 19:01:19', '2016-11-20 19:01:19', NULL, NULL),
(11, 'casper.maxime', 'nat.gusikowski@gmail.com', '$2y$10$C77ePnaudNkAbaliCZQ.BOOxqinCuhdclfQ7wopKtZqYq7xKIDGKC', '/img/pt-default/16.jpg', 'en', NULL, NULL, NULL, '@lura37', 'rempel.elinor', NULL, NULL, NULL, NULL, 'person', 'normal', 'no', '{"my_searches": [], "product_shared": [], "product_viewed": [], "product_purchased": [], "product_categories": []}', NULL, '2016-11-20 19:01:19', '2016-11-20 19:01:19', NULL, NULL),
(12, 'leonor.haley', 'thiel.aditya@sanford.org', '$2y$10$1aUm.JndjtAzf5yHF5kfGuZzvpoDT4BY7IRKqml1c7NA5mZuzCg..', '/img/pt-default/15.jpg', 'en', NULL, NULL, NULL, '@Huels-Predovic', 'Huels-Predovic', NULL, NULL, NULL, NULL, 'business', 'trusted', 'no', '{"my_searches": [], "product_shared": [], "product_viewed": [], "product_purchased": [], "product_categories": []}', NULL, '2016-11-20 19:01:19', '2016-11-20 19:01:19', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `user_points`
--

DROP TABLE IF EXISTS `user_points`;
CREATE TABLE IF NOT EXISTS `user_points` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `user_id` int(10) UNSIGNED NOT NULL,
  `action_type_id` int(10) UNSIGNED NOT NULL,
  `source_id` int(10) UNSIGNED NOT NULL,
  `points` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_points_action_type_id_foreign` (`action_type_id`),
  KEY `user_points_user_id_index` (`user_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
