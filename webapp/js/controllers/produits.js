/**
 * Created by yacmed on 23/06/2016.
 */
(function(){
    'use strict';
    angular.module('ProduitsModule').controller('ProduitsCtrl', ['$scope','ProduitsFactory', function($scope,ProduitsFactory){
        toastr.info('Products controller has been loaded');
        $scope.produit = {
            libelle : null,
            prix_ht : 0,
            tva : '00',
            prix_ttc : 0,
            fournisseurs_id : null
        };
        $scope.produits = [];
        ProduitsFactory.fetchAll().success(function(xhrData){
            if (xhrData.error){
                toastr.error(xhrData.message);
            } else {
                $scope.produits = xhrData.data;
                toastr.info('Produits chargées');
            }
        }).error(function(data){
            toastr.error('Server communication Error');
        });
        $scope.fournisseur = {
            nom : null,
            adresse : null
        };
        $scope.ajouterProduit = function(){
            ProduitsFactory.save($scope.produit).success(function(xhrData){
                if (xhrData.error){
                    toastr.error(xhrData.message);
                } else {
                    $scope.produit=xhrData.data;
                    $scope.produits.push($scope.produit);
                    $scope.produit = {};
                    $('.alert-danger').hide();
                    toastr.info('Produit ajouté');
                }
            }).error(function(data){
                toastr.error('Server communication Error');
            });
        };
        $scope.annulerSaisie = function(){
            $scope.produit = {
                libelle : null,
                prix_ht : 0,
                tva : 0,
                prix_ttc : 0,
                fournisseurs_id : null
            };
        };
        $scope.supprimerProduit = function(produit){
            ProduitsFactory.delete(produit.id).success(function(xhrData){
                if (xhrData.error){
                    toastr.error(xhrData.message);
                } else {
                    $scope.produits.splice($scope.produits.indexOf(produit),1);
                    toastr.info('Produit supprim\u00e9 '+produit.libelle);
                }
            }).error(function(data){
                toastr.error('Server communication Error');
            });
        };
    }]);
})();