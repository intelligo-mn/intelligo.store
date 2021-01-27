-- MySQL dump 10.13  Distrib 8.0.22, for Linux (x86_64)
--
-- Host: localhost    Database: childfood
-- ------------------------------------------------------
-- Server version	8.0.22-0ubuntu0.20.04.3

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `authority`
--

DROP TABLE IF EXISTS `authority`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `authority` (
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `authority`
--

LOCK TABLES `authority` WRITE;
/*!40000 ALTER TABLE `authority` DISABLE KEYS */;
INSERT INTO `authority` VALUES ('ROLE_ADMIN'),('ROLE_MANAGER'),('ROLE_SUPPLIER'),('ROLE_USER');
/*!40000 ALTER TABLE `authority` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `category` (
  `id` varchar(36) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `createdBy` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `createdDate` datetime DEFAULT NULL,
  `lastModifiedBy` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `lastModifiedDate` datetime DEFAULT NULL,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `description` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES ('07082814-ccef-47d3-8f93-4772bcaf8bd2',NULL,NULL,NULL,NULL,'Элсэн чихэр','Элсэн чихэр'),('0f8cd888-b411-41ce-ac60-9838830a920b',NULL,NULL,NULL,NULL,'Жимс, жимсгэнэ','Жимс, жимсгэнэ'),('17a8fc24-5d97-4df0-8cc7-2b19f23f1262',NULL,NULL,NULL,NULL,'Аж ахуйн материал	','Аж ахуйн материал'),('1afd1596-0aab-4fe7-9601-05bc7b34fcb9',NULL,NULL,NULL,NULL,'Ундаа ','Ундаа'),('1f9a18eb-f198-4c54-b3c3-6f68d4d3f63b',NULL,NULL,NULL,NULL,'Шош','Шош'),('26c6c505-0f96-4b1a-b19b-35201bc009c4',NULL,NULL,NULL,NULL,'Цай','Цай'),('2e0856d1-e74a-470f-b0e6-84126ee8cb46',NULL,NULL,NULL,NULL,'Цэвэрлэгээний материал','Цэвэрлэгээний материал'),('39a92478-b68c-445a-aae8-97defe90801f',NULL,NULL,NULL,NULL,'Цагаан идээ','Цагаан идээ'),('4414ff7f-9e4e-47ef-869b-e1b5071fa66c',NULL,NULL,NULL,NULL,'Гурил','Гурил'),('4a9c0c29-af3a-4953-8c0a-5aee278c4f3c',NULL,NULL,NULL,NULL,'Мах','Мах'),('4f38a0dd-f129-4e7c-b909-1280abd3e0ab',NULL,NULL,NULL,NULL,'Варьене','Варьене'),('500e1375-a83d-4c74-a732-e518846a9c8f',NULL,NULL,NULL,NULL,'Гоймон','Гоймон'),('5271fdfa-09e2-47cd-848a-247be949a69a',NULL,NULL,NULL,NULL,'Печень','Печень'),('5f6ed674-f739-4279-b787-ea7981484578',NULL,NULL,NULL,NULL,'Бичиг хэрэг','Бичиг хэрэг'),('6ccaeb3c-5d25-44a7-b934-2b8a0a2f18b8',NULL,NULL,NULL,NULL,'Байгалийн жимс','Байгалийн жимс'),('6dc2351e-b44d-4a14-ae88-bfe076a9aa44',NULL,NULL,NULL,NULL,'Компотны материал','Компотны материал'),('6ef912fa-c410-4ca9-8519-6e7266bf6f2b',NULL,NULL,NULL,NULL,'Варьене','Варьене'),('766dc8b4-4c74-4188-aaff-0b653a7ecedb',NULL,NULL,NULL,NULL,'Ургамлын тос','Ургамлын тос'),('878690ab-7209-4d23-bc1e-2d3f1f300836',NULL,NULL,NULL,NULL,'Хүнсний ногоо','Хүнсний ногоо'),('8868b11d-9ae5-4f8b-a0f0-01193980e1b3',NULL,NULL,NULL,NULL,'Будаа','Будаа'),('89cc1974-fde4-4efa-b08b-8ff26c425edc',NULL,NULL,NULL,NULL,'Нарийн ногоо','Нарийн ногоо'),('93143a92-ac6e-49b2-ac15-149d1661c13f',NULL,NULL,NULL,NULL,'Элсэн чихэр','Элсэн чихэр'),('95e49d39-904a-47c7-8ce1-3c886ff1f38d',NULL,NULL,NULL,NULL,'Самар','Самар'),('988f8573-ff8d-47f6-87eb-78a2f26529cf',NULL,NULL,NULL,NULL,'Нөөшилсөн бүтээгдэхүүн','Нөөшилсөн бүтээгдэхүүн'),('9e64fb5e-0d01-4a74-acba-d4d54c812427',NULL,NULL,NULL,NULL,'Сыр','Сыр'),('a21e0261-ca56-4d39-94f7-e2faa2ac13bb',NULL,NULL,NULL,NULL,'Ундаа','Ундаа'),('a4f43a90-ddd6-4309-b3fd-5cd813772bd2',NULL,NULL,NULL,NULL,'Амтлагч','Амтлагч'),('a6d714cf-d876-471b-b16f-23d81539db3d',NULL,NULL,NULL,NULL,'Элсэн чихэр','Элсэн чихэр'),('ada08508-84c0-4160-ba90-e4382f6e29e7',NULL,NULL,NULL,NULL,'Ургамлын тос','Ургамлын тос'),('b14f14b2-c1c0-43ac-aab0-79b73ad7d303',NULL,NULL,NULL,NULL,'Компот','Компот'),('b7658bb0-1459-4022-ba6b-680d6c86f19e',NULL,NULL,NULL,NULL,'Нарийн ногоо','Нарийн ногоо'),('bff95eb9-c6b8-4411-a51f-52487faa323d',NULL,NULL,NULL,NULL,'Шош','Шош'),('c896cc61-3296-428a-9302-af29b8df9cde',NULL,NULL,NULL,NULL,'Нөөшилсөн бүтээгдэхүүн','Нөөшилсөн бүтээгдэхүүн'),('d1f460db-c89e-45f3-939f-9e8dd17a2fe3',NULL,NULL,NULL,NULL,'Жимс, жимсгэнэ','Жимс, жимсгэнэ'),('d4df8273-f583-46f7-98ff-1517acf6f1f5',NULL,NULL,NULL,NULL,'Мах','Мах'),('dd521e57-33b9-457b-bdaa-c890c54122c9',NULL,NULL,NULL,NULL,'Гоймон','Гоймон'),('dfb04d54-5af9-4451-b8a3-9e7943f1b381',NULL,NULL,NULL,NULL,'Хүнсний ногоо','Хүнсний ногоо'),('e1b4ab15-88ec-42c3-b585-2f500d96cda6',NULL,NULL,NULL,NULL,'Варьене','Варьене'),('e1b936a9-f50f-4fde-9f00-082eb2db51b6',NULL,NULL,NULL,NULL,'Самар','Самар'),('ea3449be-f055-49ee-93aa-c557059c9ebc',NULL,NULL,NULL,NULL,'Сыр','Сыр'),('ebcae6a9-606b-4b42-824e-b092a33620c7',NULL,NULL,NULL,NULL,'Цэвэрлэгээний материал','Цэвэрлэгээний материал'),('ebfce154-0c73-403c-abf3-1aa97dbe15a1',NULL,NULL,NULL,NULL,'Сыр','Сыр'),('ed974707-b60b-4e2a-9cbc-d9f22ea1c310',NULL,NULL,NULL,NULL,'Бичиг хэрэг','Бичиг хэрэг'),('ede30ea5-c4f0-44f5-be41-915d044eb26d',NULL,NULL,NULL,NULL,'Аж ахуйн материал','Аж ахуйн материал'),('ef35b9c7-0e35-4af6-b7cd-fee4dbe0d5ab',NULL,NULL,NULL,NULL,'Цагаан идээ','Цагаан идээ'),('f2bf4675-4cbc-4930-b320-0fbe14d6f9e9',NULL,NULL,NULL,NULL,'Печень','Печень'),('f87261dc-7448-4521-adb4-6491846a028b',NULL,NULL,NULL,NULL,'Элсэн чихэр','Элсэн чихэр'),('f8f10b8e-f81d-47f7-ba83-ad1c6b6f68b7',NULL,NULL,NULL,NULL,'Амтлагч','Амтлагч'),('f94862a5-c822-42df-aee5-aa94ccc9a00e',NULL,NULL,NULL,NULL,'Гурил','Гурил'),('fa0f94e7-d5a7-44cd-89b9-3f9fd6e756e3',NULL,NULL,NULL,NULL,'Нөөшилсөн бүтээгдэхүүн','Нөөшилсөн бүтээгдэхүүн'),('ff82f81b-db51-4a50-977f-3f461ac24aad',NULL,NULL,NULL,NULL,'Печень','Печень');
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `contact`
--

DROP TABLE IF EXISTS `contact`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `contact` (
  `id` varchar(36) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `createdBy` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `createdDate` datetime DEFAULT NULL,
  `lastModifiedBy` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `lastModifiedDate` datetime DEFAULT NULL,
  `organizationId` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `phone` int DEFAULT NULL,
  `email` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `address` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `lat` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `lon` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `contact`
--

LOCK TABLES `contact` WRITE;
/*!40000 ALTER TABLE `contact` DISABLE KEYS */;
/*!40000 ALTER TABLE `contact` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `customer`
--

DROP TABLE IF EXISTS `customer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `customer` (
  `id` varchar(36) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `createdBy` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `createdDate` datetime DEFAULT NULL,
  `lastModifiedBy` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `lastModifiedDate` datetime DEFAULT NULL,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `phone` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `address_line_1` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `address_line_2` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `city` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `country` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customer`
--

LOCK TABLES `customer` WRITE;
/*!40000 ALTER TABLE `customer` DISABLE KEYS */;
/*!40000 ALTER TABLE `customer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `migrations`
--

DROP TABLE IF EXISTS `migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `migrations` (
  `id` int NOT NULL AUTO_INCREMENT,
  `timestamp` bigint NOT NULL,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `migrations`
--

LOCK TABLES `migrations` WRITE;
/*!40000 ALTER TABLE `migrations` DISABLE KEYS */;
INSERT INTO `migrations` VALUES (1,1570200270081,'CreateTables1570200270081'),(2,1570200490072,'SeedUsersRoles1570200490072');
/*!40000 ALTER TABLE `migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order`
--

DROP TABLE IF EXISTS `order`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `order` (
  `id` varchar(36) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `createdBy` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `createdDate` datetime DEFAULT NULL,
  `lastModifiedBy` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `lastModifiedDate` datetime DEFAULT NULL,
  `status` enum('COMPLETED','PENDING','CANCELLED') CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `productsId` varchar(36) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `managerId` varchar(36) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `distribution_date` date NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_b3fc90381815c6288d7356df067` (`productsId`),
  KEY `FK_498abba8d72fb5bb8f9b58482ae` (`managerId`),
  CONSTRAINT `FK_498abba8d72fb5bb8f9b58482ae` FOREIGN KEY (`managerId`) REFERENCES `user` (`id`),
  CONSTRAINT `FK_b3fc90381815c6288d7356df067` FOREIGN KEY (`productsId`) REFERENCES `order_item` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order`
--

LOCK TABLES `order` WRITE;
/*!40000 ALTER TABLE `order` DISABLE KEYS */;
INSERT INTO `order` VALUES ('1ba2eb83-9621-4613-9096-0d4523d93fc2',NULL,NULL,NULL,NULL,'PENDING',NULL,NULL,'0000-00-00');
/*!40000 ALTER TABLE `order` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order_item`
--

DROP TABLE IF EXISTS `order_item`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `order_item` (
  `id` varchar(36) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `createdBy` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `createdDate` datetime DEFAULT NULL,
  `lastModifiedBy` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `lastModifiedDate` datetime DEFAULT NULL,
  `quantity` int DEFAULT NULL,
  `productId` varchar(36) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_904370c093ceea4369659a3c810` (`productId`),
  CONSTRAINT `FK_904370c093ceea4369659a3c810` FOREIGN KEY (`productId`) REFERENCES `product` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_item`
--

LOCK TABLES `order_item` WRITE;
/*!40000 ALTER TABLE `order_item` DISABLE KEYS */;
/*!40000 ALTER TABLE `order_item` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order_pack`
--

DROP TABLE IF EXISTS `order_pack`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `order_pack` (
  `id` varchar(36) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `createdBy` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `createdDate` datetime DEFAULT NULL,
  `lastModifiedBy` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `lastModifiedDate` datetime DEFAULT NULL,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `start_date` date NOT NULL,
  `end_date` date NOT NULL,
  `status` enum('ACTIVE','INACTIVE') CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_pack`
--

LOCK TABLES `order_pack` WRITE;
/*!40000 ALTER TABLE `order_pack` DISABLE KEYS */;
INSERT INTO `order_pack` VALUES ('44287454-db6b-4b08-bd9e-3eb7f26e5e1a',NULL,NULL,NULL,NULL,'Цагаан идээ','2021-01-04','2021-01-29','ACTIVE'),('7e76c3d2-5b27-4c13-bf67-6c96cef149b2',NULL,NULL,NULL,NULL,'Цагаан идээ','2021-01-19','2021-01-28','ACTIVE');
/*!40000 ALTER TABLE `order_pack` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order_pack_products_product`
--

DROP TABLE IF EXISTS `order_pack_products_product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `order_pack_products_product` (
  `orderPackId` varchar(36) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `productId` varchar(36) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`orderPackId`,`productId`),
  KEY `IDX_7801842ce81c1d9e6f9f065a8c` (`orderPackId`),
  KEY `IDX_89b80b8ee052b1f6d7b5fd4e08` (`productId`),
  CONSTRAINT `FK_7801842ce81c1d9e6f9f065a8cb` FOREIGN KEY (`orderPackId`) REFERENCES `order_pack` (`id`) ON DELETE CASCADE,
  CONSTRAINT `FK_89b80b8ee052b1f6d7b5fd4e08e` FOREIGN KEY (`productId`) REFERENCES `product` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_pack_products_product`
--

LOCK TABLES `order_pack_products_product` WRITE;
/*!40000 ALTER TABLE `order_pack_products_product` DISABLE KEYS */;
INSERT INTO `order_pack_products_product` VALUES ('44287454-db6b-4b08-bd9e-3eb7f26e5e1a','01430150-250f-4a55-b6f1-38dc36c598a8'),('44287454-db6b-4b08-bd9e-3eb7f26e5e1a','5618a8eb-617f-4171-901c-93680c34f92d'),('44287454-db6b-4b08-bd9e-3eb7f26e5e1a','5e60edef-34f3-4177-b6ae-e5ed1f875b1a'),('44287454-db6b-4b08-bd9e-3eb7f26e5e1a','a2e8015d-fc5c-4adc-b924-17d2fb82c02e'),('44287454-db6b-4b08-bd9e-3eb7f26e5e1a','eabd26e7-66bf-4594-bc2d-4b73e76b9567'),('7e76c3d2-5b27-4c13-bf67-6c96cef149b2','01430150-250f-4a55-b6f1-38dc36c598a8'),('7e76c3d2-5b27-4c13-bf67-6c96cef149b2','5618a8eb-617f-4171-901c-93680c34f92d'),('7e76c3d2-5b27-4c13-bf67-6c96cef149b2','a2e8015d-fc5c-4adc-b924-17d2fb82c02e'),('7e76c3d2-5b27-4c13-bf67-6c96cef149b2','eabd26e7-66bf-4594-bc2d-4b73e76b9567'),('7e76c3d2-5b27-4c13-bf67-6c96cef149b2','fc2eef64-2208-4f95-99f8-d3980b718074');
/*!40000 ALTER TABLE `order_pack_products_product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `organization`
--

DROP TABLE IF EXISTS `organization`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `organization` (
  `id` varchar(36) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `createdBy` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `createdDate` datetime DEFAULT NULL,
  `lastModifiedBy` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `lastModifiedDate` datetime DEFAULT NULL,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `status` enum('ACTIVE','DEACTIVE') CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `type` enum('CUSTOMER','SUPPLIER') CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `phone` int DEFAULT NULL,
  `email` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `address` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `distributeTypeId` varchar(36) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `managerId` varchar(36) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_6ca5e543b2444f673a81ada12db` (`distributeTypeId`),
  KEY `FK_4714d5c4bd418becb98d5de5fc7` (`managerId`),
  CONSTRAINT `FK_4714d5c4bd418becb98d5de5fc7` FOREIGN KEY (`managerId`) REFERENCES `user` (`id`),
  CONSTRAINT `FK_6ca5e543b2444f673a81ada12db` FOREIGN KEY (`distributeTypeId`) REFERENCES `category` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `organization`
--

LOCK TABLES `organization` WRITE;
/*!40000 ALTER TABLE `organization` DISABLE KEYS */;
INSERT INTO `organization` VALUES ('4b6e5c90-4670-423f-bda3-22b90393caa4',NULL,NULL,NULL,NULL,'Turtuvshin Byambaa','ACTIVE','CUSTOMER',90991195,'turuu@dev.mn','Ulaanbaatar, Bayanzurkh district',NULL,'cfe7aba5-a110-43c3-9577-e9c615129fe8'),('5d600f95-c350-4579-9aab-7ae3f730458d',NULL,NULL,NULL,NULL,'Нэгдүгээр цэцэрлэг','ACTIVE','CUSTOMER',90991195,'turuu@dev.mn','Ulaanbaatar, Bayanzurkh district',NULL,'be14fa8d-2a29-4903-bf91-18595a5387e2'),('cdd7f28f-e8cc-4d63-be4a-251bd4a4dd25',NULL,NULL,NULL,NULL,'Сүү','ACTIVE','SUPPLIER',90991195,'turuu@dev.mn','Ulaanbaatar, Bayanzurkh district','ef35b9c7-0e35-4af6-b7cd-fee4dbe0d5ab','7d981560-3ea6-4984-8c71-aee37c03cb90'),('f130a219-8de8-4b14-8c87-d0991890a6fd',NULL,NULL,NULL,NULL,'Талх чихэр','ACTIVE','CUSTOMER',90991195,'turuu@dev.mn','Ulaanbaatar, Bayanzurkh district','b7658bb0-1459-4022-ba6b-680d6c86f19e','cfe7aba5-a110-43c3-9577-e9c615129fe8');
/*!40000 ALTER TABLE `organization` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product` (
  `id` varchar(36) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `createdBy` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `createdDate` datetime DEFAULT NULL,
  `lastModifiedBy` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `lastModifiedDate` datetime DEFAULT NULL,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `description` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `active` tinyint DEFAULT NULL,
  `comment` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `categoryId` varchar(36) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `unitId` varchar(36) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_ff0c0301a95e517153df97f6812` (`categoryId`),
  KEY `FK_2ee96d5eff55f14a6e37470b782` (`unitId`),
  CONSTRAINT `FK_2ee96d5eff55f14a6e37470b782` FOREIGN KEY (`unitId`) REFERENCES `unit` (`id`),
  CONSTRAINT `FK_ff0c0301a95e517153df97f6812` FOREIGN KEY (`categoryId`) REFERENCES `category` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES ('00a72e19-4e68-48b2-9cc4-00b5c2c67c66',NULL,NULL,NULL,NULL,'Омо 1,5кг','Омо 1,5кг',NULL,NULL,'2e0856d1-e74a-470f-b0e6-84126ee8cb46','945f6027-05a2-4e31-814b-e28bbed4939b'),('01430150-250f-4a55-b6f1-38dc36c598a8',NULL,NULL,NULL,NULL,'Усан үзэм ногоон','Усан үзэм ногоон',NULL,NULL,'d1f460db-c89e-45f3-939f-9e8dd17a2fe3','f88f3712-df79-43ba-9692-6061d6a45103'),('02188fd6-fdbd-4149-9af5-c9fcdf7f4503',NULL,NULL,NULL,NULL,'Солонгос ногоон цай','Солонгос ногоон цай',NULL,NULL,'26c6c505-0f96-4b1a-b19b-35201bc009c4','945f6027-05a2-4e31-814b-e28bbed4939b'),('02416c85-bcb9-4408-9686-20800a0e9507',NULL,NULL,NULL,NULL,'Эрдэнэшиш','Эрдэнэшиш',NULL,NULL,'89cc1974-fde4-4efa-b08b-8ff26c425edc','f88f3712-df79-43ba-9692-6061d6a45103'),('02798269-1668-4557-b7cd-28ce6c0e5fbf',NULL,NULL,NULL,NULL,'Олейна тос /1л/','Олейна тос /1л/',NULL,NULL,'766dc8b4-4c74-4188-aaff-0b653a7ecedb','945f6027-05a2-4e31-814b-e28bbed4939b'),('053ed869-86a0-4d8a-aa34-82990d8077b6',NULL,NULL,NULL,NULL,'Сода Сатас /300гр/','Сода Сатас /300гр/',NULL,NULL,'a4f43a90-ddd6-4309-b3fd-5cd813772bd2','945f6027-05a2-4e31-814b-e28bbed4939b'),('0755a6ee-c0a8-4442-8612-2418b2667b54',NULL,NULL,NULL,NULL,'Нэрс','Нэрс',NULL,NULL,'6ccaeb3c-5d25-44a7-b934-2b8a0a2f18b8','f88f3712-df79-43ba-9692-6061d6a45103'),('0825b78f-a439-426d-9a5d-9f8e053205c4',NULL,NULL,NULL,NULL,'Akbar том','Akbar том',NULL,NULL,'26c6c505-0f96-4b1a-b19b-35201bc009c4','945f6027-05a2-4e31-814b-e28bbed4939b'),('0a267ad3-f89a-4dad-96dd-d3f731d57f5c',NULL,NULL,NULL,NULL,'Тахиа мөч','Тахиа мөч',NULL,NULL,'4a9c0c29-af3a-4953-8c0a-5aee278c4f3c','f88f3712-df79-43ba-9692-6061d6a45103'),('0aae4cc6-1857-4715-8b0b-f43bfd4634f8',NULL,NULL,NULL,NULL,'Салат амтлагч Tonolli','Салат амтлагч Tonolli',NULL,NULL,'a4f43a90-ddd6-4309-b3fd-5cd813772bd2','945f6027-05a2-4e31-814b-e28bbed4939b'),('0b2ff7cc-d710-4b8d-a98a-cb5a40a5e509',NULL,NULL,NULL,NULL,'Эрдэнэшиш, corn/425гр/','Эрдэнэшиш, corn/425гр/',NULL,NULL,'988f8573-ff8d-47f6-87eb-78a2f26529cf','945f6027-05a2-4e31-814b-e28bbed4939b'),('0b300f0c-c953-4822-8404-9346b9fdf3f9',NULL,NULL,NULL,NULL,'Аарц','Аарц',NULL,NULL,'39a92478-b68c-445a-aae8-97defe90801f','f88f3712-df79-43ba-9692-6061d6a45103'),('0b49085c-9eae-4e06-8e85-62513e33b768',NULL,NULL,NULL,NULL,'Байцаа','Байцаа',NULL,NULL,'878690ab-7209-4d23-bc1e-2d3f1f300836','f88f3712-df79-43ba-9692-6061d6a45103'),('0c0520c1-ffad-4c08-8c3a-138044bbd96f',NULL,NULL,NULL,NULL,'Цайруулагч тех /1л/','Цайруулагч тех /1л/',NULL,NULL,'2e0856d1-e74a-470f-b0e6-84126ee8cb46','945f6027-05a2-4e31-814b-e28bbed4939b'),('0d01f9b1-85f0-4eb3-bb93-f50d7ed531b4',NULL,NULL,NULL,NULL,'Өргөст хэмх, урбанек/910гр/','Өргөст хэмх, урбанек/910гр/',NULL,NULL,'988f8573-ff8d-47f6-87eb-78a2f26529cf','945f6027-05a2-4e31-814b-e28bbed4939b'),('0daa53a4-b9f6-49db-b608-555861598f29',NULL,NULL,NULL,NULL,'Жууцай','Жууцай',NULL,NULL,'89cc1974-fde4-4efa-b08b-8ff26c425edc','f88f3712-df79-43ba-9692-6061d6a45103'),('0e5f92e6-db61-4b15-9a67-c0a69bed6ef6',NULL,NULL,NULL,NULL,'Орос задгай вафли /8кг/','Орос задгай вафли /8кг/',NULL,NULL,'5271fdfa-09e2-47cd-848a-247be949a69a','3dd52160-90f4-453c-b569-5291a65ead12'),('0f246557-0119-489c-a34e-ea71837c67a2',NULL,NULL,NULL,NULL,'Компот хад /900гр/','Компот хад /900гр/',NULL,NULL,'b14f14b2-c1c0-43ac-aab0-79b73ad7d303','945f6027-05a2-4e31-814b-e28bbed4939b'),('0f5261be-8ee9-42ae-9938-ac62e25e359b',NULL,NULL,NULL,NULL,'Омо вок /400гр/','Омо вок /400гр/',NULL,NULL,'2e0856d1-e74a-470f-b0e6-84126ee8cb46','945f6027-05a2-4e31-814b-e28bbed4939b'),('112e66b4-7101-426e-b6b2-0183f13e583d',NULL,NULL,NULL,NULL,'Шилтэй чинжүү /680гр/','Шилтэй чинжүү /680гр/',NULL,NULL,'988f8573-ff8d-47f6-87eb-78a2f26529cf','945f6027-05a2-4e31-814b-e28bbed4939b'),('12fb81d1-df0f-48bf-bd39-20e6b96412f9',NULL,NULL,NULL,NULL,'Тос /20л/','Тос /20л/',NULL,NULL,'766dc8b4-4c74-4188-aaff-0b653a7ecedb','945f6027-05a2-4e31-814b-e28bbed4939b'),('1581243d-5e6f-4776-aeab-ca35c44a1955',NULL,NULL,NULL,NULL,'	Усан үзэм хүрэн,чили','	Усан үзэм хүрэн,чили',NULL,NULL,'0f8cd888-b411-41ce-ac60-9838830a920b','f88f3712-df79-43ba-9692-6061d6a45103'),('16a59796-f322-4e37-aa34-bd67b7fffde7',NULL,NULL,NULL,NULL,'Их тайга цай босоо','Их тайга цай босоо',NULL,NULL,'26c6c505-0f96-4b1a-b19b-35201bc009c4','945f6027-05a2-4e31-814b-e28bbed4939b'),('185414f7-cea6-4298-aeb6-25e1e1ba918f',NULL,NULL,NULL,NULL,'Бялзуухай','Бялзуухай',NULL,NULL,'5271fdfa-09e2-47cd-848a-247be949a69a','945f6027-05a2-4e31-814b-e28bbed4939b'),('18d4b541-f028-4fa7-9fd9-4d3f6a84a8b6',NULL,NULL,NULL,NULL,'Шилтэй чинжүү /550гр/','Шилтэй чинжүү /550гр/',NULL,NULL,'988f8573-ff8d-47f6-87eb-78a2f26529cf','945f6027-05a2-4e31-814b-e28bbed4939b'),('19ecfa5e-fe96-43ec-ba32-9176b55f7950',NULL,NULL,NULL,NULL,'Тахиа цээж','Тахиа цээж',NULL,NULL,'4a9c0c29-af3a-4953-8c0a-5aee278c4f3c','f88f3712-df79-43ba-9692-6061d6a45103'),('1a0c8a65-968a-4a5c-9cc1-a8fd9953a4d1',NULL,NULL,NULL,NULL,'Тахиа гуя','Тахиа гуя',NULL,NULL,'4a9c0c29-af3a-4953-8c0a-5aee278c4f3c','f88f3712-df79-43ba-9692-6061d6a45103'),('1cde3b9f-4164-47e9-a0ae-b47ae251bc73',NULL,NULL,NULL,NULL,'Зөөхий','Зөөхий',NULL,NULL,'39a92478-b68c-445a-aae8-97defe90801f','f88f3712-df79-43ba-9692-6061d6a45103'),('1d40340f-2016-4f74-af42-2e24f9181cd6',NULL,NULL,NULL,NULL,'Шөлний байцаа /мёг/','Шөлний байцаа /мёг/',NULL,NULL,'89cc1974-fde4-4efa-b08b-8ff26c425edc','945f6027-05a2-4e31-814b-e28bbed4939b'),('1ed5734a-074c-436b-9a2d-d8c531f83349',NULL,NULL,NULL,NULL,'Ногоон вандуй /400гр/','Ногоон вандуй /400гр/',NULL,NULL,'988f8573-ff8d-47f6-87eb-78a2f26529cf','945f6027-05a2-4e31-814b-e28bbed4939b'),('1f96f211-0c9d-4bd1-84ad-76a767e31b3b',NULL,NULL,NULL,NULL,'Хүнсний скоч','Хүнсний скоч',NULL,NULL,'2e0856d1-e74a-470f-b0e6-84126ee8cb46','945f6027-05a2-4e31-814b-e28bbed4939b'),('2215b767-09c7-4921-ade5-cdefd56898f7',NULL,NULL,NULL,NULL,'Хадны компот ковар /720гр/','Хадны компот ковар /720гр/',NULL,NULL,'b14f14b2-c1c0-43ac-aab0-79b73ad7d303','945f6027-05a2-4e31-814b-e28bbed4939b'),('22163e8a-9776-40bf-9cc6-c500c27698f9',NULL,NULL,NULL,NULL,'Ургац-2 /25кг/','Ургац-2 /25кг/',NULL,NULL,'4414ff7f-9e4e-47ef-869b-e1b5071fa66c','3a959921-a144-45d8-922f-db703b88d3e7'),('23823cae-3d9a-4ecc-a922-741109c777e7',NULL,NULL,NULL,NULL,'Цагаан цэцэгт байцаа','Цагаан цэцэгт байцаа',NULL,NULL,'89cc1974-fde4-4efa-b08b-8ff26c425edc','f88f3712-df79-43ba-9692-6061d6a45103'),('25816f7f-6538-4685-83c6-179073484d7e',NULL,NULL,NULL,NULL,'Nice 0.8 вок','Nice 0.8 вок',NULL,NULL,'2e0856d1-e74a-470f-b0e6-84126ee8cb46','945f6027-05a2-4e31-814b-e28bbed4939b'),('25f8633e-1259-4b86-b19d-c9acd7626e8f',NULL,NULL,NULL,NULL,'Дүүпүү','Дүүпүү',NULL,NULL,'89cc1974-fde4-4efa-b08b-8ff26c425edc','945f6027-05a2-4e31-814b-e28bbed4939b'),('26affef9-7e7a-4576-9c01-6e336e749114',NULL,NULL,NULL,NULL,'Лаазтай улаан шош','Лаазтай улаан шош',NULL,NULL,'988f8573-ff8d-47f6-87eb-78a2f26529cf','945f6027-05a2-4e31-814b-e28bbed4939b'),('26d2eb40-d63c-4034-9f50-1de412964214',NULL,NULL,NULL,NULL,'Амтат шар манжин','Амтат шар манжин',NULL,NULL,'89cc1974-fde4-4efa-b08b-8ff26c425edc','f88f3712-df79-43ba-9692-6061d6a45103'),('27398672-d6ac-429b-914e-253fed978d38',NULL,NULL,NULL,NULL,'Салат амтлагч Tonolli','Салат амтлагч Tonolli',NULL,NULL,'a4f43a90-ddd6-4309-b3fd-5cd813772bd2','945f6027-05a2-4e31-814b-e28bbed4939b'),('2957d12c-9e8b-4aae-830d-dbb812a7eba9',NULL,NULL,NULL,NULL,'Крахмал','Крахмал',NULL,NULL,'a4f43a90-ddd6-4309-b3fd-5cd813772bd2','945f6027-05a2-4e31-814b-e28bbed4939b'),('29642918-be95-44d3-b8a1-3ab06036f60f',NULL,NULL,NULL,NULL,'Алейка шар будаа /1кг/','Алейка шар будаа /1кг/',NULL,NULL,'8868b11d-9ae5-4f8b-a0f0-01193980e1b3','f88f3712-df79-43ba-9692-6061d6a45103'),('29ca4a8f-fef4-446a-85df-04246b4dc54e',NULL,NULL,NULL,NULL,'Томато /400гр/','Томато /400гр/',NULL,NULL,'17a8fc24-5d97-4df0-8cc7-2b19f23f1262','945f6027-05a2-4e31-814b-e28bbed4939b'),('2ae64a72-6a3b-40c3-8f5f-760c17c9e9fc',NULL,NULL,NULL,NULL,'Атар бүхэл үр /5кг/','Атар бүхэл үр /5кг/',NULL,NULL,'4414ff7f-9e4e-47ef-869b-e1b5071fa66c','f88f3712-df79-43ba-9692-6061d6a45103'),('2b7fd153-9bcc-42a5-bb91-6ccab9f17400',NULL,NULL,NULL,NULL,'Чавганы компот багро/936гр/','Чавганы компот багро/936гр/',NULL,NULL,'b14f14b2-c1c0-43ac-aab0-79b73ad7d303','945f6027-05a2-4e31-814b-e28bbed4939b'),('2b9276e7-0afc-4d12-a1db-362f7250f578',NULL,NULL,NULL,NULL,'Тарвас','Тарвас',NULL,NULL,'0f8cd888-b411-41ce-ac60-9838830a920b','f88f3712-df79-43ba-9692-6061d6a45103'),('2c226949-630c-49e0-b03d-7ffab2565114',NULL,NULL,NULL,NULL,'Цагаан лууван','Цагаан лууван',NULL,NULL,'89cc1974-fde4-4efa-b08b-8ff26c425edc','f88f3712-df79-43ba-9692-6061d6a45103'),('2c9f4726-0cd0-48de-9b17-01931ebc4b01',NULL,NULL,NULL,NULL,'Хаш','Хаш',NULL,NULL,'89cc1974-fde4-4efa-b08b-8ff26c425edc','f88f3712-df79-43ba-9692-6061d6a45103'),('2e565c10-cb49-4fa5-be0e-bdb3f4142af8',NULL,NULL,NULL,NULL,'Симпли тос /1л/','Симпли тос /1л/',NULL,NULL,'766dc8b4-4c74-4188-aaff-0b653a7ecedb','945f6027-05a2-4e31-814b-e28bbed4939b'),('2ec5fd90-7072-4d04-89c0-d2e6e50c28ef',NULL,NULL,NULL,NULL,'Сыр','Сыр',NULL,NULL,'9e64fb5e-0d01-4a74-acba-d4d54c812427','f88f3712-df79-43ba-9692-6061d6a45103'),('2f068bd3-2e39-4389-9754-bc62d4fc21c0',NULL,NULL,NULL,NULL,'Алейка жигнэмэг','Алейка жигнэмэг',NULL,NULL,'5271fdfa-09e2-47cd-848a-247be949a69a','945f6027-05a2-4e31-814b-e28bbed4939b'),('2f4fe5b2-3a50-4f4c-a713-fe12545b4d98',NULL,NULL,NULL,NULL,'Алим,польш','Алим,польш',NULL,NULL,'0f8cd888-b411-41ce-ac60-9838830a920b','f88f3712-df79-43ba-9692-6061d6a45103'),('2fcbd7d4-09ba-4697-804a-a6a046dd7b75',NULL,NULL,NULL,NULL,'Лечо урбанек /680гр/','Лечо урбанек /680гр/',NULL,NULL,'988f8573-ff8d-47f6-87eb-78a2f26529cf','945f6027-05a2-4e31-814b-e28bbed4939b'),('2fe98aa7-5d69-4d6a-8353-5a5640961346',NULL,NULL,NULL,NULL,'Шар тос','Шар тос',NULL,NULL,'39a92478-b68c-445a-aae8-97defe90801f','f88f3712-df79-43ba-9692-6061d6a45103'),('3301e88e-5596-4c13-aadf-7f8de1166308',NULL,NULL,NULL,NULL,'Лууван','Лууван',NULL,NULL,'878690ab-7209-4d23-bc1e-2d3f1f300836','f88f3712-df79-43ba-9692-6061d6a45103'),('34b480e2-9598-4de9-8238-dc9ce6f47262',NULL,NULL,NULL,NULL,'Та чи вафли','Та чи вафли',NULL,NULL,'5271fdfa-09e2-47cd-848a-247be949a69a','945f6027-05a2-4e31-814b-e28bbed4939b'),('34e7c248-4b1a-4156-bacd-786ae56719e2',NULL,NULL,NULL,NULL,'Исгэгч','Исгэгч',NULL,NULL,'a4f43a90-ddd6-4309-b3fd-5cd813772bd2','945f6027-05a2-4e31-814b-e28bbed4939b'),('365ff728-7e82-4499-99c8-efe6edc11fed',NULL,NULL,NULL,NULL,'Атар 1-р гурил /25кг/','Атар 1-р гурил /25кг/',NULL,NULL,'4414ff7f-9e4e-47ef-869b-e1b5071fa66c','3a959921-a144-45d8-922f-db703b88d3e7'),('385094df-8784-445a-950b-6387c9232bc7',NULL,NULL,NULL,NULL,'Үзэм /10кг/','Үзэм /10кг/',NULL,NULL,'6dc2351e-b44d-4a14-ae88-bfe076a9aa44','3dd52160-90f4-453c-b569-5291a65ead12'),('38575dbf-61fb-41f5-b48d-307a695d5700',NULL,NULL,NULL,NULL,'Цэцэгт байцаа','Цэцэгт байцаа',NULL,NULL,'89cc1974-fde4-4efa-b08b-8ff26c425edc','f88f3712-df79-43ba-9692-6061d6a45103'),('3aedb810-f669-4da9-a00c-9dc5f892b0fe',NULL,NULL,NULL,NULL,'Гадил','Гадил',NULL,NULL,'0f8cd888-b411-41ce-ac60-9838830a920b','f88f3712-df79-43ba-9692-6061d6a45103'),('3b90cb0b-51f3-4467-bfe2-335d7b3f9ec8',NULL,NULL,NULL,NULL,'Усан үзэм ногоон','Усан үзэм ногоон',NULL,NULL,'0f8cd888-b411-41ce-ac60-9838830a920b','f88f3712-df79-43ba-9692-6061d6a45103'),('3be01c0f-5d11-48ac-b00c-5c4f293fad73',NULL,NULL,NULL,NULL,'Хийцтэй цай','Хийцтэй цай',NULL,NULL,'26c6c505-0f96-4b1a-b19b-35201bc009c4','945f6027-05a2-4e31-814b-e28bbed4939b'),('3bf8474a-8c41-425a-bbad-0499f7329985',NULL,NULL,NULL,NULL,'Гоньд','Гоньд',NULL,NULL,'a4f43a90-ddd6-4309-b3fd-5cd813772bd2','945f6027-05a2-4e31-814b-e28bbed4939b'),('3d0c8c60-f148-466d-8eeb-d41466deeef9',NULL,NULL,NULL,NULL,'Цагаан будаа /25кг/','Цагаан будаа /25кг/',NULL,NULL,'8868b11d-9ae5-4f8b-a0f0-01193980e1b3','3a959921-a144-45d8-922f-db703b88d3e7'),('3d2b3a08-565a-4128-b104-e93cdde4c0b7',NULL,NULL,NULL,NULL,'Компот ананас,lucj slaim /565гр/','Компот ананас,lucj slaim /565гр/',NULL,NULL,'b14f14b2-c1c0-43ac-aab0-79b73ad7d303','945f6027-05a2-4e31-814b-e28bbed4939b'),('3fe0fca6-d18e-414b-870c-dfecebdbe06c',NULL,NULL,NULL,NULL,'Укроп','Укроп',NULL,NULL,'a4f43a90-ddd6-4309-b3fd-5cd813772bd2','945f6027-05a2-4e31-814b-e28bbed4939b'),('4009e706-14da-4710-9e50-8587d39f90b5',NULL,NULL,NULL,NULL,'Юуцай','Юуцай',NULL,NULL,'89cc1974-fde4-4efa-b08b-8ff26c425edc','f88f3712-df79-43ba-9692-6061d6a45103'),('41a60e54-3508-4607-bf7f-33ded08f1277',NULL,NULL,NULL,NULL,'Лемон нунтаг','Лемон нунтаг',NULL,NULL,'a4f43a90-ddd6-4309-b3fd-5cd813772bd2','945f6027-05a2-4e31-814b-e28bbed4939b'),('4533e60e-c2e6-493a-8c6f-618e34d0e574',NULL,NULL,NULL,NULL,'Жамц давс, нунтаг','Жамц давс, нунтаг',NULL,NULL,'a4f43a90-ddd6-4309-b3fd-5cd813772bd2','945f6027-05a2-4e31-814b-e28bbed4939b'),('45b0b946-3271-48ac-befb-1a01a4c60783',NULL,NULL,NULL,NULL,'Ааруул','Ааруул',NULL,NULL,'39a92478-b68c-445a-aae8-97defe90801f','f88f3712-df79-43ba-9692-6061d6a45103'),('464b0bb4-0987-4556-9f0e-ba461397b141',NULL,NULL,NULL,NULL,'Мовъёос /1кг/','Мовъёос /1кг/',NULL,NULL,'8868b11d-9ae5-4f8b-a0f0-01193980e1b3','f88f3712-df79-43ba-9692-6061d6a45103'),('47cea701-fa3c-42cf-a61d-13952904315c',NULL,NULL,NULL,NULL,'Улаан перец','Улаан перец',NULL,NULL,'a4f43a90-ddd6-4309-b3fd-5cd813772bd2','945f6027-05a2-4e31-814b-e28bbed4939b'),('4935533f-78d8-47e1-a1ac-409af58eb538',NULL,NULL,NULL,NULL,'Ферри /650гр/','Ферри /650гр/',NULL,NULL,'2e0856d1-e74a-470f-b0e6-84126ee8cb46','945f6027-05a2-4e31-814b-e28bbed4939b'),('4ad6c4fe-dd82-4055-a5f3-b0dc7b172899',NULL,NULL,NULL,NULL,'Үрлэн лооль','Үрлэн лооль',NULL,NULL,'89cc1974-fde4-4efa-b08b-8ff26c425edc','f88f3712-df79-43ba-9692-6061d6a45103'),('4c006432-ae55-4dfa-b6fa-64da433d37fa',NULL,NULL,NULL,NULL,'Ургац дээд /25кг/','Ургац дээд /25кг/',NULL,NULL,'4414ff7f-9e4e-47ef-869b-e1b5071fa66c','3a959921-a144-45d8-922f-db703b88d3e7'),('4cc6828d-4572-48f3-9a5d-9293add5ad4b',NULL,NULL,NULL,NULL,'Лаврын навч','Лаврын навч',NULL,NULL,'a4f43a90-ddd6-4309-b3fd-5cd813772bd2','945f6027-05a2-4e31-814b-e28bbed4939b'),('4cfc2d17-38b8-4656-a8da-44b95440a087',NULL,NULL,NULL,NULL,'Слава шар будаа /1кг/','Слава шар будаа /1кг/',NULL,NULL,'8868b11d-9ae5-4f8b-a0f0-01193980e1b3','f88f3712-df79-43ba-9692-6061d6a45103'),('4d7cf36f-fa14-4f14-842f-425dbcd5d458',NULL,NULL,NULL,NULL,'Пүнтүүз /350гр/','Пүнтүүз /350гр/',NULL,NULL,'500e1375-a83d-4c74-a732-e518846a9c8f','945f6027-05a2-4e31-814b-e28bbed4939b'),('4da6fbfa-b151-4349-859a-006e0504877e',NULL,NULL,NULL,NULL,'Хонины мах','Хонины мах',NULL,NULL,'4a9c0c29-af3a-4953-8c0a-5aee278c4f3c','f88f3712-df79-43ba-9692-6061d6a45103'),('4f04dd0a-b7f6-4b78-bbc5-17339d780043',NULL,NULL,NULL,NULL,'Хүрэн сонгино','Хүрэн сонгино',NULL,NULL,'878690ab-7209-4d23-bc1e-2d3f1f300836','f88f3712-df79-43ba-9692-6061d6a45103'),('4f29e34e-e9fe-42e5-b613-08c8ee969139',NULL,NULL,NULL,NULL,'Компот интоор ковар /720гр/','Компот интоор ковар /720гр/',NULL,NULL,'b14f14b2-c1c0-43ac-aab0-79b73ad7d303','945f6027-05a2-4e31-814b-e28bbed4939b'),('51fd42a7-1b2b-4fb3-a65c-8ab54c848777',NULL,NULL,NULL,NULL,'Липтон цай /25ш/','Липтон цай /25ш/',NULL,NULL,'26c6c505-0f96-4b1a-b19b-35201bc009c4','945f6027-05a2-4e31-814b-e28bbed4939b'),('5205d585-ea71-42d8-a23d-e3e491a0a6f9',NULL,NULL,NULL,NULL,'Кровка печень /60ш/','Кровка печень /60ш/',NULL,NULL,'5271fdfa-09e2-47cd-848a-247be949a69a','3dd52160-90f4-453c-b569-5291a65ead12'),('52086850-af2d-4f61-a42f-c3074937618b',NULL,NULL,NULL,NULL,'Цэнхэр савтай варьене','Цэнхэр савтай варьене',NULL,NULL,'6ef912fa-c410-4ca9-8519-6e7266bf6f2b','945f6027-05a2-4e31-814b-e28bbed4939b'),('5249c318-1347-4d8b-bfb3-ca99c0a0312f',NULL,NULL,NULL,NULL,'Утёнок /00 цэвэрлэгч/','Утёнок /00 цэвэрлэгч/',NULL,NULL,'ede30ea5-c4f0-44f5-be41-915d044eb26d','945f6027-05a2-4e31-814b-e28bbed4939b'),('53631e42-bb9a-4943-8895-8bb54ee9391c',NULL,NULL,NULL,NULL,'Орос цагаан будаа /25кг/','Орос цагаан будаа /25кг/',NULL,NULL,'8868b11d-9ae5-4f8b-a0f0-01193980e1b3','3a959921-a144-45d8-922f-db703b88d3e7'),('53b379f2-e489-4543-86a4-3b62da1d12e9',NULL,NULL,NULL,NULL,'Бууцай','Бууцай',NULL,NULL,'89cc1974-fde4-4efa-b08b-8ff26c425edc','f88f3712-df79-43ba-9692-6061d6a45103'),('55ab9bcd-609b-4345-983e-582fb5759580',NULL,NULL,NULL,NULL,'Исгэгч том','Исгэгч том',NULL,NULL,'a4f43a90-ddd6-4309-b3fd-5cd813772bd2','945f6027-05a2-4e31-814b-e28bbed4939b'),('5618a8eb-617f-4171-901c-93680c34f92d',NULL,NULL,NULL,NULL,'Хогний уут том','Хогний уут том',NULL,NULL,'ede30ea5-c4f0-44f5-be41-915d044eb26d','c95b47f8-5537-44bc-9c76-c8f5aff3bbc1'),('587ffeb2-1640-4df5-a064-46a20dc614a6',NULL,NULL,NULL,NULL,'Гүрж цай,пакеттай','Гүрж цай,пакеттай',NULL,NULL,'26c6c505-0f96-4b1a-b19b-35201bc009c4','945f6027-05a2-4e31-814b-e28bbed4939b'),('59cb8f1c-7112-4c4d-bec5-315ee4ed00a0',NULL,NULL,NULL,NULL,'Омо 1,5кг','Омо 1,5кг',NULL,NULL,'2e0856d1-e74a-470f-b0e6-84126ee8cb46','945f6027-05a2-4e31-814b-e28bbed4939b'),('5b0ed262-16a0-431c-b6cd-c18f2fa3579c',NULL,NULL,NULL,NULL,'Компот интоор ковар /900гр/','Компот интоор ковар /900гр/',NULL,NULL,'b14f14b2-c1c0-43ac-aab0-79b73ad7d303','945f6027-05a2-4e31-814b-e28bbed4939b'),('5be00e66-b254-40b6-8b2e-92b177aaab1b',NULL,NULL,NULL,NULL,'Далайн байцаа','Далайн байцаа',NULL,NULL,'89cc1974-fde4-4efa-b08b-8ff26c425edc','945f6027-05a2-4e31-814b-e28bbed4939b'),('5bf0eb00-f17a-49fc-8bf7-d39598bca527',NULL,NULL,NULL,NULL,'Слава цагаан будаа /5кг/','Слава цагаан будаа /5кг/',NULL,NULL,'8868b11d-9ae5-4f8b-a0f0-01193980e1b3','f88f3712-df79-43ba-9692-6061d6a45103'),('5c89c09a-c10f-4f31-8fca-ad9752bc5922',NULL,NULL,NULL,NULL,'Гүзээлзгэний компот /720гр/','Гүзээлзгэний компот /720гр/',NULL,NULL,'b14f14b2-c1c0-43ac-aab0-79b73ad7d303','945f6027-05a2-4e31-814b-e28bbed4939b'),('5d875a49-57ab-4969-a793-2e58923e7abe',NULL,NULL,NULL,NULL,'Nice 3кг вок','Nice 3кг вок',NULL,NULL,'2e0856d1-e74a-470f-b0e6-84126ee8cb46','945f6027-05a2-4e31-814b-e28bbed4939b'),('5e03b53c-479c-4158-b30c-15949b5a578f',NULL,NULL,NULL,NULL,'Чинжүү','Чинжүү',NULL,NULL,'89cc1974-fde4-4efa-b08b-8ff26c425edc','f88f3712-df79-43ba-9692-6061d6a45103'),('5e60edef-34f3-4177-b6ae-e5ed1f875b1a',NULL,NULL,NULL,NULL,'Ногоон хулуу','Ногоон хулуу',NULL,NULL,'b7658bb0-1459-4022-ba6b-680d6c86f19e','f88f3712-df79-43ba-9692-6061d6a45103'),('6046478b-645c-41d1-9868-703f29fbc2c9',NULL,NULL,NULL,NULL,'Сода Сатас/500гр/','Сода Сатас/500гр/',NULL,NULL,'a4f43a90-ddd6-4309-b3fd-5cd813772bd2','945f6027-05a2-4e31-814b-e28bbed4939b'),('61377af3-9a70-430b-b074-0f7fb98812fb',NULL,NULL,NULL,NULL,'Чеснок','Чеснок',NULL,NULL,'a4f43a90-ddd6-4309-b3fd-5cd813772bd2','945f6027-05a2-4e31-814b-e28bbed4939b'),('614a0f28-dc7a-45bf-a28a-21b9af90089e',NULL,NULL,NULL,NULL,'Хорхой ааруул','Хорхой ааруул',NULL,NULL,'39a92478-b68c-445a-aae8-97defe90801f','f88f3712-df79-43ba-9692-6061d6a45103'),('614eee13-f522-4ca0-820d-3f8ca8b905ee',NULL,NULL,NULL,NULL,'Алтан тариа дээд /25кг/','Алтан тариа дээд /25кг/',NULL,NULL,'4414ff7f-9e4e-47ef-869b-e1b5071fa66c','3a959921-a144-45d8-922f-db703b88d3e7'),('639d6e90-94cb-4a0f-b4d2-25618f1dacff',NULL,NULL,NULL,NULL,'Аарц','Аарц',NULL,NULL,'39a92478-b68c-445a-aae8-97defe90801f','f88f3712-df79-43ba-9692-6061d6a45103'),('65612b3e-b41a-4e43-8907-997f2f159d45',NULL,NULL,NULL,NULL,'Слава гурвалжин будаа,няцалбар /500гр/','Слава гурвалжин будаа,няцалбар /500гр/',NULL,NULL,'8868b11d-9ae5-4f8b-a0f0-01193980e1b3','90b405c5-6d9a-40aa-b369-923c47fb1550'),('6601e5aa-a6a9-46e7-bbaa-cf4c84adb860',NULL,NULL,NULL,NULL,'Аз жаргал, улаан /50ш/','Аз жаргал, улаан /50ш/',NULL,NULL,'5271fdfa-09e2-47cd-848a-247be949a69a','3dd52160-90f4-453c-b569-5291a65ead12'),('66d80767-4aba-4174-92f7-fedf5c1b6c78',NULL,NULL,NULL,NULL,'Ногоон сонгино','Ногоон сонгино',NULL,NULL,'89cc1974-fde4-4efa-b08b-8ff26c425edc','f88f3712-df79-43ba-9692-6061d6a45103'),('67adc83e-d298-4f0e-b918-68c87594de74',NULL,NULL,NULL,NULL,'Том эдийн саван','Том эдийн саван',NULL,NULL,'2e0856d1-e74a-470f-b0e6-84126ee8cb46','945f6027-05a2-4e31-814b-e28bbed4939b'),('689f99a3-2dd5-4d39-a316-8a1514a131f0',NULL,NULL,NULL,NULL,'Жавилин /1кг/','Жавилин /1кг/',NULL,NULL,'ede30ea5-c4f0-44f5-be41-915d044eb26d','945f6027-05a2-4e31-814b-e28bbed4939b'),('68f05fc8-789f-45ac-833c-d962c2a10d56',NULL,NULL,NULL,NULL,'Ээзгий','Ээзгий',NULL,NULL,'39a92478-b68c-445a-aae8-97defe90801f','f88f3712-df79-43ba-9692-6061d6a45103'),('6b015ff4-3c0b-44fa-9b13-ba78e87eafae',NULL,NULL,NULL,NULL,'Хөндий шпагети /400гр/','Хөндий шпагети /400гр/',NULL,NULL,'500e1375-a83d-4c74-a732-e518846a9c8f','945f6027-05a2-4e31-814b-e28bbed4939b'),('6b8be2ff-ed33-4401-980d-b56ec5c65d85',NULL,NULL,NULL,NULL,'Лапша,өргөн','Лапша,өргөн',NULL,NULL,'500e1375-a83d-4c74-a732-e518846a9c8f','f88f3712-df79-43ba-9692-6061d6a45103'),('6b8c10e2-18ac-4c36-a035-a3d897adf637',NULL,NULL,NULL,NULL,'Нэвстэй печень','Нэвстэй печень',NULL,NULL,'5271fdfa-09e2-47cd-848a-247be949a69a','945f6027-05a2-4e31-814b-e28bbed4939b'),('6e9274de-fe1c-4dc1-b43f-d7511f7cf682',NULL,NULL,NULL,NULL,'Vanish хивс угаагч /750мл/','Vanish хивс угаагч /750мл/',NULL,NULL,'ede30ea5-c4f0-44f5-be41-915d044eb26d','945f6027-05a2-4e31-814b-e28bbed4939b'),('6ee71f60-631c-4254-87d9-0e715686d6ea',NULL,NULL,NULL,NULL,'Үхрийн нүдний компот,багро /','Үхрийн нүдний компот,багро /',NULL,NULL,'b14f14b2-c1c0-43ac-aab0-79b73ad7d303','945f6027-05a2-4e31-814b-e28bbed4939b'),('7031ca97-f962-4e0f-8ba3-27c2b6378127',NULL,NULL,NULL,NULL,'Tide вок,тэнгэр /3кг/','Tide вок,тэнгэр /3кг/',NULL,NULL,'2e0856d1-e74a-470f-b0e6-84126ee8cb46','945f6027-05a2-4e31-814b-e28bbed4939b'),('71bad394-1690-420a-88ad-92b7ae8fbd35',NULL,NULL,NULL,NULL,'Слава овьёос /300гр/','Слава овьёос /300гр/',NULL,NULL,'8868b11d-9ae5-4f8b-a0f0-01193980e1b3','945f6027-05a2-4e31-814b-e28bbed4939b'),('743e6724-9e3b-41d2-9d6a-8a5499319576',NULL,NULL,NULL,NULL,'Их тайга /90гр/','Их тайга /90гр/',NULL,NULL,'26c6c505-0f96-4b1a-b19b-35201bc009c4','945f6027-05a2-4e31-814b-e28bbed4939b'),('74e58964-3bd0-4121-a03b-8ae85928c782',NULL,NULL,NULL,NULL,'Сой соус','Сой соус',NULL,NULL,'a4f43a90-ddd6-4309-b3fd-5cd813772bd2','945f6027-05a2-4e31-814b-e28bbed4939b'),('74e8c311-9776-4c4e-a31e-f453e3c8df5a',NULL,NULL,NULL,NULL,'Ферри /900гр/','Ферри /900гр/',NULL,NULL,'2e0856d1-e74a-470f-b0e6-84126ee8cb46','945f6027-05a2-4e31-814b-e28bbed4939b'),('7532cc8c-e782-4d46-a2b3-0cb2bed1da19',NULL,NULL,NULL,NULL,'Жамц давс, ширхэгтэй','Жамц давс, ширхэгтэй',NULL,NULL,'a4f43a90-ddd6-4309-b3fd-5cd813772bd2','945f6027-05a2-4e31-814b-e28bbed4939b'),('75c6c5dc-520a-4b74-991e-c521aa93d8e1',NULL,NULL,NULL,NULL,'Тахиа амтлагч','Тахиа амтлагч',NULL,NULL,'a4f43a90-ddd6-4309-b3fd-5cd813772bd2','945f6027-05a2-4e31-814b-e28bbed4939b'),('75e6e4c3-abec-4e08-b695-8dc7e6666b57',NULL,NULL,NULL,NULL,'Эрдэнэшиш агро /400гр/','Эрдэнэшиш агро /400гр/',NULL,NULL,'988f8573-ff8d-47f6-87eb-78a2f26529cf','945f6027-05a2-4e31-814b-e28bbed4939b'),('77350c80-aa64-47bb-8c34-2d117f58fa79',NULL,NULL,NULL,NULL,'Тод аяга угаагч','Тод аяга угаагч',NULL,NULL,'2e0856d1-e74a-470f-b0e6-84126ee8cb46','945f6027-05a2-4e31-814b-e28bbed4939b'),('782c1362-4f9c-46d4-ab53-f43e22b562df',NULL,NULL,NULL,NULL,'Компот ананас,king diamond /840гр/','Компот ананас,king diamond /840гр/',NULL,NULL,'b14f14b2-c1c0-43ac-aab0-79b73ad7d303','945f6027-05a2-4e31-814b-e28bbed4939b'),('7ac5d04f-e510-435d-88d9-a835af2cd223',NULL,NULL,NULL,NULL,'Элгэн алчуур','Элгэн алчуур',NULL,NULL,'2e0856d1-e74a-470f-b0e6-84126ee8cb46','945f6027-05a2-4e31-814b-e28bbed4939b'),('7ac67a6d-b386-41f9-a2d9-60f787a35c8b',NULL,NULL,NULL,NULL,'Амтлаг жигнэмэг /900гр/','Амтлаг жигнэмэг /900гр/',NULL,NULL,'5271fdfa-09e2-47cd-848a-247be949a69a','945f6027-05a2-4e31-814b-e28bbed4939b'),('7bd2af20-04e7-4638-92c9-bcc5e8d9e9c8',NULL,NULL,NULL,NULL,'Оливын тос extra /1л/','Оливын тос extra /1л/',NULL,NULL,'766dc8b4-4c74-4188-aaff-0b653a7ecedb','945f6027-05a2-4e31-814b-e28bbed4939b'),('7cb32a1a-200d-464a-85d5-e09e76eb0ade',NULL,NULL,NULL,NULL,'Элсэн чихэр Вьетнам /25кг/','Элсэн чихэр Вьетнам /25кг/',NULL,NULL,'07082814-ccef-47d3-8f93-4772bcaf8bd2','3a959921-a144-45d8-922f-db703b88d3e7'),('7cf87384-b22a-46ae-b130-c3caeca4edae',NULL,NULL,NULL,NULL,'Зөөхий','Зөөхий',NULL,NULL,'39a92478-b68c-445a-aae8-97defe90801f','f88f3712-df79-43ba-9692-6061d6a45103'),('7e1464c1-6af0-4d1e-afdc-e73d75265ab6',NULL,NULL,NULL,NULL,'Сонгино','Сонгино',NULL,NULL,'878690ab-7209-4d23-bc1e-2d3f1f300836','f88f3712-df79-43ba-9692-6061d6a45103'),('7f498055-d455-4d3f-8c3b-e296efd92d09',NULL,NULL,NULL,NULL,'Атар 2-р гурил /25кг/','Атар 2-р гурил /25кг/',NULL,NULL,'4414ff7f-9e4e-47ef-869b-e1b5071fa66c','3a959921-a144-45d8-922f-db703b88d3e7'),('7f4c05c0-e0df-49af-b163-32d9722e8a85',NULL,NULL,NULL,NULL,'Хуудсан сыр','Хуудсан сыр',NULL,NULL,'9e64fb5e-0d01-4a74-acba-d4d54c812427','945f6027-05a2-4e31-814b-e28bbed4939b'),('80675b48-c9ec-442a-bb03-fb2d55c492bb',NULL,NULL,NULL,NULL,'Гялгар тор','Гялгар тор',NULL,NULL,'2e0856d1-e74a-470f-b0e6-84126ee8cb46','c95b47f8-5537-44bc-9c76-c8f5aff3bbc1'),('830910d0-6419-4ac8-948a-77fc4e3b6abb',NULL,NULL,NULL,NULL,'Элсэн чихэр 50 Кг','Элсэн чихэр 50 Кг',NULL,NULL,'07082814-ccef-47d3-8f93-4772bcaf8bd2','3a959921-a144-45d8-922f-db703b88d3e7'),('83d76999-949d-4ecf-8a23-3083127186cb',NULL,NULL,NULL,NULL,'Компот хад /936гр/','Компот хад /936гр/',NULL,NULL,'b14f14b2-c1c0-43ac-aab0-79b73ad7d303','945f6027-05a2-4e31-814b-e28bbed4939b'),('867572af-ecd7-4e08-9b66-3b0656a2cc58',NULL,NULL,NULL,NULL,'Чавганы компот тэнгэр/720гр/','Чавганы компот тэнгэр/720гр/',NULL,NULL,'b14f14b2-c1c0-43ac-aab0-79b73ad7d303','945f6027-05a2-4e31-814b-e28bbed4939b'),('869505d8-55f9-4786-9bc4-4b55463312f5',NULL,NULL,NULL,NULL,'Чацаргана','Чацаргана',NULL,NULL,'6ccaeb3c-5d25-44a7-b934-2b8a0a2f18b8','f88f3712-df79-43ba-9692-6061d6a45103'),('8856574b-eb05-4648-850f-24d70f50197c',NULL,NULL,NULL,NULL,'Амталсан далайн байцаа','Амталсан далайн байцаа',NULL,NULL,'89cc1974-fde4-4efa-b08b-8ff26c425edc','945f6027-05a2-4e31-814b-e28bbed4939b'),('8b720a7a-8edd-4f37-96e1-557646f39e6e',NULL,NULL,NULL,NULL,'Монгол бяслаг','Монгол бяслаг',NULL,NULL,'39a92478-b68c-445a-aae8-97defe90801f','f88f3712-df79-43ba-9692-6061d6a45103'),('8b9af3a2-f9b1-4143-bd0c-09a91b889ab9',NULL,NULL,NULL,NULL,'Ферри /450гр/','Ферри /450гр/',NULL,NULL,'2e0856d1-e74a-470f-b0e6-84126ee8cb46','945f6027-05a2-4e31-814b-e28bbed4939b'),('8d78e43b-57fe-4112-9dd9-12691c767263',NULL,NULL,NULL,NULL,'Слава хүүхдийн будаа /1кг/','Слава хүүхдийн будаа /1кг/',NULL,NULL,'8868b11d-9ae5-4f8b-a0f0-01193980e1b3','f88f3712-df79-43ba-9692-6061d6a45103'),('8e354fea-262a-438e-96f6-c4a7dd8e9e5c',NULL,NULL,NULL,NULL,'Алим,орос','Алим,орос',NULL,NULL,'0f8cd888-b411-41ce-ac60-9838830a920b','f88f3712-df79-43ba-9692-6061d6a45103'),('8f40c839-e338-458a-9a55-9dbabcae743d',NULL,NULL,NULL,NULL,'Өргөст хэмх','Өргөст хэмх',NULL,NULL,'89cc1974-fde4-4efa-b08b-8ff26c425edc','f88f3712-df79-43ba-9692-6061d6a45103'),('8fc55eb5-ad5a-4352-9242-521f51ca2646',NULL,NULL,NULL,NULL,'Байцааны салат /500гр/ газар шим','Байцааны салат /500гр/ газар шим',NULL,NULL,'988f8573-ff8d-47f6-87eb-78a2f26529cf','945f6027-05a2-4e31-814b-e28bbed4939b'),('8fe6541f-abf6-4b9e-9a96-1e6532658f52',NULL,NULL,NULL,NULL,'Гоё жүүс /1л/','Гоё жүүс /1л/',NULL,NULL,'1afd1596-0aab-4fe7-9601-05bc7b34fcb9','945f6027-05a2-4e31-814b-e28bbed4939b'),('8ff3c4be-681e-4944-8cdf-8c9ea03090c6',NULL,NULL,NULL,NULL,'Болсон будаа /1кг/','Болсон будаа /1кг/',NULL,NULL,'8868b11d-9ae5-4f8b-a0f0-01193980e1b3','f88f3712-df79-43ba-9692-6061d6a45103'),('905b8be3-f0a9-4540-89a3-fe1b87a2f0c4',NULL,NULL,NULL,NULL,'Дүүпүү','Дүүпүү',NULL,NULL,'89cc1974-fde4-4efa-b08b-8ff26c425edc','945f6027-05a2-4e31-814b-e28bbed4939b'),('90687170-3ce7-41aa-8a78-2eea9e39faab',NULL,NULL,NULL,NULL,'Слава овьёос /400гр/','Слава овьёос /400гр/',NULL,NULL,'4414ff7f-9e4e-47ef-869b-e1b5071fa66c','945f6027-05a2-4e31-814b-e28bbed4939b'),('90e5a6f5-231b-4ab6-8c39-114e563faa16',NULL,NULL,NULL,NULL,'Гар нүүрний саван','Гар нүүрний саван',NULL,NULL,'2e0856d1-e74a-470f-b0e6-84126ee8cb46','945f6027-05a2-4e31-814b-e28bbed4939b'),('92694154-9e62-4380-9200-ec89703c4ae4',NULL,NULL,NULL,NULL,'Шил арчигч /450мл/','Шил арчигч /450мл/',NULL,NULL,'2e0856d1-e74a-470f-b0e6-84126ee8cb46','945f6027-05a2-4e31-814b-e28bbed4939b'),('9357088c-939c-4533-9a59-54547eb5e640',NULL,NULL,NULL,NULL,'Олон жимсний жүүс /1л/','Олон жимсний жүүс /1л/',NULL,NULL,'1afd1596-0aab-4fe7-9601-05bc7b34fcb9','945f6027-05a2-4e31-814b-e28bbed4939b'),('938bacea-44c3-4dff-a05b-b51d1675e8e5',NULL,NULL,NULL,NULL,'Сармисны гол','Сармисны гол',NULL,NULL,'89cc1974-fde4-4efa-b08b-8ff26c425edc','f88f3712-df79-43ba-9692-6061d6a45103'),('951ed527-339e-4e8d-a856-b30b7a0636c3',NULL,NULL,NULL,NULL,'Слава вандуй','Слава вандуй',NULL,NULL,'1f9a18eb-f198-4c54-b3c3-6f68d4d3f63b','f88f3712-df79-43ba-9692-6061d6a45103'),('95a1321f-803c-45b3-bcba-97a08d77da72',NULL,NULL,NULL,NULL,'Лапша,сонгинотой','Лапша,сонгинотой',NULL,NULL,'500e1375-a83d-4c74-a732-e518846a9c8f','f88f3712-df79-43ba-9692-6061d6a45103'),('975a4aaa-8924-4ede-80c8-9798ca7b5c01',NULL,NULL,NULL,NULL,'Савтай лемон /250гр/','Савтай лемон /250гр/',NULL,NULL,'a4f43a90-ddd6-4309-b3fd-5cd813772bd2','945f6027-05a2-4e31-814b-e28bbed4939b'),('97a963d8-68b1-40e9-9335-bf4b71eb4dc7',NULL,NULL,NULL,NULL,'Омо comfort /720гр/','Омо comfort /720гр/',NULL,NULL,'2e0856d1-e74a-470f-b0e6-84126ee8cb46','945f6027-05a2-4e31-814b-e28bbed4939b'),('9802c9e6-f693-4455-817b-569d3e5091ab',NULL,NULL,NULL,NULL,'Од гоймон /500гр/','Од гоймон /500гр/',NULL,NULL,'500e1375-a83d-4c74-a732-e518846a9c8f','945f6027-05a2-4e31-814b-e28bbed4939b'),('987f5999-4224-486c-8871-b6c10946e1e9',NULL,NULL,NULL,NULL,'Лапша, бор гоймон/300гр/','Лапша, бор гоймон/300гр/',NULL,NULL,'500e1375-a83d-4c74-a732-e518846a9c8f','945f6027-05a2-4e31-814b-e28bbed4939b'),('98ce1afb-0634-49f2-b27e-5e96cfb8b937',NULL,NULL,NULL,NULL,'Буржгар /5кг/','Буржгар /5кг/',NULL,NULL,'500e1375-a83d-4c74-a732-e518846a9c8f','f88f3712-df79-43ba-9692-6061d6a45103'),('991244f0-a88f-43d1-9cbc-22980221c0ec',NULL,NULL,NULL,NULL,'Төмөр угаалтуур','Төмөр угаалтуур',NULL,NULL,'2e0856d1-e74a-470f-b0e6-84126ee8cb46','945f6027-05a2-4e31-814b-e28bbed4939b'),('9a48d09d-2030-489b-9f58-c6f5b658c85e',NULL,NULL,NULL,NULL,'Белизна','Белизна',NULL,NULL,'ede30ea5-c4f0-44f5-be41-915d044eb26d','945f6027-05a2-4e31-814b-e28bbed4939b'),('9a5e7791-1ab4-43bd-afb3-20faf3d1efc5',NULL,NULL,NULL,NULL,'Гүнжидийн тос /450гр/','Гүнжидийн тос /450гр/',NULL,NULL,'766dc8b4-4c74-4188-aaff-0b653a7ecedb','945f6027-05a2-4e31-814b-e28bbed4939b'),('9aa9860a-26aa-4e9d-9c94-5b66c344f609',NULL,NULL,NULL,NULL,'Гар ариутгагч санитос','Гар ариутгагч санитос',NULL,NULL,'2e0856d1-e74a-470f-b0e6-84126ee8cb46','945f6027-05a2-4e31-814b-e28bbed4939b'),('9b110072-82f7-4c87-8b9b-de6ed61319a7',NULL,NULL,NULL,NULL,'Шанцай','Шанцай',NULL,NULL,'89cc1974-fde4-4efa-b08b-8ff26c425edc','f88f3712-df79-43ba-9692-6061d6a45103'),('9bdadd69-2168-40b8-8cdb-9796f1391904',NULL,NULL,NULL,NULL,'Цагаан гаа','Цагаан гаа',NULL,NULL,'89cc1974-fde4-4efa-b08b-8ff26c425edc','f88f3712-df79-43ba-9692-6061d6a45103'),('9c9a81b3-0588-4272-a754-f59149bbcbc9',NULL,NULL,NULL,NULL,'Затея ургамлын тос /1л/','Затея ургамлын тос /1л/',NULL,NULL,'1afd1596-0aab-4fe7-9601-05bc7b34fcb9','945f6027-05a2-4e31-814b-e28bbed4939b'),('9e670c79-723f-4b53-894c-fdda5a46f801',NULL,NULL,NULL,NULL,'Компот ананас,coodberry /820гр/','Компот ананас,coodberry /820гр/',NULL,NULL,'b14f14b2-c1c0-43ac-aab0-79b73ad7d303','945f6027-05a2-4e31-814b-e28bbed4939b'),('a0a770c3-d9fa-4f00-be0f-773187390662',NULL,NULL,NULL,NULL,'Алаг гоймон Granoro /500гр/','Алаг гоймон Granoro /500гр/',NULL,NULL,'500e1375-a83d-4c74-a732-e518846a9c8f','945f6027-05a2-4e31-814b-e28bbed4939b'),('a1d2e5e0-f7ba-461e-b73a-ac659dca9a7c',NULL,NULL,NULL,NULL,'Цөцгий','Цөцгий',NULL,NULL,'39a92478-b68c-445a-aae8-97defe90801f','f88f3712-df79-43ba-9692-6061d6a45103'),('a2e8015d-fc5c-4adc-b924-17d2fb82c02e',NULL,NULL,NULL,NULL,'Алим,орос','Алим,орос',NULL,NULL,'d1f460db-c89e-45f3-939f-9e8dd17a2fe3','90b405c5-6d9a-40aa-b369-923c47fb1550'),('a2f3a037-cd32-4cec-ac9d-eb21cad82157',NULL,NULL,NULL,NULL,'Аз жаргал олон үртэй','Аз жаргал олон үртэй',NULL,NULL,'5271fdfa-09e2-47cd-848a-247be949a69a','945f6027-05a2-4e31-814b-e28bbed4939b'),('a41452b7-ddf1-48e3-a04b-a0719ca41d26',NULL,NULL,NULL,NULL,'Лапша,сармистай','Лапша,сармистай',NULL,NULL,'500e1375-a83d-4c74-a732-e518846a9c8f','f88f3712-df79-43ba-9692-6061d6a45103'),('a6656099-0971-4dc5-b5c4-a850429238fe',NULL,NULL,NULL,NULL,'Хар үрлэн перец','Хар үрлэн перец',NULL,NULL,'a4f43a90-ddd6-4309-b3fd-5cd813772bd2','945f6027-05a2-4e31-814b-e28bbed4939b'),('a69f2d57-eb5c-4184-b097-172effe6e119',NULL,NULL,NULL,NULL,'Липтон цай/100ш/','Липтон цай/100ш/',NULL,NULL,'26c6c505-0f96-4b1a-b19b-35201bc009c4','945f6027-05a2-4e31-814b-e28bbed4939b'),('aa030a3f-2dde-4c8a-9968-1ef6607c56a9',NULL,NULL,NULL,NULL,'Хогний уут атенса','Хогний уут атенса',NULL,NULL,'2e0856d1-e74a-470f-b0e6-84126ee8cb46','c95b47f8-5537-44bc-9c76-c8f5aff3bbc1'),('aa5cb532-a38d-48b7-beff-46e065cf6a75',NULL,NULL,NULL,NULL,'Петрушка','Петрушка',NULL,NULL,'a4f43a90-ddd6-4309-b3fd-5cd813772bd2','945f6027-05a2-4e31-814b-e28bbed4939b'),('ab77b61d-0583-4df0-84f9-9dc02652eb04',NULL,NULL,NULL,NULL,'Чангаанз /10кг/','Чангаанз /10кг/',NULL,NULL,'6dc2351e-b44d-4a14-ae88-bfe076a9aa44','3dd52160-90f4-453c-b569-5291a65ead12'),('ac9ff5fc-bebf-4cc9-8745-01429b1de7fb',NULL,NULL,NULL,NULL,'Судалтай уут','Судалтай уут',NULL,NULL,'2e0856d1-e74a-470f-b0e6-84126ee8cb46','945f6027-05a2-4e31-814b-e28bbed4939b'),('aef41189-c926-47c3-985f-4b43b576477d',NULL,NULL,NULL,NULL,'Хүрэн манжин','Хүрэн манжин',NULL,NULL,'878690ab-7209-4d23-bc1e-2d3f1f300836','f88f3712-df79-43ba-9692-6061d6a45103'),('af9a1d8a-96fb-4ae1-bb10-b450c8cac02f',NULL,NULL,NULL,NULL,'Атар бүхэл үр /1кг/','Атар бүхэл үр /1кг/',NULL,NULL,'4414ff7f-9e4e-47ef-869b-e1b5071fa66c','f88f3712-df79-43ba-9692-6061d6a45103'),('af9a345d-a6a5-4b40-bb19-2c2101cb374f',NULL,NULL,NULL,NULL,'Гүнжидийн үр','Гүнжидийн үр',NULL,NULL,'8868b11d-9ae5-4f8b-a0f0-01193980e1b3','f88f3712-df79-43ba-9692-6061d6a45103'),('b0b74ae9-585d-4e45-9d15-809896d8ac25',NULL,NULL,NULL,NULL,'Гэрлийн шил','Гэрлийн шил',NULL,NULL,'2e0856d1-e74a-470f-b0e6-84126ee8cb46','945f6027-05a2-4e31-814b-e28bbed4939b'),('b0d60a79-ba44-4f6e-b841-112c0466307b',NULL,NULL,NULL,NULL,'Алаг салат, урбанек/550гр/','Алаг салат, урбанек/550гр/',NULL,NULL,'988f8573-ff8d-47f6-87eb-78a2f26529cf','945f6027-05a2-4e31-814b-e28bbed4939b'),('b0d90c7a-10bb-4996-9b90-2d985c2a9c4a',NULL,NULL,NULL,NULL,'Хушга','Хушга',NULL,NULL,'95e49d39-904a-47c7-8ce1-3c886ff1f38d','f88f3712-df79-43ba-9692-6061d6a45103'),('b20b5c9d-9b83-4e9a-97e5-e8abad7958cf',NULL,NULL,NULL,NULL,'Слава овьёос /300гр/','Слава овьёос /300гр/',NULL,NULL,'8868b11d-9ae5-4f8b-a0f0-01193980e1b3','90b405c5-6d9a-40aa-b369-923c47fb1550'),('b20e15ff-c28f-448b-9f69-233bf1bbfbba',NULL,NULL,NULL,NULL,'Хадны компот ковар /720гр/','Хадны компот ковар /720гр/',NULL,NULL,'b14f14b2-c1c0-43ac-aab0-79b73ad7d303','945f6027-05a2-4e31-814b-e28bbed4939b'),('b297a41a-d661-4095-be94-bae38cb83fb3',NULL,NULL,NULL,NULL,'Оливын тос extra /1л/','Оливын тос extra /1л/',NULL,NULL,'766dc8b4-4c74-4188-aaff-0b653a7ecedb','945f6027-05a2-4e31-814b-e28bbed4939b'),('b3cde932-2128-45a0-bf66-ba6469c703c5',NULL,NULL,NULL,NULL,'Бор ёотон /500гр/','Бор ёотон /500гр/',NULL,NULL,'07082814-ccef-47d3-8f93-4772bcaf8bd2','3a959921-a144-45d8-922f-db703b88d3e7'),('b3d00302-b7ee-4c8a-80b6-8d78892225df',NULL,NULL,NULL,NULL,'Ногоон хулуу','Ногоон хулуу',NULL,NULL,'89cc1974-fde4-4efa-b08b-8ff26c425edc','f88f3712-df79-43ba-9692-6061d6a45103'),('b448d45a-aa16-4070-9b2b-59db84554cd7',NULL,NULL,NULL,NULL,'Кимчи байцаа','Кимчи байцаа',NULL,NULL,'89cc1974-fde4-4efa-b08b-8ff26c425edc','f88f3712-df79-43ba-9692-6061d6a45103'),('b73a6a6f-9e42-4f0f-b530-163503a24d0f',NULL,NULL,NULL,NULL,'Акбар жимстэй цай','Акбар жимстэй цай',NULL,NULL,'26c6c505-0f96-4b1a-b19b-35201bc009c4','945f6027-05a2-4e31-814b-e28bbed4939b'),('b7dbdccd-ec0b-465c-822c-325b22b43a9e',NULL,NULL,NULL,NULL,'Аз жаргал, ногоон/50ш/','Аз жаргал, ногоон/50ш/',NULL,NULL,'5271fdfa-09e2-47cd-848a-247be949a69a','3dd52160-90f4-453c-b569-5291a65ead12'),('b7ec7832-d228-4d98-afbc-4606cf45dd3f',NULL,NULL,NULL,NULL,'Ногоон цай /50гр/','Ногоон цай /50гр/',NULL,NULL,'26c6c505-0f96-4b1a-b19b-35201bc009c4','945f6027-05a2-4e31-814b-e28bbed4939b'),('b84eaa52-9a94-4039-91ba-57efe85488df',NULL,NULL,NULL,NULL,'Шар варьене','Шар варьене',NULL,NULL,'6ef912fa-c410-4ca9-8519-6e7266bf6f2b','945f6027-05a2-4e31-814b-e28bbed4939b'),('b85dfa23-4213-4161-aaf2-4fbeeeeaad11',NULL,NULL,NULL,NULL,'Ногоон шош','Ногоон шош',NULL,NULL,'1f9a18eb-f198-4c54-b3c3-6f68d4d3f63b','f88f3712-df79-43ba-9692-6061d6a45103'),('b9aa90dd-df31-43e5-9f15-b186892d44c9',NULL,NULL,NULL,NULL,'Цагаан гаа,ууттай','Цагаан гаа,ууттай',NULL,NULL,'a4f43a90-ddd6-4309-b3fd-5cd813772bd2','945f6027-05a2-4e31-814b-e28bbed4939b'),('b9b30547-3972-4e9b-ab04-a6ec1e498652',NULL,NULL,NULL,NULL,'Сармис','Сармис',NULL,NULL,'878690ab-7209-4d23-bc1e-2d3f1f300836','f88f3712-df79-43ba-9692-6061d6a45103'),('ba895e6a-db6e-4206-9312-4befc6b94d8f',NULL,NULL,NULL,NULL,'Үхрийн мах','Үхрийн мах',NULL,NULL,'4a9c0c29-af3a-4953-8c0a-5aee278c4f3c','f88f3712-df79-43ba-9692-6061d6a45103'),('bddbc18f-ef09-4bb6-bbb3-9be3d52e8389',NULL,NULL,NULL,NULL,'Шпагети слава Мельники /400гр/','Шпагети слава Мельники /400гр/',NULL,NULL,'500e1375-a83d-4c74-a732-e518846a9c8f','945f6027-05a2-4e31-814b-e28bbed4939b'),('be52ae96-110a-4d6d-8edc-737d66e45115',NULL,NULL,NULL,NULL,'Дамартай тасалдаг уут','Дамартай тасалдаг уут',NULL,NULL,'2e0856d1-e74a-470f-b0e6-84126ee8cb46','c95b47f8-5537-44bc-9c76-c8f5aff3bbc1'),('be58f4d5-f9a2-43fb-b745-b678e6a496bc',NULL,NULL,NULL,NULL,'Мандарин,орос','Мандарин,орос',NULL,NULL,'0f8cd888-b411-41ce-ac60-9838830a920b','f88f3712-df79-43ba-9692-6061d6a45103'),('bf811b99-07e4-46cb-ae84-6ad533b0cf68',NULL,NULL,NULL,NULL,'Сухар Панко /1кг/','Сухар Панко /1кг/',NULL,NULL,'a4f43a90-ddd6-4309-b3fd-5cd813772bd2','945f6027-05a2-4e31-814b-e28bbed4939b'),('c04efab1-aaa7-499c-b982-17bf5c4a54fe',NULL,NULL,NULL,NULL,'Улаан лооль','Улаан лооль',NULL,NULL,'89cc1974-fde4-4efa-b08b-8ff26c425edc','f88f3712-df79-43ba-9692-6061d6a45103'),('c2a48e17-3c8d-4cf8-a3d2-7e9febbb068e',NULL,NULL,NULL,NULL,'Киви','Киви',NULL,NULL,'0f8cd888-b411-41ce-ac60-9838830a920b','f88f3712-df79-43ba-9692-6061d6a45103'),('c3f3c0a3-9b2f-4fc5-b9ae-798b6ccfc6ac',NULL,NULL,NULL,NULL,'Хорхой ааруул','Хорхой ааруул',NULL,NULL,'39a92478-b68c-445a-aae8-97defe90801f','f88f3712-df79-43ba-9692-6061d6a45103'),('c49aeb54-ca63-4d28-b319-1b46b15ef496',NULL,NULL,NULL,NULL,'Үхрийн нүдний компот,багро /','Үхрийн нүдний компот,багро /',NULL,NULL,'b14f14b2-c1c0-43ac-aab0-79b73ad7d303','945f6027-05a2-4e31-814b-e28bbed4939b'),('c55660de-5d59-4efc-9084-43d1d4c26bf4',NULL,NULL,NULL,NULL,'Акбар жижиг','Акбар жижиг',NULL,NULL,'26c6c505-0f96-4b1a-b19b-35201bc009c4','945f6027-05a2-4e31-814b-e28bbed4939b'),('c66d8d1a-c56e-403d-bb0a-3883a5080502',NULL,NULL,NULL,NULL,'Лапша,туузан','Лапша,туузан',NULL,NULL,'500e1375-a83d-4c74-a732-e518846a9c8f','f88f3712-df79-43ba-9692-6061d6a45103'),('c6d73fef-65bf-4057-86f3-72c52659959e',NULL,NULL,NULL,NULL,'Горох шош','Горох шош',NULL,NULL,'1f9a18eb-f198-4c54-b3c3-6f68d4d3f63b','f88f3712-df79-43ba-9692-6061d6a45103'),('c7de5fda-3f19-4d30-832f-6bba6c9b7c1f',NULL,NULL,NULL,NULL,'Янзага /120ш/','Янзага /120ш/',NULL,NULL,'5271fdfa-09e2-47cd-848a-247be949a69a','3dd52160-90f4-453c-b569-5291a65ead12'),('c85fc2b5-3f28-4d00-95ea-201bb2c4f12b',NULL,NULL,NULL,NULL,'Лийр,орос','Лийр,орос',NULL,NULL,'0f8cd888-b411-41ce-ac60-9838830a920b','f88f3712-df79-43ba-9692-6061d6a45103'),('c9869aaf-42cd-458b-a7fd-9e37560a9d96',NULL,NULL,NULL,NULL,'Аз жаргал, цэнхэр/50ш/','Аз жаргал, цэнхэр/50ш/',NULL,NULL,'5271fdfa-09e2-47cd-848a-247be949a69a','3dd52160-90f4-453c-b569-5291a65ead12'),('c9e1a40a-cf3b-4940-ad4b-1d950adcaad6',NULL,NULL,NULL,NULL,'Хүрэн шош','Хүрэн шош',NULL,NULL,'1f9a18eb-f198-4c54-b3c3-6f68d4d3f63b','f88f3712-df79-43ba-9692-6061d6a45103'),('cbd90f76-f168-4672-a7a3-7ada3140b031',NULL,NULL,NULL,NULL,'Хүрэн байцаа','Хүрэн байцаа',NULL,NULL,'878690ab-7209-4d23-bc1e-2d3f1f300836','f88f3712-df79-43ba-9692-6061d6a45103'),('cc07c43f-fb3f-480a-b5cc-1ada66ba30fc',NULL,NULL,NULL,NULL,'Салат навч','Салат навч',NULL,NULL,'89cc1974-fde4-4efa-b08b-8ff26c425edc','f88f3712-df79-43ba-9692-6061d6a45103'),('cc44a137-1705-4def-9771-20ed6c3250f4',NULL,NULL,NULL,NULL,'Алейка гурвалжин будаа /1кг/','Алейка гурвалжин будаа /1кг/',NULL,NULL,'8868b11d-9ae5-4f8b-a0f0-01193980e1b3','f88f3712-df79-43ba-9692-6061d6a45103'),('cd7f45e0-737b-40bc-b5ee-dfb15569b0c5',NULL,NULL,NULL,NULL,'Монфрэш /1л/','Монфрэш /1л/',NULL,NULL,'1afd1596-0aab-4fe7-9601-05bc7b34fcb9','945f6027-05a2-4e31-814b-e28bbed4939b'),('cd9322ca-27d0-444d-93d9-cfb9fc13d866',NULL,NULL,NULL,NULL,'Өргөст хэмх, урбанек/680гр/','Өргөст хэмх, урбанек/680гр/',NULL,NULL,'988f8573-ff8d-47f6-87eb-78a2f26529cf','945f6027-05a2-4e31-814b-e28bbed4939b'),('cdbc6d35-42e5-48f1-9530-156b22f49ef8',NULL,NULL,NULL,NULL,'Молоко,сгушенка /340гр/','Молоко,сгушенка /340гр/',NULL,NULL,'988f8573-ff8d-47f6-87eb-78a2f26529cf','945f6027-05a2-4e31-814b-e28bbed4939b'),('ce8bf1b6-a00b-401e-b88a-5365d49755b6',NULL,NULL,NULL,NULL,'Улаанбаатар-1 /1кг/','Улаанбаатар-1 /1кг/',NULL,NULL,'4414ff7f-9e4e-47ef-869b-e1b5071fa66c','f88f3712-df79-43ba-9692-6061d6a45103'),('d1391882-18b5-4c1f-ad3f-490d257387ae',NULL,NULL,NULL,NULL,'Затея ургамлын тос /1л/','Затея ургамлын тос /1л/',NULL,NULL,'766dc8b4-4c74-4188-aaff-0b653a7ecedb','945f6027-05a2-4e31-814b-e28bbed4939b'),('d2ac3834-83ee-4a92-a446-8ccd58c82702',NULL,NULL,NULL,NULL,'Ёотон,Орос жижиг /500гр/','Ёотон,Орос жижиг /500гр/',NULL,NULL,'07082814-ccef-47d3-8f93-4772bcaf8bd2','90b405c5-6d9a-40aa-b369-923c47fb1550'),('d44de985-2b63-4bb1-9e97-2a548b32e896',NULL,NULL,NULL,NULL,'Хар чавга /10кг/','Хар чавга /10кг/',NULL,NULL,'6dc2351e-b44d-4a14-ae88-bfe076a9aa44','3dd52160-90f4-453c-b569-5291a65ead12'),('d5961cd2-e79a-486c-bc07-ad90f5cfe0ba',NULL,NULL,NULL,NULL,'Улаанбаатар-2 /1кг/','Улаанбаатар-2 /1кг/',NULL,NULL,'4414ff7f-9e4e-47ef-869b-e1b5071fa66c','f88f3712-df79-43ba-9692-6061d6a45103'),('d6be6d4a-abc7-4c8a-890d-3f3238bb956b',NULL,NULL,NULL,NULL,'Элсэн чихэр /5кг/','Элсэн чихэр /5кг/',NULL,NULL,'07082814-ccef-47d3-8f93-4772bcaf8bd2','f88f3712-df79-43ba-9692-6061d6a45103'),('d74466ec-034d-4287-9a47-fb4954fd83c9',NULL,NULL,NULL,NULL,'Омо вок /400гр/','Омо вок /400гр/',NULL,NULL,'2e0856d1-e74a-470f-b0e6-84126ee8cb46','945f6027-05a2-4e31-814b-e28bbed4939b'),('d7ec679b-043a-40a1-89ce-22c9d76d10b1',NULL,NULL,NULL,NULL,'Ёотон,Орос /1кг/','Ёотон,Орос /1кг/',NULL,NULL,'07082814-ccef-47d3-8f93-4772bcaf8bd2','f88f3712-df79-43ba-9692-6061d6a45103'),('d873e320-63f9-4196-95b0-9d94e63fecc1',NULL,NULL,NULL,NULL,'Хар перец /50гр/','Хар перец /50гр/',NULL,NULL,'a4f43a90-ddd6-4309-b3fd-5cd813772bd2','945f6027-05a2-4e31-814b-e28bbed4939b'),('dbfc4085-74ec-44b8-87fb-7f5655af6a63',NULL,NULL,NULL,NULL,'Шар манжин','Шар манжин',NULL,NULL,'878690ab-7209-4d23-bc1e-2d3f1f300836','f88f3712-df79-43ba-9692-6061d6a45103'),('dca21a5b-ca31-4c6b-9cb3-ec8394683718',NULL,NULL,NULL,NULL,'Систа ургамлын тос /1л/','Систа ургамлын тос /1л/',NULL,NULL,'766dc8b4-4c74-4188-aaff-0b653a7ecedb','945f6027-05a2-4e31-814b-e28bbed4939b'),('dcf25d74-ab18-4630-baf7-de8d0059ef80',NULL,NULL,NULL,NULL,'White вок /1кг/','White вок /1кг/',NULL,NULL,'2e0856d1-e74a-470f-b0e6-84126ee8cb46','945f6027-05a2-4e31-814b-e28bbed4939b'),('de487e64-d959-4c83-b39d-afbeb7437a0a',NULL,NULL,NULL,NULL,'Слава хөц будаа /1кг/','Слава хөц будаа /1кг/',NULL,NULL,'8868b11d-9ae5-4f8b-a0f0-01193980e1b3','f88f3712-df79-43ba-9692-6061d6a45103'),('de489c67-7f00-4504-a5cc-0cecbcd92f94',NULL,NULL,NULL,NULL,'Улаан перец','Улаан перец',NULL,NULL,'a4f43a90-ddd6-4309-b3fd-5cd813772bd2','945f6027-05a2-4e31-814b-e28bbed4939b'),('deac17a9-a85b-4a09-8cab-4384d5402c5a',NULL,NULL,NULL,NULL,'Арвайтай цай','Арвайтай цай',NULL,NULL,'26c6c505-0f96-4b1a-b19b-35201bc009c4','945f6027-05a2-4e31-814b-e28bbed4939b'),('debf0e07-d2e7-4d56-97cd-1557a7d6db07',NULL,NULL,NULL,NULL,'Эрдэнэшишийн цай, macarell','Эрдэнэшишийн цай, macarell',NULL,NULL,'26c6c505-0f96-4b1a-b19b-35201bc009c4','945f6027-05a2-4e31-814b-e28bbed4939b'),('deea9a84-34d0-4f3e-a805-b2633c4adb8d',NULL,NULL,NULL,NULL,'Атар дээд /25кг/','Атар дээд /25кг/',NULL,NULL,'4414ff7f-9e4e-47ef-869b-e1b5071fa66c','3a959921-a144-45d8-922f-db703b88d3e7'),('df835199-d93b-4cfc-bc8a-feff74d59175',NULL,NULL,NULL,NULL,'Амтат төмс','Амтат төмс',NULL,NULL,'878690ab-7209-4d23-bc1e-2d3f1f300836','f88f3712-df79-43ba-9692-6061d6a45103'),('dfa211f7-d7ba-4e8d-a16e-2abf9e225a61',NULL,NULL,NULL,NULL,'Аяга таваг угаагч трио','Аяга таваг угаагч трио',NULL,NULL,'2e0856d1-e74a-470f-b0e6-84126ee8cb46','945f6027-05a2-4e31-814b-e28bbed4939b'),('e0d9c722-df77-48bd-be24-8b9388fd7d8c',NULL,NULL,NULL,NULL,'Слава шар будаа, няцалбар /500гр/','Слава шар будаа, няцалбар /500гр/',NULL,NULL,'8868b11d-9ae5-4f8b-a0f0-01193980e1b3','90b405c5-6d9a-40aa-b369-923c47fb1550'),('e1be6969-5151-4049-a34e-59bf936418cd',NULL,NULL,NULL,NULL,'Лечо урбанек /550гр/','Лечо урбанек /550гр/',NULL,NULL,'988f8573-ff8d-47f6-87eb-78a2f26529cf','945f6027-05a2-4e31-814b-e28bbed4939b'),('e28bcf3a-e985-4dde-9123-bff261aaf4e6',NULL,NULL,NULL,NULL,'Оливын тос /500гр/','Оливын тос /500гр/',NULL,NULL,'766dc8b4-4c74-4188-aaff-0b653a7ecedb','945f6027-05a2-4e31-814b-e28bbed4939b'),('e34644de-0b39-479e-a420-929804eee285',NULL,NULL,NULL,NULL,'Аньс','Аньс',NULL,NULL,'6ccaeb3c-5d25-44a7-b934-2b8a0a2f18b8','f88f3712-df79-43ba-9692-6061d6a45103'),('e41fb7f3-a400-4c40-9e98-bb235acc155c',NULL,NULL,NULL,NULL,'Кровка вафли /22ш/','Кровка вафли /22ш/',NULL,NULL,'5271fdfa-09e2-47cd-848a-247be949a69a','3dd52160-90f4-453c-b569-5291a65ead12'),('e5f52830-0b32-4f8d-9c7f-7bb1d5106cf0',NULL,NULL,NULL,NULL,'Лапша,луувантай','Лапша,луувантай',NULL,NULL,'500e1375-a83d-4c74-a732-e518846a9c8f','f88f3712-df79-43ba-9692-6061d6a45103'),('e789ab8c-2918-4f02-aa72-b04a9ba7b8d0',NULL,NULL,NULL,NULL,'Яншуй','Яншуй',NULL,NULL,'89cc1974-fde4-4efa-b08b-8ff26c425edc','f88f3712-df79-43ba-9692-6061d6a45103'),('e7fba277-338e-415e-bda7-3f5af980ee7e',NULL,NULL,NULL,NULL,'Арвайн гурил /500гр/','Арвайн гурил /500гр/',NULL,NULL,'4414ff7f-9e4e-47ef-869b-e1b5071fa66c','945f6027-05a2-4e31-814b-e28bbed4939b'),('eabd26e7-66bf-4594-bc2d-4b73e76b9567',NULL,NULL,NULL,NULL,'Ногоон сонгино','Ногоон сонгино',NULL,NULL,'b7658bb0-1459-4022-ba6b-680d6c86f19e','f88f3712-df79-43ba-9692-6061d6a45103'),('eb4665ed-6761-498b-af87-be6acffbd815',NULL,NULL,NULL,NULL,'Ханборгоцой','Ханборгоцой',NULL,NULL,'0f8cd888-b411-41ce-ac60-9838830a920b','f88f3712-df79-43ba-9692-6061d6a45103'),('ecb2ea8e-8f22-42fe-a187-e68650630ee0',NULL,NULL,NULL,NULL,'Алимны цуу Поленки /500гр/','Алимны цуу Поленки /500гр/',NULL,NULL,'a4f43a90-ddd6-4309-b3fd-5cd813772bd2','945f6027-05a2-4e31-814b-e28bbed4939b'),('ecf140d2-037c-478e-bae0-8fc756d1e117',NULL,NULL,NULL,NULL,'8 гишүүн','8 гишүүн',NULL,NULL,'26c6c505-0f96-4b1a-b19b-35201bc009c4','945f6027-05a2-4e31-814b-e28bbed4939b'),('ed926249-dd70-480a-b280-463319e7d152',NULL,NULL,NULL,NULL,'Улаанбаатар варьене','Улаанбаатар варьене',NULL,NULL,'4f38a0dd-f129-4e7c-b909-1280abd3e0ab','945f6027-05a2-4e31-814b-e28bbed4939b'),('eec81a2d-fb8f-495f-bfcd-c7ab7fe4c40e',NULL,NULL,NULL,NULL,'Шар шош','Шар шош',NULL,NULL,'1f9a18eb-f198-4c54-b3c3-6f68d4d3f63b','f88f3712-df79-43ba-9692-6061d6a45103'),('ef109322-46c5-4c20-a619-6a8cb4241544',NULL,NULL,NULL,NULL,'Бичгийн цаас','Бичгийн цаас',NULL,NULL,'5f6ed674-f739-4279-b787-ea7981484578','c95b47f8-5537-44bc-9c76-c8f5aff3bbc1'),('f0432c46-e6d4-4358-b967-fad37fb6dcf6',NULL,NULL,NULL,NULL,'Нуурын давс,органик /1кг/','Нуурын давс,органик /1кг/',NULL,NULL,'a4f43a90-ddd6-4309-b3fd-5cd813772bd2','945f6027-05a2-4e31-814b-e28bbed4939b'),('f0802ed2-f1ee-41c4-a7a7-36ef58264dd6',NULL,NULL,NULL,NULL,'Төмс','Төмс',NULL,NULL,'878690ab-7209-4d23-bc1e-2d3f1f300836','f88f3712-df79-43ba-9692-6061d6a45103'),('f0da9b3b-25b7-42f3-a555-8cd54f5a5723',NULL,NULL,NULL,NULL,'Хүнсний хивэг /400гр/','Хүнсний хивэг /400гр/',NULL,NULL,'4414ff7f-9e4e-47ef-869b-e1b5071fa66c','945f6027-05a2-4e31-814b-e28bbed4939b'),('f0e307c2-f915-4d8d-b6f4-a38f4a049cc5',NULL,NULL,NULL,NULL,'Улаанбаатар дээд /25кг/','Улаанбаатар дээд /25кг/',NULL,NULL,'4414ff7f-9e4e-47ef-869b-e1b5071fa66c','3a959921-a144-45d8-922f-db703b88d3e7'),('f2a5aeae-11bc-4929-9bee-c58835c7cbc6',NULL,NULL,NULL,NULL,'Борцтой хийцтэй цай','Борцтой хийцтэй цай',NULL,NULL,'26c6c505-0f96-4b1a-b19b-35201bc009c4','945f6027-05a2-4e31-814b-e28bbed4939b'),('f3486368-4656-4786-ad53-99a76c12dc80',NULL,NULL,NULL,NULL,'Компот интоор ковар /936гр/','Компот интоор ковар /936гр/',NULL,NULL,'b14f14b2-c1c0-43ac-aab0-79b73ad7d303','945f6027-05a2-4e31-814b-e28bbed4939b'),('f3fa6996-c925-45ff-9e1e-c07cec107e31',NULL,NULL,NULL,NULL,'Цагаан гаа нунтаг','Цагаан гаа нунтаг',NULL,NULL,'a4f43a90-ddd6-4309-b3fd-5cd813772bd2','945f6027-05a2-4e31-814b-e28bbed4939b'),('f403ee72-3247-453d-aa15-803a83cc44fc',NULL,NULL,NULL,NULL,'Чангаанз /4,5кг/','Чангаанз /4,5кг/',NULL,NULL,'6dc2351e-b44d-4a14-ae88-bfe076a9aa44','f88f3712-df79-43ba-9692-6061d6a45103'),('f458f2d6-9b0c-4633-80ca-c2b0c3bd46e7',NULL,NULL,NULL,NULL,'Алаг гоймон Pasta zara /500гр/','Алаг гоймон Pasta zara /500гр/',NULL,NULL,'500e1375-a83d-4c74-a732-e518846a9c8f','945f6027-05a2-4e31-814b-e28bbed4939b'),('f691b179-d1a3-496a-9371-276464f7f764',NULL,NULL,NULL,NULL,'Омо вок /800гр/','Омо вок /800гр/',NULL,NULL,'2e0856d1-e74a-470f-b0e6-84126ee8cb46','945f6027-05a2-4e31-814b-e28bbed4939b'),('f775e501-a21f-4f76-b816-3d97d63f8766',NULL,NULL,NULL,NULL,'Давс Экстра /1кг/','Давс Экстра /1кг/',NULL,NULL,'a4f43a90-ddd6-4309-b3fd-5cd813772bd2','945f6027-05a2-4e31-814b-e28bbed4939b'),('f7903989-a49b-48fa-a747-bbd94d720f6f',NULL,NULL,NULL,NULL,'Ургац-1 /25кг/','Ургац-1 /25кг/',NULL,NULL,'4414ff7f-9e4e-47ef-869b-e1b5071fa66c','3a959921-a144-45d8-922f-db703b88d3e7'),('f7ad8e95-8c52-439c-8431-c1b9c6b10de4',NULL,NULL,NULL,NULL,'Саатай парлон','Саатай парлон',NULL,NULL,'2e0856d1-e74a-470f-b0e6-84126ee8cb46','945f6027-05a2-4e31-814b-e28bbed4939b'),('f830d4d2-98f5-44be-a333-170b5908b2e6',NULL,NULL,NULL,NULL,'Байцаа луувангийн холимог салат /500гр/','Байцаа луувангийн холимог салат /500гр/',NULL,NULL,'988f8573-ff8d-47f6-87eb-78a2f26529cf','945f6027-05a2-4e31-814b-e28bbed4939b'),('f8abf5e7-ed5b-4b38-a892-2c1a67ee834b',NULL,NULL,NULL,NULL,'Мак цай','Мак цай',NULL,NULL,'26c6c505-0f96-4b1a-b19b-35201bc009c4','945f6027-05a2-4e31-814b-e28bbed4939b'),('f967fed4-2ce9-44c3-83da-d481af969999',NULL,NULL,NULL,NULL,'Шар хулуу','Шар хулуу',NULL,NULL,'89cc1974-fde4-4efa-b08b-8ff26c425edc','f88f3712-df79-43ba-9692-6061d6a45103'),('f9d131ba-32d1-40c7-b97c-cf9aaf781cf2',NULL,NULL,NULL,NULL,'Атар /1кг/','Атар /1кг/',NULL,NULL,'4414ff7f-9e4e-47ef-869b-e1b5071fa66c','f88f3712-df79-43ba-9692-6061d6a45103'),('fa5b31e2-20f6-435c-b954-0e2113b928de',NULL,NULL,NULL,NULL,'Лаазтай олив /350гр/','Лаазтай олив /350гр/',NULL,NULL,'988f8573-ff8d-47f6-87eb-78a2f26529cf','945f6027-05a2-4e31-814b-e28bbed4939b'),('fadf9c7d-734e-49e8-a082-870eefe99077',NULL,NULL,NULL,NULL,'Шилтэй хүрэн манжин /500гр/','Шилтэй хүрэн манжин /500гр/',NULL,NULL,'988f8573-ff8d-47f6-87eb-78a2f26529cf','945f6027-05a2-4e31-814b-e28bbed4939b'),('fb1a3d42-4e1b-408d-aea9-12365ad57e85',NULL,NULL,NULL,NULL,'Өег салат, газар шим /550гр/','Өег салат, газар шим /550гр/',NULL,NULL,'988f8573-ff8d-47f6-87eb-78a2f26529cf','945f6027-05a2-4e31-814b-e28bbed4939b'),('fbaaa3a4-c6a7-4ed8-84aa-3a1e70e7ef86',NULL,NULL,NULL,NULL,'Алимны цуу Поленки /200гр/','Алимны цуу Поленки /200гр/',NULL,NULL,'a4f43a90-ddd6-4309-b3fd-5cd813772bd2','945f6027-05a2-4e31-814b-e28bbed4939b'),('fc2eef64-2208-4f95-99f8-d3980b718074',NULL,NULL,NULL,NULL,'Комет','Комет',NULL,NULL,'ede30ea5-c4f0-44f5-be41-915d044eb26d','c95b47f8-5537-44bc-9c76-c8f5aff3bbc1'),('fd3a516b-d9b1-40c6-84c0-9b6c9e947d91',NULL,NULL,NULL,NULL,'Компот ананас,ковар /856гр/','Компот ананас,ковар /856гр/',NULL,NULL,'b14f14b2-c1c0-43ac-aab0-79b73ad7d303','945f6027-05a2-4e31-814b-e28bbed4939b'),('fddc8b18-a120-492c-b624-a63062ab8d42',NULL,NULL,NULL,NULL,'Их монгол цай /20/','Их монгол цай /20/',NULL,NULL,'26c6c505-0f96-4b1a-b19b-35201bc009c4','945f6027-05a2-4e31-814b-e28bbed4939b');
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `unit`
--

DROP TABLE IF EXISTS `unit`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `unit` (
  `id` varchar(36) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `createdBy` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `createdDate` datetime DEFAULT NULL,
  `lastModifiedBy` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `lastModifiedDate` datetime DEFAULT NULL,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `description` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `value` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `unit`
--

LOCK TABLES `unit` WRITE;
/*!40000 ALTER TABLE `unit` DISABLE KEYS */;
INSERT INTO `unit` VALUES ('1a850289-a6d0-46e0-96f6-f675043ff02e',NULL,NULL,NULL,NULL,'метр','метр','1'),('31d2b708-1c83-44f3-842c-61b6c7438b6f',NULL,NULL,NULL,NULL,'мл','мл','1'),('3a959921-a144-45d8-922f-db703b88d3e7',NULL,NULL,NULL,NULL,'шуудай','шуудай','1'),('3dd52160-90f4-453c-b569-5291a65ead12',NULL,NULL,NULL,NULL,'хайрцаг','хайрцаг','1'),('869aab71-992b-4cb4-a32b-f8807419bf0b',NULL,NULL,NULL,NULL,'литр','литр','1'),('90b405c5-6d9a-40aa-b369-923c47fb1550',NULL,NULL,NULL,NULL,'грамм','грамм','1'),('945f6027-05a2-4e31-814b-e28bbed4939b',NULL,NULL,NULL,NULL,'ширхэг','ширхэг','1'),('c95b47f8-5537-44bc-9c76-c8f5aff3bbc1',NULL,NULL,NULL,NULL,'боодол','боодол','1'),('f88f3712-df79-43ba-9692-6061d6a45103',NULL,NULL,NULL,NULL,'килограмм','килограмм','1');
/*!40000 ALTER TABLE `unit` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` varchar(36) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `createdBy` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `createdDate` datetime DEFAULT NULL,
  `lastModifiedBy` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `lastModifiedDate` datetime DEFAULT NULL,
  `login` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `firstName` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `lastName` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `email` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `activated` tinyint NOT NULL DEFAULT '0',
  `langKey` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL DEFAULT 'en',
  `password` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `imageUrl` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `activationKey` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `resetKey` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `resetDate` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `IDX_a62473490b3e4578fd683235c5` (`login`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES ('7d981560-3ea6-4984-8c71-aee37c03cb90','system',NULL,'system',NULL,'anonymoususer','Anonymous','User','anonymoususer@localhost.it',1,'en','VPOtl52SYtOi3USJUx2vNEhOqrE7KlKl/CvXkcs+r8Q=','',NULL,NULL,NULL),('be14fa8d-2a29-4903-bf91-18595a5387e2','system',NULL,'system',NULL,'admin','Administrator','Administrator','admin@localhost.it',1,'en','VPOtl52SYtOi3USJUx2vNE0+es3a+tEWQ1cg5XqcjS0=','',NULL,NULL,NULL),('cfe7aba5-a110-43c3-9577-e9c615129fe8','system',NULL,'system',NULL,'supplier','supplier','supplier','supplier@localhost.it',1,'en','VPOtl52SYtOi3USJUx2vNBOYLvGhw8uQIKokshDOeJE=','',NULL,NULL,NULL),('e2a79479-61dc-4f40-8a57-7665551e2bab','system',NULL,'system',NULL,'manager','Manager','Manager','manager@localhost.it',1,'en','VPOtl52SYtOi3USJUx2vNBh+XvWRcMpM8/uAQ1oPq5s=','',NULL,NULL,NULL);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_authorities_authority`
--

DROP TABLE IF EXISTS `user_authorities_authority`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_authorities_authority` (
  `userId` varchar(36) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `authorityName` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`userId`,`authorityName`),
  KEY `IDX_8f62ba8a50a3947a03daea3a91` (`userId`),
  KEY `IDX_3ecebbac586afdb652249ef826` (`authorityName`),
  CONSTRAINT `FK_3ecebbac586afdb652249ef8263` FOREIGN KEY (`authorityName`) REFERENCES `authority` (`name`) ON DELETE CASCADE,
  CONSTRAINT `FK_8f62ba8a50a3947a03daea3a918` FOREIGN KEY (`userId`) REFERENCES `user` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_authorities_authority`
--

LOCK TABLES `user_authorities_authority` WRITE;
/*!40000 ALTER TABLE `user_authorities_authority` DISABLE KEYS */;
INSERT INTO `user_authorities_authority` VALUES ('7d981560-3ea6-4984-8c71-aee37c03cb90','ROLE_USER'),('be14fa8d-2a29-4903-bf91-18595a5387e2','ROLE_ADMIN'),('be14fa8d-2a29-4903-bf91-18595a5387e2','ROLE_MANAGER'),('be14fa8d-2a29-4903-bf91-18595a5387e2','ROLE_SUPPLIER'),('be14fa8d-2a29-4903-bf91-18595a5387e2','ROLE_USER'),('cfe7aba5-a110-43c3-9577-e9c615129fe8','ROLE_SUPPLIER'),('e2a79479-61dc-4f40-8a57-7665551e2bab','ROLE_MANAGER');
/*!40000 ALTER TABLE `user_authorities_authority` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-01-27 21:02:43
