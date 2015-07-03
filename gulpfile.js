var gulp = require('gulp');
var babel = require('gulp-babel');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');

gulp.task('default', function () {
  return  browserify({
      entries: './src/event-schedule.js',
      debug: true
    })
    .transform(babelify)
    // .transform(babelify.configure({
    //     loose: 'all'
    //   })
    // )
    .bundle()
    // .pipe(babel())
    .pipe(source('event-schedule.js'))
    .pipe(gulp.dest('./'));
});

// gulp.task('default', function () {
//   return  gulp.src("src/core.js")
//     .pipe(babel())
//     .pipe(gulp.dest('./'));
// });
