-- phpMyAdmin SQL Dump
-- version 3.2.5
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Nov 29, 2011 at 12:27 PM
-- Server version: 5.1.44
-- PHP Version: 5.3.2

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `multilingual`
--

-- --------------------------------------------------------

--
-- Table structure for table `access`
--

CREATE TABLE `access` (
  `id` tinyint(1) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=3 ;

--
-- Dumping data for table `access`
--

INSERT INTO `access` VALUES(1, 'Administrator');
INSERT INTO `access` VALUES(2, 'User');

-- --------------------------------------------------------

--
-- Table structure for table `admins`
--

CREATE TABLE `admins` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `first_name` varchar(50) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  `email` varchar(150) NOT NULL,
  `password` varchar(255) NOT NULL,
  `salt` varchar(50) NOT NULL,
  `access` tinyint(1) unsigned NOT NULL DEFAULT '2',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=3 ;

--
-- Dumping data for table `admins`
--

INSERT INTO `admins` VALUES(1, 'Test', 'Admin', 'test@xyz.com', 'f03d5649c1cacc720068448e21fcf8e4dca5acff', '616866138', 1);

-- --------------------------------------------------------

--
-- Table structure for table `labels`
--

CREATE TABLE `labels` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(150) NOT NULL,
  `type` tinyint(4) unsigned NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=99 ;

--
-- Dumping data for table `labels`
--

INSERT INTO `labels` VALUES(1, 'Full name', 1);
INSERT INTO `labels` VALUES(2, 'Email address', 1);
INSERT INTO `labels` VALUES(3, 'Header image', 3);
INSERT INTO `labels` VALUES(4, 'Enquiry', 1);
INSERT INTO `labels` VALUES(5, 'Send', 1);
INSERT INTO `labels` VALUES(6, 'Login', 1);
INSERT INTO `labels` VALUES(7, 'List of pages', 1);
INSERT INTO `labels` VALUES(8, 'Pages', 1);
INSERT INTO `labels` VALUES(9, 'Add new page', 1);
INSERT INTO `labels` VALUES(10, 'Navigation', 1);
INSERT INTO `labels` VALUES(11, 'Languages', 1);
INSERT INTO `labels` VALUES(12, 'List of languages', 1);
INSERT INTO `labels` VALUES(13, 'Logout', 1);
INSERT INTO `labels` VALUES(14, 'Password', 1);
INSERT INTO `labels` VALUES(15, 'Username', 1);
INSERT INTO `labels` VALUES(16, 'Incorrect username and / or password', 2);
INSERT INTO `labels` VALUES(17, 'Edit', 1);
INSERT INTO `labels` VALUES(18, 'Remove', 1);
INSERT INTO `labels` VALUES(19, 'Page name', 1);
INSERT INTO `labels` VALUES(20, 'Edit page', 1);
INSERT INTO `labels` VALUES(21, 'Remove page', 1);
INSERT INTO `labels` VALUES(22, 'Content', 1);
INSERT INTO `labels` VALUES(23, 'Meta title', 1);
INSERT INTO `labels` VALUES(24, 'Meta description', 1);
INSERT INTO `labels` VALUES(25, 'Meta keywords', 1);
INSERT INTO `labels` VALUES(26, 'Identity', 1);
INSERT INTO `labels` VALUES(27, 'Update', 1);
INSERT INTO `labels` VALUES(28, 'Please provide your full name', 2);
INSERT INTO `labels` VALUES(29, 'Please provide your valid email address', 2);
INSERT INTO `labels` VALUES(30, 'Please provide your enquiry', 2);
INSERT INTO `labels` VALUES(31, 'Please provide a name', 2);
INSERT INTO `labels` VALUES(32, 'Please provide a content', 2);
INSERT INTO `labels` VALUES(33, 'Please provide a meta title', 2);
INSERT INTO `labels` VALUES(34, 'Please provide a meta description', 2);
INSERT INTO `labels` VALUES(35, 'Please provide meta keywords', 2);
INSERT INTO `labels` VALUES(36, 'Please provide the identity', 2);
INSERT INTO `labels` VALUES(37, 'This identity is already taken', 2);
INSERT INTO `labels` VALUES(38, 'Your message could not be sent.<br />Please try again later.', 4);
INSERT INTO `labels` VALUES(39, 'Your message has been sent successfully.<br />Someone will get back to your shortly.', 4);
INSERT INTO `labels` VALUES(40, 'Are you sure you want to remove this record?<br />There is no undo!', 4);
INSERT INTO `labels` VALUES(41, 'Yes', 1);
INSERT INTO `labels` VALUES(42, 'No', 1);
INSERT INTO `labels` VALUES(43, 'Select type', 1);
INSERT INTO `labels` VALUES(44, 'Select page', 1);
INSERT INTO `labels` VALUES(45, 'Add', 1);
INSERT INTO `labels` VALUES(46, 'Label', 1);
INSERT INTO `labels` VALUES(47, 'Page', 1);
INSERT INTO `labels` VALUES(55, 'First', 1);
INSERT INTO `labels` VALUES(56, 'Previous', 1);
INSERT INTO `labels` VALUES(57, 'Next', 1);
INSERT INTO `labels` VALUES(58, 'Last', 1);
INSERT INTO `labels` VALUES(59, 'Search', 1);
INSERT INTO `labels` VALUES(60, 'Type', 1);
INSERT INTO `labels` VALUES(62, 'List of labels', 1);
INSERT INTO `labels` VALUES(63, 'There are no records matching your search criteria', 4);
INSERT INTO `labels` VALUES(64, 'There are currently no records available', 4);
INSERT INTO `labels` VALUES(65, 'Record could not be added', 4);
INSERT INTO `labels` VALUES(66, 'Record has been added successfully', 4);
INSERT INTO `labels` VALUES(67, 'Your request could not be processed', 4);
INSERT INTO `labels` VALUES(68, 'Records have been updated successfully', 4);
INSERT INTO `labels` VALUES(81, 'Label types', 1);
INSERT INTO `labels` VALUES(84, 'Admins', 1);
INSERT INTO `labels` VALUES(85, 'List of admins', 1);
INSERT INTO `labels` VALUES(86, 'Add admin', 1);
INSERT INTO `labels` VALUES(88, 'Remove admin', 1);
INSERT INTO `labels` VALUES(89, 'Access', 1);
INSERT INTO `labels` VALUES(90, 'Edit admin', 1);
INSERT INTO `labels` VALUES(91, 'First name', 1);
INSERT INTO `labels` VALUES(92, 'Please provide the first name', 2);
INSERT INTO `labels` VALUES(93, 'Last name', 1);
INSERT INTO `labels` VALUES(94, 'Please provide the last name', 2);
INSERT INTO `labels` VALUES(95, 'Please provide a password', 2);
INSERT INTO `labels` VALUES(96, 'Please select the access level', 2);
INSERT INTO `labels` VALUES(97, 'This email address is already taken', 2);
INSERT INTO `labels` VALUES(98, 'Select one', 1);

-- --------------------------------------------------------

--
-- Table structure for table `labels_content`
--

CREATE TABLE `labels_content` (
  `label` int(11) unsigned NOT NULL,
  `language` tinyint(4) unsigned NOT NULL,
  `content` varchar(255) NOT NULL,
  PRIMARY KEY (`label`,`language`),
  KEY `language` (`language`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `labels_content`
--

INSERT INTO `labels_content` VALUES(1, 1, 'Full name');
INSERT INTO `labels_content` VALUES(1, 2, '全名');
INSERT INTO `labels_content` VALUES(1, 3, 'Nombre y apellidos');
INSERT INTO `labels_content` VALUES(1, 4, 'Vollständiger Name');
INSERT INTO `labels_content` VALUES(2, 1, 'Email address');
INSERT INTO `labels_content` VALUES(2, 2, '電子郵件地址');
INSERT INTO `labels_content` VALUES(2, 3, 'Dirección de correo electrónico');
INSERT INTO `labels_content` VALUES(2, 4, 'E-Mail-Adresse');
INSERT INTO `labels_content` VALUES(3, 1, 'header-english.jpg');
INSERT INTO `labels_content` VALUES(3, 2, 'header-chineese.jpg');
INSERT INTO `labels_content` VALUES(3, 3, 'header-spain.jpg');
INSERT INTO `labels_content` VALUES(3, 4, 'header-german.jpg');
INSERT INTO `labels_content` VALUES(4, 1, 'Enquiry');
INSERT INTO `labels_content` VALUES(4, 2, '查詢');
INSERT INTO `labels_content` VALUES(4, 3, 'Consulta');
INSERT INTO `labels_content` VALUES(4, 4, 'Anfrage');
INSERT INTO `labels_content` VALUES(5, 1, 'Send');
INSERT INTO `labels_content` VALUES(5, 2, '發送');
INSERT INTO `labels_content` VALUES(5, 3, 'Enviar');
INSERT INTO `labels_content` VALUES(5, 4, 'Senden');
INSERT INTO `labels_content` VALUES(6, 1, 'Login');
INSERT INTO `labels_content` VALUES(6, 2, '登錄');
INSERT INTO `labels_content` VALUES(6, 3, 'Login');
INSERT INTO `labels_content` VALUES(6, 4, 'Login');
INSERT INTO `labels_content` VALUES(7, 1, 'List of pages');
INSERT INTO `labels_content` VALUES(7, 2, '頁名單');
INSERT INTO `labels_content` VALUES(7, 3, 'Lista de páginas');
INSERT INTO `labels_content` VALUES(7, 4, 'Liste der Seiten');
INSERT INTO `labels_content` VALUES(8, 1, 'Pages');
INSERT INTO `labels_content` VALUES(8, 2, '頁');
INSERT INTO `labels_content` VALUES(8, 3, 'Páginas');
INSERT INTO `labels_content` VALUES(8, 4, 'Seiten');
INSERT INTO `labels_content` VALUES(9, 1, 'Add new page');
INSERT INTO `labels_content` VALUES(9, 2, '添加新的一頁');
INSERT INTO `labels_content` VALUES(9, 3, 'Añadir una nueva página');
INSERT INTO `labels_content` VALUES(9, 4, 'Neue Seite hinzufügen');
INSERT INTO `labels_content` VALUES(10, 1, 'Navigation');
INSERT INTO `labels_content` VALUES(10, 2, '導航');
INSERT INTO `labels_content` VALUES(10, 3, 'Navegación');
INSERT INTO `labels_content` VALUES(10, 4, 'Navigation');
INSERT INTO `labels_content` VALUES(11, 1, 'Languages');
INSERT INTO `labels_content` VALUES(11, 2, '語言');
INSERT INTO `labels_content` VALUES(11, 3, 'Idiomas');
INSERT INTO `labels_content` VALUES(11, 4, 'Sprachen');
INSERT INTO `labels_content` VALUES(12, 1, 'List of languages');
INSERT INTO `labels_content` VALUES(12, 2, '語言列表');
INSERT INTO `labels_content` VALUES(12, 3, 'Lista de los idiomas');
INSERT INTO `labels_content` VALUES(12, 4, 'Liste der Sprachen');
INSERT INTO `labels_content` VALUES(13, 1, 'Logout');
INSERT INTO `labels_content` VALUES(13, 2, '登出');
INSERT INTO `labels_content` VALUES(13, 3, 'Cerrar sesión');
INSERT INTO `labels_content` VALUES(13, 4, 'Logout');
INSERT INTO `labels_content` VALUES(14, 1, 'Password');
INSERT INTO `labels_content` VALUES(14, 2, '密碼');
INSERT INTO `labels_content` VALUES(14, 3, 'Contraseña');
INSERT INTO `labels_content` VALUES(14, 4, 'Kennwort');
INSERT INTO `labels_content` VALUES(15, 1, 'Username');
INSERT INTO `labels_content` VALUES(15, 2, '用戶名');
INSERT INTO `labels_content` VALUES(15, 3, 'Nombre de usuario');
INSERT INTO `labels_content` VALUES(15, 4, 'Benutzername');
INSERT INTO `labels_content` VALUES(16, 1, 'Incorrect username and / or password');
INSERT INTO `labels_content` VALUES(16, 2, '不正確的用戶名和/或密碼');
INSERT INTO `labels_content` VALUES(16, 3, 'Incorrecto nombre de usuario y / o contraseña');
INSERT INTO `labels_content` VALUES(16, 4, 'Ungültiger Nutzername und / oder Passwort');
INSERT INTO `labels_content` VALUES(17, 1, 'Edit');
INSERT INTO `labels_content` VALUES(17, 2, '編輯');
INSERT INTO `labels_content` VALUES(17, 3, 'Editar');
INSERT INTO `labels_content` VALUES(17, 4, 'Bearbeiten');
INSERT INTO `labels_content` VALUES(18, 1, 'Remove');
INSERT INTO `labels_content` VALUES(18, 2, '刪除');
INSERT INTO `labels_content` VALUES(18, 3, 'Eliminar');
INSERT INTO `labels_content` VALUES(18, 4, 'Entfernen');
INSERT INTO `labels_content` VALUES(19, 1, 'Page name');
INSERT INTO `labels_content` VALUES(19, 2, '網頁名稱');
INSERT INTO `labels_content` VALUES(19, 3, 'Nombre de la página');
INSERT INTO `labels_content` VALUES(19, 4, 'Name der Seite');
INSERT INTO `labels_content` VALUES(20, 1, 'Edit page');
INSERT INTO `labels_content` VALUES(20, 2, '編輯頁面');
INSERT INTO `labels_content` VALUES(20, 3, 'Editar página');
INSERT INTO `labels_content` VALUES(20, 4, 'Seite bearbeiten');
INSERT INTO `labels_content` VALUES(21, 1, 'Remove page');
INSERT INTO `labels_content` VALUES(21, 2, '刪除頁面');
INSERT INTO `labels_content` VALUES(21, 3, 'Eliminar página');
INSERT INTO `labels_content` VALUES(21, 4, 'Seite entfernen');
INSERT INTO `labels_content` VALUES(22, 1, 'Content');
INSERT INTO `labels_content` VALUES(22, 2, '內容');
INSERT INTO `labels_content` VALUES(22, 3, 'Feliz');
INSERT INTO `labels_content` VALUES(22, 4, 'Inhalt');
INSERT INTO `labels_content` VALUES(23, 1, 'Meta title');
INSERT INTO `labels_content` VALUES(23, 2, '當標題');
INSERT INTO `labels_content` VALUES(23, 3, 'Cuando el título');
INSERT INTO `labels_content` VALUES(23, 4, 'Als Titel');
INSERT INTO `labels_content` VALUES(24, 1, 'Meta description');
INSERT INTO `labels_content` VALUES(24, 2, '元描述');
INSERT INTO `labels_content` VALUES(24, 3, 'Meta descripción');
INSERT INTO `labels_content` VALUES(24, 4, 'Meta Beschreibung');
INSERT INTO `labels_content` VALUES(25, 1, 'Meta keywords');
INSERT INTO `labels_content` VALUES(25, 2, '關鍵字');
INSERT INTO `labels_content` VALUES(25, 3, 'Palabras claves del meta');
INSERT INTO `labels_content` VALUES(25, 4, 'Meta-Keywords');
INSERT INTO `labels_content` VALUES(26, 1, 'Identity');
INSERT INTO `labels_content` VALUES(26, 2, '身份');
INSERT INTO `labels_content` VALUES(26, 3, 'Identidad');
INSERT INTO `labels_content` VALUES(26, 4, 'Identität');
INSERT INTO `labels_content` VALUES(27, 1, 'Update');
INSERT INTO `labels_content` VALUES(27, 2, '更新');
INSERT INTO `labels_content` VALUES(27, 3, 'Actualización');
INSERT INTO `labels_content` VALUES(27, 4, 'Aktualisierung');
INSERT INTO `labels_content` VALUES(28, 1, 'Please provide your full name');
INSERT INTO `labels_content` VALUES(28, 2, '請提供您的全名');
INSERT INTO `labels_content` VALUES(28, 3, 'Por favor, proporcione su nombre completo');
INSERT INTO `labels_content` VALUES(28, 4, 'Bitte geben Sie Ihren vollständigen Namen');
INSERT INTO `labels_content` VALUES(29, 1, 'Please provide your valid email address');
INSERT INTO `labels_content` VALUES(29, 2, '請您提供有效的電子郵件地址');
INSERT INTO `labels_content` VALUES(29, 3, 'Por favor, proporcione su dirección de correo electrónico válida');
INSERT INTO `labels_content` VALUES(29, 4, 'Bitte geben Sie Ihre gültige E-Mail-Adresse');
INSERT INTO `labels_content` VALUES(30, 1, 'Please provide your enquiry');
INSERT INTO `labels_content` VALUES(30, 2, '請提供您的詢問');
INSERT INTO `labels_content` VALUES(30, 3, 'Por favor escriba su consulta');
INSERT INTO `labels_content` VALUES(30, 4, 'Bitte geben Sie Ihre Anfrage');
INSERT INTO `labels_content` VALUES(31, 1, 'Please provide a name');
INSERT INTO `labels_content` VALUES(31, 2, '請提供一個名稱');
INSERT INTO `labels_content` VALUES(31, 3, 'Por favor ingrese su nombre');
INSERT INTO `labels_content` VALUES(31, 4, 'Bitte geben Sie einen Namen');
INSERT INTO `labels_content` VALUES(32, 1, 'Please provide a content');
INSERT INTO `labels_content` VALUES(32, 2, '請提供內容');
INSERT INTO `labels_content` VALUES(32, 3, 'Por favor ingrese su contenido');
INSERT INTO `labels_content` VALUES(32, 4, 'Bitte geben Sie eine Content');
INSERT INTO `labels_content` VALUES(33, 1, 'Please provide a meta title');
INSERT INTO `labels_content` VALUES(33, 2, '請提供一個標題');
INSERT INTO `labels_content` VALUES(33, 3, 'Por favor, proporcione un título meta');
INSERT INTO `labels_content` VALUES(33, 4, 'Bitte geben Sie eine Meta-Titel');
INSERT INTO `labels_content` VALUES(34, 1, 'Please provide a meta description');
INSERT INTO `labels_content` VALUES(34, 2, '請提供一個描述');
INSERT INTO `labels_content` VALUES(34, 3, 'Por favor proporcione una descripción de la meta');
INSERT INTO `labels_content` VALUES(34, 4, 'Bitte geben Sie eine Meta-Beschreibung');
INSERT INTO `labels_content` VALUES(35, 1, 'Please provide meta keywords');
INSERT INTO `labels_content` VALUES(35, 2, '請提供關鍵字');
INSERT INTO `labels_content` VALUES(35, 3, 'Por favor meta keywords');
INSERT INTO `labels_content` VALUES(35, 4, 'Bitte geben Sie Meta-Keywords');
INSERT INTO `labels_content` VALUES(36, 1, 'Please provide the identity');
INSERT INTO `labels_content` VALUES(36, 2, '請提供身份');
INSERT INTO `labels_content` VALUES(36, 3, 'Por favor proporcione la identidad');
INSERT INTO `labels_content` VALUES(36, 4, 'Bitte geben Sie die Identität');
INSERT INTO `labels_content` VALUES(37, 1, 'This identity is already taken');
INSERT INTO `labels_content` VALUES(37, 2, '這個身份已經採取');
INSERT INTO `labels_content` VALUES(37, 3, 'Esta identidad ya está en uso');
INSERT INTO `labels_content` VALUES(37, 4, 'Diese Identität ist bereits vergeben');
INSERT INTO `labels_content` VALUES(38, 1, 'Your message could not be sent.<br />Please try again later.');
INSERT INTO `labels_content` VALUES(38, 2, '您的郵件無法發送。<br />請稍後再試。');
INSERT INTO `labels_content` VALUES(38, 3, 'Su mensaje no pudo ser enviado. <br /> Por favor, inténtelo de nuevo más tarde.');
INSERT INTO `labels_content` VALUES(38, 4, 'Ihre Nachricht konnte nicht gesendet werden. <br /> Bitte versuchen Sie es später erneut.');
INSERT INTO `labels_content` VALUES(39, 1, 'Your message has been sent successfully.<br />Someone will get back to your shortly.');
INSERT INTO `labels_content` VALUES(39, 2, '您的郵件已成功發送。<br/>有人會回來你不久。');
INSERT INTO `labels_content` VALUES(39, 3, 'Su mensaje ha sido enviado con éxito. <br /> Alguien pondremos en contacto con su breve.');
INSERT INTO `labels_content` VALUES(39, 4, 'Ihre Nachricht wurde erfolgreich gesendet. <br /> Jemand wird zurück zu Ihrem Kürze.');
INSERT INTO `labels_content` VALUES(40, 1, 'Are you sure you want to remove this record?<br />There is no undo!');
INSERT INTO `labels_content` VALUES(40, 2, '你確定要刪除此記錄？<br/>沒有撤消！');
INSERT INTO `labels_content` VALUES(40, 3, '¿Está seguro que desea eliminar este registro? <br /> No se puede deshacer!');
INSERT INTO `labels_content` VALUES(40, 4, 'Sind Sie sicher, dass Sie diesen Rekord zu entfernen? <br /> Es gibt keine rückgängig gemacht werden!');
INSERT INTO `labels_content` VALUES(41, 1, 'Yes');
INSERT INTO `labels_content` VALUES(41, 2, '是');
INSERT INTO `labels_content` VALUES(41, 3, 'Sí');
INSERT INTO `labels_content` VALUES(41, 4, 'Ja');
INSERT INTO `labels_content` VALUES(42, 1, 'No');
INSERT INTO `labels_content` VALUES(42, 2, '無');
INSERT INTO `labels_content` VALUES(42, 3, 'No');
INSERT INTO `labels_content` VALUES(42, 4, 'Nicht');
INSERT INTO `labels_content` VALUES(43, 1, 'Select type');
INSERT INTO `labels_content` VALUES(43, 2, '選擇類型');
INSERT INTO `labels_content` VALUES(43, 3, 'Seleccione el tipo de');
INSERT INTO `labels_content` VALUES(43, 4, 'Wählen Sie die Art');
INSERT INTO `labels_content` VALUES(44, 1, 'Select page');
INSERT INTO `labels_content` VALUES(44, 2, '選擇頁面');
INSERT INTO `labels_content` VALUES(44, 3, 'Seleccionar la página');
INSERT INTO `labels_content` VALUES(44, 4, 'Wählen Sie Seite');
INSERT INTO `labels_content` VALUES(45, 1, 'Add');
INSERT INTO `labels_content` VALUES(45, 2, '添加');
INSERT INTO `labels_content` VALUES(45, 3, 'Añadir');
INSERT INTO `labels_content` VALUES(45, 4, 'Hinzufügen');
INSERT INTO `labels_content` VALUES(46, 1, 'Label');
INSERT INTO `labels_content` VALUES(46, 2, '標籤');
INSERT INTO `labels_content` VALUES(46, 3, 'Etiqueta');
INSERT INTO `labels_content` VALUES(46, 4, 'Etikett');
INSERT INTO `labels_content` VALUES(47, 1, 'Page');
INSERT INTO `labels_content` VALUES(47, 2, '頁');
INSERT INTO `labels_content` VALUES(47, 3, 'Página');
INSERT INTO `labels_content` VALUES(47, 4, 'Seite');
INSERT INTO `labels_content` VALUES(55, 1, 'First');
INSERT INTO `labels_content` VALUES(55, 2, '第一');
INSERT INTO `labels_content` VALUES(55, 3, 'Primero');
INSERT INTO `labels_content` VALUES(55, 4, 'Erste');
INSERT INTO `labels_content` VALUES(56, 1, 'Previous');
INSERT INTO `labels_content` VALUES(56, 2, '上一頁');
INSERT INTO `labels_content` VALUES(56, 3, 'Anterior');
INSERT INTO `labels_content` VALUES(56, 4, 'Vorherige');
INSERT INTO `labels_content` VALUES(57, 1, 'Next');
INSERT INTO `labels_content` VALUES(57, 2, '下一頁');
INSERT INTO `labels_content` VALUES(57, 3, 'Próximo');
INSERT INTO `labels_content` VALUES(57, 4, 'Nächste');
INSERT INTO `labels_content` VALUES(58, 1, 'Last');
INSERT INTO `labels_content` VALUES(58, 2, '最後');
INSERT INTO `labels_content` VALUES(58, 3, 'Pasado');
INSERT INTO `labels_content` VALUES(58, 4, 'Zuletzt');
INSERT INTO `labels_content` VALUES(59, 1, 'Search');
INSERT INTO `labels_content` VALUES(59, 2, '搜索');
INSERT INTO `labels_content` VALUES(59, 3, 'Búsqueda');
INSERT INTO `labels_content` VALUES(59, 4, 'Suche');
INSERT INTO `labels_content` VALUES(60, 1, 'Type');
INSERT INTO `labels_content` VALUES(60, 2, '類型');
INSERT INTO `labels_content` VALUES(60, 3, 'Tipo');
INSERT INTO `labels_content` VALUES(60, 4, 'Typ');
INSERT INTO `labels_content` VALUES(62, 1, 'List of labels');
INSERT INTO `labels_content` VALUES(62, 2, '標籤列表');
INSERT INTO `labels_content` VALUES(62, 3, 'Lista de etiquetas');
INSERT INTO `labels_content` VALUES(62, 4, 'Liste der Labels');
INSERT INTO `labels_content` VALUES(63, 1, 'There are no records matching your search criteria');
INSERT INTO `labels_content` VALUES(63, 2, '沒有您的搜索標準相匹配的記錄');
INSERT INTO `labels_content` VALUES(63, 3, 'No hay registros que coincidan con sus criterios de búsqueda');
INSERT INTO `labels_content` VALUES(63, 4, 'Es gibt keine Aufzeichnungen, die Ihren Suchkriterien');
INSERT INTO `labels_content` VALUES(64, 1, 'There are currently no records available');
INSERT INTO `labels_content` VALUES(64, 2, '目前沒有任何紀錄');
INSERT INTO `labels_content` VALUES(64, 3, 'Actualmente no hay registros disponibles');
INSERT INTO `labels_content` VALUES(64, 4, 'Derzeit gibt es keine Aufzeichnungen vorhanden');
INSERT INTO `labels_content` VALUES(65, 1, 'Record could not be added');
INSERT INTO `labels_content` VALUES(65, 2, '記錄不能被添加');
INSERT INTO `labels_content` VALUES(65, 3, 'Registro no se puede agregar');
INSERT INTO `labels_content` VALUES(65, 4, 'Rekord konnte nicht hinzugefügt werden');
INSERT INTO `labels_content` VALUES(66, 1, 'Record has been added successfully');
INSERT INTO `labels_content` VALUES(66, 2, '已成功添加記錄');
INSERT INTO `labels_content` VALUES(66, 3, 'El registro ha sido agregado con éxito');
INSERT INTO `labels_content` VALUES(66, 4, 'Der Datensatz wurde erfolgreich hinzugefügt');
INSERT INTO `labels_content` VALUES(67, 1, 'Your request could not be processed');
INSERT INTO `labels_content` VALUES(67, 2, '無法處理您的請求');
INSERT INTO `labels_content` VALUES(67, 3, 'Su solicitud no pudo ser procesado');
INSERT INTO `labels_content` VALUES(67, 4, 'Ihre Anfrage konnte nicht verarbeitet werden');
INSERT INTO `labels_content` VALUES(68, 1, 'Records have been updated successfully');
INSERT INTO `labels_content` VALUES(68, 2, '記錄已成功更新');
INSERT INTO `labels_content` VALUES(68, 3, 'Los registros han sido actualizados con éxito');
INSERT INTO `labels_content` VALUES(68, 4, 'Aufzeichnungen wurden erfolgreich aktualisiert');
INSERT INTO `labels_content` VALUES(81, 1, 'List of types');
INSERT INTO `labels_content` VALUES(81, 2, '類型名單');
INSERT INTO `labels_content` VALUES(81, 3, 'Lista de los tipos');
INSERT INTO `labels_content` VALUES(81, 4, 'Liste der Arten');
INSERT INTO `labels_content` VALUES(84, 1, 'Admins');
INSERT INTO `labels_content` VALUES(84, 2, '管理員');
INSERT INTO `labels_content` VALUES(84, 3, 'Administradores');
INSERT INTO `labels_content` VALUES(84, 4, 'Admins');
INSERT INTO `labels_content` VALUES(85, 1, 'List of admins');
INSERT INTO `labels_content` VALUES(85, 2, '對管理員名單');
INSERT INTO `labels_content` VALUES(85, 3, 'Lista de los administradores');
INSERT INTO `labels_content` VALUES(85, 4, 'Liste der Admins');
INSERT INTO `labels_content` VALUES(86, 1, 'Add admin');
INSERT INTO `labels_content` VALUES(86, 2, '添加管理');
INSERT INTO `labels_content` VALUES(86, 3, 'Añadir admin');
INSERT INTO `labels_content` VALUES(86, 4, 'Fügen Sie admin');
INSERT INTO `labels_content` VALUES(88, 1, 'Remove admin');
INSERT INTO `labels_content` VALUES(88, 2, '刪除');
INSERT INTO `labels_content` VALUES(88, 3, 'Quitar admin');
INSERT INTO `labels_content` VALUES(88, 4, 'Nehmen Sie admin');
INSERT INTO `labels_content` VALUES(89, 1, 'Access');
INSERT INTO `labels_content` VALUES(89, 2, '訪問');
INSERT INTO `labels_content` VALUES(89, 3, 'Acceso');
INSERT INTO `labels_content` VALUES(89, 4, 'Zugang');
INSERT INTO `labels_content` VALUES(90, 1, 'Edit admin');
INSERT INTO `labels_content` VALUES(90, 2, '編輯管理');
INSERT INTO `labels_content` VALUES(90, 3, 'Editar admin');
INSERT INTO `labels_content` VALUES(90, 4, 'Bearbeiten admin');
INSERT INTO `labels_content` VALUES(91, 1, 'First name');
INSERT INTO `labels_content` VALUES(91, 2, '名字');
INSERT INTO `labels_content` VALUES(91, 3, 'Nombre de pila');
INSERT INTO `labels_content` VALUES(91, 4, 'Vorname');
INSERT INTO `labels_content` VALUES(92, 1, 'Please provide the first name');
INSERT INTO `labels_content` VALUES(92, 2, '請提供名字');
INSERT INTO `labels_content` VALUES(92, 3, 'Por favor, indique el nombre primero');
INSERT INTO `labels_content` VALUES(92, 4, 'Bitte geben Sie den Vornamen');
INSERT INTO `labels_content` VALUES(93, 1, 'Last name');
INSERT INTO `labels_content` VALUES(93, 2, '姓氏');
INSERT INTO `labels_content` VALUES(93, 3, 'Apellido');
INSERT INTO `labels_content` VALUES(93, 4, 'Nachname');
INSERT INTO `labels_content` VALUES(94, 1, 'Please provide the last name');
INSERT INTO `labels_content` VALUES(94, 2, '請提供姓氏');
INSERT INTO `labels_content` VALUES(94, 3, 'Por favor el apellido');
INSERT INTO `labels_content` VALUES(94, 4, 'Bitte geben Sie den Nachnamen');
INSERT INTO `labels_content` VALUES(95, 1, 'Please provide a password');
INSERT INTO `labels_content` VALUES(95, 2, '請提供一個密碼');
INSERT INTO `labels_content` VALUES(95, 3, 'Por favor, ingrese su contraseña');
INSERT INTO `labels_content` VALUES(95, 4, 'Bitte geben Sie ein Passwort');
INSERT INTO `labels_content` VALUES(96, 1, 'Please select the access level');
INSERT INTO `labels_content` VALUES(96, 2, '請選擇訪問級別');
INSERT INTO `labels_content` VALUES(96, 3, 'Por favor, seleccione el nivel de acceso');
INSERT INTO `labels_content` VALUES(96, 4, 'Bitte wählen Sie die Zugriffsebene');
INSERT INTO `labels_content` VALUES(97, 1, 'This email address is already taken');
INSERT INTO `labels_content` VALUES(97, 2, '這個電子郵件地址已經採取');
INSERT INTO `labels_content` VALUES(97, 3, 'Esta dirección de correo electrónico ya se');
INSERT INTO `labels_content` VALUES(97, 4, 'Diese E-Mail-Adresse ist bereits vergeben');
INSERT INTO `labels_content` VALUES(98, 1, 'Select one');
INSERT INTO `labels_content` VALUES(98, 2, '選擇一個');
INSERT INTO `labels_content` VALUES(98, 3, 'Seleccione una');
INSERT INTO `labels_content` VALUES(98, 4, 'Wählen Sie eine');

-- --------------------------------------------------------

--
-- Table structure for table `labels_types`
--

CREATE TABLE `labels_types` (
  `id` tinyint(4) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=5 ;

--
-- Dumping data for table `labels_types`
--

INSERT INTO `labels_types` VALUES(1, 'Labels');
INSERT INTO `labels_types` VALUES(2, 'Warnings');
INSERT INTO `labels_types` VALUES(3, 'Images');
INSERT INTO `labels_types` VALUES(4, 'Confirmations');

-- --------------------------------------------------------

--
-- Table structure for table `labels_types_content`
--

CREATE TABLE `labels_types_content` (
  `id` tinyint(4) unsigned NOT NULL AUTO_INCREMENT,
  `label` tinyint(4) unsigned NOT NULL,
  `language` tinyint(4) unsigned NOT NULL,
  `content` varchar(50) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_label` (`label`),
  KEY `fk_language` (`language`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=17 ;

--
-- Dumping data for table `labels_types_content`
--

INSERT INTO `labels_types_content` VALUES(1, 1, 1, 'Labels');
INSERT INTO `labels_types_content` VALUES(2, 1, 2, '標籤');
INSERT INTO `labels_types_content` VALUES(3, 1, 3, 'Etiquetas');
INSERT INTO `labels_types_content` VALUES(4, 1, 4, 'Labels');
INSERT INTO `labels_types_content` VALUES(5, 2, 1, 'Warnings');
INSERT INTO `labels_types_content` VALUES(6, 2, 2, '警告');
INSERT INTO `labels_types_content` VALUES(7, 2, 3, 'Advertencias');
INSERT INTO `labels_types_content` VALUES(8, 2, 4, 'Warnungen');
INSERT INTO `labels_types_content` VALUES(9, 3, 1, 'Images');
INSERT INTO `labels_types_content` VALUES(10, 3, 2, '圖片');
INSERT INTO `labels_types_content` VALUES(11, 3, 3, 'Imágenes');
INSERT INTO `labels_types_content` VALUES(12, 3, 4, 'Images');
INSERT INTO `labels_types_content` VALUES(13, 4, 1, 'Confirmations');
INSERT INTO `labels_types_content` VALUES(14, 4, 2, '確認');
INSERT INTO `labels_types_content` VALUES(15, 4, 3, 'Confirmaciones');
INSERT INTO `labels_types_content` VALUES(16, 4, 4, 'Bestätigungen');

-- --------------------------------------------------------

--
-- Table structure for table `languages`
--

CREATE TABLE `languages` (
  `id` tinyint(4) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=5 ;

--
-- Dumping data for table `languages`
--

INSERT INTO `languages` VALUES(1, 'English');
INSERT INTO `languages` VALUES(2, 'Chinese');
INSERT INTO `languages` VALUES(3, 'Spanish');
INSERT INTO `languages` VALUES(4, 'German');

-- --------------------------------------------------------

--
-- Table structure for table `languages_content`
--

CREATE TABLE `languages_content` (
  `language_id` tinyint(4) unsigned NOT NULL,
  `language` tinyint(4) unsigned NOT NULL,
  `label` varchar(50) NOT NULL,
  PRIMARY KEY (`language_id`,`language`),
  KEY `language` (`language`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `languages_content`
--

INSERT INTO `languages_content` VALUES(1, 1, 'English');
INSERT INTO `languages_content` VALUES(1, 2, '英語');
INSERT INTO `languages_content` VALUES(1, 3, 'Inglés');
INSERT INTO `languages_content` VALUES(1, 4, 'Englisch');
INSERT INTO `languages_content` VALUES(2, 1, 'Chinese');
INSERT INTO `languages_content` VALUES(2, 2, '中國');
INSERT INTO `languages_content` VALUES(2, 3, 'Chino');
INSERT INTO `languages_content` VALUES(2, 4, 'Chinese');
INSERT INTO `languages_content` VALUES(3, 1, 'Spanish');
INSERT INTO `languages_content` VALUES(3, 2, '西班牙');
INSERT INTO `languages_content` VALUES(3, 3, 'Español');
INSERT INTO `languages_content` VALUES(3, 4, 'Spanisch');
INSERT INTO `languages_content` VALUES(4, 1, 'German');
INSERT INTO `languages_content` VALUES(4, 2, '德國');
INSERT INTO `languages_content` VALUES(4, 3, 'Alemán');
INSERT INTO `languages_content` VALUES(4, 4, 'Deutsch');

-- --------------------------------------------------------

--
-- Table structure for table `navigation`
--

CREATE TABLE `navigation` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `type` tinyint(1) unsigned NOT NULL,
  `page` int(11) unsigned NOT NULL,
  `order` tinyint(4) unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `fk_type` (`type`),
  KEY `fk_page` (`page`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=43 ;

--
-- Dumping data for table `navigation`
--

INSERT INTO `navigation` VALUES(2, 1, 3, 3);
INSERT INTO `navigation` VALUES(4, 1, 5, 4);
INSERT INTO `navigation` VALUES(5, 1, 6, 2);
INSERT INTO `navigation` VALUES(34, 3, 6, 2);
INSERT INTO `navigation` VALUES(35, 1, 4, 1);
INSERT INTO `navigation` VALUES(36, 3, 4, 1);
INSERT INTO `navigation` VALUES(42, 2, 5, 1);

-- --------------------------------------------------------

--
-- Table structure for table `navigation_types`
--

CREATE TABLE `navigation_types` (
  `id` tinyint(1) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=4 ;

--
-- Dumping data for table `navigation_types`
--

INSERT INTO `navigation_types` VALUES(1, 'Main');
INSERT INTO `navigation_types` VALUES(2, 'Left');
INSERT INTO `navigation_types` VALUES(3, 'Footer');

-- --------------------------------------------------------

--
-- Table structure for table `navigation_types_content`
--

CREATE TABLE `navigation_types_content` (
  `navigation` tinyint(1) unsigned NOT NULL,
  `language` tinyint(4) unsigned NOT NULL,
  `label` varchar(50) NOT NULL,
  PRIMARY KEY (`navigation`,`language`),
  KEY `language` (`language`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `navigation_types_content`
--

INSERT INTO `navigation_types_content` VALUES(1, 1, 'Main');
INSERT INTO `navigation_types_content` VALUES(1, 2, '主');
INSERT INTO `navigation_types_content` VALUES(1, 3, 'Mano');
INSERT INTO `navigation_types_content` VALUES(1, 4, 'Main');
INSERT INTO `navigation_types_content` VALUES(2, 1, 'Left');
INSERT INTO `navigation_types_content` VALUES(2, 2, '左');
INSERT INTO `navigation_types_content` VALUES(2, 3, 'Izquierda');
INSERT INTO `navigation_types_content` VALUES(2, 4, 'Links');
INSERT INTO `navigation_types_content` VALUES(3, 1, 'Footer');
INSERT INTO `navigation_types_content` VALUES(3, 2, '頁腳');
INSERT INTO `navigation_types_content` VALUES(3, 3, 'Pie de página');
INSERT INTO `navigation_types_content` VALUES(3, 4, 'Fußzeile');

-- --------------------------------------------------------

--
-- Table structure for table `pages`
--

CREATE TABLE `pages` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `identity` varchar(150) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=7 ;

--
-- Dumping data for table `pages`
--

INSERT INTO `pages` VALUES(1, 'Home', 'index');
INSERT INTO `pages` VALUES(2, 'Page not found!', 'error');
INSERT INTO `pages` VALUES(3, 'Contact us', 'contact');
INSERT INTO `pages` VALUES(4, 'About us', 'about');
INSERT INTO `pages` VALUES(5, 'Services', 'services');
INSERT INTO `pages` VALUES(6, 'Testimonials', 'testimonials');

-- --------------------------------------------------------

--
-- Table structure for table `pages_content`
--

CREATE TABLE `pages_content` (
  `page` int(11) unsigned NOT NULL,
  `language` tinyint(4) unsigned NOT NULL,
  `name` varchar(150) NOT NULL,
  `content` text,
  `meta_title` varchar(255) NOT NULL,
  `meta_description` varchar(255) NOT NULL,
  `meta_keywords` varchar(255) NOT NULL,
  PRIMARY KEY (`page`,`language`),
  KEY `language` (`language`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `pages_content`
--

INSERT INTO `pages_content` VALUES(1, 1, 'Home', '<h1>\r\n	Welcome to our website</h1>\r\n<p>\r\n	<img alt="New Radicals" height="166" src="/media/images/new-radicals.jpg" style="float:left;margin:4px 20px 20px 0;" width="250" /></p>\r\n<p>\r\n	Wake up kids we&#39;ve got the dreamers disease - age 14 we got you down on your knees. So polite, you&#39;re busy still saying please.</p>\r\n<p>\r\n	Fri - enemies, who when you&#39;re down ain&#39;t your friend, every night we smash their Mercedes - Benz. First we run and then we laugh till we cry.</p>\r\n<p>\r\n	But when the night is falling and you cannot find the light, if you feel your dream is dying hold tight - you&#39;ve got the music in you.</p>\r\n<div class="devider border-top-solid">\r\n	&nbsp;</div>\r\n<p>\r\n	Don&#39;t let go, you&#39;ve got the music in you, one dance left this world is gonna pull through. Don&#39;t give up, you&#39;ve got a reason to live.</p>\r\n<p>\r\n	Can&#39;t forget you only get what you give four am we ran a miracle mile, were flat broke but hey we do it in style the bad rich god&#39;s flying in for your trial.</p>\r\n<p>\r\n	This whole damn world can fall apart you&#39;ll be ok follow your heart. You&#39;re in harms way I&#39;m right behind now say you&#39;re mine.</p>\r\n<p>\r\n	Fly high, what&#39;s real can&#39;t die - you only get what you give just dont be afraid to leave.</p>\r\n<p>\r\n	Health insurance rip off lying, FDA big bankers buying. Fake computer crashes dining, cloning while they&#39;re multiplying.</p>\r\n<p>\r\n	Fashion mag shoots with the aid of 8 dust brothers Beck, Hanson, Courtney Love and Marilyn Manson - you&#39;re all fakes, run to your mansions - come around we&#39;ll kick your ass in!</p>\r\n<p>\r\n	Don&#39;t let go, one dance left this world is gonna pull through. Don&#39;t give up - you&#39;ve got a reason to live, can&#39;t forget we only get what we give.</p>\r\n<p>\r\n	Don&#39;t let go - I feel the music in you</p>\r\n', 'Welcome to our website', 'Welcome to our website', 'Welcome to our website');
INSERT INTO `pages_content` VALUES(1, 2, '首頁', '<h1>歡迎來到我們的網站</h1>\r\n\r\n<img src="/media/images/new-radicals.jpg" alt="New Radicals" width="250" height="166" style="float:left;margin:4px 20px 20px 0;" />\r\n\r\n<p>喚醒孩子，我們已經有了夢想家疾病 - 我們 14歲了你的膝蓋。這麼客氣，你忙還是說請。</p>\r\n\r\n<p>星期五 - 的敵人，誰當你下來，是不是你的朋友，每天晚上我們粉碎他們的梅塞德斯 - 奔馳首先，我們運行，然後我們笑，直到我們哭泣。，但是，當夜幕下降，如果你覺得你不能光你的夢想是死於舉行緊 - 你有你的音樂。</p>\r\n\r\n<p>不放手，你就在你的音樂，舞蹈離開了這個世界是要去拉通過。不要放棄，你已經有了一個活下去的理由。</p>\r\n\r\n<div class="devider border-top-solid"> </div>\r\n\r\n<p>無法忘記你只能得到你給四個上午，我們跑了一個奇蹟英里，身無分文，但嘿，我們的風格為您的試用壞豐富神的飛行。</p>\r\n\r\n<p>這整個該死的世界土崩瓦解，你會確定按照你的心臟。現在你危害的方法，我後面說，你是我的。</p>\r\n\r\n<p>飛得高，什麼是真實，不能死 - 你只得到你給的只是不害怕離開。</p>\r\n\r\n<p>健康保險欺騙說謊，FDA的大銀行家購買。假計算機崩潰餐飲，克隆，當他們乘。</p>\r\n\r\n<p>時尚 MAG 8灰塵貝克兄弟，漢森，拉芙和瑪麗蓮曼森的援助筍 - 你所有的假貨，運行到你的豪宅 - 圍繞我們會踢你的屁股！</p>\r\n\r\n<p>不要放過，一支支舞蹈離開了這個世界，是要去渡過難關。不要放棄 - 你已經有了一個活下去的理由，不能忘記，我們只得到我們給什麼。</p>\r\n\r\n<p>不要放手 - 我覺得在你的音樂</p>', '歡迎來到我們的網站', '歡迎來到我們的網站', '歡迎來到我們的網站');
INSERT INTO `pages_content` VALUES(1, 3, 'Casa', '<h1>Bienvenido a nuestro sitio web</h1>\r\n\r\n<img src="/media/images/new-radicals.jpg" alt="New Radicals" width="250" height="166" style="float:left;margin:4px 20px 20px 0;" />\r\n\r\n<p>Despierta los niños que tenemos la enfermedad soñadores - 14 años de edad que tienes de rodillas. Muy educado, estás ocupado todavía diciendo por favor.</p>\r\n\r\n<p>Vie - enemigos, que cuando estás abajo no es tu amigo, cada noche que romper su Mercedes - Benz. En primer lugar nos encontramos y luego nos reímos hasta que lloramos.</p>\r\n\r\n<div class="devider border-top-solid"> </div>\r\n\r\n<p>Pero cuando la noche está cayendo y no se puede encontrar la luz, si sientes que tu sueño se está muriendo Hold Tight - usted tiene la música por dentro.</p>\r\n\r\n<p>No dejes ir, tienes la música por dentro, un baile dejó este mundo va a salir adelante. No te rindas, tienes una razón para vivir.</p>\r\n\r\n<p>No podemos olvidar que sólo recibe lo que da 04 a.m. nos encontramos con una milla de milagro, se rompió plana pero bueno lo hacemos a lo grande en volar el mal dios rico para su juicio.</p>\r\n\r\n<p>Este maldito mundo puede venirse abajo todo irá bien seguir a tu corazón. Estás en peligro a que estoy justo detrás de ahora dicen que usted es el mío.</p>\r\n\r\n<p>Vuela alto, lo que es real no puede morir - sólo recibe lo que da apenas no tenga miedo de salir.</p>\r\n\r\n<p>Seguro de salud arrancarle la mentira, la FDA comprar grandes banqueros. Equipo falsos accidentes de comedor, la clonación, mientras que están multiplicando.</p>\r\n\r\n<p>Moda dispara revista con la ayuda de 8 hermanos polvo Beck, Hanson, Courtney Love y Marilyn Manson - que son todos falsos, corre a tu mansiones - Come Around vamos a patear el culo en el!</p>\r\n\r\n<p>No deje pasar, una danza dejó este mundo va a salir adelante. No te rindas - que tienes una razón para vivir, no podemos olvidar que sólo te dan lo que dan.</p>\r\n\r\n<p>No deje pasar - Me siento la música por dentro.</p>', 'Bienvenido a nuestro sitio web', 'Bienvenido a nuestro sitio web', 'Bienvenido a nuestro sitio web');
INSERT INTO `pages_content` VALUES(1, 4, 'Nach Hause', '<h1>\r\n	Willkommen auf unserer Website</h1>\r\n<p>\r\n	<img alt="New Radicals" height="166" src="/media/images/new-radicals.jpg" style="float:left;margin:4px 20px 20px 0;" width="250" /></p>\r\n<p>\r\n	Wake Up Kids haben wir die Tr&auml;umer Krankheit habe - mit 14 Jahren bekamen wir Ihnen auf die Knie. So h&ouml;flich, bist du damit besch&auml;ftigt immer noch sagen, bitte.</p>\r\n<p>\r\n	Fr - Feinde, die, wenn du unten bist ist nicht dein Freund, jede Nacht, die wir zerst&ouml;ren ihre Mercedes - Benz. Zuerst haben wir laufen und dann lachen wir, bis wir weinen.</p>\r\n<div class="devider border-top-solid">\r\n	&nbsp;</div>\r\n<p>\r\n	Aber wenn die Nacht hereinbricht und Sie k&ouml;nnen das Licht nicht finden, wenn Sie das Gef&uuml;hl Ihr Traum stirbt festhalten - du hast die Musik in dir.</p>\r\n<p>\r\n	Lassen Sie sich nicht gehen, du hast die Musik in dir, links einen Tanz dieser Welt ist gonna durchkommen. Gib nicht auf, du hast einen Grund zu leben.</p>\r\n<p>\r\n	Kann nicht vergessen, erhalten Sie nur, was du gibst 4.00 liefen wir ein Wunder Meile, waren pleite, aber hey, wir tun es mit Stil die schlechte reiche Gottes fliegen in Ihrer Studie.</p>\r\n<p>\r\n	Diese ganze verdammte Welt kann auseinanderfallen werden Sie ok folge deinem Herzen. Du bist in einen unheilvollen Weg Ich bin direkt hinter jetzt sagen, du bist mein.</p>\r\n<p>\r\n	Fly high, was real ist kann nicht sterben - erhalten Sie nur, was Sie geben gerade nicht Angst zu verlassen.</p>\r\n<p>\r\n	Krankenversicherung rip off liegen, FDA gro&szlig;en Bankiers kaufen. Fake-Computer abst&uuml;rzt Esszimmer, Klonen, w&auml;hrend sie multipliziert sind.</p>\r\n<p>\r\n	Mode mag schie&szlig;t mit Hilfe von 8 Dust Brothers Beck, Hanson, Courtney Love und Marilyn Manson - Sie sind alle Fakes, ausf&uuml;hren, um Ihre Villen - kommen um uns in den Arsch trete in!</p>\r\n<p>\r\n	Lassen Sie sich nicht gehen, links einen Tanz dieser Welt ist gonna durchkommen. Gib nicht auf - du hast einen Grund zu leben, kann nicht vergessen, dass wir nur bekommen, was wir geben.</p>\r\n<p>\r\n	Lassen Sie sich nicht gehen - ich f&uuml;hle die Musik in dir.</p>\r\n', 'Willkommen auf unserer Website', 'Willkommen auf unserer Website', 'Willkommen auf unserer Website');
INSERT INTO `pages_content` VALUES(2, 1, 'Page not found!', '<h1>Page not found!</h1>\r\n<p>The page you are trying to access does not exist or has been moved.</p>', 'Page not found!', 'Page not found!', 'Page not found!');
INSERT INTO `pages_content` VALUES(2, 2, '網頁未找到！', '<h1>網頁未找到！</h1>\r\n<p>您試圖訪問的頁面不存在或已被移動。</p>', '網頁未找到！', '網頁未找到！', '網頁未找到！');
INSERT INTO `pages_content` VALUES(2, 3, 'Página no encontrada!', '<h1>Página no encontrada!</h1>\r\n<p>La página que está intentando acceder no existe o se ha movido.</p>', 'Página no encontrada!', 'Página no encontrada!', 'Página no encontrada!');
INSERT INTO `pages_content` VALUES(2, 4, 'Seite nicht gefunden!', '<h1>Seite nicht gefunden!</h1>\r\n<p>Die Seite, die Sie zugreifen möchten, existiert nicht oder wurde verschoben.</p>', 'Seite nicht gefunden!', 'Seite nicht gefunden!', 'Seite nicht gefunden!');
INSERT INTO `pages_content` VALUES(3, 1, 'Contact us', '<h1>Contact us</h1>', 'Contact us', 'Contact us', 'Contact us');
INSERT INTO `pages_content` VALUES(3, 2, '聯繫我們', '<h1>聯繫我們</h1>', '聯繫我們', '聯繫我們', '聯繫我們');
INSERT INTO `pages_content` VALUES(3, 3, 'Contáctenos', '<h1>Contáctenos</h1>', 'Contáctenos', 'Contáctenos', 'Contáctenos');
INSERT INTO `pages_content` VALUES(3, 4, 'Kontaktieren Sie uns', '<h1>\r\n	Kontaktieren Sie uns</h1>\r\n', 'Kontaktieren Sie uns', 'Kontaktieren Sie uns', 'Kontaktieren Sie uns');
INSERT INTO `pages_content` VALUES(4, 1, 'About us', '<h1>\r\n	About Us</h1>\r\n<p>\r\n	<img alt="Red Hot Chili Peppers" height="163" src="/media/images/red-hot-chili-peppers.jpg" style="float:left;margin:4px 20px 20px 0;" width="250" /></p>\r\n<p>\r\n	They say in chess you&#39;ve got to kill the queen and then you&#39;ve made it. Oh, my! Do you?</p>\r\n<p>\r\n	A funny thing, the king who gets himself assassinated. Hey now, every time I lose attitude.</p>\r\n<p>\r\n	You took a town by storm the mess you made was nominated. Oh, my! Do you? Now put away your welcome soon you&#39;ll find you&#39;ve overstayed it. Hey now, every time I lose attitude.</p>\r\n<div class="devider border-top-solid">\r\n	&nbsp;</div>\r\n<p>\r\n	So divine hell of an elevator all the while my fortune faded. Never mind, the consequences of the crime this time my fortune faded.</p>\r\n<p>\r\n	The medicated state of mind you&#39;ll find is overrated. Oh, My! Do you? You saw it all come down and now it&#39;s time to imitate it. Hey now, every time I lose attitude.</p>\r\n<p>\r\n	So divine hell of an elevator all the while my fortune faded. Never mind, the consequences of the crime this time my fortune faded.</p>\r\n<p>\r\n	Come on God do I seem bulletproof?</p>\r\n<p>\r\n	So divine hell of an elevator all the while my fortune faded. Never mind, the consequences of the crime this time my fortune faded.</p>\r\n<p>\r\n	So divine hell of an elevator all the while my fortune faded. Never mind, the consequences of the crime this time my fortune faded.</p>\r\n', 'About us', 'About us', 'About us');
INSERT INTO `pages_content` VALUES(4, 2, '關於我們', '<h1>關於我們</h1>\r\n\r\n<img src="/media/images/red-hot-chili-peppers.jpg" alt="Red Hot Chili Peppers" width="250" height="163" style="float:left;margin:4px 20px 20px 0;" />\r\n\r\n<p>他們說，在國際象棋，你有殺女王，那麼你做了它。哦，我的！你呢？</p>\r\n\r\n<p>一件有趣的事情，國王，他得到自己的暗殺。嘿，現在，每次我輸了的態度。</p>\r\n\r\n<p>你把風暴的一個小鎮，被提名的爛攤子。哦，我的！你呢？現在收起你的歡迎，很快你會發現你已經逾期居留。嘿，現在，每次我輸了的態度。</p>\r\n\r\n<p>因此，神聖的地獄電梯，而我的財富褪色。沒關係，犯罪的後果，這時候我的財富褪色。</p>\r\n\r\n<div class="devider border-top-solid"> </div>\r\n\r\n<p>藥膳的心理狀態，你會發現是高估了。哦，我的！你呢？你看到這一切下來，現在它的時間來模仿它。嘿，現在，每次我輸了的態度。</p>\r\n\r\n<p>因此，神聖的地獄電梯，而我的財富褪色。沒關係，犯罪的後果，這時候我的財富褪色。來的上帝，我似乎防彈？</p>\r\n\r\n<p>因此，神聖的地獄電梯，而我的財富褪色。沒關係，犯罪的後果，這時候我的財富褪色。</p>\r\n\r\n<p>因此，神聖的地獄電梯，而我的財富褪色。沒關係，犯罪的後果，這時候我的財富褪色。</p>', '關於我們', '關於我們', '關於我們');
INSERT INTO `pages_content` VALUES(4, 3, '¿Quiénes somos?', '<h1>¿Quiénes somos?</h1>\r\n\r\n<img src="/media/images/red-hot-chili-peppers.jpg" alt="Red Hot Chili Peppers" width="250" height="163" style="float:left;margin:4px 20px 20px 0;" />\r\n\r\n<p>Dicen que en el ajedrez hay que matar a la reina y luego de haberlo hecho. Oh, Dios! ¿Verdad?</p>\r\n\r\n<p>Una cosa curiosa, el rey que se asesinado. Hey ahora, cada vez que pierde la actitud.</p>\r\n\r\n<p>Que tuvo una ciudad por la tormenta el desastre que hizo fue nominado. Oh, Dios! ¿Verdad? Ahora guarda tu espera pronto te encontrarás con que has sobrepasado. Hey ahora, cada vez que pierde la actitud.</p>\r\n\r\n<div class="devider border-top-solid"> </div>\r\n\r\n<p>El infierno tan divina de un ascensor al mismo tiempo que mi fortuna se desvaneció. No importa, las consecuencias del crimen esta vez mi fortuna se desvaneció.</p>\r\n\r\n<p>El estado de la mente medicinales encontrará está sobrevalorado. Oh, Dios! ¿Verdad? Usted lo vio todo venir y ahora es el momento de imitarlo. Hey ahora, cada vez que pierde la actitud.</p>\r\n\r\n<p>El infierno tan divina de un ascensor al mismo tiempo que mi fortuna se desvaneció. No importa, las consecuencias del crimen esta vez mi fortuna se desvaneció.</p>\r\n\r\n<p>Vamos Dios no me parece a prueba de balas?</p>\r\n\r\n<p>El infierno tan divina de un ascensor al mismo tiempo que mi fortuna se desvaneció. No importa, las consecuencias del crimen esta vez mi fortuna se desvaneció.</p>\r\n\r\n<p>El infierno tan divina de un ascensor al mismo tiempo que mi fortuna se desvaneció. No importa, las consecuencias del crimen esta vez mi fortuna se desvaneció.</p>', '¿Quiénes somos?', '¿Quiénes somos?', '¿Quiénes somos?');
INSERT INTO `pages_content` VALUES(4, 4, 'Wir über uns', '<h1>Wir über uns</h1>\r\n\r\n<img src="/media/images/red-hot-chili-peppers.jpg" alt="Red Hot Chili Peppers" width="250" height="163" style="float:left;margin:4px 20px 20px 0;" />\r\n\r\n<p>Sie sagen, in Schach mußt du die Königin töten und dann hast du es geschafft. Oh, my! Sie auch?</p>\r\n\r\n<p>Eine lustige Sache, der König, der sich selbst ermordet wird. Hey jetzt, jedes Mal, wenn ich verliere Haltung.</p>\r\n\r\n<p>Sie haben eine Stadt im Sturm die Unordnung Sie gemacht nominiert wurde. Oh, my! Sie auch? Jetzt steckte your welcome bald finden Sie Sie haben es abgelaufen. Hey jetzt, jedes Mal, wenn ich verliere Haltung.</p>\r\n\r\n<div class="devider border-top-solid"> </div>\r\n\r\n<p>So göttlichen Hölle eines Aufzugs die ganze Zeit mein Glück verblasst. Macht nichts, die Folgen der Verbrechen dieser Zeit mein Glück verblasst.</p>\r\n\r\n<p>Die medizinischen Zustand des Geistes finden Sie ist überbewertet. Oh, My! Sie auch? Sie sah alles nach unten zu kommen und jetzt ist es Zeit, es zu imitieren. Hey jetzt, jedes Mal, wenn ich verliere Haltung.</p>\r\n\r\n<p>So göttlichen Hölle eines Aufzugs die ganze Zeit mein Glück verblasst. Macht nichts, die Folgen der Verbrechen dieser Zeit mein Glück verblasst.</p>\r\n\r\n<p>Komm Gott kann ich scheinen kugelsicher?</p>\r\n\r\n<p>So göttlichen Hölle eines Aufzugs die ganze Zeit mein Glück verblasst. Macht nichts, die Folgen der Verbrechen dieser Zeit mein Glück verblasst.</p>\r\n\r\n<p>So göttlichen Hölle eines Aufzugs die ganze Zeit mein Glück verblasst. Macht nichts, die Folgen der Verbrechen dieser Zeit mein Glück verblasst.</p>', 'Wir über uns', 'Wir über uns', 'Wir über uns');
INSERT INTO `pages_content` VALUES(5, 1, 'Services', '<h1>\r\n	Services</h1>\r\n<p>\r\n	<img alt="Blur" height="132" src="/media/images/blur.jpg" style="float:left;margin:4px 20px 20px 0;" width="250" /></p>\r\n<p>\r\n	This is the next century where the Universal&#39;s free. You can find it anywhere, yes, the future&#39;s been sold every night we&#39;re gone and to karaoke songs.</p>\r\n<p>\r\n	How we like to sing along though the words are wrong.</p>\r\n<p>\r\n	It really, really, really could happen, yes, it really, really, really could happen. When the days they seem to fall through you will just let them go.</p>\r\n<div class="devider border-top-solid">\r\n	&nbsp;</div>\r\n<p>\r\n	No-one here is alone, satellite&#39;s in every home. Yes, the Universal&#39;s here, here for everyone.</p>\r\n<p>\r\n	Every paper that you read says tomorrow&#39;s your lucky day, well here&#39;s your lucky day.</p>\r\n<p>\r\n	It really, really, really could happen, yes, it really, really, really could happen. If the days they seem to fall through you will just let them go.</p>\r\n', 'Services', 'Services', 'Services');
INSERT INTO `pages_content` VALUES(5, 2, '服務', '<h1>服務</h1>\r\n\r\n<img src="/media/images/blur.jpg" alt="Blur" width="250" height="132" style="float:left;margin:4px 20px 20px 0;" />\r\n<p>這是下一個世紀，其中通用的自由。你可以找到它的任何地方，是的，未來的已售出每次我們走的那天晚上，卡拉OK歌曲。</p>\r\n\r\n<p>我們喜歡一起唱，雖然話是錯誤的。</p>\r\n\r\n<p>它真的，真的，真的會發生，是的，真的，真的，真的可能發生。當下降通過你的日子裡，他們似乎只是讓他們去。</p>\r\n\r\n<div class="devider border-top-solid"> </div>\r\n\r\n<p>沒有人是單獨的，衛星的每一個家庭。是的，通用的在這裡，在這裡給大家。</p>\r\n\r\n<p>你讀的每一個文件，說，明天是你的幸運日，那麼這裡是你的幸運日。</p>\r\n\r\n<p>它真的，真的，真的會發生，是的，真的，真的，真的可能發生。如果下降通過你的日子裡，他們似乎只是讓他們走。</p>', '服務', '服務', '服務');
INSERT INTO `pages_content` VALUES(5, 3, 'Servicios', '<h1>Servicios</h1>\r\n<img src="/media/images/blur.jpg" alt="Blur" width="250" height="132" style="float:left;margin:4px 20px 20px 0;" />\r\n\r\n<p>Este es el siglo siguiente, donde el universal es gratis. Se puede encontrar en cualquier lugar, sí, el futuro ha sido vendido todas las noches que nos hemos ido y canciones de karaoke.</p>\r\n\r\n<p>¿Cómo nos gusta cantar, aunque las palabras están mal.</p>\r\n\r\n<div class="devider border-top-solid"> </div>\r\n\r\n<p>Es realmente, realmente, realmente podría suceder, sí, realmente, realmente, realmente podría suceder. Cuando los días parecen caer a través de usted acaba de dejarlos ir.</p>\r\n\r\n<p>Nadie aquí es la única, vía satélite en cada hogar. Sí, la Declaración Universal de aquí, aquí para todo el mundo.</p>\r\n\r\n<p>Todos los periódicos que usted lee, dice mañana es tu día de suerte, y aquí está tu día de suerte.</p>\r\n\r\n<p>Es realmente, realmente, realmente podría suceder, sí, realmente, realmente, realmente podría suceder. Si los días parecen caer a través de usted acaba de dejarlos ir.</p>', 'Servicios', 'Servicios', 'Servicios');
INSERT INTO `pages_content` VALUES(5, 4, 'Dienstleistungen', '<h1>\r\n	Dienstleistungen</h1>\r\n<p>\r\n	<img alt="Blur" height="132" src="/media/images/blur.jpg" style="float:left;margin:4px 20px 20px 0;" width="250" /></p>\r\n<p>\r\n	Dies ist der n&auml;chste Jahrhundert, wo die Universal ist kostenlos. Sie finden sie &uuml;berall, ja, die Zukunft ist schon jeden Abend sind wir weg verkauft und Karaoke-Songs.</p>\r\n<p>\r\n	Wie wir zum Mitsingen wenn die Worte falsch sind, wie.</p>\r\n<div class="devider border-top-solid">\r\n	&nbsp;</div>\r\n<p>\r\n	Es ist wirklich, wirklich, wirklich passieren k&ouml;nnte, ja, es ist wirklich, wirklich, k&ouml;nnte wirklich passieren. Wenn die Tage scheinen sie durch dich fallen wird nur gehen lassen.</p>\r\n<p>\r\n	Niemand ist hier allein, die Satelliten in jedes Zuhause. Ja, das ist die Universal hier, hier f&uuml;r jeden Geschmack.</p>\r\n<p>\r\n	Jedes Papier, das Sie gelesen haben, morgen ist dein Gl&uuml;ckstag, auch hier ist dein Gl&uuml;ckstag.</p>\r\n<p>\r\n	Es ist wirklich, wirklich, wirklich passieren k&ouml;nnte, ja, es ist wirklich, wirklich, k&ouml;nnte wirklich passieren. Wenn die Tage scheinen sie durch dich fallen wird nur gehen lassen.</p>\r\n', 'Dienstleistungen', 'Dienstleistungen', 'Dienstleistungen');
INSERT INTO `pages_content` VALUES(6, 1, 'Testimonials', '<h1>Testimonials</h1>\r\n\r\n<img src="/media/images/henry-rollins.jpg" alt="Henry Rollins" width="250" height="167" style="float:left;margin:4px 20px 20px 0;" />\r\n\r\n<p>You think you''re gonna to live your life alone in darkness and seclusion. Yeah I know.</p>\r\n\r\n<p>You''ve been out there tried to mix with those animals and it just left you full of humiliated confusion, so you stagger back home and wait for nothing. But the solitary refinement of your room spits you back out onto the street and now you''re desperate and in need of human contact and then\r\nyou meet me and you whole world changes, because everything I say is everything you''ve ever wanted to hear.</p>\r\n\r\n<p>So you drop all your defenses and you drop all your fears and you trust me completely. I''m perfect in every way cause I make you feel so strong and so powerful inside. You feel so lucky but your ego obscures reality and you never bother to wonder why things are going so well. You wanna know why?</p>\r\n\r\n<p>Cause I''m a liar, yeah I''m a liar. I''ll tear your mind out, I''ll burn your soul. I''ll turn you into me, I''ll turn you into me cause I''m a liar, a liar a liar, a liar.</p>\r\n\r\n\r\n<div class="devider border-top-solid"> </div>\r\n\r\n<p>I''ll hide behind a smile and understanding eyes, and I''ll tell you things that you already know so you can say I really identify with you, so much. And all the time that you''re needing me is just the time that I''m bleeding you don''t you get it yet?</p>\r\n\r\n<p>I''ll come to you like an affliction and I''ll leave you like an addiction you''ll never forget me you wanna know why?</p>\r\n\r\n<p>Cause I''m a liar, yeah I''m a liar. I''ll rip your mind out I''ll burn your soul. I''ll turn you into me, I''ll turn you into me cause I''m a liar, a liar, liar, liar, liar, liar.</p>\r\n\r\n\r\n<p>I don''t know why I feel the need to lie and cause you so much pain, maybe it''s something inside, maybe it''s something I can''t explain. Cause all I do is mess you up and lie to you. I''m a liar, oh, I am a liar.</p>\r\n\r\n<p>But if you''ll give me one more chance I swear that I will never lie to you again because now I see the destructive power of a lie, they''re stronger than truth. I can''t believe I ever hurt you. I swear I will never to you lie again, please just give me one more chance. I will never lie to you again, I swear that I will never tell a lie. I will never tell a lie, no, no.</p>\r\n\r\n<p>Ha ha ha ha ha hah haa haa haa haaa, sucker, sucker! Oh, sucker.</p>\r\n\r\n<p>I am a liar, yeah, I am a liar, yeah I like it - I feel good, ohh I am a liar.</p>', 'Testimonials', 'Testimonials', 'Testimonials');
INSERT INTO `pages_content` VALUES(6, 2, '見證', '<h1>見證</h1>\r\n\r\n<img src="/media/images/henry-rollins.jpg" alt="Henry Rollins" width="250" height="167" style="float:left;margin:4px 20px 20px 0;" />\r\n\r\n<p>你以為你要去你的生活獨自生活在黑暗和隱居。是的，我知道。</p>\r\n\r\n<p>您已經有試圖與這些動物混合，它剛剛離開你充滿羞辱混亂，所以你錯開回家，並等待什麼。但你的房間被細化吐出你退了出去到街上，現在你絕望，需要人與人之間的接觸，那麼你滿足我和你整個世界的變化，因為我說的一切是你曾經想聽到的一切。</p>\r\n\r\n<p>所以你放下你的防禦和你放下你所有的恐懼，你完全信任我。我在各方面都完美，導致我讓你感覺如此強烈，如此強大的內。你覺得這麼幸運了，但你的自我掩蓋現實，你永遠懶得想知道為什麼事情會這麼好。你想知道為什麼？</p>\r\n\r\n<p>原因我是一個騙子，我是一個騙子。我會撕裂你的心，我就燒你的靈魂。我會變成我，你，我將我變成你的事業，我是一個騙子，一個騙子是騙子，騙子。</p>\r\n\r\n<p>我會躲在一個微笑和理解的眼睛，我會告訴你的東西，你已經知道了，所以你可以說我真的認同你，這麼多。所有的時間，你需要我，只是我出血的時間，你不要你還？</p>\r\n\r\n<div class="devider border-top-solid"> </div>\r\n\r\n<p>我就來給你喜歡的痛苦，像一個網癮，你永遠也不會忘記我，你想知道為什麼我會離開你呢？</p>\r\n\r\n<p>原因我是一個騙子，我是一個騙子。我會撕裂你的心了，我會燃燒你的靈魂。我會變成我，你，我將我變成你的事業，我是個騙子，騙子，騙子，騙子，騙子，騙子。</p>\r\n\r\n<p>我不知道為什麼，我覺得有必要撒謊，導致你這麼多的痛苦，也許它的東西在裡面，也許是我無法解釋的東西。原因我做的是惹你，騙你的。我是一個騙子，呵呵，我是個騙子。</p>\r\n\r\n<p>但是，如果你就給我一次機會，我發誓，我永遠不會騙你，因為現在我看到了一個謊言的破壞力，他們是不是真理強。我簡直不能相信我曾經傷害過你。我發誓，我永遠不會給你的謊言再次，請大家給我多一次機會。我永遠不會再騙你，我發誓，我永遠不會說謊。我永遠不會說謊，沒有，沒有。</p>\r\n\r\n<p>哈哈哈哈哈哈HAA HAA HAA HAAA，吸盤，吸盤！哦，吸盤。</p>\r\n\r\n<p>我是一個騙子，是啊，我是個騙子，我喜歡它 - 我感覺很好，ohh我是一個騙子。</p>', '見證', '見證', '見證');
INSERT INTO `pages_content` VALUES(6, 3, 'Testimonios', '<h1>Testimonios</h1>\r\n\r\n<img src="/media/images/henry-rollins.jpg" alt="Henry Rollins" width="250" height="167" style="float:left;margin:4px 20px 20px 0;" />\r\n\r\n<p>¿Crees que vas a vivir tu vida sola en la oscuridad y el aislamiento. Sí, lo sé.</p>\r\n\r\n<p>Usted ha estado allí trató de mezclarse con los animales y que sólo te dejó lleno de confusión humillado, por lo que escalonar a casa y esperar a nada. Sin embargo, el refinamiento de su habitación solitaria escupe de vuelta a la calle y ahora está desesperado y necesita el contacto humano y luego reunirse conmigo y te cambia todo el mundo, porque todo lo que digo es todo lo que alguna vez has querido saber.</p>\r\n\r\n<p>Así que retiren todos sus defensas y se le cae todos sus miedos y confiar en mí completamente. Yo soy perfecto en todos los sentidos porque yo te hacen sentir tan fuerte y tan poderoso en el interior. Se siente muy afortunada, pero su ego oscurece la realidad y nunca se molestó en preguntar por qué las cosas van tan bien. ¿Quieres saber por qué?</p>\r\n\r\n<p>Porque yo soy un mentiroso, sí que soy un mentiroso. Te arranco tu mente hacia fuera, voy a quemar tu alma. Te voy a convertir en mí, voy a encender en mí porque soy un mentiroso, un mentiroso, un mentiroso, un mentiroso.</p>\r\n\r\n<div class="devider border-top-solid"> </div>\r\n\r\n<p>Me esconderé detrás de una sonrisa y la comprensión de los ojos, y te diré las cosas que usted ya sabe lo que puede decir que realmente se identifican con usted, así que mucho. Y todo el tiempo que usted me está necesitando es justo en el momento que estoy sangrando no lo consigues todavía?</p>\r\n\r\n<p>Vendré a ti como una aflicción y me voy a dejar como una adicción que nunca me olvide que usted quiere saber por qué?</p>\r\n\r\n<p>Porque yo soy un mentiroso, sí que soy un mentiroso. Voy a rasgar su mente fuera Voy a quemar tu alma. Te voy a convertir en mí, voy a encender en mí porque soy un mentiroso, un embustero, mentiroso, mentiroso, mentiroso, mentiroso.</p>\r\n\r\n<p>No sé por qué siento la necesidad de mentir y causar tanto dolor, tal vez es algo en su interior, tal vez es algo que no puedo explicar. Porque todo lo que hace es estropear y mentir. Yo soy un mentiroso, oh, soy un mentiroso.</p>\r\n\r\n<p>Pero si me dan una oportunidad más te juro que nunca te voy a mentir otra vez, porque ahora veo que el poder destructivo de una mentira, son más fuertes que la verdad. No puedo creer que nunca te hará daño. Te juro que nunca te mienten de nuevo, por favor, dame una oportunidad más. Yo nunca te voy a mentir de nuevo, te juro que nunca voy a decir una mentira. Yo nunca diré una mentira, no, no.</p>\r\n\r\n<p>Ja, ja, ja, ja, ja haa haa haa haaa, lechón, lechón! Oh, tonto.</p>\r\n\r\n<p>Yo soy un mentiroso, sí, soy un mentiroso, sí que me gusta - me siento bien, ohh yo soy un mentiroso.</p>', 'Testimonios', 'Testimonios', 'Testimonios');
INSERT INTO `pages_content` VALUES(6, 4, 'Testimonials', '<h1>\r\n	Testimonials</h1>\r\n<p>\r\n	<img alt="Henry Rollins" height="167" src="/media/images/henry-rollins.jpg" style="float:left;margin:4px 20px 20px 0;" width="250" /></p>\r\n<p>\r\n	Du denkst, du wirst dein Leben allein leben in Dunkelheit und Abgeschiedenheit. Ja ich wei&szlig;.</p>\r\n<p>\r\n	Sie haben da drau&szlig;en versucht worden, mit denen Tiere zu mischen und sie gerade verlassen Sie voller gedem&uuml;tigt Verwirrung, so dass Sie taumeln zur&uuml;ck nach Hause und warten auf nichts. Aber die einsame Verfeinerung Ihres Zimmers spuckt Sie zur&uuml;ck auf die Stra&szlig;e und jetzt bist du verzweifelt und brauchen menschlichen Kontakt und dann trifft man mich und dich ganze Welt ver&auml;ndert, weil alles, was ich sage ist alles, was Sie jemals wollte, um zu h&ouml;ren.</p>\r\n<p>\r\n	So l&ouml;schen Sie alle Ihre Abwehrkr&auml;fte und Sie fallen alle Ihre &Auml;ngste und vertraust du mir v&ouml;llig. Ich bin in jeder Hinsicht perfekt, weil ich f&uuml;hlen Sie sich so stark und so m&auml;chtig innen. Man f&uuml;hlt sich so gl&uuml;cklich, aber dein Ego verschleiert die Realit&auml;t, und Sie nie die M&uuml;he zu fragen, warum die Dinge sind so gut l&auml;uft. Sie wollen wissen, warum?</p>\r\n<p>\r\n	Denn ich bin ein L&uuml;gner, yeah ich ein L&uuml;gner bin. Ich werde deinen Geist rei&szlig;en, werde ich brennen Sie Ihre Seele. Ich werde dich in mich wenden, werde ich dich in mich wenden, denn ich bin ein L&uuml;gner, L&uuml;gner L&uuml;gner, L&uuml;gner.</p>\r\n<p>\r\n	Ich werde hinter einem L&auml;cheln und Verst&auml;ndnis Augen zu verbergen, und ich sage Ihnen, was Sie bereits wissen, so k&ouml;nnen Sie sagen, dass ich wirklich mit Ihnen zu identifizieren, so viel. Und die ganze Zeit, dass Sie brauchen mich ist gerade die Zeit, dass ich Blutungen du nicht du es noch nicht bekommen habe?</p>\r\n<div class="devider border-top-solid">\r\n	&nbsp;</div>\r\n<p>\r\n	Ich werde Ihnen ein Leiden kommen und ich werde dich wie eine Sucht die du nie vergisst mich Sie wollen wissen, warum verlassen?</p>\r\n<p>\r\n	Denn ich bin ein L&uuml;gner, yeah ich ein L&uuml;gner bin. Ich werde rip Ihre Meinung heraus, dass ich deine Seele werde brennen. Ich werde dich in mich wenden, werde ich dich in mich wenden, denn ich bin ein L&uuml;gner, L&uuml;gner, L&uuml;gner, L&uuml;gner, L&uuml;gner, L&uuml;gner.</p>\r\n<p>\r\n	Ich wei&szlig; nicht, warum ich das Bed&uuml;rfnis zu l&uuml;gen und zu f&uuml;hren, dass Sie so viel Schmerz zu f&uuml;hlen, vielleicht ist es etwas drinnen, vielleicht ist es etwas, das ich nicht erkl&auml;ren kann. Denn alles was ich zu tun Sie ist mess up und liegen bei Ihnen. Ich bin ein L&uuml;gner, oh, ich bin ein L&uuml;gner.</p>\r\n<p>\r\n	Aber wenn Sie geben werde mir noch eine Chance, die ich schw&ouml;re, dass ich nie wieder mit dir zu liegen, weil ich jetzt die zerst&ouml;rerische Macht der L&uuml;ge zu sehen, sie sind st&auml;rker als die Wahrheit. Ich kann nicht glauben das ich je weh tun. Ich schw&ouml;re, ich werde nie wieder mit dir zu liegen, bitte gib mir nur noch eine Chance. Ich werde nie wieder mit dir zu liegen, ich schw&ouml;re, dass ich nie l&uuml;gen. Ich werde niemals eine L&uuml;ge erz&auml;hlen, nein, nein.</p>\r\n<p>\r\n	Ha ha ha ha ha hah haa haa haa haaa, sucker, Trottel! Oh, sucker.</p>\r\n<p>\r\n	Ich bin ein L&uuml;gner, yeah, ich bin ein L&uuml;gner, yeah Ich mag es - ich f&uuml;hle mich gut, ohh ich bin ein L&uuml;gner.</p>\r\n', 'Testimonials', 'Testimonials', 'Testimonials');

--
-- Constraints for dumped tables
--

--
-- Constraints for table `labels_content`
--
ALTER TABLE `labels_content`
  ADD CONSTRAINT `labels_content_ibfk_1` FOREIGN KEY (`label`) REFERENCES `labels` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `labels_content_ibfk_2` FOREIGN KEY (`language`) REFERENCES `languages` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `labels_types_content`
--
ALTER TABLE `labels_types_content`
  ADD CONSTRAINT `labels_types_content_ibfk_1` FOREIGN KEY (`label`) REFERENCES `labels_types` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `labels_types_content_ibfk_2` FOREIGN KEY (`language`) REFERENCES `languages` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `languages_content`
--
ALTER TABLE `languages_content`
  ADD CONSTRAINT `languages_content_ibfk_1` FOREIGN KEY (`language_id`) REFERENCES `languages` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `languages_content_ibfk_2` FOREIGN KEY (`language`) REFERENCES `languages` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `navigation`
--
ALTER TABLE `navigation`
  ADD CONSTRAINT `navigation_ibfk_1` FOREIGN KEY (`type`) REFERENCES `navigation_types` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `navigation_ibfk_2` FOREIGN KEY (`page`) REFERENCES `pages` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `navigation_types_content`
--
ALTER TABLE `navigation_types_content`
  ADD CONSTRAINT `navigation_types_content_ibfk_1` FOREIGN KEY (`navigation`) REFERENCES `navigation_types` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `navigation_types_content_ibfk_2` FOREIGN KEY (`language`) REFERENCES `languages` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `pages_content`
--
ALTER TABLE `pages_content`
  ADD CONSTRAINT `pages_content_ibfk_1` FOREIGN KEY (`language`) REFERENCES `languages` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `pages_content_ibfk_2` FOREIGN KEY (`page`) REFERENCES `pages` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
