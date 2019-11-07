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

//인디케이터 & 버튼
const miniProduct5 = $('#miniProduct5');
const btn5 = miniProduct5.children('.btn');
const next5 = btn5.children('.next');
const prev5 = btn5.children('.prev');
const indi5 = miniProduct5.children('.indicator');
const product5 = miniProduct5.children('.product');
const ul5 = product5.children('ul');

let slideN = 9;
ul5.css({width:100 * (slideN+1) +'%', marginLeft: '-100%'})

let imgUrl = '../../img/slide_test_02/'
for (let i = 0; i< slideN ;i++){
	indi5.append('<li><a href="#"><span>'+'제품 0'+ (i+1) +'</span></a></li>')
	ul5.append('<li><a href="#"><span></span></a></li>');
	const li5 = ul5.children('li').eq(i);
	ul5.children('li').css({width: 100 / (slideN+1) + '%'});
	li5.children('a').css({backgroundImage:'url(' + imgUrl + 'menu_' +(i+1)+'.png'+')'});
	li5.find('span').text('상품설명 0' + (i+1));
}
let liClone = ul5.children('li').eq(-1).clone(true);
liClone.prependTo(ul5);
indi5.children('li').eq(0).children('a').addClass('act');

btn5.children('button').on('click',function(e){
	e.preventDefault();
	let next = $(this).hasClass('next');
	if ($(this).hasClass('next')){
		n++; 
		if(n>=slideN){n=0; ul5.css({left: -100 * (n-1) +"%"})}
		ul5.stop().animate({left: -100 * n +"%"})
	}else{
		n--; ul5.stop().animate({left: -100 * n +"%"},function(){
			if(n <= -1){n = slideN-1; ul5.css({left:-100* n +'%'})}});
	}
		const btnC = indi5.children('li').eq(n);
		btnC.siblings('li').find('a').removeClass('act');
		btnC.find('a').addClass('act');
});

indi5.find('a').on('click focus',function(e){
	e.preventDefault();
	n = $(this).parents('li').index();
	ul5.css({left:-100*n +'%'});
	$(this).parents('li').siblings('li').find('a').removeClass('act');
	$(this).addClass('act');
	
});

indi5.find('a').on('click',function(e){
	product5.find('li').eq(n+1).find('a').focus();
});

})(jQuery);