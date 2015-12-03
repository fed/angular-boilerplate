'use strict';

angular
  .module('foxApp', ['ngRoute'])
  .config(function ($routeProvider) {

    // Routing
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
