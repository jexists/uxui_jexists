// test_02_answer.js

(function($){
	 const product = $('.product');
	 const prodUl = product.find('ul');
	 let prodLi = prodUl.find('li');
	 const btn = $('.btn').find('button');

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
	} //HorizonSlide()
	//HorizonSlide()
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
	} //VerticalSlide()
	// VerticalSlide()
	const SimpleSlide = function(){
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
	} //SimpleSlide()
	// SimpleSlide()
})(jQuery);