var gulp = require('gulp'),
imageMin = require('gulp-imagemin'),
del = require('del'),
usemin = require('gulp-usemin'),
rev = require('gulp-rev'),
cssnano = require('gulp-cssnano'),
uglify = require('gulp-uglify'),
browserSync = require('browser-sync').create();

gulp.task('previewDist', function(){
	browserSync.init({
		notify: false,
		server: {
			baseDir: "docs"
		}
	});
});

gulp.task('deleteDistFolder',['icons'], function(){
	return del("./docs");
});

gulp.task('copyGeneralFiles', ['deleteDistFolder'],function(){
	var pathsToCopy = [
		'./app/**/*',
		'!./app/index.html',
		'!./app/assets/images/**',
		'!./app/assets/styles/**',
		'!./app/assets/scripts/**',
		'!./app/temp/',
		'!./app/temp/**'
	]
	return gulp.src(pathsToCopy)
		.pipe(gulp.dest('./docs'));
});

gulp.task('optimizeImages', ['deleteDistFolder'], function(){
	return gulp.src(['./app/assets/images/**/*', '!./app/assets/images/icons', '!./app/assets/images/icons/**/*'])
		.pipe(imageMin({
			progressive: true,
			interlaced: true,
			multipass: true
		}))
		.pipe(gulp.dest('./docs/assets/images'));
});

gulp.task('useminTrigger', ['deleteDistFolder'], function(){
	gulp.start('usemin-main');
	gulp.start('usemin-about-me');
	gulp.start('usemin-fit-core-restore');
	gulp.start('usemin-fit-menopause');
	gulp.start('usemin-fit-postpartum');
	gulp.start('usemin-fit-pregnancy');
	gulp.start('usemin-lifestyle');
	gulp.start('usemin-main-en');
	gulp.start('usemin-about-me-en');
	gulp.start('usemin-fit-core-restore-en');
	gulp.start('usemin-fit-menopause-en');
	gulp.start('usemin-fit-postpartum-en');
	gulp.start('usemin-fit-pregnancy-en');
	gulp.start('usemin-lifestyle-en');
});

gulp.task('usemin-main', ['styles', 'scripts'], function(){
	return gulp.src('./app/index.html')
		.pipe(usemin({
			css: [function(){return rev()}, function(){return cssnano()}],
			js: [function(){return rev()},function(){return uglify()}]
		}))
		.pipe(gulp.dest('./docs'));	
})
gulp.task('usemin-about-me', ['styles', 'scripts'], function(){
return gulp.src('./app/about-me/index.html')
		.pipe(usemin({
			css: [function(){return rev()}, function(){return cssnano()}],
			js: [function(){return rev()},function(){return uglify()}]
		}))
		.pipe(gulp.dest('./docs/about-me'));
})
gulp.task('usemin-fit-core-restore', ['styles', 'scripts'], function(){
return gulp.src('./app/fit-core-restore/index.html')
		.pipe(usemin({
			css: [function(){return rev()}, function(){return cssnano()}],
			js: [function(){return rev()},function(){return uglify()}]
		}))
		.pipe(gulp.dest('./docs/fit-core-restore'));
})
gulp.task('usemin-fit-menopause', ['styles', 'scripts'], function(){
return gulp.src('./app/fit-menopause/index.html')
		.pipe(usemin({
			css: [function(){return rev()}, function(){return cssnano()}],
			js: [function(){return rev()},function(){return uglify()}]
		}))
		.pipe(gulp.dest('./docs/fit-menopause'));
})
gulp.task('usemin-fit-postpartum', ['styles', 'scripts'], function(){
return gulp.src('./app/fit-postpartum/index.html')
		.pipe(usemin({
			css: [function(){return rev()}, function(){return cssnano()}],
			js: [function(){return rev()},function(){return uglify()}]
		}))
		.pipe(gulp.dest('./docs/fit-postpartum'));
})
gulp.task('usemin-fit-pregnancy', ['styles', 'scripts'], function(){
return gulp.src('./app/fit-pregnancy/index.html')
		.pipe(usemin({
			css: [function(){return rev()}, function(){return cssnano()}],
			js: [function(){return rev()},function(){return uglify()}]
		}))
		.pipe(gulp.dest('./docs/fit-pregnancy'));
})
gulp.task('usemin-lifestyle', ['styles', 'scripts'], function(){
return gulp.src('./app/lifestyle/index.html')
		.pipe(usemin({
			css: [function(){return rev()}, function(){return cssnano()}],
			js: [function(){return rev()},function(){return uglify()}]
		}))
		.pipe(gulp.dest('./docs/lifestyle'));
})



gulp.task('usemin-main-en', ['styles', 'scripts'], function(){
	return gulp.src('./app/en/index.html')
		.pipe(usemin({
			css: [function(){return rev()}, function(){return cssnano()}],
			js: [function(){return rev()},function(){return uglify()}]
		}))
		.pipe(gulp.dest('./docs/en'));	
})
gulp.task('usemin-about-me-en', ['styles', 'scripts'], function(){
return gulp.src('./app/about-me/en/index.html')
		.pipe(usemin({
			css: [function(){return rev()}, function(){return cssnano()}],
			js: [function(){return rev()},function(){return uglify()}]
		}))
		.pipe(gulp.dest('./docs/about-me/en'));
})
gulp.task('usemin-fit-core-restore-en', ['styles', 'scripts'], function(){
return gulp.src('./app/fit-core-restore/en/index.html')
		.pipe(usemin({
			css: [function(){return rev()}, function(){return cssnano()}],
			js: [function(){return rev()},function(){return uglify()}]
		}))
		.pipe(gulp.dest('./docs/fit-core-restore/en'));
})
gulp.task('usemin-fit-menopause-en', ['styles', 'scripts'], function(){
return gulp.src('./app/fit-menopause/en/index.html')
		.pipe(usemin({
			css: [function(){return rev()}, function(){return cssnano()}],
			js: [function(){return rev()},function(){return uglify()}]
		}))
		.pipe(gulp.dest('./docs/fit-menopause/en'));
})
gulp.task('usemin-fit-postpartum-en', ['styles', 'scripts'], function(){
return gulp.src('./app/fit-postpartum/en/index.html')
		.pipe(usemin({
			css: [function(){return rev()}, function(){return cssnano()}],
			js: [function(){return rev()},function(){return uglify()}]
		}))
		.pipe(gulp.dest('./docs/fit-postpartum/en'));
})
gulp.task('usemin-fit-pregnancy-en', ['styles', 'scripts'], function(){
return gulp.src('./app/fit-pregnancy/en/index.html')
		.pipe(usemin({
			css: [function(){return rev()}, function(){return cssnano()}],
			js: [function(){return rev()},function(){return uglify()}]
		}))
		.pipe(gulp.dest('./docs/fit-pregnancy/en'));
})
gulp.task('usemin-lifestyle-en', ['styles', 'scripts'], function(){
return gulp.src('./app/lifestyle/en/index.html')
		.pipe(usemin({
			css: [function(){return rev()}, function(){return cssnano()}],
			js: [function(){return rev()},function(){return uglify()}]
		}))
		.pipe(gulp.dest('./docs/lifestyle/en'));
})






gulp.task('build', ['deleteDistFolder', 'copyGeneralFiles', 'optimizeImages' ,'useminTrigger']);
// gulp.task('build', ['deleteDistFolder', 'copyGeneralFiles', 'useminTrigger']);