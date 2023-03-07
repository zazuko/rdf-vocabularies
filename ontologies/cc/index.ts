/* This file was automatically generated. Do not edit by hand. */

const {
  cc,
  rdf,
  rdfs,
  dcterms,
  ns5,
  owl,
  xhv,
  ns8
} = {
  'cc': 'http://creativecommons.org/ns#',
  'rdf': 'http://www.w3.org/1999/02/22-rdf-syntax-ns#',
  'rdfs': 'http://www.w3.org/2000/01/rdf-schema#',
  'dcterms': 'http://purl.org/dc/terms/',
  'ns5': 'http://www.w3.org/2001/XMLSchema-datatypes#',
  'owl': 'http://www.w3.org/2002/07/owl#',
  'xhv': 'http://www.w3.org/1999/xhtml/vocab#',
  'ns8': 'http://web.resource.org/cc/'
}

export default ({ literal, namedNode, quad }: import('rdf-js').DataFactory): import('rdf-js').Quad[] => {
  return [
    quad(
      namedNode(`${cc}Attribution`),
      namedNode(`${rdf}type`),
      namedNode(`${cc}Requirement`),
      namedNode(cc)
    ),
    quad(
      namedNode(`${cc}Attribution`),
      namedNode(`${rdfs}comment`),
      literal(`credit be given to
		    copyright holder and/or author`, 'en-us'),
      namedNode(cc)
    ),
    quad(
      namedNode(`${cc}Attribution`),
      namedNode(`${rdfs}label`),
      literal(`Attribution`, 'en-us'),
      namedNode(cc)
    ),
    quad(
      namedNode(`${cc}CommercialUse`),
      namedNode(`${rdf}type`),
      namedNode(`${cc}Prohibition`),
      namedNode(cc)
    ),
    quad(
      namedNode(`${cc}CommercialUse`),
      namedNode(`${rdfs}comment`),
      literal(`exercising rights for
		    commercial purposes`, 'en-us'),
      namedNode(cc)
    ),
    quad(
      namedNode(`${cc}CommercialUse`),
      namedNode(`${rdfs}label`),
      literal(`Commercial Use`, 'en-us'),
      namedNode(cc)
    ),
    quad(
      namedNode(`${cc}Copyleft`),
      namedNode(`${rdf}type`),
      namedNode(`${cc}Requirement`),
      namedNode(cc)
    ),
    quad(
      namedNode(`${cc}Copyleft`),
      namedNode(`${rdfs}comment`),
      literal(`derivative and
		    combined works must be licensed under specified
		    terms, similar to those on the original
		    work`, 'en-us'),
      namedNode(cc)
    ),
    quad(
      namedNode(`${cc}Copyleft`),
      namedNode(`${rdfs}label`),
      literal(`Copyleft`, 'en-us'),
      namedNode(cc)
    ),
    quad(
      namedNode(`${cc}DerivativeWorks`),
      namedNode(`${rdf}type`),
      namedNode(`${cc}Permission`),
      namedNode(cc)
    ),
    quad(
      namedNode(`${cc}DerivativeWorks`),
      namedNode(`${rdfs}comment`),
      literal(`distribution of
		    derivative works`, 'en-us'),
      namedNode(cc)
    ),
    quad(
      namedNode(`${cc}DerivativeWorks`),
      namedNode(`${rdfs}label`),
      literal(`Derivative Works`, 'en-us'),
      namedNode(cc)
    ),
    quad(
      namedNode(`${cc}Distribution`),
      namedNode(`${rdf}type`),
      namedNode(`${cc}Permission`),
      namedNode(cc)
    ),
    quad(
      namedNode(`${cc}Distribution`),
      namedNode(`${rdfs}comment`),
      literal(`distribution, public
		    display, and publicly performance`, 'en-us'),
      namedNode(cc)
    ),
    quad(
      namedNode(`${cc}Distribution`),
      namedNode(`${rdfs}label`),
      literal(`Distribution`, 'en-us'),
      namedNode(cc)
    ),
    quad(
      namedNode(`${cc}HighIncomeNationUse`),
      namedNode(`${rdf}type`),
      namedNode(`${cc}Prohibition`),
      namedNode(cc)
    ),
    quad(
      namedNode(`${cc}HighIncomeNationUse`),
      namedNode(`${rdfs}comment`),
      literal(`use in a
		    non-developing country`, 'en-us'),
      namedNode(cc)
    ),
    quad(
      namedNode(`${cc}HighIncomeNationUse`),
      namedNode(`${rdfs}label`),
      literal(`High Income Nation Use`, 'en-us'),
      namedNode(cc)
    ),
    quad(
      namedNode(`${cc}Jurisdiction`),
      namedNode(`${rdf}type`),
      namedNode(`${rdfs}Class`),
      namedNode(cc)
    ),
    quad(
      namedNode(`${cc}Jurisdiction`),
      namedNode(`${rdfs}comment`),
      literal(`the legal jurisdiction
		    of a license`, 'en-us'),
      namedNode(cc)
    ),
    quad(
      namedNode(`${cc}Jurisdiction`),
      namedNode(`${rdfs}label`),
      literal(`Jurisdiction`, 'en-us'),
      namedNode(cc)
    ),
    quad(
      namedNode(`${cc}LesserCopyleft`),
      namedNode(`${rdf}type`),
      namedNode(`${cc}Requirement`),
      namedNode(cc)
    ),
    quad(
      namedNode(`${cc}LesserCopyleft`),
      namedNode(`${rdfs}comment`),
      literal(`derivative works must
		    be licensed under specified terms, with at least
		    the same conditions as the original work;
		    combinations with the work may be licensed under
		    different terms`, 'en-us'),
      namedNode(cc)
    ),
    quad(
      namedNode(`${cc}LesserCopyleft`),
      namedNode(`${rdfs}label`),
      literal(`Lesser Copyleft`, 'en-us'),
      namedNode(cc)
    ),
    quad(
      namedNode(`${cc}License`),
      namedNode(`${rdf}type`),
      namedNode(`${rdfs}Class`),
      namedNode(cc)
    ),
    quad(
      namedNode(`${cc}License`),
      namedNode(`${rdfs}comment`),
      literal(`a set of
		    requests/permissions to users of a Work, e.g. a
		    copyright license, the public domain, information
		    for distributors`, 'en-us'),
      namedNode(cc)
    ),
    quad(
      namedNode(`${cc}License`),
      namedNode(`${rdfs}label`),
      literal(`License`, 'en-us'),
      namedNode(cc)
    ),
    quad(
      namedNode(`${cc}License`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${dcterms}LicenseDocument`),
      namedNode(cc)
    ),
    quad(
      namedNode(`${cc}Notice`),
      namedNode(`${rdf}type`),
      namedNode(`${cc}Requirement`),
      namedNode(cc)
    ),
    quad(
      namedNode(`${cc}Notice`),
      namedNode(`${rdfs}comment`),
      literal(`copyright and license
		    notices be kept intact`, 'en-us'),
      namedNode(cc)
    ),
    quad(
      namedNode(`${cc}Notice`),
      namedNode(`${rdfs}label`),
      literal(`Notice`, 'en-us'),
      namedNode(cc)
    ),
    quad(
      namedNode(`${cc}Permission`),
      namedNode(`${rdf}type`),
      namedNode(`${rdfs}Class`),
      namedNode(cc)
    ),
    quad(
      namedNode(`${cc}Permission`),
      namedNode(`${rdfs}comment`),
      literal(`an action that may or
		    may not be allowed or desired`, 'en-us'),
      namedNode(cc)
    ),
    quad(
      namedNode(`${cc}Permission`),
      namedNode(`${rdfs}label`),
      literal(`Permission`, 'en-us'),
      namedNode(cc)
    ),
    quad(
      namedNode(`${cc}Prohibition`),
      namedNode(`${rdf}type`),
      namedNode(`${rdfs}Class`),
      namedNode(cc)
    ),
    quad(
      namedNode(`${cc}Prohibition`),
      namedNode(`${rdfs}comment`),
      literal(`something you may be
		    asked not to do`, 'en-us'),
      namedNode(cc)
    ),
    quad(
      namedNode(`${cc}Prohibition`),
      namedNode(`${rdfs}label`),
      literal(`Prohibition`, 'en-us'),
      namedNode(cc)
    ),
    quad(
      namedNode(`${cc}Reproduction`),
      namedNode(`${rdf}type`),
      namedNode(`${cc}Permission`),
      namedNode(cc)
    ),
    quad(
      namedNode(`${cc}Reproduction`),
      namedNode(`${rdfs}comment`),
      literal(`making multiple
		    copies`, 'en-us'),
      namedNode(cc)
    ),
    quad(
      namedNode(`${cc}Reproduction`),
      namedNode(`${rdfs}label`),
      literal(`Reproduction`, 'en-us'),
      namedNode(cc)
    ),
    quad(
      namedNode(`${cc}Requirement`),
      namedNode(`${rdf}type`),
      namedNode(`${rdfs}Class`),
      namedNode(cc)
    ),
    quad(
      namedNode(`${cc}Requirement`),
      namedNode(`${rdfs}comment`),
      literal(`an action that may or
		    may not be requested of you`, 'en-us'),
      namedNode(cc)
    ),
    quad(
      namedNode(`${cc}Requirement`),
      namedNode(`${rdfs}label`),
      literal(`Requirement`, 'en-us'),
      namedNode(cc)
    ),
    quad(
      namedNode(`${cc}ShareAlike`),
      namedNode(`${rdf}type`),
      namedNode(`${cc}Requirement`),
      namedNode(cc)
    ),
    quad(
      namedNode(`${cc}ShareAlike`),
      namedNode(`${rdfs}comment`),
      literal(`derivative works be
		    licensed under the same terms or compatible terms
		    as the original work`, 'en-us'),
      namedNode(cc)
    ),
    quad(
      namedNode(`${cc}ShareAlike`),
      namedNode(`${rdfs}label`),
      literal(`Share Alike`, 'en-us'),
      namedNode(cc)
    ),
    quad(
      namedNode(`${cc}Sharing`),
      namedNode(`${rdf}type`),
      namedNode(`${cc}Permission`),
      namedNode(cc)
    ),
    quad(
      namedNode(`${cc}Sharing`),
      namedNode(`${rdfs}comment`),
      literal(`permits commercial
		    derivatives, but only non-commercial
		    distribution`, 'en-us'),
      namedNode(cc)
    ),
    quad(
      namedNode(`${cc}Sharing`),
      namedNode(`${rdfs}label`),
      literal(`Sharing`, 'en-us'),
      namedNode(cc)
    ),
    quad(
      namedNode(`${cc}SourceCode`),
      namedNode(`${rdf}type`),
      namedNode(`${cc}Requirement`),
      namedNode(cc)
    ),
    quad(
      namedNode(`${cc}SourceCode`),
      namedNode(`${rdfs}comment`),
      literal(`source code (the
		    preferred form for making modifications) must be
		    provided when exercising some rights granted by
		    the license.`, 'en-us'),
      namedNode(cc)
    ),
    quad(
      namedNode(`${cc}SourceCode`),
      namedNode(`${rdfs}label`),
      literal(`Source Code`, 'en-us'),
      namedNode(cc)
    ),
    quad(
      namedNode(`${cc}Work`),
      namedNode(`${rdf}type`),
      namedNode(`${rdfs}Class`),
      namedNode(cc)
    ),
    quad(
      namedNode(`${cc}Work`),
      namedNode(`${rdfs}comment`),
      literal(`a potentially
		    copyrightable work`, 'en-us'),
      namedNode(cc)
    ),
    quad(
      namedNode(`${cc}Work`),
      namedNode(`${rdfs}label`),
      literal(`Work`, 'en-us'),
      namedNode(cc)
    ),
    quad(
      namedNode(`${cc}attributionName`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(cc)
    ),
    quad(
      namedNode(`${cc}attributionName`),
      namedNode(`${rdfs}domain`),
      namedNode(`${cc}Work`),
      namedNode(cc)
    ),
    quad(
      namedNode(`${cc}attributionName`),
      namedNode(`${rdfs}range`),
      namedNode(`${rdfs}Literal`),
      namedNode(cc)
    ),
    quad(
      namedNode(`${cc}attributionURL`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(cc)
    ),
    quad(
      namedNode(`${cc}attributionURL`),
      namedNode(`${rdfs}domain`),
      namedNode(`${cc}Work`),
      namedNode(cc)
    ),
    quad(
      namedNode(`${cc}attributionURL`),
      namedNode(`${rdfs}range`),
      namedNode(`${rdfs}Resource`),
      namedNode(cc)
    ),
    quad(
      namedNode(`${cc}deprecatedOn`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(cc)
    ),
    quad(
      namedNode(`${cc}deprecatedOn`),
      namedNode(`${rdfs}domain`),
      namedNode(`${cc}License`),
      namedNode(cc)
    ),
    quad(
      namedNode(`${cc}deprecatedOn`),
      namedNode(`${rdfs}label`),
      literal(`deprecated
		  on`, 'en-us'),
      namedNode(cc)
    ),
    quad(
      namedNode(`${cc}deprecatedOn`),
      namedNode(`${rdfs}range`),
      namedNode(`${ns5}date`),
      namedNode(cc)
    ),
    quad(
      namedNode(`${cc}jurisdiction`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(cc)
    ),
    quad(
      namedNode(`${cc}jurisdiction`),
      namedNode(`${rdfs}domain`),
      namedNode(`${cc}License`),
      namedNode(cc)
    ),
    quad(
      namedNode(`${cc}jurisdiction`),
      namedNode(`${rdfs}label`),
      literal(`jurisdiction`, 'en-us'),
      namedNode(cc)
    ),
    quad(
      namedNode(`${cc}jurisdiction`),
      namedNode(`${rdfs}range`),
      namedNode(`${cc}Jurisdiction`),
      namedNode(cc)
    ),
    quad(
      namedNode(`${cc}legalcode`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(cc)
    ),
    quad(
      namedNode(`${cc}legalcode`),
      namedNode(`${rdfs}domain`),
      namedNode(`${cc}License`),
      namedNode(cc)
    ),
    quad(
      namedNode(`${cc}legalcode`),
      namedNode(`${rdfs}range`),
      namedNode(`${rdfs}Resource`),
      namedNode(cc)
    ),
    quad(
      namedNode(`${cc}license`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(cc)
    ),
    quad(
      namedNode(`${cc}license`),
      namedNode(`${rdfs}domain`),
      namedNode(`${cc}Work`),
      namedNode(cc)
    ),
    quad(
      namedNode(`${cc}license`),
      namedNode(`${rdfs}label`),
      literal(`has
		  license`, 'en-us'),
      namedNode(cc)
    ),
    quad(
      namedNode(`${cc}license`),
      namedNode(`${rdfs}range`),
      namedNode(`${cc}License`),
      namedNode(cc)
    ),
    quad(
      namedNode(`${cc}license`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${dcterms}license`),
      namedNode(cc)
    ),
    quad(
      namedNode(`${cc}license`),
      namedNode(`${owl}sameAs`),
      namedNode(`${xhv}license`),
      namedNode(cc)
    ),
    quad(
      namedNode(`${cc}morePermissions`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(cc)
    ),
    quad(
      namedNode(`${cc}morePermissions`),
      namedNode(`${rdfs}domain`),
      namedNode(`${cc}Work`),
      namedNode(cc)
    ),
    quad(
      namedNode(`${cc}morePermissions`),
      namedNode(`${rdfs}range`),
      namedNode(`${rdfs}Resource`),
      namedNode(cc)
    ),
    quad(
      namedNode(`${cc}morePermissions`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${dcterms}relation`),
      namedNode(cc)
    ),
    quad(
      namedNode(`${cc}permits`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(cc)
    ),
    quad(
      namedNode(`${cc}permits`),
      namedNode(`${rdfs}domain`),
      namedNode(`${cc}License`),
      namedNode(cc)
    ),
    quad(
      namedNode(`${cc}permits`),
      namedNode(`${rdfs}label`),
      literal(`permits`, 'en-us'),
      namedNode(cc)
    ),
    quad(
      namedNode(`${cc}permits`),
      namedNode(`${rdfs}range`),
      namedNode(`${cc}Permission`),
      namedNode(cc)
    ),
    quad(
      namedNode(`${cc}prohibits`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(cc)
    ),
    quad(
      namedNode(`${cc}prohibits`),
      namedNode(`${rdfs}domain`),
      namedNode(`${cc}License`),
      namedNode(cc)
    ),
    quad(
      namedNode(`${cc}prohibits`),
      namedNode(`${rdfs}label`),
      literal(`prohibits`, 'en-us'),
      namedNode(cc)
    ),
    quad(
      namedNode(`${cc}prohibits`),
      namedNode(`${rdfs}range`),
      namedNode(`${cc}Prohibition`),
      namedNode(cc)
    ),
    quad(
      namedNode(`${cc}requires`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(cc)
    ),
    quad(
      namedNode(`${cc}requires`),
      namedNode(`${rdfs}domain`),
      namedNode(`${cc}License`),
      namedNode(cc)
    ),
    quad(
      namedNode(`${cc}requires`),
      namedNode(`${rdfs}label`),
      literal(`requires`, 'en-us'),
      namedNode(cc)
    ),
    quad(
      namedNode(`${cc}requires`),
      namedNode(`${rdfs}range`),
      namedNode(`${cc}Requirement`),
      namedNode(cc)
    ),
    quad(
      namedNode(`${cc}useGuidelines`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(cc)
    ),
    quad(
      namedNode(`${cc}useGuidelines`),
      namedNode(`${rdfs}domain`),
      namedNode(`${cc}Work`),
      namedNode(cc)
    ),
    quad(
      namedNode(`${cc}useGuidelines`),
      namedNode(`${rdfs}range`),
      namedNode(`${rdfs}Resource`),
      namedNode(cc)
    ),
    quad(
      namedNode(`${cc}useGuidelines`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${dcterms}relation`),
      namedNode(cc)
    ),
    quad(
      namedNode(`${ns8}Attribution`),
      namedNode(`${owl}equivalentClass`),
      namedNode(`${cc}Attribution`),
      namedNode(cc)
    ),
    quad(
      namedNode(`${ns8}CommercialUse`),
      namedNode(`${owl}equivalentClass`),
      namedNode(`${cc}CommercialUse`),
      namedNode(cc)
    ),
    quad(
      namedNode(`${ns8}DerivativeWorks`),
      namedNode(`${owl}equivalentClass`),
      namedNode(`${cc}DerivativeWorks`),
      namedNode(cc)
    ),
    quad(
      namedNode(`${ns8}Distribution`),
      namedNode(`${owl}equivalentClass`),
      namedNode(`${cc}Distribution`),
      namedNode(cc)
    ),
    quad(
      namedNode(`${ns8}License`),
      namedNode(`${owl}equivalentClass`),
      namedNode(`${cc}License`),
      namedNode(cc)
    ),
    quad(
      namedNode(`${ns8}Notice`),
      namedNode(`${owl}equivalentClass`),
      namedNode(`${cc}Notice`),
      namedNode(cc)
    ),
    quad(
      namedNode(`${ns8}Permission`),
      namedNode(`${owl}equivalentClass`),
      namedNode(`${cc}Permission`),
      namedNode(cc)
    ),
    quad(
      namedNode(`${ns8}Prohibition`),
      namedNode(`${owl}equivalentClass`),
      namedNode(`${cc}Prohibition`),
      namedNode(cc)
    ),
    quad(
      namedNode(`${ns8}Reproduction`),
      namedNode(`${owl}equivalentClass`),
      namedNode(`${cc}Reproduction`),
      namedNode(cc)
    ),
    quad(
      namedNode(`${ns8}Requirement`),
      namedNode(`${owl}equivalentClass`),
      namedNode(`${cc}Requirement`),
      namedNode(cc)
    ),
    quad(
      namedNode(`${ns8}ShareAlike`),
      namedNode(`${owl}equivalentClass`),
      namedNode(`${cc}ShareAlike`),
      namedNode(cc)
    ),
    quad(
      namedNode(`${ns8}SourceCode`),
      namedNode(`${owl}equivalentClass`),
      namedNode(`${cc}SourceCode`),
      namedNode(cc)
    ),
    quad(
      namedNode(`${ns8}Work`),
      namedNode(`${owl}equivalentClass`),
      namedNode(`${cc}Work`),
      namedNode(cc)
    ),
    quad(
      namedNode(`${ns8}license`),
      namedNode(`${owl}equivalentProperty`),
      namedNode(`${cc}license`),
      namedNode(cc)
    ),
    quad(
      namedNode(`${ns8}permits`),
      namedNode(`${owl}equivalentProperty`),
      namedNode(`${cc}permits`),
      namedNode(cc)
    ),
    quad(
      namedNode(`${ns8}prohibits`),
      namedNode(`${owl}equivalentProperty`),
      namedNode(`${cc}prohibits`),
      namedNode(cc)
    ),
    quad(
      namedNode(`${ns8}requires`),
      namedNode(`${owl}equivalentProperty`),
      namedNode(`${cc}requires`),
      namedNode(cc)
    ),

  ]
}
