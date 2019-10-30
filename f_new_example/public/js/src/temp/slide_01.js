
// slide_02_answer.js
(function($){
	const viewBox2= $('#viewBox_02');
	const indicator = viewBox2.find('.indicator');
	const indiLi = indicator.find('li');
	const indiLiLink = indiLi.children('a');
	
	const slideForm = viewBox2.find('.slide_02_form');
	const slideGuide = slideForm.children('.guide');
	const slideEach = slideGuide.children('.banner_area');
	const viewBtn = viewBox2.find('.view_btn');
	const playBtn = viewBtn.find('.play');
	const pauseBtn = viewBtn.find('.pause');

	let timed = 500; //0.5초
	let myn = 0;
	let maxn = slideEach.length; //슬라이드갯수

// 공통기능 수행
	const MoveSlide = function(n){
	indiLiLink.removeClass('action');
		indiLi.eq(n).children('a').addClass('action');
		slideGuide.stop().animate({'marginLeft':(-100 * n) + '%'},
			function(){
				slideEach.removeClass('action');	
				setTimeout(function(){
					slideEach.eq(n).addClass('action');
				},timed);
				});
	};
	MoveSlide(0);


//일정시간마다 광고배너 움직이게하기

	let go; 
	const StopSlide = function(){clearInterval(go);};
	const GoSlide = function(){
   go = setInterval(function(){
	 myn++; 
	 if (myn >= maxn) {myn = 0;}
	 MoveSlide(myn);
	 },timed*6);};

  // GoSlide(); 삭제
/*  let playBanner = function(bool){
  	if(bool){
  		GoSlide();
  	}else{
			StopSlide();
  	}
  }//playBanner
  playBanner(true);*/

	pauseBtn.on('click',function(){
		StopSlide();
		$(this).hide();
		$(this).siblings().show();
	});
  playBtn.on('click',function(){
  	GoSlide();
  	$(this).hide();
		$(this).siblings().show();
	});

  // viewBox2.on('mouseenter',function(){playBanner(false);});
  // viewBox2.on('mouseleave',function(){playBanner(true);});

// 클릭시 배너 움직이게 만들기
// playBtn.hide(); //지우기
  indiLiLink.on('click focus',function(e){
		e.preventDefault();
		e.stopPropagation(); //움직임이 부드럽게 제거 
		// console.log(e.bubbles);
		StopSlide(); //포커스일때 멈춰라
		let myThis = $(this);
		let myThisPar = myThis.parent('li');
		let i = myThisPar.index();
		myn = i; //let 사용X
		MoveSlide(myn);
		// playBanner(false);
	});


})(jQuery);


/*
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

*/