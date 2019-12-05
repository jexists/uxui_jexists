(function($){
 var slide = $('.slide');
 var i=0;
 var timed = 3000;
 
 slide.eq(i).siblings().hide();
 setInterval(function(){
  i++;
  if(i>2){i=0;}
  slide.eq(i).fadeIn();
  slide.eq(i).siblings().fadeOut();
 },timed);
})(jQuery);