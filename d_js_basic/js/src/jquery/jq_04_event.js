// jq_04_evnets.js

(function($){
// jQuery 이벤트 이해하기

// 선택자.on("이벤트 종류",무언가 수행) //인과응보 콜백
// 선택자.on("이벤트 종류",function(){해당하는 이벤트 처리시(예:클릭) 수행하는 기능작성}); //on 매소드
/*
css상일경우
#contentBox:hover{background-color:#aaf;}
//hover는 왕복성을 가지고 있지만 자바스크립트는 가고오고둘다 써야한다.
*/
const conBox = $('#contentBox');
conBox.on('mouseenter',function(){
	$(this).css({'backgroundColor':'#aaf', transition:'all 400ms ease'});
});
// mouseover&mouseenter비슷하면서 다른기능

conBox.on('mouseleave',function(){
	$(this).animate({'backgroundColor':'transparent'}, 900);
});
// mouseout&mouseleave비슷하면서 다른기능
//&(this) 그것 중복해서 사용할때 씀

//====================================

const con = $('#contentBox');
const conUl = con.children('ul');
const conLi = conUl.children('li');
// console.log(conLi); //배열형식으로 나온다.
// const conLi = conUl.children('li:nth(0)');

//conLi.nth(0).css({}) //XXX 
// conLi.eq(0).css({'backgroundColor':'#fff'})

conLi.eq(0).on('click',function(){ //클릭
	$(this).css({'backgroundColor':'#fff'});
});

conLi.eq(1).on('dblclick',function(){ //더블클릭
	$(this).css({backgroundColor:'#777'});
});

conLi.eq(2).on('mousedown',function(evt){
	console.log(evt.button);
	// $(this).css({backgroundColor:'#07f'});

/*	switch(evt.button){
		case 0:
		$(this).css({backgroundColor:'#07f'});
		break;
		case 1:
		$(this).css({backgroundColor:'#f70'});
		break;
		case 2:
		$(this).css({backgroundColor:'#000', 'color':'#fff'});
		break;
		default:
		$(this).css({backgroundColor:'#aaa'});
		break;
	};*/

	if (evt.button ===0){
		$(this).css({backgroundColor:'#07f'});
	} else if (evt.button ===1){
		$(this).css({backgroundColor:'#f70'});
	} else if (evt.button ===2){
		$(this).css({backgroundColor:'#000', 'color':'#fff'});
	} else{
		$(this).css({backgroundColor:'#aaa'});
	}
});

conLi.eq(2).on('mouseup',function(){ //마우스안눌렀을때
	$(this).css({backgroundColor:'#fa0','color':'#333'});
});

conLi.eq(3).on('mousewheel DOMMouseScroll',function(evt){
	console.log(evt);
	$(this).css({backgroundColor:'#041'});
});

conLi.eq(4).on('mousemove',function(event){
	// console.log(event.offsetX, event.offsetY); //선택된 도형
	//$(this)의 왼쪽 상단을 기준좌표 선택된 도형기준
	// console.log(event.pageX, event.pageY); //브라우저 기준
	//브라우저 기준으로 왼쪽 상단 
	//pageXY screenXY offsetXY clientXY
	let x = event.offsetX;
	let y = event.offsetY;
	// $('.ball').css({"transform":"translate("+ x +"%," + y +"%)"});
	$('.ball').css({"transform":`translate(${x}%,${y}%)`});
});

conLi.eq(5).children('input').on('keyup',function(evt){
	console.log(evt.key, evt.keyCode);
});

})(jQuery);