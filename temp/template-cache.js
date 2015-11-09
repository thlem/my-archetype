'use strict';

var gulp = require('gulp');
var path = require('path');
var $ = require('gulp-load-plugins')();

var conf = require('./conf');

gulp.task('template-cache', ['move-index'], function(){
     
     return gulp.src(path.join(conf.paths.app,'**/*.html'))
      .pipe($.minifyHtml({
        empty: true, // empty:true is the same as telling minifyHTML "do not remove empty attributes."
        spare: true, // do not remove redundant attributes
        quotes: true // do not remove arbitrary quotes
      }))
    .pipe($.angularTemplatecache('templateCacheHtml.js'))
    .pipe(gulp.dest('./tmp'))
    .pipe($.size());
     
});

gulp.task('move-index', function(){
  
  return gulp.src(path.join(conf.paths.app, '/*.html'))
    .pipe(gulp.dest(path.join(conf.paths.generatedSources)));
  
})