//main.js

(function($){
 //네비게이션
 $('#gnb dl').on('mouseenter',function(){
  $(this).find('dd').stop().slideDown();
 });
 
 $('#gnb dl').on('mouseleave',function(){
  $(this).find('dd').stop().slideUp();
 });
 
 //슬라이드 만들기
let j = 0;
/*setInterval(function(){
  j++;
  if(j > 2){j=0;}
  $('.slide_guide').animate({'top':-300*j + 'px'})
},3000);*/
 setInterval(function(){
  $('.slide_guide').animate({'top':-100 + '%'},function(){
   $(this).find('div').eq(0).appendTo('.slide_guide');
   $(this).css({'top':0});
  });
},3000);

//탭메뉴 만들기
$('.tab_i').children('li').on('click',function(e){
 e.preventDefault();
 var i = $(this).index();
 $('.tab_area').children('div').hide();
 $('.tab_area').children('div').eq(i).show();
 $(this).siblings().removeClass('action');
 $(this).addClass('action');
});
 
/* 모달윈도우 (팝업창만들기) */
 $('.con_btn').on('click',function(e){
   e.preventDefault();
   $('.popup').fadeIn();
   $('.popup_bg').fadeIn();
 });
 $('.close').on('click',function(e){
  e.preventDefault();
  $('.popup').fadeOut();
  $('.popup_bg').fadeOut();
 });

})(jQuery);