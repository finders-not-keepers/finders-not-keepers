-- MySQL dump 10.13  Distrib 5.5.49, for debian-linux-gnu (x86_64)
--
-- Host: 0.0.0.0    Database: finders
-- ------------------------------------------------------
-- Server version	5.5.49-0ubuntu0.14.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Current Database: `finders`
--

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `finders` /*!40100 DEFAULT CHARACTER SET latin1 */;

USE `finders`;

--
-- Table structure for table `accounts`
--

DROP TABLE IF EXISTS `accounts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `accounts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(64) DEFAULT NULL,
  `addressId` int(11) DEFAULT NULL,
  `media` text,
  `category_account` enum('Restaurant','Local Business or Retail Store','Company, Organisation, or Institution','Entertainement Venue or Theater','Resort or Park','Taxis, Ridesharing, or Public Transport') DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`),
  FULLTEXT KEY `name_2` (`name`)
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

ALTER TABLE items
DROP COLUMN categoryId;


--
-- Dumping data for table `accounts`
--

LOCK TABLES `accounts` WRITE;
/*!40000 ALTER TABLE `accounts` DISABLE KEYS */;
INSERT INTO `accounts` VALUES (4,'McDonalds',4,'http://logok.org/wp-content/uploads/2014/06/McDonalds-logo.png','Restaurant','2016-08-15 19:40:05','2016-08-15 19:40:05'),(5,'timhortonsone',1,'http://www.actuallywecreate.com/wp-content/uploads/2012/10/tim-hortons-always-fresh.jpg','Restaurant','2016-08-15 19:38:49','2016-08-15 19:40:00'),(6,'timhortonstwo',2,'http://www.actuallywecreate.com/wp-content/uploads/2012/10/tim-hortons-always-fresh.jpg','Restaurant','2016-08-15 19:38:49','2016-08-15 19:40:00'),(7,'timhortonsthree',3,'http://www.actuallywecreate.com/wp-content/uploads/2012/10/tim-hortons-always-fresh.jpg','Restaurant','2016-08-15 19:38:49','2016-08-15 19:40:00');
/*!40000 ALTER TABLE `accounts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `addresses`
--

DROP TABLE IF EXISTS `addresses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `addresses` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `street_number` int(11) DEFAULT NULL,
  `streetline1` varchar(255) DEFAULT NULL,
  `streetline2` varchar(255) DEFAULT NULL,
  `city` varchar(64) DEFAULT NULL,
  `province` varchar(16) DEFAULT NULL,
  `country` varchar(32) DEFAULT NULL,
  `zip` varchar(16) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `addresses`
--

LOCK TABLES `addresses` WRITE;
/*!40000 ALTER TABLE `addresses` DISABLE KEYS */;
INSERT INTO `addresses` VALUES (1,977,'Rue Sainte-Catherine',NULL,'Montreal','QC','Canada','H3B 4W3'),(2,625,'Rue Sainte-Catherine',NULL,'Montreal','QC','Canada','H3B 4W3'),(3,1611,'Rue Sainte-Catherine',NULL,'Montreal','QC','Canada','H3B 4W3'),(4,NULL,'Place Montréal Trust',' St. Catherine St W','Montreal','QC','Canada','H3B 1B8');
/*!40000 ALTER TABLE `addresses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `admins`
--

DROP TABLE IF EXISTS `admins`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `admins` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `firstname` varchar(255) DEFAULT NULL,
  `lastname` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `phone` varchar(16) DEFAULT NULL,
  `accountId` int(11) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admins`
--

LOCK TABLES `admins` WRITE;
/*!40000 ALTER TABLE `admins` DISABLE KEYS */;
INSERT INTO `admins` VALUES (1,'John','Smith','john.smith@hortons.com','123-123-1234',NULL,'2016-08-15 16:46:42','2016-08-15 16:46:42');
/*!40000 ALTER TABLE `admins` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `items`
--

DROP TABLE IF EXISTS `items`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `items` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `categoryId` int(11) DEFAULT NULL,
  `accountId` int(11) DEFAULT NULL,
  `title` text,
  `description` text,
  `media` text,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  FULLTEXT KEY `title` (`title`,`description`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;



ALTER TABLE items
ADD category ENUM ('Accessories', 'Keys', 'Clothing', 'Wallets or Cards', 'Electronics', 'General');
--
-- Dumping data for table `items`
--

LOCK TABLES `items` WRITE;
/*!40000 ALTER TABLE `items` DISABLE KEYS */;
INSERT INTO `items` VALUES (1,3,1,'Dora the Explorer Pink Hat','Dora the Explorer hat left in Tim Hortons','http://thlog.com/wp-content/uploads/2011/05/Dora-Rain-Hat-e1304620645300-295x300.jpg','2016-08-15 17:58:47','2016-08-15 17:58:47'),(3,2,1,'Hello Kitty Hot Pink Keys','Hello Kitty Key Fell out at Tim Hortons I think','http://1.bp.blogspot.com/-18IF5e9EEyI/VqO0qYLujSI/AAAAAAAAEh0/7dDCQvlAKFY/s1600/hello_kitty_pink_sr1.gif','2016-08-15 18:00:57','2016-08-01 00:00:00');
/*!40000 ALTER TABLE `items` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2016-08-16 15:57:24


