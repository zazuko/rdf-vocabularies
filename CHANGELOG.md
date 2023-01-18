# `v2023.01.19`

## Fix

Remove `Record<string, string>` from type of `prefixes`

# `v2023.01.18`

## New prefix

| Prefix | #Quads |
|--------|--------|
| `crm`  | 3892   |

## Feature

Tweak the type of `prefixes` so that it maps prefixes precisely to their respective namespace. 
This allows creating type-safe interfaces such as

```ts
import type { Prefixes } from '@zazuko/rdf-vocabularies/prefixes'

type JsonLdContext = Partial<Prefixes> & Record<string, string>

const context: JsonLdContext = {
  // this is fine, also auto-completed by IDE  
  rdfs: 'http://www.w3.org/2000/01/rdf-schema#',
  // a missing traiing slash here will cause an error
  schema: 'http://schema.org',
  // other allowed by the union
  foo: 'bar'
}
```

# `v2023.01.17`

## Feature

Added a second parameter to `shrink` so that a different set of prefixes can be used for prefixing

# `v2022.11.28`

## New prefix

| Prefix | #Quads |
|--------|--------|
| `mads` | 1091   |

# `v2022.11.25`

## Fixes

Trying to use the module `vocabularies.mjs` would fail with error

> TypeError [ERR_UNKNOWN_FILE_EXTENSION]: Unknown file extension ".nq"

# `v2022.6.29`

## Fixes

Broken `dash.nq` dataset

# `v2022.6.28`

## Updated vocabularies

| Prefix         | #Quads | diff   |
|----------------|--------|--------|
| `constants`    | 5385   | 🔻2    |
| `dash`         | 1368   | 🔻98   |
| `dbo`          | 40763  | 🔺9713 |
| `dcat`         | 1342   | 🔻11   |
| `prefix`       | 1342   | 0      |
| `qkdv`         | 3405   | 🔺242  |
| `quentitykind` | 17063  | 🔺555  |
| `qudt`         | 6813   | 0      |
| `schema`       | 16204  | 🔺198  |
| `shex`         | 474    | 0      |
| `sou`          | 210    | 0      |
| `unit`         | 22360  | 🔺1070 |
| `xkos`         | 328    | 🔺1    |
| `xsd`          | 199    | 🔺0    |

# `v2021.9.22`

## Updated vocabularies

Fix `exif` base URL: `http://www.w3.org/2003/12/exif/ns` -> `http://www.w3.org/2003/12/exif/ns#`

Fix `xml` base URL: `http://www.w3.org/XML/1998/namespace` -> `http://www.w3.org/XML/1998/namespace/`

Fix `gs1` base URL: `https://www.gs1.org/voc/` -> `https://gs1.org/voc/`

| Prefix    | #Quads |
| --------- | ------ |
| `exif`    | 891    |

# `v2021.9.20`

## New prefix

| Prefix    | #Quads |
| --------- | ------ |
| `bibo`    | 1224   |
| `dcam`    | 26     |
| `dcmitype`| 89     |
| `ebucore` | 5780   |
| `exif`    | 891    |
| `gs1`     | 7434   |
| `locn`    | 206    |

## Updated vocabularies

Fix `ebucore` base URL: `https://www.ebu.ch/metadata/ontologies/ebucore/ebucore.rdf` -> `http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#`

| Prefix         | #Quads |
| -------------- | ------ |
| `constant`     | 5387   |
| `prefix`       | 305    |
| `qkdv`         | 3163   |
| `quantitykind` | 16508  |
| `qudt`         | 6813   |
| `sou`          | 210    |
| `unit`         | 21290  |

# `v2021.9.15`

## New prefix

| Prefix    | #Quads |
| --------- | ------ |
| `ebucore` | 5780   |

## Updated vocabularies

| Prefix         | #Quads |
| -------------- | ------ |
| `constant`     | 5387   |
| `dbo`          | 31050  |
| `hydra`        | 467    |
| `org`          | 748    |
| `prefix`       | 305    |
| `qkdv`         | 3135   |
| `quantitykind` | 16433  |
| `qudt`         | 6813   |
| `schema`       | 16006  |
| `shex`         | 474    |
| `sou`          | 210    |
| `unit`         | 21225  |
| `void`         | 208    |

# `v2021.6.10`

- Support `file:` URIs in overrides to have contents generated from local sources
- Export interface of prefixes, which allows type augmentation

# `v2021.5.3`

## Updated vocabularies

Fix `prefix` base URL: `http://qudt.org/2.1/vocab/prefix/` -> `http://qudt.org/vocab/prefix/`

| Prefix         | #Quads |
| -------------- | ------ |
| `as`           | 939    |
| `constant`     | 5387   |
| `geof`         | 37     |
| `geor`         | 26     |
| `hydra`        | 467    |
| `prefix`       | 305    |
| `qkdv`         | 3119   |
| `quantitykind` | 16262  |
| `qudt`         | 6815   |
| `sou`          | 210    |
| `unit`         | 21203  |

# `v2021.3.31`

## Updated vocabularies

Fix `as` base URL.

| Prefix | #Quads |
| ------ | ------ |
| `as`   | 939    |

# `v2021.3.30`

## Updated vocabularies

| Prefix | #Quads |
| ------ | ------ |
| `as`   | 939    |

# `v2021.3.17`

## New prefix

| Prefix | #Quads |
| ------ | ------ |
| `acl`  | 92     |

# `v2021.3.9`

## Removed prefix

| Prefix  | #Quads |
| ------- | ------ |
| `qudtv` | 13797  |

## New prefix

| Prefix | #Quads |
| ------ | ------ |
| `unit` | 21164  |

## Updated vocabularies

| Prefix   | #Quads |
| -------- | ------ |
| `prefix` | 305    |
| `qudt`   | 6815   |
| `schema` | 15400  |

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
