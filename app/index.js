'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');
var chalk = require('chalk');
var bower = require('gulp-bower');
var fs = require('fs');

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

    this.directory('wikismith_modules','wikismith_modules')
        .on('end', function() {
            var cwd = process.cwd();
            var dir = path.join(cwd, 'wikismith_modules');
            fs.readdirSync(dir).forEach(function(subdir) {
                if (fs.statSync(path.join(dir, subdir)).isDirectory() ) {
                    var bowerJson = path.join(dir, subdir, 'bower.json');
                    if (fs.existsSync(bowerJson)) {
                        bower({cwd: path.join(dir,subdir),
                            directory: path.join(dir,subdir,'bower_components')});
                    }
                }
            });
        });
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
