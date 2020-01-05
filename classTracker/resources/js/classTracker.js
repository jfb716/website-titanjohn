
$(document).ready(function(){
          var key = localStorage.getItem("key");
          if(key != 'black'){
            $('.btn').remove();
          };
          yearList();
          catList();
          tableData();

          function yearList(){
            $.ajax({
              type: 'GET',
              url: './resources/php/yearPull.php',
              success: function(response){
                $('.yearList option').not(':first').remove();
                  for(var i = 0; i < response.length; i++){
                    html = '<option value="' + response[i].year + '">' + response[i].year + '</option>';
                    $('.yearList').append(html);
                };

              }
            });
          };

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

          $('.classAdd').submit(function(e){
            var writeData = $('.classAdd');
            $.ajax({
              type: writeData.attr('method'),
              url: writeData.attr('action'),
              data: writeData.serialize(),
              success: function(response){
                tableData();
                $('.classAdd')[0].reset();
              }
            });
            e.preventDefault();
          });

          function tableData(){
            $.ajax({
              type: 'GET',
              url: '/classTracker/resources/php/classTimeline.php',
              success: function(response){
                $('.skillsList div').remove();
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
                  var html = '';
                  if(number > 2){
                    badgeClass = "success";
                  }
                  else{
                    badgeClass = "warning";
                  };
                  html += '<div class="col lead">' + '<span class="badge badge-pill badge-' + badgeClass + '">' + className + ' ' + '<span class="badge badge-default badge-pill">' + number + '</span>' + '</span>' + '</div>';
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
                    case "2020":
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
                  $(this).find('.card-footer').remove();
                  listSize = $(this).find('li').length;
                  var html2 = '';
                  html2 += '<div class="card-footer lead"><small class="text-muted h5">Total Classes: ' + '<span class="badge badge-warning badge-pill">' + listSize + '</span></small></div>'
                  $(this).find('.card-block').parent().append(html2);
                });
              }
            });


            $.ajax({
              type: 'GET',
              url: '/classTracker/resources/php/pagination.php',
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
          var pageNum = $(event.target).html();
            $.ajax({
              type: 'GET',
              url: '/classTracker/resources/php/pagination.php',
              data: {page: pageNum},
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
