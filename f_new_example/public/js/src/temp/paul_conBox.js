(function($){
	const conBox = $('#conBox');
	const conBtn = conBox.find('button');
	const bar = conBox.find('.bar');

	conBtn.on('click',function(e){
		e.preventDefault();
		bar.toggleClass('hideBar');
		//toggleClass():class이름을 넣었다가 빼고 하는 변환기능
		let view = bar.hasClass('hideBar'); 
		// hasClass(): class이름의 존재 유무 판단 유:true 무:false
		if(view){
			bar.stop(false,true).animate({width:0},2000)
		}else{
			bar.stop(false,true).animate({width:100+'%'},2000)
		}
	})
})(jQuery);