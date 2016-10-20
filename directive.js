app.directive('student', function() {
   //define the directive object
   var directive = {};

   //restrict = E, signifies that directive is Element directive
   directive.restrict = 'E';

   //template replaces the complete element with its text.
   directive.template = "Student: <b>{{student.name}}</b> , Roll No: <b>{{student.rollno}}</b>";

   //scope is used to distinguish each student element based on criteria.
   directive.scope = {
      student : "=name"
   }
  return directive;
});
