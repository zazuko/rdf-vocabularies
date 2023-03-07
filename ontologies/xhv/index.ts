/* This file was automatically generated. Do not edit by hand. */

const {
  xhv,
  rdf,
  rdfs,
  ns4,
  ns5
} = {
  'xhv': 'http://www.w3.org/1999/xhtml/vocab#',
  'rdf': 'http://www.w3.org/1999/02/22-rdf-syntax-ns#',
  'rdfs': 'http://www.w3.org/2000/01/rdf-schema#',
  'ns4': 'http://www.w3.org/1999/xhtml/',
  'ns5': 'http://www.w3.org/StyleSheets/TR/'
}

export default ({ literal, namedNode, quad }: import('rdf-js').DataFactory): import('rdf-js').Quad[] => {
  return [
    quad(
      namedNode(`${xhv}alert`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(xhv)
    ),
    quad(
      namedNode(`${xhv}alert`),
      namedNode(`${rdfs}comment`),
      literal(`A message
      with important, and usually time-sensitive, information. Also see
      alertdialog and status.`),
      namedNode(xhv)
    ),
    quad(
      namedNode(`${xhv}alertdialog`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(xhv)
    ),
    quad(
      namedNode(`${xhv}alertdialog`),
      namedNode(`${rdfs}comment`),
      literal(`A
      type of dialog that contains an alert message, where initial focus goes
      to the dialog or an element within it. Also see alert and dialog.`),
      namedNode(xhv)
    ),
    quad(
      namedNode(`${xhv}alternate`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(xhv)
    ),
    quad(
      namedNode(`${xhv}alternate`),
      namedNode(`${rdfs}comment`),
      literal(`alternate designates alternate
      versions for a resource.`),
      namedNode(xhv)
    ),
    quad(
      namedNode(`${xhv}alternate`),
      namedNode(`${rdfs}member`),
      namedNode(`${xhv}relrev-properties`),
      namedNode(xhv)
    ),
    quad(
      namedNode(`${xhv}appendix`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(xhv)
    ),
    quad(
      namedNode(`${xhv}appendix`),
      namedNode(`${rdfs}comment`),
      literal(`appendix refers to a resource serving
      as an appendix in a collection. `),
      namedNode(xhv)
    ),
    quad(
      namedNode(`${xhv}appendix`),
      namedNode(`${rdfs}member`),
      namedNode(`${xhv}relrev-properties`),
      namedNode(xhv)
    ),
    quad(
      namedNode(`${xhv}application`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(xhv)
    ),
    quad(
      namedNode(`${xhv}application`),
      namedNode(`${rdfs}comment`),
      literal(`A
      region declared as a web application, as opposed to a web document.`),
      namedNode(xhv)
    ),
    quad(
      namedNode(`${xhv}article`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(xhv)
    ),
    quad(
      namedNode(`${xhv}article`),
      namedNode(`${rdfs}comment`),
      literal(`A
      section of a page consisting of an independent part of a document, page,
      or site.`),
      namedNode(xhv)
    ),
    quad(
      namedNode(`${xhv}banner`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(xhv)
    ),
    quad(
      namedNode(`${xhv}banner`),
      namedNode(`${rdfs}comment`),
      literal(`banner contains the prime heading or
      internal title of a page. `),
      namedNode(xhv)
    ),
    quad(
      namedNode(`${xhv}banner`),
      namedNode(`${rdfs}member`),
      namedNode(`${xhv}role-properties`),
      namedNode(xhv)
    ),
    quad(
      namedNode(`${xhv}bookmark`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(xhv)
    ),
    quad(
      namedNode(`${xhv}bookmark`),
      namedNode(`${rdfs}comment`),
      literal(`bookmark refers to a bookmark - a link
      to a key entry point within an extended document. `),
      namedNode(xhv)
    ),
    quad(
      namedNode(`${xhv}bookmark`),
      namedNode(`${rdfs}member`),
      namedNode(`${xhv}relrev-properties`),
      namedNode(xhv)
    ),
    quad(
      namedNode(`${xhv}button`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(xhv)
    ),
    quad(
      namedNode(`${xhv}button`),
      namedNode(`${rdfs}comment`),
      literal(`An input
      that allows for user-triggered actions when clicked or pressed.`),
      namedNode(xhv)
    ),
    quad(
      namedNode(`${xhv}chapter`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(xhv)
    ),
    quad(
      namedNode(`${xhv}chapter`),
      namedNode(`${rdfs}comment`),
      literal(`chapter refers to a resource serving
      as a chapter in a collction. `),
      namedNode(xhv)
    ),
    quad(
      namedNode(`${xhv}chapter`),
      namedNode(`${rdfs}member`),
      namedNode(`${xhv}relrev-properties`),
      namedNode(xhv)
    ),
    quad(
      namedNode(`${xhv}checkbox`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(xhv)
    ),
    quad(
      namedNode(`${xhv}checkbox`),
      namedNode(`${rdfs}comment`),
      literal(`An
      checkable input that has three possible values: true, false, or
    mixed.`),
      namedNode(xhv)
    ),
    quad(
      namedNode(`${xhv}cite`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(xhv)
    ),
    quad(
      namedNode(`${xhv}cite`),
      namedNode(`${rdfs}comment`),
      literal(`cite refers to a resource that defines
      a citation. `),
      namedNode(xhv)
    ),
    quad(
      namedNode(`${xhv}cite`),
      namedNode(`${rdfs}member`),
      namedNode(`${xhv}relrev-properties`),
      namedNode(xhv)
    ),
    quad(
      namedNode(`${xhv}columnheader`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(xhv)
    ),
    quad(
      namedNode(`${xhv}columnheader`),
      namedNode(`${rdfs}comment`),
      literal(`A
      cell containing header information for a column.`),
      namedNode(xhv)
    ),
    quad(
      namedNode(`${xhv}combobox`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(xhv)
    ),
    quad(
      namedNode(`${xhv}combobox`),
      namedNode(`${rdfs}comment`),
      literal(`A
      presentation of a select; usually similar to a textbox where users can
      type ahead to select an option, or type to enter arbitrary text as a new
      item in the list.`),
      namedNode(xhv)
    ),
    quad(
      namedNode(`${xhv}complementary`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(xhv)
    ),
    quad(
      namedNode(`${xhv}complementary`),
      namedNode(`${rdfs}comment`),
      literal(`secondary indicates that the section
      supports but is separable from the main content of resource.`),
      namedNode(xhv)
    ),
    quad(
      namedNode(`${xhv}complementary`),
      namedNode(`${rdfs}member`),
      namedNode(`${xhv}role-properties`),
      namedNode(xhv)
    ),
    quad(
      namedNode(`${xhv}contentinfo`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(xhv)
    ),
    quad(
      namedNode(`${xhv}contentinfo`),
      namedNode(`${rdfs}comment`),
      literal(`contentinfo has meta information about
      the content on the page or the page as a whole.`),
      namedNode(xhv)
    ),
    quad(
      namedNode(`${xhv}contentinfo`),
      namedNode(`${rdfs}member`),
      namedNode(`${xhv}role-properties`),
      namedNode(xhv)
    ),
    quad(
      namedNode(`${xhv}contents`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(xhv)
    ),
    quad(
      namedNode(`${xhv}contents`),
      namedNode(`${rdfs}comment`),
      literal(`contents refers to a resource serving
      as a table of contents. `),
      namedNode(xhv)
    ),
    quad(
      namedNode(`${xhv}contents`),
      namedNode(`${rdfs}member`),
      namedNode(`${xhv}relrev-properties`),
      namedNode(xhv)
    ),
    quad(
      namedNode(`${xhv}copyright`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(xhv)
    ),
    quad(
      namedNode(`${xhv}copyright`),
      namedNode(`${rdfs}comment`),
      literal(`copyright refers to a copyright
      statement for the resource. `),
      namedNode(xhv)
    ),
    quad(
      namedNode(`${xhv}copyright`),
      namedNode(`${rdfs}member`),
      namedNode(`${xhv}relrev-properties`),
      namedNode(xhv)
    ),
    quad(
      namedNode(`${xhv}definition`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(xhv)
    ),
    quad(
      namedNode(`${xhv}definition`),
      namedNode(`${rdfs}comment`),
      literal(`definition indicates the definition of
      a term or concept.`),
      namedNode(xhv)
    ),
    quad(
      namedNode(`${xhv}definition`),
      namedNode(`${rdfs}member`),
      namedNode(`${xhv}role-properties`),
      namedNode(xhv)
    ),
    quad(
      namedNode(`${xhv}dialog`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(xhv)
    ),
    quad(
      namedNode(`${xhv}dialog`),
      namedNode(`${rdfs}comment`),
      literal(`A dialog
      is an application window that is designed to interrupt the current
      processing of an application in order to prompt the user to enter
      information or require a response. Also see alertdialog.`),
      namedNode(xhv)
    ),
    quad(
      namedNode(`${xhv}directory`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(xhv)
    ),
    quad(
      namedNode(`${xhv}directory`),
      namedNode(`${rdfs}comment`),
      literal(`A list
      of references to members of a group, such as a static table of
    contents.`),
      namedNode(xhv)
    ),
    quad(
      namedNode(`${xhv}document`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(xhv)
    ),
    quad(
      namedNode(`${xhv}document`),
      namedNode(`${rdfs}comment`),
      literal(`A
      region containing related information that is declared as document
      content, as opposed to a web application.`),
      namedNode(xhv)
    ),
    quad(
      namedNode(`${xhv}first`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(xhv)
    ),
    quad(
      namedNode(`${xhv}first`),
      namedNode(`${rdfs}comment`),
      literal(`first refers the first item in a
      collection (see also start and top).`),
      namedNode(xhv)
    ),
    quad(
      namedNode(`${xhv}first`),
      namedNode(`${rdfs}member`),
      namedNode(`${xhv}relrev-properties`),
      namedNode(xhv)
    ),
    quad(
      namedNode(`${xhv}glossary`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(xhv)
    ),
    quad(
      namedNode(`${xhv}glossary`),
      namedNode(`${rdfs}comment`),
      literal(`glossary refers to a resource
      providing a glossary of terms. `),
      namedNode(xhv)
    ),
    quad(
      namedNode(`${xhv}glossary`),
      namedNode(`${rdfs}member`),
      namedNode(`${xhv}relrev-properties`),
      namedNode(xhv)
    ),
    quad(
      namedNode(`${xhv}grid`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(xhv)
    ),
    quad(
      namedNode(`${xhv}grid`),
      namedNode(`${rdfs}comment`),
      literal(`A grid
      contains cells of tabular data arranged in rows and columns, like a
    table.`),
      namedNode(xhv)
    ),
    quad(
      namedNode(`${xhv}gridcell`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(xhv)
    ),
    quad(
      namedNode(`${xhv}gridcell`),
      namedNode(`${rdfs}comment`),
      literal(`A cell
      in a grid or treegrid.`),
      namedNode(xhv)
    ),
    quad(
      namedNode(`${xhv}group`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(xhv)
    ),
    quad(
      namedNode(`${xhv}group`),
      namedNode(`${rdfs}comment`),
      literal(`A set of
      user interface objects which would not be included in a page summary or
      table of contents by an assistive technology.`),
      namedNode(xhv)
    ),
    quad(
      namedNode(`${xhv}heading`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(xhv)
    ),
    quad(
      namedNode(`${xhv}heading`),
      namedNode(`${rdfs}comment`),
      literal(`A
      heading for a section of the page.`),
      namedNode(xhv)
    ),
    quad(
      namedNode(`${xhv}help`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(xhv)
    ),
    quad(
      namedNode(`${xhv}help`),
      namedNode(`${rdfs}comment`),
      literal(`help refers to a resource offering
      help. `),
      namedNode(xhv)
    ),
    quad(
      namedNode(`${xhv}help`),
      namedNode(`${rdfs}member`),
      namedNode(`${xhv}relrev-properties`),
      namedNode(xhv)
    ),
    quad(
      namedNode(`${xhv}icon`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(xhv)
    ),
    quad(
      namedNode(`${xhv}icon`),
      namedNode(`${rdfs}comment`),
      literal(`icon refers to a resource that
      represents an icon. `),
      namedNode(xhv)
    ),
    quad(
      namedNode(`${xhv}icon`),
      namedNode(`${rdfs}member`),
      namedNode(`${xhv}relrev-properties`),
      namedNode(xhv)
    ),
    quad(
      namedNode(`${xhv}img`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(xhv)
    ),
    quad(
      namedNode(`${xhv}img`),
      namedNode(`${rdfs}comment`),
      literal(`A container
      for a collection of elements that form an image.`),
      namedNode(xhv)
    ),
    quad(
      namedNode(`${xhv}index`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(xhv)
    ),
    quad(
      namedNode(`${xhv}index`),
      namedNode(`${rdfs}comment`),
      literal(`index refers to a resource providing
      an index. `),
      namedNode(xhv)
    ),
    quad(
      namedNode(`${xhv}index`),
      namedNode(`${rdfs}member`),
      namedNode(`${xhv}relrev-properties`),
      namedNode(xhv)
    ),
    quad(
      namedNode(`${xhv}itsRules`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(xhv)
    ),
    quad(
      namedNode(`${xhv}itsRules`),
      namedNode(`${rdfs}comment`),
      literal(`itsRules indicates that the designated
      resource is an [ITS] rule set.`),
      namedNode(xhv)
    ),
    quad(
      namedNode(`${xhv}itsRules`),
      namedNode(`${rdfs}member`),
      namedNode(`${xhv}relrev-properties`),
      namedNode(xhv)
    ),
    quad(
      namedNode(`${xhv}last`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(xhv)
    ),
    quad(
      namedNode(`${xhv}last`),
      namedNode(`${rdfs}comment`),
      literal(`last refers to the last resource in a
      collection of resources. `),
      namedNode(xhv)
    ),
    quad(
      namedNode(`${xhv}last`),
      namedNode(`${rdfs}member`),
      namedNode(`${xhv}relrev-properties`),
      namedNode(xhv)
    ),
    quad(
      namedNode(`${xhv}license`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(xhv)
    ),
    quad(
      namedNode(`${xhv}license`),
      namedNode(`${rdfs}comment`),
      literal(`license refers to a resource that
      defines the associated license. `),
      namedNode(xhv)
    ),
    quad(
      namedNode(`${xhv}license`),
      namedNode(`${rdfs}member`),
      namedNode(`${xhv}relrev-properties`),
      namedNode(xhv)
    ),
    quad(
      namedNode(`${xhv}link`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(xhv)
    ),
    quad(
      namedNode(`${xhv}link`),
      namedNode(`${rdfs}comment`),
      literal(`An
      interactive reference to an internal or external resource.`),
      namedNode(xhv)
    ),
    quad(
      namedNode(`${xhv}list`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(xhv)
    ),
    quad(
      namedNode(`${xhv}list`),
      namedNode(`${rdfs}comment`),
      literal(`A group of
      non-interactive list items.`),
      namedNode(xhv)
    ),
    quad(
      namedNode(`${xhv}listbox`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(xhv)
    ),
    quad(
      namedNode(`${xhv}listbox`),
      namedNode(`${rdfs}comment`),
      literal(`A widget
      that allows the user to select one or more items from a list of
    choices.`),
      namedNode(xhv)
    ),
    quad(
      namedNode(`${xhv}listitem`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(xhv)
    ),
    quad(
      namedNode(`${xhv}listitem`),
      namedNode(`${rdfs}comment`),
      literal(`A
      single item in a list, listbox, or directory.`),
      namedNode(xhv)
    ),
    quad(
      namedNode(`${xhv}log`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(xhv)
    ),
    quad(
      namedNode(`${xhv}log`),
      namedNode(`${rdfs}comment`),
      literal(`A type of
      live region where new information is added in meaningful order and old
      information may disappear. Also see marquee.`),
      namedNode(xhv)
    ),
    quad(
      namedNode(`${xhv}main`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(xhv)
    ),
    quad(
      namedNode(`${xhv}main`),
      namedNode(`${rdfs}comment`),
      literal(`main acts as the main content of the
      document. `),
      namedNode(xhv)
    ),
    quad(
      namedNode(`${xhv}main`),
      namedNode(`${rdfs}member`),
      namedNode(`${xhv}role-properties`),
      namedNode(xhv)
    ),
    quad(
      namedNode(`${xhv}marquee`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(xhv)
    ),
    quad(
      namedNode(`${xhv}marquee`),
      namedNode(`${rdfs}comment`),
      literal(`A type
      of live region where non-essential information changes frequently. Also
      see log.`),
      namedNode(xhv)
    ),
    quad(
      namedNode(`${xhv}math`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(xhv)
    ),
    quad(
      namedNode(`${xhv}math`),
      namedNode(`${rdfs}comment`),
      literal(`An element
      that represents a mathematical expression.`),
      namedNode(xhv)
    ),
    quad(
      namedNode(`${xhv}menu`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(xhv)
    ),
    quad(
      namedNode(`${xhv}menu`),
      namedNode(`${rdfs}comment`),
      literal(`A type of
      widget that offers a list of choices to the user.`),
      namedNode(xhv)
    ),
    quad(
      namedNode(`${xhv}menubar`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(xhv)
    ),
    quad(
      namedNode(`${xhv}menubar`),
      namedNode(`${rdfs}comment`),
      literal(`A
      presentation of menu that usually remains visible and is usually
      presented horizontally.`),
      namedNode(xhv)
    ),
    quad(
      namedNode(`${xhv}menuitem`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(xhv)
    ),
    quad(
      namedNode(`${xhv}menuitem`),
      namedNode(`${rdfs}comment`),
      literal(`An
      option in a group of choices contained by a menu or menubar.`),
      namedNode(xhv)
    ),
    quad(
      namedNode(`${xhv}menuitemcheckbox`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(xhv)
    ),
    quad(
      namedNode(`${xhv}menuitemcheckbox`),
      namedNode(`${rdfs}comment`),
      literal(`A checkable menuitem that has three possible
      values: true, false, or mixed.`),
      namedNode(xhv)
    ),
    quad(
      namedNode(`${xhv}menuitemradio`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(xhv)
    ),
    quad(
      namedNode(`${xhv}menuitemradio`),
      namedNode(`${rdfs}comment`),
      literal(`A
      checkable menuitem in a group of menuitemradio roles, only one of which
      can be checked at a time.`),
      namedNode(xhv)
    ),
    quad(
      namedNode(`${xhv}meta`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(xhv)
    ),
    quad(
      namedNode(`${xhv}meta`),
      namedNode(`${rdfs}comment`),
      literal(`meta refers to a resource that
      provides metadata. `),
      namedNode(xhv)
    ),
    quad(
      namedNode(`${xhv}meta`),
      namedNode(`${rdfs}member`),
      namedNode(`${xhv}relrev-properties`),
      namedNode(xhv)
    ),
    quad(
      namedNode(`${xhv}navigation`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(xhv)
    ),
    quad(
      namedNode(`${xhv}navigation`),
      namedNode(`${rdfs}comment`),
      literal(`navigation indicates a collection of
      items suitable for navigating the document or related documents.`),
      namedNode(xhv)
    ),
    quad(
      namedNode(`${xhv}navigation`),
      namedNode(`${rdfs}member`),
      namedNode(`${xhv}role-properties`),
      namedNode(xhv)
    ),
    quad(
      namedNode(`${xhv}next`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(xhv)
    ),
    quad(
      namedNode(`${xhv}next`),
      namedNode(`${rdfs}comment`),
      literal(`next refers to the next resource
      (after the current one) in an ordered collection of resources. `),
      namedNode(xhv)
    ),
    quad(
      namedNode(`${xhv}next`),
      namedNode(`${rdfs}member`),
      namedNode(`${xhv}relrev-properties`),
      namedNode(xhv)
    ),
    quad(
      namedNode(`${xhv}note`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(xhv)
    ),
    quad(
      namedNode(`${xhv}note`),
      namedNode(`${rdfs}comment`),
      literal(`note indicates the content is
      parenthetic or ancillary to the main content of the resource. `),
      namedNode(xhv)
    ),
    quad(
      namedNode(`${xhv}note`),
      namedNode(`${rdfs}member`),
      namedNode(`${xhv}role-properties`),
      namedNode(xhv)
    ),
    quad(
      namedNode(`${xhv}option`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(xhv)
    ),
    quad(
      namedNode(`${xhv}option`),
      namedNode(`${rdfs}comment`),
      literal(`A
      selectable item in a select list.`),
      namedNode(xhv)
    ),
    quad(
      namedNode(`${xhv}p3pv1`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(xhv)
    ),
    quad(
      namedNode(`${xhv}p3pv1`),
      namedNode(`${rdfs}comment`),
      literal(`p3pv1 refers to a P3P Policy Reference
      File [P3P]. `),
      namedNode(xhv)
    ),
    quad(
      namedNode(`${xhv}p3pv1`),
      namedNode(`${rdfs}member`),
      namedNode(`${xhv}relrev-properties`),
      namedNode(xhv)
    ),
    quad(
      namedNode(`${xhv}presentation`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(xhv)
    ),
    quad(
      namedNode(`${xhv}presentation`),
      namedNode(`${rdfs}comment`),
      literal(`An
      element whose role is presentational and does not need to be mapped to
      the accessibility API.`),
      namedNode(xhv)
    ),
    quad(
      namedNode(`${xhv}prev`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(xhv)
    ),
    quad(
      namedNode(`${xhv}prev`),
      namedNode(`${rdfs}comment`),
      literal(`prev refers to a previous resource
      (before the current one) in an ordered collection of resources. `),
      namedNode(xhv)
    ),
    quad(
      namedNode(`${xhv}prev`),
      namedNode(`${rdfs}member`),
      namedNode(`${xhv}relrev-properties`),
      namedNode(xhv)
    ),
    quad(
      namedNode(`${xhv}progressbar`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(xhv)
    ),
    quad(
      namedNode(`${xhv}progressbar`),
      namedNode(`${rdfs}comment`),
      literal(`An
      element that displays the progress status for tasks that take a long
    time.`),
      namedNode(xhv)
    ),
    quad(
      namedNode(`${xhv}radio`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(xhv)
    ),
    quad(
      namedNode(`${xhv}radio`),
      namedNode(`${rdfs}comment`),
      literal(`A
      checkable input in a group of radio roles, only one of which can be
      checked at a time.`),
      namedNode(xhv)
    ),
    quad(
      namedNode(`${xhv}radiogroup`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(xhv)
    ),
    quad(
      namedNode(`${xhv}radiogroup`),
      namedNode(`${rdfs}comment`),
      literal(`A
      group of radio buttons.`),
      namedNode(xhv)
    ),
    quad(
      namedNode(`${xhv}region`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(xhv)
    ),
    quad(
      namedNode(`${xhv}region`),
      namedNode(`${rdfs}comment`),
      literal(`A large
      perceivable section of a web page or document, that the author feels
      should be included in a summary of page features.`),
      namedNode(xhv)
    ),
    quad(
      namedNode(`${xhv}relrev-properties`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Bag`),
      namedNode(xhv)
    ),
    quad(
      namedNode(`${xhv}relrev-properties`),
      namedNode(`${rdfs}member`),
      namedNode(`${xhv}role-properties`),
      namedNode(xhv)
    ),
    quad(
      namedNode(`${xhv}role-properties`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Bag`),
      namedNode(xhv)
    ),
    quad(
      namedNode(`${xhv}role-properties`),
      namedNode(`${rdf}type`),
      namedNode(`${rdfs}member`),
      namedNode(xhv)
    ),
    quad(
      namedNode(`${xhv}role`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Bag`),
      namedNode(xhv)
    ),
    quad(
      namedNode(`${xhv}role`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(xhv)
    ),
    quad(
      namedNode(`${xhv}role`),
      namedNode(`${rdfs}comment`),
      literal(`role indicates the purpose of the
      resource. See the XHTML Role
      Vocabulary for roles in this vocabulary space, and XHTMLROLE for information on extending the
      collection of roles. `),
      namedNode(xhv)
    ),
    quad(
      namedNode(`${xhv}role`),
      namedNode(`${rdfs}member`),
      namedNode(`${xhv}relrev-properties`),
      namedNode(xhv)
    ),
    quad(
      namedNode(`${xhv}row`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(xhv)
    ),
    quad(
      namedNode(`${xhv}row`),
      namedNode(`${rdfs}comment`),
      literal(`A row of
      cells in a grid.`),
      namedNode(xhv)
    ),
    quad(
      namedNode(`${xhv}rowheader`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(xhv)
    ),
    quad(
      namedNode(`${xhv}rowheader`),
      namedNode(`${rdfs}comment`),
      literal(`A cell
      containing header information for a row in a grid.`),
      namedNode(xhv)
    ),
    quad(
      namedNode(`${xhv}search`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(xhv)
    ),
    quad(
      namedNode(`${xhv}search`),
      namedNode(`${rdfs}comment`),
      literal(`search indicates that the section
      provides a search facility. `),
      namedNode(xhv)
    ),
    quad(
      namedNode(`${xhv}search`),
      namedNode(`${rdfs}member`),
      namedNode(`${xhv}role-properties`),
      namedNode(xhv)
    ),
    quad(
      namedNode(`${xhv}section`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(xhv)
    ),
    quad(
      namedNode(`${xhv}section`),
      namedNode(`${rdfs}comment`),
      literal(`section refers to a resource serving
      as a section in a collection. `),
      namedNode(xhv)
    ),
    quad(
      namedNode(`${xhv}section`),
      namedNode(`${rdfs}member`),
      namedNode(`${xhv}relrev-properties`),
      namedNode(xhv)
    ),
    quad(
      namedNode(`${xhv}separator`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(xhv)
    ),
    quad(
      namedNode(`${xhv}separator`),
      namedNode(`${rdfs}comment`),
      literal(`A
      divider that separates and distinguishes sections of content or groups of
      menuitems.`),
      namedNode(xhv)
    ),
    quad(
      namedNode(`${xhv}slider`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(xhv)
    ),
    quad(
      namedNode(`${xhv}slider`),
      namedNode(`${rdfs}comment`),
      literal(`A user
      input where the user selects a value from within a given range.`),
      namedNode(xhv)
    ),
    quad(
      namedNode(`${xhv}spinbutton`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(xhv)
    ),
    quad(
      namedNode(`${xhv}spinbutton`),
      namedNode(`${rdfs}comment`),
      literal(`A
      form of range that expects a user to select from amongst discrete
    choices.`),
      namedNode(xhv)
    ),
    quad(
      namedNode(`${xhv}start`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(xhv)
    ),
    quad(
      namedNode(`${xhv}start`),
      namedNode(`${rdfs}comment`),
      literal(`start refers to the first resource in
      a collection of resources. `),
      namedNode(xhv)
    ),
    quad(
      namedNode(`${xhv}start`),
      namedNode(`${rdfs}member`),
      namedNode(`${xhv}relrev-properties`),
      namedNode(xhv)
    ),
    quad(
      namedNode(`${xhv}status`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(xhv)
    ),
    quad(
      namedNode(`${xhv}status`),
      namedNode(`${rdfs}comment`),
      literal(`A
      container whose content is advisory information for the user but is not
      important enough to justify an alert. Also see alert.`),
      namedNode(xhv)
    ),
    quad(
      namedNode(`${xhv}stylesheet`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(xhv)
    ),
    quad(
      namedNode(`${xhv}stylesheet`),
      namedNode(`${rdfs}comment`),
      literal(`stylesheet refers to a resource
      serving as a stylesheet for a resource. `),
      namedNode(xhv)
    ),
    quad(
      namedNode(`${xhv}stylesheet`),
      namedNode(`${rdfs}member`),
      namedNode(`${xhv}relrev-properties`),
      namedNode(xhv)
    ),
    quad(
      namedNode(`${xhv}subsection`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(xhv)
    ),
    quad(
      namedNode(`${xhv}subsection`),
      namedNode(`${rdfs}comment`),
      literal(`subsection refers to a resource
      serving as a subsection in a collection. `),
      namedNode(xhv)
    ),
    quad(
      namedNode(`${xhv}subsection`),
      namedNode(`${rdfs}member`),
      namedNode(`${xhv}relrev-properties`),
      namedNode(xhv)
    ),
    quad(
      namedNode(`${xhv}tab`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(xhv)
    ),
    quad(
      namedNode(`${xhv}tab`),
      namedNode(`${rdfs}comment`),
      literal(`A header for
      a tabpanel.`),
      namedNode(xhv)
    ),
    quad(
      namedNode(`${xhv}tablist`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(xhv)
    ),
    quad(
      namedNode(`${xhv}tablist`),
      namedNode(`${rdfs}comment`),
      literal(`A list
      of tab elements, which are references to tabpanel elements.`),
      namedNode(xhv)
    ),
    quad(
      namedNode(`${xhv}tabpanel`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(xhv)
    ),
    quad(
      namedNode(`${xhv}tabpanel`),
      namedNode(`${rdfs}comment`),
      literal(`A
      container for the resources associated with a tab.`),
      namedNode(xhv)
    ),
    quad(
      namedNode(`${xhv}textbox`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(xhv)
    ),
    quad(
      namedNode(`${xhv}textbox`),
      namedNode(`${rdfs}comment`),
      literal(`Input
      that allows free-form text as their value.`),
      namedNode(xhv)
    ),
    quad(
      namedNode(`${xhv}timer`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(xhv)
    ),
    quad(
      namedNode(`${xhv}timer`),
      namedNode(`${rdfs}comment`),
      literal(`A
      numerical counter which indicates an amount of elapsed time from a start
      point, or the time remaining until an end point.`),
      namedNode(xhv)
    ),
    quad(
      namedNode(`${xhv}toolbar`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(xhv)
    ),
    quad(
      namedNode(`${xhv}toolbar`),
      namedNode(`${rdfs}comment`),
      literal(`A
      collection of commonly used function buttons represented in compact
      visual form.`),
      namedNode(xhv)
    ),
    quad(
      namedNode(`${xhv}tooltip`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(xhv)
    ),
    quad(
      namedNode(`${xhv}tooltip`),
      namedNode(`${rdfs}comment`),
      literal(`A
      contextual popup that displays a description for an element in a mouse
      hover or keyboard focused state. Supplement to the normal tooltip
      processing of the user agent.`),
      namedNode(xhv)
    ),
    quad(
      namedNode(`${xhv}top`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(xhv)
    ),
    quad(
      namedNode(`${xhv}top`),
      namedNode(`${rdfs}comment`),
      literal(`top is a synonym for start. `),
      namedNode(xhv)
    ),
    quad(
      namedNode(`${xhv}top`),
      namedNode(`${rdfs}member`),
      namedNode(`${xhv}relrev-properties`),
      namedNode(xhv)
    ),
    quad(
      namedNode(`${xhv}tree`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(xhv)
    ),
    quad(
      namedNode(`${xhv}tree`),
      namedNode(`${rdfs}comment`),
      literal(`A type of
      list that may contain sub-level nested groups that can be collapsed and
      expanded.`),
      namedNode(xhv)
    ),
    quad(
      namedNode(`${xhv}treegrid`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(xhv)
    ),
    quad(
      namedNode(`${xhv}treegrid`),
      namedNode(`${rdfs}comment`),
      literal(`A grid
      whose rows can be expanded and collapsed in the same manner as for a
    tree.`),
      namedNode(xhv)
    ),
    quad(
      namedNode(`${xhv}treeitem`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(xhv)
    ),
    quad(
      namedNode(`${xhv}treeitem`),
      namedNode(`${rdfs}comment`),
      literal(`An
      option item of a tree. This is an element within a tree that may be
      expanded or collapsed if it contains a sub-level group of treeitems.`),
      namedNode(xhv)
    ),
    quad(
      namedNode(`${xhv}up`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(xhv)
    ),
    quad(
      namedNode(`${xhv}up`),
      namedNode(`${rdfs}comment`),
      literal(`up refers to a resource "above" in a
      hierarchically structured set. `),
      namedNode(xhv)
    ),
    quad(
      namedNode(`${xhv}up`),
      namedNode(`${rdfs}member`),
      namedNode(`${xhv}relrev-properties`),
      namedNode(xhv)
    ),
    quad(
      namedNode(`${ns4}vocab`),
      namedNode(`${xhv}stylesheet`),
      namedNode(`${ns5}base.css`),
      namedNode(xhv)
    ),

  ]
}
