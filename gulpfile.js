//import modules
var gulp = require('gulp'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
	sourcemaps = require('gulp-sourcemaps'),
	nodemon = require('gulp-nodemon');

//main component directory
var mainApp = './public/app/**/*.js';

//main file to exclude
var mainJs = './public/app/main.js';

//other components
var appComponents = './public/components/**/**/*.js';


//js
gulp.task('concatMinifyJs', function () {
	return gulp.src([appComponents, mainApp, '!./public/app/main.js' ])
			.pipe(sourcemaps.init())
			.pipe(concat('./public/app/main.js'))
			// .pipe(uglify())
			.pipe(sourcemaps.write())
			.pipe(gulp.dest('./'));
});

//watcher
gulp.task('watchJs', function () {
	gulp.watch([mainApp, appComponents], ['concatMinifyJs']);
});


// sass
var sass = require('gulp-sass');
gulp.task('transpileSass', function () {
  gulp.src('./public/assets/styles/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./public/assets/styles'));
});

gulp.task('watchSass', function() {
	gulp.watch(['./public/assets/styles/*.scss'],['transpileSass'])
})



//server
gulp.task('startServer', function () {
	nodemon({ script: 'index.js' });
});

// gulp.task('watch', function () {
// 	gulp.watch([mainApp,appComponents], ['concatMinifyJs']);
// });


 gulp.task('default', Object.keys(gulp.tasks));