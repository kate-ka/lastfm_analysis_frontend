'use strict';

describe('Controller: TopArtistsChartCtrl', function () {

  // load the controller's module
  beforeEach(module('lastfmAnalysisApp'));

  var TopArtistsChartCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TopArtistsChartCtrl = $controller('TopArtistsChartCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(TopArtistsChartCtrl.awesomeThings.length).toBe(3);
  });
});
