//모듈 불러오기
import gulp from "gulp";
import corejs from "core-js";
import gulpCached from "gulp-cached";
import gulpWatch from "gulp-watch";
import gulpScss from "gulp-sass";
import gulpSync from "browser-sync";
const gulpBrowser = gulpSync.create();

// ================================
/*영역, 위치, 파일 변수작성*/
const url = {
	before: "./public/source/"
}

// ================================
/*function files*/
/*SCSS 기능 작성하기*/
const scssOption = {
	outputStyle:'compact',
	indentType:'tab',
	indentWidth:2,
	percision:6,
	sourceComment:false
};

async function FnScss(){
 gulp.src(url.before+'scss/**/*.scss')
 	 .pipe(gulpCached('scssFiles'))
 	 .pipe(gulpScss(scssOption).on('error', gulpScss.logError))
 	 .pipe(gulp.dest(url.before+'css/'))
	 .pipe( gulpBrowser.reload({stream:true}) );
}

function FnHtml(){
	gulp.src(url.before+'**/*.html')
		.pipe(gulpCached('htmlFiles'))
		.pipe(gulpBrowser.reload({stream:true}));
}

function FnJs(){
	gulp.src(url.before+'js/**/*.js')
		.pipe(gulpCached('jsFiles'))
		.pipe(gulpBrowser.reload({stream:true}));
}

function FnCss(){
	gulp.src(url.before+'css/**/*.css')
		.pipe(gulpCached('cssFiles'))
		.pipe(gulpBrowser.reload({stream:true}));
}

/*browser-sync 기능 작성하기*/
function FnSync(){
	gulpBrowser.init({
		server:{ baseDir:url.before }
	});
}

/*실시간 감지 기능 작성하기*/
function FnWatch(){
	gulpWatch(url.before+'**/*.html', FnHtml);
	gulpWatch(url.before+'scss/**/*.scss', FnScss);
	gulpWatch(url.before+'css/**/*.css', FnCss);
	gulpWatch(url.before+'js/**/*.js', FnJs);
}



// ================================
/*외부에서 사용하기(내보내기)*/
export const scss = FnScss; //gulp scss
export const server = FnSync; //gulp server


const myWeb = gulp.series(
	FnScss,
	gulp.parallel(FnSync, FnWatch));
export default myWeb;

