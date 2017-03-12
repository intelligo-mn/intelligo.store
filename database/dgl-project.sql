-- phpMyAdmin SQL Dump
-- version 4.0.6
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Mar 06, 2017 at 11:06 PM
-- Server version: 5.5.33
-- PHP Version: 5.4.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `dglproject`
--

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `code` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `model` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `default_photo_id` int(11) DEFAULT NULL,
  `description` longtext COLLATE utf8_unicode_ci NOT NULL,
  `folder` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `price` double(18,2) DEFAULT NULL,
  `currency` varchar(10) COLLATE utf8_unicode_ci DEFAULT NULL,
  `is_sale` tinyint(4) DEFAULT NULL,
  `is_active` tinyint(4) DEFAULT NULL,
  `brand_id` int(11) DEFAULT NULL,
  `company_id` int(11) DEFAULT NULL,
  `info_url` text COLLATE utf8_unicode_ci NOT NULL,
  `attr` longtext COLLATE utf8_unicode_ci NOT NULL,
  `in_stock` tinyint(4) DEFAULT NULL,
  `is_top` tinyint(4) DEFAULT NULL,
  `is_featured` tinyint(4) DEFAULT NULL,
  `hitcounter` int(11) NOT NULL,
  `ip_address` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `sort_order` int(11) NOT NULL,
  `created_user_id` int(11) DEFAULT NULL,
  `updated_user_id` int(11) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`),
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `product_brand`
--

CREATE TABLE `product_brand` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `sort_order` int(11) NOT NULL,
  `folder` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `icon_image` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `hit_counter` int(11) NOT NULL,
  `is_active` tinyint(4) DEFAULT NULL,
  `is_featured` tinyint(4) DEFAULT NULL,
  `description` longtext COLLATE utf8_unicode_ci NOT NULL,
  `project_category_id` int(11) DEFAULT NULL,
  `language` varchar(255) COLLATE utf8_unicode_ci DEFAULT 'MN',
  `ip_address` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `created_user_id` int(11) DEFAULT NULL,
  `updated_user_id` int(11) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`),
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=2 ;

--
-- Dumping data for table `product_brand`
--

INSERT INTO `product_brand` (`id`, `name`, `sort_order`, `folder`, `icon_image`, `hit_counter`, `is_active`, `is_featured`, `description`, `project_category_id`, `language`, `ip_address`, `created_user_id`, `updated_user_id`, `created_at`, `updated_at`) VALUES
(1, 'Jishee1', 0, '2017-03', '', 0, 1, NULL, '<p>\r\n sdfasdfasd1</p>\r\n', NULL, 'MN', '127.0.0.1', 1, 1, '2017-03-06 22:56:59', '2017-03-06 23:03:16');

-- --------------------------------------------------------

--
-- Table structure for table `product_category`
--

CREATE TABLE `product_category` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `parent_id` int(11) DEFAULT NULL,
  `level` tinyint(4) DEFAULT NULL,
  `hitcounter` int(11) NOT NULL,
  `is_featured` tinyint(4) DEFAULT NULL,
  `folder` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `icon_image` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `description` text COLLATE utf8_unicode_ci NOT NULL,
  `sort_order` int(11) NOT NULL,
  `created_user_id` int(11) DEFAULT NULL,
  `updated_user_id` int(11) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=2 ;

--
-- Dumping data for table `product_category`
--

INSERT INTO `product_category` (`id`, `name`, `parent_id`, `level`, `hitcounter`, `is_featured`, `folder`, `icon_image`, `description`, `sort_order`, `created_user_id`, `updated_user_id`, `created_at`, `updated_at`) VALUES
(1, 'asdfasdfasdf', NULL, 1, 0, 1, '2017-03', '0f39c0020160a5f788175c392873aa1619ade145.jpg', '<p>\r\n  asdfasdfasfsadf</p>\r\n', 1, 1, 1, '2017-03-06 23:01:26', '2017-03-06 23:01:26');

-- --------------------------------------------------------

--
-- Table structure for table `product_photo`
--

CREATE TABLE `product_photo` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `product_id` int(11) DEFAULT NULL,
  `caption` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `photo_file` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `thumb_file` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `is_default` tinyint(4) DEFAULT NULL,
  `sort_order` int(11) DEFAULT NULL,
  `folder` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_user_id` int(11) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `product_sale`
--

CREATE TABLE `product_sale` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `product_id` int(11) DEFAULT NULL,
  `price` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `description` longtext COLLATE utf8_unicode_ci NOT NULL,
  `begin_date` datetime DEFAULT NULL,
  `end_date` datetime DEFAULT NULL,
  `is_active` tinyint(4) DEFAULT NULL,
  `ip_address` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `created_user_id` int(11) DEFAULT NULL,
  `updated_user_id` int(11) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `email` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `firstname` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `lastname` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `mobile` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `gender` tinyint(4) NOT NULL DEFAULT '1',
  `birthday` date DEFAULT NULL,
  `status` tinyint(4) NOT NULL DEFAULT '1',
  `email_verification_code` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `folder` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `avatar_image` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `ip_address` varchar(20) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_user_id` int(11) DEFAULT NULL,
  `updated_user_id` int(11) DEFAULT NULL,
  `department_id` int(11) DEFAULT NULL,
  `rank_id` int(11) DEFAULT NULL,
  `position_id` int(11) DEFAULT NULL,
  `aimag_id` int(11) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `type` varchar(255) COLLATE utf8_unicode_ci DEFAULT 'person',
  `person_reg_number` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `person_profession` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `person_biography` longtext COLLATE utf8_unicode_ci NOT NULL,
  `person_start_year` int(11) DEFAULT NULL,
  `company_name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `company_register` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `company_description` longtext COLLATE utf8_unicode_ci NOT NULL,
  `company_founded_year` int(11) DEFAULT NULL,
  `tel` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `fax` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `location` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `timezone` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `hit_counter` int(11) NOT NULL,
  `website` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `level` varchar(255) COLLATE utf8_unicode_ci DEFAULT '0',
  `level_started_date` datetime DEFAULT NULL,
  `level_expire_date` datetime DEFAULT NULL,
  `fb_id` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `google_id` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `twitter_id` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `linkedin_id` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `instagram_id` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `is_registered_by_social` tinyint(4) DEFAULT NULL,
  `registered_from_language` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `is_creator` tinyint(4) DEFAULT NULL,
  `is_investor` tinyint(4) DEFAULT NULL,
  `is_idea_owner` tinyint(4) DEFAULT NULL,
  `is_idea_buyer` tinyint(4) DEFAULT NULL,
  `slug` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=37 ;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `username`, `password`, `email`, `firstname`, `lastname`, `mobile`, `gender`, `birthday`, `status`, `email_verification_code`, `folder`, `avatar_image`, `ip_address`, `created_user_id`, `updated_user_id`, `department_id`, `rank_id`, `position_id`, `aimag_id`, `created_at`, `updated_at`, `type`, `person_reg_number`, `person_profession`, `person_biography`, `person_start_year`, `company_name`, `company_register`, `company_description`, `company_founded_year`, `tel`, `fax`, `location`, `timezone`, `hit_counter`, `website`, `level`, `level_started_date`, `level_expire_date`, `fb_id`, `google_id`, `twitter_id`, `linkedin_id`, `instagram_id`, `is_registered_by_social`, `registered_from_language`, `is_creator`, `is_investor`, `is_idea_owner`, `is_idea_buyer`, `slug`) VALUES
(1, 'einstein', '61c37542ffecec41262e7b3629835374', 'bayar.esoft@gmail.com', 'Баяр', 'Удвал', '88058621', 1, '1986-05-21', 1, NULL, '2016-05', 'bayar.jpg', NULL, NULL, 1, NULL, NULL, NULL, NULL, '2016-05-29 14:33:40', '2016-11-29 18:01:02', 'person', '', 'Програмист', '<p class="MsoNormal"><b style="mso-bidi-font-weight:normal"><u><span lang="MN" style="font-family:Arial">Вэб сайтын үйлчилгээ<o:p></o:p></span></u></b></p><p class="MsoNormal" style="text-align:justify"><span lang="MN" style="font-family:\r\nArial">Бид вэбийн төрөлжсөн үйлчилгээнүүдийг нэг дороос цогцоор нь\r\nхэрэглэгчиддээ хүргэхийг гол зорилгоо болгодог. Ингэснээр вэб сайтыг төлөвлөн\r\nбүтээхээс эхлэн интернэтэд байрлуулах, найдвартай ажиллагааг нь байнга хянан\r\nажиллах бүхий л ажлыг та манайд даатгахад боломжтой юм.</span></p><p class="MsoNormal"><b style="mso-bidi-font-weight:normal"><u><span lang="MN" style="font-family:Arial">Вэб сайт бүтээх ажиллагаа<o:p></o:p></span></u></b></p><p class="MsoNormal" style="text-align:justify"><span lang="MN" style="font-family:\r\nArial">Эйнштэйн Софт ХХК нь вэб сайтыг захиалгаар гүйцэтгэхдээ өөрийн\r\nбүтээгдэхүүн болох <b style="mso-bidi-font-weight:normal">C</b>ontent <b style="mso-bidi-font-weight:normal">M</b>anagement <b style="mso-bidi-font-weight:\r\nnormal">S</b>ystem(CMS - Вебийн агуулгыг удирдах програм)–ийг суурь болгон\r\nашигладаг бөгөөд энэ нь тухайн вэб сайтыг өндөр түвшинд боловсруулж найдвартай\r\nажиллах боломжийг бүрдүүлдэг. CMS ашигласнаар бид ердийн вэб сайтыг ажлын 5-21\r\nхоногт багтаан хийнэ. Эйнштэйн Софт ХХК нь вэб сайтыг бүтээхдээ хамгийн гол нь\r\nтухайн вэбийг амьд байлгах бүхий л талын зөвлөгөөг үйлчлүүлэгчиддээ өгч улмаар\r\nчанар болон найдвартай ажиллагааг хамгийн гол үзүүлэлт болгодог.<o:p></o:p></span></p><p class="MsoNormal" style="text-align:justify"><span lang="MN" style="font-family:\r\nArial">Түүнээс гадна Эйнштэйн Софт ХХК нь интернэт худалдаа, үйлчилгээ төдийгүй\r\nИнтернэт хэрэглэгчдийн чиг хандлагын талаар арвин туршлага хуримтлуулсан\r\nкомпаний хувьд онлайн худалдаа болон төрөлжсөн үйлчилгээнүүдийн вэб сайт\r\nтөдийгүй байгууллагын дотоод үйл ажиллагааг вэб сайтын оролцоотойгоор\r\nавтоматжуулах чиглэлээр таньд зөвлөгөө өгч таны бизнесын хэрэгцээ шаардлагыг\r\nбүрэн хангасан электрон худалдааны вэб сайт, программ хангамжийг таньд бүтээж\r\nөгнө.</span></p><p class="MsoNormal" style="text-align:justify"><b style="mso-bidi-font-weight:\r\nnormal"><u><span lang="MN" style="font-family:Arial">Ажил хэрэгч байдал<o:p></o:p></span></u></b></p><p>\r\n\r\n\r\n\r\n\r\n\r\n\r\n<!--[if gte mso 9]><xml>\r\n <o:DocumentProperties>\r\n  <o:Revision>0</o:Revision>\r\n  <o:TotalTime>0</o:TotalTime>\r\n  <o:Pages>1</o:Pages>\r\n  <o:Words>244</o:Words>\r\n  <o:Characters>1391</o:Characters>\r\n  <o:Company>EinsteinSoft</o:Company>\r\n  <o:Lines>11</o:Lines>\r\n  <o:Paragraphs>3</o:Paragraphs>\r\n  <o:CharactersWithSpaces>1632</o:CharactersWithSpaces>\r\n  <o:Version>14.0</o:Version>\r\n </o:DocumentProperties>\r\n</xml><![endif]-->\r\n\r\n<!--[if gte mso 9]><xml>\r\n <w:WordDocument>\r\n  <w:View>Normal</w:View>\r\n  <w:Zoom>0</w:Zoom>\r\n  <w:TrackMoves/>\r\n  <w:TrackFormatting/>\r\n  <w:PunctuationKerning/>\r\n  <w:ValidateAgainstSchemas/>\r\n  <w:SaveIfXMLInvalid>false</w:SaveIfXMLInvalid>\r\n  <w:IgnoreMixedContent>false</w:IgnoreMixedContent>\r\n  <w:AlwaysShowPlaceholderText>false</w:AlwaysShowPlaceholderText>\r\n  <w:DoNotPromoteQF/>\r\n  <w:LidThemeOther>EN-US</w:LidThemeOther>\r\n  <w:LidThemeAsian>JA</w:LidThemeAsian>\r\n  <w:LidThemeComplexScript>X-NONE</w:LidThemeComplexScript>\r\n  <w:Compatibility>\r\n   <w:BreakWrappedTables/>\r\n   <w:SnapToGridInCell/>\r\n   <w:WrapTextWithPunct/>\r\n   <w:UseAsianBreakRules/>\r\n   <w:DontGrowAutofit/>\r\n   <w:SplitPgBreakAndParaMark/>\r\n   <w:EnableOpenTypeKerning/>\r\n   <w:DontFlipMirrorIndents/>\r\n   <w:OverrideTableStyleHps/>\r\n  </w:Compatibility>\r\n  <m:mathPr>\r\n   <m:mathFont m:val="Cambria Math"/>\r\n   <m:brkBin m:val="before"/>\r\n   <m:brkBinSub m:val="--"/>\r\n   <m:smallFrac m:val="off"/>\r\n   <m:dispDef/>\r\n   <m:lMargin m:val="0"/>\r\n   <m:rMargin m:val="0"/>\r\n   <m:defJc m:val="centerGroup"/>\r\n   <m:wrapIndent m:val="1440"/>\r\n   <m:intLim m:val="subSup"/>\r\n   <m:naryLim m:val="undOvr"/>\r\n  </m:mathPr></w:WordDocument>\r\n</xml><![endif]--><!--[if gte mso 9]><xml>\r\n <w:LatentStyles DefLockedState="false" DefUnhideWhenUsed="true"\r\n  DefSemiHidden="true" DefQFormat="false" DefPriority="99"\r\n  LatentStyleCount="276">\r\n  <w:LsdException Locked="false" Priority="0" SemiHidden="false"\r\n   UnhideWhenUsed="false" QFormat="true" Name="Normal"/>\r\n  <w:LsdException Locked="false" Priority="9" SemiHidden="false"\r\n   UnhideWhenUsed="false" QFormat="true" Name="heading 1"/>\r\n  <w:LsdException Locked="false" Priority="9" QFormat="true" Name="heading 2"/>\r\n  <w:LsdException Locked="false" Priority="9" QFormat="true" Name="heading 3"/>\r\n  <w:LsdException Locked="false" Priority="9" QFormat="true" Name="heading 4"/>\r\n  <w:LsdException Locked="false" Priority="9" QFormat="true" Name="heading 5"/>\r\n  <w:LsdException Locked="false" Priority="9" QFormat="true" Name="heading 6"/>\r\n  <w:LsdException Locked="false" Priority="9" QFormat="true" Name="heading 7"/>\r\n  <w:LsdException Locked="false" Priority="9" QFormat="true" Name="heading 8"/>\r\n  <w:LsdException Locked="false" Priority="9" QFormat="true" Name="heading 9"/>\r\n  <w:LsdException Locked="false" Priority="39" Name="toc 1"/>\r\n  <w:LsdException Locked="false" Priority="39" Name="toc 2"/>\r\n  <w:LsdException Locked="false" Priority="39" Name="toc 3"/>\r\n  <w:LsdException Locked="false" Priority="39" Name="toc 4"/>\r\n  <w:LsdException Locked="false" Priority="39" Name="toc 5"/>\r\n  <w:LsdException Locked="false" Priority="39" Name="toc 6"/>\r\n  <w:LsdException Locked="false" Priority="39" Name="toc 7"/>\r\n  <w:LsdException Locked="false" Priority="39" Name="toc 8"/>\r\n  <w:LsdException Locked="false" Priority="39" Name="toc 9"/>\r\n  <w:LsdException Locked="false" Priority="35" QFormat="true" Name="caption"/>\r\n  <w:LsdException Locked="false" Priority="10" SemiHidden="false"\r\n   UnhideWhenUsed="false" QFormat="true" Name="Title"/>\r\n  <w:LsdException Locked="false" Priority="1" Name="Default Paragraph Font"/>\r\n  <w:LsdException Locked="false" Priority="11" SemiHidden="false"\r\n   UnhideWhenUsed="false" QFormat="true" Name="Subtitle"/>\r\n  <w:LsdException Locked="false" Priority="22" SemiHidden="false"\r\n   UnhideWhenUsed="false" QFormat="true" Name="Strong"/>\r\n  <w:LsdException Locked="false" Priority="20" SemiHidden="false"\r\n   UnhideWhenUsed="false" QFormat="true" Name="Emphasis"/>\r\n  <w:LsdException Locked="false" Priority="59" SemiHidden="false"\r\n   UnhideWhenUsed="false" Name="Table Grid"/>\r\n  <w:LsdException Locked="false" UnhideWhenUsed="false" Name="Placeholder Text"/>\r\n  <w:LsdException Locked="false" Priority="1" SemiHidden="false"\r\n   UnhideWhenUsed="false" QFormat="true" Name="No Spacing"/>\r\n  <w:LsdException Locked="false" Priority="60" SemiHidden="false"\r\n   UnhideWhenUsed="false" Name="Light Shading"/>\r\n  <w:LsdException Locked="false" Priority="61" SemiHidden="false"\r\n   UnhideWhenUsed="false" Name="Light List"/>\r\n  <w:LsdException Locked="false" Priority="62" SemiHidden="false"\r\n   UnhideWhenUsed="false" Name="Light Grid"/>\r\n  <w:LsdException Locked="false" Priority="63" SemiHidden="false"\r\n   UnhideWhenUsed="false" Name="Medium Shading 1"/>\r\n  <w:LsdException Locked="false" Priority="64" SemiHidden="false"\r\n   UnhideWhenUsed="false" Name="Medium Shading 2"/>\r\n  <w:LsdException Locked="false" Priority="65" SemiHidden="false"\r\n   UnhideWhenUsed="false" Name="Medium List 1"/>\r\n  <w:LsdException Locked="false" Priority="66" SemiHidden="false"\r\n   UnhideWhenUsed="false" Name="Medium List 2"/>\r\n  <w:LsdException Locked="false" Priority="67" SemiHidden="false"\r\n   UnhideWhenUsed="false" Name="Medium Grid 1"/>\r\n  <w:LsdException Locked="false" Priority="68" SemiHidden="false"\r\n   UnhideWhenUsed="false" Name="Medium Grid 2"/>\r\n  <w:LsdException Locked="false" Priority="69" SemiHidden="false"\r\n   UnhideWhenUsed="false" Name="Medium Grid 3"/>\r\n  <w:LsdException Locked="false" Priority="70" SemiHidden="false"\r\n   UnhideWhenUsed="false" Name="Dark List"/>\r\n  <w:LsdException Locked="false" Priority="71" SemiHidden="false"\r\n   UnhideWhenUsed="false" Name="Colorful Shading"/>\r\n  <w:LsdException Locked="false" Priority="72" SemiHidden="false"\r\n   UnhideWhenUsed="false" Name="Colorful List"/>\r\n  <w:LsdException Locked="false" Priority="73" SemiHidden="false"\r\n   UnhideWhenUsed="false" Name="Colorful Grid"/>\r\n  <w:LsdException Locked="false" Priority="60" SemiHidden="false"\r\n   UnhideWhenUsed="false" Name="Light Shading Accent 1"/>\r\n  <w:LsdException Locked="false" Priority="61" SemiHidden="false"\r\n   UnhideWhenUsed="false" Name="Light List Accent 1"/>\r\n  <w:LsdException Locked="false" Priority="62" SemiHidden="false"\r\n   UnhideWhenUsed="false" Name="Light Grid Accent 1"/>\r\n  <w:LsdException Locked="false" Priority="63" SemiHidden="false"\r\n   UnhideWhenUsed="false" Name="Medium Shading 1 Accent 1"/>\r\n  <w:LsdException Locked="false" Priority="64" SemiHidden="false"\r\n   UnhideWhenUsed="false" Name="Medium Shading 2 Accent 1"/>\r\n  <w:LsdException Locked="false" Priority="65" SemiHidden="false"\r\n   UnhideWhenUsed="false" Name="Medium List 1 Accent 1"/>\r\n  <w:LsdException Locked="false" UnhideWhenUsed="false" Name="Revision"/>\r\n  <w:LsdException Locked="false" Priority="34" SemiHidden="false"\r\n   UnhideWhenUsed="false" QFormat="true" Name="List Paragraph"/>\r\n  <w:LsdException Locked="false" Priority="29" SemiHidden="false"\r\n   UnhideWhenUsed="false" QFormat="true" Name="Quote"/>\r\n  <w:LsdException Locked="false" Priority="30" SemiHidden="false"\r\n   UnhideWhenUsed="false" QFormat="true" Name="Intense Quote"/>\r\n  <w:LsdException Locked="false" Priority="66" SemiHidden="false"\r\n   UnhideWhenUsed="false" Name="Medium List 2 Accent 1"/>\r\n  <w:LsdException Locked="false" Priority="67" SemiHidden="false"\r\n   UnhideWhenUsed="false" Name="Medium Grid 1 Accent 1"/>\r\n  <w:LsdException Locked="false" Priority="68" SemiHidden="false"\r\n   UnhideWhenUsed="false" Name="Medium Grid 2 Accent 1"/>\r\n  <w:LsdException Locked="false" Priority="69" SemiHidden="false"\r\n   UnhideWhenUsed="false" Name="Medium Grid 3 Accent 1"/>\r\n  <w:LsdException Locked="false" Priority="70" SemiHidden="false"\r\n   UnhideWhenUsed="false" Name="Dark List Accent 1"/>\r\n  <w:LsdException Locked="false" Priority="71" SemiHidden="false"\r\n   UnhideWhenUsed="false" Name="Colorful Shading Accent 1"/>\r\n  <w:LsdException Locked="false" Priority="72" SemiHidden="false"\r\n   UnhideWhenUsed="false" Name="Colorful List Accent 1"/>\r\n  <w:LsdException Locked="false" Priority="73" SemiHidden="false"\r\n   UnhideWhenUsed="false" Name="Colorful Grid Accent 1"/>\r\n  <w:LsdException Locked="false" Priority="60" SemiHidden="false"\r\n   UnhideWhenUsed="false" Name="Light Shading Accent 2"/>\r\n  <w:LsdException Locked="false" Priority="61" SemiHidden="false"\r\n   UnhideWhenUsed="false" Name="Light List Accent 2"/>\r\n  <w:LsdException Locked="false" Priority="62" SemiHidden="false"\r\n   UnhideWhenUsed="false" Name="Light Grid Accent 2"/>\r\n  <w:LsdException Locked="false" Priority="63" SemiHidden="false"\r\n   UnhideWhenUsed="false" Name="Medium Shading 1 Accent 2"/>\r\n  <w:LsdException Locked="false" Priority="64" SemiHidden="false"\r\n   UnhideWhenUsed="false" Name="Medium Shading 2 Accent 2"/>\r\n  <w:LsdException Locked="false" Priority="65" SemiHidden="false"\r\n   UnhideWhenUsed="false" Name="Medium List 1 Accent 2"/>\r\n  <w:LsdException Locked="false" Priority="66" SemiHidden="false"\r\n   UnhideWhenUsed="false" Name="Medium List 2 Accent 2"/>\r\n  <w:LsdException Locked="false" Priority="67" SemiHidden="false"\r\n   UnhideWhenUsed="false" Name="Medium Grid 1 Accent 2"/>\r\n  <w:LsdException Locked="false" Priority="68" SemiHidden="false"\r\n   UnhideWhenUsed="false" Name="Medium Grid 2 Accent 2"/>\r\n  <w:LsdException Locked="false" Priority="69" SemiHidden="false"\r\n   UnhideWhenUsed="false" Name="Medium Grid 3 Accent 2"/>\r\n  <w:LsdException Locked="false" Priority="70" SemiHidden="false"\r\n   UnhideWhenUsed="false" Name="Dark List Accent 2"/>\r\n  <w:LsdException Locked="false" Priority="71" SemiHidden="false"\r\n   UnhideWhenUsed="false" Name="Colorful Shading Accent 2"/>\r\n  <w:LsdException Locked="false" Priority="72" SemiHidden="false"\r\n   UnhideWhenUsed="false" Name="Colorful List Accent 2"/>\r\n  <w:LsdException Locked="false" Priority="73" SemiHidden="false"\r\n   UnhideWhenUsed="false" Name="Colorful Grid Accent 2"/>\r\n  <w:LsdException Locked="false" Priority="60" SemiHidden="false"\r\n   UnhideWhenUsed="false" Name="Light Shading Accent 3"/>\r\n  <w:LsdException Locked="false" Priority="61" SemiHidden="false"\r\n   UnhideWhenUsed="false" Name="Light List Accent 3"/>\r\n  <w:LsdException Locked="false" Priority="62" SemiHidden="false"\r\n   UnhideWhenUsed="false" Name="Light Grid Accent 3"/>\r\n  <w:LsdException Locked="false" Priority="63" SemiHidden="false"\r\n   UnhideWhenUsed="false" Name="Medium Shading 1 Accent 3"/>\r\n  <w:LsdException Locked="false" Priority="64" SemiHidden="false"\r\n   UnhideWhenUsed="false" Name="Medium Shading 2 Accent 3"/>\r\n  <w:LsdException Locked="false" Priority="65" SemiHidden="false"\r\n   UnhideWhenUsed="false" Name="Medium List 1 Accent 3"/>\r\n  <w:LsdException Locked="false" Priority="66" SemiHidden="false"\r\n   UnhideWhenUsed="false" Name="Medium List 2 Accent 3"/>\r\n  <w:LsdException Locked="false" Priority="67" SemiHidden="false"\r\n   UnhideWhenUsed="false" Name="Medium Grid 1 Accent 3"/>\r\n  <w:LsdException Locked="false" Priority="68" SemiHidden="false"\r\n   UnhideWhenUsed="false" Name="Medium Grid 2 Accent 3"/>\r\n  <w:LsdException Locked="false" Priority="69" SemiHidden="false"\r\n   UnhideWhenUsed="false" Name="Medium Grid 3 Accent 3"/>\r\n  <w:LsdException Locked="false" Priority="70" SemiHidden="false"\r\n   UnhideWhenUsed="false" Name="Dark List Accent 3"/>\r\n  <w:LsdException Locked="false" Priority="71" SemiHidden="false"\r\n   UnhideWhenUsed="false" Name="Colorful Shading Accent 3"/>\r\n  <w:LsdException Locked="false" Priority="72" SemiHidden="false"\r\n   UnhideWhenUsed="false" Name="Colorful List Accent 3"/>\r\n  <w:LsdException Locked="false" Priority="73" SemiHidden="false"\r\n   UnhideWhenUsed="false" Name="Colorful Grid Accent 3"/>\r\n  <w:LsdException Locked="false" Priority="60" SemiHidden="false"\r\n   UnhideWhenUsed="false" Name="Light Shading Accent 4"/>\r\n  <w:LsdException Locked="false" Priority="61" SemiHidden="false"\r\n   UnhideWhenUsed="false" Name="Light List Accent 4"/>\r\n  <w:LsdException Locked="false" Priority="62" SemiHidden="false"\r\n   UnhideWhenUsed="false" Name="Light Grid Accent 4"/>\r\n  <w:LsdException Locked="false" Priority="63" SemiHidden="false"\r\n   UnhideWhenUsed="false" Name="Medium Shading 1 Accent 4"/>\r\n  <w:LsdException Locked="false" Priority="64" SemiHidden="false"\r\n   UnhideWhenUsed="false" Name="Medium Shading 2 Accent 4"/>\r\n  <w:LsdException Locked="false" Priority="65" SemiHidden="false"\r\n   UnhideWhenUsed="false" Name="Medium List 1 Accent 4"/>\r\n  <w:LsdException Locked="false" Priority="66" SemiHidden="false"\r\n   UnhideWhenUsed="false" Name="Medium List 2 Accent 4"/>\r\n  <w:LsdException Locked="false" Priority="67" SemiHidden="false"\r\n   UnhideWhenUsed="false" Name="Medium Grid 1 Accent 4"/>\r\n  <w:LsdException Locked="false" Priority="68" SemiHidden="false"\r\n   UnhideWhenUsed="false" Name="Medium Grid 2 Accent 4"/>\r\n  <w:LsdException Locked="false" Priority="69" SemiHidden="false"\r\n   UnhideWhenUsed="false" Name="Medium Grid 3 Accent 4"/>\r\n  <w:LsdException Locked="false" Priority="70" SemiHidden="false"\r\n   UnhideWhenUsed="false" Name="Dark List Accent 4"/>\r\n  <w:LsdException Locked="false" Priority="71" SemiHidden="false"\r\n   UnhideWhenUsed="false" Name="Colorful Shading Accent 4"/>\r\n  <w:LsdException Locked="false" Priority="72" SemiHidden="false"\r\n   UnhideWhenUsed="false" Name="Colorful List Accent 4"/>\r\n  <w:LsdException Locked="false" Priority="73" SemiHidden="false"\r\n   UnhideWhenUsed="false" Name="Colorful Grid Accent 4"/>\r\n  <w:LsdException Locked="false" Priority="60" SemiHidden="false"\r\n   UnhideWhenUsed="false" Name="Light Shading Accent 5"/>\r\n  <w:LsdException Locked="false" Priority="61" SemiHidden="false"\r\n   UnhideWhenUsed="false" Name="Light List Accent 5"/>\r\n  <w:LsdException Locked="false" Priority="62" SemiHidden="false"\r\n   UnhideWhenUsed="false" Name="Light Grid Accent 5"/>\r\n  <w:LsdException Locked="false" Priority="63" SemiHidden="false"\r\n   UnhideWhenUsed="false" Name="Medium Shading 1 Accent 5"/>\r\n  <w:LsdException Locked="false" Priority="64" SemiHidden="false"\r\n   UnhideWhenUsed="false" Name="Medium Shading 2 Accent 5"/>\r\n  <w:LsdException Locked="false" Priority="65" SemiHidden="false"\r\n   UnhideWhenUsed="false" Name="Medium List 1 Accent 5"/>\r\n  <w:LsdException Locked="false" Priority="66" SemiHidden="false"\r\n   UnhideWhenUsed="false" Name="Medium List 2 Accent 5"/>\r\n  <w:LsdException Locked="false" Priority="67" SemiHidden="false"\r\n   UnhideWhenUsed="false" Name="Medium Grid 1 Accent 5"/>\r\n  <w:LsdException Locked="false" Priority="68" SemiHidden="false"\r\n   UnhideWhenUsed="false" Name="Medium Grid 2 Accent 5"/>\r\n  <w:LsdException Locked="false" Priority="69" SemiHidden="false"\r\n   UnhideWhenUsed="false" Name="Medium Grid 3 Accent 5"/>\r\n  <w:LsdException Locked="false" Priority="70" SemiHidden="false"\r\n   UnhideWhenUsed="false" Name="Dark List Accent 5"/>\r\n  <w:LsdException Locked="false" Priority="71" SemiHidden="false"\r\n   UnhideWhenUsed="false" Name="Colorful Shading Accent 5"/>\r\n  <w:LsdException Locked="false" Priority="72" SemiHidden="false"\r\n   UnhideWhenUsed="false" Name="Colorful List Accent 5"/>\r\n  <w:LsdException Locked="false" Priority="73" SemiHidden="false"\r\n   UnhideWhenUsed="false" Name="Colorful Grid Accent 5"/>\r\n  <w:LsdException Locked="false" Priority="60" SemiHidden="false"\r\n   UnhideWhenUsed="false" Name="Light Shading Accent 6"/>\r\n  <w:LsdException Locked="false" Priority="61" SemiHidden="false"\r\n   UnhideWhenUsed="false" Name="Light List Accent 6"/>\r\n  <w:LsdException Locked="false" Priority="62" SemiHidden="false"\r\n   UnhideWhenUsed="false" Name="Light Grid Accent 6"/>\r\n  <w:LsdException Locked="false" Priority="63" SemiHidden="false"\r\n   UnhideWhenUsed="false" Name="Medium Shading 1 Accent 6"/>\r\n  <w:LsdException Locked="false" Priority="64" SemiHidden="false"\r\n   UnhideWhenUsed="false" Name="Medium Shading 2 Accent 6"/>\r\n  <w:LsdException Locked="false" Priority="65" SemiHidden="false"\r\n   UnhideWhenUsed="false" Name="Medium List 1 Accent 6"/>\r\n  <w:LsdException Locked="false" Priority="66" SemiHidden="false"\r\n   UnhideWhenUsed="false" Name="Medium List 2 Accent 6"/>\r\n  <w:LsdException Locked="false" Priority="67" SemiHidden="false"\r\n   UnhideWhenUsed="false" Name="Medium Grid 1 Accent 6"/>\r\n  <w:LsdException Locked="false" Priority="68" SemiHidden="false"\r\n   UnhideWhenUsed="false" Name="Medium Grid 2 Accent 6"/>\r\n  <w:LsdException Locked="false" Priority="69" SemiHidden="false"\r\n   UnhideWhenUsed="false" Name="Medium Grid 3 Accent 6"/>\r\n  <w:LsdException Locked="false" Priority="70" SemiHidden="false"\r\n   UnhideWhenUsed="false" Name="Dark List Accent 6"/>\r\n  <w:LsdException Locked="false" Priority="71" SemiHidden="false"\r\n   UnhideWhenUsed="false" Name="Colorful Shading Accent 6"/>\r\n  <w:LsdException Locked="false" Priority="72" SemiHidden="false"\r\n   UnhideWhenUsed="false" Name="Colorful List Accent 6"/>\r\n  <w:LsdException Locked="false" Priority="73" SemiHidden="false"\r\n   UnhideWhenUsed="false" Name="Colorful Grid Accent 6"/>\r\n  <w:LsdException Locked="false" Priority="19" SemiHidden="false"\r\n   UnhideWhenUsed="false" QFormat="true" Name="Subtle Emphasis"/>\r\n  <w:LsdException Locked="false" Priority="21" SemiHidden="false"\r\n   UnhideWhenUsed="false" QFormat="true" Name="Intense Emphasis"/>\r\n  <w:LsdException Locked="false" Priority="31" SemiHidden="false"\r\n   UnhideWhenUsed="false" QFormat="true" Name="Subtle Reference"/>\r\n  <w:LsdException Locked="false" Priority="32" SemiHidden="false"\r\n   UnhideWhenUsed="false" QFormat="true" Name="Intense Reference"/>\r\n  <w:LsdException Locked="false" Priority="33" SemiHidden="false"\r\n   UnhideWhenUsed="false" QFormat="true" Name="Book Title"/>\r\n  <w:LsdException Locked="false" Priority="37" Name="Bibliography"/>\r\n  <w:LsdException Locked="false" Priority="39" QFormat="true" Name="TOC Heading"/>\r\n </w:LatentStyles>\r\n</xml><![endif]-->\r\n\r\n<!--[if gte mso 10]>\r\n<style>\r\n /* Style Definitions */\r\ntable.MsoNormalTable\r\n  {mso-style-name:"Table Normal";\r\n mso-tstyle-rowband-size:0;\r\n  mso-tstyle-colband-size:0;\r\n  mso-style-noshow:yes;\r\n mso-style-priority:99;\r\n  mso-style-parent:"";\r\n  mso-padding-alt:0cm 5.4pt 0cm 5.4pt;\r\n  mso-para-margin-top:0cm;\r\n  mso-para-margin-right:0cm;\r\n  mso-para-margin-bottom:10.0pt;\r\n  mso-para-margin-left:0cm;\r\n line-height:115%;\r\n mso-pagination:widow-orphan;\r\n  font-size:11.0pt;\r\n font-family:Calibri;\r\n  mso-ascii-font-family:Calibri;\r\n  mso-ascii-theme-font:minor-latin;\r\n mso-hansi-font-family:Calibri;\r\n  mso-hansi-theme-font:minor-latin;\r\n mso-ansi-language:MN;}\r\n</style>\r\n<![endif]-->\r\n\r\n\r\n\r\n<!--StartFragment-->\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n<!--EndFragment--></p><p class="MsoNormal" style="text-align:justify"><span lang="MN" style="font-family:\r\nArial">Бид веб сайтыг бүтээхдээ тухайн вебийн цар хүрээ жижиг ч бай том ч бай\r\nтөслийн хэмжээнд авч үзэн түүнийгээ хийж гүйцэтгэх <b style="mso-bidi-font-weight:\r\nnormal"><span style="color:#365F91;mso-themecolor:accent1;mso-themeshade:191">техникийн\r\nдаалгавар</span></b> болон <b style="mso-bidi-font-weight:normal"><span style="color:#365F91;mso-themecolor:accent1;mso-themeshade:191">хэрэглэгчийн\r\nшаардлага</span></b> мөн <b style="mso-bidi-font-weight:normal"><span style="color:#365F91;mso-themecolor:accent1;mso-themeshade:191">веб сайтыг\r\nбүтээх хугацаат төлөвлөгөө</span></b> гарган эдгээр програмлчлалын бичиг\r\nбаримтынхаа дагуу ажлаа хуваарилан гүйцэтгэдэг юм.<o:p></o:p></span></p>', 2008, '', '', '', NULL, '88058621', '77270521', 'Монгол, Байршил', '', 326, 'http://www.einsteinsoft.mn', '1', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1, 1, NULL, NULL, 'bayar-udval'),
(9, 'undraa', '7835f797f4b85ecb7c3f3011575ff336', 'uunaa_0827@yahoo.com', 'Ундрахсайхан', 'Түмэн', '80990828', 2, '2016-05-01', 1, NULL, '2016-05', 'fdg.jpg', '127.0.0.1', NULL, 9, NULL, NULL, NULL, NULL, '2016-05-31 16:28:56', '2016-11-04 17:43:25', 'person', '', 'Аялал жуулчлалын менежер ', '2009 онд ХААИС-ийг Аялал жуулчлалын менежер мэргэжлээр төгссөн.', 2009, '', '', '', 0, '80990828', '', 'Өмнөговь аймаг ', '', 57, '', '2', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1, 0, 1, 0, 'undrahsaihan-tumen'),
(10, 'bukhbileg', '33a222dd448ba77428bf0e2b27a067b3', 'g.b_88@yahoo.com', 'Бөхбилэг', 'Ганболд', '88072121', 1, '1988-10-03', 1, NULL, '2016-05', '0013729e4a9d0b156c202f.jpg', '127.0.0.1', NULL, 10, NULL, NULL, 2, NULL, '2016-05-31 16:31:01', '2016-11-04 17:42:11', 'person', 'ХЛ86070809', 'Хэлкүү', '<p>рхйобөлы аиойлыбд </p>', 2015, '', '', '', NULL, '88072121', '', 'Монгол', '', 15, 'www.einsteinsoft.mn', '2', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL, 'buhbileg-ganbold'),
(12, 'hakuhulan_hakuhulan@yahoo.com', 'c26be8aaf53b15054896983b43eb6a65', 'hakuhulan_hakuhulan@yahoo.com', 'Хулан', 'Амгалан', '99998877', 2, NULL, 1, '', NULL, '13271478_10156910857780527_2057695381_o.jpg', '::1', NULL, 12, NULL, NULL, NULL, NULL, '2016-05-31 17:03:14', '2016-11-04 18:02:24', 'person', '', 'Гадаад харилцаа', '<p>йы бөйыбөй ыбйыб ыбй</p>', 2010, '', '', '', 0, '99998877', '123124', 'Монгол, Байршил', 'Ulaanbaatar', 87, 'http://www.google.com', '0', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1, 0, 0, 0, 'hulan-amgalan'),
(13, 'batu@yahoo.com', 'e10adc3949ba59abbe56e057f20f883e', 'batu@yahoo.com', 'boldoo', 'bataa', '', 1, NULL, 1, '', NULL, NULL, '::1', NULL, NULL, NULL, NULL, NULL, NULL, '2016-06-01 14:42:19', '2016-11-04 18:07:40', 'person', '', '', '', 0, '', '', '', 0, '', '', '', '', 1, '', '0', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1, 0, 0, 0, 'boldoo-bataa'),
(14, 'mugi0827@gmail.com', '3e0dd3710c56f96861315680d9c4a745', 'mugi0827@gmail.com', 'Мөнх-Эрдэнэ ', 'Төмөрбат', '', 1, NULL, 0, 'f73618788bede10418e0d690954c4d11', NULL, NULL, '192.168.1.112', NULL, NULL, NULL, NULL, NULL, NULL, '2016-06-01 20:07:58', '2016-06-01 20:07:58', 'person', '', '', '', 0, '', '', '', 0, '', '', '', '', 0, '', '0', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1, 0, 0, 0, 'munh-erdene-tumurbat'),
(15, 'muugiiuunaa@gmail.com', '3e0dd3710c56f96861315680d9c4a745', 'muugiiuunaa@gmail.com', 'Мөнх-Эрдэнэ ', 'Төмөрбат', '', 1, NULL, 1, '', NULL, NULL, '192.168.1.112', NULL, NULL, NULL, NULL, NULL, NULL, '2016-06-01 20:10:12', '2016-11-04 17:44:44', 'person', '', '', '', 0, '', '', '', 0, '', '', '', '', 9, '', '0', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1, 0, 0, 0, 'munh-erdene-tumurbat-1'),
(16, 'bchimgee25@yahoo.com', '2939e7e2820e9ed9dc7a4f444c0e0f00', 'bchimgee25@yahoo.com', 'Баярчимэг', 'Бүдээ', '88740055', 2, NULL, 1, '', NULL, NULL, '192.168.1.112', NULL, 16, NULL, NULL, NULL, NULL, '2016-06-01 20:22:22', '2016-08-08 12:01:22', 'person', '', 'Эдийн засагч ', '<p>1992 оноос бизнес эрхэлж байгаа.</p>', 1992, '', '', '', 0, '88740055', '', 'Өмнөговь аймаг ', '', 26, '', '0', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1, 0, 0, 0, 'bayarchimeg-budee'),
(18, 'ganzo.bbb@gmail.com', '89fda243fade87c62d249ba938adcbbb', 'ganzo.bbb@gmail.com', 'Ganzorig', 'Bayraa', '', 1, NULL, 1, '', NULL, NULL, '192.168.1.203', NULL, NULL, NULL, NULL, NULL, NULL, '2016-06-03 13:19:01', '2016-11-24 18:25:43', 'person', '', '', '', 0, '', '', '', 0, '', '', '', '', 109, '', '0', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1, 0, 0, 0, 'ganzorig-bayraa'),
(19, 'bayarmaa_ish@yahoo.com', 'c50bdc3d45e1a2d5a8353da1327cec7d', 'bayarmaa_ish@yahoo.com', 'Bayarmaa', 'Ishdorj', '', 1, NULL, 0, '09ad74c7d884f08bcf56199f8a9fe19a', NULL, NULL, '192.168.1.112', NULL, NULL, NULL, NULL, NULL, NULL, '2016-06-03 15:30:20', '2016-08-13 15:20:26', 'person', '', '', '', 0, '', '', '', 0, '', '', '', '', 6, '', '0', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1, 0, 0, 0, 'bayarmaa-ishdorj'),
(20, 'Uuganaat@yahoo.com', 'ddcd54c047493fef4937b1c22dec67fc', 'Uuganaat@yahoo.com', 'Ууганжаргал', 'цэцэгмаа', '88715524', 2, NULL, 1, '', NULL, NULL, '192.168.1.207', NULL, 20, NULL, NULL, NULL, NULL, '2016-06-04 10:42:32', '2016-06-05 13:55:01', 'person', '', 'Барилгачин', '<p>2010 оноос барилгын салбарт ажиллаж байгаа.<br></p>', 2010, '', '', '', 0, '88715524', '', 'Өмнөговь', '', 16, '', '0', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1, 0, 0, 0, 'uuganjargal-tsetsegmaa'),
(21, 'sskk_kkk@yahoo.com', '7fc5e8f8451c43a743f634379f32a106', 'sskk_kkk@yahoo.com', 'Союзхулан', 'Алтансүх', '', 1, NULL, 0, '065dbe4fe2a5a1b2bb13c2aae95bfe78', NULL, NULL, '192.168.1.163', NULL, NULL, NULL, NULL, NULL, NULL, '2016-06-04 10:45:48', '2016-06-04 10:45:48', 'person', '', '', '', 0, '', '', '', 0, '', '', '', '', 0, '', '0', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1, 0, 0, 0, 'soyuzhulan-altansuh'),
(22, 'hulan_2588@yahoo.com', '7fc5e8f8451c43a743f634379f32a106', 'hulan_2588@yahoo.com', 'Союзхулан', 'Алтансүх', '', 1, NULL, 0, '99e7fe88327575af810dbb34db088e2e', NULL, NULL, '192.168.1.163', NULL, NULL, NULL, NULL, NULL, NULL, '2016-06-04 10:47:05', '2016-06-04 10:47:05', 'person', '', '', '', 0, '', '', '', 0, '', '', '', '', 0, '', '0', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1, 0, 0, 0, 'soyuzhulan-altansuh-1'),
(23, 'tseegii831201@gmail.com', '9eeba3784da7cc03af95c00eb4eb5652', 'tseegii831201@gmail.com', 'Цэцэнтүмэн', 'Батдэлгэр', '', 1, NULL, 1, '', NULL, NULL, '192.168.1.207', NULL, NULL, NULL, NULL, NULL, NULL, '2016-06-04 16:27:04', '2016-06-05 13:55:42', 'person', '', '', '', 0, '', '', '', 0, '', '', '', '', 13, '', '0', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1, 0, 0, 0, 'tsetsentumen-batdelger'),
(24, 'avbnature.fund@gmail.com', '382ff588e1d49bcfe93640b2a014f362', 'avbnature.fund@gmail.com', 'Амин хэлхээ сан', 'Байгаль хамгаалах', '', 1, NULL, 1, '', NULL, NULL, '192.168.1.207', NULL, NULL, NULL, NULL, NULL, NULL, '2016-06-05 11:25:48', '2016-06-05 15:52:33', 'person', '', '', '', 0, '', '', '', 0, '', '', '', '', 5, '', '0', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1, 0, 0, 0, 'amin-helhee-san-baigal-hamgaalah'),
(28, 'sukhbold@gmail.com', 'e10adc3949ba59abbe56e057f20f883e', 'sukhbold@gmail.com', 'Сүхболд', 'Доржсүрэн', '88360422', 1, NULL, 1, '', NULL, NULL, '::1', 28, 28, NULL, NULL, NULL, NULL, '2016-06-05 13:45:21', '2016-06-27 15:32:15', 'person', '', 'Банк санхүү', '<p>asdf asdf asdf</p><p>asd f</p><p>asd</p><p>f as</p><p>df</p><p>as df</p>', 2011, '', '', '', NULL, '88360422', '', 'Монгол, Байршил', 'Mountain Time (US & Canada)', 10, '', '0', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'suhbold-dorjsuren'),
(29, 'Danzanhuu.mishigsuren@yahoo.com', '5132e6dcf1a0c7d32848d84f9ad9046e', 'Danzanhuu.mishigsuren@yahoo.com', 'Мишигсүрэн', 'Халзангууд', '88225144', 2, NULL, 1, '', NULL, NULL, '192.168.1.112', 29, 29, NULL, NULL, NULL, NULL, '2016-06-05 21:10:29', '2016-06-14 23:25:12', 'person', '', 'Сэтгүүлч', '<p>Сэтгүүлч, яруу найрагч </p>', 1990, '', '', '', NULL, '88225144', '', 'Өмнөговь аймаг ', '', 6, '', '0', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL, 'mishigsuren-halzanguud'),
(30, 'duka_2588@yahoo.com', '78e57278e25772c08b8222e3bf46551d', 'duka_2588@yahoo.com', 'Дуламсүрэн', 'Алтансүх', '', 1, NULL, 1, '', NULL, NULL, '192.168.1.163', 30, NULL, NULL, NULL, NULL, NULL, '2016-06-06 10:28:09', '2016-11-03 15:10:44', 'person', '', '', '', NULL, '', '', '', NULL, '', '', '', NULL, 42, '', '0', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1, NULL, 1, NULL, 'dulamsuren-altansuh'),
(31, 'Nandia_44@yahoo.com', '2a46be375e0426dd983e142f57e045d9', 'Nandia_44@yahoo.com', 'Нандинсувд', 'Даваасамбуу', '', 1, NULL, 1, '', NULL, NULL, '192.168.1.163', 31, NULL, NULL, NULL, NULL, NULL, '2016-06-06 14:42:56', '2016-11-04 18:04:17', 'person', '', '', '', NULL, '', '', '', NULL, '', '', '', NULL, 13, '', '0', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1, NULL, 1, NULL, 'nandinsuvd-davaasambuu'),
(32, 'Adiya_ireedui@yahoo.com', '8e255098101029665e26aacca5a2b4e5', 'Adiya_ireedui@yahoo.com', 'Ад', 'Дорж', '88089766', 1, '2016-08-05', 1, '', NULL, NULL, '192.168.1.163', 32, NULL, NULL, NULL, NULL, NULL, '2016-06-06 17:53:14', '2016-11-04 18:10:00', 'person', '', '', '', NULL, '', '', '', NULL, '88089766', '', '', '', 12, '', '0', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1, NULL, 1, NULL, 'ad-dorj'),
(33, 'Hulan_55@yahoo.com', 'd18b246d355a4abbcd15fe31a1f847cc', 'Hulan_55@yahoo.com', 'Хулан', 'Наран', '', 1, NULL, 1, '', NULL, NULL, '192.168.1.163', 33, NULL, NULL, NULL, NULL, NULL, '2016-06-06 20:18:48', '2016-06-07 00:23:07', 'person', '', '', '', NULL, '', '', '', NULL, '', '', '', NULL, 5, '', '0', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'hulan-naran'),
(34, 'suwd_77@yahoo.com', '22dd1195b70e510927333c85e0a1f0d3', 'suwd_77@yahoo.com', 'Сувдаа', 'Наран', '', 1, NULL, 0, 'eb5f3092eedc73ac4e0112dc48cc2497', NULL, NULL, '192.168.1.163', 34, NULL, NULL, NULL, NULL, NULL, '2016-06-07 00:25:05', '2016-06-07 00:25:05', 'person', '', '', '', NULL, '', '', '', NULL, '', '', '', NULL, 0, '', '0', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'suvdaa-naran'),
(35, 'delger_99@yahoo.com', '25d55ad283aa400af464c76d713c07ad', 'delger_99@yahoo.com', 'Delger', 'Naran', '', 1, '0000-00-00', 0, '64828bfa98381378f17a5364d23d0b51', NULL, '', '192.168.1.163', 35, NULL, NULL, NULL, NULL, NULL, '2016-06-07 00:27:47', '2016-08-03 13:24:24', 'person', '', '', '', NULL, '', '', '', NULL, '99009900', '', '', '', 0, '', '0', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL, 'delger-naran'),
(36, 'bumaa.dolgor@yahoo.com', '25f9e794323b453885f5181f1b624d0b', 'bumaa.dolgor@yahoo.com', 'Dolgor', 'Bumaa', '', 1, NULL, 0, '568a1430851bc1882a12ad9cc5531aa5', NULL, NULL, '::1', 36, NULL, NULL, NULL, NULL, NULL, '2016-09-09 13:00:32', '2016-09-09 13:00:32', 'person', '', '', '', NULL, '', '', '', NULL, '', '', '', NULL, 0, '', '0', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'dolgor-bumaa');

--
-- Constraints for dumped tables
--
--
-- Constraints for table `product`
--
ALTER TABLE `product`
  ADD CONSTRAINT `product_brand_id_product_brand_id` FOREIGN KEY (`brand_id`) REFERENCES `product_brand` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `product_company_id_company_id` FOREIGN KEY (`company_id`) REFERENCES `company` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `product_created_user_id_user_id` FOREIGN KEY (`created_user_id`) REFERENCES `user` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `product_default_photo_id_product_photo_id` FOREIGN KEY (`default_photo_id`) REFERENCES `product_photo` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `product_updated_user_id_user_id` FOREIGN KEY (`updated_user_id`) REFERENCES `user` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `product_brand`
--
ALTER TABLE `product_brand`
  ADD CONSTRAINT `product_brand_created_user_id_user_id` FOREIGN KEY (`created_user_id`) REFERENCES `user` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `product_brand_project_category_id_project_category_id` FOREIGN KEY (`project_category_id`) REFERENCES `project_category` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `product_brand_updated_user_id_user_id` FOREIGN KEY (`updated_user_id`) REFERENCES `user` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `product_category`
--
ALTER TABLE `product_category`
  ADD CONSTRAINT `product_category_created_user_id_user_id` FOREIGN KEY (`created_user_id`) REFERENCES `user` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `product_category_parent_id_product_category_id` FOREIGN KEY (`parent_id`) REFERENCES `product_category` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `product_category_updated_user_id_user_id` FOREIGN KEY (`updated_user_id`) REFERENCES `user` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `product_photo`
--
ALTER TABLE `product_photo`
  ADD CONSTRAINT `product_photo_created_user_id_user_id` FOREIGN KEY (`created_user_id`) REFERENCES `user` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `product_photo_product_id_product_id` FOREIGN KEY (`product_id`) REFERENCES `product` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `product_sale`
--
ALTER TABLE `product_sale`
  ADD CONSTRAINT `product_sale_created_user_id_user_id` FOREIGN KEY (`created_user_id`) REFERENCES `user` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `product_sale_product_id_product_id` FOREIGN KEY (`product_id`) REFERENCES `product` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `product_sale_updated_user_id_user_id` FOREIGN KEY (`updated_user_id`) REFERENCES `user` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
ALTER TABLE `user`
  ADD CONSTRAINT `user_created_user_id_user_id` FOREIGN KEY (`created_user_id`) REFERENCES `user` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `user_position_id_user_position_id` FOREIGN KEY (`position_id`) REFERENCES `user_position` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `user_rank_id_user_rank_id` FOREIGN KEY (`rank_id`) REFERENCES `user_rank` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `user_updated_user_id_user_id` FOREIGN KEY (`updated_user_id`) REFERENCES `user` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;
