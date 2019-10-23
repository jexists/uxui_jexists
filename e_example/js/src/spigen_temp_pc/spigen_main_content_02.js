// spigen_main_content_02.js

/* 내가 한것
(function($){
const irarea = $('.irarea');
const irLi = irarea.children('li');
const irA = irLi.children('a');
const irSpan = irA.children('span');

	irLi.on('mouseover',function(){
		$(this).children('a').stop().animate({'height':'100%','padding':'130px','color':'orange'});
		// $(this).children('a').css({'padding':'130px'});
		// $(this).children('a').css({'color':'orange'});
		$(this).children('a').children('span').css({'display':'block'});
	});

	irLi.on('mouseleave',function(){
		$(this).children('a').stop().animate({'height':'100px','padding':0,'color':'#fff'});
		// $(this).children('a').css({'padding':0});
		// $(this).children('a').css({'color':'#fff'});
		$(this).children('a').children('span').css({'display':'none'});
	});

})(jQuery);*/

(function($){
	const conBoxLink = $('#irBox>ul>li>a');
	const irBox = $('#irBox');
	console.log(irBox.offset().top);
		
	conBoxLink.on('mouseenter focus',function(){
		$(this).addClass('action');
	}).on('mouseleave blur',function(){
		$(this).removeClass('action');
	})

	// 스크롤바가 일정량 움직였을 경우 상단이동 버튼 생성===================

	let conBoxOffset = irBox.offset().top;
	const win = $(window) //window는 ""사용X
	const topBtn = $('.top_btn');

	// win.on('scroll', function(e){});
	// win.on('scroll', (e) => {});
	win.on('scroll', (e) => {
		let scrollResult = $(this).scrollTop();
		// console.log(scrollResult)
		if(scrollResult > conBoxOffset){
			topBtn.fadeIn();
		}else{
			topBtn.fadeOut();}
	});
	topBtn.on('click',(e) => {
		e.preventDefault();
		$('html, body').stop().animate({'scrollTop':0},2000,'easeInOutBounce', ()=>{
			$('h1>a').focus();})
	});
})(jQuery);