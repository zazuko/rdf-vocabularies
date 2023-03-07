/* This file was automatically generated. Do not edit by hand. */

const {
  ns1,
  rdf,
  foaf,
  rdfa,
  rdfs,
  ns6,
  ns7,
  dcterms,
  ns9,
  owl,
  ns11
} = {
  'ns1': 'http://www.ivan-herman.net/foaf#',
  'rdf': 'http://www.w3.org/1999/02/22-rdf-syntax-ns#',
  'foaf': 'http://xmlns.com/foaf/0.1/',
  'rdfa': 'http://www.w3.org/ns/rdfa#',
  'rdfs': 'http://www.w3.org/2000/01/rdf-schema#',
  'ns6': 'http://www.ivan-herman.net/',
  'ns7': 'http://',
  'dcterms': 'http://purl.org/dc/terms/',
  'ns9': 'http://www.w3.org/data#',
  'owl': 'http://www.w3.org/2002/07/owl#',
  'ns11': 'http://www.w3.org/TR/rdfa-core/#'
}

export default ({ literal, namedNode, quad }: import('rdf-js').DataFactory): import('rdf-js').Quad[] => {
  return [
    quad(
      namedNode(`${ns1}me`),
      namedNode(`${rdf}type`),
      namedNode(`${foaf}Person`),
      namedNode(rdfa)
    ),
    quad(
      namedNode(`${ns1}me`),
      namedNode(`${rdfs}seeAlso`),
      namedNode(`${ns6}foaf`),
      namedNode(rdfa)
    ),
    quad(
      namedNode(`${ns1}me`),
      namedNode(`${foaf}mbox`),
      namedNode('mailto:ivan@w3.org'),
      namedNode(rdfa)
    ),
    quad(
      namedNode(`${ns1}me`),
      namedNode(`${foaf}name`),
      literal(`Ivan Herman`),
      namedNode(rdfa)
    ),
    quad(
      namedNode(`${ns1}me`),
      namedNode(`${foaf}title`),
      literal(`Semantic Web Activity Lead`),
      namedNode(rdfa)
    ),
    quad(
      namedNode(`${ns1}me`),
      namedNode(`${foaf}workplaceHomepage`),
      namedNode(`${ns7}www.w3.org`),
      namedNode(rdfa)
    ),
    quad(
      namedNode(rdfa),
      namedNode(`${dcterms}creator`),
      namedNode(`${ns1}me`),
      namedNode(rdfa)
    ),
    quad(
      namedNode(rdfa),
      namedNode(`${dcterms}date`),
      literal(`2013-01-18`),
      namedNode(rdfa)
    ),
    quad(
      namedNode(rdfa),
      namedNode(`${dcterms}description`),
      literal(`This document describes the RDFa Vocabulary for Term and Prefix Assignment. The Vocabulary is used to modify RDFa 1.1 processing behavior.`),
      namedNode(rdfa)
    ),
    quad(
      namedNode(rdfa),
      namedNode(`${dcterms}publisher`),
      namedNode(`${ns9}W3C`),
      namedNode(rdfa)
    ),
    quad(
      namedNode(rdfa),
      namedNode(`${dcterms}title`),
      literal(`RDFa Vocabulary for Term and Prefix Assignment, and for Processor Graph Reporting`),
      namedNode(rdfa)
    ),
    quad(
      namedNode(rdfa),
      namedNode(`${rdf}type`),
      namedNode(`${owl}Ontology`),
      namedNode(rdfa)
    ),
    quad(
      namedNode(rdfa),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(`${ns11}s_initialcontexts`),
      namedNode(rdfa)
    ),
    quad(
      namedNode(rdfa),
      namedNode(`${owl}versionInfo`),
      literal(`$Date: 2013-03-11 07:54:23 $`),
      namedNode(rdfa)
    ),
    quad(
      namedNode(`${rdfa}DocumentError`),
      namedNode(`${dcterms}description`),
      literal(`error condition; to be used when the document fails to be fully processed as a result of non-conformant host language markup`),
      namedNode(rdfa)
    ),
    quad(
      namedNode(`${rdfa}DocumentError`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${rdfa}Error`),
      namedNode(rdfa)
    ),
    quad(
      namedNode(`${rdfa}Error`),
      namedNode(`${dcterms}description`),
      literal(`is the class for all error conditions`),
      namedNode(rdfa)
    ),
    quad(
      namedNode(`${rdfa}Error`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${rdfa}PGClass`),
      namedNode(rdfa)
    ),
    quad(
      namedNode(`${rdfa}Info`),
      namedNode(`${dcterms}description`),
      literal(`is the class for all informations`),
      namedNode(rdfa)
    ),
    quad(
      namedNode(`${rdfa}Info`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${rdfa}PGClass`),
      namedNode(rdfa)
    ),
    quad(
      namedNode(`${rdfa}PGClass`),
      namedNode(`${dcterms}description`),
      literal(`is the top level class of the hierarchy`),
      namedNode(rdfa)
    ),
    quad(
      namedNode(`${rdfa}PGClass`),
      namedNode(`${rdf}type`),
      namedNode(`${rdfs}Class`),
      namedNode(rdfa)
    ),
    quad(
      namedNode(`${rdfa}PGClass`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}Class`),
      namedNode(rdfa)
    ),
    quad(
      namedNode(`${rdfa}Pattern`),
      namedNode(`${dcterms}description`),
      literal(`Class to identify an (RDF) resource whose properties are to be copied to another resource`),
      namedNode(rdfa)
    ),
    quad(
      namedNode(`${rdfa}Pattern`),
      namedNode(`${rdf}type`),
      namedNode(`${rdfs}Class`),
      namedNode(rdfa)
    ),
    quad(
      namedNode(`${rdfa}Pattern`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}Class`),
      namedNode(rdfa)
    ),
    quad(
      namedNode(`${rdfa}PrefixMapping`),
      namedNode(`${dcterms}description`),
      literal(`is the class for prefix mappings`),
      namedNode(rdfa)
    ),
    quad(
      namedNode(`${rdfa}PrefixMapping`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${rdfa}PrefixOrTermMapping`),
      namedNode(rdfa)
    ),
    quad(
      namedNode(`${rdfa}PrefixOrTermMapping`),
      namedNode(`${dcterms}description`),
      literal(`is the top level class for prefix or term mappings`),
      namedNode(rdfa)
    ),
    quad(
      namedNode(`${rdfa}PrefixOrTermMapping`),
      namedNode(`${rdf}type`),
      namedNode(`${rdfs}Class`),
      namedNode(rdfa)
    ),
    quad(
      namedNode(`${rdfa}PrefixOrTermMapping`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}Class`),
      namedNode(rdfa)
    ),
    quad(
      namedNode(`${rdfa}PrefixRedefinition`),
      namedNode(`${dcterms}description`),
      literal(`warning; to be used when a prefix, either from the initial context or inherited from an ancestor node, is redefined in an element`),
      namedNode(rdfa)
    ),
    quad(
      namedNode(`${rdfa}PrefixRedefinition`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${rdfa}Warning`),
      namedNode(rdfa)
    ),
    quad(
      namedNode(`${rdfa}TermMapping`),
      namedNode(`${dcterms}description`),
      literal(`is the class for term mappings`),
      namedNode(rdfa)
    ),
    quad(
      namedNode(`${rdfa}TermMapping`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${rdfa}PrefixOrTermMapping`),
      namedNode(rdfa)
    ),
    quad(
      namedNode(`${rdfa}UnresolvedCURIE`),
      namedNode(`${dcterms}description`),
      literal(`warning; to be used when a CURIE prefix fails to be resolved`),
      namedNode(rdfa)
    ),
    quad(
      namedNode(`${rdfa}UnresolvedCURIE`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${rdfa}Warning`),
      namedNode(rdfa)
    ),
    quad(
      namedNode(`${rdfa}UnresolvedTerm`),
      namedNode(`${dcterms}description`),
      literal(`warning; to be used when a Term fails to be resolved`),
      namedNode(rdfa)
    ),
    quad(
      namedNode(`${rdfa}UnresolvedTerm`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${rdfa}Warning`),
      namedNode(rdfa)
    ),
    quad(
      namedNode(`${rdfa}VocabReferenceError`),
      namedNode(`${dcterms}description`),
      literal(`warning; to be used when the value of a @vocab attribute cannot be dereferenced, hence the vocabulary expansion cannot be completed`),
      namedNode(rdfa)
    ),
    quad(
      namedNode(`${rdfa}VocabReferenceError`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${rdfa}Warning`),
      namedNode(rdfa)
    ),
    quad(
      namedNode(`${rdfa}Warning`),
      namedNode(`${dcterms}description`),
      literal(`is the class for all warnings`),
      namedNode(rdfa)
    ),
    quad(
      namedNode(`${rdfa}Warning`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${rdfa}PGClass`),
      namedNode(rdfa)
    ),
    quad(
      namedNode(`${rdfa}context`),
      namedNode(`${dcterms}description`),
      literal(`provides extra context for the error, eg, http response, an XPointer/XPath information, or simply the URI that created the error`),
      namedNode(rdfa)
    ),
    quad(
      namedNode(`${rdfa}context`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(rdfa)
    ),
    quad(
      namedNode(`${rdfa}context`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}ObjectProperty`),
      namedNode(rdfa)
    ),
    quad(
      namedNode(`${rdfa}context`),
      namedNode(`${rdfs}domain`),
      namedNode(`${rdfa}PGClass`),
      namedNode(rdfa)
    ),
    quad(
      namedNode(`${rdfa}copy`),
      namedNode(`${dcterms}description`),
      literal(`identifies the resource (i.e., pattern) whose properties and values should be copied to replace the current triple (retaining the subject of the triple).`),
      namedNode(rdfa)
    ),
    quad(
      namedNode(`${rdfa}copy`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(rdfa)
    ),
    quad(
      namedNode(`${rdfa}copy`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}ObjectProperty`),
      namedNode(rdfa)
    ),
    quad(
      namedNode(`${rdfa}prefix`),
      namedNode(`${dcterms}description`),
      literal(`defines a prefix mapping for a URI; the value is supposed to be a NMTOKEN`),
      namedNode(rdfa)
    ),
    quad(
      namedNode(`${rdfa}prefix`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(rdfa)
    ),
    quad(
      namedNode(`${rdfa}prefix`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}DatatypeProperty`),
      namedNode(rdfa)
    ),
    quad(
      namedNode(`${rdfa}prefix`),
      namedNode(`${rdfs}domain`),
      namedNode(`${rdfa}PrefixMapping`),
      namedNode(rdfa)
    ),
    quad(
      namedNode(`${rdfa}term`),
      namedNode(`${dcterms}description`),
      literal(`defines a term mapping for a URI; the value is supposed to be a NMTOKEN`),
      namedNode(rdfa)
    ),
    quad(
      namedNode(`${rdfa}term`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(rdfa)
    ),
    quad(
      namedNode(`${rdfa}term`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}DatatypeProperty`),
      namedNode(rdfa)
    ),
    quad(
      namedNode(`${rdfa}term`),
      namedNode(`${rdfs}domain`),
      namedNode(`${rdfa}TermMapping`),
      namedNode(rdfa)
    ),
    quad(
      namedNode(`${rdfa}uri`),
      namedNode(`${dcterms}description`),
      literal(`defines the URI for either a prefix or a term mapping; the value is supposed to be an absolute URI`),
      namedNode(rdfa)
    ),
    quad(
      namedNode(`${rdfa}uri`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(rdfa)
    ),
    quad(
      namedNode(`${rdfa}uri`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}DatatypeProperty`),
      namedNode(rdfa)
    ),
    quad(
      namedNode(`${rdfa}uri`),
      namedNode(`${rdfs}domain`),
      namedNode(`${rdfa}PrefixOrTermMapping`),
      namedNode(rdfa)
    ),
    quad(
      namedNode(`${rdfa}usesVocabulary`),
      namedNode(`${dcterms}description`),
      literal(`provides a relationship between the host document and a vocabulary
	defined using the @vocab facility of RDFa1.1`),
      namedNode(rdfa)
    ),
    quad(
      namedNode(`${rdfa}usesVocabulary`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(rdfa)
    ),
    quad(
      namedNode(`${rdfa}usesVocabulary`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}ObjectProperty`),
      namedNode(rdfa)
    ),
    quad(
      namedNode(`${rdfa}vocabulary`),
      namedNode(`${dcterms}description`),
      literal(`defines an absolute URI to be used as a default vocabulary; the value is can be any string; for documentation purposes it is advised to use the string 'true' or 'True'.`),
      namedNode(rdfa)
    ),
    quad(
      namedNode(`${rdfa}vocabulary`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(rdfa)
    ),
    quad(
      namedNode(`${rdfa}vocabulary`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}DatatypeProperty`),
      namedNode(rdfa)
    ),

  ]
}
