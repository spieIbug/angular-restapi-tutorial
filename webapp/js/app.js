/**
 * Created by yacmed on 23/06/2016.
 */
(function(){
    'use strict';
    angular.module('MainApp',['ui.router','FournisseursModule', 'ProduitsModule']);
    angular.module('MainApp').config(['$stateProvider','$urlRouterProvider', '$httpProvider', function($stateProvider, $urlRouterProvider, $httpProvider, ServerRequestsInterceptor) {
        // Add the interceptor to the $httpProvider.
        $httpProvider.interceptors.push('ServerRequestsInterceptor');
        toastr.options.closeButton = true;
        toastr.options.closeHtml = '<button><i class="glyphicon glyphicon-remove"></i></button>';
        toastr.options.closeMethod = 'fadeOut';
        toastr.options.progressBar =true;
        toastr.options.closeDuration = 100;
        toastr.options.timeOut = 100;
        toastr.options.positionClass = "toast-bottom-right";
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
