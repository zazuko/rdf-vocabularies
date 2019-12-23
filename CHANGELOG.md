# vNext

Updated prefixes:

| Prefix | #Quads |
| ---- | ---- |
| `dbo` | 39069 |
| `rdf` | 127 |
| `schema` | 8827 |
| `xsd` | 199 |

# `v2019.10.22`

Add `sh:` prefix and vocabulary.

| Prefix | #Quads |
| ---- | ---- |
| `sh:` | 1128 |

Updated prefixes:

| Prefix | #Quads |
| ---- | ---- |
| `hydra` | 404 |
| `qudtv` | 13797 |
| `schema` | 8824 |

# `v2019.9.24`

Add `sem:` prefix and vocabulary.

| Prefix | #Quads |
| ---- | ---- |
| `sem:` | 520 |

Updated prefixes:

| Prefix | #Quads (#quads in previous version) |
| ---- | ---- |
| `qudtv` | 13797 (13791) |
| `rdau` | 15722 (15722) |
| `schema` | 8845 (8833) |

# `v2019.7.9-2`

Fix: `as:` nq file had the wrong graph: it should be `http:` not `https:`.

# `v2019.7.9`

New prefixes:

Add `as:` prefix and vocabulary.  
Add `http:` prefix and vocabulary.  
Add `ical:` prefix and vocabulary.  
Add `vann:` prefix and vocabulary.  
Add `xhv:` prefix and vocabulary.  
Add `xkos:` prefix and vocabulary.

| Prefix | #Quads |
| ---- | ---- |
| `as:` | 951 |
| `http:` | 230 |
| `ical:` | 1255 |
| `vann:` | 49 |
| `xhv:` | 208 |
| `xkos:` | 327 |

Updated prefixes:

| Prefix | #Quads (#quads in previous version) |
| ---- | ---- |
| `qudtv` | 13791 (13790) |
| `schema` | 8833 (8809) |

Other changes:

`dtype` and `vaem` had incorrect base IRI, this release fixes them:

```diff
- dtype: 'http://www.linkedmodel.org/schema/dtype',
+ dtype: 'http://www.linkedmodel.org/schema/dtype#',
- vaem: 'http://www.linkedmodel.org/schema/vaem',
+ vaem: 'http://www.linkedmodel.org/schema/vaem#',
```

# `v2019.6.27`

New prefixes:

Add `dtype:` prefix and vocabulary.  
Add `vaem:` prefix and vocabulary.  
Add `qudt:` prefix and vocabulary.  
Add `qudtv:` prefix and vocabulary.

| Prefix | #Quads |
| ---- | ---- |
| `dtype` | 231 |
| `vaem` | 564 |
| `qudt` | 7738 |
| `qudtv` | 13790 |

# `v2019.6.17`

Add bundler-friendly build.

BREAKING CHANGE: The default export is replaced with a named one

```diff
- const rdfVocabularies = require('@zazuko/rdf-vocabularies')
+ const { vocabularies } = require('@zazuko/rdf-vocabularies')
- const prefixes = require('@zazuko/rdf-vocabularies/prefixes')
+ const prefixes = require('@zazuko/rdf-vocabularies/lib/node/prefixes').default
```

New prefixes:

Add `frbr:` prefix and vocabulary.  
Add `rdau:` prefix and vocabulary.  
Add `smdx:` prefix and vocabulary.

| Prefix | #Quads |
| ---- | ---- |
| `frbr` | 914 |
| `rdau` | 15722 |
| `smdx` | 90 |

Updated prefixes:

| Prefix | #Quads (#quads in previous version) |
| ---- | ---- |
| `geof` | 82 (46) |
| `geor` | 62 (36) |
| `hydra` | 400 (386) |
| `schema` | 8809 (8809) |

# `v2019.5.13`

Add `xsd:` prefix and vocabulary.

| Prefix | #Quads |
| ---- | ---- |
| `xsd` | 199 |

# `v2019.5.6`

Initial release:

| Prefix | #Quads |
| ---- | ---- |
| `cc` | 115 |
| `cnt` | 108 |
| `csvw` | 632 |
| `dbo` | 8035 |
| `dc11` | 138 |
| `dcat` | 425 |
| `dcterms` | 866 |
| `dqv` | 152 |
| `duv` | 56 |
| `foaf` | 620 |
| `geo` | 518 |
| `geof` | 46 |
| `geor` | 36 |
| `gn` | 6846 |
| `gr` | 1834 |
| `grddl` | 74 |
| `gtfs` | 870 |
| `hydra` | 386 |
| `ldp` | 200 |
| `ma` | 340 |
| `oa` | 334 |
| `og` | 231 |
| `org` | 748 |
| `owl` | 450 |
| `prov` | 1662 |
| `qb` | 265 |
| `rdf` | 102 |
| `rdfa` | 68 |
| `rdfs` | 87 |
| `rr` | 297 |
| `rss` | 44 |
| `schema` | 8809 |
| `sd` | 165 |
| `sioc` | 669 |
| `skos` | 252 |
| `skosxl` | 60 |
| `sosa` | 345 |
| `ssn` | 520 |
| `time` | 1044 |
| `vcard` | 870 |
| `void` | 216 |
| `vs` | 27 |
| `wgs` | 33 |
