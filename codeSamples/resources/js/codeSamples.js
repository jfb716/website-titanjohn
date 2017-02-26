
$(document).ready(function(){

          codeSamples();

          function codeSamples(){
            $.ajax({
              type: 'GET',
              url: './resources/php/samplePull.php',
              success: function(response){
                $('.list-group a').remove();
                $('.books br').remove();

                  for(var i = 0; i < response.length; i++){
                    html = '<a href="' + response[i].url + '" class="list-group-item list-group-item-action justify-content-between" target="_blank">' + response[i].title + '<span class="badge badge-default badge-pill">' + response[i].cat + '</span>' + '</a>';
                    $('.list-group').append(html);
                };

              }
            });
          };


          $('.sampleAdd').submit(function(e){
            var writeData = $('.sampleAdd');
            $.ajax({
              type: writeData.attr('method'),
              url: writeData.attr('action'),
              data: writeData.serialize(),
              success: function(response){
                $('.sampleAdd')[0].reset();
                codeSamples();
              }
            });
            e.preventDefault();
          });


});
