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

(Read below and take a look at some [examples](./examples.js).)

### Default Export: `rdfVocabularies()`

The default exposed function (`require('@zazuko/rdf-vocabularies')(options)`) accepts an optional `options` object:

* `options.only: Array?`, default: `undefined`, a subset of all available prefixes, will only load these.
* `options.factory: RDF/JS DatasetFactory`, default: [`rdf-ext`](https://github.com/rdf-ext/rdf-ext), a dataset
factory abiding by the [RDF/JS Dataset Specification](https://rdf.js.org/dataset-spec/), used to create the
returned datasets.
* `options.stream: Boolean`, default: `false`, whether to return a RDF/JS quad stream instead of regular objects/datasets.

#### Loading all Ontologies as Datasets

```js
const rdfVocabularies = require('@zazuko/rdf-vocabularies')

rdfVocabularies()
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
const rdfVocabularies = require('@zazuko/rdf-vocabularies')

rdfVocabularies({ only: ['rdfs', 'owl', 'skos'] })
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
const rdfVocabularies = require('@zazuko/rdf-vocabularies')
const stream = await rdfVocabularies({ stream: true, only: ['rdfs', 'owl', 'skos'] })
```

### Expanding a Prefix

There are two ways of expanding a prefix:

* `rdfVocabularies.expand(prefixedTerm: String): String` synchronous

    Expand without checks. It is similar to prefix.cc in the sense that prefix.cc would expand
    `schema:ImNotInSchemaDotOrg` to `http://schema.org/ImNotInSchemaDotOrg`.

* `rdfVocabularies.expand(prefixedTerm: String, types: Array<String|NamedNode>): Promise<String>` **asynchronous**

    Expand with type checks. `types` is an array of strings or NamedNodes. See this example:
    ```js
    const rdfVocabularies = require('@zazuko/rdf-vocabularies')
    const Class = rdfVocabularies.expand('rdfs:Class')
    const Property = rdfVocabularies.expand('rdf:Property')

    // Will return <schema:person> expanded to `http://schema.org/Person`
    // iff the dataset contains either:
    //   <schema:Person> <rdf:type> <rdfs:Class>
    // or
    //   <schema:Person> <rdf:type> <rdf:Property>
    await rdfVocabularies.expand('schema:Person', [Class, Property])
    ```


### Accessing Prefixes: `rdfVocabularies.prefixes`

Getting an object with prefixes and their base URI:  
(Returns [this object](./prefixes.js).)

```js
const rdfVocabularies = require('@zazuko/rdf-vocabularies')

console.log(rdfVocabularies.prefixes)
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

New prefixes can be added by opening a pull request on Github. For new requests, first check if the creator/owner of the namespace defined a prefix. If not check [prefix.cc](http://prefix.cc/). In case prefix.cc is ambiguous a discussion should be raised before the pull-requests gets integrated. Last thing to check are the predefined namespaces in the [DBpedia SPARQL endpoint](http://dbpedia.org/sparql?nsdecl) or other popular RDF resources like [LOV](https://lov.linkeddata.es/dataset/lov/vocabs). If you find one please refer to it in the pull request.
