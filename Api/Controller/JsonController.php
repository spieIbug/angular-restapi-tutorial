<?php

namespace Api\Controller;

class JsonController {
	public function __construct(){
		header('Content-type: application/json; charset=UTF-8');
	}
	/**
	 * Extrat a json form application/json header
	 */
	protected function getDataFromJsonHeader(){
		$json = file_get_contents('php://input');
		return json_decode($json);
	}
}