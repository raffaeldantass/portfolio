var gulp = require('gulp');
var htmlmin = require('gulp-html-minifier');
var cleanCSS = require('gulp-clean-css');
var concatCSS = require('gulp-concat-css');
var useref = require('gulp-useref');

gulp.task('htmlmin', () => {
  return gulp.src('./src/*.html')
  .pipe(useref())
  .pipe(htmlmin({collapseWhitespace: true}))
  .pipe(gulp.dest('./dist'));
});

gulp.task('concat', () => {
  return gulp.src('./src/_assets/_css/**/*.css')
    .pipe(concatCSS("_assets/_css/bundle.css"))
    .pipe(cleanCSS())
    .pipe(gulp.dest('./dist/'))
});