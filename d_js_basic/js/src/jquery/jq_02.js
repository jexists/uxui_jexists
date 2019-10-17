//jq_02.js
console.log($.fn);

(function($){
// 	//jQuery 내용 작성하는 곳
// 	//선택자

// 	document.getElementById('box'); //옛날버전
// 	document.querySelector('#box');
// 	$('#box')

// 	document.getElementsByTagName('p')[0];
// 	document.querySelector('p');
// 	$('p')

// 	$('.box p')
// 	$('.box').find('p')

// 	$('.box > p')
// 	$('.box').children('p')


// 	$('.dl > dt+dd')
// 	$('dl').children('dt').next('dd')

// 	$('.dl > dt~dd')
// 	$('dl').children('dt').nextAll('dd')

// 	$('ul > li:nth-child(1)')
// 	$('ul').children('li:nth-child()')
// 	$('ul').children('li:nth(0)') //자바스크립트 표현식(0부터 시작)
// 	$('ul').children('li').eq(0)


//자식: children
//자손: find
//인접형태(동생): next
//형제(동생들):nextAll

//부모: parent
//조부모(부모위의 부모/그위도 포함): parents, parentsUntil, chlosest
//형제 (바로위 형제) :prev
//형제 (형들):prevAll
//다른 형제 (나를 제외):sibling

// $('.box p').css({"padding":"0.5rem", "backgroundColor":"#fa0"});
// $('.box').find('p').css({"color":"#f03", "textShadow":"0.2rem 0.2rem 0.2rem rgba(0,0,0,0.7)"});

// $('.box>p').css({"borderBottom":"2px solid #111"});
// $('.box').children('p').css({"transform":"rotate(45deg)"});

// $('dl > dt + dd').css({"backgroundColor":"#acc"});
// $('dl').children('dt').next('dd').css({"fontSize":"2rem"});

// $('dl>dt~dd').css({"marginLeft":"2rem"});
// $('dl').children('dt').nextAll('dd').css({"color":"#f03"});

// $('ul>li:nth-child(1)').css({"backgroundColor":"#ffa"});
// $('ul').children('li:nth(0)').css({"color":"#077", "fontSize": "2em"});
// $('ul').children('li:nth(-1)').css({"color":"#f77"});
// $('ul').children('li').eq(0).css({"borderBottom": "2px solid #333"});
// $('ul').children('li').eq(-1).css({"borderBottom":"2px solid #f05"});

// $('ul').find('li:eq(-2)').css({"borderLeft":"3px solid #f06"});
// $('ul').find('li:eq(-2)').siblings().css({"borderLeft":"1px solid #f06"});



// var head = $('head');
// var title = head.find('title');
// title.after('<style></style>');
// var style = title.next('style');

// style.text(" body{background-color:#afc;} \
//              h1{color:#079; padding:3rem; }\ ");

let first = $('#first');
let str = first.find('strong');
$('#first').css({"padding":"0.5rem", "backgroundColor":"#fcc"});
$('#first').find('strong').css({"color":"#07f"});
// ================
str.parent().css({"backgroundColor":"#ccf"});
str.parents(/*'#first'*/).css({"padding":"0.3rem", "border":"1px solid #333"});
//()가운데에 아무것도 안써서 모든 부모에 다 먹는다
str.parentsUntil(/*$('#first')*/).css({'padding':'0.3rem', 'border':'1px dotted #99f'});
str.closest('#first').css({'padding':'0.2', 'border':'5px dotted #99f'});
//누구가를 지칭하지않으면 반응이없다. parents,closest 거의같은데
//parents는 지칭하지않으면 부모부모부모 closest 지칭하면 나옴
//closest 메모리가 덜 그래서 parents가 더 많이 사용함
})(jQuery);
/*
parent():부모만 (값을 작성하지 않아도 동작)
parents([selector]): 부모이자 조상에 해당하는 요소, 선택값을 작성하면 선택요소만
parentsUntil([selector]):parents와 기본은 같은 내용, 선택값을 작성하면 선택 요소 자식까지
closest(selector): 선택값이 없으면 동작하지 않음, 선택값을 작성하면 선택요소만 (1.8까지) 
*/