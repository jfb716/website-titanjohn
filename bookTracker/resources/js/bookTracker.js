
$(document).ready(function(){

          bookData();

          function bookData(){
            $.ajax({
              type: 'GET',
              url: './resources/php/booksPull.php',
              success: function(response){
                $('.books div').remove();
                console.log(response);
                  var html = '';
                  for(var i = 0; i < response.length; i++)
                    html += '<div class="card card-inverse">' + '<div class="card-header">' + response[i].cat + '</div>' + '<div class="card-block">' + '<h4 class="card-title">' +  response[i].title + '</h4>' + '<p class="card-text">' + response[i].auth + '</p>' + '<p class="card-text">' + response[i].byear + '</p>' + '<p class="card-text">' + '<small class="text-muted">' + response[i].isbn + '</small>' + '</p>' + '</div>' + '<div class="card-footer">' + '<small class="text-muted">' + response[i].ryear + '</small>' + '</div>' + '</div>';
                  $('.books').append(html);
              }
            });
          };


});
