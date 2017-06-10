'use strict';


var gulp = require('gulp'),
    size = require('gulp-size'),
    react = require('gulp-react'),
    concat = require('gulp-concat'),
    clean = require('gulp-clean'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass');


// Tasks
gulp.task('default', function(){
  gulp.start('transform');
  gulp.watch('app/static/styles/scss/*.scss', ['sass']);
  gulp.watch('app/static/scripts/jsx/*.jsx', ['transform']);
});

gulp.task('build', ['clean', 'sass'], function(){
  return gulp.src('app/static/scripts/jsx/*.jsx')
    .pipe(react({harmony: false,}))
    .pipe(uglify())
    .pipe(concat('main.js'))
    .pipe(gulp.dest('app/static/scripts/js/compiled'))
    .pipe(size());
});

gulp.task('transform', ['clean'], function(){
  return gulp.src('app/static/scripts/jsx/*.jsx')
    .pipe(react({harmony: false,}))
    .pipe(uglify())
    .pipe(concat('main.js'))
    .pipe(gulp.dest('app/static/scripts/js/compiled'))
    .pipe(size());
});

gulp.task('clean', function(){
  return gulp.src(['app/static/scripts/js/compiled'], {read: false})
    .pipe(clean());
});

gulp.task('sass', function () {
  return gulp.src('app/static/styles/scss/main.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('app/static/styles/css'));
});
