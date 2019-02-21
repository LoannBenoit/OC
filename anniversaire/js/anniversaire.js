$(document).ready(function() {
// Adding the event fot the first div on the click
  $('.first').on('click', function(e){
    $('.click_me').css({'display':'none'});

      var row2 = $('<div class="row two"></div>');
      $('.container').append(row2);

      var div2 = $('<div class="col-lg-3 col-offset-6 second div_secondaires"></div>').text('You\'re a great friend');
      div2.css({'background-color':'#f36aad'});
      $('.two').append(div2);

      // Event on click for the second div
      div2.on('click', function(e){
          var row3 = $('<div class="row three"></div>');
          $('.container').append(row3);

          var div3 = $('<div class="col-lg-3 col-offset-6 third div_secondaires"></div>').text('And I wish you');
          div3.css({'background-color':'#28a3cc'})
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
});