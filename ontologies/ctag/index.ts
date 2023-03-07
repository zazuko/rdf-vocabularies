/* This file was automatically generated. Do not edit by hand. */

const {
  ns1,
  rdfs,
  ctag,
  dc11,
  dcterms,
  rdf,
  owl
} = {
  'ns1': 'http://commontag.org/',
  'rdfs': 'http://www.w3.org/2000/01/rdf-schema#',
  'ctag': 'http://commontag.org/ns#',
  'dc11': 'http://purl.org/dc/elements/1.1/',
  'dcterms': 'http://purl.org/dc/terms/',
  'rdf': 'http://www.w3.org/1999/02/22-rdf-syntax-ns#',
  'owl': 'http://www.w3.org/2002/07/owl#'
}

export default ({ literal, namedNode, quad }: import('rdf-js').DataFactory): import('rdf-js').Quad[] => {
  return [
    quad(
      namedNode(`${ns1}mappings`),
      namedNode(`${rdfs}label`),
      literal(`CommonTag mappings with other vocabularies`),
      namedNode(ctag)
    ),
    quad(
      namedNode(ctag),
      namedNode(`${dc11}contributor`),
      literal(`Alex Iskold`),
      namedNode(ctag)
    ),
    quad(
      namedNode(ctag),
      namedNode(`${dc11}contributor`),
      literal(`Alexandre Passant`),
      namedNode(ctag)
    ),
    quad(
      namedNode(ctag),
      namedNode(`${dc11}contributor`),
      literal(`Andraz Tori`),
      namedNode(ctag)
    ),
    quad(
      namedNode(ctag),
      namedNode(`${dc11}contributor`),
      literal(`Jamie Taylor`),
      namedNode(ctag)
    ),
    quad(
      namedNode(ctag),
      namedNode(`${dc11}contributor`),
      literal(`Peter Mika`),
      namedNode(ctag)
    ),
    quad(
      namedNode(ctag),
      namedNode(`${dc11}contributor`),
      literal(`Scott Montgomerie`),
      namedNode(ctag)
    ),
    quad(
      namedNode(ctag),
      namedNode(`${dc11}contributor`),
      literal(`Vuk Milicic`),
      namedNode(ctag)
    ),
    quad(
      namedNode(ctag),
      namedNode(`${dc11}description`),
      literal(`Common Tag RDF vocabulary, described using W3C RDF Schema. Common Tags allows documents and document fragments (any resource which can be identified by a URI) to be labeled with keywords and URIs, unambigiously idenfying the concepts covered by the resource.`, 'en'),
      namedNode(ctag)
    ),
    quad(
      namedNode(ctag),
      namedNode(`${dc11}description`),
      literal(`使用W3C RDF描述的通用标签词汇集。`, 'zh-cn'),
      namedNode(ctag)
    ),
    quad(
      namedNode(ctag),
      namedNode(`${dc11}title`),
      literal(`Common Tag vocabulary`, 'en'),
      namedNode(ctag)
    ),
    quad(
      namedNode(ctag),
      namedNode(`${dc11}title`),
      literal(`通用标签本体`, 'zh-cn'),
      namedNode(ctag)
    ),
    quad(
      namedNode(ctag),
      namedNode(`${dcterms}issued`),
      literal(`2009-06-08`),
      namedNode(ctag)
    ),
    quad(
      namedNode(ctag),
      namedNode(`${rdf}type`),
      namedNode(`${owl}Ontology`),
      namedNode(ctag)
    ),
    quad(
      namedNode(ctag),
      namedNode(`${rdfs}label`),
      literal(`Common Tag vocabulary`, 'en'),
      namedNode(ctag)
    ),
    quad(
      namedNode(ctag),
      namedNode(`${rdfs}label`),
      literal(`通用标签本体`, 'zh-cn'),
      namedNode(ctag)
    ),
    quad(
      namedNode(ctag),
      namedNode(`${rdfs}seeAlso`),
      namedNode(`${ns1}mappings`),
      namedNode(ctag)
    ),
    quad(
      namedNode(`${ctag}AuthorTag`),
      namedNode(`${rdf}type`),
      namedNode(`${rdfs}Class`),
      namedNode(ctag)
    ),
    quad(
      namedNode(`${ctag}AuthorTag`),
      namedNode(`${rdfs}comment`),
      literal(`A Tag asserted by the author of a content resource.`, 'en'),
      namedNode(ctag)
    ),
    quad(
      namedNode(`${ctag}AuthorTag`),
      namedNode(`${rdfs}comment`),
      literal(`由作者对内容资源指定的标签。`, 'zh-cn'),
      namedNode(ctag)
    ),
    quad(
      namedNode(`${ctag}AuthorTag`),
      namedNode(`${rdfs}label`),
      literal(`Author Tag`, 'en'),
      namedNode(ctag)
    ),
    quad(
      namedNode(`${ctag}AuthorTag`),
      namedNode(`${rdfs}label`),
      literal(`作者标签`, 'zh-cn'),
      namedNode(ctag)
    ),
    quad(
      namedNode(`${ctag}AuthorTag`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${ctag}Tag`),
      namedNode(ctag)
    ),
    quad(
      namedNode(`${ctag}AutoTag`),
      namedNode(`${rdf}type`),
      namedNode(`${rdfs}Class`),
      namedNode(ctag)
    ),
    quad(
      namedNode(`${ctag}AutoTag`),
      namedNode(`${rdfs}comment`),
      literal(`A Tag asserted by an automated tool on a content resource.`, 'en'),
      namedNode(ctag)
    ),
    quad(
      namedNode(`${ctag}AutoTag`),
      namedNode(`${rdfs}comment`),
      literal(`由自动化工具对内容资源指定的标签。`, 'zh-cn'),
      namedNode(ctag)
    ),
    quad(
      namedNode(`${ctag}AutoTag`),
      namedNode(`${rdfs}label`),
      literal(`Auto Tag`, 'en'),
      namedNode(ctag)
    ),
    quad(
      namedNode(`${ctag}AutoTag`),
      namedNode(`${rdfs}label`),
      literal(`自动标签`, 'zh-cn'),
      namedNode(ctag)
    ),
    quad(
      namedNode(`${ctag}AutoTag`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${ctag}Tag`),
      namedNode(ctag)
    ),
    quad(
      namedNode(`${ctag}ReaderTag`),
      namedNode(`${rdf}type`),
      namedNode(`${rdfs}Class`),
      namedNode(ctag)
    ),
    quad(
      namedNode(`${ctag}ReaderTag`),
      namedNode(`${rdfs}comment`),
      literal(`A Tag asserted by the reader (consumer) of a content resource.`, 'en'),
      namedNode(ctag)
    ),
    quad(
      namedNode(`${ctag}ReaderTag`),
      namedNode(`${rdfs}comment`),
      literal(`由读者/顾客对内容资源指定的标签。`, 'zh-cn'),
      namedNode(ctag)
    ),
    quad(
      namedNode(`${ctag}ReaderTag`),
      namedNode(`${rdfs}label`),
      literal(`Reader Tag`, 'en'),
      namedNode(ctag)
    ),
    quad(
      namedNode(`${ctag}ReaderTag`),
      namedNode(`${rdfs}label`),
      literal(`读者标签`, 'zh-cn'),
      namedNode(ctag)
    ),
    quad(
      namedNode(`${ctag}ReaderTag`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${ctag}Tag`),
      namedNode(ctag)
    ),
    quad(
      namedNode(`${ctag}Tag`),
      namedNode(`${rdf}type`),
      namedNode(`${rdfs}Class`),
      namedNode(ctag)
    ),
    quad(
      namedNode(`${ctag}Tag`),
      namedNode(`${rdfs}comment`),
      literal(`A Common Tag associating a URI and a keyword to annotate a resource.`, 'en'),
      namedNode(ctag)
    ),
    quad(
      namedNode(`${ctag}Tag`),
      namedNode(`${rdfs}comment`),
      literal(`一个通用标签关联了一个URI和标记资源的关键词。`, 'zh-cn'),
      namedNode(ctag)
    ),
    quad(
      namedNode(`${ctag}Tag`),
      namedNode(`${rdfs}label`),
      literal(`Tag`, 'en'),
      namedNode(ctag)
    ),
    quad(
      namedNode(`${ctag}Tag`),
      namedNode(`${rdfs}label`),
      literal(`标签`, 'zh-cn'),
      namedNode(ctag)
    ),
    quad(
      namedNode(`${ctag}TaggedContent`),
      namedNode(`${rdf}type`),
      namedNode(`${rdfs}Class`),
      namedNode(ctag)
    ),
    quad(
      namedNode(`${ctag}TaggedContent`),
      namedNode(`${rdfs}comment`),
      literal(`Content which has one or more Common Tag.`, 'en'),
      namedNode(ctag)
    ),
    quad(
      namedNode(`${ctag}TaggedContent`),
      namedNode(`${rdfs}comment`),
      literal(`拥有一个或多个通用标签的内容。`, 'zh-cn'),
      namedNode(ctag)
    ),
    quad(
      namedNode(`${ctag}TaggedContent`),
      namedNode(`${rdfs}label`),
      literal(`Tagged Content`, 'en'),
      namedNode(ctag)
    ),
    quad(
      namedNode(`${ctag}TaggedContent`),
      namedNode(`${rdfs}label`),
      literal(`标记的内容`, 'zh-cn'),
      namedNode(ctag)
    ),
    quad(
      namedNode(`${ctag}isAbout`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(ctag)
    ),
    quad(
      namedNode(`${ctag}isAbout`),
      namedNode(`${rdfs}comment`),
      literal(`A resource (URI) representing the concepts described by the content.`, 'en'),
      namedNode(ctag)
    ),
    quad(
      namedNode(`${ctag}isAbout`),
      namedNode(`${rdfs}comment`),
      literal(`表示内容所描述资源的资源（URI）。`, 'zh-cn'),
      namedNode(ctag)
    ),
    quad(
      namedNode(`${ctag}isAbout`),
      namedNode(`${rdfs}domain`),
      namedNode(`${ctag}TaggedContent`),
      namedNode(ctag)
    ),
    quad(
      namedNode(`${ctag}isAbout`),
      namedNode(`${rdfs}label`),
      literal(`is about`, 'en'),
      namedNode(ctag)
    ),
    quad(
      namedNode(`${ctag}isAbout`),
      namedNode(`${rdfs}label`),
      literal(`关于`, 'zh-cn'),
      namedNode(ctag)
    ),
    quad(
      namedNode(`${ctag}label`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(ctag)
    ),
    quad(
      namedNode(`${ctag}label`),
      namedNode(`${rdfs}comment`),
      literal(`A local, human-readable name for a Tag.`, 'en'),
      namedNode(ctag)
    ),
    quad(
      namedNode(`${ctag}label`),
      namedNode(`${rdfs}comment`),
      literal(`标签的本地、供人类阅读的名称。`, 'zh-cn'),
      namedNode(ctag)
    ),
    quad(
      namedNode(`${ctag}label`),
      namedNode(`${rdfs}domain`),
      namedNode(`${ctag}Tag`),
      namedNode(ctag)
    ),
    quad(
      namedNode(`${ctag}label`),
      namedNode(`${rdfs}label`),
      literal(`tag label`, 'en'),
      namedNode(ctag)
    ),
    quad(
      namedNode(`${ctag}label`),
      namedNode(`${rdfs}label`),
      literal(`标签`, 'zh-cn'),
      namedNode(ctag)
    ),
    quad(
      namedNode(`${ctag}label`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${rdfs}label`),
      namedNode(ctag)
    ),
    quad(
      namedNode(`${ctag}means`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(ctag)
    ),
    quad(
      namedNode(`${ctag}means`),
      namedNode(`${rdfs}comment`),
      literal(`A a resource (URI) representing the conceptual meaning of a Tag.`, 'en'),
      namedNode(ctag)
    ),
    quad(
      namedNode(`${ctag}means`),
      namedNode(`${rdfs}comment`),
      literal(`表示标签的概念性涵义的资源（URI）。`, 'zh-cn'),
      namedNode(ctag)
    ),
    quad(
      namedNode(`${ctag}means`),
      namedNode(`${rdfs}domain`),
      namedNode(`${ctag}Tag`),
      namedNode(ctag)
    ),
    quad(
      namedNode(`${ctag}means`),
      namedNode(`${rdfs}label`),
      literal(`means`, 'en'),
      namedNode(ctag)
    ),
    quad(
      namedNode(`${ctag}means`),
      namedNode(`${rdfs}label`),
      literal(`涵义`, 'zh-cn'),
      namedNode(ctag)
    ),
    quad(
      namedNode(`${ctag}tagged`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(ctag)
    ),
    quad(
      namedNode(`${ctag}tagged`),
      namedNode(`${rdfs}comment`),
      literal(`Links a resource to a Common Tag.`, 'en'),
      namedNode(ctag)
    ),
    quad(
      namedNode(`${ctag}tagged`),
      namedNode(`${rdfs}comment`),
      literal(`将资源连接到一个通用标签。`, 'zh-cn'),
      namedNode(ctag)
    ),
    quad(
      namedNode(`${ctag}tagged`),
      namedNode(`${rdfs}domain`),
      namedNode(`${ctag}TaggedContent`),
      namedNode(ctag)
    ),
    quad(
      namedNode(`${ctag}tagged`),
      namedNode(`${rdfs}label`),
      literal(`tagged`, 'en'),
      namedNode(ctag)
    ),
    quad(
      namedNode(`${ctag}tagged`),
      namedNode(`${rdfs}label`),
      literal(`标签`, 'zh-cn'),
      namedNode(ctag)
    ),
    quad(
      namedNode(`${ctag}tagged`),
      namedNode(`${rdfs}range`),
      namedNode(`${ctag}Tag`),
      namedNode(ctag)
    ),
    quad(
      namedNode(`${ctag}taggingDate`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(ctag)
    ),
    quad(
      namedNode(`${ctag}taggingDate`),
      namedNode(`${rdfs}comment`),
      literal(`The date the Tag was assigned.`, 'en'),
      namedNode(ctag)
    ),
    quad(
      namedNode(`${ctag}taggingDate`),
      namedNode(`${rdfs}comment`),
      literal(`使用标签的日期。`, 'zh-cn'),
      namedNode(ctag)
    ),
    quad(
      namedNode(`${ctag}taggingDate`),
      namedNode(`${rdfs}domain`),
      namedNode(`${ctag}Tag`),
      namedNode(ctag)
    ),
    quad(
      namedNode(`${ctag}taggingDate`),
      namedNode(`${rdfs}label`),
      literal(`tagging date`, 'en'),
      namedNode(ctag)
    ),
    quad(
      namedNode(`${ctag}taggingDate`),
      namedNode(`${rdfs}label`),
      literal(`标记日期`, 'zh-cn'),
      namedNode(ctag)
    ),
    quad(
      namedNode(`${ctag}taggingDate`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${dcterms}created`),
      namedNode(ctag)
    ),

  ]
}
