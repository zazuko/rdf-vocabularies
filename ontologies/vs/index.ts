/* This file was automatically generated. Do not edit by hand. */

const {
  vs,
  rdf,
  rdfs,
  ns4,
  dc11,
  xsd,
  vann,
  owl
} = {
  'vs': 'http://www.w3.org/2003/06/sw-vocab-status/ns#',
  'rdf': 'http://www.w3.org/1999/02/22-rdf-syntax-ns#',
  'rdfs': 'http://www.w3.org/2000/01/rdf-schema#',
  'ns4': 'http://www.w3.org/2003/06/sw-vocab-status/',
  'dc11': 'http://purl.org/dc/elements/1.1/',
  'xsd': 'http://www.w3.org/2001/XMLSchema#',
  'vann': 'http://purl.org/vocab/vann/',
  'owl': 'http://www.w3.org/2002/07/owl#'
}

export default ({ literal, namedNode, quad }: import('rdf-js').DataFactory): import('rdf-js').Quad[] => {
  return [
    quad(
      namedNode(`${vs}moreinfo`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(vs)
    ),
    quad(
      namedNode(`${vs}moreinfo`),
      namedNode(`${rdfs}comment`),
      literal(`more information about the status etc of a term, typically human oriented`),
      namedNode(vs)
    ),
    quad(
      namedNode(`${vs}moreinfo`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(vs),
      namedNode(vs)
    ),
    quad(
      namedNode(`${vs}moreinfo`),
      namedNode(`${rdfs}label`),
      literal(`more info`),
      namedNode(vs)
    ),
    quad(
      namedNode(`${vs}moreinfo`),
      namedNode(`${vs}term_status`),
      literal(`unstable`),
      namedNode(vs)
    ),
    quad(
      namedNode(`${vs}term_status`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(vs)
    ),
    quad(
      namedNode(`${vs}term_status`),
      namedNode(`${rdfs}comment`),
      literal(`the status of a vocabulary term, expressed as a short symbolic string; known values include 'unstable','testing', 'stable' and 'archaic'`),
      namedNode(vs)
    ),
    quad(
      namedNode(`${vs}term_status`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(vs),
      namedNode(vs)
    ),
    quad(
      namedNode(`${vs}term_status`),
      namedNode(`${rdfs}label`),
      literal(`term status`),
      namedNode(vs)
    ),
    quad(
      namedNode(`${vs}term_status`),
      namedNode(`${vs}term_status`),
      literal(`unstable`),
      namedNode(vs)
    ),
    quad(
      namedNode(`${vs}userdocs`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(vs)
    ),
    quad(
      namedNode(`${vs}userdocs`),
      namedNode(`${rdfs}comment`),
      literal(`human-oriented documentation, examples etc for use of this term`),
      namedNode(vs)
    ),
    quad(
      namedNode(`${vs}userdocs`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(vs),
      namedNode(vs)
    ),
    quad(
      namedNode(`${vs}userdocs`),
      namedNode(`${rdfs}label`),
      literal(`user docs`),
      namedNode(vs)
    ),
    quad(
      namedNode(`${vs}userdocs`),
      namedNode(`${vs}term_status`),
      literal(`unstable`),
      namedNode(vs)
    ),
    quad(
      namedNode(`${ns4}ns`),
      namedNode(`${dc11}contributor`),
      literal(`Pierre-Yves Vandenbussche`),
      namedNode(vs)
    ),
    quad(
      namedNode(`${ns4}ns`),
      namedNode(`${dc11}creator`),
      literal(`Dan Brickley`),
      namedNode(vs)
    ),
    quad(
      namedNode(`${ns4}ns`),
      namedNode(`${dc11}creator`),
      literal(`Leigh Dodds`),
      namedNode(vs)
    ),
    quad(
      namedNode(`${ns4}ns`),
      namedNode(`${dc11}creator`),
      literal(`Libby Miller`),
      namedNode(vs)
    ),
    quad(
      namedNode(`${ns4}ns`),
      namedNode(`${dc11}description`),
      literal(`An RDF vocabulary for relating SW vocabulary terms to their status.`),
      namedNode(vs)
    ),
    quad(
      namedNode(`${ns4}ns`),
      namedNode(`${dc11}issued`),
      literal(`2003-06-01`, namedNode(`${xsd}date`)),
      namedNode(vs)
    ),
    quad(
      namedNode(`${ns4}ns`),
      namedNode(`${dc11}modified`),
      literal(`2011-12-12`, namedNode(`${xsd}date`)),
      namedNode(vs)
    ),
    quad(
      namedNode(`${ns4}ns`),
      namedNode(`${dc11}title`),
      literal(`SemWeb Vocab Status ontology`),
      namedNode(vs)
    ),
    quad(
      namedNode(`${ns4}ns`),
      namedNode(`${vann}preferredNamespacePrefix`),
      literal(`vs`),
      namedNode(vs)
    ),
    quad(
      namedNode(`${ns4}ns`),
      namedNode(`${vann}preferredNamespaceUri`),
      literal(`http://www.w3.org/2003/06/sw-vocab-status/ns#`),
      namedNode(vs)
    ),
    quad(
      namedNode(`${ns4}ns`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}Ontology`),
      namedNode(vs)
    ),
    quad(
      namedNode(`${ns4}ns`),
      namedNode(`${rdfs}comment`),
      literal(`This vocabulary was created in the FOAF project, based on experience with FOAF, Dublin Core and other early RDF vocabularies. Deployment experience shows that changing namespace URIs is expensive and unrewarding, so this vocabulary provides terms to support in-place evolution of structured data vocabularies. By indicating status at the level of terms rather than vocabularies, dictionary-style, fine grained improvements become easier. Different organizations and parties can agree or disagree on the status of a vocabulary term; however the status published alongside the term may deserve special attention. Future work could include patterns for citing announcements and decisions, or using SKOS to decentralise the extension of the basic status levels.`, 'en'),
      namedNode(vs)
    ),

  ]
}
