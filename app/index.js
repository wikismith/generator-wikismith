'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');
var ghdownload = require('github-download');
var chalk = require('chalk');
var bower = require('gulp-bower');
var fs = require('fs');
var gulp = require('gulp');
var npm = require('npm-install');
var es = require('event-stream');

var WikismithGenerator = yeoman.generators.Base.extend({
  init: function () {
    this.pkg = require('../package.json');

    this.on('end', function () {
      if (!this.options['skip-install']) {
        this.installDependencies();
      }
    });
  },

  /*
  askFor: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay('Welcome to the marvelous Wikismith generator!'));
    var prompts = [{
      name: 'siteName',
      message: "What is your site's name?",
      default: true
    }];

    this.prompt(prompts, function (props) {
      this.name = props.name;

      done();
    }.bind(this));
  },
  */

  install: function () {
    this.copy('gulpfile.js','gulpfile.js');
    this.copy('_package.json', 'package.json');
    this.copy('_bower.json', 'bower.json');
    this.copy('_.gitignore', 'gitignore');
    this.directory('pages','pages');

    ghdownload({user: 'wikismith', repo: 'wikismith-themes', ref: 'master'}, path.join(process.cwd(),'wikismith_themes'))
        .on('dir', function(dir) {
          console.log(dir)
        })
        .on('file', function(file) {
          console.log(file)
        })
        .on('zip', function(zipUrl) { //only emitted if Github API limit is reached and the zip file is downloaded
          console.log(zipUrl)
        })
        .on('error', function(err) {
          console.error(err)
        })
        .on('end', function() {
            gulp.src('./wikismith_themes/*/bower.json')
                .pipe( es.map( function(file, cb) {
                    var fcb = function() {
                        cb(undefined, file);
                    }
                    var packageDir = path.dirname(file.path);
                    npm(packageDir, fcb);
                }) );

            gulp.src('./wikismith_themes/*/bower.json')
                .pipe(es.map( function(file, cb) {
                        var module_path = path.dirname(file.path);
                        bower({cwd: module_path});
                        cb(undefined ,file);
                     }));
            })
  },

  npm: function() {
    var done = this.async();
    this.npmInstall("", function(){
      done();
    });
  },

  projectfiles: function () {
    this.copy('editorconfig', '.editorconfig');
    this.copy('jshintrc', '.jshintrc');
  }
});

module.exports = WikismithGenerator;
