// paul_viewBox.js

(function($){
	const viewBox = $('#viewBox');
//버튼 및 인디케이터 영역
	const indi = viewBox.find('.indicator');
	const indiCon = indi.find('p').children('em');
	const indiBtn = indi.find('.view_btn').children('button');
	const fakeBtn = $('.fake_btn')
//슬라이드 영역
	const slide = viewBox.find('.slide_form');
	const slideUl = slide.find('ul');
	const slideLi = slideUl.find('li');
//시작
	let liLen = slideLi.length;
	const slideZindexSet = function(){ //반목문 함수화!
	for(let i=0; i<liLen; i++){ //+반복문
		slideLi.eq(i).css({zIndex:liLen-i});
	}
	}
	slideZindexSet(); //함수화했던 반복문 실행
//indicator 숫자 변환
	let textN = 0; 
	const textEm = function(n){indiCon.text("0" + (n+1));};
	textEm(textN);
//첫번째 슬라이드빼고 숨기기
	slideLi.eq(0).siblings().hide();
	slideLi.eq(0).find('dl').addClass('action');
	fakeBtn.hide();
//indicator를 누를시 기능
	indiBtn.on('click', function(e){
		e.preventDefault();
		fakeBtn.show();
		if ($(this).index() == 0 ){
			textN++;
			if(textN > liLen-1){textN = 0}
			textEm(textN);
		}else{
			textN--;
			if(textN < 0){textN = liLen-1}
			textEm(textN);
		}
		// slideLi.eq(textN).siblings().fadeOut();
		// slideLi.eq(textN).fadeIn();
		let slideThis = slideLi.eq(textN)
		slideThis.css({zIndex: liLen+2, width: 0, overflow:'hidden', padding:0});
		slideThis.css({dispaly:'block',});
		slideThis.stop().slideDown(function(){
			slideThis.animate({width:100 + "%", paddingLeft:'5vw'},
				1000,'easeOutCubic',function(){
				slideThis.siblings().hide();
				slideZindexSet();
				fakeBtn.hide();
				slideThis.siblings().find('dl').removeClass('action');
				slideThis.find('dl').addClass('action');
			}); // slideThis.animate
		}); //slideThis.slideDown
	}); //indiBtn.Click

})(jQuery);

/*
stop 기본 .stop({true,true})
.stop({clearQueue,jumpToEnd})
첫번째 clearQueue :대기중인 애니메이션을 제거할지 여부 / 처음에 눌렀을때 삭제
jumpToEnd 현재 애니메이션을 즉시 완료할지 여부 / 끝에 애니메이션 흐름만 해줌

slideToggle 
*/