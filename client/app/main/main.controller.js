'use strict';

angular.module('rappleApp')
  .controller('MainCtrl', function ($scope, $http, $interval) {
  var today = new Date();
  var resultsDate = new Date(today.getFullYear(), 3, 6);

  $scope.counter= Math.ceil((resultsDate.getTime()-today.getTime())/1000)

  var interval = $interval( function(){
    $scope.counter--;
  }, 1000);
  $scope.applicants = [ 'Aziz' , 'his bro ' , 'Samer' , ' Samer 2',  'Aziz' , 'his bro ' , 'Samer' , ' Samer 2',  'Aziz' , 'his bro '];

  $http.get('/api/getRandom?max=10').success(function(response) {
    console.log(response);
    $scope.winner = $scope.applicants[response.winnerIndex];
    $scope.runnerUp = $scope.applicants[response.runnerUpIndex];
  });

});
