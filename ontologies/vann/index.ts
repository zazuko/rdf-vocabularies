/* This file was automatically generated. Do not edit by hand. */

const {
  ns1,
  ns2,
  vann,
  rdf,
  ns5,
  foaf,
  dcterms,
  owl,
  rdfs,
  ns10,
  dcmitype
} = {
  'ns1': 'http://creativecommons.org/licenses/by/1.0/',
  'ns2': 'http://web.resource.org/cc/',
  'vann': 'http://purl.org/vocab/vann/',
  'rdf': 'http://www.w3.org/1999/02/22-rdf-syntax-ns#',
  'ns5': 'http://iandavis.com/id/',
  'foaf': 'http://xmlns.com/foaf/0.1/',
  'dcterms': 'http://purl.org/dc/terms/',
  'owl': 'http://www.w3.org/2002/07/owl#',
  'rdfs': 'http://www.w3.org/2000/01/rdf-schema#',
  'ns10': 'http://vocab.org/vann/',
  'dcmitype': 'http://purl.org/dc/dcmitype/'
}

export default ({ literal, namedNode, quad }: import('rdf-js').DataFactory): import('rdf-js').Quad[] => {
  return [
    quad(
      namedNode(ns1),
      namedNode(`${ns2}permits`),
      namedNode(`${ns2}DerivativeWorks`),
      namedNode(vann)
    ),
    quad(
      namedNode(ns1),
      namedNode(`${ns2}permits`),
      namedNode(`${ns2}Distribution`),
      namedNode(vann)
    ),
    quad(
      namedNode(ns1),
      namedNode(`${ns2}permits`),
      namedNode(`${ns2}Reproduction`),
      namedNode(vann)
    ),
    quad(
      namedNode(ns1),
      namedNode(`${ns2}requires`),
      namedNode(`${ns2}Attribution`),
      namedNode(vann)
    ),
    quad(
      namedNode(ns1),
      namedNode(`${ns2}requires`),
      namedNode(`${ns2}Notice`),
      namedNode(vann)
    ),
    quad(
      namedNode(ns1),
      namedNode(`${rdf}type`),
      namedNode(`${ns2}License`),
      namedNode(vann)
    ),
    quad(
      namedNode(`${ns5}me`),
      namedNode(`${rdf}type`),
      namedNode(`${foaf}Person`),
      namedNode(vann)
    ),
    quad(
      namedNode(`${ns5}me`),
      namedNode(`${foaf}name`),
      literal(`Ian Davis`),
      namedNode(vann)
    ),
    quad(
      namedNode(vann),
      namedNode(`${dcterms}creator`),
      namedNode(`${ns5}me`),
      namedNode(vann)
    ),
    quad(
      namedNode(vann),
      namedNode(`${dcterms}date`),
      literal(`2010-06-07`),
      namedNode(vann)
    ),
    quad(
      namedNode(vann),
      namedNode(`${dcterms}description`),
      literal(`This document describes a vocabulary for annotating descriptions of vocabularies with examples and usage notes.`, 'en'),
      namedNode(vann)
    ),
    quad(
      namedNode(vann),
      namedNode(`${dcterms}identifier`),
      literal(`http://purl.org/vocab/vann/vann-vocab-20050401`),
      namedNode(vann)
    ),
    quad(
      namedNode(vann),
      namedNode(`${dcterms}isVersionOf`),
      namedNode(vann),
      namedNode(vann)
    ),
    quad(
      namedNode(vann),
      namedNode(`${dcterms}replaces`),
      namedNode(`${vann}vann-vocab-20040305`),
      namedNode(vann)
    ),
    quad(
      namedNode(vann),
      namedNode(`${dcterms}rights`),
      literal(`Copyright © 2005 Ian Davis`),
      namedNode(vann)
    ),
    quad(
      namedNode(vann),
      namedNode(`${dcterms}title`),
      literal(`VANN: A vocabulary for annotating vocabulary descriptions`, 'en'),
      namedNode(vann)
    ),
    quad(
      namedNode(vann),
      namedNode(`${vann}preferredNamespacePrefix`),
      literal(`vann`),
      namedNode(vann)
    ),
    quad(
      namedNode(vann),
      namedNode(`${vann}preferredNamespaceUri`),
      literal(`http://purl.org/vocab/vann/`),
      namedNode(vann)
    ),
    quad(
      namedNode(vann),
      namedNode(`${rdf}type`),
      namedNode(`${owl}Ontology`),
      namedNode(vann)
    ),
    quad(
      namedNode(`${vann}changes`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}AnnotationProperty`),
      namedNode(vann)
    ),
    quad(
      namedNode(`${vann}changes`),
      namedNode(`${rdfs}comment`),
      literal(`A reference to a resource that describes changes between this version of a vocabulary and the previous.`, 'en'),
      namedNode(vann)
    ),
    quad(
      namedNode(`${vann}changes`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(vann),
      namedNode(vann)
    ),
    quad(
      namedNode(`${vann}changes`),
      namedNode(`${rdfs}label`),
      literal(`Changes`, 'en'),
      namedNode(vann)
    ),
    quad(
      namedNode(`${vann}changes`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${rdfs}seeAlso`),
      namedNode(vann)
    ),
    quad(
      namedNode(`${vann}example`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}AnnotationProperty`),
      namedNode(vann)
    ),
    quad(
      namedNode(`${vann}example`),
      namedNode(`${rdfs}comment`),
      literal(`A reference to a resource that provides an example of how this resource can be used.`, 'en'),
      namedNode(vann)
    ),
    quad(
      namedNode(`${vann}example`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(vann),
      namedNode(vann)
    ),
    quad(
      namedNode(`${vann}example`),
      namedNode(`${rdfs}label`),
      literal(`Example`, 'en'),
      namedNode(vann)
    ),
    quad(
      namedNode(`${vann}example`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${rdfs}seeAlso`),
      namedNode(vann)
    ),
    quad(
      namedNode(`${vann}preferredNamespacePrefix`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}AnnotationProperty`),
      namedNode(vann)
    ),
    quad(
      namedNode(`${vann}preferredNamespacePrefix`),
      namedNode(`${rdfs}comment`),
      literal(`The preferred namespace prefix to use when using terms from this vocabulary in an XML document.`, 'en'),
      namedNode(vann)
    ),
    quad(
      namedNode(`${vann}preferredNamespacePrefix`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(vann),
      namedNode(vann)
    ),
    quad(
      namedNode(`${vann}preferredNamespacePrefix`),
      namedNode(`${rdfs}label`),
      literal(`Preferred Namespace Prefix`, 'en'),
      namedNode(vann)
    ),
    quad(
      namedNode(`${vann}preferredNamespaceUri`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}AnnotationProperty`),
      namedNode(vann)
    ),
    quad(
      namedNode(`${vann}preferredNamespaceUri`),
      namedNode(`${rdfs}comment`),
      literal(`The preferred namespace URI to use when using terms from this vocabulary in an XML document.`, 'en'),
      namedNode(vann)
    ),
    quad(
      namedNode(`${vann}preferredNamespaceUri`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(vann),
      namedNode(vann)
    ),
    quad(
      namedNode(`${vann}preferredNamespaceUri`),
      namedNode(`${rdfs}label`),
      literal(`Preferred Namespace Uri`, 'en'),
      namedNode(vann)
    ),
    quad(
      namedNode(`${vann}termGroup`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}AnnotationProperty`),
      namedNode(vann)
    ),
    quad(
      namedNode(`${vann}termGroup`),
      namedNode(`${rdfs}comment`),
      literal(`A group of related terms in a vocabulary.`, 'en'),
      namedNode(vann)
    ),
    quad(
      namedNode(`${vann}termGroup`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(vann),
      namedNode(vann)
    ),
    quad(
      namedNode(`${vann}termGroup`),
      namedNode(`${rdfs}label`),
      literal(`Term Group`, 'en'),
      namedNode(vann)
    ),
    quad(
      namedNode(`${vann}usageNote`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}AnnotationProperty`),
      namedNode(vann)
    ),
    quad(
      namedNode(`${vann}usageNote`),
      namedNode(`${rdfs}comment`),
      literal(`A reference to a resource that provides information on how this resource is to be used.`, 'en'),
      namedNode(vann)
    ),
    quad(
      namedNode(`${vann}usageNote`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(vann),
      namedNode(vann)
    ),
    quad(
      namedNode(`${vann}usageNote`),
      namedNode(`${rdfs}label`),
      literal(`Usage Note`, 'en'),
      namedNode(vann)
    ),
    quad(
      namedNode(`${vann}usageNote`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${rdfs}seeAlso`),
      namedNode(vann)
    ),
    quad(
      namedNode(ns10),
      namedNode(`${dcterms}type`),
      namedNode(`${dcmitype}Text`),
      namedNode(vann)
    ),
    quad(
      namedNode(ns10),
      namedNode(`${ns2}license`),
      namedNode(ns1),
      namedNode(vann)
    ),
    quad(
      namedNode(ns10),
      namedNode(`${rdf}type`),
      namedNode(`${ns2}Work`),
      namedNode(vann)
    ),

  ]
}
