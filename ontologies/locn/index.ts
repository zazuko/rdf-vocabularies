/* This file was automatically generated. Do not edit by hand. */

const {
  dcterms,
  locn,
  vann,
  rdfs,
  vs,
  rdf,
  ns7,
  wdrs,
  ns9,
  dcat,
  ns11,
  cc,
  ns13,
  xsd,
  ns15,
  ns16,
  owl,
  ns18,
  foaf,
  ns20,
  schema,
  ns22,
  ns23,
  ns24,
  ns25,
  ns26,
  ns27,
  ns28
} = {
  'dcterms': 'http://purl.org/dc/terms/',
  'locn': 'http://www.w3.org/ns/locn#',
  'vann': 'http://purl.org/vocab/vann/',
  'rdfs': 'http://www.w3.org/2000/01/rdf-schema#',
  'vs': 'http://www.w3.org/2003/06/sw-vocab-status/ns#',
  'rdf': 'http://www.w3.org/1999/02/22-rdf-syntax-ns#',
  'ns7': 'http://www.w3.org/ns/',
  'wdrs': 'http://www.w3.org/2007/05/powder-s#',
  'ns9': 'https://joinup.ec.europa.eu/node/',
  'dcat': 'http://www.w3.org/ns/dcat#',
  'ns11': 'http://www.w3.org/ns/formats/data/',
  'cc': 'http://creativecommons.org/ns#',
  'ns13': 'http://ec.europa.eu/',
  'xsd': 'http://www.w3.org/2001/XMLSchema#',
  'ns15': 'https://joinup.ec.europa.eu/category/licence/',
  'ns16': 'http://purl.org/vocommons/voaf#',
  'owl': 'http://www.w3.org/2002/07/owl#',
  'ns18': 'http://www.w3.org/2001/02pd/rec54#',
  'foaf': 'http://xmlns.com/foaf/0.1/',
  'ns20': 'https://www.w3.org/ns/',
  'schema': 'http://schema.org/',
  'ns22': 'http://philarcher.org/foaf.rdf#',
  'ns23': 'http://philarcher.org/',
  'ns24': 'http://andrea-perego.name/foaf/#',
  'ns25': 'http://about.me/',
  'ns26': 'http://www.w3.org/community/locadd/',
  'ns27': 'http://www.w3.org/',
  'ns28': 'https://ec.europa.eu/jrc/'
}

export default ({ blankNode, literal, namedNode, quad }: import('rdf-js').DataFactory): import('rdf-js').Quad[] => {
  const blankNodes: import('rdf-js').BlankNode[] = []
  for (let i = 0; i < 8; i++) {
    blankNodes.push(blankNode())
  }

  return [
    quad(
      namedNode(`${dcterms}Location`),
      namedNode(`${dcterms}identifier`),
      literal(`dcterms:Location`),
      namedNode(locn)
    ),
    quad(
      namedNode(`${dcterms}Location`),
      namedNode(`${vann}usageNote`),
      literal(`This is the key class for the ISA Programme Location Core Vocabulary and represents any location, irrespective of size or other restriction.`, 'en'),
      namedNode(locn)
    ),
    quad(
      namedNode(`${dcterms}Location`),
      namedNode(`${rdfs}comment`),
      literal(`dcterms:Location class fully represents the ISA Programme Location Core Vocabulary class of Location.`, 'en'),
      namedNode(locn)
    ),
    quad(
      namedNode(`${dcterms}Location`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(dcterms),
      namedNode(locn)
    ),
    quad(
      namedNode(`${dcterms}Location`),
      namedNode(`${rdfs}label`),
      literal(`Location`, 'en'),
      namedNode(locn)
    ),
    quad(
      namedNode(`${dcterms}Location`),
      namedNode(`${vs}term_status`),
      literal(`testing`, 'en'),
      namedNode(locn)
    ),
    quad(
      namedNode(`${rdfs}seeAlso`),
      namedNode(`${dcterms}identifier`),
      literal(`rdfs:seeAlso`),
      namedNode(locn)
    ),
    quad(
      namedNode(`${rdfs}seeAlso`),
      namedNode(`${vann}usageNote`),
      literal(`Used in the ISA Programme Location Core Vocabulary to provide a URI that identifies the location. This should be expressed using the rdfs:seeAlso property unless the identifier is already the subject of the description. Examples include URIs from GeoNames.org and DBpedia such as http://dbpedia.org/resource/ISO_3166-2:XX where XX is the ISO 3166 two character code for a country.`, 'en'),
      namedNode(locn)
    ),
    quad(
      namedNode(`${rdfs}seeAlso`),
      namedNode(`${rdfs}comment`),
      literal(`rdfs:seeAlso fully represents the ISA Programme Location Core Vocabulary concept of a geographic identifier.`, 'en'),
      namedNode(locn)
    ),
    quad(
      namedNode(`${rdfs}seeAlso`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(rdfs),
      namedNode(locn)
    ),
    quad(
      namedNode(`${rdfs}seeAlso`),
      namedNode(`${rdfs}label`),
      literal(`geographic identifier`, 'en'),
      namedNode(locn)
    ),
    quad(
      namedNode(`${rdfs}seeAlso`),
      namedNode(`${vs}term_status`),
      literal(`unstable`, 'en'),
      namedNode(locn)
    ),
    quad(
      namedNode(`${locn}Address`),
      namedNode(`${dcterms}identifier`),
      literal(`locn:Address`),
      namedNode(locn)
    ),
    quad(
      namedNode(`${locn}Address`),
      namedNode(`${rdf}type`),
      namedNode(`${rdfs}Class`),
      namedNode(locn)
    ),
    quad(
      namedNode(`${locn}Address`),
      namedNode(`${rdfs}comment`),
      literal(`An "address representation" as conceptually defined by the INSPIRE Address Representation data type. The locn:addressId property may be used to link this locn:Address to other representations.`, 'en'),
      namedNode(locn)
    ),
    quad(
      namedNode(`${locn}Address`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(`${ns7}locn`),
      namedNode(locn)
    ),
    quad(
      namedNode(`${locn}Address`),
      namedNode(`${rdfs}label`),
      literal(`Address`, 'en'),
      namedNode(locn)
    ),
    quad(
      namedNode(`${locn}Address`),
      namedNode(`${vs}term_status`),
      literal(`testing`, 'en'),
      namedNode(locn)
    ),
    quad(
      namedNode(`${locn}Address`),
      namedNode(`${wdrs}describedby`),
      namedNode(`${ns9}55858`),
      namedNode(locn)
    ),
    quad(
      namedNode(`${locn}Geometry`),
      namedNode(`${dcterms}identifier`),
      literal(`locn:Geometry`),
      namedNode(locn)
    ),
    quad(
      namedNode(`${locn}Geometry`),
      namedNode(`${vann}usageNote`),
      literal(`This class defines the notion of "geometry" at the conceptual level, and it shall be encoded by using different formats (see usage note of the locn:geometry property).`, 'en'),
      namedNode(locn)
    ),
    quad(
      namedNode(`${locn}Geometry`),
      namedNode(`${rdf}type`),
      namedNode(`${rdfs}Class`),
      namedNode(locn)
    ),
    quad(
      namedNode(`${locn}Geometry`),
      namedNode(`${rdfs}comment`),
      literal(`The locn:Geometry class provides the means to identify a location as a point, line, polygon, etc. expressed using coordinates in some coordinate reference system.`, 'en'),
      namedNode(locn)
    ),
    quad(
      namedNode(`${locn}Geometry`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(`${ns7}locn`),
      namedNode(locn)
    ),
    quad(
      namedNode(`${locn}Geometry`),
      namedNode(`${rdfs}label`),
      literal(`Geometry`, 'en'),
      namedNode(locn)
    ),
    quad(
      namedNode(`${locn}Geometry`),
      namedNode(`${vs}term_status`),
      literal(`unstable`, 'en'),
      namedNode(locn)
    ),
    quad(
      namedNode(`${locn}address`),
      namedNode(`${dcterms}identifier`),
      literal(`locn:address`),
      namedNode(locn)
    ),
    quad(
      namedNode(`${locn}address`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(locn)
    ),
    quad(
      namedNode(`${locn}address`),
      namedNode(`${rdfs}comment`),
      literal(`The locn:address property relationship associates any resource with the locn:Address class `, 'en'),
      namedNode(locn)
    ),
    quad(
      namedNode(`${locn}address`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(`${ns7}locn`),
      namedNode(locn)
    ),
    quad(
      namedNode(`${locn}address`),
      namedNode(`${rdfs}label`),
      literal(`address`, 'en'),
      namedNode(locn)
    ),
    quad(
      namedNode(`${locn}address`),
      namedNode(`${rdfs}range`),
      namedNode(`${locn}Address`),
      namedNode(locn)
    ),
    quad(
      namedNode(`${locn}address`),
      namedNode(`${vs}term_status`),
      literal(`testing`, 'en'),
      namedNode(locn)
    ),
    quad(
      namedNode(`${locn}addressArea`),
      namedNode(`${dcterms}identifier`),
      literal(`locn:addressArea`),
      namedNode(locn)
    ),
    quad(
      namedNode(`${locn}addressArea`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(locn)
    ),
    quad(
      namedNode(`${locn}addressArea`),
      namedNode(`${rdfs}comment`),
      literal(`The name or names of a geographic area or locality that groups a number of addressable objects for addressing purposes, without being an administrative unit. This would typically be part of a city, a neighbourhood or village. The domain of locn:addressArea is locn:Address.`, 'en'),
      namedNode(locn)
    ),
    quad(
      namedNode(`${locn}addressArea`),
      namedNode(`${rdfs}domain`),
      namedNode(`${locn}Address`),
      namedNode(locn)
    ),
    quad(
      namedNode(`${locn}addressArea`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(`${ns7}locn`),
      namedNode(locn)
    ),
    quad(
      namedNode(`${locn}addressArea`),
      namedNode(`${rdfs}label`),
      literal(`address area`, 'en'),
      namedNode(locn)
    ),
    quad(
      namedNode(`${locn}addressArea`),
      namedNode(`${rdfs}range`),
      namedNode(`${rdfs}Literal`),
      namedNode(locn)
    ),
    quad(
      namedNode(`${locn}addressArea`),
      namedNode(`${vs}term_status`),
      literal(`testing`, 'en'),
      namedNode(locn)
    ),
    quad(
      namedNode(`${locn}addressId`),
      namedNode(`${dcterms}identifier`),
      literal(`locn:addressId`),
      namedNode(locn)
    ),
    quad(
      namedNode(`${locn}addressId`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(locn)
    ),
    quad(
      namedNode(`${locn}addressId`),
      namedNode(`${rdfs}comment`),
      literal(`The concept of adding a globally unique identifier for each instance of an address is a crucial part of the INSPIRE data spec. The domain of locn:addressId is locn:Address.`, 'en'),
      namedNode(locn)
    ),
    quad(
      namedNode(`${locn}addressId`),
      namedNode(`${rdfs}domain`),
      namedNode(`${locn}Address`),
      namedNode(locn)
    ),
    quad(
      namedNode(`${locn}addressId`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(`${ns7}locn`),
      namedNode(locn)
    ),
    quad(
      namedNode(`${locn}addressId`),
      namedNode(`${rdfs}label`),
      literal(`address ID`, 'en'),
      namedNode(locn)
    ),
    quad(
      namedNode(`${locn}addressId`),
      namedNode(`${rdfs}range`),
      namedNode(`${rdfs}Literal`),
      namedNode(locn)
    ),
    quad(
      namedNode(`${locn}addressId`),
      namedNode(`${vs}term_status`),
      literal(`unstable`, 'en'),
      namedNode(locn)
    ),
    quad(
      namedNode(`${locn}adminUnitL1`),
      namedNode(`${dcterms}identifier`),
      literal(`locn:adminUnitL1`),
      namedNode(locn)
    ),
    quad(
      namedNode(`${locn}adminUnitL1`),
      namedNode(`${vann}usageNote`),
      literal(`Best practice is to use the ISO 3166-1 code but if this is inappropriate for the context, country names should be provided in a consistent manner to reduce ambiguity. For example, either write 'United Kingdom' or 'UK' consistently throughout the data set and avoid mixing the two.`, 'en'),
      namedNode(locn)
    ),
    quad(
      namedNode(`${locn}adminUnitL1`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(locn)
    ),
    quad(
      namedNode(`${locn}adminUnitL1`),
      namedNode(`${rdfs}comment`),
      literal(`The uppermost administrative unit for the address, almost always a country. The domain of locn:adminUnitL1 is locn:Address and the range is a literal, conceptually defined by the INSPIRE Geographical Name data type.`, 'en'),
      namedNode(locn)
    ),
    quad(
      namedNode(`${locn}adminUnitL1`),
      namedNode(`${rdfs}domain`),
      namedNode(`${locn}Address`),
      namedNode(locn)
    ),
    quad(
      namedNode(`${locn}adminUnitL1`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(`${ns7}locn`),
      namedNode(locn)
    ),
    quad(
      namedNode(`${locn}adminUnitL1`),
      namedNode(`${rdfs}label`),
      literal(`admin unit level 1`, 'en'),
      namedNode(locn)
    ),
    quad(
      namedNode(`${locn}adminUnitL1`),
      namedNode(`${vs}term_status`),
      literal(`testing`, 'en'),
      namedNode(locn)
    ),
    quad(
      namedNode(`${locn}adminUnitL2`),
      namedNode(`${dcterms}identifier`),
      literal(`locn:adminUnitL2`),
      namedNode(locn)
    ),
    quad(
      namedNode(`${locn}adminUnitL2`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(locn)
    ),
    quad(
      namedNode(`${locn}adminUnitL2`),
      namedNode(`${rdfs}comment`),
      literal(`The region of the address, usually a county, state or other such area that typically encompasses several localities. The domain of  locn:adminUnitL2 is locn:Address and the range is a literal, conceptually defined by the INSPIRE Geographical Name data type.`, 'en'),
      namedNode(locn)
    ),
    quad(
      namedNode(`${locn}adminUnitL2`),
      namedNode(`${rdfs}domain`),
      namedNode(`${locn}Address`),
      namedNode(locn)
    ),
    quad(
      namedNode(`${locn}adminUnitL2`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(`${ns7}locn`),
      namedNode(locn)
    ),
    quad(
      namedNode(`${locn}adminUnitL2`),
      namedNode(`${rdfs}label`),
      literal(`admin unit level 2`, 'en'),
      namedNode(locn)
    ),
    quad(
      namedNode(`${locn}adminUnitL2`),
      namedNode(`${vs}term_status`),
      literal(`testing`, 'en'),
      namedNode(locn)
    ),
    quad(
      namedNode(`${locn}fullAddress`),
      namedNode(`${dcterms}identifier`),
      literal(`locn:fullAddress`),
      namedNode(locn)
    ),
    quad(
      namedNode(`${locn}fullAddress`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(locn)
    ),
    quad(
      namedNode(`${locn}fullAddress`),
      namedNode(`${rdfs}comment`),
      literal(`The complete address written as a string, with or without formatting. The domain of locn:fullAddress is locn:Address.`, 'en'),
      namedNode(locn)
    ),
    quad(
      namedNode(`${locn}fullAddress`),
      namedNode(`${rdfs}domain`),
      namedNode(`${locn}Address`),
      namedNode(locn)
    ),
    quad(
      namedNode(`${locn}fullAddress`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(`${ns7}locn`),
      namedNode(locn)
    ),
    quad(
      namedNode(`${locn}fullAddress`),
      namedNode(`${rdfs}label`),
      literal(`full address`, 'en'),
      namedNode(locn)
    ),
    quad(
      namedNode(`${locn}fullAddress`),
      namedNode(`${rdfs}range`),
      namedNode(`${rdfs}Literal`),
      namedNode(locn)
    ),
    quad(
      namedNode(`${locn}fullAddress`),
      namedNode(`${vs}term_status`),
      literal(`testing`, 'en'),
      namedNode(locn)
    ),
    quad(
      namedNode(`${locn}geographicName`),
      namedNode(`${dcterms}identifier`),
      literal(`locn:geographicName`),
      namedNode(locn)
    ),
    quad(
      namedNode(`${locn}geographicName`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(locn)
    ),
    quad(
      namedNode(`${locn}geographicName`),
      namedNode(`${rdfs}comment`),
      literal(`
A geographic name is a proper noun applied to a spatial object. Taking the example used in the relevant INSPIRE data specification (page 18), the following are all valid geographic names for the Greek capital:
- Αθήνα (the Greek endonym written in the Greek script)
- Athína (the standard Romanisation of the endonym)
- Athens (the English language exonym)
For INSPIRE-conformant data, provide the metadata for the geographic name using a skos:Concept as a datatype.
`, 'en'),
      namedNode(locn)
    ),
    quad(
      namedNode(`${locn}geographicName`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(`${ns7}locn`),
      namedNode(locn)
    ),
    quad(
      namedNode(`${locn}geographicName`),
      namedNode(`${rdfs}label`),
      literal(`geographic name`, 'en'),
      namedNode(locn)
    ),
    quad(
      namedNode(`${locn}geographicName`),
      namedNode(`${vs}term_status`),
      literal(`testing`, 'en'),
      namedNode(locn)
    ),
    quad(
      namedNode(`${locn}geographicName`),
      namedNode(`${wdrs}describedby`),
      namedNode(`${ns9}55858`),
      namedNode(locn)
    ),
    quad(
      namedNode(`${locn}geometry`),
      namedNode(`${dcterms}identifier`),
      literal(`locn:geometry`),
      namedNode(locn)
    ),
    quad(
      namedNode(`${locn}geometry`),
      namedNode(`${vann}example`),
      literal(`
The following are examples of equivalent statements using different geometry encodings. In the examples, prefix gsp is used for namespace URI http://www.opengis.net/ont/geosparql#, whereas prefix sf is used for namespace URI http://www.opengis.net/ont/sf#.
- WKT (GeoSPARQL)
:Resource locn:geometry
  "<http://www.opengis.net/def/crs/OGC/1.3/CRS84> Point(-0.001475 51.477811)"^^gsp:wktLiteral .
- GML
:Resource locn:geometry
  "<gml:Point srsName='http://www.opengis.net/def/crs/OGC/1.3/CRS84'>
  <gml:coordinates>-0.001475, 51.477811</gml:coordinates></gml:Point>"^^gsp:gmlLiteral .
- RDF+WKT (GeoSPARQL)
:Resource locn:geometry
  [ a sf:Point; gsp:asWKT "<http://www.opengis.net/def/crs/OGC/1.3/CRS84> Point(-0.001475 51.477811)"^^gsp:wktLiteral ] .
- RDF+GML (GeoSPARQL)
:Resource locn:geometry
  [ a sf:Point; gsp:asGML
     "<gml:Point srsName='http://www.opengis.net/def/crs/OGC/1.3/CRS84'>
      <gml:coordinates>-0.001475, 51.477811</gml:coordinates></gml:Point>"^^gsp:gmlLiteral ] .
- RDF (WGS84 lat/long)
:Resource locn:geometry [ a geo:Point; geo:lat "51.477811"; geo:long "-0.001475" ] .
- RDF (schema.org)
:Resource locn:geometry [ a schema:GeoCoordinates; schema:latitude "51.477811"; schema:longitude "-0.001475" ] .
- geo URI
:Resource locn:geometry <geo:51.477811,-0.001475;u=0;crs=wgs84> .
- GeoHash URI
:Resource locn:geometry <http://geohash.org/gcpuzgnzvxkp> .
    `, 'en'),
      namedNode(locn)
    ),
    quad(
      namedNode(`${locn}geometry`),
      namedNode(`${vann}usageNote`),
      literal(`
Depending on how a geometry is encoded, the range of this property may be one of the following:
- a literal (e.g., WKT - string literal -, GML, KML - XML literal)
- a geometry class, as those defined in the OGC's GeoSPARQL specification, in the W3C's Basic Geo (WGS84 lat/long) vocabulary, and at schema.org;
- geocoded URIs, as geo or GeoHash URIs, treated as URI references.
For interoperability reasons, it is recommended using one of the following:
- Any geometry:
  - WKT, GML, and RDF+WKT/GML, as per the GeoSPARQL specification.
  - KML (Keyhole Markup Language) - note that KML supports the following geometries only: point, line string, linear ring, and polygon.
  - RDF as per the schema.org vocabulary (see classes schema:GeoCoordinates and schema:GeoShape).
- Points: one of the above, or:
  - RDF as per the W3C Basic Geo (WGS84 lat/long) vocabulary.
  - GeoHash URIs.
  - geo URIs.
    `, 'en'),
      namedNode(locn)
    ),
    quad(
      namedNode(`${locn}geometry`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(locn)
    ),
    quad(
      namedNode(`${locn}geometry`),
      namedNode(`${rdfs}comment`),
      literal(`Associates any resource with the corresponding geometry.`, 'en'),
      namedNode(locn)
    ),
    quad(
      namedNode(`${locn}geometry`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(`${ns7}locn`),
      namedNode(locn)
    ),
    quad(
      namedNode(`${locn}geometry`),
      namedNode(`${rdfs}label`),
      literal(`geometry`, 'en'),
      namedNode(locn)
    ),
    quad(
      namedNode(`${locn}geometry`),
      namedNode(`${rdfs}range`),
      namedNode(`${locn}Geometry`),
      namedNode(locn)
    ),
    quad(
      namedNode(`${locn}geometry`),
      namedNode(`${vs}term_status`),
      literal(`testing`, 'en'),
      namedNode(locn)
    ),
    quad(
      namedNode(`${locn}geometry`),
      namedNode(`${wdrs}describedby`),
      namedNode(`${ns9}55858`),
      namedNode(locn)
    ),
    quad(
      namedNode(`${locn}location`),
      namedNode(`${dcterms}identifier`),
      literal(`locn:location`),
      namedNode(locn)
    ),
    quad(
      namedNode(`${locn}location`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(locn)
    ),
    quad(
      namedNode(`${locn}location`),
      namedNode(`${rdfs}comment`),
      literal(`The location property links any resource to the Location Class. Asserting the location relationship implies only that the domain has some connection to a Location in time or space. It does not imply that the resource is necessarily at that location at the time when the assertion is made.`, 'en'),
      namedNode(locn)
    ),
    quad(
      namedNode(`${locn}location`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(`${ns7}locn`),
      namedNode(locn)
    ),
    quad(
      namedNode(`${locn}location`),
      namedNode(`${rdfs}label`),
      literal(`location`, 'en'),
      namedNode(locn)
    ),
    quad(
      namedNode(`${locn}location`),
      namedNode(`${rdfs}range`),
      namedNode(`${dcterms}Location`),
      namedNode(locn)
    ),
    quad(
      namedNode(`${locn}location`),
      namedNode(`${vs}term_status`),
      literal(`testing`, 'en'),
      namedNode(locn)
    ),
    quad(
      namedNode(`${locn}locatorDesignator`),
      namedNode(`${dcterms}identifier`),
      literal(`locn:locatorDesignator`),
      namedNode(locn)
    ),
    quad(
      namedNode(`${locn}locatorDesignator`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(locn)
    ),
    quad(
      namedNode(`${locn}locatorDesignator`),
      namedNode(`${rdfs}comment`),
      literal(`A number or a sequence of characters that uniquely identifies the locator within the relevant scope(s). The full identification of the locator could include one or more locator designators.
    `, 'en'),
      namedNode(locn)
    ),
    quad(
      namedNode(`${locn}locatorDesignator`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(`${ns7}locn`),
      namedNode(locn)
    ),
    quad(
      namedNode(`${locn}locatorDesignator`),
      namedNode(`${rdfs}label`),
      literal(`locator designator`, 'en'),
      namedNode(locn)
    ),
    quad(
      namedNode(`${locn}locatorDesignator`),
      namedNode(`${vs}term_status`),
      literal(`testing`, 'en'),
      namedNode(locn)
    ),
    quad(
      namedNode(`${locn}locatorName`),
      namedNode(`${dcterms}identifier`),
      literal(`locn:locatorName`),
      namedNode(locn)
    ),
    quad(
      namedNode(`${locn}locatorName`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(locn)
    ),
    quad(
      namedNode(`${locn}locatorName`),
      namedNode(`${rdfs}comment`),
      literal(`Proper noun(s) applied to the real world entity identified by the locator. The locator name could be the name of the property or complex, of the building or part of the building, or it could be the name of a room inside a building. 
    `, 'en'),
      namedNode(locn)
    ),
    quad(
      namedNode(`${locn}locatorName`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(`${ns7}locn`),
      namedNode(locn)
    ),
    quad(
      namedNode(`${locn}locatorName`),
      namedNode(`${rdfs}label`),
      literal(`locator name`, 'en'),
      namedNode(locn)
    ),
    quad(
      namedNode(`${locn}locatorName`),
      namedNode(`${vs}term_status`),
      literal(`testing`, 'en'),
      namedNode(locn)
    ),
    quad(
      namedNode(`${locn}poBox`),
      namedNode(`${dcterms}identifier`),
      literal(`locn:poBox`),
      namedNode(locn)
    ),
    quad(
      namedNode(`${locn}poBox`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(locn)
    ),
    quad(
      namedNode(`${locn}poBox`),
      namedNode(`${rdfs}comment`),
      literal(`The Post Office Box number. The domain of locn:poBox is locn:Address.`, 'en'),
      namedNode(locn)
    ),
    quad(
      namedNode(`${locn}poBox`),
      namedNode(`${rdfs}domain`),
      namedNode(`${locn}Address`),
      namedNode(locn)
    ),
    quad(
      namedNode(`${locn}poBox`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(`${ns7}locn`),
      namedNode(locn)
    ),
    quad(
      namedNode(`${locn}poBox`),
      namedNode(`${rdfs}label`),
      literal(`PO box`, 'en'),
      namedNode(locn)
    ),
    quad(
      namedNode(`${locn}poBox`),
      namedNode(`${rdfs}range`),
      namedNode(`${rdfs}Literal`),
      namedNode(locn)
    ),
    quad(
      namedNode(`${locn}poBox`),
      namedNode(`${vs}term_status`),
      literal(`testing`, 'en'),
      namedNode(locn)
    ),
    quad(
      namedNode(`${locn}postCode`),
      namedNode(`${dcterms}identifier`),
      literal(`locn:postCode`),
      namedNode(locn)
    ),
    quad(
      namedNode(`${locn}postCode`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(locn)
    ),
    quad(
      namedNode(`${locn}postCode`),
      namedNode(`${rdfs}comment`),
      literal(`The post code (a.k.a postal code, zip code etc.). Post codes are common elements in many countries' postal address systems. The domain of locn:postCode is locn:Address.`, 'en'),
      namedNode(locn)
    ),
    quad(
      namedNode(`${locn}postCode`),
      namedNode(`${rdfs}domain`),
      namedNode(`${locn}Address`),
      namedNode(locn)
    ),
    quad(
      namedNode(`${locn}postCode`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(`${ns7}locn`),
      namedNode(locn)
    ),
    quad(
      namedNode(`${locn}postCode`),
      namedNode(`${rdfs}label`),
      literal(`post code`, 'en'),
      namedNode(locn)
    ),
    quad(
      namedNode(`${locn}postCode`),
      namedNode(`${rdfs}range`),
      namedNode(`${rdfs}Literal`),
      namedNode(locn)
    ),
    quad(
      namedNode(`${locn}postCode`),
      namedNode(`${vs}term_status`),
      literal(`testing`, 'en'),
      namedNode(locn)
    ),
    quad(
      namedNode(`${locn}postName`),
      namedNode(`${dcterms}identifier`),
      literal(`locn:postName`),
      namedNode(locn)
    ),
    quad(
      namedNode(`${locn}postName`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(locn)
    ),
    quad(
      namedNode(`${locn}postName`),
      namedNode(`${rdfs}comment`),
      literal(`The key postal division of the address, usually the city. (INSPIRE's definition is "One or more names created and maintained for postal purposes to identify a subdivision of addresses and postal delivery points."). The domain of locn:postName is locn:Address.`, 'en'),
      namedNode(locn)
    ),
    quad(
      namedNode(`${locn}postName`),
      namedNode(`${rdfs}domain`),
      namedNode(`${locn}Address`),
      namedNode(locn)
    ),
    quad(
      namedNode(`${locn}postName`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(`${ns7}locn`),
      namedNode(locn)
    ),
    quad(
      namedNode(`${locn}postName`),
      namedNode(`${rdfs}label`),
      literal(`post name`, 'en'),
      namedNode(locn)
    ),
    quad(
      namedNode(`${locn}postName`),
      namedNode(`${rdfs}range`),
      namedNode(`${rdfs}Literal`),
      namedNode(locn)
    ),
    quad(
      namedNode(`${locn}postName`),
      namedNode(`${vs}term_status`),
      literal(`testing`, 'en'),
      namedNode(locn)
    ),
    quad(
      namedNode(`${locn}thoroughfare`),
      namedNode(`${dcterms}identifier`),
      literal(`locn:thoroughfare`),
      namedNode(locn)
    ),
    quad(
      namedNode(`${locn}thoroughfare`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(locn)
    ),
    quad(
      namedNode(`${locn}thoroughfare`),
      namedNode(`${rdfs}comment`),
      literal(`An address component that represents the name of a passage or way through from one location to another. A thoroughfare is not necessarily a road, it might be a waterway or some other feature. The domain of locn:thoroughfare is locn:Address.`, 'en'),
      namedNode(locn)
    ),
    quad(
      namedNode(`${locn}thoroughfare`),
      namedNode(`${rdfs}domain`),
      namedNode(`${locn}Address`),
      namedNode(locn)
    ),
    quad(
      namedNode(`${locn}thoroughfare`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(`${ns7}locn`),
      namedNode(locn)
    ),
    quad(
      namedNode(`${locn}thoroughfare`),
      namedNode(`${rdfs}label`),
      literal(`thoroughfare`, 'en'),
      namedNode(locn)
    ),
    quad(
      namedNode(`${locn}thoroughfare`),
      namedNode(`${rdfs}range`),
      namedNode(`${rdfs}Literal`),
      namedNode(locn)
    ),
    quad(
      namedNode(`${locn}thoroughfare`),
      namedNode(`${vs}term_status`),
      literal(`testing`, 'en'),
      namedNode(locn)
    ),
    quad(
      namedNode(`${ns7}locn.html`),
      namedNode(`${rdfs}label`),
      literal(`HTML version of the ISA Programme Location Core Vocabulary`, 'en'),
      namedNode(locn)
    ),
    quad(
      namedNode(`${ns7}locn.html`),
      namedNode(`${dcat}mediaType`),
      literal(`text/html`, namedNode(`${dcterms}IMT`)),
      namedNode(locn)
    ),
    quad(
      namedNode(`${ns7}locn.rdf`),
      namedNode(`${dcterms}format`),
      namedNode(`${ns11}RDF_XML`),
      namedNode(locn)
    ),
    quad(
      namedNode(`${ns7}locn.rdf`),
      namedNode(`${rdfs}label`),
      literal(`RDF/XML version of the ISA Programme Location Core Vocabulary`, 'en'),
      namedNode(locn)
    ),
    quad(
      namedNode(`${ns7}locn.rdf`),
      namedNode(`${dcat}mediaType`),
      literal(`application/rdf+xml`, namedNode(`${dcterms}IMT`)),
      namedNode(locn)
    ),
    quad(
      namedNode(`${ns7}locn.ttl`),
      namedNode(`${dcterms}format`),
      namedNode(`${ns11}Turtle`),
      namedNode(locn)
    ),
    quad(
      namedNode(`${ns7}locn.ttl`),
      namedNode(`${rdfs}label`),
      literal(`Turtle version of the ISA Programme Location Core Vocabulary`, 'en'),
      namedNode(locn)
    ),
    quad(
      namedNode(`${ns7}locn.ttl`),
      namedNode(`${dcat}mediaType`),
      literal(`text/turtle`, namedNode(`${dcterms}IMT`)),
      namedNode(locn)
    ),
    quad(
      namedNode(`${ns7}locn`),
      namedNode(`${cc}attributionName`),
      literal(`European Commission`, 'en'),
      namedNode(locn)
    ),
    quad(
      namedNode(`${ns7}locn`),
      namedNode(`${cc}attributionURL`),
      namedNode(ns13),
      namedNode(locn)
    ),
    quad(
      namedNode(`${ns7}locn`),
      namedNode(`${dcterms}abstract`),
      literal(`The ISA Programme Location Core Vocabulary provides a minimum set of classes and properties for describing any place in terms of its name, address or geometry. The vocabulary is specifically designed to aid the publication of data that is interoperable with EU INSPIRE Directive. It is closely integrated with the Business and Person Core Vocabularies of the EU ISA Programme, now available in W3C space as, respectively, the Registered Organization vocabulary and ISA Person Core Vocabulary.`, 'en'),
      namedNode(locn)
    ),
    quad(
      namedNode(`${ns7}locn`),
      namedNode(`${dcterms}conformsTo`),
      namedNode(`${ns9}43160`),
      namedNode(locn)
    ),
    quad(
      namedNode(`${ns7}locn`),
      namedNode(`${dcterms}hasFormat`),
      namedNode(`${ns7}locn.html`),
      namedNode(locn)
    ),
    quad(
      namedNode(`${ns7}locn`),
      namedNode(`${dcterms}hasFormat`),
      namedNode(`${ns7}locn.rdf`),
      namedNode(locn)
    ),
    quad(
      namedNode(`${ns7}locn`),
      namedNode(`${dcterms}hasFormat`),
      namedNode(`${ns7}locn.ttl`),
      namedNode(locn)
    ),
    quad(
      namedNode(`${ns7}locn`),
      namedNode(`${dcterms}issued`),
      literal(`2013-11-25`, namedNode(`${xsd}date`)),
      namedNode(locn)
    ),
    quad(
      namedNode(`${ns7}locn`),
      namedNode(`${dcterms}license`),
      namedNode(`${ns15}isa-open-metadata-licence-v11`),
      namedNode(locn)
    ),
    quad(
      namedNode(`${ns7}locn`),
      namedNode(`${dcterms}mediator`),
      blankNodes[0],
      namedNode(locn)
    ),
    quad(
      namedNode(`${ns7}locn`),
      namedNode(`${dcterms}modified`),
      literal(`2015-03-23`, namedNode(`${xsd}date`)),
      namedNode(locn)
    ),
    quad(
      namedNode(`${ns7}locn`),
      namedNode(`${dcterms}rights`),
      literal(`Copyright © European Union, 2012-2015.`, 'en'),
      namedNode(locn)
    ),
    quad(
      namedNode(`${ns7}locn`),
      namedNode(`${dcterms}title`),
      literal(`ISA Programme Location Core Vocabulary`, 'en'),
      namedNode(locn)
    ),
    quad(
      namedNode(`${ns7}locn`),
      namedNode(`${vann}changes`),
      literal(`
2015-03-23: Updates in the namespace document and in the RDF/XML and Turtle schemas:
- Fixed copyright notice.
- Added class and property diagram.
- Updated GeoSPARQL (a) namespace URIs  and (b) datatype names in the examples of property locn:geometry, based on version 1.0 of the GeoSPARQL specification, and added a note in the examples.
  - prefix ogc (http://www.opengis.net/rdf#) replaced with gsp (http://www.opengis.net/ont/geosparql#) and sf (http://www.opengis.net/ont/sf#)
  - ogc:WKTLiteral → gsp:wktLiteral
  - ogc:GMLLiteral → gsp:gmlLiteral
- Added namespace declarations for all namespace prefixes used in LOCN namespace document, even though they are not used in class/property definitions.
- Corrected the endonym of the Greek capital written in the Greek script in the definition of class locn:geographicName (Aθnνa → Αθήνα).
- Fixed links and typos, minor revisions made to the textual descriptions.
2013-12-21: (PhilA) Update in RDF/XML and Turtle schemas:
- Updated voaf namespace.
- Corrected links to different distributions of the schema.
- Removed xml:base and used http://www/w3/org/ns/locn as the schema URI cf. original which used the namespace URI (with the final # character).
2013-11-25: Changes since final draft version released by the EU ISA Programme Core Vocabularies Working Group (Location Task Force)
- Revised usage note of class locn:Geometry. The text describing its recommended usage has been moved to usage note of property locn:geometry.
- Dropped domain/range restriction for locn:geographicName.
- Dropped domain/range restriction for locn:locatorDesignator. Free text definition updated accordingly.
- Dropped domain/range restriction for locn:locatorName. Free text definition updated accordingly.
- Corrected free text definition of property locn:geometry (its domain is "any resource", and not a "location").
- Revised usage note of property locn:geometry to include text about recommended usage, formerly included in the usage note of class locn:Geometry.
- Revised usage note and examples of property locn:geometry to include support to geocoded URIs (e.g., geo URIs, GeoHash URIs).
- Added term status. All terms have been set to "testing", with the exception of class locn:Geometry and properties rdfs:seeAlso (geographic identifier) and locn:addressId.
- Renamed subject in Turtle examples (ex:a → :Resource).
- Fixed links and typos, minor revisions made to the textual descriptions.
    `, 'en'),
      namedNode(locn)
    ),
    quad(
      namedNode(`${ns7}locn`),
      namedNode(`${vann}preferredNamespacePrefix`),
      literal(`locn`),
      namedNode(locn)
    ),
    quad(
      namedNode(`${ns7}locn`),
      namedNode(`${vann}preferredNamespaceUri`),
      literal(`http://www.w3.org/ns/locn#`, namedNode(`${xsd}anyURI`)),
      namedNode(locn)
    ),
    quad(
      namedNode(`${ns7}locn`),
      namedNode(`${ns16}classNumber`),
      literal(`3`, namedNode(`${xsd}nonNegativeInteger`)),
      namedNode(locn)
    ),
    quad(
      namedNode(`${ns7}locn`),
      namedNode(`${ns16}propertyNumber`),
      literal(`16`, namedNode(`${xsd}nonNegativeInteger`)),
      namedNode(locn)
    ),
    quad(
      namedNode(`${ns7}locn`),
      namedNode(`${ns16}reliesOn`),
      namedNode(dcterms),
      namedNode(locn)
    ),
    quad(
      namedNode(`${ns7}locn`),
      namedNode(`${ns16}reliesOn`),
      namedNode(rdfs),
      namedNode(locn)
    ),
    quad(
      namedNode(`${ns7}locn`),
      namedNode(`${rdf}type`),
      namedNode(`${ns16}Vocabulary`),
      namedNode(locn)
    ),
    quad(
      namedNode(`${ns7}locn`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}Ontology`),
      namedNode(locn)
    ),
    quad(
      namedNode(`${ns7}locn`),
      namedNode(`${rdfs}comment`),
      literal(`This is a new version of the final draft published by the European Commission in May 2012, revised according to the results of the ISA Core Location Pilot (see Section Change History for the list of changes). It is currently under the control of the Locations and Addresses Community Group, but is not under active development or review. Comments and queries should be sent to that group via public-locadd@w3.org. Terms defined here may be deprecated by that or future groups but will not disappear or their definition change.`, 'en'),
      namedNode(locn)
    ),
    quad(
      namedNode(`${ns7}locn`),
      namedNode(`${rdfs}label`),
      literal(`ISA Programme Location Core Vocabulary`, 'en'),
      namedNode(locn)
    ),
    quad(
      namedNode(`${ns7}locn`),
      namedNode(`${ns18}editor`),
      blankNodes[1],
      namedNode(locn)
    ),
    quad(
      namedNode(`${ns7}locn`),
      namedNode(`${ns18}editor`),
      blankNodes[2],
      namedNode(locn)
    ),
    quad(
      namedNode(`${ns7}locn`),
      namedNode(`${ns18}editor`),
      blankNodes[3],
      namedNode(locn)
    ),
    quad(
      namedNode(`${ns7}locn`),
      namedNode(`${owl}versionInfo`),
      literal(`First version in w3.org/ns space`, 'en'),
      namedNode(locn)
    ),
    quad(
      namedNode(`${ns7}locn`),
      namedNode(`${wdrs}describedby`),
      namedNode(`${ns9}55858`),
      namedNode(locn)
    ),
    quad(
      namedNode(`${ns7}locn`),
      namedNode(`${foaf}depiction`),
      namedNode(`${ns20}locn.svg`),
      namedNode(locn)
    ),
    quad(
      namedNode(`${ns7}locn`),
      namedNode(`${foaf}maker`),
      blankNodes[4],
      namedNode(locn)
    ),
    quad(
      namedNode(`${ns15}isa-open-metadata-licence-v11`),
      namedNode(`${cc}attributionName`),
      literal(`European Commission`, 'en'),
      namedNode(locn)
    ),
    quad(
      namedNode(`${ns15}isa-open-metadata-licence-v11`),
      namedNode(`${cc}attributionURL`),
      namedNode(ns13),
      namedNode(locn)
    ),
    quad(
      namedNode(`${ns15}isa-open-metadata-licence-v11`),
      namedNode(`${dcterms}title`),
      literal(`ISA Open Metadata Licence v1.1`),
      namedNode(locn)
    ),
    quad(
      namedNode(`${ns9}43160`),
      namedNode(`${dcterms}title`),
      literal(`Process and Methodology for Developing Core Vocabularies`),
      namedNode(locn)
    ),
    quad(
      namedNode(`${ns9}55858`),
      namedNode(`${dcterms}title`),
      literal(`Core Vocabularies Specification`),
      namedNode(locn)
    ),
    quad(
      namedNode(`${ns20}locn.svg`),
      namedNode(`${rdfs}label`),
      literal(`Class and property diagram of the LOCN vocabulary`),
      namedNode(locn)
    ),
    quad(
      blankNodes[1],
      namedNode(`${schema}affiliation`),
      blankNodes[5],
      namedNode(locn)
    ),
    quad(
      blankNodes[1],
      namedNode(`${rdfs}seeAlso`),
      namedNode(`${ns22}me`),
      namedNode(locn)
    ),
    quad(
      blankNodes[1],
      namedNode(`${foaf}homepage`),
      namedNode(ns23),
      namedNode(locn)
    ),
    quad(
      blankNodes[1],
      namedNode(`${foaf}name`),
      literal(`Phil Archer`),
      namedNode(locn)
    ),
    quad(
      blankNodes[2],
      namedNode(`${schema}affiliation`),
      blankNodes[6],
      namedNode(locn)
    ),
    quad(
      blankNodes[2],
      namedNode(`${foaf}name`),
      literal(`Michael Lutz`),
      namedNode(locn)
    ),
    quad(
      blankNodes[4],
      namedNode(`${foaf}homepage`),
      namedNode(`${ns9}42444`),
      namedNode(locn)
    ),
    quad(
      blankNodes[4],
      namedNode(`${foaf}name`),
      literal(`EU ISA Programme Core Vocabularies Working Group (Location Task Force)`),
      namedNode(locn)
    ),
    quad(
      blankNodes[3],
      namedNode(`${schema}affiliation`),
      blankNodes[7],
      namedNode(locn)
    ),
    quad(
      blankNodes[3],
      namedNode(`${rdfs}seeAlso`),
      namedNode(`${ns24}me`),
      namedNode(locn)
    ),
    quad(
      blankNodes[3],
      namedNode(`${foaf}homepage`),
      namedNode(`${ns25}andrea.perego`),
      namedNode(locn)
    ),
    quad(
      blankNodes[3],
      namedNode(`${foaf}name`),
      literal(`Andrea Perego`),
      namedNode(locn)
    ),
    quad(
      blankNodes[0],
      namedNode(`${foaf}homepage`),
      namedNode(ns26),
      namedNode(locn)
    ),
    quad(
      blankNodes[0],
      namedNode(`${foaf}mbox`),
      namedNode('mailto:public-locadd@w3.org'),
      namedNode(locn)
    ),
    quad(
      blankNodes[0],
      namedNode(`${foaf}name`),
      literal(`Locations and Addresses Community Group`),
      namedNode(locn)
    ),
    quad(
      blankNodes[5],
      namedNode(`${foaf}homepage`),
      namedNode(ns27),
      namedNode(locn)
    ),
    quad(
      blankNodes[5],
      namedNode(`${foaf}name`),
      literal(`W3C/ERCIM`),
      namedNode(locn)
    ),
    quad(
      blankNodes[6],
      namedNode(`${foaf}homepage`),
      namedNode(ns28),
      namedNode(locn)
    ),
    quad(
      blankNodes[6],
      namedNode(`${foaf}name`),
      literal(`European Commission - Joint Research Centre (JRC)`, 'en'),
      namedNode(locn)
    ),
    quad(
      blankNodes[7],
      namedNode(`${foaf}homepage`),
      namedNode(ns28),
      namedNode(locn)
    ),
    quad(
      blankNodes[7],
      namedNode(`${foaf}name`),
      literal(`European Commission - Joint Research Centre (JRC)`, 'en'),
      namedNode(locn)
    ),

  ]
}
