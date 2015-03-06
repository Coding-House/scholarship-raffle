'use strict';

angular.module('rappleApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.applicants = [ 'Aziz' , 'his bro ' , 'Samer' , ' Samer 2',  'Aziz' , 'his bro ' , 'Samer' , ' Samer 2',  'Aziz' , 'his bro '];

    $http.get('/api/getRandom?max=10').success(function(response) {
      console.log(response);
      $scope.winner = $scope.applicants[response.winnerIndex];
      $scope.runnerUp = $scope.applicants[response.runnerUpIndex];
    });

  });
