/* This file was automatically generated. Do not edit by hand. */

const {
  ns1,
  rdfs,
  grddl,
  ns4,
  owl,
  rdf,
  ns7,
  ns8,
  ns9,
  foaf,
  ns11,
  doap,
  ns13,
  ns14,
  ns15,
  ns16,
  ns17,
  ns18,
  ns19,
  dc11
} = {
  'ns1': 'http://lists.w3.org/Archives/Public/public-grddl-comments/',
  'rdfs': 'http://www.w3.org/2000/01/rdf-schema#',
  'grddl': 'http://www.w3.org/2003/g/data-view#',
  'ns4': 'http://www.w3.org/2001/sw-grddl-wg/',
  'owl': 'http://www.w3.org/2002/07/owl#',
  'rdf': 'http://www.w3.org/1999/02/22-rdf-syntax-ns#',
  'ns7': 'http://www.w3.org/TR/2004/REC-webarch-20041215/#',
  'ns8': 'http://www.w3.org/TR/2004/REC-rdf-concepts-20040210/#',
  'ns9': 'http://www.w3.org/TR/1999/REC-xpath-19991116#',
  'foaf': 'http://xmlns.com/foaf/0.1/',
  'ns11': 'http://www.w3.org/People/Connolly/',
  'doap': 'http://usefulinc.com/ns/doap#',
  'ns13': 'http://www.w3.org/2003/g/',
  'ns14': 'http://webns.net/mvcb/',
  'ns15': 'http://purl.org/NET/erdf/',
  'ns16': 'http://www.rddl.org/purposes#',
  'ns17': 'http://www.w3.org/TR/grddl/',
  'ns18': 'http://www.w3.org/TR/rdf-concepts/',
  'ns19': 'http://www.w3.org/TR/',
  'dc11': 'http://purl.org/dc/elements/1.1/'
}

export default ({ literal, namedNode, quad }: import('rdf-js').DataFactory): import('rdf-js').Quad[] => {
  return [
    quad(
      namedNode(ns1),
      namedNode(`${rdfs}label`),
      literal(`public-grddl-comments`),
      namedNode(grddl)
    ),
    quad(
      namedNode(ns4),
      namedNode(`${rdfs}label`),
      literal(`the GRDDL Working Group`),
      namedNode(grddl)
    ),
    quad(
      namedNode(`${owl}FunctionalProperty`),
      namedNode(`${rdfs}label`),
      literal(`FunctionalProperty`),
      namedNode(grddl)
    ),
    quad(
      namedNode(`${grddl}InformationResource`),
      namedNode(`${rdf}type`),
      namedNode(`${rdfs}Class`),
      namedNode(grddl)
    ),
    quad(
      namedNode(`${grddl}InformationResource`),
      namedNode(`${rdfs}comment`),
      literal(`A resource which has the property that all of its essential characteristics can be conveyed in a message`),
      namedNode(grddl)
    ),
    quad(
      namedNode(`${grddl}InformationResource`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(`${ns7}def-information-resource`),
      namedNode(grddl)
    ),
    quad(
      namedNode(`${grddl}InformationResource`),
      namedNode(`${rdfs}label`),
      literal(`InformationResource`),
      namedNode(grddl)
    ),
    quad(
      namedNode(`${grddl}RDFGraph`),
      namedNode(`${rdf}type`),
      namedNode(`${rdfs}Class`),
      namedNode(grddl)
    ),
    quad(
      namedNode(`${grddl}RDFGraph`),
      namedNode(`${rdfs}comment`),
      literal(`a
    set of RDF triples`),
      namedNode(grddl)
    ),
    quad(
      namedNode(`${grddl}RDFGraph`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(`${ns8}dfn-rdf-graph`),
      namedNode(grddl)
    ),
    quad(
      namedNode(`${grddl}RDFGraph`),
      namedNode(`${rdfs}label`),
      literal(`RDF graphs`),
      namedNode(grddl)
    ),
    quad(
      namedNode(`${grddl}RDFGraph`),
      namedNode(`${rdfs}label`),
      literal(`RDFGraph`),
      namedNode(grddl)
    ),
    quad(
      namedNode(`${grddl}RootNode`),
      namedNode(`${rdf}type`),
      namedNode(`${rdfs}Class`),
      namedNode(grddl)
    ),
    quad(
      namedNode(`${grddl}RootNode`),
      namedNode(`${rdfs}comment`),
      literal(`the root of the tree in the XPath data
    model`),
      namedNode(grddl)
    ),
    quad(
      namedNode(`${grddl}RootNode`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(`${ns9}root-node`),
      namedNode(grddl)
    ),
    quad(
      namedNode(`${grddl}RootNode`),
      namedNode(`${rdfs}label`),
      literal(`RootNode`),
      namedNode(grddl)
    ),
    quad(
      namedNode(`${grddl}RootNode`),
      namedNode(`${rdfs}label`),
      literal(`XML document root nodes`),
      namedNode(grddl)
    ),
    quad(
      namedNode(`${grddl}Transformation`),
      namedNode(`${rdf}type`),
      namedNode(`${rdfs}Class`),
      namedNode(grddl)
    ),
    quad(
      namedNode(`${grddl}Transformation`),
      namedNode(`${rdfs}comment`),
      literal(`an InformationResource that specifies
    a transformation from a set of XML documents to RDF graphs`),
      namedNode(grddl)
    ),
    quad(
      namedNode(`${grddl}Transformation`),
      namedNode(`${rdfs}label`),
      literal(`Transformation`),
      namedNode(grddl)
    ),
    quad(
      namedNode(`${grddl}Transformation`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${grddl}InformationResource`),
      namedNode(grddl)
    ),
    quad(
      namedNode(`${grddl}Transformation`),
      namedNode(`${owl}onProperty`),
      namedNode(`${grddl}transformationProperty`),
      namedNode(grddl)
    ),
    quad(
      namedNode(`${grddl}Transformation`),
      namedNode(`${owl}someValuesFrom`),
      namedNode(`${grddl}TransformationProperty`),
      namedNode(grddl)
    ),
    quad(
      namedNode(`${grddl}TransformationProperty`),
      namedNode(`${rdf}type`),
      namedNode(`${rdfs}Class`),
      namedNode(grddl)
    ),
    quad(
      namedNode(`${grddl}TransformationProperty`),
      namedNode(`${rdfs}comment`),
      literal(`a FunctionalProperty that relates
    XML document root nodes to
    RDF graphs`),
      namedNode(grddl)
    ),
    quad(
      namedNode(`${grddl}TransformationProperty`),
      namedNode(`${rdfs}domain`),
      namedNode(`${grddl}RootNode`),
      namedNode(grddl)
    ),
    quad(
      namedNode(`${grddl}TransformationProperty`),
      namedNode(`${rdfs}label`),
      literal(`TransformationProperty`),
      namedNode(grddl)
    ),
    quad(
      namedNode(`${grddl}TransformationProperty`),
      namedNode(`${rdfs}range`),
      namedNode(`${grddl}RDFGraph`),
      namedNode(grddl)
    ),
    quad(
      namedNode(`${grddl}TransformationProperty`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${owl}FunctionalProperty`),
      namedNode(grddl)
    ),
    quad(
      namedNode(`${grddl}danc`),
      namedNode(`${foaf}homepage`),
      namedNode(ns11),
      namedNode(grddl)
    ),
    quad(
      namedNode(`${grddl}danc`),
      namedNode(`${foaf}name`),
      literal(`Dan Connolly`),
      namedNode(grddl)
    ),
    quad(
      namedNode(`${grddl}grddl-wg`),
      namedNode(`${foaf}homepage`),
      namedNode(ns4),
      namedNode(grddl)
    ),
    quad(
      namedNode(`${grddl}grddlProject`),
      namedNode(`${doap}homepage`),
      namedNode(`${ns13}data-view`),
      namedNode(grddl)
    ),
    quad(
      namedNode(`${grddl}grddlProject`),
      namedNode(`${doap}mailing-list`),
      namedNode(ns1),
      namedNode(grddl)
    ),
    quad(
      namedNode(`${grddl}grddlProject`),
      namedNode(`${doap}shortdesc`),
      literal(`GRDDL
    is a technique for gleaning resource
    descriptions from dialects of
    languages. It's a way of extracting Semantic Web
    data in RDF from XML formats (especially
    XHTML dialects or microformats) via
    transformations identified by URIs and typically expressed in
    XSLT.`),
      namedNode(grddl)
    ),
    quad(
      namedNode(`${grddl}namespaceTransformation`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(grddl)
    ),
    quad(
      namedNode(`${grddl}namespaceTransformation`),
      namedNode(`${rdfs}comment`),
      literal(`relates a namespace to a transformation for
    all documents in that namespace`),
      namedNode(grddl)
    ),
    quad(
      namedNode(`${grddl}namespaceTransformation`),
      namedNode(`${rdfs}label`),
      literal(`namespaceTransformation`),
      namedNode(grddl)
    ),
    quad(
      namedNode(`${grddl}namespaceTransformation`),
      namedNode(`${rdfs}range`),
      namedNode(`${grddl}Transformation`),
      namedNode(grddl)
    ),
    quad(
      namedNode(`${grddl}profileTransformation`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(grddl)
    ),
    quad(
      namedNode(`${grddl}profileTransformation`),
      namedNode(`${rdfs}comment`),
      literal(`relates a profile document to a
    transformation for all documents bearing that profile`),
      namedNode(grddl)
    ),
    quad(
      namedNode(`${grddl}profileTransformation`),
      namedNode(`${rdfs}label`),
      literal(`profileTransformation`),
      namedNode(grddl)
    ),
    quad(
      namedNode(`${grddl}profileTransformation`),
      namedNode(`${rdfs}range`),
      namedNode(`${grddl}Transformation`),
      namedNode(grddl)
    ),
    quad(
      namedNode(`${grddl}result`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(grddl)
    ),
    quad(
      namedNode(`${grddl}result`),
      namedNode(`${rdfs}comment`),
      literal(`an
    RDF graph obtained from an information resource by directly
    parsing a representation in the standard RDF/XML syntax or
    indirectly by parsing some other dialect using a transformation
    nominated by the document`),
      namedNode(grddl)
    ),
    quad(
      namedNode(`${grddl}result`),
      namedNode(`${rdfs}domain`),
      namedNode(`${grddl}InformationResource`),
      namedNode(grddl)
    ),
    quad(
      namedNode(`${grddl}result`),
      namedNode(`${rdfs}label`),
      literal(`result`),
      namedNode(grddl)
    ),
    quad(
      namedNode(`${grddl}result`),
      namedNode(`${rdfs}range`),
      namedNode(`${grddl}RDFGraph`),
      namedNode(grddl)
    ),
    quad(
      namedNode(`${grddl}transformation`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(grddl)
    ),
    quad(
      namedNode(`${grddl}transformation`),
      namedNode(`${rdfs}comment`),
      literal(`relates a source document to a
    transformation, usually represented in XSLT, that relates the source document syntax
    to the RDF graph syntax`),
      namedNode(grddl)
    ),
    quad(
      namedNode(`${grddl}transformation`),
      namedNode(`${rdfs}domain`),
      namedNode(`${grddl}RootNode`),
      namedNode(grddl)
    ),
    quad(
      namedNode(`${grddl}transformation`),
      namedNode(`${rdfs}label`),
      literal(`transformation`),
      namedNode(grddl)
    ),
    quad(
      namedNode(`${grddl}transformation`),
      namedNode(`${rdfs}range`),
      namedNode(`${grddl}Transformation`),
      namedNode(grddl)
    ),
    quad(
      namedNode(`${grddl}transformationProperty`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}FunctionalProperty`),
      namedNode(grddl)
    ),
    quad(
      namedNode(`${grddl}transformationProperty`),
      namedNode(`${rdfs}comment`),
      literal(`relates a transformation to the algorithm
    specified by the property that computes an RDF graph from an XML
    document node`),
      namedNode(grddl)
    ),
    quad(
      namedNode(`${grddl}transformationProperty`),
      namedNode(`${rdfs}domain`),
      namedNode(`${grddl}Transformation`),
      namedNode(grddl)
    ),
    quad(
      namedNode(`${grddl}transformationProperty`),
      namedNode(`${rdfs}label`),
      literal(`transformationProperty`),
      namedNode(grddl)
    ),
    quad(
      namedNode(`${grddl}transformationProperty`),
      namedNode(`${rdfs}range`),
      namedNode(`${grddl}TransformationProperty`),
      namedNode(grddl)
    ),
    quad(
      namedNode(`${ns13}data-view`),
      namedNode(`${ns14}generatorAgent`),
      namedNode(`${ns15}extract`),
      namedNode(grddl)
    ),
    quad(
      namedNode(`${ns13}data-view`),
      namedNode(`${ns16}normative-reference`),
      namedNode(ns17),
      namedNode(grddl)
    ),
    quad(
      namedNode(`${ns13}data-view`),
      namedNode(`${ns16}normative-reference`),
      namedNode(ns18),
      namedNode(grddl)
    ),
    quad(
      namedNode(`${ns13}data-view`),
      namedNode(`${ns16}normative-reference`),
      namedNode(`${ns19}xslt`),
      namedNode(grddl)
    ),
    quad(
      namedNode(`${ns13}data-view`),
      namedNode(`${foaf}maker`),
      namedNode(`${grddl}grddl-wg`),
      namedNode(grddl)
    ),
    quad(
      namedNode(ns11),
      namedNode(`${rdfs}label`),
      literal(`Dan Connolly`),
      namedNode(grddl)
    ),
    quad(
      namedNode(`${ns9}root-node`),
      namedNode(`${rdfs}label`),
      literal(`section
    5.1 Root Node in XML Path Language (XPath) Version
    1.0`),
      namedNode(grddl)
    ),
    quad(
      namedNode(`${ns8}dfn-rdf-graph`),
      namedNode(`${rdfs}label`),
      literal(`definition
    in Resource Description Framework (RDF): Concepts and
    Abstract Syntax`),
      namedNode(grddl)
    ),
    quad(
      namedNode(`${ns7}def-information-resource`),
      namedNode(`${rdfs}label`),
      literal(`definition in Architecture of the World Wide Web, Volume One`),
      namedNode(grddl)
    ),
    quad(
      namedNode(ns17),
      namedNode(`${dc11}date`),
      literal(`2005-05-15`),
      namedNode(grddl)
    ),
    quad(
      namedNode(ns17),
      namedNode(`${dc11}title`),
      literal(`Gleaning
        Resource Descriptions from Dialects of Languages
        (GRDDL)`),
      namedNode(grddl)
    ),
    quad(
      namedNode(ns17),
      namedNode(`${rdfs}label`),
      literal(`Gleaning
        Resource Descriptions from Dialects of Languages
        (GRDDL), 16
        May 2005`),
      namedNode(grddl)
    ),
    quad(
      namedNode(ns18),
      namedNode(`${dc11}date`),
      literal(`2004-02-10`),
      namedNode(grddl)
    ),
    quad(
      namedNode(ns18),
      namedNode(`${dc11}title`),
      literal(`Resource
      Description Framework (RDF): Concepts and Abstract
      Syntax`),
      namedNode(grddl)
    ),
    quad(
      namedNode(ns18),
      namedNode(`${rdfs}label`),
      literal(`Resource
      Description Framework (RDF): Concepts and Abstract
      Syntax, 10
      February 2004`),
      namedNode(grddl)
    ),
    quad(
      namedNode(`${ns19}xslt`),
      namedNode(`${rdfs}label`),
      literal(`XSLT`),
      namedNode(grddl)
    ),

  ]
}
