//jq_01.js

(function($){
  // console.log($.fn.jquery);

  //css : #wrap {witdh:700px; height:auto; margin: auto; background-color: #faa;}
  // css의 매소드 형식을 만들었다. 
  // ;(종료) / - (camelCase) / 값은 문자""/
  $('#wrap').css({width: '700px', height:'auto', backgroundColor:'#faa'});
  $('h1').css({'width':'100%', 'height': 'auto', 'background-color':'#acf'});
  $('h2').css({'width':'100%', 'height':'auto', 'backgroundColor':'#ccc'}) //권장하는것

  // h2.addEventListener('click',function(){});
  $('h2').on('click',function(){
  	$('#wrap').animate({height:'1000px', backgroundColor:'#0af'});
  });

})(jQuery);