'use strict';

/***************
 * PLUGINS
 ****************/
var gulp = require('gulp');
var runSequence = require('run-sequence').use(gulp);
var rev = require('gulp-rev'); // does not work with gulp-load-plugins...
var $ = require('gulp-load-plugins')({
  pattern: [
    'path',
    'gulp-csso',
    'gulp-uglify'
  ]
});

/***************
 * CONFIG FILE
 ****************/
 var config = require('./config.js');

/**************************************
*********** ENVIRONMENT : PROD ********
***************************************/

gulp.task('build:prod', function(callback){
    runSequence(
        'generate-sources:dev',
        'minimify',
        'inject:prod',
        callback
    );
});

gulp.task('minimify', ['minimify-css', 'minimify-js']);

gulp.task('minimify-css', function(){
    return gulp.src($.path.join(config.FOLDERS.GENERATED_STYLES, 'app.css'))
        .pipe($.csso())
        .pipe(rev())
        .pipe(gulp.dest(config.FOLDERS.BUILD));
});

gulp.task('minimify-js', function(){
    return gulp.src($.path.join(config.FOLDERS.GENERATED_SCRIPTS, 'app.js'))
        .pipe($.uglify())
        .pipe(rev())
        .pipe(gulp.dest(config.FOLDERS.BUILD));
});