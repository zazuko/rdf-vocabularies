/* This file was automatically generated. Do not edit by hand. */

const {
  xsd,
  rdf,
  rdfs
} = {
  'xsd': 'http://www.w3.org/2001/XMLSchema#',
  'rdf': 'http://www.w3.org/1999/02/22-rdf-syntax-ns#',
  'rdfs': 'http://www.w3.org/2000/01/rdf-schema#'
}

export default ({ literal, namedNode, quad }: import('rdf-js').DataFactory): import('rdf-js').Quad[] => {
  return [
    quad(
      namedNode(`${xsd}ENTITIES`),
      namedNode(`${rdf}type`),
      namedNode(`${rdfs}Datatype`),
      namedNode(xsd)
    ),
    quad(
      namedNode(`${xsd}ENTITIES`),
      namedNode(`${rdfs}comment`),
      literal(`
    \`ENTITIES\` represents the \`ENTITIES\` attribute type from [XML]. The _value
    space_ of \`ENTITIES\` is the set of finite, non-zero-length sequences of
    \`ENTITY\` values that have been declared as unparsed entities in a document
    type definition. The _lexical space_ of \`ENTITIES\` is the set of
    space-separated lists of tokens, of which each token is in the _lexical
    space_ of \`ENTITY\`. The _item type_ of \`ENTITIES\` is \`ENTITY\`. \`ENTITIES\` is
    derived from \`anySimpleType\` in two steps: an anonymous list type is
    defined, whose _item type_ is \`ENTITY\`; this is the _base type_ of \`ENTITIES\`,
    which restricts its value space to lists with at least one item.
  `),
      namedNode(xsd)
    ),
    quad(
      namedNode(`${xsd}ENTITIES`),
      namedNode(`${rdfs}label`),
      literal(`ENTITIES`),
      namedNode(xsd)
    ),
    quad(
      namedNode(`${xsd}ENTITIES`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${xsd}anySimpleType`),
      namedNode(xsd)
    ),
    quad(
      namedNode(`${xsd}ENTITY`),
      namedNode(`${rdf}type`),
      namedNode(`${rdfs}Datatype`),
      namedNode(xsd)
    ),
    quad(
      namedNode(`${xsd}ENTITY`),
      namedNode(`${rdfs}comment`),
      literal(`
     \`ENTITY\` represents the \`ENTITY\` attribute type from [XML]. The _value space_
     of \`ENTITY\` is the set of all strings that match the \`NCName\` production in
     [Namespaces in XML] and have been declared as an unparsed entity in a
     document type definition. The _lexical space_ of ENTITY is the set of all
     strings that match the NCName production in [Namespaces in XML]. The
     _base type_ of ENTITY is NCName.
  `),
      namedNode(xsd)
    ),
    quad(
      namedNode(`${xsd}ENTITY`),
      namedNode(`${rdfs}label`),
      literal(`ENTITY`),
      namedNode(xsd)
    ),
    quad(
      namedNode(`${xsd}ENTITY`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${xsd}NCName`),
      namedNode(xsd)
    ),
    quad(
      namedNode(`${xsd}ID`),
      namedNode(`${rdf}type`),
      namedNode(`${rdfs}Datatype`),
      namedNode(xsd)
    ),
    quad(
      namedNode(`${xsd}ID`),
      namedNode(`${rdfs}comment`),
      literal(`
     \`ID\` represents the \`ID\` attribute type from [XML]. The _value space_ of \`ID\` is
     the set of all strings that match the \`NCName\` production in [Namespaces
     in XML]. The _lexical space_ of \`ID\` is the set of all strings that match
     the \`NCName\` production in [Namespaces in XML]. The _base type_ of \`ID\` is
     \`NCName\`.
  `),
      namedNode(xsd)
    ),
    quad(
      namedNode(`${xsd}ID`),
      namedNode(`${rdfs}label`),
      literal(`ID`),
      namedNode(xsd)
    ),
    quad(
      namedNode(`${xsd}ID`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${xsd}NCName`),
      namedNode(xsd)
    ),
    quad(
      namedNode(`${xsd}IDREF`),
      namedNode(`${rdf}type`),
      namedNode(`${rdfs}Datatype`),
      namedNode(xsd)
    ),
    quad(
      namedNode(`${xsd}IDREF`),
      namedNode(`${rdfs}comment`),
      literal(`
    \`IDREF\` represents the \`IDREF\` attribute type from [XML]. The _value space_ of
    \`IDREF\` is the set of all strings that match the \`NCName\` production in
    [Namespaces in XML]. The _lexical space_ of \`IDREF\` is the set of strings
    that match the \`NCName\` production in [Namespaces in XML]. The _base type_
    of \`IDREF\` is \`NCName\`.
  `),
      namedNode(xsd)
    ),
    quad(
      namedNode(`${xsd}IDREF`),
      namedNode(`${rdfs}label`),
      literal(`IDREF`),
      namedNode(xsd)
    ),
    quad(
      namedNode(`${xsd}IDREF`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${xsd}NCName`),
      namedNode(xsd)
    ),
    quad(
      namedNode(`${xsd}IDREFS`),
      namedNode(`${rdf}type`),
      namedNode(`${rdfs}Datatype`),
      namedNode(xsd)
    ),
    quad(
      namedNode(`${xsd}IDREFS`),
      namedNode(`${rdfs}comment`),
      literal(`
    \`IDREFS\` represents the \`IDREFS\` attribute type from [XML]. The _value space_
    of \`IDREFS\` is the set of finite, non-zero-length sequences of \`IDREF\`s. The
    _lexical space_ of \`IDREFS\` is the set of space-separated lists of tokens, of
    which each token is in the _lexical space_ of \`IDREF\`. The _item type_ of
    \`IDREFS\` is \`IDREF\`. \`IDREFS\` is derived from \`anySimpleType\` in two steps: an
    anonymous list type is defined, whose _item type_ is \`IDREF\`; this is the
    _base type_ of \`IDREFS\`, which restricts its value space to lists with at
    least one item.
  `),
      namedNode(xsd)
    ),
    quad(
      namedNode(`${xsd}IDREFS`),
      namedNode(`${rdfs}label`),
      literal(`IDREFS`),
      namedNode(xsd)
    ),
    quad(
      namedNode(`${xsd}IDREFS`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${xsd}anySimpleType`),
      namedNode(xsd)
    ),
    quad(
      namedNode(`${xsd}NCName`),
      namedNode(`${rdf}type`),
      namedNode(`${rdfs}Datatype`),
      namedNode(xsd)
    ),
    quad(
      namedNode(`${xsd}NCName`),
      namedNode(`${rdfs}comment`),
      literal(`
     \`NCName\` represents XML "non-colonized" Names. The _value space_ of \`NCName\`
     is the set of all strings which match the \`NCName\` production of
     [Namespaces in XML]. The _lexical space_ of \`NCName\` is the set of all
     strings which match the \`NCName\` production of [Namespaces in XML]. The
     _base type_ of \`NCName\` is \`Name\`.
  `),
      namedNode(xsd)
    ),
    quad(
      namedNode(`${xsd}NCName`),
      namedNode(`${rdfs}label`),
      literal(`NCName`),
      namedNode(xsd)
    ),
    quad(
      namedNode(`${xsd}NCName`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${xsd}Name`),
      namedNode(xsd)
    ),
    quad(
      namedNode(`${xsd}NMTOKEN`),
      namedNode(`${rdf}type`),
      namedNode(`${rdfs}Datatype`),
      namedNode(xsd)
    ),
    quad(
      namedNode(`${xsd}NMTOKEN`),
      namedNode(`${rdfs}comment`),
      literal(`
     \`NMTOKEN\` represents the \`NMTOKEN\` attribute type from [XML]. The _value
     space_ of \`NMTOKEN\` is the set of tokens that match the \`Nmtoken\` production
     in [XML]. The _lexical space_ of \`NMTOKEN\` is the set of strings that
     match the Nmtoken production in [XML]. The _base type_ of \`NMTOKEN\` is
     \`token\`.
  `),
      namedNode(xsd)
    ),
    quad(
      namedNode(`${xsd}NMTOKEN`),
      namedNode(`${rdfs}label`),
      literal(`NMTOKEN`),
      namedNode(xsd)
    ),
    quad(
      namedNode(`${xsd}NMTOKEN`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${xsd}token`),
      namedNode(xsd)
    ),
    quad(
      namedNode(`${xsd}NMTOKENS`),
      namedNode(`${rdf}type`),
      namedNode(`${rdfs}Datatype`),
      namedNode(xsd)
    ),
    quad(
      namedNode(`${xsd}NMTOKENS`),
      namedNode(`${rdfs}comment`),
      literal(`
    \`NMTOKENS\` represents the \`NMTOKENS\` attribute type from [XML]. The _value
    space_ of \`NMTOKENS\` is the set of finite, non-zero-length sequences of
    \`NMTOKEN\`s. The _lexical space_ of \`NMTOKENS\` is the set of space-separated
    lists of tokens, of which each token is in the _lexical space_ of \`NMTOKEN\`.
    The _item type_ of \`NMTOKENS\` is \`NMTOKEN\`. \`NMTOKENS\` is derived from
    \`anySimpleType\` in two steps: an anonymous list type is defined, whose
    _item type_ is \`NMTOKEN\`; this is the _base type_ of \`NMTOKENS\`, which
    restricts its value space to lists with at least one item.
  `),
      namedNode(xsd)
    ),
    quad(
      namedNode(`${xsd}NMTOKENS`),
      namedNode(`${rdfs}label`),
      literal(`NMTOKENS`),
      namedNode(xsd)
    ),
    quad(
      namedNode(`${xsd}NMTOKENS`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${xsd}anySimpleType`),
      namedNode(xsd)
    ),
    quad(
      namedNode(`${xsd}NOTATION`),
      namedNode(`${rdf}type`),
      namedNode(`${rdfs}Datatype`),
      namedNode(xsd)
    ),
    quad(
      namedNode(`${xsd}NOTATION`),
      namedNode(`${rdfs}comment`),
      literal(`
    \`NOTATION\` represents the \`NOTATION\` attribute type from [XML]. The _value
    space_ of \`NOTATION\` is the set of \`QNames\` of notations declared in the
    current schema. The _lexical space_ of \`NOTATION\` is the set of all names of
    notations declared in the current schema (in the form of \`QNames\`).
  `),
      namedNode(xsd)
    ),
    quad(
      namedNode(`${xsd}NOTATION`),
      namedNode(`${rdfs}label`),
      literal(`NOTATION`),
      namedNode(xsd)
    ),
    quad(
      namedNode(`${xsd}NOTATION`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${xsd}anyAtomicType`),
      namedNode(xsd)
    ),
    quad(
      namedNode(`${xsd}Name`),
      namedNode(`${rdf}type`),
      namedNode(`${rdfs}Datatype`),
      namedNode(xsd)
    ),
    quad(
      namedNode(`${xsd}Name`),
      namedNode(`${rdfs}comment`),
      literal(`
    \`Name\` represents XML Names. The _value space_ of \`Name\` is the set of all
    strings which match the \`Name\` production of [XML]. The _lexical space_ of
    \`Name\` is the set of all strings which match the \`Name\` production of [XML].
    The _base type_ of \`Name\` is \`token\`.
  `),
      namedNode(xsd)
    ),
    quad(
      namedNode(`${xsd}Name`),
      namedNode(`${rdfs}label`),
      literal(`Name`),
      namedNode(xsd)
    ),
    quad(
      namedNode(`${xsd}Name`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${xsd}token`),
      namedNode(xsd)
    ),
    quad(
      namedNode(`${xsd}QName`),
      namedNode(`${rdf}type`),
      namedNode(`${rdfs}Datatype`),
      namedNode(xsd)
    ),
    quad(
      namedNode(`${xsd}QName`),
      namedNode(`${rdfs}comment`),
      literal(`
    \`QName\` represents XML qualified names. The _value space_ of \`QName\` is the set
    of tuples \`{namespace name, local part}\`, where namespace name is an \`anyURI\`
    and local part is an \`NCName\`. The _lexical space_ of \`QName\` is the set of
    strings that match the \`QName\` production of [Namespaces in XML].
  `),
      namedNode(xsd)
    ),
    quad(
      namedNode(`${xsd}QName`),
      namedNode(`${rdfs}label`),
      literal(`QName`),
      namedNode(xsd)
    ),
    quad(
      namedNode(`${xsd}QName`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${xsd}anyAtomicType`),
      namedNode(xsd)
    ),
    quad(
      namedNode(`${xsd}anyAtomicType`),
      namedNode(`${rdf}type`),
      namedNode(`${rdfs}Datatype`),
      namedNode(xsd)
    ),
    quad(
      namedNode(`${xsd}anyAtomicType`),
      namedNode(`${rdfs}comment`),
      literal(`
    \`anyAtomicType\` is a special _restriction_ of \`anySimpleType\`. The _value_ and
    _lexical spaces_ of \`anyAtomicType\` are the unions of the _value_ and
    _lexical spaces_ of all the _primitive_ datatypes, and \`anyAtomicType\` is
    their _base type_.
  `),
      namedNode(xsd)
    ),
    quad(
      namedNode(`${xsd}anyAtomicType`),
      namedNode(`${rdfs}label`),
      literal(`anySimpleType`),
      namedNode(xsd)
    ),
    quad(
      namedNode(`${xsd}anyAtomicType`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${xsd}anyType`),
      namedNode(xsd)
    ),
    quad(
      namedNode(`${xsd}anySimpleType`),
      namedNode(`${rdf}type`),
      namedNode(`${rdfs}Datatype`),
      namedNode(xsd)
    ),
    quad(
      namedNode(`${xsd}anySimpleType`),
      namedNode(`${rdfs}comment`),
      literal(`
    The definition of \`anySimpleType\` is a special _restriction_ of \`anyType\`. The
    _lexical space_ of a\`nySimpleType\` is the set of all sequences of Unicode
    characters, and its _value space_ includes all _atomic values_ and all
    finite-length lists of zero or more _atomic values_.
  `),
      namedNode(xsd)
    ),
    quad(
      namedNode(`${xsd}anySimpleType`),
      namedNode(`${rdfs}label`),
      literal(`anySimpleType`),
      namedNode(xsd)
    ),
    quad(
      namedNode(`${xsd}anySimpleType`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${xsd}anyType`),
      namedNode(xsd)
    ),
    quad(
      namedNode(`${xsd}anyType`),
      namedNode(`${rdf}type`),
      namedNode(`${rdfs}Datatype`),
      namedNode(xsd)
    ),
    quad(
      namedNode(`${xsd}anyType`),
      namedNode(`${rdfs}comment`),
      literal(`
    The root of the [XML Schema 1.1] datatype heirarchy.
  `),
      namedNode(xsd)
    ),
    quad(
      namedNode(`${xsd}anyType`),
      namedNode(`${rdfs}label`),
      literal(`anyType`),
      namedNode(xsd)
    ),
    quad(
      namedNode(`${xsd}anyURI`),
      namedNode(`${rdf}type`),
      namedNode(`${rdfs}Datatype`),
      namedNode(xsd)
    ),
    quad(
      namedNode(`${xsd}anyURI`),
      namedNode(`${rdfs}comment`),
      literal(`
    \`anyURI\` represents an Internationalized Resource Identifier Reference
    (IRI). An \`anyURI\` value can be absolute or relative, and may have an
    optional fragment identifier (i.e., it may be an IRI Reference). This
    type should be used when the value fulfills the role of an IRI, as
    defined in [RFC 3987] or its successor(s) in the IETF Standards Track.
  `),
      namedNode(xsd)
    ),
    quad(
      namedNode(`${xsd}anyURI`),
      namedNode(`${rdfs}label`),
      literal(`anyURI`),
      namedNode(xsd)
    ),
    quad(
      namedNode(`${xsd}anyURI`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${xsd}anyAtomicType`),
      namedNode(xsd)
    ),
    quad(
      namedNode(`${xsd}base64Binary`),
      namedNode(`${rdf}type`),
      namedNode(`${rdfs}Datatype`),
      namedNode(xsd)
    ),
    quad(
      namedNode(`${xsd}base64Binary`),
      namedNode(`${rdfs}comment`),
      literal(`
    \`base64Binary\` represents arbitrary Base64-encoded binary data. For
    \`base64Binary\` data the entire binary stream is encoded using the \`Base64\`
    Encoding defined in [RFC 3548], which is derived from the encoding
    described in [RFC 2045].
  `),
      namedNode(xsd)
    ),
    quad(
      namedNode(`${xsd}base64Binary`),
      namedNode(`${rdfs}label`),
      literal(`base64Binary`),
      namedNode(xsd)
    ),
    quad(
      namedNode(`${xsd}base64Binary`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${xsd}anyAtomicType`),
      namedNode(xsd)
    ),
    quad(
      namedNode(`${xsd}boolean`),
      namedNode(`${rdf}type`),
      namedNode(`${rdfs}Datatype`),
      namedNode(xsd)
    ),
    quad(
      namedNode(`${xsd}boolean`),
      namedNode(`${rdfs}comment`),
      literal(`
    \`boolean\` represents the values of two-valued logic.
  `),
      namedNode(xsd)
    ),
    quad(
      namedNode(`${xsd}boolean`),
      namedNode(`${rdfs}label`),
      literal(`boolean`),
      namedNode(xsd)
    ),
    quad(
      namedNode(`${xsd}boolean`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${xsd}anyAtomicType`),
      namedNode(xsd)
    ),
    quad(
      namedNode(`${xsd}byte`),
      namedNode(`${rdf}type`),
      namedNode(`${rdfs}Datatype`),
      namedNode(xsd)
    ),
    quad(
      namedNode(`${xsd}byte`),
      namedNode(`${rdfs}comment`),
      literal(`
    \`byte\` is _derived_ from \`short\` by setting the value of \`maxInclusive\` to be
    \`127\` and \`minInclusive\` to be \`-128\`. The _base type_ of \`byte\` is \`short\`.
  `),
      namedNode(xsd)
    ),
    quad(
      namedNode(`${xsd}byte`),
      namedNode(`${rdfs}label`),
      literal(`byte`),
      namedNode(xsd)
    ),
    quad(
      namedNode(`${xsd}byte`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${xsd}short`),
      namedNode(xsd)
    ),
    quad(
      namedNode(`${xsd}date`),
      namedNode(`${rdf}type`),
      namedNode(`${rdfs}Datatype`),
      namedNode(xsd)
    ),
    quad(
      namedNode(`${xsd}date`),
      namedNode(`${rdfs}comment`),
      literal(`
    \`date\` represents top-open intervals of exactly one day in length on the
    timelines of \`dateTime\`, beginning on the beginning moment of each day, up to
    but not including the beginning moment of the next day). For non-timezoned
    values, the top-open intervals disjointly cover the non-timezoned timeline,
    one per day. For timezoned values, the intervals begin at every minute and
    therefore overlap.
  `),
      namedNode(xsd)
    ),
    quad(
      namedNode(`${xsd}date`),
      namedNode(`${rdfs}label`),
      literal(`date`),
      namedNode(xsd)
    ),
    quad(
      namedNode(`${xsd}date`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${xsd}anyAtomicType`),
      namedNode(xsd)
    ),
    quad(
      namedNode(`${xsd}dateTime`),
      namedNode(`${rdf}type`),
      namedNode(`${rdfs}Datatype`),
      namedNode(xsd)
    ),
    quad(
      namedNode(`${xsd}dateTime`),
      namedNode(`${rdfs}comment`),
      literal(`
    \`dateTime\` represents instants of time, optionally marked with a particular
    time zone offset. Values representing the same instant but having different
    time zone offsets are equal but not identical.
  `),
      namedNode(xsd)
    ),
    quad(
      namedNode(`${xsd}dateTime`),
      namedNode(`${rdfs}label`),
      literal(`dateTime`),
      namedNode(xsd)
    ),
    quad(
      namedNode(`${xsd}dateTime`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${xsd}anyAtomicType`),
      namedNode(xsd)
    ),
    quad(
      namedNode(`${xsd}dateTimeStamp`),
      namedNode(`${rdf}type`),
      namedNode(`${rdfs}Datatype`),
      namedNode(xsd)
    ),
    quad(
      namedNode(`${xsd}dateTimeStamp`),
      namedNode(`${rdfs}comment`),
      literal(`
    The \`dateTimeStamp\` datatype is _derived_ from \`dateTime\` by giving the value
    required to its \`explicitTimezone\` facet. The result is that all values of
    \`dateTimeStamp\` are required to have explicit time zone offsets and the
    datatype is totally ordered.
  `),
      namedNode(xsd)
    ),
    quad(
      namedNode(`${xsd}dateTimeStamp`),
      namedNode(`${rdfs}label`),
      literal(`dateTimeStamp`),
      namedNode(xsd)
    ),
    quad(
      namedNode(`${xsd}dateTimeStamp`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${xsd}dateTime`),
      namedNode(xsd)
    ),
    quad(
      namedNode(`${xsd}dayTimeDuration`),
      namedNode(`${rdf}type`),
      namedNode(`${rdfs}Datatype`),
      namedNode(xsd)
    ),
    quad(
      namedNode(`${xsd}dayTimeDuration`),
      namedNode(`${rdfs}comment`),
      literal(`
     \`dayTimeDuration\` is a datatype _derived_ from \`duration\` by restricting its
     _lexical representations_ to instances of \`dayTimeDurationLexicalRep\`. The
     _value space_ of \`dayTimeDuration\` is therefore that of \`duration\` restricted
     to those whose \`months\` property is \`0\`. This results in a \`duration\` datatype
     which is totally ordered.
  `),
      namedNode(xsd)
    ),
    quad(
      namedNode(`${xsd}dayTimeDuration`),
      namedNode(`${rdfs}label`),
      literal(`dayTimeDuration`),
      namedNode(xsd)
    ),
    quad(
      namedNode(`${xsd}dayTimeDuration`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${xsd}duration`),
      namedNode(xsd)
    ),
    quad(
      namedNode(`${xsd}decimal`),
      namedNode(`${rdf}type`),
      namedNode(`${rdfs}Datatype`),
      namedNode(xsd)
    ),
    quad(
      namedNode(`${xsd}decimal`),
      namedNode(`${rdfs}comment`),
      literal(`
    \`decimal\` represents a subset of the real numbers, which can be represented
    by decimal numerals. The _value space_ of decimal is the set of numbers
    that can be obtained by dividing an integer by a non-negative power of ten,
    i.e., expressible as \`i / 10n\` where \`i\` and \`n\` are integers and \`n ≥ 0\`.
    Precision is not reflected in this value space; the number \`2.0\` is not
    distinct from the number \`2.00\`. The order relation on \`decimal\` is the order
    relation on real numbers, restricted to this subset.
  `),
      namedNode(xsd)
    ),
    quad(
      namedNode(`${xsd}decimal`),
      namedNode(`${rdfs}label`),
      literal(`decimal`),
      namedNode(xsd)
    ),
    quad(
      namedNode(`${xsd}decimal`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${xsd}anyAtomicType`),
      namedNode(xsd)
    ),
    quad(
      namedNode(`${xsd}double`),
      namedNode(`${rdf}type`),
      namedNode(`${rdfs}Datatype`),
      namedNode(xsd)
    ),
    quad(
      namedNode(`${xsd}double`),
      namedNode(`${rdfs}comment`),
      literal(`
    The \`double\` datatype is patterned after the IEEE double-precision 64-bit
    floating point datatype [IEEE 754-2008]. Each floating point datatype has a
    value space that is a subset of the rational numbers. Floating point
    numbers are often used to approximate arbitrary real numbers.
  `),
      namedNode(xsd)
    ),
    quad(
      namedNode(`${xsd}double`),
      namedNode(`${rdfs}label`),
      literal(`double`),
      namedNode(xsd)
    ),
    quad(
      namedNode(`${xsd}double`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${xsd}anyAtomicType`),
      namedNode(xsd)
    ),
    quad(
      namedNode(`${xsd}duration`),
      namedNode(`${rdf}type`),
      namedNode(`${rdfs}Datatype`),
      namedNode(xsd)
    ),
    quad(
      namedNode(`${xsd}duration`),
      namedNode(`${rdfs}comment`),
      literal(`
    \`duration\` is a datatype that represents durations of time. The concept of
    duration being captured is drawn from those of [ISO 8601], specifically
    durations without fixed endpoints. For example, "15 days" (whose most
    common lexical representation in duration is \`"'P15D'"\`) is a duration value;
    "15 days beginning 12 July 1995" and "15 days ending 12 July 1995" are not
    duration values. duration can provide addition and subtraction operations
    between duration values and between duration/dateTime value pairs, and can
    be the result of subtracting dateTime values. However, only addition to
    \`dateTime\` is required for XML Schema processing and is defined in the
    function \`dateTimePlusDuration\`.
  `),
      namedNode(xsd)
    ),
    quad(
      namedNode(`${xsd}duration`),
      namedNode(`${rdfs}label`),
      literal(`duration`),
      namedNode(xsd)
    ),
    quad(
      namedNode(`${xsd}duration`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${xsd}anyAtomicType`),
      namedNode(xsd)
    ),
    quad(
      namedNode(`${xsd}float`),
      namedNode(`${rdf}type`),
      namedNode(`${rdfs}Datatype`),
      namedNode(xsd)
    ),
    quad(
      namedNode(`${xsd}float`),
      namedNode(`${rdfs}comment`),
      literal(`
    The \`float\` datatype is patterned after the IEEE single-precision 32-bit
    floating point datatype [IEEE 754-2008]. Its value space is a subset of the
    rational numbers. Floating point numbers are often used to approximate
    arbitrary real numbers.
  `),
      namedNode(xsd)
    ),
    quad(
      namedNode(`${xsd}float`),
      namedNode(`${rdfs}label`),
      literal(`float`),
      namedNode(xsd)
    ),
    quad(
      namedNode(`${xsd}float`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${xsd}anyAtomicType`),
      namedNode(xsd)
    ),
    quad(
      namedNode(`${xsd}gDay`),
      namedNode(`${rdf}type`),
      namedNode(`${rdfs}Datatype`),
      namedNode(xsd)
    ),
    quad(
      namedNode(`${xsd}gDay`),
      namedNode(`${rdfs}comment`),
      literal(`
    \`gDay\` represents whole days within an arbitrary month—days that recur at the
    same point in each (Gregorian) month. This datatype is used to represent a
    specific day of the month. To indicate, for example, that an employee gets
    a paycheck on the 15th of each month. (Obviously, days beyond 28 cannot
    occur in all months; they are nonetheless permitted, up to 31.)
  `),
      namedNode(xsd)
    ),
    quad(
      namedNode(`${xsd}gDay`),
      namedNode(`${rdfs}label`),
      literal(`gDay`),
      namedNode(xsd)
    ),
    quad(
      namedNode(`${xsd}gDay`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${xsd}anyAtomicType`),
      namedNode(xsd)
    ),
    quad(
      namedNode(`${xsd}gMonth`),
      namedNode(`${rdf}type`),
      namedNode(`${rdfs}Datatype`),
      namedNode(xsd)
    ),
    quad(
      namedNode(`${xsd}gMonth`),
      namedNode(`${rdfs}comment`),
      literal(`
    \`gMonth\` represents whole (Gregorian) months within an arbitrary year—months
    that recur at the same point in each year. It might be used, for example,
    to say what month annual Thanksgiving celebrations fall in different
    countries (\`--11\` in the United States, \`--10\` in Canada, and possibly other
    months in other countries).
  `),
      namedNode(xsd)
    ),
    quad(
      namedNode(`${xsd}gMonth`),
      namedNode(`${rdfs}label`),
      literal(`gMonth`),
      namedNode(xsd)
    ),
    quad(
      namedNode(`${xsd}gMonth`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${xsd}anyAtomicType`),
      namedNode(xsd)
    ),
    quad(
      namedNode(`${xsd}gMonthDay`),
      namedNode(`${rdf}type`),
      namedNode(`${rdfs}Datatype`),
      namedNode(xsd)
    ),
    quad(
      namedNode(`${xsd}gMonthDay`),
      namedNode(`${rdfs}comment`),
      literal(`
    \`gMonthDay\` represents whole calendar days that recur at the same point in
    each calendar year, or that occur in some arbitrary calendar year.
    (Obviously, days beyond 28 cannot occur in all Februaries; 29 is
    nonetheless permitted.)
  `),
      namedNode(xsd)
    ),
    quad(
      namedNode(`${xsd}gMonthDay`),
      namedNode(`${rdfs}label`),
      literal(`gMonthDay`),
      namedNode(xsd)
    ),
    quad(
      namedNode(`${xsd}gMonthDay`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${xsd}anyAtomicType`),
      namedNode(xsd)
    ),
    quad(
      namedNode(`${xsd}gYear`),
      namedNode(`${rdf}type`),
      namedNode(`${rdfs}Datatype`),
      namedNode(xsd)
    ),
    quad(
      namedNode(`${xsd}gYear`),
      namedNode(`${rdfs}comment`),
      literal(`
    \`gYear\` represents Gregorian calendar years.
  `),
      namedNode(xsd)
    ),
    quad(
      namedNode(`${xsd}gYear`),
      namedNode(`${rdfs}label`),
      literal(`gYear`),
      namedNode(xsd)
    ),
    quad(
      namedNode(`${xsd}gYear`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${xsd}anyAtomicType`),
      namedNode(xsd)
    ),
    quad(
      namedNode(`${xsd}gYearMonth`),
      namedNode(`${rdf}type`),
      namedNode(`${rdfs}Datatype`),
      namedNode(xsd)
    ),
    quad(
      namedNode(`${xsd}gYearMonth`),
      namedNode(`${rdfs}comment`),
      literal(`
    \`gYearMonth\` represents specific whole Gregorian months in specific Gregorian years.
  `),
      namedNode(xsd)
    ),
    quad(
      namedNode(`${xsd}gYearMonth`),
      namedNode(`${rdfs}label`),
      literal(`gYearMonth`),
      namedNode(xsd)
    ),
    quad(
      namedNode(`${xsd}gYearMonth`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${xsd}anyAtomicType`),
      namedNode(xsd)
    ),
    quad(
      namedNode(`${xsd}hexBinary`),
      namedNode(`${rdf}type`),
      namedNode(`${rdfs}Datatype`),
      namedNode(xsd)
    ),
    quad(
      namedNode(`${xsd}hexBinary`),
      namedNode(`${rdfs}comment`),
      literal(`
    hexBinary\` represents arbitrary hex-encoded binary data. 
  `),
      namedNode(xsd)
    ),
    quad(
      namedNode(`${xsd}hexBinary`),
      namedNode(`${rdfs}label`),
      literal(`hexBinary`),
      namedNode(xsd)
    ),
    quad(
      namedNode(`${xsd}hexBinary`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${xsd}anyAtomicType`),
      namedNode(xsd)
    ),
    quad(
      namedNode(`${xsd}int`),
      namedNode(`${rdf}type`),
      namedNode(`${rdfs}Datatype`),
      namedNode(xsd)
    ),
    quad(
      namedNode(`${xsd}int`),
      namedNode(`${rdfs}comment`),
      literal(`
      \`int\` is _derived_ from \`long\` by setting the value of \`maxInclusive\` to be
      \`2147483647\` and \`minInclusive\` to be \`-2147483648\`. The _base type_ of \`int\`
      is \`long\`.
  `),
      namedNode(xsd)
    ),
    quad(
      namedNode(`${xsd}int`),
      namedNode(`${rdfs}label`),
      literal(`int`),
      namedNode(xsd)
    ),
    quad(
      namedNode(`${xsd}int`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${xsd}long`),
      namedNode(xsd)
    ),
    quad(
      namedNode(`${xsd}integer`),
      namedNode(`${rdf}type`),
      namedNode(`${rdfs}Datatype`),
      namedNode(xsd)
    ),
    quad(
      namedNode(`${xsd}integer`),
      namedNode(`${rdfs}comment`),
      literal(`
     \`integer\` is _derived_ from \`decimal\` by fixing the value of \`fractionDigits\`
     to be \`0\` and disallowing the trailing decimal point. This results in the
     standard mathematical concept of the integer numbers. The _value space_ of
     \`integer\` is the infinite set \`{...,-2,-1,0,1,2,...}\`. The _base type_ of
     \`integer\` is \`decimal\`.
  `),
      namedNode(xsd)
    ),
    quad(
      namedNode(`${xsd}integer`),
      namedNode(`${rdfs}label`),
      literal(`integer`),
      namedNode(xsd)
    ),
    quad(
      namedNode(`${xsd}integer`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${xsd}decimal`),
      namedNode(xsd)
    ),
    quad(
      namedNode(`${xsd}language`),
      namedNode(`${rdf}type`),
      namedNode(`${rdfs}Datatype`),
      namedNode(xsd)
    ),
    quad(
      namedNode(`${xsd}language`),
      namedNode(`${rdfs}comment`),
      literal(`
    \`language\` represents formal natural language identifiers, as defined by [BCP
    47] (currently represented by [RFC 4646] and [RFC 4647]) or its
    successor(s). The _value space_ and _lexical space_ of \`language\` are the set
    of all strings that conform to the pattern \`[a-zA-Z]{1,8}(-[a-zA-Z0-9]{1,8})*\`.
  `),
      namedNode(xsd)
    ),
    quad(
      namedNode(`${xsd}language`),
      namedNode(`${rdfs}label`),
      literal(`language`),
      namedNode(xsd)
    ),
    quad(
      namedNode(`${xsd}language`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${xsd}token`),
      namedNode(xsd)
    ),
    quad(
      namedNode(`${xsd}long`),
      namedNode(`${rdf}type`),
      namedNode(`${rdfs}Datatype`),
      namedNode(xsd)
    ),
    quad(
      namedNode(`${xsd}long`),
      namedNode(`${rdfs}comment`),
      literal(`
     \`long\` is _derived_ from \`integer\` by setting the value of \`maxInclusive\` to
     be \`9223372036854775807\` and \`minInclusive\` to be \`-9223372036854775808\`. The
     _base type_ of \`long\` is \`integer\`.
  `),
      namedNode(xsd)
    ),
    quad(
      namedNode(`${xsd}long`),
      namedNode(`${rdfs}label`),
      literal(`long`),
      namedNode(xsd)
    ),
    quad(
      namedNode(`${xsd}long`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${xsd}integer`),
      namedNode(xsd)
    ),
    quad(
      namedNode(`${xsd}negativeInteger`),
      namedNode(`${rdf}type`),
      namedNode(`${rdfs}Datatype`),
      namedNode(xsd)
    ),
    quad(
      namedNode(`${xsd}negativeInteger`),
      namedNode(`${rdfs}comment`),
      literal(`
     \`negativeInteger\` is _derived_ from \`nonPositiveInteger\` by setting the value
     of \`maxInclusive\` to be \`-1\`. This results in the standard mathematical
     concept of the negative integers. The _value space_ of \`negativeInteger\` is
     the infinite set \`{...,-2,-1}\`. The _base type_ of \`negativeInteger\` is
     \`nonPositiveInteger\`.
  `),
      namedNode(xsd)
    ),
    quad(
      namedNode(`${xsd}negativeInteger`),
      namedNode(`${rdfs}label`),
      literal(`negativeInteger`),
      namedNode(xsd)
    ),
    quad(
      namedNode(`${xsd}negativeInteger`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${xsd}nonPositiveInteger`),
      namedNode(xsd)
    ),
    quad(
      namedNode(`${xsd}nonNegativeInteger`),
      namedNode(`${rdf}type`),
      namedNode(`${rdfs}Datatype`),
      namedNode(xsd)
    ),
    quad(
      namedNode(`${xsd}nonNegativeInteger`),
      namedNode(`${rdfs}comment`),
      literal(`
     \`nonNegativeInteger\` is _derived_ from \`integer\` by setting the value of
     \`minInclusive\` to be \`0\`. This results in the standard mathematical concept
     of the non-negative integers. The _value space_ of \`nonNegativeInteger\` is
     the infinite set \`{0,1,2,...}\`. The _base type_ of \`nonNegativeInteger\` is
     \`integer\`.
  `),
      namedNode(xsd)
    ),
    quad(
      namedNode(`${xsd}nonNegativeInteger`),
      namedNode(`${rdfs}label`),
      literal(`nonNegativeInteger`),
      namedNode(xsd)
    ),
    quad(
      namedNode(`${xsd}nonNegativeInteger`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${xsd}integer`),
      namedNode(xsd)
    ),
    quad(
      namedNode(`${xsd}nonPositiveInteger`),
      namedNode(`${rdf}type`),
      namedNode(`${rdfs}Datatype`),
      namedNode(xsd)
    ),
    quad(
      namedNode(`${xsd}nonPositiveInteger`),
      namedNode(`${rdfs}comment`),
      literal(`
    \`nonPositiveInteger\` is _derived_ from \`integer\` by setting the value of
    \`maxInclusive\` to be \`0\`. This results in the standard mathematical concept
    of the non-positive integers. The _value space_ of \`nonPositiveInteger\` is
    the infinite set \`{...,-2,-1,0}\`. The _base type_ of \`nonPositiveInteger\` is
    \`integer\`.
  `),
      namedNode(xsd)
    ),
    quad(
      namedNode(`${xsd}nonPositiveInteger`),
      namedNode(`${rdfs}label`),
      literal(`nonPositiveInteger`),
      namedNode(xsd)
    ),
    quad(
      namedNode(`${xsd}nonPositiveInteger`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${xsd}integer`),
      namedNode(xsd)
    ),
    quad(
      namedNode(`${xsd}normalizedString`),
      namedNode(`${rdf}type`),
      namedNode(`${rdfs}Datatype`),
      namedNode(xsd)
    ),
    quad(
      namedNode(`${xsd}normalizedString`),
      namedNode(`${rdfs}comment`),
      literal(`
    \`normalizedString\` represents white space normalized strings. The _value
    space_ of \`normalizedString\` is the set of strings that do not contain the
    carriage return (\`#xD\`), line feed (\`#xA\`) nor tab (\`#x9\`) characters. The
    _lexical space_ of \`normalizedString\` is the set of strings that do not
    contain the carriage return (\`#xD\`), line feed (\`#xA\`) nor tab (\`#x9\`)
    characters. The _base type_ of \`normalizedString\` is \`string\`.
  `),
      namedNode(xsd)
    ),
    quad(
      namedNode(`${xsd}normalizedString`),
      namedNode(`${rdfs}label`),
      literal(`normalizedString`),
      namedNode(xsd)
    ),
    quad(
      namedNode(`${xsd}normalizedString`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${xsd}string`),
      namedNode(xsd)
    ),
    quad(
      namedNode(`${xsd}positiveInteger`),
      namedNode(`${rdf}type`),
      namedNode(`${rdfs}Datatype`),
      namedNode(xsd)
    ),
    quad(
      namedNode(`${xsd}positiveInteger`),
      namedNode(`${rdfs}comment`),
      literal(`
     \`positiveInteger\` is _derived_ from \`nonNegativeInteger\` by setting the value
     of \`minInclusive\` to be \`1\`. This results in the standard mathematical
     concept of the positive integer numbers. The _value space_ of
     \`positiveInteger\` is the infinite set \`{1,2,...}\`. The _base type_ of
     \`positiveInteger\` is \`nonNegativeInteger\`.
  `),
      namedNode(xsd)
    ),
    quad(
      namedNode(`${xsd}positiveInteger`),
      namedNode(`${rdfs}label`),
      literal(`positiveInteger`),
      namedNode(xsd)
    ),
    quad(
      namedNode(`${xsd}positiveInteger`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${xsd}nonNegativeInteger`),
      namedNode(xsd)
    ),
    quad(
      namedNode(`${xsd}short`),
      namedNode(`${rdf}type`),
      namedNode(`${rdfs}Datatype`),
      namedNode(xsd)
    ),
    quad(
      namedNode(`${xsd}short`),
      namedNode(`${rdfs}comment`),
      literal(`
    \`short\` is _derived_ from \`int\` by setting the value of \`maxInclusive\` to be
    \`32767\` and \`minInclusive\` to be \`-32768\`. The _base type_ of \`short\` is \`int\`.
  `),
      namedNode(xsd)
    ),
    quad(
      namedNode(`${xsd}short`),
      namedNode(`${rdfs}label`),
      literal(`short`),
      namedNode(xsd)
    ),
    quad(
      namedNode(`${xsd}short`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${xsd}int`),
      namedNode(xsd)
    ),
    quad(
      namedNode(`${xsd}string`),
      namedNode(`${rdf}type`),
      namedNode(`${rdfs}Datatype`),
      namedNode(xsd)
    ),
    quad(
      namedNode(`${xsd}string`),
      namedNode(`${rdfs}comment`),
      literal(`
    The \`string\` datatype represents character strings in XML.
  `),
      namedNode(xsd)
    ),
    quad(
      namedNode(`${xsd}string`),
      namedNode(`${rdfs}label`),
      literal(`string`),
      namedNode(xsd)
    ),
    quad(
      namedNode(`${xsd}string`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${xsd}anyAtomicType`),
      namedNode(xsd)
    ),
    quad(
      namedNode(`${xsd}time`),
      namedNode(`${rdf}type`),
      namedNode(`${rdfs}Datatype`),
      namedNode(xsd)
    ),
    quad(
      namedNode(`${xsd}time`),
      namedNode(`${rdfs}comment`),
      literal(`
    \`time\` represents instants of time that recur at the same point in each
    calendar day, or that occur in some arbitrary calendar day.
  `),
      namedNode(xsd)
    ),
    quad(
      namedNode(`${xsd}time`),
      namedNode(`${rdfs}label`),
      literal(`time`),
      namedNode(xsd)
    ),
    quad(
      namedNode(`${xsd}time`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${xsd}anyAtomicType`),
      namedNode(xsd)
    ),
    quad(
      namedNode(`${xsd}token`),
      namedNode(`${rdf}type`),
      namedNode(`${rdfs}Datatype`),
      namedNode(xsd)
    ),
    quad(
      namedNode(`${xsd}token`),
      namedNode(`${rdfs}comment`),
      literal(`
     \`token\` represents tokenized strings. The _value space_ of \`token\` is the set
     of strings that do not contain the carriage return (\`#xD\`), line feed (\`#xA\`)
     nor tab (\`#x9\`) characters, that have no leading or trailing spaces (\`#x20\`)
     and that have no internal sequences of two or more spaces. The _lexical
     space_ of \`token\` is the set of strings that do not contain the carriage
     return (\`#xD\`), line feed (\`#xA\`) nor tab (\`#x9\`) characters, that have no
     leading or trailing spaces (\`#x20\`) and that have no internal sequences of
     two or more spaces. The _base type_ of \`token\` is \`normalizedString\`.
  `),
      namedNode(xsd)
    ),
    quad(
      namedNode(`${xsd}token`),
      namedNode(`${rdfs}label`),
      literal(`token`),
      namedNode(xsd)
    ),
    quad(
      namedNode(`${xsd}token`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${xsd}normalizedString`),
      namedNode(xsd)
    ),
    quad(
      namedNode(`${xsd}unsignedByte`),
      namedNode(`${rdf}type`),
      namedNode(`${rdfs}Datatype`),
      namedNode(xsd)
    ),
    quad(
      namedNode(`${xsd}unsignedByte`),
      namedNode(`${rdfs}comment`),
      literal(`
      \`unsignedByte\` is _derived_ from \`unsignedShort\` by setting the value of
      \`maxInclusive\` to be \`255\`. The _base type_ of \`unsignedByte\` is
      \`unsignedShort\`.
    `),
      namedNode(xsd)
    ),
    quad(
      namedNode(`${xsd}unsignedByte`),
      namedNode(`${rdfs}label`),
      literal(`unsignedByte`),
      namedNode(xsd)
    ),
    quad(
      namedNode(`${xsd}unsignedByte`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${xsd}unsignedShort`),
      namedNode(xsd)
    ),
    quad(
      namedNode(`${xsd}unsignedInt`),
      namedNode(`${rdf}type`),
      namedNode(`${rdfs}Datatype`),
      namedNode(xsd)
    ),
    quad(
      namedNode(`${xsd}unsignedInt`),
      namedNode(`${rdfs}comment`),
      literal(`
    \`unsignedInt\` is _derived_ from \`unsignedLong\` by setting the value of
    \`maxInclusive\` to be \`4294967295\`. The _base type_ of \`unsignedInt\` is
    \`unsignedLong\`.
  `),
      namedNode(xsd)
    ),
    quad(
      namedNode(`${xsd}unsignedInt`),
      namedNode(`${rdfs}label`),
      literal(`unsignedInt`),
      namedNode(xsd)
    ),
    quad(
      namedNode(`${xsd}unsignedInt`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${xsd}unsignedLong`),
      namedNode(xsd)
    ),
    quad(
      namedNode(`${xsd}unsignedLong`),
      namedNode(`${rdf}type`),
      namedNode(`${rdfs}Datatype`),
      namedNode(xsd)
    ),
    quad(
      namedNode(`${xsd}unsignedLong`),
      namedNode(`${rdfs}comment`),
      literal(`
     \`unsignedLong\` is _derived_ from \`nonNegativeInteger\` by setting the value of
     \`maxInclusive\` to be \`18446744073709551615\`. The _base type_ of \`unsignedLong\`
     is \`nonNegativeInteger\`.
  `),
      namedNode(xsd)
    ),
    quad(
      namedNode(`${xsd}unsignedLong`),
      namedNode(`${rdfs}label`),
      literal(`unsignedLong`),
      namedNode(xsd)
    ),
    quad(
      namedNode(`${xsd}unsignedLong`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${xsd}nonNegativeInteger`),
      namedNode(xsd)
    ),
    quad(
      namedNode(`${xsd}unsignedShort`),
      namedNode(`${rdf}type`),
      namedNode(`${rdfs}Datatype`),
      namedNode(xsd)
    ),
    quad(
      namedNode(`${xsd}unsignedShort`),
      namedNode(`${rdfs}comment`),
      literal(`
       \`unsignedShort\` is _derived_ from \`unsignedInt\` by setting the value of
       \`maxInclusive\` to be \`65535\`. The _base type_ of \`unsignedShort\` is
       \`unsignedInt\`.
    `),
      namedNode(xsd)
    ),
    quad(
      namedNode(`${xsd}unsignedShort`),
      namedNode(`${rdfs}label`),
      literal(`unsignedShort`),
      namedNode(xsd)
    ),
    quad(
      namedNode(`${xsd}unsignedShort`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${xsd}unsignedInt`),
      namedNode(xsd)
    ),
    quad(
      namedNode(`${xsd}yearMonthDuration`),
      namedNode(`${rdf}type`),
      namedNode(`${rdfs}Datatype`),
      namedNode(xsd)
    ),
    quad(
      namedNode(`${xsd}yearMonthDuration`),
      namedNode(`${rdfs}comment`),
      literal(`
     \`yearMonthDuration\` is a datatype _derived_ from \`duration\` by restricting its
     _lexical representations_ to instances of \`yearMonthDurationLexicalRep\`. The
     _value space_ of \`yearMonthDuration\` is therefore that of \`duration\`
     restricted to those whose \`seconds\` property is \`0\`. This results in a
     \`duration\` datatype which is totally ordered.
  `),
      namedNode(xsd)
    ),
    quad(
      namedNode(`${xsd}yearMonthDuration`),
      namedNode(`${rdfs}label`),
      literal(`yearMonthDuration`),
      namedNode(xsd)
    ),
    quad(
      namedNode(`${xsd}yearMonthDuration`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${xsd}duration`),
      namedNode(xsd)
    ),

  ]
}
