  'use strict';

  var gulp = require('gulp');
  var path = require('path');
  var $ = require('gulp-load-plugins')();

  var conf = require('./conf');

  gulp.task('csshint', function () {

    var customReporter = function (file) {

      $.util.log('');
      $.util.log('************************* CSS LINT REPORTER *************************');
      $.util.log($.util.colors.cyan(file.csslint.errorCount) + ' errors in ' + $.util.colors.magenta(file.path));

      file.csslint.results.forEach(function (result) {
        $.util.log(result.error.message + ' on line ' + result.error.line);
      });

      $.util.log('************************ END CSS LINT REPORTER ***********************');
      $.util.log('');

    };

    return gulp.src(path.join(conf.paths.app, '**/*.css'))
      .pipe($.csslint())
      .pipe($.csslint.reporter(customReporter))
      .pipe($.size());

  });