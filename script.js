
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


                  $('.list2015 li').remove();
                  var html2 = '';
                  for(var i = 0; i < response.length; i++)
                  if (response[i].complete === '2015')
                      html2 += '<li class="list-group-item list-group-item-success">' + response[i].class + '</li>';
                      $('.list2015').append(html2);


                  $('.list2016 li').remove();
                  var html3 = '';
                  for(var i = 0; i < response.length; i++)
                  if (response[i].complete === '2016')
                      html3 += '<li class="list-group-item list-group-item-info">' + response[i].class + '</li>';
                      $('.list2016').append(html3);

                  $('.list2017 li').remove();
                  var html4 = '';
                  for(var i = 0; i < response.length; i++)
                  if (response[i].complete === '2017')
                      html4 += '<li class="list-group-item list-group-item-warning">' + response[i].class + '</li>';
                      $('.list2017').append(html4);


                  $('.list2018 li').remove();
                  var html5 = '';
                  for(var i = 0; i < response.length; i++)
                  if (response[i].complete === '2018')
                      html5 += '<li class="list-group-item list-group-item-danger">' + response[i].class + '</li>';
                      $('.list2018').append(html5);

              }
            });
          }

});
