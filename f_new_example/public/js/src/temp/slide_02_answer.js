// slide_02_answer.js
(function($){
	const viewBox2= $('#viewBox_02');
	const indicator = viewBox2.find('.indicator');
	const indiLi = indicator.find('li');
	const indiLiLink = indiLi.children('a');
	
	const slideForm = viewBox2.find('.slide_02_form');
	const slideGuide = slideForm.children('.guide');
	const slideEach = slideGuide.children('.banner_area');

	let timed = 500;

	slideEach.eq(0).addClass('action');
	// indiLiLink.eq(0).addClass('action');
	indiLi.eq(0).children(indiLiLink).addClass('action');

	indiLiLink.on('click',function(e){
		e.preventDefault();
		let myThis = $(this);
		let myThisPar = myThis.parent('li');
		let i = myThisPar.index();
	
		indiLiLink.removeClass('action');
		myThis.addClass('action');
		slideGuide.stop().animate({'marginLeft':(-100 * i) + '%'},
			function(){
				slideEach.removeClass('action');
				
				setTimeout(function(){
					slideEach.eq(i).addClass('action');
				},timed);
				})


	});
	//변수 i는 외부에서 공용으로 사용할 수 있도록, 전역 변수로 처리
	//인디케이터, 광고 배너이동후 처리하는 부분 등의 내용은 별도 함수처리

	//setInterval(), clearinterval()

	let go;
	let Goslide = function(){
	go = setInterval(function(){/*기능*/},timed*5);
	};
	let StopSlide = clearinterval(go);
	viewBox2.on('mouseenter',StopSlide);
	viewBox2.on('mouseleave',Goslide);
	
})(jQuery);