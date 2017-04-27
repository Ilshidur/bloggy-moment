# bloggy-moment

[![No Maintenance Intended](http://unmaintained.tech/badge.svg)](http://unmaintained.tech/)

[![npm version][version-badge]][version-url]
[![Known Vulnerabilities][vulnerabilities-badge]][vulnerabilities-url]
[![dependency status][dependency-badge]][dependency-url]
[![devdependency status][devdependency-badge]][devdependency-url]
[![downloads][downloads-badge]][downloads-url]

[![NPM][npm-stats-badge]][npm-stats-url]

> A date converter for blog posts in bloggy, a small and lightweight blog engine for node.js.

## Quickstart

That's everything you need. Just set the 'dateFormat' and 'dateLocale' settings in the engine setup and call the engine.extendWith() function of the bloggy engine.

```Javascript
var engine = require('bloggy')(),
    bloggyMoment = require('bloggy-moment');

// Ensure, that you set the necessary date options
engine.setup({
    baseDirectory: ...,
    entryUrl: ...,
    date: {
        format: 'MMMM Do YYYY',
        locale: 'en',
    },
    ...
});

// Register the plugin
engine.extendWith(bloggyMoment);

```

License
-------

The MIT License (MIT)

Copyright (c) 2016 Ilshidur

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

[version-badge]: https://img.shields.io/npm/v/bloggy-moment.svg
[version-url]: https://www.npmjs.com/package/bloggy-moment
[vulnerabilities-badge]: https://snyk.io/test/npm/bloggy-moment/badge.svg
[vulnerabilities-url]: https://snyk.io/test/npm/bloggy-moment
[dependency-badge]: https://david-dm.org/ilshidur/bloggy-moment.svg
[dependency-url]: https://david-dm.org/ilshidur/bloggy-moment
[devdependency-badge]: https://david-dm.org/ilshidur/bloggy-moment/dev-status.svg
[devdependency-url]: https://david-dm.org/ilshidur/bloggy-moment#info=devDependencies
[downloads-badge]: https://img.shields.io/npm/dt/bloggy-moment.svg
[downloads-url]: https://www.npmjs.com/package/bloggy-moment
[npm-stats-badge]: https://nodei.co/npm/bloggy-moment.png?downloads=true&downloadRank=true
[npm-stats-url]: https://nodei.co/npm/bloggy-moment
