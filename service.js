app.service('kevinService', [function(){

var blah2 = {};
blah2.text = function () {
  $('#service').html("This text is created in a service, connected to the controller through dependency injection, then connected to the dom through Scope!!");
};

return blah2;
}]);
