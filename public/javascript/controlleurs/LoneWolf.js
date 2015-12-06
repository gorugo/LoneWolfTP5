var app = angular.module('LoneWolf', []);

app.controller('controlleurHistoire', function($scope, $http, $sce) {

    var avancementId = window.localStorage["avancementId"];
    var joueurId = window.localStorage["joueurId"];
    var avancement = { pagesId : 1, sectionId : 1};
    $scope.histoire = '';

    $scope.continue = function () {
        var html = '';
        $http.get('/api/pages/' + avancement.pagesId + '/' + avancement.sectionId).
            success(function(data, status, headers, config) {
                console.log(window.localStorage["Test"]);
                // Add html depending on text or src
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
                $scope.htmlInsert = $sce.trustAsHtml(html);
            }).error(function(data, status, headers, config) {
                console.log("Erreur en chargeant le contenu de la page");
            });
    }
    $scope.continue();

});

app.controller('controlleurStats', function($scope, $http) {

  $scope.joueur = '';

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

  }
});
