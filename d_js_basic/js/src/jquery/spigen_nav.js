// spigen_nav.js

(function($){
	const nav = $('#gnb');
	const navUl = nav.children('ul');
	const navLi = navUl.children('li');
	const navA = navLi.children('a');

	navA.next('ul').addClass('list');
	const list = $('.list');
	const listLi = list.children('li');
	let tt = listLi.contents();
	tt.wrap('<a href="#"></a>');

	nav.on('mouseover', function(){
		list.stop().slideDown();
	});
	nav.on('mouseleave', function(){
		list.stop().slideUp();
	});

	navA.on('focus',function(){
		list.stop().slideDown();
	});
	listLi.children('a').eq(-1).on('blur',function(){
		console.log('...')
		list.stop().slideUp();
	});

	navLi.on('mouseover',function(){
		$(this).children('a').css({'borderBottom':'2px solid #f70',
		'transition':'all 100ms ease'});
	});
	navLi.on('mouseleave',function(){
		$(this).eq(-1).children('a').css({'borderBottom':'none'})
	});

})(jQuery);