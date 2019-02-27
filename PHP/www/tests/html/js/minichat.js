$(document).ready(function() {
<<<<<<< HEAD
  $(".chatzone").scrollTop($(".chatzone")[0].scrollHeight);
=======
$('.chatzone').scrollTop($('.chatzone')[0].scrollHeight);
>>>>>>> bc6c93292654c55de0e1a21c0a812addd0786c39
    $('#message').val('');
    M.textareaAutoResize($('#message'));

    var shiftDown = false;
var chatForm = $("#chat_form");
var messageBox = chatForm.children("textarea");

$(document).keypress(function (e) {
    if(e.keyCode == 13) {
        if(messageBox.is(":focus") && !shiftDown) {
            e.preventDefault(); // prevent another \n from being entered
            chatForm.submit();
        }
    }
});

$(document).keydown(function (e) {
    if(e.keyCode == 16) shiftDown = true;
});

$(document).keyup(function (e) {
    if(e.keyCode == 16) shiftDown = false;
});
  });