'use strict';

angular.module('rappleApp')
  .controller('MainCtrl', function ($scope, $http, $interval) {
  $scope.applicants = [ 'Aziz' , 'his bro ' , 'Samer' , ' Samer 2',  'Aziz' , 'his bro ' , 'Samer' , ' Samer 2',  'Aziz' , 'his bro '];


  var today = new Date();
  var resultsDate = new Date(today.getFullYear(), 3, 5, 17, 40 , 40);

  $scope.counter= Math.ceil((resultsDate.valueOf()-today.valueOf())/1000)

  var interval = $interval( function(){
    if ($scope.counter === 0){
      $interval.cancel(interval);
      $http.get('/api/getRandom?max=10').success(function(response) {
        console.log(response);
        $scope.winner = $scope.applicants[response.winnerIndex];
        $scope.runnerUp = $scope.applicants[response.runnerUpIndex];
      });
      
      return ;
    }
    $scope.counter--;
  }, 1000);


});
