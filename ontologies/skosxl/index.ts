/* This file was automatically generated. Do not edit by hand. */

const {
  skosxl,
  rdf,
  owl,
  rdfs,
  ns5,
  skos,
  dcterms,
  ns8,
  xsd
} = {
  'skosxl': 'http://www.w3.org/2008/05/skos-xl#',
  'rdf': 'http://www.w3.org/1999/02/22-rdf-syntax-ns#',
  'owl': 'http://www.w3.org/2002/07/owl#',
  'rdfs': 'http://www.w3.org/2000/01/rdf-schema#',
  'ns5': 'http://www.w3.org/2008/05/',
  'skos': 'http://www.w3.org/2004/02/skos/core#',
  'dcterms': 'http://purl.org/dc/terms/',
  'ns8': 'http://www.w3.org/2004/02/skos/',
  'xsd': 'http://www.w3.org/2001/XMLSchema#'
}

export default ({ blankNode, literal, namedNode, quad }: import('rdf-js').DataFactory): import('rdf-js').Quad[] => {
  const blankNodes: import('rdf-js').BlankNode[] = []
  for (let i = 0; i < 1; i++) {
    blankNodes.push(blankNode())
  }

  return [
    quad(
      namedNode(`${skosxl}Label`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}Class`),
      namedNode(skosxl)
    ),
    quad(
      namedNode(`${skosxl}Label`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(`${ns5}skos-xl`),
      namedNode(skosxl)
    ),
    quad(
      namedNode(`${skosxl}Label`),
      namedNode(`${rdfs}label`),
      literal(`Label`, 'en'),
      namedNode(skosxl)
    ),
    quad(
      namedNode(`${skosxl}Label`),
      namedNode(`${rdfs}subClassOf`),
      blankNodes[0],
      namedNode(skosxl)
    ),
    quad(
      namedNode(`${skosxl}Label`),
      namedNode(`${owl}disjointWith`),
      namedNode(`${skos}Collection`),
      namedNode(skosxl)
    ),
    quad(
      namedNode(`${skosxl}Label`),
      namedNode(`${owl}disjointWith`),
      namedNode(`${skos}Concept`),
      namedNode(skosxl)
    ),
    quad(
      namedNode(`${skosxl}Label`),
      namedNode(`${owl}disjointWith`),
      namedNode(`${skos}ConceptScheme`),
      namedNode(skosxl)
    ),
    quad(
      namedNode(`${skosxl}Label`),
      namedNode(`${skos}definition`),
      literal(`A special class of lexical entities.`, 'en'),
      namedNode(skosxl)
    ),
    quad(
      namedNode(`${skosxl}altLabel`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(skosxl)
    ),
    quad(
      namedNode(`${skosxl}altLabel`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}ObjectProperty`),
      namedNode(skosxl)
    ),
    quad(
      namedNode(`${skosxl}altLabel`),
      namedNode(`${rdfs}comment`),
      literal(`If C skosxl:altLabel L and L skosxl:literalForm V, then X skos:altLabel V.`, 'en'),
      namedNode(skosxl)
    ),
    quad(
      namedNode(`${skosxl}altLabel`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(`${ns5}skos-xl`),
      namedNode(skosxl)
    ),
    quad(
      namedNode(`${skosxl}altLabel`),
      namedNode(`${rdfs}label`),
      literal(`alternative label`, 'en'),
      namedNode(skosxl)
    ),
    quad(
      namedNode(`${skosxl}altLabel`),
      namedNode(`${rdfs}range`),
      namedNode(`${skosxl}Label`),
      namedNode(skosxl)
    ),
    quad(
      namedNode(`${skosxl}altLabel`),
      namedNode(`${rdfs}seeAlso`),
      namedNode(`${skos}altLabel`),
      namedNode(skosxl)
    ),
    quad(
      namedNode(`${skosxl}altLabel`),
      namedNode(`${skos}definition`),
      literal(`The property skosxl:altLabel is used to associate an skosxl:Label with a skos:Concept. The property is analogous to skos:altLabel.`, 'en'),
      namedNode(skosxl)
    ),
    quad(
      namedNode(`${skosxl}hiddenLabel`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(skosxl)
    ),
    quad(
      namedNode(`${skosxl}hiddenLabel`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}ObjectProperty`),
      namedNode(skosxl)
    ),
    quad(
      namedNode(`${skosxl}hiddenLabel`),
      namedNode(`${rdfs}comment`),
      literal(`If C skosxl:hiddenLabel L and L skosxl:literalForm V, then C skos:hiddenLabel V.`, 'en'),
      namedNode(skosxl)
    ),
    quad(
      namedNode(`${skosxl}hiddenLabel`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(`${ns5}skos-xl`),
      namedNode(skosxl)
    ),
    quad(
      namedNode(`${skosxl}hiddenLabel`),
      namedNode(`${rdfs}label`),
      literal(`hidden label`, 'en'),
      namedNode(skosxl)
    ),
    quad(
      namedNode(`${skosxl}hiddenLabel`),
      namedNode(`${rdfs}range`),
      namedNode(`${skosxl}Label`),
      namedNode(skosxl)
    ),
    quad(
      namedNode(`${skosxl}hiddenLabel`),
      namedNode(`${rdfs}seeAlso`),
      namedNode(`${skos}hiddenLabel`),
      namedNode(skosxl)
    ),
    quad(
      namedNode(`${skosxl}hiddenLabel`),
      namedNode(`${skos}definition`),
      literal(`The property skosxl:hiddenLabel is used to associate an skosxl:Label with a skos:Concept. The property is analogous to skos:hiddenLabel.`, 'en'),
      namedNode(skosxl)
    ),
    quad(
      namedNode(`${skosxl}labelRelation`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(skosxl)
    ),
    quad(
      namedNode(`${skosxl}labelRelation`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}ObjectProperty`),
      namedNode(skosxl)
    ),
    quad(
      namedNode(`${skosxl}labelRelation`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}SymmetricProperty`),
      namedNode(skosxl)
    ),
    quad(
      namedNode(`${skosxl}labelRelation`),
      namedNode(`${rdfs}domain`),
      namedNode(`${skosxl}Label`),
      namedNode(skosxl)
    ),
    quad(
      namedNode(`${skosxl}labelRelation`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(`${ns5}skos-xl`),
      namedNode(skosxl)
    ),
    quad(
      namedNode(`${skosxl}labelRelation`),
      namedNode(`${rdfs}label`),
      literal(`label relation`, 'en'),
      namedNode(skosxl)
    ),
    quad(
      namedNode(`${skosxl}labelRelation`),
      namedNode(`${rdfs}range`),
      namedNode(`${skosxl}Label`),
      namedNode(skosxl)
    ),
    quad(
      namedNode(`${skosxl}labelRelation`),
      namedNode(`${skos}definition`),
      literal(`The property skosxl:labelRelation is used for representing binary ('direct') relations between instances of the class skosxl:Label.`, 'en'),
      namedNode(skosxl)
    ),
    quad(
      namedNode(`${skosxl}labelRelation`),
      namedNode(`${skos}scopeNote`),
      literal(`skosxl:labelRelation is not intended to be used directly, but rather as the basis for a design pattern which can be refined for more specific labeling scenarios.`, 'en'),
      namedNode(skosxl)
    ),
    quad(
      namedNode(`${skosxl}literalForm`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(skosxl)
    ),
    quad(
      namedNode(`${skosxl}literalForm`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}DatatypeProperty`),
      namedNode(skosxl)
    ),
    quad(
      namedNode(`${skosxl}literalForm`),
      namedNode(`${rdfs}comment`),
      literal(`If two instances of the class skosxl:Label have the same literal form, they are not necessarily the same resource.`, 'en'),
      namedNode(skosxl)
    ),
    quad(
      namedNode(`${skosxl}literalForm`),
      namedNode(`${rdfs}comment`),
      literal(`The range of skosxl:literalForm is the class of RDF plain literals.`, 'en'),
      namedNode(skosxl)
    ),
    quad(
      namedNode(`${skosxl}literalForm`),
      namedNode(`${rdfs}domain`),
      namedNode(`${skosxl}Label`),
      namedNode(skosxl)
    ),
    quad(
      namedNode(`${skosxl}literalForm`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(`${ns5}skos-xl`),
      namedNode(skosxl)
    ),
    quad(
      namedNode(`${skosxl}literalForm`),
      namedNode(`${rdfs}label`),
      literal(`literal form`, 'en'),
      namedNode(skosxl)
    ),
    quad(
      namedNode(`${skosxl}literalForm`),
      namedNode(`${skos}definition`),
      literal(`The property skosxl:literalForm is used to give the literal form of an skosxl:Label.`, 'en'),
      namedNode(skosxl)
    ),
    quad(
      namedNode(`${skosxl}prefLabel`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(skosxl)
    ),
    quad(
      namedNode(`${skosxl}prefLabel`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}ObjectProperty`),
      namedNode(skosxl)
    ),
    quad(
      namedNode(`${skosxl}prefLabel`),
      namedNode(`${rdfs}comment`),
      literal(`If C skosxl:prefLabel L and L skosxl:literalForm V, then X skos:prefLabel V.`, 'en'),
      namedNode(skosxl)
    ),
    quad(
      namedNode(`${skosxl}prefLabel`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(`${ns5}skos-xl`),
      namedNode(skosxl)
    ),
    quad(
      namedNode(`${skosxl}prefLabel`),
      namedNode(`${rdfs}label`),
      literal(`preferred label`, 'en'),
      namedNode(skosxl)
    ),
    quad(
      namedNode(`${skosxl}prefLabel`),
      namedNode(`${rdfs}range`),
      namedNode(`${skosxl}Label`),
      namedNode(skosxl)
    ),
    quad(
      namedNode(`${skosxl}prefLabel`),
      namedNode(`${rdfs}seeAlso`),
      namedNode(`${skos}prefLabel`),
      namedNode(skosxl)
    ),
    quad(
      namedNode(`${skosxl}prefLabel`),
      namedNode(`${skos}definition`),
      literal(`The property skosxl:prefLabel is used to associate an skosxl:Label with a skos:Concept. The property is analogous to skos:prefLabel.`, 'en'),
      namedNode(skosxl)
    ),
    quad(
      namedNode(`${ns5}skos-xl`),
      namedNode(`${dcterms}contributor`),
      literal(`Participants in W3C's Semantic Web Deployment Working Group.`),
      namedNode(skosxl)
    ),
    quad(
      namedNode(`${ns5}skos-xl`),
      namedNode(`${dcterms}creator`),
      literal(`Alistair Miles`),
      namedNode(skosxl)
    ),
    quad(
      namedNode(`${ns5}skos-xl`),
      namedNode(`${dcterms}creator`),
      literal(`Sean Bechhofer`),
      namedNode(skosxl)
    ),
    quad(
      namedNode(`${ns5}skos-xl`),
      namedNode(`${dcterms}description`),
      literal(`An RDF vocabulary extending SKOS and allowing the description and linking of lexical entities.`, 'en'),
      namedNode(skosxl)
    ),
    quad(
      namedNode(`${ns5}skos-xl`),
      namedNode(`${dcterms}title`),
      literal(`SKOS XL Vocabulary`, 'en'),
      namedNode(skosxl)
    ),
    quad(
      namedNode(`${ns5}skos-xl`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}Ontology`),
      namedNode(skosxl)
    ),
    quad(
      namedNode(`${ns5}skos-xl`),
      namedNode(`${rdfs}seeAlso`),
      namedNode(`${ns5}skos`),
      namedNode(skosxl)
    ),
    quad(
      namedNode(`${ns5}skos-xl`),
      namedNode(`${owl}imports`),
      namedNode(`${ns8}core`),
      namedNode(skosxl)
    ),
    quad(
      blankNodes[0],
      namedNode(`${rdf}type`),
      namedNode(`${owl}Restriction`),
      namedNode(skosxl)
    ),
    quad(
      blankNodes[0],
      namedNode(`${owl}cardinality`),
      literal(`1`, namedNode(`${xsd}nonNegativeInteger`)),
      namedNode(skosxl)
    ),
    quad(
      blankNodes[0],
      namedNode(`${owl}onProperty`),
      namedNode(`${skosxl}literalForm`),
      namedNode(skosxl)
    ),

  ]
}
