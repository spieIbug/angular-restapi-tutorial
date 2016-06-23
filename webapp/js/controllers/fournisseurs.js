/**
 * Created by yacmed on 23/06/2016.
 */
(function(){
    'use strict';
    angular.module('FournisseursModule').controller('FournisseursCtrl', function($scope){
        toastr.info('Fournisseurs controller has been loaded');
        $scope.fournisseur = {
            nom : 'Yacine',
            adresse : 'Lyon, France'
        };
        $scope.fournisseurs =
            [
                {
                    id:1,
                    nom : 'Yacine',
                    adresse : 'Lyon, France'
                }
                ,{
                id:2,
                nom : 'MEDDAH',
                adresse : 'Lyon, France'
            }
                ,{
                id:3,
                nom : 'John',
                adresse : 'Saida'
            }
                ,{
                id:4,
                nom : 'Doe',
                adresse : 'Algérie'
            }
            ];
    });
})();
