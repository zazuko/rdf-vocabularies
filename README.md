# @zazuko/rdf-vocabularies -- Zazuko's Default Ontologies & Prefixes
[![Build Status](https://travis-ci.org/zazuko/rdf-vocabularies.svg?branch=master)](https://travis-ci.org/zazuko/rdf-vocabularies) 
[![Coverage Status](https://coveralls.io/repos/github/zazuko/rdf-vocabularies/badge.svg?branch=master)](https://coveralls.io/github/zazuko/rdf-vocabularies?branch=master) 
[![npm version](https://badge.fury.io/js/%40zazuko%2Frdf-vocabularies.svg)](https://www.npmjs.com/package/@zazuko/rdf-vocabularies)

This package contains a distribution of the most commonly used RDF ontologies (schema/vocab, whatever you call it)
including their default prefixes, together with a set of utility functions to work with prefixes.

It is extending [RDFa Core Initial Context](http://www.w3.org/2011/rdfa-context/rdfa-1.1) and contains what we consider
commonly used prefixes. Some popular prefixes do not resolve to dereferencable RDF and are thus skipped.

The package is built for use in Node.js projects. We ship N-Quads files of the vocabularies so it could be useful for
other programming languages as well as you do not have to take care of downloading the ontologies yourself.

## Installation

```bash
$ npm install @zazuko/rdf-vocabularies
```

### Using in browser

The package can be used in browser albeit it needs a bundler such as webpack and additional steps to configure it:

* Enable [dynamic imports](https://medium.com/front-end-weekly/webpack-and-dynamic-imports-doing-it-right-72549ff49234). 
  In webpack it is done with [@babel/plugin-syntax-dynamic-import](https://babeljs.io/docs/en/babel-plugin-syntax-dynamic-import)
* Extend the bundler setup to have it load the contents of vocabulary files (all n-triples). In
  In webpack it can be done with [`raw-loader`](https://github.com/webpack-contrib/raw-loader):

      module: {
        rules: [
          {
            test: /\.nq$/,
            use: ['raw-loader']
          }
        ]
      }
* Be careful with prefetching chunks. Some applications may generate prefetch links for dynamically loaded chunks. 
Some of the ontology files are quite large and their number will grow over time. Hence, it may be desired to exclude
certain chunks from the being eagerly loaded. Check the [wiki](https://github.com/zazuko/rdf-vocabularies/wiki/Example-web-app-config) for examples.

## Usage

(Read below and take a look at some [examples](./examples.js).)

### `vocabularies()`

The function (`require('@zazuko/rdf-vocabularies').vocabularies(options)`) accepts an optional `options` object:

* `options.only: Array?`, default: `undefined`, a subset of all available prefixes, will only load these.
* `options.factory: RDF/JS DatasetFactory`, default: [`rdf-ext`](https://github.com/rdf-ext/rdf-ext), a dataset
factory abiding by the [RDF/JS Dataset Specification](https://rdf.js.org/dataset-spec/), used to create the
returned datasets.
* `options.stream: Boolean`, default: `false`, whether to return a RDF/JS quad stream instead of regular objects/datasets.

#### Loading all Ontologies as Datasets

In browser environment this will cause a request for each individual dataset. 
It is thus recommended to always only [load the needed ontologies](#loading-only-some-ontologies-as-datasets)
to reduce the unnecessary traffic and save bandwidth.

```js
const { vocabularies } = require('@zazuko/rdf-vocabularies')

vocabularies()
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

#### Loading only some Ontologies as Datasets

```js
const { vocabularies } = require('@zazuko/rdf-vocabularies')

vocabularies({ only: ['rdfs', 'owl', 'skos'] })
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

#### Getting a Readable Stream (Quad Stream)

```js
const { vocabularies } = require('@zazuko/rdf-vocabularies')
const stream = await vocabularies({ stream: true, only: ['rdfs', 'owl', 'skos'] })
```

### Expanding a Prefix

`expand`ing means: `'xsd:dateTime' → 'http://www.w3.org/2001/XMLSchema#dateTime'`.
It is the opposite of [`shrink`](#shrinking-an-iri)ing:  
`expand(shrink('http://www.w3.org/2001/XMLSchema#dateTime')) === 'http://www.w3.org/2001/XMLSchema#dateTime'`

There are two ways of expanding a prefix:

* `vocabularies.expand(prefixedTerm: String): String` synchronous

    Expand without checks. It is similar to prefix.cc in the sense that prefix.cc would expand
    `schema:ImNotInSchemaDotOrg` to `http://schema.org/ImNotInSchemaDotOrg`.

* `vocabularies.expand(prefixedTerm: String, types: Array<String|NamedNode>): Promise<String>` **asynchronous**

    Expand with type checks. `types` is an array of strings or NamedNodes. See this example:

    ```js
    const { expand } = require('@zazuko/rdf-vocabularies')
    const Class = expand('rdfs:Class')
    const Property = expand('rdf:Property')

    // Will return <schema:person> expanded to `http://schema.org/Person`
    // iff the dataset contains either:
    //   <schema:Person> <rdf:type> <rdfs:Class>
    // or
    //   <schema:Person> <rdf:type> <rdf:Property>
    await expand('schema:Person', [Class, Property])
    ```

### Shrinking an IRI

`shrink`ing means: `'http://www.w3.org/2001/XMLSchema#dateTime' → 'xsd:dateTime'`.
It is the opposite of [`expand`](#expanding-a-prefix)ing:  
`shrink(expand('xsd:dateTime')) === 'xsd:dateTime'`

* `vocabularies.shrink(iri: String): String`

    **Note**: returns empty string when there is no corresponding prefix. Always check the output
    when using `shrink` with user-provided strings.

    ```js
    const assert = require('assert')
    const { shrink } = require('@zazuko/rdf-vocabularies')

    assert(shrink('http://www.w3.org/2001/XMLSchema#dateTime') === 'xsd:dateTime')
    assert(shrink('http://example.com#nothing') === '')

    const iri = 'http://example.com#nothing'
    const stringToDisplay = shrink(iri) || iri
    console.log(stringToDisplay) // 'http://example.com#nothing'
    ```

### Accessing Prefixes: `vocabularies.prefixes`

Getting an object with prefixes and their base URI:  
(Returns [this object](./prefixes.js).)

```js
const { prefixes } = require('@zazuko/rdf-vocabularies')

console.log(prefixes)
/*
 {
  v: 'http://rdf.data-vocabulary.org/#',
  csvw: 'http://www.w3.org/ns/csvw#',
  sd: 'http://www.w3.org/ns/sparql-service-description#',
  …
}
*/
```

### Accessing Data Files from the Package

Accessing the N-Quads files:

```js
const path = require('path')
console.log(path.resolve(require.resolve('@zazuko/rdf-vocabularies'), '..', 'ontologies', 'skos.nq'))
```

## Versioning Scheme

This package is [vendoring ontologies](./ontologies/). These will be updated periodically.

This package is versioned using the date at which the data was pulled, e.g. `@zazuko/rdf-vocabularies@2019.04.30`.

Updating the vendored ontologies is achieved using `npm run fetch` in this package.

## Adding new prefixes

New prefixes can be added by opening a pull request on Github. For new requests, first check if the creator/owner
of the namespace defined a prefix. If not check [prefix.cc](http://prefix.cc/). In case prefix.cc is ambiguous a
discussion should be raised before the pull-requests gets integrated. Last thing to check are the predefined namespaces
in the [DBpedia SPARQL endpoint](http://dbpedia.org/sparql?nsdecl) or other popular RDF resources like
[LOV](https://lov.linkeddata.es/dataset/lov/vocabs). If you find one please refer to it in the pull request.
