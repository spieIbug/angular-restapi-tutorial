/**
 * Created by yacmed on 27/06/2016.
 */
(function(){
    'use strict';
    angular.module('MainApp').controller('MainCtrl', ['$scope', 'TranslationProvider', 'LangProvider', function($scope, TranslationProvider, LangProvider){
        TranslationProvider.init();
        $scope.languages = ["FR", "EN", "AR"];
        $scope.selectedLang = "FR";
        LangProvider.get('Lang') == null ? $scope.selectedLang = "FR": $scope.selectedLang = LangProvider.get('Lang');
        $scope.setLang = function(value){
            LangProvider.set('Lang', value);
            $scope.translation = TranslationProvider.getTranslation(value);
        };
        $scope.translation = TranslationProvider.getTranslation($scope.selectedLang);
    }]);
})();