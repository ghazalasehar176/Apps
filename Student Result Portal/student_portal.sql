-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 15, 2025 at 01:13 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `student_portal`
--

-- --------------------------------------------------------

--
-- Table structure for table `results`
--

CREATE TABLE `results` (
  `id` int(50) NOT NULL,
  `roll_no` varchar(50) NOT NULL,
  `student_name` varchar(50) NOT NULL,
  `mark` int(50) NOT NULL,
  `grade` varchar(50) NOT NULL,
  `remark` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `results`
--

INSERT INTO `results` (`id`, `roll_no`, `student_name`, `mark`, `grade`, `remark`) VALUES
(1, 'STU101', 'Ali Khan', 88, 'A', 'Excellent performance'),
(2, 'STU102', 'Sara Ahmed', 74, 'B', 'Good work'),
(3, 'STU103', 'Usman Tariq', 59, 'C', 'Needs improvement'),
(4, 'STU104', 'Hina Iqbal', 92, 'A+', 'Outstanding result'),
(5, 'STU105', 'Fahad Malik', 45, 'D', 'Just passed'),
(6, 'STU106', 'Ayesha Noor', 81, 'A', 'Very good performance'),
(7, 'STU107', 'Bilal Hussain', 67, 'B', 'Good effort, keep improving'),
(8, 'STU108', 'Hamza Ali', 53, 'C', 'Needs more practice'),
(9, 'STU109', 'Mehwish Tariq', 95, 'A+', 'Excellent and consistent work'),
(10, 'STU110', 'Zain Abbas', 39, 'F', 'Failed, needs serious improvement');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `results`
--
ALTER TABLE `results`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `results`
--
ALTER TABLE `results`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;