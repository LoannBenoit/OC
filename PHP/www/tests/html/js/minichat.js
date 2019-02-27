$(document).ready(function() {
  $(".chatzone").scrollTop($(".chatzone")[0].scrollHeight);
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