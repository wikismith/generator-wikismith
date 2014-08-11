var gulp = require('gulp'),
  watch = require('gulp-watch'),
  es = require('event-stream'),
  wikismith = require('wikismith'),
  express = require('express'),
  livereload = require('connect-livereload'),
  tinylr = require('tiny-lr');

var app = express(),
  lr = tinylr();

function serve() {

  watch({glob: ['pages/**/*.jpg', 'pages/**/*.png', 'pages/**/*.gif']})
    .pipe(gulp.dest('build'));

  wikismith.watch()
    .pipe(wikismith.pipeline())
    .pipe(gulp.dest('build'))
    .pipe(es.map(function(file, cb) {
      lr.changed({body: { files: [file.path] }});
      cb(null, file);
    }));

  app.use(livereload());
  app.use(express.static(__dirname + '/build'));
  app.listen(9292);
  lr.listen(35729);
}

gulp.task('default', function() {
  serve()
});

gulp.task('install', function() {
  wikismith.install('themes');
})
