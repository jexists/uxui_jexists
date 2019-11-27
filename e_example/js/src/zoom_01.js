//zoom_01.js

(function($){
	let url = "../img/coffee/";
	const thumImg = ['menu_5.png','menu_6.png','menu_7.png','menu_8.png'];

	const big = $('.big');
	const smallLi = $('.small').find('li');
	const view = $('.view');

 const myLoca = $('.location');
 const myPer = $('.per');
 const mouLoca = $('.mouse_location');

	const imgSet = function(i){
		big.css({backgroundImage:`url('${url+thumImg[i]}')`});
 		view.css({backgroundImage:`url('${url+thumImg[i]}')`});
 		mouLoca.css({backgroundImage:`url('${url+thumImg[i]}')`});
	}
	imgSet(0);

 smallLi.on('mouseenter focus',function(){
 	let i = $(this).index();
 	imgSet(i);
 });

 //offsetX, offsetY
 //pageX(), pageY()
 //clientX(),clientY() 
 //screenX(), screenY() 모니터화면 

 //Math 함수
 // Math.round() = 반올림
 // Math.ceil() = 올림
 // Math.floor() = 내림
 // Math.random() = 0~1까지 랜덤 숫자

 //위치값 %로 전환 => 좌표 / 기준크기 *100
 //vw => 값 / 스크린 크기 * 100

 //소수점 3자리 숫자에서 올림
 //Math.ceil( (값)*100 ) / 100

 let bigW = big.outerWidth();
 let bigH = big.outerHeight();
 
 mouLoca.hide();

 big.on('mousemove',function(e){
 	let ofx = e.offsetX;
 	let ofy = e.offsetY;
 	// console.log(e)

 	myLoca.find('span').text(' X : ' + ofx + ', Y : ' + ofy);

 	let perX = parseInt(ofx / bigW * 100);
 	let perY = Math.floor(ofy / bigH * 100);

 	myPer.find('span').text(' X : ' + perX + '%, Y : ' + perY + '%');

 	view.css({backgroundPosition: perX + '% ' + perY + '%'});
 	mouLoca.fadeIn(function(){

 	mouLoca.css({backgroundPosition: perX + '% ' + perY + '%',
 		top: (ofy +5)+ 'px', left: (ofx+5) +'px'});
 	// mouLoca.css({left: perX + '%', bottom: + '%'});
 	});
 });

 big.on('mouseleave',function(){
  mouLoca.fadeOut();
 });
})(jQuery);