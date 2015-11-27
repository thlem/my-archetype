/***************
 * PLUGINS
 ****************/
var gulp = require('gulp');
var $ = require('gulp-load-plugins')({
  pattern: [
    'gulp-jshint',
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
gulp.task('jshint', function () {
  return gulp.src($.path.join(conf.APP, '**/*.js'))
    .pipe($.jshint())
    .pipe($.jshint.reporter('jshint-stylish'));
});
