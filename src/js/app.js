'use strict';

var weatherApp = angular.module('weatherApp', [
    'ngRoute',
    'ngResource'
  ])
  .config(function ($routeProvider) {
    // Routing
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
