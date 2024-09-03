-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 02, 2024 at 07:49 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `swami`
--

-- --------------------------------------------------------

--
-- Table structure for table `bmi`
--

CREATE TABLE `bmi` (
  `image` varchar(100) NOT NULL,
  `username` varchar(100) NOT NULL,
  `gender` varchar(20) NOT NULL,
  `phoneNumber` varchar(50) NOT NULL,
  `email` varchar(200) NOT NULL,
  `password` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `bmi`
--

INSERT INTO `bmi` (`image`, `username`, `gender`, `phoneNumber`, `email`, `password`) VALUES
('', 'Zbbdbdbd', 'Female', '56569595', 'Hdhdhdbfbf', 'Fbbfnfbfn'),
('', 'Vivek', 'Male', '9490480655', 'mohanpolina32465@gmail.com', '1708791'),
('', 'Dhdbbf', 'Male', '6595959', 'Bsbdbdb', '5555'),
('', 'Vivsb', 'Male', '959595985', 'Bsbdbdbdbbd', '55'),
('', 'Bdbdbdbd', 'Male', '59959595', 'Bdbdbfb', '77'),
('image/8aa5eef2-84ce-42cb-bb43-94d952afcedf.jpeg', 'drama', 'Male', '946484958', 'Sggdbd', '5555'),
('image/edbc214f-9b88-4817-8cc4-d2a17dc03ad1.jpeg', 'Bhanu', 'Male', '9392462508', 'nbhanu@gmail.com', '12345'),
('image/965b1c9e-2cd2-4850-8186-5bdec9faa68e.jpeg', 'Max', 'Female', '9498076813', 'Mhagyh34@gamil.com', '567'),
('image/5d5fcce4-4daf-4245-a8ba-95e5c87adf43.jpeg', 'Vivek', 'Male', '946484858', 'mohanpolina32465@gmail.com', '5555'),
('image/12491950-8706-4430-9328-a52167e400b8.jpeg', 'Ashok', 'Male', '9319434572', 'Bolamganesh2@gmail.com', 'Ganesh'),
('image/c6f46013-7cb5-474f-be06-a132a006dd50.jpeg', 'Vivek', 'Male', '9488765846', 'sravanisravaninaidu3@gmail.com', 'vivek55'),
('image/0d6a94a0-c0b4-4426-b35a-b168b9403a33.jpeg', 'swami', 'Male', '66889799566', 'sravanisravaninaidu3@gmail.com', '5656'),
('image/c01140da-2346-40ed-b607-012e3e311df1.jpeg', 'Vugg', 'Male', '558745688', 'sravanisravaninaidu3@gmail.com', '1234'),
('image/7a7685e2-b5c8-419c-9130-54b21afea698.jpeg', 'Vivek', 'Male', '95862469', 'sravanisravaninaidu3@gmail.com', '5566'),
('image/2a75ed1d-ea20-413d-a367-b348af9a0e14.jpeg', 'Vinod', 'Male', '6304893318', 'Wo@gmail.com', '1234567890'),
('image/328d6cf6-6643-48fa-b0e7-1656363e0615.jpeg', 'Sravani', 'Female', '6301050406', 'sravanisravaninaidu3@gmail.com', 'sravani@123');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
