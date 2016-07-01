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
    'use strict';
    angular.module('MainApp').directive('amchart', function () {
            return {
                replace: true,
                scope: {
                    options: '=ngModel'
                },
                templateUrl: 'partials/graphique.html',
                link: function (scope, $el) {
                    var chart;
                    if (scope.options) {
                        var renderChart = function (amChartOptions) {
                            var option = amChartOptions || scope.options;
                            chart = new AmCharts.AmSerialChart();
                            chart.dataProvider = option.data;
                            var chartKeys = Object.keys(option);
                            for (var i = 0; i < chartKeys.length; i++) {
                                if (typeof option[chartKeys[i]] !== 'object' && typeof option[chartKeys[i]] !== 'function') {
                                    chart[chartKeys[i]] = option[chartKeys[i]];
                                } else {
                                    chart[chartKeys[i]] = angular.copy(option[chartKeys[i]]);
                                }
                            }
                            chart.write($el[0].id);
                        };
                        renderChart();
                        scope.$watch('options', function (newValue, oldValue) {
                            renderChart(newValue);
                        }, true);
                    }
                }
            };
        });
})();
