// gnb_01.js

// 1. 마우스/키보드 포커스 처리시, 하위메뉴 전체가 나타나게 (배경하얗게)
// 2. 마우스/키보드 포커스 처리시, 하위메뉴 전체가 나타나게 (별도배경없이)
// 3. 마우스/키보드 포커스 처리시, 해당 메뉴 하위하나만 나타나게

(function($){
	//선택자만 요약해서 이름 만들기
	const gnb = $('#gnb');
	const gnbArea = gnb.children('ul');
	const gnbArLi = gnbArea.children('li');
	gnbArLi.children('a').addClass('titleLink');
	// attr('class':'titleLink');
	// addClass(titleLink);
	const titleLink = $('.titleLink');
	const partList = titleLink.next('ul');
	// const partListLi = titleLink.children('li');
	const subLink = partList.find('a');

	let timed = 500; //애니메이션 시간
// 1. 마우스/키보드 포커스 처리시, 하위메뉴 전체가 나타나게 (배경하얗게)
	// gnbArea.css('height','auto'); //css한개를 쓸경우는{}생략가능
	// gnb.css({'backgroundColor':'transparent'});
	// gnbArea.css({'height':'auto','backgroundColor':'#fff'});
	// titleLink.on('focus',function(e){
	//  e.preventDefault(); //기존에 있는 세팅 지우기 (페이지이동X)
	//  partList.stop().slideDown(timed);
	// }) //포커스 잡히면 보이게 하기
	// subLink.eq(-1).on('blur',function(){ //마지막 요소 eq(-1)
	//  partList.stop().slideUp(timed);
	// }); //마지막요소 블러처리되면 사라지게
	// gnbArea.on('mouseenter',function(){
	//  partList.stop().slideDown(timed);
	// }); //gnbArea에 마우스 올렸을경우 나타나게하기
	// gnb.on('mouseleave',function(){
	//  partList.stop().slideUp(timed);
	// });
// 2.마우스/키보드 포커스 처리시, 하위메뉴 전체가 나타나게 (별도배경없이)
	// gnb.css({'backgroundColor':'transparent'});
	// gnbArea.css({'height':'40px','backgroundColor':'#ccc'})
	// titleLink.on('focus',function(e){
	//  e.preventDefault(); //기존에 있는 세팅 지우기 (페이지이동X)
	//  partList.stop().slideDown(timed);
	// }) //포커스 잡히면 보이게 하기
	// subLink.eq(-1).on('blur',function(){ //마지막 요소 eq(-1)
	//  partList.stop().slideUp(timed);
	// }); //마지막요소 블러처리되면 사라지게
	// gnbArea.on('mouseenter',function(){
	//  partList.stop().slideDown(timed);
	// }); //gnbArea에 마우스 올렸을경우 나타나게하기
	// gnb.on('mouseleave',function(){
	//  partList.stop().slideUp(timed);
	// });
// 3. 마우스/키보드 포커스 처리시, 해당 메뉴 하위하나만 나타나게
	titleLink.on('mouseenter focus',function(){
		let ulSlide = $(this).next(partList);
		ulSlide.parent().siblings().find(partList).slideUp();
		ulSlide.slideDown();

		ulSlide.find('a').eq(-1).on('blur',function(){
			console.log('...') //확인하는방법
			ulSlide.slideUp();
			});
	});
	gnb.on('mouseleave',function(){
		partList.slideUp();
	})

})(jQuery);