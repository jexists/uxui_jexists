// jq_05_event.js

(function($){
	let menu = $('.menu');
	let menuUl = menu.children('ul');
	let menuLi = menuUl.children('li');
	let menuLink = menuLi.children('a');

	let mLiBg = menuLi.css('backgroundColor');
	let mLiBdr = menuLi.css('borderRadius');
	let mLinkColor = menuLink.css('color');
	let mLinkWeight = menuLink.css('fontWeight');
	menuLink.css({'outline':'0'});
	console.log(mLiBg, mLiBdr, mLinkColor, mLinkWeight);

let set = {
	licolor:mLiBg, //menuLi.css('backgroundColor')
	liborder:mLiBdr,
	linkcolor:mLinkColor,
	linkbold:mLinkWeight,
};

	// set.licolor

//focus: 초점이 잡힌 상태 (a, button, form 내부의 요소)
	menuLi.children('a').on('focus', function(){
		let mythis = $(this);
		mythis.parent('li').css({'backgroundColor':'#0af',
			'borderRadius':'0.5rem'});
		mythis.css({'color':'#fff', 'fontWeight': 'bold',
			'outline':'0'});
	});

		//blur: 초점이 잡힌 요소가 풀리는 상황
	menuLi.children('a').on('blur', function(){
		let mythis = $(this);
		mythis.parent('li').css({'backgroundColor':set.licolor,
			'borderRadius':set.liborder});
		mythis.css({'color':set.linkcolor, 'fontWeight':set.linkbold});
	});

//3가지 같은 내용==============================
	let mytop = $('.top_link').children('button');
	//두가지 쓰는 방법
	// mytop.on('mouseenter',function(){});
	// mytop.on('mouseleave',function(){});

	// //매소드 체인을 이용한 기능
	// mytop.on('mouseenter',function(){})
	// 		 .on('mouseleave',function(){});

	//hover사용하는 경우
	let topColor = mytop.css('backgroundColor');

	mytop.hover(function(){
		$(this).animate({'backgroundColor':'#fa5'},function(){
			$(this).animate({'width':'300%'}),function(){
				$(this).animate({'backgroundColor':'#f06'});
			}
		});
	},  //마우스 올렸을 경우
			function(){
		$(this).animate({'backgroundColor':topColor});
	}); //마우스 벗어났을경우

	// mytop.'click'(); //옛날버전
	//Click 은 미리 사전에 지정된 해당이벤트가 있다 그것을 삭제해야한다.
	mytop.on('click',function(event){
		event.preventDefault(); //선행되는 이벤트 제거
		$('html,body').animate({scrollTop:0});

	}); //지금버전 

	const win = $(window);
	const conBox = $('#contentBox');
	win.on('scroll', function(){
		let myscroll = $(this).scrollTop();
		// console.log(myscroll) //scroll이 얼만큼 움직였는지.
		if (myscroll > 150){
			conBox.css({'backgroundColor':'#aca', 'transition':'all 300ms ease'});
		}else{
		(myscroll <= 150)
			conBox.css({'backgroundColor':'#fca', 'transition': 'all 300ms ease'});
		}
	});
	
let beforeWidth = win.width(); //크기값이 변경되기전 가로값
	win.on('resize',function(){
		let afterWidth = win.width(); //크기값이 변경된 후 가로값

		if(beforeWidth !== afterWidth){
				console.log('크기가 변경되었습니다.');
				history.go(0);
		};
	});

/*
#### 자바스크립 새로고침의 방법
location.reload(true);  //새로고침 (F5번키) /쌤 추천
location.href = location.href; //상단 주소창에 있는 주소로 이동
history.go(0); 사용 기록중에 가장 최근기록위치로 이동 /메모리절약
*/

}(jQuery));