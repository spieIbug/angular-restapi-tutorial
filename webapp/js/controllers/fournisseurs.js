/**
 * Created by yacmed on 23/06/2016.
 */
(function(){
    'use strict';
    angular.module('FournisseursModule').controller('FournisseursCtrl', ['$scope','FournisseursFactory',function($scope, FournisseursFactory){
        toastr.info('Fournisseurs controller has been loaded');
        $scope.fournisseurs = [];
        FournisseursFactory.fetchAll().success(function(xhrData){
            if (xhrData.error){
                toastr.error(xhrData.message);
            } else {
                $scope.fournisseurs = xhrData.data;
                toastr.info('Loaded datas');
            }
        }).error(function(data){
            toastr.error('Server communication Error');
        });
        $scope.fournisseur = {
            nom : null,
            adresse : null
        };
        $scope.ajouterFournisseur = function(){
            FournisseursFactory.save($scope.fournisseur).success(function(xhrData){
                if (xhrData.error){
                    toastr.error(xhrData.message);
                } else {
                    $scope.fournisseur.id=xhrData.data;
                    $scope.fournisseurs.push($scope.fournisseur);
                    $scope.fournisseur = {};
                    $('.alert-danger').hide();
                    toastr.info('Loaded datas');
                }
            }).error(function(data){
                toastr.error('Server communication Error');
            });
        };
        $scope.annulerSaisie = function(){
            $scope.fournisseur = {
                nom : null,
                adresse : null
            };
        };
        $scope.supprimerFournisseur = function(object){
            FournisseursFactory.delete(object.id).success(function(xhrData){
                if (xhrData.error){
                    toastr.error(xhrData.message);
                } else {
                    $scope.fournisseurs.splice($scope.fournisseurs.indexOf(object),1);
                    toastr.info('Fournisseur supprim\u00e9 '+object.nom);
                }
            }).error(function(data){
                toastr.error('Server communication Error');
            });
        };
        
    }]);
})();
