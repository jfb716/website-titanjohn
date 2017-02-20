
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

                $('#category').find('option').not(':first').each(function(){
                  var className = $(this).text();
                  counter = function(classCat){
                    count = 0;
                    for( var i = 0; i < response.length; i++)
                      if (response[i].category === classCat){
                        count++;
                      }
                      return count;
                  };
                  var number = counter(className);
                  console.log(number);
                  var html = '';
                  if(number > 2){
                    badgeClass = "success";
                  }
                  else{
                    badgeClass = "warning";
                  };
                  html += '<div class="col lead">' + '<span class="badge badge-' + badgeClass + '">' + className + ' ' + '<span class="badge badge-default">' + number + '</span>' + '</span>' + '</div>';
                  $('.skillsList').append(html);
                });

                $('.timeline .card-block').each(function(){
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
                      html += '<li class="list-group-item list-group-item-action initialism list-group-item-' + styleAdd + '">' + response[i].class + '</li>';
                      $(this).find('.list' + text).append(html);
                });

                $('.timeline .card').each(function(){
                  listSize = $(this).find('li').length;
                  var html2 = '';
                  html2 += '<div class="card-footer lead"><small class="text-muted h5">Total Classes: ' + '<span class="badge badge-warning badge-pill">' + listSize + '</span></small></div>'
                  $(this).find('.card-block').parent().append(html2);
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
