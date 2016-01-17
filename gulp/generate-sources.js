'use strict';

/***************
 * PLUGINS
 ****************/
var gulp = require('gulp');
var runSequence = require('run-sequence').use(gulp);
var $ = require('gulp-load-plugins')({
  pattern: [
    'path',
    'gulp-angular-templatecache',
    'gulp-htmlmin',
    'gulp-concat',
    'gulp-ng-annotate'
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
 * Task : generate-sources:dev
 * Description: The task that generates files that will be injected.
 */
gulp.task('generate-sources:dev', function(callback){
    runSequence(
        'clean:generated-sources', // Clean the directory
        'generate-templatecache:dev', // Take all html files and generate it in a JS angular file
        'generate-scripts:dev', // Generate JS app file
        'generate-styles:dev', // Generate CSS app file
        callback
    );
});

/**
 * Task : generate-templatecache:dev
 * Description: The task that generates the templateCache JS file from html files
 */
gulp.task('generate-templatecache:dev', function(){

    return gulp.src(config.FILTERS.HTML.DEV)
        .pipe($.angularTemplatecache('templateCacheHtml.js', {
            module: config.APP_NAME,
            root: config.TEMPLATES_ROOT
        }))
        .pipe(gulp.dest(config.FOLDERS.GENERATED_SCRIPTS));
});

/**
 * Task : generate-scripts:dev
 * Description: The task that generates the app.js file
 */
gulp.task('generate-scripts:dev', function(){

    return gulp.src(config.FILTERS.SCRIPTS.DEV)
        .pipe($.ngAnnotate())
        .pipe($.concat('app.js'))
        .pipe(gulp.dest(config.FOLDERS.GENERATED_SCRIPTS));
});

/**
 * Task : generate-styles:dev
 * Description: The task that generates the app.css file
 */
gulp.task('generate-styles:dev', function(){

    return gulp.src(config.FILTERS.STYLES.CSS.DEV)
        .pipe($.concat('app.css'))
        .pipe(gulp.dest(config.FOLDERS.GENERATED_STYLES));
});

