'use strict';

var angular = require('angular');

// Module definition and dependencies
var app = angular.module('weatherApp', [
  require('angular-route'),
  require('angular-resource')
]);

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

// Services
app.service('CityService', require('./services/cityService'));
app.service('WeatherService', require('./services/weatherService'));

// Directives
app.directive('weatherReport', require('./directives/weatherReport'));

// Controllers
app.controller('HomeCtrl', require('./controllers/HomeCtrl'));
app.controller('ForecastCtrl', require('./controllers/ForecastCtrl'));
