// test_02.js

(function($){
//화면만 바뀌는 광고배너
const miniProduct1 = $('#miniProduct1');
const btn1 = miniProduct1.children('.btn');
const next1 = btn1.children('.next');
const prev1 = btn1.children('.prev');
const product1 = miniProduct1.children('.product');
const ul1 = product1.children('ul');
const li1 = ul1.children('li');
const lilength1 = li1.length;

let n = 0;	
btn1.children('button').on('click',function(e){
	e.preventDefault();
	let next1 = $(this).hasClass('next');
	if ($(this).hasClass('next')){
		n++; 
		if(n>=lilength1){n=0;}
		ul1.css({marginLeft:-100 * n +"%"})
	}else{
		n--;
		if(n<0){n=lilength1-1;}
		ul1.css({marginLeft:-100 * n +"%"})
	}
})

//가로형 슬라이드
const miniProduct2 = $('#miniProduct2');
const btn2 = miniProduct2.children('.btn');
const next2 = btn2.children('.next');
const prev2 = btn2.children('.prev');
const product2 = miniProduct2.children('.product');
const ul2 = product2.children('ul');
const li2 = ul2.children('li');
const lilength2 = li2.length;

n = 0;	
btn2.children('button').on('click',function(e){
	e.preventDefault();
	let next = $(this).hasClass('next');
	if ($(this).hasClass('next')){
		n++; 
		if(n>=lilength2){n=0;}
		ul2.stop().animate({marginLeft:-100 * n +"%"},1000)
	}else{
		n--;
		if(n<0){n=lilength2-1;}
		ul2.stop().animate({marginLeft:-100 * n +"%"},1000)
	}
})

//세로형 슬라이드
const miniProduct3 = $('#miniProduct3');
const btn3 = miniProduct3.children('.btn');
const next3 = btn3.children('.next');
const prev3 = btn3.children('.prev');
const product3 = miniProduct3.children('.product');
const ul3 = product3.children('ul');
const li3 = ul3.children('li');
const lilength3 = li3.length;

n = 0;	
btn3.children('button').on('click',function(e){
	e.preventDefault();
	let next = $(this).hasClass('next');
	if ($(this).hasClass('next')){
		n++; 
		if(n>=lilength3){n=0; /*ul3.css({marginTop:'0'})*/}
		ul3.stop().animate({marginTop:-250 * n +"px"},1000)
	}else{
		n--;
		if(n<0){n=lilength3-1;}
		ul3.stop().animate({marginTop:-250 * n +"px"},1000)
	}
})

//z-index 슬라이드
const miniProduct4 = $('#miniProduct4');
const btn4 = miniProduct4.children('.btn');
const next4 = btn4.children('.next');
const prev4 = btn4.children('.prev');
const product4 = miniProduct4.children('.product');
const ul4 = product4.children('ul');
const li4 = ul4.children('li');
const lilength4 = li4.length;

n = 0;	
for(let i = 0 ; i < lilength4; i++){
	li4.eq(i).css({zIndex:lilength4 - i})
}
// li4.eq(1).css({zIndex:-1});
// li4.eq(2).css({zIndex:-1});
li4.eq(n).siblings().hide();


btn4.children('button').on('click',function(e){
	e.preventDefault();
	// let index = li4.index();
	let next = $(this).hasClass('next');
	if ($(this).hasClass('next')){
		n++; 
		if(n>=lilength4){n=0;}
		// console.log(li4.eq(n));
	}else{
		n--;
		if(n<0){n=lilength4-1;}
	}
	li4.eq(n).siblings().css({zIndex:-1});
	li4.eq(n).siblings().fadeOut();
	li4.eq(n).css({zIndex:n+10});
	li4.eq(n).fadeIn();
})
})(jQuery);