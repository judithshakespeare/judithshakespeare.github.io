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

  $(window).bind('mousewheel DOMMouseScroll', function(e) {
    if($('.lighting').length){
      var delta = e.originalEvent.deltaY;
      if (delta < 0) {
        $('.lighting').hide();
      };
    };
  });

  // var last_pos= 0;

  // $(window).scroll(function () {
  //   var current_pos= $(this).scrollTop();
  //   if (current_pos > last_pos) {
  //     alert('down');
  //   } else {
  //     alert('up');
  //   }
  //   last_pos = current_pos;
  // });
});
