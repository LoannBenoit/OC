$(document).ready(function() {

var div2 = $('#second');
  div2.css({'background-color':'rgb(255, 107, 174)'});

var div3 = $('#third');
  div3.css({'background-color':'rgb(101, 197, 251)'});

var div4 = $('#fourth');
  div4.css({'background-color':'rgb(255, 172, 122)'});

var audio = $('audio')[0];

var background = $('.container-fluid');

// Adding the event fot the first div on the click
$('.first').on('click', function(e){
  $('.click_me').css({'display':'none'});
  $('#second').css({'display':'block'});
});
      
      
// Event for the second div on click
div2.on('click', function(e){
  div3.css({'display':'block'});
});

// Event for the third on click
div3.on('click', function(e){
    div4.css({'display':'block'});
});
    // And the last event on click on the last div
    div4.on('click', function(e){
      $('#second, #third, #fourth').text('HAPPY BIRTHDAY !');
      audio.play();
      background.css({'background-image':'url("images/hp.jpeg")'});
    });
    
});