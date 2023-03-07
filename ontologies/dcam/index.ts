/* This file was automatically generated. Do not edit by hand. */

const {
  dcam,
  dcterms,
  xsd,
  ns4,
  rdf,
  rdfs,
  ns7
} = {
  'dcam': 'http://purl.org/dc/dcam/',
  'dcterms': 'http://purl.org/dc/terms/',
  'xsd': 'http://www.w3.org/2001/XMLSchema#',
  'ns4': 'http://purl.org/dc/aboutdcmi#',
  'rdf': 'http://www.w3.org/1999/02/22-rdf-syntax-ns#',
  'rdfs': 'http://www.w3.org/2000/01/rdf-schema#',
  'ns7': 'https://www.dublincore.org/specifications/dublin-core/2007/06/04/abstract-model/'
}

export default ({ literal, namedNode, quad }: import('rdf-js').DataFactory): import('rdf-js').Quad[] => {
  return [
    quad(
      namedNode(dcam),
      namedNode(`${dcterms}modified`),
      literal(`2012-06-14`, namedNode(`${xsd}date`)),
      namedNode(dcam)
    ),
    quad(
      namedNode(dcam),
      namedNode(`${dcterms}publisher`),
      namedNode(`${ns4}DCMI`),
      namedNode(dcam)
    ),
    quad(
      namedNode(dcam),
      namedNode(`${dcterms}title`),
      literal(`Metadata terms for vocabulary description`, 'en'),
      namedNode(dcam)
    ),
    quad(
      namedNode(`${dcam}VocabularyEncodingScheme`),
      namedNode(`${dcterms}issued`),
      literal(`2008-01-14`, namedNode(`${xsd}date`)),
      namedNode(dcam)
    ),
    quad(
      namedNode(`${dcam}VocabularyEncodingScheme`),
      namedNode(`${rdf}type`),
      namedNode(`${rdfs}Class`),
      namedNode(dcam)
    ),
    quad(
      namedNode(`${dcam}VocabularyEncodingScheme`),
      namedNode(`${rdfs}comment`),
      literal(`An enumerated set of resources.`, 'en'),
      namedNode(dcam)
    ),
    quad(
      namedNode(`${dcam}VocabularyEncodingScheme`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(dcam),
      namedNode(dcam)
    ),
    quad(
      namedNode(`${dcam}VocabularyEncodingScheme`),
      namedNode(`${rdfs}label`),
      literal(`Vocabulary Encoding Scheme`, 'en'),
      namedNode(dcam)
    ),
    quad(
      namedNode(`${dcam}VocabularyEncodingScheme`),
      namedNode(`${rdfs}seeAlso`),
      namedNode(ns7),
      namedNode(dcam)
    ),
    quad(
      namedNode(`${dcam}domainIncludes`),
      namedNode(`${dcterms}issued`),
      literal(`2020-01-20`, namedNode(`${xsd}date`)),
      namedNode(dcam)
    ),
    quad(
      namedNode(`${dcam}domainIncludes`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(dcam)
    ),
    quad(
      namedNode(`${dcam}domainIncludes`),
      namedNode(`${rdfs}comment`),
      literal(`A suggested class for subjects of this property.`, 'en'),
      namedNode(dcam)
    ),
    quad(
      namedNode(`${dcam}domainIncludes`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(dcam),
      namedNode(dcam)
    ),
    quad(
      namedNode(`${dcam}domainIncludes`),
      namedNode(`${rdfs}label`),
      literal(`Domain Includes`, 'en'),
      namedNode(dcam)
    ),
    quad(
      namedNode(`${dcam}memberOf`),
      namedNode(`${dcterms}issued`),
      literal(`2008-01-14`, namedNode(`${xsd}date`)),
      namedNode(dcam)
    ),
    quad(
      namedNode(`${dcam}memberOf`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(dcam)
    ),
    quad(
      namedNode(`${dcam}memberOf`),
      namedNode(`${rdfs}comment`),
      literal(`A relationship between a resource and a vocabulary encoding scheme which indicates that the resource is a member of a set.`, 'en'),
      namedNode(dcam)
    ),
    quad(
      namedNode(`${dcam}memberOf`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(dcam),
      namedNode(dcam)
    ),
    quad(
      namedNode(`${dcam}memberOf`),
      namedNode(`${rdfs}label`),
      literal(`Member Of`, 'en'),
      namedNode(dcam)
    ),
    quad(
      namedNode(`${dcam}memberOf`),
      namedNode(`${rdfs}range`),
      namedNode(`${dcam}VocabularyEncodingScheme`),
      namedNode(dcam)
    ),
    quad(
      namedNode(`${dcam}memberOf`),
      namedNode(`${rdfs}seeAlso`),
      namedNode(ns7),
      namedNode(dcam)
    ),
    quad(
      namedNode(`${dcam}rangeIncludes`),
      namedNode(`${dcterms}issued`),
      literal(`2020-01-20`, namedNode(`${xsd}date`)),
      namedNode(dcam)
    ),
    quad(
      namedNode(`${dcam}rangeIncludes`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(dcam)
    ),
    quad(
      namedNode(`${dcam}rangeIncludes`),
      namedNode(`${rdfs}comment`),
      literal(`A suggested class for values of this property.`, 'en'),
      namedNode(dcam)
    ),
    quad(
      namedNode(`${dcam}rangeIncludes`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(dcam),
      namedNode(dcam)
    ),
    quad(
      namedNode(`${dcam}rangeIncludes`),
      namedNode(`${rdfs}label`),
      literal(`Range Includes`, 'en'),
      namedNode(dcam)
    ),

  ]
}
