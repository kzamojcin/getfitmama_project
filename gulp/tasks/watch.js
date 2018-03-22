var gulp = require('gulp'),
watch = require('gulp-watch'),
browserSync = require('browser-sync').create();

gulp.task('watch', function(){

	browserSync.init({
		notify: false,
		server: {
			baseDir: "app"
		}
	});

	watch(['./app/index.html','./app/en/index.html','./app/fit-postpartum/index.html','./app/fit-postpartum/en/index.html','./app/about-me/index.html','./app/about-me/en/index.html','./app/fit-pregnancy/index.html','./app/fit-pregnancy/en/index.html','./app/fit-menopause/index.html','./app/fit-menopause/en/index.html','./app/fit-core-restore/index.html','./app/fit-core-restore/en/index.html','./app/nutrition/index.html','./app/nutrition/en/index.html'], function(){
		browserSync.reload();
	});

	watch('./app/assets/styles/**/*.css', function(){
		gulp.start('cssInject');
	});

	watch('./app/assets/scripts/**/*.js', function(){
		gulp.start('scriptsRefresh');
	});
});

gulp.task('cssInject', ['styles'], function(){
	return gulp.src('./app/temp/styles/styles.css')
		.pipe(browserSync.stream());
});

gulp.task('scriptsRefresh', ['scripts'], function(){
	return gulp.src('./app/temp/scripts/App-compiled.js')
		.pipe(browserSync.stream());
});