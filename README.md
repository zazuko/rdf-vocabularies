# rdf-prefixes
[![Build Status](https://travis-ci.org/zazuko/rdf-prefixes.svg?branch=master)](https://travis-ci.org/zazuko/rdf-prefixes)  [![Coverage Status](https://coveralls.io/repos/github/zazuko/rdf-prefixes/badge.svg?branch=master)](https://coveralls.io/github/zazuko/rdf-prefixes?branch=master)

A JavaScript lib providing commonly used prefixes and their ontologies (vendored).

## Installation

```bash
$ npm install rdf-prefixes
```

## Usage

`rdf-prefixes` exposes a default function and an object:

Loading all ontologies as datasets:

```js
const rdfPrefixes = require('rdf-prefixes')

rdfPrefixes()
  .then((datasets) => {
    /* `datasets` is:
    {
      "csvw": Dataset,
      "sd": Dataset,
      "ldp": Dataset,
      "schema": Dataset,
      "owl": Dataset,
      "void": Dataset,
      "sioc": Dataset,
      "foaf": Dataset,
      "time": Dataset,
      "dcat": Dataset,
      "oa": Dataset,
      "gr": Dataset,
      "rdf": Dataset,
      "cc": Dataset,
      "ssn": Dataset,
      "rr": Dataset,
      "rdfa": Dataset,
      "org": Dataset,
      "sosa": Dataset,
      "dc11": Dataset,
      "skos": Dataset,
      "dqv": Dataset,
      "prov": Dataset,
      "og": Dataset,
      "qb": Dataset,
      "rdfs": Dataset,
      "dc": Dataset,
      "ma": Dataset,
      "vcard": Dataset,
      "grddl": Dataset,
      "dcterms": Dataset,
      "skosxl": Dataset,
      "wgs": Dataset,
      "dbo": Dataset,
      "dbpedia": Dataset,
      "dbpprop": Dataset,
      "rss": Dataset,
      "cnt": Dataset,
      "vs": Dataset,
      "hydra": Dataset,
      "gn": Dataset,
      "gtfs": Dataset,
      "geo": Dataset,
      "geof": Dataset,
      "geor": Dataset
    }
    */
  })
```

Loading only some ontologies as datasets:

```js
const rdfPrefixes = require('rdf-prefixes')

rdfPrefixes(['rdfs', 'owl', 'skos'])
  .then((datasets) => {
    /* `datasets` is:
    {
      "owl": Dataset,
      "skos": Dataset,
      "rdfs": Dataset
    }
    */
  })
```

Getting an object with prefixes and their base URI:  
(Returns [this object](./prefixes.js).)

```js
const rdfPrefixes = require('rdf-prefixes')

console.log(rdfPrefixes.prefixes)
/*
 {
  v: 'http://rdf.data-vocabulary.org/#',
  csvw: 'http://www.w3.org/ns/csvw#',
  sd: 'http://www.w3.org/ns/sparql-service-description#',
  …
}
*/
```

Take a look at some [examples](./examples.js).

## Versioning Scheme

This package is [vendoring ontologies](./ontologies/). These will be updated periodically.

This package is versioned using the date at which the data was pulled, e.g. `rdf-prefixes@20190430`.

Updating the vendored ontologies is achieved using `npm run fetch` in this package.

## License

(The MIT License)

Copyright (c) 2019 Zazuko GmbH

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.