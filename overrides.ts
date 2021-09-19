interface FileSpec {
  file?: string;
  mediaType?: string;
  xmlParserOptions?: {
    baseIRI: string;
  };
}

export interface Override extends FileSpec {
  skip?: boolean;
  files?: FileSpec[];
}

export const overrides: Record<string, Override> = {
  as: { file: 'https://raw.githubusercontent.com/zazuko/activitystreams/owl-fix/vocabulary/activitystreams2.owl', mediaType: 'text/turtle' },
  bibo: { mediaType: 'application/rdf+xml' },
  dbo: {
    files: [{
      mediaType: 'text/n3',
      file: 'http://downloads.dbpedia.org/2016-10/dbpedia_2016-10.nt'
    }, {
      mediaType: 'text/turtle',
      file: 'http://dbpedia.org/ontology/'
    }]
  },
  cc: { file: 'https://creativecommons.org/schema.rdf' },
  ctag: { skip: true },
  doap: { mediaType: 'application/rdf+xml' },
  dpv: {
    files: [{
      mediaType: 'application/ld+json',
      file: 'https://dpvcg.github.io/dpv/dpv.jsonld'
    }, {
      mediaType: 'application/rdf+xml',
      file: 'https://dpvcg.github.io/dpv/dpv.rdf'
    }, {
      mediaType: 'text/n3',
      file: 'https://dpvcg.github.io/dpv/dpv.n3'
    }, {
      mediaType: 'text/turtle',
      file: 'https://dpvcg.github.io/dpv/dpv.ttl'
    }]
  },
  dtype: { mediaType: 'application/rdf+xml' },
  earl: {
    xmlParserOptions: {
      baseIRI: 'https://www.w3.org/ns/earl#'
    }
  },
  ebucore: { file: 'https://www.ebu.ch/metadata/ontologies/ebucore/ebucore.rdf' },
  frbr: { file: 'http://purl.org/spar/frbr.nt' },
  geo: { file: 'http://www.modelservers.org/public/ontologies/vcon/geosparql_vocab_all.rdf' },
  gs1: { file: 'https://raw.githubusercontent.com/gs1/WebVoc/master/gs1Voc_v1_3.ttl', mediaType: 'text/turtle' },
  gml: { skip: true },
  gtfs: { mediaType: 'text/n3' },
  http: { mediaType: 'application/rdf+xml' },
  ical: { file: 'http://www.w3.org/2002/12/cal/icaltzd.rdf', mediaType: 'application/rdf+xml' },
  lvont: { mediaType: 'application/rdf+xml' },
  prefix: { file: 'http://qudt.org/2.1/vocab/prefix' },
  qb: { mediaType: 'text/turtle' },
  qudt: {
    files: [{
      mediaType: 'text/turtle',
      file: 'http://qudt.org/2.1/schema/qudt'
    }, {
      mediaType: 'text/turtle',
      file: 'http://qudt.org/2.1/schema/datatype'
    }]
  },
  rdau: { file: 'http://rdaregistry.info/Elements/u.nt', mediaType: 'application/n-triples' },
  rev: { skip: true },
  rico: { file: 'https://github.com/ICA-EGAD/RiC-O/raw/master/ontology/current-version/RiC-O_v0-2.rdf', mediaType: 'application/rdf+xml' },
  rif: { skip: true },
  rss: { file: 'http://purl.org/rss/1.0/schema.rdf' },
  sem: {
    file: 'http://semanticweb.cs.vu.nl/2009/11/sem/sem.rdf',
    mediaType: 'application/rdf+xml',
    xmlParserOptions: { baseIRI: 'http://semanticweb.cs.vu.nl/2009/11/sem' }
  },
  schema: { file: 'https://schema.org/version/latest/schemaorg-current-http.nt' },
  sdmx: { mediaType: 'text/turtle' },
  sf: { skip: true },
  test: { mediaType: 'text/n3' },
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
  xsd: { file: 'https://raw.githubusercontent.com/ruby-rdf/rdf/master/etc/xsd.ttl', mediaType: 'text/turtle' }
}
