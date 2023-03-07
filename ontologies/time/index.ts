/* This file was automatically generated. Do not edit by hand. */

const {
  xsd,
  rdfs,
  time,
  rdf,
  owl,
  skos,
  ns7,
  ns8,
  dcterms,
  ns10,
  ns11,
  ns12,
  ns13,
  ns14,
  ns15,
  ns16,
  ns17
} = {
  'xsd': 'http://www.w3.org/2001/XMLSchema#',
  'rdfs': 'http://www.w3.org/2000/01/rdf-schema#',
  'time': 'http://www.w3.org/2006/time#',
  'rdf': 'http://www.w3.org/1999/02/22-rdf-syntax-ns#',
  'owl': 'http://www.w3.org/2002/07/owl#',
  'skos': 'http://www.w3.org/2004/02/skos/core#',
  'ns7': 'http://www.bipm.org/en/publications/si-brochure/',
  'ns8': 'http://www.w3.org/2006/',
  'dcterms': 'http://purl.org/dc/terms/',
  'ns10': 'https://orcid.org/',
  'ns11': 'http://orcid.org/',
  'ns12': 'https://en.wikipedia.org/wiki/',
  'ns13': 'http://www.w3.org/TR/',
  'ns14': 'https://creativecommons.org/licenses/by/4.0/',
  'ns15': 'http://dx.doi.org/10.3233/',
  'ns16': 'http://www.semantic-web-journal.net/content/',
  'ns17': 'http://www.opengis.net/def/uom/ISO-8601/0/'
}

export default ({ blankNode, literal, namedNode, quad }: import('rdf-js').DataFactory): import('rdf-js').Quad[] => {
  const blankNodes: import('rdf-js').BlankNode[] = []
  for (let i = 0; i < 71; i++) {
    blankNodes.push(blankNode())
  }

  return [
    quad(
      namedNode(`${xsd}dateTimeStamp`),
      namedNode(`${rdfs}label`),
      literal(`sello de tiempo`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}DateTimeDescription`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}Class`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}DateTimeDescription`),
      namedNode(`${rdfs}comment`),
      literal(`Descripción de fecha y tiempo estructurada con valores separados para los diferentes elementos de un sistema calendario-reloj. El sistema de referencia temporal está fijado al calendario gregoriano, y el rango de las propiedades año, mes, día restringidas a los correspondientes tipos del XML Schema xsd:gYear, xsd:gMonth y xsd:gDay respectivamente.`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}DateTimeDescription`),
      namedNode(`${rdfs}comment`),
      literal(`Description of date and time structured with separate values for the various elements of a calendar-clock system. The temporal reference system is fixed to Gregorian Calendar, and the range of year, month, day properties restricted to corresponding XML Schema types xsd:gYear, xsd:gMonth and xsd:gDay, respectively.`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}DateTimeDescription`),
      namedNode(`${rdfs}label`),
      literal(`Date-Time description`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}DateTimeDescription`),
      namedNode(`${rdfs}label`),
      literal(`descripción de fecha-tiempo`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}DateTimeDescription`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${time}GeneralDateTimeDescription`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}DateTimeDescription`),
      namedNode(`${rdfs}subClassOf`),
      blankNodes[0],
      namedNode(time)
    ),
    quad(
      namedNode(`${time}DateTimeDescription`),
      namedNode(`${rdfs}subClassOf`),
      blankNodes[1],
      namedNode(time)
    ),
    quad(
      namedNode(`${time}DateTimeDescription`),
      namedNode(`${rdfs}subClassOf`),
      blankNodes[2],
      namedNode(time)
    ),
    quad(
      namedNode(`${time}DateTimeDescription`),
      namedNode(`${rdfs}subClassOf`),
      blankNodes[3],
      namedNode(time)
    ),
    quad(
      namedNode(`${time}DateTimeDescription`),
      namedNode(`${skos}definition`),
      literal(`Descripción de fecha y tiempo estructurada con valores separados para los diferentes elementos de un sistema calendario-reloj. El sistema de referencia temporal está fijado al calendario gregoriano, y el rango de las propiedades año, mes, día restringidas a los correspondientes tipos del XML Schema xsd:gYear, xsd:gMonth y xsd:gDay respectivamente.`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}DateTimeDescription`),
      namedNode(`${skos}definition`),
      literal(`Description of date and time structured with separate values for the various elements of a calendar-clock system. The temporal reference system is fixed to Gregorian Calendar, and the range of year, month, day properties restricted to corresponding XML Schema types xsd:gYear, xsd:gMonth and xsd:gDay, respectively.`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}DateTimeInterval`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}Class`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}DateTimeInterval`),
      namedNode(`${rdfs}comment`),
      literal(`'intervalo de fecha-hora' es una subclase de 'intervalo propio', definida utilizando el multi-elemento 'descripción de fecha-hora'.`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}DateTimeInterval`),
      namedNode(`${rdfs}comment`),
      literal(`DateTimeInterval is a subclass of ProperInterval, defined using the multi-element DateTimeDescription.`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}DateTimeInterval`),
      namedNode(`${rdfs}label`),
      literal(`Date-time interval`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}DateTimeInterval`),
      namedNode(`${rdfs}label`),
      literal(`intervalo de fecha-hora`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}DateTimeInterval`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${time}ProperInterval`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}DateTimeInterval`),
      namedNode(`${skos}definition`),
      literal(`'intervalo de fecha-hora' es una subclase de 'intervalo propio', definida utilizando el multi-elemento 'descripción de fecha-hora'.`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}DateTimeInterval`),
      namedNode(`${skos}definition`),
      literal(`DateTimeInterval is a subclass of ProperInterval, defined using the multi-element DateTimeDescription.`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}DateTimeInterval`),
      namedNode(`${skos}note`),
      literal(`'intervalo de fecha-hora' se puede utilizar sólo para un intervalo cuyos límites coinciden con un elemento de fecha-hora alineados con el calendario y la zona horaria indicados. Por ejemplo, aunque ambos tienen una duración de un día, el intervalo de 24 horas que empieza en la media noche del comienzo del 8 mayo en Europa Central se puede expresar como un 'intervalo de fecha-hora', el intervalo de 24 horas que empieza a las 1:30pm no.`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}DateTimeInterval`),
      namedNode(`${skos}note`),
      literal(`:DateTimeInterval can only be used for an interval whose limits coincide with a date-time element aligned to the calendar and timezone indicated. For example, while both have a duration of one day, the 24-hour interval beginning at midnight at the beginning of 8 May in Central Europe can be expressed as a :DateTimeInterval, but the 24-hour interval starting at 1:30pm cannot.`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}DayOfWeek`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}Class`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}DayOfWeek`),
      namedNode(`${rdfs}comment`),
      literal(`El día de la semana`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}DayOfWeek`),
      namedNode(`${rdfs}comment`),
      literal(`The day of week`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}DayOfWeek`),
      namedNode(`${rdfs}label`),
      literal(`Day of week`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}DayOfWeek`),
      namedNode(`${rdfs}label`),
      literal(`día de la semana`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}DayOfWeek`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${owl}Thing`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}DayOfWeek`),
      namedNode(`${skos}changeNote`),
      literal(`Remove enumeration from definition, in order to allow other days to be used when required in other calendars. 
NOTE: existing days are still present as members of the class, but the class membership is now open. 

In the original OWL-Time the following constraint appeared: 
  owl:oneOf (
      time:Monday
      time:Tuesday
      time:Wednesday
      time:Thursday
      time:Friday
      time:Saturday
      time:Sunday
    ) ;`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}DayOfWeek`),
      namedNode(`${skos}definition`),
      literal(`El día de la semana`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}DayOfWeek`),
      namedNode(`${skos}definition`),
      literal(`The day of week`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}DayOfWeek`),
      namedNode(`${skos}note`),
      literal(`La pertenencia a la clase 'día de la semana' está abierta, para permitir longitudes de semana alternativas y diferentes nombres de días.`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}DayOfWeek`),
      namedNode(`${skos}note`),
      literal(`Membership of the class :DayOfWeek is open, to allow for alternative week lengths and different day names.`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}Duration`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}Class`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}Duration`),
      namedNode(`${rdfs}comment`),
      literal(`Duración de una extensión temporal expresada como un número escalado por una unidad temporal.`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}Duration`),
      namedNode(`${rdfs}comment`),
      literal(`Duration of a temporal extent expressed as a number scaled by a temporal unit`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}Duration`),
      namedNode(`${rdfs}label`),
      literal(`Time duration`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}Duration`),
      namedNode(`${rdfs}label`),
      literal(`duración de tiempo`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}Duration`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${time}TemporalDuration`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}Duration`),
      namedNode(`${rdfs}subClassOf`),
      blankNodes[4],
      namedNode(time)
    ),
    quad(
      namedNode(`${time}Duration`),
      namedNode(`${rdfs}subClassOf`),
      blankNodes[5],
      namedNode(time)
    ),
    quad(
      namedNode(`${time}Duration`),
      namedNode(`${skos}definition`),
      literal(`Duración de una extensión temporal expresada como un número escalado por una unidad temporal.`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}Duration`),
      namedNode(`${skos}definition`),
      literal(`Duration of a temporal extent expressed as a number scaled by a temporal unit`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}Duration`),
      namedNode(`${skos}note`),
      literal(`Alternativa a 'descripción de tiempo' para proporcionar descripción soporte a una duración temporal diferente a utilizar un sistema de calendario/reloj.`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}Duration`),
      namedNode(`${skos}note`),
      literal(`Alternative to time:DurationDescription to support description of a temporal duration other than using a calendar/clock system.`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}DurationDescription`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}Class`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}DurationDescription`),
      namedNode(`${rdfs}comment`),
      literal(`Descripción de extensión temporal estructurada con valores separados para los distintos elementos de un sistema de horario-calendario. El sistema de referencia temporal se fija al calendario gregoriano, y el intervalo de cada una de las propiedades numéricas se restringe a xsd:decimal.`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}DurationDescription`),
      namedNode(`${rdfs}comment`),
      literal(`Description of temporal extent structured with separate values for the various elements of a calendar-clock system. The temporal reference system is fixed to Gregorian Calendar, and the range of each of the numeric properties is restricted to xsd:decimal`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}DurationDescription`),
      namedNode(`${rdfs}label`),
      literal(`Duration description`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}DurationDescription`),
      namedNode(`${rdfs}label`),
      literal(`descripción de duración`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}DurationDescription`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${time}GeneralDurationDescription`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}DurationDescription`),
      namedNode(`${rdfs}subClassOf`),
      blankNodes[6],
      namedNode(time)
    ),
    quad(
      namedNode(`${time}DurationDescription`),
      namedNode(`${rdfs}subClassOf`),
      blankNodes[7],
      namedNode(time)
    ),
    quad(
      namedNode(`${time}DurationDescription`),
      namedNode(`${rdfs}subClassOf`),
      blankNodes[8],
      namedNode(time)
    ),
    quad(
      namedNode(`${time}DurationDescription`),
      namedNode(`${rdfs}subClassOf`),
      blankNodes[9],
      namedNode(time)
    ),
    quad(
      namedNode(`${time}DurationDescription`),
      namedNode(`${rdfs}subClassOf`),
      blankNodes[10],
      namedNode(time)
    ),
    quad(
      namedNode(`${time}DurationDescription`),
      namedNode(`${rdfs}subClassOf`),
      blankNodes[11],
      namedNode(time)
    ),
    quad(
      namedNode(`${time}DurationDescription`),
      namedNode(`${rdfs}subClassOf`),
      blankNodes[12],
      namedNode(time)
    ),
    quad(
      namedNode(`${time}DurationDescription`),
      namedNode(`${rdfs}subClassOf`),
      blankNodes[13],
      namedNode(time)
    ),
    quad(
      namedNode(`${time}DurationDescription`),
      namedNode(`${skos}definition`),
      literal(`Descripción de extensión temporal estructurada con valores separados para los distintos elementos de un sistema de horario-calendario. El sistema de referencia temporal se fija al calendario gregoriano, y el intervalo de cada una de las propiedades numéricas se restringe a xsd:decimal.`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}DurationDescription`),
      namedNode(`${skos}definition`),
      literal(`Description of temporal extent structured with separate values for the various elements of a calendar-clock system. The temporal reference system is fixed to Gregorian Calendar, and the range of each of the numeric properties is restricted to xsd:decimal`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}DurationDescription`),
      namedNode(`${skos}note`),
      literal(`En el calendario gregoriano la longitud de los meses no es fija. Por lo tanto, un valor como "2,5 meses" no se puede comparar exactamente con una duración similar expresada en términos de semanas o días.`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}DurationDescription`),
      namedNode(`${skos}note`),
      literal(`In the Gregorian calendar the length of the month is not fixed. Therefore, a value like "2.5 months" cannot be exactly compared with a similar duration expressed in terms of weeks or days.`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}Friday`),
      namedNode(`${rdf}type`),
      namedNode(`${time}DayOfWeek`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}Friday`),
      namedNode(`${rdfs}label`),
      literal(`Friday`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}Friday`),
      namedNode(`${skos}prefLabel`),
      literal(`Freitag`, 'de'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}Friday`),
      namedNode(`${skos}prefLabel`),
      literal(`Friday`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}Friday`),
      namedNode(`${skos}prefLabel`),
      literal(`Piątek`, 'pl'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}Friday`),
      namedNode(`${skos}prefLabel`),
      literal(`Sexta-feira`, 'pt'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}Friday`),
      namedNode(`${skos}prefLabel`),
      literal(`Vendredi`, 'fr'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}Friday`),
      namedNode(`${skos}prefLabel`),
      literal(`Venerdì`, 'it'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}Friday`),
      namedNode(`${skos}prefLabel`),
      literal(`Viernes`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}Friday`),
      namedNode(`${skos}prefLabel`),
      literal(`Vrijdag`, 'nl'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}Friday`),
      namedNode(`${skos}prefLabel`),
      literal(`Пятница`, 'ru'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}Friday`),
      namedNode(`${skos}prefLabel`),
      literal(`الجمعة`, 'ar'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}Friday`),
      namedNode(`${skos}prefLabel`),
      literal(`星期五`, 'zh'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}Friday`),
      namedNode(`${skos}prefLabel`),
      literal(`金曜日`, 'ja'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}GeneralDateTimeDescription`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}Class`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}GeneralDateTimeDescription`),
      namedNode(`${rdfs}comment`),
      literal(`Descripción de fecha y hora estructurada con valores separados para los distintos elementos de un sistema calendario-reloj.`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}GeneralDateTimeDescription`),
      namedNode(`${rdfs}comment`),
      literal(`Description of date and time structured with separate values for the various elements of a calendar-clock system`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}GeneralDateTimeDescription`),
      namedNode(`${rdfs}label`),
      literal(`Generalized date-time description`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}GeneralDateTimeDescription`),
      namedNode(`${rdfs}label`),
      literal(`descripción de fecha-hora generalizada`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}GeneralDateTimeDescription`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${time}TemporalPosition`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}GeneralDateTimeDescription`),
      namedNode(`${rdfs}subClassOf`),
      blankNodes[14],
      namedNode(time)
    ),
    quad(
      namedNode(`${time}GeneralDateTimeDescription`),
      namedNode(`${rdfs}subClassOf`),
      blankNodes[15],
      namedNode(time)
    ),
    quad(
      namedNode(`${time}GeneralDateTimeDescription`),
      namedNode(`${rdfs}subClassOf`),
      blankNodes[16],
      namedNode(time)
    ),
    quad(
      namedNode(`${time}GeneralDateTimeDescription`),
      namedNode(`${rdfs}subClassOf`),
      blankNodes[17],
      namedNode(time)
    ),
    quad(
      namedNode(`${time}GeneralDateTimeDescription`),
      namedNode(`${rdfs}subClassOf`),
      blankNodes[18],
      namedNode(time)
    ),
    quad(
      namedNode(`${time}GeneralDateTimeDescription`),
      namedNode(`${rdfs}subClassOf`),
      blankNodes[19],
      namedNode(time)
    ),
    quad(
      namedNode(`${time}GeneralDateTimeDescription`),
      namedNode(`${rdfs}subClassOf`),
      blankNodes[20],
      namedNode(time)
    ),
    quad(
      namedNode(`${time}GeneralDateTimeDescription`),
      namedNode(`${rdfs}subClassOf`),
      blankNodes[21],
      namedNode(time)
    ),
    quad(
      namedNode(`${time}GeneralDateTimeDescription`),
      namedNode(`${rdfs}subClassOf`),
      blankNodes[22],
      namedNode(time)
    ),
    quad(
      namedNode(`${time}GeneralDateTimeDescription`),
      namedNode(`${rdfs}subClassOf`),
      blankNodes[23],
      namedNode(time)
    ),
    quad(
      namedNode(`${time}GeneralDateTimeDescription`),
      namedNode(`${rdfs}subClassOf`),
      blankNodes[24],
      namedNode(time)
    ),
    quad(
      namedNode(`${time}GeneralDateTimeDescription`),
      namedNode(`${rdfs}subClassOf`),
      blankNodes[25],
      namedNode(time)
    ),
    quad(
      namedNode(`${time}GeneralDateTimeDescription`),
      namedNode(`${skos}definition`),
      literal(`Descripción de fecha y hora estructurada con valores separados para los distintos elementos de un sistema calendario-reloj.`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}GeneralDateTimeDescription`),
      namedNode(`${skos}definition`),
      literal(`Description of date and time structured with separate values for the various elements of a calendar-clock system`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}GeneralDateTimeDescription`),
      namedNode(`${skos}note`),
      literal(`Algunas combinaciones de propiedades son redundantes - por ejemplo, dentro de un 'año' especificado si se proporciona 'día del año' entonces 'día' y 'mes' se pueden computar, y viceversa. Los valores individuales deberían ser consistentes entre ellos y con el calendario, indicado a través del valor de la propiedad 'tiene TRS'.`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}GeneralDateTimeDescription`),
      namedNode(`${skos}note`),
      literal(`Some combinations of properties are redundant - for example, within a specified :year if :dayOfYear is provided then :day and :month can be computed, and vice versa. Individual values should be consistent with each other and the calendar, indicated through the value of the :hasTRS property.`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}GeneralDurationDescription`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}Class`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}GeneralDurationDescription`),
      namedNode(`${rdfs}comment`),
      literal(`Descripción de extensión temporal estructurada con valores separados para los distintos elementos de un sistema de horario-calendario.`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}GeneralDurationDescription`),
      namedNode(`${rdfs}comment`),
      literal(`Description of temporal extent structured with separate values for the various elements of a calendar-clock system.`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}GeneralDurationDescription`),
      namedNode(`${rdfs}label`),
      literal(`Generalized duration description`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}GeneralDurationDescription`),
      namedNode(`${rdfs}label`),
      literal(`descripción de duración generalizada`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}GeneralDurationDescription`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${time}TemporalDuration`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}GeneralDurationDescription`),
      namedNode(`${rdfs}subClassOf`),
      blankNodes[26],
      namedNode(time)
    ),
    quad(
      namedNode(`${time}GeneralDurationDescription`),
      namedNode(`${rdfs}subClassOf`),
      blankNodes[27],
      namedNode(time)
    ),
    quad(
      namedNode(`${time}GeneralDurationDescription`),
      namedNode(`${rdfs}subClassOf`),
      blankNodes[28],
      namedNode(time)
    ),
    quad(
      namedNode(`${time}GeneralDurationDescription`),
      namedNode(`${rdfs}subClassOf`),
      blankNodes[29],
      namedNode(time)
    ),
    quad(
      namedNode(`${time}GeneralDurationDescription`),
      namedNode(`${rdfs}subClassOf`),
      blankNodes[30],
      namedNode(time)
    ),
    quad(
      namedNode(`${time}GeneralDurationDescription`),
      namedNode(`${rdfs}subClassOf`),
      blankNodes[31],
      namedNode(time)
    ),
    quad(
      namedNode(`${time}GeneralDurationDescription`),
      namedNode(`${rdfs}subClassOf`),
      blankNodes[32],
      namedNode(time)
    ),
    quad(
      namedNode(`${time}GeneralDurationDescription`),
      namedNode(`${rdfs}subClassOf`),
      blankNodes[33],
      namedNode(time)
    ),
    quad(
      namedNode(`${time}GeneralDurationDescription`),
      namedNode(`${skos}definition`),
      literal(`Descripción de extensión temporal estructurada con valores separados para los distintos elementos de un sistema de horario-calendario.`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}GeneralDurationDescription`),
      namedNode(`${skos}definition`),
      literal(`Description of temporal extent structured with separate values for the various elements of a calendar-clock system.`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}GeneralDurationDescription`),
      namedNode(`${skos}note`),
      literal(`La extensión de una duración de tiempo expresada como una 'descripción de duración general' depende del Sistema de Referencia Temporal. En algunos calendarios la longitud de la semana o del mes no es constante a lo largo del año. Por tanto, un valor como "25 meses" puede no ser necesariamente ser comparado con un duración similar expresada en términos de semanas o días. Cuando se consideran calendarios que no están basados en el movimiento de la Tierra, se deben tomar incluso más precauciones en la comparación de duraciones.`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}GeneralDurationDescription`),
      namedNode(`${skos}note`),
      literal(`The extent of a time duration expressed as a GeneralDurationDescription depends on the Temporal Reference System. In some calendars the length of the week or month is not constant within the year. Therefore, a value like "2.5 months" may not necessarily be exactly compared with a similar duration expressed in terms of weeks or days. When non-earth-based calendars are considered even more care must be taken in comparing durations.`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}Instant`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}Class`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}Instant`),
      namedNode(`${rdfs}comment`),
      literal(`A temporal entity with zero extent or duration`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}Instant`),
      namedNode(`${rdfs}comment`),
      literal(`Una entidad temporal con una extensión o duración cero.`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}Instant`),
      namedNode(`${rdfs}label`),
      literal(`Time instant`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}Instant`),
      namedNode(`${rdfs}label`),
      literal(`instante de tiempo.`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}Instant`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${time}TemporalEntity`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}Instant`),
      namedNode(`${skos}definition`),
      literal(`A temporal entity with zero extent or duration`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}Instant`),
      namedNode(`${skos}definition`),
      literal(`Una entidad temporal con una extensión o duración cero.`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}Interval`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}Class`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}Interval`),
      namedNode(`${rdfs}comment`),
      literal(`A temporal entity with an extent or duration`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}Interval`),
      namedNode(`${rdfs}comment`),
      literal(`Una entidad temporal con una extensión o duración.`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}Interval`),
      namedNode(`${rdfs}label`),
      literal(`Time interval`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}Interval`),
      namedNode(`${rdfs}label`),
      literal(`intervalo de tiempo`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}Interval`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${time}TemporalEntity`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}Interval`),
      namedNode(`${skos}definition`),
      literal(`A temporal entity with an extent or duration`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}Interval`),
      namedNode(`${skos}definition`),
      literal(`Una entidad temporal con una extensión o duración.`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}January`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}Class`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}January`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}DeprecatedClass`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}January`),
      namedNode(`${rdfs}label`),
      literal(`January`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}January`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${time}DateTimeDescription`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}January`),
      namedNode(`${rdfs}subClassOf`),
      blankNodes[34],
      namedNode(time)
    ),
    quad(
      namedNode(`${time}January`),
      namedNode(`${rdfs}subClassOf`),
      blankNodes[35],
      namedNode(time)
    ),
    quad(
      namedNode(`${time}January`),
      namedNode(`${owl}deprecated`),
      literal(`true`, namedNode(`${xsd}boolean`)),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}January`),
      namedNode(`${skos}historyNote`),
      literal(`This class was present in the 2006 version of OWL-Time. It was presented as an example of how DateTimeDescription could be specialized, but does not belong in the revised ontology. `),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}Monday`),
      namedNode(`${rdf}type`),
      namedNode(`${time}DayOfWeek`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}Monday`),
      namedNode(`${rdfs}label`),
      literal(`Monday`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}Monday`),
      namedNode(`${skos}prefLabel`),
      literal(`Lundi`, 'fr'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}Monday`),
      namedNode(`${skos}prefLabel`),
      literal(`Lunedì`, 'it'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}Monday`),
      namedNode(`${skos}prefLabel`),
      literal(`Lunes`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}Monday`),
      namedNode(`${skos}prefLabel`),
      literal(`Maandag`, 'nl'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}Monday`),
      namedNode(`${skos}prefLabel`),
      literal(`Monday`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}Monday`),
      namedNode(`${skos}prefLabel`),
      literal(`Montag`, 'de'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}Monday`),
      namedNode(`${skos}prefLabel`),
      literal(`Poniedziałek`, 'pl'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}Monday`),
      namedNode(`${skos}prefLabel`),
      literal(`Segunda-feira`, 'pt'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}Monday`),
      namedNode(`${skos}prefLabel`),
      literal(`Понедельник`, 'ru'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}Monday`),
      namedNode(`${skos}prefLabel`),
      literal(`الاثنين`, 'ar'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}Monday`),
      namedNode(`${skos}prefLabel`),
      literal(`星期一`, 'zh'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}Monday`),
      namedNode(`${skos}prefLabel`),
      literal(`月曜日`, 'ja'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}MonthOfYear`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}Class`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}MonthOfYear`),
      namedNode(`${rdfs}comment`),
      literal(`El mes del año.`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}MonthOfYear`),
      namedNode(`${rdfs}comment`),
      literal(`The month of the year`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}MonthOfYear`),
      namedNode(`${rdfs}label`),
      literal(`Month of year`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}MonthOfYear`),
      namedNode(`${rdfs}label`),
      literal(`mes del año`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}MonthOfYear`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${time}DateTimeDescription`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}MonthOfYear`),
      namedNode(`${rdfs}subClassOf`),
      blankNodes[36],
      namedNode(time)
    ),
    quad(
      namedNode(`${time}MonthOfYear`),
      namedNode(`${rdfs}subClassOf`),
      blankNodes[37],
      namedNode(time)
    ),
    quad(
      namedNode(`${time}MonthOfYear`),
      namedNode(`${rdfs}subClassOf`),
      blankNodes[38],
      namedNode(time)
    ),
    quad(
      namedNode(`${time}MonthOfYear`),
      namedNode(`${rdfs}subClassOf`),
      blankNodes[39],
      namedNode(time)
    ),
    quad(
      namedNode(`${time}MonthOfYear`),
      namedNode(`${rdfs}subClassOf`),
      blankNodes[40],
      namedNode(time)
    ),
    quad(
      namedNode(`${time}MonthOfYear`),
      namedNode(`${rdfs}subClassOf`),
      blankNodes[41],
      namedNode(time)
    ),
    quad(
      namedNode(`${time}MonthOfYear`),
      namedNode(`${rdfs}subClassOf`),
      blankNodes[42],
      namedNode(time)
    ),
    quad(
      namedNode(`${time}MonthOfYear`),
      namedNode(`${rdfs}subClassOf`),
      blankNodes[43],
      namedNode(time)
    ),
    quad(
      namedNode(`${time}MonthOfYear`),
      namedNode(`${skos}definition`),
      literal(`El mes del año.`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}MonthOfYear`),
      namedNode(`${skos}definition`),
      literal(`The month of the year`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}MonthOfYear`),
      namedNode(`${skos}editorialNote`),
      literal(`Característica en riesgo - añadida en la revisión de 2017, y no utilizada todavía de forma amplia.`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}MonthOfYear`),
      namedNode(`${skos}editorialNote`),
      literal(`Feature at risk - added in 2017 revision, and not yet widely used. `, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}MonthOfYear`),
      namedNode(`${skos}note`),
      literal(`La pertenencia a la clase 'mes del año' está abierta, a permitir calendarios anuales alternativos y diferentes nombres de meses.`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}MonthOfYear`),
      namedNode(`${skos}note`),
      literal(`Membership of the class :MonthOfYear is open, to allow for alternative annual calendars and different month names.`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}ProperInterval`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}Class`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}ProperInterval`),
      namedNode(`${rdfs}comment`),
      literal(`A temporal entity with non-zero extent or duration, i.e. for which the value of the beginning and end are different`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}ProperInterval`),
      namedNode(`${rdfs}comment`),
      literal(`Una entidad temporal con extensión o duración distinta de cero, es decir, para la cual los valores de principio y fin del intervalo son diferentes.`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}ProperInterval`),
      namedNode(`${rdfs}label`),
      literal(`Proper interval`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}ProperInterval`),
      namedNode(`${rdfs}label`),
      literal(`intervalo propio`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}ProperInterval`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${time}Interval`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}ProperInterval`),
      namedNode(`${owl}disjointWith`),
      namedNode(`${time}Instant`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}ProperInterval`),
      namedNode(`${skos}definition`),
      literal(`A temporal entity with non-zero extent or duration, i.e. for which the value of the beginning and end are different`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}ProperInterval`),
      namedNode(`${skos}definition`),
      literal(`Una entidad temporal con extensión o duración distinta de cero, es decir, para la cual los valores de principio y fin del intervalo son diferentes.`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}Saturday`),
      namedNode(`${rdf}type`),
      namedNode(`${time}DayOfWeek`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}Saturday`),
      namedNode(`${rdfs}label`),
      literal(`Saturday`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}Saturday`),
      namedNode(`${skos}prefLabel`),
      literal(`Sabato`, 'it'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}Saturday`),
      namedNode(`${skos}prefLabel`),
      literal(`Samedi`, 'fr'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}Saturday`),
      namedNode(`${skos}prefLabel`),
      literal(`Samstag`, 'de'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}Saturday`),
      namedNode(`${skos}prefLabel`),
      literal(`Saturday`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}Saturday`),
      namedNode(`${skos}prefLabel`),
      literal(`Sobota`, 'pl'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}Saturday`),
      namedNode(`${skos}prefLabel`),
      literal(`Sábado`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}Saturday`),
      namedNode(`${skos}prefLabel`),
      literal(`Sábado`, 'pt'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}Saturday`),
      namedNode(`${skos}prefLabel`),
      literal(`Zaterdag`, 'nl'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}Saturday`),
      namedNode(`${skos}prefLabel`),
      literal(`Суббота`, 'ru'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}Saturday`),
      namedNode(`${skos}prefLabel`),
      literal(`السبت`, 'ar'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}Saturday`),
      namedNode(`${skos}prefLabel`),
      literal(`土曜日`, 'ja'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}Saturday`),
      namedNode(`${skos}prefLabel`),
      literal(`星期六`, 'zh'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}Sunday`),
      namedNode(`${rdf}type`),
      namedNode(`${time}DayOfWeek`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}Sunday`),
      namedNode(`${rdfs}label`),
      literal(`Sunday`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}Sunday`),
      namedNode(`${skos}prefLabel`),
      literal(`Dimanche`, 'fr'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}Sunday`),
      namedNode(`${skos}prefLabel`),
      literal(`Domenica`, 'it'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}Sunday`),
      namedNode(`${skos}prefLabel`),
      literal(`Domingo`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}Sunday`),
      namedNode(`${skos}prefLabel`),
      literal(`Domingo`, 'pt'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}Sunday`),
      namedNode(`${skos}prefLabel`),
      literal(`Niedziela`, 'pl'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}Sunday`),
      namedNode(`${skos}prefLabel`),
      literal(`Sonntag`, 'de'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}Sunday`),
      namedNode(`${skos}prefLabel`),
      literal(`Sunday`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}Sunday`),
      namedNode(`${skos}prefLabel`),
      literal(`Zondag`, 'nl'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}Sunday`),
      namedNode(`${skos}prefLabel`),
      literal(`Воскресенье`, 'ru'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}Sunday`),
      namedNode(`${skos}prefLabel`),
      literal(`الأحد (يوم)`, 'ar'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}Sunday`),
      namedNode(`${skos}prefLabel`),
      literal(`日曜日`, 'ja'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}Sunday`),
      namedNode(`${skos}prefLabel`),
      literal(`星期日`, 'zh'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}TRS`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}Class`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}TRS`),
      namedNode(`${rdfs}comment`),
      literal(`A temporal reference system, such as a temporal coordinate system (with an origin, direction, and scale), a calendar-clock combination, or a (possibly hierarchical) ordinal system. 

This is a stub class, representing the set of all temporal reference systems.`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}TRS`),
      namedNode(`${rdfs}comment`),
      literal(`Un sistema de referencia temporal, tal como un sistema de coordenadas temporales (con un origen, una dirección y una escala), una combinación calendario-reloj, o un sistema ordinal (posiblemente jerárquico).
        Esta clase comodín representa el conjunto de todos los sistemas de referencia temporal.`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}TRS`),
      namedNode(`${rdfs}label`),
      literal(`Temporal Reference System`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}TRS`),
      namedNode(`${rdfs}label`),
      literal(`sistema de referencia temporal`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}TRS`),
      namedNode(`${skos}definition`),
      literal(`A temporal reference system, such as a temporal coordinate system (with an origin, direction, and scale), a calendar-clock combination, or a (possibly hierarchical) ordinal system. 

This is a stub class, representing the set of all temporal reference systems.`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}TRS`),
      namedNode(`${skos}definition`),
      literal(`Un sistema de referencia temporal, tal como un sistema de coordenadas temporales (con un origen, una dirección y una escala), una combinación calendario-reloj, o un sistema ordinal (posiblemente jerárquico).
    Esta clase comodín representa el conjunto de todos los sistemas de referencia temporal.`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}TRS`),
      namedNode(`${skos}note`),
      literal(`A taxonomy of temporal reference systems is provided in ISO 19108:2002 [ISO19108], including (a) calendar + clock systems; (b) temporal coordinate systems (i.e. numeric offset from an epoch); (c) temporal ordinal reference systems (i.e. ordered sequence of named intervals, not necessarily of equal duration).`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}TRS`),
      namedNode(`${skos}note`),
      literal(`En el ISO 19108:2002 [ISO19108] se proporciona una taxonomía de sistemas de referencia temporal, incluyendo (a) sistemas de calendario + reloj; (b) sistemas de coordenadas temporales (es decir, desplazamiento numérico a partir de una época); (c) sistemas de referencia ordinales temporales (es decir, secuencia ordenada de intervalos nombrados, no necesariamente de igual duración).`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}TemporalDuration`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}Class`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}TemporalDuration`),
      namedNode(`${rdfs}comment`),
      literal(`Extensión de tiempo; duración de un intervalo de tiempo independiente de su posición de inicio particular.`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}TemporalDuration`),
      namedNode(`${rdfs}comment`),
      literal(`Time extent; duration of a time interval separate from its particular start position`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}TemporalDuration`),
      namedNode(`${rdfs}label`),
      literal(`Temporal duration`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}TemporalDuration`),
      namedNode(`${rdfs}label`),
      literal(`duración temporal`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}TemporalDuration`),
      namedNode(`${skos}definition`),
      literal(`Extensión de tiempo; duración de un intervalo de tiempo independiente de su posición de inicio particular.`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}TemporalDuration`),
      namedNode(`${skos}definition`),
      literal(`Time extent; duration of a time interval separate from its particular start position`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}TemporalEntity`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}Class`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}TemporalEntity`),
      namedNode(`${rdfs}comment`),
      literal(`A temporal interval or instant.`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}TemporalEntity`),
      namedNode(`${rdfs}comment`),
      literal(`Un intervalo temporal o un instante.`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}TemporalEntity`),
      namedNode(`${rdfs}label`),
      literal(`Temporal entity`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}TemporalEntity`),
      namedNode(`${rdfs}label`),
      literal(`entidad temporal`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}TemporalEntity`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${owl}Thing`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}TemporalEntity`),
      namedNode(`${owl}unionOf`),
      blankNodes[44],
      namedNode(time)
    ),
    quad(
      namedNode(`${time}TemporalEntity`),
      namedNode(`${skos}definition`),
      literal(`A temporal interval or instant.`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}TemporalEntity`),
      namedNode(`${skos}definition`),
      literal(`Un intervalo temporal o un instante.`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}TemporalPosition`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}Class`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}TemporalPosition`),
      namedNode(`${rdfs}comment`),
      literal(`A position on a time-line`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}TemporalPosition`),
      namedNode(`${rdfs}comment`),
      literal(`Una posición sobre una línea de tiempo.`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}TemporalPosition`),
      namedNode(`${rdfs}label`),
      literal(`Temporal position`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}TemporalPosition`),
      namedNode(`${rdfs}label`),
      literal(`posición temporal`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}TemporalPosition`),
      namedNode(`${rdfs}subClassOf`),
      blankNodes[45],
      namedNode(time)
    ),
    quad(
      namedNode(`${time}TemporalPosition`),
      namedNode(`${skos}definition`),
      literal(`A position on a time-line`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}TemporalPosition`),
      namedNode(`${skos}definition`),
      literal(`Una posición sobre una línea de tiempo.`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}TemporalUnit`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}Class`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}TemporalUnit`),
      namedNode(`${rdfs}comment`),
      literal(`A standard duration, which provides a scale factor for a time extent, or the granularity or precision for a time position.`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}TemporalUnit`),
      namedNode(`${rdfs}comment`),
      literal(`Una duración estándar, que proporciona un factor de escala para una extensión de tiempo, o la granularidad o precisión para una posición de tiempo.`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}TemporalUnit`),
      namedNode(`${rdfs}label`),
      literal(`Temporal unit`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}TemporalUnit`),
      namedNode(`${rdfs}label`),
      literal(`unidad de tiempo`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}TemporalUnit`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${time}TemporalDuration`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}TemporalUnit`),
      namedNode(`${skos}changeNote`),
      literal(`Remove enumeration from definition, in order to allow other units to be used when required in other coordinate systems. 
NOTE: existing units are still present as members of the class, but the class membership is now open. 

In the original OWL-Time the following constraint appeared: 
  owl:oneOf (
      time:unitSecond
      time:unitMinute
      time:unitHour
      time:unitDay
      time:unitWeek
      time:unitMonth
      time:unitYear
    ) ;`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}TemporalUnit`),
      namedNode(`${skos}definition`),
      literal(`A standard duration, which provides a scale factor for a time extent, or the granularity or precision for a time position.`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}TemporalUnit`),
      namedNode(`${skos}definition`),
      literal(`Una duración estándar, que proporciona un factor de escala para una extensión de tiempo, o la granularidad o precisión para una posición de tiempo.`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}TemporalUnit`),
      namedNode(`${skos}note`),
      literal(`La pertenencia de la clase 'unidad de tiempo' está abierta, para permitir otras unidades de tiempo utilizadas en algunas aplicaciones técnicas (por ejemplo, millones de años o el mes Baha'i).`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}TemporalUnit`),
      namedNode(`${skos}note`),
      literal(`Membership of the class TemporalUnit is open, to allow for other temporal units used in some technical applications (e.g. millions of years, Baha'i month).`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}Thursday`),
      namedNode(`${rdf}type`),
      namedNode(`${time}DayOfWeek`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}Thursday`),
      namedNode(`${rdfs}label`),
      literal(`Thursday`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}Thursday`),
      namedNode(`${skos}prefLabel`),
      literal(`Czwartek`, 'pl'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}Thursday`),
      namedNode(`${skos}prefLabel`),
      literal(`Donderdag`, 'nl'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}Thursday`),
      namedNode(`${skos}prefLabel`),
      literal(`Donnerstag`, 'de'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}Thursday`),
      namedNode(`${skos}prefLabel`),
      literal(`Giovedì`, 'it'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}Thursday`),
      namedNode(`${skos}prefLabel`),
      literal(`Jeudi`, 'fr'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}Thursday`),
      namedNode(`${skos}prefLabel`),
      literal(`Jueves`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}Thursday`),
      namedNode(`${skos}prefLabel`),
      literal(`Quinta-feira`, 'pt'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}Thursday`),
      namedNode(`${skos}prefLabel`),
      literal(`Thursday`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}Thursday`),
      namedNode(`${skos}prefLabel`),
      literal(`Четверг`, 'ru'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}Thursday`),
      namedNode(`${skos}prefLabel`),
      literal(`الخميس`, 'ar'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}Thursday`),
      namedNode(`${skos}prefLabel`),
      literal(`星期四`, 'zh'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}Thursday`),
      namedNode(`${skos}prefLabel`),
      literal(`木曜日`, 'ja'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}TimePosition`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}Class`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}TimePosition`),
      namedNode(`${rdfs}comment`),
      literal(`A temporal position described using either a (nominal) value from an ordinal reference system, or a (numeric) value in a temporal coordinate system. `, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}TimePosition`),
      namedNode(`${rdfs}comment`),
      literal(`Una posición temporal descrita utilizando bien un valor (nominal) de un sistema de referencia ordinal, o un valor (numérico) en un sistema de coordenadas temporales.`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}TimePosition`),
      namedNode(`${rdfs}label`),
      literal(`Time position`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}TimePosition`),
      namedNode(`${rdfs}label`),
      literal(`posición de tiempo`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}TimePosition`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${time}TemporalPosition`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}TimePosition`),
      namedNode(`${rdfs}subClassOf`),
      blankNodes[46],
      namedNode(time)
    ),
    quad(
      namedNode(`${time}TimePosition`),
      namedNode(`${skos}definition`),
      literal(`A temporal position described using either a (nominal) value from an ordinal reference system, or a (numeric) value in a temporal coordinate system. `, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}TimePosition`),
      namedNode(`${skos}definition`),
      literal(`Una posición temporal descrita utilizando bien un valor (nominal) de un sistema de referencia ordinal, o un valor (numérico) en un sistema de coordenadas temporales.`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}TimeZone`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}Class`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}TimeZone`),
      namedNode(`${rdfs}comment`),
      literal(`A Time Zone specifies the amount by which the local time is offset from UTC. 
	A time zone is usually denoted geographically (e.g. Australian Eastern Daylight Time), with a constant value in a given region. 
The region where it applies and the offset from UTC are specified by a locally recognised governing authority.`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}TimeZone`),
      namedNode(`${rdfs}comment`),
      literal(`Un huso horario especifica la cantidad en que la hora local está desplazada con respecto a UTC.
        Un huso horario normalmente se denota geográficamente (p.ej. el horario de verano del este de Australia), con un valor constante en una región dada.
        La región donde aplica y el desplazamiento desde UTC las especifica una autoridad gubernamental localmente reconocida.`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}TimeZone`),
      namedNode(`${rdfs}label`),
      literal(`Time Zone`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}TimeZone`),
      namedNode(`${rdfs}label`),
      literal(`huso horario`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}TimeZone`),
      namedNode(`${skos}definition`),
      literal(`A Time Zone specifies the amount by which the local time is offset from UTC. 
	A time zone is usually denoted geographically (e.g. Australian Eastern Daylight Time), with a constant value in a given region. 
The region where it applies and the offset from UTC are specified by a locally recognised governing authority.`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}TimeZone`),
      namedNode(`${skos}definition`),
      literal(`Un huso horario especifica la cantidad en que la hora local está desplazada con respecto a UTC.
    Un huso horario normalmente se denota geográficamente (p.ej. el horario de verano del este de Australia), con un valor constante en una región dada.
    La región donde aplica y el desplazamiento desde UTC las especifica una autoridad gubernamental localmente reconocida.`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}TimeZone`),
      namedNode(`${skos}historyNote`),
      literal(`En la versión original de OWL-Time de 2006, se definió, en un espacio de nombres diferente "http://www.w3.org/2006/timezone#", la clase 'huso horario', con varias propiedades específicas correspondientes a un modelo específico de huso horario.
    En la versión actual hay una clase con el mismo nombre local en el espacio de nombres de OWL-Time, eliminando la dependencia del espacio de nombres externo.
    Un axioma de alineación permite que los datos codificados de acuerdo con la versión anterior sean consistentes con la ontología actualizada.`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}TimeZone`),
      namedNode(`${skos}historyNote`),
      literal(`In the original 2006 version of OWL-Time, the TimeZone class, with several properties corresponding to a specific model of time-zones, was defined in a separate namespace "http://www.w3.org/2006/timezone#". 

In the current version a class with same local name is put into the main OWL-Time namespace, removing the dependency on the external namespace. 

An alignment axiom 
	tzont:TimeZone rdfs:subClassOf time:TimeZone . 
allows data encoded according to the previous version to be consistent with the updated ontology. `),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}TimeZone`),
      namedNode(`${skos}note`),
      literal(`A designated timezone is associated with a geographic region. However, for a particular region the offset from UTC often varies seasonally, and the dates of the changes may vary from year to year. The timezone designation usually changes for the different seasons (e.g. Australian Eastern Standard Time vs. Australian Eastern Daylight Time). Furthermore, the offset for a timezone may change over longer timescales, though its designation might not.  

Detailed guidance about working with time zones is given in http://www.w3.org/TR/timezone/ .`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}TimeZone`),
      namedNode(`${skos}note`),
      literal(`An ontology for time zone descriptions was described in [owl-time-20060927] and provided as RDF in a separate namespace tzont:. However, that ontology was incomplete in scope, and the example datasets were selective. Furthermore, since the use of a class from an external ontology as the range of an ObjectProperty in OWL-Time creates a dependency, reference to the time zone class has been replaced with the 'stub' class in the normative part of this version of OWL-Time.`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}TimeZone`),
      namedNode(`${skos}note`),
      literal(`Un huso horario designado está asociado con una región geográfica. Sin embargo, para una región particular el desplazamiento desde UTC a menudo varía según las estaciones, y las fechas de los cambios pueden variar de un año a otro. La designación de huso horario  normalmente cambia de una estación a otra (por ejemplo, el horario estándar frente al horario de verano ambos del este de Australia). Además, del desplazamiento para un huso horario puede cambiar sobre escalas de tiempo mayores, aunque su designación no lo haga.
    Se puede encontrar una guía detallada sobre el funcionamiento de husos horarios en http://www.w3.org/TR/timezone/."@es , "En [owl-time-20060927] se describió una ontología para descripciones de husos horarios, y se proporcionó en un espacio de nombres separado tzont:. Sin embargo, dicha ontología estaba incompleta en su alcance, y el ejemplo de conjuntos de datos (datasets) era selectivo. Además, puesto que el uso de una clase de una ontología externa como el rango de una propiedad de objeto en OWL-Time crea una dependencia, la referencia a la clase huso horario se ha reemplazado por una clase que viene a ser un "cajón de sastre" en la en la parte normativa de esta versión de OWL-Time.`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}TimeZone`),
      namedNode(`${skos}scopeNote`),
      literal(`En esta implementación 'huso horario' no tiene definidas propiedades. Se debería pensar como una superclase "abstracta" de todas las implementaciones de huso horario específicas.`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}TimeZone`),
      namedNode(`${skos}scopeNote`),
      literal(`In this implementation TimeZone has no properties defined. It should be thought of as an 'abstract' superclass of all specific timezone implementations.`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}Tuesday`),
      namedNode(`${rdf}type`),
      namedNode(`${time}DayOfWeek`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}Tuesday`),
      namedNode(`${rdfs}label`),
      literal(`Tuesday`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}Tuesday`),
      namedNode(`${skos}prefLabel`),
      literal(`Dienstag`, 'de'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}Tuesday`),
      namedNode(`${skos}prefLabel`),
      literal(`Dinsdag`, 'nl'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}Tuesday`),
      namedNode(`${skos}prefLabel`),
      literal(`Mardi`, 'fr'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}Tuesday`),
      namedNode(`${skos}prefLabel`),
      literal(`Martedì`, 'it'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}Tuesday`),
      namedNode(`${skos}prefLabel`),
      literal(`Martes`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}Tuesday`),
      namedNode(`${skos}prefLabel`),
      literal(`Terça-feira`, 'pt'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}Tuesday`),
      namedNode(`${skos}prefLabel`),
      literal(`Tuesday`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}Tuesday`),
      namedNode(`${skos}prefLabel`),
      literal(`Wtorek`, 'pl'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}Tuesday`),
      namedNode(`${skos}prefLabel`),
      literal(`Вторник`, 'ru'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}Tuesday`),
      namedNode(`${skos}prefLabel`),
      literal(`الثلاثاء`, 'ar'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}Tuesday`),
      namedNode(`${skos}prefLabel`),
      literal(`星期二`, 'zh'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}Tuesday`),
      namedNode(`${skos}prefLabel`),
      literal(`火曜日`, 'ja'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}Wednesday`),
      namedNode(`${rdf}type`),
      namedNode(`${time}DayOfWeek`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}Wednesday`),
      namedNode(`${rdfs}label`),
      literal(`Wednesday`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}Wednesday`),
      namedNode(`${skos}prefLabel`),
      literal(`Mercoledì`, 'it'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}Wednesday`),
      namedNode(`${skos}prefLabel`),
      literal(`Mercredi`, 'fr'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}Wednesday`),
      namedNode(`${skos}prefLabel`),
      literal(`Mittwoch`, 'de'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}Wednesday`),
      namedNode(`${skos}prefLabel`),
      literal(`Miércoles`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}Wednesday`),
      namedNode(`${skos}prefLabel`),
      literal(`Quarta-feira`, 'pt'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}Wednesday`),
      namedNode(`${skos}prefLabel`),
      literal(`Wednesday`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}Wednesday`),
      namedNode(`${skos}prefLabel`),
      literal(`Woensdag`, 'nl'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}Wednesday`),
      namedNode(`${skos}prefLabel`),
      literal(`Środa`, 'pl'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}Wednesday`),
      namedNode(`${skos}prefLabel`),
      literal(`Среда`, 'ru'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}Wednesday`),
      namedNode(`${skos}prefLabel`),
      literal(`الأربعاء`, 'ar'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}Wednesday`),
      namedNode(`${skos}prefLabel`),
      literal(`星期三`, 'zh'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}Wednesday`),
      namedNode(`${skos}prefLabel`),
      literal(`水曜日`, 'ja'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}Year`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}Class`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}Year`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}DeprecatedClass`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}Year`),
      namedNode(`${rdfs}comment`),
      literal(`Year duration`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}Year`),
      namedNode(`${rdfs}label`),
      literal(`Year`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}Year`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${time}DurationDescription`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}Year`),
      namedNode(`${rdfs}subClassOf`),
      blankNodes[47],
      namedNode(time)
    ),
    quad(
      namedNode(`${time}Year`),
      namedNode(`${rdfs}subClassOf`),
      blankNodes[48],
      namedNode(time)
    ),
    quad(
      namedNode(`${time}Year`),
      namedNode(`${rdfs}subClassOf`),
      blankNodes[49],
      namedNode(time)
    ),
    quad(
      namedNode(`${time}Year`),
      namedNode(`${rdfs}subClassOf`),
      blankNodes[50],
      namedNode(time)
    ),
    quad(
      namedNode(`${time}Year`),
      namedNode(`${rdfs}subClassOf`),
      blankNodes[51],
      namedNode(time)
    ),
    quad(
      namedNode(`${time}Year`),
      namedNode(`${rdfs}subClassOf`),
      blankNodes[52],
      namedNode(time)
    ),
    quad(
      namedNode(`${time}Year`),
      namedNode(`${rdfs}subClassOf`),
      blankNodes[53],
      namedNode(time)
    ),
    quad(
      namedNode(`${time}Year`),
      namedNode(`${owl}deprecated`),
      literal(`true`, namedNode(`${xsd}boolean`)),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}Year`),
      namedNode(`${skos}definition`),
      literal(`Year duration`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}Year`),
      namedNode(`${skos}historyNote`),
      literal(`Year was proposed in the 2006 version of OWL-Time as an example of how DurationDescription could be specialized to allow for a duration to be restricted to a number of years. 

It is deprecated in this edition of OWL-Time. `),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}Year`),
      namedNode(`${skos}prefLabel`),
      literal(`Anno`, 'it'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}Year`),
      namedNode(`${skos}prefLabel`),
      literal(`Année (calendrier)`, 'fr'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}Year`),
      namedNode(`${skos}prefLabel`),
      literal(`Ano`, 'pt'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}Year`),
      namedNode(`${skos}prefLabel`),
      literal(`Año`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}Year`),
      namedNode(`${skos}prefLabel`),
      literal(`Jaar`, 'nl'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}Year`),
      namedNode(`${skos}prefLabel`),
      literal(`Jahr`, 'de'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}Year`),
      namedNode(`${skos}prefLabel`),
      literal(`Rok`, 'pl'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}Year`),
      namedNode(`${skos}prefLabel`),
      literal(`Year`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}Year`),
      namedNode(`${skos}prefLabel`),
      literal(`Год`, 'ru'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}Year`),
      namedNode(`${skos}prefLabel`),
      literal(`سنة`, 'ar'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}Year`),
      namedNode(`${skos}prefLabel`),
      literal(`年`, 'ja'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}Year`),
      namedNode(`${skos}prefLabel`),
      literal(`年`, 'zh'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}after`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}ObjectProperty`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}after`),
      namedNode(`${rdfs}comment`),
      literal(`Asume una dirección en el tiempo. Si una entidad temporal T1 está después de otra entidad temporal T2, entonces el principio de T1 está después del final de T2.`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}after`),
      namedNode(`${rdfs}comment`),
      literal(`Gives directionality to time. If a temporal entity T1 is after another temporal entity T2, then the beginning of T1 is after the end of T2.`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}after`),
      namedNode(`${rdfs}domain`),
      namedNode(`${time}TemporalEntity`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}after`),
      namedNode(`${rdfs}label`),
      literal(`after`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}after`),
      namedNode(`${rdfs}label`),
      literal(`después`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}after`),
      namedNode(`${rdfs}range`),
      namedNode(`${time}TemporalEntity`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}after`),
      namedNode(`${owl}inverseOf`),
      namedNode(`${time}before`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}after`),
      namedNode(`${skos}definition`),
      literal(`Asume una dirección en el tiempo. Si una entidad temporal T1 está después de otra entidad temporal T2, entonces el principio de T1 está después del final de T2.`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}after`),
      namedNode(`${skos}definition`),
      literal(`Gives directionality to time. If a temporal entity T1 is after another temporal entity T2, then the beginning of T1 is after the end of T2.`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}before`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}ObjectProperty`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}before`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}TransitiveProperty`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}before`),
      namedNode(`${rdfs}comment`),
      literal(`Asume una dirección en el tiempo. Si una entidad temporal T1 está antes que otra entidad temporal T2, entonces el final de T1 está antes que el principio de T2. Así, "antes" se puede considerar básica para instantes y derivada para intervalos.`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}before`),
      namedNode(`${rdfs}comment`),
      literal(`Gives directionality to time. If a temporal entity T1 is before another temporal entity T2, then the end of T1 is before the beginning of T2. Thus, "before" can be considered to be basic to instants and derived for intervals.`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}before`),
      namedNode(`${rdfs}domain`),
      namedNode(`${time}TemporalEntity`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}before`),
      namedNode(`${rdfs}label`),
      literal(`antes`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}before`),
      namedNode(`${rdfs}label`),
      literal(`before`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}before`),
      namedNode(`${rdfs}range`),
      namedNode(`${time}TemporalEntity`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}before`),
      namedNode(`${owl}inverseOf`),
      namedNode(`${time}after`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}before`),
      namedNode(`${skos}definition`),
      literal(`Asume una dirección en el tiempo. Si una entidad temporal T1 está antes que otra entidad temporal T2, entonces el final de T1 está antes que el principio de T2. Así, "antes" se puede considerar básica para instantes y derivada para intervalos.`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}before`),
      namedNode(`${skos}definition`),
      literal(`Gives directionality to time. If a temporal entity T1 is before another temporal entity T2, then the end of T1 is before the beginning of T2. Thus, "before" can be considered to be basic to instants and derived for intervals.`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}day`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}DatatypeProperty`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}day`),
      namedNode(`${rdfs}comment`),
      literal(`Day position in a calendar-clock system.

The range of this property is not specified, so can be replaced by any specific representation of a calendar day from any calendar. `, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}day`),
      namedNode(`${rdfs}comment`),
      literal(`Posición de día en un sistema calendario-reloj.`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}day`),
      namedNode(`${rdfs}domain`),
      namedNode(`${time}GeneralDateTimeDescription`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}day`),
      namedNode(`${rdfs}label`),
      literal(`day`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}day`),
      namedNode(`${rdfs}label`),
      literal(`día`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}day`),
      namedNode(`${skos}definition`),
      literal(`Day position in a calendar-clock system.

The range of this property is not specified, so can be replaced by any specific representation of a calendar day from any calendar. `, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}day`),
      namedNode(`${skos}definition`),
      literal(`Posición de día en un sistema calendario-reloj.

El rango de esta propiedad no está especificado, por tanto, se puede reemplazar por una representación específica de un día de calendario de cualquier calendario.`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}dayOfWeek`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}ObjectProperty`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}dayOfWeek`),
      namedNode(`${rdfs}comment`),
      literal(`El día de la semana, cuyo valor es un miembro de la clase 'día de la semana'.`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}dayOfWeek`),
      namedNode(`${rdfs}comment`),
      literal(`The day of week, whose value is a member of the class time:DayOfWeek`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}dayOfWeek`),
      namedNode(`${rdfs}domain`),
      namedNode(`${time}GeneralDateTimeDescription`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}dayOfWeek`),
      namedNode(`${rdfs}label`),
      literal(`day of week`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}dayOfWeek`),
      namedNode(`${rdfs}label`),
      literal(`día de la semana`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}dayOfWeek`),
      namedNode(`${rdfs}range`),
      namedNode(`${time}DayOfWeek`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}dayOfWeek`),
      namedNode(`${skos}definition`),
      literal(`El día de la semana, cuyo valor es un miembro de la clase 'día de la semana'.`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}dayOfWeek`),
      namedNode(`${skos}definition`),
      literal(`The day of week, whose value is a member of the class time:DayOfWeek`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}dayOfYear`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}DatatypeProperty`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}dayOfYear`),
      namedNode(`${rdfs}comment`),
      literal(`El número de día en el año.`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}dayOfYear`),
      namedNode(`${rdfs}comment`),
      literal(`The number of the day within the year`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}dayOfYear`),
      namedNode(`${rdfs}domain`),
      namedNode(`${time}GeneralDateTimeDescription`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}dayOfYear`),
      namedNode(`${rdfs}label`),
      literal(`day of year`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}dayOfYear`),
      namedNode(`${rdfs}label`),
      literal(`día del año`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}dayOfYear`),
      namedNode(`${rdfs}range`),
      namedNode(`${xsd}nonNegativeInteger`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}dayOfYear`),
      namedNode(`${skos}definition`),
      literal(`El número de día en el año.`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}dayOfYear`),
      namedNode(`${skos}definition`),
      literal(`The number of the day within the year`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}days`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}DatatypeProperty`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}days`),
      namedNode(`${rdfs}comment`),
      literal(`Longitud de, o elemento de la longitud de, una extensión temporal expresada en días.`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}days`),
      namedNode(`${rdfs}comment`),
      literal(`length of, or element of the length of, a temporal extent expressed in days`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}days`),
      namedNode(`${rdfs}domain`),
      namedNode(`${time}GeneralDurationDescription`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}days`),
      namedNode(`${rdfs}label`),
      literal(`days duration`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}days`),
      namedNode(`${rdfs}label`),
      literal(`duración en días`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}days`),
      namedNode(`${rdfs}range`),
      namedNode(`${xsd}decimal`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}days`),
      namedNode(`${skos}definition`),
      literal(`Longitud de, o elemento de la longitud de, una extensión temporal expresada en días.`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}days`),
      namedNode(`${skos}definition`),
      literal(`length of, or element of the length of, a temporal extent expressed in days`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}generalDay`),
      namedNode(`${rdf}type`),
      namedNode(`${rdfs}Datatype`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}generalDay`),
      namedNode(`${rdfs}comment`),
      literal(`Day of month - formulated as a text string with a pattern constraint to reproduce the same lexical form as gDay, except that values up to 99 are permitted, in order to support calendars with more than 31 days in a month. 
Note that the value-space is not defined, so a generic OWL2 processor cannot compute ordering relationships of values of this type.`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}generalDay`),
      namedNode(`${rdfs}comment`),
      literal(`Día del mes - formulado como una cadena de texto con una restricción patrón para reproducir la misma forma léxica que gDay, excepto que se permiten valores hasta el 99, con el propósito de proporcionar soporte a calendarios con meses con más de 31 días.
            Nótese que el espacio de valores no está definido, por tanto, un procesador genérico de OWL2 no puede computar relaciones de orden de valores de este tipo.`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}generalDay`),
      namedNode(`${rdfs}label`),
      literal(`Día generalizado`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}generalDay`),
      namedNode(`${rdfs}label`),
      literal(`Generalized day`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}generalDay`),
      namedNode(`${owl}onDatatype`),
      namedNode(`${xsd}string`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}generalDay`),
      namedNode(`${owl}withRestrictions`),
      blankNodes[54],
      namedNode(time)
    ),
    quad(
      namedNode(`${time}generalDay`),
      namedNode(`${skos}definition`),
      literal(`Day of month - formulated as a text string with a pattern constraint to reproduce the same lexical form as gDay, except that values up to 99 are permitted, in order to support calendars with more than 31 days in a month. 
Note that the value-space is not defined, so a generic OWL2 processor cannot compute ordering relationships of values of this type.`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}generalDay`),
      namedNode(`${skos}definition`),
      literal(`Día del mes - formulado como una cadena de texto con una restricción patrón para reproducir la misma forma léxica que gDay, excepto que se permiten valores hasta el 99, con el propósito de proporcionar soporte a calendarios con meses con más de 31 días.
            Nótese que el espacio de valores no está definido, por tanto, un procesador genérico de OWL2 no puede computar relaciones de orden de valores de este tipo.`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}generalMonth`),
      namedNode(`${rdf}type`),
      namedNode(`${rdfs}Datatype`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}generalMonth`),
      namedNode(`${rdfs}comment`),
      literal(`Mes del año - formulado como una cadena de texto con una restricción patrón para reproducir la misma forma léxica que gMonth, excepto que se permiten valores hasta el 20, con el propósito de proporcionar soporte a calendarios con años con más de 12 meses.
            Nótese que el espacio de valores no está definido, por tanto, un procesador genérico de OWL2 no puede computar relaciones de orden de valores de este tipo.`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}generalMonth`),
      namedNode(`${rdfs}comment`),
      literal(`Month of year - formulated as a text string with a pattern constraint to reproduce the same lexical form as gMonth, except that values up to 20 are permitted, in order to support calendars with more than 12 months in the year. 
Note that the value-space is not defined, so a generic OWL2 processor cannot compute ordering relationships of values of this type.`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}generalMonth`),
      namedNode(`${rdfs}label`),
      literal(`Generalized month`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}generalMonth`),
      namedNode(`${rdfs}label`),
      literal(`Mes generalizado`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}generalMonth`),
      namedNode(`${owl}onDatatype`),
      namedNode(`${xsd}string`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}generalMonth`),
      namedNode(`${owl}withRestrictions`),
      blankNodes[55],
      namedNode(time)
    ),
    quad(
      namedNode(`${time}generalMonth`),
      namedNode(`${skos}definition`),
      literal(`Mes del año - formulado como una cadena de texto con una restricción patrón para reproducir la misma forma léxica que gMonth, excepto que se permiten valores hasta el 20, con el propósito de proporcionar soporte a calendarios con años con más de 12 meses.
            Nótese que el espacio de valores no está definido, por tanto, un procesador genérico de OWL2 no puede computar relaciones de orden de valores de este tipo.`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}generalMonth`),
      namedNode(`${skos}definition`),
      literal(`Month of year - formulated as a text string with a pattern constraint to reproduce the same lexical form as gMonth, except that values up to 20 are permitted, in order to support calendars with more than 12 months in the year. 
Note that the value-space is not defined, so a generic OWL2 processor cannot compute ordering relationships of values of this type.`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}generalYear`),
      namedNode(`${rdf}type`),
      namedNode(`${rdfs}Datatype`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}generalYear`),
      namedNode(`${rdfs}comment`),
      literal(`Número de año - formulado como una cadena de texto con una restricción patrón para reproducir la misma forma léxica que gYear, aunque no está restringido a valores del calendario gregoriano.
            Nótese que el espacio de valores no está definido, por tanto, un procesador genérico de OWL2 no puede computar relaciones de orden de valores de este tipo.`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}generalYear`),
      namedNode(`${rdfs}comment`),
      literal(`Year number - formulated as a text string with a pattern constraint to reproduce the same lexical form as gYear, but not restricted to values from the Gregorian calendar. 
Note that the value-space is not defined, so a generic OWL2 processor cannot compute ordering relationships of values of this type.`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}generalYear`),
      namedNode(`${rdfs}label`),
      literal(`Año generalizado`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}generalYear`),
      namedNode(`${rdfs}label`),
      literal(`Generalized year`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}generalYear`),
      namedNode(`${owl}onDatatype`),
      namedNode(`${xsd}string`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}generalYear`),
      namedNode(`${owl}withRestrictions`),
      blankNodes[56],
      namedNode(time)
    ),
    quad(
      namedNode(`${time}generalYear`),
      namedNode(`${skos}definition`),
      literal(`Número de año - formulado como una cadena de texto con una restricción patrón para reproducir la misma forma léxica que gYear, aunque no está restringido a valores del calendario gregoriano.
            Nótese que el espacio de valores no está definido, por tanto, un procesador genérico de OWL2 no puede computar relaciones de orden de valores de este tipo.`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}generalYear`),
      namedNode(`${skos}definition`),
      literal(`Year number - formulated as a text string with a pattern constraint to reproduce the same lexical form as gYear, but not restricted to values from the Gregorian calendar. 
Note that the value-space is not defined, so a generic OWL2 processor cannot compute ordering relationships of values of this type.`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}hasBeginning`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}ObjectProperty`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}hasBeginning`),
      namedNode(`${rdfs}comment`),
      literal(`Beginning of a temporal entity`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}hasBeginning`),
      namedNode(`${rdfs}comment`),
      literal(`Comienzo de una entidad temporal.`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}hasBeginning`),
      namedNode(`${rdfs}domain`),
      namedNode(`${time}TemporalEntity`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}hasBeginning`),
      namedNode(`${rdfs}label`),
      literal(`has beginning`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}hasBeginning`),
      namedNode(`${rdfs}label`),
      literal(`tiene principio`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}hasBeginning`),
      namedNode(`${rdfs}range`),
      namedNode(`${time}Instant`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}hasBeginning`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${time}hasTime`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}hasBeginning`),
      namedNode(`${skos}definition`),
      literal(`Beginning of a temporal entity.`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}hasBeginning`),
      namedNode(`${skos}definition`),
      literal(`Comienzo de una entidad temporal.`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}hasDateTimeDescription`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}ObjectProperty`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}hasDateTimeDescription`),
      namedNode(`${rdfs}comment`),
      literal(`Valor de intervalo de fecha-hora expresado como un valor estructurado. El principio y el final del intervalo coincide con los límites del elemento más corto en la descripción.`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}hasDateTimeDescription`),
      namedNode(`${rdfs}comment`),
      literal(`Value of DateTimeInterval expressed as a structured value. The beginning and end of the interval coincide with the limits of the shortest element in the description.`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}hasDateTimeDescription`),
      namedNode(`${rdfs}domain`),
      namedNode(`${time}DateTimeInterval`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}hasDateTimeDescription`),
      namedNode(`${rdfs}label`),
      literal(`has Date-Time description`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}hasDateTimeDescription`),
      namedNode(`${rdfs}label`),
      literal(`tiene descripción fecha-hora`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}hasDateTimeDescription`),
      namedNode(`${rdfs}range`),
      namedNode(`${time}GeneralDateTimeDescription`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}hasDateTimeDescription`),
      namedNode(`${skos}definition`),
      literal(`Valor de intervalo de fecha-hora expresado como un valor estructurado. El principio y el final del intervalo coincide con los límites del elemento más corto en la descripción.`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}hasDateTimeDescription`),
      namedNode(`${skos}definition`),
      literal(`Value of DateTimeInterval expressed as a structured value. The beginning and end of the interval coincide with the limits of the shortest element in the description.`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}hasDuration`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}ObjectProperty`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}hasDuration`),
      namedNode(`${rdfs}comment`),
      literal(`Duración de una entidad temporal, expresada como un valor escalado o un valor nominal.`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}hasDuration`),
      namedNode(`${rdfs}comment`),
      literal(`Duration of a temporal entity, expressed as a scaled value or nominal value`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}hasDuration`),
      namedNode(`${rdfs}label`),
      literal(`has duration`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}hasDuration`),
      namedNode(`${rdfs}label`),
      literal(`tiene duración`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}hasDuration`),
      namedNode(`${rdfs}range`),
      namedNode(`${time}Duration`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}hasDuration`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${time}hasTemporalDuration`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}hasDuration`),
      namedNode(`${skos}definition`),
      literal(`Duración de una entidad temporal, evento o actividad, o cosa, expresada como un valor escalado.`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}hasDuration`),
      namedNode(`${skos}definition`),
      literal(`Duration of a temporal entity, event or activity, or thing, expressed as a scaled value`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}hasDurationDescription`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}ObjectProperty`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}hasDurationDescription`),
      namedNode(`${rdfs}comment`),
      literal(`Duración de una entidad temporal, expresada utilizando una descripción estructurada.`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}hasDurationDescription`),
      namedNode(`${rdfs}comment`),
      literal(`Duration of a temporal entity, expressed using a structured description`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}hasDurationDescription`),
      namedNode(`${rdfs}label`),
      literal(`has duration description`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}hasDurationDescription`),
      namedNode(`${rdfs}label`),
      literal(`tiene descripción de duración`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}hasDurationDescription`),
      namedNode(`${rdfs}range`),
      namedNode(`${time}GeneralDurationDescription`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}hasDurationDescription`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${time}hasTemporalDuration`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}hasDurationDescription`),
      namedNode(`${skos}definition`),
      literal(`Duración de una entidad temporal, expresada utilizando una descripción estructurada.`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}hasDurationDescription`),
      namedNode(`${skos}definition`),
      literal(`Duration of a temporal entity, expressed using a structured description`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}hasEnd`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}ObjectProperty`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}hasEnd`),
      namedNode(`${rdfs}comment`),
      literal(`End of a temporal entity.`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}hasEnd`),
      namedNode(`${rdfs}comment`),
      literal(`Final de una entidad temporal.`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}hasEnd`),
      namedNode(`${rdfs}domain`),
      namedNode(`${time}TemporalEntity`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}hasEnd`),
      namedNode(`${rdfs}label`),
      literal(`has end`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}hasEnd`),
      namedNode(`${rdfs}label`),
      literal(`tiene fin`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}hasEnd`),
      namedNode(`${rdfs}range`),
      namedNode(`${time}Instant`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}hasEnd`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${time}hasTime`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}hasEnd`),
      namedNode(`${skos}definition`),
      literal(`End of a temporal entity.`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}hasEnd`),
      namedNode(`${skos}definition`),
      literal(`Final de una entidad temporal.`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}hasTRS`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}FunctionalProperty`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}hasTRS`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}ObjectProperty`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}hasTRS`),
      namedNode(`${rdfs}comment`),
      literal(`El sistema de referencia temporal utilizado por una posición temporal o descripción de extensión.`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}hasTRS`),
      namedNode(`${rdfs}comment`),
      literal(`The temporal reference system used by a temporal position or extent description. `, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}hasTRS`),
      namedNode(`${rdfs}domain`),
      blankNodes[57],
      namedNode(time)
    ),
    quad(
      namedNode(`${time}hasTRS`),
      namedNode(`${rdfs}label`),
      literal(`Temporal reference system used`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}hasTRS`),
      namedNode(`${rdfs}label`),
      literal(`sistema de referencia temporal utilizado`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}hasTRS`),
      namedNode(`${rdfs}range`),
      namedNode(`${time}TRS`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}hasTRS`),
      namedNode(`${skos}definition`),
      literal(`El sistema de referencia temporal utilizado por una posición temporal o descripción de extensión.`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}hasTRS`),
      namedNode(`${skos}definition`),
      literal(`The temporal reference system used by a temporal position or extent description. `, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}hasTemporalDuration`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}ObjectProperty`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}hasTemporalDuration`),
      namedNode(`${rdfs}comment`),
      literal(`Duración de una entidad temporal.`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}hasTemporalDuration`),
      namedNode(`${rdfs}comment`),
      literal(`Duration of a temporal entity.`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}hasTemporalDuration`),
      namedNode(`${rdfs}domain`),
      namedNode(`${time}TemporalEntity`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}hasTemporalDuration`),
      namedNode(`${rdfs}label`),
      literal(`has temporal duration`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}hasTemporalDuration`),
      namedNode(`${rdfs}label`),
      literal(`tiene duración temporal`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}hasTemporalDuration`),
      namedNode(`${rdfs}range`),
      namedNode(`${time}TemporalDuration`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}hasTemporalDuration`),
      namedNode(`${skos}definition`),
      literal(`Duración de una entidad temporal.`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}hasTemporalDuration`),
      namedNode(`${skos}definition`),
      literal(`Duration of a temporal entity.`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}hasTime`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}ObjectProperty`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}hasTime`),
      namedNode(`${rdfs}comment`),
      literal(`Proporciona soporte a la asociación de una entidad temporal (instante o intervalo) a cualquier cosa.`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}hasTime`),
      namedNode(`${rdfs}comment`),
      literal(`Supports the association of a temporal entity (instant or interval) to any thing`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}hasTime`),
      namedNode(`${rdfs}label`),
      literal(`has time`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}hasTime`),
      namedNode(`${rdfs}label`),
      literal(`tiene tiempo`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}hasTime`),
      namedNode(`${rdfs}range`),
      namedNode(`${time}TemporalEntity`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}hasTime`),
      namedNode(`${skos}definition`),
      literal(`Proporciona soporte a la asociación de una entidad temporal (instante o intervalo) a cualquier cosa.`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}hasTime`),
      namedNode(`${skos}definition`),
      literal(`Supports the association of a temporal entity (instant or interval) to any thing`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}hasTime`),
      namedNode(`${skos}editorialNote`),
      literal(`Característica arriesgada -añadida en la revisión del 2017 que no ha sido todavía utilizada de forma amplia.`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}hasTime`),
      namedNode(`${skos}editorialNote`),
      literal(`Feature at risk - added in 2017 revision, and not yet widely used. `, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}hasXSDDuration`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}DatatypeProperty`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}hasXSDDuration`),
      namedNode(`${rdfs}comment`),
      literal(`Extensión de una entidad temporal, expresada utilizando xsd:duration.`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}hasXSDDuration`),
      namedNode(`${rdfs}comment`),
      literal(`Extent of a temporal entity, expressed using xsd:duration`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}hasXSDDuration`),
      namedNode(`${rdfs}domain`),
      namedNode(`${time}TemporalEntity`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}hasXSDDuration`),
      namedNode(`${rdfs}label`),
      literal(`has XSD duration`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}hasXSDDuration`),
      namedNode(`${rdfs}label`),
      literal(`tiene duración XSD`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}hasXSDDuration`),
      namedNode(`${rdfs}range`),
      namedNode(`${xsd}duration`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}hasXSDDuration`),
      namedNode(`${skos}definition`),
      literal(`Extensión de una entidad temporal, expresada utilizando xsd:duration.`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}hasXSDDuration`),
      namedNode(`${skos}definition`),
      literal(`Extent of a temporal entity, expressed using xsd:duration`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}hasXSDDuration`),
      namedNode(`${skos}editorialNote`),
      literal(`Característica arriesgada - añadida en la revisión de 2017, y todavía no ampliamente utilizada.`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}hasXSDDuration`),
      namedNode(`${skos}editorialNote`),
      literal(`Feature at risk - added in 2017 revision, and not yet widely used. `, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}hour`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}DatatypeProperty`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}hour`),
      namedNode(`${rdfs}comment`),
      literal(`Hour position in a calendar-clock system.`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}hour`),
      namedNode(`${rdfs}comment`),
      literal(`Posición de hora en un sistema calendario-reloj.`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}hour`),
      namedNode(`${rdfs}domain`),
      namedNode(`${time}GeneralDateTimeDescription`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}hour`),
      namedNode(`${rdfs}label`),
      literal(`hora`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}hour`),
      namedNode(`${rdfs}label`),
      literal(`hour`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}hour`),
      namedNode(`${rdfs}range`),
      namedNode(`${xsd}nonNegativeInteger`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}hour`),
      namedNode(`${skos}definition`),
      literal(`Hour position in a calendar-clock system.`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}hour`),
      namedNode(`${skos}definition`),
      literal(`Posición de hora en un sistema calendario-reloj.`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}hours`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}DatatypeProperty`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}hours`),
      namedNode(`${rdfs}comment`),
      literal(`Longitud de, o elemento de la longitud de, una extensión temporal expresada en horas.`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}hours`),
      namedNode(`${rdfs}comment`),
      literal(`length of, or element of the length of, a temporal extent expressed in hours`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}hours`),
      namedNode(`${rdfs}domain`),
      namedNode(`${time}GeneralDurationDescription`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}hours`),
      namedNode(`${rdfs}label`),
      literal(`duración en horas`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}hours`),
      namedNode(`${rdfs}label`),
      literal(`hours duration`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}hours`),
      namedNode(`${rdfs}range`),
      namedNode(`${xsd}decimal`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}hours`),
      namedNode(`${skos}definition`),
      literal(`Longitud de, o elemento de la longitud de, una extensión temporal expresada en horas.`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}hours`),
      namedNode(`${skos}definition`),
      literal(`length of, or element of the length of, a temporal extent expressed in hours`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}inDateTime`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}ObjectProperty`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}inDateTime`),
      namedNode(`${rdfs}comment`),
      literal(`Posición de un instante, expresada utilizando una descripción estructurada.`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}inDateTime`),
      namedNode(`${rdfs}comment`),
      literal(`Position of an instant, expressed using a structured description`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}inDateTime`),
      namedNode(`${rdfs}domain`),
      namedNode(`${time}Instant`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}inDateTime`),
      namedNode(`${rdfs}label`),
      literal(`en descripción de fecha-hora`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}inDateTime`),
      namedNode(`${rdfs}label`),
      literal(`in date-time description`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}inDateTime`),
      namedNode(`${rdfs}range`),
      namedNode(`${time}GeneralDateTimeDescription`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}inDateTime`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${time}inTemporalPosition`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}inDateTime`),
      namedNode(`${skos}definition`),
      literal(`Posición de un instante, expresada utilizando una descripción estructurada.`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}inDateTime`),
      namedNode(`${skos}definition`),
      literal(`Position of an instant, expressed using a structured description`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}inTemporalPosition`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}ObjectProperty`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}inTemporalPosition`),
      namedNode(`${rdfs}comment`),
      literal(`Posición de un instante de tiempo.`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}inTemporalPosition`),
      namedNode(`${rdfs}comment`),
      literal(`Position of a time instant`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}inTemporalPosition`),
      namedNode(`${rdfs}domain`),
      namedNode(`${time}Instant`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}inTemporalPosition`),
      namedNode(`${rdfs}label`),
      literal(`Temporal position`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}inTemporalPosition`),
      namedNode(`${rdfs}label`),
      literal(`posición temporal`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}inTemporalPosition`),
      namedNode(`${rdfs}range`),
      namedNode(`${time}TemporalPosition`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}inTemporalPosition`),
      namedNode(`${skos}definition`),
      literal(`Posición de un instante de tiempo.`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}inTemporalPosition`),
      namedNode(`${skos}definition`),
      literal(`Position of a time instant`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}inTimePosition`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}ObjectProperty`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}inTimePosition`),
      namedNode(`${rdfs}comment`),
      literal(`Posición de un instante, expresada como una coordenada temporal o un valor nominal.`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}inTimePosition`),
      namedNode(`${rdfs}comment`),
      literal(`Position of an instant, expressed as a temporal coordinate or nominal value`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}inTimePosition`),
      namedNode(`${rdfs}domain`),
      namedNode(`${time}Instant`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}inTimePosition`),
      namedNode(`${rdfs}label`),
      literal(`Time position`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}inTimePosition`),
      namedNode(`${rdfs}label`),
      literal(`posición de tiempo`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}inTimePosition`),
      namedNode(`${rdfs}range`),
      namedNode(`${time}TimePosition`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}inTimePosition`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${time}inTemporalPosition`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}inTimePosition`),
      namedNode(`${skos}definition`),
      literal(`Posición de un instante, expresada como una coordenada temporal o un valor nominal.`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}inTimePosition`),
      namedNode(`${skos}definition`),
      literal(`Position of a time instant expressed as a TimePosition`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}inXSDDate`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}DatatypeProperty`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}inXSDDate`),
      namedNode(`${rdfs}comment`),
      literal(`Posición de un instante, expresado utilizando xsd:date.`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}inXSDDate`),
      namedNode(`${rdfs}comment`),
      literal(`Position of an instant, expressed using xsd:date`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}inXSDDate`),
      namedNode(`${rdfs}domain`),
      namedNode(`${time}Instant`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}inXSDDate`),
      namedNode(`${rdfs}label`),
      literal(`en fecha XSD`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}inXSDDate`),
      namedNode(`${rdfs}label`),
      literal(`in XSD date`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}inXSDDate`),
      namedNode(`${rdfs}range`),
      namedNode(`${xsd}date`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}inXSDDate`),
      namedNode(`${skos}definition`),
      literal(`Posición de un instante, expresado utilizando xsd:date.`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}inXSDDate`),
      namedNode(`${skos}definition`),
      literal(`Position of an instant, expressed using xsd:date`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}inXSDDateTime`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}DatatypeProperty`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}inXSDDateTime`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}DeprecatedProperty`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}inXSDDateTime`),
      namedNode(`${rdfs}comment`),
      literal(`Posición de un instante, expresado utilizando xsd:dateTime.`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}inXSDDateTime`),
      namedNode(`${rdfs}comment`),
      literal(`Position of an instant, expressed using xsd:dateTime`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}inXSDDateTime`),
      namedNode(`${rdfs}domain`),
      namedNode(`${time}Instant`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}inXSDDateTime`),
      namedNode(`${rdfs}label`),
      literal(`en fecha-tiempo XSD`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}inXSDDateTime`),
      namedNode(`${rdfs}label`),
      literal(`in XSD Date-Time`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}inXSDDateTime`),
      namedNode(`${rdfs}range`),
      namedNode(`${xsd}dateTime`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}inXSDDateTime`),
      namedNode(`${owl}deprecated`),
      literal(`true`, namedNode(`${xsd}boolean`)),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}inXSDDateTime`),
      namedNode(`${skos}definition`),
      literal(`Posición de un instante, expresado utilizando xsd:dateTime.`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}inXSDDateTime`),
      namedNode(`${skos}definition`),
      literal(`Position of an instant, expressed using xsd:dateTime`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}inXSDDateTime`),
      namedNode(`${skos}note`),
      literal(`La propiedad 'en fecha-hora XSD' ha sido reemplazada por 'en fecha-sello de tiempo XSD' que hace obligatorio el campo 'huso horario'.`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}inXSDDateTime`),
      namedNode(`${skos}note`),
      literal(`The property :inXSDDateTime is replaced by :inXSDDateTimeStamp which makes the time-zone field mandatory.`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}inXSDDateTimeStamp`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}DatatypeProperty`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}inXSDDateTimeStamp`),
      namedNode(`${rdfs}comment`),
      literal(`Posición de un instante, expresado utilizando xsd:dateTimeStamp.`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}inXSDDateTimeStamp`),
      namedNode(`${rdfs}comment`),
      literal(`Position of an instant, expressed using xsd:dateTimeStamp`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}inXSDDateTimeStamp`),
      namedNode(`${rdfs}domain`),
      namedNode(`${time}Instant`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}inXSDDateTimeStamp`),
      namedNode(`${rdfs}label`),
      literal(`en fecha-sello de tiempo XSD`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}inXSDDateTimeStamp`),
      namedNode(`${rdfs}label`),
      literal(`in XSD Date-Time-Stamp`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}inXSDDateTimeStamp`),
      namedNode(`${rdfs}range`),
      namedNode(`${xsd}dateTimeStamp`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}inXSDDateTimeStamp`),
      namedNode(`${skos}definition`),
      literal(`Posición de un instante, expresado utilizando xsd:dateTimeStamp.`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}inXSDDateTimeStamp`),
      namedNode(`${skos}definition`),
      literal(`Position of an instant, expressed using xsd:dateTimeStamp`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}inXSDgYear`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}DatatypeProperty`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}inXSDgYear`),
      namedNode(`${rdfs}comment`),
      literal(`Posición de un instante, expresado utilizando xsd:gYear.`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}inXSDgYear`),
      namedNode(`${rdfs}comment`),
      literal(`Position of an instant, expressed using xsd:gYear`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}inXSDgYear`),
      namedNode(`${rdfs}domain`),
      namedNode(`${time}Instant`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}inXSDgYear`),
      namedNode(`${rdfs}label`),
      literal(`en año gregoriano XSD`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}inXSDgYear`),
      namedNode(`${rdfs}label`),
      literal(`in XSD g-Year`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}inXSDgYear`),
      namedNode(`${rdfs}range`),
      namedNode(`${xsd}gYear`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}inXSDgYear`),
      namedNode(`${skos}definition`),
      literal(`Posición de un instante, expresado utilizando xsd:gYear.`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}inXSDgYear`),
      namedNode(`${skos}definition`),
      literal(`Position of an instant, expressed using xsd:gYear`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}inXSDgYearMonth`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}DatatypeProperty`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}inXSDgYearMonth`),
      namedNode(`${rdfs}comment`),
      literal(`Posición de un instante, expresado utilizando xsd:gYearMonth.`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}inXSDgYearMonth`),
      namedNode(`${rdfs}comment`),
      literal(`Position of an instant, expressed using xsd:gYearMonth`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}inXSDgYearMonth`),
      namedNode(`${rdfs}domain`),
      namedNode(`${time}Instant`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}inXSDgYearMonth`),
      namedNode(`${rdfs}label`),
      literal(`en año-mes gregoriano XSD`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}inXSDgYearMonth`),
      namedNode(`${rdfs}label`),
      literal(`in XSD g-YearMonth`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}inXSDgYearMonth`),
      namedNode(`${rdfs}range`),
      namedNode(`${xsd}gYearMonth`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}inXSDgYearMonth`),
      namedNode(`${skos}definition`),
      literal(`Posición de un instante, expresado utilizando xsd:gYearMonth.`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}inXSDgYearMonth`),
      namedNode(`${skos}definition`),
      literal(`Position of an instant, expressed using xsd:gYearMonth`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}inside`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}ObjectProperty`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}inside`),
      namedNode(`${rdfs}comment`),
      literal(`An instant that falls inside the interval. It is not intended to include beginnings and ends of intervals.`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}inside`),
      namedNode(`${rdfs}comment`),
      literal(`Un instante que cae dentro del intervalo. Se asume que no es ni el principio ni el final de ningún intervalo.`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}inside`),
      namedNode(`${rdfs}domain`),
      namedNode(`${time}Interval`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}inside`),
      namedNode(`${rdfs}label`),
      literal(`has time instant inside`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}inside`),
      namedNode(`${rdfs}label`),
      literal(`tiene instante de tiempo dentro`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}inside`),
      namedNode(`${rdfs}range`),
      namedNode(`${time}Instant`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}inside`),
      namedNode(`${skos}definition`),
      literal(`An instant that falls inside the interval. It is not intended to include beginnings and ends of intervals.`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}inside`),
      namedNode(`${skos}definition`),
      literal(`Un instante que cae dentro del intervalo. Se asume que no es ni el principio ni el final de ningún intervalo.`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}intervalAfter`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}ObjectProperty`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}intervalAfter`),
      namedNode(`${rdfs}comment`),
      literal(`If a proper interval T1 is intervalAfter another proper interval T2, then the beginning of T1 is after the end of T2.`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}intervalAfter`),
      namedNode(`${rdfs}comment`),
      literal(`Si un intervalo propio T1 es posterior a otro intervalo propio T2, entonces el principio de T1 está después que el final de T2.`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}intervalAfter`),
      namedNode(`${rdfs}domain`),
      namedNode(`${time}ProperInterval`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}intervalAfter`),
      namedNode(`${rdfs}label`),
      literal(`interval after`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}intervalAfter`),
      namedNode(`${rdfs}label`),
      literal(`intervalo posterior`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}intervalAfter`),
      namedNode(`${rdfs}range`),
      namedNode(`${time}ProperInterval`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}intervalAfter`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${time}after`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}intervalAfter`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${time}intervalDisjoint`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}intervalAfter`),
      namedNode(`${owl}inverseOf`),
      namedNode(`${time}intervalBefore`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}intervalAfter`),
      namedNode(`${skos}definition`),
      literal(`If a proper interval T1 is intervalAfter another proper interval T2, then the beginning of T1 is after the end of T2.`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}intervalAfter`),
      namedNode(`${skos}definition`),
      literal(`Si un intervalo propio T1 es posterior a otro intervalo propio T2, entonces el principio de T1 está después que el final de T2.`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}intervalBefore`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}ObjectProperty`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}intervalBefore`),
      namedNode(`${rdfs}comment`),
      literal(`If a proper interval T1 is intervalBefore another proper interval T2, then the end of T1 is before the beginning of T2.`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}intervalBefore`),
      namedNode(`${rdfs}comment`),
      literal(`Si un intervalo propio T1 está antes que otro intervalo propio T2, entonces el final de T1 está antes que el principio de T2.`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}intervalBefore`),
      namedNode(`${rdfs}domain`),
      namedNode(`${time}ProperInterval`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}intervalBefore`),
      namedNode(`${rdfs}label`),
      literal(`interval before`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}intervalBefore`),
      namedNode(`${rdfs}label`),
      literal(`intervalo anterior`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}intervalBefore`),
      namedNode(`${rdfs}range`),
      namedNode(`${time}ProperInterval`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}intervalBefore`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${time}before`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}intervalBefore`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${time}intervalDisjoint`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}intervalBefore`),
      namedNode(`${owl}inverseOf`),
      namedNode(`${time}intervalAfter`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}intervalBefore`),
      namedNode(`${skos}definition`),
      literal(`If a proper interval T1 is intervalBefore another proper interval T2, then the end of T1 is before the beginning of T2.`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}intervalBefore`),
      namedNode(`${skos}definition`),
      literal(`Si un intervalo propio T1 está antes que otro intervalo propio T2, entonces el final de T1 está antes que el principio de T2.`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}intervalContains`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}ObjectProperty`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}intervalContains`),
      namedNode(`${rdfs}comment`),
      literal(`If a proper interval T1 is intervalContains another proper interval T2, then the beginning of T1 is before the beginning of T2, and the end of T1 is after the end of T2.`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}intervalContains`),
      namedNode(`${rdfs}comment`),
      literal(`Si un intervalo propio T1 contiene otro intervalo propio T2, entonces el principio de T1 está antes que el principio de T2, y el final de T1 está después del final de T2.`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}intervalContains`),
      namedNode(`${rdfs}domain`),
      namedNode(`${time}ProperInterval`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}intervalContains`),
      namedNode(`${rdfs}label`),
      literal(`interval contains`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}intervalContains`),
      namedNode(`${rdfs}label`),
      literal(`intervalo contiene`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}intervalContains`),
      namedNode(`${rdfs}range`),
      namedNode(`${time}ProperInterval`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}intervalContains`),
      namedNode(`${owl}inverseOf`),
      namedNode(`${time}intervalDuring`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}intervalContains`),
      namedNode(`${skos}definition`),
      literal(`If a proper interval T1 is intervalContains another proper interval T2, then the beginning of T1 is before the beginning of T2, and the end of T1 is after the end of T2.`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}intervalContains`),
      namedNode(`${skos}definition`),
      literal(`Si un intervalo propio T1 contiene otro intervalo propio T2, entonces el principio de T1 está antes que el principio de T2, y el final de T1 está después del final de T2.`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}intervalDisjoint`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}ObjectProperty`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}intervalDisjoint`),
      namedNode(`${rdfs}comment`),
      literal(`If a proper interval T1 is intervalDisjoint another proper interval T2, then the beginning of T1 is after the end of T2, or the end of T1 is before the beginning of T2, i.e. the intervals do not overlap in any way, but their ordering relationship is not known.`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}intervalDisjoint`),
      namedNode(`${rdfs}comment`),
      literal(`Si un intervalo propio T1 es disjunto con otro intervalo propio T2, entonces el principio de T1 está después del final de T2, o el final de T1 está antes que el principio de T2, es decir, los intervalos no se solapan de ninguna forma, aunque su relación de orden no se conozca.`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}intervalDisjoint`),
      namedNode(`${rdfs}domain`),
      namedNode(`${time}ProperInterval`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}intervalDisjoint`),
      namedNode(`${rdfs}label`),
      literal(`interval disjoint`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}intervalDisjoint`),
      namedNode(`${rdfs}label`),
      literal(`intervalo disjunto`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}intervalDisjoint`),
      namedNode(`${rdfs}range`),
      namedNode(`${time}ProperInterval`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}intervalDisjoint`),
      namedNode(`${skos}definition`),
      literal(`If a proper interval T1 is intervalDisjoint another proper interval T2, then the beginning of T1 is after the end of T2, or the end of T1 is before the beginning of T2, i.e. the intervals do not overlap in any way, but their ordering relationship is not known.`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}intervalDisjoint`),
      namedNode(`${skos}definition`),
      literal(`Si un intervalo propio T1 es disjunto con otro intervalo propio T2, entonces el principio de T1 está después del final de T2, o el final de T1 está antes que el principio de T2, es decir, los intervalos no se solapan de ninguna forma, aunque su relación de orden no se conozca.`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}intervalDisjoint`),
      namedNode(`${skos}note`),
      literal(`Esta relación entre intervalos no estaba incluida en las 13 relaciones básicas definidas por Allen (1984), pero está definida en T.3 como la unión de 'intervalo anterior' con 'intervalo posterior'. Sin embargo, esto está fuera de la expresividad de OWL2, por tanto, está implementado como una propiedad explícita, con 'intervalo anterior' e 'intervalo posterior' como sub-propiedades.`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}intervalDisjoint`),
      namedNode(`${skos}note`),
      literal(`This interval relation is not included in the 13 basic relationships defined in Allen (1984), but is defined in (T.3) as the union of :intervalBefore v :intervalAfter . However, that is outside OWL2 expressivity, so is implemented as an explicit property, with :intervalBefore , :intervalAfter as sub-properties`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}intervalDuring`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}ObjectProperty`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}intervalDuring`),
      namedNode(`${rdfs}comment`),
      literal(`If a proper interval T1 is intervalDuring another proper interval T2, then the beginning of T1 is after the beginning of T2, and the end of T1 is before the end of T2.`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}intervalDuring`),
      namedNode(`${rdfs}comment`),
      literal(`Si un intervalo propio T1 está durante otro intervalo propio T2, entonces del principio de T1 está después del principio de T2, y el final de T1 está antes que el final de T2.`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}intervalDuring`),
      namedNode(`${rdfs}domain`),
      namedNode(`${time}ProperInterval`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}intervalDuring`),
      namedNode(`${rdfs}label`),
      literal(`interval during`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}intervalDuring`),
      namedNode(`${rdfs}label`),
      literal(`intervalo durante`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}intervalDuring`),
      namedNode(`${rdfs}range`),
      namedNode(`${time}ProperInterval`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}intervalDuring`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${time}intervalIn`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}intervalDuring`),
      namedNode(`${owl}inverseOf`),
      namedNode(`${time}intervalContains`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}intervalDuring`),
      namedNode(`${skos}definition`),
      literal(`If a proper interval T1 is intervalDuring another proper interval T2, then the beginning of T1 is after the beginning of T2, and the end of T1 is before the end of T2.`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}intervalDuring`),
      namedNode(`${skos}definition`),
      literal(`Si un intervalo propio T1 está durante otro intervalo propio T2, entonces del principio de T1 está después del principio de T2, y el final de T1 está antes que el final de T2.`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}intervalEquals`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}ObjectProperty`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}intervalEquals`),
      namedNode(`${rdfs}comment`),
      literal(`If a proper interval T1 is intervalEquals another proper interval T2, then the beginning of T1 is coincident with the beginning of T2, and the end of T1 is coincident with the end of T2.`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}intervalEquals`),
      namedNode(`${rdfs}comment`),
      literal(`Si un intervalo propio T1 es igual a otro intervalo propio T2, entonces el principio de T1 coincide con el principio de T2, y el final de T1 coincide con el final de T2.`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}intervalEquals`),
      namedNode(`${rdfs}domain`),
      namedNode(`${time}ProperInterval`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}intervalEquals`),
      namedNode(`${rdfs}label`),
      literal(`interval equals`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}intervalEquals`),
      namedNode(`${rdfs}label`),
      literal(`intervalo igual`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}intervalEquals`),
      namedNode(`${rdfs}range`),
      namedNode(`${time}ProperInterval`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}intervalEquals`),
      namedNode(`${owl}propertyDisjointWith`),
      namedNode(`${time}intervalIn`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}intervalEquals`),
      namedNode(`${skos}definition`),
      literal(`If a proper interval T1 is intervalEquals another proper interval T2, then the beginning of T1 is coincident with the beginning of T2, and the end of T1 is coincident with the end of T2.`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}intervalEquals`),
      namedNode(`${skos}definition`),
      literal(`Si un intervalo propio T1 es igual a otro intervalo propio T2, entonces el principio de T1 coincide con el principio de T2, y el final de T1 coincide con el final de T2.`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}intervalFinishedBy`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}ObjectProperty`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}intervalFinishedBy`),
      namedNode(`${rdfs}comment`),
      literal(`If a proper interval T1 is intervalFinishedBy another proper interval T2, then the beginning of T1 is before the beginning of T2, and the end of T1 is coincident with the end of T2.`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}intervalFinishedBy`),
      namedNode(`${rdfs}comment`),
      literal(`Si un intervalo propio T1 está terminado por otro intervalo propio T2, entonces el principio de T1 está antes que el principio de T2, y el final de T1 coincide con el final de T2.`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}intervalFinishedBy`),
      namedNode(`${rdfs}domain`),
      namedNode(`${time}ProperInterval`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}intervalFinishedBy`),
      namedNode(`${rdfs}label`),
      literal(`interval finished by`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}intervalFinishedBy`),
      namedNode(`${rdfs}label`),
      literal(`intervalo terminado por`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}intervalFinishedBy`),
      namedNode(`${rdfs}range`),
      namedNode(`${time}ProperInterval`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}intervalFinishedBy`),
      namedNode(`${owl}inverseOf`),
      namedNode(`${time}intervalFinishes`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}intervalFinishedBy`),
      namedNode(`${skos}definition`),
      literal(`If a proper interval T1 is intervalFinishedBy another proper interval T2, then the beginning of T1 is before the beginning of T2, and the end of T1 is coincident with the end of T2.`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}intervalFinishedBy`),
      namedNode(`${skos}definition`),
      literal(`Si un intervalo propio T1 está terminado por otro intervalo propio T2, entonces el principio de T1 está antes que el principio de T2, y el final de T1 coincide con el final de T2.`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}intervalFinishes`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}ObjectProperty`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}intervalFinishes`),
      namedNode(`${rdfs}comment`),
      literal(`If a proper interval T1 is intervalFinishes another proper interval T2, then the beginning of T1 is after the beginning of T2, and the end of T1 is coincident with the end of T2.`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}intervalFinishes`),
      namedNode(`${rdfs}comment`),
      literal(`Si un intervalo propio T1 termina otro intervalo propio T2, entonces del principio de T1 está después del principio de T2, y el final de T1 coincide con el final de T2.`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}intervalFinishes`),
      namedNode(`${rdfs}domain`),
      namedNode(`${time}ProperInterval`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}intervalFinishes`),
      namedNode(`${rdfs}label`),
      literal(`interval finishes`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}intervalFinishes`),
      namedNode(`${rdfs}label`),
      literal(`intervalo termina`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}intervalFinishes`),
      namedNode(`${rdfs}range`),
      namedNode(`${time}ProperInterval`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}intervalFinishes`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${time}intervalIn`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}intervalFinishes`),
      namedNode(`${owl}inverseOf`),
      namedNode(`${time}intervalFinishedBy`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}intervalFinishes`),
      namedNode(`${skos}definition`),
      literal(`If a proper interval T1 is intervalFinishes another proper interval T2, then the beginning of T1 is after the beginning of T2, and the end of T1 is coincident with the end of T2.`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}intervalFinishes`),
      namedNode(`${skos}definition`),
      literal(`Si un intervalo propio T1 termina otro intervalo propio T2, entonces del principio de T1 está después del principio de T2, y el final de T1 coincide con el final de T2.`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}intervalIn`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}ObjectProperty`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}intervalIn`),
      namedNode(`${rdfs}comment`),
      literal(`If a proper interval T1 is intervalIn another proper interval T2, then the beginning of T1 is after the beginning of T2 or is coincident with the beginning of T2, and the end of T1 is before the end of T2, or is coincident with the end of T2, except that end of T1 may not be coincident with the end of T2 if the beginning of T1 is coincident with the beginning of T2.`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}intervalIn`),
      namedNode(`${rdfs}comment`),
      literal(`Si un intervalo propio T1 es un intervalo interior a otro intervalo propio T2, entonces el principio de T1 está después del principio de T2 o coincide con el principio de T2, y el final de T1 está antes que el final de T2, o coincide con el final de T2, excepto que el final de T1 puede no coincidir con el final de T2 si el principio de T1 coincide con el principio de T2.`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}intervalIn`),
      namedNode(`${rdfs}domain`),
      namedNode(`${time}ProperInterval`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}intervalIn`),
      namedNode(`${rdfs}label`),
      literal(`interval in`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}intervalIn`),
      namedNode(`${rdfs}label`),
      literal(`intervalo interior`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}intervalIn`),
      namedNode(`${rdfs}range`),
      namedNode(`${time}ProperInterval`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}intervalIn`),
      namedNode(`${owl}propertyDisjointWith`),
      namedNode(`${time}intervalEquals`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}intervalIn`),
      namedNode(`${skos}definition`),
      literal(`If a proper interval T1 is intervalIn another proper interval T2, then the beginning of T1 is after the beginning of T2 or is coincident with the beginning of T2, and the end of T1 is before the end of T2, or is coincident with the end of T2, except that end of T1 may not be coincident with the end of T2 if the beginning of T1 is coincident with the beginning of T2.`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}intervalIn`),
      namedNode(`${skos}definition`),
      literal(`Si un intervalo propio T1 es un intervalo interior a otro intervalo propio T2, entonces el principio de T1 está después del principio de T2 o coincide con el principio de T2, y el final de T1 está antes que el final de T2, o coincide con el final de T2, excepto que el final de T1 puede no coincidir con el final de T2 si el principio de T1 coincide con el principio de T2.`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}intervalIn`),
      namedNode(`${skos}note`),
      literal(`Esta relación entre intervalos no estaba incluida en las 13 relaciones básicas definidas por Allen (1984), pero se hace referencia a ella como "una relación importante" en Allen y Ferguson (1997). Es la unión disjunta de 'intervalo empieza', 'intervalo durante' y con 'intervalo termina'. Sin embargo, esto está fuera de la expresividad de OWL2, por tanto, se implementa como una propiedad explícita, con 'intervalo empieza', 'intervalo durante' e 'intervalo termina' como sub-propiedades.`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}intervalIn`),
      namedNode(`${skos}note`),
      literal(`This interval relation is not included in the 13 basic relationships defined in Allen (1984), but is referred to as 'an important relationship' in Allen and Ferguson (1997). It is the disjoint union of :intervalStarts v :intervalDuring v :intervalFinishes . However, that is outside OWL2 expressivity, so is implemented as an explicit property, with :intervalStarts , :intervalDuring , :intervalFinishes as sub-properties`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}intervalMeets`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}ObjectProperty`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}intervalMeets`),
      namedNode(`${rdfs}comment`),
      literal(`If a proper interval T1 is intervalMeets another proper interval T2, then the end of T1 is coincident with the beginning of T2.`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}intervalMeets`),
      namedNode(`${rdfs}comment`),
      literal(`Si un intervalo propio T1 se encuentra con otro intervalo propio T2, entonces el final de T1 coincide con el principio de T2.`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}intervalMeets`),
      namedNode(`${rdfs}domain`),
      namedNode(`${time}ProperInterval`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}intervalMeets`),
      namedNode(`${rdfs}label`),
      literal(`interval meets`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}intervalMeets`),
      namedNode(`${rdfs}label`),
      literal(`intervalo se encuentra`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}intervalMeets`),
      namedNode(`${rdfs}range`),
      namedNode(`${time}ProperInterval`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}intervalMeets`),
      namedNode(`${owl}inverseOf`),
      namedNode(`${time}intervalMetBy`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}intervalMeets`),
      namedNode(`${skos}definition`),
      literal(`If a proper interval T1 is intervalMeets another proper interval T2, then the end of T1 is coincident with the beginning of T2.`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}intervalMeets`),
      namedNode(`${skos}definition`),
      literal(`Si un intervalo propio T1 se encuentra con otro intervalo propio T2, entonces el final de T1 coincide con el principio de T2.`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}intervalMetBy`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}ObjectProperty`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}intervalMetBy`),
      namedNode(`${rdfs}comment`),
      literal(`If a proper interval T1 is intervalMetBy another proper interval T2, then the beginning of T1 is coincident with the end of T2.`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}intervalMetBy`),
      namedNode(`${rdfs}comment`),
      literal(`Si un intervalo propio T1 es 'intervalo encontrado por' otro intervalo propio T2, entonces el principio de T1 coincide con el final de T2.`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}intervalMetBy`),
      namedNode(`${rdfs}domain`),
      namedNode(`${time}ProperInterval`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}intervalMetBy`),
      namedNode(`${rdfs}label`),
      literal(`interval met by`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}intervalMetBy`),
      namedNode(`${rdfs}label`),
      literal(`intervalo encontrado por`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}intervalMetBy`),
      namedNode(`${rdfs}range`),
      namedNode(`${time}ProperInterval`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}intervalMetBy`),
      namedNode(`${owl}inverseOf`),
      namedNode(`${time}intervalMeets`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}intervalMetBy`),
      namedNode(`${skos}definition`),
      literal(`If a proper interval T1 is intervalMetBy another proper interval T2, then the beginning of T1 is coincident with the end of T2.`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}intervalMetBy`),
      namedNode(`${skos}definition`),
      literal(`Si un intervalo propio T1 es 'intervalo encontrado por' otro intervalo propio T2, entonces el principio de T1 coincide con el final de T2.`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}intervalOverlappedBy`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}ObjectProperty`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}intervalOverlappedBy`),
      namedNode(`${rdfs}comment`),
      literal(`If a proper interval T1 is intervalOverlappedBy another proper interval T2, then the beginning of T1 is after the beginning of T2, the beginning of T1 is before the end of T2, and the end of T1 is after the end of T2.`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}intervalOverlappedBy`),
      namedNode(`${rdfs}comment`),
      literal(`Si un intervalo propio T1 es 'intervalo solapado por' otro intervalo propio T2, entonces el principio de T1 es posterior al principio de T2, y el principio de T1 es anterior al final de T2, y el final de T1 es posterior al final de T2.`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}intervalOverlappedBy`),
      namedNode(`${rdfs}domain`),
      namedNode(`${time}ProperInterval`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}intervalOverlappedBy`),
      namedNode(`${rdfs}label`),
      literal(`interval overlapped by`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}intervalOverlappedBy`),
      namedNode(`${rdfs}label`),
      literal(`intervalo solapado por`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}intervalOverlappedBy`),
      namedNode(`${rdfs}range`),
      namedNode(`${time}ProperInterval`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}intervalOverlappedBy`),
      namedNode(`${owl}inverseOf`),
      namedNode(`${time}intervalOverlaps`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}intervalOverlappedBy`),
      namedNode(`${skos}definition`),
      literal(`If a proper interval T1 is intervalOverlappedBy another proper interval T2, then the beginning of T1 is after the beginning of T2, the beginning of T1 is before the end of T2, and the end of T1 is after the end of T2.`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}intervalOverlappedBy`),
      namedNode(`${skos}definition`),
      literal(`Si un intervalo propio T1 es 'intervalo solapado por' otro intervalo propio T2, entonces el principio de T1 es posterior al principio de T2, y el principio de T1 es anterior al final de T2, y el final de T1 es posterior al final de T2.`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}intervalOverlaps`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}ObjectProperty`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}intervalOverlaps`),
      namedNode(`${rdfs}comment`),
      literal(`Asume una dirección en el tiempo. Si una entidad temporal T1 está después de otra entidad temporal T2, entonces el principio de T1 está después del final de T2.`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}intervalOverlaps`),
      namedNode(`${rdfs}comment`),
      literal(`If a proper interval T1 is intervalOverlaps another proper interval T2, then the beginning of T1 is before the beginning of T2, the end of T1 is after the beginning of T2, and the end of T1 is before the end of T2.`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}intervalOverlaps`),
      namedNode(`${rdfs}comment`),
      literal(`Si un intervalo propio T1 se solapa con otro intervalo propio T2, entonces el principio de T1 es anterior al principio de T2, el final de T1 es posterior al principio de T2, y el final de T1 es anterior al final de T2.`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}intervalOverlaps`),
      namedNode(`${rdfs}domain`),
      namedNode(`${time}ProperInterval`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}intervalOverlaps`),
      namedNode(`${rdfs}label`),
      literal(`interval overlaps`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}intervalOverlaps`),
      namedNode(`${rdfs}label`),
      literal(`intervalo se solapa`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}intervalOverlaps`),
      namedNode(`${rdfs}range`),
      namedNode(`${time}ProperInterval`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}intervalOverlaps`),
      namedNode(`${owl}inverseOf`),
      namedNode(`${time}intervalOverlappedBy`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}intervalOverlaps`),
      namedNode(`${skos}definition`),
      literal(`If a proper interval T1 is intervalOverlaps another proper interval T2, then the beginning of T1 is before the beginning of T2, the end of T1 is after the beginning of T2, and the end of T1 is before the end of T2.`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}intervalOverlaps`),
      namedNode(`${skos}definition`),
      literal(`Si un intervalo propio T1 se solapa con otro intervalo propio T2, entonces el principio de T1 es anterior al principio de T2, el final de T1 es posterior al principio de T2, y el final de T1 es anterior al final de T2.`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}intervalStartedBy`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}ObjectProperty`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}intervalStartedBy`),
      namedNode(`${rdfs}comment`),
      literal(`If a proper interval T1 is intervalStarted another proper interval T2, then the beginning of T1 is coincident with the beginning of T2, and the end of T1 is after the end of T2.`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}intervalStartedBy`),
      namedNode(`${rdfs}comment`),
      literal(`Si un intervalo propio T1 es empezado por otro intervalo propio T2, entonces el principio de T1 coincide con el principio de T2, y el final de T1 es posterior al final de T2.`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}intervalStartedBy`),
      namedNode(`${rdfs}domain`),
      namedNode(`${time}ProperInterval`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}intervalStartedBy`),
      namedNode(`${rdfs}label`),
      literal(`interval started by`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}intervalStartedBy`),
      namedNode(`${rdfs}range`),
      namedNode(`${time}ProperInterval`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}intervalStartedBy`),
      namedNode(`${owl}inverseOf`),
      namedNode(`${time}intervalStarts`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}intervalStartedBy`),
      namedNode(`${skos}definition`),
      literal(`If a proper interval T1 is intervalStarted another proper interval T2, then the beginning of T1 is coincident with the beginning of T2, and the end of T1 is after the end of T2.`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}intervalStartedBy`),
      namedNode(`${skos}definition`),
      literal(`Si un intervalo propio T1 es empezado por otro intervalo propio T2, entonces el principio de T1 coincide con el principio de T2, y el final de T1 es posterior al final de T2.`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}intervalStarts`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}ObjectProperty`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}intervalStarts`),
      namedNode(`${rdfs}comment`),
      literal(`If a proper interval T1 is intervalStarts another proper interval T2, then the beginning of T1 is coincident with the beginning of T2, and the end of T1 is before the end of T2.`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}intervalStarts`),
      namedNode(`${rdfs}comment`),
      literal(`Si un intervalo propio T1 empieza otro intervalo propio T2, entonces del principio de T1 con el principio de T2, y el final de T1 es anterior al final de T2.`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}intervalStarts`),
      namedNode(`${rdfs}domain`),
      namedNode(`${time}ProperInterval`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}intervalStarts`),
      namedNode(`${rdfs}label`),
      literal(`interval starts`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}intervalStarts`),
      namedNode(`${rdfs}label`),
      literal(`intervalo empieza`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}intervalStarts`),
      namedNode(`${rdfs}range`),
      namedNode(`${time}ProperInterval`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}intervalStarts`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${time}intervalIn`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}intervalStarts`),
      namedNode(`${owl}inverseOf`),
      namedNode(`${time}intervalStartedBy`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}intervalStarts`),
      namedNode(`${skos}definition`),
      literal(`If a proper interval T1 is intervalStarts another proper interval T2, then the beginning of T1 is coincident with the beginning of T2, and the end of T1 is before the end of T2.`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}intervalStarts`),
      namedNode(`${skos}definition`),
      literal(`Si un intervalo propio T1 empieza otro intervalo propio T2, entonces del principio de T1 con el final de T2, y el final de T1 es anterior al final de T2.`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}minute`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}DatatypeProperty`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}minute`),
      namedNode(`${rdfs}comment`),
      literal(`Minute position in a calendar-clock system.`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}minute`),
      namedNode(`${rdfs}comment`),
      literal(`Posición de minuto en un sistema calendario-reloj.`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}minute`),
      namedNode(`${rdfs}domain`),
      namedNode(`${time}GeneralDateTimeDescription`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}minute`),
      namedNode(`${rdfs}label`),
      literal(`minute`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}minute`),
      namedNode(`${rdfs}label`),
      literal(`minuto`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}minute`),
      namedNode(`${rdfs}range`),
      namedNode(`${xsd}nonNegativeInteger`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}minute`),
      namedNode(`${skos}definition`),
      literal(`Minute position in a calendar-clock system.`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}minute`),
      namedNode(`${skos}definition`),
      literal(`Posición de minuto en un sistema calendario-reloj.`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}minutes`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}DatatypeProperty`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}minutes`),
      namedNode(`${rdfs}comment`),
      literal(`Longitud de, o elemento de la longitud de, una extensión temporal expresada en minutos.`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}minutes`),
      namedNode(`${rdfs}comment`),
      literal(`length, or element of, a temporal extent expressed in minutes`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}minutes`),
      namedNode(`${rdfs}domain`),
      namedNode(`${time}GeneralDurationDescription`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}minutes`),
      namedNode(`${rdfs}label`),
      literal(`minutes`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}minutes`),
      namedNode(`${rdfs}label`),
      literal(`minutos`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}minutes`),
      namedNode(`${rdfs}range`),
      namedNode(`${xsd}decimal`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}minutes`),
      namedNode(`${skos}definition`),
      literal(`Longitud de, o elemento de la longitud de, una extensión temporal expresada en minutos.`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}minutes`),
      namedNode(`${skos}definition`),
      literal(`length, or element of, a temporal extent expressed in minutes`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}month`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}DatatypeProperty`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}month`),
      namedNode(`${rdfs}comment`),
      literal(`Month position in a calendar-clock system.

The range of this property is not specified, so can be replaced by any specific representation of a calendar month from any calendar. `, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}month`),
      namedNode(`${rdfs}comment`),
      literal(`Posición de mes en un sistema calendario-reloj.
    El rango de esta propiedad no está especificado, por tanto, se puede reemplazar por cualquier representación específica de un mes de calendario de un calendario cualquiera.`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}month`),
      namedNode(`${rdfs}domain`),
      namedNode(`${time}GeneralDateTimeDescription`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}month`),
      namedNode(`${rdfs}label`),
      literal(`mes`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}month`),
      namedNode(`${rdfs}label`),
      literal(`month`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}month`),
      namedNode(`${skos}definition`),
      literal(`Month position in a calendar-clock system.

The range of this property is not specified, so can be replaced by any specific representation of a calendar month from any calendar. `, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}month`),
      namedNode(`${skos}definition`),
      literal(`Posición de mes en un sistema calendario-reloj.
            El rango de esta propiedad no está especificado, por tanto, se puede reemplazar por cualquier representación específica de un mes de calendario de un calendario cualquiera.`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}monthOfYear`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}ObjectProperty`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}monthOfYear`),
      namedNode(`${rdfs}comment`),
      literal(`El mes del año, cuyo valor es un miembro de la clase 'mes del año'.`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}monthOfYear`),
      namedNode(`${rdfs}comment`),
      literal(`The month of the year, whose value is a member of the class time:MonthOfYear`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}monthOfYear`),
      namedNode(`${rdfs}domain`),
      namedNode(`${time}GeneralDateTimeDescription`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}monthOfYear`),
      namedNode(`${rdfs}label`),
      literal(`mes del año`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}monthOfYear`),
      namedNode(`${rdfs}label`),
      literal(`month of year`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}monthOfYear`),
      namedNode(`${rdfs}range`),
      namedNode(`${time}MonthOfYear`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}monthOfYear`),
      namedNode(`${skos}definition`),
      literal(`El mes del año, cuyo valor es un miembro de la clase 'mes del año'.`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}monthOfYear`),
      namedNode(`${skos}definition`),
      literal(`The month of the year, whose value is a member of the class time:MonthOfYear`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}monthOfYear`),
      namedNode(`${skos}editorialNote`),
      literal(`Característica arriesgada - añadida en la revisión de 2017, y todavía no ampliamente utilizada.`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}monthOfYear`),
      namedNode(`${skos}editorialNote`),
      literal(`Feature at risk - added in 2017 revision, and not yet widely used. `, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}months`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}DatatypeProperty`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}months`),
      namedNode(`${rdfs}comment`),
      literal(`Longitud de, o elemento de la longitud de, una extensión temporal expresada en meses.`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}months`),
      namedNode(`${rdfs}comment`),
      literal(`length of, or element of the length of, a temporal extent expressed in months`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}months`),
      namedNode(`${rdfs}domain`),
      namedNode(`${time}GeneralDurationDescription`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}months`),
      namedNode(`${rdfs}label`),
      literal(`duración en meses`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}months`),
      namedNode(`${rdfs}label`),
      literal(`months duration`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}months`),
      namedNode(`${rdfs}range`),
      namedNode(`${xsd}decimal`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}months`),
      namedNode(`${skos}definition`),
      literal(`Longitud de, o elemento de la longitud de, una extensión temporal expresada en meses.`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}months`),
      namedNode(`${skos}definition`),
      literal(`length of, or element of the length of, a temporal extent expressed in months`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}nominalPosition`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}DatatypeProperty`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}nominalPosition`),
      namedNode(`${rdfs}comment`),
      literal(`El valor (nominal) que indica posición temporal en un sistema de referencia ordinal.`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}nominalPosition`),
      namedNode(`${rdfs}comment`),
      literal(`The (nominal) value indicating temporal position in an ordinal reference system `, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}nominalPosition`),
      namedNode(`${rdfs}domain`),
      namedNode(`${time}TimePosition`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}nominalPosition`),
      namedNode(`${rdfs}label`),
      literal(`Name of temporal position`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}nominalPosition`),
      namedNode(`${rdfs}label`),
      literal(`nombre de posición temporal`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}nominalPosition`),
      namedNode(`${rdfs}range`),
      namedNode(`${xsd}string`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}nominalPosition`),
      namedNode(`${skos}definition`),
      literal(`El valor (nominal) que indica posición temporal en un sistema de referencia ordinal.`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}nominalPosition`),
      namedNode(`${skos}definition`),
      literal(`The (nominal) value indicating temporal position in an ordinal reference system `, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}numericDuration`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}DatatypeProperty`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}numericDuration`),
      namedNode(`${rdfs}comment`),
      literal(`Valor de una extensión temporal expresada como un número decimal escalado por una unidad de tiempo.`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}numericDuration`),
      namedNode(`${rdfs}comment`),
      literal(`Value of a temporal extent expressed as a decimal number scaled by a temporal unit`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}numericDuration`),
      namedNode(`${rdfs}domain`),
      namedNode(`${time}Duration`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}numericDuration`),
      namedNode(`${rdfs}label`),
      literal(`Numeric value of temporal duration`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}numericDuration`),
      namedNode(`${rdfs}label`),
      literal(`valor numérico de duración temporal`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}numericDuration`),
      namedNode(`${rdfs}range`),
      namedNode(`${xsd}decimal`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}numericDuration`),
      namedNode(`${skos}definition`),
      literal(`Valor de una extensión temporal expresada como un número decimal escalado por una unidad de tiempo.`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}numericDuration`),
      namedNode(`${skos}definition`),
      literal(`Value of a temporal extent expressed as a decimal number scaled by a temporal unit`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}numericPosition`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}DatatypeProperty`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}numericPosition`),
      namedNode(`${rdfs}comment`),
      literal(`El valor (numérico) que indica posición temporal en un sistema de referencia ordinal.`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}numericPosition`),
      namedNode(`${rdfs}comment`),
      literal(`The (numeric) value indicating position within a temporal coordinate system `, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}numericPosition`),
      namedNode(`${rdfs}domain`),
      namedNode(`${time}TimePosition`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}numericPosition`),
      namedNode(`${rdfs}label`),
      literal(`Numeric value of temporal position`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}numericPosition`),
      namedNode(`${rdfs}label`),
      literal(`valor numérico de posición temporal`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}numericPosition`),
      namedNode(`${rdfs}range`),
      namedNode(`${xsd}decimal`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}numericPosition`),
      namedNode(`${skos}definition`),
      literal(`El valor (numérico) que indica posición temporal en un sistema de referencia ordinal.`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}numericPosition`),
      namedNode(`${skos}definition`),
      literal(`The (numeric) value indicating position within a temporal coordinate system `, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}second`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}DatatypeProperty`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}second`),
      namedNode(`${rdfs}comment`),
      literal(`Posición de segundo en un sistema calendario-reloj.`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}second`),
      namedNode(`${rdfs}comment`),
      literal(`Second position in a calendar-clock system.`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}second`),
      namedNode(`${rdfs}domain`),
      namedNode(`${time}GeneralDateTimeDescription`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}second`),
      namedNode(`${rdfs}label`),
      literal(`second`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}second`),
      namedNode(`${rdfs}label`),
      literal(`segundo`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}second`),
      namedNode(`${rdfs}range`),
      namedNode(`${xsd}decimal`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}seconds`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}DatatypeProperty`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}seconds`),
      namedNode(`${rdfs}comment`),
      literal(`Longitud de, o elemento de la longitud de, una extensión temporal expresada en segundos.`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}seconds`),
      namedNode(`${rdfs}comment`),
      literal(`length of, or element of the length of, a temporal extent expressed in seconds`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}seconds`),
      namedNode(`${rdfs}domain`),
      namedNode(`${time}GeneralDurationDescription`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}seconds`),
      namedNode(`${rdfs}label`),
      literal(`duración en segundos`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}seconds`),
      namedNode(`${rdfs}label`),
      literal(`seconds duration`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}seconds`),
      namedNode(`${rdfs}range`),
      namedNode(`${xsd}decimal`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}seconds`),
      namedNode(`${rdfs}seeAlso`),
      namedNode(`${ns7}second.html`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}timeZone`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}ObjectProperty`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}timeZone`),
      namedNode(`${rdfs}comment`),
      literal(`The time zone for clock elements in the temporal position`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}timeZone`),
      namedNode(`${rdfs}domain`),
      namedNode(`${time}GeneralDateTimeDescription`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}timeZone`),
      namedNode(`${rdfs}label`),
      literal(`en huso horario`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}timeZone`),
      namedNode(`${rdfs}label`),
      literal(`in time zone`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}timeZone`),
      namedNode(`${rdfs}range`),
      namedNode(`${time}TimeZone`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}timeZone`),
      namedNode(`${skos}historyNote`),
      literal(`En la versión original de OWL-Time de 2006, el rango de 'en huso horario' se definió en un espacio de nombres diferente "http://www.w3.org/2006/timezone#".
            Un axioma de alineación permite que los datos codificados de acuerdo con la versión anterior sean consistentes con la ontología actualizada.`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}timeZone`),
      namedNode(`${skos}historyNote`),
      literal(`In the original 2006 version of OWL-Time, the range of time:timeZone was a TimeZone class in a separate namespace "http://www.w3.org/2006/timezone#". 
An alignment axiom 
	tzont:TimeZone rdfs:subClassOf time:TimeZone . 
allows data encoded according to the previous version to be consistent with the updated ontology. `),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}timeZone`),
      namedNode(`${skos}note`),
      literal(`IANA maintains a database of timezones. These are well maintained and generally considered authoritative, but individual items are not available at individual URIs, so cannot be used directly in data expressed using OWL-Time.

DBPedia provides a set of resources corresponding to the IANA timezones, with a URI for each (e.g. http://dbpedia.org/resource/Australia/Eucla). The World Clock service also provides a list of time zones with the description of each available as an individual webpage with a convenient individual URI (e.g. https://www.timeanddate.com/time/zones/acwst). These or other, similar, resources might be used as a value of the time:timeZone property.`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}timeZone`),
      namedNode(`${skos}note`),
      literal(`IANA mantiene una base de datos de husos horarios. Éstas están bien mantenidas y generalmente se consideran autorizadas, pero los ítems individuales no están disponibles en URIs individuales, por tanto, no se pueden utilizar directamente en datos expresados utilizando OWL-Time.
            La BDPedia proporciona un conjunto de recursos correspondientes a los husos horarios de IANA, con una URI para cada uno (por ejemplo, http://dbpedia.org/resource/Australia/Eucla). El Servicio de Reloj Mundial también proporciona una lista de husos horarios con la descripción de cada uno de los disponibles como una página Web individual con una URI adecuada individual (por ejemplo, https://www.timeanddate.com/time/zones/acwst). Éstos, y otros recursos similares, se puden usar como un valor de la propiedad 'huso horario'.`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}unitDay`),
      namedNode(`${rdf}type`),
      namedNode(`${time}TemporalUnit`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}unitDay`),
      namedNode(`${rdfs}label`),
      literal(`Day (unit of temporal duration)`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}unitDay`),
      namedNode(`${skos}prefLabel`),
      literal(`Tag`, 'de'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}unitDay`),
      namedNode(`${skos}prefLabel`),
      literal(`dag`, 'nl'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}unitDay`),
      namedNode(`${skos}prefLabel`),
      literal(`day`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}unitDay`),
      namedNode(`${skos}prefLabel`),
      literal(`dia`, 'pt'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}unitDay`),
      namedNode(`${skos}prefLabel`),
      literal(`doba`, 'pl'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}unitDay`),
      namedNode(`${skos}prefLabel`),
      literal(`día`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}unitDay`),
      namedNode(`${skos}prefLabel`),
      literal(`giorno`, 'it'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}unitDay`),
      namedNode(`${skos}prefLabel`),
      literal(`jour`, 'fr'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}unitDay`),
      namedNode(`${skos}prefLabel`),
      literal(`يوماً ما`, 'ar'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}unitDay`),
      namedNode(`${skos}prefLabel`),
      literal(`ある日`, 'jp'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}unitDay`),
      namedNode(`${skos}prefLabel`),
      literal(`一天`, 'zh'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}unitDay`),
      namedNode(`${skos}prefLabel`),
      literal(`언젠가`, 'kr'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}unitDay`),
      namedNode(`${time}days`),
      literal(`1`, namedNode(`${xsd}decimal`)),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}unitDay`),
      namedNode(`${time}hours`),
      literal(`0`, namedNode(`${xsd}decimal`)),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}unitDay`),
      namedNode(`${time}minutes`),
      literal(`0`, namedNode(`${xsd}decimal`)),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}unitDay`),
      namedNode(`${time}months`),
      literal(`0`, namedNode(`${xsd}decimal`)),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}unitDay`),
      namedNode(`${time}seconds`),
      literal(`0`, namedNode(`${xsd}decimal`)),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}unitDay`),
      namedNode(`${time}weeks`),
      literal(`0`, namedNode(`${xsd}decimal`)),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}unitDay`),
      namedNode(`${time}years`),
      literal(`0`, namedNode(`${xsd}decimal`)),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}unitHour`),
      namedNode(`${rdf}type`),
      namedNode(`${time}TemporalUnit`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}unitHour`),
      namedNode(`${rdfs}label`),
      literal(`Hour (unit of temporal duration)`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}unitHour`),
      namedNode(`${skos}prefLabel`),
      literal(`Stunde`, 'de'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}unitHour`),
      namedNode(`${skos}prefLabel`),
      literal(`godzina`, 'pl'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}unitHour`),
      namedNode(`${skos}prefLabel`),
      literal(`heure`, 'fr'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}unitHour`),
      namedNode(`${skos}prefLabel`),
      literal(`hora`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}unitHour`),
      namedNode(`${skos}prefLabel`),
      literal(`hora`, 'pt'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}unitHour`),
      namedNode(`${skos}prefLabel`),
      literal(`hour`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}unitHour`),
      namedNode(`${skos}prefLabel`),
      literal(`ora`, 'it'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}unitHour`),
      namedNode(`${skos}prefLabel`),
      literal(`uur`, 'nl'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}unitHour`),
      namedNode(`${skos}prefLabel`),
      literal(`один час"@ru`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}unitHour`),
      namedNode(`${skos}prefLabel`),
      literal(`ساعة واحدة`, 'ar'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}unitHour`),
      namedNode(`${skos}prefLabel`),
      literal(`一小時`, 'zh'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}unitHour`),
      namedNode(`${skos}prefLabel`),
      literal(`一時間`, 'jp'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}unitHour`),
      namedNode(`${skos}prefLabel`),
      literal(`한 시간`, 'kr'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}unitHour`),
      namedNode(`${time}days`),
      literal(`0`, namedNode(`${xsd}decimal`)),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}unitHour`),
      namedNode(`${time}hours`),
      literal(`1`, namedNode(`${xsd}decimal`)),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}unitHour`),
      namedNode(`${time}minutes`),
      literal(`0`, namedNode(`${xsd}decimal`)),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}unitHour`),
      namedNode(`${time}months`),
      literal(`0`, namedNode(`${xsd}decimal`)),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}unitHour`),
      namedNode(`${time}seconds`),
      literal(`0`, namedNode(`${xsd}decimal`)),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}unitHour`),
      namedNode(`${time}weeks`),
      literal(`0`, namedNode(`${xsd}decimal`)),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}unitHour`),
      namedNode(`${time}years`),
      literal(`0`, namedNode(`${xsd}decimal`)),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}unitMinute`),
      namedNode(`${rdf}type`),
      namedNode(`${time}TemporalUnit`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}unitMinute`),
      namedNode(`${rdfs}label`),
      literal(`Minute (unit of temporal duration)`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}unitMinute`),
      namedNode(`${skos}prefLabel`),
      literal(`Minute`, 'de'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}unitMinute`),
      namedNode(`${skos}prefLabel`),
      literal(`minuta`, 'pl'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}unitMinute`),
      namedNode(`${skos}prefLabel`),
      literal(`minute`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}unitMinute`),
      namedNode(`${skos}prefLabel`),
      literal(`minute`, 'fr'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}unitMinute`),
      namedNode(`${skos}prefLabel`),
      literal(`minuto`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}unitMinute`),
      namedNode(`${skos}prefLabel`),
      literal(`minuto`, 'it'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}unitMinute`),
      namedNode(`${skos}prefLabel`),
      literal(`minuto`, 'pt'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}unitMinute`),
      namedNode(`${skos}prefLabel`),
      literal(`minuut`, 'nl'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}unitMinute`),
      namedNode(`${skos}prefLabel`),
      literal(`одна минута`, 'ru'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}unitMinute`),
      namedNode(`${skos}prefLabel`),
      literal(`دقيقة واحدة`, 'ar'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}unitMinute`),
      namedNode(`${skos}prefLabel`),
      literal(`一分`, 'jp'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}unitMinute`),
      namedNode(`${skos}prefLabel`),
      literal(`等一下`, 'zh'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}unitMinute`),
      namedNode(`${skos}prefLabel`),
      literal(`분`, 'kr'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}unitMinute`),
      namedNode(`${time}days`),
      literal(`0`, namedNode(`${xsd}decimal`)),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}unitMinute`),
      namedNode(`${time}hours`),
      literal(`0`, namedNode(`${xsd}decimal`)),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}unitMinute`),
      namedNode(`${time}minutes`),
      literal(`1`, namedNode(`${xsd}decimal`)),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}unitMinute`),
      namedNode(`${time}months`),
      literal(`0`, namedNode(`${xsd}decimal`)),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}unitMinute`),
      namedNode(`${time}seconds`),
      literal(`0`, namedNode(`${xsd}decimal`)),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}unitMinute`),
      namedNode(`${time}weeks`),
      literal(`0`, namedNode(`${xsd}decimal`)),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}unitMinute`),
      namedNode(`${time}years`),
      literal(`0`, namedNode(`${xsd}decimal`)),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}unitMonth`),
      namedNode(`${rdf}type`),
      namedNode(`${time}TemporalUnit`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}unitMonth`),
      namedNode(`${rdfs}label`),
      literal(`Month (unit of temporal duration)`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}unitMonth`),
      namedNode(`${skos}prefLabel`),
      literal(`Monat`, 'de'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}unitMonth`),
      namedNode(`${skos}prefLabel`),
      literal(`maand`, 'nl'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}unitMonth`),
      namedNode(`${skos}prefLabel`),
      literal(`mes`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}unitMonth`),
      namedNode(`${skos}prefLabel`),
      literal(`mese`, 'it'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}unitMonth`),
      namedNode(`${skos}prefLabel`),
      literal(`miesiąc`, 'pl'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}unitMonth`),
      namedNode(`${skos}prefLabel`),
      literal(`mois`, 'fr'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}unitMonth`),
      namedNode(`${skos}prefLabel`),
      literal(`month`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}unitMonth`),
      namedNode(`${skos}prefLabel`),
      literal(`один месяц`, 'ru'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}unitMonth`),
      namedNode(`${skos}prefLabel`),
      literal(`شهر واحد`, 'ar'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}unitMonth`),
      namedNode(`${skos}prefLabel`),
      literal(`一か月`, 'jp'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}unitMonth`),
      namedNode(`${skos}prefLabel`),
      literal(`一個月`, 'zh'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}unitMonth`),
      namedNode(`${skos}prefLabel`),
      literal(`한달`, 'kr'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}unitMonth`),
      namedNode(`${time}days`),
      literal(`0`, namedNode(`${xsd}decimal`)),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}unitMonth`),
      namedNode(`${time}hours`),
      literal(`0`, namedNode(`${xsd}decimal`)),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}unitMonth`),
      namedNode(`${time}minutes`),
      literal(`0`, namedNode(`${xsd}decimal`)),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}unitMonth`),
      namedNode(`${time}months`),
      literal(`1`, namedNode(`${xsd}decimal`)),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}unitMonth`),
      namedNode(`${time}seconds`),
      literal(`0`, namedNode(`${xsd}decimal`)),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}unitMonth`),
      namedNode(`${time}weeks`),
      literal(`0`, namedNode(`${xsd}decimal`)),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}unitMonth`),
      namedNode(`${time}years`),
      literal(`0`, namedNode(`${xsd}decimal`)),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}unitSecond`),
      namedNode(`${rdf}type`),
      namedNode(`${time}TemporalUnit`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}unitSecond`),
      namedNode(`${rdfs}label`),
      literal(`Second (unit of temporal duration)`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}unitSecond`),
      namedNode(`${skos}prefLabel`),
      literal(`Sekunde`, 'de'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}unitSecond`),
      namedNode(`${skos}prefLabel`),
      literal(`Sekundę`, 'pl'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}unitSecond`),
      namedNode(`${skos}prefLabel`),
      literal(`second`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}unitSecond`),
      namedNode(`${skos}prefLabel`),
      literal(`seconde`, 'fr'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}unitSecond`),
      namedNode(`${skos}prefLabel`),
      literal(`seconde`, 'nl'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}unitSecond`),
      namedNode(`${skos}prefLabel`),
      literal(`secondo`, 'it'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}unitSecond`),
      namedNode(`${skos}prefLabel`),
      literal(`segundo`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}unitSecond`),
      namedNode(`${skos}prefLabel`),
      literal(`segundo`, 'pt'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}unitSecond`),
      namedNode(`${skos}prefLabel`),
      literal(`ثانية واحدة`, 'ar'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}unitSecond`),
      namedNode(`${skos}prefLabel`),
      literal(`一秒`, 'jp'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}unitSecond`),
      namedNode(`${skos}prefLabel`),
      literal(`一秒`, 'zh'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}unitSecond`),
      namedNode(`${skos}prefLabel`),
      literal(`일초`, 'kr'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}unitSecond`),
      namedNode(`${time}days`),
      literal(`0`, namedNode(`${xsd}decimal`)),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}unitSecond`),
      namedNode(`${time}hours`),
      literal(`0`, namedNode(`${xsd}decimal`)),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}unitSecond`),
      namedNode(`${time}minutes`),
      literal(`0`, namedNode(`${xsd}decimal`)),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}unitSecond`),
      namedNode(`${time}months`),
      literal(`0`, namedNode(`${xsd}decimal`)),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}unitSecond`),
      namedNode(`${time}seconds`),
      literal(`1`, namedNode(`${xsd}decimal`)),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}unitSecond`),
      namedNode(`${time}weeks`),
      literal(`0`, namedNode(`${xsd}decimal`)),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}unitSecond`),
      namedNode(`${time}years`),
      literal(`0`, namedNode(`${xsd}decimal`)),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}unitType`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}ObjectProperty`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}unitType`),
      namedNode(`${rdfs}comment`),
      literal(`La unidad de tiempo que proporciona la precisión de un valor fecha-hora o la escala de una extensión temporal.`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}unitType`),
      namedNode(`${rdfs}comment`),
      literal(`The temporal unit which provides the precision of a date-time value or scale of a temporal extent`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}unitType`),
      namedNode(`${rdfs}domain`),
      blankNodes[58],
      namedNode(time)
    ),
    quad(
      namedNode(`${time}unitType`),
      namedNode(`${rdfs}label`),
      literal(`temporal unit type`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}unitType`),
      namedNode(`${rdfs}label`),
      literal(`tipo de unidad temporal`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}unitType`),
      namedNode(`${rdfs}range`),
      namedNode(`${time}TemporalUnit`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}unitWeek`),
      namedNode(`${rdf}type`),
      namedNode(`${time}TemporalUnit`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}unitWeek`),
      namedNode(`${rdfs}label`),
      literal(`Week (unit of temporal duration)`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}unitWeek`),
      namedNode(`${skos}prefLabel`),
      literal(`Woche`, 'de'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}unitWeek`),
      namedNode(`${skos}prefLabel`),
      literal(`semaine`, 'fr'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}unitWeek`),
      namedNode(`${skos}prefLabel`),
      literal(`semana`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}unitWeek`),
      namedNode(`${skos}prefLabel`),
      literal(`semana`, 'pt'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}unitWeek`),
      namedNode(`${skos}prefLabel`),
      literal(`settimana`, 'it'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}unitWeek`),
      namedNode(`${skos}prefLabel`),
      literal(`tydzień`, 'pl'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}unitWeek`),
      namedNode(`${skos}prefLabel`),
      literal(`week`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}unitWeek`),
      namedNode(`${skos}prefLabel`),
      literal(`week`, 'nl'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}unitWeek`),
      namedNode(`${skos}prefLabel`),
      literal(`одна неделя`, 'ru'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}unitWeek`),
      namedNode(`${skos}prefLabel`),
      literal(`سبوع واحد`, 'ar'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}unitWeek`),
      namedNode(`${skos}prefLabel`),
      literal(`一周`, 'zh'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}unitWeek`),
      namedNode(`${skos}prefLabel`),
      literal(`一週間`, 'jp'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}unitWeek`),
      namedNode(`${skos}prefLabel`),
      literal(`일주일`, 'kr'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}unitWeek`),
      namedNode(`${time}days`),
      literal(`0`, namedNode(`${xsd}decimal`)),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}unitWeek`),
      namedNode(`${time}hours`),
      literal(`0`, namedNode(`${xsd}decimal`)),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}unitWeek`),
      namedNode(`${time}minutes`),
      literal(`0`, namedNode(`${xsd}decimal`)),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}unitWeek`),
      namedNode(`${time}months`),
      literal(`0`, namedNode(`${xsd}decimal`)),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}unitWeek`),
      namedNode(`${time}seconds`),
      literal(`0`, namedNode(`${xsd}decimal`)),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}unitWeek`),
      namedNode(`${time}weeks`),
      literal(`1`, namedNode(`${xsd}decimal`)),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}unitWeek`),
      namedNode(`${time}years`),
      literal(`0`, namedNode(`${xsd}decimal`)),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}unitYear`),
      namedNode(`${rdf}type`),
      namedNode(`${time}TemporalUnit`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}unitYear`),
      namedNode(`${rdfs}label`),
      literal(`Year (unit of temporal duration)`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}unitYear`),
      namedNode(`${skos}prefLabel`),
      literal(`1 년`, 'kr'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}unitYear`),
      namedNode(`${skos}prefLabel`),
      literal(`1年`, 'jp'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}unitYear`),
      namedNode(`${skos}prefLabel`),
      literal(`Jahr`, 'de'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}unitYear`),
      namedNode(`${skos}prefLabel`),
      literal(`an`, 'fr'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}unitYear`),
      namedNode(`${skos}prefLabel`),
      literal(`anno`, 'it'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}unitYear`),
      namedNode(`${skos}prefLabel`),
      literal(`ano`, 'pt'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}unitYear`),
      namedNode(`${skos}prefLabel`),
      literal(`jaar`, 'nl'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}unitYear`),
      namedNode(`${skos}prefLabel`),
      literal(`rok`, 'pl'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}unitYear`),
      namedNode(`${skos}prefLabel`),
      literal(`un año`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}unitYear`),
      namedNode(`${skos}prefLabel`),
      literal(`year`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}unitYear`),
      namedNode(`${skos}prefLabel`),
      literal(`один год`, 'ru'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}unitYear`),
      namedNode(`${skos}prefLabel`),
      literal(`سنة واحدة`, 'ar'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}unitYear`),
      namedNode(`${skos}prefLabel`),
      literal(`一年`, 'zh'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}unitYear`),
      namedNode(`${time}days`),
      literal(`0`, namedNode(`${xsd}decimal`)),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}unitYear`),
      namedNode(`${time}hours`),
      literal(`0`, namedNode(`${xsd}decimal`)),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}unitYear`),
      namedNode(`${time}minutes`),
      literal(`0`, namedNode(`${xsd}decimal`)),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}unitYear`),
      namedNode(`${time}months`),
      literal(`0`, namedNode(`${xsd}decimal`)),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}unitYear`),
      namedNode(`${time}seconds`),
      literal(`0`, namedNode(`${xsd}decimal`)),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}unitYear`),
      namedNode(`${time}weeks`),
      literal(`0`, namedNode(`${xsd}decimal`)),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}unitYear`),
      namedNode(`${time}years`),
      literal(`1`, namedNode(`${xsd}decimal`)),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}week`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}DatatypeProperty`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}week`),
      namedNode(`${rdfs}comment`),
      literal(`Número de semana en el año.`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}week`),
      namedNode(`${rdfs}comment`),
      literal(`Week number within the year.`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}week`),
      namedNode(`${rdfs}domain`),
      namedNode(`${time}GeneralDateTimeDescription`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}week`),
      namedNode(`${rdfs}label`),
      literal(`semana`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}week`),
      namedNode(`${rdfs}label`),
      literal(`week`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}week`),
      namedNode(`${rdfs}range`),
      namedNode(`${xsd}nonNegativeInteger`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}week`),
      namedNode(`${skos}note`),
      literal(`Weeks are numbered differently depending on the calendar in use and the local language or cultural conventions (locale). ISO-8601 specifies that the first week of the year includes at least four days, and that Monday is the first day of the week. In that system, week 1 is the week that contains the first Thursday in the year.`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}week`),
      namedNode(`${skos}scopeNote`),
      literal(`Las semanas están numeradas de forma diferente dependiendo del calendario en uso y de las convenciones lingüísticas y culturales locales (locale en inglés). El ISO-8601 especifica que la primera semana del año incluye al menos cuatro días, y que el lunes es el primer día de la semana. En ese sistema, la semana 1 es la semana que contiene el primer jueves del año.`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}weeks`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}DatatypeProperty`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}weeks`),
      namedNode(`${rdfs}comment`),
      literal(`Longitud de, o elemento de la longitud de, una extensión temporal expresada en semanas.`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}weeks`),
      namedNode(`${rdfs}comment`),
      literal(`length of, or element of the length of, a temporal extent expressed in weeks`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}weeks`),
      namedNode(`${rdfs}domain`),
      namedNode(`${time}GeneralDurationDescription`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}weeks`),
      namedNode(`${rdfs}label`),
      literal(`duración en semanas`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}weeks`),
      namedNode(`${rdfs}label`),
      literal(`weeks duration`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}weeks`),
      namedNode(`${rdfs}range`),
      namedNode(`${xsd}decimal`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}xsdDateTime`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}DatatypeProperty`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}xsdDateTime`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}DeprecatedProperty`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}xsdDateTime`),
      namedNode(`${rdfs}comment`),
      literal(`Valor de 'intervalo de fecha-hora' expresado como un valor compacto.`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}xsdDateTime`),
      namedNode(`${rdfs}comment`),
      literal(`Value of DateTimeInterval expressed as a compact value.`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}xsdDateTime`),
      namedNode(`${rdfs}domain`),
      namedNode(`${time}DateTimeInterval`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}xsdDateTime`),
      namedNode(`${rdfs}label`),
      literal(`has XSD date-time`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}xsdDateTime`),
      namedNode(`${rdfs}label`),
      literal(`tiene fecha-hora XSD`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}xsdDateTime`),
      namedNode(`${rdfs}range`),
      namedNode(`${xsd}dateTime`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}xsdDateTime`),
      namedNode(`${owl}deprecated`),
      literal(`true`, namedNode(`${xsd}boolean`)),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}xsdDateTime`),
      namedNode(`${skos}note`),
      literal(`Using xsd:dateTime in this place means that the duration of the interval is implicit: it corresponds to the length of the smallest non-zero element of the date-time literal. However, this rule cannot be used for intervals whose duration is more than one rank smaller than the starting time - e.g. the first minute or second of a day, the first hour of a month, or the first day of a year. In these cases the desired interval cannot be distinguished from the interval corresponding to the next rank up. Because of this essential ambiguity, use of this property is not recommended and it is deprecated.`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}xsdDateTime`),
      namedNode(`${skos}note`),
      literal(`Utilizando xsd:dateTime en este lugar significa que la duración del intervalo está implícita: se corresponde con la longitud del elemento más pequeño distinto de cero del literal fecha-hora. Sin embargo, esta regla no se puede utilizar para intervalos cuya duración es mayor que un rango más pequeño que el tiempo de comienzo - p.ej. el primer minuto o segundo del día, la primera hora del mes, o el primer día del año. En estos casos el intervalo deseado no se puede distinguir del intervalo correspondiente al próximo rango más alto. Debido a esta ambigüedad esencial, no se recomienda el uso de esta propiedad y está desaprobada.`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}year`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}DatatypeProperty`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}year`),
      namedNode(`${rdfs}comment`),
      literal(`Posición de año en un sistema calendario-reloj.

l rango de esta propiedad no está especificado, por tanto, se puede reemplazar por cualquier representación específica de un año de calendario de un calendario cualquiera.`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}year`),
      namedNode(`${rdfs}comment`),
      literal(`Year position in a calendar-clock system.

The range of this property is not specified, so can be replaced by any specific representation of a calendar year from any calendar. `, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}year`),
      namedNode(`${rdfs}domain`),
      namedNode(`${time}GeneralDateTimeDescription`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}year`),
      namedNode(`${rdfs}label`),
      literal(`year`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}years`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}DatatypeProperty`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}years`),
      namedNode(`${rdfs}comment`),
      literal(`Longitud de, o elemento de la longitud de, una extensión temporal expresada en años.`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}years`),
      namedNode(`${rdfs}comment`),
      literal(`length of, or element of the length of, a temporal extent expressed in years`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}years`),
      namedNode(`${rdfs}domain`),
      namedNode(`${time}GeneralDurationDescription`),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}years`),
      namedNode(`${rdfs}label`),
      literal(`duración en años`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}years`),
      namedNode(`${rdfs}label`),
      literal(`years duration`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${time}years`),
      namedNode(`${rdfs}range`),
      namedNode(`${xsd}decimal`),
      namedNode(time)
    ),
    quad(
      namedNode(`${ns8}time`),
      namedNode(`${dcterms}contributor`),
      namedNode(`${ns10}0000-0001-8269-8171`),
      namedNode(time)
    ),
    quad(
      namedNode(`${ns8}time`),
      namedNode(`${dcterms}contributor`),
      namedNode('mailto:chris.little@metoffice.gov.uk'),
      namedNode(time)
    ),
    quad(
      namedNode(`${ns8}time`),
      namedNode(`${dcterms}created`),
      literal(`2006-09-27`, namedNode(`${xsd}date`)),
      namedNode(time)
    ),
    quad(
      namedNode(`${ns8}time`),
      namedNode(`${dcterms}creator`),
      namedNode(`${ns11}0000-0002-3884-3420`),
      namedNode(time)
    ),
    quad(
      namedNode(`${ns8}time`),
      namedNode(`${dcterms}creator`),
      namedNode(`${ns12}Jerry_Hobbs`),
      namedNode(time)
    ),
    quad(
      namedNode(`${ns8}time`),
      namedNode(`${dcterms}creator`),
      namedNode('mailto:panfeng66@gmail.com'),
      namedNode(time)
    ),
    quad(
      namedNode(`${ns8}time`),
      namedNode(`${dcterms}isVersionOf`),
      namedNode(`${ns13}owl-time`),
      namedNode(time)
    ),
    quad(
      namedNode(`${ns8}time`),
      namedNode(`${dcterms}license`),
      namedNode(ns14),
      namedNode(time)
    ),
    quad(
      namedNode(`${ns8}time`),
      namedNode(`${dcterms}modified`),
      literal(`2017-04-06`, namedNode(`${xsd}date`)),
      namedNode(time)
    ),
    quad(
      namedNode(`${ns8}time`),
      namedNode(`${dcterms}rights`),
      literal(`Copyright © 2006-2017 W3C, OGC. W3C and OGC liability, trademark and document use rules apply.`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${ns8}time`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}Ontology`),
      namedNode(time)
    ),
    quad(
      namedNode(`${ns8}time`),
      namedNode(`${rdfs}label`),
      literal(`OWL-Time`, 'en'),
      namedNode(time)
    ),
    quad(
      namedNode(`${ns8}time`),
      namedNode(`${rdfs}label`),
      literal(`Tiempo en OWL`, 'es'),
      namedNode(time)
    ),
    quad(
      namedNode(`${ns8}time`),
      namedNode(`${rdfs}seeAlso`),
      namedNode(`${ns15}SW-150187`),
      namedNode(time)
    ),
    quad(
      namedNode(`${ns8}time`),
      namedNode(`${rdfs}seeAlso`),
      namedNode(`${ns16}time-ontology-extended-non-gregorian-calendar-applications`),
      namedNode(time)
    ),
    quad(
      namedNode(`${ns8}time`),
      namedNode(`${rdfs}seeAlso`),
      namedNode(`${ns13}owl-time`),
      namedNode(time)
    ),
    quad(
      namedNode(`${ns8}time`),
      namedNode(`${owl}priorVersion`),
      namedNode(`${time}2006`),
      namedNode(time)
    ),
    quad(
      namedNode(`${ns8}time`),
      namedNode(`${owl}versionIRI`),
      namedNode(`${time}2016`),
      namedNode(time)
    ),
    quad(
      namedNode(`${ns8}time`),
      namedNode(`${skos}changeNote`),
      literal(`2016-06-15 - initial update of OWL-Time - modified to support arbitrary temporal reference systems. `),
      namedNode(time)
    ),
    quad(
      namedNode(`${ns8}time`),
      namedNode(`${skos}changeNote`),
      literal(`2016-12-20 - adjust range of time:timeZone to time:TimeZone, moved up from the tzont ontology.  `),
      namedNode(time)
    ),
    quad(
      namedNode(`${ns8}time`),
      namedNode(`${skos}changeNote`),
      literal(`2016-12-20 - restore time:Year and time:January which were present in the 2006 version of the ontology, but now marked "deprecated". `),
      namedNode(time)
    ),
    quad(
      namedNode(`${ns8}time`),
      namedNode(`${skos}changeNote`),
      literal(`2017-02 - intervalIn, intervalDisjoint, monthOfYear added; TemporalUnit subclass of TemporalDuration`),
      namedNode(time)
    ),
    quad(
      namedNode(`${ns8}time`),
      namedNode(`${skos}changeNote`),
      literal(`2017-04-06 - hasTime, hasXSDDuration added; Number removed; all duration elements changed to xsd:decimal`),
      namedNode(time)
    ),
    quad(
      namedNode(`${ns8}time`),
      namedNode(`${skos}historyNote`),
      literal(`Update of OWL-Time ontology, extended to support general temporal reference systems. 

Ontology engineering by Simon J D Cox`, 'en'),
      namedNode(time)
    ),
    quad(
      blankNodes[54],
      namedNode(`${rdf}first`),
      blankNodes[59],
      namedNode(time)
    ),
    quad(
      blankNodes[54],
      namedNode(`${rdf}rest`),
      namedNode(`${rdf}nil`),
      namedNode(time)
    ),
    quad(
      blankNodes[6],
      namedNode(`${rdf}type`),
      namedNode(`${owl}Restriction`),
      namedNode(time)
    ),
    quad(
      blankNodes[6],
      namedNode(`${owl}allValuesFrom`),
      namedNode(`${xsd}decimal`),
      namedNode(time)
    ),
    quad(
      blankNodes[6],
      namedNode(`${owl}onProperty`),
      namedNode(`${time}hours`),
      namedNode(time)
    ),
    quad(
      blankNodes[60],
      namedNode(`${rdf}first`),
      namedNode(`${time}GeneralDurationDescription`),
      namedNode(time)
    ),
    quad(
      blankNodes[60],
      namedNode(`${rdf}rest`),
      namedNode(`${rdf}nil`),
      namedNode(time)
    ),
    quad(
      blankNodes[36],
      namedNode(`${rdf}type`),
      namedNode(`${owl}Restriction`),
      namedNode(time)
    ),
    quad(
      blankNodes[36],
      namedNode(`${owl}cardinality`),
      literal(`0`, namedNode(`${xsd}nonNegativeInteger`)),
      namedNode(time)
    ),
    quad(
      blankNodes[36],
      namedNode(`${owl}onProperty`),
      namedNode(`${time}hour`),
      namedNode(time)
    ),
    quad(
      blankNodes[37],
      namedNode(`${rdf}type`),
      namedNode(`${owl}Restriction`),
      namedNode(time)
    ),
    quad(
      blankNodes[37],
      namedNode(`${owl}cardinality`),
      literal(`0`, namedNode(`${xsd}nonNegativeInteger`)),
      namedNode(time)
    ),
    quad(
      blankNodes[37],
      namedNode(`${owl}onProperty`),
      namedNode(`${time}day`),
      namedNode(time)
    ),
    quad(
      blankNodes[61],
      namedNode(`${rdf}first`),
      namedNode(`${time}TemporalPosition`),
      namedNode(time)
    ),
    quad(
      blankNodes[61],
      namedNode(`${rdf}rest`),
      blankNodes[60],
      namedNode(time)
    ),
    quad(
      blankNodes[62],
      namedNode(`${xsd}pattern`),
      literal(`-?([1-9][0-9]{3,}|0[0-9]{3})(Z|(\\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00))?`),
      namedNode(time)
    ),
    quad(
      blankNodes[56],
      namedNode(`${rdf}first`),
      blankNodes[62],
      namedNode(time)
    ),
    quad(
      blankNodes[56],
      namedNode(`${rdf}rest`),
      namedNode(`${rdf}nil`),
      namedNode(time)
    ),
    quad(
      blankNodes[38],
      namedNode(`${rdf}type`),
      namedNode(`${owl}Restriction`),
      namedNode(time)
    ),
    quad(
      blankNodes[38],
      namedNode(`${owl}cardinality`),
      literal(`1`, namedNode(`${xsd}nonNegativeInteger`)),
      namedNode(time)
    ),
    quad(
      blankNodes[38],
      namedNode(`${owl}onProperty`),
      namedNode(`${time}month`),
      namedNode(time)
    ),
    quad(
      blankNodes[63],
      namedNode(`${rdf}first`),
      blankNodes[64],
      namedNode(time)
    ),
    quad(
      blankNodes[63],
      namedNode(`${rdf}rest`),
      blankNodes[65],
      namedNode(time)
    ),
    quad(
      blankNodes[0],
      namedNode(`${rdf}type`),
      namedNode(`${owl}Restriction`),
      namedNode(time)
    ),
    quad(
      blankNodes[0],
      namedNode(`${owl}hasValue`),
      namedNode(`${ns17}Gregorian`),
      namedNode(time)
    ),
    quad(
      blankNodes[0],
      namedNode(`${owl}onProperty`),
      namedNode(`${time}hasTRS`),
      namedNode(time)
    ),
    quad(
      blankNodes[66],
      namedNode(`${rdf}first`),
      namedNode(`${time}Duration`),
      namedNode(time)
    ),
    quad(
      blankNodes[66],
      namedNode(`${rdf}rest`),
      namedNode(`${rdf}nil`),
      namedNode(time)
    ),
    quad(
      blankNodes[39],
      namedNode(`${rdf}type`),
      namedNode(`${owl}Restriction`),
      namedNode(time)
    ),
    quad(
      blankNodes[39],
      namedNode(`${owl}cardinality`),
      literal(`0`, namedNode(`${xsd}nonNegativeInteger`)),
      namedNode(time)
    ),
    quad(
      blankNodes[39],
      namedNode(`${owl}onProperty`),
      namedNode(`${time}week`),
      namedNode(time)
    ),
    quad(
      blankNodes[40],
      namedNode(`${rdf}type`),
      namedNode(`${owl}Restriction`),
      namedNode(time)
    ),
    quad(
      blankNodes[40],
      namedNode(`${owl}hasValue`),
      namedNode(`${time}unitMonth`),
      namedNode(time)
    ),
    quad(
      blankNodes[40],
      namedNode(`${owl}onProperty`),
      namedNode(`${time}unitType`),
      namedNode(time)
    ),
    quad(
      blankNodes[41],
      namedNode(`${rdf}type`),
      namedNode(`${owl}Restriction`),
      namedNode(time)
    ),
    quad(
      blankNodes[41],
      namedNode(`${owl}cardinality`),
      literal(`0`, namedNode(`${xsd}nonNegativeInteger`)),
      namedNode(time)
    ),
    quad(
      blankNodes[41],
      namedNode(`${owl}onProperty`),
      namedNode(`${time}second`),
      namedNode(time)
    ),
    quad(
      blankNodes[64],
      namedNode(`${rdf}type`),
      namedNode(`${owl}Restriction`),
      namedNode(time)
    ),
    quad(
      blankNodes[64],
      namedNode(`${owl}cardinality`),
      literal(`1`, namedNode(`${xsd}nonNegativeInteger`)),
      namedNode(time)
    ),
    quad(
      blankNodes[64],
      namedNode(`${owl}onProperty`),
      namedNode(`${time}numericPosition`),
      namedNode(time)
    ),
    quad(
      blankNodes[14],
      namedNode(`${rdf}type`),
      namedNode(`${owl}Restriction`),
      namedNode(time)
    ),
    quad(
      blankNodes[14],
      namedNode(`${owl}maxCardinality`),
      literal(`1`, namedNode(`${xsd}nonNegativeInteger`)),
      namedNode(time)
    ),
    quad(
      blankNodes[14],
      namedNode(`${owl}onProperty`),
      namedNode(`${time}dayOfYear`),
      namedNode(time)
    ),
    quad(
      blankNodes[47],
      namedNode(`${rdf}type`),
      namedNode(`${owl}Restriction`),
      namedNode(time)
    ),
    quad(
      blankNodes[47],
      namedNode(`${owl}cardinality`),
      literal(`0`, namedNode(`${xsd}integer`)),
      namedNode(time)
    ),
    quad(
      blankNodes[47],
      namedNode(`${owl}onProperty`),
      namedNode(`${time}weeks`),
      namedNode(time)
    ),
    quad(
      blankNodes[15],
      namedNode(`${rdf}type`),
      namedNode(`${owl}Restriction`),
      namedNode(time)
    ),
    quad(
      blankNodes[15],
      namedNode(`${owl}maxCardinality`),
      literal(`1`, namedNode(`${xsd}nonNegativeInteger`)),
      namedNode(time)
    ),
    quad(
      blankNodes[15],
      namedNode(`${owl}onProperty`),
      namedNode(`${time}minute`),
      namedNode(time)
    ),
    quad(
      blankNodes[16],
      namedNode(`${rdf}type`),
      namedNode(`${owl}Restriction`),
      namedNode(time)
    ),
    quad(
      blankNodes[16],
      namedNode(`${owl}maxCardinality`),
      literal(`1`, namedNode(`${xsd}nonNegativeInteger`)),
      namedNode(time)
    ),
    quad(
      blankNodes[16],
      namedNode(`${owl}onProperty`),
      namedNode(`${time}day`),
      namedNode(time)
    ),
    quad(
      blankNodes[7],
      namedNode(`${rdf}type`),
      namedNode(`${owl}Restriction`),
      namedNode(time)
    ),
    quad(
      blankNodes[7],
      namedNode(`${owl}allValuesFrom`),
      namedNode(`${xsd}decimal`),
      namedNode(time)
    ),
    quad(
      blankNodes[7],
      namedNode(`${owl}onProperty`),
      namedNode(`${time}seconds`),
      namedNode(time)
    ),
    quad(
      blankNodes[65],
      namedNode(`${rdf}first`),
      blankNodes[67],
      namedNode(time)
    ),
    quad(
      blankNodes[65],
      namedNode(`${rdf}rest`),
      namedNode(`${rdf}nil`),
      namedNode(time)
    ),
    quad(
      blankNodes[17],
      namedNode(`${rdf}type`),
      namedNode(`${owl}Restriction`),
      namedNode(time)
    ),
    quad(
      blankNodes[17],
      namedNode(`${owl}maxCardinality`),
      literal(`1`, namedNode(`${xsd}nonNegativeInteger`)),
      namedNode(time)
    ),
    quad(
      blankNodes[17],
      namedNode(`${owl}onProperty`),
      namedNode(`${time}timeZone`),
      namedNode(time)
    ),
    quad(
      blankNodes[46],
      namedNode(`${rdf}type`),
      namedNode(`${owl}Class`),
      namedNode(time)
    ),
    quad(
      blankNodes[46],
      namedNode(`${owl}unionOf`),
      blankNodes[63],
      namedNode(time)
    ),
    quad(
      blankNodes[18],
      namedNode(`${rdf}type`),
      namedNode(`${owl}Restriction`),
      namedNode(time)
    ),
    quad(
      blankNodes[18],
      namedNode(`${owl}maxCardinality`),
      literal(`1`, namedNode(`${xsd}nonNegativeInteger`)),
      namedNode(time)
    ),
    quad(
      blankNodes[18],
      namedNode(`${owl}onProperty`),
      namedNode(`${time}year`),
      namedNode(time)
    ),
    quad(
      blankNodes[68],
      namedNode(`${rdf}first`),
      namedNode(`${time}Interval`),
      namedNode(time)
    ),
    quad(
      blankNodes[68],
      namedNode(`${rdf}rest`),
      namedNode(`${rdf}nil`),
      namedNode(time)
    ),
    quad(
      blankNodes[1],
      namedNode(`${rdf}type`),
      namedNode(`${owl}Restriction`),
      namedNode(time)
    ),
    quad(
      blankNodes[1],
      namedNode(`${owl}allValuesFrom`),
      namedNode(`${xsd}gMonth`),
      namedNode(time)
    ),
    quad(
      blankNodes[1],
      namedNode(`${owl}onProperty`),
      namedNode(`${time}month`),
      namedNode(time)
    ),
    quad(
      blankNodes[67],
      namedNode(`${rdf}type`),
      namedNode(`${owl}Restriction`),
      namedNode(time)
    ),
    quad(
      blankNodes[67],
      namedNode(`${owl}cardinality`),
      literal(`1`, namedNode(`${xsd}nonNegativeInteger`)),
      namedNode(time)
    ),
    quad(
      blankNodes[67],
      namedNode(`${owl}onProperty`),
      namedNode(`${time}nominalPosition`),
      namedNode(time)
    ),
    quad(
      blankNodes[8],
      namedNode(`${rdf}type`),
      namedNode(`${owl}Restriction`),
      namedNode(time)
    ),
    quad(
      blankNodes[8],
      namedNode(`${owl}allValuesFrom`),
      namedNode(`${xsd}decimal`),
      namedNode(time)
    ),
    quad(
      blankNodes[8],
      namedNode(`${owl}onProperty`),
      namedNode(`${time}weeks`),
      namedNode(time)
    ),
    quad(
      blankNodes[69],
      namedNode(`${rdf}first`),
      namedNode(`${time}GeneralDateTimeDescription`),
      namedNode(time)
    ),
    quad(
      blankNodes[69],
      namedNode(`${rdf}rest`),
      blankNodes[66],
      namedNode(time)
    ),
    quad(
      blankNodes[34],
      namedNode(`${rdf}type`),
      namedNode(`${owl}Restriction`),
      namedNode(time)
    ),
    quad(
      blankNodes[34],
      namedNode(`${owl}hasValue`),
      namedNode(`${time}unitMonth`),
      namedNode(time)
    ),
    quad(
      blankNodes[34],
      namedNode(`${owl}onProperty`),
      namedNode(`${time}unitType`),
      namedNode(time)
    ),
    quad(
      blankNodes[19],
      namedNode(`${rdf}type`),
      namedNode(`${owl}Restriction`),
      namedNode(time)
    ),
    quad(
      blankNodes[19],
      namedNode(`${owl}maxCardinality`),
      literal(`1`, namedNode(`${xsd}nonNegativeInteger`)),
      namedNode(time)
    ),
    quad(
      blankNodes[19],
      namedNode(`${owl}onProperty`),
      namedNode(`${time}week`),
      namedNode(time)
    ),
    quad(
      blankNodes[20],
      namedNode(`${rdf}type`),
      namedNode(`${owl}Restriction`),
      namedNode(time)
    ),
    quad(
      blankNodes[20],
      namedNode(`${owl}maxCardinality`),
      literal(`1`, namedNode(`${xsd}nonNegativeInteger`)),
      namedNode(time)
    ),
    quad(
      blankNodes[20],
      namedNode(`${owl}onProperty`),
      namedNode(`${time}second`),
      namedNode(time)
    ),
    quad(
      blankNodes[59],
      namedNode(`${xsd}pattern`),
      literal(`---(0[1-9]|[1-9][0-9])(Z|(\\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00))?`),
      namedNode(time)
    ),
    quad(
      blankNodes[26],
      namedNode(`${rdf}type`),
      namedNode(`${owl}Restriction`),
      namedNode(time)
    ),
    quad(
      blankNodes[26],
      namedNode(`${owl}maxCardinality`),
      literal(`1`, namedNode(`${xsd}nonNegativeInteger`)),
      namedNode(time)
    ),
    quad(
      blankNodes[26],
      namedNode(`${owl}onProperty`),
      namedNode(`${time}minutes`),
      namedNode(time)
    ),
    quad(
      blankNodes[27],
      namedNode(`${rdf}type`),
      namedNode(`${owl}Restriction`),
      namedNode(time)
    ),
    quad(
      blankNodes[27],
      namedNode(`${owl}maxCardinality`),
      literal(`1`, namedNode(`${xsd}nonNegativeInteger`)),
      namedNode(time)
    ),
    quad(
      blankNodes[27],
      namedNode(`${owl}onProperty`),
      namedNode(`${time}days`),
      namedNode(time)
    ),
    quad(
      blankNodes[70],
      namedNode(`${xsd}pattern`),
      literal(`--(0[1-9]|1[0-9]|20)(Z|(\\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00))?`),
      namedNode(time)
    ),
    quad(
      blankNodes[21],
      namedNode(`${rdf}type`),
      namedNode(`${owl}Restriction`),
      namedNode(time)
    ),
    quad(
      blankNodes[21],
      namedNode(`${owl}maxCardinality`),
      literal(`1`, namedNode(`${xsd}nonNegativeInteger`)),
      namedNode(time)
    ),
    quad(
      blankNodes[21],
      namedNode(`${owl}onProperty`),
      namedNode(`${time}dayOfWeek`),
      namedNode(time)
    ),
    quad(
      blankNodes[9],
      namedNode(`${rdf}type`),
      namedNode(`${owl}Restriction`),
      namedNode(time)
    ),
    quad(
      blankNodes[9],
      namedNode(`${owl}allValuesFrom`),
      namedNode(`${xsd}decimal`),
      namedNode(time)
    ),
    quad(
      blankNodes[9],
      namedNode(`${owl}onProperty`),
      namedNode(`${time}days`),
      namedNode(time)
    ),
    quad(
      blankNodes[48],
      namedNode(`${rdf}type`),
      namedNode(`${owl}Restriction`),
      namedNode(time)
    ),
    quad(
      blankNodes[48],
      namedNode(`${owl}cardinality`),
      literal(`0`, namedNode(`${xsd}integer`)),
      namedNode(time)
    ),
    quad(
      blankNodes[48],
      namedNode(`${owl}onProperty`),
      namedNode(`${time}days`),
      namedNode(time)
    ),
    quad(
      blankNodes[55],
      namedNode(`${rdf}first`),
      blankNodes[70],
      namedNode(time)
    ),
    quad(
      blankNodes[55],
      namedNode(`${rdf}rest`),
      namedNode(`${rdf}nil`),
      namedNode(time)
    ),
    quad(
      blankNodes[28],
      namedNode(`${rdf}type`),
      namedNode(`${owl}Restriction`),
      namedNode(time)
    ),
    quad(
      blankNodes[28],
      namedNode(`${owl}maxCardinality`),
      literal(`1`, namedNode(`${xsd}nonNegativeInteger`)),
      namedNode(time)
    ),
    quad(
      blankNodes[28],
      namedNode(`${owl}onProperty`),
      namedNode(`${time}years`),
      namedNode(time)
    ),
    quad(
      blankNodes[29],
      namedNode(`${rdf}type`),
      namedNode(`${owl}Restriction`),
      namedNode(time)
    ),
    quad(
      blankNodes[29],
      namedNode(`${owl}cardinality`),
      literal(`1`, namedNode(`${xsd}nonNegativeInteger`)),
      namedNode(time)
    ),
    quad(
      blankNodes[29],
      namedNode(`${owl}onProperty`),
      namedNode(`${time}hasTRS`),
      namedNode(time)
    ),
    quad(
      blankNodes[30],
      namedNode(`${rdf}type`),
      namedNode(`${owl}Restriction`),
      namedNode(time)
    ),
    quad(
      blankNodes[30],
      namedNode(`${owl}maxCardinality`),
      literal(`1`, namedNode(`${xsd}nonNegativeInteger`)),
      namedNode(time)
    ),
    quad(
      blankNodes[30],
      namedNode(`${owl}onProperty`),
      namedNode(`${time}months`),
      namedNode(time)
    ),
    quad(
      blankNodes[45],
      namedNode(`${rdf}type`),
      namedNode(`${owl}Restriction`),
      namedNode(time)
    ),
    quad(
      blankNodes[45],
      namedNode(`${owl}cardinality`),
      literal(`1`, namedNode(`${xsd}nonNegativeInteger`)),
      namedNode(time)
    ),
    quad(
      blankNodes[45],
      namedNode(`${owl}onProperty`),
      namedNode(`${time}hasTRS`),
      namedNode(time)
    ),
    quad(
      blankNodes[22],
      namedNode(`${rdf}type`),
      namedNode(`${owl}Restriction`),
      namedNode(time)
    ),
    quad(
      blankNodes[22],
      namedNode(`${owl}maxCardinality`),
      literal(`1`, namedNode(`${xsd}nonNegativeInteger`)),
      namedNode(time)
    ),
    quad(
      blankNodes[22],
      namedNode(`${owl}onProperty`),
      namedNode(`${time}hour`),
      namedNode(time)
    ),
    quad(
      blankNodes[23],
      namedNode(`${rdf}type`),
      namedNode(`${owl}Restriction`),
      namedNode(time)
    ),
    quad(
      blankNodes[23],
      namedNode(`${owl}maxCardinality`),
      literal(`1`, namedNode(`${xsd}nonNegativeInteger`)),
      namedNode(time)
    ),
    quad(
      blankNodes[23],
      namedNode(`${owl}onProperty`),
      namedNode(`${time}month`),
      namedNode(time)
    ),
    quad(
      blankNodes[2],
      namedNode(`${rdf}type`),
      namedNode(`${owl}Restriction`),
      namedNode(time)
    ),
    quad(
      blankNodes[2],
      namedNode(`${owl}allValuesFrom`),
      namedNode(`${xsd}gYear`),
      namedNode(time)
    ),
    quad(
      blankNodes[2],
      namedNode(`${owl}onProperty`),
      namedNode(`${time}year`),
      namedNode(time)
    ),
    quad(
      blankNodes[3],
      namedNode(`${rdf}type`),
      namedNode(`${owl}Restriction`),
      namedNode(time)
    ),
    quad(
      blankNodes[3],
      namedNode(`${owl}allValuesFrom`),
      namedNode(`${xsd}gDay`),
      namedNode(time)
    ),
    quad(
      blankNodes[3],
      namedNode(`${owl}onProperty`),
      namedNode(`${time}day`),
      namedNode(time)
    ),
    quad(
      blankNodes[42],
      namedNode(`${rdf}type`),
      namedNode(`${owl}Restriction`),
      namedNode(time)
    ),
    quad(
      blankNodes[42],
      namedNode(`${owl}cardinality`),
      literal(`0`, namedNode(`${xsd}nonNegativeInteger`)),
      namedNode(time)
    ),
    quad(
      blankNodes[42],
      namedNode(`${owl}onProperty`),
      namedNode(`${time}year`),
      namedNode(time)
    ),
    quad(
      blankNodes[49],
      namedNode(`${rdf}type`),
      namedNode(`${owl}Restriction`),
      namedNode(time)
    ),
    quad(
      blankNodes[49],
      namedNode(`${owl}cardinality`),
      literal(`1`, namedNode(`${xsd}integer`)),
      namedNode(time)
    ),
    quad(
      blankNodes[49],
      namedNode(`${owl}onProperty`),
      namedNode(`${time}years`),
      namedNode(time)
    ),
    quad(
      blankNodes[50],
      namedNode(`${rdf}type`),
      namedNode(`${owl}Restriction`),
      namedNode(time)
    ),
    quad(
      blankNodes[50],
      namedNode(`${owl}cardinality`),
      literal(`0`, namedNode(`${xsd}integer`)),
      namedNode(time)
    ),
    quad(
      blankNodes[50],
      namedNode(`${owl}onProperty`),
      namedNode(`${time}seconds`),
      namedNode(time)
    ),
    quad(
      blankNodes[44],
      namedNode(`${rdf}first`),
      namedNode(`${time}Instant`),
      namedNode(time)
    ),
    quad(
      blankNodes[44],
      namedNode(`${rdf}rest`),
      blankNodes[68],
      namedNode(time)
    ),
    quad(
      blankNodes[31],
      namedNode(`${rdf}type`),
      namedNode(`${owl}Restriction`),
      namedNode(time)
    ),
    quad(
      blankNodes[31],
      namedNode(`${owl}maxCardinality`),
      literal(`1`, namedNode(`${xsd}nonNegativeInteger`)),
      namedNode(time)
    ),
    quad(
      blankNodes[31],
      namedNode(`${owl}onProperty`),
      namedNode(`${time}weeks`),
      namedNode(time)
    ),
    quad(
      blankNodes[24],
      namedNode(`${rdf}type`),
      namedNode(`${owl}Restriction`),
      namedNode(time)
    ),
    quad(
      blankNodes[24],
      namedNode(`${owl}cardinality`),
      literal(`1`, namedNode(`${xsd}nonNegativeInteger`)),
      namedNode(time)
    ),
    quad(
      blankNodes[24],
      namedNode(`${owl}onProperty`),
      namedNode(`${time}unitType`),
      namedNode(time)
    ),
    quad(
      blankNodes[25],
      namedNode(`${rdf}type`),
      namedNode(`${owl}Restriction`),
      namedNode(time)
    ),
    quad(
      blankNodes[25],
      namedNode(`${owl}maxCardinality`),
      literal(`1`, namedNode(`${xsd}nonNegativeInteger`)),
      namedNode(time)
    ),
    quad(
      blankNodes[25],
      namedNode(`${owl}onProperty`),
      namedNode(`${time}monthOfYear`),
      namedNode(time)
    ),
    quad(
      blankNodes[32],
      namedNode(`${rdf}type`),
      namedNode(`${owl}Restriction`),
      namedNode(time)
    ),
    quad(
      blankNodes[32],
      namedNode(`${owl}maxCardinality`),
      literal(`1`, namedNode(`${xsd}nonNegativeInteger`)),
      namedNode(time)
    ),
    quad(
      blankNodes[32],
      namedNode(`${owl}onProperty`),
      namedNode(`${time}seconds`),
      namedNode(time)
    ),
    quad(
      blankNodes[10],
      namedNode(`${rdf}type`),
      namedNode(`${owl}Restriction`),
      namedNode(time)
    ),
    quad(
      blankNodes[10],
      namedNode(`${owl}hasValue`),
      namedNode(`${ns17}Gregorian`),
      namedNode(time)
    ),
    quad(
      blankNodes[10],
      namedNode(`${owl}onProperty`),
      namedNode(`${time}hasTRS`),
      namedNode(time)
    ),
    quad(
      blankNodes[51],
      namedNode(`${rdf}type`),
      namedNode(`${owl}Restriction`),
      namedNode(time)
    ),
    quad(
      blankNodes[51],
      namedNode(`${owl}cardinality`),
      literal(`0`, namedNode(`${xsd}integer`)),
      namedNode(time)
    ),
    quad(
      blankNodes[51],
      namedNode(`${owl}onProperty`),
      namedNode(`${time}hours`),
      namedNode(time)
    ),
    quad(
      blankNodes[4],
      namedNode(`${rdf}type`),
      namedNode(`${owl}Restriction`),
      namedNode(time)
    ),
    quad(
      blankNodes[4],
      namedNode(`${owl}cardinality`),
      literal(`1`, namedNode(`${xsd}nonNegativeInteger`)),
      namedNode(time)
    ),
    quad(
      blankNodes[4],
      namedNode(`${owl}onProperty`),
      namedNode(`${time}numericDuration`),
      namedNode(time)
    ),
    quad(
      blankNodes[11],
      namedNode(`${rdf}type`),
      namedNode(`${owl}Restriction`),
      namedNode(time)
    ),
    quad(
      blankNodes[11],
      namedNode(`${owl}allValuesFrom`),
      namedNode(`${xsd}decimal`),
      namedNode(time)
    ),
    quad(
      blankNodes[11],
      namedNode(`${owl}onProperty`),
      namedNode(`${time}years`),
      namedNode(time)
    ),
    quad(
      blankNodes[57],
      namedNode(`${rdf}type`),
      namedNode(`${owl}Class`),
      namedNode(time)
    ),
    quad(
      blankNodes[57],
      namedNode(`${owl}unionOf`),
      blankNodes[61],
      namedNode(time)
    ),
    quad(
      blankNodes[33],
      namedNode(`${rdf}type`),
      namedNode(`${owl}Restriction`),
      namedNode(time)
    ),
    quad(
      blankNodes[33],
      namedNode(`${owl}maxCardinality`),
      literal(`1`, namedNode(`${xsd}nonNegativeInteger`)),
      namedNode(time)
    ),
    quad(
      blankNodes[33],
      namedNode(`${owl}onProperty`),
      namedNode(`${time}hours`),
      namedNode(time)
    ),
    quad(
      blankNodes[43],
      namedNode(`${rdf}type`),
      namedNode(`${owl}Restriction`),
      namedNode(time)
    ),
    quad(
      blankNodes[43],
      namedNode(`${owl}cardinality`),
      literal(`0`, namedNode(`${xsd}nonNegativeInteger`)),
      namedNode(time)
    ),
    quad(
      blankNodes[43],
      namedNode(`${owl}onProperty`),
      namedNode(`${time}minute`),
      namedNode(time)
    ),
    quad(
      blankNodes[52],
      namedNode(`${rdf}type`),
      namedNode(`${owl}Restriction`),
      namedNode(time)
    ),
    quad(
      blankNodes[52],
      namedNode(`${owl}cardinality`),
      literal(`0`, namedNode(`${xsd}integer`)),
      namedNode(time)
    ),
    quad(
      blankNodes[52],
      namedNode(`${owl}onProperty`),
      namedNode(`${time}months`),
      namedNode(time)
    ),
    quad(
      blankNodes[5],
      namedNode(`${rdf}type`),
      namedNode(`${owl}Restriction`),
      namedNode(time)
    ),
    quad(
      blankNodes[5],
      namedNode(`${owl}cardinality`),
      literal(`1`, namedNode(`${xsd}nonNegativeInteger`)),
      namedNode(time)
    ),
    quad(
      blankNodes[5],
      namedNode(`${owl}onProperty`),
      namedNode(`${time}unitType`),
      namedNode(time)
    ),
    quad(
      blankNodes[12],
      namedNode(`${rdf}type`),
      namedNode(`${owl}Restriction`),
      namedNode(time)
    ),
    quad(
      blankNodes[12],
      namedNode(`${owl}allValuesFrom`),
      namedNode(`${xsd}decimal`),
      namedNode(time)
    ),
    quad(
      blankNodes[12],
      namedNode(`${owl}onProperty`),
      namedNode(`${time}minutes`),
      namedNode(time)
    ),
    quad(
      blankNodes[13],
      namedNode(`${rdf}type`),
      namedNode(`${owl}Restriction`),
      namedNode(time)
    ),
    quad(
      blankNodes[13],
      namedNode(`${owl}allValuesFrom`),
      namedNode(`${xsd}decimal`),
      namedNode(time)
    ),
    quad(
      blankNodes[13],
      namedNode(`${owl}onProperty`),
      namedNode(`${time}months`),
      namedNode(time)
    ),
    quad(
      blankNodes[53],
      namedNode(`${rdf}type`),
      namedNode(`${owl}Restriction`),
      namedNode(time)
    ),
    quad(
      blankNodes[53],
      namedNode(`${owl}cardinality`),
      literal(`0`, namedNode(`${xsd}integer`)),
      namedNode(time)
    ),
    quad(
      blankNodes[53],
      namedNode(`${owl}onProperty`),
      namedNode(`${time}minutes`),
      namedNode(time)
    ),
    quad(
      blankNodes[58],
      namedNode(`${rdf}type`),
      namedNode(`${owl}Class`),
      namedNode(time)
    ),
    quad(
      blankNodes[58],
      namedNode(`${owl}unionOf`),
      blankNodes[69],
      namedNode(time)
    ),
    quad(
      blankNodes[35],
      namedNode(`${rdf}type`),
      namedNode(`${owl}Restriction`),
      namedNode(time)
    ),
    quad(
      blankNodes[35],
      namedNode(`${owl}hasValue`),
      literal(`--01`),
      namedNode(time)
    ),
    quad(
      blankNodes[35],
      namedNode(`${owl}onProperty`),
      namedNode(`${time}month`),
      namedNode(time)
    ),

  ]
}
