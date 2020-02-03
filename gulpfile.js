'use strict';
const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

gulp.task('test-sass', () => {
    return gulp.src('src/sass/main.sass')
        .pipe(sass().on('error', sass.logError))
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(gulp.dest('dist/assets/css'))
        .pipe(browserSync.stream());
});

gulp.task('watch', () => {
    browserSync.init({
        server: {
           baseDir: "dist/",
           index: "index.html"
        }
    });

    gulp.watch('src/sass/**/*.sass',(done) =>{
        gulp.series(['test-sass'])(done);
    });
gulp.watch('dist/*.html').on('change',browserSync.reload);
    gulp.watch('./js/**/*.js').on('change', browserSync.reload)
});

gulp.task('default',gulp.series(['watch']));
