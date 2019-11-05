// test_01_ans_indi.js

(function($){
	const miniProduct = $('#miniProduct');
	const indicator = miniProduct.children('.indicator');
	const indiLi = indicator.children('li');
	const indiLink = indiLi.children('a');

	const adverBanner = miniProduct.find('.product').children('ul');
	const adverNth = adverBanner.children('li');
	let i = 0;

	indiLi.eq(0).addClass('active');
	adverNth.find('a').attr({'tabIndex':-1});
	indiLink.on('focus click',function(e){
		e.preventDefault();
		i = $(this).parent('li').index();
		adverBanner.stop().animate({marginLeft:(-100 * i) +"%"});
		indiLi.eq(i).siblings('li').removeClass('active')
		indiLi.eq(i).addClass('active');
		// $(this).parent('li').addClass('active');

		$(this).on('keyup',function(e){
			e.preventDefault();
			//console.log(e.keyCode); //enter =13
			if(e.keyCode == 13){
			adverNth.eq(i).children('a').focus();}
		});
	});

	//setInterval = 일정시간마다
	//clearInterval = setInterval을 취소하는 메소드

	let go;
	let timed = 1000;


	const slideGo= function(){
		go = setInterval(function(){
		i++;
		if (i>=indiLi.length){i=0;}
		adverBanner.stop().animate({marginLeft:(-100 * i) +"%"});
		indiLi.eq(i).siblings('li').removeClass('active');
		indiLi.eq(i).addClass('active');
		}, timed*3);
	};
	const slideStop = function(){
		clearInterval(go);
	};

	slideGo();
	miniProduct.on('mouseenter',function(){
		slideStop();
	});
	miniProduct.on('mouseleave',function(){
		slideGo();
	})
	// slideStop();


})(jQuery);