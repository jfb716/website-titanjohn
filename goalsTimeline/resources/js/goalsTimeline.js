$(document).ready(function(){

  goalsTimeline();

  function goalsTimeline(){

    $.ajax({
      type: 'GET',
      url: '/goalsTimeline/resources/php/goalsTimeline.php',
      success: function(response){

          $('.table tr').not(':first').remove();

          var tabArray = [];

          for(var i = 0; i <response.length; i++){
            var cat = response[i].category;
            var inTabArray = $.inArray(cat, tabArray);

            if (inTabArray < 0) {
              tabArray.push(cat);
            }
          };


          for (var i = 0; i < tabArray.length; i++) {
            cat1 = tabArray[i];

            fif = ' ';
            six = ' ';
            sev = ' ';
            eig = ' ';

            for (var j = 0; j < response.length; j++) {
              cat2 = response[j].category;
              yer = response[j].complete;
              if (cat1 === cat2) {
                switch (yer) {
                  case "2015":
                    fif = "btn-success";
                    break;
                  case "2016":
                    six = "btn-success";
                    break;
                  case "2017":
                    sev = "btn-success";
                    break;
                  case "2018":
                    eig = "btn-success";

                }
              };
            }

                var html = '';
                html += '<tr><td>' + cat1 + '</td><td class="' + fif + '"></td><td class="' + six + '"></td><td class="' + sev + '"></td><td class="' + eig +'"></td></tr>';

                $('.table tbody').append(html);

            };

      }
    });

  };

});
