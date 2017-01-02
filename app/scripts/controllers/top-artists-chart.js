'use strict';

/**
 * @ngdoc function
 * @name lastfmAnalysisApp.controller:TopArtistsChartCtrl
 * @description
 * # TopArtistsChartCtrl
 * Controller of the lastfmAnalysisApp
 */
angular.module('lastfmAnalysisApp')
    .controller('TopArtistsChartCtrl', ['$http', '$stateParams', function ($http, $stateParams) {
        var vm = this;
        vm.chartData = [];
        vm.$stateParams = $stateParams;

        var promise = $http.get('http://127.0.0.1:8000/api-v1/users/' + $stateParams.username + '/top-artists/');

        promise = promise.then(function (response) {
            //console.log(response.data);
            var chartData = [];
            var top_artists = response.data.artists;
            for (var i = 0; i < top_artists.length; i++) {
                var chartItem = {
                    name: top_artists[i]['name'],
                    y: parseInt(top_artists[i]['plays'])
                };
                chartData.push(chartItem)
            }

            vm.chartData = chartData;


            //console.log(chartData);
        }).catch(function (response) {
                alert('errror');
                console.log(response);
        });


    }]
);