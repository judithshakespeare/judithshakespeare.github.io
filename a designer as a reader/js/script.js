$(document).ready(function(){
	$(document).bind('mousemove', function(e){
        $('#tail').css({
           left:  e.pageX + 5,
           top:   e.pageY - 20
        });
    });

	$("body").click(function(){
		$(".questions").show();
		$(".main").hide();
	});

	var count = 0;
	$(".questions").click(function() {
		count++;
		if(count == 1) {
			$('#q1').after('<br><div class="q1a" id="q1a1"><a target="_blank" href="https://www.theguardian.com/lifeandstyle/2020/may/07/patterns-of-pain-covid-19-psychotherapy-susie-orbach-bodies">Patterns of pain: what Covid-19 can teach us about how to be human by Susie Orbach</a></div>');
		}else if(count == 2){
			$('#q1a1').after('<div class="q1a" id="q1a2">- 페이스타임FaceTime이나 줌Zoom을 통한 신체적 경험은 우리 몸의 맥박, 호흡, 울음, 한숨, 피곤함, 아프거나 혹은 생기 있고 열정적인 몸과 대조된다.</div>');
		}else if(count == 3){
			$('#q1a2').after('<div class="q1a" id="q1a3">- 미묘한 몸짓이 없어지고 눈으로 나누는 대화가 중단되면서 갈등과 조화가 만화처럼 변한다.</div>');
		}else if(count == 4){
			$('#q1a3').after('<div class="q1a" id="q1a4">- 코로나 판데믹으로 그동안 우리가 무의식적으로 의지해 온 촉각, 느낌, 근접함이 사라졌다.</div>');
		}else if(count == 5){
			$('#q1a4').after('<div class="q1a" id="q1a5">- 몸과 몸 관계의 기반(의 변화)<br><br></div>');
		}else if(count == 6){
			$('#q1a5').after('<div class="q1a" id="q1a6"><a target="_blank" href="https://brunch.co.kr/@meejisux/84">코로나가 육식이랑 무슨 상관이냐고? by 미지수</a></div>');
		}else if(count == 7){
			$('#q1a6').after('<div class="q1a" id="q1a7">- 코로나바이러스는 동물에게서 변형되어 인간에게로 옮은 인수공통 감염병이다. 인간의 동물 착취로 인해 발생한 인수공통 감염병에는 사스, 메르스, 조류독감, 광우병, 에볼라 바이러스, HIV 등이 있으며, 최근 자주 발생하는 세계적 감염병의 75%를 차지한다.</div>');
		}else if(count == 8){
			$('#q1a7').after('<div class="q1a" id="q1a6">- 미국과 유럽의 육가공 공장에서는 수많은 노동자들이 코로나 19에 감염되어 운영이 불가능할 정도에 이르렀고, 때문에 도살장으로 가지 못한 동물들은 ‘살처분’당하고, ‘고기’는 공급이 수요를 따라가지 못하는 아이러니한 상황까지 발생했다.</div>');
		}else if(count == 9){
			$('#q2box').show();
			$('#q2').show();
			var element = document.querySelector("#q2");
			element.scrollIntoView();
		}else if(count == 10){
			$('#q2').after('<div class="q2a" id="q2a1"><span class="black">Patterns of pain: what Covid-19 can teach us about how to be human by Susie Orbach</span><br>- 페이스타임FaceTime이나 줌Zoom을 통한 <span class="black">신체적 경험은 우리 몸의</span>맥박, 호흡, <span class="black">울음, 한숨, 피곤함,</span> 아프거나 혹은 생기 있고 열정적인 몸</div>');
		}else if(count == 11){
			$('#q2a1').after('<div class="q2a" id="q2a2">- 미묘한 몸짓이 없어지고 눈으로 나누는 대화가 중단되면서 갈등과 조화가 만화처럼 변한다.</div>');
		}else if(count == 12){	
			$('#q2a2').after('<img class="q2aimg" id="q2a3" src="./img/cow.jpg"/>');
		}else if(count == 13){
			$('#q2a3').after('<br><img class="q2aimg" id="q2a4" src="./img/zoom-monitor-screen.png"/>');
		}else if(count == 14){
			$('#q2a4').after('<br><img class="q2aimg" id="q2a5" src="./img/mask-campaign.jpg"/>');
			var element = document.querySelector("#q2a4");
			element.scrollIntoView();
		}else if(count == 15){
			$('#q2a5').after('<div class="q2aimg" id="q2a6"><a target="_blank" href="https://www.instagram.com/p/CAkrtJCBIEv/?utm_source=ig_web_copy_link">The way we touch each other in 2020 by Yehwan Song</a></div>');
		}else if(count == 16){
			$('#q3box').show();
			$('#q3').show();
			var element = document.querySelector("#q3");
			element.scrollIntoView();
		}else if(count == 17){
			$('#q3').after('<div class="q3a" id="q3a1"><br>- 몸과 몸 관계의 기반의 변화를 읽는 것</div>');
		}else if(count == 18){
			$('#q3a1').after('<div class="q3a" id="q3a2">- 새로운 기반의 한계를 시험하는 것</div>');
		}else if(count == 19){
			$('#q4box').show();
			$('#q4').show();
			var element = document.querySelector("#q4");
			element.scrollIntoView();
		}else if(count == 20){
			$('#q4').after('<br><img class="q4aimg" id="q4a1" src="./img/00.jpg"/><br>');
		}else if(count == 21){
			$('#q4a1').after('<br><img class="q4aimg" id="q4a2" src="./img/screen2.png"/><br>');
		}else if(count == 22){
			$('#q4a2').after('<br><img class="q4aimg" id="q4a3" src="./img/screen3.jpg"/><br><br>');
			var element = document.querySelector("#q4a2");
			element.scrollIntoView();
		}else if(count == 23){
			$('#q5box').show();
			$('#q5').show();
			var element = document.querySelector("#q5");
			element.scrollIntoView();
		}else{
		}

	});


});