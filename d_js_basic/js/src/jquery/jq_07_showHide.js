//jq_07_showHide.js

(function($){
	const showHide = $('.showHide').children('li');
	const fade = $('.fade').children('li');
	const slide = $('.slide').children('li');
	const class_control = $('.class_control').children('li');
	const viewBox = $('.view_area');

	// =====================================
	// show, hide, toggle (왼상->오하)
showHide.on('click', function(){
// 	viewBox.show(500); //나타나게해라
// });
// showHide.eq(1).on('click', function(){
// 	viewBox.hide(500); //사라지게해라
// });
// showHide.eq(2).on('click', function(){
// 	viewBox.toggle(500); //사라지고 나타나라

let i = $(this).index();
switch(i){
	case 0: viewBox.stop().show(500); break;
	case 1: viewBox.stop().hide(500); break;
	case 2: viewBox.stop().toggle(500); break;
}
});

	// =====================================
	//fadein, fadeOut, fadeToggle (희미해지다)
fade.eq(0).on('click', function(){
	viewBox.fadein(500)});
fade.eq(1).on('click', function(){
	viewBox.fadeOut(500)});
fade.eq(2).on('click', function(){
	viewBox.fadeToggle(500)});


	// =====================================
	//slideDown, slideUp, slideToggle (위아래)
slide.eq(0).on('click', function(){
	viewBox.slideDown()});
slide.eq(1).on('click', function(){
	viewBox.slideUp()});
slide.eq(2).on('click', function(){
	viewBox.slideToggle()});


	// =====================================
	//addClass. removeClass, toggleClass
	// viewBox.removeAttr('style'); 스타일 속성을 지워라
	//display:none일경우에는 class가 안넣어지기때문에 수월하게 넣을수있다.
class_control.eq(0).on('click', function(){
	viewBox.removeAttr('style');
	viewBox.addClass('act'); //클래스이름 넣기
});
class_control.eq(1).on('click', function(){
	viewBox.removeAttr('style');
	viewBox.removeClass('act'); //클래스이름 사라지기
});
class_control.eq(2).on('click', function(){
	viewBox.removeAttr('style');
	viewBox.toggleClass('act'); //클래스이름 넣고 빼기
});

})(jQuery);