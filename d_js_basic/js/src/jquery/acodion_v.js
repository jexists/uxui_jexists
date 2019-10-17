// acodion_v.js

(function(){
	const menuV = $('.accordion_menu_v');
	const menuDt = menuV.find('dt');
	const menuDd = menuV.find('dd');

	menuDd.eq(0).show();

	menuDt.on('click',function(){
		// $(this).siblings('dd').show(); //모든형제
		$(this).next(menuDd).siblings('dd').stop().slideUp(); //모든dd를 접은후 펼쳐라 (순서를바꿔) 
		$(this).next(menuDd).stop().slideToggle(); //선택하는아이의 다음거
	});


})(jQuery);