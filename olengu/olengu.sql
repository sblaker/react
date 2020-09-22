-- MySQL dump 10.13  Distrib 8.0.20, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: olengu
-- ------------------------------------------------------
-- Server version	8.0.20

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `annunci`
--

DROP TABLE IF EXISTS `annunci`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `annunci` (
  `id_ann` int NOT NULL AUTO_INCREMENT,
  `host` int DEFAULT NULL,
  `nome_annuncio` varchar(150) DEFAULT NULL,
  `luogo` varchar(300) DEFAULT NULL,
  `descrizione` varchar(300) DEFAULT NULL,
  `attrazioni` varchar(300) DEFAULT NULL,
  `indirizzo` varchar(300) DEFAULT NULL,
  `is_bnb` tinyint(1) DEFAULT NULL,
  `n_ospiti` int DEFAULT NULL,
  `prezzo_notte` int DEFAULT NULL,
  `n_letti_singoli` int DEFAULT NULL,
  `n_letti_matr` int DEFAULT NULL,
  `n_divano_letto` int DEFAULT NULL,
  `n_camere` int DEFAULT NULL,
  `n_bagni` int DEFAULT NULL,
  `colazione` tinyint(1) DEFAULT NULL,
  `AC` tinyint(1) DEFAULT NULL,
  `parcheggio` tinyint(1) DEFAULT NULL,
  `wifi` tinyint(1) DEFAULT NULL,
  `animali_domestici_ammessi` tinyint(1) DEFAULT NULL,
  `baby_friendly` tinyint(1) DEFAULT NULL,
  `tassa_soggiorno` int DEFAULT NULL,
  PRIMARY KEY (`id_ann`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `annunci`
--

LOCK TABLES `annunci` WRITE;
/*!40000 ALTER TABLE `annunci` DISABLE KEYS */;
INSERT INTO `annunci` VALUES (5,1,'Rome Aparts','Roma','Bellissimo appartamento situato nel cuore di Roma','Il Rome Aparts dista 2,3 km da Piazza del Popolo e 2,4 km dalla Basilica di San Pietro. La struttura dista 19 km dall\'Aeroporto di Roma Ciampino, lo scalo più vicino, raggiungibile tramite un servizio navetta a pagamento.','Via Capitelli 12',1,4,150,2,1,1,1,3,1,1,0,1,1,0,15),(6,1,'Martelli Apartments','Firenze','Situato a Firenze, a 200 m da Palazzo Strozzi e a 700 m da Santa Maria Novella, il Tornabuoni Place in Florence offre sistemazioni climatizzate con vista sulla città e connessione WiFi gratuita.','Ubicato a 500 metri da Palazzo Strozzi e da Piazza della Signoria, il Martelli 6 Suite and apartments dista 5 km dall\'Aeroporto di Firenze, lo scalo aeroportuale più vicino. ','Via Prato 3',1,4,200,1,2,1,4,3,1,1,0,1,1,0,30),(7,1,'Montenapoleone Suites','Milano','Ospitato in un elegante palazzo a 10 minuti a piedi dal Duomo di Milano e a 300 metri da Via Montenapoleone, il Montenapoleone Suites offre sistemazioni moderne e la connessione WiFi gratuita in tutti gli ambienti','Il Montenapoleone Suites dista 3 minuti a piedi da Piazza San Babila, 2 km dal Castello Sforzesco e dal rigoglioso Parco Sempione, 3 km dalla stazione ferroviaria di Milano Centrale e 15 minuti in auto dall\'Aeroporto di Milano-Linate.','Via Toti 17',1,4,300,2,2,0,3,3,0,0,0,0,0,0,30),(8,3,'Rome Aparts','Roma','Bellissimo appartamento situato nel cuore di Roma','Il Rome Aparts dista 2,3 km da Piazza del Popolo e 2,4 km dalla Basilica di San Pietro. La struttura dista 19 km dall\'Aeroporto di Roma Ciampino, lo scalo più vicino, raggiungibile tramite un servizio navetta a pagamento.','Via Capitelli 12',1,3,150,1,2,1,5,3,1,1,0,1,0,1,20),(9,3,'Martelli Apartments','Firenze','Situato a Firenze, a 200 m da Palazzo Strozzi e a 700 m da Santa Maria Novella, il Tornabuoni Place in Florence offre sistemazioni climatizzate con vista sulla città e connessione WiFi gratuita.','Ubicato a 500 metri da Palazzo Strozzi e da Piazza della Signoria, il Martelli 6 Suite and apartments dista 5 km dall\'Aeroporto di Firenze, lo scalo aeroportuale più vicino. ','Via Prati 3',1,3,120,1,2,1,4,3,1,1,0,1,0,0,20),(13,3,'Montenapoleone Suites','Milano','Ospitato in un elegante palazzo a 10 minuti a piedi dal Duomo di Milano e a 300 metri da Via Montenapoleone, il Montenapoleone Suites offre sistemazioni moderne e la connessione WiFi gratuita in tutti gli ambienti','Il Montenapoleone Suites dista 3 minuti a piedi da Piazza San Babila, 2 km dal Castello Sforzesco e dal rigoglioso Parco Sempione, 3 km dalla stazione ferroviaria di Milano Centrale e 15 minuti in auto dall\'Aeroporto di Milano-Linate.','Via Toti',1,6,200,1,3,1,4,3,1,1,1,1,0,1,40),(14,3,'Casa Palazzo Reale','Palermo','L\'alloggio è composto da un soggiorno, una cucina con frigorifero e forno, una lavatrice e un bagno privato con bidet e doccia. A disposizione anche un piano cottura e una macchina da caffè.','Situata a Palermo, a meno di 1 km dalla Fontana Pretoria e a 12 minuti a piedi dalla Cattedrale di Palermo.',' Via Generale Cadorna Luigi 57, ',1,3,100,1,2,1,5,3,0,1,0,1,0,1,20),(16,3,'Via Vittorio Emanuele Apartment','Palermo','Situato a Palermo, vicino alla Fontana Pretoria, alla Cattedrale di Palermo e Via Maqueda, il Via Vittorio Emanuele Apartment offre la connessione WiFi gratuita, un bar e una terrazza.','I luoghi di interesse nelle vicinanze includono la Chiesa del Gesu, la Vucciria e il Teatro Massimo.','Cortile Santa Caterina, 2',1,5,125,3,1,1,2,3,1,1,0,1,0,1,15),(17,3,' Palazzo Sovrana','Palermo','I luoghi di interesse nelle vicinanze includono la Cattedrale di Palermo, il Teatro Massimo e Via Maqueda. ','I luoghi di interesse nelle vicinanze includono la Cattedrale di Palermo, il Teatro Massimo e Via Maqueda.','Via Bara All\'Olivella 32',1,4,200,1,3,2,3,3,0,0,0,0,0,0,30),(18,3,' Roma Resort Colosseum','Roma','Situato a Roma, di fronte alla stazione della metropolitana Manzoni e a 15 minuti a piedi dal Colosseo, il Roma Resort Colosseum offre il WiFi gratuito, una colazione giornaliera, moderne sistemazioni a ristorazione indipendente e camere con bagno interno.','Il Roma Resort Colosseum dista 2 fermate di metropolitana dalla Stazione Termini, 700 metri da Porta Maggiore e 13 km dall\'Aeroporto di Roma-Ciampino.',' Via Emanuele Filiberto 100',1,3,300,2,1,1,3,3,1,1,1,1,0,0,50),(19,3,'Prinsi Apartments','Roma','Situato a Roma, a 500 m dalla Fontana di Trevi, il Prinsi Apartments offre sistemazioni con aria condizionata e connessione WiFi gratuita.','I luoghi di interesse nelle vicinanze del Prinsi Apartments includono Palazzo Venezia, Piazza di Spagna e Via Condotti.','Via Santa Maria 12',1,3,200,1,2,1,4,3,0,1,1,1,1,0,25),(20,3,'Renascentia in Florence','Firenze','Situato a Firenze, a 250 m dalla Cattedrale di Santa Maria del Fiore e da Piazza del Duomo, il Renascentia in Florence offre sistemazioni con TV a schermo piatto. La connessione WiFi è gratuita.','Palazzo Vecchio si trova a 200 m dal Renascentia in Florence. 8 km dall\'Aeroporto di Firenze, lo scalo più vicino. ','Via dei Cimatori 12, Uffizi ',1,2,100,1,3,1,4,3,1,1,1,1,1,0,10),(21,3,'B&B Galileo 2000','Firenze','Situato in un edificio storico nel cuore di Firenze, il B&B Galileo 2000 è una struttura di lusso. Offre la connessione Wi-Fi gratuita e camere eleganti a soli 400 m dalla cattedrale e proprio accanto alla casa di Leonardo da Vinci','Situata in Piazza San Firenze, questa struttura si trova a pochi passi da Piazza della Signoria, da Piazza Santa Croce, dalla Galleria degli Uffizi,',' Piazza San Firenze, 3',1,1,150,2,2,1,3,3,1,1,0,1,1,0,30);
/*!40000 ALTER TABLE `annunci` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `foto`
--

DROP TABLE IF EXISTS `foto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `foto` (
  `id_struttura` int DEFAULT NULL,
  `id_foto` int NOT NULL AUTO_INCREMENT,
  `percorso` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id_foto`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `foto`
--

LOCK TABLES `foto` WRITE;
/*!40000 ALTER TABLE `foto` DISABLE KEYS */;
INSERT INTO `foto` VALUES (4,1,'2.jpg'),(5,2,'2.jpg'),(6,3,'3.jpg'),(7,4,'10.jpg'),(8,5,'1.jpg'),(9,6,'2.jpg'),(13,7,'3.jpg'),(14,8,'4.jpg'),(16,9,'12.jpg'),(17,10,'lepontina1.jpg'),(18,11,'maisonCandia.jpg'),(19,12,'rom.jpg'),(20,13,'un.jpg'),(21,14,'fir.jpg');
/*!40000 ALTER TABLE `foto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `prenotazioni`
--

DROP TABLE IF EXISTS `prenotazioni`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `prenotazioni` (
  `id_prenotazione` int NOT NULL AUTO_INCREMENT,
  `host` int DEFAULT NULL,
  `ref_id_ann` int DEFAULT NULL,
  `checkin` date DEFAULT NULL,
  `checkout` date DEFAULT NULL,
  `stato` varchar(255) DEFAULT NULL,
  `tot_pagato` int DEFAULT NULL,
  `guest` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id_prenotazione`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `prenotazioni`
--

LOCK TABLES `prenotazioni` WRITE;
/*!40000 ALTER TABLE `prenotazioni` DISABLE KEYS */;
INSERT INTO `prenotazioni` VALUES (1,3,14,'2020-02-02','2020-02-03','sospeso',120,'4');
/*!40000 ALTER TABLE `prenotazioni` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `session`
--

DROP TABLE IF EXISTS `session`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `session` (
  `ref_id_usr` int NOT NULL,
  `token` varchar(80) NOT NULL,
  PRIMARY KEY (`ref_id_usr`,`token`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `session`
--

LOCK TABLES `session` WRITE;
/*!40000 ALTER TABLE `session` DISABLE KEYS */;
INSERT INTO `session` VALUES (1,'73d00d56-2d61-4a45-9be2-727964197310'),(1,'8a0b8cd8-1ba4-4908-a310-4f2a6d888196'),(3,'80a6bc5e-fb20-42d5-9757-533e76eb99f3'),(4,'7be43b06-4acb-4d66-aa72-16690717bdfc'),(4,'d27724a6-9ee2-442d-9791-2ef1c14387f1');
/*!40000 ALTER TABLE `session` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usr`
--

DROP TABLE IF EXISTS `usr`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usr` (
  `id_usr` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(16) DEFAULT NULL,
  `cognome` varchar(16) DEFAULT NULL,
  `data_nascita` date DEFAULT NULL,
  `email` varchar(30) DEFAULT NULL,
  `pswd` varchar(512) DEFAULT NULL,
  `guadagno_host` int DEFAULT NULL,
  PRIMARY KEY (`id_usr`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usr`
--

LOCK TABLES `usr` WRITE;
/*!40000 ALTER TABLE `usr` DISABLE KEYS */;
INSERT INTO `usr` VALUES (3,'Antonino','Trifiro','1998-09-17','anto@gmail.com','password',NULL),(4,'Claudio','Mistretta','1996-12-19','claudio@gmail.com','password',NULL);
/*!40000 ALTER TABLE `usr` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-09-15  1:58:47
