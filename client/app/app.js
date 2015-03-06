'use strict';

angular.module('rappleApp', [
  'ngRoute'
])
  .config(function ($routeProvider, $locationProvider) {
  $routeProvider
    .otherwise({
    redirectTo: '/'
  });

  $locationProvider.html5Mode(true);
});