'use strict';
var Generator = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = Generator.extend({
  prompting: function () {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the majestic ' + chalk.red('quick-server') + ' generator!'
    ));

    var prompts = [
      {
        type: 'input',
        name: 'name',
        message: 'Your project name:',
        default: this.appname
      },
      {
        type: 'input',
        name: 'description',
        message: 'Project description:'
      },
      {
        type: 'input',
        name: 'authorName',
        message: 'Author Name:'
      },
      {
        type: 'input',
        name: 'authorEmail',
        message: 'Author Email:'
      },
      {
        type: 'input',
        name: 'authorSite',
        message: 'Author site:'
      },
      {
        type: 'input',
        name: 'license',
        message: 'Your project license:',
        default: 'MIT'
      },
      {
        type: 'confirm',
        name: 'private',
        message: 'Private:',
        default: false
      },
      {
        type: 'input',
        name: 'repository',
        message: 'Repository URL:'
      },
      {
        type: 'input',
        name: 'homepage',
        message: 'Homepage:'
      },
      {
        type: 'confirm',
        name: 'expose',
        message: 'Create public URL (using localtunnel):',
        default: false
      },
      {
        type: 'confirm',
        name: 'bower',
        message: 'Use bower:',
        default: true
      },
      {
        type: 'confirm',
        name: 'mobile',
        message: 'Include assets for mobile? (App icons, manifest, etc):',
        default: false
      },
      {
        type: 'list',
        name: 'color',
        message: 'Choose mobile UI color:',
        choices: [
          { name: chalk.white('White'), value: '#FFFFFF' },
          { name: chalk.inverse.gray('Gray'), value: '#808080' },
          { name: chalk.inverse.black('Black'), value: '#000000' },
          { name: chalk.red('Red'), value: '#FF0000' },
          { name: chalk.yellow('Yellow'), value: '#FFFF00' },
          { name: chalk.green('Green'), value: '#008000' },
          { name: chalk.cyan('Cyan'), value: '#00FFFF' },
          { name: chalk.blue('Blue'), value: '#0000FF' },
          { name: chalk.magenta('Magenta'), value: '#FF00FF' },
          { type: 'separator' },
          { name: 'Other: (specify):', value: 'other' },
          { type: 'separator' }
        ],
        when: function (answers) {
          return answers.mobile;
        }
      },
      {
        type: 'input',
        name: 'otherColor',
        message: 'Other Color (in hex):',
        when: function(answers){
          return answers.color === 'other';
        }
      },
      {
        type: 'confirm',
        name: 'moboIcons',
        message: 'Include dummy app icons images?',
        default: false,
        when: function (answers) {
          return answers.mobile;
        }
      }
    ];

    return this.prompt(prompts).then(function (props) {
      // To access props later use this.props.someAnswer;
      if (props.otherColor) {
        props.color = props.otherColor;
      }

      this.props = props;
      this.config.set(props);
    }.bind(this));
  },

  // Writing Logic here
  writing: {
    // Copy the configuration files
    config: function() {
      this.fs.copy(
        this.templatePath('_static/grunt/'),
        this.destinationPath('grunt/')
      );

      this.fs.copy(
        this.templatePath('_static/.babelrc'),
        this.destinationPath('.babelrc')
      );
      this.fs.copy(
        this.templatePath('_static/.eslintrc'),
        this.destinationPath('.eslintrc')
      );
      this.fs.copy(
        this.templatePath('_static/.gitignore'),
        this.destinationPath('.gitignore')
      );
      this.fs.copy(
        this.templatePath('_static/.sass-lint.yml'),
        this.destinationPath('.sass-lint.yml')
      );

      this.fs.copyTpl(
        this.templatePath('_tpl/Gruntfile.js'),
        this.destinationPath('Gruntfile.js'),
        this.props
      );
      this.fs.copyTpl(
        this.templatePath('_tpl/package.json'),
        this.destinationPath('package.json'),
        this.props
      );
      this.fs.copyTpl(
        this.templatePath('_tpl/README.md'),
        this.destinationPath('README.md'),
        this.props
      );

      if (this.props.bower) {
        this.fs.copy(
          this.templatePath('_optional/.bowerrc'),
          this.destinationPath('.bowerrc')
        );
        this.fs.copyTpl(
          this.templatePath('_optional/bower.json'),
          this.destinationPath('bower.json'),
          this.props
        );
      }

      if (this.props.expose) {
        this.fs.copyTpl(
          this.templatePath('_optional/grunt/localtunnel-me.js'),
          this.destinationPath('grunt/localtunnel-me.js'),
          this.props
        );
      }
    },

    // Copy application files
    app: function() {
      this.fs.copy(
        this.templatePath('_static/app/'),
        this.destinationPath('app/')
      );

      this.fs.copyTpl(
        this.templatePath('_tpl/app/index.html'),
        this.destinationPath('app/index.html'),
        this.props
      );

      if (this.props.mobile) {
        this.fs.copyTpl(
          this.templatePath('_optional/app/manifest.json'),
          this.destinationPath('app/manifest.json'),
          this.props
        );
        this.fs.copyTpl(
          this.templatePath('_optional/app/browserconfig.xml'),
          this.destinationPath('app/browserconfig.xml'),
          this.props
        );
      }

      if (this.props.mobile && this.props.moboIcons) {
        this.fs.copy(
          this.templatePath('_optional/app/assets/img/ico'),
          this.destinationPath('app/assets/img/ico')
        );
      }
    },

    // Install Dependencies
    install: function () {
      this.npmInstall();
    }
  }

});
