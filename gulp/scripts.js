'use strict';

var gulp = require('gulp');
var path = require('path');
var $ = require('gulp-load-plugins')();

var conf = require('./conf');

gulp.task('scripts', ['jshint', 'templatecache'], function () {

  return gulp.src([path.join(conf.paths.app, '**/*.module.js'), path.join(conf.paths.app, '**/*.js')])
    .pipe($.concat('app.concat.js'))
    .pipe($.ngAnnotate())
    .pipe(gulp.dest(conf.paths.generatedSources))
    .pipe($.size());

});