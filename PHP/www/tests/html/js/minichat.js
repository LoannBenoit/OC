$(document).ready(function() {
$('.chatzone').scrollTop($('.chatzone')[0].scrollHeight);
    $('#message').val('');
    M.textareaAutoResize($('#message'));
  });