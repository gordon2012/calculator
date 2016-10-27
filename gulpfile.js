// File: gulpfile.js

// grab our gulp packages
var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps');

var useref = require('gulp-useref');

// define the default task and add the watch task to it
gulp.task('default', ['watch']);


// TASKS

// configure the jshint task
gulp.task('jshint', function()
{
  return gulp.src('source/javascript/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

// configure the sass task
gulp.task('build-css', function()
{
  return gulp.src('source/scss/**/*.scss')
    .pipe(sourcemaps.init())
      .pipe(sass())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('public/assets/stylesheets'));
});

// task: build-js
gulp.task('build-js', function()
{
  return gulp.src('source/javascript/**/*.js')
    .pipe(sourcemaps.init())
      .pipe(concat('bundle.js'))
      // only ugglify if gulp is ran with '--type production'
      .pipe(gutil.env.type === 'production' ? uglify() : gutil.noop())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('public/assets/javascript'));
});

/* --------------------------------
  TASK: useref
-------------------------------- */

gulp.task('useref', function() {
  return gulp.src('src/*.html')
    .pipe(useref())
    .pipe(gulp.dest('dist'));
});

// WATCHES

// configure which files to watch and what tasks to use on file changes
gulp.task('watch', function()
{
  gulp.watch('source/javascript/**/*.js', ['jshint']);
  gulp.watch('source/scss/**/*scss', ['build-css']);
});
