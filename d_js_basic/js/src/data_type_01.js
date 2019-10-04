//data_type_01.js

/*
*/

 // 다른 결과가 나온다. ("문자" /변수값)

/*
var int1 = "";
 console.log("int1"); //int1

var int1 = "";
 console.log(int1); //

 var int2;
 console.log(int2); //undefined

 console.log(int3); //not defind

결과값을 참고하여 
값이 undefined 라면, 변수명을 선언했지만 값이 지정하지 않은 형태/정의를 내지 않을것
값이 not defined라면, 변수를 생성조차 하지 않은것 / 에러 
에러 밑으로는 값이 생성되지 않는다. 
*/

// var rel1;
// console.log(rel1);
// rel1 = "10시 40분"; //undefined

// console.log(rel2);
// var rel2 = "10시 40분" //undefined (호이스트현상:HOIST)


// let rel3;
// console.log(rel3);
// rel3 = "10시 40분"; //undefined

// console.log(rel4);
// let rel4 = "10시 40분"; //error

// let rel5;
// console.log(rel5);
// let rel5 = "10시 40분"; //undefined
// let은 또 쓰면 안된다. 


// const rel6
// console.log (rel6) //error


//===========이해안감
// const rel7 = "";
// console.log (rel7)
//처음에 선언할때 무조건 값을 선언해야한다.

//const rel6
//console.log (rel6) //error
//그리고 값을 변경할수없다. 

// let rel3 ="";
// console.log(rel3);

// const rel8 = "1";
// console.log (rel8)
// const ret8 ="변함"
// console.log (rel8)

/*
var: 오래전 부터 사용하던 변수
 *호이스트 현상이 생김: 호출하기 이전에도 해당하는 변수가 존재하는 것처럼 인지
let: ECMA2015 (es6) 버전부터 생성된 변수
 *호이스트 현상이 생기지 않는다. (현재 많이 사용하는 변수)
const: ECMA2015 (es6) 버전부터 생성된 변수
 *호이스트 현상이 생기지 않는다.
 *변수로 불리지만 한번 지정 후에는 값을 변경할 수 없는 변수 (상수)

*/

// var card = 1000;
// var chu = 500;
// card = card - chu
// console.log (card) 
// card +=5000; //card = card +5000;
// console.log (card)
// card -= 13000; // card = card - 13000;
//  console.log (card)

// //if문
//  if (card<0) {
// 	console.log ('잔액이부족입니다.')
// }else{
// 	console.log(card);
// }

// //[삼항연산자 방법] 조건 ? 조건이 참일경우 : 조건이 거짓일경우;
// (card<0) ? console.log ('잔액이부족입니다.') : console.log(card)

//===========

/* 사칙연산 (+,-,*,/,%)
+=, -=, *=, /=
++, --
==, ===, !=, !==
<, >
*/

//기본 연산자 ========================================

//int = int(정수)

// var int;
// int = 10;
// console.log(int);

// // int + 10;
// // console.log(int); //10이 나옴 
// //int+10을 어디에다가 넣을건지 적지않아서 +10한 값이  나오지 않음

// // var rel = int + 10;
// //int = int + 10; // rel=int 같은뜻
// // console.log(rel);
// //int+10을 어디에다가 넣을건지 적지않아서 +10한 값이  나오지 않음

//  int = int + 10; //20
//  int = int - 5; //15
//  int = int * 4; //60
//  int = int / 10; //6

//  int = int % 4; //2 
//  //몫을 뽑아내는것이 아니라 나머지값을 도출한다.
// console.log(int);

// var int2 = 10;
// int2 = int2 / 3
// console.log(int2); //3.33333
// int2 = int2 % 3;
// console.log(int2); //0.33333

// var int3 = 11;
// int3 = int3 % 2;
// console.log(int3); // 사용예시0/1 짝수냐 홀수냐 할때 / 일주일 알람

// (int3 == 0)? console.log ("짝수"):console.log("홀수");


// var now = new Date()
// console.log(now);

// var i = 100;
// i = i +2019;
// console.log(i);
// i += 2019;
// console.log(i);

// var now_year_month_date = 20191014;
// now_year_month_date = now_year_month_date + 1;
// console.log(now_year_month_date);
// now_year_month_date -= 1;
// console.log(now_year_month_date);
//복합 대입 연산자: 너무 길고 불편해서 간단하게 만든것이다. +=

//리터털: 연산자를 해서 나온값
//오퍼레이터 :연산자 를 영어로 operation 
//연산자: +-
//var 리터털 = 오퍼레이터 연산자 오퍼레이터

// 증감연산자 : 1씩 더하거나, 빼는 기능
// 1씩 더하거나(++), 뺄때(--) 앞(전치연산자) 또는 뒤(후치연산자)에 붙일 수있다.
//전치연산자: 먼저 연산후 결과를 확인(도출)
//후치연산자: 먼저 결과를 도출후 연산

// var now = 100;
// now +=1;
// now +=1;
// now +=1;
// now +=1;
// console.log (now)

// var now2 = 100;
// now2++;
// now2++;
// now2++;
// now2++;
// console.log (now2)
// //1씩 증가한다.

// var now3 = 100;
// now3 -=1;
// now3 -=1;
// now3 -=1;
// console.log (now3)

// var now4 = 100;
// now4--;
// now4--;
// now4--;
// console.log (now4)
// //1씩 뺀다.

// var now5 = 100;
// ++now5;
// ++now5;
// ++now5;
// console.log (now5)

// var now6 = 100;
// --now6;
// --now6;
// --now6;
// console.log (now6)

// var myi = 100;
// console.log(myi)
// console.log(++myi) // 결과가 바로 나옴
// console.log(++myi)
// console.log(--myi)
// console.log(--myi)
// console.log("결과1",myi)
// console.log(myi++) // 결과가 바로 안나옴
// console.log("결과2",myi) //더해졌음 
// console.log(myi++) // 결과가 바로 안나옴
// console.log(myi++) // 전거결과가 나옴
// console.log("결과3",myi)
// console.log(--myi)
// console.log(--myi)
// console.log("결과4",myi)
// console.log(++myi)
// console.log(myi++)
// console.log(myi--)
// console.log(myi++)
// console.log("결과5",myi)

// var ls = 77;
// var tx = "번가의 기적";
// var myMv = "77번가의 기적"; //다 문자로 나옴 (77을 숫자X)
// // var myMv = 77 "번가의 기적"; //error
// var myMv = 77 + "번가의 기적"; //숫자+문자 = "+"나열한다라는 의미 
// var myMv = ls + tx; 
// console.log(myMv)
// console.log(ls+tx)

// ls = 05; //숫자는 1부터 시작 앞에 0사용해도 안나옴
// tx = "번가";
// myMv = ls+tx;
// console.log(myMv);

// ls = 4; //0을 문자로 만든 후 기능을 만든다.
// (ls<10)? myMv = "0" + ls + tx : myMv = ls + tx;
// console.log(myMv);

var myMv = "77.11번가의 기적"; //다 문자로 나옴 (77을 숫자X)
var myN = parseInt(myMv); //값(77) 문자를 숫자로 인식해라
console.log(myN); //77
// parse :변환할때 사용 
//parseInt : 정수로 변환하겟다.
var myMv = "77.11번가의 기적"; //다 문자로 나옴 (77.11을 숫자X)
var myN = parseFloat(myMv); //값(77.11) 문자를 숫자(소수점까지) 인식해라
console.log(myN); //77.11
//parseFloat: 소수점까지 인지