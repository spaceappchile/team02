-- phpMyAdmin SQL Dump
-- version 3.5.1
-- http://www.phpmyadmin.net
--
-- Servidor: localhost
-- Tiempo de generación: 21-04-2013 a las 14:57:39
-- Versión del servidor: 5.5.24-log
-- Versión de PHP: 5.4.3

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de datos: `team02`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `evento`
--

CREATE TABLE IF NOT EXISTS `evento` (
  `idEvento` int(11) NOT NULL AUTO_INCREMENT,
  `idUsuario` int(11) NOT NULL,
  `tipoAvistamiento` varchar(45) DEFAULT NULL COMMENT '	',
  `formaAvistamiento` varchar(45) DEFAULT NULL,
  `estimacionTamano` varchar(45) DEFAULT NULL,
  `valoracionObjetiva` int(11) DEFAULT NULL,
  `valoracionConcurrencia` int(11) DEFAULT NULL,
  `fechaCreacion` date DEFAULT NULL COMMENT 'las fechas se pueden colocar en un historial de fechas.',
  `fechaUltimaModificacion` date DEFAULT NULL,
  `RA` varchar(45) DEFAULT NULL,
  `Decl` varchar(45) DEFAULT NULL,
  `V` float DEFAULT NULL,
  `Nota` int(11) DEFAULT NULL,
  `NObs` int(11) DEFAULT NULL,
  `Arc` float DEFAULT NULL,
  `H` float DEFAULT NULL,
  `foto` varchar(45) DEFAULT NULL,
  `editable` tinyint(1) DEFAULT NULL,
  `hora` time NOT NULL,
  `pais` text NOT NULL,
  `ciudad` text NOT NULL,
  `h_j` int(2) NOT NULL,
  `nasa` text NOT NULL,
  PRIMARY KEY (`idEvento`),
  KEY `fk_evento_usuario1` (`idUsuario`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=26 ;

--
-- Volcado de datos para la tabla `evento`
--

INSERT INTO `evento` (`idEvento`, `idUsuario`, `tipoAvistamiento`, `formaAvistamiento`, `estimacionTamano`, `valoracionObjetiva`, `valoracionConcurrencia`, `fechaCreacion`, `fechaUltimaModificacion`, `RA`, `Decl`, `V`, `Nota`, `NObs`, `Arc`, `H`, `foto`, `editable`, `hora`, `pais`, `ciudad`, `h_j`, `nasa`) VALUES
(21, 1, 'directo', 'Simple', 'grande', 100, NULL, '2013-04-21', NULL, '234', '55', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '12:06:34', 'Chile', 'santiago', 12, ''),
(22, 1, 'directo', 'Instrumento', 'mediano', 100, NULL, '2013-04-21', NULL, '55', '44', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '12:08:28', 'Chile', 'rancagua', 12, ''),
(23, 1, 'directo', 'Simple', 'pequeño', 100, NULL, '2013-04-21', NULL, '3434', '343', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '12:09:33', 'Chile', 'talca', 12, ''),
(24, 1, 'indirecto', 'Simple', 'mediano', 100, NULL, '2013-04-21', NULL, '234', '22', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '12:12:41', 'Chile', 'talca', 12, ''),
(25, 1, 'directo', 'Simple', 'grande', 0, NULL, '2013-04-21', NULL, '', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '12:45:54', 'Chile', 'concepcion', 12, '');

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `evento`
--
ALTER TABLE `evento`
  ADD CONSTRAINT `fk_evento_usuario1` FOREIGN KEY (`idUsuario`) REFERENCES `usuario` (`idUsuario`) ON DELETE NO ACTION ON UPDATE NO ACTION;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
