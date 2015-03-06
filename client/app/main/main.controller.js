'use strict';

Number.prototype.pad = function(size) {
  var s = String(this);
  while (s.length < (size || 2)) {s = "0" + s;}
  return s;
}

angular.module('rappleApp')
.controller('MainCtrl', function ($scope, $http, $interval) {
  $scope.applicants = [
    'SarahJessica Leivers',
    'Andreca Sergiu',
    'Evan Gatchell',
    'Felix Oyoo Omondi',
    'Renee Osbourne',
    'Frank Velasquez',
    'Kasey Robinson',
    'Kathy Wheeler',
    'Gerald Anekwe',
    'Luke Bickell'
  ];

  var dateDiffInSeconds = function (a, b) {
    return Math.floor((b - a) / 1000);
  }

  var today = new Date();
  var resultsDate = new Date(Date.UTC(2015, 2, 6, 20, 30 , 0)); // results will be on March 6 at 12:30 pm PST - 8:30 pm UTC

  var clock = function () {
    var delta = $scope.counter;
    var days = Math.floor(delta / 86400);
    delta -= days * 86400;
    var hours = Math.floor(delta / 3600);
    delta -= hours * 3600;
    var minutes = Math.floor(delta / 60);
    delta -= minutes * 60;
    var seconds = Math.floor(delta);

    $scope.days = days.pad();
    $scope.hours = hours.pad();
    $scope.minutes = minutes.pad();
    $scope.seconds = seconds.pad();
  }

  $scope.counter = dateDiffInSeconds(today, resultsDate);
  $scope.winner = "...."
  $scope.runnerUp = "...."

  clock();

  var interval = $interval( function() {
    if ($scope.counter === 0) {
      $interval.cancel(interval);
      $http.get('/api/getRandom?max=10').success(function(response) {
        $scope.winner = $scope.applicants[response.winnerIndex];
        $scope.runnerUp = $scope.applicants[response.runnerUpIndex];
      });
      return ;
    }
    $scope.counter--;
    clock();
  }, 1000);

});
