
$(document).ready(function(){

          bookData();

          function bookData(){
            $.ajax({
              type: 'GET',
              url: './resources/php/booksPull.php',
              success: function(response){
                $('.books div').remove();
                $('.books br').remove();
                  var rowNum = 1;
                  function rowAdd(){
                    rowNum += 1;
                  };

                  for(var i = 0; i < response.length; i++){
                    if(i % 3 === 0){
                      var html1 = '<div class="row book' + rowNum + '"></div><br>';
                      $('.books').append(html1);
                    };
                    html2 = '<div class="col-sm-4">' + '<div class="card card-inverse" style="background-color: #333; border-color: #333; "width: 20rem;"">' + '<div class="card-header text-center">' + response[i].cat + '</div>' + '<div class="card-block">' + '<h4 class="card-title">' +  response[i].title + '</h4>' + '<p class="card-text">' + response[i].auth + '</p>' + '<p class="card-text">' + 'Published: ' + response[i].byear + '</p>' + '<p class="card-text">' + '<small class="text-muted">' + 'ISBN: ' + response[i].isbn + '</small>' + '</p>' + '</div>' + '<div class="card-footer text-center">' + response[i].ryear + '</div>' + '</div>' + '</div>';
                    $('.book' + rowNum).append(html2);
                    if((i + 1) % 3 === 0){
                      rowAdd();
                    };
                };

              }
            });
          };


          $('.bookAdd').submit(function(e){
            var writeData = $('.bookAdd');
            $.ajax({
              type: writeData.attr('method'),
              url: writeData.attr('action'),
              data: writeData.serialize(),
              success: function(response){
                $('.bookAdd')[0].reset();
                bookData();
              }
            });
            e.preventDefault();
          });


});
