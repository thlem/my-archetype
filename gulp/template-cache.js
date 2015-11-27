/***************
 * PLUGINS
 ****************/
var gulp = require('gulp');
var $ = require('gulp-load-plugins')({
  pattern: [
    'gulp-angular-templatecache',
    'gulp-minify-html',
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
gulp.task('template-cache', function () {
  return gulp.src([$.path.join(conf.APP, '**/*.html')])
    .pipe($.minifyHtml({
      empty: true,
      spare: true,
      quotes: true
    }))
    .pipe($.angularTemplatecache('templateCacheHtml.js', {
      module: 'my',
      root: 'app'
    }))
    .pipe(gulp.dest($.path.join(conf.BUILD, 'partials/')));
});
