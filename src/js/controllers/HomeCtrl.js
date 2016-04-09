'use strict';

module.exports = function ($scope, $location, CityService) {
  $scope.city = CityService.city;

  $scope.$watch('city', function () {
    CityService.city = $scope.city;
  });

  $scope.submit = function () {
    $location.path('/forecast');
  };
};
