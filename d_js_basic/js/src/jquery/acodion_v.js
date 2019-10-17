// acodion_v.js

(function(){
	const menuV = $('.accordion_menu_v');
	const menuDt = menuV.find('dt');
	const menuDd = menuV.find('dd');

	// menuDd.eq(0).show();

	// let t = menuDt.eq(0).contents(); //내용에 들어있는 모든 요소 파악
	// menuDt.wrap('<div>'); //기존코드를 유지하고 부모태그를 만든다.
	// console.log(t) //제목

	menuDt.contents().wrap('<a href="#"></a>')
	const menuDtLink = menuDt.find('a');
	menuDtLink.css({'display':'block', 'width':'100%', 
	'height':'100%', 'color':'inherit', 'textAlign':'center'});

	// menuDt.on('click',function(){
	// 	// $(this).siblings('dd').show(); //모든형제
	// 	$(this).next(menuDd).siblings('dd').stop().slideUp(); //모든dd를 접은후 펼쳐라 (순서를바꿔) 
	// 	$(this).next(menuDd).stop().slideToggle(); //선택하는아이의 다음거
	// });

	//선택요소의 뒤에 오는 모든 dd부터 그다음 dt이전의 요소인 dd까지
	//=> $(this).nextAll('dd').next('dt').prev('dd')

	menuDt.on('click', function(){
		let i = $(this).index()/2; //index는 dt+dd 포함
		// console.log(i);
		menuDd.eq(i).siblings('dd').slideUp();
		menuDd.eq(i).slideToggle(); //eq는 dd중에서 몇번째
		console.log($(this).nextAll('dd').next('dt').prev('dd'));
	});

const addC = function(){
	$(this).addClass('action');
};
const removeC = function(){
	$(this).removeClass('action');
};

	menuDtLink.on({"focus":addC, "blur":removeC});
})(jQuery);