'use strict';

describe('Controller: CollageCtrl', function () {

  // load the controller's module
  beforeEach(module('lastfmAnalysisApp'));

  var CollageCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CollageCtrl = $controller('CollageCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CollageCtrl.awesomeThings.length).toBe(3);
  });
});
