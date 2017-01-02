'use strict';

/**
 * @ngdoc function
 * @name lastfmAnalysisApp.controller:CollageCtrl
 * @description
 * # CollageCtrl
 * Controller of the lastfmAnalysisApp
 */
angular.module('lastfmAnalysisApp')
    .controller('CollageCtrl', ['$http', '$stateParams', function ($http, $stateParams) {
        var vm = this;
        vm.$stateParams = $stateParams;

        vm.collageUrl = 'http://127.0.0.1:8000/api-v1/users/' + $stateParams.username + '/photo-collage/';


    }]);
