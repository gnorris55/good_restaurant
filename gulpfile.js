var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function(){
    return gulp.src('./style.scss')
      .pipe(sass()) // Using gulp-sass
      .pipe(gulp.dest('./dist'))
  });