/*키,나이평균*/
var heightTotal, ageTotal, heightAvg, ageAvg;
var coutLeng = 10;

/*키 변수 선언*/
var height_1, height_2, height_3, height_4, height_5, height_6, height_7, height_8, height_9, height_10;
height_1 = 175; height_2 = 180; height_3 = 182; height_4 = 190; height_5 = 185; height_6 = 179; height_7 = 182; height_8 = 183; height_9 = 192; height_10 = 187;

/*나이 변수 선언*/
var age_1, age_2, age_3, age_4, age_5, age_6, age_7, age_8, age_9, age_10
age_1 = 32; age_2 = 44; age_3 = 21; age_4 = 18; age_5 = 52; age_6 = 22; age_7 = 45; age_8 = 25; age_9 = 38; age_10 = 28;


/*키합산*/
heightTotal = height_1 + height_2 + height_3 + height_4 + height_5 + height_6 + height_7 + height_8 + height_9 + height_10;
/*나이합산*/
ageTotal = age_1 + age_2 + age_3 + age_4 + age_5 + age_6 + age_7 + age_8 + age_9 + age_10;


// 키평균
heightAvg = heightTotal/coutLeng;
// 나이 평균
ageAvg = ageTotal/coutLeng;


// mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm

/*document에 텍스트 출력하기*/
var list = '';

/*document 출력 요소를 복합대입연산자로 생성하기*/
// list += '<div>testtest';
// list += '</div>';

//list += '<div>testtest';
// list = list + '<div>testestest'
// list = '' + '<div>testestest'
// list =  '<div>testestest'
//
// list += '</div>';
// list = list + '</div>';
// list = '<div>testestest' + '</div>';
// list = '<div>testestest</div>';

list += '<ul>';
list += '<li>우리반 학생의 평균 나이는 '+ageAvg+'입니다.</li>';
list += '<li>우리반 학생의 평균 키는는 '+heightAvg+'입니다.</li>';
list += '</ul>';


// console.log(list)


// mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm


document.body.innerHTML = list; //html식이잇으면 그거에맞게 읽어서 출력

// document.body.innerText = list;  //텍스트 스트링탕비으로만 출력
