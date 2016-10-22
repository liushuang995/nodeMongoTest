/**
 * Created by liushuang on 16/10/22.
 */
var gulp = require('gulp');
var sass = require('gulp-sass');
var group = require('gulp-group-files');
var minifyCSS = require('gulp-clean-css');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
gulp.task('sass', function () {
    return gulp.src('static/scss/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(minifyCSS())
        .pipe(gulp.dest('static/css'));
});

gulp.task('sass:watch',function (){
    gulp.watch('static/scss/*.scss',['sass'])
});

gulp.task('jsuglify', function () {
    return gulp.src('*.js')
        .pipe(jshint().on('error', sass.logError))
        .pipe(uglify().on('error', sass.logError))
        .pipe(gulp.dest('modules/js'));
});

gulp.task('default',['sass']);
