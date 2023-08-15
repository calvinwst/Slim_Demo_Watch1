-- Active: 1663846908566@@127.0.0.1@3307@watches
CREATE TABLE `watch_details` (
  `refrence_no` int(11) NOT NULL AUTO_INCREMENT,
  `model` varchar(45) DEFAULT NULL,
  `model_year` varchar(45) DEFAULT NULL,
  `style` varchar(45) DEFAULT NULL,
  `manufacturer` varchar(45) DEFAULT NULL,
  `country` varchar(45) DEFAULT NULL,
  `movement_types` varchar(45) DEFAULT NULL,
  `gender` varchar(45) DEFAULT NULL,
  `diameter` int(11) DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  PRIMARY KEY (`refrence_no`)
);

/*
-- Query: SELECT * FROM watch_details
LIMIT 0, 1000

-- Date: 2022-10-20 11:42
*/
INSERT INTO `watch_details` (`model`,`model_year`,`style`,`manufacturer`,`country`,`movement_types`,`gender`,`diameter (mm)`,`price`) VALUES ('CASIO G-SHCOK GA2100','2018','sport','CASIO','Tokyo, Japan','quatz ','men',36,499);
INSERT INTO `watch_details` (`model`,`model_year`,`style`,`manufacturer`,`country`,`movement_types`,`gender`,`diameter (mm)`,`price`) VALUES ('AIR KING','2022','sport','ROLEX','Geneva, Switzerland','automatic','men',40,7050);
INSERT INTO `watch_details` (`model`,`model_year`,`style`,`manufacturer`,`country`,`movement_types`,`gender`,`diameter (mm)`,`price`) VALUES ('BLACK BAY FIFTY-EIGHT','2021','gmt','TUDOR','Geneva, Switzerland','automatic','men',39,4500);
INSERT INTO `watch_details` (`model`,`model_year`,`style`,`manufacturer`,`country`,`movement_types`,`gender`,`diameter (mm)`,`price`) VALUES ('GMT-MASTER 2','2022','gmt','ROLEX','Geneva, Switzerland','automatic','men',40,10650);
INSERT INTO `watch_details` (`model`,`model_year`,`style`,`manufacturer`,`country`,`movement_types`,`gender`,`diameter (mm)`,`price`) VALUES ('GRAND SEIKO HERIATGE COLLECTION','2014','dress','GRAND SEIKO','Tokyo, Japan','spring dive','men',39,5900);
INSERT INTO `watch_details` (`model`,`model_year`,`style`,`manufacturer`,`country`,`movement_types`,`gender`,`diameter (mm)`,`price`) VALUES ('ISLE OF MAN TT','2017','race','BREMONT','Reading, England','balance spring ','men ',43,6000);
INSERT INTO `watch_details` (`model`,`model_year`,`style`,`manufacturer`,`country`,`movement_types`,`gender`,`diameter (mm)`,`price`) VALUES ('PELAGOS 39 ','2022','dive','TUDOR','Geneva, Switzerland','automatic','men',40,4240);
INSERT INTO `watch_details` (`model`,`model_year`,`style`,`manufacturer`,`country`,`movement_types`,`gender`,`diameter (mm)`,`price`) VALUES ('REVERSO TRIBUTE','1931','dress','jaeger lecoultre','Geneva, Switzerland','automatic','men',29,15000);
INSERT INTO `watch_details` (`model`,`model_year`,`style`,`manufacturer`,`country`,`movement_types`,`gender`,`diameter (mm)`,`price`) VALUES ('SANTOS DE CARTIER','2004','dress','CARTIER','paris, France','automatic','women',34,7500);
INSERT INTO `watch_details` (`model`,`model_year`,`style`,`manufacturer`,`country`,`movement_types`,`gender`,`diameter (mm)`,`price`) VALUES ('SEIKO PERSAGE COCKTAIL ','1998','dress','SEIKO','Tokyo, Japan ','mechanical ','men ',40,495);

