// spigen_main.js

(function($){
	const body = $('body');
	const header = $('#headBox');
	const adver = $('#viewBox');
	const content = $('#conBox');
	const footer = $('#footBox');

// ======================

	let tempUrl = "./spigen_temp_pc/";

	header.load(tempUrl+'spigen_header.html',function(){
		/*body.append('<script src="../js/src/spigen_temp_pc/spigen_header_pc.js"></script>');*/
	});
	adver.load(tempUrl+'spigen_main_adver.html');
	content.load(tempUrl+'spigen_main_content_01.html');
	footer.load(tempUrl+'spigen_footer.html')


	setTimeout(function(){
   body.append('<script src="../js/src/spigen_temp_pc/spigen_header_pc.js"></script>'); 
}, 100);


})(jQuery);