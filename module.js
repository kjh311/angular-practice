var app = angular.module("myApp", []);

app.controller("myCtrl", ['$scope', 'userService', function($scope, userService) {
    $scope.firstName = "John";
    $scope.lastName = "Doe";

    $scope.doIt = function(){
      userService.firstFunction();
    }
}]);



app.factory('userService', [function(){

var blah = {};
  blah.firstFunction = function () {
    alert('userService through factory!');
  };

return blah;
}]);
