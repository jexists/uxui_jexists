# 머리에 쏙쏙 들어오는 jQuery 입문

###### 다카쯔도 다케시 지음 | 정인식 옮김 | 제이펍 | www.jpub.kr | 2012년 | 25,000원

$ = jQuery

; (세미콜론):  명령 종료 / 마침표와 같은 것 / 문장끝을 나타내는 표시

-(하이픈) = 변수명이나 객체의 프로퍼티명에는 사용불가 (작은따옴표사용 / -삭제후 다음 문자 대문자 "카멜케이스")

$(document).ready(function(){}) = $(function(){}) = 문서의 준비 상태가 됐다.

console.log (출력하고 싶은 내용): 코드를 작성하고 있을때 올바른 값인지 동작되었는지 도중에 확인해보고싶을 경우 사용



$() => 선택기능: 원하는 요소 가져오기

#### $('셀렉터/선택자') = 셀렉터/선택자 부분에 가져오고 싶은 요소를 넣어서 가져올수 있다.

> ID 선택자 (#idValue)
>
> 타입 선택자 (element)
>
> 클래스 선택자 (.className)
>
> 자손 선택자 (ancestor descendant)
>
> 전체 선택자 (*)
>
> 인접 형제 선택자 (prev + next)
>
> 복수 선택자 (selector, selector)
>
> 부정 선택자 (:not(selector))
>
> 속성 선택자 ([name="value"])
>
> 순서에 관한 선택자 (:nth-child())
>
> 상태에 관한 선택자 (:checked)
>
> 폼에 관한 선택자 (:text)

메소드 : 준비된 기능

선택자.매소드명();

#### 스타일 변경하는 메소드

> css : 스타일 변경을 실행하는 메소드 
>  한개 = 선택자.css(프로퍼티,값); / 여러개 = 선택자.css({프로퍼티1:값1, 프로퍼티2:값2;})
>
> show : 요소 표시 = .css('display','block');  
>
> hide : 요소 비표시 = .css('display','none'); 
>
> *show/hide & display: 거의 동일하지만 애니메이션도 가능 = .show(500);
>
> width : 요소의 폭을 지정하는 메소드 = .width(폭);
>
> height : 요소의 높이를 지정하는 메소드 = .height(높이);
>
> *width/height : 단위없이 숫자를 지정한경우는 자동 'px' & 단위가 섞인 숫자는 작은 따옴표로 감싸서 지정



#### 애니메이션 메소드

*애니메이션() = "작성안했을 경우" 400 밀리초로 애니메이션 완료 
*스피드 지정: (숫자), ('slow'), ('fast')
*(밀리초 1/1000), 밀리초, slow(600밀리초), fast(200밀리초)

*.애니메이션(시간,function(){}) = 애니메이션 종료시 별도 명령 실행

>fadeIn / fadeOut = opacity(투명도) 애니메이션 효과
>
>slideDown / slideUp = height(높이) 애니메이션 효과
>
>animate = .animate({프로퍼티:값}); / .animate({프로퍼티1:값1, 프로퍼티2:값2},스피드지정)

#### 내용이나 속성 변경 메소드

>text =  .text('요소 내용을 통째로 바꿔쓰는 텍스트 / 실제 문자표시');
>
>html = .html('요소 내용을 통째로 바꿔쓰는 html / 태그 & 문자')
>
>empty = 내용을 통째로 비우는 경우 / 스타일은 지속 / 글자만 삭제
>
>attr = .attr('속성명',새로운 값); = 요소의 속성값을 변경하는 메소드
>*href / src / class / disabled / selected / target 등 제어 
>
>val = .val('새로운 값'); = input / textarea 입력된 값을 변경하는 메소드 / value 값 변경
>*텍스트 필드 값, 텍스트 영역 값, 선택 메뉴(풀다운) 값, 선택메뉴(리스트) 값 등 
>
>addClass = .addClass('클래스명'); = 클래스 추가
>
>removeClass = .removeClass('클래스명'); = 클래스 삭제

#### 움직이기 만들기 지우기 메소드

>append = 주어.술어(목적어) // 주어는 목적어를 부가한다.
>= jQueryA.append(jQueryB); = A요소안에 B요소 이동 / A 부가하기 (B를)
>= 이동할 곳.append(움직이고 싶은 요소)
>
>appendTo = 주어.술어(목적어) // 주어는 목적어에 부가한다
>=jQueryB.appendTo(jQueryA); = B요소를 A요소 안으로 이동 / B 부가하기 (A에)
>= 움직이고 싶은 요소.appendTo(이동할곳)
>
>remove = 요소를 통째로 지우고 싶을때 / 요소를 삭제하는 메소드 / 그 자체를 지우는 것
>
>html = 요소를 새롭게 만들고 싶을때

#### $(DOM 요소)

>$(function(){}); = 페이지 로딩 완료 시에 실행되는 코드 예약하기 / 페이지 로딩 완료 이벤트
>*$(document).ready(function(){}); 
>
>$('셀렉터') = 문자열을 넣은 경우 선택자로 해석되어 취득한 요소를 jQuery 객체화
>
>$('html의 요소 조각') = html 요소 / 태그를 넣으면 요소를 만드는 것이 가능
>
>$(DOM 요소) *DOM = Document Object Model
>
>$(this) = 클릭된 요소

#### each - 각각 / jQuery 객체의 각 요소에 대하여 동일 처리 해주는 메소드