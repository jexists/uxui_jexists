#### SASS / SCSS

전처리기 3대장: Less, Sass(SCSS), Stylus

SASS / SCSS 하나의 컴파일러

**Sass** 선택자의 유효범위를 '들여쓰기'로 구분 / {} (중괄호)와 ; (세미콜론) 무 (Stylus비슷)
SASS(Syntactically Awesome Style Sheets) = {}, ; 없고 한줄로 쓰면 에러

**SCSS**  - CSS 같은 문법 + Sass기능 지원 / {} 로 범위를 구분 (Less 비슷)
SCSS = CSS + @  {} (중괄호)와 ; (세미콜론) 유



SCSS는 HTML에서 먹지않는다. 그래서 SCSS => CSS로 보낼것이다. 

https://sass-lang.com/ - SCSS 언어 홈페이지

#### terminal

(yarn 사용시)

npm install --global yarn
yarn global add node-sass

$ npm install --global node-sass (node-sass 다운받기)

$node-sass -v  (node-sass 버전 알아보기)

$node-sass  --watch **--output-sytle nested** scss --output css

> node-sass 실행해라 / --watch (실시간) / scss --output css (내보내라) / style을 ensted라는 스타일로 
> 노드사스를 실시간으로 감지하고 내보낼때 기능을 nested 스타일로 하고 scss을 css폴더로 해라



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
// sample.scss(카피X)
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

