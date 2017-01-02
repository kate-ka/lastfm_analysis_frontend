'use strict';

describe('Controller: TopAlbumsByYearChartCtrl', function () {

  // load the controller's module
  beforeEach(module('lastfmAnalysisApp'));

  var TopAlbumsByYearChartCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TopAlbumsByYearChartCtrl = $controller('TopAlbumsByYearChartCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(TopAlbumsByYearChartCtrl.awesomeThings.length).toBe(3);
  });
});
