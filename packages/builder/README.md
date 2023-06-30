# `@vocabulary/builder`

Helper to create vocabulary packages, exactly like those in [@zazuko/rdf-vocabularies](https://github.com/zazuko/rdf-vocabularies/tree/master/ontologies)

## Usage

### Fetch vocabulary

```shell
npx vocab-build datasets
```

Execute this in the directory where you have your vocabulary package.

In the `package.json`, add a configuration key which tells the CLI where to get the contents of your vocabularies. 
At the minimum, prefix and namespace are required.

```json
{
  "name": "@my-vocab/foobar",
  "vocabulary": {
    "prefix": "foobar",
    "namespace": "https://example.com/foobar"
  }
}
```

When executed, the vocabulary will be dereferenced from the `namespace` URL and save it as `{prefix}.nt`. Additionally, a
`meta.nt` document is created which is used by `prefix.zazuko.com`.

In many cases, vocabularies do not dereference nicely. In those circumstances, it is possible to add overrides:

**Force a specific media type**

When the server does not respond with the matching `content-type` header.

```json
{
  "name": "@my-vocab/foobar",
  "vocabulary": {
    "prefix": "foobar",
    "namespace": "https://example.com/foobar",
    "mediaType": "application/rdf+xml"
  }
}
```

**Override the URL**

```json
{
  "name": "@my-vocab/foobar",
  "vocabulary": {
    "prefix": "foobar",
    "namespace": "https://purl.org/ns/foobar",
    "file": "https://example.com/ontology.ttl"
  }
}
```

**Set base URI for RDF/XML**

RDF/XML sources frequently do not have the correct base 

```json
{
  "name": "@my-vocab/foobar",
  "vocabulary": {
    "prefix": "foobar",
    "namespace": "https://example.com/foobar",
    "xmlParserOptions": {
      "baseIRI": "https://example.com/foobar"
    }
  }
}
```

**Multiple sources**

```json
{
  "name": "@my-vocab/foobar",
  "vocabulary": {
    "prefix": "foobar",
    "namespace": "https://example.com/foobar",
    "files": [
      {
        "mediaType": "application/rdf+xml",
        "file": "https://example.com/foobar-ext.rdf"
      },
      {
        "mediaType": "text/turtle",
        "file": "https://example.com/foobar.ttl"
      }
    ]
  }
}
```

### Generate vocabulary module

```shell
npx vocab-build module
```

This will generate an `index.ts` with a single export of the entire vocabulary as an array of RDF/JS quads. Use it to load
the vocabulary without the need for parsers.

```js
import foobarQuads from '@my-vocab/foobar'
import $rdf from 'rdf-ext'

const dataset = $rdf.dataset(foobarQuads({ factory: $rdf }))
```
