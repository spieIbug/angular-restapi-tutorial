<?php
require 'vendor/autoload.php';
$router = new Api\Router\Router ($_GET['url']);
$router->get ( '/', function () {
    echo file_get_contents('./webapp/index.html');
} );
//Fournisseurs router
$router->get( '/Fournisseurs', 'Fournisseurs#findAll', 'findAllFournisseurs');
$router->get( '/Fournisseurs/:id', 'Fournisseurs#findOne', 'findOneFournisseurs');
$router->post( '/Fournisseurs', 'Fournisseurs#save', 'saveFournisseurs');
$router->put( '/Fournisseurs', 'Fournisseurs#update', 'updateFournisseurs');
$router->delete( '/Fournisseurs/:id', 'Fournisseurs#delete', 'deleteFournisseurs');
//Produits router
$router->get( '/Produits', 'Produits#findAll', 'findAllProduits');
$router->get( '/Produits/:id', 'Produits#findOne', 'findOneProduits');
$router->post( '/Produits', 'Produits#save', 'saveProduits');
$router->put( '/Produits', 'Produits#update', 'updateProduits');
$router->delete( '/Produits/:id', 'Produits#delete', 'deleteProduits');
try {
    $router->run ();
} catch (Exception $e) {
    echo "{\"error\":true, \"message\":\"".$e->getMessage()."\"}";
}
