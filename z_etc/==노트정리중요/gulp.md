# GULP

유명한 자동화도구: 젠킨스 / gulp

---

사스(컴파일), 브라우저싱크(서버), 번들링(파일압축/이름바꾸기)...등등

웹개발을 보다 편리하게 => 자동화 도구

---

버들링(웹팩 / 파슬)

> gulp 안에는 웹팩이나 파슬을 넣을수 있으나 웹팩/파슬은 gulp를 넣을수없다.

---

### 요점정리(?)

>gulp - 전역 / 로컬(지역) - 전역(global - cli) / 로컬 gulp + 모듈 (package.json) "목차: 정리해서 "
>
>package.json -> yarn init -y(yes) -D(개발자)
>
>gulpfile.babel.js + .babelrc
>
>gulpfile.babel.js  import ____ from ___  = import gulp from "gulp"
>
>중요: package.json + gulpfile.babel.js + .babelrc 
>
>알아서 설치해 => npm install / yarn add

---



### Gulp 설치하기

1. git bash 실행
2. node-js 기반으로 gulp설치 (npm/yarn) - mac사용시 sudo "전체에 설치"

```git bash
$yarn global add gulp-cli
```

```git bash
$npm install --global gulp-cli
$npm i -g gulp-cli
```

3. 현재폴더에 한번 더 설치 (-D(-save--dev) : 개발자를 위한 모드)

```
$yarn add -D gulp
$yarn add -save--dev gulp
```

```
$npm i -D gulp
```

4. node_module 폴더 생성됨

5. .gitignore 파일 생성 (깃에 올리지 않을 파일) "#:주석"

```
$touch .gitignore
```

6. node_module : 용량이 커서 깃에 올리면 안된다.

```.gitignore
#.gitignore

node_modules
yarn.lock
```

7. gulp --version 버전확인

```
$gulp --version
```

```
CLI version
Local version
```

---

#### 모듈 설치 - 무조건 yes 축약형 (package.json)

```
$yarn init -y 
$npm init
```

package.json 파일 - **scripts 부분 추가**

```
{
  "devDependencies": {
    "gulp": "^4.0.2"
  },
  "name": "g_gulp",
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT",
  "scripts":{
  	"start":"node index.js"
  }
}
```

node: 자바스크립트 기반

> js에다가 console.log사용한것을 html / browser-syn 사용안해도 바로 볼 수있다.개ㅕ

```
$node index
```

```
$npm start
$yarn start
```

#### 파일 생성 gulpfile.babel.js

```
$touch gulpfile.js (과거)

$touch gulpfile.babel.js (ECMAscript 6이상사용가능)
```

#### 파일 생성 .babelrc

```
$touch .babelrc
```

.babelrc 내용적기

> 바벨 이러한 기능을 불러와서 적용하겠다[.?]

```
// .babelrc
{
	"presets":[
	 ["@babel/preset-env",{
	 	"targets":{
	 		"browsers":["last 2 chrome versions"]
	 },
	 "useBuiltIns":"usage"
	}],
	 "@babel/preset-react"	
 ]
}
```

gulpfile.babel.js 내용적기

> node_modules에 있는 gulp 파일 가져오기

```
//gulpfile.babel.js (과거)
const gulp = require('gulp');
```

```
//gulpfile.babel.js (현재)
import gulp from "gulp";
```



---

**-D 개발자용 @최신 {여러개 같이 다운가능}**

```
yarn add -D @babel/preset-env
npm install -D @babel/core && npm install -D @babel/register
```

```
yarn add -D @babel/{preset-env,register,core,preset-react,polyfill}
```

#### core-js@2 설치

```
$yarn add core-js@2
$npm install --save core-js@2
```

```
//gulpfile.babel.js

import gulp from "gulp";
import corejs from "core-js";

console.log('gulpfile check');
```

#### 중요파일

>.babelrc 
>gulpfile.babel.js
>package.json

```
$yarn add -D "mk-dirs"
```

순서 중요

```
//gulpfile.babel.js

import gulp from "gulp";
import corejs from "core-js";
import mkdir from "mk-dirs";

const url = {
	module:'./node_modula',
	source:'./public/source/',
	dest:'./public/assest/'
}
async function makeDir(){
	await Promise.all([
		mkdir('public'),
		mkdir(url.source),
		mkdir(url.source +'html'),
		//mkdir(url.source +'scss'),
		mkdir(url.source +'scss/src'),
		mkdir(url.source +'scss/base'),
		mkdir(url.source +'img'),
		//mkdir(url.source +'js'),
		mkdir(url.source +'js/base'),
		mkdir(url.source +'js/src'),
		//mkdir(url.source +'media'),
		mkdir(url.source +'media/audio'),
		mkdir(url.source +'media/video'),
		mkdir(url.source +'fonts'),
		mkdir(url.source +'IE')
	])
}
export const make  = makeDir;
```

#### 파이널

```
//gulpfile.babel.js

import gulp from "gulp";
import corejs from "core-js";
import mkdir from "mk-dirs";

const url = {
	module:'./node_modules/',
	source:'./public/source/',
	dest:'./public/assest/'
}
async function makeDir(){
	await Promise.all([
		mkdir('public'),
		mkdir(url.source),
		mkdir(url.source +'html'),
		//mkdir(url.source +'scss'),
		mkdir(url.source +'scss/src'),
		mkdir(url.source +'scss/base'),
		mkdir(url.source +'img'),
		//mkdir(url.source +'js'),
		mkdir(url.source +'js/base'),
		mkdir(url.source +'js/src'),
		//mkdir(url.source +'media'),
		mkdir(url.source +'media/audio'),
		mkdir(url.source +'media/video'),
		mkdir(url.source +'fonts'),
		mkdir(url.source +'IE')
	])
}

export const make  = makeDir;
// export const make = gulp.series(makeDir);
```



#### 폴더 만들기

```
$gulp make
```

설치하기

```
$yarn add -D write
```

```
//gulpfile.babel.js

import gulp from "gulp";
import corejs from "core-js";
import mkdir from "mk-dirs";
import writeFile from "write";

const url = {
	module:'./node_modules/',
	source:'./public/source/',
	dest:'./public/assest/'
}
async function makeDir(){
	await Promise.all([
		mkdir('public'),
		mkdir(url.source),
		mkdir(url.source +'html'),
		//mkdir(url.source +'scss'),
		mkdir(url.source +'scss/src'),
		mkdir(url.source +'scss/base'),
		mkdir(url.source +'img'),
		//mkdir(url.source +'js'),
		mkdir(url.source +'js/base'),
		mkdir(url.source +'js/src'),
		//mkdir(url.source +'media'),
		mkdir(url.source +'media/audio'),
		mkdir(url.source +'media/video'),
		mkdir(url.source +'fonts'),
		mkdir(url.source +'IE')
	])
}
export const make  = makeDir;
// export const make = gulp.series(makeDir);

/*=======================*/

async function makefile(){
	writeFile.sync(url.source+'index.html')
}
export const mkfile = gulp.series(makefile);

```

```
$gulp mkfile
```



```
//gulpfile.babel.js

import gulp from "gulp";
import corejs from "core-js";
import mkdir from "mk-dirs";
import writeFile from "write";

const url = {
	module:'./node_modules/',
	source:'./public/source/',
	dest:'./public/assest/'
}
async function makeDir(){
	Promise.all([
		mkdir('public'),
		mkdir(url.source),
		mkdir(url.source +'html'),
		//mkdir(url.source +'scss'),
		mkdir(url.source +'scss/src'),
		mkdir(url.source +'scss/base'),
		mkdir(url.source +'img'),
		//mkdir(url.source +'js'),
		mkdir(url.source +'js/base'),
		mkdir(url.source +'js/src'),
		//mkdir(url.source +'media'),
		mkdir(url.source +'media/audio'),
		mkdir(url.source +'media/video'),
		mkdir(url.source +'fonts'),
		mkdir(url.source +'IE')
	])
}
export const make  = makeDir;
// export const make = gulp.series(makeDir);

/*=======================*/

async function makefile(){
	writeFile.sync(url.source+'index.html');
	writeFile.sync(url.source+'html/main.html');
	writeFile.sync(url.source+'html/contents.html');
	writeFile.sync(url.source+'scss/base/reset.scss');
	writeFile.sync(url.source+'scss/base/common.scss');
}
export const mkfile = gulp.series(makefile);

const myPublic = gulp.series(makeDir, gulp.parallel(makefile));
export default myPublic;
```

```
$gulp
```

```
//gulpfile.babel.js

import gulp from "gulp";
import corejs from "core-js";
import mkdir from "mk-dirs";
import writeFile from "write";

const url = {
	module:'./node_modules/',
	source:'./public/source/',
	dest:'./public/assest/'
}
async function makeDir(){
	Promise.all([
		mkdir('public'),
		mkdir(url.source),
		mkdir(url.source +'html'),
		//mkdir(url.source +'scss'),
		mkdir(url.source +'scss/src'),
		mkdir(url.source +'scss/base'),
		mkdir(url.source +'img'),
		//mkdir(url.source +'js'),
		mkdir(url.source +'js/base'),
		mkdir(url.source +'js/src'),
		//mkdir(url.source +'media'),
		mkdir(url.source +'media/audio'),
		mkdir(url.source +'media/video'),
		mkdir(url.source +'fonts'),
		mkdir(url.source +'IE')
	])
}
export const make  = makeDir;
// export const make = gulp.series(makeDir);

/*=======================*/

async function makefile(){
	writeFile.sync(url.source+'index.html',`
<!DOCTYPE html>
<html lang="ko-KR">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	<script>
		window.location = "./html/contents.html";
	</script>
</body>
</html>`);
	writeFile.sync(url.source+'html/main.html');
	writeFile.sync(url.source+'html/contents.html');
	writeFile.sync(url.source+'scss/base/reset.scss');
	writeFile.sync(url.source+'scss/base/common.scss');

}
export const mkfile = gulp.series(makefile);

const myPublic = gulp.series(makeDir, gulp.parallel(makefile));
export default myPublic;
```

```
//gulpfile.babel.js
//모듈불러오기 =========================================================
import gulp from "gulp";
import corejs from "core-js";
import mkdir from "mk-dirs";
import writeFile from "write";

const url = {
	module:'./node_modules/',
	source:'./public/source/',
	dest:'./public/assest/'
}
async function makeDir(){
	Promise.all([
		mkdir('public'),
		mkdir(url.source),
		mkdir(url.source +'html'),
		//mkdir(url.source +'scss'),
		mkdir(url.source +'scss/src'),
		mkdir(url.source +'scss/base'),
		mkdir(url.source +'img'),
		//mkdir(url.source +'js'),
		mkdir(url.source +'js/base'),
		mkdir(url.source +'js/src'),
		//mkdir(url.source +'media'),
		mkdir(url.source +'media/audio'),
		mkdir(url.source +'media/video'),
		mkdir(url.source +'fonts'),
		mkdir(url.source +'IE')
	])
}
export const make  = makeDir;
// export const make = gulp.series(makeDir);

/*=======================*/

async function makefile(){
	writeFile.sync(url.source+'index.html',`<!DOCTYPE html>\n<html lang="ko-KR">\n<head>\n	<meta charset="UTF-8">\n	<title>Document</title>\n</head>\n<body>\n	<script>\n		window.location = "./html/contents.html";\n	</script>\n</body>\n</html>`);
	writeFile.sync(url.source+'html/main.html');
	writeFile.sync(url.source+'html/contents.html');
	writeFile.sync(url.source+'scss/base/reset.scss');
	writeFile.sync(url.source+'scss/base/common.scss');

}
export const mkfile = gulp.series(makefile);

const myPublic = gulp.series(makeDir, gulp.parallel(makefile));
export default myPublic;
```

#### 사스 모듈 불러오기

```
yarn add -D gulp-sass
```

```javascript
//모듈불러오기 ============================
import scss from"gulp-sass"; //SCSS사용
//SCSS기능수행 ========================================================================
//1. scss옵션설정
const scssOption ={
	//컴파일 방법: nested, expanded, compact, compressed
	outputStyle:'compact',
	//들여쓰기 방법: tab, space
	indentType:'tab',
	//들여쓰기에 대한 양(간격)
	indentWidth:2,
 	//소수점 계산시 몇자리까지 계산?
	percision:6,
	//컴파일시 주석처리 유무 (scss의 파일위치 주석으로 처리유무 scss:몇번째줄에 있다)
	sourceComments:false,
};

//node-sass --watch --output-style compact scss --output css
async function convertCss(){
	gulp.src( url.source+'scss/**/*.scss' ) //만드는 현재 scss폴더에서
	 .pipe( scss(scssOption).on('error', scss.logError) ) //사스옵션을 수행하고 에러나면 알려줘라
	 .pipe( gulp.dest(url.source+'css/') ) // 완성된 것을 css폴더에다가 넣어라
}

function watch(){
	convertCss();
	gulp.watch(url.source+'scss/**/*.scss', convertCss); //scss폴더안에 있는 모든 데이터가 수정될 경우 CSS기능을 수행해라
}

export const conScss = gulp.series(watch);
```

```
$gulp conScss
```

#### browser-sync

```
$yarn add -D browser-sync
$npm install -D browser-sync
```

```
import sync from "browser-sync"; //browser-sync 호출

const browserSync = sync.create(); //실제 사용할 browser sync
```





---

### Gulp 명령어

src() => 경로 (원본) "예) SCSS"

```javascript
src()
```

pipe() =>중간과정(변환처리방식) "파이프 / 여러개 파이프를 사용할수있다"

```javascript
pipe()
```

dest => 경로 (결과물저장위치) "예) CSS"

```javascript
dest()
```

task() =>일하다 (과거 - 현재버전에는 없어짐 / 과거버전)

```
task()
```

task() 대신 나온애들

```
series() -> 순서에 의한 실한 '콜백함수'
parallel() -> 병렬 (동시) 실행 'css'
```



---

gulp.js 

parcel

webpack /backpack

## GULP.js - 2019/10/11

-gulp를 사용할려면 javascript를 알아야한다.

#### terminal

$yarn global add gulp-cli

$yarn add gulp  //웹서버 구축&서버 도움

$gulf --version //gulp 버전 설치 두군데 (전체, 폴더)

package.json  //기능세팅해서 사용 (핸드폰 바꿔서 어플 연동)

$npm init   //이름 / 버전 / 버전확인 / 설명 / 추가파일(index.js / index.html) / 등등등 (package.json내용) 



//현재폴더에다가 설치

$yarn add node-sass   //현재폴더에 node-sass를 사용하겠다.

$yarn add browser-sync



#### gulpfile.js

const gulp = require('gulp');         // nodemodule 안에있는  gulp 기능

const sass = require('node-sass')

const brSync = require('browser-sync')

let nowBrowser = function(){
brSync.task(
	)
}