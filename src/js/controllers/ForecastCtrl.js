module.exports = function ($scope, $resource, $routeParams, CityService, WeatherService) {
  $scope.city = CityService.city;
  $scope.days = $routeParams.days || '2';
  $scope.weatherResult = WeatherService.getWeather($scope.city, $scope.days);

  $scope.convertToFahrenheit = function (degK) {
    return Math.round((1.8 * (degK - 273)) + 32);
  };

  $scope.convertToDate = function (dt) {
    return new Date(dt * 1000);
  };
};
