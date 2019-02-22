$(document).ready(function() {
// Adding the event fot the first div on the click
  $('.first').on('click', function(e){
    
    $('.click_me').css({'display':'none'});
    $('#second').css({'display':'block'});
  });

      // Event on click for the second div
      var div2 = $('#second');
      div2.on('click', function(e){

          var row3 = $('<div class="row three"></div>');
          $('.container').append(row3);

          var div3 = $('<div class="col-lg-3 col-offset-6 third div_secondaires"></div>').show().fadeIn('slow').text('And I wish you');
          $('.third').css({'background':'#28a3cc'});
          $('.three').append(div3);
          
          // Event on click on the third
          div3.on('click', function(e){
              var row4 = $('<div class="row four"></div>');
              $('.container').append(row4);
          
              var div4 = $('<div class="col-lg-3 col-offset-6 fourth div_secondaires"></div>').text('All the best in the world !');
              div4.css({'background-color':'#ffb545'});
              row4.append(div4);

              // And the last event on click on the last div
              div4.on('click', function(e){
                $('.second, .third, .fourth').text('HAPPY BIRTHDAY !');

              
          });
      });
    });
});