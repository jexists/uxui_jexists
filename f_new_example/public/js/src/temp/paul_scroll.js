// paul_scroll.js
(function($){
	//offset().top : 브라우저 최 상단에서 얼마큼 떨어져 있는가를 판단하는 기능
	//offset().left: 브라우저 왼쪽에서 얼만큼 떨어져 있는가를 판단하는 기능
	//scrollTop(): 브라우저의 위치가(스크롤) 이동되었을때 위치값을 판단

	const viewBox = $('#viewBox');
	const conBox = $('#conBox')
	const conBox2 = $('#conBox2')
	let viewLocation = viewBox.offset().top;
	console.log(viewLocation);
	let con1Location = conBox.offset().top;
	console.log(con1Location);
	let con2Location = conBox2.offset().top;

	let  winScroll; //= $(window).scrollTop();
	console.log(winScroll);

	let scrollResult = 0;
	let n = 0;

	$(window).on('mousewheel DOMMouseScroll', function(e){
		// console.log(e); 
		//이벤트중에 firefox: detail Chrome: originalEvent: delta / wheelDelta
		// console.log(e.detail) //존재 fireFox:값존재 (3) chrome: 0
		// console.log(e.originalEvent.wheelDelta) //fireFox:존재X / / 크롬: 값존재(120)
		let delta = e.originalEvent.wheelDelta;
		(delta) ? scrollResult = delta : scrollResult = e.detail * -40;
		// if(e.originalEvent.wheelDelta){ //크롬
		// 	scrollResult = e.originalEvent.wheelDelta;
		// }else{
		// 	scrollResult = e.detail * -40;
		// }
		(scrollResult >= 0 ) ? n++ : n--;
		// console.log(n);

		winScroll = $(window).scrollTop();
		if (winScroll >= con1Location){
			conBox2.css({backgroundColor:'#fff', marginLeft: '-50vw',
				transform:'rotate(45deg)', transition:'all 300ms ease'});
		}else{
			conBox2.removeAttr('style');
		}
	});

})(jQuery);