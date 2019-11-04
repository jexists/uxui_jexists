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
		Ul.children('li').eq(i).text('list value 0' + (i+1) +' 생성하기')
	}*/
})(jQuery);