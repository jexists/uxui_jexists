// //function_basic_01.js

// // 'use strict';

// /* 함수에 대해 => function () {}

// function myCoffee(a) {  //(a) 매게변수 / 자판기 동전
// 	return a * 100;
// }

// */

// function myCoffee(a) {
// 	var b = a * 100
// 	return b;
// }

// var rel_1 = myCoffee(100);
// console.log (rel_1); //10000
// var rel_2 = myCoffee(2);
// console.log (rel_2); //200

// function useName(a){
// 	return a + "님어서오십쇼.";
// }
// var u_1 = useName("주애")
// console.log(u_1)

// function test(color){
// 	var web = document.getElementsByTagName('body')[0];
// 	return web.style.backgroundColor="#"+color;
// }
// test("fa0");
// //브라우저에 있는 body라는 태그를 가져와서 입력해라

// t2();
// function t2(){
// 	return console.log('t2 실행')
// }
// // 선언식, 표현식
// //익명함수, 즉시실행함수, (화살표 함수:ES6)
// /*
// 함수 선언식: 함수에 이름을 붙여서 사용하는것 
// function t2(){}

// 함수표현식: 변수에 함수를 대입하여 사용하는것 
// var t3 = function (){} 
// */
// var variableFn = function(n){
// 	return (n + 100) * 10;
// };
// var v =variableFn(7);
// console.log(v);

// //--------------------------------------
// //즉시실행함수
// // ()();

// //===========3가지 같은값이 나옴
// //즉시실햄함수 ===================
// var pr = 100;
// (function(myp){
// 	console.log(myp+1);
// })(pr); //=101
// //함수선언식 ===================
// function Fn(myp){
// 	console.log(myp+1);
// }
// Fn(pr); //=101
// //함수표현식 ===================
// var Fn2 = function(myp){
// 	console.log(myp+1);
// };
// Fn2(pr); //=101


//============화살표 함수

var f1 = function (a) { return a+10; };
console.log(f1(10)); // =20
// 화살표함수 (function =>로 바꿈 / ()앞으로 갔다.)
var f2 = (a) => { return a+10; };
console.log(f2(10)); // =20


//============================

//내장함수: 자바스크립안에 미리 만들어놓은 기능(API)
console.log();
//myCon = console / name() = log()
//.log() = 매소드

var myName = function(b){return b};

// myCon.name; 아래랑 같은 의미
var myCon = {
	name: function(b){return b}
};
console.log(myCon.name("juae"));

//용어정리=============================
/*
함수는 여러기능을 하나로 묶어서 처리하는것을 의미하며,
생성과 동시에 실행되지 않지만, 호출하면 동작하게 한다. 

이때, 함수를 객체 내부에 생성시킨 후에 해당 객체를 실행하게 하면, 함수가 동작한다.
이때 동작하는 객체 명을 메소드라고 불린다. 
n() => "함수"
~.n => n() "메소드"
*/