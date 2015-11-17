'use strict';

var gulp = require('gulp');
var path = require('path');
var del = require('del');
var $ = require('gulp-load-plugins')();

var conf = require('./conf');

gulp.task('build', ['clean', 'scripts', 'styles', 'partials']);

gulp.task('partials', function () {
  return gulp.src([path.join(conf.paths.app, '**/*.html')])
//        .pipe($.minifyHtml({
//            empty: true,
//            spare: true,
//            quotes: true
//        }))
//        .pipe($.angularTemplatecache('templateCacheHtml.js', {
//            module: 'eBriefing',
//            root: 'app'
//        }))
    .pipe(gulp.dest(conf.paths.generatedSources));
});