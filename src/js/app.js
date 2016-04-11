import angular from 'angular';
import ngRoute from 'angular-route';
import ngResource from 'angular-resource';

import HomeCtrl from './controllers/HomeCtrl';
import ForecastCtrl from './controllers/ForecastCtrl';
import weatherReport from './directives/weatherReport';
import CityService from './services/CityService';
import WeatherService from './services/WeatherService';

// Module definition and dependencies
const app = angular.module('weatherApp', [
  ngRoute,
  ngResource
]);

// Services
app.service('CityService', CityService);
app.service('WeatherService', WeatherService);

// Directives
app.directive('weatherReport', () => new weatherReport);

// Controllers
app.controller('HomeCtrl', HomeCtrl);
app.controller('ForecastCtrl', ForecastCtrl);

// Routing
app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/home.html',
      controller: 'HomeCtrl'
    })
    .when('/forecast', {
      templateUrl: 'views/forecast.html',
      controller: 'ForecastCtrl'
    })
    .when('/forecast/:days', {
      templateUrl: 'views/forecast.html',
      controller: 'ForecastCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
});
