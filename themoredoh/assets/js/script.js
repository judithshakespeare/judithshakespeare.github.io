$(document).ready(function(){

  setTimeout(function() {
    $('#loading').hide();
  }, 2800);

  $('#sola-logo').hover(function(){
    $('#sola-logo').attr('src', 'assets/img/sola.png');
  }, function(){
    $('#sola-logo').attr('src', 'assets/img/main-logo1.png')
  });

var position = $(window).scrollTop();
$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if(scroll > position) {
        $('.description-wrapper').fadeOut();
    } else {
         $('.description-wrapper').fadeIn();
    }
    position = scroll;
});
});