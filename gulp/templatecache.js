  'use strict';

  var gulp = require('gulp');
  var path = require('path');
  var $ = require('gulp-load-plugins')();

  var conf = require('./conf');

  gulp.task('templatecache', function () {

    return gulp.src(path.join(conf.paths.app, '**/*.html'))
      .pipe($.angularTemplatecache('templateCacheHtml.js'))
      .pipe(gulp.dest(conf.paths.generatedSources))
      .pipe($.size());

  });