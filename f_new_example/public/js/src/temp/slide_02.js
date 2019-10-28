// slide_02.js

(function($){
	const conBox = $('#conBox');
	const indicator = conBox.find('.con_indicator');
	const indiLi = indicator.find('li');
	const cindiLink = indiLi.children('a');
	const guideBox = conBox.find('.guide');

	const nextBtn = conBox.find('.next');
	const prevBtn = conBox.find('.prev');

	cindiLink.on('click focus',function(e){
		e.preventDefault();
		let parLi = $(this).parent('li');
		let i = parLi.index();
		// console.log(i);
		cindiLink.removeClass('active');
		$(this).addClass('active');
		guideBox.stop().animate({'left':-100 * i + '%'});
	});


})(jQuery);