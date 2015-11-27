/***************
 * PLUGINS
 ****************/
var gulp = require('gulp');
var $ = require('gulp-load-plugins')({
  pattern: [
    'browser-sync',
    'path'
  ]
});

/***************
 * CONF FILE
 ****************/
var conf = require('./conf.js').PATHS;

/***************
 * TASK
 ****************/
gulp.task('watch', ['build:dev'], function () {

  //gulp.watch([$.path.join(conf.SRC, '/*.html'), 'bower.json'], ['build:dev']);

  gulp.watch(conf.APP_STYLES, function (event) {
    $.browserSync.reload(event.path);
  });

  gulp.watch(conf.APP_SCRIPTS, function (event) {
    $.browserSync.reload(event.path);
  });

  gulp.watch([$.path.join(conf.APP, '**/*.html')], function (event) {
    $.browserSync.reload(event.path);
  });

});