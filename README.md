# generator-quick-server [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]
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

## Included tecnologies/tools

*   ES6 (ES2015) support _(using Babel)_
*   Frontend dependency management _(using Bower)_
*   Javascript code quality and compliance check _(using ESLint and ESLint-airbnb)_
*   Local static server _(using Connect)_
*   Live-reload for static files
*   Javascript minification _(using Uglify)_
*   Public URL exposure _(using Localtunnel)_
*   Notification system
*   Sass compiler _(using libsass)_
*   Sass Code Quality and compliace validator _(using Sass-lint)_


## Getting To Know Yeoman

*   Yeoman has a heart of gold.
*   Yeoman is a person with feelings and opinions, but is very easy to work with.
*   Yeoman can be too opinionated at times but is easily convinced not to be.
*   Feel free to [learn more about Yeoman](http://yeoman.io/).

## License

MIT © [Renato Rodrigues](https://github.com/rerodrigues)


[npm-image]: https://badge.fury.io/js/generator-quick-server.svg
[npm-url]: https://npmjs.org/package/generator-quick-server
[travis-image]: https://travis-ci.org/rerodrigues/generator-quick-server.svg?branch=master
[travis-url]: https://travis-ci.org/rerodrigues/generator-quick-server
[daviddm-image]: https://david-dm.org/rerodrigues/generator-quick-server.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/rerodrigues/generator-quick-server
