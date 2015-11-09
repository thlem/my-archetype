'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');

var $ = require('gulp-load-plugins')();

gulp.task('inject', function() {
  
    var injectStyles = gulp.src([
        path.join('*.css')
    ], {
        read: false
    });

    var injectScripts = gulp.src([
            path.join('*.js')
        ]);

    var injectOptions = {
        addRootSlash: false
    };

    return gulp.src(path.join(conf.paths.generatedSources, '/*.html'))
        .pipe($.inject(injectStyles, injectOptions))
        .pipe($.inject(injectScripts, injectOptions))
        .pipe(gulp.dest(path.join(conf.paths.generatedSources)));
});
