<?php
namespace Api\Repository;
use Api\Common\RepositoryException;
use Api\Model\Produits;
use Api\Common\DbConnector;
class ProduitsRepository extends RepositoryException implements Repository{
    private $dbConnector;
    public function __construct (){
        parent::__construct();
        $this->dbConnector = DbConnector::getInstance();
    }
    public function findAll(){
        try{
            $stmt = $this->dbConnector->pdo->prepare('SELECT id, libelle, prix_ht, tva, prix_ttc, fournisseurs_id FROM produits');
            $stmt->execute();
            $stmt->setFetchMode(\PDO::FETCH_ASSOC);
            $result = $stmt->fetchAll();
            return $result;
        } catch(\Exception $e){
            return [];
        }
    }
    public function findOne($id=0){
        try {
            $stmt = $this->dbConnector->pdo->prepare('SELECT id, libelle, prix_ht, tva, prix_ttc, fournisseurs_id FROM produits  WHERE id = :id');
            $stmt->bindParam(':id', $id, \PDO::PARAM_INT);
            $stmt->execute();
            $stmt->setFetchMode(\PDO::FETCH_ASSOC);
            $result = $stmt->fetch();
            return $result;
        } catch (Exception $e) {
            return [];
        }
    }
    public function save($object=[]){
        try {
            $stmt = $this->dbConnector->pdo->prepare('INSERT INTO produits(`libelle`, `prix_ht`, `tva`, `prix_ttc`, `fournisseurs_id`)  VALUES (:libelle, :prix_ht, :tva, :prix_ttc, :fournisseurs_id)');
            $stmt->bindParam('libelle', $object->libelle, \PDO::PARAM_STR);
            $stmt->bindParam('prix_ht', $object->prix_ht, \PDO::PARAM_STR);
            $stmt->bindParam('tva', $object->tva, \PDO::PARAM_INT);
            $stmt->bindParam('prix_ttc', $object->prix_ttc, \PDO::PARAM_STR);
            $stmt->bindParam('fournisseurs_id', $object->fournisseurs_id, \PDO::PARAM_INT);
            $stmt->execute();
            $object->id = $this->dbConnector->pdo->lastInsertId();
            return $object;
        } catch (Exception $e) {
            return 0;
        }
    }
    public function update($object=[]){
        try {
            $stmt = $this->dbConnector->pdo->prepare('UPDATE produits SET  libelle = :libelle,  prix_ht = :prix_ht,  tva = :tva,  prix_ttc = :prix_ttc,  fournisseurs_id = :fournisseurs_id WHERE id = :id');
            $stmt->bindParam(':id', $object->id, \PDO::PARAM_INT);
            $stmt->bindParam('libelle', $object->libelle, \PDO::PARAM_STR);
            $stmt->bindParam('prix_ht', $object->prix_ht, \PDO::PARAM_STR);
            $stmt->bindParam('tva', $object->tva, \PDO::PARAM_INT);
            $stmt->bindParam('prix_ttc', $object->prix_ttc, \PDO::PARAM_STR);
            $stmt->bindParam('fournisseurs_id', $object->fournisseurs_id, \PDO::PARAM_INT);
            $stmt->execute();
            return $stmt->rowCount();
        } catch (Exception $e) {
            return 0;
        }
    }
    public function delete($id=0){
        try {
            $stmt = $this->dbConnector->pdo->prepare('DELETE FROM produits  WHERE id = :id');
            $stmt->bindParam(':id', $id, \PDO::PARAM_INT);
            $stmt->execute();
            return $stmt->rowCount();
        } catch (Exception $e) {
            return 0;
        }
    }
}
