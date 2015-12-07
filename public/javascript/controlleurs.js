var app = angular.module('LoneWolf', []);

app.controller('controlleurHistoire', function($scope, $http, $interpolate, $sce) {

  var joueurId = window.localStorage["joueurId"];
  var avancement = { pagesId : 1, sectionId : 1};
  var activePage = {};
  var html = '';

  $scope.continue = function () {
    //    activePage.
    console.log('Continue');
  }

  $scope.getPage = function () {
    $http.get('/api/pages/' + avancement.pagesId + '/' + avancement.sectionId).
    success(function(data, status, headers, config) {
      console.log(window.localStorage["Test"]);
      // Add html depending on text or src
      activePage = data;

      for (var i  = 0; i < data.contenu.length; i ++) {
        if(data.contenu[i]['text'] != undefined) {
          html += '<p>' + data.contenu[i]['text'] + '</p>';
        }
        else if(data.contenu[i]['img'] != undefined) {
          html += '<img src=\"' + data.contenu[i]['img'] + '\" />';
        }
      }
      console.log(html);
      // Add html to the page
      //$scope.htmlInsert = $sce.trustAsHtml(html);
      $scope.htmlInsert = $sce.trustAsHtml($interpolate(html)($scope));
    }).error(function(data, status, headers, config) {
      console.log("Erreur en chargeant le contenu de la page");
    });
  }


  $scope.getPage();
});

app.controller('controlleurStats', function($scope, $http) {

  var joueurId = window.localStorage["joueurId"];

  console.log("Recovered from localStorage : " + $scope.joueurId);
  $scope.getJoueur = function () {
    $http.get('/api/joueurs/' + joueurId ).
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

app.controller('controlleurCreationJoueur', function($scope, $http) {

  $scope.joueurs = {};

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

  $scope.selectJoueur = function (index) {
    console.log('Index : ' + index);
    console.log('Joueur choisi : ' + $scope.joueurs[index].nom);

    // Store chosen character
    window.localStorage["joueurId"] = $scope.joueurs[index]._id;

    // Redirect
    window.location = '/jeu/1';
  }


  $scope.supprimerJoueur = function (index) {
    console.log("Supprimer : " + $scope.joueurs[index].nom);

    $http.delete('/api/joueurs/' + $scope.joueurs[index]._id).
    success(function(data, status, headers, config) {

      console.log("Joueur supprimé!");

      console.log(data);
      $scope.joueurs = data;
      console.log($scope.joueurs);

      $scope.getJoueursExistants();
    }).
    error(function(data, status, headers, config) {
      console.log("error");
    });
  }

  $scope.creerJoueur = function () {
    console.log("Joueur créé !");
    console.log($scope);
    /*$http.post('/api/joueurs/' + joueurId, {nomJoueur : $scope.nomJoueur} ).
    success(function(data, status, headers, config) {

    console.log("success!");
    console.log(data);
    $scope.joueur = data;
  }).
  error(function(data, status, headers, config) {
  console.log("error");
});*/
}
});
