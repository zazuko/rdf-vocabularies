# `v2021.3.8`

## New prefix

| Prefix         | #Quads |
| -------------- | ------ |
| `constant`     | 5387   |
| `discipline`   | 1815   |
| `prefix`       | 336    |
| `qkdv`         | 3119   |
| `quantitykind` | 16036  |
| `sou`          | 210    |

## Updated vocabularies

| Prefix | #Quads |
| ------ | ------ |
| `qudt` | 7827   |
| `rico` | 7511   |

# `v2021.3.2`

## New prefix

Add `shex:`  prefix and vocabulary.

| Prefix | #Quads |
| ------ | ------ |
| `shex` | 474    |

# `v2021.2.8`

## New prefix

Add `dpv:`  prefix and vocabulary.

| Prefix | #Quads |
| ------ | ------ |
| `dpv`  | 3294   |

# `v2021.1.25`

## New prefix

Add `rico:`  prefix and vocabulary.

| Prefix | #Quads |
| ------ | ------ |
| `rico` | 6952   |

## Updated vocabularies

| Prefix  | #Quads |
| ------- | ------ |
| `dash`  | 1466   |
| `dbo`   | 39297  |
| `hydra` | 431    |

# `v2020.12.16`

## Changes

- The module `@zazuko/rdf-vocabularies/expand` now only does simple expansion (no second parameter).
- Fixed an [issue](https://github.com/zazuko/rdf-vocabularies/issues/81) where buildPath returned incorrect path

## Updated vocabularies

| Prefix    | #Quads |
| --------- | ------ |
| `dcat`    | 1353   |
| `dcterms` | 700    |
| `lvont`   | 212    |
| `schema`  | 14936  |

# `v2020.11.2`

## Changes

- Bundle all vocabularies as code modules serialized using [@rdfjs/serializer-rdfjs](https://npm.im/@rdfjs/serializer-rdfjs) ([#74](https://github.com/zazuko/rdf-vocabularies/issues/74))
- Build and package without a `lib` directory ([#73](https://github.com/zazuko/rdf-vocabularies/issues/73))

# `v2020.8.17`

## Changes

- Fixed an [issue](https://github.com/zazuko/rdf-vocabularies/issues/69) where prefixes were not applied by specificity.

# `v2020.8.3`

## New prefixes

Add `doap:`, `earl:`, `test:`  prefixes and vocabularies.

| Prefix  | #Quads |
| ------- | ------ |
| `doap:` | 722    |
| `earl:` | 162    |
| `test:` | 116    |


## Changes

- Fixes to the way a vocab label and description are extracted.

# `v2020.7.23`

## Updated vocabularies

| Prefix   | #Quads |
| -------- | ------ |
| `dash`   | 1561   |
| `schema` | 15163  |

# `v2020.7.13`

Make it possible to use this package directly in a browser, for instance via unpkg.com.

By splitting the main module and re-exporting it, it is now possible to cherry-pick the necessary pieces (`expand`, `prefixes` and `shrink` are natively usable) while the general usage in node or existing bundled code remains unchanged.

* unpkg/jsfiddle example: https://jsfiddle.net/n4whdrb2/
* node/runkit example: https://runkit.com/embed/nqutvg2l4tph

# `v2020.6.29`

## Changes

- Revamped build to change the way we publish this as a dual, commonjs/esm package.

## Updated vocabularies

| Prefix | #Quads |
| ------ | ------ |
| `dash` | 1524   |

# `v2020.6.17`

## New prefix

Add `dash:` prefix and vocabulary.

| Prefix  | #Quads |
| ------- | ------ |
| `dash:` | 1271   |

## Updated vocabularies

| Prefix   | #Quads |
| -------- | ------ |
| `hydra`  | 408    |
| `schema` | 8885   |
| `time`   | 1296   |

# `v2020.3.23`

## Changes

- Add [CLI](https://github.com/zazuko/rdf-vocabularies/blob/50f979f04c642409e6e1848219f9280a7fc35b31/README.md#command-line) (`rdf-vocab -h`)

# `v2020.3.17`

## Updated vocabularies

| Prefix   | #Quads |
| -------- | ------ |
| `schema` | 8861   |

# `v2020.2.10-2`

Fix `lvont:` base IRI.

# `v2020.2.10`

## Changes

- Possibility to fetch a single vocab with `npm run fetch prefix`, eg. `npm run fetch schema`
  - Replaces index triples for that vocab only
  - Does not regenerate the entire index dataset

## New vocabulary

| Prefix  | #Quads |
| ------- | ------ |
| `lvont` | 212    |

# `v2020.2.3`

## Changes

- Strict typings
- Package only includes a single copy of the types definition, at the root

## Updated vocabularies

| Prefix    | #Quads |
| --------- | ------ |
| `dc11`    | 107    |
| `dcat`    | 1170   |
| `dcterms` | 619    |
| `hydra`   | 407    |
| `prov`    | 1664   |
| `schema`  | 8858   |

# `v2019.12.23`

## New feature

Prefixes Index / Vocabularies metadata: [`ontologies/_index.nq`](ontologies/_index.nq) holds an index of all provided vocabularies with some metadata, as N-Quads.

## Updated vocabularies

| Prefix   | #Quads |
| -------- | ------ |
| `dbo`    | 39069  |
| `rdf`    | 127    |
| `schema` | 8827   |
| `xsd`    | 199    |

# `v2019.10.22`

## New prefix

Add `sh:` prefix and vocabulary.

| Prefix | #Quads |
| ------ | ------ |
| `sh:`  | 1128   |

## Updated vocabularies

| Prefix   | #Quads |
| -------- | ------ |
| `hydra`  | 404    |
| `qudtv`  | 13797  |
| `schema` | 8824   |

# `v2019.9.24`

## New prefix

Add `sem:` prefix and vocabulary.

| Prefix | #Quads |
| ------ | ------ |
| `sem:` | 520    |

## Updated vocabularies

| Prefix   | #Quads (#quads in previous version) |
| -------- | ----------------------------------- |
| `qudtv`  | 13797 (13791)                       |
| `rdau`   | 15722 (15722)                       |
| `schema` | 8845 (8833)                         |

# `v2019.7.9-2`

## Bugfix

Fix: `as:` nq file had the wrong graph: it should be `http:` not `https:`.

# `v2019.7.9`

## New prefixes

Add `as:` prefix and vocabulary.
Add `http:` prefix and vocabulary.
Add `ical:` prefix and vocabulary.
Add `vann:` prefix and vocabulary.
Add `xhv:` prefix and vocabulary.
Add `xkos:` prefix and vocabulary.

| Prefix  | #Quads |
| ------- | ------ |
| `as:`   | 951    |
| `http:` | 230    |
| `ical:` | 1255   |
| `vann:` | 49     |
| `xhv:`  | 208    |
| `xkos:` | 327    |

## Updated vocabularies

| Prefix   | #Quads (#quads in previous version) |
| -------- | ----------------------------------- |
| `qudtv`  | 13791 (13790)                       |
| `schema` | 8833 (8809)                         |

## Misc

`dtype` and `vaem` had incorrect base IRI, this release fixes them:

```diff
- dtype: 'http://www.linkedmodel.org/schema/dtype',
+ dtype: 'http://www.linkedmodel.org/schema/dtype#',
- vaem: 'http://www.linkedmodel.org/schema/vaem',
+ vaem: 'http://www.linkedmodel.org/schema/vaem#',
```

# `v2019.6.27`

## New prefixes

Add `dtype:` prefix and vocabulary.
Add `vaem:` prefix and vocabulary.
Add `qudt:` prefix and vocabulary.
Add `qudtv:` prefix and vocabulary.

| Prefix  | #Quads |
| ------- | ------ |
| `dtype` | 231    |
| `vaem`  | 564    |
| `qudt`  | 7738   |
| `qudtv` | 13790  |

# `v2019.6.17`

## Feature

Add bundler-friendly build.

BREAKING CHANGE: The default export is replaced with a named one

```diff
- const rdfVocabularies = require('@zazuko/rdf-vocabularies')
+ const { vocabularies } = require('@zazuko/rdf-vocabularies')
- const prefixes = require('@zazuko/rdf-vocabularies/prefixes')
+ const prefixes = require('@zazuko/rdf-vocabularies/lib/node/prefixes').default
```

## New prefixes

Add `frbr:` prefix and vocabulary.
Add `rdau:` prefix and vocabulary.
Add `smdx:` prefix and vocabulary.

| Prefix | #Quads |
| ------ | ------ |
| `frbr` | 914    |
| `rdau` | 15722  |
| `smdx` | 90     |

## Updated vocabularies

| Prefix   | #Quads (#quads in previous version) |
| -------- | ----------------------------------- |
| `geof`   | 82 (46)                             |
| `geor`   | 62 (36)                             |
| `hydra`  | 400 (386)                           |
| `schema` | 8809 (8809)                         |

# `v2019.5.13`

## New prefix

Add `xsd:` prefix and vocabulary.

| Prefix | #Quads |
| ------ | ------ |
| `xsd`  | 199    |

# `v2019.5.6`

Initial release:

| Prefix    | #Quads |
| --------- | ------ |
| `cc`      | 115    |
| `cnt`     | 108    |
| `csvw`    | 632    |
| `dbo`     | 8035   |
| `dc11`    | 138    |
| `dcat`    | 425    |
| `dcterms` | 866    |
| `dqv`     | 152    |
| `duv`     | 56     |
| `foaf`    | 620    |
| `geo`     | 518    |
| `geof`    | 46     |
| `geor`    | 36     |
| `gn`      | 6846   |
| `gr`      | 1834   |
| `grddl`   | 74     |
| `gtfs`    | 870    |
| `hydra`   | 386    |
| `ldp`     | 200    |
| `ma`      | 340    |
| `oa`      | 334    |
| `og`      | 231    |
| `org`     | 748    |
| `owl`     | 450    |
| `prov`    | 1662   |
| `qb`      | 265    |
| `rdf`     | 102    |
| `rdfa`    | 68     |
| `rdfs`    | 87     |
| `rr`      | 297    |
| `rss`     | 44     |
| `schema`  | 8809   |
| `sd`      | 165    |
| `sioc`    | 669    |
| `skos`    | 252    |
| `skosxl`  | 60     |
| `sosa`    | 345    |
| `ssn`     | 520    |
| `time`    | 1044   |
| `vcard`   | 870    |
| `void`    | 216    |
| `vs`      | 27     |
| `wgs`     | 33     |
