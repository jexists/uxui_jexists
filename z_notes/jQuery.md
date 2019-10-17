# jQuery

중요 웹사이트: [https://oscarotero.com/jquery/:jquery cheat sheet](https://oscarotero.com/jquery/)

jQuery는 자바스크립트에 일부분 library이다. 

[http://code.jquery.com](http://code.jquery.com/) 제이쿼리 코드 jQuery 3.x & jQuery UI 1.12.1  (오른쪽 링크저장)

> jQuery 3.x 
>
> jQuery UI 1.12.1 -> jQuery 뒤쪽에다가 써야한다.
>
> jQuery Migrate: 기존에 사라진것 모두 모은것

> slim, slim minified 익스플로어 하위버전 X
> minified - 용량은 적지만 스페이스없음
> uncompressed - 코드 보기 쉬움

#### cdn으로 불러오는 방법

<script src="https://code.jquery.com/jquery-3.4.1.js"></script>
```html
<!-- jQuery 3.x (구조) -->
<script src="../../js/base/jquery-3.4.1.min.js"></script>
<!-- jQuery UI 1.12.1 (애니메이션) -->
<script src="../../js/base/jquery-ui.min.js"></script>

```

```html
<!-- 과거 -->
<script>
$(document).ready(function(){
	
});
</script>
<!-- 축약 -->
<script>
$(function(){

});
</script>

<!-- 현재: 즉시실행함수 -->
<script>
(function($){

})(jQuery);
</script>
```

```html
<script>
(function($){

})(jQuery);

//==================================================================
(function($){

}(jQuery));
//==================================================================
    
function jQuery(){}
var $ = jQuery;
$() == jQuery()
jQuery(function(){})
</script>
```

#### jQuery 불러오는 순서

```html
  <script src="../../js/base/jquery-3.4.1.min.js"></script>
  <script src="../../js/base/jquery-ui.min.js"></script>
  <script src="../../js/src/jquery/불러올 jQuery"></script>
```

#### jQuery 쓰는 형식 3가지 방법

```html
<script>
(function)
</script>
```

jquery 버전 알기

```jav
(function($){
    console.log($.fn.jquery);
})(jQuery);
```

```javascript
//javascript 
document.querySelector('#wrap')

//jQuery (css사용하는 사람이 더 친숙하게 쓰기위해만듬)


```

버전 물어보기: console.log($.fn);

```jQuery
(function($){
	//jQuery 내용 작성하는 곳
	//선택자
})(jQuery);
```

변수

```변수
var = 옛날부터 사용했던 변수
const = 최초의 변수 "절대 변하지않는 변수"
let = 변하는 변수 "바뀌는 변수"
```

선택자

```jQuery
(function($){
	//jQuery 내용 작성하는 곳
	//선택자

	document.getElementById('box'); //옛날버전
	document.querySelector('#box');
	$('#box')

	document.getElementsByTagName('p')[0];
	document.querySelector('p');
	$('p')

	$('.box p')
	$('.box > p')

	$('.dl > dt+dd')
	$('.dl > dt~dd')

	$('ul > li:nth-child(1)')

})(jQuery);
```

#### 선태우선: type < class < id < 부모,자식 <<<<태그 style <<<<<<<!important

### 선택자

//자식: children
//자손: find
//인접형태(동생): next
//형제(동생들):nextAll

//부모: parent
//조부모(부모위의 부모/그위도 포함): parents, parentsUntil, chlosest
//형제 (바로위 형제) :prev
//형제 (형들):prevAll
//다른 형제 (나를 제외):sibling

parent():부모만 (값을 작성하지 않아도 동작)
parents([selector]): 부모이자 조상에 해당하는 요소, 선택값을 작성하면 선택요소만
parentsUntil([selector]):parents와 기본은 같은 내용, 선택값을 작성하면 선택 요소 자식까지
closest(selector): 선택값이 없으면 동작하지 않음, 선택값을 작성하면 선택요소만 (1.8까지) 

```jQuery
(function($){
	//jQuery 내용 작성하는 곳
	//선택자

	document.getElementById('box'); //옛날버전
	document.querySelector('#box');
	$('#box')

	document.getElementsByTagName('p')[0];
	document.querySelector('p');
	$('p')

	$('.box p')
	$('.box').find('p')

	$('.box > p')
	$('.box').children('p')


	$('.dl > dt+dd')
	$('dl').children('dt').next('dd')

	$('.dl > dt~dd')
	$('dl').children('dt').nextAll('dd')

	$('ul > li:nth-child(1)')
	$('ul').children('li:nth-child()')
	$('ul').children('li:nth(0)') //자바스크립트 표현식(0부터 시작)
	$('ul').children('li').eq(0)

})(jQuery);

//자식: children
//자손: find
//인접형태(동생): next
//형제(동생들):nextAll

//부모: parent
//조부모(부모위의 부모/그위도 포함): parents, parentsUntil, chlosest
//형제 (바로위 형제) :prev
//형제 (형들):prevAll
//다른 형제 (나를 제외):sibling
```

#### jQuery로 CSS쓰기 (선택자 연습&예제)

```js
(function($){
$('.box p').css({"padding":"0.5rem", "backgroundColor":"#fa0"});
$('.box').find('p').css({"color":"#f03", "textShadow":"0.2rem 0.2rem 0.2rem rgba(0,0,0,0.7)"});

$('.box>p').css({"borderBottom":"2px solid #111"});
$('.box').children('p').css({"transform":"rotate(45deg)"});

$('dl > dt + dd').css({"backgroundColor":"#acc"});
$('dl').children('dt').next('dd').css({"fontSize":"2rem"});

$('dl>dt~dd').css({"marginLeft":"2rem"});
$('dl').children('dt').nextAll('dd').css({"color":"#f03"});

$('ul>li:nth-child(1)').css({"backgroundColor":"#ffa"});
$('ul').children('li:nth(0)').css({"color":"#077", "fontSize": "2em"});
$('ul').children('li:nth(-1)').css({"color":"#f77"});
$('ul').children('li').eq(0).css({"borderBottom": "2px solid #333"});
$('ul').children('li').eq(-1).css({"borderBottom":"2px solid #f05"});

$('ul').find('li:eq(-2)').css({"borderLeft":"3px solid #f06"});
$('ul').find('li:eq(-2)').siblings().css({"borderLeft":"1px solid #f06"});



var head = $('head');
var title = head.find('title');
title.after('<style></style>');
var style = title.next('style');

style.text(" body{background-color:#afc;} \
             h1{color:#079; padding:3rem; }\ ");

})(jQuery);
```

parent선택자 연습

```html
<h3>부모선택자</h3>
<div id="first">
  <div class="sub2">
    <div class="area">
      <ul>
        <li>list1</li>
        <li>list2</li>
        <li>
          <a href="#">
            <strong>list3</strong>
          </a>
        </li>
      </ul>
    </div>
  </div>
</div>
</div>
```

```javascript
(function($){
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
```

## 생성 (요소, 값) 

#### 생성 (요소, 값) -순수한 자바스크립트(es6기반의 코드)

**document.querySelector('아이디나 클라스적기');** 아이디나 클라스 선택해라 

**document.createElement('tag');** //tag element을 document에 생성해라

**document.createTextNode('입력할 내용적기');** //document 입력하라 내용을 적어라

**(넣을곳).appenChild(넣을내용);** //넣을내용을 넣을곳에다 넣어주어라

```javascript
(function($){
	//$()
	$('#myBox').css({'width':'80%','height':'900px',
		'margin':'auto', 'backgroundColor': '#ddd'});

	//생성 (요소, 값)
	const myBox = document.querySelector('#myBox');
	const myh2 = document.createElement('h2');
	let h2Text = document.createTextNode('jQuery text 생성하기');
	myh2.appendChild(h2Text);
	myBox.appendChild(myh2);

})(jQuery);
```

#### 생성 (요소, 값) - jQuey형식

html(), append(), prepend(), appendTo(), prependTo(), before(), after()

text()

**append랑 text차이점**
append는 태그랑 글씨 가능
text는 글자만 쓸수있음 태그안먹음

◎ append() - 컨텐츠를 선택된 요소 내부의 끝 부분에서 삽입 
**.append()** : $(**A**).**append**(**B**) // A 사이의 마지막에 B 가 추가 된다.
**.appendTo()** : $(**A**).**appendTo**(**B**) // A 가 B 사이의 마지막에 추가 된다.

◎ prepend() - 콘텐츠를 선택한 요소 내부의 시작 부분에서 삽입 
**.prepend()** : $(**A**).**prepend**(**B**) // A 사이의 처음에 B 가 추가 된다.
**.prependTo()** : $(**A**).**prependTo**(**B**) // A 가 B 사이의 처음에 추가 된다.

◎ after() - 선택한 요소 뒤에 컨텐츠 삽입 
◎ before() - 선택된 요소 앞에 컨텐츠 삽입

```생성요소차이점 정리
<p>  중앙    </p>  이렇게 태그가 있을경우
append() 는  <p>  중앙  여기에 값이들어감	</p>
prepend() 는 <p>	 여기에 값이들어감  중앙  	</p>
after() 는   <p>  중앙  </p> 여기에 값이들어감
before() 는  여기에 값이들어감	<p>  중앙  </p> 
//중앙 이라는 글자 대신 다른 태그가 들어가 있다면 결과물의 배치 달라짐
--------------------------------------
부모자식관계
$(A).append(B) : 위에서 언급한 메소드이다. 부모 A태그 가장 뒤에 B태그를 위치시킴
$(A).prepend(B) : 부모 A태그 가장 앞에 B태그를 위치시킴
$(A).appendTo(B) : to로 인해 헷갈릴 수 있는 메서드다 주의하자. A태그를 부모 B태그 가장 뒤에 위치시킴
$(A).prependTo(B) : A태그를 부모 B태그 가장 앞에 위치시킴
======================================
형제관계
$(A).before(B) : A객체 앞에 B를 위치시킴
$(A).after(B) : A객체 뒤에 B를 위치시킴
$(A).insertBefore(B) : A객체를 B앞에 위치시킴
$(A).insertAfter(B) : A객체를 B뒤에 위치시킴
[출처] 자바스크립트 - append, prepend, after, before - 추가|작성자 산들바람
```

//참고 [생성요소 차이점 정리](http://blog.naver.com/PostView.nhn?blogId=oihijkoh&logNo=220958834611&parentCategoryNo=&categoryNo=1&viewDate=&isShowPopularPosts=true&from=search)

	const myBox = $('#myBox');
	myBox.append('<h2></h2>');
	const myh2 = myBox.children('h2');
	//myh2.append('jQuery를 통해 글자를 생성하기'); 가능한데 다른거를 써라
	myh2.text('<i>jQuery를 통해 글자를 생성하기안녕</i>')
	//append랑 text차이점 append는 태그랑 글씨 가능
	//text는 글자만 쓸수있음 태그안먹음
#### html() - 내용파악 / 지우고 새롭게 생성

​	myBox.html('<p>요소를 생성하였습니다.</p>')
//내용이 있는 상태에서 작성하면 내용을 지우고 작성하게 된다.
//기존요소를 삭제하고 새롭게 추가하는 기능
​	let con = mybox.html()
​	console.log(con) //myBox태그랑 내용을 알수있음
//내용을 파악할때 사용한다.

```java
//생성할때==============
myBox.html('<p>요소를 생성하였습니다.</p>')
//내용파악===============
let con = myBox.html()
	console.log(con)  //myBox태그랑 내용을 알수있음
```

#### append()

myBox.append('<p> 요소를 append생성하였습니다.</p>');
//기존요소를 두고, 내부에 뒤에 추가 

#### appendTo()

//방에 아버지께서 들어가신다. & 내용이 있으면 내용이 움직인다.

```javascript
	let myt = $('h2');
	myt.appendTo(myBox)
// let myBefore = myBox.before();  XXXXX
// let myAfter = myBox.after();   XXXXX
let myBefore = myBox.prev(); //이전요소 파악할때 사용
let myAfter = myBox.next(); //다음요소 파악할때 사용
console.log(myBefore, myAfter);
```

#### prepend()

myBox.prepend('<p>요소를 prepend추가생성하였습니다.</p>');
//기존요소를 두고, 내부에 앞에 추가

### 요점정리

```요점정리
append(), prepend(), appendTo(), prependTo()
값을 내부에 삽입하는 기능, 해당요소를 만들어서 삽입 
또는 기존의 요소를 끌어와서 삽입하는 기능
*To 가 붙으면 주어의 위치가 바뀌는 것을 의미
```



## 확인(크기, 속성)

//width(), height(),
//innerWidth(),outerWidth(),outerWidth(true), innerHeight(), outerHeight(),outerHeight(true),
//위와 유사: css('width'), css('height')
//attr(), removeAttr()

//parseInt(), parseFloat();

```width
 const resultBox = $('#resultBox');
 let resultWidth = resultBox.width(); //()값변경가능
 console.log(resultWidth); 
 //박스사이즈: 300 나온값: 216 bec 보더랑 박스사이즈때문에 
 ============
 const resultBox = $('#resultBox');
 let resultWidth = resultBox.width(350);  //(값변경가능)
 //padding, border를 제외한 width값
```

#### innerWidth(),outerWidth(),outerWidth(true)

```width
 const resultBox = $('#resultBox');
 let resultWidth = resultBox.width(); //()값변경가능
 //padding, border를 제외한 width값
 console.log(resultWidth); //=216
 //박스사이즈: 300 나온값: 216 bec 보더랑 박스사이즈때문에 

 let resultinnerWidth = resultBox.innerWidth(); 
 //padding 값을 포함한 width값 
 console.log(resultinnerWidth);//=280

 let resultoutWidth = resultBox.outerWidth();
 //padding, border값 포함 
 console.log(resultoutWidth) //=300

 let resultouttrueWidth = resultBox.outerWidth(true);
  //마진값을 포함한 가로값
 console.log(resultouttrueWidth) //=396

```

CSS형식으로 크기, 속성확인

```
//가로값 + px
 let resultBoxWidth = resultBox.css('width');
 console.log(resultBoxWidth); //300px값으로 나옴
 ==================
  let resultBoxWidth = resultBox.css('width')*2;
 console.log(resultBoxWidth); //NaN (ERROR)
 ====================
 //가로값 = 반응은 하지만 box사이징 값이 쓰나 안쓰나 같다. 헷갈림
 let resultBoxWidth = resultBox.css('width');
 let pasWidth = parseInt(resultBoxWidth);
 console.log(pasWidth); // 300값이나옴 (px안나옴~~) //boxsizing 쓰나 안쓰나 같은 값으로 나온다.
 
 
```

box-sizing 안한값 확인하는방법

```css형식으로 크기 속성확인
 let resultBoxWidth = resultBox.css('width');
 let resultPaddingWidth = parseInt(resultBox.css('paddingLeft')) + parseInt(resultBox.css('paddingRight'));
 let pasWidth = parseInt(resultBoxWidth);
 let myWidth =  pasWidth + resultPaddingWidth;
 console.log(myWidth); // 364값이나옴
 
 ======================
  let resultBoxWidth = resultBox.css('width');
 let resultPaddingWidth = parseInt(resultBox.css('paddingLeft')) + parseInt(resultBox.css('paddingRight'));
 let pasWidth = parseInt(resultBoxWidth) + resultPaddingWidth;
 console.log(pasWidth); // 364값이나옴
```



```javascript
 let myat = resultBox.attr('id');
 console.log(myat); // = resultBox
 //================
 let myat = resultBox.attr('class');
 console.log(myat); // = undefined (class가 없기때문에)
//================
//클라스 추가하기
 let myat = resultBox.attr('class','adC');
 console.log(myat); 
//속성 여러개 추가하기
 let myat = resultBox.attr({'class':'adC'});
 console.log(myat); 

 let myat = resultBox.attr({'class':'adC','data-class':'user_attr'});
 console.log(myat); // = undefined (class가 없기때문에)
```

data-class 사용하는 방법

```class
 let url = "http://www.naver.com"
 resultBox.attr({'class':'adC','data-class':'url'});
 // console.log(myat); // = undefined (class가 없기때문에)

 resultBox.on('click', function(){
	// resultBox를 클릭하면 뭘하세요
	resultBox.append('<a href="url">클릭하면 이동</a>') 
	// url을 글자로 인식한다. //url 인식불가
	resultBox.append('<a href="' + url + '">클릭하면 이동</a>') //
	//밖에다 ' ' 써야 안에 ""가 먹는다. 
	
	"" '' 잘 사용해라~~~~~!!!!!!!!!
	
resultBox.append(`<a href="${url}">클릭하면 이동</a>`) 
//${url} 사용시 백팁사용! 그래서 변수로 이해함

요점정리해서 같은 의미
resultBox.append('<a href="' + url + '">클릭하면 이동</a>') //"" '' 구분잘해라
resultBox.append(`<a href="${url}">클릭하면 이동</a>`)  //백팁사용
		
```

#### 요점정리해서 같은 의미

```javascript
resultBox.append('<a href="' + url + '">클릭하면 이동</a>') //"" '' 구분잘해라
resultBox.append(`<a href="${url}">클릭하면 이동</a>`)  //백팁사용

resultBox.removeAttr('id');
```

#### jQuery 기초개념: 매소드 체인, 콜백

**매소드 체인**: 하나의 함수 또는 메소드를 체인처럼 연결하여 처리하는 것

> 메소드를 체인처럼 연결하겠다.
> 하나의 선택자에서 .으로 연결하는 형태
> 예) $().find().animate();

**콜백함수**:하나의 함수내에서 다시 함수를 호출하여 사용하는 기능

>순서의 흐름을 가지고 만들때 
>
>예)
>$().find().animate({},function(){ //아래로 얼마큼가라 
>	$().animate({},function(){ //위로 얼마큼가라
>		$().animate();
>	})
>});

**재귀함수**: 

## 변경 & 삭제하기

**empty**: 선택한거 제외 내부의 기능을 삭제 & 내용물이 깨끗하게 사라진다.

**remove**: 선택한 것을 그대로 삭제 & 전체 지우기

```예제
myBox.empty(); //myBox 내용물이 깨끗하게 사라진다.
myBox.remove(); //myBox 자체가 사라진다.
```



# 이벤트

## 이벤트 이해하기

**이벤트란?**  웹서비스를 이용했을 경우, 발생되는 다양한 상황 또는 다양한 처리들을 의미

> 클릭 click (왼쪽버튼)
> 더블 클릭 dblclick
> 다른 클릭 
> 마우스 휠
> 마우스 이동
> 키보드키 누르기
> 브라우저 스크롤 이동
> 브라우저 크기가 변경

> *이벤트에 있는것은 어느것 하나도 대문자가 없다. 

마우스

> click(왼쪽버튼)
> dblclick (더블클릭)
>
> mousedown 마우스 키다운 (마우스에 관련된 모든버튼: 휠, 오른버튼, 왼쪽버튼 )
> mouseup 마우스 키위
> mousewheel 마우스 휠 (firefox인지X => DOMMouseScroll)

키보드

> keypress 키보드 누르는 상황 (제한: 문자쪽에만 쓰는것 abc1234 특수키X)
> keydown 키보드 누르것 
> keyup 키보드 눌렀다가 띄는 순간



>focus
>hover
>selected
>changed

브라우저

>scroll
>resize (반응형)

> load

*링크 기능 또는 버튼의 기능을 가진 요소는 기본 이벤트가 할당되어있다.
-> focus / 링크이동등

###### 제이쿼리

> 선택자.on("이벤트 종류",무언가 수행) //인과응보 콜백
> 선택자.on("이벤트 종류",function(){해당하는 이벤트 처리시(예:클릭) 수행하는 기능작성}); //on 매소드

```javascript
const conBox = $('#contentBox');
conBox.on('mouseenter',function(){
	conBox.css({'backgroundColor':'#aaf'})
});
// mouseover&mouseenter비슷하면서 다른기능

conBox.on('mouseleave',function(){
	conBox.css({'backgroundColor':'transparent'})
});
// mouseout&mouseleave비슷하면서 다른기능


//==============&(this) 그것 중복해서 사용할때 씀
const conBox = $('#contentBox');
conBox.on('mouseenter',function(){
	$(this).css({'backgroundColor':'#aaf'})
});
conBox.on('mouseleave',function(){
	$(this).css({'backgroundColor':'transparent'})
});

```

```animate
const conBox = $('#contentBox');
conBox.on('mouseenter',function(){
	$(this).css({'backgroundColor':'#aaf', transition:'all 400ms ease'});
});
// mouseover&mouseenter비슷하면서 다른기능

conBox.on('mouseleave',function(){
	$(this).animate({'backgroundColor':'transparent'}, 900);
});
```

이벤트: 클릭(click)

```javascript
const con = $('#contentBox');
const conUl = con.children('ul');
const conLi = conUl.children('li');
// console.log(conLi); //배열형식으로 나온다.
// const conLi = conUl.children('li:nth(0)');

//conLi.nth(0).css({}) //XXX 
// conLi.eq(0).css({'backgroundColor':'#fff'})
```

```클릭
conLi.eq(0).on('click',function(){ //클릭
	$(this).css({'backgroundColor':'#fff'});
});
```

```더블클릭
conLi.eq(1).on('dblclick',function(){ //더블클릭
	$(this).css({backgroundColor:'#777'});
});
```

```마우스눌렀을때
conLi.eq(2).on('mousedown',function(){ //마우스눌렀을때 (휠/오른쪽/왼쪽 다)
	$(this).css({backgroundColor:'#07f'});
});

conLi.eq(2).on('mouseup',function(){ //마우스안눌렀을때 (휠/오른쪽/왼쪽 다)
	$(this).css({backgroundColor:'#fa0'});
});
```

```다양한 값보기
conLi.eq(2).on('mousedown',function(evt){
	console.log(evt);
	$(this).css({backgroundColor:'#07f'});
});
//마우스 뭘로 눌렀을때 마다 button buttons의 숫자가 다르다. 
//===============================
conLi.eq(2).on('mousedown',function(evt){
	console.log(evt.button);
	$(this).css({backgroundColor:'#07f'});
});
//키를 눌럿을때마다 다르다 (왼:0 휠:1 오른쪽:2)
```

if문 스위치문

```스위치문
conLi.eq(2).on('mousedown',function(evt){
	console.log(evt.button);
	switch(evt.button){
		case 0: //왼쪽버튼
		$(this).css({backgroundColor:'#07f'});
		break;
		case 1: //휠버튼
		$(this).css({backgroundColor:'#f70'});
		break;
		case 2: //오른쪽버튼
		$(this).css({backgroundColor:'#000', 'color':'#fff'});
		break;
		default: //그 외버튼
		$(this).css({backgroundColor:'#aaa'});
		break;
	};
});

==================같은것 if 문일때
if (evt.button ===0){
		$(this).css({backgroundColor:'#07f'});
	} else if (evt.button ===1){
		$(this).css({backgroundColor:'#f70'});
	} else if (evt.button ===2){
		$(this).css({backgroundColor:'#000', 'color':'#fff'});
	} else{
		$(this).css({backgroundColor:'#aaa'});
	}
});
```

mousewhill 기능 사용한 웹사이트: https://scrollmagic.io/

```javascript
conLi.eq(3).on('mousewheel DOMMouseScroll',function(evt){
	console.log(evt);
	$(this).css({backgroundColor:'#041'});
});
```

mousemove

```java
conLi.eq(4).on('mousemove',function(event){
	console.log(event); //pageXY screenXY offsetXY clientXY
});
pageXY 예제: https://halo.cool/en
=============================================================================
conLi.eq(4).on('mousemove',function(event){
	console.log(event.offsetX, event.offsetY); //선택된 도형
	//$(this)의 왼쪽 상단을 기준좌표 선택된 도형기준
	console.log(event.pageX, event.pageY); //브라우저 기준
	//브라우저 기준으로 왼쪽 상단 
	//pageXY screenXY offsetXY clientXY
});
```

```	let x = event.offsetX;
	let x = event.offsetX;
	let y = event.offsetY;
	// $('.ball').css({"transform":"translate("+ x +"%," + y +"%)"}); //같은것
	$('.ball').css({"transform":`translate(-${x}%,-${y}%)`}); //같은것 `빽팁
});
```

keypress 사용시 : 비밀번호 ,  주문 갯수 , 구글 인터넷 안될때 게임, tab 누를때

```keypress
=========== keypress : 오로지 숫자, 영문만 인지한다
conLi.eq(5).children('input').on('keypress',function(evt){
	console.log(evt);
});
enter포함한 숫자 영어는 먹는다. //ctrl&shift안먹는다
console.log(evt)
=> key : & keyCode 뭘눌렀는지 나옴

========== keyup (한글&alt&ctrl 다먹음)
conLi.eq(5).children('input').on('keyup',function(evt){
	console.log(evt);
});
===========console key랑 key code보기
conLi.eq(5).children('input').on('keyup',function(evt){
	console.log(evt.key, evt.keyCode);
});

```

아코디언메뉴

### focus: 초점이 잡힌 상태 (a, button, form 내부의 요소)

```focus
// jq_05_event.js

(function($){
	let menu = $('.menu');
	let menuUl = menu.children('ul');
	let menuLi = menuUl.children('li');

//focus: 초점이 잡힌 상태 (a, button, form 내부의 요소)
	menuLi.children('a').on('focus', function(){
		
		$(this).parent('li').css({'backgroundColor':'#0af',
			'borderRadius':'0.5rem'});
		$(this).css({'color':'#fff', 'fontWeight': 'bold',
			'outline':'0'});
//========================같은내용=========================
menuLi.children('a').on('focus', function(){
	let mythis = $(this);
	mythis.parent('li').css({'backgroundColor':'#0af',
		'borderRadius':'0.5rem'});
	mythis.css({'color':'#fff', 'fontWeight': 'bold',
		'outline':'0'});
	});
}(jQuery));
```

### blur: 초점이 잡힌 요소가 풀리는 상황

```blur
// 단순하게 변수 하나 만들어서 하는 방법

(function($){
	let menu = $('.menu');
	let menuUl = menu.children('ul');
	let menuLi = menuUl.children('Li');
	let menuLink = menulLi.children('a');

//focus: 초점이 잡힌 상태 (a, button, form 내부의 요소)
	menuLi.children('a').on('focus', function(){
		let mythis = $(this);
		mythis.parent('li').css({'backgroundColor':'#0af',
			'borderRadius':'0.5rem'});
		mythis.css({'color':'#fff', 'fontWeight': 'bold',
			'outline':'0'});
	});

		//blur: 초점이 잡힌 요소가 풀리는 상황
	menuLi.children('a').on('blur', function(){
		let mythis = $(this);
		mythis.parent('li').css({'backgroundColor':'#fff',
			'borderRadius':'0'});
		mythis.css({'color':'#777', 'fontWeight':'normal'});
	});
}(jQuery));

=같은내용: 원래 CSS 변수를 미리 적는다.=================================

(function($){
	let menu = $('.menu');
	let menuUl = menu.children('ul');
	let menuLi = menuUl.children('li');
	let menuLink = menuLi.children('a');

	let mLiBg = menuLi.css('backgroundColor');
	let mLiBdr = menuLi.css('borderRadius');
	let mLinkColor = menuLink.css('color');
	let mLinkWeight = menuLink.css('fontWeight');
	menuLink.css({'outline':'0'});
	console.log(mLiBg, mLiBdr, mLinkColor, mLinkWeight)

//focus: 초점이 잡힌 상태 (a, button, form 내부의 요소)
	menuLi.children('a').on('focus', function(){
		let mythis = $(this);
		mythis.parent('li').css({'backgroundColor':'#0af',
			'borderRadius':'0.5rem'});
		mythis.css({'color':'#fff', 'fontWeight': 'bold',
			'outline':'0'});
	});

		//blur: 초점이 잡힌 요소가 풀리는 상황
	menuLi.children('a').on('blur', function(){
		let mythis = $(this);
		mythis.parent('li').css({'backgroundColor':mLiBg,
			'borderRadius':mLiBdr});
		mythis.css({'color':mLinkColor, 'fontWeight':mLinkWeight});
	});
}(jQuery));


// 보안처리: =========================================================
// jq_05_event.js

(function($){
	let menu = $('.menu');
	let menuUl = menu.children('ul');
	let menuLi = menuUl.children('li');
	let menuLink = menuLi.children('a');

	let mLiBg = menuLi.css('backgroundColor');
	let mLiBdr = menuLi.css('borderRadius');
	let mLinkColor = menuLink.css('color');
	let mLinkWeight = menuLink.css('fontWeight');
	menuLink.css({'outline':'0'});
	console.log(mLiBg, mLiBdr, mLinkColor, mLinkWeight);

let set = {
	licolor:mLiBg, //menuLi.css('backgroundColor')
	liborder:mLiBdr,
	linkcolor:mLinkColor,
	linkbold:mLinkWeight,
};

	// set.licolor

//focus: 초점이 잡힌 상태 (a, button, form 내부의 요소)
	menuLi.children('a').on('focus', function(){
		let mythis = $(this);
		mythis.parent('li').css({'backgroundColor':'#0af',
			'borderRadius':'0.5rem'});
		mythis.css({'color':'#fff', 'fontWeight': 'bold',
			'outline':'0'});
	});

		//blur: 초점이 잡힌 요소가 풀리는 상황
	menuLi.children('a').on('blur', function(){
		let mythis = $(this);
		mythis.parent('li').css({'backgroundColor':set.licolor,
			'borderRadius':set.liborder});
		mythis.css({'color':set.linkcolor, 'fontWeight':set.linkbold});
	});
}(jQuery));
```

#### hover (mouseenter/ 권장)

```hover
//3가지 같은 내용==============================
	let mytop = $('top_link').children('button');
//두가지 쓰는 방법===
	mytop.on('mouseenter',function(){});
	mytop.on('mouseleave',function(){});

//매소드 체인을 이용한 기능===
	mytop.on('mouseenter',function(){})
		 .on('mouseleave',function(){});

//hover사용하는 경우 (사용X 권장!)===
	mytop.hover(function(){},  //마우스 올렸을 경우
				function(){}); //마우스 벗어났을경우
```

```hover예제
	let mytop = $('.top_link').children('button');
	
	//hover사용하는 경우
	let topColor = mytop.css('backgroundColor');

	mytop.hover(function(){
		$(this).animate({'backgroundColor':'#305'});
	},  //마우스 올렸을 경우
			function(){
		$(this).animate({'backgroundColor':topColor});
	}); //마우스 벗어났을경우
```

#### Click

```click
	mytop.on('click'); //지금버전 
	mytop.'click'(); //옛날버전
```

```이벤트 지우기
	//Click 은 미리 사전에 지정된 해당이벤트가 있다 그것을 삭제해야한다.
	mytop.on('click',function(event){
		event.preventDefault(); //선행되는 이벤트 제거
	});
```

### animate

.css() => css 기능을 거의 다 쓸 수 있다.

.animate() => css기능을 쓸수 있지만 모두 쓸수없다. (2버전까지 먹는다. /벤터프릭픽스 다는얘들X)

> transform, transition, animation, borderRadius
> 흔히 말하는 css3기능은 동작하지 않는다.
> 또한, backgroundColor, color 등 색상관련된 기능은 먹지만 jquery-ui에서 사용되는 기능
> (jQuery-ui가 없으면 사용안된다."../js/base/jquery-ui.min.js" )
> animate는 css와는 다른 기능 일부가 첨부되어있다. ex) scrollTop:0

### scroll; (window/document)

```scroll console
	const win = $(window);
	win.on('scroll', function(){
		let myscroll = $(this).scrollTop();
		console.log(myscroll) //scroll이 얼만큼 움직였는지.
	});
```

```scroll 예제
const win = $(window);
	const conBox = $('#contentBox');
	win.on('scroll', function(){
		let myscroll = $(this).scrollTop();
		// console.log(myscroll) //scroll이 얼만큼 움직였는지.
		if (myscroll > 150){
			conBox.css({'backgroundColor':'#aca'});
		}else{
		(myscroll <= 150)
			conBox.css({'backgroundColor':'#fca'});
		}
	});
//============== animatie (ui 파일없으면 X)
	const win = $(window);
	const conBox = $('#contentBox');
	win.on('scroll', function(){
		let myscroll = $(this).scrollTop();
		// console.log(myscroll) //scroll이 얼만큼 움직였는지.
		if (myscroll > 150){
			conBox.animate({'backgroundColor':'#aca'},300);
		}else{
		(myscroll <= 150)
			conBox.stop().animate({'backgroundColor':'#fca'},300);
		}
//=============== css transition
	const win = $(window);
	const conBox = $('#contentBox');
	win.on('scroll', function(){
		let myscroll = $(this).scrollTop();
		// console.log(myscroll) //scroll이 얼만큼 움직였는지.
		if (myscroll > 150){
			conBox.css({'backgroundColor':'#aca', 'transition':'all 300ms ease'});
		}else{
		(myscroll <= 150)
			conBox.css({'backgroundColor':'#fca', 'transition': 'all 300ms ease'});
		}

	});
```

### resize - 크기값이 변경되었을때 사용하는 기능 (가로, 세로 일부기능 제한 두고 사용)

```resize console
============가로세로가 변경되었습니다.
	win.on('resize',function(){
		console.log('크기가 바뀌었습니다')
	});
============가로만 변경되었을때 나타나는 방법
//크기값이 변경되었을때 사용하는 기능 (가로, 세로 일부기능 제한 두고 사용)
let beforeWidth = win.width(); //크기값이 변경되기전 가로값
	win.on('resize',function(){
		let afterWidth = win.width(); //크기값이 변경된 후 가로값

		if(beforeWidth !== afterWidth){
				console.log('크기가 변경되었습니다.');	
		};
	});

```



#### 자바스크립 새로고침의 방법

#### 자바스크립 새로고침의 방법
**location.reload(true);**  //새로고침 (F5번키) /쌤 추천 "F5번 누르는것 일반적인것"
**location.href = location.href;** //상단 주소창에 있는 주소로 이동 /살짝위험 권장X "자기주소 다시한번 치세요"
**history.go(0);** 사용 기록중에 가장 최근기록위치로 이동 /메모리절약 "history.go(0) 히스토리 몇번째로 가라 "

javascript기능에는 동기처리하는 방식인 ajax기능이 존재한다.

> 동기처리 : 
> 비동기처리 :

**js문서에서는 기준경로가 작성하고 있는 js문서가 아니다.**  => (html문서에서 불러왔을 경우)
	html문서로 연결된 경우는 불러온 **html 문서 기준으로 경로**를 설정
예) ../../html/jquery/temp/header.html (js경로XX)	=>	./temp/header.html (html경로 정답!!!)

```.load
(function($){

	const wrap = $('#wrap');
	wrap.prepend('<div class="head_wrap">');
	const headWrap = $('.head_wrap');

	headWrap.load('./temp/header.html');


})(jQuery);
```

```load
	const wrap = $('#wrap');
	wrap.prepend('<div class="head_wrap">');
	const headWrap = $('.head_wrap');

	headWrap.load('./temp/header.html');
	headBox.css({'backgroundColor':'#3ff'}) //기능이 먹지않는다.XXXXX
	외부에서 불러온것이 거기 안에 있는걸 컨트롤 할수없다. 
//이렇게 하면 먹는다.!==========================================
	const wrap = $('#wrap');
	wrap.prepend('<div class="head_wrap">');
	const headWrap = $('.head_wrap');

	headWrap.load('./temp/header.html',function(){
		const headBox = $('#headBox');
		headBox.css({'backgroundColor':'#3ff'});
	});

```

```header&footer
	const wrap = $('#wrap');
	wrap.prepend('<div class="head_wrap">');
	const headWrap = $('.head_wrap');
	wrap.append('<div class="footer_wrap">');
	const footerWrap = $('.footer_wrap');


	headWrap.load('./temp/header.html',function(){
		const headBox = $('#headBox');
		headBox.css({'backgroundColor':'#3ff'});
	});

	footerWrap.load('./temp/footer.html',function(data)
		{console.log(data);});
		
========== 더 정리하기 html
	<footer id="footBox">
		<h2>회사 정보</h2>
		<p>footer 내용 작성하는 곳</p>
	</footer>
<!-- 
	<script>
		(function($){
			const footBox = $('#footBox');
			footBox.css({'backgroundColor':'#ccc'});
		})(jQuery);
	</script>
 -->
	<script src="../../js/src/jquery/temp/myfoot.js"></script> 
	//html을 기준으로 foot.html으로 기준X
	
//서로 다른 영역에는 침범할수가 없다. 불편하다. 
```



#### ajax(에이잭스)기법  = json (jaxX)

.json (주석 X / '' (' 이거 쓰면안된다) 쌍따음표만 가능)

```.json
자바스크립트 객체파일

{
	"name":"jexists",
	"day":"1016",
	"gender":"female",
	"nickname":["haha","hoho"]
}
```

```js에서 불러오기
	wrap.load('../../data/test.json',function(data){
		console.log(data);
	});
//js에서 불러오지만 html을 기준으로!
같은형식  =================================
	$.getJSON('../../data/test.json',function(data){
		console.log(data);
	});
```

# 내용 보이기 및 사라지기

CSS: display:block; display:none

> show, hide
> fadeIn, fadeOut
> slideDown, slideUp
> css 기능을 통해 처리: addClass, removeClass

```show, hide, toggle
//jq_07_showHide.js

(function($){
	const showHide = $('.showHide').children('li');
	const fade = $('.fade').children('li');
	const slide = $('.slide').children('li');
	const class_control = $('.class_control').children('li');
	const viewBox = $('.view_area');

	// =====================================
	// show, hide, toggle (왼상->오하)
showHide.eq(0).on('click', function(){
	viewBox.show(500); //나타나게해라
});
showHide.eq(1).on('click', function(){
	viewBox.hide(500); //사라지게해라
});
showHide.eq(2).on('click', function(){
	viewBox.toggle(500); //사라지고 나타나라
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
class_control.eq(0).on('click', function(){
	viewBox.addClass('act'); //클래스이름 넣기
});
class_control.eq(1).on('click', function(){
	viewBox.removeClass('act'); //클래스이름 사라지기
});
class_control.eq(2).on('click', function(){
	viewBox.toggleClass('act'); //클래스이름 넣고 빼기
});


})(jQuery);

스타일 속성지우기!!!! ========================================================
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

 switch로 만들기============================================
showHide.on('click', function(){
let i = $(this).index();
switch(i){
	case 0: viewBox.stop().show(500); break;
	case 1: viewBox.stop().hide(500); break;
	case 2: viewBox.stop().toggle(500); break;
}
});
```



191017 - show/hide 
-아코디언 메뉴, 드롭다운메뉴, 탭메뉴, 팝업창
-equ([n]):순서를 지정하는것, index()순서값을 파악하는것"인덱스 안에는 아무것도 쓰면 안된다. " 기능반대

# 아코디언 메뉴

```아코디언 기초1
//기초 1. 일단 다 접은후 선택하는 아이의 다음 태그를 열어라 (순서주의!)
//find() 자손을 찾아와//siblings() 모든형제 //next()다음태그
//eq() = :nth-child 랑 같은것인데 처음 시작 js: 0 / css: 1
(function(){
	const menuV = $('.accordion_menu_v');
	const menuDt = menuV.find('dt');
	const menuDd = menuV.find('dd');

	menuDd.eq(0).show();

	menuDt.on('click',function(){
		// $(this).siblings('dd').show(); //모든형제
		$(this).siblings('dd').hide(); //모든dd를 접은후 펼쳐라 (순서를바꿔) 
		$(this).next('dd').show(); //선택하는아이의 다음거
	});
})(jQuery);

//정리된 파이널============================================================
// animation일때 stop을 적어라

(function(){
	const menuV = $('.accordion_menu_v');
	const menuDt = menuV.find('dt');
	const menuDd = menuV.find('dd');

	menuDd.eq(0).show();

	menuDt.on('click',function(){
		$(this).next(menuDd).siblings('dd').stop().slideUp(); 
		$(this).next(menuDd).stop().slideToggle();
	});
})(jQuery);
```

```기본
(function(){
})(jQuery);
```

####  text & contents : 내용파악

```
	let t = menuDt.eq(0).text(); //글자만 파악한다. 
	console.log(t) //제목
==========================
		let t = menuDt.eq(0).contents(); //내용에 들어있는 모든 요소 파악(태그/문자)
	console.log(t) //내용다나옴
```

#### wrap: 부모요소를 생성하거나 파악

```wrap
menuDt.wrap('<div>'); //기존코드를 유지하고 부모태그를 만든다.
```

#### 키보드 탭에 a태그 생성하기

js 사용시 반복문으로 처리해한다.

```jquery
menuDt.contents().wrap('<a href="#"></a>')
```

```
//이렇게 할경우 enter눌러야 내용이 나오는데 focus를 잡혓을때 하고 싶으면 a로 해야한다.
	menuDt.contents().wrap('<a href="#"></a>')
	const menuDtLink = menuDt.find('a');
	menuDtLink.css({'display':'block', 'width':'100%', 
	'height':'100%', 'color':'inherit', 'textAlign':'center'});

	menuDt.on('click',function(){
		// $(this).siblings('dd').show(); //모든형제
		$(this).next(menuDd).siblings('dd').stop().slideUp(); //모든dd를 접은후 펼쳐라 (순서를바꿔) 
		$(this).next(menuDd).stop().slideToggle(); //선택하는아이의 다음거
	});
	
//================= focus 	menuDtLink.on('focus',function(){});
//================= focus 시 색깔넣기
	menuDtLink.on('focus',function(){
		// $(this).css({'backgroundColor':'#0f9','color':'#000'})
		$(this).addClass('action'); //클래스를 더한후 css에서 클래스에 색깔넣기
	})
	menuDtLink.on('blur',function(){
		$(this).removeClass('action');
	});
*css: .accordion_menu_v>dl>dt>a.action{background-color: #578;}

```

#### index

```
	menuDt.on('click', function(){
		let i = $(this).index();
		console.log(i); //안에 내용이 무엇이 있던지 몇번째인지 알려준다.
	});
=============================
	menuDt.on('click', function(){
		let i = $(this).index()/2;
		console.log(i); //안에 내용이 2개있어서 나누기 2를 하면된다. 
	});
```

index사용해서 아코디언메뉴만들기

```javascript
	menuDt.on('click', function(){
		let i = $(this).index()/2; //index는 dt+dd 포함 (나누기2해야한다.)
		// console.log(i);
		menuDd.eq(i).siblings('dd').slideUp();
		menuDd.eq(i).slideToggle(); //eq는 dd중에서 몇번째
```

```함수
// 3가지 방법 
	menuDtLink.on('focus',function(){
		// $(this).css({'backgroundColor':'#0f9','color':'#000'})
		$(this).addClass('action');
	})
	menuDtLink.on('blur',function(){
		$(this).removeClass('action');
	});
수동처리: 한번에 다 쓸거냐  =======================
menuDtLink.on('focus',function(){$(this).addClass('action');});
자동화: 쪼깨가지고 파악할거냐=======================
함수를 별도로 따로 만들고 관리해서 간단하게 보이는 방법
const addC = function(){
	$(this).addClass('action');};
const removeC = function(){
	$(this).removeClass('action');};

	menuDtLink.on('focus', addC);
	menuDtLink.on('blur', removeC);
알아서 파악 ========================
함수를 별도로 따로 만들고 관리해서 간단하게 보이는 방법
더 간단하게 한줄로 표현: 쪼깨가지고 한번 더 정리해서 파악할거냐
const addC = function(){
	$(this).addClass('action');};
const removeC = function(){
	$(this).removeClass('action');};
	
	menuDtLink.on({"focus":addC, "blur":removeC});
```



### 라이브러리 vs 프레임워크

프레임워크: 뼈대(구조)를 제공하는것, 변형 불가(X), 이미 짜여진 틀 (common.css)/ 부트스트랩

라이브러리:  특정기능에 대한 모아놓은 집합, 단순 활용가능한 도구들의 집합, 변형 가능, 기능 집합,

### 네비게이션  만들기

```navigation
//html
ul>li*8>a[href="#"]{link_$$}+ul>li*5>a[href="#"]{sub_link_$$} 
==========================
#gnb{position: relative; z-index: 500;
	width: 900px; height: 40px; margin: auto;
	background-color: #ccc;}
#gnb>h2{width: 0; height: 0; overflow: hidden;}
#gnb>ul{width: 100%; height: auto; background-color: #ccf;} //=======height: 자동
#gnb>ul:after,
#gnb>ul::after{content: " "; display: block; clear: both;}
#gnb>ul>li{float: left; width: auto; height: auto;
 margin-right: 1%; background-color: #9cf;}
#gnb a{display: block; width: 100%; height: 40px;}
#gnb a:hover{background-color: #0cf;}
#gnb a:focus{background-color: #fca;}
#gnb>ul ul{display: none; width: 100%; height: auto;}
#gnb>ul ul>li{width: 100%; height: 30px;
 border-bottom: 1px solid #777;}

#gnb:hover>ul ul{display: block;}
CSS ================
#gnb{position: relative; z-index: 500;
	width: 900px; height: 40px; margin: auto;
	background-color: #ccc;}
#gnb>h2{width: 0; height: 0; overflow: hidden;}
#gnb>ul{width: 100%; height: 40px; background-color: #ccf;}  //=======height: 40px
#gnb>ul:after,
#gnb>ul::after{content: " "; display: block; clear: both;}
#gnb>ul>li{float: left; width: auto; height: auto;
 margin-right: 1%; background-color: #9cf;}
#gnb a{display: block; width: 100%; height: 40px;}
#gnb a:hover{background-color: #0cf;}
#gnb a:focus{background-color: #fca;}
#gnb>ul ul{display: none; width: 100%; height: auto;}
#gnb>ul ul>li{width: 100%; height: 30px;
 border-bottom: 1px solid #777;}
 
같이 줄려면 ==============
#gnb:hover>ul ul{display: block;}
따로 줄려고 하면 =============
#gnb>ul>li:hover ul{display: block;}
```

### 클라스 이름 주기

	// attr('class':'titleLink');
	// addClass(titleLink);
## 네비게이션 만들기



#### 1. 마우스/키보드 포커스 처리시, 하위메뉴 전체가 나타나게 (배경하얗게)

```
(function($){
	//선택자만 요약해서 이름 만들기
	const gnb = $('#gnb');
	const gnbArea = gnb.children('ul');
	const gnbArLi = gnbArea.children('li');
	gnbArLi.children('a').addClass('titleLink');
	// attr('class':'titleLink');
	// addClass(titleLink);
	const titleLink = $('.titleLink');
	const partList = titleLink.next('ul');
	const subLink = partList.find('a');

	let timed = 500; //애니메이션 시간
// 1. 마우스/키보드 포커스 처리시, 하위메뉴 전체가 나타나게 (배경하얗게)
	// gnbArea.css('height','auto'); //css한개를 쓸경우는{}생략가능
	gnb.css({'backgroundColor':'transparent'});
	gnbArea.css({'height':'auto','backgroundColor':'#fff'})
	titleLink.on('focus',function(e){
	 e.preventDefault(); //기존에 있는 세팅 지우기 (페이지이동X)
	 partList.stop().slideDown(timed);
	}) //포커스 잡히면 보이게 하기
	subLink.eq(-1).on('blur',function(){ //마지막 요소 eq(-1)
	 partList.stop().slideUp(timed);
	}); //마지막요소 블러처리되면 사라지게
	gnbArea.on('mouseenter',function(){
	 partList.stop().slideDown(timed);
	}); //gnbArea에 마우스 올렸을경우 나타나게하기
	gnb.on('mouseleave',function(){
	 partList.stop().slideUp(timed);
	});
})(jQuery);
```

#### 2.마우스/키보드 포커스 처리시, 하위메뉴 전체가 나타나게 (별도배경없이)

```
(function($){
	//선택자만 요약해서 이름 만들기
	const gnb = $('#gnb');
	const gnbArea = gnb.children('ul');
	const gnbArLi = gnbArea.children('li');
	gnbArLi.children('a').addClass('titleLink');
	// attr('class':'titleLink');
	// addClass(titleLink);
	const titleLink = $('.titleLink');
	const partList = titleLink.next('ul');
	const subLink = partList.find('a');
	
	
})(jQuery);
```

#### 3. 마우스/키보드 포커스 처리시, 해당 메뉴 하위하나만 나타나게

```
// 3. 마우스/키보드 포커스 처리시, 해당 메뉴 하위하나만 나타나게
	titleLink.on('focus',function(){
		$(this).next(partList).slideDown();

		$(this).next(partList).find('a').eq(-1).on('blur',function()
			{console.log('...')}); //확인하는방법
	});
//충돌난다.!!!!!! 할수있지만.. 별로=======================================
(function($){
	titleLink.on('mouseenter focus',function(){
		let ulSlide = $(this).next(partList);
		partList.slideUp();
		ulSlide.slideDown();

		ulSlide.find('a').eq(-1).on('blur',function(){
			console.log('...') //확인하는방법
			ulSlide.slideUp();
			});
	});
})(jQuery);


//Final (ul: height//크기가 정해졌을때) ======================================
(function($){
	titleLink.on('mouseenter focus',function(){
		let ulSlide = $(this).next(partList);
		ulSlide.parent().siblings().find(partList).slideUp();
		ulSlide.slideDown();

		ulSlide.find('a').eq(-1).on('blur',function(){
			console.log('...') //확인하는방법
			ulSlide.slideUp();
			});
	});
	gnb.on('mouseleave',function(){
		partList.slideUp();
	})

})(jQuery);
```





## 선택자. 기능('기능이름',function({}));