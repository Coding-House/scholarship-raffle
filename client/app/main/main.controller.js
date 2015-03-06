'use strict';

angular.module('rappleApp')
  .controller('MainCtrl', function ($scope, $http, $interval) {
  $scope.applicants = ['Jon Doe' ,
                       'Jane Doe' ,
                       'Carole Doe' ,
                       'Applicant 2' ,
                       'Applicant 3' ,
                       'Applicant 4' ,
                       'Applicant 5' ,
                       'Applicant 6' ,
                       'Applicant 7' ,
                       'Applicant 8'
                      ];
  var dateDiffInSeconds= function (a, b) {
    console.log(a , b);
    var utc1 = a.getTime();
    var utc2 = b.getTime();
    return Math.floor((utc2 - utc1) / 1000);
  }


  var today = new Date();
  var resultsDate = new Date(Date.UTC(2015, 2, 6, 20, 0 , 0)); // results will be on March 6 at noon PST or 8 pm UTC

  $scope.counter= dateDiffInSeconds(today, resultsDate);
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
