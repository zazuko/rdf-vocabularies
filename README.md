# @zazuko/vocabularies -- Zazuko's Default Ontologies & Prefixes
![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/zazuko/rdf-vocabularies/node.js.yml)
![Codecov](https://img.shields.io/codecov/c/gh/zazuko/rdf-vocabularies)
![npm](https://img.shields.io/npm/v/@zazuko/vocabularies)

This package contains a distribution of the most commonly used RDF ontologies (schema/vocab, whatever you call it)
including their default prefixes, together with a set of utility functions to work with prefixes.

It is extending [RDFa Core Initial Context](http://www.w3.org/2011/rdfa-context/rdfa-1.1) and contains what we consider
commonly used prefixes. Some popular prefixes do not resolve to dereferencable RDF and are thus skipped.

The package is built for use in Node.js projects. We ship N-Quads files of the vocabularies so it could be useful for
other programming languages as well as you do not have to take care of downloading the ontologies yourself.

## Installation

This is a new release of the previous monolithic package which grew quite a lot. 

It is recommended to install the prefixes package and select vocabulary packages individually to 
reduce the size of `node_modules`.

```bash
$ npm install @zazuko/prefixes @vocabulary/rdf @vocabulary/schema ...
```

You may still choose to install a one package to get them all. 

```bash
$ npm install @zazuko/vocabularies
```

It remains pretty much compatible with the previous `@zazuko/rdf-vocabularies` package. The main 
difference is that now it is ESM-only.

## Usage

(Read below and take a look at some [examples](./examples.js).)

### Dataset-as-code modules

All vocabularies published from this package are also exported as JS modules so that then can be 
imported synchronously (no parsing required) and without additional dependencies when in web app setting (see the `raw-loader` instructions below).

Modules `@rdf-vocabularies/datasets` exports factories which returns an array of quads `Quad` and take RDF/JS `DataFactory` as parameter.

```javascript
import $rdf from 'rdf-ext'
import schema from '@vocabulary/schema'

const dataset = $rdf.dataset(schema({ factory: $rdf }))
```

### Vocabularies Metadata

See [`_index.nq`](./ontologies/_index.nq).

### `vocabularies()`

Exported from `@zazuko/vocabularies'`, the `vocabularies()` function accepts an 
optional `options` object:

* `options.only: Array?`, default: `undefined`, a subset of all available prefixes, will only load these.
* `options.factory: RDF/JS DatasetFactory`, default: [`rdf-ext`](https://github.com/rdf-ext/rdf-ext), a dataset
factory abiding by the [RDF/JS Dataset Specification](https://rdf.js.org/dataset-spec/), used to create the
returned datasets.
* `options.stream: Boolean`, default: `false`, whether to return a RDF/JS quad stream instead of regular objects/datasets.

#### Loading all Vocabularies as Datasets

In browser environment this will cause a request for each individual dataset.
It is thus recommended to always only [load the needed ontologies](#loading-only-some-ontologies-as-datasets)
to reduce the unnecessary traffic and save bandwidth.

```js
import { vocabularies } from '@zazuko/vocabularies'

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

#### Loading only some Vocabularies as Datasets

```js
import { vocabularies } from '@zazuko/vocabularies'

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
import { vocabularies } from '@zazuko/vocabularies'
const stream = await vocabularies({ stream: true, only: ['rdfs', 'owl', 'skos'] })
```

### Using `vocabularies` function in browser

The preferred usage in browser projects is to avoid importing from `@zazuko/vocabularies` because that will require additional bundling of dynamic n-quads modules.

Instead, import from the partial modules (without even installing the big package, if possible):

* `import { expand } from '@zazuko/prefixes/expand'`
* `import { prefixes } from '@zazuko/prefixes/prefixes'`
* `import { shrink } from '@zazuko/prefixes/shrink'`

The module `@zazuko/vocabularies/expandWithCheck` requires `rdf-ext` and parses datasets. See the instructions below for examples how to configure the application.

The package's main module can also be used in browser albeit it needs a bundler such as webpack and additional steps to configure it:

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
    import assert from 'assert'
    import { shrink } from '@zazuko/prefixes'

    assert(shrink('http://www.w3.org/2001/XMLSchema#dateTime') === 'xsd:dateTime')
    assert(shrink('http://example.com#nothing') === '')

    const iri = 'http://example.com#nothing'
    const stringToDisplay = shrink(iri) || iri
    console.log(stringToDisplay) // 'http://example.com#nothing'
    ```

### Accessing Prefixes: `vocabularies.prefixes`

Getting an object with prefixes and their base URI:  
(Returns [this object](./src/prefixes.ts).)

```js
import { prefixes } from '@zazuko/prefixes'

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
import path from 'path'
import module from 'module'

const { resolve } = module.createRequire(import.meta.url)

console.log(path.resolve(resolve('@vocabulary/skos/skos.nq')))
```

### Command line

The package also includes a simple command line interface which forwards the vocabulary datasets to standard output. It can be used in two ways.

By prefix:

```
rdf-vocab prefix foaf
```

By namespace URI:

```
rdf-vocab prefix http://schema.org/
```

## Versioning Scheme

The packages follow semver but that is to indicate library code changes rather than vocabulary 
changes. Usually, that is. If we identify significant changes to the source RDF for any given 
vocabulary, we may decide to bump a major version.

## Adding new prefixes

New prefixes can be added by opening a pull request on Github. For new requests, first check if the creator/owner
of the namespace defined a prefix. If not check [prefix.cc](http://prefix.cc/). In case prefix.cc is ambiguous a
discussion should be raised before the pull-requests gets integrated. Last thing to check are the predefined namespaces
in the [DBpedia SPARQL endpoint](http://dbpedia.org/sparql?nsdecl) or other popular RDF resources like
[LOV](https://lov.linkeddata.es/dataset/lov/vocabs). If you find one please refer to it in the pull request.

### Steps to add a prefix

1. Add a new directory under [ontologies](ontologies/) with a package.json. For a minimal 
   example see [ACL vocabulary](ontologies/acl/package.json)
1. If necessary, add overrides to the `vocabulary` key, similar to the others
   * for the `file` option, a `file:` scheme IRI can be used, with path relative to the repository root
1. Run `npm run fetch` in the vocabulary's dir to process the triples.
2. Add a dependency to [vocabularies meta package](packages/vocabularies/package.json)
1. Commit changes and submit a PR

### Project-specific prefixes

It is also possible to add prefix within a project so that it can be used with the functions [`expand`](#expanding-a-prefix) and [`shrink`](#shrinking-an-iri).

```js
import { prefixes, expand, shrink } from '@zazuko/prefixes'

prefixes['foo'] = 'http://example.com/'

// 'http://example.com/bar'
const foobar = expand('foo:bar')

// 'foo:bar'
const prefixed = shrink(foobar)
```
