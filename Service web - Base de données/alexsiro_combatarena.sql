-- phpMyAdmin SQL Dump
-- version 4.7.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Dec 14, 2017 at 09:45 AM
-- Server version: 10.1.24-MariaDB-cll-lve
-- PHP Version: 5.6.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `alexsiro_combatarena`
--

-- --------------------------------------------------------

--
-- Table structure for table `Partie`
--

CREATE TABLE `Partie` (
  `id` int(11) NOT NULL,
  `idUtilisateur` int(11) NOT NULL,
  `date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `victoire` tinyint(1) NOT NULL,
  `nombreDeChutes` int(11) NOT NULL,
  `dureePartie` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Partie`
--

INSERT INTO `Partie` (`id`, `idUtilisateur`, `date`, `victoire`, `nombreDeChutes`, `dureePartie`) VALUES
(1, 1, '2017-12-13 19:34:27', 1, 2, 60183),
(2, 2, '2017-12-13 19:34:55', 0, 5, 41847),
(3, 2, '2017-12-13 19:35:16', 1, 1, 56039),
(4, 3, '2017-12-13 19:35:38', 1, 1, 45453),
(5, 1, '2017-12-13 19:35:54', 1, 0, 64058);

-- --------------------------------------------------------

--
-- Table structure for table `Utilisateur`
--

CREATE TABLE `Utilisateur` (
  `id` int(11) NOT NULL,
  `login` varchar(50) NOT NULL,
  `mot_de_passe` varchar(255) NOT NULL,
  `courriel` varchar(255) NOT NULL,
  `age` int(11) NOT NULL,
  `couleur_logo` varchar(64) NOT NULL,
  `volumeSon` int(11) NOT NULL,
  `date_de_creation` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `token` varchar(255) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Utilisateur`
--

INSERT INTO `Utilisateur` (`id`, `login`, `mot_de_passe`, `courriel`, `age`, `couleur_logo`, `volumeSon`, `date_de_creation`, `token`) VALUES
(1, 'admin', '$2y$10$TPj5r63m0sLlJiKSAroKcuacuxPs/bNxc3pFIF5brk9taw6dnwGRC', 'test@gmail.com', 42, '#000000', 0, '2017-12-13 18:59:47', 'RblLS0h5lJMxHHydswb0'),
(2, 'fred', '$2y$10$.H5MFYOKIAOJNJb7W.QtbeoTkOIt9aat5cibBBpqkTRLN1FaeRXF6', 'fred@fred.com', 1, '#400080', 100, '2017-12-13 19:01:22', NULL),
(3, 'alex', '$2y$10$xW5XP3N8yYc.6DWKpIp1C.EL.WxK75bSfmypLga6wns82FNwftoX6', 'alex@alex.alex', 125, '#00ff00', 75, '2017-12-13 19:04:24', NULL),
(4, 'fabrice', '$2y$10$TvwBKCCYoziJAl6nF8ETx.lkqXMXy2xK7EZM9Ij0EZjLlPcPyLyoq', 't@t.c', 1, '#000000', 0, '2017-12-13 20:25:46', 'kZpVJhKSPcrrLYB6gtzW'),
(5, 'test1', '$2y$10$mfqed/Y5.h4wYGBfqfK6peHsFkeErmAcLibyln4cqePKKpIHimt/a', 'test@test.com', 12, '#c0c0c0', 100, '2017-12-13 20:26:58', NULL),
(6, 'test2', '$2y$10$xFItcmlBxvMuWXnRRDsQceO7e4Sn5J5Van3JpyMyoYviy.SPzXMuy', 'test2@tr.cp', 2, '#808080', 54, '2017-12-13 20:28:16', NULL),
(7, 'test4', '$2y$10$EGP4tJIxzPXylw.GLl595uM5fQFO6nfO9wmLfa5ZMXc1M7PetC/a.', 'test@4.4444', 44, '#408080', 50, '2017-12-13 20:33:39', NULL),
(8, 'test3', '$2y$10$tu0dSUz8G6556KbJqkRnyucQrDxWace/FsIK6kQ8/RmwWqvA.9i.O', 'test@test.test', 3, '#00ff00', 0, '2017-12-13 20:35:35', 'Y5lTleJzeHE79tQGMAQH'),
(9, 'test42', '$2y$10$FO13tKIlnuuQ7ssfMTkx2.w14qcScmitqMmdIb6CVgfX00PIUWP92', 't@t.c', 42, '#004040', 8, '2017-12-13 23:04:49', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Partie`
--
ALTER TABLE `Partie`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Utilisateur`
--
ALTER TABLE `Utilisateur`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Partie`
--
ALTER TABLE `Partie`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT for table `Utilisateur`
--
ALTER TABLE `Utilisateur`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
