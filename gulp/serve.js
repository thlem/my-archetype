'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');

var browserSync = require('browser-sync');

var util = require('util');

function browserSyncInit(baseDir, port, browser) {
  browser = browser === undefined ? 'default' : browser;

  var routes = null;

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

  browserSync.instance = browserSync.init({
    startPath: '#/',
    server: server,
    browser: browser,
    port: port,
    ui: {
      port: port + 1
    }
  });
}

gulp.task('serve', ['watch'], function () {
  browserSyncInit([conf.paths.generatedSources, 'null']);
});