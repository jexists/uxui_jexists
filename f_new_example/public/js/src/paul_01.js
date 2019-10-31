(function($){
	const body = $('body');
	const wrap = $('#wrap');
	wrap.append('<header id="headBox"></header>');
	wrap.append('<section id="viewBox"></section>');
	wrap.append('<article id="conBox"></article>');
	wrap.append('<footer id="footBox"></footer>');

	const file = ['headBox', 'viewBox', 'conBox', 'footBox'];

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
})(jQuery);