const gulp = require('gulp');
const fileinclude = require('gulp-file-include');
const htmlmin = require('gulp-htmlmin');
const browserSync = require('browser-sync').create();
const plumber = require('gulp-plumber');
const notify = require("gulp-notify");
const terser = require('gulp-terser');
const del = require('del');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const gcmq = require('gulp-group-css-media-queries');
const dartSass =  require('sass');
const gulpSass = require('gulp-sass');
const sass = gulpSass(dartSass);

/*HTML*/
function html(){
	return gulp.src('./src/*.html')
	.pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
	.pipe(fileinclude())
	.pipe(gulp.dest('./build/'))
	.pipe(browserSync.stream());
}
function htmlMin(){
	return gulp.src('./src/*.html')
	.pipe(fileinclude())
	.pipe(htmlmin({
		collapseWhitespace: true
	}))
	.pipe(gulp.dest('./build/'))
}
/*JS*/
const jsFiles = [
	'./node_modules/magnific-popup/dist/jquery.magnific-popup.min.js',
	'./node_modules/imagesloaded/imagesloaded.pkgd.min.js',
	'./node_modules/slick-carousel/slick/slick.min.js',
	'./node_modules/tilt.js/dest/tilt.jquery.min.js',
	'./node_modules/lazysizes/lazysizes.min.js',
	'./node_modules/lazysizes/plugins/bgset/ls.bgset.min.js',
	'./src/external/sumoselect/jquery.sumoselect.min.js',
	'./src/external/panelmenu/panelmenu.js',
	'./src/external/air-datepicker-master/dist/js/datepicker.min.js',
	'./src/external/countdown/jquery.countdown.min.js',
	'./src/external/bootstrap/js/bootstrap.min.js',
	'./src/external/form/jquery.form.js',
	'./src/external/form/jquery.validate.min.js',
	'./src/external/form/jquery.form-init.js',
	'./src/js/**/*.js'
];
function js(){
	return gulp.src(jsFiles, {allowEmpty: true})
	.pipe(concat('bundle.js'))
	.pipe(gulp.dest('./build/js'))
	.pipe(browserSync.stream());
}
function jsMin(){
	return gulp.src(jsFiles, {allowEmpty: true})
	.pipe(concat('bundle.js'))
	.pipe(terser({
		keep_fnames: true,
		mangle: false
	}))
	.pipe(gulp.dest('./build/js'))
	.pipe(browserSync.stream());
}
/*CSS*/
function css() {
	return gulp.src(['./src/scss/style.scss'])
	.pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
	.pipe(sass().on('error', sass.logError))
	.pipe(autoprefixer({
		overrideBrowserslist: ['last 1 versions'],
		cascade: false
	}))
	.pipe(gulp.dest('./build/css'))
	.pipe(gulp.dest('./src/css'))
	.pipe(browserSync.stream());
}
function cssMin() {
	return gulp.src(['./src/scss/style.scss'])
	.pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
	.pipe(sass().on('error', sass.logError))
	.pipe(autoprefixer({
		overrideBrowserslist: ['last 1 versions'],
		cascade: false
	}))
	.pipe(gcmq())
	.pipe(cleanCSS({level: 2}))
	.pipe(gulp.dest('./build/css'))
	.pipe(gulp.dest('./src/css'))
	.pipe(browserSync.stream());
}
/*Remove Folder*/
function remove() {
	return del(['build/*'])
}
/*File Transfer*/
function fileTransfer(){
	return gulp.src(['./src/**/*', '!./src/js/**/*', '!./src/*.html'])
	.pipe(gulp.dest('./build/'))
};
function watch(){
	browserSync.init({
		server: {
			baseDir: "./build/"
		}
	});
	gulp.watch('./src/scss/**/*.scss', css)
	gulp.watch('./src/js/**/*.js', js)
	gulp.watch('./src/**/*.html', gulp.series(html)).on('change', function(){
		browserSync.reload();
	});
}
gulp.task('watch', watch);
gulp.task('build', gulp.series(remove, gulp.parallel(css, js, html, remove, fileTransfer)));
/*Task*/
gulp.task('css', css);
gulp.task('cssMin', cssMin);
gulp.task('js', js);
gulp.task('jsMin', jsMin);
gulp.task('html', html);
gulp.task('htmlMin', htmlMin);
gulp.task('remove', remove);
gulp.task('fileTransfer', fileTransfer);