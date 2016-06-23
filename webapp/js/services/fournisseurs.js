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
