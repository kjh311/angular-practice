var app = angular.module("myApp", ['ngResource']);

  app.run(function($rootScope) {
    $rootScope.color = 'blue';
  });

  app.filter('makeUppercase', function () {
  return function (item) {
    return item.toUpperCase();
  };
});


app.controller("myCtrl", ['$scope', '$http', '$location',   'userService', 'kevinService',  function($scope, $http, $location, userService, kevinService, other, makeUppercase) {
    $scope.other = other;

    $scope.firstName = "John";
    $scope.lastName = "Doe";

    // $scope.doIt = function(){
    //   userService.firstFunction();
    // }
    $scope.service = function(){
      kevinService.text();
    }



   $scope.Mahesh = {};
   $scope.Mahesh.name = "Mahesh Parashar";
   $scope.Mahesh.rollno  = 1;

   $scope.Piyush = {};
   $scope.Piyush.name = "Piyush Parashar";
   $scope.Piyush.rollno  = 2;

// app.factory('other', function ($resource) {
//     return $resource('http://jsonplaceholder.typicode.com/users/:user',{user: "@user"});
// });

  // var key = userService.keyMaster();

  function MyCtrl($scope, userService) {
    var key = userService.key;
    $scope.key = userService.key;
}

  $http.get("https://api.themoviedb.org/3/movie/76341?api_key="+userService.key+"").success(function(data) {
    $scope.movieStuff = data;
  });

  $http.get("http://jsonplaceholder.typicode.com/users").success(function(data) {
    $scope.items = data;
  });

  $http.get("http://jsonplaceholder.typicode.com/photos").success(function(data) {
    $scope.photos = data;
  });

var absUrl = $location.absUrl();
// alert(absUrl);

// $locationProvider.html5Mode(true).hashPrefix('*');



$scope.user = 'Todd Motto';

   $scope.master = {};

      $scope.update = function(user) {
        $scope.master = angular.copy(user);
      };

      $scope.reset = function() {
        $scope.user = angular.copy($scope.master);
      };

      $scope.reset();


      var put = $('#input-kev').keyup(function(){
    console.log(this.value);
  });
      $('#sub').click(function(){
    console.log(put);
});

$scope.maxlength = 5;

$scope.money = 12343.34;

}]);



