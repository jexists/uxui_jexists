//slide_03.js

(function(){
	const slideForm = $('.slide_03_form');
	const slideGuide = slideForm.children('ul');
	let slideLi = slideGuide.find('li'); //const X (추가된 li가 생겨서)

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

	nextBtn.on('click',function(e){
		e.preventDefault();
		myn++;
		if (myn >= bannerLen -1){myn=0;}
		slideGuide.stop().animate({'left':-100 * myn + '%'})
	})
	prevBtn.on('click',function(e){
		e.preventDefault();
		myn--;
		if (myn <= -1){myn=bannerLen-2;}
		slideGuide.stop().animate({'left':-100 * myn + '%'})
	})
})(jQuery);