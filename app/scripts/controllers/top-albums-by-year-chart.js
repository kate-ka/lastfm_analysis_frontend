'use strict';

/**
 * @ngdoc function
 * @name lastfmAnalysisApp.controller:TopAlbumsByYearChartCtrl
 * @description
 * # TopAlbumsByYearChartCtrl
 * Controller of the lastfmAnalysisApp
 */
angular.module('lastfmAnalysisApp')
  .controller('TopAlbumsByYearChartCtrl', ['$http', '$stateParams', function ($http, $stateParams) {
        var vm = this;
        vm.topAlbums = [];
        vm.$stateParams = $stateParams;

        var promise = $http.get('http://127.0.0.1:8000/api-v1/users/' + $stateParams.username + '/top-albums-by-years/');
        promise = promise.then(function(response) {
            vm.topAlbums = response.data.top_albums;

        })


  }]);
