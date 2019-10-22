// spigen_header_pc.js

(function($){
//= 1. #gnb 영역내부에 있는 ul의 내용을  .side_gnb_area에 복붙
// clone()매서드를 사용

	const gnb = $('#gnb');
	const sideGnbArea = $('.side_gnb_area');
	const openGnBtn = $('#gnb_btn>button');
	const closeGnBtn = $('.close_gnb_btn>button');
	const sideGnb = $('.side_gnb'); //나타내기
	const gnbDl = gnb.find('dl');
	const gnbDd = gnb.find('dd'); 
	const gnbDt = gnb.find('dt');
	const gnbTitleLink = gnbDt.children('a');
	const gnbListLink = gnbDd.children('a');

	const addAction = function(){
		let li = $(this).parents('li');
		li.find(gnbTitleLink).addClass('action');
		li.siblings().find(gnbTitleLink).removeClass('action');
		gnbDd.stop().slideDown();}
	const removeAction = function(){
		$(this).parents('li').find(gnbTitleLink).removeClass('action');
		gnbDd.stop().slideUp();}

	let time = 600;

	let gnbContents = gnb.contents().clone();
	sideGnbArea.append(gnbContents);

//= 2. close_gnb_btn 버튼 클릭시 side_gnb_area 나타내기

	openGnBtn.on('click',function(e){
		e.preventDefault();
		sideGnb.stop().fadeIn(time,function(){
			$(this).on('keyup',function(e){
				if(e.keyCode == 27)
					{sideGnb.stop().fadeOut();
					openGnBtn.focus()}
			});
		});
		closeGnBtn.focus();


		//sideGnb.css({'display':'block'});//가능&효과X
	});

	closeGnBtn.on('click',function(e){
		e.preventDefault();
		sideGnb.stop().fadeOut(time*2);
		//sideGnb.css({'display':'none'});//가능&효과X
	});

//= 3. #gnb에 마우스 올렸을 경우 dd를 나타내기

/*	gnbDl.on('mouseenter',function(){
		$(this).find(gnbTitleLink).addClass('action');
		// $(this).siblings().find(gnbTitleLink).removeClass('action');
		gnbDd.stop().slideDown();
	});

	gnbDl.on('mouseleave',function(){
		$(this).find(gnbTitleLink).removeClass('action');
		gnbDd.stop().slideUp();
	});*/
//= 3. 정리: #gnb에 마우스 올렸을 경우 dd를 나타내기 ====
	// gnbDl.on('mouseenter',addAction);
	// gnbDl.on('mouseleave',removeAction);

	gnbDl.on ({'mouseenter':addAction,'mouseleave':removeAction})

	gnbTitleLink.on('focus',addAction);

	gnbListLink.eq(-1).on('blur', function(){
		gnbDd.stop().slideUp();	
	});



//= 4. #gnb에 dt에 focus 처리되면 dd가 나타내기
// 포커스:a, button, form(input, textarea, select)

	// gnbTitleLink.on('focus', function(){
	// 	gnbDd.stop().slideDown();
	// });
	// gnbListLink.eq(-1).on('blur',function(){
	// 	gnbDd.stop().slideUp();
	// });


// focus 제어하기
// .side_gnb_area 내부의 마지막 a 요소에서 blur처리되면, 
// .close_gnb_btn위치로 다시 focus 처리되어라
const sideLink = sideGnbArea.find('a');
const sideLastLink = sideLink.eq(-1);

// sideLastLink.on('blur', function(){
//  closeGnBtn.attr({'tabindex':1});
//  closeGnBtn.focus();
// });


// .side_gnb_area에서 키보드 esc 키를 누르면 빠져나가고 이전의 위치
//-> .side_gnb_area가 보이는 곳에서 수행

sideGnbArea.on('keyup',function(e){
	console.log(e);

});


})(jQuery);