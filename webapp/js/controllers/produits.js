/**
 * Created by yacmed on 23/06/2016.
 */
(function(){
    'use strict';
    angular.module('ProduitsModule').controller('ProduitsCtrl', function($scope){
        toastr.info('Products controller has been loaded');
        $scope.produit = {
            libelle : 'Formation angular',
            prixHt : '0.00',
            tva : '5',
            prixTtc : '0.00',
            fournisseur : null
        };
    });
})();