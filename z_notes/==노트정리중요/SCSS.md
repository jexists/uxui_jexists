#### SASS / SCSS

-CSS가 복잡해지고 스타일 시트가 커지고 유지 보수하기가 어려워 짐에 따라 CSS 전처리 기가 많이 

전처리기 3대장: Less, Sass(SCSS), Stylus

SASS / SCSS 하나의 컴파일러

**Sass** 선택자의 유효범위를 '들여쓰기'로 구분 / {} (중괄호)와 ; (세미콜론) 무 (Stylus비슷)
SASS(Syntactically Awesome Style Sheets) = {}, ; 없고 한줄로 쓰면 에러

**SCSS**  - CSS 같은 문법 + Sass기능 지원 / {} 로 범위를 구분 (Less 비슷)
SCSS = CSS + @  {} (중괄호)와 ; (세미콜론) 유

---

#### 웹사이트

https://velopert.com/1712

[https://medium.com/@jsh901220/react%EC%97%90-scss-%EC%A0%81%EC%9A%A9%EB%B0%8F-%EA%B8%B0%EB%B3%B8-%EC%82%AC%EC%9A%A9%EB%B2%95-1-c7bd2895f5a6](https://medium.com/@jsh901220/react에-scss-적용및-기본-사용법-1-c7bd2895f5a6)

[https://gomcine.tistory.com/entry/Sass-%EB%AC%B8%EB%B2%95-%EC%A0%95%EB%A6%AC-mixin-include-expend-partial-import?category=693292](https://gomcine.tistory.com/entry/Sass-문법-정리-mixin-include-expend-partial-import?category=693292)

https://www.udemy.com/course/css-sass-scss/?LSNPUBID=nbJH6*TrzAA&ranEAID=nbJH6*TrzAA&ranMID=39197&ranSiteID=nbJH6.TrzAA-VrJUpIduSjHQZWSc0Huwgw

https://sass-lang.com/guide

https://github.com/SassDoc/

---

https://sass-lang.com/ - SCSS 언어 홈페이지

https://prepros.io/ - sass 변환프로그램 (node-sass에 비해 느리다.)

#### terminal

(yarn 사용시)

npm install --global yarn
yarn global add node-sass

$ npm install --global node-sass (node-sass 다운받기)

> npm install --global brower-sync node-sass

$node-sass -v  (node-sass 버전 알아보기)

$node-sass  --watch **--output-sytle nested** scss --output css

> node-sass 실행해라 / --watch (실시간) / scss --output css (내보내라) / style을 ensted라는 스타일로 
> 노드사스를 실시간으로 감지하고 내보낼때 기능을 nested 스타일로 하고 scss을 css폴더로 해라

#### node-scss 지우는 방법

$ npm uninstall --global node-sass

웹사이트: 

https://yarnpkg.com/lang/en/ > node-sass 4.12.0 

[yarn으로 SASS다운받기] 

> 안될경우에는 컴퓨터로 직접다운 https://yarnpkg.com/en/docs/install#windows-stable

$npm install --global yarn

$yarn global add node-sass

### node-scss 실행

SCSS는 HTML에서 먹지않는다. 그래서 SCSS => CSS로 보낼것이다. 

최초 기본 상태 **$node-sass scss --output css** (기본스타일: nested)

#### --output-style

// nested, expanded, **compact**, compressed

> **$ node-sass --output-style compact scss --output css**

>**1. 중첩 스타일 (nested)** : 기본적인 출력 스타일로 중첩 정도에 따라 들여쓰기 함.
>**2. 확장 스타일 (expanded)** : 기존 CSS 스타일과 거의 동일
>**3. 축약 스타일 (compact)** : CSS 규칙을 한 줄에  표시해서 코드의 공간을 최소화함
>**4. 압축 스타일 (compressed)** : 가독성은 고려하지 않음. css 파일 용량을 최대한 줄이기 위한 스타일

#### 실시간 감지

**$node-sass --watch --output-style compact scss --output css/src**





```scss
//SCSS불러오는 방법

@import "var";
//동일한 확장자라서 .scss생략가능
//_ 생략가능
```

SCSS (& = 변수 var 같은것)

[주의사항]

-scss에서 css 주석을 썼을 경우 카피가 된다.
-scss에서 // 주석을 썻을겨우는 카피가 되지않는다.
-css에서 적은것은 scss로 이동되지않는다.
-css에서 적어도 scss에서 적어서 저장하면 scss에 없는것들은 사라진다.  

```scss
// sample.scss /(scss전용주석 / 카피X) 
/*sample.css (카피됨)*/

$full : 80%;
$bg1 : #111;
$color : (#777, #333 ,#f06);
//$ = 변수
h2 {width: $full; height: $full;
	background-color: rgba($bg1, 0.5);
	color:lighten($bg1, 60%);
	border: 2px solid nth($color,-1); 
	font-size: bold;
	} 
```

```css
/*sample.css*/
h2 {
  width: 80%;
  height: 80%;
  background-color: rgba(17, 17, 17, 0.5);
  color: #f7f7f7;
  border: 2px solid #f06;
  font-size: bold; }
```

---

position 쉽게하기 (sass interpolation)

```scss
.list_01 {background-position: 0 0;}
.list_02 {background-position: 0 10px;}
.list_03 {background-position: 0 40px;}
.list_04 {background-position: 0 100px;}

/* ======================= */
$myp : (0, 10px, 40px, 100px); //SCSS에서 배열 쓰는 방법
@for $i from 1 to length($myp)+1 {
	.list_0#{$i}{background-position: 0 nth($myp, $i);}
}
//반복문 
```

```css
/* ======================= */
.list_01 {
  background-position: 0 0; }
.list_02 {
  background-position: 0 10px; }
.list_03 {
  background-position: 0 40px; }
.list_04 {
  background-position: 0 100px; }
```



191011 - 간단하게 세팅, 폴더구조, 파일불러오기, 변수, 리스트, 객체, 인터폴레이션(#), extend, @mixin

pug(들여쓰기잘못해도 망함) / ejs(애매.?)

### 가상 간단하게 쓰기 

```scss
html, body{color:$textColor;}
h1{color:$textColor;}
#headBox h1 a{color:$textColor;}
#headBox h1 a:hover{color:lighten($textColor,30%);}
#headBox h1 a:active{color:darken($textColor,30%);}
//shortcuts
#headBox h1 a{
	color:$textColor;
	&:hover{color:lighten($textColor,30%);}
	&:active{color:darken($textColor,30%);}
    &:focus{color:&textColor;}
}
```

#### .product_list ul li a span{}

```scss
//.product_list ul li a span{}
.product_list{width: 100%;}
.product_list>ul{width: 100%;}
.product_list>ul>li{width: 100%;}
.product_list>ul>li>a{display: block; width: 100%;}
.product_list>ul>li>a>span{display: block; width: 0;}

//.product_list ul li a span{}
.product_list{width: 100%;
	&>ul {width: 90%;}
	&>ul>li{width: 100%;}
} //.product_list

//.product_list ul li a span{}
.product_list{width: 100%;
	&>ul {width: 90%;
	 &>li{width: 100%;
	 	&:nth-child(2){text-align: center}
	 	&:after,
	 	&::after{content: "1234"}
	  &>a{display: block; width: 100%;
	   &:hover{color:rgba($textColor,0.5);}
	   &:active{background-color: #fff;}
	   &>span{display: block; width: 90%;}
	  } // a
	 } //li
	} //ul
} //.product_list

주의점: 
& 누구기준인것인가
}마지막 주석 잘달아라..
```

#### URL 정리

```sass
$urlbase:"../../img/main/";
$url1: $urlbase + "icon/";
.icon_01{background-image: url("../../img/background-image.jpg")}
.icon_02{background-image: url("../../img/background-image.jpg")}
.icon_03{background-image: url("../../img/background-image.jpg")}

.icon_01{background-image: url($urlbase + "login1.jpg");}
.icon_02{background-image: url($url1 + "login1.jpg");}

$myUrl :("icon","model","nature","box");
.icon_03{background-image: url($urlbase + nth($myUrl,2) + "login1.jpg");}
```

#### 자주쓰는 것 (복잡하게 쓰지말자)

```sass
%box{display: block; width: 100%; height: 100%;}
ul{@extend %box;}
li{@extend %box;}

.box:after{content: " "; @extend %box;}
.box::after{content: " "; @extend %box;}

/////////////////////////// 결과
ul, li, .box:after, .box::after { display: block; width: 100%; height: 100%; }
.box:after { content: " "; }
.box::after { content: " "; }
```

#### @MIXIN 만드는것 @include 불러오는것

@mixin name{}

```sass
//mix in 만드는 방법 @mix in name{}
@mixin mybox(){
	display: block; width: 100%; height: 100px;
	background-repeat: no-repeat;
	background-position: 50% 50%;
	background-size: contain;
	background-attachment: fixted;
}

//@mix in을 불러올때에는 @include name
.my_01 {float: left; @include mybox();}
#wrap {@include mybox();}
```

@mix in  업그레이드

```scss
//mix in 만드는 방법 @mix in name{}
@mixin mybox($u,$r){
	display: block; width: 100%; height: 100px;
	background-image: url($u);
	background-repeat: $r;
	background-position: 50% 50%;
	background-size: contain;
	background-attachment: fixted;
}

//@mix in을 불러올때에는 @include name
.my_01 {float: left; @include mybox($urlbase + "i.jpg",no-reapeat);}
```

#### rem&px변환

```sass
@mixin unit($u){
	width: $u+px; width:($u/16)+rem;
}

.testUnit{@include unit(960);}

/////////////////////////// 결과
.testUnit { width: 960px; width: 60rem; }
```

```sass
@mixin whpx($w, $h){
	width:$w + px; width:($w / 16) + rem; height:$h + px; height:($h / 16) + rem;}
@mixin wpx($w){
	width:$w + px; width:($w / 16) + rem;}
@mixin hpx($h){
	height:$h + px; height:($h / 16) + rem;}
```



#### media 쿼리(?)

```sass
$mob: 480;
$tab: 768;
	@media screen and (min-width:$mob+1) and (max-width:$b+px) {

	}
	
//============================
#wrap{
	width: 100%; height: 100%;
	@media screen and (min-width:600px) {
		width:600px;
		@content;
	}
}
```

#### 중간에 import가능!!!

```scss
// i.scss

@import "./var";
@import "./commonLayout";



@media screen and (max-width: 480px){
	@import "myData.scss";

}
```

#### mixin function 차이점

```scss
@mixin name(){} 
// @include name() "선택자까지 포함 /  풀어낸다. / 넓은범위"
@function(){} 
// myFn(); "값들만 사용 / 계산 / 좁은범위"
```





---

# PARCEL 세팅 및 사용법 익히기

**번들러**: 컴퓨터에게는 하나의 파일이든 큰 속도 차이없이 인식을 하지만,
개발자 입장에서는 몇천줄의 파일을 작성하고 관리해야한다면 매우 어려운 일입니다.
이러한 것들을 필요한 기능별로 분리하고 가독성을 위해 추가로 나누기 위해 처리하는 기능을 가진 기능이 번들러라고 한다.

대표적인 예) parcel / webpack

Parcel 장점:

1.접근이 매우쉽다. = 별도의 설정없이 시작파일(Entry File)만 지정하면 바로 빌드 처리한다.
2.번들속도가 빠르다 = 멀티코어 컴파일 가능
3.Assets 기반 번들리 = html, css, javascript같은 유형의 에셋기술 지원
4.자동변환 = babel, postCss 지원
5.모듈자동 업데이트 
6.압축화, 난독화
7.코드불활

사용전 필요한 준비물: node.js+yarn(npm)