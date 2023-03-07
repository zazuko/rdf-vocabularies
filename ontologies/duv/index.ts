/* This file was automatically generated. Do not edit by hand. */

const {
  duv,
  rdf,
  rdfs,
  owl,
  vann,
  ns6,
  dcterms,
  xsd,
  ns9,
  ns10,
  ns11,
  ns12,
  foaf
} = {
  'duv': 'http://www.w3.org/ns/duv#',
  'rdf': 'http://www.w3.org/1999/02/22-rdf-syntax-ns#',
  'rdfs': 'http://www.w3.org/2000/01/rdf-schema#',
  'owl': 'http://www.w3.org/2002/07/owl#',
  'vann': 'http://purl.org/vocab/vann/',
  'ns6': 'http://www.w3.org/ns/',
  'dcterms': 'http://purl.org/dc/terms/',
  'xsd': 'http://www.w3.org/2001/XMLSchema#',
  'ns9': 'http://www.w3.org/data#',
  'ns10': 'http://purl.org/adms/assettype/',
  'ns11': 'http://purl.org/vocommons/voaf#',
  'ns12': 'http://www.w3.org/TR/vocab-duv/',
  'foaf': 'http://xmlns.com/foaf/0.1/'
}

export default ({ blankNode, literal, namedNode, quad }: import('rdf-js').DataFactory): import('rdf-js').Quad[] => {
  const blankNodes: import('rdf-js').BlankNode[] = []
  for (let i = 0; i < 3; i++) {
    blankNodes.push(blankNode())
  }

  return [
    quad(
      namedNode(`${duv}RatingFeedback`),
      namedNode(`${rdf}type`),
      namedNode(`${rdfs}Class`),
      namedNode(duv)
    ),
    quad(
      namedNode(`${duv}RatingFeedback`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}Class`),
      namedNode(duv)
    ),
    quad(
      namedNode(`${duv}RatingFeedback`),
      namedNode(`${rdfs}comment`),
      literal(`Predefined criteria used to express a user opinion about a dataset or distribution using a discrete range of values.`, 'en'),
      namedNode(duv)
    ),
    quad(
      namedNode(`${duv}RatingFeedback`),
      namedNode(`${rdfs}label`),
      literal(`Rating Feedback`, 'en'),
      namedNode(duv)
    ),
    quad(
      namedNode(`${duv}RatingFeedback`),
      namedNode(`${rdfs}subclassOf`),
      namedNode(`${duv}UserFeedback`),
      namedNode(duv)
    ),
    quad(
      namedNode(`${duv}Usage`),
      namedNode(`${rdf}type`),
      namedNode(`${rdfs}Class`),
      namedNode(duv)
    ),
    quad(
      namedNode(`${duv}Usage`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}Class`),
      namedNode(duv)
    ),
    quad(
      namedNode(`${duv}Usage`),
      namedNode(`${rdfs}comment`),
      literal(`A helpful description of actions that can be performed on a given dataset or distribution.`, 'en'),
      namedNode(duv)
    ),
    quad(
      namedNode(`${duv}Usage`),
      namedNode(`${rdfs}label`),
      literal(`Usage`, 'en'),
      namedNode(duv)
    ),
    quad(
      namedNode(`${duv}UsageTool`),
      namedNode(`${rdf}type`),
      namedNode(`${rdfs}Class`),
      namedNode(duv)
    ),
    quad(
      namedNode(`${duv}UsageTool`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}Class`),
      namedNode(duv)
    ),
    quad(
      namedNode(`${duv}UsageTool`),
      namedNode(`${rdfs}comment`),
      literal(`A synopsis describing the way a tool can use a dataset or distribution.`, 'en'),
      namedNode(duv)
    ),
    quad(
      namedNode(`${duv}UsageTool`),
      namedNode(`${rdfs}label`),
      literal(`UsageTool`, 'en'),
      namedNode(duv)
    ),
    quad(
      namedNode(`${duv}UserFeedback`),
      namedNode(`${rdf}type`),
      namedNode(`${rdfs}Class`),
      namedNode(duv)
    ),
    quad(
      namedNode(`${duv}UserFeedback`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}Class`),
      namedNode(duv)
    ),
    quad(
      namedNode(`${duv}UserFeedback`),
      namedNode(`${rdfs}comment`),
      literal(`User feedback on the dataset. Expresses whether the dataset was useful or not, for example.`, 'en'),
      namedNode(duv)
    ),
    quad(
      namedNode(`${duv}UserFeedback`),
      namedNode(`${rdfs}label`),
      literal(`User Feedback`, 'en'),
      namedNode(duv)
    ),
    quad(
      namedNode(`${duv}hasDistributor`),
      namedNode(`${vann}usageNote`),
      literal(`dcat:Dataset (subject) duv:hasDistributor (predicate) foaf:Agent (object)`, 'en'),
      namedNode(duv)
    ),
    quad(
      namedNode(`${duv}hasDistributor`),
      namedNode(`${vann}usageNote`),
      literal(`dcat:Distribution (subject) duv:hasDistributor (predicate) foaf:Agent (object)`, 'en'),
      namedNode(duv)
    ),
    quad(
      namedNode(`${duv}hasDistributor`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(duv)
    ),
    quad(
      namedNode(`${duv}hasDistributor`),
      namedNode(`${rdfs}comment`),
      literal(`The distributor is the organization that makes the dataset available for downloading and use.`, 'en'),
      namedNode(duv)
    ),
    quad(
      namedNode(`${duv}hasDistributor`),
      namedNode(`${rdfs}label`),
      literal(`has distributor`, 'en'),
      namedNode(duv)
    ),
    quad(
      namedNode(`${duv}hasFeedback`),
      namedNode(`${vann}usageNote`),
      literal(`dcat:Dataset (subject) duv:hasFeedback (predicate) duv:UserFeedback (object)`, 'en'),
      namedNode(duv)
    ),
    quad(
      namedNode(`${duv}hasFeedback`),
      namedNode(`${vann}usageNote`),
      literal(`dcat:Distribution (subject) duv:hasFeedback (predicate) duv:UserFeedback (object)`, 'en'),
      namedNode(duv)
    ),
    quad(
      namedNode(`${duv}hasFeedback`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(duv)
    ),
    quad(
      namedNode(`${duv}hasFeedback`),
      namedNode(`${rdfs}comment`),
      literal(`User feedback associated with Dataset or distribution`, 'en'),
      namedNode(duv)
    ),
    quad(
      namedNode(`${duv}hasFeedback`),
      namedNode(`${rdfs}label`),
      literal(`has dataset feedback`, 'en'),
      namedNode(duv)
    ),
    quad(
      namedNode(`${duv}hasRating`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(duv)
    ),
    quad(
      namedNode(`${duv}hasRating`),
      namedNode(`${rdfs}comment`),
      literal(`Rating Feedback has rating opinion`, 'en'),
      namedNode(duv)
    ),
    quad(
      namedNode(`${duv}hasRating`),
      namedNode(`${rdfs}label`),
      literal(`has rating`, 'en'),
      namedNode(duv)
    ),
    quad(
      namedNode(`${duv}hasUsage`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(duv)
    ),
    quad(
      namedNode(`${duv}hasUsage`),
      namedNode(`${rdfs}comment`),
      literal(`Dataset/distribution usage guidance or instructions.`, 'en'),
      namedNode(duv)
    ),
    quad(
      namedNode(`${duv}hasUsage`),
      namedNode(`${rdfs}label`),
      literal(`has dataset/distribution usage`, 'en'),
      namedNode(duv)
    ),
    quad(
      namedNode(`${duv}hasUsageTool`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(duv)
    ),
    quad(
      namedNode(`${duv}hasUsageTool`),
      namedNode(`${rdfs}comment`),
      literal(`Describes the tool that provides the Usage `, 'en'),
      namedNode(duv)
    ),
    quad(
      namedNode(`${duv}hasUsageTool`),
      namedNode(`${rdfs}label`),
      literal(`has usage tool`, 'en'),
      namedNode(duv)
    ),
    quad(
      namedNode(`${duv}refersTo`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(duv)
    ),
    quad(
      namedNode(`${duv}refersTo`),
      namedNode(`${rdfs}comment`),
      literal(`Dataset associated with Usage. `, 'en'),
      namedNode(duv)
    ),
    quad(
      namedNode(`${duv}refersTo`),
      namedNode(`${rdfs}label`),
      literal(`refers to dataset`, 'en'),
      namedNode(duv)
    ),
    quad(
      namedNode(`${ns6}duv`),
      namedNode(`${dcterms}created`),
      literal(`2015-12-17`, namedNode(`${xsd}date`)),
      namedNode(duv)
    ),
    quad(
      namedNode(`${ns6}duv`),
      namedNode(`${dcterms}creator`),
      blankNodes[0],
      namedNode(duv)
    ),
    quad(
      namedNode(`${ns6}duv`),
      namedNode(`${dcterms}creator`),
      blankNodes[1],
      namedNode(duv)
    ),
    quad(
      namedNode(`${ns6}duv`),
      namedNode(`${dcterms}creator`),
      blankNodes[2],
      namedNode(duv)
    ),
    quad(
      namedNode(`${ns6}duv`),
      namedNode(`${dcterms}description`),
      literal(`The Dataset Usage Vocabulary (DUV) is used to describe consumer experiences, citations, and feedback about datasets from the human perspective.`, 'en'),
      namedNode(duv)
    ),
    quad(
      namedNode(`${ns6}duv`),
      namedNode(`${dcterms}modified`),
      literal(`2016-08-30`, namedNode(`${xsd}date`)),
      namedNode(duv)
    ),
    quad(
      namedNode(`${ns6}duv`),
      namedNode(`${dcterms}modified`),
      literal(`2017-01-23`, namedNode(`${xsd}date`)),
      namedNode(duv)
    ),
    quad(
      namedNode(`${ns6}duv`),
      namedNode(`${dcterms}publisher`),
      namedNode(`${ns9}W3C`),
      namedNode(duv)
    ),
    quad(
      namedNode(`${ns6}duv`),
      namedNode(`${dcterms}title`),
      literal(`Dataset Usage Vocabulary`),
      namedNode(duv)
    ),
    quad(
      namedNode(`${ns6}duv`),
      namedNode(`${dcterms}type`),
      namedNode(`${ns10}Ontology`),
      namedNode(duv)
    ),
    quad(
      namedNode(`${ns6}duv`),
      namedNode(`${vann}preferredNamespacePrefix`),
      literal(`duv`),
      namedNode(duv)
    ),
    quad(
      namedNode(`${ns6}duv`),
      namedNode(`${vann}preferredNamespaceUri`),
      literal(`http://www.w3.org/ns/duv#`),
      namedNode(duv)
    ),
    quad(
      namedNode(`${ns6}duv`),
      namedNode(`${rdf}type`),
      namedNode(`${ns11}Vocabulary`),
      namedNode(duv)
    ),
    quad(
      namedNode(`${ns6}duv`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(ns12),
      namedNode(duv)
    ),
    quad(
      blankNodes[0],
      namedNode(`${foaf}name`),
      literal(`Eric G. Stephan`),
      namedNode(duv)
    ),
    quad(
      blankNodes[1],
      namedNode(`${foaf}name`),
      literal(`Bernadette Farias Lóscio`),
      namedNode(duv)
    ),
    quad(
      blankNodes[2],
      namedNode(`${foaf}name`),
      literal(`Sumit Purohit`),
      namedNode(duv)
    ),

  ]
}
