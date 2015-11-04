'use strict';

var gulp = require('gulp');
var path = require('path');
var browserSync = require('browser-sync');
var $ = require('gulp-load-plugins')();

var conf = require('./conf');

gulp.task('script', ['jshint', 'template-cache'], function(){
     
     var jsOrderedFiles = [
      path.join(conf.paths.app, '**/*.module.js'),
      path.join(conf.paths.app, '**/*.js'),
      path.join(conf.paths.tmp, 'templateCacheHtml.js')
     ]
     
     return gulp.src(jsOrderedFiles)
       .pipe($.concat('app.min.js'))
       .pipe($.ngAnnotate())
       .pipe($.uglify())
       .pipe(gulp.dest('./generated_sources'))
       .pipe(browserSync.reload({
            stream: true
        }))
       .pipe($.size());
     
});