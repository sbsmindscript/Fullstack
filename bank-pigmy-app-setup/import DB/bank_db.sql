-- phpMyAdmin SQL Dump
-- version 4.2.11
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Apr 23, 2024 at 09:59 AM
-- Server version: 5.6.21
-- PHP Version: 5.5.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `bank_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin_login`
--

CREATE TABLE IF NOT EXISTS `admin_login` (
`admin_authorised_id` int(11) NOT NULL,
  `admin_email_id` varchar(100) NOT NULL,
  `admin_password` varchar(100) NOT NULL,
  `admin_status` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `agents`
--

CREATE TABLE IF NOT EXISTS `agents` (
`agent_id` int(11) NOT NULL,
  `agent_name` varchar(100) NOT NULL,
  `bank_id` varchar(100) NOT NULL COMMENT 'Bank UID',
  `mobile_no.` varchar(100) NOT NULL,
  `email_id` varchar(100) NOT NULL,
  `auth_password` varchar(100) NOT NULL,
  `address` varchar(100) NOT NULL,
  `agent_status` int(11) NOT NULL,
  `date_of_joining` datetime NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `agents`
--

INSERT INTO `agents` (`agent_id`, `agent_name`, `bank_id`, `mobile_no.`, `email_id`, `auth_password`, `address`, `agent_status`, `date_of_joining`) VALUES
(1, 'Balu Waghmare', '1', '8329625489', 'balu.swt@gmail.com', '123456', 'Jalna, Maharashtra', 1, '2024-04-13 00:00:00'),
(2, 'Vaishnav P', '1', '8888888888', 'vaishnav@gmail.com', '654321', 'Sambhaji Nagar', 0, '2024-04-13 00:00:00'),
(3, 'Varsha Patil', '1', '9999999999', 'varsha@gmail.com', '0123456', 'Thane', 0, '2024-04-26 04:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `customers`
--

CREATE TABLE IF NOT EXISTS `customers` (
`cust_id` int(11) NOT NULL,
  `cust_name` varchar(100) NOT NULL,
  `account_no` varchar(100) DEFAULT NULL,
  `location` varchar(100) NOT NULL,
  `under_agent_email` varchar(100) NOT NULL,
  `agent_id` varchar(100) NOT NULL,
  `mobile_no` varchar(100) NOT NULL,
  `bussiness_name` varchar(100) NOT NULL,
  `bussiness_proof` varchar(100) NOT NULL,
  `image` varchar(100) NOT NULL,
  `bank_approval_status` int(11) NOT NULL,
  `registration_date` varchar(100) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `customers`
--

INSERT INTO `customers` (`cust_id`, `cust_name`, `account_no`, `location`, `under_agent_email`, `agent_id`, `mobile_no`, `bussiness_name`, `bussiness_proof`, `image`, `bank_approval_status`, `registration_date`) VALUES
(16, 'Ajay Kale', NULL, 'Latur', 'balu.swt@gmail.com', '1', '8329625489', 'SBS', 'Aadhar', '1713858400.png', 0, '23-04-2024');

-- --------------------------------------------------------

--
-- Table structure for table `location`
--

CREATE TABLE IF NOT EXISTS `location` (
`location_id` int(11) NOT NULL,
  `location_name` varchar(100) NOT NULL,
  `location_status` varchar(100) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `location`
--

INSERT INTO `location` (`location_id`, `location_name`, `location_status`) VALUES
(1, 'Pune', '1'),
(2, 'Latur', '1'),
(3, 'Aurangabad', '1');

-- --------------------------------------------------------

--
-- Table structure for table `savings`
--

CREATE TABLE IF NOT EXISTS `savings` (
`saving_id` int(11) NOT NULL,
  `cust_account_no` varchar(100) NOT NULL,
  `customer_full_name` varchar(100) NOT NULL,
  `agent_id` varchar(100) NOT NULL,
  `agent_email` varchar(100) NOT NULL,
  `latitude` varchar(100) NOT NULL,
  `longitude` varchar(100) NOT NULL,
  `amount` double NOT NULL,
  `change_request` int(11) NOT NULL,
  `entry_date` date NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `savings`
--

INSERT INTO `savings` (`saving_id`, `cust_account_no`, `customer_full_name`, `agent_id`, `agent_email`, `latitude`, `longitude`, `amount`, `change_request`, `entry_date`) VALUES
(6, '4001', 'Ajay Khadke', '1', 'balu.swt@gmail.com', '21.1458004', '79.0881546', 200, 0, '2024-04-16'),
(7, '4001', 'Ajay Khadke', '1', 'balu.swt@gmail.com', '21.1458004', '79.0881546', 200, 1, '2024-04-16'),
(8, '4001', 'Ajay Khadke', '1', 'balu.swt@gmail.com', '21.1458004', '79.0881546', 400, 1, '2024-04-16'),
(9, '4001', 'Ajay Khadke', '1', 'balu.swt@gmail.com', '21.1458004', '79.0881546', 100, 1, '2024-04-19'),
(11, '4001', 'Ajay Khadke', '1', 'balu.swt@gmail.com', '21.1458004', '79.0881546', 600, 1, '2024-04-19'),
(12, '4001', 'Ajay Khadke', '1', 'balu.swt@gmail.com', '21.1458004', '79.0881546', 300, 1, '2024-04-19');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin_login`
--
ALTER TABLE `admin_login`
 ADD PRIMARY KEY (`admin_authorised_id`);

--
-- Indexes for table `agents`
--
ALTER TABLE `agents`
 ADD PRIMARY KEY (`agent_id`);

--
-- Indexes for table `customers`
--
ALTER TABLE `customers`
 ADD PRIMARY KEY (`cust_id`);

--
-- Indexes for table `location`
--
ALTER TABLE `location`
 ADD PRIMARY KEY (`location_id`);

--
-- Indexes for table `savings`
--
ALTER TABLE `savings`
 ADD PRIMARY KEY (`saving_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin_login`
--
ALTER TABLE `admin_login`
MODIFY `admin_authorised_id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `agents`
--
ALTER TABLE `agents`
MODIFY `agent_id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `customers`
--
ALTER TABLE `customers`
MODIFY `cust_id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=17;
--
-- AUTO_INCREMENT for table `location`
--
ALTER TABLE `location`
MODIFY `location_id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `savings`
--
ALTER TABLE `savings`
MODIFY `saving_id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=13;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
