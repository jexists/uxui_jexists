//slide_03.js

(function(){
	const slideForm = $('.slide_03_form');
	const slideGuide = slideForm.children('ul');
	let slideLi = slideGuide.find('li'); //const X (추가된 li가 생겨서)

	let timed = 500;

	//li에 이름을 부여 (slide_03_con_0$)
	for(let i = 0; i < slideLi.length; i++){
		let classname = 'slide_03_con_0' + (i+1);
		slideLi.eq(i).addClass(classname );
	}
	let cloneLi = slideLi.eq(-1).clone(true)
	//clone()사용시 true이면 기능까지 복제 
	// slideGuide.prepend(slideLi.eq(-1));
	cloneLi.prependTo(slideGuide);

	const slide03Btn = $('.slide_03_btn');
	const nextBtn = slide03Btn.children('.next');
	const prevBtn = slide03Btn.children('.prev');

	slideLi = slideGuide.find('li'); //새로 갱신된 li:6(언급한 liX)
	let myn = 0;
	const bannerLen = slideLi.length;
	// console.log(bannerLen); //갱신 안하면 5개 갱신 후 6개

	nextBtn.on('click',function(e){ //next버튼을 클릭했을때
		e.preventDefault(); //이전에 있었던 기능은 없애라
		myn++; //myn을 한개씩 더해라 (1,2,3,4,)
		if (myn >= bannerLen -1){  //만약에 myn이 슬라이드갯수 -1개뺀개수보다 크거나 같으면
			slideGuide.css({'left':'100%'}); //슬라이드감싼것이 100%이동시켜라 (왜 100%인가 css에서 젤 처음 -100%을해서 전에 있는것을 하고 싶어서) 
			myn=0;} //myn이 슬라이드갯수 -1개뺀개수보다 크거나 같으면 myn을 0으로 다시 초기화 시켜라
		let per = -100 * myn + '%'; //per은 -100* myn %
		slideGuide.stop().animate({'left':per},timed*10) //-100%씩 이동되어라 (먼저 뜯어놓고 자연스럽게 이동)
	});
	prevBtn.on('click',function(e){ //prev버튼을 클릭했을때
		e.preventDefault(); //이전에 있었던 기능은 없애고
		myn--; //myn을 한개씩 빼라 (4,3,2) myn의 기본은 0이 아니다 상황에 따라 다르다
		let per = -100 * myn + '%'; //per은 -100* myn %
		slideGuide.stop().animate({'left':per},timed*10, //-100%씩 이동되어라
		function(){
		if (myn <= -1){myn=bannerLen-2; //만약에 myn -1보다 작거나 크면 myn은 슬라이드갯수의 -2를 해라 (맨마지막으로 가야해서 기본&복사한거 빼기)
			per = -100 * myn + '%'; //per은 -100* myn %
			slideGuide.css({'left':per}); // myn 숫자가 마지막을 선택하기때문에 마지막으로 이동
			} 
		});
	});
})(jQuery);