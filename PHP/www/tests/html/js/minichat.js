$(document).ready(function() {
    $(".chatzone").animate({ scrollTop: $('.chatzone').prop("scrollHeight")}, 400);
    $('#message').val('');
    M.textareaAutoResize($('#message'));
  });