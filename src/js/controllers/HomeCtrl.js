export default class HomeCtrl {
  constructor($scope, $location, CityService) {
    this.CityService = CityService;
    this.$location = $location;
    this.$scope = $scope;

    $scope.city = CityService.get();
    $scope.submit = this.submit.bind(this);
    $scope.$watch('city', this.onCityChange.bind(this));
  }

  onCityChange() {
    this.CityService.set(this.$scope.city);
  }

  submit() {
    this.$location.path('/forecast');
  }
}

HomeCtrl.$inject = ['$scope', '$location', 'CityService'];
