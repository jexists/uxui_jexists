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
	const MoveSlide = function(n, bool){
	indiLiLink.removeClass('action');
		indiLi.eq(n).children('a').addClass('action');
		slideGuide.stop().animate({'marginLeft':(-100 * n) + '%'},
			function(){
				slideEach.removeClass('action');	
				setTimeout(function(){
					slideEach.eq(n).addClass('action');
				},timed);
				});
		//play와 stop 버튼 동작 유무 판단
		if(!bool){
			playBtn.show();
			pauseBtn.hide();
		}else{
			pauseBtn.show();
			playBtn.hide();
		}
	};
	MoveSlide(0, true);


//일정시간마다 광고배너 움직이게하기

	let go; 
	const StopSlide = function(){clearInterval(go);};
	const GoSlide = function(){
   go = setInterval(function(){
	 myn++; 
	 if (myn >= maxn) {myn = 0;}
	 MoveSlide(myn, true);
	 },timed*6);};

  // GoSlide(); 삭제
  let playBanner = function(bool){
  	if(bool){
  		GoSlide();
  	}else{
			StopSlide();
  	}
  }//playBanner
  playBanner(true);

	pauseBtn.on('click',function(){playBanner(false);
		/*StopSlide();
		$(this).hide();
		$(this).siblings().show();*/
	});
  playBtn.on('click',function(){playBanner(true);
  	/*GoSlide();
  	$(this).hide();
		$(this).siblings().show();*/
	});

  viewBox2.on('mouseenter',function(){playBanner(false);});
  viewBox2.on('mouseleave',function(){playBanner(true);});

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
		MoveSlide(myn, true);
		playBanner(false);
	});


})(jQuery);

