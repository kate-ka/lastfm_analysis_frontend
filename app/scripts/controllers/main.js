'use strict';

/**
 * @ngdoc function
 * @name lastfmAnalysisApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the lastfmAnalysisApp
 */
angular.module('lastfmAnalysisApp')
  .controller('MainCtrl', ['$state', function ($state) {
        var vm = this;
        vm.user = {};


        vm.onFormSubmit = function(){
            $state.go('top-artists', {username: vm.user.username})

        }
  }]);
