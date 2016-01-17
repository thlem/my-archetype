'use strict';

/***************
 * PLUGINS
 ****************/
var gulp = require('gulp');
var runSequence = require('run-sequence').use(gulp);
var $ = require('gulp-load-plugins')({
  pattern: [
    'gulp-clean'
  ]
});

/***************
 * CONFIG FILE
 ****************/
var config = require('./config.js');

/**
 * Task : clean:generated-sources
 * Description: The task that clean the generated_sources folder
 */
gulp.task('clean:generated-sources', function(){

    return gulp.src(config.FOLDERS.GENERATED_SOURCES, {read: false})
        .pipe($.clean());
});

/**
 * Task : clean:build
 * Description: The task that clean the build folder
 */
gulp.task('clean:build', function(){

    return gulp.src(config.FOLDERS.BUILD, {read: false})
        .pipe($.clean());

});

/**
 * Task : clean:deploy
 * Description: The task that clean the deploy folder
 */
gulp.task('clean:deploy', function(){

    return gulp.src(config.FOLDERS.DEPLOY, {read: false})
        .pipe($.clean());

});