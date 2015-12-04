//For tests

var app = angular.module('appTest', []);

app.controller('controlleurTest', function($scope) {
    $scope.leString = 'EZ';
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
