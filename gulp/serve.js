/***************
 * PLUGINS
 ****************/
var gulp = require('gulp');
var $ = require('gulp-load-plugins')({
  pattern: [
    'browser-sync',
    'util'
  ]
});

/***************
 * CONF FILE
 ****************/
var conf = require('./conf.js').PATHS;

/***************
 * TASK
 ****************/
gulp.task('serve', ['watch'], function () {
  browserSyncInit([conf.BUILD, conf.SRC]);
});

/***************
 * OTHER METHOD
 ****************/

/**
 *
 * @param {type} baseDir
 * @param {type} port
 * @param {type} browser
 */
function browserSyncInit(baseDir, port, browser) {
  browser = browser === undefined ? 'default' : browser;

  var routes = null;
  if (baseDir === conf.SRC || ($.util.isArray(baseDir) && baseDir.indexOf(conf.SRC) !== -1)) {
    routes = {
      '/bower_components': conf.BOWER_COMPONENT
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