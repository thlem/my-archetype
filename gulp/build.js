  'use strict';

  var gulp = require('gulp');
  var path = require('path');
  var del = require('del');
  var $ = require('gulp-load-plugins')();

  var conf = require('./conf');

  gulp.task('build', ['clean', 'scripts']);