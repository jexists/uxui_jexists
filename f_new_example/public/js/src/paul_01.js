(function($){
	const body = $('body');
	const wrap = $('#wrap');
	wrap.append('<header id="headBox"></header>');
	wrap.append('<section id="viewBox"></section>');
	wrap.append('<article id="conBox"></article>');
	wrap.append('<article id="conBox2"></article>');
	wrap.append('<article id="conBox3"></article>');
	wrap.append('<footer id="footBox"></footer>');

	const file = ['headBox', 'viewBox', 'conBox', 'conBox2', 'conBox3', 'footBox'];

	let htmlUrl = './temp/paul_';
	let jsUrl = '../js/src/temp/paul_';
	let scrSamp = function(file){
		 return body.append(`<script src="${jsUrl + file}.js"></script>`);
	};
	for(let i=0; i<file.length; i++){
		$('#'+file[i]).load(htmlUrl + file[i] + '.html', function(){
			scrSamp(file[i]);
		});
	}

	setTimeout(function(){
		scrSamp('scroll'); //scrSamp 함수
	},100);
})(jQuery);