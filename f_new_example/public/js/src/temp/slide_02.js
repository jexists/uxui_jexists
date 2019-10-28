// slide_02.js

(function($){
	const conBox = $('#conBox');
	const indicator = conBox.find('.con_indicator');
	const indiLi = indicator.find('li');
	const indiLink = indiLi.children('a');
	const guideBox = conBox.find('.guide');

	indiLink.on('click focus',function(e){
		e.preventDefault();
		let parLi = $(this).parent('li');
		let i = parLi.index();
		console.log(i);
		indiLink.removeClass('active');
		$(this).addClass('active');
		guideBox.stop().animate({'left':-100 * i + '%'});
	});
})(jQuery);