$(document).ready(function() {

    var row2 = $('<div class="row deux"></div>');
    $('.container').append(row2);
    row2.css({'height':'120px'});

    var div2 = $('<div class="col-lg-2 col-offset-6 second"></div>').text('You\'re a great friend');
    div2.css({'height':'70px', 'background-color':'#DD75DD', 'border':'2px solid black'});
    $('.deux').append(div2);

    
    $('.second').css({'margin':'0px auto'});
});