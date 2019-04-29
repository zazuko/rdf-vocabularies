Goal:
* Publish a package versioned by date
* Containing each prefix in their own file in n-triples, e.g. `xsd.nt`
* Entrypoint is a script loading all of them into a dataset and exporting this dataset
* Optionally we could have something like `require('rdf-prefixes').load(['xsd', 'dc'])`
* Have a script to recreate the files from source whenever we want to publish a new version

Current status:

```
❯ npm run fetch

> rdf-prefixes@0.0.1 fetch /Volumes/repositories/zazuko/rdf-prefixes
> node index.js

{ prefix: 'csvw', dataset: 632 }
{ prefix: 'sd', dataset: 165 }
{ prefix: 'ldp', dataset: 200 }
{ prefix: 'schema', dataset: 8799 }
{ prefix: 'owl', dataset: 450 }
{ prefix: 'void', dataset: 216 }
{ prefix: 'sioc', dataset: 669 }
{ prefix: 'foaf', dataset: 620 }
{ prefix: 'time', dataset: 1044 }
{ prefix: 'dcat', dataset: 425 }
{ prefix: 'oa', dataset: 334 }
{ prefix: 'gr', dataset: 1834 }
{ prefix: 'rdf', dataset: 102 }
{ prefix: 'cc', dataset: 115 }
{ prefix: 'ssn', dataset: 520 }
{ prefix: 'rr', dataset: 297 }
{ prefix: 'rdfa', dataset: 68 }
{ prefix: 'as', dataset: 0 }
{ prefix: 'org', dataset: 748 }
{ prefix: 'sosa', dataset: 345 }
{ prefix: 'dc11', dataset: 138 }
{ prefix: 'skos', dataset: 252 }
{ prefix: 'dqv', dataset: 152 }
{ prefix: 'prov', dataset: 1662 }
{ prefix: 'og', dataset: 231 }
{ prefix: 'qb', dataset: 265 }
{ prefix: 'rdfs', dataset: 87 }
{ prefix: 'dc', dataset: 866 }
{ prefix: 'ma', dataset: 340 }
{ prefix: 'vcard', dataset: 870 }
{ prefix: 'grddl', dataset: 74 }
{ prefix: 'dcterms', dataset: 866 }
{ prefix: 'skosxl', dataset: 60 }
{ prefix: 'wgs', dataset: 33 }
{ prefix: 'dbo', dataset: 8035 }
{ prefix: 'dbpedia', dataset: 18 }
{ prefix: 'dbpprop', dataset: 3 }
{ prefix: 'rss', dataset: 44 }
{ prefix: 'cnt', dataset: 108 }
{ prefix: 'vs', dataset: 27 }
{ prefix: 'hydra', dataset: 386 }
{ prefix: 'gn', dataset: 6846 }
{ prefix: 'gtfs', dataset: 870 }
{ prefix: 'geo', dataset: 518 }
{ prefix: 'geof', dataset: 46 }
{ prefix: 'geor', dataset: 36 }
```