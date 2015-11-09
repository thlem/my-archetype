'use strict';

var gulp = require('gulp');
var path = require('path');
var browserSync = require('browser-sync');
var $ = require('gulp-load-plugins')();

var conf = require('./conf');

gulp.task('serve', ['watch'], function(){
     
    browserSync.instance = browserSync.init({
        startPath: '#/',
        server: {
          baseDir: conf.paths.generatedSources,
        },
        browser: 'firefox',
        port: 4000,
        ui: {
            port: 4001
        }
    });
     
});