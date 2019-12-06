(function($){
 $('#gnb dt a').on('mouseenter',function(){
  $('#gnb dd').slideDown();
  $('#gnb>ul').addClass('action');
 })
 
 $('#gnb').on('mouseleave',function(){
  $('#gnb dd').slideUp();
  $('#gnb>ul').removeClass('action');
 })
 
 setInterval(function(){
  $('.slide_wrap').animate({marginLeft:'-100%'},function(){
   $('.slide_wrap').css({margin:0});
   $('.slide').eq(0).appendTo($('.slide_wrap'));
  })
 },3000)
 
})(jQuery);