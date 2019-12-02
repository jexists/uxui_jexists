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