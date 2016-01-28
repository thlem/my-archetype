'use strict';

/***************
 * PLUGINS
 ****************/
var gulp = require('gulp');
var useref = require('gulp-useref');
var wiredep = require('wiredep').stream;
var $ = require('gulp-load-plugins')({
  pattern: [
    'gulp-inject',
    'path',
    'gulp-useref'
  ]
});

/***************
 * CONFIG FILE
 ****************/
var config = require('./config.js');

/**************************************
*********** ENVIRONMENT : DEV *********
***************************************/

/**
 * Task : inject:dev
 * Description: The task that takes the generated_sources files and inject all of these files in
 *              the index.html. It inject the bower files too.
 */
gulp.task('inject:dev', ['generate-sources:dev'], function(){

    var injectStyles = gulp.src([
        $.path.join(config.FOLDERS.GENERATED_STYLES, 'app.css'),
    ], {
        read: false
    });

    var injectScripts = gulp.src([
        $.path.join(config.FOLDERS.GENERATED_SCRIPTS, 'app.js')
    ]);


    var injectOptions = {
        ignorePath: [config.FOLDERS.GENERATED_SOURCES],
        addRootSlash: false
    };

    return gulp.src($.path.join(config.FOLDERS.SRC, 'index.html'))
        .pipe($.inject(injectStyles, injectOptions))
        .pipe($.inject(injectScripts, injectOptions))
        .pipe(wiredep({directory: 'bower_components'}))
        .pipe(gulp.dest(config.FOLDERS.GENERATED_SOURCES));

});

gulp.task('inject:prod', function(){

    var injectStyles = gulp.src([
        $.path.join(config.FOLDERS.BUILD, '*.css'),
    ], {
        read: false
    });

    var injectScripts = gulp.src([
        $.path.join(config.FOLDERS.BUILD, '*.js')
    ]);


    var injectOptions = {
        ignorePath: [config.FOLDERS.BUILD],
        addRootSlash: false
    };

    return gulp.src($.path.join(config.FOLDERS.SRC, 'index.html'))
        .pipe($.inject(injectStyles, injectOptions))
        .pipe($.inject(injectScripts, injectOptions))
        .pipe(wiredep({directory: 'bower_components'}))
        .pipe(useref())
        .pipe(gulp.dest(config.FOLDERS.BUILD));

});