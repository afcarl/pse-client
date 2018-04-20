# pse-client
[![Build Status](https://travis-ci.org/shyrwinsia/pse-client.svg?branch=master)](https://travis-ci.org/shyrwinsia/pse-client)
[![Coverage Status](https://coveralls.io/repos/github/shyrwinsia/pse-client/badge.svg?branch=master)](https://coveralls.io/github/shyrwinsia/pse-client?branch=master)

An Unofficial Philippine Stock Exchange (PSE) Client

This library can be used to retrieve trading information of the Philippine Stock Exchange. Information that can be retrieved by this library are ticker symbols, company information and historical prices (with different resolutions like minute, hours, day, month and year).

This is a Node.js wrapper for the REST APIs from [PSE Tools](http://pse.tools/).

### Motivation

There isn't really a straightforward client library that I know of that achieves my goals in retrieving stock market data for the Philippine Stock Exchange. So I decided to make one. Feel free to point me to an existing solution if you know one. I really don't want to reinvent the wheel if I don't have to.

## Add to your project

Install using npm:
```
npm install @shyrwinsia/pse-client
```

Import in your project:
```
var pseClient = require('@shyrwinsia/pse-client');
```

## Basic Usage

```
var pseClient = require('@shyrwinsia/pse-client');
var client = pseClient.initialize({ ... })
```

## API Reference
TODO

## Contributing
yep. Also TODO

## License
[MIT](https://opensource.org/licenses/MIT)
