//scroll_img.js

(function($){
	const win = $(window);
	const wrap = $('#wrap');
	const viewBox = $('#viewBox');
	viewBox.css({position:'fixed',top:0, backgroundColor:'#fff'});
	viewBox.find('.title').css({position:'relative', top:0});



//이미지 답기
	const viewFix = viewBox.find('.fix_img');
	let url = '../img/laptop/';

	for (let i = 0; i<122; i++){
		if(i<10){j = '000'+i;
		}else if(i<100){j='00'+i
		}else if(i<1000){j='0'+i}
	j += '.jpg';
		viewFix.append(`<img src="${url+'large_'+j}" alt="j")>`);
		viewFix.children('img').eq(i).css({zIndex:122-i});
	}//반복문
	viewFix.css({zIndex:50});
	viewFix.children('img').eq(0).show();



//글씨 투명해지게 만들기 +이미지 바꾸기	
	win.on('scroll',function(){
		let thisS = $(this).scrollTop();
		let op = 1 -(thisS * 0.001); 
		//Math.abs() = 절대값(무조건+)
		if(op<0){op=0}
		viewBox.find('.title').css({top: (-thisS/4)+'px',opacity: op})
		// console.log(op);
//이미지 교체하기
		let imgI = parseInt(thisS / 2000 * 121);
		if(imgI >=121){imgI=121;}
		console.log(imgI)
		viewFix.children('img').eq(imgI).siblings().hide();
		viewFix.children('img').eq(imgI).show();
//이미지교체후 밑에 내용나오기
		// let nowS;
		// if(imgI >=121){
		// 	const nowS = viewBox.offsetTop()
		// 	let  myTop = thisS - nowS;
		// 	console.log(myTop);
		// 	// viewBox.css({top:-myTop});
		// }
	});

})(jQuery)