//For tests

var app = angular.module('appTest', []);

app.controller('controlleurTest', function($scope, $http) {

  $scope.getTest = function () {
    $http.get('/api/combat/12/34/1/132').
      success(function(data, status, headers, config) {

        console.log("success!");
        console.log(data);
        $scope.getVar = data;
      }).
      error(function(data, status, headers, config) {
        console.log("error");
      });

    $http.get('/api/joueurs/565c64518b7057980cb10be9').
      success(function(data, status, headers, config) {

      console.log("success!");
      console.log(data);
      $scope.joueur = data;
    }).
    error(function(data, status, headers, config) {
      console.log("error");
    });
  }

  $scope.leString = 'EZ';
  $scope.salutation = { texte: 'Bonjour' };
});
