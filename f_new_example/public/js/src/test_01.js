// test_01.js
(function($){
	/* 	<dl class="accor">
	<dt><a href="#">content title<span><i class="arror"></i></span></a></dt>
	<dd>content...</dd> */
	const Dl = $('.accor')
	const Dt = Dl.children('dt');
	const Dta = Dt.children('a');
	const Dd = Dl.children('dd');

	Dt.on('click',function(){
		if($(this).hasClass('action')){
	 	$(this).next('dd').stop().slideUp();
	 	$(this).removeClass('action');
	 }else{
		$(this).siblings().next('dd').stop().slideUp();
		$(this).next('dd').stop().slideDown();
		$(this).siblings().removeClass('action');
		$(this).addClass('action');
		}
	});

/*	const wrap = $('.wrap');
	wrap.append('<header id="headBox"></header>');*/
/*	const headBox = $('#headBox');
	const h1 = $('h1');
	h1.text('link');*/
/*	const Ul = $('.new_list');
	Ul.wrap('<div id="news"></div>');

	for (let i = 0; i < 5;i++){
		Ul.append('<li></li>')
		Ul.children('li').eq(i).text('list value 0' + (i+1) +' 생성하기')	}*/

/*	const cardLink = $('.card').find('a');
	const img = cardLink.children('img');
	const imgSrc = "../img/exercise_01/exercise_01.jpg" 
	const imgAlt = "사진이미지1"

	cardLink.on('mouseenter',function(){
		img.attr({src:"../img/exercise_01/exercise_02.jpg", alt: "사진이미지2"})
	});
	cardLink.on('mouseleave',function(){
		img.attr({src:imgSrc, alt:imgAlt})
	});*/

	const miniPro = $('#miniProduct');
	const indi = miniPro.children('.indicator');
	const indlLi = indi.children('li');
	const pro = miniPro.children('.product');
	// let n = 0;
	console.log(indlLi.length)
	indlLi.children('a').on('click',function(e){
		e.preventDefault();
		$(this).parent('li').siblings('li').removeClass('active');
		$(this).parent('li').addClass('active');
		n = $(this).parent('li').index();
		pro.children('ul').stop().animate({left: -100 * n +'%'},500)
	});


})(jQuery);
