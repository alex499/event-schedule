var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('server', function() {
    browserSync.init({
        server: {
            baseDir: ['./examples/', './']
        }
    });
    gulp.watch("examples/*.html").on('change', browserSync.reload);
    gulp.watch("src/*.js").on('change', browserSync.reload);
});
