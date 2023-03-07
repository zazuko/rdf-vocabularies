/* This file was automatically generated. Do not edit by hand. */

const {
  gtfs,
  dcterms,
  vann,
  rdf,
  owl,
  rdfs,
  ns7,
  ns8,
  foaf,
  vs,
  ns11,
  schema,
  dcat,
  ns14,
  xsd,
  ns16,
  ns17,
  ns18,
  ns19,
  cc,
  ns21,
  ns22
} = {
  'gtfs': 'http://vocab.gtfs.org/terms#',
  'dcterms': 'http://purl.org/dc/terms/',
  'vann': 'http://purl.org/vocab/vann/',
  'rdf': 'http://www.w3.org/1999/02/22-rdf-syntax-ns#',
  'owl': 'http://www.w3.org/2002/07/owl#',
  'rdfs': 'http://www.w3.org/2000/01/rdf-schema#',
  'ns7': 'https://developers.google.com/transit/gtfs/',
  'ns8': 'https://developers.google.com/transit/gtfs/reference#',
  'foaf': 'http://xmlns.com/foaf/0.1/',
  'vs': 'http://www.w3.org/2003/06/sw-vocab-status/ns#',
  'ns11': 'https://code.google.com/p/googletransitdatafeed/wiki/',
  'schema': 'http://schema.org/',
  'dcat': 'http://www.w3.org/ns/dcat#',
  'ns14': 'http://eurovoc.europa.eu/',
  'xsd': 'http://www.w3.org/2001/XMLSchema#',
  'ns16': 'https://developers.google.com/transit/gtfs/examples/display-to-users#',
  'ns17': 'http://en.wikipedia.org/wiki/',
  'ns18': 'http://vocab.org/transit/terms/',
  'ns19': 'http://vocab.gtfs.org/',
  'cc': 'http://creativecommons.org/ns#',
  'ns21': 'http://creativecommons.org/licenses/by/3.0/',
  'ns22': 'https://raw.githubusercontent.com/OpenTransport/vocabulary/master/gtfs/'
}

export default ({ blankNode, literal, namedNode, quad }: import('rdf-js').DataFactory): import('rdf-js').Quad[] => {
  const blankNodes: import('rdf-js').BlankNode[] = []
  for (let i = 0; i < 2; i++) {
    blankNodes.push(blankNode())
  }

  return [
    quad(
      namedNode(gtfs),
      namedNode(`${dcterms}creator`),
      blankNodes[0],
      namedNode(gtfs)
    ),
    quad(
      namedNode(gtfs),
      namedNode(`${dcterms}creator`),
      blankNodes[1],
      namedNode(gtfs)
    ),
    quad(
      namedNode(gtfs),
      namedNode(`${dcterms}description`),
      literal(`Esta ontología es una traducción de la Especificación General de Feeds de Transporte Público a URIs. El objetivo es crear una plataforma de intercambio donde el modelo Linked GTFS pueda usarse para obtener los datos correctos en el formato adecuado. Para la especificación semántica de clases y propiedades, visite https://developers.google.com/transit/gtfs/reference.`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(gtfs),
      namedNode(`${dcterms}description`),
      literal(`This ontology is a translation of the General Transit Feed Specification towards URIs. Its intended use is creating an exchange platform where the Linked GTFS model can be used as a start to get the right data into the right format. For semantics of the classes and properties, see https://developers.google.com/transit/gtfs/reference.`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(gtfs),
      namedNode(`${vann}preferredNamespacePrefix`),
      literal(`gtfs`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(gtfs),
      namedNode(`${vann}preferredNamespaceUri`),
      literal(`http://vocab.gtfs.org/terms#`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(gtfs),
      namedNode(`${rdf}type`),
      namedNode(`${owl}Ontology`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(gtfs),
      namedNode(`${rdfs}label`),
      literal(`Especificación General de Feeds de Transporte Público`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(gtfs),
      namedNode(`${rdfs}label`),
      literal(`General Transit Feed Specification`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(gtfs),
      namedNode(`${rdfs}seeAlso`),
      namedNode(`${ns7}reference`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}Agency`),
      namedNode(`${rdf}type`),
      namedNode(`${rdfs}Class`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}Agency`),
      namedNode(`${rdfs}comment`),
      literal(`An agency operates a certain schedule based transport mode`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}Agency`),
      namedNode(`${rdfs}comment`),
      literal(`Una empresa opera un cierto modo de transporte de manera programada`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}Agency`),
      namedNode(`${rdfs}label`),
      literal(`Agency`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}Agency`),
      namedNode(`${rdfs}label`),
      literal(`Empresa`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}Agency`),
      namedNode(`${rdfs}seeAlso`),
      namedNode(`${ns8}agency_fields`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}Agency`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${foaf}Agent`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}Agency`),
      namedNode(`${vs}term_status`),
      literal(`estable`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}Agency`),
      namedNode(`${vs}term_status`),
      literal(`stable`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}BeforeBoarding`),
      namedNode(`${rdf}type`),
      namedNode(`${gtfs}PaymentMethod`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}BeforeBoarding`),
      namedNode(`${rdfs}comment`),
      literal(`La tarifa se debe pagar antes de subir a bordo`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}BeforeBoarding`),
      namedNode(`${rdfs}comment`),
      literal(`Ticket should be bought before boarding`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}BeforeBoarding`),
      namedNode(`${rdfs}label`),
      literal(`Antes de subir a bordo`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}BeforeBoarding`),
      namedNode(`${rdfs}label`),
      literal(`Before Boarding`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}BeforeBoarding`),
      namedNode(`${vs}term_status`),
      literal(`inestable`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}BeforeBoarding`),
      namedNode(`${vs}term_status`),
      literal(`unstable`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}Bus`),
      namedNode(`${rdf}type`),
      namedNode(`${gtfs}RouteType`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}Bus`),
      namedNode(`${rdfs}comment`),
      literal(`Used for short- and long-distance bus routes.`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}Bus`),
      namedNode(`${rdfs}comment`),
      literal(`Utilizado para rutas en autobús de corta y larga distancia.`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}Bus`),
      namedNode(`${rdfs}label`),
      literal(`Autobús`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}Bus`),
      namedNode(`${rdfs}label`),
      literal(`Bus`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}Bus`),
      namedNode(`${vs}term_status`),
      literal(`inestable`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}Bus`),
      namedNode(`${vs}term_status`),
      literal(`unstable`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}CableCar`),
      namedNode(`${rdf}type`),
      namedNode(`${gtfs}RouteType`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}CableCar`),
      namedNode(`${rdfs}comment`),
      literal(`Used for street-level cable cars where the cable runs beneath the car.`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}CableCar`),
      namedNode(`${rdfs}comment`),
      literal(`Utilizado para funiculares en superficie en donde el cable pasa por debajo del vehículo.`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}CableCar`),
      namedNode(`${rdfs}label`),
      literal(`Cable car`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}CableCar`),
      namedNode(`${rdfs}label`),
      literal(`Funicular`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}CableCar`),
      namedNode(`${vs}term_status`),
      literal(`inestable`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}CableCar`),
      namedNode(`${vs}term_status`),
      literal(`unstable`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}CalendarDateRule`),
      namedNode(`${gtfs}comment`),
      literal(`a row from calendar_dates.txt`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}CalendarDateRule`),
      namedNode(`${gtfs}comment`),
      literal(`una línea en calendar_dates.txt`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}CalendarDateRule`),
      namedNode(`${rdf}type`),
      namedNode(`${rdfs}Class`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}CalendarDateRule`),
      namedNode(`${rdfs}comment`),
      literal(`Defines service availability for a specific date`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}CalendarDateRule`),
      namedNode(`${rdfs}comment`),
      literal(`Indica la disponibilidad de servicio para una fecha concreta`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}CalendarDateRule`),
      namedNode(`${rdfs}label`),
      literal(`Calendar date rule`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}CalendarDateRule`),
      namedNode(`${rdfs}label`),
      literal(`Regla de fecha de calendario`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}CalendarDateRule`),
      namedNode(`${rdfs}seeAlso`),
      namedNode(`${ns8}calendar_dates_fields`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}CalendarDateRule`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${gtfs}ServiceRule`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}CalendarDateRule`),
      namedNode(`${vs}term_status`),
      literal(`inestable`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}CalendarDateRule`),
      namedNode(`${vs}term_status`),
      literal(`unstable`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}CalendarRule`),
      namedNode(`${gtfs}comment`),
      literal(`a row from calendar.txt`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}CalendarRule`),
      namedNode(`${gtfs}comment`),
      literal(`una línea de calendar.txt`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}CalendarRule`),
      namedNode(`${rdf}type`),
      namedNode(`${rdfs}Class`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}CalendarRule`),
      namedNode(`${rdfs}comment`),
      literal(`Define en qué días de la semana el servicio está disponible para un periodo concreto.`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}CalendarRule`),
      namedNode(`${rdfs}comment`),
      literal(`Defines on which days of the week for a certain period the service is available.`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}CalendarRule`),
      namedNode(`${rdfs}label`),
      literal(`Calendar rule`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}CalendarRule`),
      namedNode(`${rdfs}label`),
      literal(`Regla de calendario`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}CalendarRule`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${gtfs}ServiceRule`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}CalendarRule`),
      namedNode(`${vs}term_status`),
      literal(`inestable`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}CalendarRule`),
      namedNode(`${vs}term_status`),
      literal(`unstable`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}CheckParentStation`),
      namedNode(`${gtfs}comment`),
      literal(`Corresponde a wheelchair_accessible con valor 0.`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}CheckParentStation`),
      namedNode(`${gtfs}comment`),
      literal(`Corresponds with wheelchair_accessible being 0.`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}CheckParentStation`),
      namedNode(`${rdf}type`),
      namedNode(`${gtfs}WheelchairBoardingStatus`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}CheckParentStation`),
      namedNode(`${rdfs}comment`),
      literal(`Check the (parent) station for accessibility information.`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}CheckParentStation`),
      namedNode(`${rdfs}comment`),
      literal(`Compruebe la estación (matriz) para información de accesibilidad.`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}CheckParentStation`),
      namedNode(`${rdfs}label`),
      literal(`Check the parent station`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}CheckParentStation`),
      namedNode(`${rdfs}label`),
      literal(`Compruebe la estación matriz`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}CheckParentStation`),
      namedNode(`${vs}term_status`),
      literal(`inestable`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}CheckParentStation`),
      namedNode(`${vs}term_status`),
      literal(`unstable`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}DropOffType`),
      namedNode(`${rdf}type`),
      namedNode(`${rdfs}Class`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}DropOffType`),
      namedNode(`${rdfs}comment`),
      literal(`Instances of this class can be used by gtfs:dropOffType`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}DropOffType`),
      namedNode(`${rdfs}comment`),
      literal(`Instancias de esta clase pueden ser usadas por gtfs:dropOffType. Indica si los pasajeros se bajan en una parada como parte del horario normal o si no pueden bajar en esa parada.`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}DropOffType`),
      namedNode(`${rdfs}label`),
      literal(`Drop Off Type`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}DropOffType`),
      namedNode(`${rdfs}label`),
      literal(`Tipo de bajada`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}DropOffType`),
      namedNode(`${vs}term_status`),
      literal(`inestable`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}DropOffType`),
      namedNode(`${vs}term_status`),
      literal(`unstable`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}EnsuredTransfer`),
      namedNode(`${rdf}type`),
      namedNode(`${gtfs}TransferType`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}EnsuredTransfer`),
      namedNode(`${rdfs}comment`),
      literal(`Este es un punto de transbordo sincronizado entre dos rutas. El vehículo que sale espera al que llega, dejando tiempo suficiente para que un pasajero haga transbordo entre rutas.`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}EnsuredTransfer`),
      namedNode(`${rdfs}comment`),
      literal(`This is a timed transfer point between two routes. The departing vehicle is expected to wait for the arriving one, with sufficient time for a passenger to transfer between routes.`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}EnsuredTransfer`),
      namedNode(`${rdfs}label`),
      literal(`Ensured Transfer`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}EnsuredTransfer`),
      namedNode(`${rdfs}label`),
      literal(`Punto de transbordo sincronizado`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}EnsuredTransfer`),
      namedNode(`${vs}term_status`),
      literal(`inestable`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}EnsuredTransfer`),
      namedNode(`${vs}term_status`),
      literal(`unstable`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}FareClass`),
      namedNode(`${gtfs}comment`),
      literal(`A gtfs:FareClass corresponds to a row in the fare_attributes.txt file.`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}FareClass`),
      namedNode(`${gtfs}comment`),
      literal(`Una gtfs:FareClass corresponde a una línea en fare_attributes.txt.`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}FareClass`),
      namedNode(`${rdf}type`),
      namedNode(`${rdfs}Class`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}FareClass`),
      namedNode(`${rdfs}comment`),
      literal(`A class describing how the fare is calculated.`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}FareClass`),
      namedNode(`${rdfs}comment`),
      literal(`Describe como se calcula la tarifa.`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}FareClass`),
      namedNode(`${rdfs}label`),
      literal(`Clase tarifaria`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}FareClass`),
      namedNode(`${rdfs}label`),
      literal(`Fare Class`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}FareClass`),
      namedNode(`${rdfs}seeAlso`),
      namedNode(`${ns11}FareExamples`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}FareClass`),
      namedNode(`${rdfs}seeAlso`),
      namedNode(`${ns8}fare_attributes_fields`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}FareClass`),
      namedNode(`${rdfs}seeAlso`),
      namedNode(`${ns8}fare_rules_fields`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}FareClass`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${schema}PriceSpecification`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}FareClass`),
      namedNode(`${vs}term_status`),
      literal(`inestable`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}FareClass`),
      namedNode(`${vs}term_status`),
      literal(`unstable`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}FareRule`),
      namedNode(`${rdf}type`),
      namedNode(`${rdfs}Class`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}FareRule`),
      namedNode(`${rdfs}comment`),
      literal(`A rule which binds a gtfs:FareClass to a part of the network.`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}FareRule`),
      namedNode(`${rdfs}comment`),
      literal(`Una regla que enlaza una clase tarifaria (gtfs:FareClass) a un zona de la red de transporte.`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}FareRule`),
      namedNode(`${rdfs}label`),
      literal(`Fare Rule`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}FareRule`),
      namedNode(`${rdfs}label`),
      literal(`Regla tarifaria`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}FareRule`),
      namedNode(`${vs}term_status`),
      literal(`inestable`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}FareRule`),
      namedNode(`${vs}term_status`),
      literal(`unstable`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}Feed`),
      namedNode(`${rdf}type`),
      namedNode(`${rdfs}Class`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}Feed`),
      namedNode(`${rdfs}comment`),
      literal(`An instance of a gtfs:Feed is a linked GTFS feed that complies to this specification.`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}Feed`),
      namedNode(`${rdfs}comment`),
      literal(`Una instancia de gtfs:Feed es un feed GTFS enlazado que cumple con esta especificación.`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}Feed`),
      namedNode(`${rdfs}label`),
      literal(`GTFS Feed`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}Feed`),
      namedNode(`${rdfs}label`),
      literal(`GTFS Feed`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}Feed`),
      namedNode(`${rdfs}seeAlso`),
      namedNode(`${ns8}feed_info_fields`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}Feed`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${dcat}Dataset`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}Feed`),
      namedNode(`${vs}term_status`),
      literal(`estable`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}Feed`),
      namedNode(`${vs}term_status`),
      literal(`stable`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}Feed`),
      namedNode(`${dcat}theme`),
      namedNode(`${ns14}2015`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}Ferry`),
      namedNode(`${rdf}type`),
      namedNode(`${gtfs}RouteType`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}Ferry`),
      namedNode(`${rdfs}comment`),
      literal(`Used for short- and long-distance boat service.`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}Ferry`),
      namedNode(`${rdfs}comment`),
      literal(`Utilizado para servicio de transporte público fluvial o marítimo de corta y larga distancia.`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}Ferry`),
      namedNode(`${rdfs}label`),
      literal(`Ferry`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}Ferry`),
      namedNode(`${rdfs}label`),
      literal(`Ferry, transbordador`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}Ferry`),
      namedNode(`${vs}term_status`),
      literal(`inestable`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}Ferry`),
      namedNode(`${vs}term_status`),
      literal(`unstable`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}Frequency`),
      namedNode(`${rdf}type`),
      namedNode(`${rdfs}Class`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}Frequency`),
      namedNode(`${rdfs}comment`),
      literal(`An alternative to defining departures and arrivals as StopTimes: define frequencies for transit vehicle`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}Frequency`),
      namedNode(`${rdfs}comment`),
      literal(`Una alternativa a definir salidas y llegadas como StopTimes: definir frecuencias para vehículos de transporte público`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}Frequency`),
      namedNode(`${rdfs}label`),
      literal(`Frecuencia`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}Frequency`),
      namedNode(`${rdfs}label`),
      literal(`Frequency`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}Frequency`),
      namedNode(`${rdfs}seeAlso`),
      namedNode(`${ns8}frequencies_fields`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}Frequency`),
      namedNode(`${vs}term_status`),
      literal(`inestable`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}Frequency`),
      namedNode(`${vs}term_status`),
      literal(`unstable`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}Funicular`),
      namedNode(`${rdf}type`),
      namedNode(`${gtfs}RouteType`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}Funicular`),
      namedNode(`${rdfs}comment`),
      literal(`Any rail system designed for steep inclines.`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}Funicular`),
      namedNode(`${rdfs}comment`),
      literal(`Cualquier sistema por raíl diseñado para recorridos con una gran inclinación.`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}Funicular`),
      namedNode(`${rdfs}label`),
      literal(`Funicular`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}Funicular`),
      namedNode(`${rdfs}label`),
      literal(`Funicular`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}Funicular`),
      namedNode(`${vs}term_status`),
      literal(`inestable`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}Funicular`),
      namedNode(`${vs}term_status`),
      literal(`unstable`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}Gondola`),
      namedNode(`${rdf}type`),
      namedNode(`${gtfs}RouteType`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}Gondola`),
      namedNode(`${rdfs}comment`),
      literal(`Gondola, Suspended cable car. Typically used for aerial cable cars where the car is suspended from the cable.`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}Gondola`),
      namedNode(`${rdfs}comment`),
      literal(`Normalmente se utiliza para medios de transporte público por cable en donde el vehículo queda suspendido de un cable.`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}Gondola`),
      namedNode(`${rdfs}label`),
      literal(`Gondola, Suspended cable car`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}Gondola`),
      namedNode(`${rdfs}label`),
      literal(`Teleférico, telecabina`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}Gondola`),
      namedNode(`${vs}term_status`),
      literal(`inestable`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}Gondola`),
      namedNode(`${vs}term_status`),
      literal(`unstable`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}LightRail`),
      namedNode(`${rdf}type`),
      namedNode(`${gtfs}RouteType`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}LightRail`),
      namedNode(`${rdfs}comment`),
      literal(`Any light rail or street level system within a metropolitan area.`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}LightRail`),
      namedNode(`${rdfs}comment`),
      literal(`Cualquier metro ligero o sistema ferroviario en superficie dentro de un área metropolitana.`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}LightRail`),
      namedNode(`${rdfs}label`),
      literal(`Tram, Streetcar, Light rail`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}LightRail`),
      namedNode(`${rdfs}label`),
      literal(`Tranvía, metro ligero`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}LightRail`),
      namedNode(`${vs}term_status`),
      literal(`inestable`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}LightRail`),
      namedNode(`${vs}term_status`),
      literal(`unstable`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}MinimumTimeTransfer`),
      namedNode(`${rdf}type`),
      namedNode(`${gtfs}TransferType`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}MinimumTimeTransfer`),
      namedNode(`${rdfs}comment`),
      literal(`Este transbordo requiere una cantidad mínima de tiempo entre la llegada y la salida para garantizar la conexión. El tiempo necesario para el transbordo se especifica mediante min_transfer_time`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}MinimumTimeTransfer`),
      namedNode(`${rdfs}comment`),
      literal(`This transfer requires a minimum amount of time between arrival and departure to ensure a connection. The time required to transfer is specified by gtfs:minimumTransferTime`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}MinimumTimeTransfer`),
      namedNode(`${rdfs}label`),
      literal(`Minimum Time Transfer`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}MinimumTimeTransfer`),
      namedNode(`${rdfs}label`),
      literal(`Mínimo tiempo de transbordo`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}MinimumTimeTransfer`),
      namedNode(`${vs}term_status`),
      literal(`inestable`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}MinimumTimeTransfer`),
      namedNode(`${vs}term_status`),
      literal(`unstable`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}MustCoordinateWithDriver`),
      namedNode(`${rdf}type`),
      namedNode(`${gtfs}DropOffType`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}MustCoordinateWithDriver`),
      namedNode(`${rdf}type`),
      namedNode(`${gtfs}PickupType`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}MustCoordinateWithDriver`),
      namedNode(`${rdfs}label`),
      literal(`Must coordinate with driver to arrange pickup or drop off`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}MustCoordinateWithDriver`),
      namedNode(`${rdfs}label`),
      literal(`Se debe pedir al conductor que pare.`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}MustCoordinateWithDriver`),
      namedNode(`${vs}term_status`),
      literal(`inestable`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}MustCoordinateWithDriver`),
      namedNode(`${vs}term_status`),
      literal(`unstable`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}MustPhone`),
      namedNode(`${rdf}type`),
      namedNode(`${gtfs}DropOffType`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}MustPhone`),
      namedNode(`${rdf}type`),
      namedNode(`${gtfs}PickupType`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}MustPhone`),
      namedNode(`${rdfs}label`),
      literal(`Must phone agency to arrange pickup or drop off`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}MustPhone`),
      namedNode(`${rdfs}label`),
      literal(`Se debe llamar a la empresa para organizar la parada.`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}MustPhone`),
      namedNode(`${vs}term_status`),
      literal(`inestable`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}MustPhone`),
      namedNode(`${vs}term_status`),
      literal(`unstable`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}NoTransfer`),
      namedNode(`${rdf}type`),
      namedNode(`${gtfs}TransferType`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}NoTransfer`),
      namedNode(`${rdfs}comment`),
      literal(`No es posible realizar transbordos entre rutas en esta ubicación.`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}NoTransfer`),
      namedNode(`${rdfs}comment`),
      literal(`Transfers are not possible between routes at this location.`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}NoTransfer`),
      namedNode(`${rdfs}label`),
      literal(`No Transfer`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}NoTransfer`),
      namedNode(`${rdfs}label`),
      literal(`Sin transbordo`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}NoTransfer`),
      namedNode(`${vs}term_status`),
      literal(`inestable`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}NoTransfer`),
      namedNode(`${vs}term_status`),
      literal(`unstable`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}NoTransfersAllowed`),
      namedNode(`${rdf}type`),
      namedNode(`${gtfs}TransfersAllowedType`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}NoTransfersAllowed`),
      namedNode(`${rdfs}comment`),
      literal(`Indica que el pasajero debe comprar un nuevo billete para realizar un transbordo`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}NoTransfersAllowed`),
      namedNode(`${rdfs}comment`),
      literal(`Indicate that a passenger should buy a new ticket when transferring`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}NoTransfersAllowed`),
      namedNode(`${rdfs}label`),
      literal(`No se permiten transbordos`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}NoTransfersAllowed`),
      namedNode(`${rdfs}label`),
      literal(`No transfers allowed`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}NoTransfersAllowed`),
      namedNode(`${vs}term_status`),
      literal(`inestable`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}NoTransfersAllowed`),
      namedNode(`${vs}term_status`),
      literal(`unstable`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}NotAvailable`),
      namedNode(`${rdf}type`),
      namedNode(`${gtfs}DropOffType`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}NotAvailable`),
      namedNode(`${rdf}type`),
      namedNode(`${gtfs}PickupType`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}NotAvailable`),
      namedNode(`${rdfs}label`),
      literal(`Pickup or drop off not available`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}NotAvailable`),
      namedNode(`${rdfs}label`),
      literal(`Sin parada disponible`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}NotAvailable`),
      namedNode(`${vs}term_status`),
      literal(`inestable`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}NotAvailable`),
      namedNode(`${vs}term_status`),
      literal(`unstable`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}NotWheelchairAccessible`),
      namedNode(`${gtfs}comment`),
      literal(`Corresponde a wheelchair_accessible con valor 2`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}NotWheelchairAccessible`),
      namedNode(`${gtfs}comment`),
      literal(`Corresponds to a wheelchair_accessible column being 2`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}NotWheelchairAccessible`),
      namedNode(`${rdf}type`),
      namedNode(`${gtfs}WheelchairBoardingStatus`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}NotWheelchairAccessible`),
      namedNode(`${rdfs}comment`),
      literal(`No riders in wheelchairs can be accommodated on this trip or wheelchair boarding is not possible at this stop and/or there exists no accessible path from outside the station to the specific stop.`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}NotWheelchairAccessible`),
      namedNode(`${rdfs}comment`),
      literal(`Pasajeros en silla de ruedas no pueden acceder a este viaje o el acceso con silla de ruedas no es posible en esta parada y/o no hay una ruta accesible desde el exterior de la estación hasta la parada.`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}NotWheelchairAccessible`),
      namedNode(`${rdfs}label`),
      literal(`No accesible para silla de ruedas`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}NotWheelchairAccessible`),
      namedNode(`${rdfs}label`),
      literal(`Not wheelchair accessible`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}NotWheelchairAccessible`),
      namedNode(`${vs}term_status`),
      literal(`inestable`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}NotWheelchairAccessible`),
      namedNode(`${vs}term_status`),
      literal(`unstable`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}OnBoard`),
      namedNode(`${rdf}type`),
      namedNode(`${gtfs}PaymentMethod`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}OnBoard`),
      namedNode(`${rdfs}comment`),
      literal(`Fare should be bought on board`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}OnBoard`),
      namedNode(`${rdfs}comment`),
      literal(`La tarifa se paga a bordo`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}OnBoard`),
      namedNode(`${rdfs}label`),
      literal(`A bordo`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}OnBoard`),
      namedNode(`${rdfs}label`),
      literal(`On Board`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}OnBoard`),
      namedNode(`${vs}term_status`),
      literal(`inestable`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}OnBoard`),
      namedNode(`${vs}term_status`),
      literal(`unstable`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}OneTransfersAllowed`),
      namedNode(`${rdf}type`),
      namedNode(`${gtfs}TransfersAllowedType`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}OneTransfersAllowed`),
      namedNode(`${rdfs}comment`),
      literal(`Indica que el pasajero puede hacer un transbordo con su billete`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}OneTransfersAllowed`),
      namedNode(`${rdfs}comment`),
      literal(`Indicate that a passenger should buy a new ticket when transferring a second time`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}OneTransfersAllowed`),
      namedNode(`${rdfs}label`),
      literal(`One transfer allowed`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}OneTransfersAllowed`),
      namedNode(`${rdfs}label`),
      literal(`Un transbordo permitido`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}OneTransfersAllowed`),
      namedNode(`${vs}term_status`),
      literal(`inestable`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}OneTransfersAllowed`),
      namedNode(`${vs}term_status`),
      literal(`unstable`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}PaymentMethod`),
      namedNode(`${rdf}type`),
      namedNode(`${rdfs}Class`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}PaymentMethod`),
      namedNode(`${rdfs}comment`),
      literal(`Method to pay for the public transit service`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}PaymentMethod`),
      namedNode(`${rdfs}comment`),
      literal(`Método de pago para el servicio de transporte público`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}PaymentMethod`),
      namedNode(`${rdfs}label`),
      literal(`Método de pago`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}PaymentMethod`),
      namedNode(`${rdfs}label`),
      literal(`Payment Method`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}PaymentMethod`),
      namedNode(`${vs}term_status`),
      literal(`inestable`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}PaymentMethod`),
      namedNode(`${vs}term_status`),
      literal(`unstable`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}PickupType`),
      namedNode(`${rdf}type`),
      namedNode(`${rdfs}Class`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}PickupType`),
      namedNode(`${rdfs}comment`),
      literal(`Instances of this class can be used by gtfs:pickupType`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}PickupType`),
      namedNode(`${rdfs}comment`),
      literal(`Instancias de esta clase pueden ser usadas por gtfs:pickupType. Indica si se recogen los pasajeros en una parada como parte del horario normal o si su recogida en dicha parada no se encuentra disponible. Este campo también permite a la empresa de transporte público indicar que los pasajeros deben llamar a la empresa o notificar al conductor que es necesario recogerlos en esa parada en concreto. Los valores válidos para este campo son: 0 - recogida programada regularmente; 1 - recogida no disponible; 2 - se debe llamar a la empresa para organizar una recogida; 3 - se debe coordinar con el conductor para organizar una recogida. El valor predeterminado de este campo es 0.`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}PickupType`),
      namedNode(`${rdfs}label`),
      literal(`Pickup Type`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}PickupType`),
      namedNode(`${rdfs}label`),
      literal(`Tipo de recogida`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}PickupType`),
      namedNode(`${vs}term_status`),
      literal(`inestable`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}PickupType`),
      namedNode(`${vs}term_status`),
      literal(`unstable`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}Rail`),
      namedNode(`${rdf}type`),
      namedNode(`${gtfs}RouteType`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}Rail`),
      namedNode(`${rdfs}comment`),
      literal(`Used for intercity or long-distance travel.`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}Rail`),
      namedNode(`${rdfs}comment`),
      literal(`Utilizado para viajes de cercanías, interurbanos o de larga distancia.`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}Rail`),
      namedNode(`${rdfs}label`),
      literal(`Rail`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}Rail`),
      namedNode(`${rdfs}label`),
      literal(`Tren`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}Rail`),
      namedNode(`${vs}term_status`),
      literal(`inestable`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}Rail`),
      namedNode(`${vs}term_status`),
      literal(`unstable`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}RecommendedTransfer`),
      namedNode(`${rdf}type`),
      namedNode(`${gtfs}TransferType`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}RecommendedTransfer`),
      namedNode(`${rdfs}comment`),
      literal(`Este es un punto de transbordo recomendado entre dos rutas`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}RecommendedTransfer`),
      namedNode(`${rdfs}comment`),
      literal(`This is a recommended transfer point between two routes`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}RecommendedTransfer`),
      namedNode(`${rdfs}label`),
      literal(`Punto de transbordo recomendado`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}RecommendedTransfer`),
      namedNode(`${rdfs}label`),
      literal(`Recommended Transfer`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}RecommendedTransfer`),
      namedNode(`${vs}term_status`),
      literal(`inestable`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}RecommendedTransfer`),
      namedNode(`${vs}term_status`),
      literal(`unstable`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}Regular`),
      namedNode(`${gtfs}comment`),
      literal(`If no pickup_type or drop_off_type given in stop_times.txt, map to this one.`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}Regular`),
      namedNode(`${gtfs}comment`),
      literal(`Si no se incluye pickup_type o drop_off_type en stop_times.txt, mapee a este concepto.`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}Regular`),
      namedNode(`${rdf}type`),
      namedNode(`${gtfs}DropOffType`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}Regular`),
      namedNode(`${rdf}type`),
      namedNode(`${gtfs}PickupType`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}Regular`),
      namedNode(`${rdfs}label`),
      literal(`Parada programada regularmente`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}Regular`),
      namedNode(`${rdfs}label`),
      literal(`Regularly scheduled pickup or drop off`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}Regular`),
      namedNode(`${vs}term_status`),
      literal(`inestable`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}Regular`),
      namedNode(`${vs}term_status`),
      literal(`unstable`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}Route`),
      namedNode(`${rdf}type`),
      namedNode(`${rdfs}Class`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}Route`),
      namedNode(`${rdfs}comment`),
      literal(`A gtfs:Route is a commercial route followed entirely or partly by gtfs:Trips`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}Route`),
      namedNode(`${rdfs}comment`),
      literal(`Una gtfs:Route es un grupo de viajes (gtfs:Trips) que se muestran a los usuarios como servicio independiente`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}Route`),
      namedNode(`${rdfs}label`),
      literal(`Route`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}Route`),
      namedNode(`${rdfs}label`),
      literal(`Ruta`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}Route`),
      namedNode(`${rdfs}seeAlso`),
      namedNode(`${ns8}routes_fields`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}Route`),
      namedNode(`${vs}term_status`),
      literal(`inestable`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}Route`),
      namedNode(`${vs}term_status`),
      literal(`unstable`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}RouteType`),
      namedNode(`${rdf}type`),
      namedNode(`${rdfs}Class`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}RouteType`),
      namedNode(`${rdfs}comment`),
      literal(`Describe el tipo de transporte usado en una ruta`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}RouteType`),
      namedNode(`${rdfs}comment`),
      literal(`Describes the type of transportation used on a route`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}RouteType`),
      namedNode(`${rdfs}label`),
      literal(`Route type`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}RouteType`),
      namedNode(`${rdfs}label`),
      literal(`Tipo de ruta`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}RouteType`),
      namedNode(`${vs}term_status`),
      literal(`inestable`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}RouteType`),
      namedNode(`${vs}term_status`),
      literal(`unstable`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}Service`),
      namedNode(`${gtfs}comment`),
      literal(`A gtfs:Service is a set of gtfs:ServiceRules which can be found in both calendar.txt as calendar_dates.txt`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}Service`),
      namedNode(`${gtfs}comment`),
      literal(`Un gtfs:Service es un conjunto de gtfs:ServiceRules que pueden ser encontradas en calendar.txt y calendar_dates.txt`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}Service`),
      namedNode(`${rdf}type`),
      namedNode(`${rdfs}Class`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}Service`),
      namedNode(`${rdfs}comment`),
      literal(`A gtfs:Service identifies a set of dates when a service is available for one or more routes`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}Service`),
      namedNode(`${rdfs}comment`),
      literal(`Un gtfs:Service indica el conjunto de fechas en el que el servicio está disponible para una o más rutas`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}Service`),
      namedNode(`${rdfs}label`),
      literal(`Service`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}Service`),
      namedNode(`${rdfs}label`),
      literal(`Servicio`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}Service`),
      namedNode(`${rdfs}seeAlso`),
      namedNode(`${ns8}calendar_dates_fields`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}Service`),
      namedNode(`${rdfs}seeAlso`),
      namedNode(`${ns8}calendar_fields`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}Service`),
      namedNode(`${vs}term_status`),
      literal(`inestable`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}Service`),
      namedNode(`${vs}term_status`),
      literal(`unstable`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}ServiceRule`),
      namedNode(`${rdf}type`),
      namedNode(`${rdfs}Class`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}ServiceRule`),
      namedNode(`${rdfs}comment`),
      literal(`One or more service rules define a set of dates`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}ServiceRule`),
      namedNode(`${rdfs}comment`),
      literal(`Una o más reglas de servicio definen un conjunto de fechas`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}ServiceRule`),
      namedNode(`${rdfs}label`),
      literal(`Regla de servicio`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}ServiceRule`),
      namedNode(`${rdfs}label`),
      literal(`Service rule`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}ServiceRule`),
      namedNode(`${vs}term_status`),
      literal(`inestable`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}ServiceRule`),
      namedNode(`${vs}term_status`),
      literal(`unstable`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}Shape`),
      namedNode(`${rdf}type`),
      namedNode(`${rdfs}Class`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}Shape`),
      namedNode(`${rdfs}comment`),
      literal(`A polygon formed by gtfs:ShapePoints`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}Shape`),
      namedNode(`${rdfs}comment`),
      literal(`Un polígono o línea formado por gtfs:ShapePoints`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}Shape`),
      namedNode(`${rdfs}label`),
      literal(`Shape`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}Shape`),
      namedNode(`${rdfs}label`),
      literal(`forma del recorrido, trayecto, itinerario`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}Shape`),
      namedNode(`${rdfs}seeAlso`),
      namedNode(`${ns8}shapes_fields`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}Shape`),
      namedNode(`${vs}term_status`),
      literal(`inestable`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}Shape`),
      namedNode(`${vs}term_status`),
      literal(`unstable`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}ShapePoint`),
      namedNode(`${rdf}type`),
      namedNode(`${rdfs}Class`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}ShapePoint`),
      namedNode(`${rdfs}comment`),
      literal(`A geographic point within a gtfs:Shape`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}ShapePoint`),
      namedNode(`${rdfs}comment`),
      literal(`Punto geográfico dentro de un recorrido (gtfs:Shape)`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}ShapePoint`),
      namedNode(`${rdfs}label`),
      literal(`Punto de recorrido`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}ShapePoint`),
      namedNode(`${rdfs}label`),
      literal(`Shape Point`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}ShapePoint`),
      namedNode(`${rdfs}seeAlso`),
      namedNode(`${ns8}shapes_fields`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}ShapePoint`),
      namedNode(`${vs}term_status`),
      literal(`inestable`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}ShapePoint`),
      namedNode(`${vs}term_status`),
      literal(`unstable`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}Station`),
      namedNode(`${gtfs}comment`),
      literal(`Map a row in stops.txt to gtfs:Station when the location_type is 1.`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}Station`),
      namedNode(`${gtfs}comment`),
      literal(`Mapee una línea en stops.txt a gtfs:Station cuando location_type sea 1.`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}Station`),
      namedNode(`${rdf}type`),
      namedNode(`${rdfs}Class`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}Station`),
      namedNode(`${rdfs}comment`),
      literal(`A physical structure or area that contains one or more stop.`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}Station`),
      namedNode(`${rdfs}comment`),
      literal(`Estructura física o área que contiene una o más paradas.`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}Station`),
      namedNode(`${rdfs}label`),
      literal(`Estación`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}Station`),
      namedNode(`${rdfs}label`),
      literal(`Station`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}Station`),
      namedNode(`${rdfs}seeAlso`),
      namedNode(`${ns8}stops_fields`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}Station`),
      namedNode(`${vs}term_status`),
      literal(`inestable`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}Station`),
      namedNode(`${vs}term_status`),
      literal(`unstable`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}Stop`),
      namedNode(`${rdf}type`),
      namedNode(`${rdfs}Class`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}Stop`),
      namedNode(`${rdfs}comment`),
      literal(`A location where passengers board or disembark from a transit vehicle.`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}Stop`),
      namedNode(`${rdfs}comment`),
      literal(`Un lugar donde los pasajeros suben o bajan de un vehículo de transporte público.`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}Stop`),
      namedNode(`${rdfs}label`),
      literal(`Parada`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}Stop`),
      namedNode(`${rdfs}label`),
      literal(`Stop`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}Stop`),
      namedNode(`${rdfs}seeAlso`),
      namedNode(`${ns8}stops_fields`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}Stop`),
      namedNode(`${vs}term_status`),
      literal(`estable`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}Stop`),
      namedNode(`${vs}term_status`),
      literal(`stable`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}StopTime`),
      namedNode(`${rdf}type`),
      namedNode(`${rdfs}Class`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}StopTime`),
      namedNode(`${rdfs}comment`),
      literal(`Describe una hora de parada como parte de un viaje`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}StopTime`),
      namedNode(`${rdfs}comment`),
      literal(`Describes a stop time as part of a trip`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}StopTime`),
      namedNode(`${rdfs}label`),
      literal(`Hora de parada`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}StopTime`),
      namedNode(`${rdfs}label`),
      literal(`Stop time`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}StopTime`),
      namedNode(`${rdfs}seeAlso`),
      namedNode(`${ns8}stop_times_fields`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}StopTime`),
      namedNode(`${vs}term_status`),
      literal(`inestable`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}StopTime`),
      namedNode(`${vs}term_status`),
      literal(`unstable`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}Subway`),
      namedNode(`${rdf}type`),
      namedNode(`${gtfs}RouteType`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}Subway`),
      namedNode(`${rdfs}comment`),
      literal(`Any underground rail system within a metropolitan area.`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}Subway`),
      namedNode(`${rdfs}comment`),
      literal(`Cualquier sistema ferroviario subterráneo dentro de un área metropolitana.`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}Subway`),
      namedNode(`${rdfs}label`),
      literal(`Subterráneo, metro`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}Subway`),
      namedNode(`${rdfs}label`),
      literal(`Subway, Metro`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}Subway`),
      namedNode(`${vs}term_status`),
      literal(`inestable`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}Subway`),
      namedNode(`${vs}term_status`),
      literal(`unstable`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}TransferRule`),
      namedNode(`${rdf}type`),
      namedNode(`${rdfs}Class`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}TransferRule`),
      namedNode(`${rdfs}comment`),
      literal(`Define additional rules for making connections between routes.`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}TransferRule`),
      namedNode(`${rdfs}comment`),
      literal(`Define reglas adicionales para transbordos entre rutas.`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}TransferRule`),
      namedNode(`${rdfs}label`),
      literal(`Regla de transbordo`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}TransferRule`),
      namedNode(`${rdfs}label`),
      literal(`Transfer Rule`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}TransferRule`),
      namedNode(`${rdfs}seeAlso`),
      namedNode(`${ns8}transfers_fields`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}TransferRule`),
      namedNode(`${vs}term_status`),
      literal(`inestable`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}TransferRule`),
      namedNode(`${vs}term_status`),
      literal(`unstable`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}TransferType`),
      namedNode(`${gtfs}comment`),
      literal(`Si transfer_type en transfers.txt es 0 o vacío, mapee a gtfs:RecommendedTransfer; si es 1, mapee to gtfs:EnsuredTransfer; si es 2, a gtfs:MinimumTimeTransfer; si es 3, a gtfs:NoTransfer`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}TransferType`),
      namedNode(`${gtfs}comment`),
      literal(`When transfer_type in transfers.txt is 0 or empty, map to gtfs:RecommendedTransfer, when 1, map to gtfs:EnsuredTransfer, when 2, gtfs:MinimumTimeTransfer, when 3: gtfs:NoTransfer.`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}TransferType`),
      namedNode(`${rdf}type`),
      namedNode(`${rdfs}Class`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}TransferType`),
      namedNode(`${rdfs}comment`),
      literal(`Instances of this class can be used to describe how to handle a transfer rule`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}TransferType`),
      namedNode(`${rdfs}comment`),
      literal(`Instancias de esta clase pueden ser usadas para describir cómo gestionar las reglas de transbordo`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}TransferType`),
      namedNode(`${rdfs}label`),
      literal(`Tipo de transbordo`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}TransferType`),
      namedNode(`${rdfs}label`),
      literal(`Transfer Type`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}TransferType`),
      namedNode(`${vs}term_status`),
      literal(`inestable`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}TransferType`),
      namedNode(`${vs}term_status`),
      literal(`unstable`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}TransfersAllowedType`),
      namedNode(`${rdf}type`),
      namedNode(`${rdfs}Class`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}TransfersAllowedType`),
      namedNode(`${rdfs}comment`),
      literal(`Instances of this class describe whether tickets remain valid when transferring`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}TransfersAllowedType`),
      namedNode(`${rdfs}comment`),
      literal(`Las instancias de esta clase describen si los billetes son válidos para realizar transbordos`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}TransfersAllowedType`),
      namedNode(`${rdfs}label`),
      literal(`Tipo de transbordo permitido`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}TransfersAllowedType`),
      namedNode(`${rdfs}label`),
      literal(`Transfers Allowed Type`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}TransfersAllowedType`),
      namedNode(`${vs}term_status`),
      literal(`inestable`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}TransfersAllowedType`),
      namedNode(`${vs}term_status`),
      literal(`unstable`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}Trip`),
      namedNode(`${rdf}type`),
      namedNode(`${rdfs}Class`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}Trip`),
      namedNode(`${rdfs}comment`),
      literal(`A collection of gtfs:StopTimes followed by a transit vehicle`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}Trip`),
      namedNode(`${rdfs}comment`),
      literal(`Trayecto de dos o más paradas realizadas por un vehículo que se produce a una gtfs:StopTime`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}Trip`),
      namedNode(`${rdfs}label`),
      literal(`Trip`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}Trip`),
      namedNode(`${rdfs}label`),
      literal(`Viaje`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}Trip`),
      namedNode(`${rdfs}seeAlso`),
      namedNode(`${ns8}trips_fields`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}Trip`),
      namedNode(`${vs}term_status`),
      literal(`inestable`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}Trip`),
      namedNode(`${vs}term_status`),
      literal(`unstable`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}TwoTransfersAllowed`),
      namedNode(`${rdf}type`),
      namedNode(`${gtfs}TransfersAllowedType`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}TwoTransfersAllowed`),
      namedNode(`${rdfs}comment`),
      literal(`Indica que el pasajero puede hacer dos transbordos con su billete`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}TwoTransfersAllowed`),
      namedNode(`${rdfs}comment`),
      literal(`Indicate that a passenger should buy a new ticket when transferring for the third time`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}TwoTransfersAllowed`),
      namedNode(`${rdfs}label`),
      literal(`Dos transbordos permitidos`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}TwoTransfersAllowed`),
      namedNode(`${rdfs}label`),
      literal(`Two transfers allowed`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}TwoTransfersAllowed`),
      namedNode(`${vs}term_status`),
      literal(`inestable`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}TwoTransfersAllowed`),
      namedNode(`${vs}term_status`),
      literal(`unstable`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}UnlimitedTransfersAllowed`),
      namedNode(`${rdf}type`),
      namedNode(`${gtfs}TransfersAllowedType`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}UnlimitedTransfersAllowed`),
      namedNode(`${rdfs}comment`),
      literal(`Indica que el billete permite una cantidad de transbordos ilimitada`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}UnlimitedTransfersAllowed`),
      namedNode(`${rdfs}comment`),
      literal(`Indicate that unlimited transfers are permitted`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}UnlimitedTransfersAllowed`),
      namedNode(`${rdfs}label`),
      literal(`Transbordos ilimitados`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}UnlimitedTransfersAllowed`),
      namedNode(`${rdfs}label`),
      literal(`Unlimited transfers allowed`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}UnlimitedTransfersAllowed`),
      namedNode(`${vs}term_status`),
      literal(`inestable`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}UnlimitedTransfersAllowed`),
      namedNode(`${vs}term_status`),
      literal(`unstable`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}WheelchairAccessible`),
      namedNode(`${gtfs}comment`),
      literal(`Corresponde a wheelchair_accessible con valor 1`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}WheelchairAccessible`),
      namedNode(`${gtfs}comment`),
      literal(`Corresponds to a wheelchair_accessible column being 1`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}WheelchairAccessible`),
      namedNode(`${rdf}type`),
      namedNode(`${gtfs}WheelchairBoardingStatus`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}WheelchairAccessible`),
      namedNode(`${rdfs}comment`),
      literal(`Indica que el vehículo usado en este viaje es accesible para, al menos, un pasajero en silla de ruedas, o indica que la parada específica está habilitada para sillas de ruedas, que algunos viajes desde esta parada son accesibles para silla de ruedas y si esta parada tiene una estación matriz, que hay alguna ruta accesible desde el exterior de la estación hasta la parada.`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}WheelchairAccessible`),
      namedNode(`${rdfs}comment`),
      literal(`Indicates that the vehicle being used on this particular trip can accommodate at least one rider in a wheelchair, or identifies that wheelchair boardings are possible from the specified stop, some trips at this stop are accessible by wheelchair and if this stop has a parentStation, there exists some accessible path from outside the station to the specific stop.`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}WheelchairAccessible`),
      namedNode(`${rdfs}label`),
      literal(`Accesible para silla de ruedas`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}WheelchairAccessible`),
      namedNode(`${rdfs}label`),
      literal(`Wheelchair accessible`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}WheelchairAccessible`),
      namedNode(`${vs}term_status`),
      literal(`inestable`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}WheelchairAccessible`),
      namedNode(`${vs}term_status`),
      literal(`unstable`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}WheelchairBoardingStatus`),
      namedNode(`${rdf}type`),
      namedNode(`${rdfs}Class`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}WheelchairBoardingStatus`),
      namedNode(`${rdfs}comment`),
      literal(`A class whom's instances indicate how accessible a gtfs:Trip, gtfs:Stop or gtfs:Station is.`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}WheelchairBoardingStatus`),
      namedNode(`${rdfs}comment`),
      literal(`Las instancias de esta clase indican como de accesible es un gtfs:Trip, un gtfs:Stop o una gtfs:Station.`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}WheelchairBoardingStatus`),
      namedNode(`${rdfs}label`),
      literal(`Información de accesibilidad para silla de ruedas`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}WheelchairBoardingStatus`),
      namedNode(`${rdfs}label`),
      literal(`Wheelchair Boarding Information`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}WheelchairBoardingStatus`),
      namedNode(`${rdfs}seeAlso`),
      namedNode(`${ns8}stops_fields`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}WheelchairBoardingStatus`),
      namedNode(`${vs}term_status`),
      literal(`inestable`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}WheelchairBoardingStatus`),
      namedNode(`${vs}term_status`),
      literal(`unstable`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}Zone`),
      namedNode(`${rdf}type`),
      namedNode(`${rdfs}Class`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}Zone`),
      namedNode(`${rdfs}comment`),
      literal(`Las zonas son necesarias si quiere proporcionar información de tarifas usando gtfs:FareClass`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}Zone`),
      namedNode(`${rdfs}comment`),
      literal(`Zones are required if you want to provide fare information using gtfs:FareClass`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}Zone`),
      namedNode(`${rdfs}label`),
      literal(`Zona`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}Zone`),
      namedNode(`${rdfs}label`),
      literal(`Zone`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}Zone`),
      namedNode(`${vs}term_status`),
      literal(`inestable`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}Zone`),
      namedNode(`${vs}term_status`),
      literal(`unstable`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}agency`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}agency`),
      namedNode(`${rdfs}comment`),
      literal(`Enlaza a una agencia de la que este concepto es parte.`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}agency`),
      namedNode(`${rdfs}comment`),
      literal(`links to an agency that this is part of.`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}agency`),
      namedNode(`${rdfs}label`),
      literal(`agency`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}agency`),
      namedNode(`${rdfs}label`),
      literal(`empresa`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}agency`),
      namedNode(`${rdfs}range`),
      namedNode(`${gtfs}Agency`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}agency`),
      namedNode(`${vs}term_status`),
      literal(`inestable`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}agency`),
      namedNode(`${vs}term_status`),
      literal(`unstable`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}arrivalTime`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}arrivalTime`),
      namedNode(`${rdfs}comment`),
      literal(`Check the original specification for special cases`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}arrivalTime`),
      namedNode(`${rdfs}comment`),
      literal(`Compruebe la especificación original para casos especiales`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}arrivalTime`),
      namedNode(`${rdfs}domain`),
      namedNode(`${gtfs}StopTime`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}arrivalTime`),
      namedNode(`${rdfs}label`),
      literal(`Arrival time`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}arrivalTime`),
      namedNode(`${rdfs}label`),
      literal(`hora de llegada`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}arrivalTime`),
      namedNode(`${rdfs}range`),
      namedNode(`${xsd}duration`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}arrivalTime`),
      namedNode(`${rdfs}seeAlso`),
      namedNode(`${ns8}stop_times_fields`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}arrivalTime`),
      namedNode(`${vs}term_status`),
      literal(`inestable`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}arrivalTime`),
      namedNode(`${vs}term_status`),
      literal(`unstable`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}bikesAllowed`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}bikesAllowed`),
      namedNode(`${rdfs}label`),
      literal(`Bikes allowed`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}bikesAllowed`),
      namedNode(`${rdfs}label`),
      literal(`bicicletas permitidas`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}bikesAllowed`),
      namedNode(`${rdfs}range`),
      namedNode(`${xsd}boolean`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}bikesAllowed`),
      namedNode(`${vs}term_status`),
      literal(`inestable`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}bikesAllowed`),
      namedNode(`${vs}term_status`),
      literal(`unstable`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}block`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}block`),
      namedNode(`${rdfs}comment`),
      literal(`Identifica el bloque al que pertenece el viaje. Un bloque consta de dos o más viajes secuenciales realizados en el mismo vehículo, en los que un pasajero puede cambiar de viaje si simplemente permanece en el vehículo.`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}block`),
      namedNode(`${rdfs}comment`),
      literal(`Identifies the block to which the trip within this feed belongs. A block consists of two or more sequential trips made using the same vehicle, where a passenger can transfer from one trip to the next just by staying in the vehicle.`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}block`),
      namedNode(`${rdfs}domain`),
      namedNode(`${gtfs}Trip`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}block`),
      namedNode(`${rdfs}label`),
      literal(`Block`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}block`),
      namedNode(`${rdfs}label`),
      literal(`Bloque`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}block`),
      namedNode(`${rdfs}range`),
      namedNode(`${xsd}nonNegativeInteger`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}block`),
      namedNode(`${vs}term_status`),
      literal(`inestable`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}block`),
      namedNode(`${vs}term_status`),
      literal(`unstable`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}code`),
      namedNode(`${gtfs}comment`),
      literal(`This is the stop_code field`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}code`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}code`),
      namedNode(`${rdfs}comment`),
      literal(`A gtfs:code predicate defines the stop code for a stop.`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}code`),
      namedNode(`${rdfs}label`),
      literal(`Stop Code`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}code`),
      namedNode(`${rdfs}seeAlso`),
      namedNode(`${ns8}stops_fields`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}code`),
      namedNode(`${vs}term_status`),
      literal(`unstable`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}color`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}color`),
      namedNode(`${rdfs}comment`),
      literal(`A 6 character hexidecimal color (without #)`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}color`),
      namedNode(`${rdfs}comment`),
      literal(`Un color expresado con 6 caracteres hexadecimales (sin #)`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}color`),
      namedNode(`${rdfs}label`),
      literal(`Color`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}color`),
      namedNode(`${rdfs}label`),
      literal(`color`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}color`),
      namedNode(`${rdfs}range`),
      namedNode(`${xsd}string`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}color`),
      namedNode(`${vs}term_status`),
      literal(`inestable`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}color`),
      namedNode(`${vs}term_status`),
      literal(`unstable`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}comment`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}comment`),
      namedNode(`${rdfs}comment`),
      literal(`A comment on the relation between the RDFS ontology and the CSV specification.`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}comment`),
      namedNode(`${rdfs}comment`),
      literal(`Un comentario entre la relación entre la ontología RDFS y la especificación CSV.`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}comment`),
      namedNode(`${rdfs}label`),
      literal(`Comentario de enlace`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}comment`),
      namedNode(`${rdfs}label`),
      literal(`Mapping comment`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}comment`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${rdfs}comment`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}comment`),
      namedNode(`${vs}term_status`),
      literal(`inestable`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}comment`),
      namedNode(`${vs}term_status`),
      literal(`unstable`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}dateAddition`),
      namedNode(`${gtfs}comment`),
      literal(`El campo exception_type en calendar_dates.txt - 1 es cierto, 2 es falso.`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}dateAddition`),
      namedNode(`${gtfs}comment`),
      literal(`The exception_type field in calendar_dates.txt - 1 is true, 2 is false.`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}dateAddition`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}dateAddition`),
      namedNode(`${rdfs}comment`),
      literal(`A boolean whether to add (true) or remove (false) a date`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}dateAddition`),
      namedNode(`${rdfs}comment`),
      literal(`Booleano que indica si el servicio se ha agregado (cierto) o suprimido (falso) en la fecha especificada`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}dateAddition`),
      namedNode(`${rdfs}domain`),
      namedNode(`${gtfs}CalendarDateRule`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}dateAddition`),
      namedNode(`${rdfs}label`),
      literal(`Date Addition`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}dateAddition`),
      namedNode(`${rdfs}label`),
      literal(`incorporación de fecha`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}dateAddition`),
      namedNode(`${rdfs}range`),
      namedNode(`${xsd}boolean`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}dateAddition`),
      namedNode(`${vs}term_status`),
      literal(`inestable`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}dateAddition`),
      namedNode(`${vs}term_status`),
      literal(`unstable`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}departureTime`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}departureTime`),
      namedNode(`${rdfs}comment`),
      literal(`Check the original specification for special cases`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}departureTime`),
      namedNode(`${rdfs}comment`),
      literal(`Compruebe la especificación original para casos especiales`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}departureTime`),
      namedNode(`${rdfs}domain`),
      namedNode(`${gtfs}StopTime`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}departureTime`),
      namedNode(`${rdfs}label`),
      literal(`Departure time`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}departureTime`),
      namedNode(`${rdfs}label`),
      literal(`hora de salida`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}departureTime`),
      namedNode(`${rdfs}range`),
      namedNode(`${xsd}duration`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}departureTime`),
      namedNode(`${rdfs}seeAlso`),
      namedNode(`${ns8}stop_times_fields`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}departureTime`),
      namedNode(`${vs}term_status`),
      literal(`inestable`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}departureTime`),
      namedNode(`${vs}term_status`),
      literal(`unstable`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}destinationStop`),
      namedNode(`${gtfs}comment`),
      literal(`Conectado a to_stop_id en transfers.txt`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}destinationStop`),
      namedNode(`${gtfs}comment`),
      literal(`Map from to_stop_id in transfers.txt`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}destinationStop`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}destinationStop`),
      namedNode(`${rdfs}comment`),
      literal(`Enlace al gtfs:Stop hacia el que va el viaje`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}destinationStop`),
      namedNode(`${rdfs}comment`),
      literal(`Link to gtfs:Stop to go to`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}destinationStop`),
      namedNode(`${rdfs}label`),
      literal(`Destination Stop`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}destinationStop`),
      namedNode(`${rdfs}label`),
      literal(`parada de destino`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}destinationStop`),
      namedNode(`${rdfs}range`),
      namedNode(`${gtfs}Stop`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}destinationStop`),
      namedNode(`${vs}term_status`),
      literal(`inestable`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}destinationStop`),
      namedNode(`${vs}term_status`),
      literal(`unstable`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}destinationZone`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}destinationZone`),
      namedNode(`${rdfs}comment`),
      literal(`La zona de destino donde una clase tarifaria se aplica`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}destinationZone`),
      namedNode(`${rdfs}comment`),
      literal(`The destination zone where this applies`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}destinationZone`),
      namedNode(`${rdfs}label`),
      literal(`Destination Zone`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}destinationZone`),
      namedNode(`${rdfs}label`),
      literal(`zona de destino`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}destinationZone`),
      namedNode(`${vs}term_status`),
      literal(`inestable`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}destinationZone`),
      namedNode(`${vs}term_status`),
      literal(`unstable`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}direction`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}direction`),
      namedNode(`${rdfs}comment`),
      literal(`A binary property to indicate the direction the trip is going (e.g., outbound/inbound, center/airport)`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}direction`),
      namedNode(`${rdfs}comment`),
      literal(`Apunta a un valor binario que indica la dirección del viaje (e.g., ida/vuelta, centro/aeropuerto)`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}direction`),
      namedNode(`${rdfs}label`),
      literal(`Direction`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}direction`),
      namedNode(`${rdfs}label`),
      literal(`dirección`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}direction`),
      namedNode(`${rdfs}range`),
      namedNode(`${xsd}boolean`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}direction`),
      namedNode(`${vs}term_status`),
      literal(`inestable`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}direction`),
      namedNode(`${vs}term_status`),
      literal(`unstable`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}distanceTraveled`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}distanceTraveled`),
      namedNode(`${rdfs}comment`),
      literal(`Indica la distancia a una parada desde el primer punto del recorrido. Representa una distancia de viaje real durante la ruta en unidades expresadas como pies o kilómetros. Esta información permite que quien planifica el viaje determine la porción de la forma que se debe trazar al mostrar parte de un viaje en el mapa. Los valores utilizados para gtfs:distanceTraveled se deben incrementar junto con los de gtfs:stopSequence, es decir, no se pueden usar para mostrar el recorrido inverso a lo largo de una ruta.`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}distanceTraveled`),
      namedNode(`${rdfs}comment`),
      literal(`Positions a stop as a distance from the first shape point. It represents a real distance traveled along the route in units such as feet or kilometers. This information allows the trip planner to determine how much of the shape to draw when showing part of a trip on the map. The values used for gtfs:distanceTraveled must increase along with gtfs:stopSequence: they cannot be used to show reverse travel along a route.`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}distanceTraveled`),
      namedNode(`${rdfs}domain`),
      namedNode(`${gtfs}Shape`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}distanceTraveled`),
      namedNode(`${rdfs}domain`),
      namedNode(`${gtfs}StopTime`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}distanceTraveled`),
      namedNode(`${rdfs}label`),
      literal(`Distance Traveled`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}distanceTraveled`),
      namedNode(`${rdfs}label`),
      literal(`distancia recorrida`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}distanceTraveled`),
      namedNode(`${rdfs}range`),
      namedNode(`${xsd}nonNegativeInteger`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}distanceTraveled`),
      namedNode(`${vs}term_status`),
      literal(`inestable`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}distanceTraveled`),
      namedNode(`${vs}term_status`),
      literal(`unstable`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}dropOffType`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}dropOffType`),
      namedNode(`${rdfs}comment`),
      literal(`Indica si los pasajeros se bajan en una parada como parte del horario normal o si no pueden bajar en esa parada.`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}dropOffType`),
      namedNode(`${rdfs}comment`),
      literal(`Which type of drop off`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}dropOffType`),
      namedNode(`${rdfs}label`),
      literal(`Drop off type`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}dropOffType`),
      namedNode(`${rdfs}label`),
      literal(`tipo de bajada`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}dropOffType`),
      namedNode(`${rdfs}range`),
      namedNode(`${gtfs}DropOffType`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}dropOffType`),
      namedNode(`${vs}term_status`),
      literal(`inestable`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}dropOffType`),
      namedNode(`${vs}term_status`),
      literal(`unstable`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}endTime`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}endTime`),
      namedNode(`${rdfs}comment`),
      literal(`Define la hora a la que el servicio cambia de frecuencia (o bien finaliza) en la primera parada del viaje.`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}endTime`),
      namedNode(`${rdfs}comment`),
      literal(`Indicates the time at which service changes to a different frequency (or ceases) at the first stop in the trip.`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}endTime`),
      namedNode(`${rdfs}domain`),
      namedNode(`${gtfs}Frequency`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}endTime`),
      namedNode(`${rdfs}label`),
      literal(`End Time`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}endTime`),
      namedNode(`${rdfs}label`),
      literal(`hora final`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}endTime`),
      namedNode(`${rdfs}range`),
      namedNode(`${xsd}string`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}endTime`),
      namedNode(`${vs}term_status`),
      literal(`inestable`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}endTime`),
      namedNode(`${vs}term_status`),
      literal(`unstable`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}fareUrl`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}fareUrl`),
      namedNode(`${rdfs}comment`),
      literal(`La URL de una página web que permite a un usuario comprar online billetes u otros productos de transporte de esa empresa`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}fareUrl`),
      namedNode(`${rdfs}comment`),
      literal(`The URL of a web page that allows a rider to purchase tickets or other fare instruments for that agency online`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}fareUrl`),
      namedNode(`${rdfs}domain`),
      namedNode(`${gtfs}Agency`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}fareUrl`),
      namedNode(`${rdfs}label`),
      literal(`URL de tarifas`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}fareUrl`),
      namedNode(`${rdfs}label`),
      literal(`fare URL`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}fareUrl`),
      namedNode(`${rdfs}seeAlso`),
      namedNode(`${ns8}agency_fields`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}fareUrl`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${foaf}page`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}fareUrl`),
      namedNode(`${vs}term_status`),
      literal(`inestable`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}fareUrl`),
      namedNode(`${vs}term_status`),
      literal(`unstable`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}friday`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}friday`),
      namedNode(`${rdfs}comment`),
      literal(`Service is available on Friday`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}friday`),
      namedNode(`${rdfs}comment`),
      literal(`Servicio disponible los viernes`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}friday`),
      namedNode(`${rdfs}label`),
      literal(`Friday`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}friday`),
      namedNode(`${rdfs}label`),
      literal(`viernes`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}friday`),
      namedNode(`${rdfs}range`),
      namedNode(`${xsd}boolean`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}friday`),
      namedNode(`${vs}term_status`),
      literal(`inestable`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}friday`),
      namedNode(`${vs}term_status`),
      literal(`unstable`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}headsign`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}headsign`),
      namedNode(`${rdfs}comment`),
      literal(`Esta propiedad apunta al texto que indica el destino del viaje a los pasajeros.`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}headsign`),
      namedNode(`${rdfs}comment`),
      literal(`The gtfs:headsign property contains the text that appears on a sign that identifies the trip's destination to passengers.`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}headsign`),
      namedNode(`${rdfs}label`),
      literal(`Headsign`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}headsign`),
      namedNode(`${rdfs}label`),
      literal(`destino del viaje`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}headsign`),
      namedNode(`${rdfs}range`),
      namedNode(`${xsd}string`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}headsign`),
      namedNode(`${rdfs}seeAlso`),
      namedNode(`${ns16}TripHeadsign`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}headsign`),
      namedNode(`${vs}term_status`),
      literal(`inestable`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}headsign`),
      namedNode(`${vs}term_status`),
      literal(`unstable`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}headwaySeconds`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}headwaySeconds`),
      namedNode(`${rdfs}comment`),
      literal(`Indica el período de tiempo (en segundos) entre salidas desde la misma parada (tiempo entre viajes) para este tipo de viaje, durante el intervalo de tiempo especificado mediante start_time y end_time.`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}headwaySeconds`),
      namedNode(`${rdfs}comment`),
      literal(`Indicates the time between departures from the same stop (headway) for this trip type, during the time interval specified by gtfs:startTime and gtfs:endTime.`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}headwaySeconds`),
      namedNode(`${rdfs}domain`),
      namedNode(`${gtfs}Frequency`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}headwaySeconds`),
      namedNode(`${rdfs}label`),
      literal(`Headway Seconds`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}headwaySeconds`),
      namedNode(`${rdfs}label`),
      literal(`tiempo entre viajes`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}headwaySeconds`),
      namedNode(`${rdfs}range`),
      namedNode(`${xsd}nonNegativeInteger`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}headwaySeconds`),
      namedNode(`${vs}term_status`),
      literal(`inestable`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}headwaySeconds`),
      namedNode(`${vs}term_status`),
      literal(`unstable`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}longName`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}longName`),
      namedNode(`${rdfs}comment`),
      literal(`Long name given to a route`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}longName`),
      namedNode(`${rdfs}comment`),
      literal(`Nombre completo de una ruta`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}longName`),
      namedNode(`${rdfs}domain`),
      namedNode(`${gtfs}Route`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}longName`),
      namedNode(`${rdfs}label`),
      literal(`Long name`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}longName`),
      namedNode(`${rdfs}label`),
      literal(`nombre completo`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}longName`),
      namedNode(`${rdfs}seeAlso`),
      namedNode(`${ns16}RouteLongName`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}longName`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${dcterms}title`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}longName`),
      namedNode(`${vs}term_status`),
      literal(`inestable`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}longName`),
      namedNode(`${vs}term_status`),
      literal(`unstable`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}minimumTransferTime`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}minimumTransferTime`),
      namedNode(`${rdfs}comment`),
      literal(`El tiempo mínimo de transbordo cuando gtfs:transferType es gtfs:MinimumTimeTransfer.`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}minimumTransferTime`),
      namedNode(`${rdfs}comment`),
      literal(`The minimum transfer time when the gtfs:transferType is gtfs:MinimumTimeTransfer.`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}minimumTransferTime`),
      namedNode(`${rdfs}domain`),
      namedNode(`${gtfs}TransferRule`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}minimumTransferTime`),
      namedNode(`${rdfs}label`),
      literal(`Minimum Transfer Time`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}minimumTransferTime`),
      namedNode(`${rdfs}label`),
      literal(`Tiempo mínimo de transbordo`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}minimumTransferTime`),
      namedNode(`${rdfs}range`),
      namedNode(`${xsd}nonNegativeInteger`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}minimumTransferTime`),
      namedNode(`${vs}term_status`),
      literal(`inestable`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}minimumTransferTime`),
      namedNode(`${vs}term_status`),
      literal(`unstable`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}monday`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}monday`),
      namedNode(`${rdfs}comment`),
      literal(`Service is available on Monday`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}monday`),
      namedNode(`${rdfs}comment`),
      literal(`Servicio disponible los lunes`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}monday`),
      namedNode(`${rdfs}label`),
      literal(`Monday`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}monday`),
      namedNode(`${rdfs}label`),
      literal(`lunes`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}monday`),
      namedNode(`${rdfs}range`),
      namedNode(`${xsd}boolean`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}monday`),
      namedNode(`${vs}term_status`),
      literal(`inestable`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}monday`),
      namedNode(`${vs}term_status`),
      literal(`unstable`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}originStop`),
      namedNode(`${gtfs}comment`),
      literal(`Conectado a from_stop_id en transfers.txt`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}originStop`),
      namedNode(`${gtfs}comment`),
      literal(`Map from from_stop_id in transfers.txt`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}originStop`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}originStop`),
      namedNode(`${rdfs}comment`),
      literal(`Enlace al gtfs:Stop desde el que empieza el viaje`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}originStop`),
      namedNode(`${rdfs}comment`),
      literal(`Link to gtfs:Stop to start from`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}originStop`),
      namedNode(`${rdfs}label`),
      literal(`Origin Stop`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}originStop`),
      namedNode(`${rdfs}label`),
      literal(`parada de origen`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}originStop`),
      namedNode(`${rdfs}range`),
      namedNode(`${gtfs}Stop`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}originStop`),
      namedNode(`${vs}term_status`),
      literal(`inestable`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}originStop`),
      namedNode(`${vs}term_status`),
      literal(`unstable`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}originZone`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}originZone`),
      namedNode(`${rdfs}comment`),
      literal(`La zona de origen donde una clase tarifaria se aplica`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}originZone`),
      namedNode(`${rdfs}comment`),
      literal(`The origin zone where this applies`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}originZone`),
      namedNode(`${rdfs}label`),
      literal(`Origin Zone`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}originZone`),
      namedNode(`${rdfs}label`),
      literal(`zona de origen`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}originZone`),
      namedNode(`${vs}term_status`),
      literal(`inestable`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}originZone`),
      namedNode(`${vs}term_status`),
      literal(`unstable`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}parentStation`),
      namedNode(`${gtfs}comment`),
      literal(`Enlaza a una línea en stop.txt donde locationType=1.`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}parentStation`),
      namedNode(`${gtfs}comment`),
      literal(`Links to a row in stop.txt where locationType=1.`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}parentStation`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}parentStation`),
      namedNode(`${rdfs}comment`),
      literal(`gtfs:parentStation identifica la estación asociada a la parada`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}parentStation`),
      namedNode(`${rdfs}comment`),
      literal(`gtfs:parentStation identifies the station associated with the stop`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}parentStation`),
      namedNode(`${rdfs}domain`),
      namedNode(`${gtfs}Stop`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}parentStation`),
      namedNode(`${rdfs}label`),
      literal(`Parent Station`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}parentStation`),
      namedNode(`${rdfs}label`),
      literal(`estación matriz`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}parentStation`),
      namedNode(`${rdfs}range`),
      namedNode(`${gtfs}Station`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}parentStation`),
      namedNode(`${vs}term_status`),
      literal(`inestable`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}parentStation`),
      namedNode(`${vs}term_status`),
      literal(`unstable`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}paymentMethod`),
      namedNode(`${gtfs}comment`),
      literal(`Campo payment_method en fare_attributes. Si es 0, use gtfs:OnBoard; si es 1, use gtfs:BeforeBoarding`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}paymentMethod`),
      namedNode(`${gtfs}comment`),
      literal(`payment_method field in fare_attributes. If 0, use gtfs:OnBoard; if 1, use gtfs:BeforeBoarding`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}paymentMethod`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}paymentMethod`),
      namedNode(`${rdfs}comment`),
      literal(`The payment method`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}paymentMethod`),
      namedNode(`${rdfs}comment`),
      literal(`el método de pago`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}paymentMethod`),
      namedNode(`${rdfs}domain`),
      namedNode(`${gtfs}FareClass`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}paymentMethod`),
      namedNode(`${rdfs}label`),
      literal(`Método de pago`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}paymentMethod`),
      namedNode(`${rdfs}label`),
      literal(`Payment method`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}paymentMethod`),
      namedNode(`${rdfs}range`),
      namedNode(`${gtfs}PaymentMethod`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}paymentMethod`),
      namedNode(`${vs}term_status`),
      literal(`inestable`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}paymentMethod`),
      namedNode(`${vs}term_status`),
      literal(`unstable`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}pickupType`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}pickupType`),
      namedNode(`${rdfs}comment`),
      literal(`Indica si se recogen los pasajeros en una parada como parte del horario normal o si su recogida en dicha parada no se encuentra disponible.`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}pickupType`),
      namedNode(`${rdfs}comment`),
      literal(`Which type of pickup`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}pickupType`),
      namedNode(`${rdfs}label`),
      literal(`Pickup type`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}pickupType`),
      namedNode(`${rdfs}label`),
      literal(`tipo de recogida`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}pickupType`),
      namedNode(`${rdfs}range`),
      namedNode(`${gtfs}PickupType`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}pickupType`),
      namedNode(`${vs}term_status`),
      literal(`inestable`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}pickupType`),
      namedNode(`${vs}term_status`),
      literal(`unstable`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}pointSequence`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}pointSequence`),
      namedNode(`${rdfs}comment`),
      literal(`El campo shape_pt_sequence asocia la latitud y longitud de un punto de recorrido con su orden de secuencia en el recorrido. Los valores para shape_pt_sequence deben ser números enteros positivos y crecientes conforme avanza el viaje.`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}pointSequence`),
      namedNode(`${rdfs}comment`),
      literal(`The shape_pt_sequence field associates the latitude and longitude of a shape point with its sequence order along the shape. The values for shape_pt_sequence must be non-negative integers, and they must increase along the trip.`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}pointSequence`),
      namedNode(`${rdfs}domain`),
      namedNode(`${gtfs}ShapePoint`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}pointSequence`),
      namedNode(`${rdfs}label`),
      literal(`Point Sequence`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}pointSequence`),
      namedNode(`${rdfs}label`),
      literal(`secuencia de puntos`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}pointSequence`),
      namedNode(`${rdfs}range`),
      namedNode(`${xsd}nonNegativeInteger`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}pointSequence`),
      namedNode(`${vs}term_status`),
      literal(`inestable`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}pointSequence`),
      namedNode(`${vs}term_status`),
      literal(`unstable`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}route`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}route`),
      namedNode(`${rdfs}comment`),
      literal(`Este viaje forma parte de esta gtfs:Route`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}route`),
      namedNode(`${rdfs}comment`),
      literal(`This thing is applicable to this gtfs:Route`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}route`),
      namedNode(`${rdfs}domain`),
      namedNode(`${gtfs}Trip`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}route`),
      namedNode(`${rdfs}label`),
      literal(`Route`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}route`),
      namedNode(`${rdfs}label`),
      literal(`ruta`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}route`),
      namedNode(`${rdfs}range`),
      namedNode(`${gtfs}FareRule`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}route`),
      namedNode(`${rdfs}range`),
      namedNode(`${gtfs}Route`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}route`),
      namedNode(`${vs}term_status`),
      literal(`inestable`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}route`),
      namedNode(`${vs}term_status`),
      literal(`unstable`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}routeType`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}routeType`),
      namedNode(`${rdfs}comment`),
      literal(`Enlaza al tipo de vehículo que opera en esta ruta`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}routeType`),
      namedNode(`${rdfs}comment`),
      literal(`Links to the type of vehicle operating on this route`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}routeType`),
      namedNode(`${rdfs}domain`),
      namedNode(`${gtfs}Route`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}routeType`),
      namedNode(`${rdfs}label`),
      literal(`Route type`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}routeType`),
      namedNode(`${rdfs}label`),
      literal(`tipo de ruta`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}routeType`),
      namedNode(`${rdfs}range`),
      namedNode(`${gtfs}RouteType`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}routeType`),
      namedNode(`${rdfs}seeAlso`),
      namedNode(`${ns16}RouteType`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}routeType`),
      namedNode(`${vs}term_status`),
      literal(`inestable`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}routeType`),
      namedNode(`${vs}term_status`),
      literal(`unstable`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}saturday`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}saturday`),
      namedNode(`${rdfs}comment`),
      literal(`Service is available on Saturday`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}saturday`),
      namedNode(`${rdfs}comment`),
      literal(`Servicio disponible los sábados`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}saturday`),
      namedNode(`${rdfs}label`),
      literal(`Saturday`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}saturday`),
      namedNode(`${rdfs}label`),
      literal(`sábado`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}saturday`),
      namedNode(`${rdfs}range`),
      namedNode(`${xsd}boolean`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}saturday`),
      namedNode(`${vs}term_status`),
      literal(`inestable`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}saturday`),
      namedNode(`${vs}term_status`),
      literal(`unstable`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}service`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}service`),
      namedNode(`${rdfs}comment`),
      literal(`Cumple este gtfs:Service.`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}service`),
      namedNode(`${rdfs}comment`),
      literal(`Follows this gtfs:Service.`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}service`),
      namedNode(`${rdfs}label`),
      literal(`Service`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}service`),
      namedNode(`${rdfs}label`),
      literal(`Servicio`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}service`),
      namedNode(`${rdfs}range`),
      namedNode(`${gtfs}Service`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}service`),
      namedNode(`${vs}term_status`),
      literal(`inestable`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}service`),
      namedNode(`${vs}term_status`),
      literal(`unstable`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}serviceRule`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}serviceRule`),
      namedNode(`${rdfs}comment`),
      literal(`Reglas de servicio que definen un conjunto de fechas`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}serviceRule`),
      namedNode(`${rdfs}comment`),
      literal(`Service rules which define together a set of dates`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}serviceRule`),
      namedNode(`${rdfs}domain`),
      namedNode(`${gtfs}Service`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}serviceRule`),
      namedNode(`${rdfs}label`),
      literal(`Service rule`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}serviceRule`),
      namedNode(`${rdfs}label`),
      literal(`regla de servicio`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}serviceRule`),
      namedNode(`${rdfs}range`),
      namedNode(`${gtfs}ServiceRule`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}serviceRule`),
      namedNode(`${vs}term_status`),
      literal(`inestable`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}serviceRule`),
      namedNode(`${vs}term_status`),
      literal(`unstable`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}shape`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}shape`),
      namedNode(`${rdfs}comment`),
      literal(`Un enlace al recorrido que sigue el viaje.`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}shape`),
      namedNode(`${rdfs}comment`),
      literal(`a link to a shape the trip follows.`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}shape`),
      namedNode(`${rdfs}label`),
      literal(`Shape`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}shape`),
      namedNode(`${rdfs}label`),
      literal(`forma del recorrido, trayecto, itinerario`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}shape`),
      namedNode(`${rdfs}range`),
      namedNode(`${gtfs}Shape`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}shape`),
      namedNode(`${vs}term_status`),
      literal(`inestable`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}shape`),
      namedNode(`${vs}term_status`),
      literal(`unstable`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}shapePoint`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}shapePoint`),
      namedNode(`${rdfs}comment`),
      literal(`Enlaza a gtfs:ShapePoint`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}shapePoint`),
      namedNode(`${rdfs}comment`),
      literal(`Links to a gtfs:ShapePoint`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}shapePoint`),
      namedNode(`${rdfs}domain`),
      namedNode(`${gtfs}Shape`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}shapePoint`),
      namedNode(`${rdfs}label`),
      literal(`Shape Point`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}shapePoint`),
      namedNode(`${rdfs}label`),
      literal(`punto de recorrido`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}shapePoint`),
      namedNode(`${rdfs}range`),
      namedNode(`${gtfs}ShapePoint`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}shapePoint`),
      namedNode(`${vs}term_status`),
      literal(`inestable`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}shapePoint`),
      namedNode(`${vs}term_status`),
      literal(`unstable`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}shortName`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}shortName`),
      namedNode(`${rdfs}comment`),
      literal(`Nombre corto dado a una ruta o viaje`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}shortName`),
      namedNode(`${rdfs}comment`),
      literal(`Short name given to a route or a trip`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}shortName`),
      namedNode(`${rdfs}domain`),
      namedNode(`${gtfs}Route`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}shortName`),
      namedNode(`${rdfs}domain`),
      namedNode(`${gtfs}Trip`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}shortName`),
      namedNode(`${rdfs}label`),
      literal(`Short name`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}shortName`),
      namedNode(`${rdfs}label`),
      literal(`nombre corto`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}shortName`),
      namedNode(`${rdfs}seeAlso`),
      namedNode(`${ns16}RouteShortName`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}shortName`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${dcterms}title`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}shortName`),
      namedNode(`${vs}term_status`),
      literal(`inestable`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}shortName`),
      namedNode(`${vs}term_status`),
      literal(`unstable`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}startTime`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}startTime`),
      namedNode(`${rdfs}comment`),
      literal(`Define la hora a la que empieza el servicio con la frecuencia especificada`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}startTime`),
      namedNode(`${rdfs}comment`),
      literal(`Specifies the time at which service begins with the specified frequency`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}startTime`),
      namedNode(`${rdfs}domain`),
      namedNode(`${gtfs}Frequency`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}startTime`),
      namedNode(`${rdfs}label`),
      literal(`Start Time`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}startTime`),
      namedNode(`${rdfs}label`),
      literal(`hora de inicio`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}startTime`),
      namedNode(`${rdfs}range`),
      namedNode(`${xsd}string`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}startTime`),
      namedNode(`${vs}term_status`),
      literal(`inestable`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}startTime`),
      namedNode(`${vs}term_status`),
      literal(`unstable`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}stop`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}stop`),
      namedNode(`${rdfs}comment`),
      literal(`Indica que este concepto tiene cierta parada.`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}stop`),
      namedNode(`${rdfs}comment`),
      literal(`Indicates that this has a certain stop.`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}stop`),
      namedNode(`${rdfs}label`),
      literal(`Stop`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}stop`),
      namedNode(`${rdfs}label`),
      literal(`parada`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}stop`),
      namedNode(`${rdfs}range`),
      namedNode(`${gtfs}Stop`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}stop`),
      namedNode(`${vs}term_status`),
      literal(`inestable`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}stop`),
      namedNode(`${vs}term_status`),
      literal(`unstable`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}stopSequence`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}stopSequence`),
      namedNode(`${rdfs}comment`),
      literal(`Indica el orden de paradas para un viaje concreto. Los valores de gtfs:stopSequence deben ser enteros no negativos, deben aumentar durante el viaje referenciado por la propiedad gtfs:trip.`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}stopSequence`),
      namedNode(`${rdfs}comment`),
      literal(`The stopSequence property identifies the order of the stops for a particular trip. The values must increase along the gtfs:Trip referenced in the gtfs:trip property.`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}stopSequence`),
      namedNode(`${rdfs}domain`),
      namedNode(`${gtfs}StopTime`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}stopSequence`),
      namedNode(`${rdfs}label`),
      literal(`Stop sequence`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}stopSequence`),
      namedNode(`${rdfs}label`),
      literal(`secuencia de paradas`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}stopSequence`),
      namedNode(`${rdfs}range`),
      namedNode(`${xsd}nonNegativeInteger`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}stopSequence`),
      namedNode(`${vs}term_status`),
      literal(`inestable`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}stopSequence`),
      namedNode(`${vs}term_status`),
      literal(`unstable`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}sunday`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}sunday`),
      namedNode(`${rdfs}comment`),
      literal(`Service is available on Sunday`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}sunday`),
      namedNode(`${rdfs}comment`),
      literal(`Servicio disponible los domingos`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}sunday`),
      namedNode(`${rdfs}label`),
      literal(`Sunday`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}sunday`),
      namedNode(`${rdfs}label`),
      literal(`domingos`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}sunday`),
      namedNode(`${rdfs}range`),
      namedNode(`${xsd}boolean`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}sunday`),
      namedNode(`${vs}term_status`),
      literal(`inestable`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}sunday`),
      namedNode(`${vs}term_status`),
      literal(`unstable`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}textColor`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}textColor`),
      namedNode(`${rdfs}comment`),
      literal(`A 6 character hexidecimal color (without #) asigned to a text label.`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}textColor`),
      namedNode(`${rdfs}comment`),
      literal(`Un color expresado con 6 caracteres hexadecimales (sin #) asignado a una etiqueta de texto.`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}textColor`),
      namedNode(`${rdfs}label`),
      literal(`Text color`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}textColor`),
      namedNode(`${rdfs}label`),
      literal(`color de texto`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}textColor`),
      namedNode(`${rdfs}range`),
      namedNode(`${xsd}string`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}textColor`),
      namedNode(`${vs}term_status`),
      literal(`inestable`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}textColor`),
      namedNode(`${vs}term_status`),
      literal(`unstable`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}thursday`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}thursday`),
      namedNode(`${rdfs}comment`),
      literal(`Service is available on Thursday`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}thursday`),
      namedNode(`${rdfs}comment`),
      literal(`Servicio disponible los jueves`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}thursday`),
      namedNode(`${rdfs}label`),
      literal(`Thursday`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}thursday`),
      namedNode(`${rdfs}label`),
      literal(`jueves`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}thursday`),
      namedNode(`${rdfs}range`),
      namedNode(`${xsd}boolean`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}thursday`),
      namedNode(`${vs}term_status`),
      literal(`inestable`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}thursday`),
      namedNode(`${vs}term_status`),
      literal(`unstable`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}timeZone`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}timeZone`),
      namedNode(`${rdfs}comment`),
      literal(`La zona horaria donde una persona u organización está situada.`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}timeZone`),
      namedNode(`${rdfs}comment`),
      literal(`The timezone where a person or organisation is located.`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}timeZone`),
      namedNode(`${rdfs}label`),
      literal(`Time zone`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}timeZone`),
      namedNode(`${rdfs}label`),
      literal(`zona horaria`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}timeZone`),
      namedNode(`${rdfs}seeAlso`),
      namedNode(`${ns17}List_of_tz_database_time_zones`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}timeZone`),
      namedNode(`${owl}equivalentProperty`),
      namedNode(`${ns18}timezone`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}timeZone`),
      namedNode(`${vs}term_status`),
      literal(`prueba`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}timeZone`),
      namedNode(`${vs}term_status`),
      literal(`testing`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}transferExpiryTime`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}transferExpiryTime`),
      namedNode(`${rdfs}comment`),
      literal(`El tiempo que el billete es válido desde que se abandona el vehículo para hacer un transbordo`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}transferExpiryTime`),
      namedNode(`${rdfs}comment`),
      literal(`The time a ticket remains valid when having left the previous vehicle`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}transferExpiryTime`),
      namedNode(`${rdfs}label`),
      literal(`Tiempo de validez para el transbordo`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}transferExpiryTime`),
      namedNode(`${rdfs}label`),
      literal(`Transfer Expiry Time`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}transferExpiryTime`),
      namedNode(`${vs}term_status`),
      literal(`inestable`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}transferExpiryTime`),
      namedNode(`${vs}term_status`),
      literal(`unstable`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}transferType`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}transferType`),
      namedNode(`${rdfs}domain`),
      namedNode(`${gtfs}Transfer`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}transferType`),
      namedNode(`${rdfs}label`),
      literal(`Transfer Type`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}transferType`),
      namedNode(`${rdfs}label`),
      literal(`tipo de transbordo`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}transferType`),
      namedNode(`${rdfs}range`),
      namedNode(`${gtfs}TransferType`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}transferType`),
      namedNode(`${vs}term_status`),
      literal(`inestable`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}transferType`),
      namedNode(`${vs}term_status`),
      literal(`unstable`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}transfers`),
      namedNode(`${gtfs}comment`),
      literal(`Map to 0 to gtfs:NoTransfersAllowed, 1 to gtfs:OneTransferAllowed, 2 to gtfs:TwoTransfersAllowed and empty to gtfs:UnlimitedTransfersAllowed`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}transfers`),
      namedNode(`${gtfs}comment`),
      literal(`Valor 0 si no se permite ningún transbordo (gtfs:NoTransfersAllowed), 1 si se puede realizar un transbordo (gtfs:OneTransferAllowed), 2 si se pueden realizar dos transbordos (gtfs:TwoTransfersAllowed) y deje el campo vacío si se permite una cantidad ilimitada de transbordos (gtfs:UnlimitedTransfersAllowed)`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}transfers`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}transfers`),
      namedNode(`${rdfs}comment`),
      literal(`The validity of the ticket when transferring`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}transfers`),
      namedNode(`${rdfs}comment`),
      literal(`Validez del ticket para transbordos`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}transfers`),
      namedNode(`${rdfs}domain`),
      namedNode(`${gtfs}FareClass`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}transfers`),
      namedNode(`${rdfs}label`),
      literal(`Transfers`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}transfers`),
      namedNode(`${rdfs}label`),
      literal(`transbordos`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}transfers`),
      namedNode(`${rdfs}range`),
      namedNode(`${gtfs}TransfersAllowedType`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}transfers`),
      namedNode(`${vs}term_status`),
      literal(`inestable`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}transfers`),
      namedNode(`${vs}term_status`),
      literal(`unstable`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}trip`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}trip`),
      namedNode(`${rdfs}comment`),
      literal(`Indica que este concepto es parte de cierto gtfs:Trip`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}trip`),
      namedNode(`${rdfs}comment`),
      literal(`Indicates that this is part of a certain gtfs:Trip`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}trip`),
      namedNode(`${rdfs}label`),
      literal(`Trip`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}trip`),
      namedNode(`${rdfs}label`),
      literal(`viaje`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}trip`),
      namedNode(`${rdfs}range`),
      namedNode(`${gtfs}Trip`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}trip`),
      namedNode(`${vs}term_status`),
      literal(`inestable`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}trip`),
      namedNode(`${vs}term_status`),
      literal(`unstable`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}tuesday`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}tuesday`),
      namedNode(`${rdfs}comment`),
      literal(`Service is available on Tuesday`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}tuesday`),
      namedNode(`${rdfs}comment`),
      literal(`Servicio disponible los martes`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}tuesday`),
      namedNode(`${rdfs}label`),
      literal(`Tuesday`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}tuesday`),
      namedNode(`${rdfs}label`),
      literal(`martes`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}tuesday`),
      namedNode(`${rdfs}range`),
      namedNode(`${xsd}boolean`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}tuesday`),
      namedNode(`${vs}term_status`),
      literal(`inestable`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}tuesday`),
      namedNode(`${vs}term_status`),
      literal(`unstable`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}usesExactTimes`),
      namedNode(`${gtfs}comment`),
      literal(`Determina si los viajes basados en frecuencias deben estar programados de manera exacta según la información especificada de tiempo entre viajes. Falso cuando exact_times es 0 (o vacío), verdadero cuando es uno 1`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}usesExactTimes`),
      namedNode(`${gtfs}comment`),
      literal(`This is false when exact_times for this row is 0 or empty, true when it is 1`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}usesExactTimes`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}usesExactTimes`),
      namedNode(`${rdfs}domain`),
      namedNode(`${gtfs}Frequency`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}usesExactTimes`),
      namedNode(`${rdfs}label`),
      literal(`Frequency uses exact times`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}usesExactTimes`),
      namedNode(`${rdfs}label`),
      literal(`Viajes basados en frecuencias programados de manera exacta`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}usesExactTimes`),
      namedNode(`${rdfs}range`),
      namedNode(`${xsd}boolean`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}usesExactTimes`),
      namedNode(`${vs}term_status`),
      literal(`inestable`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}usesExactTimes`),
      namedNode(`${vs}term_status`),
      literal(`unstable`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}wednesday`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}wednesday`),
      namedNode(`${rdfs}comment`),
      literal(`Service is available on Wednesday`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}wednesday`),
      namedNode(`${rdfs}comment`),
      literal(`Servicio disponible los miércoles`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}wednesday`),
      namedNode(`${rdfs}label`),
      literal(`Wednesday`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}wednesday`),
      namedNode(`${rdfs}label`),
      literal(`miércoles`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}wednesday`),
      namedNode(`${rdfs}range`),
      namedNode(`${xsd}boolean`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}wednesday`),
      namedNode(`${vs}term_status`),
      literal(`inestable`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}wednesday`),
      namedNode(`${vs}term_status`),
      literal(`unstable`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}wheelchairAccessible`),
      namedNode(`${gtfs}comment`),
      literal(`Si wheelchair_accessible es 0, mapee a gtfs:CheckParentStation; si es 1, mapee a gtfs:WheelchairAccessible; si es 2, mapee a gtfs:NotWheelchairAccessible.`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}wheelchairAccessible`),
      namedNode(`${gtfs}comment`),
      literal(`When wheelchair_accessible is 0, map to gtfs:CheckParentStation; if 1 map to gtfs:WheelchairAccessible; if 2 map to gtfs:NotWheelchairAccessible.`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}wheelchairAccessible`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}wheelchairAccessible`),
      namedNode(`${rdfs}comment`),
      literal(`La parada o estación específica es accesible para silla de ruedas. Si esta parada es parte de una estación, hay también una ruta accesible desde el exterior de la estación hasta la parada.`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}wheelchairAccessible`),
      namedNode(`${rdfs}comment`),
      literal(`Wheelchair boardings are possible from the specified stop or station. If this stop is part of a station, there is also a wheelchair accessible path from outside the station towards the stop.`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}wheelchairAccessible`),
      namedNode(`${rdfs}domain`),
      namedNode(`${gtfs}Station`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}wheelchairAccessible`),
      namedNode(`${rdfs}domain`),
      namedNode(`${gtfs}Stop`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}wheelchairAccessible`),
      namedNode(`${rdfs}label`),
      literal(`accesible para silla de ruedas`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}wheelchairAccessible`),
      namedNode(`${rdfs}label`),
      literal(`wheelchair boarding`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}wheelchairAccessible`),
      namedNode(`${rdfs}range`),
      namedNode(`${gtfs}WheelchairBoardingStatus`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}wheelchairAccessible`),
      namedNode(`${vs}term_status`),
      literal(`inestable`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}wheelchairAccessible`),
      namedNode(`${vs}term_status`),
      literal(`unstable`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}zone`),
      namedNode(`${gtfs}comment`),
      literal(`Puede crear una nueva URI por zona, o simplemente referenciarla con un número entero.`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}zone`),
      namedNode(`${gtfs}comment`),
      literal(`You can create a new URI per zone, or just keep it an integer as per your own taste.`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}zone`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}zone`),
      namedNode(`${rdfs}comment`),
      literal(`A gtfs:Stop defines the fare zone. Zones are required if you want to provide fare information using gtfs:FareClass.`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}zone`),
      namedNode(`${rdfs}comment`),
      literal(`Un gtfs:Stop define la zona tarifaria. Las zonas son necesarias si quiere proporcionar información de tarifas usando gtfs:FareClass.`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}zone`),
      namedNode(`${rdfs}label`),
      literal(`Zone`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}zone`),
      namedNode(`${rdfs}label`),
      literal(`zona`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}zone`),
      namedNode(`${rdfs}range`),
      namedNode(`${gtfs}Zone`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}zone`),
      namedNode(`${vs}term_status`),
      literal(`inestable`, 'es'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${gtfs}zone`),
      namedNode(`${vs}term_status`),
      literal(`unstable`, 'en'),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${ns19}terms`),
      namedNode(`${cc}license`),
      namedNode(ns21),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${ns19}terms`),
      namedNode(`${dcterms}hasFormat`),
      namedNode(`${ns22}gtfs.ttl`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${ns19}terms`),
      namedNode(`${dcterms}issued`),
      literal(`2014-10-23`, namedNode(`${xsd}date`)),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${ns19}terms`),
      namedNode(`${dcterms}modified`),
      literal(`2014-10-27`, namedNode(`${xsd}date`)),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${ns19}terms`),
      namedNode(`${dcterms}rights`),
      literal(`Copyright 2014 - Open Transport contributors`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${ns19}terms`),
      namedNode(`${rdf}type`),
      namedNode(`${foaf}Document`),
      namedNode(gtfs)
    ),
    quad(
      namedNode(`${ns19}terms`),
      namedNode(`${foaf}primaryTopic`),
      namedNode(gtfs),
      namedNode(gtfs)
    ),
    quad(
      blankNodes[0],
      namedNode(`${foaf}mbox`),
      literal(`Pieter.Colpaert@UGent.be`),
      namedNode(gtfs)
    ),
    quad(
      blankNodes[0],
      namedNode(`${foaf}name`),
      literal(`Pieter Colpaert`),
      namedNode(gtfs)
    ),
    quad(
      blankNodes[1],
      namedNode(`${foaf}mbox`),
      literal(`abyrd@conveyal.com`),
      namedNode(gtfs)
    ),
    quad(
      blankNodes[1],
      namedNode(`${foaf}name`),
      literal(`Andrew Byrd`),
      namedNode(gtfs)
    ),

  ]
}
