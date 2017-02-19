
$(document).ready(function(){

          tableData();
          $('.classAdd').submit(function(e){
            var writeData = $('.classAdd');
            console.log(writeData);
            $.ajax({
              type: writeData.attr('method'),
              url: writeData.attr('action'),
              data: writeData.serialize(),
              success: function(response){
                console.log(response);
                tableData();
                $('.classAdd')[0].reset();
              }
            });
            e.preventDefault();
          });

          function tableData(){
            $.ajax({
              type: 'GET',
              url: 'classTimeline.php',
              success: function(response){

                $('.card-block').each(function(){
                  $(this).find('li').remove();
                  var text = $(this).find('h3').text();
                  switch (text) {
                    case "2015":
                      styleAdd = "success";
                      break;
                    case "2016":
                      styleAdd = "info";
                      break;
                    case "2017":
                      styleAdd = "warning";
                      break;
                    case "2018":
                      styleAdd = "danger";
                      break;
                    default:
                      styleAdd = "success";
                  }
                  var html = '';
                  for(var i = 0; i < response.length; i++)
                  if (response[i].complete === text)
                      html += '<li class="list-group-item list-group-item-' + styleAdd + '">' + response[i].class + '</li>';
                      $('.list' + text).append(html);
                });
              }
            });


            $.ajax({
              type: 'GET',
              url: 'pageOne.php',
              success: function(response){

                  $('#classTable tr').not(':first').remove();
                  var html = '';
                  for(var i = 0; i < response.length; i++)
                              html += '<tr><td>' + response[i].class + '</td><td>' + response[i].site + '</td><td>' + response[i].category + '</td><td>' + response[i].complete + '</td></tr>';
                  $('#classTable tbody').append(html);
              }
            });
          }


        $('.pagination').click(function(event){
          var pageInsert = event.target.id;
            $.ajax({
              type: 'GET',
              url: pageInsert + '.php',
              success: function(response){
                  $('#classTable tr').not(':first').remove();
                  var html = '';
                  for(var i = 0; i < response.length; i++)
                              html += '<tr><td>' + response[i].class + '</td><td>' + response[i].site + '</td><td>' + response[i].category + '</td><td>' + response[i].complete + '</td></tr>';
                  $('#classTable tbody').append(html);
              }
            });
        });

});
