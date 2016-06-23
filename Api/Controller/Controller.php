<?php
namespace Api\Controller;
interface Controller {
	public function findAll();
	public function findOne($id);
	public function save();
	public function update();
	public function delete($id);
}