
$(document).ready(function(){

        //On docuement ready call the tableData function to populate table
          tableData();

        //On document ready create a function listening for the submit button click event
          $('.classAdd').submit(function(e){
            var writeData = $('.classAdd');
          //AJAX POST call to write to the database on form submit
            $.ajax({
              type: writeData.attr('method'),
              url: writeData.attr('action'),
              data: writeData.serialize(),
              success: function(response){
              //Once data is successfully written to the database call the table data function to refresh the table on the page
                tableData();
              //Reset the form after click and successfull database write
                $('.classAdd')[0].reset();
              }
            });
            e.preventDefault();
          });

        //Create a function to populate the table on the page
          function tableData(){
          //AJAX GET call to get the full database data
            $.ajax({
              type: 'GET',
              url: 'classTimeline.php',
              success: function(response){
              //Remove all divs in the skillsList
                $('.skillsList div').remove();
              //Create a function that finds all option tags in category id except the first and iterates through them
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
