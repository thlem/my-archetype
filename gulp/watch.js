'use strict';

/***************
 * PLUGINS
 ****************/
var gulp = require('gulp');
var runSequence = require('run-sequence').use(gulp);
var $ = require('gulp-load-plugins')({
  pattern: [
    'browser-sync',
    'path'
  ]
});

/***************
 * CONFIG FILE
 ****************/
var config = require('./config.js');

/**
 * Task : watch
 * Description: The task that run the watcher that watch changes of given files.
 *              On changes, regenerate generated_sources, and then reload the server.
 */
gulp.task('watch', ['inject:dev'], function(){

    gulp.watch([
        config.FILTERS.SCRIPTS.DEV,
        config.FILTERS.STYLES.CSS.DEV,
        $.path.join(config.FOLDERS.SRC, '**/*.html'),
        'bower.json'
        ], function(event) {
      
      runSequence('inject:dev', 'serve:reload');

    });

});