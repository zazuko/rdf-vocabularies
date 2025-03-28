import prefixesOnly from './lib/prefixesOnly.js'

const packagedPrefixes = {
  acl: 'http://www.w3.org/ns/auth/acl#',
  as: 'https://www.w3.org/ns/activitystreams#',
  bibo: 'http://purl.org/ontology/bibo/',
  cc: 'http://creativecommons.org/ns#',
  cert: 'http://www.w3.org/ns/auth/cert#',
  cnt: 'http://www.w3.org/2011/content#',
  constant: 'http://qudt.org/vocab/constant/',
  crm: 'http://www.cidoc-crm.org/cidoc-crm/',
  csvw: 'http://www.w3.org/ns/csvw#',
  ctag: 'http://commontag.org/ns#',
  cur: 'http://qudt.org/vocab/currency/',
  'dash-sparql': 'http://datashapes.org/sparql#',
  dash: 'http://datashapes.org/dash#',
  dbo: 'http://dbpedia.org/ontology/',
  dc11: 'http://purl.org/dc/elements/1.1/',
  dcam: 'http://purl.org/dc/dcam/',
  dcat: 'http://www.w3.org/ns/dcat#',
  dcmitype: 'http://purl.org/dc/dcmitype/',
  dcterms: 'http://purl.org/dc/terms/',
  dig: 'http://www.ics.forth.gr/isl/CRMdig/',
  discipline: 'http://qudt.org/vocab/discipline/',
  doap: 'http://usefulinc.com/ns/doap#',
  dprod: 'https://ekgf.github.io/dprod/',
  dpv: 'http://www.w3.org/ns/dpv#',
  dqv: 'http://www.w3.org/ns/dqv#',
  dtype: 'http://www.linkedmodel.org/schema/dtype#',
  duv: 'http://www.w3.org/ns/duv#',
  earl: 'http://www.w3.org/ns/earl#',
  ebucore: 'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#',
  exif: 'http://www.w3.org/2003/12/exif/ns#',
  foaf: 'http://xmlns.com/foaf/0.1/',
  frbr: 'http://purl.org/vocab/frbr/core#',
  geo: 'http://www.opengis.net/ont/geosparql#',
  geof: 'http://www.opengis.net/def/function/geosparql/',
  geor: 'http://www.opengis.net/def/rule/geosparql/',
  gml: 'http://www.opengis.net/ont/gml#',
  gn: 'http://www.geonames.org/ontology#',
  gr: 'http://purl.org/goodrelations/v1#',
  grddl: 'http://www.w3.org/2003/g/data-view#',
  gs1: 'https://gs1.org/voc/',
  gtfs: 'http://vocab.gtfs.org/terms#',
  http: 'http://www.w3.org/2011/http#',
  hydra: 'http://www.w3.org/ns/hydra/core#',
  ical: 'http://www.w3.org/2002/12/cal/icaltzd#',
  la: 'https://linked.art/ns/terms/',
  ldp: 'http://www.w3.org/ns/ldp#',
  list: 'http://www.w3.org/2000/10/swap/list#',
  locn: 'http://www.w3.org/ns/locn#',
  log: 'http://www.w3.org/2000/10/swap/log#',
  lvont: 'http://lexvo.org/ontology#',
  m4i: 'http://w3id.org/nfdi4ing/metadata4ing#',
  ma: 'http://www.w3.org/ns/ma-ont#',
  mads: 'http://www.loc.gov/mads/rdf/v1#',
  math: 'http://www.w3.org/2000/10/swap/math#',
  oa: 'http://www.w3.org/ns/oa#',
  og: 'http://ogp.me/ns#',
  oidc: 'http://www.w3.org/ns/solid/oidc#',
  org: 'http://www.w3.org/ns/org#',
  owl: 'http://www.w3.org/2002/07/owl#',
  pim: 'http://www.w3.org/ns/pim/space#',
  prefix: 'http://qudt.org/vocab/prefix/',
  prov: 'http://www.w3.org/ns/prov#',
  qb: 'http://purl.org/linked-data/cube#',
  qkdv: 'http://qudt.org/vocab/dimensionvector/',
  quantitykind: 'http://qudt.org/vocab/quantitykind/',
  qudt: 'http://qudt.org/schema/qudt/',
  rdau: 'http://rdaregistry.info/Elements/u/',
  rdf: 'http://www.w3.org/1999/02/22-rdf-syntax-ns#',
  rdfa: 'http://www.w3.org/ns/rdfa#',
  rdfs: 'http://www.w3.org/2000/01/rdf-schema#',
  rev: 'http://purl.org/stuff/rev#',
  rico: 'https://www.ica.org/standards/RiC/ontology#',
  rr: 'http://www.w3.org/ns/r2rml#',
  rss: 'http://purl.org/rss/1.0/',
  schema: 'http://schema.org/',
  sd: 'http://www.w3.org/ns/sparql-service-description#',
  sdmx: 'http://purl.org/linked-data/sdmx#',
  sem: 'http://semanticweb.cs.vu.nl/2009/11/sem/',
  set: 'http://www.w3.org/2000/10/swap/set#',
  sf: 'http://www.opengis.net/ont/sf#',
  sh: 'http://www.w3.org/ns/shacl#',
  shex: 'http://www.w3.org/ns/shex#',
  shsh: 'http://www.w3.org/ns/shacl-shacl#',
  sioc: 'http://rdfs.org/sioc/ns#',
  skos: 'http://www.w3.org/2004/02/skos/core#',
  skosxl: 'http://www.w3.org/2008/05/skos-xl#',
  solid: 'http://www.w3.org/ns/solid/terms#',
  sosa: 'http://www.w3.org/ns/sosa/',
  sou: 'http://qudt.org/vocab/sou/',
  ssn: 'http://www.w3.org/ns/ssn/',
  stat: 'http://www.w3.org/ns/posix/stat#',
  string: 'http://www.w3.org/2000/10/swap/string#',
  test: 'http://www.w3.org/2006/03/test-description#',
  time: 'http://www.w3.org/2006/time#',
  unit: 'http://qudt.org/vocab/unit/',
  vaem: 'http://www.linkedmodel.org/schema/vaem#',
  vann: 'http://purl.org/vocab/vann/',
  vcard: 'http://www.w3.org/2006/vcard/ns#',
  void: 'http://rdfs.org/ns/void#',
  vs: 'http://www.w3.org/2003/06/sw-vocab-status/ns#',
  vso: 'http://purl.org/vso/ns#',
  wdrs: 'http://www.w3.org/2007/05/powder-s#',
  wgs: 'http://www.w3.org/2003/01/geo/wgs84_pos#',
  xhv: 'http://www.w3.org/1999/xhtml/vocab#',
  xkos: 'http://rdf-vocabulary.ddialliance.org/xkos#',
  xsd: 'http://www.w3.org/2001/XMLSchema#',
}

const prefixes = {
  ...packagedPrefixes,
  ...prefixesOnly,
} as const

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Prefixes extends Readonly<typeof prefixes> {

}
export interface CustomPrefixes {
  [key: string]: string
}

export default prefixes as Prefixes & CustomPrefixes
