'use strict';

var gulp = require('gulp');
var path = require('path');
var $ = require('gulp-load-plugins')();

var conf = require('./conf');

gulp.task('styles', ['csshint'], function () {

  return gulp.src(path.join(conf.paths.app, '**/*.css'))
    .pipe($.concat('app.min.css'))
    .pipe($.css())
    .pipe(gulp.dest(conf.paths.generatedSources));
});