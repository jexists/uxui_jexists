// object_basic_01.js

//javascript에서는 배열과 객체 모두 형타입을 object

//옛날 방식
// var arr = new Array;
// var myArr =

//지금방식
// var arr =[];
// var arr =[1,2,3]; //숫자
// var arr =['a','b',]; //문자
// var a = "apple"
// var arr =[a]; //변수
// var arr= [1,"a",a] //혼합 
// console.log(arr);

// var fruits = ['durian', 'mango', 'starfruit'];
// console.log(fruits);
// console.log(fruits[2]);
// //javascript: 첫번째(0)
// //css: 첫번째(1)

// var drink = [['coffee','americano'],
// 			 ['fruit juice','apple juice'],
// 			 ['tea','fruit tea']];
// //이차배열: 배열안에 배열이 또 들어있다.
// console.log(drink) // (3) [Array(2), Array(2), Array(2)]
// console.log(drink[0]) //(2) ["coffee", "americano"]
// console.log(drink[0][0]) //"coffee"
// console.log(drink[2][1]) //"fruit tea"

// //풀어서 쓴다면
// var mydrink = drink[0];
// console.log(mydrink[0])

// //=======================

var obj1 = {"property":"value", "p":"v", "속성":"값"};
console.log(obj1);

var obj = {"Korea":"이순신", "USA":"캡틴아메리카", "India":"간디"};
console.log(obj); //{Korea: "이순신", USA: "캡틴아메리카", India: "간디"}
console.log(obj['Korea']); //대괄호
console.log(obj.USA); //.(""X)

// window.location ="?";
// var window ={location:"?"};