/**
 * Created by yacmed on 23/06/2016.
 */
(function(){
    'use strict';
    angular.module('FournisseursModule',[]);
    console.log('module fournisseur chargé');
})();

/**
 * Created by yacmed on 23/06/2016.
 */
(function(){
    'use strict';
    angular.module('ProduitsModule',[]);
    console.log('module produit chargé');
})();

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
            tva : 0,
            prix_ttc : 0,
            fournisseurs_id : null
        };
        $scope.produits = [];
        $scope.produits = ProduitsFactory.fetchAll().success(function(xhrData){
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
                    $scope.produit.id=xhrData.data;
                    $scope.produits.push($scope.produit);
                    $scope.produit = {};
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
/**
 * Created by yacmed on 23/06/2016.
 */
(function(){
    'use strict';
    angular.module('FournisseursModule').factory('FournisseursFactory', ['$http',function($http){
        const URL = '../Fournisseurs';
        return {
            fetchAll : function(){
                return $http.get(URL);
            },
            fetchOne : function(id){
                return $http.get(URL+'/'+id);
            },
            save : function(object){
                return $http.post(URL, object);
            },
            update : function(object){
                return $http.put(URL, object);
            },
            delete : function(id){
                return $http.delete(URL+'/'+id);
            }
        }
    }]);
})();

/**
 * Created by yacmed on 23/06/2016.
 */
(function(){
    'use strict';
    angular.module('ProduitsModule').factory('ProduitsFactory', ['$http',function($http){
        const URL = '../Produits';
        return {
            fetchAll : function(){
                return $http.get(URL);
            },
            fetchOne : function(id){
                return $http.get(URL+'/'+id);
            },
            save : function(object){
                return $http.post(URL, object);
            },
            update : function(object){
                return $http.put(URL, object);
            },
            delete : function(id){
                return $http.delete(URL+'/'+id);
            }
        }
    }]);
})();
/**
 * Created by yacmed on 23/06/2016.
 */
console.log('when it specific');
/**
 * Created by yacmed on 23/06/2016.
 */
/**
 * Created by yacmed on 23/06/2016.
 */
(function(){
    'use strict';
    angular.module('MainApp',['ui.router','FournisseursModule', 'ProduitsModule']);
    angular.module('MainApp').config(['$stateProvider','$urlRouterProvider',function($stateProvider, $urlRouterProvider) {
        toastr.options.closeButton = true;
        toastr.options.closeHtml = '<button><i class="glyphicon glyphicon-remove"></i></button>';
        toastr.options.closeMethod = 'fadeOut';
        toastr.options.closeDuration = 300;
        toastr.options.closeEasing = 'swing';
        toastr.options.newestOnTop = false;
        toastr.options.preventDuplicates = true;
        $urlRouterProvider.otherwise("/");
        $stateProvider
            .state('home', {
                url: "/",
                templateUrl: "partials/home.html"
            })
            .state('fournisseur', {
                url: "/fournisseur",
                templateUrl: "partials/fournisseurs.html",
                controller: 'FournisseursCtrl'
            })
            .state('produit', {
                url: "/produit",
                templateUrl: "partials/produits.html",
                controller : 'ProduitsCtrl'
            });
    }]);
})();

/**
 * Created by yacmed on 23/06/2016.
 */
(function(){
    'use strict';
    angular.module('MainApp').directive('menu', function(){
        return {
          restrict : 'E',
          templateUrl : 'partials/menu.html'
        };
    });
})();

/**
 * Created by yacmed on 23/06/2016.
 */
(function(){
    'use strict';
    angular.module('MainApp').filter('euroFormat', function(){
        return function(input){
            return input + ' \u20ac';
        }
    });
    angular.module('MainApp').filter('percent', function(){
        return function(input){
            return input + ' %';
        }
    });
})();