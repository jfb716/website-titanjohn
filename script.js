$(document).ready(function(){

          jaData();
          $('.classAdd').submit(function(e){

            var jData = $('.classAdd');
            console.log(jData);
            $.ajax({
              type: jData.attr('method'),
              url: jData.attr('action'),
              data: jData.serialize(),
              success: function(response){
                console.log(response);
                jaData();
                $('.classAdd')[0].reset();
              }
            });
            e.preventDefault();
          });

          function jaData(){
            $.ajax({
              type: 'GET',
              url: 'json.php',
              success: function(response){
                  $('#classTable tr').not(':first').remove();
                  var html = '';
                  for(var i = 0; i < response.length; i++)
                              html += '<tr><td>' + response[i].class + '</td><td>' + response[i].site + '</td><td>' + response[i].category + '</td><td>' + response[i].complete + '</td><td>' + response[i].recommend + '</td></tr>';
                  $('#classTable tr').first().after(html);
                console.log(response);
              }
            });
          }

});
