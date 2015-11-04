'use strict';

var wrench = require('wrench');

wrench.readdirSyncRecursive('./gulp').filter(function(file) {
  return (/\.(js)$/i).test(file);
}).map(function(file) {
  require('./gulp/' + file);
});

/**
* PLUGIN LIST
*
* (gulp-)jshint = JSHint plugin for gulp
* jshint-stylish = Stylish reporter for JSHint
* (gulp-)concat = Files will be concatenated in the order that they are specified in the gulp.src function
* (gulp-)ng-annotate = Add angularjs dependency injection annotations with  @ngInject
* (gulp-)size = Logs out the total size of files in the stream and optionally the individual file-sizes
* (gulp-)minify-html = Minify html with minimize
* (gulp-)angular-templatecache = Concatenates and registers AngularJS templates in the $templateCache
* (gulp-)minify-css = Minify css with clean-css
* browser-sync = BrowserSync starts a small web server
* path = https://nodejs.org/docs/latest/api/path.html#path_path_join_path1_path2
* (gulp-)inject = inject file references into your index.html
* wrench = Recursive filesystem (and other) operations
* del = Delete files or dir
**/