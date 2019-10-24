// spigen_header_pc.js

(function($){
//= 1. #gnb 영역내부에 있는 ul의 내용을  .side_gnb_area에 복붙
// clone()매서드를 사용

	const gnb = $('#gnb');
	const sideGnbArea = $('.side_gnb_area');
//============================================================


const gnbMenu = [
 {title: 'about',titleLink:'title_#', 
	sub: [
	{subN:'who we are', subLink:'#'},
	{subN:'what we do', subLink:'#'},
	{subN:'our locations', subLink:'#'}]},
 {title: 'careers', titleLink:'title_#',  
	sub: [
	{subN:'careers',subLink:"#"},
	{subN:'HR blog',subLink:"#"},
	{subN:'apply',subLink:"#"}]},
 {title: 'media', titleLink:'title_#', 
	sub: [
	{subN:'media',subLink:"#"}]},
 {title: 'IR', titleLink:'title_#', 
	sub: [
	{subN:'investors',subLink:"#"},
	{subN:'IR archive',subLink:"#"},
	{subN:'IR meeting',subLink:"#"}]}];

const menuLen = gnbMenu.length;
gnb.append('<ul></ul>');
const gnbUl = gnb.children('ul');

for(let i = 0; i < menuLen; i++){
 // console.log(gnbMenu[i]); // = about, career, media, IR
 // gnb.append(gnbMenu[i]);
 // gnbUl.append('<li><dl><dt><a href="' + gnbMenu[i].titleLink + '"></a></dt><dd></dd></dl></li>');
 gnbUl.append('<li><dl><dt><a href="#"></a></dt><dd></dd></dl></li>');
 let gnbLi = gnbUl.children('li').eq(i);
 let gnbLiLink = gnbLi.find('dt').children('a');
 gnbLiLink.text(gnbMenu[i].title);
 gnbLiLink.attr('href',gnbMenu[i].titleLink);

 let subLen = gnbMenu[i].sub.length;
 for (let j=0; j<subLen; j++){
 	let gnbDd = gnbLi.find('dd');
 	gnbDd.append('<a href="#"></a>');
 	// gnbDd.append('<a href="' + gnbMenu[i].sub[j].subLink + '"></a>');
 	let gnbMyLink = gnbDd.children('a').eq(j);
 	gnbMyLink.text(gnbMenu[i].sub[j].subN);
 	gnbMyLink.attr('href',gnbMenu[i].sub[j].subLink) }} //for문 마지막



/* //이중for문
for(let i=0; i<gnbMenu.length;i++){ 
	console.log(gnbMenu[i].title);}
 for(let j = 0; j < gnbMenu[i].sub.length;j++){
 	console.log(gnbMenu[i].sub[j])}*/


// const nav = [{title:'about',sub:['who we are','what we do','our locations']},
// 	{title:'careers',sub:['careers','hr blog','apply']},
// 	{title:'media',sub:['media']},
// 	{title:'ir',sub:['investors','ir archive','ir meeting']}];

// const navText = '<li><dl><dt><a href="#">title</a></dt><dd></dd></dl></li>';
// const navUl = gnb.children('ul');

// for(let i=0; i<nav.length;i++){
// 	navUl.append(navText);
// 	let myNth = navUl.children('li').eq(i);
// 	myNth.find('dt').children('a').text(nav[i].title);

// 	for(let j=0; j<nav[i].sub.length;j++){
// 	myNth.find('dd').append('<a href="#">sub</a>');
// 	myNth.find('dd').children('a').eq(j).text(nav[i].sub[j]);
// 	}
// }


	const openGnBtn = $('#gnb_btn>button');
	const closeGnBtn = $('.close_gnb_btn>button');
	const sideGnb = $('.side_gnb'); //나타내기
	const gnbDl = gnb.find('dl');
	const gnbDd = gnb.find('dd'); 
	const gnbDt = gnb.find('dt');
	const gnbTitleLink = gnbDt.children('a');
	const gnbListLink = gnbDd.children('a');




	const addAction = function(){
		let li = $(this).parents('li');
		li.find(gnbTitleLink).addClass('action');
		li.siblings().find(gnbTitleLink).removeClass('action');
		gnbDd.stop().slideDown();}
	const removeAction = function(){
		$(this).parents('li').find(gnbTitleLink).removeClass('action');
		gnbDd.stop().slideUp();}

	let time = 600;

	let gnbContents = gnb.contents().clone();
	sideGnbArea.append(gnbContents);

//= 2. close_gnb_btn 버튼 클릭시 side_gnb_area 나타내기

	openGnBtn.on('click',function(e){
		e.preventDefault();

		sideGnb.stop().fadeIn(time,function(){
			closeGnBtn.focus();
			$(this).on('keyup',function(e){
				if(e.keyCode == 27)
					{sideGnb.stop().fadeOut();
					openGnBtn.focus()}
					console.log(e.key.toLowerCase());
					//영문글자를 강제로 대/소문자로 치환하는 함수
					//대문자로 변환 toUpperCase()
					//소문자로 변환 toLowerCase()
			});
		});
	});

	closeGnBtn.on('click',function(e){
		e.preventDefault();
		sideGnb.stop().fadeOut(time*2);
		//sideGnb.css({'display':'none'});//가능&효과X
	});

//= 3. #gnb에 마우스 올렸을 경우 dd를 나타내기

/*	gnbDl.on('mouseenter',function(){
		$(this).find(gnbTitleLink).addClass('action');
		// $(this).siblings().find(gnbTitleLink).removeClass('action');
		gnbDd.stop().slideDown();
	});

	gnbDl.on('mouseleave',function(){
		$(this).find(gnbTitleLink).removeClass('action');
		gnbDd.stop().slideUp();
	});*/
//= 3. 정리: #gnb에 마우스 올렸을 경우 dd를 나타내기 ====
	// gnbDl.on('mouseenter',addAction);
	// gnbDl.on('mouseleave',removeAction);

	gnbDl.on ({'mouseenter':addAction,'mouseleave':removeAction})

	gnbTitleLink.on('focus',addAction);

	gnbListLink.eq(-1).on('blur', function(){
		gnbDd.stop().slideUp();	
	});



//= 4. #gnb에 dt에 focus 처리되면 dd가 나타내기
// 포커스:a, button, form(input, textarea, select)

	// gnbTitleLink.on('focus', function(){
	// 	gnbDd.stop().slideDown();
	// });
	// gnbListLink.eq(-1).on('blur',function(){
	// 	gnbDd.stop().slideUp();
	// });


// focus 제어하기
// .side_gnb_area 내부의 마지막 a 요소에서 blur처리되면, 
// .close_gnb_btn위치로 다시 focus 처리되어라
//단, 전체 페이지에서 추가로 focus처리되는 항목이 있어야 가능
const sideLink = sideGnbArea.find('a');
const sideLastLink = sideLink.eq(-1);

	sideLastLink.on('blur',function(e){
		closeGnBtn.focus();
	});

// sideLastLink.on('blur', function(){
//  closeGnBtn.attr({'tabindex':1});
//  closeGnBtn.focus();
// });


// .side_gnb_area에서 키보드 esc 키를 누르면 빠져나가고 이전의 위치
//-> .side_gnb_area가 보이는 곳에서 수행

sideGnbArea.on('keyup',function(e){
	console.log(e);

});




})(jQuery);