// slideAll_viewBox.js

(function($){
	const viewBox = $('#viewBox');
	const slideForm = viewBox.find('.slide_form');
	const slideWrap = viewBox.find('.slide_wrap');
	let slideEach = slideWrap.children('div');

// 광고영역 세팅 (마지막요소 복제 및 정리)
	slideEach.eq(-1).clone(true).prependTo(slideWrap);
	slideEach = slideWrap.children('div');
	let slideLen = slideEach.length;
	//console.log(slideLen);
	slideWrap.css({width: 100 * slideLen + "%", marginLeft: '-100%'});
	slideEach.css({width: 100 / slideLen + "%"})
	slideForm.css({overflow:'hidden'});
// 버튼 생성 (좌우버튼)===================
	const slideBtn = function(rel){ //함수로 감쌀필요X 관리차원으로 만듬
	 if (rel){slideForm.before('<div class="view_btn"><button type="button" class="next">\
			<i class="fas fa-angle-right"></i><span>다음내용보기</span></button>\
			<button type="button" class="prev">\
			<i class="fas fa-angle-left"></i><span>이전내용보기</span></button></div>');}};
	slideBtn(true);

// 버튼 생성 (인디케이터영역) =============
	slideForm.append('<ul class="indicator"></ul>');
	const indi = viewBox.find('.indicator');
	for (let i = 0; i < slideLen-1 ; i++){
		indi.append('<li><a href="#"><span></span></a></li>')
		let indiLi = indi.children('li').eq(i);
		indiLi.find('span').text(slideEach.eq(i+1).text());
		indiLi.find('span').css({display:'block', overflow:'hidden', width:0, height:0})
	}
	const indiLi = indi.children('li')
	indiLi.eq(0).addClass('action');
// 좌우 버튼 클릭시 이동 =================
	let n = 0;
	const viewBtn = viewBox.find('.view_btn').find('button');
	viewBtn.on('click',function(e){
		e.preventDefault();
		//console.log($(this));
		let has = $(this).hasClass('next');
		if(has){ //다음버튼클릭
			n++;
			if(n >= slideLen-1){n = 0; slideWrap.css({left:'100%'})}
	
		}else{ //이전버튼 클릭
			n--;
			}
			slideWrap.animate({left:-100 * n +'%'},function(){
				if(n <= -1){n = slideLen-2; slideWrap.css({left:-100 * n + '%'});
		}
	});
		indiLi.eq(n).siblings().removeClass('action')
		indiLi.eq(n).addClass('action');
		// console.log(n);
	}); //viewBtn.on('click')
//인디케이터 클릭 이동 ====================
indiLi.children('a').on('focus',function(e){
	e.preventDefault();
	n = $(this).parent('li').index();
	slideWrap.animate({left:-100 * n +'%'});
	//console.log(n);
	indiLi.eq(n).siblings().removeClass('action');
	indiLi.eq(n).addClass('action');
	//a를 클릭시에는해당하는 광고 배너로 포커스 처리하게 만들기
	$(this).on('click',function(e){
		e.preventDefault();
		slideEach.eq(n+1).find('a').focus();
	});
}); //indiLi.children('a').on('focus')
})(jQuery);