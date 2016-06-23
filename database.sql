-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema formation
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema formation
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `formation` DEFAULT CHARACTER SET utf8 ;
USE `formation` ;

-- -----------------------------------------------------
-- Table `formation`.`fournisseurs`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `formation`.`fournisseurs` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nom` VARCHAR(45) NOT NULL COMMENT 'Non null et unique',
  `adresse` VARCHAR(100) NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC),
  UNIQUE INDEX `nom_UNIQUE` (`nom` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `formation`.`produits`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `formation`.`produits` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `libelle` VARCHAR(45) NOT NULL,
  `prix_ht` DECIMAL(10,2) NOT NULL DEFAULT 0.00,
  `tva` TINYINT(2) NOT NULL DEFAULT 5 COMMENT '5 %',
  `prix_ttc` DECIMAL(10,2) NOT NULL DEFAULT 0.00,
  `fournisseurs_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC),
  INDEX `fk_produits_fournisseurs_idx` (`fournisseurs_id` ASC),
  CONSTRAINT `fk_produits_fournisseurs`
    FOREIGN KEY (`fournisseurs_id`)
    REFERENCES `formation`.`fournisseurs` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
