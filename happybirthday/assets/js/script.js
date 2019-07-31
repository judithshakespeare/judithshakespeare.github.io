function input(){
    setTimeout(function(){
        $("#main2").fadeIn(2000);
        $("#paperbag").show();
        $("#main1").hide();},1200);
    setTimeout(function(){
        $('#day').blur();},2000);
}

$("#paper").click(function(){
    $("#birthdayCard").fadeOut(900);
    $("#paper").fadeOut(1200);
    setTimeout(function(){
    $("#envelopeOpen").fadeOut(1500);
    $("#envelope").fadeIn(1300);
    },1500);
    setTimeout(function(){
    $("#alert").show();
    $("#main2").hide(2000);},2800);
    window.setTimeout('window.location.reload()',15000);
});    

$("#birthdayCard").click(function(){
    $("#birthdayCard").fadeOut(900);
    $("#paper").fadeOut(1200);
    setTimeout(function(){
    $("#envelopeOpen").fadeOut(1500);
    $("#envelope2").fadeIn(1300);
    },1500);
    setTimeout(function(){
    $("#alert").fadeIn(1500);
    $("#main2").fadeOut(1200);},4000);
    window.setTimeout('window.location.reload()',15000);
});    

$(document).ready(function(){
        var count = 0;
        var items = new Array();
        items[0] = "<img class='items' id='tulip' src='assets/images/tulip.png'>";
        items[1] = "<img class='items' id='sneakers' src='assets/images/sneakers.png'>";
        items[2] = "<img class='items' id='book' src='assets/images/book.jpg'>";
        items[3] = "<img class='items' id='badge1' src='assets/images/badge1.png'>";
        items[4] = "<img class='items' id='badge2' src='assets/images/badge2.png'>";
        items[5] = "<img class='items' id='book2' src='assets/images/book2.jpg'>";
        items[6] = "<img class='items' id='matches' src='assets/images/matches.png'>";
        items[7] = "<img class='items' id='comic' src='assets/images/comic.jpg'>";
        items[8] = "<img class='items' id='moomin' src='assets/images/moomin.png'>";

        $("#paperbag").click(function(e){
            document.querySelector('#items').innerHTML = randomItem(items);
            function randomItem(a){return a[Math.floor(Math.random() * a.length)];};
            $("#paperbag").hide();
            setTimeout(function(){
                $("#items").fadeOut(1100);
                $("#envelope").fadeIn(1200);
            },3000);
        });
        $("#envelope").click(function(e){
            $("#envelope").fadeOut(850);
                $("#envelopeOpen").fadeIn(900);
                setTimeout(function(){
                    $("#paper").fadeIn(1000);
                    $("#birthdayCard").fadeIn(1800);
                    birthdayCard();},2000);

            // count++;
            // if(count==1){
            
            // }else if(count==2){
                
            // }else if(count==3){
            // }else{};
    });
});

function birthdayCard(){
    var name = document.querySelector('#fistName').value;
    var month = document.querySelector('#month').value;
    var day = document.querySelector('#day').value;
    document.querySelector('#dear').innerHTML = name + "에게.";
    
    function reulReturner1(name) {
        var name = document.querySelector('#fistName').value;
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
    var name = document.querySelector('#fistName').value;
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
    var name = document.querySelector('#fistName').value;
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
happyBirthDay[4] = "지금껏 그래왔던 것처럼 앞으로의 특별하고, 또 특별하지 않은 날들에도 네가 있었으면 좋겠다. 어김없이 돌아올 " + month + "월 " + day + "일에 또 사랑과 축복하는 마음을 함께 담아 이렇게 오래 편지를 쓰고 싶다.<br><br>생일 축하해.";
happyBirthDay[5] = "나는 너밖에 없다.<br>너랑 같이 있기만 해도 좋으니까<br>자꾸 미안해하지마.<br><br>생일 축하해.";
happyBirthDay[6] = "늘 너를 마음으로 끌어안고 있어. 거친 길 위에서 너는 늘 웃고 있을거야.<br><br>생일 축하해.";
happyBirthDay[7] = clickK() + "이 되니까 네 생각이 나더라.<br>" + month + "월엔 " + reulReturner2() + " 생일이 있지, 하면서.<br>" + reulReturner3() + ". 오래 너를 사랑할게.<br><br>생일 축하해.";
happyBirthDay[8] = "내가 살아온 시간들이 너로 인해<br>조금 더 단단해질 수 있었던 것 같아.<br><br>생일 축하해.";
happyBirthDay[9] = "무엇을 놓치지 않고 살아가고 싶은지 우리 많이 이야기했었잖아. 앞으로도 그렇게 차곡차곡 우리의 삶을 살아갈거라 믿어. 늘 너를 만나 다행이야!<br><br>생일 축하해.";
happyBirthDay[10] = "너랑 있으면 잘 뭉친 초밥의<br>밥이 되는 기분이야. 꽉 차는 기분.<br><br>생일 축하해.";
happyBirthDay[11] = "당신은 잘못 날아오지 않았다.<br><br>생일 축하합니다.";
happyBirthDay[12] = "네가 없어도 널 생각해.<br><br>생일 축하해.";
happyBirthDay[13] = "많이 사랑해. 앞으로도 그럴거야.<br>너에겐 당연한 일이야.<br><br>생일 축하해.";
happyBirthDay[14] = "혼자 밖에 있을 때, 너와 함께라면 조금 더 괜찮은 날이 되지 않았을까—생각하곤 해. 아마 먼 훗날에도 이런 생각을 하지 않을까 싶다.<br><br>생일 축하해.";
happyBirthDay[15] = "누군가를 만나 밥먹고 차마시는 게 쉬운 일이 아니라는 걸, 그렇게 하기 위해서는 꽤 많은 노력을 해야 한다는 걸 서서히 깨달아 가고 있는 것 같아. 그리고 너는 내게 그런 노력이 조금도 아깝지 않은 사람이야.<br><br>생일 축하해. " + reulReturner3() +".";
happyBirthDay[16] = "소중한, 지키고 싶은 무언가가 있다는 건 끝끝내 무너지지 않을 수 있다는 거잖아. 그래서 나는 널 너무 걱정하지 않는다.<br><br>생일 축하해.";
happyBirthDay[17] = "관계를 처음부터 새로 쌓아가야 했던 게, 지금 생각해보면 조금 힘들었던 것 같아. 그래서 그런 내 한 켠을 채워줬던 네게 많이 고마워.<br><br>생일 축하해. " + reulReturner3();
happyBirthDay[18] = "네가 없었을 것을 상상하니<br>지난날들이 아득해지네.<br>태어나줘서 고마워.<br><br>생일 축하해.";
happyBirthDay[19] = "전에도 말했지만 넌 좋은 사람이니까 네 곁에도 좋은 사람들이 가득할 거야. 너는 한 명이면 충분하다고 했지만 수많은 사람들이 너를 사랑할 거야.<br><br>생일 축하해.";
happyBirthDay[20] = "너는 내가 끝끝내 지키고 싶은 사람이야.<br>생일 축하해."
happyBirthDay[21] = "앞으로의 날들이 아프지 않을 거라고 장담할 수 없고 그렇게 하고 싶지 않지만, 나는 너의 아픈 날들에 위로가 되는 사람이고 싶어. 나중에 돌이켜 봤을 때 기쁜 순간에 함께 했던 사람이고 싶고.<br><br>생일 축하해."    ;
happyBirthDay[22] = "무엇이 되지 않아도<br>너는 충분히 사랑받을 만한 사람이란다.";

    document.querySelector('#happyBirthDay').innerHTML = randomItem(happyBirthDay) + '<br/>';

//랜덤
function randomItem(a){
    return a[Math.floor(Math.random() * a.length)];}
}
