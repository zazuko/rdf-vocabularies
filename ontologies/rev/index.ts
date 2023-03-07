/* This file was automatically generated. Do not edit by hand. */

const {
  ns1,
  ns2,
  rev,
  rdf,
  dc11,
  owl,
  vann,
  rdfs,
  vs,
  ns10,
  grddl,
  ns12,
  foaf,
  ns14,
  dcmitype,
  dcterms
} = {
  'ns1': 'http://creativecommons.org/licenses/by/1.0/',
  'ns2': 'http://web.resource.org/cc/',
  'rev': 'http://purl.org/stuff/rev#',
  'rdf': 'http://www.w3.org/1999/02/22-rdf-syntax-ns#',
  'dc11': 'http://purl.org/dc/elements/1.1/',
  'owl': 'http://www.w3.org/2002/07/owl#',
  'vann': 'http://purl.org/vocab/vann/',
  'rdfs': 'http://www.w3.org/2000/01/rdf-schema#',
  'vs': 'http://www.w3.org/2003/06/sw-vocab-status/ns#',
  'ns10': 'http://vocab.org/review/',
  'grddl': 'http://www.w3.org/2003/g/data-view#',
  'ns12': 'http://danja.talis.com/xmlns/rev_2007-11-09/',
  'foaf': 'http://xmlns.com/foaf/0.1/',
  'ns14': 'http://purl.org/stuff/',
  'dcmitype': 'http://purl.org/dc/dcmitype/',
  'dcterms': 'http://purl.org/dc/terms/'
}

export default ({ literal, namedNode, quad }: import('rdf-js').DataFactory): import('rdf-js').Quad[] => {
  return [
    quad(
      namedNode(ns1),
      namedNode(`${ns2}permits`),
      namedNode(`${ns2}DerivativeWorks`),
      namedNode(rev)
    ),
    quad(
      namedNode(ns1),
      namedNode(`${ns2}permits`),
      namedNode(`${ns2}Distribution`),
      namedNode(rev)
    ),
    quad(
      namedNode(ns1),
      namedNode(`${ns2}permits`),
      namedNode(`${ns2}Reproduction`),
      namedNode(rev)
    ),
    quad(
      namedNode(ns1),
      namedNode(`${ns2}requires`),
      namedNode(`${ns2}Attribution`),
      namedNode(rev)
    ),
    quad(
      namedNode(ns1),
      namedNode(`${ns2}requires`),
      namedNode(`${ns2}Notice`),
      namedNode(rev)
    ),
    quad(
      namedNode(ns1),
      namedNode(`${rdf}type`),
      namedNode(`${ns2}License`),
      namedNode(rev)
    ),
    quad(
      namedNode(`${dc11}date`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}DatatypeProperty`),
      namedNode(rev)
    ),
    quad(
      namedNode(`${dc11}description`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}DatatypeProperty`),
      namedNode(rev)
    ),
    quad(
      namedNode(`${dc11}title`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}DatatypeProperty`),
      namedNode(rev)
    ),
    quad(
      namedNode(rev),
      namedNode(`${dc11}date`),
      literal(`2007-11-08`),
      namedNode(rev)
    ),
    quad(
      namedNode(rev),
      namedNode(`${dc11}description`),
      literal(`Vocabulary for expressing reviews and ratings using the Resource Description Framework. It is compatible with hReview and conforms to OWL Lite`, 'en'),
      namedNode(rev)
    ),
    quad(
      namedNode(rev),
      namedNode(`${dc11}description`),
      literal(`使用资源描述框架表示评论和评级的词汇表。它与hReview兼容，并符合OWL Lite。`, 'zh-cn'),
      namedNode(rev)
    ),
    quad(
      namedNode(rev),
      namedNode(`${vann}preferredNamespacePrefix`),
      literal(`rev`),
      namedNode(rev)
    ),
    quad(
      namedNode(rev),
      namedNode(`${vann}preferredNamespaceUri`),
      literal(`http://purl.org/stuff/rev#`),
      namedNode(rev)
    ),
    quad(
      namedNode(rev),
      namedNode(`${rdf}type`),
      namedNode(`${owl}Ontology`),
      namedNode(rev)
    ),
    quad(
      namedNode(rev),
      namedNode(`${rdf}type`),
      namedNode(`${owl}Thing`),
      namedNode(rev)
    ),
    quad(
      namedNode(rev),
      namedNode(`${rdfs}label`),
      literal(`RDF Review Vocabulary`, 'en'),
      namedNode(rev)
    ),
    quad(
      namedNode(rev),
      namedNode(`${rdfs}label`),
      literal(`RDF评论词汇表`, 'zh-cn'),
      namedNode(rev)
    ),
    quad(
      namedNode(rev),
      namedNode(`${vs}userdocs`),
      namedNode(`${ns10}html`),
      namedNode(rev)
    ),
    quad(
      namedNode(rev),
      namedNode(`${grddl}profileTransformation`),
      namedNode(`${ns12}hreview2rdfxml.xsl`),
      namedNode(rev)
    ),
    quad(
      namedNode(`${rev}Comment`),
      namedNode(`${rdf}type`),
      namedNode(`${rdfs}Class`),
      namedNode(rev)
    ),
    quad(
      namedNode(`${rev}Comment`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}Class`),
      namedNode(rev)
    ),
    quad(
      namedNode(`${rev}Comment`),
      namedNode(`${rdfs}comment`),
      literal(`A comment on a review`, 'en'),
      namedNode(rev)
    ),
    quad(
      namedNode(`${rev}Comment`),
      namedNode(`${rdfs}comment`),
      literal(`关于一个评论的注释。`, 'zh-cn'),
      namedNode(rev)
    ),
    quad(
      namedNode(`${rev}Comment`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(rev),
      namedNode(rev)
    ),
    quad(
      namedNode(`${rev}Comment`),
      namedNode(`${rdfs}label`),
      literal(`Comment`, 'en'),
      namedNode(rev)
    ),
    quad(
      namedNode(`${rev}Comment`),
      namedNode(`${rdfs}label`),
      literal(`注释`, 'zh-cn'),
      namedNode(rev)
    ),
    quad(
      namedNode(`${rev}Comment`),
      namedNode(`${vs}moreinfo`),
      literal(`proposed by iterating.com`, 'en'),
      namedNode(rev)
    ),
    quad(
      namedNode(`${rev}Comment`),
      namedNode(`${vs}moreinfo`),
      literal(`由iterating.com提议。`, 'zh-cn'),
      namedNode(rev)
    ),
    quad(
      namedNode(`${rev}Comment`),
      namedNode(`${vs}term_status`),
      literal(`deprecated`, 'en'),
      namedNode(rev)
    ),
    quad(
      namedNode(`${rev}Comment`),
      namedNode(`${vs}term_status`),
      literal(`已过时`, 'zh-cn'),
      namedNode(rev)
    ),
    quad(
      namedNode(`${rev}Feedback`),
      namedNode(`${rdf}type`),
      namedNode(`${rdfs}Class`),
      namedNode(rev)
    ),
    quad(
      namedNode(`${rev}Feedback`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}Class`),
      namedNode(rev)
    ),
    quad(
      namedNode(`${rev}Feedback`),
      namedNode(`${rdfs}comment`),
      literal(`Feedback on the review. Expresses whether the review was useful or not`, 'en'),
      namedNode(rev)
    ),
    quad(
      namedNode(`${rev}Feedback`),
      namedNode(`${rdfs}comment`),
      literal(`对评论的反馈，表达了这条评论是否有用。`, 'zh-cn'),
      namedNode(rev)
    ),
    quad(
      namedNode(`${rev}Feedback`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(rev),
      namedNode(rev)
    ),
    quad(
      namedNode(`${rev}Feedback`),
      namedNode(`${rdfs}label`),
      literal(`Feedback`, 'en'),
      namedNode(rev)
    ),
    quad(
      namedNode(`${rev}Feedback`),
      namedNode(`${rdfs}label`),
      literal(`反馈`, 'zh-cn'),
      namedNode(rev)
    ),
    quad(
      namedNode(`${rev}Feedback`),
      namedNode(`${vs}moreinfo`),
      literal(`proposed by iterating.com`, 'en'),
      namedNode(rev)
    ),
    quad(
      namedNode(`${rev}Feedback`),
      namedNode(`${vs}moreinfo`),
      literal(`由iterating.com提议。`, 'zh-cn'),
      namedNode(rev)
    ),
    quad(
      namedNode(`${rev}Feedback`),
      namedNode(`${vs}term_status`),
      literal(`deprecated`, 'en'),
      namedNode(rev)
    ),
    quad(
      namedNode(`${rev}Feedback`),
      namedNode(`${vs}term_status`),
      literal(`testing`, 'en'),
      namedNode(rev)
    ),
    quad(
      namedNode(`${rev}Feedback`),
      namedNode(`${vs}term_status`),
      literal(`已过时`, 'zh-cn'),
      namedNode(rev)
    ),
    quad(
      namedNode(`${rev}Feedback`),
      namedNode(`${vs}term_status`),
      literal(`测试中`, 'zh-cn'),
      namedNode(rev)
    ),
    quad(
      namedNode(`${rev}Review`),
      namedNode(`${rdf}type`),
      namedNode(`${rdfs}Class`),
      namedNode(rev)
    ),
    quad(
      namedNode(`${rev}Review`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}Class`),
      namedNode(rev)
    ),
    quad(
      namedNode(`${rev}Review`),
      namedNode(`${rdfs}comment`),
      literal(`A review of an work`, 'en'),
      namedNode(rev)
    ),
    quad(
      namedNode(`${rev}Review`),
      namedNode(`${rdfs}comment`),
      literal(`对一项事物的评论。`, 'zh-cn'),
      namedNode(rev)
    ),
    quad(
      namedNode(`${rev}Review`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(rev),
      namedNode(rev)
    ),
    quad(
      namedNode(`${rev}Review`),
      namedNode(`${rdfs}label`),
      literal(`Review`, 'en'),
      namedNode(rev)
    ),
    quad(
      namedNode(`${rev}Review`),
      namedNode(`${rdfs}label`),
      literal(`评论`, 'zh-cn'),
      namedNode(rev)
    ),
    quad(
      namedNode(`${rev}Review`),
      namedNode(`${vs}moreinfo`),
      literal(`core term`, 'en'),
      namedNode(rev)
    ),
    quad(
      namedNode(`${rev}Review`),
      namedNode(`${vs}moreinfo`),
      literal(`核心术语`, 'zh-cn'),
      namedNode(rev)
    ),
    quad(
      namedNode(`${rev}Review`),
      namedNode(`${vs}term_status`),
      literal(`stable`, 'en'),
      namedNode(rev)
    ),
    quad(
      namedNode(`${rev}Review`),
      namedNode(`${vs}term_status`),
      literal(`稳定`, 'zh-cn'),
      namedNode(rev)
    ),
    quad(
      namedNode(`${rev}commenter`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(rev)
    ),
    quad(
      namedNode(`${rev}commenter`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}ObjectProperty`),
      namedNode(rev)
    ),
    quad(
      namedNode(`${rev}commenter`),
      namedNode(`${rdfs}comment`),
      literal(`The commenter on the review`, 'en'),
      namedNode(rev)
    ),
    quad(
      namedNode(`${rev}commenter`),
      namedNode(`${rdfs}comment`),
      literal(`对评论注释的人。`, 'zh-cn'),
      namedNode(rev)
    ),
    quad(
      namedNode(`${rev}commenter`),
      namedNode(`${rdfs}domain`),
      namedNode(`${rev}Comment`),
      namedNode(rev)
    ),
    quad(
      namedNode(`${rev}commenter`),
      namedNode(`${rdfs}domain`),
      namedNode(`${rev}Feedback`),
      namedNode(rev)
    ),
    quad(
      namedNode(`${rev}commenter`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(rev),
      namedNode(rev)
    ),
    quad(
      namedNode(`${rev}commenter`),
      namedNode(`${rdfs}label`),
      literal(`commenter`, 'en'),
      namedNode(rev)
    ),
    quad(
      namedNode(`${rev}commenter`),
      namedNode(`${rdfs}label`),
      literal(`注释者`, 'zh-cn'),
      namedNode(rev)
    ),
    quad(
      namedNode(`${rev}commenter`),
      namedNode(`${rdfs}range`),
      namedNode(`${foaf}Agent`),
      namedNode(rev)
    ),
    quad(
      namedNode(`${rev}commenter`),
      namedNode(`${vs}moreinfo`),
      literal(`proposed by iterating.com`, 'en'),
      namedNode(rev)
    ),
    quad(
      namedNode(`${rev}commenter`),
      namedNode(`${vs}moreinfo`),
      literal(`由iterating.com提议。`, 'zh-cn'),
      namedNode(rev)
    ),
    quad(
      namedNode(`${rev}commenter`),
      namedNode(`${vs}term_status`),
      literal(`deprecated`, 'en'),
      namedNode(rev)
    ),
    quad(
      namedNode(`${rev}commenter`),
      namedNode(`${vs}term_status`),
      literal(`已过时`, 'zh-cn'),
      namedNode(rev)
    ),
    quad(
      namedNode(`${rev}hasComment`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(rev)
    ),
    quad(
      namedNode(`${rev}hasComment`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}ObjectProperty`),
      namedNode(rev)
    ),
    quad(
      namedNode(`${rev}hasComment`),
      namedNode(`${rdfs}comment`),
      literal(`Used to associate a review with a comment on the review`, 'en'),
      namedNode(rev)
    ),
    quad(
      namedNode(`${rev}hasComment`),
      namedNode(`${rdfs}comment`),
      literal(`用于关联一条评论和一条注释。`, 'zh-cn'),
      namedNode(rev)
    ),
    quad(
      namedNode(`${rev}hasComment`),
      namedNode(`${rdfs}domain`),
      namedNode(`${rev}Review`),
      namedNode(rev)
    ),
    quad(
      namedNode(`${rev}hasComment`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(rev),
      namedNode(rev)
    ),
    quad(
      namedNode(`${rev}hasComment`),
      namedNode(`${rdfs}label`),
      literal(`hasComment`, 'en'),
      namedNode(rev)
    ),
    quad(
      namedNode(`${rev}hasComment`),
      namedNode(`${rdfs}label`),
      literal(`有注释`, 'zh-cn'),
      namedNode(rev)
    ),
    quad(
      namedNode(`${rev}hasComment`),
      namedNode(`${rdfs}range`),
      namedNode(`${rev}Comment`),
      namedNode(rev)
    ),
    quad(
      namedNode(`${rev}hasComment`),
      namedNode(`${vs}moreinfo`),
      literal(`proposed by iterating.com`, 'en'),
      namedNode(rev)
    ),
    quad(
      namedNode(`${rev}hasComment`),
      namedNode(`${vs}moreinfo`),
      literal(`由iterating.com提议。`, 'zh-cn'),
      namedNode(rev)
    ),
    quad(
      namedNode(`${rev}hasComment`),
      namedNode(`${vs}term_status`),
      literal(`deprecated`, 'en'),
      namedNode(rev)
    ),
    quad(
      namedNode(`${rev}hasComment`),
      namedNode(`${vs}term_status`),
      literal(`已过时`, 'zh-cn'),
      namedNode(rev)
    ),
    quad(
      namedNode(`${rev}hasFeedback`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(rev)
    ),
    quad(
      namedNode(`${rev}hasFeedback`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}ObjectProperty`),
      namedNode(rev)
    ),
    quad(
      namedNode(`${rev}hasFeedback`),
      namedNode(`${rdfs}comment`),
      literal(`Associates a review with a feedback on the review`, 'en'),
      namedNode(rev)
    ),
    quad(
      namedNode(`${rev}hasFeedback`),
      namedNode(`${rdfs}comment`),
      literal(`关联一条反馈和一条评论。`, 'zh-cn'),
      namedNode(rev)
    ),
    quad(
      namedNode(`${rev}hasFeedback`),
      namedNode(`${rdfs}domain`),
      namedNode(`${rev}Review`),
      namedNode(rev)
    ),
    quad(
      namedNode(`${rev}hasFeedback`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(rev),
      namedNode(rev)
    ),
    quad(
      namedNode(`${rev}hasFeedback`),
      namedNode(`${rdfs}label`),
      literal(`hasFeedback`, 'en'),
      namedNode(rev)
    ),
    quad(
      namedNode(`${rev}hasFeedback`),
      namedNode(`${rdfs}label`),
      literal(`有反馈`, 'zh-cn'),
      namedNode(rev)
    ),
    quad(
      namedNode(`${rev}hasFeedback`),
      namedNode(`${rdfs}range`),
      namedNode(`${rev}Feedback`),
      namedNode(rev)
    ),
    quad(
      namedNode(`${rev}hasFeedback`),
      namedNode(`${vs}moreinfo`),
      literal(`proposed by iterating.com`, 'en'),
      namedNode(rev)
    ),
    quad(
      namedNode(`${rev}hasFeedback`),
      namedNode(`${vs}moreinfo`),
      literal(`由iterating.com提议。`, 'zh-cn'),
      namedNode(rev)
    ),
    quad(
      namedNode(`${rev}hasFeedback`),
      namedNode(`${vs}term_status`),
      literal(`deprecated`, 'en'),
      namedNode(rev)
    ),
    quad(
      namedNode(`${rev}hasFeedback`),
      namedNode(`${vs}term_status`),
      literal(`已过时`, 'zh-cn'),
      namedNode(rev)
    ),
    quad(
      namedNode(`${rev}hasReview`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(rev)
    ),
    quad(
      namedNode(`${rev}hasReview`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}ObjectProperty`),
      namedNode(rev)
    ),
    quad(
      namedNode(`${rev}hasReview`),
      namedNode(`${rdfs}comment`),
      literal(`Associates a work with a a review`, 'en'),
      namedNode(rev)
    ),
    quad(
      namedNode(`${rev}hasReview`),
      namedNode(`${rdfs}comment`),
      literal(`关联一个事物和一条评论。`, 'zh-cn'),
      namedNode(rev)
    ),
    quad(
      namedNode(`${rev}hasReview`),
      namedNode(`${rdfs}domain`),
      namedNode(`${rdfs}Resource`),
      namedNode(rev)
    ),
    quad(
      namedNode(`${rev}hasReview`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(rev),
      namedNode(rev)
    ),
    quad(
      namedNode(`${rev}hasReview`),
      namedNode(`${rdfs}label`),
      literal(`has Review`, 'en'),
      namedNode(rev)
    ),
    quad(
      namedNode(`${rev}hasReview`),
      namedNode(`${rdfs}label`),
      literal(`有评论`, 'zh-cn'),
      namedNode(rev)
    ),
    quad(
      namedNode(`${rev}hasReview`),
      namedNode(`${rdfs}range`),
      namedNode(`${rev}Review`),
      namedNode(rev)
    ),
    quad(
      namedNode(`${rev}hasReview`),
      namedNode(`${vs}moreinfo`),
      literal(`core term`, 'en'),
      namedNode(rev)
    ),
    quad(
      namedNode(`${rev}hasReview`),
      namedNode(`${vs}moreinfo`),
      literal(`核心术语`, 'zh-cn'),
      namedNode(rev)
    ),
    quad(
      namedNode(`${rev}hasReview`),
      namedNode(`${vs}term_status`),
      literal(`stable`, 'en'),
      namedNode(rev)
    ),
    quad(
      namedNode(`${rev}hasReview`),
      namedNode(`${vs}term_status`),
      literal(`稳定`, 'zh-cn'),
      namedNode(rev)
    ),
    quad(
      namedNode(`${rev}maxRating`),
      namedNode(`${dc11}description`),
      literal(`Maximum value for rating property`, 'en'),
      namedNode(rev)
    ),
    quad(
      namedNode(`${rev}maxRating`),
      namedNode(`${dc11}description`),
      literal(`评级属性的最大值。`, 'zh-cn'),
      namedNode(rev)
    ),
    quad(
      namedNode(`${rev}maxRating`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(rev)
    ),
    quad(
      namedNode(`${rev}maxRating`),
      namedNode(`${rdfs}comment`),
      literal(`A numeric value`, 'en'),
      namedNode(rev)
    ),
    quad(
      namedNode(`${rev}maxRating`),
      namedNode(`${rdfs}comment`),
      literal(`一个数值`, 'zh-cn'),
      namedNode(rev)
    ),
    quad(
      namedNode(`${rev}maxRating`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(rev),
      namedNode(rev)
    ),
    quad(
      namedNode(`${rev}maxRating`),
      namedNode(`${rdfs}label`),
      literal(`max Rating`, 'en'),
      namedNode(rev)
    ),
    quad(
      namedNode(`${rev}maxRating`),
      namedNode(`${rdfs}label`),
      literal(`最大评级`, 'zh-cn'),
      namedNode(rev)
    ),
    quad(
      namedNode(`${rev}maxRating`),
      namedNode(`${vs}moreinfo`),
      literal(`Introduced by request of Revyu.com`, 'en'),
      namedNode(rev)
    ),
    quad(
      namedNode(`${rev}maxRating`),
      namedNode(`${vs}moreinfo`),
      literal(`根据Revyu.com的要求引进。`, 'zh-cn'),
      namedNode(rev)
    ),
    quad(
      namedNode(`${rev}maxRating`),
      namedNode(`${vs}term_status`),
      literal(`stable`, 'en'),
      namedNode(rev)
    ),
    quad(
      namedNode(`${rev}maxRating`),
      namedNode(`${vs}term_status`),
      literal(`稳定`, 'zh-cn'),
      namedNode(rev)
    ),
    quad(
      namedNode(`${rev}minRating`),
      namedNode(`${dc11}description`),
      literal(`Minimum value for rating property`, 'en'),
      namedNode(rev)
    ),
    quad(
      namedNode(`${rev}minRating`),
      namedNode(`${dc11}description`),
      literal(`评级属性的最小值。`, 'zh-cn'),
      namedNode(rev)
    ),
    quad(
      namedNode(`${rev}minRating`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(rev)
    ),
    quad(
      namedNode(`${rev}minRating`),
      namedNode(`${rdfs}comment`),
      literal(`A numeric value`, 'en'),
      namedNode(rev)
    ),
    quad(
      namedNode(`${rev}minRating`),
      namedNode(`${rdfs}comment`),
      literal(`一个数值`, 'zh-cn'),
      namedNode(rev)
    ),
    quad(
      namedNode(`${rev}minRating`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(rev),
      namedNode(rev)
    ),
    quad(
      namedNode(`${rev}minRating`),
      namedNode(`${rdfs}label`),
      literal(`min Rating`, 'en'),
      namedNode(rev)
    ),
    quad(
      namedNode(`${rev}minRating`),
      namedNode(`${rdfs}label`),
      literal(`最小评级`, 'zh-cn'),
      namedNode(rev)
    ),
    quad(
      namedNode(`${rev}minRating`),
      namedNode(`${vs}moreinfo`),
      literal(`Introduced by request of Revyu.com`, 'en'),
      namedNode(rev)
    ),
    quad(
      namedNode(`${rev}minRating`),
      namedNode(`${vs}moreinfo`),
      literal(`根据Revyu.com的要求引进。`, 'zh-cn'),
      namedNode(rev)
    ),
    quad(
      namedNode(`${rev}minRating`),
      namedNode(`${vs}term_status`),
      literal(`stable`, 'en'),
      namedNode(rev)
    ),
    quad(
      namedNode(`${rev}minRating`),
      namedNode(`${vs}term_status`),
      literal(`稳定`, 'zh-cn'),
      namedNode(rev)
    ),
    quad(
      namedNode(`${rev}positiveVotes`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(rev)
    ),
    quad(
      namedNode(`${rev}positiveVotes`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}DatatypeProperty`),
      namedNode(rev)
    ),
    quad(
      namedNode(`${rev}positiveVotes`),
      namedNode(`${rdfs}comment`),
      literal(`Number of positive usefulness votes (integer)`, 'en'),
      namedNode(rev)
    ),
    quad(
      namedNode(`${rev}positiveVotes`),
      namedNode(`${rdfs}comment`),
      literal(`有效的支持票数（整数）。`, 'zh-cn'),
      namedNode(rev)
    ),
    quad(
      namedNode(`${rev}positiveVotes`),
      namedNode(`${rdfs}domain`),
      namedNode(`${rev}Review`),
      namedNode(rev)
    ),
    quad(
      namedNode(`${rev}positiveVotes`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(rev),
      namedNode(rev)
    ),
    quad(
      namedNode(`${rev}positiveVotes`),
      namedNode(`${rdfs}label`),
      literal(`positiveVotes`, 'en'),
      namedNode(rev)
    ),
    quad(
      namedNode(`${rev}positiveVotes`),
      namedNode(`${rdfs}label`),
      literal(`支持票数`, 'zh-cn'),
      namedNode(rev)
    ),
    quad(
      namedNode(`${rev}positiveVotes`),
      namedNode(`${rdfs}range`),
      namedNode(`${rdfs}Literal`),
      namedNode(rev)
    ),
    quad(
      namedNode(`${rev}positiveVotes`),
      namedNode(`${vs}moreinfo`),
      literal(`proposed by iterating.com`, 'en'),
      namedNode(rev)
    ),
    quad(
      namedNode(`${rev}positiveVotes`),
      namedNode(`${vs}moreinfo`),
      literal(`由iterating.com提议。`, 'zh-cn'),
      namedNode(rev)
    ),
    quad(
      namedNode(`${rev}positiveVotes`),
      namedNode(`${vs}term_status`),
      literal(`deprecated`, 'en'),
      namedNode(rev)
    ),
    quad(
      namedNode(`${rev}positiveVotes`),
      namedNode(`${vs}term_status`),
      literal(`已过时`, 'zh-cn'),
      namedNode(rev)
    ),
    quad(
      namedNode(`${rev}rating`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(rev)
    ),
    quad(
      namedNode(`${rev}rating`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}DatatypeProperty`),
      namedNode(rev)
    ),
    quad(
      namedNode(`${rev}rating`),
      namedNode(`${rdfs}comment`),
      literal(`A numeric value`, 'en'),
      namedNode(rev)
    ),
    quad(
      namedNode(`${rev}rating`),
      namedNode(`${rdfs}comment`),
      literal(`一个数值。`, 'zh-cn'),
      namedNode(rev)
    ),
    quad(
      namedNode(`${rev}rating`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(rev),
      namedNode(rev)
    ),
    quad(
      namedNode(`${rev}rating`),
      namedNode(`${rdfs}label`),
      literal(`rating`, 'en'),
      namedNode(rev)
    ),
    quad(
      namedNode(`${rev}rating`),
      namedNode(`${rdfs}label`),
      literal(`评级`, 'zh-cn'),
      namedNode(rev)
    ),
    quad(
      namedNode(`${rev}rating`),
      namedNode(`${vs}moreinfo`),
      literal(`core term`, 'en'),
      namedNode(rev)
    ),
    quad(
      namedNode(`${rev}rating`),
      namedNode(`${vs}moreinfo`),
      literal(`核心术语`, 'zh-cn'),
      namedNode(rev)
    ),
    quad(
      namedNode(`${rev}rating`),
      namedNode(`${vs}term_status`),
      literal(`stable`, 'en'),
      namedNode(rev)
    ),
    quad(
      namedNode(`${rev}rating`),
      namedNode(`${vs}term_status`),
      literal(`稳定`, 'zh-cn'),
      namedNode(rev)
    ),
    quad(
      namedNode(`${rev}reviewer`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(rev)
    ),
    quad(
      namedNode(`${rev}reviewer`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}ObjectProperty`),
      namedNode(rev)
    ),
    quad(
      namedNode(`${rev}reviewer`),
      namedNode(`${rdfs}comment`),
      literal(`The person that has written the review`, 'en'),
      namedNode(rev)
    ),
    quad(
      namedNode(`${rev}reviewer`),
      namedNode(`${rdfs}comment`),
      literal(`撰写评论的人。`, 'zh-cn'),
      namedNode(rev)
    ),
    quad(
      namedNode(`${rev}reviewer`),
      namedNode(`${rdfs}domain`),
      namedNode(`${rev}Review`),
      namedNode(rev)
    ),
    quad(
      namedNode(`${rev}reviewer`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(rev),
      namedNode(rev)
    ),
    quad(
      namedNode(`${rev}reviewer`),
      namedNode(`${rdfs}label`),
      literal(`reviewer`, 'en'),
      namedNode(rev)
    ),
    quad(
      namedNode(`${rev}reviewer`),
      namedNode(`${rdfs}label`),
      literal(`评论者`, 'zh-cn'),
      namedNode(rev)
    ),
    quad(
      namedNode(`${rev}reviewer`),
      namedNode(`${rdfs}range`),
      namedNode(`${foaf}Person`),
      namedNode(rev)
    ),
    quad(
      namedNode(`${rev}reviewer`),
      namedNode(`${vs}moreinfo`),
      literal(`core term`, 'en'),
      namedNode(rev)
    ),
    quad(
      namedNode(`${rev}reviewer`),
      namedNode(`${vs}moreinfo`),
      literal(`核心术语`, 'zh-cn'),
      namedNode(rev)
    ),
    quad(
      namedNode(`${rev}reviewer`),
      namedNode(`${vs}term_status`),
      literal(`stable`, 'en'),
      namedNode(rev)
    ),
    quad(
      namedNode(`${rev}reviewer`),
      namedNode(`${vs}term_status`),
      literal(`稳定`, 'zh-cn'),
      namedNode(rev)
    ),
    quad(
      namedNode(`${rev}text`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(rev)
    ),
    quad(
      namedNode(`${rev}text`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}DatatypeProperty`),
      namedNode(rev)
    ),
    quad(
      namedNode(`${rev}text`),
      namedNode(`${rdfs}comment`),
      literal(`The text of the review`, 'en'),
      namedNode(rev)
    ),
    quad(
      namedNode(`${rev}text`),
      namedNode(`${rdfs}comment`),
      literal(`评论的文本。`, 'zh-cn'),
      namedNode(rev)
    ),
    quad(
      namedNode(`${rev}text`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(rev),
      namedNode(rev)
    ),
    quad(
      namedNode(`${rev}text`),
      namedNode(`${rdfs}label`),
      literal(`text`, 'en'),
      namedNode(rev)
    ),
    quad(
      namedNode(`${rev}text`),
      namedNode(`${rdfs}label`),
      literal(`文本`, 'zh-cn'),
      namedNode(rev)
    ),
    quad(
      namedNode(`${rev}text`),
      namedNode(`${vs}moreinfo`),
      literal(`core term`, 'en'),
      namedNode(rev)
    ),
    quad(
      namedNode(`${rev}text`),
      namedNode(`${vs}moreinfo`),
      literal(`核心术语`, 'zh-cn'),
      namedNode(rev)
    ),
    quad(
      namedNode(`${rev}text`),
      namedNode(`${vs}term_status`),
      literal(`stable`, 'en'),
      namedNode(rev)
    ),
    quad(
      namedNode(`${rev}text`),
      namedNode(`${vs}term_status`),
      literal(`稳定`, 'zh-cn'),
      namedNode(rev)
    ),
    quad(
      namedNode(`${rev}title`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(rev)
    ),
    quad(
      namedNode(`${rev}title`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}DatatypeProperty`),
      namedNode(rev)
    ),
    quad(
      namedNode(`${rev}title`),
      namedNode(`${rdfs}comment`),
      literal(`The title of the review`, 'en'),
      namedNode(rev)
    ),
    quad(
      namedNode(`${rev}title`),
      namedNode(`${rdfs}comment`),
      literal(`评论的标题。`, 'zh-cn'),
      namedNode(rev)
    ),
    quad(
      namedNode(`${rev}title`),
      namedNode(`${rdfs}domain`),
      namedNode(`${rev}Review`),
      namedNode(rev)
    ),
    quad(
      namedNode(`${rev}title`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(rev),
      namedNode(rev)
    ),
    quad(
      namedNode(`${rev}title`),
      namedNode(`${rdfs}label`),
      literal(`title`, 'en'),
      namedNode(rev)
    ),
    quad(
      namedNode(`${rev}title`),
      namedNode(`${rdfs}label`),
      literal(`标题`, 'zh-cn'),
      namedNode(rev)
    ),
    quad(
      namedNode(`${rev}title`),
      namedNode(`${rdfs}range`),
      namedNode(`${rdfs}Literal`),
      namedNode(rev)
    ),
    quad(
      namedNode(`${rev}title`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${dc11}title`),
      namedNode(rev)
    ),
    quad(
      namedNode(`${rev}title`),
      namedNode(`${vs}moreinfo`),
      literal(`proposed by iterating.com`, 'en'),
      namedNode(rev)
    ),
    quad(
      namedNode(`${rev}title`),
      namedNode(`${vs}moreinfo`),
      literal(`由iterating.com提议。`, 'zh-cn'),
      namedNode(rev)
    ),
    quad(
      namedNode(`${rev}title`),
      namedNode(`${vs}term_status`),
      literal(`deprecated`, 'en'),
      namedNode(rev)
    ),
    quad(
      namedNode(`${rev}title`),
      namedNode(`${vs}term_status`),
      literal(`已过时`, 'zh-cn'),
      namedNode(rev)
    ),
    quad(
      namedNode(`${rev}totalVotes`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(rev)
    ),
    quad(
      namedNode(`${rev}totalVotes`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}DatatypeProperty`),
      namedNode(rev)
    ),
    quad(
      namedNode(`${rev}totalVotes`),
      namedNode(`${rdfs}comment`),
      literal(`Number of usefulness votes (integer)`, 'en'),
      namedNode(rev)
    ),
    quad(
      namedNode(`${rev}totalVotes`),
      namedNode(`${rdfs}comment`),
      literal(`有效的投票数（整数）。`, 'zh-cn'),
      namedNode(rev)
    ),
    quad(
      namedNode(`${rev}totalVotes`),
      namedNode(`${rdfs}domain`),
      namedNode(`${rev}Review`),
      namedNode(rev)
    ),
    quad(
      namedNode(`${rev}totalVotes`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(rev),
      namedNode(rev)
    ),
    quad(
      namedNode(`${rev}totalVotes`),
      namedNode(`${rdfs}label`),
      literal(`totalVotes`, 'en'),
      namedNode(rev)
    ),
    quad(
      namedNode(`${rev}totalVotes`),
      namedNode(`${rdfs}label`),
      literal(`总投票数`, 'zh-cn'),
      namedNode(rev)
    ),
    quad(
      namedNode(`${rev}totalVotes`),
      namedNode(`${rdfs}range`),
      namedNode(`${rdfs}Literal`),
      namedNode(rev)
    ),
    quad(
      namedNode(`${rev}totalVotes`),
      namedNode(`${vs}moreinfo`),
      literal(`proposed by iterating.com`, 'en'),
      namedNode(rev)
    ),
    quad(
      namedNode(`${rev}totalVotes`),
      namedNode(`${vs}moreinfo`),
      literal(`由iterating.com提议。`, 'zh-cn'),
      namedNode(rev)
    ),
    quad(
      namedNode(`${rev}totalVotes`),
      namedNode(`${vs}term_status`),
      literal(`deprecated`, 'en'),
      namedNode(rev)
    ),
    quad(
      namedNode(`${rev}totalVotes`),
      namedNode(`${vs}term_status`),
      literal(`已过时`, 'zh-cn'),
      namedNode(rev)
    ),
    quad(
      namedNode(`${rev}type`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(rev)
    ),
    quad(
      namedNode(`${rev}type`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}DatatypeProperty`),
      namedNode(rev)
    ),
    quad(
      namedNode(`${rev}type`),
      namedNode(`${rdfs}comment`),
      literal(`The type of media of a work under review`, 'en'),
      namedNode(rev)
    ),
    quad(
      namedNode(`${rev}type`),
      namedNode(`${rdfs}comment`),
      literal(`在评论中的事物的媒体类型。`, 'zh-cn'),
      namedNode(rev)
    ),
    quad(
      namedNode(`${rev}type`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(rev),
      namedNode(rev)
    ),
    quad(
      namedNode(`${rev}type`),
      namedNode(`${rdfs}label`),
      literal(`type`, 'en'),
      namedNode(rev)
    ),
    quad(
      namedNode(`${rev}type`),
      namedNode(`${rdfs}label`),
      literal(`类型`, 'zh-cn'),
      namedNode(rev)
    ),
    quad(
      namedNode(`${rev}type`),
      namedNode(`${vs}moreinfo`),
      literal(`core term`, 'en'),
      namedNode(rev)
    ),
    quad(
      namedNode(`${rev}type`),
      namedNode(`${vs}moreinfo`),
      literal(`核心术语`, 'zh-cn'),
      namedNode(rev)
    ),
    quad(
      namedNode(`${rev}type`),
      namedNode(`${vs}term_status`),
      literal(`deprecated`, 'en'),
      namedNode(rev)
    ),
    quad(
      namedNode(`${rev}type`),
      namedNode(`${vs}term_status`),
      literal(`已过时`, 'zh-cn'),
      namedNode(rev)
    ),
    quad(
      namedNode(`${ns14}rev`),
      namedNode(`${dc11}type`),
      namedNode(`${dcmitype}Text`),
      namedNode(rev)
    ),
    quad(
      namedNode(`${ns14}rev`),
      namedNode(`${ns2}license`),
      namedNode(ns1),
      namedNode(rev)
    ),
    quad(
      namedNode(`${ns14}rev`),
      namedNode(`${rdf}type`),
      namedNode(`${ns2}Work`),
      namedNode(rev)
    ),
    quad(
      namedNode(`${ns10}terms.html`),
      namedNode(`${dc11}format`),
      literal(`text/html`),
      namedNode(rev)
    ),
    quad(
      namedNode(`${ns10}terms.html`),
      namedNode(`${rdf}type`),
      namedNode(`${dcmitype}Text`),
      namedNode(rev)
    ),
    quad(
      namedNode(`${ns10}terms.html`),
      namedNode(`${rdf}type`),
      namedNode(`${foaf}Document`),
      namedNode(rev)
    ),
    quad(
      namedNode(`${ns10}terms.html`),
      namedNode(`${rdfs}label`),
      literal(`HTML`, 'en'),
      namedNode(rev)
    ),
    quad(
      namedNode(`${ns10}terms.html`),
      namedNode(`${rdfs}label`),
      literal(`HTML`, 'zh-cn'),
      namedNode(rev)
    ),
    quad(
      namedNode(`${ns10}terms.json`),
      namedNode(`${dc11}format`),
      literal(`application/json`),
      namedNode(rev)
    ),
    quad(
      namedNode(`${ns10}terms.json`),
      namedNode(`${rdf}type`),
      namedNode(`${dcmitype}Text`),
      namedNode(rev)
    ),
    quad(
      namedNode(`${ns10}terms.json`),
      namedNode(`${rdf}type`),
      namedNode(`${foaf}Document`),
      namedNode(rev)
    ),
    quad(
      namedNode(`${ns10}terms.json`),
      namedNode(`${rdfs}label`),
      literal(`JSON`, 'en'),
      namedNode(rev)
    ),
    quad(
      namedNode(`${ns10}terms.json`),
      namedNode(`${rdfs}label`),
      literal(`JSON`, 'zh-cn'),
      namedNode(rev)
    ),
    quad(
      namedNode(`${ns10}terms.rdf`),
      namedNode(`${dcterms}hasFormat`),
      namedNode(`${ns10}terms.html`),
      namedNode(rev)
    ),
    quad(
      namedNode(`${ns10}terms.rdf`),
      namedNode(`${dcterms}hasFormat`),
      namedNode(`${ns10}terms.json`),
      namedNode(rev)
    ),
    quad(
      namedNode(`${ns10}terms.rdf`),
      namedNode(`${dcterms}hasFormat`),
      namedNode(`${ns10}terms.turtle`),
      namedNode(rev)
    ),
    quad(
      namedNode(`${ns10}terms.rdf`),
      namedNode(`${rdf}type`),
      namedNode(`${dcmitype}Text`),
      namedNode(rev)
    ),
    quad(
      namedNode(`${ns10}terms.rdf`),
      namedNode(`${rdf}type`),
      namedNode(`${foaf}Document`),
      namedNode(rev)
    ),
    quad(
      namedNode(`${ns10}terms.rdf`),
      namedNode(`${foaf}primaryTopic`),
      namedNode(rev),
      namedNode(rev)
    ),
    quad(
      namedNode(`${ns10}terms.rdf`),
      namedNode(`${foaf}topic`),
      namedNode(rev),
      namedNode(rev)
    ),
    quad(
      namedNode(`${ns10}terms.turtle`),
      namedNode(`${dc11}format`),
      literal(`text/plain`),
      namedNode(rev)
    ),
    quad(
      namedNode(`${ns10}terms.turtle`),
      namedNode(`${rdf}type`),
      namedNode(`${dcmitype}Text`),
      namedNode(rev)
    ),
    quad(
      namedNode(`${ns10}terms.turtle`),
      namedNode(`${rdf}type`),
      namedNode(`${foaf}Document`),
      namedNode(rev)
    ),
    quad(
      namedNode(`${ns10}terms.turtle`),
      namedNode(`${rdfs}label`),
      literal(`Turtle`, 'en'),
      namedNode(rev)
    ),
    quad(
      namedNode(`${ns10}terms.turtle`),
      namedNode(`${rdfs}label`),
      literal(`Turtle`, 'zh-cn'),
      namedNode(rev)
    ),
    quad(
      namedNode(`${rdfs}Class`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}Class`),
      namedNode(rev)
    ),
    quad(
      namedNode(`${rdfs}Resource`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}Class`),
      namedNode(rev)
    ),
    quad(
      namedNode(`${vs}moreinfo`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}AnnotationProperty`),
      namedNode(rev)
    ),
    quad(
      namedNode(`${vs}term_status`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}AnnotationProperty`),
      namedNode(rev)
    ),
    quad(
      namedNode(`${foaf}Agent`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}Class`),
      namedNode(rev)
    ),
    quad(
      namedNode(`${foaf}Person`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}Class`),
      namedNode(rev)
    ),

  ]
}
