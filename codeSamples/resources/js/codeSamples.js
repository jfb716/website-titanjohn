$(document).ready(function(){
          var key = localStorage.getItem("key");
          if(key != 'black'){
            $('.btn').remove();
          };
          catList();
          codeSamples();

          function catList(){
            $.ajax({
              type: 'GET',
              url: './resources/php/catPull.php',
              success: function(response){
                $('.catList option').not(':first').remove();

                  for(var i = 0; i < response.length; i++){
                    html = '<option value="' + response[i].cat + '">' + response[i].cat + '</option>';
                    $('.catList').append(html);
                };

              }
            });
          };

          function codeSamples(){
            $.ajax({
              type: 'GET',
              url: './resources/php/samplePull.php',
              success: function(response){
                $('.list-group a').remove();
                $('.books br').remove();

                  for(var i = 0; i < response.length; i++){
                    if(i % 2 !== 0){
                      var style = "list-group-item-info";
                    } else {
                      style = " ";
                    }
                    html = '<a href="' + response[i].url + '" class="list-group-item list-group-item-action justify-content-between ' + style + '" target="_blank">' + response[i].title + '<span class="badge badge-default badge-pill">' + response[i].cat + '</span>' + '</a>';
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
