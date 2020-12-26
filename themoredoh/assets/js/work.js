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

  var lastPoint = null; //global

$('.work-image').on('touchend', function(e){

    var currentPoint = e.originalEvent.changedTouches[0].pageY;

    if(lastPoint != null && lastPoint < currentPoint ){

    }else if(lastPoint != null && lastPoint > currentPoint){
        if($('.lighting').length){
      var delta = e.originalEvent.deltaY;
      if (delta < 0) {
        $('.lighting').hide();
      };
    };
    }

    lastPoint = currentPoint;
});
});
