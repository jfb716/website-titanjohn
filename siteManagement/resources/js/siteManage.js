
$(document).ready(function(){
        $('.idCol').hide();
        $('tr:odd').addClass('alert bg-danger');

        $('.sites td').blur(function(){
          var text = $(this).text();
          var id = $(this).attr('id');
          var index = $(this).index() + 1;
          var th = $('table th:nth-child(' + index + ')').attr('id');
          $.ajax({
            type: 'POST',
            url: '/siteManagement/resources/php/update.php',
            data: {text: text, id: id, th: th},
            success: function(response){

            }
        });
      });

});
