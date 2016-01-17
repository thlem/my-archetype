'use strict';

/***************
 * PLUGINS
 ****************/
var gulp = require('gulp');
var runSequence = require('run-sequence').use(gulp);
var $ = require('gulp-load-plugins')({
  pattern: [
    'browser-sync',
    'util'
  ]
});

/***************
 * CONFIG FILE
 ****************/
var config = require('./config.js');

/**
 * Task : serve
 * Description: The task that run the server and serve app on localhost
 *              Before start, the task watch is run.
 */
gulp.task('serve', function () {

  runSequence(
    'watch',
    function () {
      browserSyncInit([config.FOLDERS.GENERATED_SOURCES]);
    }
  );

});

/**
 * Task : serve:reload
 * Description: The task that reload the server and serve again app on localhost
 */
gulp.task('serve:reload', function () {
  $.browserSync.reload();
});

/***************
 * OTHER METHOD
 ****************/

/**
 * The configuration of the runing server
 */
function browserSyncInit(baseDir, port, browser) {
  browser = browser === undefined ? 'default' : browser;

  var routes = null;
  if (baseDir === config.FOLDERS.GENERATED_SOURCES || ($.util.isArray(baseDir) && baseDir.indexOf(config.FOLDERS.GENERATED_SOURCES) !== -1)) {
    routes = {
      '/bower_components': './bower_components'
    };
  }

  var server = {
    baseDir: baseDir,
    routes: routes
  };

  if (!port) {
    port = 8000;
  }

  /*
   * You can add a proxy to your backend by uncommenting the line bellow.
   * You just have to configure a context which will we redirected and the target url.
   * Example: $http.get('/users') requests will be automatically proxified.
   *
   * For more details and option, https://github.com/chimurai/http-proxy-middleware/blob/v0.0.5/README.md
   */
  // server.middleware = proxyMiddleware('/users', {target: 'http://jsonplaceholder.typicode.com', proxyHost: 'jsonplaceholder.typicode.com'});

  $.browserSync.instance = $.browserSync.init({
    startPath: '#/',
    server: server,
    browser: browser,
    port: port,
    ui: {
      port: port + 1
    }
  });
}