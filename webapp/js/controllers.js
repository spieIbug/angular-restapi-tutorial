/**
 * Created by yacmed on 27/06/2016.
 */
(function(){
    'use strict';
    angular.module('MainApp').controller('MainCtrl', ['$scope', 'TranslationProvider', 'LangProvider','ServerRequestsInterceptor', function($scope, TranslationProvider, LangProvider,ServerRequestsInterceptor){
        //$scope.stats = ServerRequestsInterceptor.getStatistics();
        TranslationProvider.init();
        $scope.languages = ["FR", "EN", "AR"];
        $scope.selectedLang = "FR";
        LangProvider.get('Lang') == null ? $scope.selectedLang = "FR": $scope.selectedLang = LangProvider.get('Lang');
        $scope.setLang = function(value){
            LangProvider.set('Lang', value);
            $scope.translation = TranslationProvider.getTranslation(value);
        };
        $scope.translation = TranslationProvider.getTranslation($scope.selectedLang);
        $scope.graphique = {
            "type": "serial",
            "theme": "chalk",
            "marginRight": 80,
            "autoMarginOffset": 20,
            "marginTop": 7,
            "data": ServerRequestsInterceptor.getStatistics(),
            "valueAxes": [{
                "axisAlpha": 0.2,
                "dashLength": 1,
                "position": "left"
            }],
            "mouseWheelZoomEnabled": true,
            "graphs": [{
                "id": "g1",
                "balloonText": "[[url]] in [[executionTime]]ms",
                "bullet": "round",
                "bulletBorderAlpha": 1,
                "hideBulletsCount": 50,
                "title": "red line",
                "valueField": "executionTime",
                "useLineColorForBulletBorder": true
            }],
            "chartScrollbar": {
                "autoGridCount": true,
                "scrollbarHeight": 40
            },
            "zoomControl": {
                "zoomControlEnabled": true
            },
            "categoryField": "startTime",
            "categoryAxis": {
                /*"parseDates": true,
                "minPeriod": "fff",*/
                "title": "Appels serveur",
                "labelRotation": 90,
                "axisColor": "#DADADA",
                "dashLength": 1,
                "minorGridEnabled": true
            },
            "export": {
                "enabled": true
            }
        };
    }]);
})();


