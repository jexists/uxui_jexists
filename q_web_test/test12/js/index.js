(function($){
  $('dt').children('a').on('mouseenter focus',function(){
    $('dd').stop().slideUp();
    $('dt').children('a').css({backgroundColor:'#fff'})
    $(this).parents('li').find('dd').stop().slideDown();
    $(this).parent('dt').css({backgroundColor:'#777'})
    $(this).css({backgroundColor:'#777'})
    $(this).parents('li').find('dd').eq(-1).children('a').on('blur',function(){
      $('dd').stop().slideUp();
      $('dt').children('a').css({backgroundColor:'#fff'})
    });
  });
  $('#gnb').on('mouseleave',function(){
    $('dd').stop().slideUp();
    $('dt').children('a').css({backgroundColor:'#fff'})
  });
  setInterval(function(){
    $('.slide_wrap').animate({marginLeft:'-800px'},1000,function(){
      $('.slide_wrap').children('li').eq(0).appendTo($('.slide_wrap'));
      $('.slide_wrap').css({margin:0})
      
    })
    
  },3000);
})(jQuery);