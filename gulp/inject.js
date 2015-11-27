/***************
 * PLUGINS
 ****************/
var gulp = require('gulp');
var $ = require('gulp-load-plugins')({
  pattern: [
    'gulp-inject',
    'browser-sync',
    'path'
  ]
});
var wiredep = require('wiredep').stream

/***************
 * CONF FILE
 ****************/
var conf = require('./conf.js').PATHS;

/***************
 * TASK
 ****************/
gulp.task('inject', function () {

  var partialsInjectFile = gulp.src($.path.join(conf.BUILD, 'partials/templateCacheHtml.js'), {
    read: false
  });
  var partialsInjectOptions = {
    starttag: '<!-- inject:partials -->',
    ignorePath: conf.BUILD,
    addRootSlash: false
  };

  var injectStyles = gulp.src([
    $.path.join(conf.SRC, 'common.css'),
    $.path.join(conf.APP, '**/*.css')
  ], {
    read: false
  });

  var injectScripts = gulp.src([
    $.path.join(conf.APP, '/**/*.module.js'),
    $.path.join(conf.APP, '/**/*.js')
  ]);

  var injectOptions = {
    ignorePath: conf.SRC,
    addRootSlash: false
  };

  return gulp.src($.path.join(conf.SRC, 'index.html'))
    .pipe($.inject(partialsInjectFile, partialsInjectOptions))
    .pipe($.inject(injectStyles, injectOptions))
    .pipe($.inject(injectScripts, injectOptions))
    .pipe(wiredep({directory: 'bower_components'}))
    .pipe(gulp.dest($.path.join(conf.BUILD, '/')))
    .pipe($.browserSync.reload({
      stream: true
    }));

});
