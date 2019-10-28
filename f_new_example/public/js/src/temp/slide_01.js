// slide_01.js

(function($){
//.view_indicator 내부 li 선택 후 .slide_temp 내부의 .guide박스가 이동

//index() 순서 가져오는것 eq()순서를 주는것
//margin-left: -100%, -200% || position: relative; left: -100%, -200% 
const viewBox = $('#viewBox');
const indicator = viewBox.find('.view_indicator');
const indiLi = indicator.find('li');
const vindiLink = indiLi.children('a');
const guideBox = viewBox.find('.guide');

// indicator.css({'zIndex':500});
// guideBox.css({'position':'relative', 'top':0,'left':0});

vindiLink.on('click focus',function(e){
	e.preventDefault();
	let parLi = $(this).parent('li')
	let i = parLi.index();
	// console.log(i);
	vindiLink.removeClass('action');
	$(this).addClass('action');
	guideBox.stop().animate({'left': -100 * i + '%'});
});

})(jQuery);