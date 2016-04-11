export default class ForecastCtrl {
  constructor($scope, $routeParams, CityService, WeatherService) {
    $scope.city = CityService.getCity();
    $scope.days = $routeParams.days || 2;
    $scope.weatherResult = WeatherService.getWeather($scope.city, $scope.days);
    $scope.convertToFahrenheit = this.convertToFahrenheit;
    $scope.convertToDate = this.convertToDate;
  }

  convertToFahrenheit(degreesKelvin) {
    const degreesFahrenheit = Math.round((1.8 * (degreesKelvin - 273)) + 32);

    return `${degreesFahrenheit} ºF`;
  }

  convertToDate(datetime) {
    return new Date(datetime * 1000);
  }
}

ForecastCtrl.$inject = ['$scope', '$routeParams', 'CityService', 'WeatherService'];
