app.factory('userService', [function(){

var blah = {};
  blah.firstFunction = function () {
    $("#demo").html("This text is userService through a factory and connected to the dom with $scope!");
  };

return blah;
}]);
