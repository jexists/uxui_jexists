// exercise.js

(function(){
	const body = $('body'),
		  wrap = $('#wrap');

	wrap.append('<section id="conBox"></section>');
	const conBox = $('#conBox');
	conBox.append('<h3 class="hidden">슬라이드예제</h3>');
	conBox.append('<div class="btn"></div>');
	const btnBox = conBox.find('.btn');
	btnBox.append('<button type="button" class="next"></button><button type="button" class="prev"></button>');
	const nextBtn = btnBox.children('.next');
	const prevBtn = btnBox.children('.prev');
	conBox.append('<div class="slide_size"><ul class="slide_wrap"></ul></div>');

	const lsUrl = '../img/exercise_01/' 
	const slide_LS = [
	{title: 'tasty autumn fruits', text: '쌀쌀한 가을날씨에 잘 어울리는 향긋한 과일티 2종', bg: 'exercise_01.jpg', link: '#'},
	{title: 'cream chessse muffin', text: '촉촉한 크림과 치즈, 다양한 토핑이 올라간 머핀', bg: 'exercise_02.jpg', link: '#'},
	{title: 'BTS pop-up house of BTS', text: '방탄소년단 팝업스토어는 폴 바셋과 함께합니다.', bg: 'exercise_03.jpg', link: '#'}]


	const slSize = conBox.children('.slide_size'); //w:100p
	const slWrap = slSize.children('.slide_wrap'); //UL = w:100p*lsLength
	const LS_length = slide_LS.length;
	slWrap.css({'width':100 * LS_length + "%"});
	for (i=0 ; i < LS_length ; i++){
		slWrap.append('<li></li>'); //w:
		const liEach = slWrap.children('li').eq(i);
		liEach.addClass(`slide_0${i+1}`)
		liEach.append('<dl><dt><dd class="text"></dd><dd><a href="#"></a></dd></dt></dl>');
		liEach.find('dt').text(slide_LS[i].title);
		liEach.find('dd.text').text(slide_LS[i].text);
		liEach.css({'backgroundImage':'url(' + lsUrl + slide_LS[i].bg + ')'});
		liEach.find('a').text('detail view');

	};
	
	const slLi = slWrap.children('li');
	slLi.css({'width':100 / LS_length + "%"});
	// slLi.eq(-1).clone(true);




/*	const Jslink =  function(temp){
		return body.append(`<script src="../js/src/temp/${temp}.js"></script`);
	};

		const JsLink = (temp) => {
		return body.append(`<script src="../js/src/temp/${temp}.js"></script>`);
	};
	viewBox.load('./temp/slide_01.html', () => {
		return JsLink('slide_01');
	});*/
})(jQuery);