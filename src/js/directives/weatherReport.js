module.exports = function () {
  return {
    restrict: 'E',
    templateUrl: 'views/directives/weather-report.html',
    replace: true,
    scope: {
      weatherDay: '=',
      convertToStandard: '&',
      convertToDate: '&',
      dateFormat: '@'
    }
  };
};
