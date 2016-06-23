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
