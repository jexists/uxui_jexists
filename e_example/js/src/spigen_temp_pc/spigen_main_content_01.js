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

const mediaList = [
	{text:'[youtube] 아마존으로 2000억 매출',date:'2019.10.22',img:'media_01.jpg'},
	{text:'슈피겐 코리아 미국 아마존 독점유통',date:'2019.10.20',img:'media_02.jpg'},
	{text:'[youtube]\'취업비자\'기업 탐방',date:'2019.10.10',img:'media_03.jpg'}];
	//함수정의중.......
const blogList = [
{text:'안녕',date:'2019.10.10',img:'blog_01.jpg'},
{text:'안녕',date:'2019.10.10',img:'blog_02.jpg'},
{text:'안녕',date:'2019.10.10',img:'blog_03.jpg'}
];

//ForList([selector],[array]);

 const ForList = function(mySel, myList, myText){
 //함수라는 이름은 앞에를 대문자로 사용	mySel: className
 let tabBox = conArea.find(mySel);
 let imgUrl = "../../img/spigen/";

	// for(최초의 값;조건비교;값의증감){};
	 const bmText = '\
				<div class="album">\
				 <a href="#">\
			 		<h4></h4>\
			 		<p class="con"></p>\
			 		<p class="date"></p>\
			 	 </a>\
			 	</div>';
 for(let i=0;i<myList.length;i++){
		tabBox.append(bmText);
		let myNth = tabBox.children('.album').eq(i);
		myNth.find('h4').text('myText');
		myNth.find('.con').text(myList[i].text);
		myNth.find('.date').text(myList[i].date);
		let myImg = imgUrl + myList[i].img;
		myNth.css({'backgroundImage':'url(' + myImg + ')',
			'backgroundRepeat':'noRepeat',
			'backgroundPosition':'50% 50%',
			'backgroundSize':'cover'});
 };
} //foction list

ForList('.media', mediaList,'media');
ForList('.blog', blogList,'blog');



// const blog = conArea.find('.blog');
// for(let i=0;i<blogList.length;i++){
// 	blog.append(bmText);
// 	let myNth = blog.children('.album').eq(i);
// 	myNth.find('h4').text('blog');
// 	myNth.find('.con').text(blogList[i].text);
// 	myNth.find('.date').text(blogList[i].date);
// 	let myImg = imgUrl + blogList[i].img;
// 	myNth.css({'backgroundImage':'url(' + myImg + ')',
// 			'backgroundRepeat':'noRepeat',
// 			'backgroundPosition':'50% 50%',
// 			'backgroundSize':'cover'});
// 	//// myNth.css({'backgroundImage':`url(${myImg})`});
// 	// let j = i+1;
// 	// if(i <10){j= '0' +(i+1);}
// 	// myNth.css({'backgroundImage':'url(../../img/spigen/blog_'+j+'.jpg)'})
// 	// myNth.css({'backgroundImage':`url(../../img/spigen/blog_${j}.jpg)`})
// };

/*	남아서 선생님이랑 한것
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
		if(e.keyCode === 37 || e.keyCode === 38){
		}else if (e.keyCode ===39 || e.keycode ===40){}

	});*/

	dtBtn.on('keyup',function(e){
		let num = e.keyCode;
		let beforeKey = num === 37 || num === 38
		let afterKey = num === 39 || num ===40
		let pdt = $(this).parent(conDt);
		// if (beforeKey){
		// 	pdt.prevAll('dt').find('button').focus();
		// }else if (afterKey){
		// 	pdt.nextAll('dt').find('button').focus();
		// };

		switch(num){
			case 37:
			case 38:
			 pdt.prevAll('dt').find('button').focus();
			break;
			case 39:
			case 40:
			 pdt.nextAll('dt').find('button').focus();
			break;

		}
	})

})(jQuery);

