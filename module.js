var app = angular.module("myApp", []);

app.controller("myCtrl", ['$scope', 'userService', 'kevinService', function($scope, userService, kevinService) {
    $scope.firstName = "John";
    $scope.lastName = "Doe";

    $scope.doIt = function(){
      userService.firstFunction();
    }
    $scope.service = function(){
      kevinService.text();
    }
}]);



