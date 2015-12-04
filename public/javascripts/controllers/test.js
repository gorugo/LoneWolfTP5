//For tests

var app = angular.module('appTest', []);

app.controller('controlleurTest', function($scope) {
    $scope.leString = 'EZ';
    $scope.salutation = { texte: 'Bonjour' };
});

// app.controller('controlleurTest',['$scope','$http',function($scope,$http)
// {
//     $http.get('/test')
//         .then(function(response){
//             $scope.leString = 'EZ';
//         },
//             function(response){
//             });
// }]);
