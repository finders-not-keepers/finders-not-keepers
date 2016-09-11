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
-- Table structure for table `accounts`
--

DROP TABLE IF EXISTS `accounts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `accounts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(64) DEFAULT NULL,
  `media` text,
  `category_account` enum('Restaurant','Local Business or Retail Store','Company, Organisation, or Institution','Entertainement Venue or Theater','Resort or Park','Taxis, Ridesharing, or Public Transport') DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  `email` varchar(500) DEFAULT NULL,
  `clientid` varchar(500) DEFAULT NULL,
  `address` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`),
  FULLTEXT KEY `name_2` (`name`)
) ENGINE=MyISAM AUTO_INCREMENT=24 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `accounts`
--

LOCK TABLES `accounts` WRITE;
/*!40000 ALTER TABLE `accounts` DISABLE KEYS */;
INSERT INTO `accounts` VALUES (18,'WeWork Meatpacking','https://s.gravatar.com/avatar/6d209c7a60384ed527824ae833844d25?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fme.png','Company, Organisation, or Institution','2016-08-24 19:59:17',NULL,'meat@packing.com','auth0|57bdfc95159da9180b0c648b','1 Little W 12th St, New York, NY 10014, United States'),(19,'WeWork Soho','https://s.gravatar.com/avatar/b8bfbaec195e12e6ed351f88df18afa6?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fso.png','Company, Organisation, or Institution','2016-08-24 20:00:00',NULL,'soho@nyc.vom','auth0|57bdfcc0d084a3e87a9ee458','154 Grand St, New York, NY 10013, United States'),(3,'WeWork Montreal','https://s.gravatar.com/avatar/ab5d5f85e94e8628e34d51f00140f25f?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fin.png','Company, Organisation, or Institution','2016-08-22 22:48:43','2016-08-22 22:48:44','klingat@me.com','auth0|57bb814b159da9180b0c6251','3 Place Ville Marie, Montreal, Québec H3B 2E3, Canada'),(5,'The Ritz-Carlton','https://s.gravatar.com/avatar/af3ccc41354bbb3e872b8bb039dc65d8?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fin.png','Company, Organisation, or Institution','2016-08-23 15:49:15',NULL,'info@ritzcarlton.com','auth0|57bc707b159da9180b0c62cf','1228 Rue Sherbrooke Ouest, Montréal, QC H3G 1H6, CANADA'),(6,'Hotel Gault','https://s.gravatar.com/avatar/cd4757db3a450dade88eb7356f251a47?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fin.png','Company, Organisation, or Institution','2016-08-23 18:10:07',NULL,'info@hotelgault.com','auth0|57bc917fd084a3e87a9ee2a5','449, Sainte-Helene, Montreal, Quebec, H2Y 2K9, Canada'),(7,'Tim Hortons','https://s.gravatar.com/avatar/932f8c357fafa44bc8021077d550aaae?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fin.png','Restaurant','2016-08-23 18:20:01',NULL,'info@timhortons.com','auth0|57bc93d1d084a3e87a9ee2bd','605 boul. René-Lévesque Ouest, Montréal, QC H3B 1P4, CANADA'),(8,'Starbucks Cafe ','https://s.gravatar.com/avatar/9851f901d9ed238d3d001d2474ce707b?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fin.png','Restaurant','2016-08-23 18:42:36',NULL,'info@starbucks.com','auth0|57bc991c159da9180b0c633b','1410 Rue Peel, Montréal, QC H3A 1S4, Canada'),(9,'TOQUE','https://s.gravatar.com/avatar/862ebf7abfbb3df16c67be7a508757f1?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fin.png','Restaurant','2016-08-23 18:51:47',NULL,'info@toque.com','auth0|57bc9b43d084a3e87a9ee2f2','900 Place Jean-Paul-Riopelle, Montréal, QC H2Z 2B2, Canada'),(10,'Pied de Cochon','https://s.gravatar.com/avatar/a41c8ec518ddf61e4390509d48522a2b?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fin.png','Restaurant','2016-08-23 18:58:32',NULL,'info@cochon.com','auth0|57bc9cd8d084a3e87a9ee2f8','536 Avenue Duluth E, Montréal, QC H2L 1A9'),(11,'Museum of Fine Arts','https://s.gravatar.com/avatar/5e207dbafceeef2cf45fa9a4fd158eee?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fin.png','Entertainement Venue or Theater','2016-08-23 19:14:39',NULL,'celine.broomhead@gmail.com','auth0|57bca09fd084a3e87a9ee311','380 Rue Sherbrooke O, Montréal, QC H3G 1J5, CANADA'),(12,'Eaton Center','https://s.gravatar.com/avatar/b215399f1410cba265958d1d1283511f?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fin.png','Local Business or Retail Store','2016-08-23 19:49:15',NULL,'info@eatoncenter.com','auth0|57bca8bbd084a3e87a9ee32a','705 Rue Sainte-Catherine, Montréal, QC H3B 4G5, Canada'),(20,'WeWork Soma','https://s.gravatar.com/avatar/a0c5a7a42c8f133417f69480d46bd6e8?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fin.png','Company, Organisation, or Institution','2016-08-24 20:00:47',NULL,'info@weworksoma.com','auth0|57bdfcefd084a3e87a9ee45a','156 2nd St, San Francisco, CA 94105, United States'),(15,'McGill University','https://s.gravatar.com/avatar/b490ae21433c20364da5147bc57f3cb5?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fin.png','Company, Organisation, or Institution','2016-08-23 20:06:43',NULL,'info@mcgilluniversity.com','auth0|57bcacd3d084a3e87a9ee345','845 Rue Sherbrooke O, Montréal, QC H3A 0G4, Canada'),(16,'Bell Centre','https://s.gravatar.com/avatar/8328a3ad949dc52507b15ef649291480?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fin.png','Entertainement Venue or Theater','2016-08-23 20:52:28',NULL,'info@bellcentre.com','auth0|57bcb78c159da9180b0c63a9','1909 Avenue des Canadiens-de-Montréal, Montréal, QC H4B 5G0, Canada'),(21,'WeWork Old St.','https://s.gravatar.com/avatar/e1728f74dce0d0837dcb2cd04a93a39e?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fol.png','Company, Organisation, or Institution','2016-08-24 20:01:40',NULL,'old@st.com','auth0|57bdfd24d084a3e87a9ee45b','41 Corsham St, London N1 6DR, United Kingdom'),(22,'Uber Montreal','https://s.gravatar.com/avatar/bcdd89f44f1136186f94c1b00e6287ca?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fub.png','Taxis, Ridesharing, or Public Transport','2016-08-25 14:47:21',NULL,'uber@montreal.com','auth0|57bf04f9d084a3e87a9ee521','1751 Rue Richardson #7120, Montréal, QC H3K 1G6'),(23,'Taxi Diamond Montreal','https://s.gravatar.com/avatar/69e732c23a86f3f95ccc4b272530245d?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fta.png','Taxis, Ridesharing, or Public Transport','2016-08-25 19:02:27',NULL,'taxi@taxidiamond.ca','auth0|57bf40c3d084a3e87a9ee58a','7294 rue Lajeunesse, Montreal, QC, H2R 2H4');
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
  `accountId` int(11) DEFAULT NULL,
  `title` text,
  `description` text,
  `media` text,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  `category` enum('Accessories','Keys','Clothing','Wallets or Cards','Electronics','General') DEFAULT NULL,
  PRIMARY KEY (`id`),
  FULLTEXT KEY `title` (`title`,`description`)
) ENGINE=MyISAM AUTO_INCREMENT=171 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `items`
--

LOCK TABLES `items` WRITE;
/*!40000 ALTER TABLE `items` DISABLE KEYS */;
INSERT INTO `items` VALUES (117,3,' women\'s leather bag','light brown leather woman bag from m0851. some personal effects inside. ','http://i.ebayimg.com/00/s/MzMxWDM2MA==/z/8oIAAOSwU-pXvMmt/$_35.JPG','2016-08-24 15:42:44','2016-08-24 15:42:44','Accessories'),(2,1,'hello kitty chainsaw','hello kitty lost her chainsaw.','https://findersnotkeepers.s3.amazonaws.com/Hello-Kitty-Chainsaw-620x416.jpg','2016-08-23 01:14:08','2016-08-23 01:14:08','Keys'),(3,1,'hello kitty shoes','hello kitty lost forgot her shoes on planet earth. ','https://findersnotkeepers.s3.amazonaws.com/Kitty-Shoes-4.jpg','2016-08-23 01:14:43','2016-08-23 01:14:43',''),(4,1,'hello kitty ','hello kitty forgot her purse on planet earth.','https://findersnotkeepers.s3.amazonaws.com/hello-bag-img-thing.jpeg','2016-08-23 01:15:08','2016-08-23 01:15:08',NULL),(5,1,'hello kitty phone ','hello kitty forgot her phone case on planet earth. ','https://findersnotkeepers.s3.amazonaws.com/hello-kitty-phone.jpg','2016-08-23 01:17:18','2016-08-23 01:17:18',NULL),(35,5,'scarf','ralph lauren red scarf with fringes','https://findersnotkeepers.s3.amazonaws.com/scarf-thing.jpg','2016-08-23 17:56:17','2016-08-23 17:56:17','Accessories'),(37,5,'car keys','three keys in total amongst them one car key and famous touristic icon key holder.','https://findersnotkeepers.s3.amazonaws.com/lost-your-house-keys-feature-image.jpg','2016-08-23 18:01:29','2016-08-23 18:01:29','Keys'),(45,6,'hat','blue and white striped woolen hat size medium','https://findersnotkeepers.s3.amazonaws.com/bluehat.jpg','2016-08-23 18:13:01','2016-08-23 18:13:01','Accessories'),(42,5,'vase','green porcelain vase with a french brand at the bottom','https://findersnotkeepers.s3.amazonaws.com/greenvase.jpg','2016-08-23 18:08:31','2016-08-23 18:08:31','Accessories'),(46,6,'home keys','quite big set of keys','https://findersnotkeepers.s3.amazonaws.com/motel%20keychain%20overloaded.jpg','2016-08-23 18:14:40','2016-08-23 18:14:40','Keys'),(53,7,'vest','blue cotton women vest size medium with a design at the back','https://findersnotkeepers.s3.amazonaws.com/bluevest.jpg','2016-08-23 18:24:34','2016-08-23 18:24:34','Clothing'),(49,6,'wallet','man-style leather wallet with various cards in it and a bit of cash','https://findersnotkeepers.s3.amazonaws.com/leather-credit-card-wallet-for-men.jpg','2016-08-23 18:16:38','2016-08-23 18:16:38','Wallets or Cards'),(52,7,'toy truck','yellow tonka brand toy truck with stickers on it','https://findersnotkeepers.s3.amazonaws.com/toytruck.JPG','2016-08-23 18:21:20','2016-08-23 18:21:20','General'),(55,7,'keyboard','black acer keyboard with a french set up','https://findersnotkeepers.s3.amazonaws.com/keyboard.jpg','2016-08-23 18:26:41','2016-08-23 18:26:41','Electronics'),(134,3,'blue knitted hat','blue knitted winter hat with flake design','http://i.ebayimg.com/00/s/ODAwWDYwMA==/z/FPgAAOSwOVpXayi4/$_35.JPG','2016-08-24 16:30:15','2016-08-24 16:30:15','Accessories'),(157,3,'macbook cable','macbook cable attachment','https://findersnotkeepers.s3.amazonaws.com/mac-cable.JPG','2016-08-24 20:08:02','2016-08-24 20:08:02','Accessories'),(128,3,'messenger bag ','black messenger bag. some items inside (details will be asked as proof of ownership)','http://i.ebayimg.com/00/s/NjAwWDgwMA==/z/IQgAAOSwMtxXvCG4/$_35.JPG','2016-08-24 16:18:22','2016-08-24 16:18:22','General'),(159,3,'pink bra','found in the men\'s bathroom...','https://findersnotkeepers.s3.amazonaws.com/soutif.JPG','2016-08-24 20:16:21','2016-08-24 20:16:21','Accessories'),(158,3,'apple mouse','apple magic mouse, let us know where you may have lost it (in what room) to claim. thanks!','https://findersnotkeepers.s3.amazonaws.com/mouse.JPG','2016-08-24 20:11:34','2016-08-24 20:11:34','Accessories'),(79,8,'blanket','red plaid picnic blanket','https://findersnotkeepers.s3.amazonaws.com/picnic-blanket-2.jpg','2016-08-23 18:47:04','2016-08-23 18:47:04','General'),(75,8,'brooch','gold plated brooch with an incrusted ivory design','https://findersnotkeepers.s3.amazonaws.com/brooch.jpg','2016-08-23 18:44:19','2016-08-23 18:44:19','Accessories'),(144,3,'oakley sunglasses ','gold woman sunglasses ','http://i.ebayimg.com/00/s/NjAwWDgwMA==/z/4uEAAOSwV0RXvM4w/$_35.JPG','2016-08-24 16:51:29','2016-08-24 16:51:29','Accessories'),(77,8,'golf balls','set of golf balls with disney design, in their original box','https://findersnotkeepers.s3.amazonaws.com/golf.jpg','2016-08-23 18:45:54','2016-08-23 18:45:54','General'),(82,9,'vest','black woman vest with polar lining','https://findersnotkeepers.s3.amazonaws.com/polarvest.jpg','2016-08-23 18:53:26','2016-08-23 18:53:26','Clothing'),(83,9,'baseball','oldstyle baseball with a signature on it','https://findersnotkeepers.s3.amazonaws.com/baseball13.jpg','2016-08-23 18:55:04','2016-08-23 18:55:04','General'),(84,9,'nail polish','o.p.i brand fushia nail polish, seems to be unopened','https://findersnotkeepers.s3.amazonaws.com/nailpolish.jpg','2016-08-23 18:56:29','2016-08-23 18:56:29','General'),(85,10,'lock','high security bike lock with an extra chain','https://findersnotkeepers.s3.amazonaws.com/lock.jpg','2016-08-23 19:01:13','2016-08-23 19:01:13','General'),(86,10,'headphones','blue high tech design headphones','https://findersnotkeepers.s3.amazonaws.com/headphones.jpg','2016-08-23 19:02:50','2016-08-23 19:02:50','Electronics'),(87,10,'jumper','blue knitted jumper with design, seems to be homemade','https://findersnotkeepers.s3.amazonaws.com/jumper.jpg','2016-08-23 19:05:28','2016-08-23 19:05:28','Clothing'),(88,11,'black clutch','hello world ','https://findersnotkeepers.s3.amazonaws.com/Michael-Kors-Jet-Set-East-West-Signature-Tote-PVC-Logo-Black-P16100324.jpg','2016-08-23 19:45:05','2016-08-23 19:45:05','Accessories'),(89,11,'cards holder','men cards holder quite big with a large collection of business cards','https://findersnotkeepers.s3.amazonaws.com/cardsholder.jpg','2016-08-23 19:45:52','2016-08-23 19:45:52','Wallets or Cards'),(90,11,'umbrella','red umbrella golf style','https://findersnotkeepers.s3.amazonaws.com/umbrella.jpg','2016-08-23 19:46:47','2016-08-23 19:46:47','General'),(91,12,'helmet','nutcase motor sport helmet with an american flag design','https://findersnotkeepers.s3.amazonaws.com/home-moto.png','2016-08-23 19:50:25','2016-08-23 19:50:25','General'),(92,12,'polaroid','pink polaroid camera with a large strap','https://findersnotkeepers.s3.amazonaws.com/polaroid.jpg','2016-08-23 19:51:06','2016-08-23 19:51:06','Electronics'),(93,12,'mp3 player','sony viao mp3 player, red and black, earphoned included','https://findersnotkeepers.s3.amazonaws.com/mp3player2.jpg','2016-08-23 19:52:26','2016-08-23 19:52:26','Electronics'),(94,15,'boots','black leather boots with high heels','https://findersnotkeepers.s3.amazonaws.com/boots.jpg','2016-08-23 20:07:46','2016-08-23 20:07:46','Accessories'),(95,15,'sports bag','red and black sports bag full of hockey equipment. ','https://findersnotkeepers.s3.amazonaws.com/sportsbag.jpg','2016-08-23 20:09:34','2016-08-23 20:09:34','General'),(96,15,'gloves','boxing gloves','https://findersnotkeepers.s3.amazonaws.com/boxe.jpg','2016-08-23 20:11:00','2016-08-23 20:11:00','General'),(126,3,'sports bag','classic sports bag with a t-shirt and a pair of jogging pants inside','http://i.ebayimg.com/00/s/NjAwWDgwMA==/z/xZYAAOSwU-pXvd6g/$_35.JPG','2016-08-24 16:11:50','2016-08-24 16:11:50','General'),(99,3,'laptop case','MEC brand silicone laptop cover','http://i.ebayimg.com/00/s/MzU5WDY0MA==/z/DCEAAOSw0UdXvbh-/$_35.JPG','2016-08-23 20:29:38','2016-08-23 20:29:38','General'),(100,16,'scarf','hockey scarf from ch ','https://findersnotkeepers.s3.amazonaws.com/scarfhockey.jpg','2016-08-23 20:55:36','2016-08-23 20:55:36','Accessories'),(101,16,'hockey stick ','hockey stick with red grip on handle ','https://findersnotkeepers.s3.amazonaws.com/hockeystick.jpg','2016-08-23 20:57:06','2016-08-23 20:57:06','General'),(102,16,'pancho','rain yellow pancho ','https://findersnotkeepers.s3.amazonaws.com/rainpancho.jpg','2016-08-23 20:58:23','2016-08-23 20:58:23','Clothing'),(115,1,'xgvhj','sdcfgvhbjn','https://s3-us-west-1.amazonaws.com/findersnotkeepers/Finder-Default-Img.jpg','2016-08-24 15:32:37','2016-08-24 15:32:37','Accessories'),(116,3,'funky glasses','funky yellow glasses with correction lenses. ','http://i.ebayimg.com/00/s/NDAwWDMwMA==/z/040AAOSwZVlXmAE8/$_35.JPG','2016-08-24 15:40:33','2016-08-24 15:40:33','Accessories'),(138,3,'samsung tv remote control ','samsung tc remote control with no battery. ','https://findersnotkeepers.s3.amazonaws.com/samsungremote.jpg','2016-08-24 16:47:28','2016-08-24 16:47:28','Electronics'),(118,3,'samsung phone','samsung s3 cellular phone. access code so not able to get it to get some details. ','http://images.craigslist.org/01313_a45jqLe3v5a_600x450.jpg','2016-08-24 15:44:51','2016-08-24 15:44:51','Electronics'),(119,3,'htc cellular phone','htc cellular phone left on the orange couch of the main lobby ','http://i.ebayimg.com/00/s/ODAwWDQ1MA==/z/XwAAAOSw9NdXvfKG/$_35.JPG','2016-08-24 15:46:26','2016-08-24 15:46:26','Electronics'),(120,3,'iphone 6 ','iphone 6 with a with and grey plastic cover.','http://i.ebayimg.com/00/s/ODAwWDYwMA==/z/ND4AAOSw-itXvfPj/$_35.JPG','2016-08-24 15:48:49','2016-08-24 15:48:49','Electronics'),(163,3,'camera case','philips camera case.','https://findersnotkeepers.s3.amazonaws.com/case.JPG','2016-08-24 20:42:46','2016-08-24 20:42:46','Accessories'),(123,3,'lg remote control','lg remote control. battery cover is broken at the back. ','https://findersnotkeepers.s3.amazonaws.com/lgcontroller.jpg','2016-08-24 15:55:09','2016-08-24 15:55:09','Electronics'),(156,2,'samsung phone','samsung phone','https://findersnotkeepers.s3.amazonaws.com/FullSizeRender%203.jpg','2016-08-24 18:51:39','2016-08-24 18:51:39','Accessories'),(125,3,'hair brush ','professional hairstylist electric brush','http://i.ebayimg.com/00/s/NDUwWDgwMA==/z/bAQAAOSwgZ1XtKoB/$_35.JPG','2016-08-24 15:59:33','2016-08-24 15:59:33','General'),(165,3,'samsung phone with case','phone came with case. we took it off for the picture. please describe the case it had, serial number, markings, etc to prove that this phone is yours.','https://findersnotkeepers.s3.amazonaws.com/IMG_20160819_134255.jpg','2016-08-24 21:19:00','2016-08-24 21:19:00','Electronics'),(130,3,'cabin suitcase','grey cabin size suitcase.Samsonite brand','http://i.ebayimg.com/00/s/ODAwWDYwMA==/z/81gAAOSwEgVWSKEq/$_35.JPG','2016-08-24 16:20:54','2016-08-24 16:20:54','General'),(131,3,'pink hello kitty suitcase ','small size suitcase with a hello kitty design on it. ','http://i.ebayimg.com/00/s/ODAwWDYwMA==/z/vmEAAOSwHoFXtybC/$_35.JPG','2016-08-24 16:21:58','2016-08-24 16:21:58','General'),(151,3,'hello kitty phone cover ','hello kitty phone cover. ','https://findersnotkeepers.s3.amazonaws.com/hello-kitty-phone-case-1369357749.jpg','2016-08-24 17:06:30','2016-08-24 17:06:30','Electronics'),(135,3,'man hat ','man summer style cap ','http://zakadit.com/wp-content/uploads/2013/09/P1040753.jpg','2016-08-24 16:31:12','2016-08-24 16:31:12','Accessories'),(168,22,'samsung phone','samsung phone','https://findersnotkeepers.s3.amazonaws.com/FullSizeRender%203.jpg','2016-08-25 14:48:06','2016-08-25 14:48:06','Electronics'),(137,3,'polaroid camera ','pink mini polaroid camera','http://i.ebayimg.com/00/s/ODAwWDYwMA==/z/kDYAAOSweWVXdtvj/$_35.JPG','2016-08-24 16:36:31','2016-08-24 16:36:31','Electronics'),(160,3,'black jacket','back jacket. had some things in the pockets. let us know what they are and it\'s yours.','https://findersnotkeepers.s3.amazonaws.com/jacket.JPG','2016-08-24 20:29:23','2016-08-24 20:29:23','Accessories'),(170,23,'black women\'s purse','describe in detail what is inside the purse to claim.','https://findersnotkeepers.s3.amazonaws.com/FullSizeRender%202.jpg','2016-08-25 19:03:07','2016-08-25 19:03:07','Accessories');
/*!40000 ALTER TABLE `items` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `test`
--

DROP TABLE IF EXISTS `test`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `test` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `firstnam` text,
  `lastname` text,
  `gender` text,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `test`
--

LOCK TABLES `test` WRITE;
/*!40000 ALTER TABLE `test` DISABLE KEYS */;
INSERT INTO `test` VALUES (1,'Celine','Smith','female'),(2,'Bud','Broomhead','male'),(3,'Emma','Broomhead','female');
/*!40000 ALTER TABLE `test` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2016-09-11 20:35:37
