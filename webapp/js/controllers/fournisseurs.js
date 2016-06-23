/**
 * Created by yacmed on 23/06/2016.
 */
angular.module('FournisseursModule').controller('FournisseursCtrl', function($scope){
    toastr.info('Fournisseurs controller has been loaded');
    $scope.fournisseur = {
        nom : 'Yacine',
        adresse : 'Lyon, France'
    };
});