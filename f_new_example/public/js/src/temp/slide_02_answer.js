// slide_02_answer.js
(function($){
	const viewBox2= $('#viewBox_02');
	const indicator = viewBox2.find('.indicator');
	const indiLi = indicator.find('li');
	const indiLiLink = indiLi.children('a');
	
	const slideForm = viewBox2.find('.slide_02_form');
	const slideGuide = slideForm.children('.guide');
	const slideEach = slideGuide.children('.banner_area');

	let timed = 500; //0.5초
	let myn = 0;
	let maxn = slideEach.length; //슬라이드갯수

	// slideEach.eq(0).addClass('action');
	// // indiLiLink.eq(0).addClass('action');
	// indiLi.eq(0).children(indiLiLink).addClass('action');
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


	//변수 i는 외부에서 공용으로 사용할 수 있도록, 전역 변수로 처리
	//인디케이터, 광고 배너이동후 처리하는 부분 등의 내용은 별도 함수처리

	//setInterval(), clearinterval()

//일정시간마다 광고배너 움직이게하기

	// let myn = 0; 지우기
	let go; 
	const StopSlide = function(){clearInterval(go);};
	const GoSlide = function(){
   go = setInterval(function(){
	 myn++; 
	 if (myn >= maxn) {myn = 0;}
	 MoveSlide(myn);
	 },timed*6);};

  GoSlide();
  // viewBox2.on('mouseenter', StopSlide);
  // viewBox2.on('mouseleave',	GoSlide);

  viewBox2.on({'mouseenter':StopSlide, 'mouseleave':GoSlide});

// 클릭시 배너 움직이게 만들기
  indiLiLink.on('click focus',function(e){
		e.preventDefault();
		StopSlide(); //포커스일때 멈춰라
		let myThis = $(this);
		let myThisPar = myThis.parent('li');
		let i = myThisPar.index();
		myn = i; //let 사용X
		MoveSlide(myn);
	});

/*let i = 0;
let maxi = 3;
timed = 3000;
let go; 
let Goslide = function(){
go = setInterval(function(){
	i++; 
	if(i >= maxi){ i = 0;}

		indiLiLink.removeClass('action');
		indiLiLink.eq(i).addClass('action');
		slideGuide.animate({'marginLeft':(-100 * i) + '%'},
			function(){
				slideEach.removeClass('action');
				setTimeout(function(){
					slideEach.eq(i).addClass('action');
				});
				});
},timed);};

	Goslide(); //최초의 수행
viewBox2.on('mouseenter',function(){
	clearInterval(go); //강제로 삭제하는 기능
});
viewBox2.on('mouseleave',function(){
	Goslide(); //벗어나면 다시 기능 넣기
});*/

//triger
	
})(jQuery);

// let i = 0;
// let maxi = 4;
// let timed = 1000;
// let go; 
// let Goslide = function(){
// go = setInterval(function(){
// 	i++; 
// 	if(i >= maxi){ i = 0;}
// 		console.log(i);
// },timed);};

// 	Goslide(); //최초의 수행
// $(document).on('mouseenter',function(){
// 	clearInterval(go); //강제로 삭제하는 기능
// });
// $(document).on('mouseleave',function(){
// 	Goslide(); //벗어나면 다시 기능 넣기
// });
// setTimeout(function(){clearInterval(go);},timed*15);