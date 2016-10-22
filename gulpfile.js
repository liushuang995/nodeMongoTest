/**
 * Created by liushuang on 16/10/22.
 */
var gulp = require('gulp');
var sass = require('gulp-sass');
var group = require('gulp-group-files');

gulp.task('sass', function () {
    return gulp.src('static/scss/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('static/css'));
});

gulp.task('sass:watch',function (){
    gulp.watch('**/*.scss',['sass'])
});

gulp.task('default',['sass:watch']);
