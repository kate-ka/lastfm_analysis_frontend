'use strict';

/**
 * @ngdoc function
 * @name lastfmAnalysisApp.controller:ScrobblesByYearChartCtrl
 * @description
 * # ScrobblesByYearChartCtrl
 * Controller of the lastfmAnalysisApp
 */
angular.module('lastfmAnalysisApp')
    .controller('ScrobblesByYearChartCtrl', ['$http','$stateParams', function ($http, $stateParams) {
        var vm = this;
        vm.chartScrobbles = [];
        vm.chartYears = [];
        vm.$stateParams = $stateParams;

        var promise = $http.get('http://127.0.0.1:8000/api-v1/users/' + $stateParams.username + '/total-by-years/');

        promise = promise.then(function(response) {
            //console.log(response.data);
            var chartScrobbles = [];
            var chartYears = [];
            var scrobblesByYears = response.data['scrobbles'];
            for (var i = 0; i < scrobblesByYears.length; i++) {
                var chartScrobble = scrobblesByYears[i]['scrobbles'];

                var chartYear = scrobblesByYears[i]['year'];

                chartYears.push(chartYear);

                chartScrobbles.push(chartScrobble);

            }
             vm.chartScrobbles = chartScrobbles;
                vm.chartYears = chartYears;
        }).catch(function(response) {
            alert('error');

        });
    }]
);
