'use strict'

const gulp = require('gulp');
const less = require('gulp-less');
const cssmin = require('gulp-cssmin');
const rename = require('gulp-rename');
const jsmin = require('gulp-jsmin');
const concat = require('gulp-concat');

exports.less = function () {
    return gulp.src('./src/css/style.less')
        .pipe(less())
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./dist/css'));
}

exports.js = function () {
    return gulp.src('./src/scripts/script.js')
        .pipe(jsmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./dist/scripts'));

}

exports.pluginsJs = function () {
    return gulp.src('./src/scripts/plugins/*')
        .pipe(gulp.dest('dist/scripts/plugins'))
}

exports.pluginsCSS = function () {
    return gulp.src('./src/css/plugins/*')
        .pipe(gulp.dest('dist/css/plugins'))
}

exports.fonts =  function() {
    return gulp.src('./src/fonts/*')
        .pipe(gulp.dest('dist/fonts'))
}