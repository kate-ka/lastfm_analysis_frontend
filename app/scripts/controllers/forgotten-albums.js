'use strict';

/**
 * @ngdoc function
 * @name lastfmAnalysisApp.controller:ForgottenAlbumsCtrl
 * @description
 * # ForgottenAlbumsCtrl
 * Controller of the lastfmAnalysisApp
 */
angular.module('lastfmAnalysisApp')
  .controller('ForgottenAlbumsCtrl', ['$http', '$stateParams',function ($http, $stateParams) {
        var vm = this;
        vm.$stateParams = $stateParams;
         vm.forgotten_albums = [];

        vm.model = {};

        vm.onYearSubmit = function() {
            //debugger;
            //alert(vm.model.yearFrom);
            var promise = $http.get('http://127.0.0.1:8000/api-v1/users/' + $stateParams.username + '/forgotten_albums/?from_date=' + vm.model.yearFrom);
            promise = promise.then(function(response) {
                vm.forgotten_albums = response.data.forgotten_albums
                console.log(vm.forgotten_albums)

            })
        }
  }]);
