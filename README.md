# generator-quick-server [![NPM version][npm-image]][npm-url] [![Dependency Status][daviddm-image]][daviddm-url]
> A small server boilerplate for quick and easy application prototyping

_Generator Quick-server_ comes with all you may need to easily start a development environment and focus your efforts only on your application development.

It comes packed with some of the latest and hottest web technologies, such as _transpilers_, _compilers_ and _validators_, including `Babel`, `ESLint`, `Sass` and `Sass-lint`.


## Installation

First, install [Yeoman](http://yeoman.io) and generator-quick-server using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-quick-server
```

## Generating a project
First create a new directory

```bash
mkdir myproject
cd myproject
```

Then generate your new project:


```bash
yo quick-server
```
Answer the questions and then

```bash
npm start
```

A new browser window will open, indicating that everything went OK.

## Included technologies/tools

*   ES6 (ES2015) support _([Babel][babel-url], [grunt-babel][grunt-babel-url])_
*   Frontend dependency management _([Bower][bower-url])_
*   Javascript code quality and compliance check _([ESLint][eslint-url], [eslint-config-airbnb][eslint-config-airbnb-url], [grunt-eslint][grunt-eslint-url])_
*   Local static server _([Connect][connect-url], [grunt-contrib-connect][grunt-contrib-connect-url])_
*   Automatic files recompilation and live-reload for static files _([grunt-contrib-watch][grunt-contrib-watch-url])_
*   Javascript minification _([Uglify][uglify-url], [grunt-contrib-uglify][grunt-contrib-uglify-url])_
*   Public URL exposure _([Localtunnel][localtunnel-url], [grunt-localtunnel-me][grunt-localtunnel-me-url])_
*   Notification system _([grunt-notify][grunt-notify-url])_
*   Sass compiler _([LibSass][libsass-url], [grunt-sass][grunt-sass-url])_
*   Sass Code Quality and compliance validator _([Sass Lint][sass-lint-url], [grunt-sass-lint][grunt-sass-lint-url])_

## Release History

*   1.0.0 _\[18/04/2017\]_
    *   Initial version

## Future plans

*   Add input validation and required fields
*   Make bower option a sub-generator
*   Make localtunnel option a sub-generator
*   Make mobile assets a sub-generator
*   Make dummy app icon images a sub-generator
*   Option to choose CSS pre-processor (Sass, Less, Stylus)
*   Add Editor Config
*   Add keyword options
*   Add tests

## License

MIT © [Renato Rodrigues](https://github.com/rerodrigues)


[npm-image]: https://badge.fury.io/js/generator-quick-server.svg
[npm-url]: https://npmjs.org/package/generator-quick-server
[daviddm-image]: https://david-dm.org/rerodrigues/generator-quick-server.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/rerodrigues/generator-quick-server

[babel-url]: http://babeljs.io/
[grunt-babel-url]: https://github.com/babel/grunt-babel
[bower-url]: https://bower.io/
[eslint-url]: http://eslint.org/
[eslint-config-airbnb-url]: https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb
[grunt-eslint-url]: https://github.com/sindresorhus/grunt-eslint
[connect-url]: https://github.com/senchalabs/connect
[grunt-contrib-connect-url]: https://github.com/gruntjs/grunt-contrib-connect
[grunt-contrib-watch-url]: https://github.com/gruntjs/grunt-contrib-watch
[uglify-url]: https://github.com/mishoo/UglifyJS2
[grunt-contrib-uglify-url]: https://github.com/gruntjs/grunt-contrib-uglify
[localtunnel-url]: https://localtunnel.github.io/www/
[grunt-localtunnel-me-url]: https://github.com/simshanith/grunt-localtunnel-me
[grunt-notify-url]: https://github.com/dylang/grunt-notify
[libsass-url]: http://sass-lang.com/libsass
[grunt-sass-url]: https://github.com/sindresorhus/grunt-sass
[sass-lint-url]: https://github.com/sasstools/sass-lint
[grunt-sass-lint-url]: https://github.com/sasstools/grunt-sass-lint
