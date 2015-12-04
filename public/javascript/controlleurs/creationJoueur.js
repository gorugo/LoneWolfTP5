angular.module('creationJoueur', []).
controller('controlleurCreationJoueur', function($scope, $http) {

  $scope.getJoueursExistants = function () {
    $http.get('/api/joueurs/').
      success(function(data, status, headers, config) {

        console.log("success!");
        console.log(data);
        $scope.joueurs = data;
        console.log($scope.joueurs);
      }).
      error(function(data, status, headers, config) {
        console.log("error");
      });
  }

  $scope.getJoueursExistants();
});
