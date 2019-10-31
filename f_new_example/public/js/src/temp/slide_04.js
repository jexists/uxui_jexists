// slide_04.js

(function($){
	const imgUrl = '../img/slide/' //이미지 경로 (html메인기준)
	let sample = {title:'title_1', content:'slide content....', linkText:'바로가기', link:'링크주소', bgimg: 'img.jpg'}
	let imgList;

	$.ajax({
		async: false,
		type:'GET',
		url:'../data/slide_04.json',
		dataType:'json',
		error:function(){console.log('data error');},
		success: function(d){imgList = d; return imgList}
	})
	console.log(imgList);
	/*[//이미지파일명
	{title:'philippine', content:'필리핀....', linkText:'바로가기', link:'https://www.naver.com/', bgimg: 'slide_01.jpg'},//슬라이드1
	{title:'taiwan', content:'타이완....', linkText:'바로가기', link:'링크주소', bgimg: 'slide_02.jpg'},//슬라이드2
	{title:'united state of america', content:'미국....', linkText:'바로가기', link:'링크주소', bgimg: 'slide_03.jpg'},//슬라이드3
	{title:'canada', content:'캐나다....', linkText:'바로가기', link:'링크주소', bgimg: 'slide_04.jpg'},//슬라이드4
	{title:'korea', content:'한국....', linkText:'바로가기', link:'링크주소', bgimg: 'slide_05.jpg'},//슬라이드5 ];*/
	
	console.log(imgList);

	const slide_04 = $('#viewBox_04');
	slide_04.append('<div class="slide_form"></div>');
	const slideForm = slide_04.children('.slide_form');
	slideForm.append('<ul></ul>');
	const slideGuide = slideForm.children('ul');
	let imgLen = imgList.length
	
	let slideCon = '<dl><dt><dd class="con"></dd>\
									<dd class="link"><a href="#"></a></dd></dl>';
	for (let i = 0; i < imgLen ;i++){
		slideGuide.append (`<li class="slide_4th_0${i+1}"></li>`);
		let li_nth = slideGuide.children('li').eq(i);
		li_nth.html(slideCon);
		li_nth.find('dt').text(imgList[i].title);
		li_nth.find('.con').text(imgList[i].content);
		let link = li_nth.find('.link').children('a');
		link.text(imgList[i].linkText);
		link.attr({'href':imgList[i].link,'target':'_blank'})
		li_nth.css({'backgroundImage':`url( ${imgUrl + imgList[i].bgimg})`})}
		

 
	let cloneLi = slideGuide.children('li').eq(-1).clone(true);

	cloneLi.prependTo(slideGuide);
	imgLen++; //clone 요소 하나 추가
	const formLi = slideGuide.children('li')


	slideGuide.css({'width':100 * imgLen + "%"});
	formLi.css({'width':100 / imgLen +"%"})

	let btnMake = '<div class="slide_04_btn"><button type="button" class="next"><span>다음내용</span></button>\
					<button type="button" class="prev"><span>이전내용</span></button></div>';
	slide_04.prepend(btnMake);

	const btnArea = slide_04.find('.slide_04_btn');
	const btn = btnArea.children('button');

	slide_04.css({'position':'relative'});
	btnArea.css({'position':'absolute','top':'-50%','left':0});
	btn.css({'width':'100px', 'height':'30px'});
	btn.eq(0).css({'float':'right'});
	btn.eq(1).css({'float':'left', 'marginRight':'10px'});
	
	let num = 0;
	// console.log(imgLen); //6개
	btn.on('click',function(e){
		e.preventDefault(e);
		// console.log($(this).index() == 0) //한개의 버튼으로 수행
		if ($(this).index() == 0) {num++;
		 if (num >= imgLen-1){num = 0; slideGuide.css({'left':'100%'});}
		} else { num--;}
		 slideGuide.stop().animate({'left': -100 * num + '%'},600, function(){
		 if (num <= -1){num = imgLen-2;
		 	slideGuide.css({'left': -100 * num + '%'},600)}
		});
	});
	
/*	btn.eq(0).on('click',function(e){
		e.preventDefault();
		num++;
		if (num >= imgLen-1){
		slideGuide.css({'left':'100%'}); num = 0;}
		slideGuide.stop().animate({'left': -100 * num + '%'},600);
	})

	btn.eq(1).on('click',function(e){
		e.preventDefault();
		num--;
		slideGuide.stop().animate({'left': -100 * num + '%'},600, function(){

		if (num <= -1){num = imgLen-2;
			slideGuide.css({'left': -100 * num + '%'},600)}
		});
	});*/
})(jQuery);