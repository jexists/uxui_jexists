// spigen_main_content_02.js

(function($){
const irarea = $('.irarea');
const irLi = irarea.children('li');
const irA = irLi.children('a');
const irSpan = irA.children('span');

	irLi.on('mouseover',function(){
		$(this).children('a').stop().animate({'height':'100%','padding':'130px','color':'orange'});
		// $(this).children('a').css({'padding':'130px'});
		// $(this).children('a').css({'color':'orange'});
		$(this).children('a').children('span').css({'display':'block'});
	});

	irLi.on('mouseleave',function(){
		$(this).children('a').stop().animate({'height':'100px','padding':0,'color':'#fff'});
		// $(this).children('a').css({'padding':0});
		// $(this).children('a').css({'color':'#fff'});
		$(this).children('a').children('span').css({'display':'none'});
	});

})(jQuery);