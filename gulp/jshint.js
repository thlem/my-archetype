  'use strict';

  var gulp = require('gulp');
  var path = require('path');
  var $ = require('gulp-load-plugins')();

  var conf = require('./conf');

  gulp.task('jshint', function () {

    return gulp.src(path.join(conf.paths.app, '**/*.js'))
      .pipe($.jshint())
      .pipe($.jshint.reporter('jshint-stylish'))
      .pipe($.size());

  });