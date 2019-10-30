
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
const slideE = guideBox.children('div');
let myn = 0;
let maxn = slideE.length;
let timed = 500;

// indicator.css({'zIndex':500});
// guideBox.css({'position':'relative', 'top':0,'left':0});
const MoveSlide = function(n){
	vindiLink.removeClass('action');
	vindiLink.parent('li').eq(n).children('a').addClass('action');
	guideBox.stop().animate({'left': -100 * n + '%'});
}
MoveSlide(0);


let go;
const goSlide = function(){
	go = setInterval(function(){
	myn++; if (myn >= maxn) {myn = 0;}
	MoveSlide(myn);},timed*6);
	console.log('go');
};
//goSlide();

const stopSlide = function(){
	clearInterval(go);
	console.log('stop');
};

vindiLink.on('click focus',function(e){
	e.preventDefault();
	// stopSlide();
	let parLi = $(this).parent('li');
	let i = parLi.index();
	myn = i;
	MoveSlide(myn);
	// console.log(i);
	
	// vindiLink.removeClass('action');
	// $(this).addClass('action');
	// guideBox.stop().animate({'left': -100 * i + '%'},timed);
});
viewBox.on('mouseleave', stopSlide);
viewBox.on('mouseenter', goSlide);

})(jQuery);

