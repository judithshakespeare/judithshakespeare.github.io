var generatedNum = [];

// 랜덤한 세자리수 숫자를 리턴하는 함수
function createNum () {
    let i = 0;
    while (i < 3) {
        let n = Math.floor(Math.random() * 9) + 1;
        if (! sameNum(n)) {
            generatedNum.push(n);
            i++;
        }
    }

    // 중복시 false를 리턴하는 함수
    function sameNum (n) {
        for (let i = 0; i < generatedNum.length; i++) {
            if (n === generatedNum[i]) {
                return true;
            }
        }
        return false;
    }
    return generatedNum;
}

createNum();
console.log(generatedNum);

let attempts = 0;
function bullsnCows () {

    // str을 int로 변환하여 리턴하는 함수
    function toInt (tNum) {
        tNum = Number(tNum);
        return tNum;
    }

    // input값을 배열에 push
    const inputNum = [];
    let firstNum = document.getElementById("firstNum").value;
    let secondNum = document.getElementById("secondNum").value;
    let thirdNum = document.getElementById("thirdNum").value;
    inputNum.push(toInt(firstNum), toInt(secondNum), toInt(thirdNum));

    if(firstNum == '' || secondNum == '' || thirdNum == ''){ // input값이 비었는지 확인
        alert("세자리 숫자를 모두 입력해주세요");
        return false;
    }
    if (isNaN(firstNum) || isNaN(secondNum) || isNaN(thirdNum)){ // input값이 숫자인지 확인
        alert("숫자만 입력 가능합니다");
        return false;
    }
    if (firstNum==secondNum || firstNum==thirdNum || secondNum==thirdNum){ // input값이 중복인지 확인
        alert("숫자는 중복되지 않아야 합니다");
        return false;
    }

    attempts ++;

    let strikeCount = 0; 
    for (let i = 0; i < generatedNum.length; i++) {
        // 배열 generatedNum의 n번째 값과 배열 inputNum의 n번째 값이 일치하면 스크라이크 카운트가 올라감
        if (generatedNum[i] === inputNum[i]) {
            strikeCount ++;
        }
    }

    // 배열 generatedNum과 inputNum의 교집합 구하기
    let difference = generatedNum.filter(x => inputNum.includes(x));

    let record = '';

    if(difference.length > 0 && difference.length == strikeCount){ // 스크라이크만 있을 때 -S 출력
        record = strikeCount+'S';
    }else if(difference.length > 0 && strikeCount == 0){ // 볼만 있을 때 -B 출력
        record = difference.length + 'B';
    }else if(difference.length > 0 && strikeCount > 0){ // 스트라이크와 볼이 같이 있을 때 -B -S 출력
        record = difference.length-strikeCount + 'B ' + strikeCount + 'S';
    }else{
        record = '';
    }

    let result = document.getElementById('result');
    result.innerHTML += '<div class="row"><div class="col">'+attempts+'회차</div><div class="col">'+firstNum+' '+secondNum+' '+thirdNum+'</div><div class="col">'+record+'</div></div>';

    function restart(){
        generatedNum = [];
        createNum();
        result.innerHTML = '';
        document.querySelector('form').reset();
        attempts = 0;
    }

    // 정답 맞추면 다시 시작
    if(strikeCount == 3){
        alert(firstNum+' '+secondNum+' '+thirdNum+' 성공!');
        restart();
    }

    // 시도 횟수가 열 번이 넘어가면 다시 시작
    if (attempts > 10){
        alert('10회 안에 정답을 맞추지 못했습니다');
        restart();
    }
}