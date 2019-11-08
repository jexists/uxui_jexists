// slide_plug_samp_01.js


$.fn.mySlide = function(){
	 const slide = this;
	 const product = $('.product');
	 const prodUl = product.find('ul');
	 let prodLi = prodUl.find('li');

//버튼생성 ===============================================
	let makeBtn = '<div class="btn"><button type="button" class="next"><i class="fas fa-angle-right"></i><span>다음내용보기</span></button>\
				    <button type="button" class="prev"><i class="fas fa-angle-left"></i><span>이전내용보기</span></button></div>'
	slide.prepend(makeBtn);
	const btn = $('.btn').find('button');

//슬라이드 기능 생성 ===============================================
	const HorizonSlide = function(){
	 prodUl.find('li').eq(-1).clone().prependTo(prodUl);
	 prodLi = prodUl.find('li');
	 let prodLen = prodLi.length;
	 prodUl.css({position: 'relative', left: 0, 'marginLeft':'-100%', 'width': 100 * prodLen + '%'});
	 prodLi.css({'width':100/prodLen+'%'})

	 let i = 0;
	 btn.on('click',function(e){
	 	e.preventDefault();
	 	let btnL = $(this).hasClass('next');
	 	if(btnL){
	 		i++;
	 	 if(i >= prodLen-1){i = 0; prodUl.css({left:100+'%'});}
	 		prodUl.animate({left:-100*i +'%'});
	 	}else{
	 		i--;
	 		prodUl.animate({left:-100*i +'%'},function(){
	 	 if(i <= -1){i=prodLen-2; prodUl.css({left:-100*(prodLen-2)+'%'});}
	 		});
	 	}
	 });
	} //HorizonSlide() ==================================
	// HorizonSlide()
	const VerticalSlide = function(){
	 prodLi.eq(-1).clone().prependTo(prodUl);
	 prodLi = prodUl.find('li');

	 let prodH = product.outerHeight();
	 let prodLen = prodLi.length;

	 prodUl.css({width:'100%', height: 100 * prodLen + '%',
	 	position:'relative', left:0, top:0,
	 	transform:`translateY(${-prodH}px)`});
	 prodLi.css({width:'100%', height: prodH});

	 let i = 0;
	 btn.on('click',function(e){
	 	e.preventDefault();
	 	let btnL = $(this).hasClass('next');
	 	if(btnL){
	 		i++;
	 		if(i>=prodLen-1){i=0; prodUl.css({top:prodH +'px'})}
	 		prodUl.animate({top:-prodH*i +'px'})
	 	}else{
	 		i--;
	 		prodUl.animate({top:-prodH*i +'px'},function(){
	 		if(i<=-1){i=prodLen-2; prodUl.css({top:-prodH*i +'px'})}
	 		})
	 	}
	 })
	} //VerticalSlide() =================================
	// VerticalSlide()
	const BasicSlide = function(){
	 let prodLen = prodLi.length;
	 let i = 0;
	 btn.on('click',function(e){
	 	e.preventDefault();
	 	let btnL = $(this).hasClass('next');
	 	if(btnL){
	 		i++; if(i >= prodLen){i=0}
	 	}else{
	 		i--; if(i <= -1){i=prodLen-1}
	 	}
	 		prodUl.css({marginLeft:-100 * i + '%'})
	 });
	} //BasicSlide() ===================================
	// BasicSlide()
	const FadeSlide = function(){
	  prodUl.css({position:'relative', width: '100%'});
	  prodLi.css({position:'absolute', width: '100%'});
	  prodLi.eq(0).nextAll().stop().hide();
	  let i = 0;
	  let prodLen = prodLi.length;

	  btn.on('click', function(e){
	  	e.preventDefault();
	  	btnL = $(this).hasClass('next');
	  	if (btnL){
	  		i++;
	  		if(i >= prodLen){i=0;}
	  	}else{
	  		i--;
	  		if(i < 0){i=prodLen-1;}
	  	}
	  		prodLi.eq(i).css({zIndex:100});
	  		prodLi.eq(i).stop().fadeIn(
	  			function(){prodLi.css({zIndex:0});});
	  		prodLi.eq(i).siblings().stop().fadeOut();
	  });
	} //FadeSlide() =====================================
	//FadeSlide()
product.css({overflow:'hidden'});

	//함수를 객체화 처리
	return {
		horizon: HorizonSlide,
		vertical: VerticalSlide,
		basic: BasicSlide,
		fade:FadeSlide
	};
	// slideList.basic();
}


/*
$.fn = 삽입
this = 2가지 의미
*/
