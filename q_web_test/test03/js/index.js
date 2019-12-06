(function($){
var nav = $('nav');
var navDt = nav.find('dt');
var navDd = nav.find('dd');
 
$('dt').children('a').on('mouseenter focus',function(){
 navDd.stop().slideUp();
 navDt.children('a').css({backgroundColor:'#30a3f3',color:'#333'})
 $(this).parent('dt').nextAll().stop().slideDown();
 $(this).css({backgroundColor:'#0066ad',color:'#fff'})
 $(this).parent('dt').nextAll('dd').eq(-1).children('a').on('blur',function(){
  navDd.stop().slideUp();
  navDt.children('a').css({backgroundColor:'#30a3f3',color:'#333'})
 })
});
nav.on('mouseleave',function(){
 navDd.stop().slideUp();
 navDt.children('a').css({backgroundColor:'#30a3f3',color:'#333'})
});
 

var slideWrap = $('.slide_wrap');
var slide =$('.slide');
var i=0;
slide.eq(i).siblings().hide();

 setInterval(function(){
  i++;
  if(i>2){i=0}
  slide.eq(i).fadeIn();
  slide.eq(i).siblings().fadeOut();
 },3000)
$('.golink').children('a').on('click',function(){
  $('.message').show(); 
 });
    
$('.message').children('a').on('click',function(){
   $('.message').hide(); 
});
    
$('.link').children('li').eq(0).children('a').on('click',function(){
  $('.gallay').hide(function(){
    $('.news').show();
})
  });
$('.link').children('li').eq(1).children('a').on('click',function(){
   $('.news').hide(function(){
    $('.gallay').show();
})
});
})(jQuery);