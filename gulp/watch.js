'use strict';

var gulp = require('gulp');
var path = require('path');
var browserSync = require('browser-sync');
var $ = require('gulp-load-plugins')();

var conf = require('./conf');

gulp.task('watch', ['script', 'style', 'inject'], function(){
    gulp.watch('./app/**/*.js', ['script']);
    gulp.watch('./app/**/*.css', ['style']);
    gulp.watch('./app/**/*.html', function(){
      browserSync.reload();
    });
});