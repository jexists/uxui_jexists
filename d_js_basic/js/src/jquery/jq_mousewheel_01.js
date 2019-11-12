// jq_mousewheel_01.js

(function($){
/* let myarr = [];
 let myplus = [11, "aa", 900];
 myarr.push(10); // 뒤에 추가
 myarr.pop(); // 마지막 요소 제거
 myarr.unshift(10023); // 앞에 추가
 myarr.shift(); //앞요소 제거

 let myarrPlus = myarr.concat(myplus); //두개의 배열 합치기

 //push()  배열요소에 뒤에 추가적으로 넣는 기능 / 뒤에서 추가하는 기능
 //shift() 배열요소 앞에 있는 요소가 사라지게 하는 기능 / 앞에서 빼는 기능
 //pop(); 배열요소 뒤에 있는 요소가 사라지게 하는 기능 / 뒤에서 빼는 기능
 //unshift() 배열요소 앞에 추가적으로 넣는 기능
 //concat() 두개의 배열을 합치는 것*/
 const wrap = $('#wrap');
 const scrollEl = wrap.find('.scroll');
 let myScrollElTop = [];
 const htmlEl = $('html, body');
 //최초의 스크롤 위치값 설정
 //$('html, body').scrollTop(myScrollElTop[0]); //window사용X //아래처럼 사용
 htmlEl.animate({scrollTop:0}); //최초: 브라우저 키면 최상단으로 나오는것

 for(let i=0; i<scrollEl.length; i++){
 	let scTop = scrollEl.eq(i).offset().top;
 	myScrollElTop.push(scTop);
 }
 //console.log(myScrollElTop);

 let myStatus = true; //기본상태는 참
 let useN = 0;
 let n;
 let scrollLen = scrollEl.length;
 let timed = 2000;
 let ease = 'easeOutElastic'

  const ScrollMagic = function(){
  	htmlEl.animate({scrollTop:myScrollElTop[useN]},timed,ease,function(){
			myStatus = true;});
  }//ScrollMagic()

 $(window).on('mousewheel DOMMouseScroll',function(e){
 	//e.preventDefault();
 	//console.log(e.detail); //e.detail 파악 (firefox:3)
 	//console.log(e.originalEvent.wheelDelta); // (크롬:120)
  	
 	if(e.originalEvent.wheelDelta){
 		n = e.originalEvent.wheelDelta * -1; //아래로내리면 플러스 위로 스크롤시 -
 	}else{
 		n = e.detail * 40; //일반적인 마우스 기준 (터치 등은 의미없음/실직적으로는 사용X)
 		//파이어폭스랑 크롬 임의로 값 맞추기 
 		//그냥 양수인지 음수인지만 파악
 	}
 	//console.log(n);

	if(myStatus){
		myStatus = false; // 트랙패드?오류 상태를 강제적으로 바꾸기 
		if (n>0){
			useN++;
			if(useN >= scrollLen){useN=scrollLen-1;}
			console.log(useN);
			ScrollMagic();
		}else{
			useN--;
			if(useN < 0){useN=0;}
			console.log(useN);
			ScrollMagic();
		}
	}
 });

 //======================================
 const gnb = $('#gnb');
 const gnbUl = gnb.find('ul');
 const gnbLi = gnb.find('li');
 const gnbLink = gnbLi.find('a');

 gnbLink.on('click',function(e){
 	e.preventDefault();
 	//let thisLink = $(this).attr('href');
 	useN = $(this).parent('li').index();
 	//let thisOffset = $(thisLink).offset().top;
 	//htmlEl.animate({scrollTop:thisOffset});
 	ScrollMagic();
 });


//터치패드 트랙패드 사용시
let startP;
let endP;

$(window).on('touchstart',function(e){ //화면에 손가락이 닿는 순간
	startP = e.originalEvent.touches[0].pageY;
});
$(window).on('touchmove',function(e){ //touchmove: 움직일때 
		//ScrollMagic(); //배경을 움직이지 않게 멈추기 기능
		htmlEl.animate({scrollTop:myScrollElTop[useN]},0)
	});
$(window).on('touchend',function(e){ // 화면에 손가락을 
		//e.preventDefault();
		endP = e.originalEvent.changedTouches[0].pageY;
if(myStatus){
		myStatus = false; // 트랙패드?오류 상태를 강제적으로 바꾸기 
		if (startP>endP){
			useN++;
			if(useN >= scrollLen){useN=scrollLen-1;}
			console.log(useN);
			ScrollMagic();
		}else{
			useN--;
			if(useN<=-1){useN=0;}
			console.log(useN);
			ScrollMagic();
		}
	}
	});

})(jQuery);