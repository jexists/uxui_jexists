// main.js

(function($){
	const body = $('body');
	const wrap = $('#wrap');
	wrap.append('<section id="viewBox"></section>');
	const viewBox = $('#viewBox');
	wrap.append('<section id="conBox"></section>');
	const conBox = $('#conBox');
	
	//script 내용 간편작성함수 생성
	const JsLink = (temp) => {
		return body.append(`<script src="../js/src/temp/${temp}.js"></script>`);
	};
	viewBox.load('./temp/slide_01.html', () => {
		JsLink('slide_01');
	});
	conBox.load('./temp/slide_02.html', () => {
		JsLink('slide_02');
	});
	wrap.append('<section id="viewBox_02"></section>');
	const vB2 = $('#viewBox_02');
	vB2.load('./temp/slide_02_answer.html',function(){
		JsLink('slide_02_answer')
	});

})(jQuery);