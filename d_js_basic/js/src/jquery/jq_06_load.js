// jq_06_load.js

(function($){
	//jQeury 기초
/*
 js문서에서는 기준경로가 작성하고 있는 js문서가 아니다. 
  => (html문서에서 불러왔을 경우)
	html문서로 연결된 경우는 불러온 html 문서 기준으로 경로를 설정
  예) ../../html/jquery/temp/header.html (XX)
    => ./temp/header.html (정답!!!)

*/

	const wrap = $('#wrap');
	wrap.prepend('<div class="head_wrap">');
	const headWrap = $('.head_wrap');
	wrap.append('<div class="footer_wrap">');
	const footerWrap = $('.footer_wrap');


	headWrap.load('./temp/header.html',function(){
		const headBox = $('#headBox');
		headBox.css({'backgroundColor':'#3ff'});
	});

	// const contBox = $('#contentBox');


	footerWrap.load('./temp/footer.html',function(data)
		{console.log(data);});
	
	// wrap.load('../../data/test.json',function(data){
	$.getJSON('../../data/test.json',function(data){
		console.log(data);
	});

})(jQuery);