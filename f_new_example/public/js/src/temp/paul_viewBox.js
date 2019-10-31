// paul_viewBox.js

(function($){
	const viewBox = $('#viewBox');
//버튼 및 인디케이터 영역
	const indi = viewBox.find('.indicator');
	const indiCon = indi.find('p').children('em');
	const indiBtn = indi.find('.view_btn').children('button');
//슬라이드 영역
	const slide = viewBox.find('.slide_form');
	const slideUl = slide.find('ul');
	const slideLi = slideUl.find('li');


	let liLen = slideLi.length;
	for(let i=0; i<liLen; i++){ //+반복문
		slideLi.eq(i).css({zIndex:liLen-i});
	}
	let textN = 0; 
	const textEm = function(n){indiCon.text("0" + (n+1));};
	textEm(textN);

	indiBtn.on('click', function(e){
		e.preventDefault();
		if ($(this).index() == 0 ){
			textN++;
			if(textN > liLen-1){textN = 0}
			textEm(textN);
		}else{
			textN--;
			if(textN < 0){textN = liLen-1}
			textEm(textN);
		}

	})

})(jQuery);
