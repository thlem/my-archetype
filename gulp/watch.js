'use strict';

var gulp = require('gulp');
var path = require('path');
var del = require('del');
var $ = require('gulp-load-plugins')();
var browserSync = require('browser-sync');

var conf = require('./conf');

gulp.task('watch', ['build'], function () {

  gulp.watch([path.join(conf.paths.app, '**/*.css')], function (event) {
    gulp.start('styles');
    browserSync.reload(event.path);
  });

  gulp.watch(path.join(conf.paths.app, '**/*.js'), function (event) {
    gulp.start('scripts');
    browserSync.reload(event.path);
  });

  gulp.watch(path.join(conf.paths.app, '**/*.html'), function (event) {
    gulp.start('partials');
    browserSync.reload(event.path);
  });

});
