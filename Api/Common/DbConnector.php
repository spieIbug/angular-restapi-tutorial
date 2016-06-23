<?php
namespace Api\Common;
class DbConnector{
    private static $instance;
    public $pdo;
    public static function getInstance(){
        if (is_null(self::$instance)) {
            self::$instance = new DbConnector();
        }
        return self::$instance;
    }
    private function __construct(){
            try {
            $dsn = "mysql:dbname=formation;host=localhost";
            $this->pdo = new \PDO($dsn, "root", "MySql69003@");
        } catch (\PDOException $e) {
            return array(
                "erreur" => "Database communication error"
            );
        }
    }
}