'use strict';

var gulp = require('gulp');
var path = require('path');
var browserSync = require('browser-sync');
var $ = require('gulp-load-plugins')();

var conf = require('./conf');

gulp.task('style', function(){
     
     return gulp.src(path.join(conf.paths.app, '**/*.css'))
     .pipe($.concat('app.min.css'))
     .pipe($.minifyCss())
     .pipe(gulp.dest(conf.paths.generatedSources))
     .pipe(browserSync.reload({
            stream: true
        }))
     .pipe($.size());
     
});