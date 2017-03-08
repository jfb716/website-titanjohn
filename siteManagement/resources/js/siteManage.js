


$(document).ready(function(){

        $('.sites td').blur(function(){
          var john = $(this).text();
          var id = $(this).siblings(":first").text();
          var prop = $(this).attr('id');
          console.log(john);
          console.log(id);
          console.log(prop);
        });


});
