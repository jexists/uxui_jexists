# GULP

사스, 브라우저싱크, 파일압축



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

#### 모듈 설치 - 무조건 yes 축약형

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
//gulpfile.babel.js
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