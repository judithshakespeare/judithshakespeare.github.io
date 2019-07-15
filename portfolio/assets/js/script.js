$('#donghaKim').click(function(){
	$('#donghaKimW').show();
	$('.work').not('#donghaKimW').css('display','none');
	$('.archiveListW').hide();
	$('#donghaKim').css('border-bottom', '0.8px solid black');
	$('.under').not('#donghaKim').css('border', 'none');
});

$('#archive').click(function(){
	$('#archiveW').show();
	$('.work').not('#archiveW').css('display','none');
	$('.archiveListW').css('display','none');
	$('#archive').css('border-bottom', '0.8px solid black');
	$('.under').not('#archive').css('border', 'none');
});

$('#Spring2018').click(function(){
	$('#Spring2018W').show();
	$('.work').css('display','none');
	$('#Fall2018W').hide();
	$('#Spring2019W').hide();
	$('#Spring2018').css('border-bottom', '0.8px solid black');
	$('.list').css('border', 'none');
	$('#Spring2018').css('border-bottom', '0.8px solid black');
	$('.under').not('#Spring2018').css('border', 'none');
});

$('#Fall2018').click(function(){
	$('#Fall2018W').show();
	$('.work').css('display','none');
	$('#Spring2018W').hide();
	$('#Spring2019W').hide();
	$('#Fall2018').css('border-bottom', '0.8px solid black');
	$('.under').not('#Fall2018').css('border', 'none');
});

$('#Spring2019').click(function(){
	$('#Spring2019W').show();
	$('.work').css('display','none');
	$('#Spring2018W').hide();
	$('#Fall2018W').hide();
	$('#Spring2019').css('border-bottom', '0.8px solid black');
	$('.under').not('#Spring2019').css('border', 'none');

});

$('#swiss').click(function(){
	$('#swissW').show();
	$('.work').not('#swissW').css('display','none');
	$('.archiveListW').hide();
	$('#swiss').css('border-bottom', '0.8px solid black');
	$('.under').not('#swiss').css('border', 'none');
});

$('#aWeek').click(function(){
	$('#aWeekW').show();
	$('.work').not('#aWeekW').css('display','none');
	$('.archiveListW').hide();
		$('#aWeek').css('border-bottom', '0.8px solid black');
	$('.under').not('#aWeek').css('border', 'none');
});

$('#firstAWeek').click(function(){
	$('#firstAWeekW').show();
	$('.work').not('#firstAWeekW').css('display','none');
	$('.archiveListW').hide();
		$('#firstAWeek').css('border-bottom', '0.8px solid black');
	$('.under').not('#firstAWeek').css('border', 'none');
});

$('#secondAWeek').click(function(){
	$('#secondAWeekW').show();
	$('.work').not('#secondAWeekW').css('display','none');
	$('.archiveListW').hide();
		$('#secondAWeek').css('border-bottom', '0.8px solid black');
	$('.under').not('#secondAWeek').css('border', 'none');
});

// $('#elephant').click(function(){
// 	$('#elephantW').show();
// 	$('.work').not('#elephantW').css('display','none');
// 	$('.archiveListW').hide();
// });

// $('#agi').click(function(){
// 	$('#agiW').show();
// 	$('.work').not('#agiW').css('display','none');
// 	$('.archiveListW').hide();
// });

$('#poem').click(function(){
	$('#poemW').show();
	$('.work').not('#poemW').css('display','none');
	$('.archiveListW').hide();
		$('#poem').css('border-bottom', '0.8px solid black');
	$('.under').not('#poem').css('border', 'none');
});

$('#basicDesign').click(function(){
	$('#basicDesignW').show();
	$('.work').not('#basicDesignW').css('display','none');
	$('.archiveListW').hide();
		$('#basicDesign').css('border-bottom', '0.8px solid black');
	$('.under').not('#basicDesign').css('border', 'none');
});

$('#typography').click(function(){
	$('#typographyW').show();
	$('.work').not('#typographyW').css('display','none');
	$('.archiveListW').hide();
		$('#typography').css('border-bottom', '0.8px solid black');
	$('.under').not('#typography').css('border', 'none');
});

$('#happyBday').click(function(){
	$('#happyBdayW').show();
	$('.work').not('#happyBdayW').css('display','none');
	$('.archiveListW').hide();
		$('#happyBday').css('border-bottom', '0.8px solid black');
	$('.under').not('#happyBday').css('border', 'none');
});

$('#ewoo').click(function(){
	$('#ewooW').show();
	$('.work').not('#ewooW').css('display','none');
	$('.archiveListW').hide();
		$('#ewoo').css('border-bottom', '0.8px solid black');
	$('.under').not('#ewoo').css('border', 'none');
});

setInterval(function(){
	$("<span><img class='img'>The Portfolio for FDSC</span>").appendTo("#fdsc");},100);

let xAxis = 0;
setInterval(function(){
  xAxis += -20;
  $('#fdsc').css('transform', 'matrix(1, 0, 0, 1, ' + xAxis + ', 0)');	
}, 600);
