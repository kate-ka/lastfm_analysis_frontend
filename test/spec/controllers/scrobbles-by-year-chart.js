'use strict';

describe('Controller: ScrobblesByYearChartCtrl', function () {

  // load the controller's module
  beforeEach(module('lastfmAnalysisApp'));

  var ScrobblesByYearChartCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ScrobblesByYearChartCtrl = $controller('ScrobblesByYearChartCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ScrobblesByYearChartCtrl.awesomeThings.length).toBe(3);
  });
});
