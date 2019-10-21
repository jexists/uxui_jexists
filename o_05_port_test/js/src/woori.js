// woori.js

(function($){
 const wrap = $('#wrap');
 const gnb = $('#gnb');
 const gnbUl = gnb.children('ul');
 const gnbLi = gnbUl.children('li');
 const gnbDl = gnbLi.children('dl');
 const gnbDt = gnbDl.children('dt');
 const gnbDtA = gnbDt.children('a');
 const gnbDd = gnbDl.children('dd');
 const gnbDdA = gnbDd.children('a');

 gnb.on('mouseenter',function(){
 	gnbDd.stop().slideDown();
 	wrap.css({'backgroundColor':'rgba(0,0,0,0.6)'});
 });

 gnb.on('mouseleave',function(){
 	gnbDd.stop().slideUp();
 	wrap.css({'backgroundColor':'#18f'});
 });

 gnbDtA.on('focus',function(){
 	gnbDd.stop().slideDown();
 	wrap.css({'backgroundColor':'rgba(0,0,0,0.6)'});
 });

 gnbDdA.eq(-1).on('blur',function(){
 	gnbDd.stop().slideUp();
 	wrap.css({'backgroundColor':'#18f'});
 });

 gnbDdA.on('mouseover focus', function(){
 	$(this).parents('li').find(gnbDtA).addClass('action');
 });

 gnbDdA.on('mouseleave blur',function(){
 	$(this).parents('li').find(gnbDtA).removeClass('action');
 });


})(jQuery);