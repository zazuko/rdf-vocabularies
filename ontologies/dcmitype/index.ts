/* This file was automatically generated. Do not edit by hand. */

const {
  dcmitype,
  dcterms,
  xsd,
  ns4,
  dcam,
  rdf,
  rdfs
} = {
  'dcmitype': 'http://purl.org/dc/dcmitype/',
  'dcterms': 'http://purl.org/dc/terms/',
  'xsd': 'http://www.w3.org/2001/XMLSchema#',
  'ns4': 'http://purl.org/dc/aboutdcmi#',
  'dcam': 'http://purl.org/dc/dcam/',
  'rdf': 'http://www.w3.org/1999/02/22-rdf-syntax-ns#',
  'rdfs': 'http://www.w3.org/2000/01/rdf-schema#'
}

export default ({ literal, namedNode, quad }: import('rdf-js').DataFactory): import('rdf-js').Quad[] => {
  return [
    quad(
      namedNode(dcmitype),
      namedNode(`${dcterms}modified`),
      literal(`2012-06-14`, namedNode(`${xsd}date`)),
      namedNode(dcmitype)
    ),
    quad(
      namedNode(dcmitype),
      namedNode(`${dcterms}publisher`),
      namedNode(`${ns4}DCMI`),
      namedNode(dcmitype)
    ),
    quad(
      namedNode(dcmitype),
      namedNode(`${dcterms}title`),
      literal(`DCMI Type Vocabulary`, 'en'),
      namedNode(dcmitype)
    ),
    quad(
      namedNode(`${dcmitype}Collection`),
      namedNode(`${dcam}memberOf`),
      namedNode(`${dcterms}DCMIType`),
      namedNode(dcmitype)
    ),
    quad(
      namedNode(`${dcmitype}Collection`),
      namedNode(`${dcterms}description`),
      literal(`A collection is described as a group; its parts may also be separately described.`, 'en'),
      namedNode(dcmitype)
    ),
    quad(
      namedNode(`${dcmitype}Collection`),
      namedNode(`${dcterms}issued`),
      literal(`2000-07-11`, namedNode(`${xsd}date`)),
      namedNode(dcmitype)
    ),
    quad(
      namedNode(`${dcmitype}Collection`),
      namedNode(`${rdf}type`),
      namedNode(`${rdfs}Class`),
      namedNode(dcmitype)
    ),
    quad(
      namedNode(`${dcmitype}Collection`),
      namedNode(`${rdfs}comment`),
      literal(`An aggregation of resources.`, 'en'),
      namedNode(dcmitype)
    ),
    quad(
      namedNode(`${dcmitype}Collection`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(dcmitype),
      namedNode(dcmitype)
    ),
    quad(
      namedNode(`${dcmitype}Collection`),
      namedNode(`${rdfs}label`),
      literal(`Collection`, 'en'),
      namedNode(dcmitype)
    ),
    quad(
      namedNode(`${dcmitype}Dataset`),
      namedNode(`${dcam}memberOf`),
      namedNode(`${dcterms}DCMIType`),
      namedNode(dcmitype)
    ),
    quad(
      namedNode(`${dcmitype}Dataset`),
      namedNode(`${dcterms}description`),
      literal(`Examples include lists, tables, and databases.  A dataset may be useful for direct machine processing.`, 'en'),
      namedNode(dcmitype)
    ),
    quad(
      namedNode(`${dcmitype}Dataset`),
      namedNode(`${dcterms}issued`),
      literal(`2000-07-11`, namedNode(`${xsd}date`)),
      namedNode(dcmitype)
    ),
    quad(
      namedNode(`${dcmitype}Dataset`),
      namedNode(`${rdf}type`),
      namedNode(`${rdfs}Class`),
      namedNode(dcmitype)
    ),
    quad(
      namedNode(`${dcmitype}Dataset`),
      namedNode(`${rdfs}comment`),
      literal(`Data encoded in a defined structure.`, 'en'),
      namedNode(dcmitype)
    ),
    quad(
      namedNode(`${dcmitype}Dataset`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(dcmitype),
      namedNode(dcmitype)
    ),
    quad(
      namedNode(`${dcmitype}Dataset`),
      namedNode(`${rdfs}label`),
      literal(`Dataset`, 'en'),
      namedNode(dcmitype)
    ),
    quad(
      namedNode(`${dcmitype}Event`),
      namedNode(`${dcam}memberOf`),
      namedNode(`${dcterms}DCMIType`),
      namedNode(dcmitype)
    ),
    quad(
      namedNode(`${dcmitype}Event`),
      namedNode(`${dcterms}description`),
      literal(`Metadata for an event provides descriptive information that is the basis for discovery of the purpose, location, duration, and responsible agents associated with an event. Examples include an exhibition, webcast, conference, workshop, open day, performance, battle, trial, wedding, tea party, conflagration.`, 'en'),
      namedNode(dcmitype)
    ),
    quad(
      namedNode(`${dcmitype}Event`),
      namedNode(`${dcterms}issued`),
      literal(`2000-07-11`, namedNode(`${xsd}date`)),
      namedNode(dcmitype)
    ),
    quad(
      namedNode(`${dcmitype}Event`),
      namedNode(`${rdf}type`),
      namedNode(`${rdfs}Class`),
      namedNode(dcmitype)
    ),
    quad(
      namedNode(`${dcmitype}Event`),
      namedNode(`${rdfs}comment`),
      literal(`A non-persistent, time-based occurrence.`, 'en'),
      namedNode(dcmitype)
    ),
    quad(
      namedNode(`${dcmitype}Event`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(dcmitype),
      namedNode(dcmitype)
    ),
    quad(
      namedNode(`${dcmitype}Event`),
      namedNode(`${rdfs}label`),
      literal(`Event`, 'en'),
      namedNode(dcmitype)
    ),
    quad(
      namedNode(`${dcmitype}Image`),
      namedNode(`${dcam}memberOf`),
      namedNode(`${dcterms}DCMIType`),
      namedNode(dcmitype)
    ),
    quad(
      namedNode(`${dcmitype}Image`),
      namedNode(`${dcterms}description`),
      literal(`Examples include images and photographs of physical objects, paintings, prints, drawings, other images and graphics, animations and moving pictures, film, diagrams, maps, musical notation.  Note that Image may include both electronic and physical representations.`, 'en'),
      namedNode(dcmitype)
    ),
    quad(
      namedNode(`${dcmitype}Image`),
      namedNode(`${dcterms}issued`),
      literal(`2000-07-11`, namedNode(`${xsd}date`)),
      namedNode(dcmitype)
    ),
    quad(
      namedNode(`${dcmitype}Image`),
      namedNode(`${rdf}type`),
      namedNode(`${rdfs}Class`),
      namedNode(dcmitype)
    ),
    quad(
      namedNode(`${dcmitype}Image`),
      namedNode(`${rdfs}comment`),
      literal(`A visual representation other than text.`, 'en'),
      namedNode(dcmitype)
    ),
    quad(
      namedNode(`${dcmitype}Image`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(dcmitype),
      namedNode(dcmitype)
    ),
    quad(
      namedNode(`${dcmitype}Image`),
      namedNode(`${rdfs}label`),
      literal(`Image`, 'en'),
      namedNode(dcmitype)
    ),
    quad(
      namedNode(`${dcmitype}InteractiveResource`),
      namedNode(`${dcam}memberOf`),
      namedNode(`${dcterms}DCMIType`),
      namedNode(dcmitype)
    ),
    quad(
      namedNode(`${dcmitype}InteractiveResource`),
      namedNode(`${dcterms}description`),
      literal(`Examples include forms on Web pages, applets, multimedia learning objects, chat services, or virtual reality environments.`, 'en'),
      namedNode(dcmitype)
    ),
    quad(
      namedNode(`${dcmitype}InteractiveResource`),
      namedNode(`${dcterms}issued`),
      literal(`2000-07-11`, namedNode(`${xsd}date`)),
      namedNode(dcmitype)
    ),
    quad(
      namedNode(`${dcmitype}InteractiveResource`),
      namedNode(`${rdf}type`),
      namedNode(`${rdfs}Class`),
      namedNode(dcmitype)
    ),
    quad(
      namedNode(`${dcmitype}InteractiveResource`),
      namedNode(`${rdfs}comment`),
      literal(`A resource requiring interaction from the user to be understood, executed, or experienced.`, 'en'),
      namedNode(dcmitype)
    ),
    quad(
      namedNode(`${dcmitype}InteractiveResource`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(dcmitype),
      namedNode(dcmitype)
    ),
    quad(
      namedNode(`${dcmitype}InteractiveResource`),
      namedNode(`${rdfs}label`),
      literal(`Interactive Resource`, 'en'),
      namedNode(dcmitype)
    ),
    quad(
      namedNode(`${dcmitype}MovingImage`),
      namedNode(`${dcam}memberOf`),
      namedNode(`${dcterms}DCMIType`),
      namedNode(dcmitype)
    ),
    quad(
      namedNode(`${dcmitype}MovingImage`),
      namedNode(`${dcterms}description`),
      literal(`Examples include animations, movies, television programs, videos, zoetropes, or visual output from a simulation.  Instances of the type Moving Image must also be describable as instances of the broader type Image.`, 'en'),
      namedNode(dcmitype)
    ),
    quad(
      namedNode(`${dcmitype}MovingImage`),
      namedNode(`${dcterms}issued`),
      literal(`2003-11-18`, namedNode(`${xsd}date`)),
      namedNode(dcmitype)
    ),
    quad(
      namedNode(`${dcmitype}MovingImage`),
      namedNode(`${rdf}type`),
      namedNode(`${rdfs}Class`),
      namedNode(dcmitype)
    ),
    quad(
      namedNode(`${dcmitype}MovingImage`),
      namedNode(`${rdfs}comment`),
      literal(`A series of visual representations imparting an impression of motion when shown in succession.`, 'en'),
      namedNode(dcmitype)
    ),
    quad(
      namedNode(`${dcmitype}MovingImage`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(dcmitype),
      namedNode(dcmitype)
    ),
    quad(
      namedNode(`${dcmitype}MovingImage`),
      namedNode(`${rdfs}label`),
      literal(`Moving Image`, 'en'),
      namedNode(dcmitype)
    ),
    quad(
      namedNode(`${dcmitype}MovingImage`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${dcmitype}Image`),
      namedNode(dcmitype)
    ),
    quad(
      namedNode(`${dcmitype}PhysicalObject`),
      namedNode(`${dcam}memberOf`),
      namedNode(`${dcterms}DCMIType`),
      namedNode(dcmitype)
    ),
    quad(
      namedNode(`${dcmitype}PhysicalObject`),
      namedNode(`${dcterms}description`),
      literal(`Note that digital representations of, or surrogates for, these objects should use Image, Text or one of the other types.`, 'en'),
      namedNode(dcmitype)
    ),
    quad(
      namedNode(`${dcmitype}PhysicalObject`),
      namedNode(`${dcterms}issued`),
      literal(`2002-07-13`, namedNode(`${xsd}date`)),
      namedNode(dcmitype)
    ),
    quad(
      namedNode(`${dcmitype}PhysicalObject`),
      namedNode(`${rdf}type`),
      namedNode(`${rdfs}Class`),
      namedNode(dcmitype)
    ),
    quad(
      namedNode(`${dcmitype}PhysicalObject`),
      namedNode(`${rdfs}comment`),
      literal(`An inanimate, three-dimensional object or substance.`, 'en'),
      namedNode(dcmitype)
    ),
    quad(
      namedNode(`${dcmitype}PhysicalObject`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(dcmitype),
      namedNode(dcmitype)
    ),
    quad(
      namedNode(`${dcmitype}PhysicalObject`),
      namedNode(`${rdfs}label`),
      literal(`Physical Object`, 'en'),
      namedNode(dcmitype)
    ),
    quad(
      namedNode(`${dcmitype}Service`),
      namedNode(`${dcam}memberOf`),
      namedNode(`${dcterms}DCMIType`),
      namedNode(dcmitype)
    ),
    quad(
      namedNode(`${dcmitype}Service`),
      namedNode(`${dcterms}description`),
      literal(`Examples include a photocopying service, a banking service, an authentication service, interlibrary loans, a Z39.50 or Web server.`, 'en'),
      namedNode(dcmitype)
    ),
    quad(
      namedNode(`${dcmitype}Service`),
      namedNode(`${dcterms}issued`),
      literal(`2000-07-11`, namedNode(`${xsd}date`)),
      namedNode(dcmitype)
    ),
    quad(
      namedNode(`${dcmitype}Service`),
      namedNode(`${rdf}type`),
      namedNode(`${rdfs}Class`),
      namedNode(dcmitype)
    ),
    quad(
      namedNode(`${dcmitype}Service`),
      namedNode(`${rdfs}comment`),
      literal(`A system that provides one or more functions.`, 'en'),
      namedNode(dcmitype)
    ),
    quad(
      namedNode(`${dcmitype}Service`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(dcmitype),
      namedNode(dcmitype)
    ),
    quad(
      namedNode(`${dcmitype}Service`),
      namedNode(`${rdfs}label`),
      literal(`Service`, 'en'),
      namedNode(dcmitype)
    ),
    quad(
      namedNode(`${dcmitype}Software`),
      namedNode(`${dcam}memberOf`),
      namedNode(`${dcterms}DCMIType`),
      namedNode(dcmitype)
    ),
    quad(
      namedNode(`${dcmitype}Software`),
      namedNode(`${dcterms}description`),
      literal(`Examples include a C source file, MS-Windows .exe executable, or Perl script.`, 'en'),
      namedNode(dcmitype)
    ),
    quad(
      namedNode(`${dcmitype}Software`),
      namedNode(`${dcterms}issued`),
      literal(`2000-07-11`, namedNode(`${xsd}date`)),
      namedNode(dcmitype)
    ),
    quad(
      namedNode(`${dcmitype}Software`),
      namedNode(`${rdf}type`),
      namedNode(`${rdfs}Class`),
      namedNode(dcmitype)
    ),
    quad(
      namedNode(`${dcmitype}Software`),
      namedNode(`${rdfs}comment`),
      literal(`A computer program in source or compiled form.`, 'en'),
      namedNode(dcmitype)
    ),
    quad(
      namedNode(`${dcmitype}Software`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(dcmitype),
      namedNode(dcmitype)
    ),
    quad(
      namedNode(`${dcmitype}Software`),
      namedNode(`${rdfs}label`),
      literal(`Software`, 'en'),
      namedNode(dcmitype)
    ),
    quad(
      namedNode(`${dcmitype}Sound`),
      namedNode(`${dcam}memberOf`),
      namedNode(`${dcterms}DCMIType`),
      namedNode(dcmitype)
    ),
    quad(
      namedNode(`${dcmitype}Sound`),
      namedNode(`${dcterms}description`),
      literal(`Examples include a music playback file format, an audio compact disc, and recorded speech or sounds.`, 'en'),
      namedNode(dcmitype)
    ),
    quad(
      namedNode(`${dcmitype}Sound`),
      namedNode(`${dcterms}issued`),
      literal(`2000-07-11`, namedNode(`${xsd}date`)),
      namedNode(dcmitype)
    ),
    quad(
      namedNode(`${dcmitype}Sound`),
      namedNode(`${rdf}type`),
      namedNode(`${rdfs}Class`),
      namedNode(dcmitype)
    ),
    quad(
      namedNode(`${dcmitype}Sound`),
      namedNode(`${rdfs}comment`),
      literal(`A resource primarily intended to be heard.`, 'en'),
      namedNode(dcmitype)
    ),
    quad(
      namedNode(`${dcmitype}Sound`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(dcmitype),
      namedNode(dcmitype)
    ),
    quad(
      namedNode(`${dcmitype}Sound`),
      namedNode(`${rdfs}label`),
      literal(`Sound`, 'en'),
      namedNode(dcmitype)
    ),
    quad(
      namedNode(`${dcmitype}StillImage`),
      namedNode(`${dcam}memberOf`),
      namedNode(`${dcterms}DCMIType`),
      namedNode(dcmitype)
    ),
    quad(
      namedNode(`${dcmitype}StillImage`),
      namedNode(`${dcterms}description`),
      literal(`Examples include paintings, drawings, graphic designs, plans and maps. Recommended best practice is to assign the type Text to images of textual materials. Instances of the type Still Image must also be describable as instances of the broader type Image.`, 'en'),
      namedNode(dcmitype)
    ),
    quad(
      namedNode(`${dcmitype}StillImage`),
      namedNode(`${dcterms}issued`),
      literal(`2003-11-18`, namedNode(`${xsd}date`)),
      namedNode(dcmitype)
    ),
    quad(
      namedNode(`${dcmitype}StillImage`),
      namedNode(`${rdf}type`),
      namedNode(`${rdfs}Class`),
      namedNode(dcmitype)
    ),
    quad(
      namedNode(`${dcmitype}StillImage`),
      namedNode(`${rdfs}comment`),
      literal(`A static visual representation.`, 'en'),
      namedNode(dcmitype)
    ),
    quad(
      namedNode(`${dcmitype}StillImage`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(dcmitype),
      namedNode(dcmitype)
    ),
    quad(
      namedNode(`${dcmitype}StillImage`),
      namedNode(`${rdfs}label`),
      literal(`Still Image`, 'en'),
      namedNode(dcmitype)
    ),
    quad(
      namedNode(`${dcmitype}StillImage`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${dcmitype}Image`),
      namedNode(dcmitype)
    ),
    quad(
      namedNode(`${dcmitype}Text`),
      namedNode(`${dcam}memberOf`),
      namedNode(`${dcterms}DCMIType`),
      namedNode(dcmitype)
    ),
    quad(
      namedNode(`${dcmitype}Text`),
      namedNode(`${dcterms}description`),
      literal(`Examples include books, letters, dissertations, poems, newspapers, articles, archives of mailing lists. Note that facsimiles or images of texts are still of the genre Text.`, 'en'),
      namedNode(dcmitype)
    ),
    quad(
      namedNode(`${dcmitype}Text`),
      namedNode(`${dcterms}issued`),
      literal(`2000-07-11`, namedNode(`${xsd}date`)),
      namedNode(dcmitype)
    ),
    quad(
      namedNode(`${dcmitype}Text`),
      namedNode(`${rdf}type`),
      namedNode(`${rdfs}Class`),
      namedNode(dcmitype)
    ),
    quad(
      namedNode(`${dcmitype}Text`),
      namedNode(`${rdfs}comment`),
      literal(`A resource consisting primarily of words for reading.`, 'en'),
      namedNode(dcmitype)
    ),
    quad(
      namedNode(`${dcmitype}Text`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(dcmitype),
      namedNode(dcmitype)
    ),
    quad(
      namedNode(`${dcmitype}Text`),
      namedNode(`${rdfs}label`),
      literal(`Text`, 'en'),
      namedNode(dcmitype)
    ),

  ]
}
