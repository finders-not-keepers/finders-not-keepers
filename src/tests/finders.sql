CREATE TABLE `items` (
  `id` INT(11) AUTO_INCREMENT NOT NULL ,
  `categoryId` INT(11) DEFAULT NULL, 
  `accountId` INT(11) DEFAULT NULL, 
  `title` TEXT(256) DEFAULT NULL, 
  `description` TEXT(1024),
  `media` TEXT(2000), 
  `createdAt` DATETIME DEFAULT NULL,
  `updatedAt` DATETIME DEFAULT NULL,
  PRIMARY KEY (`id`),
  FULLTEXT KEY (title, description)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

CREATE TABLE `categories` (
  `id` INT(11) AUTO_INCREMENT NOT NULL,
  `category_item` ENUM ('Accessories', 'Keys', 'Clothing', 'Wallets or Cards', 'Electronics', 'General'), 
  PRIMARY KEY (`id`)
) DEFAULT CHARSET=utf8;


CREATE TABLE `accounts` (
  `id` INT(11) AUTO_INCREMENT  NOT NULL,
  `name` VARCHAR(64) DEFAULT NULL, 
  `addressId` INT(11) DEFAULT NULL, 
  `media` TEXT(2000) DEFAULT NULL,
  `category_account` ENUM('Restaurant','Local Business or Retail Store','Company, Organisation, or Institution','Entertainement Venue or Theater','Resort or Park','Taxis, Ridesharing, or Public Transport') DEFAULT NULL,
  `createdAt` DATETIME DEFAULT NULL,
  `updatedAt` DATETIME DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`),
  FULLTEXT KEY (name)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;


CREATE TABLE `addresses` (
  `id` INT(11) AUTO_INCREMENT NOT NULL,
  `street_number` INT(11) DEFAULT NULL, 
  `streetline1` VARCHAR(255) DEFAULT NULL, 
  `streetline2` VARCHAR(255) DEFAULT NULL, 
  `city` VARCHAR(64) DEFAULT NULL, 
  `province` VARCHAR(16) DEFAULT NULL, 
  `country` VARCHAR(32) DEFAULT NULL, 
  `zip` VARCHAR(16) DEFAULT NULL, 
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


CREATE TABLE `admins` (
  `id` INT(11) AUTO_INCREMENT NOT NULL, 
  `firstname` VARCHAR(255) DEFAULT NULL, 
  `lastname` VARCHAR(255) DEFAULT NULL, 
  `email` VARCHAR (255) DEFAULT NULL, 
  `phone` VARCHAR (16) DEFAULT NULL, 
  `accountId` INT(11) DEFAULT NULL,
  `createdAt` DATETIME DEFAULT NULL,
  `updatedAt` DATETIME DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- CREATE TABLE `sessions` (
--   `id` INT(11) AUTO_INCREMENT NOT NULL,
--   `idToken` 
-- ) ENGINE=InnoDB DEFAULT CHARSET=utf8;

ALTER TABLE items
ADD FOREIGN KEY (`categoryId`)
REFERENCES `categories` (`id`) ON DELETE SET NULL;

ALTER TABLE items
ADD FOREIGN KEY (`accountId`)
REFERENCES `accounts` (`id`) ON DELETE SET NULL;

ALTER TABLE accounts
ADD FOREIGN KEY (`addressId`)
REFERENCES `addresses` (`id`) ON DELETE SET NULL;

ALTER TABLE admins
ADD FOREIGN KEY (`accountId`)
REFERENCES `accounts` (`id`) ON DELETE SET NULL;

INSERT INTO `addresses` (`street_number`,`streetline1`,`streetline2`,`city`,`province`,`country`,`zip`) VALUES (600,"P.O. Box 435, 1622 Dapibus Avenue","P.O. Box 434, 1516 Est Av.","Galway","C","Fiji","Y0W 1Z2"),(66,"P.O. Box 166, 4271 In Avenue","P.O. Box 128, 9706 Nec Avenue","Motala","Östergötlands län","Costa Rica","926689"),(623,"9661 Nullam Avenue","4321 Justo Road","La Seyne-sur-Mer","PR","Saudi Arabia","423468"),(177,"847-7835 Consectetuer Street","8377 Vel St.","Alacant","CV","Saint Pierre and Miquelon","26576"),(351,"Ap #558-6414 Vulputate, Ave","609-1989 Aliquam Ave","Bremerhaven","Bremen","Saint Martin","376493"),(782,"Ap #558-3387 Iaculis Avenue","P.O. Box 811, 289 Dolor. Avenue","Southaven","MS","Northern Mariana Islands","A9L 7T0"),(40,"P.O. Box 115, 9251 Proin Av.","P.O. Box 198, 7011 Et St.","Waasmunster","OV","Spain","3825EH"),(527,"P.O. Box 894, 5617 Imperdiet Avenue","971-7381 Leo, Avenue","St. Ives","HU","Martinique","56607"),(869,"P.O. Box 341, 1327 Donec Av.","264-6320 Iaculis, Road","Huesca","AR","Aruba","769554"),(665,"4433 Est Rd.","Ap #506-192 Maecenas St.","Belfast","U","Gibraltar","50400"),(591,"589-9537 Lacus. Rd.","235-946 Eget Street","Tamworth","NSW","Maldives","48787-718"),(647,"587-6818 Ridiculus St.","856-5247 Velit. Road","Lublin","Lubelskie","Portugal","V1M 8R7"),(692,"1889 Nibh St.","P.O. Box 425, 1647 Morbi Rd.","Petrópolis","Rio de Janeiro","San Marino","1502"),(958,"8972 Orci. Av.","P.O. Box 289, 4421 Nibh Av.","San Rafael Abajo","SJ","New Zealand","A70 3QB"),(438,"748-3375 Orci Av.","709-2848 Diam St.","Sulzano","LOM","Uruguay","26407"),(872,"7630 Felis Avenue","7069 Amet St.","Le Puy-en-Velay","Auvergne","Singapore","71300"),(399,"Ap #457-2553 Aliquet Street","P.O. Box 815, 6542 Lobortis, Ave","Bauchi","Bauchi","Isle of Man","2359"),(691,"Ap #743-2260 Ornare. Ave","2500 Massa Rd.","Shivapuri","MP","Virgin Islands, British","322013"),(758,"Ap #802-5794 Sed, Rd.","1409 Malesuada St.","Bansberia","West Bengal","Japan","724158"),(979,"2552 Nonummy. Road","3712 Dignissim St.","Castel San Niccolò","Toscana","United States Minor Outlying Islands","88-061");
INSERT INTO `addresses` (`street_number`,`streetline1`,`streetline2`,`city`,`province`,`country`,`zip`) VALUES (652,"Ap #843-5876 A, Avenue","P.O. Box 442, 5129 Quisque Rd.","Charleville-Mézières","Champagne-Ardenne","Bulgaria","99932"),(942,"Ap #801-3580 In Road","Ap #931-1760 Sem Avenue","Vallentuna","AB","Switzerland","774454"),(941,"302-7867 Phasellus Av.","374 Eget Rd.","Sète","LA","Saint Barthélemy","8255"),(236,"532-7364 Quisque Street","934-3284 Scelerisque Av.","Cisterna di Latina","Lazio","Lebanon","0196"),(633,"P.O. Box 249, 9915 Cursus St.","P.O. Box 492, 5461 Parturient Street","Eckville","AB","Reunion","83704"),(712,"2236 Pellentesque Avenue","878-4657 Dolor Street","Cabano","Quebec","Kenya","33862"),(606,"648-6079 Sed Av.","P.O. Box 529, 4003 Cras St.","Mount Gambier","South Australia","Liechtenstein","00429"),(154,"9031 Odio Ave","7273 Vel, Road","Caccamo","SIC","Heard Island and Mcdonald Islands","12099"),(920,"Ap #787-9317 Amet St.","P.O. Box 537, 2352 Orci. Rd.","Basildon","Essex","Belize","UT5Z 4LS"),(329,"P.O. Box 897, 3560 Curabitur Road","Ap #703-8349 Cursus St.","Pınarbaşı","Kay","Tokelau","558521"),(244,"Ap #268-6566 Cras Rd.","8831 Amet Rd.","Sherborne","DO","Honduras","4502"),(878,"Ap #689-6861 Massa. Rd.","936 Enim. St.","Kolkata","West Bengal","Nigeria","9745RB"),(322,"Ap #486-9993 Mollis. Ave","609 Quam Av.","Jundiaí","São Paulo","Wallis and Futuna","B9B 6Y9"),(875,"885-3710 Velit Street","566 Dolor. Rd.","Bismil","Diyarbakır","Uganda","3309"),(940,"5784 Ante Rd.","9322 Porttitor Rd.","Fuenlabrada","MA","Australia","63069"),(577,"6406 Etiam Rd.","801-5518 Dignissim Avenue","Patna","BR","Latvia","36-630"),(783,"686-1266 Facilisis St.","Ap #893-8475 Quis Road","Oklahoma City","OK","Cyprus","60938"),(93,"P.O. Box 465, 1660 Vel, Rd.","106-4344 Vitae Street","Oxford County","Ontario","Latvia","443196"),(25,"Ap #454-8084 Vel, Street","3462 Sed Av.","Rhisnes","Namen","Barbados","25207"),(191,"P.O. Box 776, 7228 Fringilla Av.","Ap #721-8360 At, Street","Kerikeri","NI","Ghana","58867");
INSERT INTO `addresses` (`street_number`,`streetline1`,`streetline2`,`city`,`province`,`country`,`zip`) VALUES (22,"P.O. Box 519, 604 Donec Ave","7313 Ut, Av.","Zaria","KD","Djibouti","49410"),(216,"1062 Penatibus Avenue","Ap #239-456 At Ave","Lanester","BR","Bulgaria","1354VO"),(72,"8831 Dolor. Ave","258-8011 Quis Road","Bremen","Bremen","Mauritius","9566VA"),(527,"P.O. Box 757, 7918 Nulla. Ave","968-6488 Pellentesque St.","Topeka","Kansas","Peru","1082"),(377,"7105 Consectetuer Av.","P.O. Box 931, 979 Nullam Road","Armadale","WA","Bangladesh","303124"),(469,"697-7375 Est. Av.","P.O. Box 825, 8478 Quisque Road","Waiuku","North Island","Uganda","6754PB"),(45,"P.O. Box 921, 6379 A Rd.","176 Donec Ave","Munger","BR","New Zealand","7654JN"),(132,"822-9885 Et Rd.","Ap #858-2793 Enim. Street","Dolembreux","LU","Swaziland","36525"),(559,"Ap #674-764 Tortor. Street","P.O. Box 842, 5839 Egestas. Street","Brahmapur","OR","Saint Barthélemy","1460"),(808,"Ap #571-5254 Urna St.","P.O. Box 164, 8253 Ligula St.","Bolinne","NA","Malta","52375-415"),(658,"Ap #874-7480 Semper Avenue","316-2248 Ipsum Rd.","Colina","RM","Trinidad and Tobago","6528"),(503,"Ap #366-5228 Cras Street","Ap #689-4653 Blandit Rd.","Zutphen","Gelderland","Uzbekistan","75721"),(998,"309-8581 Sed Rd.","158-4650 Donec Rd.","Kumluca","Antalya","Iran","840380"),(545,"P.O. Box 161, 8873 Sit Av.","132-6806 Dolor Av.","Alanya","Antalya","Nicaragua","4634MY"),(840,"Ap #465-8975 Et St.","1137 Phasellus Av.","Dublin","Leinster","Saint Pierre and Miquelon","3299"),(426,"Ap #440-2465 Sagittis Ave","155-356 Consectetuer Rd.","Stamford","CT","Oman","829156"),(378,"7033 Pellentesque Road","Ap #314-3649 Mauris St.","Jacksonville","Florida","Haiti","34984"),(963,"P.O. Box 833, 590 Ante Rd.","7870 Aliquet St.","Flushing","Zl","Guinea","74506"),(890,"5027 Erat, Avenue","Ap #380-4767 Egestas. St.","Pirque","Metropolitana de Santiago","Panama","8176UE"),(523,"1966 Fusce Rd.","5690 Sem Road","Mores","Sardegna","Slovenia","20307");

SELECT * FROM items
WHERE MATCH (title, description)
AGAINST ('pink' IN BOOLEAN MODE);

SELECT * FROM items
WHERE accountId = 1 AND MATCH (title, description)
AGAINST ('pink' IN BOOLEAN MODE);

SELECT * FROM items
WHERE accountId = ? AND MATCH (title, description)
AGAINST (? IN BOOLEAN MODE)

SELECT *, addresses.id
FROM addresses
LEFT JOIN accounts
ON accounts.addressId = addresses.id
WHERE addresses.id = 1;

SELECT * FROM accounts
WHERE (name='%timhortons%') OR MATCH (name)
AGAINST ('timhortons' IN BOOLEAN MODE);


SELECT * 
FROM items
LEFT JOIN accounts
ON items.accountId = accounts.id
WHERE accountId = 3 AND MATCH (title, description)
AGAINST ('pink' IN BOOLEAN MODE);

SELECT * 
FROM items 
WHERE accountId = 1 AND title = "Dora the Explorer Pink Hat";

DELETE *
FROM items 
WHERE id = 2;

UPDATE items
SET  media="http://1.bp.blogspot.com/-18IF5e9EEyI/VqO0qYLujSI/AAAAAAAAEh0/7dDCQvlAKFY/s1600/hello_kitty_pink_sr1.gif"
WHERE id = 3;

INSERT INTO accounts 
  (name, addressId, media, category_account, createdAt, updatedAt)
VALUES 
 ("timhortonsone", 1, "http://www.actuallywecreate.com/wp-content/uploads/2012/10/tim-hortons-always-fresh.jpg", "Restaurant", "2016-08-15 19:38:49", "2016-08-15 19:40:00"),
 ("timhortonstwo", 2, "http://www.actuallywecreate.com/wp-content/uploads/2012/10/tim-hortons-always-fresh.jpg", "Restaurant", "2016-08-15 19:38:49", "2016-08-15 19:40:00"),
 ("timhortonsthree", 3, "http://www.actuallywecreate.com/wp-content/uploads/2012/10/tim-hortons-always-fresh.jpg", "Restaurant", "2016-08-15 19:38:49", "2016-08-15 19:40:00")

SELECT accounts.name, items.title, accounts.id
FROM accounts
LEFT JOIN items
ON items.accountId = accounts.id
SELECT accounts.name, items.title, accounts.id FROM accounts LEFT JOIN items ON items.accountId = accounts.id WHERE accounts.name = 'timhortonsone' ;

SELECT accounts.name, items.title, accounts.id 
FROM accounts 
LEFT JOIN items 
ON items.accountId = accounts.id 
WHERE accounts.name = 'timhortonsone' AND MATCH (title, description)
AGAINST ('water' IN BOOLEAN MODE);
            

ALTER TABLE accounts
ADD email VARCHAR(500);

UPDATE accounts
SET email ="hellokitty@a.com" 
WHERE id = 9;

SELECT items.*, accounts.clientid
FROM items 
LEFT JOIN accounts 
ON items.accountId = accounts.id 
WHERE accounts.clientid = 'auth0|57b7d00f51d5092504a2442c';

ALTER TABLE accounts

ADD clientid VARCHAR(500);



UPDATE accounts
SET clientId ="PmdbxTpKHsOulN583eoykb8Z8lizNulQ" 
WHERE id = 5;

SELECT * FROM accounts
WHERE clientid = "PmdbxTpKHsOulN583eoykb8Z8lizNulQ";

ADD address VARCHAR(500);

ALTER TABLE accounts

SELECT accounts.name, items.title, items.id, items.media , items.description, items.createdAt
FROM accounts 
LEFT JOIN items 
ON items.accountId = accounts.id 
WHERE accounts.name = 'Planet Earth' AND MATCH (title, description)
AGAINST ('capitan' IN BOOLEAN MODE);

accounts.name, items.title, items.id, items.media , items.description, items.createdAt


SELECT accounts.name, items.title, items.id, items.media , items.description, items.createdAt
FROM accounts 
LEFT JOIN items 
ON items.accountId = accounts.id 
WHERE accounts.name = 'Planet Earth' AND WHERE items.title LIKE '%mount%'';

ALTER TABLE items DROP INDEX title, description
CREATE FULLTEXT INDEX address_index ON addresses(street);

SHOW VARIABLES LIKE 'ft_min_word_len'

UPDATE accounts
SET name = CASE
   WHEN currency=1 THEN 0.81*final_price
   ELSE final_price
END

UPDATE account
    SET col_name1={expr1|DEFAULT} [, col_name2={expr2|DEFAULT}] ...
    [WHERE where_condition]
    [ORDER BY ...]
    [LIMIT row_count]
    


CREATE TABLE `test` (
  `id` INT(11) AUTO_INCREMENT NOT NULL ,
  `firstnam` TEXT(256) DEFAULT NULL, 
  `lastname` TEXT(1024),
  `gender` TEXT(2000),
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

INSERT INTO test 
  (firstnam, lastname, gender)
VALUES 
 ("Celine", "Broomhead", "female"),
 ("Bud", "Broomhead", "male"),
 ("Emma", "Broomhead", "female");
 
UPDATE test
  SET firstnam='Celine', lastname= '' , gender =   "female"
WHERE firstnam = 'John';

INSERT INTO items (media)
VALUES 'https://findersnotkeepers.s3.amazonaws.com/CelineAvatar.png'
WHERE items.id =


SELECT accounts.name, items.title, items.id, items.media , items.description, items.createdAt
            FROM accounts 
            LEFT JOIN items 
            ON items.accountId = accounts.id 
            WHERE accounts.name = 'Kash Money' AND MATCH (title, description)
            AGAINST ('hat' IN BOOLEAN MODE);
 
SELECT accounts.name, items.title, items.id, items.media , items.description, items.createdAt
            FROM accounts 
            LEFT JOIN items 
            ON items.accountId = accounts.id 
            WHERE accounts.name = 'Hello World!' AND MATCH (title, description)
            AGAINST ('%hello%' IN BOOLEAN MODE);
            
            SELECT accounts.id ,accounts.name, items.title, items.id, items.media , items.description, items.createdAt
            FROM accounts 
            LEFT JOIN items 
            ON items.accountId = accounts.id 
            WHERE items.accountId = 1 AND ((MATCH (title, description)
            AGAINST ( 'hat' IN NATURAL LANGUAGE MODE)) OR (items.title LIKE '%hat%' OR items.description LIKE '%hat%')) ;

UPDATE items
  SET title='laptop case'
WHERE id = 99;

SELECT * FROM items WHERE items.title LIKE '%hello%';


UPDATE accounts
  SET name = 'black and white knitted hat'
WHERE id = 134;

SELECT accounts.name, items.title, items.id, items.media , items.description, items.createdAt
            FROM accounts 
            LEFT JOIN items 
            ON items.accountId = accounts.id 
            WHERE accounts.id = 3 AND ((MATCH (title, description)
            AGAINST ('phone' IN BOOLEAN MODE)) OR (items.title LIKE 'phone' OR items.description LIKE 'phone'))
            ORDER BY items.createdAt;
