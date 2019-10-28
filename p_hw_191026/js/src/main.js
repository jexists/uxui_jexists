// main.js

(function($){
	const body = $('body');
	const wrap = $('#wrap');
	wrap.append('<header id="headBox"></header>');
	const headBox = $('#headBox');
	wrap.append('<section id="viewBox"></section>');
	const viewBox = $('#viewBox');
	//script 내용 간편작성함수 생성

	const JsLink = (temp) => {
		return body.append(`<script src="../js/src/temp/${temp}.js"></script>`);
	};
	headBox.load('./temp/header_01.html',function(){
		JsLink('header_01');
	});
	viewBox.load('./temp/slide_01.html', () => {
		JsLink('slide_01');
	});


})(jQuery);