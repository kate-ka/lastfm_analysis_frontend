'use strict';

/**
 * @ngdoc directive
 * @name lastfmAnalysisApp.directive:highchart
 * @description
 * # highchart
 */
angular.module('lastfmAnalysisApp')
    .directive('highchart', function () {
        return {
            restrict: 'E',
            template: '<div></div>',
            scope: {
                title: '@',
                data: '='
            },
            link: function (scope, element) {
                function renderChart() {
                    Highcharts.chart(element[0], {
                        chart: {
                            plotBackgroundColor: null,
                            plotBorderWidth: null,
                            plotShadow: false,
                            type: 'pie'
                        },
                        title: {
                            text: scope.title
                        },
                        tooltip: {
                            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
                        },
                        plotOptions: {
                            pie: {
                                allowPointSelect: true,
                                cursor: 'pointer',
                                dataLabels: {
                                    enabled: true,
                                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                                    style: {
                                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                                    }
                                }
                            }
                        },
                        series: [{
                            name: 'Brands',
                            colorByPoint: true,
                            data: scope.data
                        }]

                    });
                }

                scope.$watch('data', function() {
                    renderChart();
                }, true);
            }
        };
    });


