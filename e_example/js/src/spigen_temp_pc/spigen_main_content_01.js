// spigen_main_content_01.js

(function($){

const conArea = $('.content_area');
const conDl = conArea.children('dl');
const conDt = conDl.children('dt');
const conDd = conDl.children('dd');
const dtBtn = conDt.children('button');

/*// 내가 연습한거
dtBtn.on('click',function(){
	$(this).addClass('action');
	$(this).parents(conDt).siblings('dt').children('button').removeClass('action');
	$(this).parents(conDt).siblings('dd').removeClass('action');
	$(this).parents(conDt).next('dd').addClass('action');
})*/

conDt.children('button').on('click focus',function(e){
	e.preventDefault();
	let btn = $(this);
	let btnParent = btn.parent();
	let parNext = btnParent.next('dd');

	btn.addClass('action');
	btnParent.siblings('dt').children('button').removeClass('action');
/*	//step_1 class 넣어서 하기
	parNext.addClass('action');
	parNext.siblings('dd').removeClass('action');*/

/*	//step_2 
	parNext.siblings('dd').css({'zIndex':'10',}); //먼저 있던 요소 앞으로 배치
	parNext.addClass('action'); //사용할 기능에 class요소 주고
	parNext.css({'zIndex':'5'}); //동시에 zIndex값을 작게 주어 뒤에 배치
	parNext.siblings('dd').stop().fadeOut();
	parNext.siblings('dd').removeClass('action');
	parNext.siblings('dd').removeAttr('style')*/

	parNext.stop().fadeIn();
	parNext.siblings('dd').fadeOut();

});
//======================================
 const bmText = '\
				<div class="album">\
				 <a href="#">\
			 		<h4></h4>\
			 		<p class="con"></p>\
			 		<p class="date"></p>\
			 	 </a>\
			 	</div>';
 const mediaList = [
	{text:'[youtube] 아마존으로 2000억 매출',date:'2019.10.22'},
	{text:'슈피겐 코리아 미국 아마존 독점유통',date:'2019.10.20'},
	{text:'[youtube]\'취업비자\'기업 탐방',date:'2019.10.10'}];
 const media = conArea.find('.media');
	// for(최초의 값;조건비교;값의증감){};
 for(let i=0;i<mediaList.length;i++){
		media.append(bmText);
		let myNth = media.children('.album').eq(i);
		myNth.find('h4').text('media');
		myNth.find('.con').text(mediaList[i].text);
		myNth.find('.date').text(mediaList[i].date);
		let j = i+1;
		if(i <10){j= '0' +(i+1);}
		myNth.css({'backgroundImage':`url(../../img/spigen/media_${j}.jpg)`})
 };

const blogList = [
{text:'안녕',date:'2019.10.10'},
{text:'안녕',date:'2019.10.10'},
{text:'안녕',date:'2019.10.10'}
];

const blog = conArea.find('.blog');
for(let i=0;i<blogList.length;i++){
	blog.append(bmText);
	let myNth = blog.children('.album').eq(i);
	myNth.find('h4').text('blog');
	myNth.find('.con').text(blogList[i].text);
	myNth.find('.date').text(blogList[i].date);
	let j = i+1;
	if(i <10){j= '0' +(i+1);}
	myNth.css({'backgroundImage':'url(../../img/spigen/blog_'+j+'.jpg)'})
	// myNth.css({'backgroundImage':`url(../../img/spigen/blog_${j}.jpg)`})
};

	dtBtn.on('keyup',function(e){
		e.preventDefault();
		let myThis = $(this).parents('dt');
	// 왼 37 위 38 오른 39 아래40
		switch(e.keyCode){
			case 37:
			case 38:
			myThis.prevAll('dt').find('button').focus();
			break;
			case 39:
			case 40:
			myThis.nextAll('dt').find('button').focus();
			break;
		}
/*		if(e.keyCode === 37 || e.keyCode === 38){

		}else if (e.keyCode ===39 || e.keycode ===40){}*/

	});



})(jQuery);

