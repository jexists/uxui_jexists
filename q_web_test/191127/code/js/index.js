//index.js

(function($){
		var dtLink = $('.gnb').find('dt').children('a');
		var dd = $('.gnb').find('dd');
		
		dtLink.on('mouseenter focus',function(){
				$(this).parent('dt').nextAll('dd').slideDown();
				$(this).parent('dt').addClass('act');
				
		});
		dtLink.parents('dl').on('mouseleave',function(){
				dd.slideUp();
				$('.gnb').find('dt').removeClass('act');
		});
		var slideWrap = $('.slide_wrap');
		//var n=0;
		setInterval(function(){
				// n++;
				// if(n>4){n=0}
				slideWrap.animate({marginTop: -400 + 'px'},2000,function(){
				slideWrap.children('li').eq(0).appendTo(slideWrap);
				slideWrap.css({marginTop:0});
		});
				
		});
		
		
})(jQuery);