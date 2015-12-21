weatherApp.controller('ForecastCtrl', ['$scope', '$resource', '$routeParams', 'cityService', 'weatherService', function ($scope, $resource, $routeParams, cityService, weatherService) {
  $scope.city = cityService.city;
  $scope.days = $routeParams.days || '2';
  $scope.weatherResult = weatherService.getWeather($scope.city, $scope.days);

  $scope.convertToFahrenheit = function (degK) {
    return Math.round((1.8 * (degK - 273)) + 32);
  };

  $scope.convertToDate = function (dt) {
    return new Date(dt * 1000);
  };
}]);
