export default class ForecastCtrl {
  constructor($scope, $routeParams, CityService, WeatherService) {
    $scope.city = CityService.get();
    $scope.days = $routeParams.days || 2;
    $scope.weatherResult = WeatherService.getWeather($scope.city, $scope.days);
    $scope.convertToFahrenheit = this.convertToFahrenheit;
    $scope.convertToDate = this.convertToDate;
  }

  convertToFahrenheit(degreesKelvin) {
    return Math.round((1.8 * (degreesKelvin - 273)) + 32);
  }

  convertToDate(datetime) {
    return new Date(datetime * 1000);
  }
}

ForecastCtrl.$inject = ['$scope', '$routeParams', 'CityService', 'WeatherService'];
