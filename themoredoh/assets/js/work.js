$(document).ready(function(){

  setTimeout(function() {
    $('#loading').hide();
  }, 2800);

  $('.work-image').on('scroll', function() {
    if($(this).scrollTop() + $(this).innerHeight() >= $(this)[0].scrollHeight) {
      $('.lighting').show();
    };
  });

  var position = $(window).scrollTop();
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if(scroll > position) {
      $('.lighting').hide();
    };
    position = scroll;
  });

});