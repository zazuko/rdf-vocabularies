module.exports = {
  as: { file: 'https://www.w3.org/ns/activitystreams-owl.ttl', mediaType: 'text/turtle' },
  cc: { file: 'https://creativecommons.org/schema.rdf' },
  ctag: { skip: true },
  dtype: { mediaType: 'application/rdf+xml' },
  frbr: { file: 'http://purl.org/spar/frbr.nt' },
  geo: { file: 'http://www.modelservers.org/public/ontologies/vcon/geosparql_vocab_all.rdf' },
  gml: { skip: true },
  gtfs: { mediaType: 'text/n3' },
  http: { mediaType: 'application/rdf+xml' },
  ical: { file: 'http://www.w3.org/2002/12/cal/icaltzd.rdf', mediaType: 'application/rdf+xml' },
  qb: { mediaType: 'text/turtle' },
  qudt: {
    files: [{
      mediaType: 'text/turtle',
      file: 'http://qudt.org/2.0/schema/SCHEMA_QUDT-v2.0.ttl'
    }, {
      mediaType: 'text/turtle',
      file: 'http://qudt.org/2.0/schema/SCHEMA_QUDT-DATATYPES-v2.0.ttl'
    }, {
      mediaType: 'text/turtle',
      file: 'http://qudt.org/2.0/schema/SCHEMA_QUDT-SCIENCE-v2.0.ttl'
    }]
  },
  qudtv: {
    files: [{
      mediaType: 'text/turtle',
      file: 'http://qudt.org/2.0/vocab/VOCAB_QUDT-DISCIPLINES-v2.0.ttl'
    }, {
      mediaType: 'text/turtle',
      file: 'http://qudt.org/2.0/vocab/VOCAB_QUDT-UNITS-ACOUSTICS-v2.0.ttl'
    }, {
      mediaType: 'text/turtle',
      file: 'http://qudt.org/2.0/vocab/VOCAB_QUDT-UNITS-ATOMIC-AND-NUCLEAR-PHYSICS-v2.0.ttl'
    }, {
      mediaType: 'text/turtle',
      file: 'http://qudt.org/2.0/vocab/VOCAB_QUDT-UNITS-BASE-v2.0.ttl'
    }, {
      mediaType: 'text/turtle',
      file: 'http://qudt.org/2.0/vocab/VOCAB_QUDT-UNITS-ELECTROMAGNETISM-v2.0.ttl'
    }, {
      mediaType: 'text/turtle',
      file: 'http://qudt.org/2.0/vocab/VOCAB_QUDT-UNITS-ENVIRONMENTAL-SCIENCE-v2.0.ttl'
    }, {
      mediaType: 'text/turtle',
      file: 'http://qudt.org/2.0/vocab/VOCAB_QUDT-UNITS-INFORMATICS-v2.0.ttl'
    }, {
      mediaType: 'text/turtle',
      file: 'http://qudt.org/2.0/vocab/VOCAB_QUDT-UNITS-LIFE-SCIENCES-v2.0.ttl'
    }, {
      mediaType: 'text/turtle',
      file: 'http://qudt.org/2.0/vocab/VOCAB_QUDT-UNITS-LIGHT-v2.0.ttl'
    }, {
      mediaType: 'text/turtle',
      file: 'http://qudt.org/2.0/vocab/VOCAB_QUDT-UNITS-MATHEMATICS-v2.0.ttl'
    }, {
      mediaType: 'text/turtle',
      file: 'http://qudt.org/2.0/vocab/VOCAB_QUDT-UNITS-MECHANICS-v2.0.ttl'
    }, {
      mediaType: 'text/turtle',
      file: 'http://qudt.org/2.0/vocab/VOCAB_QUDT-UNITS-PHYSICAL-CHEMISTRY-AND-MOLECULAR-PHYSICS-v2.0.ttl'
    }, {
      mediaType: 'text/turtle',
      file: 'http://qudt.org/2.0/vocab/VOCAB_QUDT-UNITS-SOLID-STATE-PHYSICS-v2.0.ttl'
    }, {
      mediaType: 'text/turtle',
      file: 'http://qudt.org/2.0/vocab/VOCAB_QUDT-UNITS-SPACE-AND-TIME-v2.0.ttl'
    }, {
      mediaType: 'text/turtle',
      file: 'http://qudt.org/2.0/vocab/VOCAB_QUDT-UNITS-TELEBIOMETRICS-v2.0.ttl'
    }, {
      mediaType: 'text/turtle',
      file: 'http://qudt.org/2.0/vocab/VOCAB_QUDT-UNITS-THERMODYNAMICS-v2.0.ttl'
    }]
  },
  rdau: { file: 'http://rdaregistry.info/Elements/u.nt', mediaType: 'application/n-triples' },
  rev: { skip: true },
  rif: { skip: true },
  rss: { file: 'http://purl.org/rss/1.0/schema.rdf' },
  sem: {
    file: 'http://semanticweb.cs.vu.nl/2009/11/sem/sem.rdf',
    mediaType: 'application/rdf+xml',
    xmlParserOptions: { baseIRI: 'http://semanticweb.cs.vu.nl/2009/11/sem' }
  },
  schema: { file: 'http://schema.org/version/latest/schema.nt' },
  sdmx: { mediaType: 'text/turtle' },
  sf: { skip: true },
  v: { skip: true },
  vaem: { mediaType: 'application/rdf+xml' },
  vann: {
    file: 'http://vocab.org/vann/vann-vocab-20100607.rdf',
    mediaType: 'application/rdf+xml',
    xmlParserOptions: { baseIRI: 'http://vocab.org/vann/' }
  },
  void: { file: 'http://vocab.deri.ie/void.ttl' },
  wdr: { skip: true },
  wdrs: { skip: true },
  xhv: { file: 'https://www.w3.org/2012/pyRdfa/extract?uri=https%3A%2F%2Fwww.w3.org%2F1999%2Fxhtml%2Fvocab.xhtml&format=turtle&rdfagraph=output&vocab_expansion=false&rdfa_lite=false&embedded_rdf=true&space_preserve=true&vocab_cache=true&vocab_cache_report=false&vocab_cache_refresh=false' },
  xkos: { file: 'https://raw.githubusercontent.com/linked-statistics/xkos/master/xkos.ttl', mediaType: 'text/turtle' },
  xml: { skip: true },
  xsd: { file: 'https://raw.githubusercontent.com/ruby-rdf/rdf/develop/etc/xsd.ttl', mediaType: 'text/turtle' }
}
