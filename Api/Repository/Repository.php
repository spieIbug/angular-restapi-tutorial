<?php
namespace Api\Repository;
interface Repository {
	public function findAll();
	public function findOne($id);
	public function save($object);
	public function update($object);
	public function delete($id);
}