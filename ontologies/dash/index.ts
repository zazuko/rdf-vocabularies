/* This file was automatically generated. Do not edit by hand. */

const {
  dash,
  rdf,
  rdfs,
  sh,
  xsd,
  ns6,
  owl,
  ns8
} = {
  'dash': 'http://datashapes.org/dash#',
  'rdf': 'http://www.w3.org/1999/02/22-rdf-syntax-ns#',
  'rdfs': 'http://www.w3.org/2000/01/rdf-schema#',
  'sh': 'http://www.w3.org/ns/shacl#',
  'xsd': 'http://www.w3.org/2001/XMLSchema#',
  'ns6': 'http://datashapes.org/',
  'owl': 'http://www.w3.org/2002/07/owl#',
  'ns8': 'https://www.w3.org/TR/shacl-af/#'
}

export default ({ blankNode, literal, namedNode, quad }: import('rdf-js').DataFactory): import('rdf-js').Quad[] => {
  const blankNodes: import('rdf-js').BlankNode[] = []
  for (let i = 0; i < 73; i++) {
    blankNodes.push(blankNode())
  }

  return [
    quad(
      namedNode(`${dash}APIStatus`),
      namedNode(`${rdf}type`),
      namedNode(`${rdfs}Class`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}APIStatus`),
      namedNode(`${rdf}type`),
      namedNode(`${sh}NodeShape`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}APIStatus`),
      namedNode(`${rdfs}comment`),
      literal(`The class of possible values for dash:apiStatus.`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}APIStatus`),
      namedNode(`${rdfs}label`),
      literal(`API Status`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}APIStatus`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${rdfs}Resource`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}Action`),
      namedNode(`${dash}abstract`),
      literal(`true`, namedNode(`${xsd}boolean`)),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}Action`),
      namedNode(`${rdf}type`),
      namedNode(`${dash}ShapeClass`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}Action`),
      namedNode(`${rdfs}comment`),
      literal(`An executable command triggered by an agent, backed by a Script implementation. Actions may get deactivated using sh:deactivated.`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}Action`),
      namedNode(`${rdfs}label`),
      literal(`Action`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}Action`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${dash}Script`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}Action`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${sh}Parameterizable`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}ActionGroup`),
      namedNode(`${rdf}type`),
      namedNode(`${dash}ShapeClass`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}ActionGroup`),
      namedNode(`${rdfs}comment`),
      literal(`A group of ResourceActions, used to arrange items in menus etc. Similar to sh:PropertyGroups, they may have a sh:order and should have labels (in multiple languages if applicable).`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}ActionGroup`),
      namedNode(`${rdfs}label`),
      literal(`Action group`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}ActionGroup`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${rdfs}Resource`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}ActionTestCase`),
      namedNode(`${rdf}type`),
      namedNode(`${dash}ShapeClass`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}ActionTestCase`),
      namedNode(`${rdfs}comment`),
      literal(`A test case that evaluates a dash:Action using provided input parameters. Requires exactly one value for dash:action and will operate on the test case's graph (with imports) as both data and shapes graph.

Currently only supports read-only actions, allowing the comparison of actual results with the expected results.`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}ActionTestCase`),
      namedNode(`${rdfs}label`),
      literal(`Action test case`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}ActionTestCase`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${dash}TestCase`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}AllObjects`),
      namedNode(`${rdf}type`),
      namedNode(`${dash}AllObjectsTarget`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}AllObjects`),
      namedNode(`${rdfs}comment`),
      literal(`A reusable instance of dash:AllObjectsTarget.`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}AllObjects`),
      namedNode(`${rdfs}label`),
      literal(`All objects`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}AllObjectsTarget`),
      namedNode(`${rdf}type`),
      namedNode(`${sh}SPARQLTargetType`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}AllObjectsTarget`),
      namedNode(`${rdfs}comment`),
      literal(`A target containing all objects in the data graph as focus nodes.`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}AllObjectsTarget`),
      namedNode(`${rdfs}label`),
      literal(`All objects target`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}AllObjectsTarget`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${sh}Target`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}AllObjectsTarget`),
      namedNode(`${sh}labelTemplate`),
      literal(`All objects`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}AllObjectsTarget`),
      namedNode(`${sh}prefixes`),
      namedNode(`${ns6}dash`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}AllObjectsTarget`),
      namedNode(`${sh}select`),
      literal(`SELECT DISTINCT ?this
WHERE {
    ?anyS ?anyP ?this .
}`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}AllSubjects`),
      namedNode(`${rdf}type`),
      namedNode(`${dash}AllSubjectsTarget`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}AllSubjects`),
      namedNode(`${rdfs}comment`),
      literal(`A reusable instance of dash:AllSubjectsTarget.`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}AllSubjects`),
      namedNode(`${rdfs}label`),
      literal(`All subjects`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}AllSubjectsTarget`),
      namedNode(`${rdf}type`),
      namedNode(`${sh}SPARQLTargetType`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}AllSubjectsTarget`),
      namedNode(`${rdfs}comment`),
      literal(`A target containing all subjects in the data graph as focus nodes.`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}AllSubjectsTarget`),
      namedNode(`${rdfs}label`),
      literal(`All subjects target`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}AllSubjectsTarget`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${sh}Target`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}AllSubjectsTarget`),
      namedNode(`${sh}labelTemplate`),
      literal(`All subjects`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}AllSubjectsTarget`),
      namedNode(`${sh}prefixes`),
      namedNode(`${ns6}dash`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}AllSubjectsTarget`),
      namedNode(`${sh}select`),
      literal(`SELECT DISTINCT ?this
WHERE {
    ?this ?anyP ?anyO .
}`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}AutoCompleteEditor`),
      namedNode(`${rdf}type`),
      namedNode(`${dash}SingleEditor`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}AutoCompleteEditor`),
      namedNode(`${rdfs}comment`),
      literal(`An auto-complete field to enter the label of instances of a class. This is the fallback editor for any URI resource if no other editors are more suitable.`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}AutoCompleteEditor`),
      namedNode(`${rdfs}label`),
      literal(`Auto-complete editor`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}BlankNodeViewer`),
      namedNode(`${rdf}type`),
      namedNode(`${dash}SingleViewer`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}BlankNodeViewer`),
      namedNode(`${rdfs}comment`),
      literal(`A Viewer for blank nodes, rendering as the label of the blank node.`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}BlankNodeViewer`),
      namedNode(`${rdfs}label`),
      literal(`Blank node viewer`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}BooleanSelectEditor`),
      namedNode(`${rdf}type`),
      namedNode(`${dash}SingleEditor`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}BooleanSelectEditor`),
      namedNode(`${rdfs}comment`),
      literal(`An editor for boolean literals, rendering as a select box with values true and false.

Also displays the current value (such as "1"^^xsd:boolean), but only allows to switch to true or false.`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}BooleanSelectEditor`),
      namedNode(`${rdfs}label`),
      literal(`Boolean select editor`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}ChangeScript`),
      namedNode(`${rdf}type`),
      namedNode(`${dash}ShapeClass`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}ChangeScript`),
      namedNode(`${rdfs}comment`),
      literal(`Class of ADS scripts that are executed after edits to the data graph were made, but within the same edit.

These scripts may access the current changes from the graphs with names dataset.addedGraphURI and dataset.deletedGraphURI to learn about which resource values have been added or deleted. For example query them using graph.withDataGraph(dataset.addedGraphURI, ...) or via SPARQL's GRAPH keyword.

Change scripts may then perform further changes which would again become visible to other change scripts. They MUST NOT have other side effects though, because they may get executed in Preview mode, or the change may cause constraint violations and then be rejected. For side effects, after the change has been applied, use commit scripts (dash:CommitScript).

Change scripts are executed by their relative sh:order, with a default value of 0. Use lower values to execute before other scripts.`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}ChangeScript`),
      namedNode(`${rdfs}label`),
      literal(`Change script`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}ChangeScript`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${dash}Script`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}ClosedByTypesConstraintComponent-closedByTypes`),
      namedNode(`${dash}reifiableBy`),
      namedNode(`${dash}ConstraintReificationShape`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}ClosedByTypesConstraintComponent-closedByTypes`),
      namedNode(`${rdf}type`),
      namedNode(`${sh}Parameter`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}ClosedByTypesConstraintComponent-closedByTypes`),
      namedNode(`${sh}datatype`),
      namedNode(`${xsd}boolean`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}ClosedByTypesConstraintComponent-closedByTypes`),
      namedNode(`${sh}description`),
      literal(`True to indicate that the focus nodes are closed by their types. A constraint violation is reported for each property value of the focus node where the property is not among those that are explicitly declared via sh:property/sh:path in any of the rdf:types of the focus node (and their superclasses). The property rdf:type is always permitted.`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}ClosedByTypesConstraintComponent-closedByTypes`),
      namedNode(`${sh}maxCount`),
      literal(`1`, namedNode(`${xsd}integer`)),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}ClosedByTypesConstraintComponent-closedByTypes`),
      namedNode(`${sh}path`),
      namedNode(`${dash}closedByTypes`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}ClosedByTypesConstraintComponent`),
      namedNode(`${rdf}type`),
      namedNode(`${sh}ConstraintComponent`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}ClosedByTypesConstraintComponent`),
      namedNode(`${rdfs}comment`),
      literal(`A constraint component that can be used to declare that focus nodes are "closed" based on their rdf:types, meaning that focus nodes may only have values for the properties that are explicitly enumerated via sh:property/sh:path in property constraints at their rdf:types and the superclasses of those. This assumes that the type classes are also shapes.`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}ClosedByTypesConstraintComponent`),
      namedNode(`${rdfs}label`),
      literal(`Closed by types constraint component`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}ClosedByTypesConstraintComponent`),
      namedNode(`${sh}nodeValidator`),
      blankNodes[0],
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}ClosedByTypesConstraintComponent`),
      namedNode(`${sh}parameter`),
      namedNode(`${dash}ClosedByTypesConstraintComponent-closedByTypes`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}CoExistsWithConstraintComponent-coExistsWith`),
      namedNode(`${dash}editor`),
      namedNode(`${dash}PropertyAutoCompleteEditor`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}CoExistsWithConstraintComponent-coExistsWith`),
      namedNode(`${dash}reifiableBy`),
      namedNode(`${dash}ConstraintReificationShape`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}CoExistsWithConstraintComponent-coExistsWith`),
      namedNode(`${dash}viewer`),
      namedNode(`${dash}PropertyLabelViewer`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}CoExistsWithConstraintComponent-coExistsWith`),
      namedNode(`${rdf}type`),
      namedNode(`${sh}Parameter`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}CoExistsWithConstraintComponent-coExistsWith`),
      namedNode(`${sh}description`),
      literal(`The properties that must co-exist with the surrounding property (path). If the surrounding property path has any value then the given property must also have a value, and vice versa.`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}CoExistsWithConstraintComponent-coExistsWith`),
      namedNode(`${sh}name`),
      literal(`co-exists with`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}CoExistsWithConstraintComponent-coExistsWith`),
      namedNode(`${sh}nodeKind`),
      namedNode(`${sh}IRI`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}CoExistsWithConstraintComponent-coExistsWith`),
      namedNode(`${sh}path`),
      namedNode(`${dash}coExistsWith`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}CoExistsWithConstraintComponent`),
      namedNode(`${dash}localConstraint`),
      literal(`true`, namedNode(`${xsd}boolean`)),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}CoExistsWithConstraintComponent`),
      namedNode(`${rdf}type`),
      namedNode(`${sh}ConstraintComponent`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}CoExistsWithConstraintComponent`),
      namedNode(`${rdfs}comment`),
      literal(`A constraint component that can be used to express a constraint on property shapes so that if the property path has any value then the given property must also have a value, and vice versa.`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}CoExistsWithConstraintComponent`),
      namedNode(`${rdfs}label`),
      literal(`Co-exists-with constraint component`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}CoExistsWithConstraintComponent`),
      namedNode(`${sh}message`),
      literal(`Values must co-exist with values of {$coExistsWith}`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}CoExistsWithConstraintComponent`),
      namedNode(`${sh}parameter`),
      namedNode(`${dash}CoExistsWithConstraintComponent-coExistsWith`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}CoExistsWithConstraintComponent`),
      namedNode(`${sh}propertyValidator`),
      blankNodes[1],
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}CommitScript`),
      namedNode(`${rdf}type`),
      namedNode(`${dash}ShapeClass`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}CommitScript`),
      namedNode(`${rdfs}comment`),
      literal(`Class of ADS scripts that are executed after edits to the data graph were made and have been committed.

These scripts may access the changes that have just happened from the graphs with names dataset.addedGraphURI and dataset.deletedGraphURI to learn about which resource values have been added or deleted. For example query them using graph.withDataGraph(dataset.addedGraphURI, ...) or via SPARQL's GRAPH keyword.

Commit scripts may then perform side effects such as updating other graphs or sending out notifications to external systems. For edits that should be made within a finishing change, use change scripts (dash:ChangeScript).

Commit scripts are executed by their relative sh:order, with a default value of 0. Use lower values to execute before other scripts.`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}CommitScript`),
      namedNode(`${rdfs}label`),
      literal(`Commit script`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}CommitScript`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${dash}Script`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}ConstraintReificationShape-message`),
      namedNode(`${dash}singleLine`),
      literal(`true`, namedNode(`${xsd}boolean`)),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}ConstraintReificationShape-message`),
      namedNode(`${rdf}type`),
      namedNode(`${sh}PropertyShape`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}ConstraintReificationShape-message`),
      namedNode(`${sh}name`),
      literal(`messages`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}ConstraintReificationShape-message`),
      namedNode(`${sh}nodeKind`),
      namedNode(`${sh}Literal`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}ConstraintReificationShape-message`),
      namedNode(`${sh}or`),
      namedNode(`${dash}StringOrLangString`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}ConstraintReificationShape-message`),
      namedNode(`${sh}path`),
      namedNode(`${sh}message`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}ConstraintReificationShape-severity`),
      namedNode(`${rdf}type`),
      namedNode(`${sh}PropertyShape`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}ConstraintReificationShape-severity`),
      namedNode(`${sh}class`),
      namedNode(`${sh}Severity`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}ConstraintReificationShape-severity`),
      namedNode(`${sh}maxCount`),
      literal(`1`, namedNode(`${xsd}integer`)),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}ConstraintReificationShape-severity`),
      namedNode(`${sh}name`),
      literal(`severity`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}ConstraintReificationShape-severity`),
      namedNode(`${sh}nodeKind`),
      namedNode(`${sh}IRI`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}ConstraintReificationShape-severity`),
      namedNode(`${sh}path`),
      namedNode(`${sh}severity`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}ConstraintReificationShape`),
      namedNode(`${rdf}type`),
      namedNode(`${sh}NodeShape`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}ConstraintReificationShape`),
      namedNode(`${rdfs}comment`),
      literal(`Can be used to attach sh:severity and sh:messages to individual constraints using reification.`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}ConstraintReificationShape`),
      namedNode(`${rdfs}label`),
      literal(`Constraint reification shape`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}ConstraintReificationShape`),
      namedNode(`${sh}property`),
      namedNode(`${dash}ConstraintReificationShape-message`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}ConstraintReificationShape`),
      namedNode(`${sh}property`),
      namedNode(`${dash}ConstraintReificationShape-severity`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}Constructor`),
      namedNode(`${rdf}type`),
      namedNode(`${dash}ShapeClass`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}Constructor`),
      namedNode(`${rdfs}comment`),
      literal(`A script that is executed when a new instance of the class associated via dash:constructor is created, e.g. from a New button. Such scripts typically declare one or more parameters that are collected from the user when the script starts. The values of these parameters can be used as named variables in the script for arbitrary purposes such as setting the URI or initializing some property values of the new instance.

The variable focusNode will hold the named node of the selected type, for example when a constructor is associated with a superclass but the user has pressed New for a subclass.

The last expression of the script will be used as result of the constructor, so that the surrounding tool knows which resource shall be navigated to next.`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}Constructor`),
      namedNode(`${rdfs}label`),
      literal(`Constructor`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}Constructor`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${dash}Script`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}Constructor`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${sh}Parameterizable`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}DateOrDateTime`),
      namedNode(`${rdf}first`),
      blankNodes[2],
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}DateOrDateTime`),
      namedNode(`${rdf}rest`),
      blankNodes[3],
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}DateOrDateTime`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}List`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}DateOrDateTime`),
      namedNode(`${rdfs}comment`),
      literal(`An rdf:List that can be used in property constraints as value for sh:or to indicate that all values of a property must be either xsd:date or xsd:dateTime.`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}DateOrDateTime`),
      namedNode(`${rdfs}label`),
      literal(`Date or date time`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}DatePickerEditor`),
      namedNode(`${rdf}type`),
      namedNode(`${dash}SingleEditor`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}DatePickerEditor`),
      namedNode(`${rdfs}comment`),
      literal(`An editor for xsd:date literals, offering a calendar-like date picker.`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}DatePickerEditor`),
      namedNode(`${rdfs}label`),
      literal(`Date picker editor`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}DateTimePickerEditor`),
      namedNode(`${rdf}type`),
      namedNode(`${dash}SingleEditor`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}DateTimePickerEditor`),
      namedNode(`${rdfs}comment`),
      literal(`An editor for xsd:dateTime literals, offering a calendar-like date picker and a time selector.`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}DateTimePickerEditor`),
      namedNode(`${rdfs}label`),
      literal(`Date time picker editor`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}DepictionRole`),
      namedNode(`${rdf}type`),
      namedNode(`${dash}PropertyRole`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}DepictionRole`),
      namedNode(`${rdfs}comment`),
      literal(`Depiction properties provide images representing the focus nodes. Typical examples may be a photo of an animal or the map of a country.`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}DepictionRole`),
      namedNode(`${rdfs}label`),
      literal(`Depiction`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}Deprecated`),
      namedNode(`${rdf}type`),
      namedNode(`${dash}APIStatus`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}Deprecated`),
      namedNode(`${rdfs}comment`),
      literal(`Features that have been marked deprecated will remain in the API but should no longer be used by new code and may get deleted in the foreseeable future (e.g., with the next major release).`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}Deprecated`),
      namedNode(`${rdfs}label`),
      literal(`deprecated`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}DescriptionRole`),
      namedNode(`${rdf}type`),
      namedNode(`${dash}PropertyRole`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}DescriptionRole`),
      namedNode(`${rdfs}comment`),
      literal(`Description properties should produce text literals that may be used as an introduction/summary of what a focus node does.`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}DescriptionRole`),
      namedNode(`${rdfs}label`),
      literal(`Description`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}DetailsEditor`),
      namedNode(`${rdf}type`),
      namedNode(`${dash}SingleEditor`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}DetailsEditor`),
      namedNode(`${rdfs}comment`),
      literal(`An editor for non-literal values, typically displaying a nested form where the values of the linked resource can be edited directly on the "parent" form. Implementations that do not support this (yet) could fall back to an auto-complete widget.`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}DetailsEditor`),
      namedNode(`${rdfs}label`),
      literal(`Details editor`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}DetailsViewer`),
      namedNode(`${rdf}type`),
      namedNode(`${dash}SingleViewer`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}DetailsViewer`),
      namedNode(`${rdfs}comment`),
      literal(`A Viewer for resources that shows the details of the value using its default view shape as a nested form-like display.`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}DetailsViewer`),
      namedNode(`${rdfs}label`),
      literal(`Details viewer`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}Editor`),
      namedNode(`${dash}abstract`),
      literal(`true`, namedNode(`${xsd}boolean`)),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}Editor`),
      namedNode(`${rdf}type`),
      namedNode(`${dash}ShapeClass`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}Editor`),
      namedNode(`${rdfs}comment`),
      literal(`The class of widgets for editing value nodes.`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}Editor`),
      namedNode(`${rdfs}label`),
      literal(`Editor`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}Editor`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${dash}Widget`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}EnumSelectEditor`),
      namedNode(`${rdf}type`),
      namedNode(`${dash}SingleEditor`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}EnumSelectEditor`),
      namedNode(`${rdfs}comment`),
      literal(`A drop-down editor for enumerated values (typically based on sh:in lists).`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}EnumSelectEditor`),
      namedNode(`${rdfs}label`),
      literal(`Enum select editor`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}Experimental`),
      namedNode(`${rdf}type`),
      namedNode(`${dash}APIStatus`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}Experimental`),
      namedNode(`${rdfs}comment`),
      literal(`Features that are marked experimental can be used by early adopters but there is no guarantee that they will reach stable state.`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}Experimental`),
      namedNode(`${rdfs}label`),
      literal(`experimental`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}ExploreAction`),
      namedNode(`${rdf}type`),
      namedNode(`${dash}ShapeClass`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}ExploreAction`),
      namedNode(`${rdfs}comment`),
      literal(`An action typically showing up in an Explore section of a selected resource. Cannot make changes to the data.`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}ExploreAction`),
      namedNode(`${rdfs}label`),
      literal(`Explore action`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}ExploreAction`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${dash}ResourceAction`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}FailureResult`),
      namedNode(`${rdf}type`),
      namedNode(`${rdfs}Class`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}FailureResult`),
      namedNode(`${rdfs}comment`),
      literal(`A result representing a validation failure such as an unsupported recursion.`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}FailureResult`),
      namedNode(`${rdfs}label`),
      literal(`Failure result`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}FailureResult`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${sh}AbstractResult`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}FailureTestCaseResult`),
      namedNode(`${rdf}type`),
      namedNode(`${rdfs}Class`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}FailureTestCaseResult`),
      namedNode(`${rdfs}comment`),
      literal(`Represents a failure of a test case.`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}FailureTestCaseResult`),
      namedNode(`${rdfs}label`),
      literal(`Failure test case result`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}FailureTestCaseResult`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${dash}TestCaseResult`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}FunctionTestCase`),
      namedNode(`${rdf}type`),
      namedNode(`${dash}ShapeClass`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}FunctionTestCase`),
      namedNode(`${rdfs}comment`),
      literal(`A test case that verifies that a given SPARQL expression produces a given, expected result.`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}FunctionTestCase`),
      namedNode(`${rdfs}label`),
      literal(`Function test case`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}FunctionTestCase`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${dash}TestCase`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}GraphService`),
      namedNode(`${rdf}type`),
      namedNode(`${dash}ShapeClass`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}GraphService`),
      namedNode(`${rdfs}comment`),
      literal(`A service that does not apply to a specific resource (as ResourceService does) but operates on the whole graph. The focusNode variable will be the URI of the current base graph (e.g. <urn:x-evn-master:geo> as a NamedNode.`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}GraphService`),
      namedNode(`${rdfs}label`),
      literal(`Graph service`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}GraphService`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${dash}Service`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}GraphStoreTestCase`),
      namedNode(`${rdf}type`),
      namedNode(`${dash}ShapeClass`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}GraphStoreTestCase`),
      namedNode(`${rdfs}comment`),
      literal(`A test case that can be used to verify that an RDF file could be loaded (from a file) and that the resulting RDF graph is equivalent to a given TTL file.`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}GraphStoreTestCase`),
      namedNode(`${rdfs}label`),
      literal(`Graph store test case`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}GraphStoreTestCase`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${dash}TestCase`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}GraphUpdate`),
      namedNode(`${rdf}type`),
      namedNode(`${rdfs}Class`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}GraphUpdate`),
      namedNode(`${rdfs}comment`),
      literal(`A suggestion consisting of added and/or deleted triples, represented as rdf:Statements via dash:addedTriple and dash:deletedTriple.`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}GraphUpdate`),
      namedNode(`${rdfs}label`),
      literal(`Graph update`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}GraphUpdate`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${dash}Suggestion`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}GraphValidationTestCase`),
      namedNode(`${rdf}type`),
      namedNode(`${dash}ShapeClass`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}GraphValidationTestCase`),
      namedNode(`${rdfs}comment`),
      literal(`A test case that performs SHACL constraint validation on the whole graph and compares the results with the expected validation results stored with the test case. By default this excludes meta-validation (i.e. the validation of the shape definitions themselves). If that's desired, set dash:validateShapes to true.`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}GraphValidationTestCase`),
      namedNode(`${rdfs}label`),
      literal(`Graph validation test case`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}GraphValidationTestCase`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${dash}ValidationTestCase`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}HTMLOrStringOrLangString`),
      namedNode(`${rdf}first`),
      blankNodes[4],
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}HTMLOrStringOrLangString`),
      namedNode(`${rdf}rest`),
      blankNodes[5],
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}HTMLOrStringOrLangString`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}List`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}HTMLOrStringOrLangString`),
      namedNode(`${rdfs}comment`),
      literal(`An rdf:List that can be used in property constraints as value for sh:or to indicate that all values of a property must be either rdf:HTML, xsd:string or rdf:langString (in that order of preference).`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}HTMLOrStringOrLangString`),
      namedNode(`${rdfs}label`),
      literal(`HTML or string or langString`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}HTMLViewer`),
      namedNode(`${rdf}type`),
      namedNode(`${dash}SingleViewer`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}HTMLViewer`),
      namedNode(`${rdfs}comment`),
      literal(`A Viewer for HTML encoded text from rdf:HTML literals, rendering as parsed HTML DOM elements. Also displays the language if the HTML has a lang attribute on its root DOM element.`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}HTMLViewer`),
      namedNode(`${rdfs}label`),
      literal(`HTML viewer`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}HasValueInConstraintComponent-hasValueIn`),
      namedNode(`${dash}reifiableBy`),
      namedNode(`${dash}ConstraintReificationShape`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}HasValueInConstraintComponent-hasValueIn`),
      namedNode(`${rdf}type`),
      namedNode(`${sh}Parameter`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}HasValueInConstraintComponent-hasValueIn`),
      namedNode(`${sh}description`),
      literal(`At least one of the value nodes must be a member of the given list.`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}HasValueInConstraintComponent-hasValueIn`),
      namedNode(`${sh}name`),
      literal(`has value in`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}HasValueInConstraintComponent-hasValueIn`),
      namedNode(`${sh}node`),
      namedNode(`${dash}ListShape`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}HasValueInConstraintComponent-hasValueIn`),
      namedNode(`${sh}path`),
      namedNode(`${dash}hasValueIn`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}HasValueInConstraintComponent`),
      namedNode(`${rdf}type`),
      namedNode(`${sh}ConstraintComponent`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}HasValueInConstraintComponent`),
      namedNode(`${rdfs}comment`),
      literal(`A constraint component that can be used to express a constraint on property shapes so that one of the values of the property path must be a member of a given list of nodes.`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}HasValueInConstraintComponent`),
      namedNode(`${rdfs}label`),
      literal(`Has value in constraint component`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}HasValueInConstraintComponent`),
      namedNode(`${sh}message`),
      literal(`At least one of the values must be in {$hasValueIn}`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}HasValueInConstraintComponent`),
      namedNode(`${sh}parameter`),
      namedNode(`${dash}HasValueInConstraintComponent-hasValueIn`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}HasValueInConstraintComponent`),
      namedNode(`${sh}propertyValidator`),
      blankNodes[6],
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}HasValueTarget`),
      namedNode(`${rdf}type`),
      namedNode(`${sh}SPARQLTargetType`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}HasValueTarget`),
      namedNode(`${rdfs}comment`),
      literal(`A target type for all subjects where a given predicate has a certain object value.`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}HasValueTarget`),
      namedNode(`${rdfs}label`),
      literal(`Has Value target`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}HasValueTarget`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${sh}Target`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}HasValueTarget`),
      namedNode(`${sh}labelTemplate`),
      literal(`All subjects where {$predicate} has value {$object}`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}HasValueTarget`),
      namedNode(`${sh}parameter`),
      blankNodes[7],
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}HasValueTarget`),
      namedNode(`${sh}parameter`),
      blankNodes[8],
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}HasValueTarget`),
      namedNode(`${sh}prefixes`),
      namedNode(`${ns6}dash`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}HasValueTarget`),
      namedNode(`${sh}select`),
      literal(`SELECT DISTINCT ?this
WHERE {
    ?this $predicate $object .
}`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}HasValueWithClassConstraintComponent-hasValueWithClass`),
      namedNode(`${dash}reifiableBy`),
      namedNode(`${dash}ConstraintReificationShape`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}HasValueWithClassConstraintComponent-hasValueWithClass`),
      namedNode(`${rdf}type`),
      namedNode(`${sh}Parameter`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}HasValueWithClassConstraintComponent-hasValueWithClass`),
      namedNode(`${sh}class`),
      namedNode(`${rdfs}Class`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}HasValueWithClassConstraintComponent-hasValueWithClass`),
      namedNode(`${sh}description`),
      literal(`One of the values of the property path must be an instance of the given class.`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}HasValueWithClassConstraintComponent-hasValueWithClass`),
      namedNode(`${sh}name`),
      literal(`has value with class`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}HasValueWithClassConstraintComponent-hasValueWithClass`),
      namedNode(`${sh}nodeKind`),
      namedNode(`${sh}IRI`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}HasValueWithClassConstraintComponent-hasValueWithClass`),
      namedNode(`${sh}path`),
      namedNode(`${dash}hasValueWithClass`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}HasValueWithClassConstraintComponent`),
      namedNode(`${rdf}type`),
      namedNode(`${sh}ConstraintComponent`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}HasValueWithClassConstraintComponent`),
      namedNode(`${rdfs}comment`),
      literal(`A constraint component that can be used to express a constraint on property shapes so that one of the values of the property path must be an instance of a given class.`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}HasValueWithClassConstraintComponent`),
      namedNode(`${rdfs}label`),
      literal(`Has value with class constraint component`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}HasValueWithClassConstraintComponent`),
      namedNode(`${sh}message`),
      literal(`At least one of the values must be an instance of class {$hasValueWithClass}`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}HasValueWithClassConstraintComponent`),
      namedNode(`${sh}parameter`),
      namedNode(`${dash}HasValueWithClassConstraintComponent-hasValueWithClass`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}HasValueWithClassConstraintComponent`),
      namedNode(`${sh}propertyValidator`),
      blankNodes[9],
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}HyperlinkViewer`),
      namedNode(`${rdf}type`),
      namedNode(`${dash}SingleViewer`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}HyperlinkViewer`),
      namedNode(`${rdfs}comment`),
      literal(`A Viewer for literals, rendering as a hyperlink to a URL.

For literals it assumes the lexical form is the URL.

This is often used as default viewer for xsd:anyURI literals. Unsupported for blank nodes.`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}HyperlinkViewer`),
      namedNode(`${rdfs}label`),
      literal(`Hyperlink viewer`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}IDRole`),
      namedNode(`${rdf}type`),
      namedNode(`${dash}PropertyRole`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}IDRole`),
      namedNode(`${rdfs}comment`),
      literal(`ID properties are short strings or other literals that identify the focus node among siblings. Examples may include social security numbers.`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}IDRole`),
      namedNode(`${rdfs}label`),
      literal(`ID`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}IconRole`),
      namedNode(`${rdf}type`),
      namedNode(`${dash}PropertyRole`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}IconRole`),
      namedNode(`${rdfs}comment`),
      literal(`Icon properties produce images that are typically small and almost square-shaped, and that may be displayed in the upper left corner of a focus node's display. Values should be xsd:string or xsd:anyURI literals or IRI nodes pointing at URLs. Those URLs should ideally be vector graphics such as .svg files.

Instances of the same class often have the same icon, and this icon may be computed using a sh:values rule or as sh:defaultValue.

If the value is a relative URL then those should be resolved against the server that delivered the surrounding page.`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}IconRole`),
      namedNode(`${rdfs}label`),
      literal(`Icon`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}ImageViewer`),
      namedNode(`${rdf}type`),
      namedNode(`${dash}SingleViewer`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}ImageViewer`),
      namedNode(`${rdfs}comment`),
      literal(`A Viewer for URI values that are recognized as images by a browser, rendering as an image.`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}ImageViewer`),
      namedNode(`${rdfs}label`),
      literal(`Image viewer`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}IncludedScript`),
      namedNode(`${rdf}type`),
      namedNode(`${dash}ShapeClass`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}IncludedScript`),
      namedNode(`${rdfs}comment`),
      literal(`The code associated with instances of this class will get injected into the generated APIs, as global code snippets. Typically used to declare libraries of utility functions or constants that are (compared to shape scripts) not necessarily associated with specific classes or shapes.

Note that the JavaScript code stored in dash:js cannot use the export keyword because the code must also work in external scripts (such as on Node.js). Instead, you need to enumerate the exported symbols via dash:exports.`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}IncludedScript`),
      namedNode(`${rdfs}label`),
      literal(`Included script`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}IncludedScript`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${dash}Script`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}IndexedConstraintComponent-indexed`),
      namedNode(`${dash}reifiableBy`),
      namedNode(`${dash}ConstraintReificationShape`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}IndexedConstraintComponent-indexed`),
      namedNode(`${rdf}type`),
      namedNode(`${sh}Parameter`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}IndexedConstraintComponent-indexed`),
      namedNode(`${sh}datatype`),
      namedNode(`${xsd}boolean`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}IndexedConstraintComponent-indexed`),
      namedNode(`${sh}description`),
      literal(`True to activate indexing for this property.`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}IndexedConstraintComponent-indexed`),
      namedNode(`${sh}maxCount`),
      literal(`1`, namedNode(`${xsd}integer`)),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}IndexedConstraintComponent-indexed`),
      namedNode(`${sh}name`),
      literal(`indexed`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}IndexedConstraintComponent-indexed`),
      namedNode(`${sh}path`),
      namedNode(`${dash}indexed`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}IndexedConstraintComponent`),
      namedNode(`${rdf}type`),
      namedNode(`${sh}ConstraintComponent`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}IndexedConstraintComponent`),
      namedNode(`${rdfs}comment`),
      literal(`A constraint component that can be used to mark property shapes to be indexed, meaning that each of its value nodes must carry a dash:index from 0 to N.`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}IndexedConstraintComponent`),
      namedNode(`${rdfs}label`),
      literal(`Indexed constraint component`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}IndexedConstraintComponent`),
      namedNode(`${sh}parameter`),
      namedNode(`${dash}IndexedConstraintComponent-indexed`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}InferencingTestCase`),
      namedNode(`${rdf}type`),
      namedNode(`${dash}ShapeClass`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}InferencingTestCase`),
      namedNode(`${rdfs}comment`),
      literal(`A test case to verify whether an inferencing engine is producing identical results to those stored as expected results.`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}InferencingTestCase`),
      namedNode(`${rdfs}label`),
      literal(`Inferencing test case`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}InferencingTestCase`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${dash}TestCase`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}InlineViewer`),
      namedNode(`${rdf}type`),
      namedNode(`${dash}MultiViewer`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}InlineViewer`),
      namedNode(`${rdfs}comment`),
      literal(`A multi-viewer that renders all values horizontally, in a more compact form that just a single value per row.`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}InlineViewer`),
      namedNode(`${rdfs}label`),
      literal(`Inline viewer`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}InstancesSelectEditor`),
      namedNode(`${rdf}type`),
      namedNode(`${dash}SingleEditor`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}InstancesSelectEditor`),
      namedNode(`${rdfs}comment`),
      literal(`A drop-down editor for all instances of the target class (based on sh:class of the property).`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}InstancesSelectEditor`),
      namedNode(`${rdfs}label`),
      literal(`Instances select editor`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}JSONTableViewer`),
      namedNode(`${rdf}type`),
      namedNode(`${dash}SingleViewer`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}JSONTableViewer`),
      namedNode(`${rdfs}comment`),
      literal(`A tabular viewer for rdf:JSON literals with a lexical form in the following format:

{
	vars: [ 'col1', 'col2' ],                   // These are the column keys
	headerLabels: [ 'Column 1', 'Column 2' ],   // Optional, for the column headers
	bindings: [                                 // These become the rows
		{
			col1: {
				lex: 'Value2',
				datatype: '...#string',
			},
			col2: {
				uri: 'http://.../Instance',
				label: 'Example Instance',
			},
		},
		...
	],
}

The resulting table will use the headerLabels (if they exist) as column headers, otherwise derive the headers from the variable names. The vars must match the fields in the bindings. The table will contain one row for each binding.

Using Active Data Shapes, you can construct such literals dynamically using a sh:values rule, e.g.

ex:MyClass-myProperty
	a sh:PropertyShape ;
	sh:path ex:myProperty ;
	sh:values [
		dash:js """
			DataViewers.createTableViewerJSON(focusNode.select(\`
				SELECT ?col1 ?col2
				WHERE {
					$this ex:prop1 ?col1 .
					$this ex:prop2 ?col2 .
				}
			\`))"""
	] .

You may also produce the JSON literal programmatically in JavaScript, or assert the triples by other means.`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}JSONTableViewer`),
      namedNode(`${rdfs}label`),
      literal(`JSON table viewer`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}KeyInfoRole`),
      namedNode(`${rdf}type`),
      namedNode(`${dash}PropertyRole`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}KeyInfoRole`),
      namedNode(`${rdfs}comment`),
      literal(`The Key info role may be assigned to properties that are likely of special interest to a reader, so that they should appear whenever a summary of a focus node is shown.`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}KeyInfoRole`),
      namedNode(`${rdfs}label`),
      literal(`Key info`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}LabelRole`),
      namedNode(`${rdf}type`),
      namedNode(`${dash}PropertyRole`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}LabelRole`),
      namedNode(`${rdfs}comment`),
      literal(`Properties with this role produce strings that may serve as display label for the focus nodes. Labels should be either plain string literals or strings with a language tag. The values should also be single-line.`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}LabelRole`),
      namedNode(`${rdfs}label`),
      literal(`Label`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}LabelViewer`),
      namedNode(`${rdf}type`),
      namedNode(`${dash}SingleViewer`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}LabelViewer`),
      namedNode(`${rdfs}comment`),
      literal(`A Viewer for URI resources, rendering as a hyperlink to that URI based on the display label of the resource. Also includes other ways of interacting with the URI such as opening a nested summary display.`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}LabelViewer`),
      namedNode(`${rdfs}label`),
      literal(`Label viewer`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}LangStringViewer`),
      namedNode(`${rdf}type`),
      namedNode(`${dash}SingleViewer`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}LangStringViewer`),
      namedNode(`${rdfs}comment`),
      literal(`A Viewer for literals with a language tag, rendering as the text plus a language indicator.`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}LangStringViewer`),
      namedNode(`${rdfs}label`),
      literal(`LangString viewer`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}ListNodeShape`),
      namedNode(`${rdf}type`),
      namedNode(`${sh}NodeShape`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}ListNodeShape`),
      namedNode(`${rdfs}comment`),
      literal(`Defines constraints on what it means for a node to be a node within a well-formed RDF list. Note that this does not check whether the rdf:rest items are also well-formed lists as this would lead to unsupported recursion.`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}ListNodeShape`),
      namedNode(`${rdfs}label`),
      literal(`List node shape`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}ListNodeShape`),
      namedNode(`${sh}or`),
      blankNodes[10],
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}ListShape`),
      namedNode(`${rdf}type`),
      namedNode(`${sh}NodeShape`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}ListShape`),
      namedNode(`${rdfs}comment`),
      literal(`Defines constraints on what it means for a node to be a well-formed RDF list.

The focus node must either be rdf:nil or not recursive. Furthermore, this shape uses dash:ListNodeShape as a "helper" to walk through all members of the whole list (including itself).`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}ListShape`),
      namedNode(`${rdfs}label`),
      literal(`List shape`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}ListShape`),
      namedNode(`${sh}or`),
      blankNodes[11],
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}ListShape`),
      namedNode(`${sh}property`),
      blankNodes[12],
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}LiteralViewer`),
      namedNode(`${rdf}type`),
      namedNode(`${dash}SingleViewer`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}LiteralViewer`),
      namedNode(`${rdfs}comment`),
      literal(`A simple viewer for literals, rendering the lexical form of the value.`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}LiteralViewer`),
      namedNode(`${rdfs}label`),
      literal(`Literal viewer`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}ModifyAction`),
      namedNode(`${rdf}type`),
      namedNode(`${dash}ShapeClass`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}ModifyAction`),
      namedNode(`${rdfs}comment`),
      literal(`An action typically showing up in a Modify section of a selected resource. May make changes to the data.`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}ModifyAction`),
      namedNode(`${rdfs}label`),
      literal(`Modify action`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}ModifyAction`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${dash}ResourceAction`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}MultiEditor`),
      namedNode(`${rdf}type`),
      namedNode(`${dash}ShapeClass`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}MultiEditor`),
      namedNode(`${rdfs}comment`),
      literal(`An editor for multiple/all value nodes at once.`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}MultiEditor`),
      namedNode(`${rdfs}label`),
      literal(`Multi editor`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}MultiEditor`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${dash}Editor`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}MultiFunction`),
      namedNode(`${rdf}type`),
      namedNode(`${rdfs}Class`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}MultiFunction`),
      namedNode(`${rdf}type`),
      namedNode(`${sh}NodeShape`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}MultiFunction`),
      namedNode(`${rdfs}comment`),
      literal(`A multi-function is a function that can return zero or more result objects consisting of one or more result variables. While normal (SPARQL/SHACL) functions can only return a single result node, multi-functions may not only return multiple nodes but even multiple individual variables per solution.

A common way of defining multi-functions is by wrapping a SPARQL SELECT query, using dash:SPARQLMultiFunction. However, some MultiFunctions (in TopBraid) may also be implemented natively.`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}MultiFunction`),
      namedNode(`${rdfs}label`),
      literal(`Multi-function`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}MultiFunction`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${sh}Parameterizable`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}MultiFunction`),
      namedNode(`${sh}nodeKind`),
      namedNode(`${sh}IRI`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}MultiViewer`),
      namedNode(`${rdf}type`),
      namedNode(`${dash}ShapeClass`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}MultiViewer`),
      namedNode(`${rdfs}comment`),
      literal(`A viewer for multiple/all values at once.`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}MultiViewer`),
      namedNode(`${rdfs}label`),
      literal(`Multi viewer`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}MultiViewer`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${dash}Viewer`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}NoSuitableEditor`),
      namedNode(`${rdf}type`),
      namedNode(`${dash}SingleEditor`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}NoSuitableEditor`),
      namedNode(`${rdfs}comment`),
      literal(`An "editor" that simply informs the user that the values cannot be edited here, but for example through source code editing.`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}NoSuitableEditor`),
      namedNode(`${rdfs}label`),
      literal(`No suitable editor`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}NodeExpressionViewer`),
      namedNode(`${rdf}type`),
      namedNode(`${dash}SingleViewer`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}NodeExpressionViewer`),
      namedNode(`${rdfs}comment`),
      literal(`A viewer for SHACL Node Expressions.`, namedNode(`${rdf}HTML`)),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}NodeExpressionViewer`),
      namedNode(`${rdfs}label`),
      literal(`Node expression viewer`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}NonRecursiveConstraintComponent-nonRecursive`),
      namedNode(`${dash}reifiableBy`),
      namedNode(`${dash}ConstraintReificationShape`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}NonRecursiveConstraintComponent-nonRecursive`),
      namedNode(`${rdf}type`),
      namedNode(`${sh}Parameter`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}NonRecursiveConstraintComponent-nonRecursive`),
      namedNode(`${sh}datatype`),
      namedNode(`${xsd}boolean`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}NonRecursiveConstraintComponent-nonRecursive`),
      namedNode(`${sh}description`),
      literal(`Used to state that a property or path must not point back to itself.

For example, "a person cannot have itself as parent" can be expressed by setting dash:nonRecursive=true for a given sh:path.

To express that a person cannot have itself among any of its (recursive) parents, use a sh:path with the + operator such as ex:parent+.`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}NonRecursiveConstraintComponent-nonRecursive`),
      namedNode(`${sh}maxCount`),
      literal(`1`, namedNode(`${xsd}integer`)),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}NonRecursiveConstraintComponent-nonRecursive`),
      namedNode(`${sh}name`),
      literal(`non-recursive`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}NonRecursiveConstraintComponent-nonRecursive`),
      namedNode(`${sh}path`),
      namedNode(`${dash}nonRecursive`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}NonRecursiveConstraintComponent`),
      namedNode(`${rdf}type`),
      namedNode(`${sh}ConstraintComponent`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}NonRecursiveConstraintComponent`),
      namedNode(`${rdfs}comment`),
      literal(`Used to state that a property or path must not point back to itself.`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}NonRecursiveConstraintComponent`),
      namedNode(`${rdfs}label`),
      literal(`Non-recursive constraint component`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}NonRecursiveConstraintComponent`),
      namedNode(`${sh}message`),
      literal(`Points back at itself (recursively)`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}NonRecursiveConstraintComponent`),
      namedNode(`${sh}parameter`),
      namedNode(`${dash}NonRecursiveConstraintComponent-nonRecursive`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}NonRecursiveConstraintComponent`),
      namedNode(`${sh}propertyValidator`),
      blankNodes[13],
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}None`),
      namedNode(`${rdf}type`),
      namedNode(`${sh}NodeShape`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}None`),
      namedNode(`${rdfs}comment`),
      literal(`A Shape that is no node can conform to.`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}None`),
      namedNode(`${rdfs}label`),
      literal(`None`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}None`),
      namedNode(`${sh}in`),
      namedNode(`${rdf}nil`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}ParameterConstraintComponent-parameter`),
      namedNode(`${rdf}type`),
      namedNode(`${sh}Parameter`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}ParameterConstraintComponent-parameter`),
      namedNode(`${sh}path`),
      namedNode(`${sh}parameter`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}ParameterConstraintComponent`),
      namedNode(`${rdf}type`),
      namedNode(`${sh}ConstraintComponent`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}ParameterConstraintComponent`),
      namedNode(`${rdfs}comment`),
      literal(`A constraint component that can be used to verify that all value nodes conform to the given Parameter.`, 'en'),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}ParameterConstraintComponent`),
      namedNode(`${rdfs}label`),
      literal(`Parameter constraint component`, 'en'),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}ParameterConstraintComponent`),
      namedNode(`${sh}parameter`),
      namedNode(`${dash}ParameterConstraintComponent-parameter`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}PrimaryKeyConstraintComponent-uriStart`),
      namedNode(`${dash}reifiableBy`),
      namedNode(`${dash}ConstraintReificationShape`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}PrimaryKeyConstraintComponent-uriStart`),
      namedNode(`${rdf}type`),
      namedNode(`${sh}Parameter`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}PrimaryKeyConstraintComponent-uriStart`),
      namedNode(`${sh}datatype`),
      namedNode(`${xsd}string`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}PrimaryKeyConstraintComponent-uriStart`),
      namedNode(`${sh}description`),
      literal(`The start of the URIs of well-formed resources. If specified then the associated property/path serves as "primary key" for all target nodes (instances). All such target nodes need to have a URI that starts with the given string, followed by the URI-encoded value of the primary key property.`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}PrimaryKeyConstraintComponent-uriStart`),
      namedNode(`${sh}maxCount`),
      literal(`1`, namedNode(`${xsd}integer`)),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}PrimaryKeyConstraintComponent-uriStart`),
      namedNode(`${sh}name`),
      literal(`URI start`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}PrimaryKeyConstraintComponent-uriStart`),
      namedNode(`${sh}path`),
      namedNode(`${dash}uriStart`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}PrimaryKeyConstraintComponent`),
      namedNode(`${dash}localConstraint`),
      literal(`true`, namedNode(`${xsd}boolean`)),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}PrimaryKeyConstraintComponent`),
      namedNode(`${rdf}type`),
      namedNode(`${sh}ConstraintComponent`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}PrimaryKeyConstraintComponent`),
      namedNode(`${rdfs}comment`),
      literal(`Enforces a constraint that the given property (sh:path) serves as primary key for all resources in the target of the shape. If a property has been declared to be the primary key then each resource must have exactly one value for that property. Furthermore, the URIs of those resources must start with a given string (dash:uriStart), followed by the URL-encoded primary key value. For example if dash:uriStart is "http://example.org/country-" and the primary key for an instance is "de" then the URI must be "http://example.org/country-de". Finally, as a result of the URI policy, there can not be any other resource with the same value under the same primary key policy.`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}PrimaryKeyConstraintComponent`),
      namedNode(`${rdfs}label`),
      literal(`Primary key constraint component`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}PrimaryKeyConstraintComponent`),
      namedNode(`${sh}labelTemplate`),
      literal(`The property {?predicate} is the primary key and URIs start with {?uriStart}`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}PrimaryKeyConstraintComponent`),
      namedNode(`${sh}message`),
      literal(`Violation of primary key constraint`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}PrimaryKeyConstraintComponent`),
      namedNode(`${sh}parameter`),
      namedNode(`${dash}PrimaryKeyConstraintComponent-uriStart`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}PrimaryKeyConstraintComponent`),
      namedNode(`${sh}propertyValidator`),
      blankNodes[14],
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}PropertyAutoCompleteEditor`),
      namedNode(`${rdf}type`),
      namedNode(`${dash}SingleEditor`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}PropertyAutoCompleteEditor`),
      namedNode(`${rdfs}comment`),
      literal(`An editor for properties that are either defined as instances of rdf:Property or used as IRI values of sh:path. The component uses auto-complete to find these properties by their rdfs:labels or sh:names.`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}PropertyAutoCompleteEditor`),
      namedNode(`${rdfs}label`),
      literal(`Property auto-complete editor`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}PropertyLabelViewer`),
      namedNode(`${rdf}type`),
      namedNode(`${dash}SingleViewer`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}PropertyLabelViewer`),
      namedNode(`${rdfs}comment`),
      literal(`A viewer for properties that renders a hyperlink using the display label or sh:name, allowing users to either navigate to the rdf:Property resource or the property shape definition. Should be used in conjunction with PropertyAutoCompleteEditor.`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}PropertyLabelViewer`),
      namedNode(`${rdfs}label`),
      literal(`Property label viewer`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}PropertyRole`),
      namedNode(`${rdf}type`),
      namedNode(`${rdfs}Class`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}PropertyRole`),
      namedNode(`${rdf}type`),
      namedNode(`${sh}NodeShape`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}PropertyRole`),
      namedNode(`${rdfs}comment`),
      literal(`The class of roles that a property (shape) may take for its focus nodes.`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}PropertyRole`),
      namedNode(`${rdfs}label`),
      literal(`Property role`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}PropertyRole`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${rdfs}Resource`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}QueryTestCase`),
      namedNode(`${rdf}type`),
      namedNode(`${dash}ShapeClass`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}QueryTestCase`),
      namedNode(`${rdfs}comment`),
      literal(`A test case running a given SPARQL SELECT query and comparing its results with those stored as JSON Result Set in the expected result property.`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}QueryTestCase`),
      namedNode(`${rdfs}label`),
      literal(`Query test case`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}QueryTestCase`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${dash}TestCase`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}QueryTestCase`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${sh}SPARQLSelectExecutable`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}ReifiableByConstraintComponent-reifiableBy`),
      namedNode(`${rdf}type`),
      namedNode(`${sh}Parameter`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}ReifiableByConstraintComponent-reifiableBy`),
      namedNode(`${sh}class`),
      namedNode(`${sh}NodeShape`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}ReifiableByConstraintComponent-reifiableBy`),
      namedNode(`${sh}description`),
      literal(`Can be used to specify the node shape that may be applied to reified statements produced by a property shape. The property shape must have a URI resource as its sh:path. The values of this property must be node shapes. User interfaces can use this information to determine which properties to present to users when reified statements are explored or edited. Also, SHACL validators can use it to determine how to validate reified triples. Use dash:None to indicate that no reification should be permitted.`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}ReifiableByConstraintComponent-reifiableBy`),
      namedNode(`${sh}maxCount`),
      literal(`1`, namedNode(`${xsd}integer`)),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}ReifiableByConstraintComponent-reifiableBy`),
      namedNode(`${sh}name`),
      literal(`reifiable by`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}ReifiableByConstraintComponent-reifiableBy`),
      namedNode(`${sh}nodeKind`),
      namedNode(`${sh}IRI`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}ReifiableByConstraintComponent-reifiableBy`),
      namedNode(`${sh}path`),
      namedNode(`${dash}reifiableBy`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}ReifiableByConstraintComponent`),
      namedNode(`${rdf}type`),
      namedNode(`${sh}ConstraintComponent`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}ReifiableByConstraintComponent`),
      namedNode(`${rdfs}label`),
      literal(`Reifiable-by constraint component`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}ReifiableByConstraintComponent`),
      namedNode(`${sh}labelTemplate`),
      literal(`Reifiable by {$reifiableBy}`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}ReifiableByConstraintComponent`),
      namedNode(`${sh}parameter`),
      namedNode(`${dash}ReifiableByConstraintComponent-reifiableBy`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}ResourceAction`),
      namedNode(`${dash}abstract`),
      literal(`true`, namedNode(`${xsd}boolean`)),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}ResourceAction`),
      namedNode(`${rdf}type`),
      namedNode(`${dash}ShapeClass`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}ResourceAction`),
      namedNode(`${rdfs}comment`),
      literal(`An Action that can be executed for a selected resource. Such Actions show up in context menus once they have been assigned a sh:group.`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}ResourceAction`),
      namedNode(`${rdfs}label`),
      literal(`Resource action`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}ResourceAction`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${dash}Action`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}ResourceService`),
      namedNode(`${rdf}type`),
      namedNode(`${dash}ShapeClass`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}ResourceService`),
      namedNode(`${rdfs}comment`),
      literal(`A Service that can (and must) be applied to a given resource as focus node. Use dash:resourceService to link a class to the services that apply to its instances.`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}ResourceService`),
      namedNode(`${rdfs}label`),
      literal(`Resource service`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}ResourceService`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${dash}Service`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}RichTextEditor`),
      namedNode(`${rdf}type`),
      namedNode(`${dash}SingleEditor`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}RichTextEditor`),
      namedNode(`${rdfs}comment`),
      literal(`A rich text editor to enter the lexical value of a literal and a drop down to select language. The selected language is stored in the HTML lang attribute of the root node in the HTML DOM tree.`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}RichTextEditor`),
      namedNode(`${rdfs}label`),
      literal(`Rich text editor`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}RootClassConstraintComponent-rootClass`),
      namedNode(`${dash}reifiableBy`),
      namedNode(`${dash}ConstraintReificationShape`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}RootClassConstraintComponent-rootClass`),
      namedNode(`${rdf}type`),
      namedNode(`${sh}Parameter`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}RootClassConstraintComponent-rootClass`),
      namedNode(`${sh}class`),
      namedNode(`${rdfs}Class`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}RootClassConstraintComponent-rootClass`),
      namedNode(`${sh}description`),
      literal(`The root class.`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}RootClassConstraintComponent-rootClass`),
      namedNode(`${sh}name`),
      literal(`root class`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}RootClassConstraintComponent-rootClass`),
      namedNode(`${sh}nodeKind`),
      namedNode(`${sh}IRI`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}RootClassConstraintComponent-rootClass`),
      namedNode(`${sh}path`),
      namedNode(`${dash}rootClass`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}RootClassConstraintComponent`),
      namedNode(`${rdf}type`),
      namedNode(`${sh}ConstraintComponent`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}RootClassConstraintComponent`),
      namedNode(`${rdfs}comment`),
      literal(`A constraint component defining the parameter dash:rootClass, which restricts the values to be either the root class itself or one of its subclasses. This is typically used in conjunction with properties that have rdfs:Class as their type.`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}RootClassConstraintComponent`),
      namedNode(`${rdfs}label`),
      literal(`Root class constraint component`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}RootClassConstraintComponent`),
      namedNode(`${sh}labelTemplate`),
      literal(`Root class {$rootClass}`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}RootClassConstraintComponent`),
      namedNode(`${sh}message`),
      literal(`Value must be subclass of {$rootClass}`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}RootClassConstraintComponent`),
      namedNode(`${sh}parameter`),
      namedNode(`${dash}RootClassConstraintComponent-rootClass`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}RootClassConstraintComponent`),
      namedNode(`${sh}validator`),
      namedNode(`${dash}hasRootClass`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}SPARQLConstructTemplate`),
      namedNode(`${rdf}type`),
      namedNode(`${rdfs}Class`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}SPARQLConstructTemplate`),
      namedNode(`${rdfs}comment`),
      literal(`Encapsulates one or more SPARQL CONSTRUCT queries that can be parameterized. Parameters will become pre-bound variables in the queries.`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}SPARQLConstructTemplate`),
      namedNode(`${rdfs}label`),
      literal(`SPARQL CONSTRUCT template`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}SPARQLConstructTemplate`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${sh}Parameterizable`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}SPARQLConstructTemplate`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${sh}SPARQLConstructExecutable`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}SPARQLMultiFunction`),
      namedNode(`${rdf}type`),
      namedNode(`${rdfs}Class`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}SPARQLMultiFunction`),
      namedNode(`${rdf}type`),
      namedNode(`${sh}NodeShape`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}SPARQLMultiFunction`),
      namedNode(`${rdfs}comment`),
      literal(`A multi-function based on a SPARQL SELECT query. The query gets executed with the arguments pre-bound to the variables declared as parameters. The results of the multi-function are all result bindings from the SPARQL result set.`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}SPARQLMultiFunction`),
      namedNode(`${rdfs}label`),
      literal(`SPARQL multi-function`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}SPARQLMultiFunction`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${dash}MultiFunction`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}SPARQLMultiFunction`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${sh}SPARQLSelectExecutable`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}SPARQLSelectTemplate`),
      namedNode(`${rdf}type`),
      namedNode(`${rdfs}Class`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}SPARQLSelectTemplate`),
      namedNode(`${rdfs}comment`),
      literal(`Encapsulates a SPARQL SELECT query that can be parameterized. Parameters will become pre-bound variables in the query.`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}SPARQLSelectTemplate`),
      namedNode(`${rdfs}label`),
      literal(`SPARQL SELECT template`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}SPARQLSelectTemplate`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${sh}Parameterizable`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}SPARQLSelectTemplate`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${sh}SPARQLSelectExecutable`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}SPARQLUpdateSuggestionGenerator`),
      namedNode(`${rdf}type`),
      namedNode(`${rdfs}Class`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}SPARQLUpdateSuggestionGenerator`),
      namedNode(`${rdfs}comment`),
      literal(`A SuggestionGenerator based on a SPARQL UPDATE query (sh:update), producing an instance of dash:GraphUpdate. The INSERTs become dash:addedTriple and the DELETEs become dash:deletedTriple. The WHERE clause operates on the data graph with the pre-bound variables $focusNode, $predicate and $value, as well as the other pre-bound variables for the parameters of the constraint.

In many cases, there may be multiple possible suggestions to fix a problem. For example, with sh:maxLength there are many ways to slice a string. In those cases, the system will first iterate through the result variables from a SELECT query (sh:select) and apply these results as pre-bound variables into the UPDATE query.`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}SPARQLUpdateSuggestionGenerator`),
      namedNode(`${rdfs}label`),
      literal(`SPARQL UPDATE suggestion generator`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}SPARQLUpdateSuggestionGenerator`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${dash}SuggestionGenerator`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}SPARQLUpdateSuggestionGenerator`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${sh}SPARQLSelectExecutable`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}SPARQLUpdateSuggestionGenerator`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${sh}SPARQLUpdateExecutable`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}Script`),
      namedNode(`${rdf}type`),
      namedNode(`${dash}ShapeClass`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}Script`),
      namedNode(`${rdfs}comment`),
      literal(`An executable unit implemented in one or more languages such as JavaScript.`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}Script`),
      namedNode(`${rdfs}label`),
      literal(`Script`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}Script`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${rdfs}Resource`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}ScriptAPIGenerationRules`),
      namedNode(`${rdf}type`),
      namedNode(`${sh}PropertyGroup`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}ScriptAPIGenerationRules`),
      namedNode(`${rdfs}label`),
      literal(`Script API Generation Rules`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}ScriptAPIShape-generateClass`),
      namedNode(`${rdf}type`),
      namedNode(`${sh}PropertyShape`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}ScriptAPIShape-generateClass`),
      namedNode(`${sh}class`),
      namedNode(`${sh}NodeShape`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}ScriptAPIShape-generateClass`),
      namedNode(`${sh}description`),
      literal(`The API generator will produce classes for each value of this property and all its subclasses and superclasses.`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}ScriptAPIShape-generateClass`),
      namedNode(`${sh}group`),
      namedNode(`${dash}ScriptAPIGenerationRules`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}ScriptAPIShape-generateClass`),
      namedNode(`${sh}name`),
      literal(`generate class`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}ScriptAPIShape-generateClass`),
      namedNode(`${sh}nodeKind`),
      namedNode(`${sh}IRI`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}ScriptAPIShape-generateClass`),
      namedNode(`${sh}order`),
      literal(`0`, namedNode(`${xsd}decimal`)),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}ScriptAPIShape-generateClass`),
      namedNode(`${sh}path`),
      namedNode(`${dash}generateClass`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}ScriptAPIShape-generatePrefixClasses`),
      namedNode(`${rdf}type`),
      namedNode(`${sh}PropertyShape`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}ScriptAPIShape-generatePrefixClasses`),
      namedNode(`${sh}datatype`),
      namedNode(`${xsd}string`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}ScriptAPIShape-generatePrefixClasses`),
      namedNode(`${sh}description`),
      literal(`If a prefix (such as "edg") is listed here then the API generator will produce classes for all RDFS classes or node shapes from the associated namespace.`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}ScriptAPIShape-generatePrefixClasses`),
      namedNode(`${sh}group`),
      namedNode(`${dash}ScriptAPIGenerationRules`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}ScriptAPIShape-generatePrefixClasses`),
      namedNode(`${sh}name`),
      literal(`generate prefix classes`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}ScriptAPIShape-generatePrefixClasses`),
      namedNode(`${sh}order`),
      literal(`15`, namedNode(`${xsd}decimal`)),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}ScriptAPIShape-generatePrefixClasses`),
      namedNode(`${sh}path`),
      namedNode(`${dash}generatePrefixClasses`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}ScriptAPIShape-generatePrefixConstants`),
      namedNode(`${rdf}type`),
      namedNode(`${sh}PropertyShape`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}ScriptAPIShape-generatePrefixConstants`),
      namedNode(`${sh}datatype`),
      namedNode(`${xsd}string`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}ScriptAPIShape-generatePrefixConstants`),
      namedNode(`${sh}description`),
      literal(`If a prefix (such as "edg") is listed here then the API generator will produce constants for class, datatype, shape and property names.`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}ScriptAPIShape-generatePrefixConstants`),
      namedNode(`${sh}group`),
      namedNode(`${dash}ScriptAPIGenerationRules`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}ScriptAPIShape-generatePrefixConstants`),
      namedNode(`${sh}name`),
      literal(`generate prefix constants`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}ScriptAPIShape-generatePrefixConstants`),
      namedNode(`${sh}order`),
      literal(`10`, namedNode(`${xsd}decimal`)),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}ScriptAPIShape-generatePrefixConstants`),
      namedNode(`${sh}path`),
      namedNode(`${dash}generatePrefixConstants`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}ScriptAPIShape`),
      namedNode(`${rdf}type`),
      namedNode(`${sh}NodeShape`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}ScriptAPIShape`),
      namedNode(`${rdfs}comment`),
      literal(`Defines the properties that instruct the ADS Script API generator about what prefixes, constants and classes to generate.`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}ScriptAPIShape`),
      namedNode(`${rdfs}label`),
      literal(`Script API`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}ScriptAPIShape`),
      namedNode(`${sh}property`),
      namedNode(`${dash}ScriptAPIShape-generateClass`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}ScriptAPIShape`),
      namedNode(`${sh}property`),
      namedNode(`${dash}ScriptAPIShape-generatePrefixClasses`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}ScriptAPIShape`),
      namedNode(`${sh}property`),
      namedNode(`${dash}ScriptAPIShape-generatePrefixConstants`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}ScriptAPIShape`),
      namedNode(`${sh}targetClass`),
      namedNode(`${owl}Ontology`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}ScriptConstraint`),
      namedNode(`${rdf}type`),
      namedNode(`${dash}ShapeClass`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}ScriptConstraint`),
      namedNode(`${rdfs}comment`),
      literal(`The class of constraints that are based on Scripts. Depending on whether dash:onAllValues is set to true, these scripts can access the following pre-assigned variables:

- focusNode: the focus node of the constraint (a NamedNode)
- if dash:onAllValues is not true: value: the current value node (e.g. a JavaScript string for xsd:string literals, a number for numeric literals or true or false for xsd:boolean literals. All other literals become LiteralNodes, and non-literals become instances of NamedNode)
- if dash:onAllValues is true: values: an array of current value nodes, as above.

If the expression returns an array then each array member will be mapped to one validation result, following the mapping rules below.

For string results, a validation result will use the string as sh:resultMessage.
For boolean results, a validation result will be produced if the result is false (true means no violation).

For object results, a validation result will be produced using the value of the field "message" of the object as result message. If the field "value" has a value then this will become the sh:value in the violation.

Unless another sh:message has been directly returned, the sh:message of the dash:ScriptConstraint will be used, similar to sh:message at SPARQL Constraints. These sh:messages can access the values {$focusNode}, {$value} etc as template variables.`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}ScriptConstraint`),
      namedNode(`${rdfs}label`),
      literal(`Script constraint`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}ScriptConstraint`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${dash}Script`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}ScriptConstraintComponent-scriptConstraint`),
      namedNode(`${rdf}type`),
      namedNode(`${sh}Parameter`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}ScriptConstraintComponent-scriptConstraint`),
      namedNode(`${sh}class`),
      namedNode(`${dash}ScriptConstraint`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}ScriptConstraintComponent-scriptConstraint`),
      namedNode(`${sh}description`),
      literal(`The Script constraint(s) to apply.`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}ScriptConstraintComponent-scriptConstraint`),
      namedNode(`${sh}name`),
      literal(`script constraint`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}ScriptConstraintComponent-scriptConstraint`),
      namedNode(`${sh}path`),
      namedNode(`${dash}scriptConstraint`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}ScriptConstraintComponent`),
      namedNode(`${rdf}type`),
      namedNode(`${sh}ConstraintComponent`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}ScriptConstraintComponent`),
      namedNode(`${rdfs}label`),
      literal(`Script constraint component`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}ScriptConstraintComponent`),
      namedNode(`${sh}parameter`),
      namedNode(`${dash}ScriptConstraintComponent-scriptConstraint`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}ScriptFunction`),
      namedNode(`${rdf}type`),
      namedNode(`${rdfs}Class`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}ScriptFunction`),
      namedNode(`${rdf}type`),
      namedNode(`${sh}NodeShape`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}ScriptFunction`),
      namedNode(`${rdfs}comment`),
      literal(`Script functions can be used from SPARQL queries and will be injected into the generated prefix object (in JavaScript, for ADS scripts). The dash:js will be inserted into a generated JavaScript function and therefore needs to use the return keyword to produce results. These JS snippets can access the parameter values based on the local name of the sh:Parameter's path. For example ex:value can be accessed using value.

SPARQL use note: Since these functions may be used from any data graph and any shapes graph, they must not rely on any API apart from what's available in the shapes graph that holds the rdf:type triple of the function itself. In other words, at execution time from SPARQL, the ADS shapes graph will be the home graph of the function's declaration.`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}ScriptFunction`),
      namedNode(`${rdfs}label`),
      literal(`Script function`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}ScriptFunction`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${dash}Script`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}ScriptFunction`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${sh}Function`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}ScriptSuggestionGenerator`),
      namedNode(`${rdf}type`),
      namedNode(`${dash}ShapeClass`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}ScriptSuggestionGenerator`),
      namedNode(`${rdfs}comment`),
      literal(`A Suggestion Generator that is backed by an Active Data Shapes script. The script needs to return a JSON object or an array of JSON objects if it shall generate multiple suggestions. It may also return null to indicate that nothing was suggested. Note that the whole script is evaluated as a (JavaScript) expression, and those will use the last value as result. So simply putting an object at the end of your script should do. Alternatively, define the bulk of the operation as a function and simply call that function in the script.

Each response object can have the following fields:

{
	message: "The human readable message",  // Defaults to the rdfs:label(s) of the suggestion generator
	add: [ // An array of triples to add, each triple as an array with three nodes
		[ subject, predicate, object ],
		[ ... ]
	],
	delete: [
		... like add, for the triples to delete
	]
}

Suggestions with neither added nor deleted triples will be discarded.

At execution time, the script operates on the data graph as the active graph, with the following pre-bound variables:
- focusNode: the NamedNode that is the sh:focusNode of the validation result
- predicate: the NamedNode representing the predicate of the validation result, assuming sh:resultPath is a URI
- value: the value node from the validation result's sh:value, cast into the most suitable JS object
- the other pre-bound variables for the parameters of the constraint, e.g. in a sh:maxCount constraint it would be maxCount

The script will be executed in read-only mode, i.e. it cannot modify the graph.

Example with dash:js:

({
	message: \`Copy labels into \${graph.localName(predicate)}\`,
	add: focusNode.values(rdfs.label).map(label => 
		[ focusNode, predicate, label ]
    )
})`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}ScriptSuggestionGenerator`),
      namedNode(`${rdfs}label`),
      literal(`Script suggestion generator`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}ScriptSuggestionGenerator`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${dash}Script`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}ScriptSuggestionGenerator`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${dash}SuggestionGenerator`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}ScriptTestCase`),
      namedNode(`${rdf}type`),
      namedNode(`${dash}ShapeClass`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}ScriptTestCase`),
      namedNode(`${rdfs}comment`),
      literal(`A test case that evaluates a script. Requires exactly one value for dash:js and will operate on the test case's graph (with imports) as both data and shapes graph.

Supports read-only scripts only at this stage.`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}ScriptTestCase`),
      namedNode(`${rdfs}label`),
      literal(`Script test case`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}ScriptTestCase`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${dash}Script`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}ScriptTestCase`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${dash}TestCase`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}ScriptValidator`),
      namedNode(`${rdf}type`),
      namedNode(`${dash}ShapeClass`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}ScriptValidator`),
      namedNode(`${rdfs}comment`),
      literal(`A SHACL validator based on an Active Data Shapes script.

See the comment at dash:ScriptConstraint for the basic evaluation approach. Note that in addition to focusNode and value/values, the script can access pre-bound variables for each declared argument of the constraint component.`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}ScriptValidator`),
      namedNode(`${rdfs}label`),
      literal(`Script validator`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}ScriptValidator`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${dash}Script`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}ScriptValidator`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${sh}Validator`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}Service`),
      namedNode(`${dash}abstract`),
      literal(`true`, namedNode(`${xsd}boolean`)),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}Service`),
      namedNode(`${rdf}type`),
      namedNode(`${dash}ShapeClass`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}Service`),
      namedNode(`${rdfs}comment`),
      literal(`A script that gets exposed as a web service, e.g. /tbl/service/ex/MyService`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}Service`),
      namedNode(`${rdfs}label`),
      literal(`Service`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}Service`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${dash}Script`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}Service`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${sh}Parameterizable`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}ShapeClass`),
      namedNode(`${dash}hidden`),
      literal(`true`, namedNode(`${xsd}boolean`)),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}ShapeClass`),
      namedNode(`${rdf}type`),
      namedNode(`${dash}ShapeClass`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}ShapeClass`),
      namedNode(`${rdfs}comment`),
      literal(`A class that is also a node shape. This class can be used as rdf:type instead of the combination of rdfs:Class and sh:NodeShape.`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}ShapeClass`),
      namedNode(`${rdfs}label`),
      literal(`Shape class`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}ShapeClass`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${rdfs}Class`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}ShapeClass`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${sh}NodeShape`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}ShapeScript`),
      namedNode(`${rdf}type`),
      namedNode(`${rdfs}Class`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}ShapeScript`),
      namedNode(`${rdfs}comment`),
      literal(`A shape script contains extra code that gets injected into the API for the associated node shape. In particular you can use this to define additional functions that operate on the current focus node (the this variable in JavaScript).`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}ShapeScript`),
      namedNode(`${rdfs}label`),
      literal(`Shape script`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}ShapeScript`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${dash}Script`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}SingleEditor`),
      namedNode(`${rdf}type`),
      namedNode(`${dash}ShapeClass`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}SingleEditor`),
      namedNode(`${rdfs}comment`),
      literal(`An editor for individual value nodes.`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}SingleEditor`),
      namedNode(`${rdfs}label`),
      literal(`Single editor`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}SingleEditor`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${dash}Editor`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}SingleLineConstraintComponent-singleLine`),
      namedNode(`${dash}reifiableBy`),
      namedNode(`${dash}ConstraintReificationShape`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}SingleLineConstraintComponent-singleLine`),
      namedNode(`${rdf}type`),
      namedNode(`${sh}Parameter`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}SingleLineConstraintComponent-singleLine`),
      namedNode(`${sh}datatype`),
      namedNode(`${xsd}boolean`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}SingleLineConstraintComponent-singleLine`),
      namedNode(`${sh}description`),
      literal(`True to state that the lexical form of literal value nodes must not contain any line breaks. False to state that line breaks are explicitly permitted.`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}SingleLineConstraintComponent-singleLine`),
      namedNode(`${sh}maxCount`),
      literal(`1`, namedNode(`${xsd}integer`)),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}SingleLineConstraintComponent-singleLine`),
      namedNode(`${sh}name`),
      literal(`single line`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}SingleLineConstraintComponent-singleLine`),
      namedNode(`${sh}path`),
      namedNode(`${dash}singleLine`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}SingleLineConstraintComponent`),
      namedNode(`${rdf}type`),
      namedNode(`${sh}ConstraintComponent`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}SingleLineConstraintComponent`),
      namedNode(`${rdfs}comment`),
      literal(`A constraint component that can be used to declare that all values that are literals must have a lexical form that contains no line breaks ('\n' or '\\r').

User interfaces may use the dash:singleLine flag to prefer a text field over a (multi-line) text area.`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}SingleLineConstraintComponent`),
      namedNode(`${rdfs}label`),
      literal(`Single line constraint component`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}SingleLineConstraintComponent`),
      namedNode(`${sh}message`),
      literal(`Must not contain line breaks.`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}SingleLineConstraintComponent`),
      namedNode(`${sh}parameter`),
      namedNode(`${dash}SingleLineConstraintComponent-singleLine`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}SingleLineConstraintComponent`),
      namedNode(`${sh}validator`),
      blankNodes[15],
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}SingleViewer`),
      namedNode(`${rdf}type`),
      namedNode(`${dash}ShapeClass`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}SingleViewer`),
      namedNode(`${rdfs}comment`),
      literal(`A viewer for a single value.`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}SingleViewer`),
      namedNode(`${rdfs}label`),
      literal(`Single viewer`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}SingleViewer`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${dash}Viewer`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}Stable`),
      namedNode(`${rdf}type`),
      namedNode(`${dash}APIStatus`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}Stable`),
      namedNode(`${rdfs}comment`),
      literal(`Features that have been marked stable are deemed of good quality and can be used until marked deprecated.`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}Stable`),
      namedNode(`${rdfs}label`),
      literal(`stable`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}StemConstraintComponent-stem`),
      namedNode(`${dash}reifiableBy`),
      namedNode(`${dash}ConstraintReificationShape`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}StemConstraintComponent-stem`),
      namedNode(`${rdf}type`),
      namedNode(`${sh}Parameter`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}StemConstraintComponent-stem`),
      namedNode(`${sh}datatype`),
      namedNode(`${xsd}string`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}StemConstraintComponent-stem`),
      namedNode(`${sh}description`),
      literal(`If specified then every value node must be an IRI and the IRI must start with the given string value.`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}StemConstraintComponent-stem`),
      namedNode(`${sh}maxCount`),
      literal(`1`, namedNode(`${xsd}integer`)),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}StemConstraintComponent-stem`),
      namedNode(`${sh}name`),
      literal(`stem`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}StemConstraintComponent-stem`),
      namedNode(`${sh}path`),
      namedNode(`${dash}stem`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}StemConstraintComponent`),
      namedNode(`${dash}staticConstraint`),
      literal(`true`, namedNode(`${xsd}boolean`)),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}StemConstraintComponent`),
      namedNode(`${rdf}type`),
      namedNode(`${sh}ConstraintComponent`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}StemConstraintComponent`),
      namedNode(`${rdfs}comment`),
      literal(`A constraint component that can be used to verify that every value node is an IRI and the IRI starts with a given string value.`, 'en'),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}StemConstraintComponent`),
      namedNode(`${rdfs}label`),
      literal(`Stem constraint component`, 'en'),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}StemConstraintComponent`),
      namedNode(`${sh}labelTemplate`),
      literal(`Value needs to have stem {$stem}`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}StemConstraintComponent`),
      namedNode(`${sh}message`),
      literal(`Value does not have stem {$stem}`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}StemConstraintComponent`),
      namedNode(`${sh}parameter`),
      namedNode(`${dash}StemConstraintComponent-stem`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}StemConstraintComponent`),
      namedNode(`${sh}validator`),
      namedNode(`${dash}hasStem`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}StringOrLangString`),
      namedNode(`${rdf}first`),
      blankNodes[16],
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}StringOrLangString`),
      namedNode(`${rdf}rest`),
      blankNodes[17],
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}StringOrLangString`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}List`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}StringOrLangString`),
      namedNode(`${rdfs}comment`),
      literal(`An rdf:List that can be used in property constraints as value for sh:or to indicate that all values of a property must be either xsd:string or rdf:langString.`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}StringOrLangString`),
      namedNode(`${rdfs}label`),
      literal(`String or langString`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}StringOrLangStringOrHTML`),
      namedNode(`${rdf}first`),
      blankNodes[18],
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}StringOrLangStringOrHTML`),
      namedNode(`${rdf}rest`),
      blankNodes[19],
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}StringOrLangStringOrHTML`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}List`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}StringOrLangStringOrHTML`),
      namedNode(`${rdfs}comment`),
      literal(`An rdf:List that can be used in property constraints as value for sh:or to indicate that all values of a property must be either xsd:string, rdf:langString or rdf:HTML (in that order of preference).`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}StringOrLangStringOrHTML`),
      namedNode(`${rdfs}label`),
      literal(`string or langString or HTML`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}SubClassEditor`),
      namedNode(`${rdf}type`),
      namedNode(`${dash}SingleEditor`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}SubClassEditor`),
      namedNode(`${rdfs}comment`),
      literal(`An editor for properties that declare a dash:rootClass. The editor allows selecting either the class itself or one of its subclasses.`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}SubClassEditor`),
      namedNode(`${rdfs}label`),
      literal(`Sub-Class editor`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}SubSetOfConstraintComponent-subSetOf`),
      namedNode(`${dash}editor`),
      namedNode(`${dash}PropertyAutoCompleteEditor`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}SubSetOfConstraintComponent-subSetOf`),
      namedNode(`${dash}reifiableBy`),
      namedNode(`${dash}ConstraintReificationShape`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}SubSetOfConstraintComponent-subSetOf`),
      namedNode(`${dash}viewer`),
      namedNode(`${dash}PropertyLabelViewer`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}SubSetOfConstraintComponent-subSetOf`),
      namedNode(`${rdf}type`),
      namedNode(`${sh}Parameter`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}SubSetOfConstraintComponent-subSetOf`),
      namedNode(`${sh}description`),
      literal(`Can be used to state that all value nodes must also be values of a specified other property at the same focus node.`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}SubSetOfConstraintComponent-subSetOf`),
      namedNode(`${sh}name`),
      literal(`sub-set of`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}SubSetOfConstraintComponent-subSetOf`),
      namedNode(`${sh}nodeKind`),
      namedNode(`${sh}IRI`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}SubSetOfConstraintComponent-subSetOf`),
      namedNode(`${sh}path`),
      namedNode(`${dash}subSetOf`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}SubSetOfConstraintComponent`),
      namedNode(`${dash}localConstraint`),
      literal(`true`, namedNode(`${xsd}boolean`)),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}SubSetOfConstraintComponent`),
      namedNode(`${rdf}type`),
      namedNode(`${sh}ConstraintComponent`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}SubSetOfConstraintComponent`),
      namedNode(`${rdfs}comment`),
      literal(`A constraint component that can be used to state that the set of value nodes must be a subset of the value of a given property.`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}SubSetOfConstraintComponent`),
      namedNode(`${rdfs}label`),
      literal(`Sub set of constraint component`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}SubSetOfConstraintComponent`),
      namedNode(`${sh}message`),
      literal(`Must be one of the values of {$subSetOf}`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}SubSetOfConstraintComponent`),
      namedNode(`${sh}parameter`),
      namedNode(`${dash}SubSetOfConstraintComponent-subSetOf`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}SubSetOfConstraintComponent`),
      namedNode(`${sh}propertyValidator`),
      blankNodes[20],
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}SuccessResult`),
      namedNode(`${rdf}type`),
      namedNode(`${rdfs}Class`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}SuccessResult`),
      namedNode(`${rdfs}comment`),
      literal(`A result representing a successfully validated constraint.`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}SuccessResult`),
      namedNode(`${rdfs}label`),
      literal(`Success result`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}SuccessResult`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${sh}AbstractResult`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}SuccessTestCaseResult`),
      namedNode(`${rdf}type`),
      namedNode(`${rdfs}Class`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}SuccessTestCaseResult`),
      namedNode(`${rdfs}comment`),
      literal(`Represents a successful run of a test case.`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}SuccessTestCaseResult`),
      namedNode(`${rdfs}label`),
      literal(`Success test case result`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}SuccessTestCaseResult`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${dash}TestCaseResult`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}Suggestion`),
      namedNode(`${dash}abstract`),
      literal(`true`, namedNode(`${xsd}boolean`)),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}Suggestion`),
      namedNode(`${rdf}type`),
      namedNode(`${rdfs}Class`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}Suggestion`),
      namedNode(`${rdfs}comment`),
      literal(`Base class of suggestions that modify a graph to "fix" the source of a validation result.`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}Suggestion`),
      namedNode(`${rdfs}label`),
      literal(`Suggestion`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}Suggestion`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${rdfs}Resource`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}SuggestionGenerator`),
      namedNode(`${dash}abstract`),
      literal(`true`, namedNode(`${xsd}boolean`)),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}SuggestionGenerator`),
      namedNode(`${rdf}type`),
      namedNode(`${rdfs}Class`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}SuggestionGenerator`),
      namedNode(`${rdfs}comment`),
      literal(`Base class of objects that can generate suggestions (added or deleted triples) for a validation result of a given constraint component.`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}SuggestionGenerator`),
      namedNode(`${rdfs}label`),
      literal(`Suggestion generator`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}SuggestionGenerator`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${rdfs}Resource`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}SuggestionResult`),
      namedNode(`${rdf}type`),
      namedNode(`${rdfs}Class`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}SuggestionResult`),
      namedNode(`${rdfs}comment`),
      literal(`Class of results that have been produced as suggestions, not through SHACL validation. How the actual results are produced is up to implementers. Each instance of this class should have values for sh:focusNode, sh:resultMessage, sh:resultSeverity (suggested default: sh:Info), and dash:suggestion to point at one or more suggestions.`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}SuggestionResult`),
      namedNode(`${rdfs}label`),
      literal(`Suggestion result`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}SuggestionResult`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${sh}AbstractResult`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}SymmetricConstraintComponent-symmetric`),
      namedNode(`${dash}reifiableBy`),
      namedNode(`${dash}ConstraintReificationShape`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}SymmetricConstraintComponent-symmetric`),
      namedNode(`${rdf}type`),
      namedNode(`${sh}Parameter`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}SymmetricConstraintComponent-symmetric`),
      namedNode(`${sh}datatype`),
      namedNode(`${xsd}boolean`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}SymmetricConstraintComponent-symmetric`),
      namedNode(`${sh}description`),
      literal(`If set to true then if A relates to B then B must relate to A.`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}SymmetricConstraintComponent-symmetric`),
      namedNode(`${sh}maxCount`),
      literal(`1`, namedNode(`${xsd}integer`)),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}SymmetricConstraintComponent-symmetric`),
      namedNode(`${sh}name`),
      literal(`symmetric`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}SymmetricConstraintComponent-symmetric`),
      namedNode(`${sh}path`),
      namedNode(`${dash}symmetric`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}SymmetricConstraintComponent`),
      namedNode(`${rdf}type`),
      namedNode(`${sh}ConstraintComponent`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}SymmetricConstraintComponent`),
      namedNode(`${rdfs}comment`),
      literal(`A contraint component for property shapes to validate that a property is symmetric. For symmetric properties, if A relates to B then B must relate to A.`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}SymmetricConstraintComponent`),
      namedNode(`${rdfs}label`),
      literal(`Symmetric constraint component`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}SymmetricConstraintComponent`),
      namedNode(`${sh}message`),
      literal(`Symmetric value expected`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}SymmetricConstraintComponent`),
      namedNode(`${sh}parameter`),
      namedNode(`${dash}SymmetricConstraintComponent-symmetric`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}SymmetricConstraintComponent`),
      namedNode(`${sh}propertyValidator`),
      blankNodes[21],
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}TestCase`),
      namedNode(`${dash}abstract`),
      literal(`true`, namedNode(`${xsd}boolean`)),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}TestCase`),
      namedNode(`${rdf}type`),
      namedNode(`${dash}ShapeClass`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}TestCase`),
      namedNode(`${rdfs}comment`),
      literal(`A test case to verify that a (SHACL-based) feature works as expected.`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}TestCase`),
      namedNode(`${rdfs}label`),
      literal(`Test case`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}TestCase`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${rdfs}Resource`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}TestCaseResult`),
      namedNode(`${dash}abstract`),
      literal(`true`, namedNode(`${xsd}boolean`)),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}TestCaseResult`),
      namedNode(`${rdf}type`),
      namedNode(`${rdfs}Class`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}TestCaseResult`),
      namedNode(`${rdfs}comment`),
      literal(`Base class for results produced by running test cases.`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}TestCaseResult`),
      namedNode(`${rdfs}label`),
      literal(`Test case result`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}TestCaseResult`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${sh}AbstractResult`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}TestEnvironment`),
      namedNode(`${dash}abstract`),
      literal(`true`, namedNode(`${xsd}boolean`)),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}TestEnvironment`),
      namedNode(`${rdf}type`),
      namedNode(`${rdfs}Class`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}TestEnvironment`),
      namedNode(`${rdfs}comment`),
      literal(`Abstract base class for test environments, holding information on how to set up a test case.`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}TestEnvironment`),
      namedNode(`${rdfs}label`),
      literal(`Test environment`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}TestEnvironment`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${rdfs}Resource`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}TextAreaEditor`),
      namedNode(`${rdf}type`),
      namedNode(`${dash}SingleEditor`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}TextAreaEditor`),
      namedNode(`${rdfs}comment`),
      literal(`A multi-line text area to enter the value of a literal.`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}TextAreaEditor`),
      namedNode(`${rdfs}label`),
      literal(`Text area editor`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}TextAreaWithLangEditor`),
      namedNode(`${rdf}type`),
      namedNode(`${dash}SingleEditor`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}TextAreaWithLangEditor`),
      namedNode(`${rdfs}comment`),
      literal(`A multi-line text area to enter the value of a literal and a drop down to select a language.`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}TextAreaWithLangEditor`),
      namedNode(`${rdfs}label`),
      literal(`Text area with lang editor`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}TextFieldEditor`),
      namedNode(`${rdf}type`),
      namedNode(`${dash}SingleEditor`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}TextFieldEditor`),
      namedNode(`${rdfs}comment`),
      literal(`A simple input field to enter the value of a literal, without the ability to change language or datatype.

This is the fallback editor for any literal if no other editors are more suitable.`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}TextFieldEditor`),
      namedNode(`${rdfs}label`),
      literal(`Text field editor`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}TextFieldWithLangEditor`),
      namedNode(`${rdf}type`),
      namedNode(`${dash}SingleEditor`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}TextFieldWithLangEditor`),
      namedNode(`${rdfs}comment`),
      literal(`A single-line input field to enter the value of a literal and a drop down to select language, which is mandatory unless xsd:string is among the permissible datatypes.`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}TextFieldWithLangEditor`),
      namedNode(`${rdfs}label`),
      literal(`Text field with lang editor`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}URIEditor`),
      namedNode(`${rdf}type`),
      namedNode(`${dash}SingleEditor`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}URIEditor`),
      namedNode(`${rdfs}comment`),
      literal(`An input field to enter the URI of a resource, e.g. rdfs:seeAlso links or images.`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}URIEditor`),
      namedNode(`${rdfs}label`),
      literal(`URI editor`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}URIViewer`),
      namedNode(`${rdf}type`),
      namedNode(`${dash}SingleViewer`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}URIViewer`),
      namedNode(`${rdfs}comment`),
      literal(`A Viewer for URI resources, rendering as a hyperlink to that URI. Also includes other ways of interacting with the URI such as opening a nested summary display.`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}URIViewer`),
      namedNode(`${rdfs}label`),
      literal(`URI viewer`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}UniqueValueForClassConstraintComponent-uniqueValueForClass`),
      namedNode(`${dash}reifiableBy`),
      namedNode(`${dash}ConstraintReificationShape`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}UniqueValueForClassConstraintComponent-uniqueValueForClass`),
      namedNode(`${rdf}type`),
      namedNode(`${sh}Parameter`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}UniqueValueForClassConstraintComponent-uniqueValueForClass`),
      namedNode(`${sh}class`),
      namedNode(`${rdfs}Class`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}UniqueValueForClassConstraintComponent-uniqueValueForClass`),
      namedNode(`${sh}description`),
      literal(`States that the values of the property must be unique for all instances of a given class (and its subclasses).`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}UniqueValueForClassConstraintComponent-uniqueValueForClass`),
      namedNode(`${sh}name`),
      literal(`unique value for class`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}UniqueValueForClassConstraintComponent-uniqueValueForClass`),
      namedNode(`${sh}nodeKind`),
      namedNode(`${sh}IRI`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}UniqueValueForClassConstraintComponent-uniqueValueForClass`),
      namedNode(`${sh}path`),
      namedNode(`${dash}uniqueValueForClass`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}UniqueValueForClassConstraintComponent`),
      namedNode(`${rdf}type`),
      namedNode(`${sh}ConstraintComponent`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}UniqueValueForClassConstraintComponent`),
      namedNode(`${rdfs}comment`),
      literal(`A constraint component that can be used to state that the values of a property must be unique for all instances of a given class (and its subclasses).`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}UniqueValueForClassConstraintComponent`),
      namedNode(`${rdfs}label`),
      literal(`Unique value for class constraint component`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}UniqueValueForClassConstraintComponent`),
      namedNode(`${sh}labelTemplate`),
      literal(`Values must be unique among all instances of {?uniqueValueForClass}`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}UniqueValueForClassConstraintComponent`),
      namedNode(`${sh}parameter`),
      namedNode(`${dash}UniqueValueForClassConstraintComponent-uniqueValueForClass`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}UniqueValueForClassConstraintComponent`),
      namedNode(`${sh}propertyValidator`),
      blankNodes[22],
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}UntrustedHTMLViewer`),
      namedNode(`${rdf}type`),
      namedNode(`${dash}SingleViewer`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}UntrustedHTMLViewer`),
      namedNode(`${rdfs}comment`),
      literal(`A Viewer for HTML content from untrusted sources. This viewer will sanitize the HTML before rendering. Any a, button, checkbox, form, hidden, input, img, script, select, style and textarea tags and class and style attributes will be removed.`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}UntrustedHTMLViewer`),
      namedNode(`${rdfs}label`),
      literal(`Untrusted HTML viewer`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}ValidationTestCase`),
      namedNode(`${dash}abstract`),
      literal(`true`, namedNode(`${xsd}boolean`)),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}ValidationTestCase`),
      namedNode(`${rdf}type`),
      namedNode(`${dash}ShapeClass`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}ValidationTestCase`),
      namedNode(`${rdfs}comment`),
      literal(`Abstract superclass for test cases concerning SHACL constraint validation. Future versions may add new kinds of validatin test cases, e.g. to validate a single resource only.`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}ValidationTestCase`),
      namedNode(`${rdfs}label`),
      literal(`Validation test case`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}ValidationTestCase`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${dash}TestCase`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}ValueTableViewer`),
      namedNode(`${rdf}type`),
      namedNode(`${dash}MultiViewer`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}ValueTableViewer`),
      namedNode(`${rdfs}comment`),
      literal(`A viewer that renders all values of a given property as a table, with one value per row, and the columns defined by the shape that is the sh:node or sh:class of the property.`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}ValueTableViewer`),
      namedNode(`${rdfs}label`),
      literal(`Value table viewer`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}Viewer`),
      namedNode(`${dash}abstract`),
      literal(`true`, namedNode(`${xsd}boolean`)),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}Viewer`),
      namedNode(`${rdf}type`),
      namedNode(`${dash}ShapeClass`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}Viewer`),
      namedNode(`${rdfs}comment`),
      literal(`The class of widgets for viewing value nodes.`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}Viewer`),
      namedNode(`${rdfs}label`),
      literal(`Viewer`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}Viewer`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${dash}Widget`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}Widget`),
      namedNode(`${dash}abstract`),
      literal(`true`, namedNode(`${xsd}boolean`)),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}Widget`),
      namedNode(`${rdf}type`),
      namedNode(`${dash}ShapeClass`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}Widget`),
      namedNode(`${rdfs}comment`),
      literal(`Base class of user interface components that can be used to display or edit value nodes.`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}Widget`),
      namedNode(`${rdfs}label`),
      literal(`Widget`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}Widget`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${rdfs}Resource`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}abstract`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}abstract`),
      namedNode(`${rdfs}comment`),
      literal(`Indicates that a class is "abstract" and cannot be used in asserted rdf:type triples. Only non-abstract subclasses of abstract classes should be instantiated directly.`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}abstract`),
      namedNode(`${rdfs}domain`),
      namedNode(`${rdfs}Class`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}abstract`),
      namedNode(`${rdfs}label`),
      literal(`abstract`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}abstract`),
      namedNode(`${rdfs}range`),
      namedNode(`${xsd}boolean`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}actionGroup`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}actionGroup`),
      namedNode(`${rdfs}comment`),
      literal(`Links an Action with the ActionGroup that it should be arranged in.`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}actionGroup`),
      namedNode(`${rdfs}domain`),
      namedNode(`${dash}Action`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}actionGroup`),
      namedNode(`${rdfs}label`),
      literal(`action group`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}actionGroup`),
      namedNode(`${rdfs}range`),
      namedNode(`${dash}ActionGroup`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}actionIconClass`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}actionIconClass`),
      namedNode(`${rdfs}comment`),
      literal(`The (CSS) class of an Action for display purposes alongside the label.`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}actionIconClass`),
      namedNode(`${rdfs}domain`),
      namedNode(`${dash}Action`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}actionIconClass`),
      namedNode(`${rdfs}label`),
      literal(`action icon class`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}actionIconClass`),
      namedNode(`${rdfs}range`),
      namedNode(`${xsd}string`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}addedTriple`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}addedTriple`),
      namedNode(`${rdfs}comment`),
      literal(`May link a dash:GraphUpdate with one or more triples (represented as instances of rdf:Statement) that should be added to fix the source of the result.`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}addedTriple`),
      namedNode(`${rdfs}domain`),
      namedNode(`${dash}GraphUpdate`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}addedTriple`),
      namedNode(`${rdfs}label`),
      literal(`added triple`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}addedTriple`),
      namedNode(`${rdfs}range`),
      namedNode(`${rdf}Statement`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}all`),
      namedNode(`${rdf}type`),
      namedNode(`${rdfs}Resource`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}all`),
      namedNode(`${rdfs}comment`),
      literal(`Represents all users/roles, for example as a possible value of the default view for role property.`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}all`),
      namedNode(`${rdfs}label`),
      literal(`all`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}apiStatus`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}apiStatus`),
      namedNode(`${rdfs}comment`),
      literal(`Defines how and whether the associated feature is part of an external API. APIs may be implemented as (REST) web services, via GraphQL or ADS Script APIs.`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}apiStatus`),
      namedNode(`${rdfs}label`),
      literal(`API status`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}apiStatus`),
      namedNode(`${rdfs}range`),
      namedNode(`${dash}APIStatus`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}applicableToClass`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}applicableToClass`),
      namedNode(`${rdfs}comment`),
      literal(`Can be used to state that a shape is applicable to instances of a given class. This is a softer statement than "target class": a target means that all instances of the class must conform to the shape. Being applicable to simply means that the shape may apply to (some) instances of the class. This information can be used by algorithms or humans.`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}applicableToClass`),
      namedNode(`${rdfs}domain`),
      namedNode(`${sh}Shape`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}applicableToClass`),
      namedNode(`${rdfs}label`),
      literal(`applicable to class`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}applicableToClass`),
      namedNode(`${rdfs}range`),
      namedNode(`${rdfs}Class`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}cachable`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}cachable`),
      namedNode(`${rdfs}comment`),
      literal(`If set to true then the results of the SHACL function can be cached in between invocations with the same arguments. In other words, they are stateless and do not depend on triples in any graph, or the current time stamp etc.`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}cachable`),
      namedNode(`${rdfs}domain`),
      namedNode(`${sh}Function`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}cachable`),
      namedNode(`${rdfs}label`),
      literal(`cachable`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}cachable`),
      namedNode(`${rdfs}range`),
      namedNode(`${xsd}boolean`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}closedByTypes`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}closedByTypes`),
      namedNode(`${rdfs}label`),
      literal(`closed by types`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}coExistsWith`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}coExistsWith`),
      namedNode(`${rdfs}comment`),
      literal(`Specifies a property that must have a value whenever the property path has a value, and must have no value whenever the property path has no value.`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}coExistsWith`),
      namedNode(`${rdfs}label`),
      literal(`co-exists with`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}coExistsWith`),
      namedNode(`${rdfs}range`),
      namedNode(`${rdf}Property`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}composite`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}composite`),
      namedNode(`${rdfs}comment`),
      literal(`Can be used to indicate that a property/path represented by a property constraint represents a composite relationship. In a composite relationship, the life cycle of a "child" object (value of the property/path) depends on the "parent" object (focus node). If the parent gets deleted, then the child objects should be deleted, too. Tools may use dash:composite (if set to true) to implement cascading delete operations.`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}composite`),
      namedNode(`${rdfs}domain`),
      namedNode(`${sh}PropertyShape`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}composite`),
      namedNode(`${rdfs}label`),
      literal(`composite`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}composite`),
      namedNode(`${rdfs}range`),
      namedNode(`${xsd}boolean`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}contextFree`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}contextFree`),
      namedNode(`${rdfs}comment`),
      literal(`Used to mark certain parameterizables as context-free, meaning that the outcome of a process does not depend on the currently active query graph.`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}contextFree`),
      namedNode(`${rdfs}label`),
      literal(`context-free`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}contextFree`),
      namedNode(`${rdfs}range`),
      namedNode(`${xsd}boolean`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}defaultLang`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}defaultLang`),
      namedNode(`${rdfs}comment`),
      literal(`Can be used to annotate a graph (usually the owl:Ontology) with the default language that tools should suggest for new literal values. For example, predominantly English graphs should have "en" as default language.`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}defaultLang`),
      namedNode(`${rdfs}domain`),
      namedNode(`${owl}Ontology`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}defaultLang`),
      namedNode(`${rdfs}label`),
      literal(`default language`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}defaultLang`),
      namedNode(`${rdfs}range`),
      namedNode(`${xsd}string`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}defaultViewForRole`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}defaultViewForRole`),
      namedNode(`${rdfs}comment`),
      literal(`Links a node shape with the roles for which it shall be used as default view. User interfaces can use these values to select how to present a given RDF resource. The values of this property are URIs representing a group of users or agents. There is a dedicated URI dash:all representing all users.`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}defaultViewForRole`),
      namedNode(`${rdfs}domain`),
      namedNode(`${sh}NodeShape`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}defaultViewForRole`),
      namedNode(`${rdfs}label`),
      literal(`default view for role`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}deletedTriple`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}deletedTriple`),
      namedNode(`${rdfs}comment`),
      literal(`May link a dash:GraphUpdate result with one or more triples (represented as instances of rdf:Statement) that should be deleted to fix the source of the result.`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}deletedTriple`),
      namedNode(`${rdfs}domain`),
      namedNode(`${dash}GraphUpdate`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}deletedTriple`),
      namedNode(`${rdfs}label`),
      literal(`deleted triple`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}deletedTriple`),
      namedNode(`${rdfs}range`),
      namedNode(`${rdf}Statement`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}dependencyPredicate`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}dependencyPredicate`),
      namedNode(`${rdfs}comment`),
      literal(`Can be used in dash:js node expressions to enumerate the predicates that the computation of the values may depend on. This can be used by clients to determine whether an edit requires re-computation of values on a form or elsewhere. For example, if the dash:js is something like "focusNode.firstName + focusNode.lastName" then the dependency predicates should be ex:firstName and ex:lastName.`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}dependencyPredicate`),
      namedNode(`${rdfs}label`),
      literal(`dependency predicate`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}dependencyPredicate`),
      namedNode(`${rdfs}range`),
      namedNode(`${rdf}Property`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}detailsEndpoint`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}detailsEndpoint`),
      namedNode(`${rdfs}comment`),
      literal(`Can be used to link a SHACL property shape with the URL of a SPARQL endpoint that may contain further RDF triples for the value nodes delivered by the property. This can be used to inform a processor that it should switch to values from an external graph when the user wants to retrieve more information about a value.

This property should be regarded as an "annotation", i.e. it does not have any impact on validation or other built-in SHACL features. However, selected tools may want to use this information. One implementation strategy would be to periodically fetch the values specified by the sh:node or sh:class shape associated with the property, using the property shapes in that shape, and add the resulting triples into the main query graph.

An example value is "https://query.wikidata.org/sparql".`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}detailsEndpoint`),
      namedNode(`${rdfs}label`),
      literal(`details endpoint`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}detailsGraph`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}detailsGraph`),
      namedNode(`${rdfs}comment`),
      literal(`Can be used to link a SHACL property shape with a SHACL node expression that produces the URIs of one or more graphs that contain further RDF triples for the value nodes delivered by the property. This can be used to inform a processor that it should switch to another data graph when the user wants to retrieve more information about a value.

The node expressions are evaluated with the focus node as input. (It is unclear whether there are also cases where the result may be different for each specific value, in which case the node expression would need a second input argument).

This property should be regarded as an "annotation", i.e. it does not have any impact on validation or other built-in SHACL features. However, selected tools may want to use this information.`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}detailsGraph`),
      namedNode(`${rdfs}label`),
      literal(`details graph`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}editor`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}editor`),
      namedNode(`${rdfs}comment`),
      literal(`Can be used to link a property shape with an editor, to state a preferred editing widget in user interfaces.`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}editor`),
      namedNode(`${rdfs}domain`),
      namedNode(`${sh}PropertyShape`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}editor`),
      namedNode(`${rdfs}label`),
      literal(`editor`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}editor`),
      namedNode(`${rdfs}range`),
      namedNode(`${dash}Editor`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}expectedResult`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}expectedResult`),
      namedNode(`${rdfs}comment`),
      literal(`The expected result(s) of a test case. The value range of this property is different for each kind of test cases.`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}expectedResult`),
      namedNode(`${rdfs}domain`),
      namedNode(`${dash}TestCase`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}expectedResult`),
      namedNode(`${rdfs}label`),
      literal(`expected result`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}expectedResultIsJSON`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}expectedResultIsJSON`),
      namedNode(`${rdfs}comment`),
      literal(`A flag to indicate that the expected result represents a JSON string. If set to true, then tests would compare JSON structures (regardless of whitespaces) instead of actual syntax.`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}expectedResultIsJSON`),
      namedNode(`${rdfs}label`),
      literal(`expected result is JSON`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}expectedResultIsJSON`),
      namedNode(`${rdfs}range`),
      namedNode(`${xsd}boolean`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}expectedResultIsTTL`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}expectedResultIsTTL`),
      namedNode(`${rdfs}comment`),
      literal(`A flag to indicate that the expected result represents an RDF graph encoded as a Turtle file. If set to true, then tests would compare graphs instead of actual syntax.`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}expectedResultIsTTL`),
      namedNode(`${rdfs}domain`),
      namedNode(`${dash}TestCase`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}expectedResultIsTTL`),
      namedNode(`${rdfs}label`),
      literal(`expected result is Turtle`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}expectedResultIsTTL`),
      namedNode(`${rdfs}range`),
      namedNode(`${xsd}boolean`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}fixed`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}fixed`),
      namedNode(`${rdfs}comment`),
      literal(`Can be used to mark that certain validation results have already been fixed.`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}fixed`),
      namedNode(`${rdfs}domain`),
      namedNode(`${sh}ValidationResult`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}fixed`),
      namedNode(`${rdfs}label`),
      literal(`fixed`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}fixed`),
      namedNode(`${rdfs}range`),
      namedNode(`${xsd}boolean`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}hasClass`),
      namedNode(`${rdf}type`),
      namedNode(`${sh}SPARQLAskValidator`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}hasClass`),
      namedNode(`${rdfs}label`),
      literal(`has class`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}hasClass`),
      namedNode(`${sh}ask`),
      literal(`
		ASK {
			$value rdf:type/rdfs:subClassOf* $class .
		}
		`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}hasClass`),
      namedNode(`${sh}message`),
      literal(`Value does not have class {$class}`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}hasClass`),
      namedNode(`${sh}prefixes`),
      namedNode(`${ns6}dash`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}hasMaxExclusive`),
      namedNode(`${rdf}type`),
      namedNode(`${sh}SPARQLAskValidator`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}hasMaxExclusive`),
      namedNode(`${rdfs}comment`),
      literal(`Checks whether a given node (?value) has a value less than (<) the provided ?maxExclusive. Returns false if this cannot be determined, e.g. because values do not have comparable types.`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}hasMaxExclusive`),
      namedNode(`${rdfs}label`),
      literal(`has max exclusive`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}hasMaxExclusive`),
      namedNode(`${sh}ask`),
      literal(`ASK { FILTER ($value < $maxExclusive) }`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}hasMaxExclusive`),
      namedNode(`${sh}prefixes`),
      namedNode(`${ns6}dash`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}hasMaxInclusive`),
      namedNode(`${rdf}type`),
      namedNode(`${sh}SPARQLAskValidator`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}hasMaxInclusive`),
      namedNode(`${rdfs}comment`),
      literal(`Checks whether a given node (?value) has a value less than or equal to (<=) the provided ?maxInclusive. Returns false if this cannot be determined, e.g. because values do not have comparable types.`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}hasMaxInclusive`),
      namedNode(`${rdfs}label`),
      literal(`has max inclusive`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}hasMaxInclusive`),
      namedNode(`${sh}ask`),
      literal(`ASK { FILTER ($value <= $maxInclusive) }`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}hasMaxInclusive`),
      namedNode(`${sh}prefixes`),
      namedNode(`${ns6}dash`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}hasMaxLength`),
      namedNode(`${rdf}type`),
      namedNode(`${sh}SPARQLAskValidator`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}hasMaxLength`),
      namedNode(`${rdfs}comment`),
      literal(`Checks whether a given string (?value) has a length within a given maximum string length.`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}hasMaxLength`),
      namedNode(`${rdfs}label`),
      literal(`has max length`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}hasMaxLength`),
      namedNode(`${sh}ask`),
      literal(`
		ASK {
			FILTER (STRLEN(str($value)) <= $maxLength) .
		}
		`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}hasMaxLength`),
      namedNode(`${sh}prefixes`),
      namedNode(`${ns6}dash`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}hasMinExclusive`),
      namedNode(`${rdf}type`),
      namedNode(`${sh}SPARQLAskValidator`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}hasMinExclusive`),
      namedNode(`${rdfs}comment`),
      literal(`Checks whether a given node (?value) has value greater than (>) the provided ?minExclusive. Returns false if this cannot be determined, e.g. because values do not have comparable types.`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}hasMinExclusive`),
      namedNode(`${rdfs}label`),
      literal(`has min exclusive`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}hasMinExclusive`),
      namedNode(`${sh}ask`),
      literal(`ASK { FILTER ($value > $minExclusive) }`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}hasMinExclusive`),
      namedNode(`${sh}prefixes`),
      namedNode(`${ns6}dash`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}hasMinInclusive`),
      namedNode(`${rdf}type`),
      namedNode(`${sh}SPARQLAskValidator`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}hasMinInclusive`),
      namedNode(`${rdfs}comment`),
      literal(`Checks whether a given node (?value) has value greater than or equal to (>=) the provided ?minInclusive. Returns false if this cannot be determined, e.g. because values do not have comparable types.`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}hasMinInclusive`),
      namedNode(`${rdfs}label`),
      literal(`has min inclusive`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}hasMinInclusive`),
      namedNode(`${sh}ask`),
      literal(`ASK { FILTER ($value >= $minInclusive) }`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}hasMinInclusive`),
      namedNode(`${sh}prefixes`),
      namedNode(`${ns6}dash`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}hasMinLength`),
      namedNode(`${rdf}type`),
      namedNode(`${sh}SPARQLAskValidator`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}hasMinLength`),
      namedNode(`${rdfs}comment`),
      literal(`Checks whether a given string (?value) has a length within a given minimum string length.`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}hasMinLength`),
      namedNode(`${rdfs}label`),
      literal(`has min length`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}hasMinLength`),
      namedNode(`${sh}ask`),
      literal(`
		ASK {
			FILTER (STRLEN(str($value)) >= $minLength) .
		}
		`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}hasMinLength`),
      namedNode(`${sh}prefixes`),
      namedNode(`${ns6}dash`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}hasNodeKind`),
      namedNode(`${rdf}type`),
      namedNode(`${sh}SPARQLAskValidator`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}hasNodeKind`),
      namedNode(`${rdfs}comment`),
      literal(`Checks whether a given node (?value) has a given sh:NodeKind (?nodeKind). For example, sh:hasNodeKind(42, sh:Literal) = true.`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}hasNodeKind`),
      namedNode(`${rdfs}label`),
      literal(`has node kind`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}hasNodeKind`),
      namedNode(`${sh}ask`),
      literal(`
		ASK {
			FILTER ((isIRI($value) && $nodeKind IN ( sh:IRI, sh:BlankNodeOrIRI, sh:IRIOrLiteral ) ) ||
				(isLiteral($value) && $nodeKind IN ( sh:Literal, sh:BlankNodeOrLiteral, sh:IRIOrLiteral ) ) ||
				(isBlank($value)   && $nodeKind IN ( sh:BlankNode, sh:BlankNodeOrIRI, sh:BlankNodeOrLiteral ) )) .
		}
		`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}hasNodeKind`),
      namedNode(`${sh}prefixes`),
      namedNode(`${ns6}dash`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}hasPattern`),
      namedNode(`${rdf}type`),
      namedNode(`${sh}SPARQLAskValidator`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}hasPattern`),
      namedNode(`${rdfs}comment`),
      literal(`Checks whether the string representation of a given node (?value) matches a given regular expression (?pattern). Returns false if the value is a blank node.`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}hasPattern`),
      namedNode(`${rdfs}label`),
      literal(`has pattern`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}hasPattern`),
      namedNode(`${sh}ask`),
      literal(`ASK { FILTER (!isBlank($value) && IF(bound($flags), regex(str($value), $pattern, $flags), regex(str($value), $pattern))) }`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}hasPattern`),
      namedNode(`${sh}prefixes`),
      namedNode(`${ns6}dash`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}hasRootClass`),
      namedNode(`${rdf}type`),
      namedNode(`${sh}SPARQLAskValidator`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}hasRootClass`),
      namedNode(`${rdfs}label`),
      literal(`has root class`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}hasRootClass`),
      namedNode(`${sh}ask`),
      literal(`ASK {
    $value rdfs:subClassOf* $rootClass .
}`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}hasRootClass`),
      namedNode(`${sh}prefixes`),
      namedNode(`${ns6}dash`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}hasStem`),
      namedNode(`${rdf}type`),
      namedNode(`${sh}SPARQLAskValidator`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}hasStem`),
      namedNode(`${rdfs}comment`),
      literal(`Checks whether a given node is an IRI starting with a given stem.`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}hasStem`),
      namedNode(`${rdfs}label`),
      literal(`has stem`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}hasStem`),
      namedNode(`${sh}ask`),
      literal(`ASK { FILTER (isIRI($value) && STRSTARTS(str($value), $stem)) }`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}hasStem`),
      namedNode(`${sh}prefixes`),
      namedNode(`${ns6}dash`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}hasValueIn`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}hasValueIn`),
      namedNode(`${rdfs}comment`),
      literal(`Specifies a constraint that at least one of the value nodes must be a member of the given list.`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}hasValueIn`),
      namedNode(`${rdfs}label`),
      literal(`has value in`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}hasValueIn`),
      namedNode(`${rdfs}range`),
      namedNode(`${rdf}List`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}hasValueWithClass`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}hasValueWithClass`),
      namedNode(`${rdfs}comment`),
      literal(`Specifies a constraint that at least one of the value nodes must be an instance of a given class.`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}hasValueWithClass`),
      namedNode(`${rdfs}label`),
      literal(`has value with class`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}hasValueWithClass`),
      namedNode(`${rdfs}range`),
      namedNode(`${rdfs}Class`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}height`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}height`),
      namedNode(`${rdfs}comment`),
      literal(`The height.`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}height`),
      namedNode(`${rdfs}label`),
      literal(`height`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}height`),
      namedNode(`${rdfs}range`),
      namedNode(`${xsd}integer`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}hidden`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}hidden`),
      namedNode(`${rdfs}comment`),
      literal(`Properties marked as hidden do not appear in user interfaces, yet remain part of the shape for other purposes such as validation and scripting or GraphQL schema generation.`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}hidden`),
      namedNode(`${rdfs}domain`),
      namedNode(`${sh}PropertyShape`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}hidden`),
      namedNode(`${rdfs}label`),
      literal(`hidden`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}hidden`),
      namedNode(`${rdfs}range`),
      namedNode(`${xsd}boolean`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}index`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}index`),
      namedNode(`${rdfs}label`),
      literal(`index`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}index`),
      namedNode(`${rdfs}range`),
      namedNode(`${xsd}integer`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}indexed`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}indexed`),
      namedNode(`${rdfs}domain`),
      namedNode(`${sh}PropertyShape`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}indexed`),
      namedNode(`${rdfs}range`),
      namedNode(`${xsd}boolean`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}isDeactivated`),
      namedNode(`${dash}apiStatus`),
      namedNode(`${dash}Stable`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}isDeactivated`),
      namedNode(`${rdf}type`),
      namedNode(`${sh}SPARQLFunction`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}isDeactivated`),
      namedNode(`${rdfs}comment`),
      literal(`Checks whether a given shape or constraint has been marked as "deactivated" using sh:deactivated.`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}isDeactivated`),
      namedNode(`${rdfs}label`),
      literal(`is deactivated`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}isDeactivated`),
      namedNode(`${sh}ask`),
      literal(`ASK {
    ?constraintOrShape sh:deactivated true .
}`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}isDeactivated`),
      namedNode(`${sh}parameter`),
      blankNodes[23],
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}isDeactivated`),
      namedNode(`${sh}prefixes`),
      namedNode(`${ns6}dash`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}isDeactivated`),
      namedNode(`${sh}returnType`),
      namedNode(`${xsd}boolean`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}isIn`),
      namedNode(`${rdf}type`),
      namedNode(`${sh}SPARQLAskValidator`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}isIn`),
      namedNode(`${rdfs}label`),
      literal(`is in`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}isIn`),
      namedNode(`${sh}ask`),
      literal(`
		ASK {
			GRAPH $shapesGraph {
				$in (rdf:rest*)/rdf:first $value .
			}
		}
		`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}isIn`),
      namedNode(`${sh}prefixes`),
      namedNode(`${ns6}dash`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}isLanguageIn`),
      namedNode(`${rdf}type`),
      namedNode(`${sh}SPARQLAskValidator`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}isLanguageIn`),
      namedNode(`${rdfs}label`),
      literal(`is language in`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}isLanguageIn`),
      namedNode(`${sh}ask`),
      literal(`
		ASK {
			BIND (lang($value) AS ?valueLang) .
			FILTER EXISTS {
				GRAPH $shapesGraph {
					$languageIn (rdf:rest*)/rdf:first ?lang .
				    FILTER (langMatches(?valueLang, ?lang))
				} }
		}
		`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}isLanguageIn`),
      namedNode(`${sh}prefixes`),
      namedNode(`${ns6}dash`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}isNodeKindBlankNode`),
      namedNode(`${dash}apiStatus`),
      namedNode(`${dash}Stable`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}isNodeKindBlankNode`),
      namedNode(`${dash}cachable`),
      literal(`true`, namedNode(`${xsd}boolean`)),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}isNodeKindBlankNode`),
      namedNode(`${dash}contextFree`),
      literal(`true`, namedNode(`${xsd}boolean`)),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}isNodeKindBlankNode`),
      namedNode(`${rdf}type`),
      namedNode(`${sh}SPARQLFunction`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}isNodeKindBlankNode`),
      namedNode(`${rdfs}comment`),
      literal(`Checks if a given sh:NodeKind is one that includes BlankNodes.`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}isNodeKindBlankNode`),
      namedNode(`${rdfs}label`),
      literal(`is NodeKind BlankNode`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}isNodeKindBlankNode`),
      namedNode(`${sh}ask`),
      literal(`ASK {
	FILTER ($nodeKind IN ( sh:BlankNode, sh:BlankNodeOrIRI, sh:BlankNodeOrLiteral ))
}`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}isNodeKindBlankNode`),
      namedNode(`${sh}parameter`),
      blankNodes[24],
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}isNodeKindBlankNode`),
      namedNode(`${sh}prefixes`),
      namedNode(`${ns6}dash`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}isNodeKindBlankNode`),
      namedNode(`${sh}returnType`),
      namedNode(`${xsd}boolean`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}isNodeKindIRI`),
      namedNode(`${dash}apiStatus`),
      namedNode(`${dash}Stable`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}isNodeKindIRI`),
      namedNode(`${dash}cachable`),
      literal(`true`, namedNode(`${xsd}boolean`)),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}isNodeKindIRI`),
      namedNode(`${dash}contextFree`),
      literal(`true`, namedNode(`${xsd}boolean`)),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}isNodeKindIRI`),
      namedNode(`${rdf}type`),
      namedNode(`${sh}SPARQLFunction`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}isNodeKindIRI`),
      namedNode(`${rdfs}comment`),
      literal(`Checks if a given sh:NodeKind is one that includes IRIs.`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}isNodeKindIRI`),
      namedNode(`${rdfs}label`),
      literal(`is NodeKind IRI`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}isNodeKindIRI`),
      namedNode(`${sh}ask`),
      literal(`ASK {
	FILTER ($nodeKind IN ( sh:IRI, sh:BlankNodeOrIRI, sh:IRIOrLiteral ))
}`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}isNodeKindIRI`),
      namedNode(`${sh}parameter`),
      blankNodes[25],
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}isNodeKindIRI`),
      namedNode(`${sh}prefixes`),
      namedNode(`${ns6}dash`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}isNodeKindIRI`),
      namedNode(`${sh}returnType`),
      namedNode(`${xsd}boolean`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}isNodeKindLiteral`),
      namedNode(`${dash}apiStatus`),
      namedNode(`${dash}Stable`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}isNodeKindLiteral`),
      namedNode(`${dash}cachable`),
      literal(`true`, namedNode(`${xsd}boolean`)),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}isNodeKindLiteral`),
      namedNode(`${dash}contextFree`),
      literal(`true`, namedNode(`${xsd}boolean`)),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}isNodeKindLiteral`),
      namedNode(`${rdf}type`),
      namedNode(`${sh}SPARQLFunction`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}isNodeKindLiteral`),
      namedNode(`${rdfs}comment`),
      literal(`Checks if a given sh:NodeKind is one that includes Literals.`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}isNodeKindLiteral`),
      namedNode(`${rdfs}label`),
      literal(`is NodeKind Literal`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}isNodeKindLiteral`),
      namedNode(`${sh}ask`),
      literal(`ASK {
	FILTER ($nodeKind IN ( sh:Literal, sh:BlankNodeOrLiteral, sh:IRIOrLiteral ))
}`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}isNodeKindLiteral`),
      namedNode(`${sh}parameter`),
      blankNodes[26],
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}isNodeKindLiteral`),
      namedNode(`${sh}prefixes`),
      namedNode(`${ns6}dash`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}isNodeKindLiteral`),
      namedNode(`${sh}returnType`),
      namedNode(`${xsd}boolean`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}isSubClassOf-subclass`),
      namedNode(`${rdf}type`),
      namedNode(`${sh}Parameter`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}isSubClassOf-subclass`),
      namedNode(`${sh}class`),
      namedNode(`${rdfs}Class`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}isSubClassOf-subclass`),
      namedNode(`${sh}description`),
      literal(`The (potential) subclass.`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}isSubClassOf-subclass`),
      namedNode(`${sh}name`),
      literal(`subclass`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}isSubClassOf-subclass`),
      namedNode(`${sh}path`),
      namedNode(`${dash}subclass`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}isSubClassOf-superclass`),
      namedNode(`${rdf}type`),
      namedNode(`${sh}Parameter`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}isSubClassOf-superclass`),
      namedNode(`${sh}class`),
      namedNode(`${rdfs}Class`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}isSubClassOf-superclass`),
      namedNode(`${sh}description`),
      literal(`The (potential) superclass.`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}isSubClassOf-superclass`),
      namedNode(`${sh}name`),
      literal(`superclass`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}isSubClassOf-superclass`),
      namedNode(`${sh}order`),
      literal(`1`, namedNode(`${xsd}decimal`)),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}isSubClassOf-superclass`),
      namedNode(`${sh}path`),
      namedNode(`${dash}superclass`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}isSubClassOf`),
      namedNode(`${dash}apiStatus`),
      namedNode(`${dash}Stable`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}isSubClassOf`),
      namedNode(`${rdf}type`),
      namedNode(`${sh}SPARQLFunction`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}isSubClassOf`),
      namedNode(`${rdfs}comment`),
      literal(`Returns true if a given class (first argument) is a subclass of a given other class (second argument), or identical to that class. This is equivalent to an rdfs:subClassOf* check.`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}isSubClassOf`),
      namedNode(`${rdfs}label`),
      literal(`is subclass of`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}isSubClassOf`),
      namedNode(`${sh}ask`),
      literal(`ASK {
    $subclass rdfs:subClassOf* $superclass .
}`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}isSubClassOf`),
      namedNode(`${sh}parameter`),
      namedNode(`${dash}isSubClassOf-subclass`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}isSubClassOf`),
      namedNode(`${sh}parameter`),
      namedNode(`${dash}isSubClassOf-superclass`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}isSubClassOf`),
      namedNode(`${sh}prefixes`),
      namedNode(`${ns6}dash`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}isSubClassOf`),
      namedNode(`${sh}returnType`),
      namedNode(`${xsd}boolean`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}js`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}js`),
      namedNode(`${rdfs}comment`),
      literal(`The JavaScript source code of a Script.`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}js`),
      namedNode(`${rdfs}domain`),
      namedNode(`${dash}Script`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}js`),
      namedNode(`${rdfs}label`),
      literal(`JavaScript source code`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}js`),
      namedNode(`${rdfs}range`),
      namedNode(`${xsd}string`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}localConstraint`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}localConstraint`),
      namedNode(`${rdfs}comment`),
      literal(`Can be set to true for those constraint components where the validation does not require to visit any other triples than the shape definitions and the direct property values of the focus node mentioned in the property constraints. Examples of this include sh:minCount and sh:hasValue.

Constraint components that are marked as such can be optimized by engines, e.g. they can be evaluated client-side at form submission time, without having to make a round-trip to a server, assuming the client has downloaded a complete snapshot of the resource.

Any component marked with dash:staticConstraint is also a dash:localConstraint.`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}localConstraint`),
      namedNode(`${rdfs}domain`),
      namedNode(`${sh}ConstraintComponent`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}localConstraint`),
      namedNode(`${rdfs}label`),
      literal(`local constraint`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}localConstraint`),
      namedNode(`${rdfs}range`),
      namedNode(`${xsd}boolean`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}mimeTypes`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}mimeTypes`),
      namedNode(`${rdfs}comment`),
      literal(`For file-typed properties, this can be used to specify the expected/allowed mime types of its values. This can be used, for example, to limit file input boxes or file selectors. If multiple values are allowed then they need to be separated by commas.

Example values are listed at https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}mimeTypes`),
      namedNode(`${rdfs}domain`),
      namedNode(`${sh}PropertyShape`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}mimeTypes`),
      namedNode(`${rdfs}label`),
      literal(`mime types`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}mimeTypes`),
      namedNode(`${rdfs}range`),
      namedNode(`${xsd}string`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}neverMaterialize`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}neverMaterialize`),
      namedNode(`${rdfs}comment`),
      literal(`If set to true at a property shape then any sh:values and sh:defaultValue rules of this property will be ignored when 'all inferences' are computed. This is useful for property values that shall only be computed for individual focus nodes (e.g. when a user visits a resource) but not for large inference runs.`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}neverMaterialize`),
      namedNode(`${rdfs}domain`),
      namedNode(`${sh}PropertyShape`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}neverMaterialize`),
      namedNode(`${rdfs}label`),
      literal(`never materialize`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}neverMaterialize`),
      namedNode(`${rdfs}range`),
      namedNode(`${xsd}boolean`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}onAllValues`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}onAllValues`),
      namedNode(`${rdfs}comment`),
      literal(`If set to true for a ScriptConstraint or ScriptValidator, then the associated script will receive all value nodes at once, as a value of the variable values. By default (or false), the script is called for each value node individually.`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}onAllValues`),
      namedNode(`${rdfs}label`),
      literal(`on all values`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}onAllValues`),
      namedNode(`${rdfs}range`),
      namedNode(`${xsd}boolean`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}propertySuggestionGenerator`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}propertySuggestionGenerator`),
      namedNode(`${rdfs}comment`),
      literal(`Links the constraint component with instances of dash:SuggestionGenerator that may be used to produce suggestions for a given validation result that was produced by a property constraint.`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}propertySuggestionGenerator`),
      namedNode(`${rdfs}domain`),
      namedNode(`${sh}ConstraintComponent`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}propertySuggestionGenerator`),
      namedNode(`${rdfs}label`),
      literal(`property suggestion generator`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}propertySuggestionGenerator`),
      namedNode(`${rdfs}range`),
      namedNode(`${dash}SuggestionGenerator`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}readOnly`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}readOnly`),
      namedNode(`${rdfs}comment`),
      literal(`Used as a hint for user interfaces that values of the associated property should not be editable. The values of this may be the boolean literals true or false or, more generally, a SHACL node expression that must evaluate to true or false.`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}readOnly`),
      namedNode(`${rdfs}domain`),
      namedNode(`${sh}PropertyShape`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}readOnly`),
      namedNode(`${rdfs}label`),
      literal(`read only`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}reifiableBy`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}reifiableBy`),
      namedNode(`${rdfs}comment`),
      literal(`Can be used to specify the node shape that may be applied to reified statements produced by a property shape. The property shape must have a URI resource as its sh:path. The values of this property must be node shapes. User interfaces can use this information to determine which properties to present to users when reified statements are explored or edited. Use dash:None to indicate that no reification should be permitted.`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}reifiableBy`),
      namedNode(`${rdfs}domain`),
      namedNode(`${sh}PropertyShape`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}reifiableBy`),
      namedNode(`${rdfs}label`),
      literal(`reifiable by`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}reifiableBy`),
      namedNode(`${rdfs}range`),
      namedNode(`${sh}NodeShape`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}resourceAction`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}resourceAction`),
      namedNode(`${rdfs}comment`),
      literal(`Links a class with the Resource Actions that can be applied to instances of that class.`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}resourceAction`),
      namedNode(`${rdfs}domain`),
      namedNode(`${rdfs}Class`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}resourceAction`),
      namedNode(`${rdfs}label`),
      literal(`resource action`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}resourceAction`),
      namedNode(`${rdfs}range`),
      namedNode(`${dash}ResourceAction`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}rootClass`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}rootClass`),
      namedNode(`${rdfs}label`),
      literal(`root class`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}shape`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}shape`),
      namedNode(`${rdfs}comment`),
      literal(`States that a subject resource has a given shape. This property can, for example, be used to capture results of SHACL validation on static data.`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}shape`),
      namedNode(`${rdfs}label`),
      literal(`shape`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}shape`),
      namedNode(`${rdfs}range`),
      namedNode(`${sh}Shape`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}shapeScript`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}shapeScript`),
      namedNode(`${rdfs}domain`),
      namedNode(`${sh}NodeShape`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}shapeScript`),
      namedNode(`${rdfs}label`),
      literal(`shape script`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}singleLine`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}singleLine`),
      namedNode(`${rdfs}label`),
      literal(`single line`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}singleLine`),
      namedNode(`${rdfs}range`),
      namedNode(`${xsd}boolean`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}staticConstraint`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}staticConstraint`),
      namedNode(`${rdfs}comment`),
      literal(`Can be set to true for those constraint components where the validation does not require to visit any other triples than the parameters. Examples of this include sh:datatype or sh:nodeKind, where no further triples need to be queried to determine the result.

Constraint components that are marked as such can be optimized by engines, e.g. they can be evaluated client-side at form submission time, without having to make a round-trip to a server.`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}staticConstraint`),
      namedNode(`${rdfs}domain`),
      namedNode(`${sh}ConstraintComponent`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}staticConstraint`),
      namedNode(`${rdfs}label`),
      literal(`static constraint`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}staticConstraint`),
      namedNode(`${rdfs}range`),
      namedNode(`${xsd}boolean`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}stem`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}stem`),
      namedNode(`${rdfs}comment`),
      literal(`Specifies a string value that the IRI of the value nodes must start with.`, 'en'),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}stem`),
      namedNode(`${rdfs}label`),
      literal(`stem`, 'en'),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}stem`),
      namedNode(`${rdfs}range`),
      namedNode(`${xsd}string`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}subSetOf`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}subSetOf`),
      namedNode(`${rdfs}label`),
      literal(`sub set of`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}suggestion`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}suggestion`),
      namedNode(`${rdfs}comment`),
      literal(`Can be used to link a result with one or more suggestions on how to address or improve the underlying issue.`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}suggestion`),
      namedNode(`${rdfs}domain`),
      namedNode(`${sh}AbstractResult`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}suggestion`),
      namedNode(`${rdfs}label`),
      literal(`suggestion`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}suggestion`),
      namedNode(`${rdfs}range`),
      namedNode(`${dash}Suggestion`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}suggestionConfidence`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}suggestionConfidence`),
      namedNode(`${rdfs}comment`),
      literal(`An optional confidence between 0% and 100%. Suggestions with 100% confidence are strongly recommended. Can be used to sort recommended updates.`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}suggestionConfidence`),
      namedNode(`${rdfs}domain`),
      namedNode(`${dash}Suggestion`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}suggestionConfidence`),
      namedNode(`${rdfs}label`),
      literal(`suggestion confidence`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}suggestionConfidence`),
      namedNode(`${rdfs}range`),
      namedNode(`${xsd}decimal`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}suggestionGenerator`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}suggestionGenerator`),
      namedNode(`${rdfs}comment`),
      literal(`Links a sh:SPARQLConstraint or sh:JSConstraint with instances of dash:SuggestionGenerator that may be used to produce suggestions for a given validation result that was produced by the constraint.`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}suggestionGenerator`),
      namedNode(`${rdfs}label`),
      literal(`suggestion generator`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}suggestionGenerator`),
      namedNode(`${rdfs}range`),
      namedNode(`${dash}SuggestionGenerator`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}suggestionGroup`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}suggestionGroup`),
      namedNode(`${rdfs}comment`),
      literal(`Can be used to link a suggestion with the group identifier to which it belongs. By default this is a link to the dash:SuggestionGenerator, but in principle this could be any value.`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}suggestionGroup`),
      namedNode(`${rdfs}domain`),
      namedNode(`${dash}Suggestion`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}suggestionGroup`),
      namedNode(`${rdfs}label`),
      literal(`suggestion`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}symmetric`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}symmetric`),
      namedNode(`${rdfs}comment`),
      literal(`True to declare that the associated property path is symmetric.`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}symmetric`),
      namedNode(`${rdfs}label`),
      literal(`symmetric`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}toString`),
      namedNode(`${dash}cachable`),
      literal(`true`, namedNode(`${xsd}boolean`)),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}toString`),
      namedNode(`${rdf}type`),
      namedNode(`${sh}SPARQLFunction`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}toString`),
      namedNode(`${rdfs}comment`),
      literal(`Returns a literal with datatype xsd:string that has the input value as its string. If the input value is an (URI) resource then its URI will be used.`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}toString`),
      namedNode(`${rdfs}label`),
      literal(`to string`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}toString`),
      namedNode(`${sh}labelTemplate`),
      literal(`Convert {$arg} to xsd:string`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}toString`),
      namedNode(`${sh}parameter`),
      blankNodes[27],
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}toString`),
      namedNode(`${sh}prefixes`),
      namedNode(`${ns6}dash`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}toString`),
      namedNode(`${sh}returnType`),
      namedNode(`${xsd}string`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}toString`),
      namedNode(`${sh}select`),
      literal(`SELECT (xsd:string($arg) AS ?result)
WHERE {
}`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}uniqueValueForClass`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}uniqueValueForClass`),
      namedNode(`${rdfs}label`),
      literal(`unique value for class`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}uriTemplate`),
      namedNode(`${dash}apiStatus`),
      namedNode(`${dash}Stable`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}uriTemplate`),
      namedNode(`${dash}cachable`),
      literal(`true`, namedNode(`${xsd}boolean`)),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}uriTemplate`),
      namedNode(`${dash}contextFree`),
      literal(`true`, namedNode(`${xsd}boolean`)),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}uriTemplate`),
      namedNode(`${rdf}type`),
      namedNode(`${sh}SPARQLFunction`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}uriTemplate`),
      namedNode(`${rdfs}comment`),
      literal(`Inserts a given value into a given URI template, producing a new xsd:anyURI literal.

In the future this should support RFC 6570 but for now it is limited to simple {...} patterns.`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}uriTemplate`),
      namedNode(`${rdfs}label`),
      literal(`URI template`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}uriTemplate`),
      namedNode(`${sh}parameter`),
      blankNodes[28],
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}uriTemplate`),
      namedNode(`${sh}parameter`),
      blankNodes[29],
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}uriTemplate`),
      namedNode(`${sh}prefixes`),
      namedNode(`${ns6}dash`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}uriTemplate`),
      namedNode(`${sh}returnType`),
      namedNode(`${xsd}anyURI`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}uriTemplate`),
      namedNode(`${sh}select`),
      literal(`SELECT ?result
WHERE {
    	BIND (xsd:anyURI(REPLACE(?template, "\\{[a-zA-Z]+\\}", $value)) AS ?result)
}`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}validateShapes`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}validateShapes`),
      namedNode(`${rdfs}comment`),
      literal(`True to also validate the shapes itself (i.e. parameter declarations).`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}validateShapes`),
      namedNode(`${rdfs}domain`),
      namedNode(`${dash}GraphValidationTestCase`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}validateShapes`),
      namedNode(`${rdfs}label`),
      literal(`validate shapes`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}validateShapes`),
      namedNode(`${rdfs}range`),
      namedNode(`${xsd}boolean`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}valueCount`),
      namedNode(`${dash}apiStatus`),
      namedNode(`${dash}Stable`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}valueCount`),
      namedNode(`${rdf}type`),
      namedNode(`${sh}SPARQLFunction`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}valueCount`),
      namedNode(`${rdfs}comment`),
      literal(`Computes the number of objects for a given subject/predicate combination.`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}valueCount`),
      namedNode(`${rdfs}label`),
      literal(`value count`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}valueCount`),
      namedNode(`${sh}parameter`),
      blankNodes[30],
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}valueCount`),
      namedNode(`${sh}parameter`),
      blankNodes[31],
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}valueCount`),
      namedNode(`${sh}prefixes`),
      namedNode(`${ns6}dash`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}valueCount`),
      namedNode(`${sh}returnType`),
      namedNode(`${xsd}integer`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}valueCount`),
      namedNode(`${sh}select`),
      literal(`
		SELECT (COUNT(?object) AS ?result)
		WHERE {
    		$subject $predicate ?object .
		}
`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}viewer`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}viewer`),
      namedNode(`${rdfs}comment`),
      literal(`Can be used to link a property shape with a viewer, to state a preferred viewing widget in user interfaces.`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}viewer`),
      namedNode(`${rdfs}domain`),
      namedNode(`${sh}PropertyShape`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}viewer`),
      namedNode(`${rdfs}label`),
      literal(`viewer`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}viewer`),
      namedNode(`${rdfs}range`),
      namedNode(`${dash}Viewer`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}width`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}width`),
      namedNode(`${rdfs}comment`),
      literal(`The width.`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}width`),
      namedNode(`${rdfs}label`),
      literal(`width`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}width`),
      namedNode(`${rdfs}range`),
      namedNode(`${xsd}integer`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}x`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}x`),
      namedNode(`${rdfs}comment`),
      literal(`The x position.`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}x`),
      namedNode(`${rdfs}label`),
      literal(`x`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}x`),
      namedNode(`${rdfs}range`),
      namedNode(`${xsd}integer`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}y`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}y`),
      namedNode(`${rdfs}comment`),
      literal(`The y position.`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}y`),
      namedNode(`${rdfs}label`),
      literal(`y`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${dash}y`),
      namedNode(`${rdfs}range`),
      namedNode(`${xsd}integer`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${ns6}dash`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}Ontology`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${ns6}dash`),
      namedNode(`${rdfs}comment`),
      literal(`DASH is a SHACL library for frequently needed features and design patterns. The constraint components in this library are 100% standards compliant and will work on any engine that fully supports SHACL.`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${ns6}dash`),
      namedNode(`${rdfs}label`),
      literal(`DASH Data Shapes Vocabulary`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${ns6}dash`),
      namedNode(`${owl}imports`),
      namedNode(sh),
      namedNode(dash)
    ),
    quad(
      namedNode(`${ns6}dash`),
      namedNode(`${sh}declare`),
      blankNodes[32],
      namedNode(dash)
    ),
    quad(
      namedNode(`${ns6}dash`),
      namedNode(`${sh}declare`),
      blankNodes[33],
      namedNode(dash)
    ),
    quad(
      namedNode(`${ns6}dash`),
      namedNode(`${sh}declare`),
      blankNodes[34],
      namedNode(dash)
    ),
    quad(
      namedNode(`${ns6}dash`),
      namedNode(`${sh}declare`),
      blankNodes[35],
      namedNode(dash)
    ),
    quad(
      namedNode(`${ns6}dash`),
      namedNode(`${sh}declare`),
      blankNodes[36],
      namedNode(dash)
    ),
    quad(
      namedNode(`${ns6}dash`),
      namedNode(`${sh}declare`),
      blankNodes[37],
      namedNode(dash)
    ),
    quad(
      namedNode(`${ns6}dash`),
      namedNode(`${sh}declare`),
      blankNodes[38],
      namedNode(dash)
    ),
    quad(
      namedNode(`${owl}Class`),
      namedNode(`${rdf}type`),
      namedNode(`${rdfs}Class`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${owl}Class`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${rdfs}Class`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${sh}AbstractResult`),
      namedNode(`${dash}abstract`),
      literal(`true`, namedNode(`${xsd}boolean`)),
      namedNode(dash)
    ),
    quad(
      namedNode(`${sh}ClassConstraintComponent`),
      namedNode(`${sh}labelTemplate`),
      literal(`Value needs to have class {$class}`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${sh}ClassConstraintComponent`),
      namedNode(`${sh}validator`),
      namedNode(`${dash}hasClass`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${sh}ClosedConstraintComponent`),
      namedNode(`${dash}localConstraint`),
      literal(`true`, namedNode(`${xsd}boolean`)),
      namedNode(dash)
    ),
    quad(
      namedNode(`${sh}ClosedConstraintComponent`),
      namedNode(`${sh}labelTemplate`),
      literal(`Closed shape: only the enumerated properties can be used`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${sh}ClosedConstraintComponent`),
      namedNode(`${sh}nodeValidator`),
      blankNodes[39],
      namedNode(dash)
    ),
    quad(
      namedNode(`${sh}DatatypeConstraintComponent`),
      namedNode(`${dash}staticConstraint`),
      literal(`true`, namedNode(`${xsd}boolean`)),
      namedNode(dash)
    ),
    quad(
      namedNode(`${sh}DatatypeConstraintComponent`),
      namedNode(`${sh}labelTemplate`),
      literal(`Values must have datatype {$datatype}`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${sh}DatatypeConstraintComponent`),
      namedNode(`${sh}message`),
      literal(`Value does not have datatype {$datatype}`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${sh}DisjointConstraintComponent`),
      namedNode(`${dash}localConstraint`),
      literal(`true`, namedNode(`${xsd}boolean`)),
      namedNode(dash)
    ),
    quad(
      namedNode(`${sh}DisjointConstraintComponent`),
      namedNode(`${sh}validator`),
      blankNodes[40],
      namedNode(dash)
    ),
    quad(
      namedNode(`${sh}EqualsConstraintComponent`),
      namedNode(`${dash}localConstraint`),
      literal(`true`, namedNode(`${xsd}boolean`)),
      namedNode(dash)
    ),
    quad(
      namedNode(`${sh}EqualsConstraintComponent`),
      namedNode(`${sh}message`),
      literal(`Must have same values as {$equals}`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${sh}EqualsConstraintComponent`),
      namedNode(`${sh}nodeValidator`),
      blankNodes[41],
      namedNode(dash)
    ),
    quad(
      namedNode(`${sh}EqualsConstraintComponent`),
      namedNode(`${sh}propertyValidator`),
      blankNodes[42],
      namedNode(dash)
    ),
    quad(
      namedNode(`${sh}Function`),
      namedNode(`${dash}abstract`),
      literal(`true`, namedNode(`${xsd}boolean`)),
      namedNode(dash)
    ),
    quad(
      namedNode(`${sh}HasValueConstraintComponent`),
      namedNode(`${dash}localConstraint`),
      literal(`true`, namedNode(`${xsd}boolean`)),
      namedNode(dash)
    ),
    quad(
      namedNode(`${sh}HasValueConstraintComponent`),
      namedNode(`${sh}labelTemplate`),
      literal(`Must have value {$hasValue}`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${sh}HasValueConstraintComponent`),
      namedNode(`${sh}nodeValidator`),
      blankNodes[43],
      namedNode(dash)
    ),
    quad(
      namedNode(`${sh}HasValueConstraintComponent`),
      namedNode(`${sh}propertyValidator`),
      blankNodes[44],
      namedNode(dash)
    ),
    quad(
      namedNode(`${sh}InConstraintComponent`),
      namedNode(`${dash}localConstraint`),
      literal(`true`, namedNode(`${xsd}boolean`)),
      namedNode(dash)
    ),
    quad(
      namedNode(`${sh}InConstraintComponent`),
      namedNode(`${sh}labelTemplate`),
      literal(`Value must be in {$in}`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${sh}InConstraintComponent`),
      namedNode(`${sh}message`),
      literal(`Value is not in {$in}`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${sh}InConstraintComponent`),
      namedNode(`${sh}validator`),
      namedNode(`${dash}isIn`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${sh}LanguageInConstraintComponent`),
      namedNode(`${dash}localConstraint`),
      literal(`true`, namedNode(`${xsd}boolean`)),
      namedNode(dash)
    ),
    quad(
      namedNode(`${sh}LanguageInConstraintComponent`),
      namedNode(`${sh}labelTemplate`),
      literal(`Language must match any of {$languageIn}`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${sh}LanguageInConstraintComponent`),
      namedNode(`${sh}message`),
      literal(`Language does not match any of {$languageIn}`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${sh}LanguageInConstraintComponent`),
      namedNode(`${sh}validator`),
      namedNode(`${dash}isLanguageIn`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${sh}LessThanConstraintComponent`),
      namedNode(`${dash}localConstraint`),
      literal(`true`, namedNode(`${xsd}boolean`)),
      namedNode(dash)
    ),
    quad(
      namedNode(`${sh}LessThanConstraintComponent`),
      namedNode(`${sh}message`),
      literal(`Value is not < value of {$lessThan}`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${sh}LessThanConstraintComponent`),
      namedNode(`${sh}propertyValidator`),
      blankNodes[45],
      namedNode(dash)
    ),
    quad(
      namedNode(`${sh}LessThanOrEqualsConstraintComponent`),
      namedNode(`${dash}localConstraint`),
      literal(`true`, namedNode(`${xsd}boolean`)),
      namedNode(dash)
    ),
    quad(
      namedNode(`${sh}LessThanOrEqualsConstraintComponent`),
      namedNode(`${sh}message`),
      literal(`Value is not <= value of {$lessThanOrEquals}`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${sh}LessThanOrEqualsConstraintComponent`),
      namedNode(`${sh}propertyValidator`),
      blankNodes[46],
      namedNode(dash)
    ),
    quad(
      namedNode(`${sh}MaxCountConstraintComponent`),
      namedNode(`${dash}localConstraint`),
      literal(`true`, namedNode(`${xsd}boolean`)),
      namedNode(dash)
    ),
    quad(
      namedNode(`${sh}MaxCountConstraintComponent`),
      namedNode(`${sh}labelTemplate`),
      literal(`Must not have more than {$maxCount} values`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${sh}MaxCountConstraintComponent`),
      namedNode(`${sh}message`),
      literal(`More than {$maxCount} values`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${sh}MaxCountConstraintComponent`),
      namedNode(`${sh}propertyValidator`),
      blankNodes[47],
      namedNode(dash)
    ),
    quad(
      namedNode(`${sh}MaxExclusiveConstraintComponent`),
      namedNode(`${dash}staticConstraint`),
      literal(`true`, namedNode(`${xsd}boolean`)),
      namedNode(dash)
    ),
    quad(
      namedNode(`${sh}MaxExclusiveConstraintComponent`),
      namedNode(`${sh}labelTemplate`),
      literal(`Value must be < {$maxExclusive}`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${sh}MaxExclusiveConstraintComponent`),
      namedNode(`${sh}message`),
      literal(`Value is not < {$maxExclusive}`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${sh}MaxExclusiveConstraintComponent`),
      namedNode(`${sh}validator`),
      namedNode(`${dash}hasMaxExclusive`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${sh}MaxInclusiveConstraintComponent`),
      namedNode(`${dash}staticConstraint`),
      literal(`true`, namedNode(`${xsd}boolean`)),
      namedNode(dash)
    ),
    quad(
      namedNode(`${sh}MaxInclusiveConstraintComponent`),
      namedNode(`${sh}labelTemplate`),
      literal(`Value must be <= {$maxInclusive}`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${sh}MaxInclusiveConstraintComponent`),
      namedNode(`${sh}message`),
      literal(`Value is not <= {$maxInclusive}`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${sh}MaxInclusiveConstraintComponent`),
      namedNode(`${sh}validator`),
      namedNode(`${dash}hasMaxInclusive`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${sh}MaxLengthConstraintComponent`),
      namedNode(`${dash}staticConstraint`),
      literal(`true`, namedNode(`${xsd}boolean`)),
      namedNode(dash)
    ),
    quad(
      namedNode(`${sh}MaxLengthConstraintComponent`),
      namedNode(`${sh}labelTemplate`),
      literal(`Value must not have more than {$maxLength} characters`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${sh}MaxLengthConstraintComponent`),
      namedNode(`${sh}message`),
      literal(`Value has more than {$maxLength} characters`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${sh}MaxLengthConstraintComponent`),
      namedNode(`${sh}validator`),
      namedNode(`${dash}hasMaxLength`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${sh}MinCountConstraintComponent`),
      namedNode(`${dash}localConstraint`),
      literal(`true`, namedNode(`${xsd}boolean`)),
      namedNode(dash)
    ),
    quad(
      namedNode(`${sh}MinCountConstraintComponent`),
      namedNode(`${sh}labelTemplate`),
      literal(`Must have at least {$minCount} values`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${sh}MinCountConstraintComponent`),
      namedNode(`${sh}message`),
      literal(`Fewer than {$minCount} values`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${sh}MinCountConstraintComponent`),
      namedNode(`${sh}propertyValidator`),
      blankNodes[48],
      namedNode(dash)
    ),
    quad(
      namedNode(`${sh}MinExclusiveConstraintComponent`),
      namedNode(`${dash}staticConstraint`),
      literal(`true`, namedNode(`${xsd}boolean`)),
      namedNode(dash)
    ),
    quad(
      namedNode(`${sh}MinExclusiveConstraintComponent`),
      namedNode(`${sh}labelTemplate`),
      literal(`Value must be > {$minExclusive}`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${sh}MinExclusiveConstraintComponent`),
      namedNode(`${sh}message`),
      literal(`Value is not > {$minExclusive}`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${sh}MinExclusiveConstraintComponent`),
      namedNode(`${sh}validator`),
      namedNode(`${dash}hasMinExclusive`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${sh}MinInclusiveConstraintComponent`),
      namedNode(`${dash}staticConstraint`),
      literal(`true`, namedNode(`${xsd}boolean`)),
      namedNode(dash)
    ),
    quad(
      namedNode(`${sh}MinInclusiveConstraintComponent`),
      namedNode(`${sh}labelTemplate`),
      literal(`Value must be >= {$minInclusive}`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${sh}MinInclusiveConstraintComponent`),
      namedNode(`${sh}message`),
      literal(`Value is not >= {$minInclusive}`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${sh}MinInclusiveConstraintComponent`),
      namedNode(`${sh}validator`),
      namedNode(`${dash}hasMinInclusive`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${sh}MinLengthConstraintComponent`),
      namedNode(`${dash}staticConstraint`),
      literal(`true`, namedNode(`${xsd}boolean`)),
      namedNode(dash)
    ),
    quad(
      namedNode(`${sh}MinLengthConstraintComponent`),
      namedNode(`${sh}labelTemplate`),
      literal(`Value must have less than {$minLength} characters`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${sh}MinLengthConstraintComponent`),
      namedNode(`${sh}message`),
      literal(`Value has less than {$minLength} characters`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${sh}MinLengthConstraintComponent`),
      namedNode(`${sh}validator`),
      namedNode(`${dash}hasMinLength`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${sh}NodeConstraintComponent`),
      namedNode(`${sh}message`),
      literal(`Value does not have shape {$node}`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${sh}NodeKindConstraintComponent`),
      namedNode(`${dash}staticConstraint`),
      literal(`true`, namedNode(`${xsd}boolean`)),
      namedNode(dash)
    ),
    quad(
      namedNode(`${sh}NodeKindConstraintComponent`),
      namedNode(`${sh}labelTemplate`),
      literal(`Value must have node kind {$nodeKind}`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${sh}NodeKindConstraintComponent`),
      namedNode(`${sh}message`),
      literal(`Value does not have node kind {$nodeKind}`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${sh}NodeKindConstraintComponent`),
      namedNode(`${sh}validator`),
      namedNode(`${dash}hasNodeKind`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${sh}NotConstraintComponent`),
      namedNode(`${sh}labelTemplate`),
      literal(`Value must not have shape {$not}`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${sh}NotConstraintComponent`),
      namedNode(`${sh}message`),
      literal(`Value does have shape {$not}`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${sh}Parameterizable`),
      namedNode(`${dash}abstract`),
      literal(`true`, namedNode(`${xsd}boolean`)),
      namedNode(dash)
    ),
    quad(
      namedNode(`${sh}PatternConstraintComponent`),
      namedNode(`${dash}staticConstraint`),
      literal(`true`, namedNode(`${xsd}boolean`)),
      namedNode(dash)
    ),
    quad(
      namedNode(`${sh}PatternConstraintComponent`),
      namedNode(`${sh}labelTemplate`),
      literal(`Value must match pattern "{$pattern}"`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${sh}PatternConstraintComponent`),
      namedNode(`${sh}message`),
      literal(`Value does not match pattern "{$pattern}"`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${sh}PatternConstraintComponent`),
      namedNode(`${sh}validator`),
      namedNode(`${dash}hasPattern`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${sh}QualifiedMaxCountConstraintComponent`),
      namedNode(`${sh}labelTemplate`),
      literal(`No more than {$qualifiedMaxCount} values can have shape {$qualifiedValueShape}`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${sh}QualifiedMaxCountConstraintComponent`),
      namedNode(`${sh}message`),
      literal(`More than {$qualifiedMaxCount} values have shape {$qualifiedValueShape}`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${sh}QualifiedMinCountConstraintComponent`),
      namedNode(`${sh}labelTemplate`),
      literal(`No fewer than {$qualifiedMinCount} values can have shape {$qualifiedValueShape}`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${sh}QualifiedMinCountConstraintComponent`),
      namedNode(`${sh}message`),
      literal(`Fewer than {$qualifiedMinCount} values have shape {$qualifiedValueShape}`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${sh}Rule`),
      namedNode(`${dash}abstract`),
      literal(`true`, namedNode(`${xsd}boolean`)),
      namedNode(dash)
    ),
    quad(
      namedNode(`${sh}Rules`),
      namedNode(`${rdf}type`),
      namedNode(`${rdfs}Resource`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${sh}Rules`),
      namedNode(`${rdfs}comment`),
      literal(`The SHACL rules entailment regime.`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${sh}Rules`),
      namedNode(`${rdfs}label`),
      literal(`SHACL Rules`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${sh}Rules`),
      namedNode(`${rdfs}seeAlso`),
      namedNode(`${ns8}Rules`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${sh}SPARQLExecutable`),
      namedNode(`${dash}abstract`),
      literal(`true`, namedNode(`${xsd}boolean`)),
      namedNode(dash)
    ),
    quad(
      namedNode(`${sh}Shape`),
      namedNode(`${dash}abstract`),
      literal(`true`, namedNode(`${xsd}boolean`)),
      namedNode(dash)
    ),
    quad(
      namedNode(`${sh}Target`),
      namedNode(`${dash}abstract`),
      literal(`true`, namedNode(`${xsd}boolean`)),
      namedNode(dash)
    ),
    quad(
      namedNode(`${sh}TargetType`),
      namedNode(`${dash}abstract`),
      literal(`true`, namedNode(`${xsd}boolean`)),
      namedNode(dash)
    ),
    quad(
      namedNode(`${sh}UniqueLangConstraintComponent`),
      namedNode(`${dash}localConstraint`),
      literal(`true`, namedNode(`${xsd}boolean`)),
      namedNode(dash)
    ),
    quad(
      namedNode(`${sh}UniqueLangConstraintComponent`),
      namedNode(`${sh}labelTemplate`),
      literal(`No language can be used more than once`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${sh}UniqueLangConstraintComponent`),
      namedNode(`${sh}message`),
      literal(`Language "{?lang}" used more than once`),
      namedNode(dash)
    ),
    quad(
      namedNode(`${sh}UniqueLangConstraintComponent`),
      namedNode(`${sh}propertyValidator`),
      blankNodes[49],
      namedNode(dash)
    ),
    quad(
      namedNode(`${sh}Validator`),
      namedNode(`${dash}abstract`),
      literal(`true`, namedNode(`${xsd}boolean`)),
      namedNode(dash)
    ),
    quad(
      namedNode(`${sh}order`),
      namedNode(`${rdfs}range`),
      namedNode(`${xsd}decimal`),
      namedNode(dash)
    ),
    quad(
      blankNodes[50],
      namedNode(`${sh}datatype`),
      namedNode(`${xsd}string`),
      namedNode(dash)
    ),
    quad(
      blankNodes[2],
      namedNode(`${sh}datatype`),
      namedNode(`${xsd}date`),
      namedNode(dash)
    ),
    quad(
      blankNodes[12],
      namedNode(`${rdf}type`),
      namedNode(`${sh}PropertyShape`),
      namedNode(dash)
    ),
    quad(
      blankNodes[12],
      namedNode(`${rdfs}comment`),
      literal(`Each list member (including this node) must be have the shape dash:ListNodeShape.`),
      namedNode(dash)
    ),
    quad(
      blankNodes[12],
      namedNode(`${sh}node`),
      namedNode(`${dash}ListNodeShape`),
      namedNode(dash)
    ),
    quad(
      blankNodes[12],
      namedNode(`${sh}path`),
      blankNodes[51],
      namedNode(dash)
    ),
    quad(
      blankNodes[52],
      namedNode(`${sh}hasValue`),
      namedNode(`${rdf}nil`),
      namedNode(dash)
    ),
    quad(
      blankNodes[52],
      namedNode(`${sh}property`),
      blankNodes[53],
      namedNode(dash)
    ),
    quad(
      blankNodes[52],
      namedNode(`${sh}property`),
      blankNodes[54],
      namedNode(dash)
    ),
    quad(
      blankNodes[10],
      namedNode(`${rdf}first`),
      blankNodes[52],
      namedNode(dash)
    ),
    quad(
      blankNodes[10],
      namedNode(`${rdf}rest`),
      blankNodes[55],
      namedNode(dash)
    ),
    quad(
      blankNodes[14],
      namedNode(`${rdf}type`),
      namedNode(`${sh}SPARQLSelectValidator`),
      namedNode(dash)
    ),
    quad(
      blankNodes[14],
      namedNode(`${sh}prefixes`),
      namedNode(`${ns6}dash`),
      namedNode(dash)
    ),
    quad(
      blankNodes[14],
      namedNode(`${sh}select`),
      literal(`SELECT DISTINCT $this
WHERE {
        FILTER (
			# Must have a value for the primary key
			NOT EXISTS { ?this $PATH ?any }
			||
			# Must have no more than one value for the primary key
			EXISTS {
				?this $PATH ?value1 .
				?this $PATH ?value2 .
				FILTER (?value1 != ?value2) .
			}
			||
			# The value of the primary key must align with the derived URI
			EXISTS {
				{
        			?this $PATH ?value .
					FILTER NOT EXISTS { ?this $PATH ?value2 . FILTER (?value != ?value2) }
				}
        		BIND (CONCAT($uriStart, ENCODE_FOR_URI(str(?value))) AS ?uri) .
        		FILTER (str(?this) != ?uri) .
    		}
		)
}`),
      namedNode(dash)
    ),
    quad(
      blankNodes[42],
      namedNode(`${rdf}type`),
      namedNode(`${sh}SPARQLSelectValidator`),
      namedNode(dash)
    ),
    quad(
      blankNodes[42],
      namedNode(`${sh}prefixes`),
      namedNode(`${ns6}dash`),
      namedNode(dash)
    ),
    quad(
      blankNodes[42],
      namedNode(`${sh}select`),
      literal(`
		SELECT DISTINCT $this ?value
		WHERE {
			{
				$this $PATH ?value .
				MINUS {
					$this $equals ?value .
				}
			}
			UNION
			{
				$this $equals ?value .
				MINUS {
					$this $PATH ?value .
				}
			}
		}
		`),
      namedNode(dash)
    ),
    quad(
      blankNodes[56],
      namedNode(`${dash}nonRecursive`),
      literal(`true`, namedNode(`${xsd}boolean`)),
      namedNode(dash)
    ),
    quad(
      blankNodes[56],
      namedNode(`${rdf}type`),
      namedNode(`${sh}PropertyShape`),
      namedNode(dash)
    ),
    quad(
      blankNodes[56],
      namedNode(`${sh}path`),
      blankNodes[57],
      namedNode(dash)
    ),
    quad(
      blankNodes[13],
      namedNode(`${rdf}type`),
      namedNode(`${sh}SPARQLSelectValidator`),
      namedNode(dash)
    ),
    quad(
      blankNodes[13],
      namedNode(`${sh}prefixes`),
      namedNode(`${ns6}dash`),
      namedNode(dash)
    ),
    quad(
      blankNodes[13],
      namedNode(`${sh}select`),
      literal(`SELECT DISTINCT $this ($this AS ?value)
WHERE {
	{
		FILTER (?nonRecursive)
	}
    $this $PATH $this .
}`),
      namedNode(dash)
    ),
    quad(
      blankNodes[58],
      namedNode(`${sh}not`),
      blankNodes[59],
      namedNode(dash)
    ),
    quad(
      blankNodes[58],
      namedNode(`${sh}property`),
      blankNodes[60],
      namedNode(dash)
    ),
    quad(
      blankNodes[58],
      namedNode(`${sh}property`),
      blankNodes[61],
      namedNode(dash)
    ),
    quad(
      blankNodes[60],
      namedNode(`${rdf}type`),
      namedNode(`${sh}PropertyShape`),
      namedNode(dash)
    ),
    quad(
      blankNodes[60],
      namedNode(`${sh}maxCount`),
      literal(`1`, namedNode(`${xsd}integer`)),
      namedNode(dash)
    ),
    quad(
      blankNodes[60],
      namedNode(`${sh}minCount`),
      literal(`1`, namedNode(`${xsd}integer`)),
      namedNode(dash)
    ),
    quad(
      blankNodes[60],
      namedNode(`${sh}path`),
      namedNode(`${rdf}first`),
      namedNode(dash)
    ),
    quad(
      blankNodes[44],
      namedNode(`${rdf}type`),
      namedNode(`${sh}SPARQLSelectValidator`),
      namedNode(dash)
    ),
    quad(
      blankNodes[44],
      namedNode(`${sh}message`),
      literal(`Missing expected value {$hasValue}`),
      namedNode(dash)
    ),
    quad(
      blankNodes[44],
      namedNode(`${sh}prefixes`),
      namedNode(`${ns6}dash`),
      namedNode(dash)
    ),
    quad(
      blankNodes[44],
      namedNode(`${sh}select`),
      literal(`
		SELECT $this
		WHERE {
			FILTER NOT EXISTS { $this $PATH $hasValue }
		}
		`),
      namedNode(dash)
    ),
    quad(
      blankNodes[17],
      namedNode(`${rdf}first`),
      blankNodes[62],
      namedNode(dash)
    ),
    quad(
      blankNodes[17],
      namedNode(`${rdf}rest`),
      namedNode(`${rdf}nil`),
      namedNode(dash)
    ),
    quad(
      blankNodes[21],
      namedNode(`${rdf}type`),
      namedNode(`${sh}SPARQLSelectValidator`),
      namedNode(dash)
    ),
    quad(
      blankNodes[21],
      namedNode(`${sh}prefixes`),
      namedNode(`${ns6}dash`),
      namedNode(dash)
    ),
    quad(
      blankNodes[21],
      namedNode(`${sh}select`),
      literal(`SELECT $this ?value {
	FILTER ($symmetric) .
	$this $PATH ?value .
	FILTER NOT EXISTS {
    	?value $PATH $this .
	}
}`),
      namedNode(dash)
    ),
    quad(
      blankNodes[51],
      namedNode(`${sh}zeroOrMorePath`),
      namedNode(`${rdf}rest`),
      namedNode(dash)
    ),
    quad(
      blankNodes[16],
      namedNode(`${sh}datatype`),
      namedNode(`${xsd}string`),
      namedNode(dash)
    ),
    quad(
      blankNodes[32],
      namedNode(`${sh}namespace`),
      literal(`http://www.w3.org/2000/01/rdf-schema#`, namedNode(`${xsd}anyURI`)),
      namedNode(dash)
    ),
    quad(
      blankNodes[32],
      namedNode(`${sh}prefix`),
      literal(`rdfs`),
      namedNode(dash)
    ),
    quad(
      blankNodes[33],
      namedNode(`${sh}namespace`),
      literal(`http://www.w3.org/2001/XMLSchema#`, namedNode(`${xsd}anyURI`)),
      namedNode(dash)
    ),
    quad(
      blankNodes[33],
      namedNode(`${sh}prefix`),
      literal(`xsd`),
      namedNode(dash)
    ),
    quad(
      blankNodes[63],
      namedNode(`${sh}hasValue`),
      namedNode(`${rdf}nil`),
      namedNode(dash)
    ),
    quad(
      blankNodes[0],
      namedNode(`${rdf}type`),
      namedNode(`${sh}SPARQLSelectValidator`),
      namedNode(dash)
    ),
    quad(
      blankNodes[0],
      namedNode(`${sh}message`),
      literal(`Property {?path} is not among those permitted for any of the types`),
      namedNode(dash)
    ),
    quad(
      blankNodes[0],
      namedNode(`${sh}prefixes`),
      namedNode(`${ns6}dash`),
      namedNode(dash)
    ),
    quad(
      blankNodes[0],
      namedNode(`${sh}select`),
      literal(`SELECT $this (?predicate AS ?path) ?value
WHERE {
	FILTER ($closedByTypes) .
    $this ?predicate ?value .
	FILTER (?predicate != rdf:type) .
	FILTER NOT EXISTS {
		$this rdf:type ?type .
		?type rdfs:subClassOf* ?class .
		GRAPH $shapesGraph {
			?class sh:property/sh:path ?predicate .
		}
	}
}`),
      namedNode(dash)
    ),
    quad(
      blankNodes[34],
      namedNode(`${sh}namespace`),
      literal(`http://www.w3.org/2004/02/skos/core#`, namedNode(`${xsd}anyURI`)),
      namedNode(dash)
    ),
    quad(
      blankNodes[34],
      namedNode(`${sh}prefix`),
      literal(`skos`),
      namedNode(dash)
    ),
    quad(
      blankNodes[25],
      namedNode(`${rdf}type`),
      namedNode(`${sh}Parameter`),
      namedNode(dash)
    ),
    quad(
      blankNodes[25],
      namedNode(`${sh}class`),
      namedNode(`${sh}NodeKind`),
      namedNode(dash)
    ),
    quad(
      blankNodes[25],
      namedNode(`${sh}description`),
      literal(`The sh:NodeKind to check.`),
      namedNode(dash)
    ),
    quad(
      blankNodes[25],
      namedNode(`${sh}name`),
      literal(`node kind`),
      namedNode(dash)
    ),
    quad(
      blankNodes[25],
      namedNode(`${sh}nodeKind`),
      namedNode(`${sh}IRI`),
      namedNode(dash)
    ),
    quad(
      blankNodes[25],
      namedNode(`${sh}path`),
      namedNode(`${dash}nodeKind`),
      namedNode(dash)
    ),
    quad(
      blankNodes[53],
      namedNode(`${rdf}type`),
      namedNode(`${sh}PropertyShape`),
      namedNode(dash)
    ),
    quad(
      blankNodes[53],
      namedNode(`${sh}maxCount`),
      literal(`0`, namedNode(`${xsd}integer`)),
      namedNode(dash)
    ),
    quad(
      blankNodes[53],
      namedNode(`${sh}path`),
      namedNode(`${rdf}rest`),
      namedNode(dash)
    ),
    quad(
      blankNodes[35],
      namedNode(`${sh}namespace`),
      literal(`http://purl.org/dc/terms/`, namedNode(`${xsd}anyURI`)),
      namedNode(dash)
    ),
    quad(
      blankNodes[35],
      namedNode(`${sh}prefix`),
      literal(`dcterms`),
      namedNode(dash)
    ),
    quad(
      blankNodes[23],
      namedNode(`${rdf}type`),
      namedNode(`${sh}Parameter`),
      namedNode(dash)
    ),
    quad(
      blankNodes[23],
      namedNode(`${sh}description`),
      literal(`The sh:Constraint or sh:Shape to test.`),
      namedNode(dash)
    ),
    quad(
      blankNodes[23],
      namedNode(`${sh}name`),
      literal(`constraint or shape`),
      namedNode(dash)
    ),
    quad(
      blankNodes[23],
      namedNode(`${sh}path`),
      namedNode(`${dash}constraintOrShape`),
      namedNode(dash)
    ),
    quad(
      blankNodes[36],
      namedNode(`${sh}namespace`),
      literal(`http://www.w3.org/1999/02/22-rdf-syntax-ns#`, namedNode(`${xsd}anyURI`)),
      namedNode(dash)
    ),
    quad(
      blankNodes[36],
      namedNode(`${sh}prefix`),
      literal(`rdf`),
      namedNode(dash)
    ),
    quad(
      blankNodes[47],
      namedNode(`${rdf}type`),
      namedNode(`${sh}SPARQLSelectValidator`),
      namedNode(dash)
    ),
    quad(
      blankNodes[47],
      namedNode(`${sh}prefixes`),
      namedNode(`${ns6}dash`),
      namedNode(dash)
    ),
    quad(
      blankNodes[47],
      namedNode(`${sh}select`),
      literal(`
		SELECT $this
		WHERE {
			$this $PATH ?value .
		}
		GROUP BY $this
		HAVING (COUNT(DISTINCT ?value) > $maxCount)
		`),
      namedNode(dash)
    ),
    quad(
      blankNodes[30],
      namedNode(`${rdf}type`),
      namedNode(`${sh}Parameter`),
      namedNode(dash)
    ),
    quad(
      blankNodes[30],
      namedNode(`${sh}class`),
      namedNode(`${rdfs}Resource`),
      namedNode(dash)
    ),
    quad(
      blankNodes[30],
      namedNode(`${sh}description`),
      literal(`The subject to get the number of objects of.`),
      namedNode(dash)
    ),
    quad(
      blankNodes[30],
      namedNode(`${sh}name`),
      literal(`subject`),
      namedNode(dash)
    ),
    quad(
      blankNodes[30],
      namedNode(`${sh}order`),
      literal(`0`, namedNode(`${xsd}integer`)),
      namedNode(dash)
    ),
    quad(
      blankNodes[30],
      namedNode(`${sh}path`),
      namedNode(`${dash}subject`),
      namedNode(dash)
    ),
    quad(
      blankNodes[4],
      namedNode(`${sh}datatype`),
      namedNode(`${rdf}HTML`),
      namedNode(dash)
    ),
    quad(
      blankNodes[64],
      namedNode(`${sh}datatype`),
      namedNode(`${xsd}dateTime`),
      namedNode(dash)
    ),
    quad(
      blankNodes[49],
      namedNode(`${rdf}type`),
      namedNode(`${sh}SPARQLSelectValidator`),
      namedNode(dash)
    ),
    quad(
      blankNodes[49],
      namedNode(`${sh}prefixes`),
      namedNode(`${ns6}dash`),
      namedNode(dash)
    ),
    quad(
      blankNodes[49],
      namedNode(`${sh}select`),
      literal(`
		SELECT DISTINCT $this ?lang
		WHERE {
			{
				FILTER sameTerm($uniqueLang, true) .
			}
			$this $PATH ?value .
			BIND (lang(?value) AS ?lang) .
			FILTER (bound(?lang) && ?lang != "") .
			FILTER EXISTS {
				$this $PATH ?otherValue .
				FILTER (?otherValue != ?value && ?lang = lang(?otherValue)) .
			}
		}
		`),
      namedNode(dash)
    ),
    quad(
      blankNodes[65],
      namedNode(`${sh}datatype`),
      namedNode(`${rdf}HTML`),
      namedNode(dash)
    ),
    quad(
      blankNodes[6],
      namedNode(`${rdf}type`),
      namedNode(`${sh}SPARQLSelectValidator`),
      namedNode(dash)
    ),
    quad(
      blankNodes[6],
      namedNode(`${sh}prefixes`),
      namedNode(`${ns6}dash`),
      namedNode(dash)
    ),
    quad(
      blankNodes[6],
      namedNode(`${sh}select`),
      literal(`SELECT $this
WHERE {
	FILTER NOT EXISTS {
    	$this $PATH ?value .
		GRAPH $shapesGraph {
			$hasValueIn rdf:rest*/rdf:first ?value .
		}
	}
}`),
      namedNode(dash)
    ),
    quad(
      blankNodes[41],
      namedNode(`${rdf}type`),
      namedNode(`${sh}SPARQLSelectValidator`),
      namedNode(dash)
    ),
    quad(
      blankNodes[41],
      namedNode(`${sh}prefixes`),
      namedNode(`${ns6}dash`),
      namedNode(dash)
    ),
    quad(
      blankNodes[41],
      namedNode(`${sh}select`),
      literal(`
		SELECT DISTINCT $this ?value
		WHERE {
			{
				FILTER NOT EXISTS { $this $equals $this }
				BIND ($this AS ?value) .
			}
			UNION
			{
				$this $equals ?value .
				FILTER (?value != $this) .
			}
		}
		`),
      namedNode(dash)
    ),
    quad(
      blankNodes[5],
      namedNode(`${rdf}first`),
      blankNodes[50],
      namedNode(dash)
    ),
    quad(
      blankNodes[5],
      namedNode(`${rdf}rest`),
      blankNodes[66],
      namedNode(dash)
    ),
    quad(
      blankNodes[1],
      namedNode(`${rdf}type`),
      namedNode(`${sh}SPARQLSelectValidator`),
      namedNode(dash)
    ),
    quad(
      blankNodes[1],
      namedNode(`${sh}prefixes`),
      namedNode(`${ns6}dash`),
      namedNode(dash)
    ),
    quad(
      blankNodes[1],
      namedNode(`${sh}select`),
      literal(`SELECT $this
WHERE {
	{
    	FILTER (EXISTS { $this $PATH ?any } && NOT EXISTS { $this $coExistsWith ?any })
	}
	UNION
	{
    	FILTER (NOT EXISTS { $this $PATH ?any } && EXISTS { $this $coExistsWith ?any })
	}
}`),
      namedNode(dash)
    ),
    quad(
      blankNodes[31],
      namedNode(`${rdf}type`),
      namedNode(`${sh}Parameter`),
      namedNode(dash)
    ),
    quad(
      blankNodes[31],
      namedNode(`${sh}class`),
      namedNode(`${rdfs}Resource`),
      namedNode(dash)
    ),
    quad(
      blankNodes[31],
      namedNode(`${sh}description`),
      literal(`The predicate to get the number of objects of.`),
      namedNode(dash)
    ),
    quad(
      blankNodes[31],
      namedNode(`${sh}name`),
      literal(`predicate`),
      namedNode(dash)
    ),
    quad(
      blankNodes[31],
      namedNode(`${sh}order`),
      literal(`1`, namedNode(`${xsd}integer`)),
      namedNode(dash)
    ),
    quad(
      blankNodes[31],
      namedNode(`${sh}path`),
      namedNode(`${dash}predicate`),
      namedNode(dash)
    ),
    quad(
      blankNodes[20],
      namedNode(`${rdf}type`),
      namedNode(`${sh}SPARQLAskValidator`),
      namedNode(dash)
    ),
    quad(
      blankNodes[20],
      namedNode(`${sh}ask`),
      literal(`ASK {
    $this $subSetOf $value .
}`),
      namedNode(dash)
    ),
    quad(
      blankNodes[20],
      namedNode(`${sh}prefixes`),
      namedNode(`${ns6}dash`),
      namedNode(dash)
    ),
    quad(
      blankNodes[24],
      namedNode(`${rdf}type`),
      namedNode(`${sh}Parameter`),
      namedNode(dash)
    ),
    quad(
      blankNodes[24],
      namedNode(`${sh}class`),
      namedNode(`${sh}NodeKind`),
      namedNode(dash)
    ),
    quad(
      blankNodes[24],
      namedNode(`${sh}description`),
      literal(`The sh:NodeKind to check.`),
      namedNode(dash)
    ),
    quad(
      blankNodes[24],
      namedNode(`${sh}name`),
      literal(`node kind`),
      namedNode(dash)
    ),
    quad(
      blankNodes[24],
      namedNode(`${sh}nodeKind`),
      namedNode(`${sh}IRI`),
      namedNode(dash)
    ),
    quad(
      blankNodes[24],
      namedNode(`${sh}path`),
      namedNode(`${dash}nodeKind`),
      namedNode(dash)
    ),
    quad(
      blankNodes[43],
      namedNode(`${rdf}type`),
      namedNode(`${sh}SPARQLAskValidator`),
      namedNode(dash)
    ),
    quad(
      blankNodes[43],
      namedNode(`${sh}ask`),
      literal(`ASK {
    FILTER ($value = $hasValue)
}`),
      namedNode(dash)
    ),
    quad(
      blankNodes[43],
      namedNode(`${sh}message`),
      literal(`Value must be {$hasValue}`),
      namedNode(dash)
    ),
    quad(
      blankNodes[43],
      namedNode(`${sh}prefixes`),
      namedNode(`${ns6}dash`),
      namedNode(dash)
    ),
    quad(
      blankNodes[67],
      namedNode(`${sh}not`),
      blankNodes[68],
      namedNode(dash)
    ),
    quad(
      blankNodes[67],
      namedNode(`${sh}property`),
      blankNodes[56],
      namedNode(dash)
    ),
    quad(
      blankNodes[19],
      namedNode(`${rdf}first`),
      blankNodes[69],
      namedNode(dash)
    ),
    quad(
      blankNodes[19],
      namedNode(`${rdf}rest`),
      blankNodes[70],
      namedNode(dash)
    ),
    quad(
      blankNodes[37],
      namedNode(`${sh}namespace`),
      literal(`http://datashapes.org/dash#`, namedNode(`${xsd}anyURI`)),
      namedNode(dash)
    ),
    quad(
      blankNodes[37],
      namedNode(`${sh}prefix`),
      literal(`dash`),
      namedNode(dash)
    ),
    quad(
      blankNodes[9],
      namedNode(`${rdf}type`),
      namedNode(`${sh}SPARQLSelectValidator`),
      namedNode(dash)
    ),
    quad(
      blankNodes[9],
      namedNode(`${sh}prefixes`),
      namedNode(`${ns6}dash`),
      namedNode(dash)
    ),
    quad(
      blankNodes[9],
      namedNode(`${sh}select`),
      literal(`SELECT $this
WHERE {
	FILTER NOT EXISTS {
    	$this $PATH ?value .
		?value a ?type .
		?type rdfs:subClassOf* $hasValueWithClass .
	}
}`),
      namedNode(dash)
    ),
    quad(
      blankNodes[45],
      namedNode(`${rdf}type`),
      namedNode(`${sh}SPARQLSelectValidator`),
      namedNode(dash)
    ),
    quad(
      blankNodes[45],
      namedNode(`${sh}prefixes`),
      namedNode(`${ns6}dash`),
      namedNode(dash)
    ),
    quad(
      blankNodes[45],
      namedNode(`${sh}select`),
      literal(`
		SELECT $this ?value
		WHERE {
			$this $PATH ?value .
			$this $lessThan ?otherValue .
			BIND (?value < ?otherValue AS ?result) .
			FILTER (!bound(?result) || !(?result)) .
		}
		`),
      namedNode(dash)
    ),
    quad(
      blankNodes[27],
      namedNode(`${rdf}type`),
      namedNode(`${sh}Parameter`),
      namedNode(dash)
    ),
    quad(
      blankNodes[27],
      namedNode(`${sh}description`),
      literal(`The input value.`),
      namedNode(dash)
    ),
    quad(
      blankNodes[27],
      namedNode(`${sh}name`),
      literal(`arg`),
      namedNode(dash)
    ),
    quad(
      blankNodes[27],
      namedNode(`${sh}nodeKind`),
      namedNode(`${sh}IRIOrLiteral`),
      namedNode(dash)
    ),
    quad(
      blankNodes[27],
      namedNode(`${sh}path`),
      namedNode(`${dash}arg`),
      namedNode(dash)
    ),
    quad(
      blankNodes[28],
      namedNode(`${rdf}type`),
      namedNode(`${sh}Parameter`),
      namedNode(dash)
    ),
    quad(
      blankNodes[28],
      namedNode(`${sh}datatype`),
      namedNode(`${xsd}string`),
      namedNode(dash)
    ),
    quad(
      blankNodes[28],
      namedNode(`${sh}description`),
      literal(`The URI template, e.g. "http://example.org/{symbol}".`),
      namedNode(dash)
    ),
    quad(
      blankNodes[28],
      namedNode(`${sh}name`),
      literal(`template`),
      namedNode(dash)
    ),
    quad(
      blankNodes[28],
      namedNode(`${sh}order`),
      literal(`0`, namedNode(`${xsd}integer`)),
      namedNode(dash)
    ),
    quad(
      blankNodes[28],
      namedNode(`${sh}path`),
      namedNode(`${dash}template`),
      namedNode(dash)
    ),
    quad(
      blankNodes[46],
      namedNode(`${rdf}type`),
      namedNode(`${sh}SPARQLSelectValidator`),
      namedNode(dash)
    ),
    quad(
      blankNodes[46],
      namedNode(`${sh}prefixes`),
      namedNode(`${ns6}dash`),
      namedNode(dash)
    ),
    quad(
      blankNodes[46],
      namedNode(`${sh}select`),
      literal(`
		SELECT DISTINCT $this ?value
		WHERE {
			$this $PATH ?value .
			$this $lessThanOrEquals ?otherValue .
			BIND (?value <= ?otherValue AS ?result) .
			FILTER (!bound(?result) || !(?result)) .
		}
`),
      namedNode(dash)
    ),
    quad(
      blankNodes[40],
      namedNode(`${rdf}type`),
      namedNode(`${sh}SPARQLAskValidator`),
      namedNode(dash)
    ),
    quad(
      blankNodes[40],
      namedNode(`${sh}ask`),
      literal(`
		ASK {
			FILTER NOT EXISTS {
				$this $disjoint $value .
			}
		}
		`),
      namedNode(dash)
    ),
    quad(
      blankNodes[40],
      namedNode(`${sh}message`),
      literal(`Property must not share any values with {$disjoint}`),
      namedNode(dash)
    ),
    quad(
      blankNodes[40],
      namedNode(`${sh}prefixes`),
      namedNode(`${ns6}dash`),
      namedNode(dash)
    ),
    quad(
      blankNodes[38],
      namedNode(`${sh}namespace`),
      literal(`http://www.w3.org/2002/07/owl#`, namedNode(`${xsd}anyURI`)),
      namedNode(dash)
    ),
    quad(
      blankNodes[38],
      namedNode(`${sh}prefix`),
      literal(`owl`),
      namedNode(dash)
    ),
    quad(
      blankNodes[54],
      namedNode(`${rdf}type`),
      namedNode(`${sh}PropertyShape`),
      namedNode(dash)
    ),
    quad(
      blankNodes[54],
      namedNode(`${sh}maxCount`),
      literal(`0`, namedNode(`${xsd}integer`)),
      namedNode(dash)
    ),
    quad(
      blankNodes[54],
      namedNode(`${sh}path`),
      namedNode(`${rdf}first`),
      namedNode(dash)
    ),
    quad(
      blankNodes[61],
      namedNode(`${rdf}type`),
      namedNode(`${sh}PropertyShape`),
      namedNode(dash)
    ),
    quad(
      blankNodes[61],
      namedNode(`${sh}maxCount`),
      literal(`1`, namedNode(`${xsd}integer`)),
      namedNode(dash)
    ),
    quad(
      blankNodes[61],
      namedNode(`${sh}minCount`),
      literal(`1`, namedNode(`${xsd}integer`)),
      namedNode(dash)
    ),
    quad(
      blankNodes[61],
      namedNode(`${sh}path`),
      namedNode(`${rdf}rest`),
      namedNode(dash)
    ),
    quad(
      blankNodes[15],
      namedNode(`${rdf}type`),
      namedNode(`${sh}SPARQLAskValidator`),
      namedNode(dash)
    ),
    quad(
      blankNodes[15],
      namedNode(`${sh}ask`),
      literal(`ASK {
    FILTER (!$singleLine || !isLiteral($value) || (!contains(str($value), '\n') && !contains(str($value), '\\r')))
}`),
      namedNode(dash)
    ),
    quad(
      blankNodes[15],
      namedNode(`${sh}prefixes`),
      namedNode(`${ns6}dash`),
      namedNode(dash)
    ),
    quad(
      blankNodes[57],
      namedNode(`${sh}oneOrMorePath`),
      namedNode(`${rdf}rest`),
      namedNode(dash)
    ),
    quad(
      blankNodes[29],
      namedNode(`${rdf}type`),
      namedNode(`${sh}Parameter`),
      namedNode(dash)
    ),
    quad(
      blankNodes[29],
      namedNode(`${sh}description`),
      literal(`The literal value to insert into the template. Will use the URI-encoded string of the lexical form (for now).`),
      namedNode(dash)
    ),
    quad(
      blankNodes[29],
      namedNode(`${sh}name`),
      literal(`value`),
      namedNode(dash)
    ),
    quad(
      blankNodes[29],
      namedNode(`${sh}nodeKind`),
      namedNode(`${sh}Literal`),
      namedNode(dash)
    ),
    quad(
      blankNodes[29],
      namedNode(`${sh}order`),
      literal(`1`, namedNode(`${xsd}integer`)),
      namedNode(dash)
    ),
    quad(
      blankNodes[29],
      namedNode(`${sh}path`),
      namedNode(`${dash}value`),
      namedNode(dash)
    ),
    quad(
      blankNodes[3],
      namedNode(`${rdf}first`),
      blankNodes[64],
      namedNode(dash)
    ),
    quad(
      blankNodes[3],
      namedNode(`${rdf}rest`),
      namedNode(`${rdf}nil`),
      namedNode(dash)
    ),
    quad(
      blankNodes[22],
      namedNode(`${rdf}type`),
      namedNode(`${sh}SPARQLSelectValidator`),
      namedNode(dash)
    ),
    quad(
      blankNodes[22],
      namedNode(`${sh}message`),
      literal(`Value {?value} must be unique but is also used by {?other}`),
      namedNode(dash)
    ),
    quad(
      blankNodes[22],
      namedNode(`${sh}prefixes`),
      namedNode(`${ns6}dash`),
      namedNode(dash)
    ),
    quad(
      blankNodes[22],
      namedNode(`${sh}select`),
      literal(`SELECT DISTINCT $this ?value ?other
WHERE {
	{
    	$this $PATH ?value .
		?other $PATH ?value .
		FILTER (?other != $this) .
	}
	?other a ?type .
	?type rdfs:subClassOf* $uniqueValueForClass .
}`),
      namedNode(dash)
    ),
    quad(
      blankNodes[48],
      namedNode(`${rdf}type`),
      namedNode(`${sh}SPARQLSelectValidator`),
      namedNode(dash)
    ),
    quad(
      blankNodes[48],
      namedNode(`${sh}prefixes`),
      namedNode(`${ns6}dash`),
      namedNode(dash)
    ),
    quad(
      blankNodes[48],
      namedNode(`${sh}select`),
      literal(`
		SELECT $this
		WHERE {
			OPTIONAL {
				$this $PATH ?value .
			}
		}
		GROUP BY $this
		HAVING (COUNT(DISTINCT ?value) < $minCount)
		`),
      namedNode(dash)
    ),
    quad(
      blankNodes[18],
      namedNode(`${sh}datatype`),
      namedNode(`${xsd}string`),
      namedNode(dash)
    ),
    quad(
      blankNodes[39],
      namedNode(`${rdf}type`),
      namedNode(`${sh}SPARQLSelectValidator`),
      namedNode(dash)
    ),
    quad(
      blankNodes[39],
      namedNode(`${sh}message`),
      literal(`Predicate {?path} is not allowed (closed shape)`),
      namedNode(dash)
    ),
    quad(
      blankNodes[39],
      namedNode(`${sh}prefixes`),
      namedNode(`${ns6}dash`),
      namedNode(dash)
    ),
    quad(
      blankNodes[39],
      namedNode(`${sh}select`),
      literal(`
		SELECT $this (?predicate AS ?path) ?value
		WHERE {
			{
				FILTER ($closed) .
			}
			$this ?predicate ?value .
			FILTER (NOT EXISTS {
				GRAPH $shapesGraph {
					$currentShape sh:property/sh:path ?predicate .
				}
			} && (!bound($ignoredProperties) || NOT EXISTS {
				GRAPH $shapesGraph {
					$ignoredProperties rdf:rest*/rdf:first ?predicate .
				}
			}))
		}
`),
      namedNode(dash)
    ),
    quad(
      blankNodes[11],
      namedNode(`${rdf}first`),
      blankNodes[63],
      namedNode(dash)
    ),
    quad(
      blankNodes[11],
      namedNode(`${rdf}rest`),
      blankNodes[71],
      namedNode(dash)
    ),
    quad(
      blankNodes[68],
      namedNode(`${sh}hasValue`),
      namedNode(`${rdf}nil`),
      namedNode(dash)
    ),
    quad(
      blankNodes[59],
      namedNode(`${sh}hasValue`),
      namedNode(`${rdf}nil`),
      namedNode(dash)
    ),
    quad(
      blankNodes[71],
      namedNode(`${rdf}first`),
      blankNodes[67],
      namedNode(dash)
    ),
    quad(
      blankNodes[71],
      namedNode(`${rdf}rest`),
      namedNode(`${rdf}nil`),
      namedNode(dash)
    ),
    quad(
      blankNodes[55],
      namedNode(`${rdf}first`),
      blankNodes[58],
      namedNode(dash)
    ),
    quad(
      blankNodes[55],
      namedNode(`${rdf}rest`),
      namedNode(`${rdf}nil`),
      namedNode(dash)
    ),
    quad(
      blankNodes[66],
      namedNode(`${rdf}first`),
      blankNodes[72],
      namedNode(dash)
    ),
    quad(
      blankNodes[66],
      namedNode(`${rdf}rest`),
      namedNode(`${rdf}nil`),
      namedNode(dash)
    ),
    quad(
      blankNodes[72],
      namedNode(`${sh}datatype`),
      namedNode(`${rdf}langString`),
      namedNode(dash)
    ),
    quad(
      blankNodes[7],
      namedNode(`${rdf}type`),
      namedNode(`${sh}Parameter`),
      namedNode(dash)
    ),
    quad(
      blankNodes[7],
      namedNode(`${sh}description`),
      literal(`The value that is expected to be present.`),
      namedNode(dash)
    ),
    quad(
      blankNodes[7],
      namedNode(`${sh}name`),
      literal(`object`),
      namedNode(dash)
    ),
    quad(
      blankNodes[7],
      namedNode(`${sh}path`),
      namedNode(`${dash}object`),
      namedNode(dash)
    ),
    quad(
      blankNodes[70],
      namedNode(`${rdf}first`),
      blankNodes[65],
      namedNode(dash)
    ),
    quad(
      blankNodes[70],
      namedNode(`${rdf}rest`),
      namedNode(`${rdf}nil`),
      namedNode(dash)
    ),
    quad(
      blankNodes[62],
      namedNode(`${sh}datatype`),
      namedNode(`${rdf}langString`),
      namedNode(dash)
    ),
    quad(
      blankNodes[69],
      namedNode(`${sh}datatype`),
      namedNode(`${rdf}langString`),
      namedNode(dash)
    ),
    quad(
      blankNodes[8],
      namedNode(`${rdf}type`),
      namedNode(`${sh}Parameter`),
      namedNode(dash)
    ),
    quad(
      blankNodes[8],
      namedNode(`${sh}description`),
      literal(`The predicate property.`),
      namedNode(dash)
    ),
    quad(
      blankNodes[8],
      namedNode(`${sh}name`),
      literal(`predicate`),
      namedNode(dash)
    ),
    quad(
      blankNodes[8],
      namedNode(`${sh}nodeKind`),
      namedNode(`${sh}IRI`),
      namedNode(dash)
    ),
    quad(
      blankNodes[8],
      namedNode(`${sh}path`),
      namedNode(`${dash}predicate`),
      namedNode(dash)
    ),
    quad(
      blankNodes[26],
      namedNode(`${rdf}type`),
      namedNode(`${sh}Parameter`),
      namedNode(dash)
    ),
    quad(
      blankNodes[26],
      namedNode(`${sh}class`),
      namedNode(`${sh}NodeKind`),
      namedNode(dash)
    ),
    quad(
      blankNodes[26],
      namedNode(`${sh}description`),
      literal(`The sh:NodeKind to check.`),
      namedNode(dash)
    ),
    quad(
      blankNodes[26],
      namedNode(`${sh}name`),
      literal(`node kind`),
      namedNode(dash)
    ),
    quad(
      blankNodes[26],
      namedNode(`${sh}nodeKind`),
      namedNode(`${sh}IRI`),
      namedNode(dash)
    ),
    quad(
      blankNodes[26],
      namedNode(`${sh}path`),
      namedNode(`${dash}nodeKind`),
      namedNode(dash)
    ),

  ]
}
