//페이드인//
$(document).ready(function(){
	$(".candle").click(function(){
		$(".main").hide();
		$(".birthdayCard").fadeIn(2000);
		$("#dear").fadeIn(5000);
		$("#happyBirthDay").fadeIn(4000);
		$("#flashlight").fadeIn(4000);
		$(".frame").fadeOut(3000);
		$("body").css("background-color", "black");
		$("body").css("background-color", "black");
		$("#alert").hide(); 
	});
});

$(function(){
  $(document).mousemove(function(e) {
      mouseX = e.pageX;
      mouseY = e.pageY;
      $('#alert').css("left", mouseX+48).css("top", mouseY+15).html("촛불을 불어주세요");
 });
});

$(document).ready(function(){ 
	$(document).mousemove(function(event){ 
    var x = event.pageX, y = event.pageY; 
    $("#PopLayer").css("left",x+"px"); 
    $("#PopLayer").css("top",y+"px"); 
    }); 
});

function flashlight(){
	$("body").css("background-image", "none");
	$("body").css("background-color", "white");
	$(".birthdayCard").css("color", "black");
	$("#flashlight2").css("display", "block");
	$("#flashlight").css("display", "none");
	$(".sticker").css("display", "block");
	$("#StickerBtn").css("display", "block");
	$('body').css('cursor','url(./css/images/party.png),default');
};

function flashlight2(){
	$("body").css("background-color", "black");
	$(".birthdayCard").css("color", "white");
	$("#flashlight2").css("display", "none");
	$("#flashlight").css("display", "block");
	$(".sticker").css("display", "none");
	$("#StickerBtn").css("display", "none");
	$('body').css('cursor','default');

};


function delay(){
	setTimeout(function(){
		$(document).ready(function(){
			// $(".candleImage").attr('src','./css/images/candle2.gif');
			$('body').css('cursor','url(./css/images/wind.png),default');
			$("#alert").fadeIn(2000);
		});
	});
}

function birthdayCard(){
	$('body').css('cursor','default');
	var name = document.querySelector('#FistName').value;
	var month = document.querySelector('#month').value;
	var day = document.querySelector('#day').value;
	document.querySelector('#dear').innerHTML = name + "에게.";

	
	function reulReturner1(name) {
		var name = document.querySelector('#FistName').value;
		var strGA = 44032; 
		var strHI = 55203; 
		var lastStrCode = name.charCodeAt(name.length-1);
		var prop=true;
		var msg;
		if(lastStrCode < strGA || lastStrCode > strHI) {
		  return false; //한글이 아님
		}
		if (( lastStrCode - strGA ) % 28 == 0) prop = false;
		if(prop) {
			msg = name+'은';
		}
		else {
			msg = name+'는';
		}
		return msg;
	}

	function reulReturner2(name) {
		var name = document.querySelector('#FistName').value;
		var strGA = 44032; 
		var strHI = 55203; 
		var lastStrCode = name.charCodeAt(name.length-1);
		var prop=true;
		var msg;
		if(lastStrCode < strGA || lastStrCode > strHI) {
		  return false; //한글이 아님
		}
		if (( lastStrCode - strGA ) % 28 == 0) prop = false;
		if(prop) {
			msg = name+'이';
		}
		else {
			msg = name+'';
		}
		return msg;
	}

	function reulReturner3(name) {
		var name = document.querySelector('#FistName').value;
		var strGA = 44032; 
		var strHI = 55203; 
		var lastStrCode = name.charCodeAt(name.length-1);
		var prop=true;
		var msg;
		if(lastStrCode < strGA || lastStrCode > strHI) {
		  return false; //한글이 아님
		}
		if (( lastStrCode - strGA ) % 28 == 0) prop = false;
		if(prop) {
			msg = name+'아';
		}
		else {
			msg = name+'야';
		}
		return msg;
	}

	function clickK(mon){
		var mon = document.getElementById("month").value;
		var msg;

		if(mon >=9 && mon<=11){
			msg ="가을";
		}else if(mon>= 3 && mon <= 5){
			msg ="봄";
		}else if(mon>= 6 && mon <= 8){
			msg ="여름";
		}else{
			msg ="겨울";
		}
		return msg;
	};


	var happyBirthDay = new Array();

	happyBirthDay[0] = "네가 없었으면 안 됐어 나는.<br>지금의 나도 없었을 거야.<br><br>생일 축하해.";
	happyBirthDay[1] = "사람들이 어떻게 이야기해도 나는 있는 그대로의 너를 사랑해.<br><br>생일 축하해.";
	happyBirthDay[2] = reulReturner3()+". 너는 어디서든 사랑받을 거야.<br><br>생일 축하해.";
	happyBirthDay[3] = "많은 시간 곁에 있지 못하지만, 너를 숨죽여 울게 할 일이 없기를 진심으로 간절히 바라.<br><br>생일 축하한다.";
	happyBirthDay[4] = "지금껏 그래왔던 것처럼 앞으로의 특별하고, 또 특별하지 않은 날들에도 네가 있었으면 좋겠다. 어김없이 돌아올 " + month + "월 " + day + "일에 또 사랑과 축복하는<br>마음을 함께 담아 이렇게 오래 편지를 쓰고 싶다.<br><br>생일 축하해.";
	happyBirthDay[5] = "나는 너밖에 없다.<br>너랑 같이 있기만 해도 좋으니까<br>자꾸 미안해하지마.<br><br>생일 축하해.";
	happyBirthDay[6] = "늘 너를 마음으로 끌어안고 있어. 거친 길 위에서 너는 늘 웃고 있을거야.<br><br>생일 축하해.";
	happyBirthDay[7] = clickK() + "이 되니까 네 생각이 나더라.<br>" + month + "월엔 " + reulReturner2() + " 생일이 있지, 하면서.<br>" + reulReturner3() + ". 오래 너를 사랑할게.<br><br>생일 축하해.";
	// happyBirthDay[8] = "돌아보면 우리 꽤 씩씩하게 견뎌낸 것 같아.<br>그냥 앞으로도 이렇게, 아프지 말고<br>오래오래 같이 살아내고 싶어.<br>그걸로도 이미 다행인 마음이야.<br>" + reulReturner3() + ". 많이 사랑하는 거 알지?<br><br>생일 축하해.";
	// happyBirthDay[8] = "나를 이렇게나 잘 아는 사람이 너라는게 기쁘고 고마워.<br><br>생일 축하해.";
	// happyBirthDay[9] = "내게 결국 남아있는 사람은 늘 너였던 것 같아.<br>너와 함께 있으면 가장 나다울 수 있어. 그래서 고마워.<br><br>생일 축하해.";
	happyBirthDay[8] = "내가 살아온 시간들이 너로 인해<br>조금 더 단단해질 수 있었던 것 같아.<br><br>생일 축하해.";
	happyBirthDay[9] = "무엇을 놓치지 않고 살아가고 싶은지 우리 많이 이야기했었잖아. 앞으로도 그렇게 차곡차곡 우리의 삶을 살아갈거라 믿어. 늘 너를 만나 다행이야!<br><br>생일 축하해.";
	happyBirthDay[10] = "너랑 있으면 잘 뭉친 초밥의<br>밥이 되는 기분이야. 꽉 차는 기분.<br><br>생일 축하해.";
	happyBirthDay[11] = "당신은 잘못 날아오지 않았다.<br><br>생일 축하합니다.";
	happyBirthDay[12] = "네가 없어도 널 생각해.<br><br>생일 축하해.";
	happyBirthDay[13] = "많이 사랑해. 앞으로도 그럴거야.<br>너에겐 당연한 일이야.<br><br>생일 축하해.";
	happyBirthDay[14] = "혼자 밖에 있을 때, 너와 함께라면 조금 더 괜찮은 날이 되지 않았을까—생각하곤 해. 아마 먼 훗날에도 이런 생각을 하지 않을까 싶다.<br><br>생일 축하해.";
	happyBirthDay[15] = "누군가를 만나 밥먹고 차마시는 게 쉬운 일이 아니라는 걸, 그렇게 하기 위해서는 꽤 많은 노력을 해야 한다는 걸 서서히 깨달아 가고 있는 것 같아. 그리고 너는 내게 그런 노력이 조금도 아깝지 않은 사람이야.<br><br>생일 축하해. " + reulReturner3() +".";
	// happyBirthDay[19] = "너를 보고 있으면 네게는 소중한 무엇이 있는 것 같아.<br>그걸 지켜내느라 아픈 게 아닐까 싶다.<br>그치만 소중한 것이 있고, 또 지킬 게 있다는 건<br>끝끝내 무너지지 않을 수 있다는 거잖아.<br>그래서 나는 널 너무 걱정하지 않는다.<br><br>생일 축하해.";
	happyBirthDay[16] = "관계를 처음부터 새로 쌓아가야 했던 게, 지금 생각해보면 조금 힘들었던 것 같아. 그래서 그런 내 한 켠을 채워줬던 네게 많이 고마워.<br><br>생일 축하해. " + reulReturner3();
	// happyBirthDay[17] = "내가 슬픔을 쏟아낼 때<br>네가 기꺼이 그것을 받아주려고 하듯이,<br>나도 너의 슬픔을 나눠 가지고 싶다고 생각했어.<br>그걸로 나아질 수 있을지는 모르겠지만,<br>적어도 한 번 쯤 더 웃거나 한 번 쯤 더<br>소리 내 울 수 있을 테니까.<br>내가 너 사랑한다는 건 알고 있지?<br><br>생일 축하해.";
	happyBirthDay[17] = "네가 없었을 것을 상상하니<br>지난날들이 아득해지네.<br>태어나줘서 고마워.<br><br>생일 축하해.";
	happyBirthDay[18] = "전에도 말했지만 넌 좋은 사람이니까 네 곁에도 좋은 사람들이 가득할 거야. 너는 한 명이면 충분하다고 했지만 수많은 사람들이 너를 사랑할 거야.<br><br>생일 축하해.";
	happyBirthDay[19] = "너는 내가 끝끝내 지키고 싶은 사람이야.<br>생일 축하해."
	happyBirthDay[20] = "앞으로의 날들이 아프지 않을 거라고 장담할 수 없고 그렇게 하고 싶지 않지만, 나는 너의 아픈 날들에 위로가 되는 사람이고 싶어. 나중에 돌이켜 봤을 때 기쁜 순간에 함께 했던 사람이고 싶고.<br><br>생일 축하해."	;
	happyBirthDay[21] = "무엇이 되지 않아도<br>너는 충분히 사랑받을 만한 사람이란다.";

	document.querySelector('#happyBirthDay').innerHTML = randomItem(happyBirthDay) + '<br />';

//랜덤
function randomItem(a){
	return a[Math.floor(Math.random() * a.length)];}
};

function sticker(){
	var sticker = new Array();
	sticker[0] = "<img src='css/images/sticker1.gif'>";
	sticker[1] = "<img src='css/images/sticker1.gif'>";
	sticker[2] = "<img src='css/images/sticker2.gif'>";
	sticker[3] = "<img src='css/images/sticker3.gif'>";
	sticker[4] = "<img src='css/images/sticker4.gif'>";
	sticker[5] = "<img src='css/images/sticker5.gif'>";
	sticker[6] = "<img src='css/images/sticker6.gif'>";
	sticker[7] = "<img src='css/images/sticker7.gif'>";
	sticker[8] = "<img src='css/images/sticker8.gif'>";
	sticker[9] = "<img src='css/images/sticker9.gif'>";
	sticker[10] = "<img src='css/images/sticker10.gif'>";
	sticker[11] = "<img src='css/images/sticker11.gif'>";
	sticker[12] = "<img src='css/images/sticker12.gif'>";
	sticker[13] = "<img src='css/images/sticker13.gif'>";
	sticker[14] = "<img src='css/images/sticker14.gif'>";
	sticker[15] = "<img src='css/images/sticker15.gif'>";
	sticker[16] = "<img src='css/images/sticker16.gif'>";
	sticker[17] = "<img src='css/images/sticker17.gif'>";
	sticker[18] = "<img src='css/images/sticker18.gif'>";
	sticker[19] = "<img src='css/images/sticker19.gif'>";
	sticker[20] = "<img src='css/images/sticker20.gif'>";
	sticker[21] = "<img src='css/images/sticker21.gif'>";
	sticker[22] = "<img src='css/images/sticker22.gif'>";
	sticker[23] = "<img src='css/images/sticker23.gif'>";
	sticker[24] = "<img src='css/images/sticker24.gif'>";
	sticker[25] = "<img src='css/images/sticker25.gif'>";
	sticker[26] = "<img src='css/images/sticker26.gif'>";
	sticker[27] = "<img src='css/images/sticker1.png'>";
	sticker[28] = "<img src='css/images/sticker2.png'>";
	sticker[29] = "<img src='css/images/sticker3.png'>";
	sticker[30] = "<img src='css/images/sticker4.png'>";
	sticker[31] = "<img src='css/images/sticker27.gif'>";
	sticker[32] = "<img src='css/images/sticker28.gif'>";
	sticker[33] = "<img src='css/images/sticker29.gif'>";
	sticker[34] = "<img src='css/images/sticker30.gif'>";
	sticker[35] = "<img src='css/images/sticker31.gif'>";
	sticker[36] = "<img src='css/images/sticker32.gif'>";
	sticker[37] = "<img src='css/images/sticker33.gif'>";
	sticker[38] = "<img src='css/images/sticker34.gif'>";
	sticker[39] = "<img src='css/images/sticker35.gif'>";
	sticker[40] = "<img src='css/images/sticker36.gif'>";
	sticker[41] = "<img src='css/images/sticker37.gif'>";
	sticker[42] = "<img src='css/images/sticker38.gif'>";
	sticker[43] = "<img src='css/images/sticker39.gif'>";
	sticker[44] = "<img src='css/images/sticker40.gif'>";
	sticker[45] = "<img src='css/images/sticker41.gif'>";
	sticker[46] = "<img src='css/images/sticker42.gif'>";

	var div = new Array();
	div[0] = document.querySelector('#div1');
	div[1] = document.querySelector('#div2');
	div[2] = document.querySelector('#div3');
	div[3] = document.querySelector('#div4');
	div[4] = document.querySelector('#div5');
	div[5] = document.querySelector('#div6');
	div[6] = document.querySelector('#div7');
	div[7] = document.querySelector('#div8');
	div[8] = document.querySelector('#div9');
	div[9] = document.querySelector('#div10');
	div[10] = document.querySelector('#div11');
	div[11] = document.querySelector('#div12');
	div[12] = document.querySelector('#div13');
	div[13] = document.querySelector('#div14');
	div[14] = document.querySelector('#div15');
	div[15] = document.querySelector('#div16');
	div[16] = document.querySelector('#div17');
	div[17] = document.querySelector('#div18');
	div[18] = document.querySelector('#div19');
	div[19] = document.querySelector('#div20');
	div[20] = document.querySelector('#div21');
	div[21] = document.querySelector('#div22');
	div[22] = document.querySelector('#div23');
	div[23] = document.querySelector('#div24');
	div[24] = document.querySelector('#div25');
	div[25] = document.querySelector('#div26');
	div[26] = document.querySelector('#div27');
	div[27] = document.querySelector('#div28');
	div[28] = document.querySelector('#div29');
	div[29] = document.querySelector('#div30');
	div[30] = document.querySelector('#div31');
	div[31] = document.querySelector('#div32');
	div[32] = document.querySelector('#div33');
	div[33] = document.querySelector('#div34');

	randomSticker(div).innerHTML = randomSticker(sticker);

	function randomSticker(a){
		return a[Math.floor(Math.random() * a.length)];};

		function randomDiv(a){
			return a[Math.floor(Math.random() * a.length)];};

		};
