//gulpfile.babel.js


//모듈불러오기 =============================================================================================
import gulp from "gulp"; //기본 걸프모듈
import corejs from "core-js"; // async 기능 수행
import mkdir from "mk-dirs"; //폴더생성
import writeFile from "write"; //파일삽입 및 내용
import scss from "gulp-sass"; //SCSS사용
import sync from "browser-sync"; //browser-sync 호출

const browserSync = sync.create(); //실제 사용할 browser sync

//기본 폴더 위치 설정 =======================================================================================
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

/*=======================*/

async function makefile(){
	writeFile.sync(url.source+'index.html',`<!DOCTYPE html>\n<html lang="ko-KR">\n<head>\n	<meta charset="UTF-8">\n	<title>Document</title>\n</head>\n<body>\n	<script>\n		window.location = "./html/contents.html";\n	</script>\n</body>\n</html>`);
	//writeFile.sync(url.source+'html/main.html');
	//writeFile.sync(url.source+'html/contents.html');
	//writeFile.sync(url.source+'scss/base/reset.scss');
	//writeFile.sync(url.source+'scss/base/common.scss');

}

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
	 .pipe( browserSync.reload({stream:true}) ) //원래있던 갑에서 수정한값만 변경
}

function watch(){
	convertCss();
	gulp.watch(url.source+'scss/**/*.scss', convertCss); //scss폴더안에 있는 모든 데이터가 수정될 경우 CSS기능을 수행해라
}

//browser-sync 실행 =============================================================================
function server(){
	browserSync.init({
		server:{baseDir: url.source} //서버구동 기본폴더 위치
	
	});
}


//걸프 외부에서 실행 명령어 ========================================================================
// export const make  = makeDir;
export const make = gulp.parallel(makeDir);
export const mkfile = gulp.series(makefile); //series = 순차적으로
const myPublic = gulp.series(makeDir, gulp.parallel(makefile));

export const conScss = gulp.series(watch);

const gulpServer = gulp.parallel(server, conScss, watch); //paralle = 동시실행
export default gulpServer; 
//아무이름을 없으면 걸프서버를 운영해라

//export default myPublic;