'use strict';

/**
 * @ngdoc overview
 * @name lastfmAnalysisApp
 * @description
 * # lastfmAnalysisApp
 *
 * Main module of the application.
 */
angular
  .module('lastfmAnalysisApp', ['ui.router'])
    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'views/main.html',
                controller: 'MainCtrl as main'
            })
            .state('top-artists', {
                url: '/user/:username/top-artists-by-year',
                templateUrl: 'views/top-artists-chart.html',
                controller: 'TopArtistsChartCtrl as ctrl'
            })
            .state('scrobbles', {
                url: '/user/:username/scrobbles-by-year-chart',
                templateUrl: 'views/scrobbles-by-year-chart.html',
                controller: 'ScrobblesByYearChartCtrl as ctrl'
            })
            .state('top-albums', {
                url: '/user/:username/top-albums-by-year',
                templateUrl: 'views/top-albums-by-year.html',
                controller: 'TopAlbumsByYearChartCtrl as ctrl'

            })
            .state('collage', {
                url: '/user/:username/collage',
                templateUrl: 'views/collage.html',
                controller: 'CollageCtrl as ctrl'

            })
            .state('forgotten', {
                url: '/user/:username/forgotten-albums',
                templateUrl: 'views/forgotten-albums.html',
                controller: 'ForgottenAlbumsCtrl as ctrl'

            })

    }]);
