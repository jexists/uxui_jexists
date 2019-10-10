//grammar_basic.js
//javascript 기초이해하기

/* 문법
조건문
-특정한 조건을 이용하여 해당 조건이 참이면 수행하고, 
거짓이면 수행하지 않도록 처리하게 만드는 것.
반복문
-2번이상의 반복 수행할 경우, 단순 반복하여 수행하게 하는 것이 아니라 자동으로 수행하도록 처리
조건문 - 단순분기, 다수분기
단순분기: if ~ else(하나의 조건을 기준으로 참/거짓)
다수분기: switch (다양한 조건 중에 하나를 확인)
*/

//IF 문 = if(조건을 비교){조건이 참일경우 수행}
// var i = 10;
// var text; 

// if (i < 10){
// 	text = "주어진 숫자는 10보다 작은수입니다.";
// } 
// console.log(text); //undefined

// var를 미리 선언하고 나중에 변수만 적는것이 좋다. 

// var myNum = function(par){
// 	var i = par;
// 	var text; 
	
// 	if (i < 10){
// 		text = "주어진 숫자는 10보다 작은수입니다.";
// 	} else if (i===10) {
// 		text = "주어진 숫자는 10 입니다."
// 	} else {
// 		text = "주어진 숫자는 10보다 큰 수 입니다."
// 	}
// 	return console.log(text);
// };

// myNum(30);

//삼항연산자 = ()?참이면 수행 : 거짓이면 수행;
//=> () ? 참 : () ? 참 : () ? 참 : 거짓 ;
//IF문 = if (){참이면 수행} else {거짓이면 수행}
/*=> if(){
	참
}else if(){
	참
}else{
	거짓
} */

// ===
// var i = 10;
// switch(i){
// 	case 1:
// 		text = "숫자 1입니다."
// 		break;
// 	default:
// 		text = "1보다 큰 수입니다."
// 		break;
// }
// console.log(text)
// var coffee = "?";
// var text;

// switch (coffee){
//  case "americano":
//   text = "얼죽아";
//  break;
//  case "latte": 
//   text = "부드러운 라떼";
//  break;
//  case "frappucino": 
//   text = "달달한 크림";
//  break;
//  default: 
//   text = "물이 최고야";
//  break;
// }
// console.log(text) // = 물이 최고야

//=============================
// let coffee, text, menu;
// menu = ["americano","latte", "frappucino","mocha"];
// coffee = prompt("원하시는 메뉴를 입력해주세요 \n 메뉴:"+ menu );
// // coffee = prompt("원하시는 메뉴를 입력해주세요 \n 메뉴: americano, latte, frappunino, mocha");
// //==================
// switch (coffee){
//  case menu[0]:
//   text = "얼죽아";
//  break;
//  case menu[1]: 
//   text = "부드러운 커피";
//  break;
//  case menu[2]: 
//   text = "달달한 크림";
//  break;
//  case menu[3]: 
//   text = "모카카카카";
//  break;
//  default: 
//   text = "물이 최고야";
//  break;
// }
// console.log(text)

var myMenu = function(){
	let coffee, text, menu;
	menu = ["americano","latte", "frappucino","mocha"];
	coffee = prompt("원하시는 메뉴를 입력해주세요 \n 메뉴:"+ menu );
	
	switch (coffee){
	 case menu[0]:
	  text = "얼죽아";
	 break;
	 case menu[1]: 
	  text = "부드러운 커피";
	 break;
	 case menu[2]: 
	  text = "달달한 크림";
	 break;
	 case menu[3]: 
	  text = "모카카카카";
	 break;
	 default: 
	  text = "물이 최고야";
	 break;
	}
	console.log(text);
	
	let myP = document.getElementsByTagName("p")[0];
	myP.innerHTML = text;
};

var myBtn = document.getElementById("coffeeMenu");
myBtn.addEventListener("click", function(){
	myMenu();
});
// addEventListener 이벤트

