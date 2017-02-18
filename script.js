$(document).ready(function(){

var data = {};
data.d = [{className: 'Cron Jobs', siteName: 'Udemy', category: 'Scripting', completeDate: '02/25/2017', recommend: 'Yes'},
          {className: 'Bootstrap 4', siteName: 'Udemy', category: 'CSS3', completeDate: '02/20/2017', recommend: 'No'},
          {className: 'Website Building', siteName: 'Udemy', category: 'HTML5', completeDate: '02/30/2017', recommend: 'Yes'},
          {className: 'Beginners Guide to Ruby on Rails', siteName: 'Udemy', category: 'Ruby on Rails', completeDate: '02/25/2017', recommend: 'Yes'},
          {className: 'Ruby', siteName: 'Codecademy', category: 'Ruby', completeDate: '02/05/2017', recommend: 'Yes'}];

        //  jaData();
          $('.classAdd').submit(function(e){

            var jData = $('.classAdd');

            $.ajax({
              type: jData.attr('method'),
              url: jData.attr('action'),
              data: jData.serialize(),
              success: function(response){
                console.log(response);
              //  jaData();
              }
            });
            e.preventDefault();
          });
/*
          function jaData(){
            $('#firstName, #lastName, #age').empty();
            $.ajax({
              type: 'GET',
              url: 'json.php',
              success: function(response){
                $.each(response, function(index){
                  console.log(response[index].firstName, response[index].lastName, response[index].age);
                  $('#firstName').append(response[index].firstName);
                  $('#lastName').append(response[index].lastName);
                  $('#age').append(response[index].age);
                });
                console.log(response);
              }
            });
          }
*/



$('#classTable tr').not(':first').remove();
var html = '';
for(var i = 0; i < data.d.length; i++)
            html += '<tr><td>' + data.d[i].className + '</td><td>' + data.d[i].siteName + '</td><td>' + data.d[i].category + '</td><td>' + data.d[i].completeDate + '</td><td>' + data.d[i].recommend + '</td></tr>';
$('#classTable tr').first().after(html);

});
