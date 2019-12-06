(function($){
//// 
 $('dd').width(0);

 $('#gnb').find('dt').children('a').on('mouseenter focus',function(){
  /* 
  $('dd').slideUp()
  $(this).parent('dt').nextAll('dd').slideDown()
  */
  $('dd').hide();
  $(this).parent('dt').nextAll('dd').show(0, function(){
   $(this).animate({width:'100%'})
  });
 });
//// 
// $('#gnb').on('mouseleave',function(){
//  $('dd').slideUp()
// });
})(jQuery);