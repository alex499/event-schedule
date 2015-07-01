var gulp = require('gulp');
var babel = require('gulp-babel');
var browserify = require('browserify');
var babelify = require('babelify');

gulp.task('default', function () {
  return  browserify({
      entries: './src/event-schedule.js',
      debug: true
    })
    .transform(babelify)
    .bundle()
    // .pipe(babel())
    .pipe(source('event-schedule.js'))
    .pipe(gulp.dest('./'));
});


// var gulp = require("gulp");
// var sourcemaps = require("gulp-sourcemaps");
// var babel = require("gulp-babel");
// var concat = require("gulp-concat");
//
// gulp.task("default", function () {
//   return gulp.src("src/**/*.js")
//     .pipe(sourcemaps.init())
//     .pipe(concat("all.js"))
//     .pipe(babel())
//     .pipe(sourcemaps.write("."))
//     .pipe(gulp.dest("dist"));
// });
