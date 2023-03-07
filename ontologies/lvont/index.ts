/* This file was automatically generated. Do not edit by hand. */

const {
  lvont,
  rdf,
  owl,
  rdfs,
  ns5,
  skos,
  ns7,
  ns8,
  dcterms,
  ns10,
  skosxl,
  foaf,
  ns13,
  ns14,
  ns15,
  ns16,
  ns17,
  dc11,
  ns19,
  xsd,
  ns21,
  ns22,
  ns23,
  ns24,
  ns25
} = {
  'lvont': 'http://lexvo.org/ontology#',
  'rdf': 'http://www.w3.org/1999/02/22-rdf-syntax-ns#',
  'owl': 'http://www.w3.org/2002/07/owl#',
  'rdfs': 'http://www.w3.org/2000/01/rdf-schema#',
  'ns5': 'http://en.wikipedia.org/wiki/',
  'skos': 'http://www.w3.org/2004/02/skos/core#',
  'ns7': 'http://purl.org/linguistics/gold/',
  'ns8': 'http://www.lingvoj.org/ontology#',
  'dcterms': 'http://purl.org/dc/terms/',
  'ns10': 'http://lexonto.ontoware.org/lmf#',
  'skosxl': 'http://www.w3.org/2008/05/skos-xl#',
  'foaf': 'http://xmlns.com/foaf/0.1/',
  'ns13': 'http://unicode.org/iso15924/',
  'ns14': 'http://psi.oasis-open.org/iso/639/#',
  'ns15': 'http://www.loc.gov/standards/iso639-2/',
  'ns16': 'http://www.sil.org/ISO639-3/',
  'ns17': 'http://www.loc.gov/standards/iso639-5/',
  'dc11': 'http://purl.org/dc/elements/1.1/',
  'ns19': 'http://www.loc.gov/marc/',
  'xsd': 'http://www.w3.org/2001/XMLSchema#',
  'ns21': 'http://lexvo.org/',
  'ns22': 'http://data.semanticweb.org/person/',
  'ns23': 'http://www.demelo.org/gdm/#',
  'ns24': 'http://dbpedia.org/resource/',
  'ns25': 'http://www.lexvo.org/'
}

export default ({ literal, namedNode, quad }: import('rdf-js').DataFactory): import('rdf-js').Quad[] => {
  return [
    quad(
      namedNode(`${lvont}CJKRadical`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}Class`),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${lvont}CJKRadical`),
      namedNode(`${rdfs}comment`),
      literal(`A CJK character radical.`, 'en'),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${lvont}CJKRadical`),
      namedNode(`${rdfs}label`),
      literal(`radical`, 'en'),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${lvont}CJKRadical`),
      namedNode(`${rdfs}seeAlso`),
      namedNode(`${ns5}Radical_%28Chinese_character%29`),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${lvont}CJKRadical`),
      namedNode(`${skos}note`),
      literal(`CJK radicals are slightly more abstract than characters, because the same radical can be manifested as different
    characters, e.g. radical 4 can take the form of '丿', '乀', or '乁'.`, 'en'),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${lvont}Character`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}Class`),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${lvont}Character`),
      namedNode(`${rdfs}comment`),
      literal(`An abstract character as defined by the Unicode Standard,
  Version 5, in Chapter 3.4.`, 'en'),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${lvont}Character`),
      namedNode(`${rdfs}label`),
      literal(`character`, 'en'),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${lvont}Character`),
      namedNode(`${owl}sameAs`),
      namedNode(`${ns7}Character`),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${lvont}Character`),
      namedNode(`${skos}note`),
      literal(`The same abstract character may be rendered in different forms, depending on the language and on typeface characters.`, 'en'),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${lvont}GeographicRegion`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}Class`),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${lvont}GeographicRegion`),
      namedNode(`${rdfs}comment`),
      literal(`Geographic regions on Earth or elsewhere.`, 'en'),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${lvont}GeographicRegion`),
      namedNode(`${rdfs}label`),
      literal(`geographic region`, 'en'),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${lvont}Language`),
      namedNode(`${lvont}somewhatSameAs`),
      namedNode(`${ns8}Lingvo`),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${lvont}Language`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}Class`),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${lvont}Language`),
      namedNode(`${rdfs}comment`),
      literal(`Groups of human language variants that are or were spoken, written, or signed at some point in time.`, 'en'),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${lvont}Language`),
      namedNode(`${rdfs}label`),
      literal(`language`, 'en'),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${lvont}Language`),
      namedNode(`${rdfs}seeAlso`),
      namedNode(`${ns5}Language`),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${lvont}Language`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${dcterms}LinguisticSystem`),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${lvont}Language`),
      namedNode(`${skos}note`),
      literal(`This definition includes languages, particular language variants (e.g. dialects), and larger groups of language 
    variants (e.g. macrolanguages and language families), as the distinction between them is largely conventional.`, 'en'),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${lvont}Script`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}Class`),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${lvont}Script`),
      namedNode(`${rdfs}comment`),
      literal(`A writing system considered abstractly, i.e. independent
    of language-specific variations.`, 'en'),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${lvont}Script`),
      namedNode(`${rdfs}label`),
      literal(`script`, 'en'),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${lvont}Term`),
      namedNode(`${lvont}nearlySameAs`),
      namedNode(`${ns10}FormRepresentation`),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${lvont}Term`),
      namedNode(`${lvont}subClassOf`),
      namedNode(`${skosxl}Label`),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${lvont}Term`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}Class`),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${lvont}Term`),
      namedNode(`${rdfs}comment`),
      literal(`A term in a specific language.`, 'en'),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${lvont}Term`),
      namedNode(`${rdfs}label`),
      literal(`term`, 'en'),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${lvont}broader`),
      namedNode(`${lvont}somewhatSameAs`),
      namedNode(`${skos}broader`),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${lvont}broader`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}ObjectProperty`),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${lvont}broader`),
      namedNode(`${rdfs}comment`),
      literal(`The property of having a broader, more generic concept.`, 'en'),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${lvont}broader`),
      namedNode(`${rdfs}label`),
      literal(`broader`, 'en'),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${lvont}broader`),
      namedNode(`${owl}inverseOf`),
      namedNode(`${lvont}narrower`),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${lvont}broader`),
      namedNode(`${skos}note`),
      literal(`Similar to skos:broader but domain and range are not restricted to skos:Concept instances.`, 'en'),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${lvont}characterRadical`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}ObjectProperty`),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${lvont}characterRadical`),
      namedNode(`${rdfs}comment`),
      literal(`The property of a CJK character being conventionally
    associated with a CJK character radical.`, 'en'),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${lvont}characterRadical`),
      namedNode(`${rdfs}domain`),
      namedNode(`${lvont}Character`),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${lvont}characterRadical`),
      namedNode(`${rdfs}label`),
      literal(`translation`, 'en'),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${lvont}characterRadical`),
      namedNode(`${rdfs}range`),
      namedNode(`${lvont}CJKRadical`),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${lvont}containsCharacter`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}ObjectProperty`),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${lvont}containsCharacter`),
      namedNode(`${rdfs}comment`),
      literal(`The property of a term containing a specific character.`, 'en'),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${lvont}containsCharacter`),
      namedNode(`${rdfs}domain`),
      namedNode(`${lvont}Term`),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${lvont}containsCharacter`),
      namedNode(`${rdfs}label`),
      literal(`contains character`, 'en'),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${lvont}containsCharacter`),
      namedNode(`${rdfs}range`),
      namedNode(`${lvont}Character`),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${lvont}evokes`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}ObjectProperty`),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${lvont}evokes`),
      namedNode(`${rdfs}comment`),
      literal(`The property of conceptually evoking some object.`, 'en'),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${lvont}evokes`),
      namedNode(`${rdfs}label`),
      literal(`evokes`, 'en'),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${lvont}evokes`),
      namedNode(`${owl}inverseOf`),
      namedNode(`${lvont}evokes`),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${lvont}hasCharacterComponent`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}ObjectProperty`),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${lvont}hasCharacterComponent`),
      namedNode(`${rdfs}comment`),
      literal(`The property of a character being composed of another character.`, 'en'),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${lvont}hasCharacterComponent`),
      namedNode(`${rdfs}domain`),
      namedNode(`${lvont}Character`),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${lvont}hasCharacterComponent`),
      namedNode(`${rdfs}label`),
      literal(`character component`, 'en'),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${lvont}hasCharacterComponent`),
      namedNode(`${rdfs}range`),
      namedNode(`${lvont}Character`),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${lvont}hasCharacterComponent`),
      namedNode(`${skos}note`),
      literal(`Especially for CJK characters.`, 'en'),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${lvont}hasMember`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}ObjectProperty`),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${lvont}hasMember`),
      namedNode(`${rdfs}comment`),
      literal(`The property of having a member.`, 'en'),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${lvont}hasMember`),
      namedNode(`${rdfs}label`),
      literal(`has member`, 'en'),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${lvont}hasMember`),
      namedNode(`${owl}inverseOf`),
      namedNode(`${lvont}memberOf`),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${lvont}hasMember`),
      namedNode(`${skos}note`),
      literal(`For instance for geographic regions.`, 'en'),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${lvont}inScript`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}ObjectProperty`),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${lvont}inScript`),
      namedNode(`${rdfs}comment`),
      literal(`The property of a document being written in a specific script,
    or a language being written or having being written in a specific script by a considerable
    group of language users.`, 'en'),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${lvont}inScript`),
      namedNode(`${rdfs}label`),
      literal(`in script`, 'en'),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${lvont}inScript`),
      namedNode(`${rdfs}range`),
      namedNode(`${lvont}Script`),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${lvont}involvedIn`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}ObjectProperty`),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${lvont}involvedIn`),
      namedNode(`${rdfs}comment`),
      literal(`The property of being involved in something, e.g. for semantic participants' involvement in a semantic frame.`, 'en'),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${lvont}involvedIn`),
      namedNode(`${rdfs}label`),
      literal(`involved in`, 'en'),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${lvont}involvedIn`),
      namedNode(`${owl}inverseOf`),
      namedNode(`${lvont}involves`),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${lvont}involves`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}ObjectProperty`),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${lvont}involves`),
      namedNode(`${rdfs}comment`),
      literal(`The property of involving some entity, e.g. for semantic participants involved in a semantic frame.`, 'en'),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${lvont}involves`),
      namedNode(`${rdfs}label`),
      literal(`involves`, 'en'),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${lvont}involves`),
      namedNode(`${owl}inverseOf`),
      namedNode(`${lvont}involvedIn`),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${lvont}isFocusOf`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}ObjectProperty`),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${lvont}isFocusOf`),
      namedNode(`${rdfs}label`),
      literal(`is focus of`, 'en'),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${lvont}isFocusOf`),
      namedNode(`${owl}inverseOf`),
      namedNode(`${foaf}focus`),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${lvont}isFocusOf`),
      namedNode(`${skos}note`),
      literal(`The isFocusOf relates an entity to relevant SKOS concepts 
    that are conceptualizations of the same entity. This is the inverse of the
    standard foaf:focus property, which connects a SKOS concept to a relevant
    non-conceptualized entity.`, 'en'),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${lvont}iso15924Alphacode`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}DatatypeProperty`),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${lvont}iso15924Alphacode`),
      namedNode(`${rdfs}domain`),
      namedNode(`${lvont}Script`),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${lvont}iso15924Alphacode`),
      namedNode(`${rdfs}label`),
      literal(`ISO 15924 alphabetic code`, 'en'),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${lvont}iso15924Alphacode`),
      namedNode(`${rdfs}seeAlso`),
      namedNode(ns13),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${lvont}iso639P1Code`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}DatatypeProperty`),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${lvont}iso639P1Code`),
      namedNode(`${rdfs}domain`),
      namedNode(`${lvont}Language`),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${lvont}iso639P1Code`),
      namedNode(`${rdfs}label`),
      literal(`ISO 639-1 code`, 'en'),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${lvont}iso639P1Code`),
      namedNode(`${owl}equivalentProperty`),
      namedNode(`${ns14}code-a2`),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${lvont}iso639P1Code`),
      namedNode(`${owl}equivalentProperty`),
      namedNode(`${ns8}iso1`),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${lvont}iso639P2BCode`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}DatatypeProperty`),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${lvont}iso639P2BCode`),
      namedNode(`${rdfs}domain`),
      namedNode(`${lvont}Language`),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${lvont}iso639P2BCode`),
      namedNode(`${rdfs}label`),
      literal(`ISO 639-2 Bibliographical code`, 'en'),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${lvont}iso639P2BCode`),
      namedNode(`${rdfs}seeAlso`),
      namedNode(ns15),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${lvont}iso639P2BCode`),
      namedNode(`${owl}equivalentProperty`),
      namedNode(`${ns14}code-a3b`),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${lvont}iso639P2BCode`),
      namedNode(`${owl}equivalentProperty`),
      namedNode(`${ns8}iso2b`),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${lvont}iso639P2TCode`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}DatatypeProperty`),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${lvont}iso639P2TCode`),
      namedNode(`${rdfs}domain`),
      namedNode(`${lvont}Language`),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${lvont}iso639P2TCode`),
      namedNode(`${rdfs}label`),
      literal(`ISO 639-2 Terminological code`, 'en'),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${lvont}iso639P2TCode`),
      namedNode(`${rdfs}seeAlso`),
      namedNode(ns15),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${lvont}iso639P2TCode`),
      namedNode(`${owl}equivalentProperty`),
      namedNode(`${ns14}code-a3t`),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${lvont}iso639P2TCode`),
      namedNode(`${owl}equivalentProperty`),
      namedNode(`${ns8}iso2t`),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${lvont}iso639P3Code`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}DatatypeProperty`),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${lvont}iso639P3Code`),
      namedNode(`${rdfs}domain`),
      namedNode(`${lvont}Language`),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${lvont}iso639P3Code`),
      namedNode(`${rdfs}label`),
      literal(`ISO 639-3 code`, 'en'),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${lvont}iso639P3Code`),
      namedNode(`${rdfs}seeAlso`),
      namedNode(ns16),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${lvont}iso639P3Code`),
      namedNode(`${owl}equivalentProperty`),
      namedNode(`${ns8}iso3`),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${lvont}iso639P5Code`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}DatatypeProperty`),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${lvont}iso639P5Code`),
      namedNode(`${rdfs}domain`),
      namedNode(`${lvont}Language`),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${lvont}iso639P5Code`),
      namedNode(`${rdfs}label`),
      literal(`ISO 639-5 code`, 'en'),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${lvont}iso639P5Code`),
      namedNode(`${rdfs}seeAlso`),
      namedNode(ns17),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${lvont}label`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}ObjectProperty`),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${lvont}label`),
      namedNode(`${rdfs}comment`),
      literal(`If C lvont:Label L and L skosxl:literalForm V, then X rdfs:label V.`, 'en'),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${lvont}label`),
      namedNode(`${rdfs}comment`),
      literal(`the semiotic property of possessing a natural language label (as opposed to artificial identifiers), e.g. the city of Paris is lexicalized in Italian using the Italian term "Parigi".`, 'en'),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${lvont}label`),
      namedNode(`${rdfs}label`),
      literal(`has label`, 'en'),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${lvont}label`),
      namedNode(`${rdfs}range`),
      namedNode(`${skosxl}Label`),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${lvont}label`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${lvont}representedBy`),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${lvont}label`),
      namedNode(`${owl}inverseOf`),
      namedNode(`${lvont}means`),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${lvont}label`),
      namedNode(`${skos}note`),
      literal(`This property is more general than skosxl:prefLabel and skosxl:altLabel, as it does not make any normative claims about which labels are preferred. It merely describes
    the fact that a certain label can be used to refer to something.`, 'en'),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${lvont}language`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}ObjectProperty`),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${lvont}language`),
      namedNode(`${rdfs}comment`),
      literal(`The property of a resource being mainly encoded in a specific language.`, 'en'),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${lvont}language`),
      namedNode(`${rdfs}label`),
      literal(`in language`, 'en'),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${lvont}language`),
      namedNode(`${rdfs}range`),
      namedNode(`${lvont}Language`),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${lvont}language`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${dc11}language`),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${lvont}language`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${dcterms}language`),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${lvont}lexicalCategory`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}ObjectProperty`),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${lvont}lexicalCategory`),
      namedNode(`${rdfs}comment`),
      literal(`A lexical category that a term can be used in.`, 'en'),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${lvont}lexicalCategory`),
      namedNode(`${rdfs}label`),
      literal(`lexical category`, 'en'),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${lvont}lexicalCategory`),
      namedNode(`${skos}note`),
      literal(` For example, the English term "score" can be used as a noun and as a verb.`, 'en'),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${lvont}marcCode`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}DatatypeProperty`),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${lvont}marcCode`),
      namedNode(`${rdfs}domain`),
      namedNode(`${lvont}Language`),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${lvont}marcCode`),
      namedNode(`${rdfs}label`),
      literal(`MARC 21 / USMARC code`, 'en'),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${lvont}marcCode`),
      namedNode(`${rdfs}seeAlso`),
      namedNode(ns19),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${lvont}means`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}ObjectProperty`),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${lvont}means`),
      namedNode(`${rdfs}comment`),
      literal(`the semiotic property of a natural language word meaning something, i.e. a
    relationship between words and resources that they represent (or represented) to a considerable number of humans`, 'en'),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${lvont}means`),
      namedNode(`${rdfs}label`),
      literal(`means`, 'en'),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${lvont}means`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${lvont}represents`),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${lvont}means`),
      namedNode(`${owl}inverseOf`),
      namedNode(`${lvont}label`),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${lvont}memberOf`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}ObjectProperty`),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${lvont}memberOf`),
      namedNode(`${rdfs}comment`),
      literal(`The property of being a member of a group.`, 'en'),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${lvont}memberOf`),
      namedNode(`${rdfs}label`),
      literal(`member of`, 'en'),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${lvont}memberOf`),
      namedNode(`${owl}inverseOf`),
      namedNode(`${lvont}hasMember`),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${lvont}memberOf`),
      namedNode(`${skos}note`),
      literal(`For instance for geographic regions.`, 'en'),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${lvont}narrower`),
      namedNode(`${lvont}somewhatSameAs`),
      namedNode(`${skos}narrower`),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${lvont}narrower`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}ObjectProperty`),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${lvont}narrower`),
      namedNode(`${rdfs}comment`),
      literal(`The property of having a narrower, less generic concept.`, 'en'),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${lvont}narrower`),
      namedNode(`${rdfs}label`),
      literal(`narrower`, 'en'),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${lvont}narrower`),
      namedNode(`${owl}inverseOf`),
      namedNode(`${lvont}broader`),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${lvont}narrower`),
      namedNode(`${skos}note`),
      literal(`Similar to skos:narrower but domain and range are not restricted to skos:Concept instances.`, 'en'),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${lvont}nearlySameAs`),
      namedNode(`${lvont}somewhatSameAs`),
      namedNode(`${owl}sameAs`),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${lvont}nearlySameAs`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}SymmetricProperty`),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${lvont}nearlySameAs`),
      namedNode(`${rdfs}comment`),
      literal(`The property of being at least nearly the same as something else. For instance,
    the geographical area comprising the island of Malta is nearly the same as the island of Malta.`, 'en'),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${lvont}nearlySameAs`),
      namedNode(`${rdfs}label`),
      literal(`nearly same as`, 'en'),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${lvont}nearlySameAs`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${lvont}somewhatSameAs`),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${lvont}nonRadicalStrokes`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}DatatypeProperty`),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${lvont}nonRadicalStrokes`),
      namedNode(`${rdfs}comment`),
      literal(`The property of a character conventionally being
    written with a specific number strokes, excluding the strokes of its radical.`, 'en'),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${lvont}nonRadicalStrokes`),
      namedNode(`${rdfs}domain`),
      namedNode(`${lvont}Character`),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${lvont}nonRadicalStrokes`),
      namedNode(`${rdfs}label`),
      literal(`non-radical strokes`, 'en'),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${lvont}nonRadicalStrokes`),
      namedNode(`${rdfs}range`),
      namedNode(`${xsd}nonNegativeInteger`),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${lvont}nonRadicalStrokes`),
      namedNode(`${skos}note`),
      literal(`Especially for CJK characters.`, 'en'),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${lvont}representedBy`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}ObjectProperty`),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${lvont}representedBy`),
      namedNode(`${rdfs}label`),
      literal(`represented by`, 'en'),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${lvont}representedBy`),
      namedNode(`${owl}inverseOf`),
      namedNode(`${lvont}represents`),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${lvont}represents`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}ObjectProperty`),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${lvont}represents`),
      namedNode(`${rdfs}comment`),
      literal(`the semiotic property of semantically representing something, i.e. a
    relationship between words and other signs and resources that they represent (or represented) to a considerable number of humans`, 'en'),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${lvont}represents`),
      namedNode(`${rdfs}label`),
      literal(`represents`, 'en'),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${lvont}scriptFor`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}ObjectProperty`),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${lvont}scriptFor`),
      namedNode(`${rdfs}comment`),
      literal(`The property of a script being used for a particular language by
   a considerable of language users (but not necessarily the majority of all language users).`, 'en'),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${lvont}scriptFor`),
      namedNode(`${rdfs}domain`),
      namedNode(`${lvont}Script`),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${lvont}scriptFor`),
      namedNode(`${rdfs}label`),
      literal(`script for`, 'en'),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${lvont}scriptFor`),
      namedNode(`${rdfs}range`),
      namedNode(`${lvont}Language`),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${lvont}scriptFor`),
      namedNode(`${owl}inverseOf`),
      namedNode(`${lvont}usesScript`),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${lvont}somewhatSameAs`),
      namedNode(`${lvont}somewhatSameAs`),
      namedNode(`${skos}broadMatch`),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${lvont}somewhatSameAs`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}SymmetricProperty`),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${lvont}somewhatSameAs`),
      namedNode(`${rdfs}comment`),
      literal(`The property of being at least somewhat the same as something else. For instance,
    the City of Los Angeles is somewhat the same as the Greater Los Angeles area.`, 'en'),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${lvont}somewhatSameAs`),
      namedNode(`${rdfs}label`),
      literal(`somewhat same as`, 'en'),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${lvont}strength`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}ObjectProperty`),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${lvont}strength`),
      namedNode(`${rdfs}comment`),
      literal(`The strength of an rdf:Statement, given is a value in [0,1].`, 'en'),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${lvont}strength`),
      namedNode(`${rdfs}domain`),
      namedNode(`${rdf}Statement`),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${lvont}strength`),
      namedNode(`${rdfs}label`),
      literal(`strength`, 'en'),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${lvont}strictlySameAs`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}SymmetricProperty`),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${lvont}strictlySameAs`),
      namedNode(`${rdfs}comment`),
      literal(`The property of genuine identity in the Leibnizian sense.`, 'en'),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${lvont}strictlySameAs`),
      namedNode(`${rdfs}label`),
      literal(`same as`, 'en'),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${lvont}strictlySameAs`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${lvont}nearlySameAs`),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${lvont}strictlySameAs`),
      namedNode(`${owl}sameAs`),
      namedNode(`${owl}sameAs`),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${lvont}translation`),
      namedNode(`${lvont}nearlySameAs`),
      namedNode(`${ns7}translation`),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${lvont}translation`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}SymmetricProperty`),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${lvont}translation`),
      namedNode(`${rdfs}comment`),
      literal(`translational equivalence between words and other signs
    and resources that they represent to or represented to a considerable number of humans`, 'en'),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${lvont}translation`),
      namedNode(`${rdfs}label`),
      literal(`translation`, 'en'),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${lvont}translation`),
      namedNode(`${skos}note`),
      literal(`Domain and range are usually Term objects, however string literals are acceptable as well for the range.`, 'en'),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${lvont}usedIn`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}ObjectProperty`),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${lvont}usedIn`),
      namedNode(`${rdfs}comment`),
      literal(`The property of a language or writing system
    being used somewhat extensively in a particular geographical region 
    at some point in time.`, 'en'),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${lvont}usedIn`),
      namedNode(`${rdfs}label`),
      literal(`used in`, 'en'),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${lvont}usedIn`),
      namedNode(`${rdfs}range`),
      namedNode(`${lvont}GeographicRegion`),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${lvont}usesScript`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}ObjectProperty`),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${lvont}usesScript`),
      namedNode(`${rdfs}comment`),
      literal(`The property of a language being written or having being written in a specific 
    script by a considerable group of language users.`, 'en'),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${lvont}usesScript`),
      namedNode(`${rdfs}label`),
      literal(`uses script`, 'en'),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${lvont}usesScript`),
      namedNode(`${rdfs}range`),
      namedNode(`${lvont}Script`),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${lvont}usesScript`),
      namedNode(`${owl}inverseOf`),
      namedNode(`${lvont}scriptFor`),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${lvont}variant`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}ObjectProperty`),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${lvont}variant`),
      namedNode(`${rdfs}comment`),
      literal(`The property of being a variant of another resource.`, 'en'),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${lvont}variant`),
      namedNode(`${rdfs}label`),
      literal(`variant`, 'en'),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${lvont}variant`),
      namedNode(`${skos}note`),
      literal(`Especially for terms and characters.`, 'en'),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${ns21}ontology`),
      namedNode(`${dcterms}contributor`),
      namedNode(`${ns22}bernard-vatant`),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${ns21}ontology`),
      namedNode(`${dcterms}creator`),
      namedNode(`${ns23}GDM`),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${ns21}ontology`),
      namedNode(`${dcterms}modified`),
      literal(`2019-01-16`, namedNode('xsd:date')),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${ns21}ontology`),
      namedNode(`${dcterms}subject`),
      namedNode(`${ns24}Language`),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${ns21}ontology`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}Ontology`),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${ns21}ontology`),
      namedNode(`${rdfs}comment`),
      literal(`Lexvo.org Ontology`),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${ns21}ontology`),
      namedNode(`${rdfs}label`),
      literal(`Lexvo.org Ontology`, 'en'),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${ns21}ontology`),
      namedNode(`${rdfs}seeAlso`),
      namedNode(ns25),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${ns21}ontology`),
      namedNode(`${owl}versionInfo`),
      literal(`Lexvo.org Ontology Version 0.24 (2019-01-16)`, 'en'),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${ns21}ontology`),
      namedNode(`${foaf}homepage`),
      namedNode(ns25),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${owl}sameAs`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${lvont}nearlySameAs`),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${skos}broadMatch`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${lvont}somewhatSameAs`),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${skos}exactMatch`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${lvont}nearlySameAs`),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${skosxl}altLabel`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${lvont}label`),
      namedNode(lvont)
    ),
    quad(
      namedNode(`${skosxl}prefLabel`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${lvont}label`),
      namedNode(lvont)
    ),

  ]
}
