# @zazuko/rdf-vocabularies -- Zazuko's Default Ontologies & Prefixes
[![Build Status](https://travis-ci.org/zazuko/rdf-vocabularies.svg?branch=master)](https://travis-ci.org/zazuko/rdf-vocabularies) 
[![Coverage Status](https://coveralls.io/repos/github/zazuko/rdf-vocabularies/badge.svg?branch=master)](https://coveralls.io/github/zazuko/rdf-vocabularies?branch=master)

This package contains a distribution of the most commonly used RDF ontologies (schema/vocab, whatever you call it) including their default prefixes.

It is extending [RDFa Core Initial Context](http://www.w3.org/2011/rdfa-context/rdfa-1.1) and contains what we consider commonly used prefixes. Some popular prefixes do not resolve to dereferencable RDF and are thus skipped.

The package is built for use in Node.js projects. We ship N-Quads files of the vocabularies so it could be useful for other programming languages as well as you do not have to take care of downloading the ontologies yourself.

## Installation

```bash
$ npm install @zazuko/rdf-vocabularies
```

## Usage

`@zazuko/rdf-vocabularies` exposes a default function and an object:

The default exposed function (`require('@zazuko/rdf-vocabularies')(options)`) accepts an optional `options` object:

* `options.only: Array?` default: `undefined`, a subset of all available prefixes, will only load these.
* `options.factory: RDF/JS DatasetFactory`, default: [`rdf-ext`](https://github.com/rdf-ext/rdf-ext), a dataset
factory abiding by the [RDF/JS Dataset Specification](https://rdf.js.org/dataset-spec/), used to create the
returned datasets.

Loading all ontologies as datasets:

```js
const rdfPrefixes = require('@zazuko/rdf-vocabularies')

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
const rdfPrefixes = require('@zazuko/rdf-vocabularies')

rdfPrefixes({ only: ['rdfs', 'owl', 'skos'] })
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
const rdfPrefixes = require('@zazuko/rdf-vocabularies')

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

Accessing the N-Quads files:

```js
const path = require('path')
console.log(path.resolve(require.resolve('@zazuko/rdf-vocabularies'), '..', 'ontologies', 'skos.nq'))
```

Take a look at some [examples](./examples.js).

## Versioning Scheme

This package is [vendoring ontologies](./ontologies/). These will be updated periodically.

This package is versioned using the date at which the data was pulled, e.g. `@zazuko/rdf-vocabularies@20190430`.

Updating the vendored ontologies is achieved using `npm run fetch` in this package.

## Adding new prefixes

New prefixes can be added by opening a pull request on Github. For new requests, first check if the creator/owner of the namespace defined a prefix. If not check [prefix.cc](http://prefix.cc/). In case prefix.cc is ambiguous a discussion should be raised before the pull-requests gets integrated. Last thing to check are the predefined namespaces in the [DBpedia SPARQL endpoint](http://dbpedia.org/sparql?nsdecl) or other popular RDF resources like [LOV](https://lov.linkeddata.es/dataset/lov/vocabs). If you find one please refer to it in the pull request.
