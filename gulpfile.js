var gulp         = require('gulp'),
    livereload   = require('gulp-livereload');

// Default task
gulp.task('default', function() {
//  gulp.start('styles', 'scripts', 'images');
});

// Watch
gulp.task('watch', function() {

  // Create LiveReload server
  livereload.listen();

});
