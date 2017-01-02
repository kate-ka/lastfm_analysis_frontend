'use strict';

/**
 * @ngdoc directive
 * @name lastfmAnalysisApp.directive:barchart
 * @description
 * # barchart
 */
angular.module('lastfmAnalysisApp')
    .directive('barchart', function () {

        return {
            template: '<div></div>',
            restrict: 'E',
            scope: {
                title: '@',
                name:  '@',
                categories: '=',
                data: '='
            },
            link: function (scope, element) {
                function renderChart() {
                    Highcharts.chart(element[0], {
                        chart: {
                            type: 'bar'
                        },
                        title: {
                            text: scope.name
                        },
                        subtitle: {
                            text: 'Source: <a href="http://www.last.fm">Last.fm</a>'
                        },
                        xAxis: {
                            categories: scope.categories,
                            title: {
                                text: null
                            }
                        },
                        yAxis: {
                            min: 0,
                            title: {
                                text: scope.title,
                                align: 'high'
                            },
                            labels: {
                                overflow: 'justify'
                            }
                        },
                        tooltip: {
                            valueSuffix: ' scrobbles'
                        },
                        plotOptions: {
                            bar: {
                                dataLabels: {
                                    enabled: true
                                }
                            }
                        },
                        legend: {
                            layout: 'vertical',
                            align: 'right',
                            verticalAlign: 'top',
                            x: -40,
                            y: 80,
                            floating: true,
                            borderWidth: 1,
                            backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
                            shadow: true
                        },
                        credits: {
                            enabled: false
                        },
                        series: [{
                            data: scope.data
                        }]
                    })
                }
                scope.$watchGroup(['categories', 'data'], function() {
                    renderChart();
                }, true);

            }
        };
    });
