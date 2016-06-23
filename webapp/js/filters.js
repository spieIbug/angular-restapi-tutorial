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