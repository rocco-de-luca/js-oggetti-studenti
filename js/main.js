/****************
    jQuery Object
 ****************/

$(document).ready(function(){
    //object
      var student ={
          name: "rocco",
          surname: "de luca",
          //age: 30
      }
  
      // add the new property and value at student object
      student.age = 30
      
      //for...in
  
      for(var key in student) {
          //property about object
          //console.log(key);
          // value about object
          //console.log(student[key]);
          //property + value about student object
          console.log(key + ":" + student[key]);
      }
  });


