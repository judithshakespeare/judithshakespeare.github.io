$(document).ready(function(){

  setTimeout(function() {
    $('#loading').hide();
  }, 2800);

  $('#sola-logo').hover(function(){
    $('#sola-logo').attr('src', 'assets/img/sola.png');
  }, function(){
    $('#sola-logo').attr('src', 'assets/img/main-logo1.png')
  });

  $(function() {

  	$(window).on('wheel', function(e) {

	var delta = e.originalEvent.deltaY;
	var deltatwo = $('.description-wrapper').scrollTop();

	if (delta < 0) {
		if($('.description-wrapper').scrollTop() + $('.description-wrapper').innerHeight() >= $('.description-wrapper')[0].scrollHeight) {
            $('.description-wrapper').animate({scrollTop: '0px'}, 500);
        };
        setTimeout(function() {
        	$('.description-wrapper').fadeOut();
        }, 10);	

	} else if(deltatwo == 0) {
		$('.description-wrapper').fadeIn();
		
	}else{
	};

	// return false; // this line is only added so the whole page won't scroll in the demo
});
});
});