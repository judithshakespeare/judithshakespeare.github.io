$(document).ready(function(){

    setTimeout(function() {
    $('#loading').hide();
    // $('main').show();
  }, 2800);

  $('.work-image').on('scroll', function() {
    if($(this).scrollTop() + $(this).innerHeight() >= $(this)[0].scrollHeight) {
      $('.lighting').show();
    };
  });

  $(window).on('wheel', function(e) {
    if($('.lighting').length){
      var delta = e.originalEvent.deltaY;
      if (delta < 0) {
        $('.lighting').hide();
      };
    };
  });
});