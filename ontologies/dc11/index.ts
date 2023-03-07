/* This file was automatically generated. Do not edit by hand. */

const {
  dc11,
  dcterms,
  xsd,
  ns4,
  rdf,
  rdfs,
  skos
} = {
  'dc11': 'http://purl.org/dc/elements/1.1/',
  'dcterms': 'http://purl.org/dc/terms/',
  'xsd': 'http://www.w3.org/2001/XMLSchema#',
  'ns4': 'http://purl.org/dc/aboutdcmi#',
  'rdf': 'http://www.w3.org/1999/02/22-rdf-syntax-ns#',
  'rdfs': 'http://www.w3.org/2000/01/rdf-schema#',
  'skos': 'http://www.w3.org/2004/02/skos/core#'
}

export default ({ literal, namedNode, quad }: import('rdf-js').DataFactory): import('rdf-js').Quad[] => {
  return [
    quad(
      namedNode(dc11),
      namedNode(`${dcterms}modified`),
      literal(`2012-06-14`, namedNode(`${xsd}date`)),
      namedNode(dc11)
    ),
    quad(
      namedNode(dc11),
      namedNode(`${dcterms}publisher`),
      namedNode(`${ns4}DCMI`),
      namedNode(dc11)
    ),
    quad(
      namedNode(dc11),
      namedNode(`${dcterms}title`),
      literal(`Dublin Core Metadata Element Set, Version 1.1`, 'en'),
      namedNode(dc11)
    ),
    quad(
      namedNode(`${dc11}contributor`),
      namedNode(`${dcterms}description`),
      literal(`The guidelines for using names of persons or organizations as creators also apply to contributors.  Typically, the name of a Contributor should be used to indicate the entity.`, 'en'),
      namedNode(dc11)
    ),
    quad(
      namedNode(`${dc11}contributor`),
      namedNode(`${dcterms}issued`),
      literal(`1999-07-02`, namedNode(`${xsd}date`)),
      namedNode(dc11)
    ),
    quad(
      namedNode(`${dc11}contributor`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(dc11)
    ),
    quad(
      namedNode(`${dc11}contributor`),
      namedNode(`${rdfs}comment`),
      literal(`An entity responsible for making contributions to the resource.`, 'en'),
      namedNode(dc11)
    ),
    quad(
      namedNode(`${dc11}contributor`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(dc11),
      namedNode(dc11)
    ),
    quad(
      namedNode(`${dc11}contributor`),
      namedNode(`${rdfs}label`),
      literal(`Contributor`, 'en'),
      namedNode(dc11)
    ),
    quad(
      namedNode(`${dc11}contributor`),
      namedNode(`${skos}note`),
      literal(`A [second property](/specifications/dublin-core/dcmi-terms/#http://purl.org/dc/terms/contributor) with the same name as this property has been declared in the [dcterms: namespace](http://purl.org/dc/terms/).  See the Introduction to the document [DCMI Metadata Terms](/specifications/dublin-core/dcmi-terms/) for an explanation.`, 'en'),
      namedNode(dc11)
    ),
    quad(
      namedNode(`${dc11}coverage`),
      namedNode(`${dcterms}description`),
      literal(`Spatial topic and spatial applicability may be a named place or a location specified by its geographic coordinates. Temporal topic may be a named period, date, or date range. A jurisdiction may be a named administrative entity or a geographic place to which the resource applies. Recommended practice is to use a controlled vocabulary such as the Getty Thesaurus of Geographic Names [[TGN](https://www.getty.edu/research/tools/vocabulary/tgn/index.html)]. Where appropriate, named places or time periods may be used in preference to numeric identifiers such as sets of coordinates or date ranges.`, 'en'),
      namedNode(dc11)
    ),
    quad(
      namedNode(`${dc11}coverage`),
      namedNode(`${dcterms}issued`),
      literal(`1999-07-02`, namedNode(`${xsd}date`)),
      namedNode(dc11)
    ),
    quad(
      namedNode(`${dc11}coverage`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(dc11)
    ),
    quad(
      namedNode(`${dc11}coverage`),
      namedNode(`${rdfs}comment`),
      literal(`The spatial or temporal topic of the resource, spatial applicability of the resource, or jurisdiction under which the resource is relevant.`, 'en'),
      namedNode(dc11)
    ),
    quad(
      namedNode(`${dc11}coverage`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(dc11),
      namedNode(dc11)
    ),
    quad(
      namedNode(`${dc11}coverage`),
      namedNode(`${rdfs}label`),
      literal(`Coverage`, 'en'),
      namedNode(dc11)
    ),
    quad(
      namedNode(`${dc11}coverage`),
      namedNode(`${skos}note`),
      literal(`A [second property](/specifications/dublin-core/dcmi-terms/#http://purl.org/dc/terms/coverage) with the same name as this property has been declared in the [dcterms: namespace](http://purl.org/dc/terms/).  See the Introduction to the document [DCMI Metadata Terms](/specifications/dublin-core/dcmi-terms/) for an explanation.`, 'en'),
      namedNode(dc11)
    ),
    quad(
      namedNode(`${dc11}creator`),
      namedNode(`${dcterms}description`),
      literal(`Examples of a Creator include a person, an organization, or a service. Typically, the name of a Creator should be used to indicate the entity.`, 'en'),
      namedNode(dc11)
    ),
    quad(
      namedNode(`${dc11}creator`),
      namedNode(`${dcterms}issued`),
      literal(`1999-07-02`, namedNode(`${xsd}date`)),
      namedNode(dc11)
    ),
    quad(
      namedNode(`${dc11}creator`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(dc11)
    ),
    quad(
      namedNode(`${dc11}creator`),
      namedNode(`${rdfs}comment`),
      literal(`An entity primarily responsible for making the resource.`, 'en'),
      namedNode(dc11)
    ),
    quad(
      namedNode(`${dc11}creator`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(dc11),
      namedNode(dc11)
    ),
    quad(
      namedNode(`${dc11}creator`),
      namedNode(`${rdfs}label`),
      literal(`Creator`, 'en'),
      namedNode(dc11)
    ),
    quad(
      namedNode(`${dc11}creator`),
      namedNode(`${skos}note`),
      literal(`A [second property](/specifications/dublin-core/dcmi-terms/#http://purl.org/dc/terms/creator) with the same name as this property has been declared in the [dcterms: namespace](http://purl.org/dc/terms/).  See the Introduction to the document [DCMI Metadata Terms](/specifications/dublin-core/dcmi-terms/) for an explanation.`, 'en'),
      namedNode(dc11)
    ),
    quad(
      namedNode(`${dc11}date`),
      namedNode(`${dcterms}description`),
      literal(`Date may be used to express temporal information at any level of granularity.  Recommended practice is to express the date, date/time, or period of time according to ISO 8601-1 [[ISO 8601-1](https://www.iso.org/iso-8601-date-and-time-format.html)] or a published profile of the ISO standard, such as the W3C Note on Date and Time Formats [[W3CDTF](https://www.w3.org/TR/NOTE-datetime)] or the Extended Date/Time Format Specification [[EDTF](http://www.loc.gov/standards/datetime/)].  If the full date is unknown, month and year (YYYY-MM) or just year (YYYY) may be used. Date ranges may be specified using ISO 8601 period of time specification in which start and end dates are separated by a '/' (slash) character.  Either the start or end date may be missing.`, 'en'),
      namedNode(dc11)
    ),
    quad(
      namedNode(`${dc11}date`),
      namedNode(`${dcterms}issued`),
      literal(`1999-07-02`, namedNode(`${xsd}date`)),
      namedNode(dc11)
    ),
    quad(
      namedNode(`${dc11}date`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(dc11)
    ),
    quad(
      namedNode(`${dc11}date`),
      namedNode(`${rdfs}comment`),
      literal(`A point or period of time associated with an event in the lifecycle of the resource.`, 'en'),
      namedNode(dc11)
    ),
    quad(
      namedNode(`${dc11}date`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(dc11),
      namedNode(dc11)
    ),
    quad(
      namedNode(`${dc11}date`),
      namedNode(`${rdfs}label`),
      literal(`Date`, 'en'),
      namedNode(dc11)
    ),
    quad(
      namedNode(`${dc11}date`),
      namedNode(`${skos}note`),
      literal(`A [second property](/specifications/dublin-core/dcmi-terms/#http://purl.org/dc/terms/date) with the same name as this property has been declared in the [dcterms: namespace](http://purl.org/dc/terms/).  See the Introduction to the document [DCMI Metadata Terms](/specifications/dublin-core/dcmi-terms/) for an explanation.`, 'en'),
      namedNode(dc11)
    ),
    quad(
      namedNode(`${dc11}description`),
      namedNode(`${dcterms}description`),
      literal(`Description may include but is not limited to: an abstract, a table of contents, a graphical representation, or a free-text account of the resource.`, 'en'),
      namedNode(dc11)
    ),
    quad(
      namedNode(`${dc11}description`),
      namedNode(`${dcterms}issued`),
      literal(`1999-07-02`, namedNode(`${xsd}date`)),
      namedNode(dc11)
    ),
    quad(
      namedNode(`${dc11}description`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(dc11)
    ),
    quad(
      namedNode(`${dc11}description`),
      namedNode(`${rdfs}comment`),
      literal(`An account of the resource.`, 'en'),
      namedNode(dc11)
    ),
    quad(
      namedNode(`${dc11}description`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(dc11),
      namedNode(dc11)
    ),
    quad(
      namedNode(`${dc11}description`),
      namedNode(`${rdfs}label`),
      literal(`Description`, 'en'),
      namedNode(dc11)
    ),
    quad(
      namedNode(`${dc11}description`),
      namedNode(`${skos}note`),
      literal(`A [second property](/specifications/dublin-core/dcmi-terms/#http://purl.org/dc/terms/description) with the same name as this property has been declared in the [dcterms: namespace](http://purl.org/dc/terms/).  See the Introduction to the document [DCMI Metadata Terms](/specifications/dublin-core/dcmi-terms/) for an explanation.`, 'en'),
      namedNode(dc11)
    ),
    quad(
      namedNode(`${dc11}format`),
      namedNode(`${dcterms}description`),
      literal(`Recommended practice is to use a controlled vocabulary where available. For example, for file formats one could use the list of Internet Media Types [[MIME](https://www.iana.org/assignments/media-types/media-types.xhtml)].`, 'en'),
      namedNode(dc11)
    ),
    quad(
      namedNode(`${dc11}format`),
      namedNode(`${dcterms}issued`),
      literal(`1999-07-02`, namedNode(`${xsd}date`)),
      namedNode(dc11)
    ),
    quad(
      namedNode(`${dc11}format`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(dc11)
    ),
    quad(
      namedNode(`${dc11}format`),
      namedNode(`${rdfs}comment`),
      literal(`The file format, physical medium, or dimensions of the resource.`, 'en'),
      namedNode(dc11)
    ),
    quad(
      namedNode(`${dc11}format`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(dc11),
      namedNode(dc11)
    ),
    quad(
      namedNode(`${dc11}format`),
      namedNode(`${rdfs}label`),
      literal(`Format`, 'en'),
      namedNode(dc11)
    ),
    quad(
      namedNode(`${dc11}format`),
      namedNode(`${skos}note`),
      literal(`A [second property](/specifications/dublin-core/dcmi-terms/#http://purl.org/dc/terms/format) with the same name as this property has been declared in the [dcterms: namespace](http://purl.org/dc/terms/).  See the Introduction to the document [DCMI Metadata Terms](/specifications/dublin-core/dcmi-terms/) for an explanation.`, 'en'),
      namedNode(dc11)
    ),
    quad(
      namedNode(`${dc11}identifier`),
      namedNode(`${dcterms}description`),
      literal(`Recommended practice is to identify the resource by means of a string conforming to an identification system.`, 'en'),
      namedNode(dc11)
    ),
    quad(
      namedNode(`${dc11}identifier`),
      namedNode(`${dcterms}issued`),
      literal(`1999-07-02`, namedNode(`${xsd}date`)),
      namedNode(dc11)
    ),
    quad(
      namedNode(`${dc11}identifier`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(dc11)
    ),
    quad(
      namedNode(`${dc11}identifier`),
      namedNode(`${rdfs}comment`),
      literal(`An unambiguous reference to the resource within a given context.`, 'en'),
      namedNode(dc11)
    ),
    quad(
      namedNode(`${dc11}identifier`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(dc11),
      namedNode(dc11)
    ),
    quad(
      namedNode(`${dc11}identifier`),
      namedNode(`${rdfs}label`),
      literal(`Identifier`, 'en'),
      namedNode(dc11)
    ),
    quad(
      namedNode(`${dc11}identifier`),
      namedNode(`${skos}note`),
      literal(`A [second property](/specifications/dublin-core/dcmi-terms/#http://purl.org/dc/terms/identifier) with the same name as this property has been declared in the [dcterms: namespace](http://purl.org/dc/terms/).  See the Introduction to the document [DCMI Metadata Terms](/specifications/dublin-core/dcmi-terms/) for an explanation.`, 'en'),
      namedNode(dc11)
    ),
    quad(
      namedNode(`${dc11}language`),
      namedNode(`${dcterms}description`),
      literal(`Recommended practice is to use either a non-literal value representing a language from a controlled vocabulary such as ISO 639-2 or ISO 639-3, or a literal value consisting of an IETF Best Current Practice 47 [[IETF-BCP47](https://tools.ietf.org/html/bcp47)] language tag.`, 'en'),
      namedNode(dc11)
    ),
    quad(
      namedNode(`${dc11}language`),
      namedNode(`${dcterms}issued`),
      literal(`1999-07-02`, namedNode(`${xsd}date`)),
      namedNode(dc11)
    ),
    quad(
      namedNode(`${dc11}language`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(dc11)
    ),
    quad(
      namedNode(`${dc11}language`),
      namedNode(`${rdfs}comment`),
      literal(`A language of the resource.`, 'en'),
      namedNode(dc11)
    ),
    quad(
      namedNode(`${dc11}language`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(dc11),
      namedNode(dc11)
    ),
    quad(
      namedNode(`${dc11}language`),
      namedNode(`${rdfs}label`),
      literal(`Language`, 'en'),
      namedNode(dc11)
    ),
    quad(
      namedNode(`${dc11}language`),
      namedNode(`${skos}note`),
      literal(`A [second property](/specifications/dublin-core/dcmi-terms/#http://purl.org/dc/terms/language) with the same name as this property has been declared in the [dcterms: namespace](http://purl.org/dc/terms/).  See the Introduction to the document [DCMI Metadata Terms](/specifications/dublin-core/dcmi-terms/) for an explanation.`, 'en'),
      namedNode(dc11)
    ),
    quad(
      namedNode(`${dc11}publisher`),
      namedNode(`${dcterms}description`),
      literal(`Examples of a Publisher include a person, an organization, or a service. Typically, the name of a Publisher should be used to indicate the entity.`, 'en'),
      namedNode(dc11)
    ),
    quad(
      namedNode(`${dc11}publisher`),
      namedNode(`${dcterms}issued`),
      literal(`1999-07-02`, namedNode(`${xsd}date`)),
      namedNode(dc11)
    ),
    quad(
      namedNode(`${dc11}publisher`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(dc11)
    ),
    quad(
      namedNode(`${dc11}publisher`),
      namedNode(`${rdfs}comment`),
      literal(`An entity responsible for making the resource available.`, 'en'),
      namedNode(dc11)
    ),
    quad(
      namedNode(`${dc11}publisher`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(dc11),
      namedNode(dc11)
    ),
    quad(
      namedNode(`${dc11}publisher`),
      namedNode(`${rdfs}label`),
      literal(`Publisher`, 'en'),
      namedNode(dc11)
    ),
    quad(
      namedNode(`${dc11}publisher`),
      namedNode(`${skos}note`),
      literal(`A [second property](/specifications/dublin-core/dcmi-terms/#http://purl.org/dc/terms/publisher) with the same name as this property has been declared in the [dcterms: namespace](http://purl.org/dc/terms/).  See the Introduction to the document [DCMI Metadata Terms](/specifications/dublin-core/dcmi-terms/) for an explanation.`, 'en'),
      namedNode(dc11)
    ),
    quad(
      namedNode(`${dc11}relation`),
      namedNode(`${dcterms}description`),
      literal(`Recommended practice is to identify the related resource by means of a URI. If this is not possible or feasible, a string conforming to a formal identification system may be provided.`, 'en'),
      namedNode(dc11)
    ),
    quad(
      namedNode(`${dc11}relation`),
      namedNode(`${dcterms}issued`),
      literal(`1999-07-02`, namedNode(`${xsd}date`)),
      namedNode(dc11)
    ),
    quad(
      namedNode(`${dc11}relation`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(dc11)
    ),
    quad(
      namedNode(`${dc11}relation`),
      namedNode(`${rdfs}comment`),
      literal(`A related resource.`, 'en'),
      namedNode(dc11)
    ),
    quad(
      namedNode(`${dc11}relation`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(dc11),
      namedNode(dc11)
    ),
    quad(
      namedNode(`${dc11}relation`),
      namedNode(`${rdfs}label`),
      literal(`Relation`, 'en'),
      namedNode(dc11)
    ),
    quad(
      namedNode(`${dc11}relation`),
      namedNode(`${skos}note`),
      literal(`A [second property](/specifications/dublin-core/dcmi-terms/#http://purl.org/dc/terms/relation) with the same name as this property has been declared in the [dcterms: namespace](http://purl.org/dc/terms/).  See the Introduction to the document [DCMI Metadata Terms](/specifications/dublin-core/dcmi-terms/) for an explanation.`, 'en'),
      namedNode(dc11)
    ),
    quad(
      namedNode(`${dc11}rights`),
      namedNode(`${dcterms}description`),
      literal(`Typically, rights information includes a statement about various property rights associated with the resource, including intellectual property rights.`, 'en'),
      namedNode(dc11)
    ),
    quad(
      namedNode(`${dc11}rights`),
      namedNode(`${dcterms}issued`),
      literal(`1999-07-02`, namedNode(`${xsd}date`)),
      namedNode(dc11)
    ),
    quad(
      namedNode(`${dc11}rights`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(dc11)
    ),
    quad(
      namedNode(`${dc11}rights`),
      namedNode(`${rdfs}comment`),
      literal(`Information about rights held in and over the resource.`, 'en'),
      namedNode(dc11)
    ),
    quad(
      namedNode(`${dc11}rights`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(dc11),
      namedNode(dc11)
    ),
    quad(
      namedNode(`${dc11}rights`),
      namedNode(`${rdfs}label`),
      literal(`Rights`, 'en'),
      namedNode(dc11)
    ),
    quad(
      namedNode(`${dc11}rights`),
      namedNode(`${skos}note`),
      literal(`A [second property](/specifications/dublin-core/dcmi-terms/#http://purl.org/dc/terms/rights) with the same name as this property has been declared in the [dcterms: namespace](http://purl.org/dc/terms/).  See the Introduction to the document [DCMI Metadata Terms](/specifications/dublin-core/dcmi-terms/) for an explanation.`, 'en'),
      namedNode(dc11)
    ),
    quad(
      namedNode(`${dc11}source`),
      namedNode(`${dcterms}description`),
      literal(`The described resource may be derived from the related resource in whole or in part. Recommended best practice is to identify the related resource by means of a string conforming to a formal identification system.`, 'en'),
      namedNode(dc11)
    ),
    quad(
      namedNode(`${dc11}source`),
      namedNode(`${dcterms}issued`),
      literal(`1999-07-02`, namedNode(`${xsd}date`)),
      namedNode(dc11)
    ),
    quad(
      namedNode(`${dc11}source`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(dc11)
    ),
    quad(
      namedNode(`${dc11}source`),
      namedNode(`${rdfs}comment`),
      literal(`A related resource from which the described resource is derived.`, 'en'),
      namedNode(dc11)
    ),
    quad(
      namedNode(`${dc11}source`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(dc11),
      namedNode(dc11)
    ),
    quad(
      namedNode(`${dc11}source`),
      namedNode(`${rdfs}label`),
      literal(`Source`, 'en'),
      namedNode(dc11)
    ),
    quad(
      namedNode(`${dc11}source`),
      namedNode(`${skos}note`),
      literal(`A [second property](/specifications/dublin-core/dcmi-terms/#http://purl.org/dc/terms/source) with the same name as this property has been declared in the [dcterms: namespace](http://purl.org/dc/terms/).  See the Introduction to the document [DCMI Metadata Terms](/specifications/dublin-core/dcmi-terms/) for an explanation.`, 'en'),
      namedNode(dc11)
    ),
    quad(
      namedNode(`${dc11}subject`),
      namedNode(`${dcterms}description`),
      literal(`Typically, the subject will be represented using keywords, key phrases, or classification codes.  Recommended best practice is to use a controlled vocabulary.`, 'en'),
      namedNode(dc11)
    ),
    quad(
      namedNode(`${dc11}subject`),
      namedNode(`${dcterms}issued`),
      literal(`1999-07-02`, namedNode(`${xsd}date`)),
      namedNode(dc11)
    ),
    quad(
      namedNode(`${dc11}subject`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(dc11)
    ),
    quad(
      namedNode(`${dc11}subject`),
      namedNode(`${rdfs}comment`),
      literal(`The topic of the resource.`, 'en'),
      namedNode(dc11)
    ),
    quad(
      namedNode(`${dc11}subject`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(dc11),
      namedNode(dc11)
    ),
    quad(
      namedNode(`${dc11}subject`),
      namedNode(`${rdfs}label`),
      literal(`Subject`, 'en'),
      namedNode(dc11)
    ),
    quad(
      namedNode(`${dc11}subject`),
      namedNode(`${skos}note`),
      literal(`A [second property](/specifications/dublin-core/dcmi-terms/#http://purl.org/dc/terms/subject) with the same name as this property has been declared in the [dcterms: namespace](http://purl.org/dc/terms/).  See the Introduction to the document [DCMI Metadata Terms](/specifications/dublin-core/dcmi-terms/) for an explanation.`, 'en'),
      namedNode(dc11)
    ),
    quad(
      namedNode(`${dc11}title`),
      namedNode(`${dcterms}issued`),
      literal(`1999-07-02`, namedNode(`${xsd}date`)),
      namedNode(dc11)
    ),
    quad(
      namedNode(`${dc11}title`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(dc11)
    ),
    quad(
      namedNode(`${dc11}title`),
      namedNode(`${rdfs}comment`),
      literal(`A name given to the resource.`, 'en'),
      namedNode(dc11)
    ),
    quad(
      namedNode(`${dc11}title`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(dc11),
      namedNode(dc11)
    ),
    quad(
      namedNode(`${dc11}title`),
      namedNode(`${rdfs}label`),
      literal(`Title`, 'en'),
      namedNode(dc11)
    ),
    quad(
      namedNode(`${dc11}title`),
      namedNode(`${skos}note`),
      literal(`A [second property](/specifications/dublin-core/dcmi-terms/#http://purl.org/dc/terms/title) with the same name as this property has been declared in the [dcterms: namespace](http://purl.org/dc/terms/).  See the Introduction to the document [DCMI Metadata Terms](/specifications/dublin-core/dcmi-terms/) for an explanation.`, 'en'),
      namedNode(dc11)
    ),
    quad(
      namedNode(`${dc11}type`),
      namedNode(`${dcterms}description`),
      literal(`Recommended practice is to use a controlled vocabulary such as the DCMI Type Vocabulary [[DCMI-TYPE](http://dublincore.org/documents/dcmi-type-vocabulary/)]. To describe the file format, physical medium, or dimensions of the resource, use the Format element.`, 'en'),
      namedNode(dc11)
    ),
    quad(
      namedNode(`${dc11}type`),
      namedNode(`${dcterms}issued`),
      literal(`1999-07-02`, namedNode(`${xsd}date`)),
      namedNode(dc11)
    ),
    quad(
      namedNode(`${dc11}type`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(dc11)
    ),
    quad(
      namedNode(`${dc11}type`),
      namedNode(`${rdfs}comment`),
      literal(`The nature or genre of the resource.`, 'en'),
      namedNode(dc11)
    ),
    quad(
      namedNode(`${dc11}type`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(dc11),
      namedNode(dc11)
    ),
    quad(
      namedNode(`${dc11}type`),
      namedNode(`${rdfs}label`),
      literal(`Type`, 'en'),
      namedNode(dc11)
    ),
    quad(
      namedNode(`${dc11}type`),
      namedNode(`${skos}note`),
      literal(`A [second property](/specifications/dublin-core/dcmi-terms/#http://purl.org/dc/terms/type) with the same name as this property has been declared in the [dcterms: namespace](http://purl.org/dc/terms/).  See the Introduction to the document [DCMI Metadata Terms](/specifications/dublin-core/dcmi-terms/) for an explanation.`, 'en'),
      namedNode(dc11)
    ),

  ]
}
