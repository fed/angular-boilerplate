export default class WeatherReport {
  constructor() {
    this.templateUrl = 'views/directives/weather-report.html';
    this.restrict = 'E';
    this.replace = true;
    this.scope = {
      weatherDay: '=',
      convertToStandard: '&',
      convertToDate: '&',
      dateFormat: '@'
    };
  }
}
