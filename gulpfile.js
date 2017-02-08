const gulp = require('gulp'),
    browserify = require('browserify'),
    babelify = require('babelify'),
    source = require('vinyl-source-stream');

gulp.task('scripts', function() {
    browserify('./src/main.js')
    .transform(babelify, {
      presets: ['es2015', 'react']
    })
    .bundle()
    .pipe(source('main.js'))
    .pipe(gulp.dest('./dist/js'));
});

gulp.task('default', ['scripts']);
