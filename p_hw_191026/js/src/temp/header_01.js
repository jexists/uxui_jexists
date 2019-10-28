// header

(function(){
	const headBox = $('#headBox');
	const headWrap = headBox.children('.head_wrap');

	const gnbMenu = [
	 {title: '회사소개', titleLink: "#",
	  subTitle: [
	   {subName: '회사개요', subLink:'#'},
	   {subName: 'CEO 인사말',subLink:'#'}, 
	   {subName: '경영이념',subLink:'#'}]}, 
	 {title: '사업영역', titleLink: "#",
	  subTitle: [
	   {subName: '분양 캘린더',subLink: '#'}, 
	   {subName: '주택', subLink: '#'}]}, 
	 {title: '홍보센터', titleLink: "#",
	  subTitle: [
	  {subName: '뉴스', subLink: '#'},
	  {subName: '언론 속 대방', subLink: '#'}]}, 
	 {title: '인재채용', titleLink: "#",
	  subTitle: [
	  {subName:'인재상', subLink: '#'}, 
	  {subName:'인사제도', subLink: '#'}, 
	  {subName:'채용절차', subLink: '#'}, 
	  {subName:'공고 및 지원', subLink: '#'}]},
	 {title: '고객지원', titleLink: "#",
	  subTitle: [
	  {subName:'고객지원 안내', subLink: '#'}, 
	  {subName:'마감재', subLink: '#'}]}];
const gnb = $('#gnb');
const titleLen = gnbMenu.length;
gnb.append('<ul></ul>');
const gnbUl = gnb.children('ul');

for (let i = 0; i < titleLen; i++){
	gnbUl.append('<li><dl><dt><a href="#"></a></dt><dd></dd></dl></li>');
	let gnbLiN = gnbUl.children('li').eq(i);
	let dtLink = gnbLiN.find('dt').children('a');
	dtLink.text(gnbMenu[i].title);
	dtLink.attr('href',gnbMenu[i].titleLink);
 	
 	let subLen = gnbMenu[i].subTitle.length;
 for (let j = 0; j < subLen; j++){
 	let gnbDd = gnbLiN.find('dd');
 	gnbDd.append('<a href="#"></a>');
 	let gnbDdLinkN = gnbDd.children('a').eq(j);
 	gnbDdLinkN.text(gnbMenu[i].subTitle[j].subName);
 	gnbDdLinkN.attr('href',gnbMenu[i].subTitle[j].subLink);}}


const gnbLi = gnbUl.children('li');
const gnbDl = gnbUl.children('dl');
const gnbDt = gnbDl.children('dt');
const gnbDd = gnbDl.children('dd');


 gnbLi.on('mouseover', function(){
 	$(this).siblings().find('dd').stop().slideUp();
 	$(this).find('dd').stop().slideDown();
 });

})(jQuery);