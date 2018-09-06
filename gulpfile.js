const gulp = require('gulp');
const watch = require('gulp-watch');
const sass = require('gulp-sass');

gulp.task('sass', function() {
  console.log('watching sass files');
  return watch(['./src/scss/**/*.scss'], function() {
    console.log('gulping sass');
    gulp.src('./src/scss/index.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('./public/stylesheets/'));
  });
});
