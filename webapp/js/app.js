/**
 * Created by yacmed on 23/06/2016.
 */
(function(){
    'use strict';
    angular.module('MainApp',['ui.router']);
    angular.module('MainApp').config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/");
        $stateProvider
            .state('home', {
                url: "/",
                templateUrl: "partials/home.html"
            })
            .state('fournisseur', {
                url: "/fournisseur",
                templateUrl: "partials/fournisseurs.html",
                controller: function ($scope) {
                    console.log('we will see later');
                }
            })
            .state('produit', {
                url: "/produit",
                templateUrl: "partials/produits.html"
            });
    });
})();
