var gulp = require('gulp');
var runSequence = require('run-sequence').use(gulp);

gulp.task('build:dev', function () {

  runSequence(
    'clean',
    'jshint',
    'inject');
});

gulp.task('build:prod', function () {

  // TODO
});

