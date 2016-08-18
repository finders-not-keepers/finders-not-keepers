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
  `addressId` int(11) DEFAULT NULL,
  `businessName` varchar(255) DEFAULT NULL,
  `eMail` varchar(120) DEFAULT NULL,
  `type` enum('Restaurant','Local Business or Retail Store','Company, Organisation, or Institution','Entertainement Venue or Theater','Resort or Park','Taxis, Ridesharing, or Public Transport') DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  `media` varchar(2000) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `businessName` (`businessName`),
  KEY `addressId` (`addressId`),
  CONSTRAINT `accounts_ibfk_1` FOREIGN KEY (`addressId`) REFERENCES `addresses` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `accounts`
--

LOCK TABLES `accounts` WRITE;
/*!40000 ALTER TABLE `accounts` DISABLE KEYS */;
INSERT INTO `accounts` VALUES (6,1,'Hotel Nelligan','maria@experiencevieuxmontreal.com','Company, Organisation, or Institution','2016-08-14 00:00:00','2016-08-14 00:00:00',NULL),(7,2,'The Ritz-Carlton','wecare@ritzcarlton.com','Company, Organisation, or Institution','2016-08-14 00:00:00','2016-08-14 00:00:00',NULL),(8,3,'Hotel Gault','info@hotelgault.com','Company, Organisation, or Institution','2016-08-14 00:00:00','2016-08-14 00:00:00',NULL),(9,4,'Auberge Bonaparte','info@bonaparte.com','Company, Organisation, or Institution','2016-08-14 00:00:00','2016-08-14 00:00:00',NULL),(10,5,'Le Place d Armes Hotel & Suites','info@experiencevieuxmontreal.com','Company, Organisation, or Institution','2016-08-14 00:00:00','2016-08-14 00:00:00',NULL),(11,6,'Daniel','info@danielnyc.com','Restaurant','2016-08-14 00:00:00','2016-08-14 00:00:00',NULL),(12,7,'Bouley','events@bouleynyc.com','Restaurant','2016-08-14 00:00:00','2016-08-14 00:00:00',NULL),(13,8,'Bemelmans Bar','thecarlyle@rosewoodhotels.com','Restaurant','2016-08-14 00:00:00','2016-08-14 00:00:00',NULL),(14,9,'Lincoln Square Steak','info@lincolnsquaresteak.com','Restaurant','2016-08-14 00:00:00','2016-08-14 00:00:00',NULL),(15,10,'Juni','Restaurant','','2016-08-14 00:00:00','2016-08-14 00:00:00',NULL),(16,11,'Sunny Foodmart','info@sunnyfoodmart.com','Local Business or Retail Store','2016-08-14 00:00:00','2016-08-14 00:00:00',NULL),(17,12,'Abrams Towing Services Ltd.','info@abrams.ca','Local Business or Retail Store','2016-08-14 00:00:00','2016-08-14 00:00:00',NULL),(18,13,'Carisma Florists','carismaflorists@yahoo.ca','Local Business or Retail Store','2016-08-14 00:00:00','2016-08-14 00:00:00',NULL),(19,14,'247 Convenience','info@247toronto.ca','Local Business or Retail Store','2016-08-14 00:00:00','2016-08-14 00:00:00',NULL),(20,15,'Proficient Auto Repair','info@proficientauto.ca','Local Business or Retail Store','2016-08-14 00:00:00','2016-08-14 00:00:00',NULL),(21,16,'Boston Opera House','info@BostonOperaHouse.com','Entertainement Venue or Theater','2016-08-14 00:00:00','2016-08-14 00:00:00',NULL),(22,17,'Colonial Theater','info@colonialtheater.com','Entertainement Venue or Theater','2016-08-14 00:00:00','2016-08-14 00:00:00',NULL),(23,18,'Kendall Square Cinema','info@kendallsquare.com','Entertainement Venue or Theater','2016-08-14 00:00:00','2016-08-14 00:00:00',NULL),(24,19,'Mugar Omni IMAX Theatre','information@mos.org','Entertainement Venue or Theater','2016-08-14 00:00:00','2016-08-14 00:00:00',NULL),(25,20,'Avalon Ballroom','info@ballroominboston.com','Entertainement Venue or Theater','2016-08-14 00:00:00','2016-08-14 00:00:00',NULL),(26,21,'Sonora Resort','info@sonoraresort.com','Resort or Park','2016-08-14 00:00:00','2016-08-14 00:00:00',NULL),(27,22,'Long Beach Lodge Resort','info@longbeachlodgeresort.com','Resort or Park','2016-08-14 00:00:00','2016-08-14 00:00:00',NULL),(28,23,'Echo Valley Ranch & Spa','enquiry@evranch.com','Resort or Park','2016-08-14 00:00:00','2016-08-14 00:00:00',NULL),(29,24,'Stanley Park','info@stanleypark.ca','Resort or Park','2016-08-14 00:00:00','2016-08-14 00:00:00',NULL),(30,25,'Lynn Canyon Park','info@lynncanyonpark.com','Resort or Park','2016-08-14 00:00:00','2016-08-14 00:00:00',NULL),(36,26,'Chicago Water Taxi','info@chicagowatertaxi','Taxis, Ridesharing, or Public Transport','2016-08-14 00:00:00','2016-08-14 00:00:00',NULL),(37,27,'DivvyRide','info@divvy.com','Taxis, Ridesharing, or Public Transport','2016-08-14 00:00:00','2016-08-14 00:00:00',NULL),(38,28,'Chicago Transit Authority','info@cta.com','Taxis, Ridesharing, or Public Transport','2016-08-14 00:00:00','2016-08-14 00:00:00',NULL),(39,29,'Chicago Carriage Cab','info@chicagocarriagecab.com','Taxis, Ridesharing, or Public Transport','2016-08-14 00:00:00','2016-08-14 00:00:00',NULL),(40,30,'Chicago Carpool','info@chicagocarpool.com','Taxis, Ridesharing, or Public Transport','2016-08-14 00:00:00','2016-08-14 00:00:00',NULL);
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
  `streetNumber` varchar(40) DEFAULT NULL,
  `streetLine1` varchar(40) DEFAULT NULL,
  `streetLine2` varchar(40) DEFAULT NULL,
  `city` varchar(40) DEFAULT NULL,
  `province` varchar(40) DEFAULT NULL,
  `postCode` varchar(16) DEFAULT NULL,
  `country` varchar(40) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `addresses`
--

LOCK TABLES `addresses` WRITE;
/*!40000 ALTER TABLE `addresses` DISABLE KEYS */;
INSERT INTO `addresses` VALUES (1,'106','Saint Paul St West',NULL,'Montreal','Quebec','H2Y 1Z3','Canada'),(2,'1228','Sherbrooke West',NULL,'Montreal','Quebec','H3G 1H6','Canada'),(3,'449','Sainte-Helene',NULL,'Montreal','Quebec','H2Y 2K9','Canada'),(4,'447','Saint Francois Xavier',NULL,'Montreal','Quebec','H2Y 2T1','Canada'),(5,'55','Saint-Jacques West',NULL,'Montreal','Quebec','H2Y 3X2','Canada'),(6,'60','East 65th Street',NULL,'New York City','NY','10065-7056','USA'),(7,'163','Duane Street',NULL,'New York City','NY','10013-3810','USA'),(8,'35','East 76th Street',NULL,'New York City','NY','10021-1827','USA'),(9,'208','West 70th Street',NULL,'New York City','NY','10023-4302','USA'),(10,'12','East 31st Street',NULL,'New York City','NY','10016-6702','USA'),(11,'747','Don Mills Rd #60',NULL,'North York','ON','M3C 1T2','CANADA'),(12,'2458','Haines Road',NULL,'Mississauga','ON','L4Y 1Y6','CANADA'),(13,'720','Burnhamthorpe Rd West',NULL,'Mississauga','ON','L5C 3G1','CANADA'),(14,'1181','Queen Street West',NULL,'Toronto','ON','M6J 1J6','CANADA'),(15,'879','Kipling Avenue',NULL,'Etobicoke','ON','M8Z 5H2','CANADA'),(16,'539','Washington Street',NULL,'Boston','MA','02111','USA'),(17,'106','Boylston Street',NULL,'Boston','MA','02116','USA'),(18,'1','Kendall Square','355 Binney Street','Cambridge','MA','02139','USA'),(19,'11','Science Park',NULL,'Boston','MA','02114','USA'),(20,'300','Western Avenue',NULL,'Allston','MA','02134','USA'),(21,NULL,NULL,NULL,'Sonora Island','British Columbia','V7B 1W4','CANADA'),(22,'1441','Pacific Rim Highway','PO Box 897','Tofino','British Columbia','V0R 2Z0','CANADA'),(23,'10635','Jesmond Road',NULL,'Jesmond','British Columbia','V0K 1K0','CANADA'),(24,'453','West 12th Avenue',NULL,'Vancouver','British Columbia','V5Y 1V4','CANADA'),(25,'3663','Park Rd',NULL,'North Vancouver','British Columbia','V7J 3G3','CANADA'),(26,NULL,NULL,NULL,'Sonora Island','British Columbia','V7B 1W4','CANADA'),(27,'1441','Pacific Rim Highway','PO Box 897','Tofino','British Columbia','V0R 2Z0','CANADA'),(28,'10635','Jesmond Road',NULL,'Jesmond','British Columbia','V0K 1K0','CANADA'),(29,'453','West 12th Avenue',NULL,'Vancouver','British Columbia','V5Y 1V4','CANADA'),(30,'3663','Park Rd',NULL,'North Vancouver','British Columbia','V7J 3G3','CANADA'),(31,'400','North Michigan Avenue',NULL,'Chicago','IL','60611-4104','USA'),(32,'2253','South Martin Luther King Dr',NULL,'Chicago','IL','60616','USA'),(33,'222','North Wells Street',NULL,'Chicago','IL','60606','USA'),(34,'2617','South Wabash Avenue',NULL,'Chicago','IL','60616','USA'),(35,'550','West Algonquin Rd',NULL,'Arlington Heights','IL','60005','USA');
/*!40000 ALTER TABLE `addresses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `categories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `item_type` enum('Accessories','Keys','Clothing','Wallets or Cards','Electronics','General') DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'Accessories'),(2,'Electronics'),(3,'Keys'),(4,'Clothing'),(5,'Wallets or Cards'),(6,'General');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
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
  `title` varchar(255) DEFAULT NULL,
  `description` varchar(2000) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  `media` varchar(2000) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `categoryId` (`categoryId`),
  CONSTRAINT `items_ibfk_1` FOREIGN KEY (`categoryId`) REFERENCES `categories` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=73 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `items`
--

LOCK TABLES `items` WRITE;
/*!40000 ALTER TABLE `items` DISABLE KEYS */;
INSERT INTO `items` VALUES (1,2,7,'iphone 6','silver case, red sticker at the back','2016-08-14 00:00:00','2014-08-14 00:00:00','http://store.storeimages.cdn-apple.com/4973/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphone6/silver/iphone6-silver-select-2014_GEO_US?wid=1200&hei=630&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=cdYkN0'),(2,3,7,'scarf','ralph lauren brand red scarf with fringes','2016-08-14 00:00:00','2014-08-14 00:00:00','https://www.google.ca/search?q=red+scarf+with+fringes&rlz=1C1AVNA_enCA583CA589&espv=2&biw=1242&bih=585&source=lnms&tbm=isch&sa=X&ved=0ahUKEwiVgd387cjOAhUHKsAKHbzECD8Q_AUIBigB#imgrc=kLkLCw5zkUoFiM%3A'),(3,3,12,'car keys','three keys in total amongst them one car key with a BMW keyholder','2016-08-14 00:00:00','2016-08-14 00:00:00','http://previews.123rf.com/images/dwetzel/dwetzel0801/dwetzel080100023/2388760-two-key-rings-house-keys-and-car-keys-Stock-Photo.jpg'),(4,6,12,'vase','green porcelain vase with a french brand at the bottom','2016-08-14 00:00:00','2016-08-14 00:00:00','https://www.google.ca/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&ved=0ahUKEwjko7uS8cjOAhVEax4KHU6LCxoQjBwIBA&url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F5%2F5a%2FVase%2C_China%2C_Qing_Dynasty%2C_1644-1912%2C_porcelain_with_crackled_green_underglaze_-_Chazen_Museum_of_Art_-_DSC01660.JPG&psig=AFQjCNFLLEEpgzn9mg2IDXrM36BMXKgg4w&ust=1471538206857472'),(5,1,13,'hat','blue and white striped woolen hat size medium','2016-08-14 00:00:00','2016-08-14 00:00:00','http://www.polyvore.com/cgi/img-thing?.out=jpg&size=l&tid=69109358'),(6,2,13,'home keys','quite big set of keys','2016-08-14 00:00:00','2016-08-14 00:00:00','http://www.bigbonton.org/motel%20keychain%20overloaded.jpg'),(7,5,14,'leather wallet','man-style leather wallet with various cards in it and a bit of cash','2016-08-14 00:00:00','2016-08-14 00:00:00','http://giftsformen.io/wp-content/uploads/2015/12/leather-credit-card-wallet-for-men.jpg'),(8,6,14,'toy truck','yellow tonka brand toy truck with stickers on it','2016-08-14 00:00:00','2016-08-14 00:00:00','http://www.painetworks.com/photos/je/je5578.JPG'),(9,4,15,'blue vest','cotton women vest size medium with a design at the back','2016-08-14 00:00:00','2016-08-14 00:00:00','http://www.nyfifth.com/category/sell_images/20160215/p2/cotton-vest-jacket-for-women-fashion-winter-thick-warm-blue-pockets-zipper-sleeveless-outwear-casual_S15-1909-XW18_NyFifth.jpg'),(10,5,15,'keyboard','black acer keyboard with a french set up','2016-08-14 00:00:00','2016-08-14 00:00:00','https://www.google.ca/search?q=black+acer+keyboard&rlz=1C1AVNA_enCA583CA589&espv=2&biw=1242&bih=585&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjjqpm79cjOAhVILMAKHYZMDUkQ_AUIBigB#imgrc=kFwVY0PCdkSxuM%3A'),(11,6,15,'baby bottle','glass baby bottle with a red plastic grip labelled with the name of the child','2016-08-14 00:00:00','2016-08-14 00:00:00','https://s-media-cache-ak0.pinimg.com/236x/87/7d/04/877d04645bf09aba2437c8549c1a57fb.jpg'),(12,5,15,'camera','canon mini digital camera, some photos are stored on it so details will be asked to the claimer','2016-08-14 00:00:00','2016-08-14 00:00:00','https://www.google.ca/search?q=mini+canon+camera&rlz=1C1AVNA_enCA583CA589&espv=2&biw=1242&bih=585&source=lnms&tbm=isch&sa=X&ved=0ahUKEwiu-6-q98jOAhWpCcAKHfV0Dl4Q_AUIBigB#imgrc=8Qk5GG1qhIUg_M%3A'),(13,3,21,' man shirt','hawaian style shirt size large multiple colors but mainly red and green','2016-08-14 00:00:00','2016-08-14 00:00:00','https://www.google.ca/search?q=hawaiian+shirt&rlz=1C1AVNA_enCA583CA589&espv=2&biw=1242&bih=585&source=lnms&tbm=isch&sa=X&ved=0ahUKEwitxYvs-MjOAhXIB8AKHa1rBlIQ_AUIBigB#imgrc=1rtGs-Tu1c2gKM%3A'),(14,1,22,'cowboy hat','beige cowboy style hat with a red edge and a dark string','2016-08-14 00:00:00','2016-08-14 00:00:00','https://s-media-cache-ak0.pinimg.com/236x/2e/3e/f5/2e3ef5389a3d2cea26b4e3037bd24c63.jpg'),(15,4,22,'red purse',' woman purse, no particular brand but lots of cards in it and family pictures. Details will be asked','2016-08-14 00:00:00','2016-08-14 00:00:00','https://www.google.ca/search?q=red+purse&rlz=1C1AVNA_enCA583CA589&espv=2&biw=1242&bih=585&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjT54CU-8jOAhXLI8AKHSEdDnAQ_AUIBigB#imgrc=QzajSJUMFsliuM%3A'),(16,1,23,'pair of glasses','woman style dark sunglasses, brand on one of the branch with golden letters','2016-08-14 00:00:00','2016-08-14 00:00:00','http://latesttrendfashion.com/wp-content/uploads/2014/12/sunglasses-for-women-2015-400x214.jpg'),(17,6,23,'cake baking tray ','betty crocker heart shape silicon baking tray, seems to be brand new','2016-08-14 00:00:00','2016-08-14 00:00:00','https://www.google.ca/search?q=betty+crocker+baking+tray&rlz=1C1AVNA_enCA583CA589&espv=2&biw=1242&bih=585&source=lnms&tbm=isch&sa=X&ved=0ahUKEwiAxuvf_MjOAhULox4KHWGvCUwQ_AUIBigB#imgrc=ltbzEnJEej5svM%3A'),(18,1,24,'leg warmers','blue knitted leg warmers, seem to be hand made','2016-08-14 00:00:00','2016-08-14 00:00:00','https://img1.etsystatic.com/139/0/5766160/il_340x270.911203757_q811.jpg'),(19,6,24,'drinking bottle',' swell insulated drinking bottle ','2016-08-14 00:00:00','2016-08-14 00:00:00','https://www.google.ca/search?q=insulated+drinking+bottle&rlz=1C1AVNA_enCA583CA589&espv=2&biw=1242&bih=585&source=lnms&tbm=isch&sa=X&ved=0ahUKEwiziOT6_cjOAhWVHsAKHZ2VCn0Q_AUIBigB#imgrc=_mBSgMMHNVlbvM%3A'),(20,5,25,'USB drive','120GB Kingston usb drive with data on it (details will be asked to the looser)','2016-08-14 00:00:00','2016-08-14 00:00:00','https://i.ytimg.com/vi/aRndAJkJGv4/maxresdefault.jpg'),(21,6,25,'picnic case','picnic case with all accessories in it, plaid blanket as well','2016-08-14 00:00:00','2016-08-14 00:00:00','https://www.google.ca/search?q=picnic+case&rlz=1C1AVNA_enCA583CA589&espv=2&biw=1242&bih=585&tbm=isch&source=lnms&sa=X&ved=0ahUKEwjSmrfZ_sjOAhVlAcAKHbdMDKAQ_AUIBigB#tbm=isch&q=picnic+case+with+blanket&imgrc=Ss5Cyeh6w2EiHM%3A'),(22,1,21,'beaded necklace','large dark pearls necklace with a silver clasp','2016-08-14 00:00:00','2016-08-14 00:00:00','https://cdn0.rubylane.com/shops/timeinabottle/16J439MP.1L.jpg'),(23,6,26,'garden spade','small garden spade with a wooden handle','2016-08-14 00:00:00','2016-08-14 00:00:00','http://www.claringtonforge.com/media/catalog/product/cache/1/image/650x/9df78eab33525d08d6e5fb8d27136e95/5/6/560001322c.jpg'),(24,1,26,'brooch','gold plated brooch with an incrusted ivory design','2016-08-14 00:00:00','2016-08-14 00:00:00','https://img1.etsystatic.com/123/0/9417155/il_340x270.1037625405_ppft.jpg'),(25,5,27,'blowdryer','FHI Heat Nano Weight Pro 1900 Turbo Hair Dryer','2016-08-14 00:00:00','2016-08-14 00:00:00','http://ghk.h-cdn.co/assets/cm/15/11/54ff04e5765e7-fhi-heat-nano-weight-pro-1900-turbo-blow-dryer-xl.jpg'),(26,6,27,'golf balls','set of golf balls with disney design, in their original box','2016-08-14 00:00:00','2016-08-14 00:00:00','https://www.google.ca/search?q=golf+balls+set&rlz=1C1AVNA_enCA583CA589&espv=2&biw=1242&bih=585&source=lnms&tbm=isch&sa=X&ved=0ahUKEwiD7tbk98nOAhVKSyYKHeu2CpUQ_AUIBigB#imgrc=UqDjo7QfWeBd_M%3A'),(27,6,28,'blanket','red plaid picnic blanket','2016-08-14 00:00:00','2016-08-14 00:00:00','http://www.change-home.com/wp-content/uploads/2015/06/picnic-blanket-2.jpg'),(28,3,28,'black vest','black woman vest with polar lining','2016-08-14 00:00:00','2016-08-14 00:00:00','http://thumbs.ebaystatic.com/images/g/VGcAAOSwayZXjKwu/s-l225.jpg'),(29,1,29,'men shoes','beige suede loafers with black non-slip soles','2016-08-14 00:00:00','2016-08-14 00:00:00','http://www.shoera.com/wp-content/uploads/2012/07/Steve-Madden-AED239.jpg'),(30,6,29,'guitar','traditional guitar in its case with all accessories and music sheets','2016-08-14 00:00:00','2016-08-14 00:00:00','http://www.classical-guitar-world.com/images/2000-ramirez-1a-traditional-guitar-for-sale-21511373.jpg'),(31,1,30,'bracelet','Woman Silver Plated Crystal Chain Bracelet','2016-08-14 00:00:00','2016-08-14 00:00:00','http://thumbs.ebaystatic.com/images/g/sgQAAOSwYlJW17GS/s-l225.jpg'),(32,4,30,'wallet','classic man wallet with several credit cards and driving licence','2016-08-14 00:00:00','2016-08-14 00:00:00','https://timemanagementninja.com/wp-content/uploads/2010/08/iStock_000008605409XSmall-Wallet.jpg'),(33,5,31,'charger','ACER 19V 3.42A computer charger','2016-08-14 00:00:00','2016-08-14 00:00:00','http://www.newrycomputercentre.co.uk/media/uploads/acer19v3.42a.jpg'),(34,1,31,'t-shirt','man size t-shirt with a surf design','2016-08-14 00:00:00','2016-08-14 00:00:00','http://hawaiiansurfadventures.com/wp-content/uploads/2012/11/hsa-t-shirt-white-front.jpg'),(35,6,32,'bottle of perfume','pink perfume spray old style','2016-08-14 00:00:00','2016-08-14 00:00:00','http://www.thelondonperfumecompany.com/media/wysiwyg/shutterstock_57023548_2.jpg'),(36,6,32,'baseball','oldstyle baseball with a signature on it (details will be asked to the claimer)','2016-08-14 00:00:00','2016-08-14 00:00:00','https://viewsfromtherough.files.wordpress.com/2008/10/baseball13.jpg'),(37,6,33,'nail polish','O.P.I brand fushia nail polish, seems to be unopened','2016-08-14 00:00:00','2016-08-14 00:00:00','http://hbz.h-cdn.co/assets/15/34/1439914570-hbz-fall-nail-polish-07.jpg'),(38,6,33,'bike lock','high security bike lock with an extra chain','2016-08-14 00:00:00','2016-08-14 00:00:00','http://d2rormqr1qwzpz.cloudfront.net/photos/2013/09/24/53711-series2_1.jpg'),(39,6,34,'domino set','A set of good quality dominoes.The dominoes are made from a composition material with deeply etched black spots and brass spinners.','2016-08-14 00:00:00','2016-08-14 00:00:00','http://www.zontikgames.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/d/o/dominoes-camphorcase_primary.jpg'),(40,5,34,'headphones','blue high tech design headphones','2016-08-14 00:00:00','2016-08-14 00:00:00','http://djtech.audioaffair1.netdna-cdn.com/media/catalog/product/cache/1/image/1000x1000/9df78eab33525d08d6e5fb8d27136e95/y/a/yamaha_hph-pro300_blue_1.jpg'),(41,6,35,'candlestick','Cavendish Candlestick for 3 Candles,H 43 cm, in aluminium','2016-08-14 00:00:00','2016-08-14 00:00:00','http://d2cpr2kama0hec.cloudfront.net/17310-thickbox_default/lene-bjerre-cavendish-candlestick-for-3-candles-h-43-cm.jpg'),(42,3,35,'jumper','blue knitted jumper with design, seems to be homemade','2016-08-14 00:00:00','2016-08-14 00:00:00','https://www.stuartslondon.com/images/edwin-oiler-navy-cable-knit-jumper-i0181-p17464-53981_image.jpg'),(43,5,31,'charger','ACER 19V 3.42A computer charger','2016-08-14 00:00:00','2016-08-14 00:00:00','http://www.newrycomputercentre.co.uk/media/uploads/acer19v3.42a.jpg'),(44,1,31,'t-shirt','man size t-shirt with a surf design','2016-08-14 00:00:00','2016-08-14 00:00:00','http://hawaiiansurfadventures.com/wp-content/uploads/2012/11/hsa-t-shirt-white-front.jpg'),(45,6,32,'bottle of perfume','pink perfume spray old style','2016-08-14 00:00:00','2016-08-14 00:00:00','http://www.thelondonperfumecompany.com/media/wysiwyg/shutterstock_57023548_2.jpg'),(46,6,32,'baseball','oldstyle baseball with a signature on it (details will be asked to the claimer)','2016-08-14 00:00:00','2016-08-14 00:00:00','https://viewsfromtherough.files.wordpress.com/2008/10/baseball13.jpg'),(47,6,33,'nail polish','O.P.I brand fushia nail polish, seems to be unopened','2016-08-14 00:00:00','2016-08-14 00:00:00','http://hbz.h-cdn.co/assets/15/34/1439914570-hbz-fall-nail-polish-07.jpg'),(48,6,33,'bike lock','high security bike lock with an extra chain','2016-08-14 00:00:00','2016-08-14 00:00:00','http://d2rormqr1qwzpz.cloudfront.net/photos/2013/09/24/53711-series2_1.jpg'),(49,6,34,'domino set','A set of good quality dominoes.The dominoes are made from a composition material with deeply etched black spots and brass spinners.','2016-08-14 00:00:00','2016-08-14 00:00:00','http://www.zontikgames.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/d/o/dominoes-camphorcase_primary.jpg'),(50,5,34,'headphones','blue high tech design headphones','2016-08-14 00:00:00','2016-08-14 00:00:00','http://djtech.audioaffair1.netdna-cdn.com/media/catalog/product/cache/1/image/1000x1000/9df78eab33525d08d6e5fb8d27136e95/y/a/yamaha_hph-pro300_blue_1.jpg'),(51,6,35,'candlestick','Cavendish Candlestick for 3 Candles,H 43 cm, in aluminium','2016-08-14 00:00:00','2016-08-14 00:00:00','http://d2cpr2kama0hec.cloudfront.net/17310-thickbox_default/lene-bjerre-cavendish-candlestick-for-3-candles-h-43-cm.jpg'),(52,3,35,'jumper','blue knitted jumper with design, seems to be homemade','2016-08-14 00:00:00','2016-08-14 00:00:00','https://www.stuartslondon.com/images/edwin-oiler-navy-cable-knit-jumper-i0181-p17464-53981_image.jpg'),(53,6,36,'pen','black fountain pen with a golden ring, initals on the cap','2016-08-14 00:00:00','2016-08-14 00:00:00','http://ak1.ostkcdn.com/images/products/8403255/8403255/Montblanc-Meisterstuck-Legrand-Fountain-Pen-146-13661-P15703825.jpg'),(54,1,36,'women clutch','black silk clutch with diamond clasp','2016-08-14 00:00:00','2016-08-14 00:00:00','http://i00.i.aliimg.com/wsphoto/v0/555677344_1/2015-fashion-bag-evening-bags-Silk-day-clutches-satchels-hobos-Lady-s-cabas-on-sale-Woman.jpg'),(55,6,37,'statuette','DragonBall manga statuette representing Krilin, 30cm height','2016-08-14 00:00:00','2016-08-14 00:00:00','http://www.ab-video.com/images/grandeimage_krilin.jpg'),(56,4,37,'cards holder','men cards holder quite big with a large collection of business cards','2016-08-14 00:00:00','2016-08-14 00:00:00','http://www.gkoo.co.uk/ekmps/shops/gkoocouk/images/christmas-gift-real-cow-leather-holds-22-credit-card-holder-wallet-men-s-black-brown-bi-fold-men-s-slim-thin-wallet-colour-brown-459-p.jpg'),(57,5,38,'CD','in a transparent case, data on it seems important (details will be asked)','2016-08-14 00:00:00','2016-08-14 00:00:00','http://www.wpclipart.com/computer/disks/CD_2/CD-RW_in_jewel_case_T.png'),(58,1,38,'umbrella','red umbrella golf style','2016-08-14 00:00:00','2016-08-14 00:00:00','http://www.ckbproducts.com/image/cache/catalog/products/Solid-Red-Golf-Umbrella-UMRED60-500x500.jpg'),(59,6,39,'helmet','Nutcase motor sport helmet with an american flag design','2016-08-14 00:00:00','2016-08-14 00:00:00','http://nutcasehelmets.com/content/uploads/sites/2/2013/05/home-moto.png'),(60,6,39,'polaroid camera','pink polaroid camera with a large strap','2016-08-14 00:00:00','2016-08-14 00:00:00','http://pastlanes.com/image/cache/catalog/instax/mini8_pink_strap-700x700.jpg'),(61,5,40,'mp3 player','sony viao mp3 player, red and black, earphoned included','2016-08-14 00:00:00','2016-08-14 00:00:00','http://www.alltimesaving.com/wp-content/uploads/2015/07/mp3player2.jpg'),(62,2,40,'lock keys','lock keys with wallet style key holder','2016-08-14 00:00:00','2016-08-14 00:00:00','http://g03.a.alicdn.com/kf/HTB1x1FHJFXXXXbgXFXXq6xXFXXXc/Men-Portable-Genuine-Leather-2-Snaps-Key-Holder-Case-Wallet-Keys-Organizer-Manager-6-Key-Rings.jpg'),(63,5,41,'radio','Pocket AM FM, sides are rubber coated, dimension 4.25 inches x 2.5 inches','2016-08-14 00:00:00','2016-08-14 00:00:00','https://images-na.ssl-images-amazon.com/images/I/61YuhemUwNL._SY355_.jpg'),(64,3,41,'jeans','levis 501 pair of jeans with holes on the knees','2016-08-14 00:00:00','2016-08-14 00:00:00','http://g02.a.alicdn.com/kf/HTB15yrAJXXXXXX9XVXXq6xXFXXXs/Italian-Brand-Men-s-Washed-Bleach-Light-Blue-Ripped-Jeans-Knee-Hole-Straight-Regular-Fit-Boot.jpg'),(65,6,42,'sketch pad','filled with mainly landscape drawings in pencil,dimension 0.5 x 9.2 x 12 inches','2016-08-14 00:00:00','2016-08-14 00:00:00','https://images-na.ssl-images-amazon.com/images/I/517U-rNMX1L._SY300_.jpg'),(66,6,42,'baby soft toy','baby soft toy shape of a whale','2016-08-14 00:00:00','2016-08-14 00:00:00','http://i00.i.aliimg.com/wsphoto/v0/615593254/Whale-shaped-Towel-plush-toy-in-shower-for-baby-Safe-soft-and-confortable-free-shipping.jpg'),(67,6,43,'playing cards','luxury green leather playing cards box with one deck of playing cards and a notebook ','2016-08-14 00:00:00','2016-08-14 00:00:00','http://i00.i.aliimg.com/img/pb/555/878/106/1204778405293jpg.jpg'),(68,5,43,'android mobile phone','sony android mobile phone, unlocked so details will be asked on what is inside ','2016-08-14 00:00:00','2016-08-14 00:00:00','https://cdn2.recombu.com/media/mobile/news/legacy/M17280/1331631456_w670_h510.jpg'),(69,6,44,'photo album','scrapbook style baby album, featuring what seems to be the first year of a little girl ','2016-08-14 00:00:00','2016-08-14 00:00:00','https://bandglobal.files.wordpress.com/2015/02/watchmegrow.jpg'),(70,1,44,' WOWAN BOOTS','BLACK LEATHER BOOTS WITH HIGH HEELS','2016-08-14 00:00:00','2016-08-14 00:00:00','https://img.costumecraze.com/images/vendors/ellie/408EmmaBK-Emma-Black-High-Heel-Boots-large.jpg'),(71,1,45,'sandals','woven colored sandals size 7 ','2016-08-14 00:00:00','2016-08-14 00:00:00','http://women-flats.com/images/stories/Women_Sandals/Women_Sandals_0545.gif'),(72,1,45,'gloves','winter leather gloves with fur lining ','2016-08-14 00:00:00','2016-08-14 00:00:00','http://www.leatherglovesonline.com/amazonpics/cr4347blk_l.jpg');
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

-- Dump completed on 2016-08-18 17:00:00
