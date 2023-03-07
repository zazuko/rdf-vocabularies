/* This file was automatically generated. Do not edit by hand. */

const {
  acl,
  rdf,
  rdfs,
  foaf,
  ns5,
  ns6,
  ns7,
  vcard,
  ns9,
  ns10,
  dcterms,
  ns12
} = {
  'acl': 'http://www.w3.org/ns/auth/acl#',
  'rdf': 'http://www.w3.org/1999/02/22-rdf-syntax-ns#',
  'rdfs': 'http://www.w3.org/2000/01/rdf-schema#',
  'foaf': 'http://xmlns.com/foaf/0.1/',
  'ns5': 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/',
  'ns6': 'http://www.w3.org/2006/gen/ont#',
  'ns7': 'https://solidproject.org/TR/wac#',
  'vcard': 'http://www.w3.org/2006/vcard/ns#',
  'ns9': 'https://solidproject.org/TR/',
  'ns10': 'https://www.w3.org/ns/auth/',
  'dcterms': 'http://purl.org/dc/terms/',
  'ns12': 'https://www.w3.org/wiki/'
}

export default ({ literal, namedNode, quad }: import('rdf-js').DataFactory): import('rdf-js').Quad[] => {
  return [
    quad(
      namedNode(`${acl}Access`),
      namedNode(`${rdf}type`),
      namedNode(`${rdfs}Class`),
      namedNode(acl)
    ),
    quad(
      namedNode(`${acl}Access`),
      namedNode(`${rdfs}comment`),
      literal(`Any kind of access to a resource. Don't use this, use R W and RW`),
      namedNode(acl)
    ),
    quad(
      namedNode(`${acl}Access`),
      namedNode(`${rdfs}label`),
      literal(`access`, 'en'),
      namedNode(acl)
    ),
    quad(
      namedNode(`${acl}Append`),
      namedNode(`${rdf}type`),
      namedNode(`${rdfs}Class`),
      namedNode(acl)
    ),
    quad(
      namedNode(`${acl}Append`),
      namedNode(`${rdfs}comment`),
      literal(`Append accesses are specific write access which only add information, and do not remove information.
    For text files, for example, append access allows bytes to be added onto the end of the file.
    For RDF graphs, Append access allows adds triples to the graph but does not remove any.
    Append access is useful for dropbox functionality.
    Dropbox can be used for link notification, which the information added is a notification
    that a some link has been made elsewhere relevant to the given resource.
    `),
      namedNode(acl)
    ),
    quad(
      namedNode(`${acl}Append`),
      namedNode(`${rdfs}label`),
      literal(`append`, 'en'),
      namedNode(acl)
    ),
    quad(
      namedNode(`${acl}Append`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${acl}Access`),
      namedNode(acl)
    ),
    quad(
      namedNode(`${acl}Append`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${acl}Write`),
      namedNode(acl)
    ),
    quad(
      namedNode(`${acl}AuthenticatedAgent`),
      namedNode(`${rdf}type`),
      namedNode(`${rdfs}Class`),
      namedNode(acl)
    ),
    quad(
      namedNode(`${acl}AuthenticatedAgent`),
      namedNode(`${rdfs}comment`),
      literal(`A class of agents who have been authenticated.
In other words, anyone can access this resource, but not anonymously.
The social expectation is that the authentication process will provide an
identify and a name, or pseudonym.
(A new ID should not be minted for every access: the intent is that the user
is able to continue to use the ID for continues interactions with peers,
and for example to develop a reputation)
`),
      namedNode(acl)
    ),
    quad(
      namedNode(`${acl}AuthenticatedAgent`),
      namedNode(`${rdfs}label`),
      literal(`Anyone authenticated`),
      namedNode(acl)
    ),
    quad(
      namedNode(`${acl}AuthenticatedAgent`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${foaf}Agent`),
      namedNode(acl)
    ),
    quad(
      namedNode(`${acl}Authorization`),
      namedNode(`${rdf}type`),
      namedNode(`${rdfs}Class`),
      namedNode(acl)
    ),
    quad(
      namedNode(`${acl}Authorization`),
      namedNode(`${rdfs}comment`),
      literal(`An element of access control,
    allowing agent to agents access of some kind to resources or classes of resources`),
      namedNode(acl)
    ),
    quad(
      namedNode(`${acl}Authorization`),
      namedNode(`${rdfs}label`),
      literal(`authorization`),
      namedNode(acl)
    ),
    quad(
      namedNode(`${acl}Control`),
      namedNode(`${rdf}type`),
      namedNode(`${rdfs}Class`),
      namedNode(acl)
    ),
    quad(
      namedNode(`${acl}Control`),
      namedNode(`${rdfs}comment`),
      literal(`Allows read/write access to the ACL for the resource(s)`),
      namedNode(acl)
    ),
    quad(
      namedNode(`${acl}Control`),
      namedNode(`${rdfs}label`),
      literal(`control`, 'en'),
      namedNode(acl)
    ),
    quad(
      namedNode(`${acl}Control`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${acl}Access`),
      namedNode(acl)
    ),
    quad(
      namedNode(`${acl}Origin`),
      namedNode(`${rdf}type`),
      namedNode(`${rdfs}Class`),
      namedNode(acl)
    ),
    quad(
      namedNode(`${acl}Origin`),
      namedNode(`${rdfs}comment`),
      literal(`An Origin is basically a web site
        (Note WITHOUT the trailing slash after the domain name and port in its URI)
        and is the basis for controlling access to data by web apps
        in the Same Origin Model of web security.
        All scripts from the same origin are given the same right.`),
      namedNode(acl)
    ),
    quad(
      namedNode(`${acl}Origin`),
      namedNode(`${rdfs}label`),
      literal(`Origin`),
      namedNode(acl)
    ),
    quad(
      namedNode(`${acl}Origin`),
      namedNode(`${rdfs}seeAlso`),
      namedNode(`${ns5}Origin`),
      namedNode(acl)
    ),
    quad(
      namedNode(`${acl}Read`),
      namedNode(`${rdf}type`),
      namedNode(`${rdfs}Class`),
      namedNode(acl)
    ),
    quad(
      namedNode(`${acl}Read`),
      namedNode(`${rdfs}comment`),
      literal(`The class of read operations`),
      namedNode(acl)
    ),
    quad(
      namedNode(`${acl}Read`),
      namedNode(`${rdfs}label`),
      literal(`read`, 'en'),
      namedNode(acl)
    ),
    quad(
      namedNode(`${acl}Read`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${acl}Access`),
      namedNode(acl)
    ),
    quad(
      namedNode(`${acl}Write`),
      namedNode(`${rdf}type`),
      namedNode(`${rdfs}Class`),
      namedNode(acl)
    ),
    quad(
      namedNode(`${acl}Write`),
      namedNode(`${rdfs}label`),
      literal(`write`, 'en'),
      namedNode(acl)
    ),
    quad(
      namedNode(`${acl}Write`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${acl}Access`),
      namedNode(acl)
    ),
    quad(
      namedNode(`${acl}accessControl`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(acl)
    ),
    quad(
      namedNode(`${acl}accessControl`),
      namedNode(`${rdfs}comment`),
      literal(`The Access Control file for this information resource.
        This may of course be a virtual resource implemented by the access control system.
        Note that HTTP header \`Link: <foo.acl>; rel="acl"\` can also be used for this.`),
      namedNode(acl)
    ),
    quad(
      namedNode(`${acl}accessControl`),
      namedNode(`${rdfs}domain`),
      namedNode(`${ns6}InformationResource`),
      namedNode(acl)
    ),
    quad(
      namedNode(`${acl}accessControl`),
      namedNode(`${rdfs}label`),
      literal(`access control`),
      namedNode(acl)
    ),
    quad(
      namedNode(`${acl}accessControl`),
      namedNode(`${rdfs}range`),
      namedNode(`${ns6}InformationResource`),
      namedNode(acl)
    ),
    quad(
      namedNode(`${acl}accessControl`),
      namedNode(`${rdfs}seeAlso`),
      namedNode(`${ns7}acl-link-relation`),
      namedNode(acl)
    ),
    quad(
      namedNode(`${acl}accessControl`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${rdfs}seeAlso`),
      namedNode(acl)
    ),
    quad(
      namedNode(`${acl}accessTo`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(acl)
    ),
    quad(
      namedNode(`${acl}accessTo`),
      namedNode(`${rdfs}comment`),
      literal(`The information resource to which access is being granted.`),
      namedNode(acl)
    ),
    quad(
      namedNode(`${acl}accessTo`),
      namedNode(`${rdfs}domain`),
      namedNode(`${acl}Authorization`),
      namedNode(acl)
    ),
    quad(
      namedNode(`${acl}accessTo`),
      namedNode(`${rdfs}label`),
      literal(`to`),
      namedNode(acl)
    ),
    quad(
      namedNode(`${acl}accessTo`),
      namedNode(`${rdfs}range`),
      namedNode(`${ns6}InformationResource`),
      namedNode(acl)
    ),
    quad(
      namedNode(`${acl}accessToClass`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(acl)
    ),
    quad(
      namedNode(`${acl}accessToClass`),
      namedNode(`${rdfs}comment`),
      literal(`A class of information resources to which access is being granted.`),
      namedNode(acl)
    ),
    quad(
      namedNode(`${acl}accessToClass`),
      namedNode(`${rdfs}domain`),
      namedNode(`${acl}Authorization`),
      namedNode(acl)
    ),
    quad(
      namedNode(`${acl}accessToClass`),
      namedNode(`${rdfs}label`),
      literal(`to all in`),
      namedNode(acl)
    ),
    quad(
      namedNode(`${acl}accessToClass`),
      namedNode(`${rdfs}range`),
      namedNode(`${rdfs}Class`),
      namedNode(acl)
    ),
    quad(
      namedNode(`${acl}agent`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(acl)
    ),
    quad(
      namedNode(`${acl}agent`),
      namedNode(`${rdfs}comment`),
      literal(`A person or social entity to being given the right`),
      namedNode(acl)
    ),
    quad(
      namedNode(`${acl}agent`),
      namedNode(`${rdfs}domain`),
      namedNode(`${acl}Authorization`),
      namedNode(acl)
    ),
    quad(
      namedNode(`${acl}agent`),
      namedNode(`${rdfs}label`),
      literal(`agent`),
      namedNode(acl)
    ),
    quad(
      namedNode(`${acl}agent`),
      namedNode(`${rdfs}range`),
      namedNode(`${foaf}Agent`),
      namedNode(acl)
    ),
    quad(
      namedNode(`${acl}agentClass`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(acl)
    ),
    quad(
      namedNode(`${acl}agentClass`),
      namedNode(`${rdfs}comment`),
      literal(`A class of persons or social entities to being given the right`),
      namedNode(acl)
    ),
    quad(
      namedNode(`${acl}agentClass`),
      namedNode(`${rdfs}domain`),
      namedNode(`${acl}Authorization`),
      namedNode(acl)
    ),
    quad(
      namedNode(`${acl}agentClass`),
      namedNode(`${rdfs}label`),
      literal(`agent class`),
      namedNode(acl)
    ),
    quad(
      namedNode(`${acl}agentClass`),
      namedNode(`${rdfs}range`),
      namedNode(`${rdfs}Class`),
      namedNode(acl)
    ),
    quad(
      namedNode(`${acl}agentGroup`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(acl)
    ),
    quad(
      namedNode(`${acl}agentGroup`),
      namedNode(`${rdfs}comment`),
      literal(`A group of persons or social entities to being given the right.
          The right is given to any entity which is a vcard:member of the group,
          as defined by the document received when the Group is dereferenced.`),
      namedNode(acl)
    ),
    quad(
      namedNode(`${acl}agentGroup`),
      namedNode(`${rdfs}domain`),
      namedNode(`${acl}Authorization`),
      namedNode(acl)
    ),
    quad(
      namedNode(`${acl}agentGroup`),
      namedNode(`${rdfs}label`),
      literal(`agent group`),
      namedNode(acl)
    ),
    quad(
      namedNode(`${acl}agentGroup`),
      namedNode(`${rdfs}range`),
      namedNode(`${vcard}Group`),
      namedNode(acl)
    ),
    quad(
      namedNode(`${acl}default`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(acl)
    ),
    quad(
      namedNode(`${acl}default`),
      namedNode(`${rdfs}comment`),
      literal(`If a resource has no ACL file (it is 404),
        then access to the resource is given by the ACL of the immediately
        containing directory, or failing that (404) the ACL of the recursively next
        containing directory which has an ACL file.
        Within that ACL file,
        any Authorization which has that directory as its acl:default applies to the
        resource. (The highest directory must have an ACL file.)
`),
      namedNode(acl)
    ),
    quad(
      namedNode(`${acl}default`),
      namedNode(`${rdfs}domain`),
      namedNode(`${acl}Authorization`),
      namedNode(acl)
    ),
    quad(
      namedNode(`${acl}default`),
      namedNode(`${rdfs}label`),
      literal(`default access for things in this`),
      namedNode(acl)
    ),
    quad(
      namedNode(`${acl}defaultForNew`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(acl)
    ),
    quad(
      namedNode(`${acl}defaultForNew`),
      namedNode(`${rdfs}comment`),
      literal(`THIS IS OBSOLETE AS OF 2017-08-01.   See 'default'.
        Was: A directory for which this authorization is used for new files in the directory.`),
      namedNode(acl)
    ),
    quad(
      namedNode(`${acl}defaultForNew`),
      namedNode(`${rdfs}domain`),
      namedNode(`${acl}Authorization`),
      namedNode(acl)
    ),
    quad(
      namedNode(`${acl}defaultForNew`),
      namedNode(`${rdfs}label`),
      literal(`default access for new things in the object`),
      namedNode(acl)
    ),
    quad(
      namedNode(`${acl}delegates`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(acl)
    ),
    quad(
      namedNode(`${acl}delegates`),
      namedNode(`${rdfs}comment`),
      literal(`Delegates a person or another agent to act on behalf of the agent.
    For example, Alice delegates Bob to act on behalf of Alice for ACL purposes.`),
      namedNode(acl)
    ),
    quad(
      namedNode(`${acl}delegates`),
      namedNode(`${rdfs}label`),
      literal(`delegates`, 'en'),
      namedNode(acl)
    ),
    quad(
      namedNode(`${acl}delegates`),
      namedNode(`${rdfs}range`),
      namedNode(`${foaf}Agent`),
      namedNode(acl)
    ),
    quad(
      namedNode(`${acl}mode`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(acl)
    ),
    quad(
      namedNode(`${acl}mode`),
      namedNode(`${rdfs}comment`),
      literal(`A mode of access such as read or write.`),
      namedNode(acl)
    ),
    quad(
      namedNode(`${acl}mode`),
      namedNode(`${rdfs}domain`),
      namedNode(`${acl}Authorization`),
      namedNode(acl)
    ),
    quad(
      namedNode(`${acl}mode`),
      namedNode(`${rdfs}label`),
      literal(`access mode`),
      namedNode(acl)
    ),
    quad(
      namedNode(`${acl}mode`),
      namedNode(`${rdfs}range`),
      namedNode(`${rdfs}Class`),
      namedNode(acl)
    ),
    quad(
      namedNode(`${acl}origin`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(acl)
    ),
    quad(
      namedNode(`${acl}origin`),
      namedNode(`${rdfs}comment`),
      literal(`A web application, identified by its Origin, such as
        <https://scripts.example.com>, being given the right.
        When a user of the web application at a certain origin accesses the server,
        then the browser sets the Origin: header to warn that a possibly untrusted webapp
        is being used.
        Then, BOTH the user AND the origin must have the required access.`),
      namedNode(acl)
    ),
    quad(
      namedNode(`${acl}origin`),
      namedNode(`${rdfs}domain`),
      namedNode(`${acl}Authorization`),
      namedNode(acl)
    ),
    quad(
      namedNode(`${acl}origin`),
      namedNode(`${rdfs}label`),
      literal(`origin`),
      namedNode(acl)
    ),
    quad(
      namedNode(`${acl}origin`),
      namedNode(`${rdfs}range`),
      namedNode(`${acl}Origin`),
      namedNode(acl)
    ),
    quad(
      namedNode(`${acl}origin`),
      namedNode(`${rdfs}seeAlso`),
      namedNode(`${ns5}Origin`),
      namedNode(acl)
    ),
    quad(
      namedNode(`${acl}owner`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(acl)
    ),
    quad(
      namedNode(`${acl}owner`),
      namedNode(`${rdfs}comment`),
      literal(`The person or other agent which owns this.
    For example, the owner of a file in a filesystem.
    There is a sense of "right to control".   Typically defaults to the agent who created
    something, but can be changed.`),
      namedNode(acl)
    ),
    quad(
      namedNode(`${acl}owner`),
      namedNode(`${rdfs}label`),
      literal(`owner`, 'en'),
      namedNode(acl)
    ),
    quad(
      namedNode(`${acl}owner`),
      namedNode(`${rdfs}range`),
      namedNode(`${foaf}Agent`),
      namedNode(acl)
    ),
    quad(
      namedNode(`${ns9}wac`),
      namedNode(`${foaf}topic`),
      namedNode(`${ns10}acl`),
      namedNode(acl)
    ),
    quad(
      namedNode(`${ns10}acl`),
      namedNode(`${dcterms}title`),
      literal(`Basic Access Control ontology`),
      namedNode(acl)
    ),
    quad(
      namedNode(`${ns10}acl`),
      namedNode(`${rdfs}comment`),
      literal(`Defines the class Authorization and its essential properties,
    and also some classes of access such as read and write. `),
      namedNode(acl)
    ),
    quad(
      namedNode(`${ns12}WebAccessControl`),
      namedNode(`${foaf}topic`),
      namedNode(`${ns10}acl`),
      namedNode(acl)
    ),

  ]
}
