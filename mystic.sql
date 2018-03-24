-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Czas generowania: 24 Mar 2018, 03:05
-- Wersja serwera: 10.1.30-MariaDB
-- Wersja PHP: 7.2.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Baza danych: `mystic`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `accounts`
--

CREATE TABLE `accounts` (
  `user_id` int(10) NOT NULL,
  `session_id` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `ip` varchar(255) NOT NULL,
  `is_tester` int(1) NOT NULL DEFAULT '1',
  `is_premium` int(1) NOT NULL DEFAULT '0',
  `days_left` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `premium_type` varchar(25) NOT NULL DEFAULT '0',
  `status` varchar(25) NOT NULL DEFAULT '0',
  `is_online` int(1) NOT NULL DEFAULT '0',
  `ship_id` int(11) NOT NULL DEFAULT '1',
  `rank` int(11) NOT NULL DEFAULT '1',
  `level` int(11) NOT NULL DEFAULT '1',
  `experience` bigint(255) NOT NULL DEFAULT '0',
  `honor` bigint(255) NOT NULL DEFAULT '0',
  `credits` bigint(255) NOT NULL DEFAULT '50000',
  `uridium` bigint(255) NOT NULL DEFAULT '5000',
  `e_gold` int(255) NOT NULL DEFAULT '0',
  `faction_id` int(11) NOT NULL DEFAULT '0',
  `league` int(11) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Zrzut danych tabeli `accounts`
--

INSERT INTO `accounts` (`user_id`, `session_id`, `username`, `password`, `email`, `ip`, `is_tester`, `is_premium`, `days_left`, `premium_type`, `status`, `is_online`, `ship_id`, `rank`, `level`, `experience`, `honor`, `credits`, `uridium`, `e_gold`, `faction_id`, `league`) VALUES
(1, '', 'INFINITY', '$2y$10$4sZdn0EaurMzGCAla1Up7OJ8vDmhJjKdsyCtQIAIuJ3AuxQ0m0Tly', 'test@test.com', '', 1, 1, '2018-03-18 22:16:36', '0', '0', 0, 56, 21, 25, 83886080000, 105000000, 999999999999, 999999999999, 15789, 2, 0),
(15, NULL, 'Administrator6565', '$2y$10$jb6/uEsgAmXY0vcsy78jneDKoN8RBu0CVU9m60r30.9OVfY.IUes6', 'sabaka@fullservice.ru', '', 1, 0, '2018-03-24 00:58:18', '0', '0', 0, 1, 1, 1, 0, 0, 50000, 5000, 0, 0, 0);

--
-- Indeksy dla zrzutów tabel
--

--
-- Indexes for table `accounts`
--
ALTER TABLE `accounts`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT dla tabeli `accounts`
--
ALTER TABLE `accounts`
  MODIFY `user_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
