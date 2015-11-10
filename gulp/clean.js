  'use strict';

  var gulp = require('gulp');
  var path = require('path');
  var del = require('del');
  var $ = require('gulp-load-plugins')();

  var conf = require('./conf');

  gulp.task('clean', function () {

    del(conf.paths.generatedSources).then(function (paths) {
      console.log('Deleted files/folders:\n', paths.join('\n'));
    });


  });
