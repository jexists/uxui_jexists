// jq_landing_01.js

(function($){
//스크롤시 header영역 변화

 const win = $(window);
 const headBox = $('#headBox');
 const viewBox = $('#viewBox')
 const con_01= $('#conBox_01');
 const con_02= $('#conBox_02');
 const con_03= $('#conBox_03');
 let winH = win.outerHeight(); //브라우저의 높이값
 let headBoxH = headBox.outerHeight();

 //con_01의 위치에서 브라우저의 2/3높이 전에서 구동처리
 let con_01_offset = con_01.offset().top;
 let myCon01_offset = con_01_offset - winH/3*2;
 //con_02의 위치에서 브라우저의 1/2높이 전에서 구동처리
 let con_02_offset = con_02.offset().top;
 let myCon02_offset = con_02_offset - (winH/2);
 //con_03의 위치에서 브라우저의 1/2높이 전에서 구동처리
 let con_03_offset = con_03.offset().top;
 let myCon03_offset = con_03_offset - (winH/2);

 win.on('scroll',function(){
 	let winScroll = win.scrollTop();
//해더박스 기능
 	if(winScroll > headBoxH){
 		headBox.addClass('action');
 	}else{
 		headBox.removeClass('action');
 	}
//viewBox 나타나기 만들기
	if(winScroll > headBoxH/2){
		viewBox.find('h2').addClass('action');
		// $('h2').addClass('action');
		viewBox.find('p').addClass('action');
	}else{
		$('h2').removeClass('action');
		viewBox.find('h2').removeClass('action');
		viewBox.find('p').removeClass('action');
	}
let conImg = con_01.find('.narr').children('.img_box');
let conNar = con_01.find('.narr').children('.nar_box');
 	if(winScroll > myCon01_offset){
 		con_01.find('h2').addClass('action');
 		conImg.addClass('action');
 		conNar.addClass('action');

 	}else{
 		con_01.find('h2').removeClass('action');
 		conImg.removeClass('action');
 		conNar.removeClass('action');
 	}

 	if(winScroll > myCon02_offset){
 		con_02.find('h2').addClass('action');
		$('.con_02').addClass('action');
 	}else{
 		con_02.find('h2').removeClass('action');
 		$('.con_02').removeClass('action');
 	}

//스크롤 처리시 03이미지가 왼쪽에서부터 오른쪽으로 이동
let n = 0;
if(winScroll > myCon03_offset){
	let myLeft = winScroll - myCon03_offset;
	let myn = Math.round(myLeft % 9);
	if(myn<10){n='0'+myn;}else{n=myn;}
	console.log(myn);



	// for(let i = 0; i<9; i++){	}
	con_03.find('h2').addClass('action');
	con_03.find('.mv_bird').css({top:myLeft +'px', left:myLeft + 'px',
		backgroundImage:'url(../../img/bird/bird_'+ n +'.png)'});
}

 });

 let a = Math.random()*45; //랜덤으로 숫자 나오게하기 (로또만들기)
 let b = Math.round(4.6); //반올림
 let c = Math.ceil(4.6); //올림
 let d = Math.floor(4.9); //내림
 let e = Math.abs(-4.9); //절대값 (무조건 양수)
 console.log(a, b, c, d, e)
 //18 34 3 38
})(jQuery);