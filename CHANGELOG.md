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
