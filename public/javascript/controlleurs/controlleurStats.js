
angular.module('statsApp', []).
controller('controlleurStats', function($scope, $http) {

  $scope.getJoueur = function () { 
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

  $scope.getJoueur();
});

