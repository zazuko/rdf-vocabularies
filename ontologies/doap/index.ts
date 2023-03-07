/* This file was automatically generated. Do not edit by hand. */

const {
  doap,
  dc11,
  rdf,
  owl,
  foaf,
  rdfs,
  ns7,
  ns8,
  sioc
} = {
  'doap': 'http://usefulinc.com/ns/doap#',
  'dc11': 'http://purl.org/dc/elements/1.1/',
  'rdf': 'http://www.w3.org/1999/02/22-rdf-syntax-ns#',
  'owl': 'http://www.w3.org/2002/07/owl#',
  'foaf': 'http://xmlns.com/foaf/0.1/',
  'rdfs': 'http://www.w3.org/2000/01/rdf-schema#',
  'ns7': 'http://xmlns.com/wordnet/1.6/',
  'ns8': 'http://rdfs.org/sioc/types#',
  'sioc': 'http://rdfs.org/sioc/ns#'
}

export default ({ blankNode, literal, namedNode, quad }: import('rdf-js').DataFactory): import('rdf-js').Quad[] => {
  const blankNodes: import('rdf-js').BlankNode[] = []
  for (let i = 0; i < 5; i++) {
    blankNodes.push(blankNode())
  }

  return [
    quad(
      namedNode(doap),
      namedNode(`${dc11}creator`),
      literal(`Edd Wilder-James`),
      namedNode(doap)
    ),
    quad(
      namedNode(doap),
      namedNode(`${dc11}description`),
      literal(`Das Vokabular "Description of a Project (DOAP)", beschrieben durch W3C RDF Schema and the Web Ontology Language.`, 'de'),
      namedNode(doap)
    ),
    quad(
      namedNode(doap),
      namedNode(`${dc11}description`),
      literal(`El vocabulario Description of a Project (DOAP, Descripción de un Proyecto), descrito usando RDF Schema de W3C
		y Web Ontology Language.`, 'es'),
      namedNode(doap)
    ),
    quad(
      namedNode(doap),
      namedNode(`${dc11}description`),
      literal(`Le vocabulaire Description Of A Project (DOAP, Description D'Un Projet),
		décrit en utilisant RDF Schema du W3C et OWL.`, 'fr'),
      namedNode(doap)
    ),
    quad(
      namedNode(doap),
      namedNode(`${dc11}description`),
      literal(`Slovník Description of a Project (DOAP, Popis projektu), popsaný použitím W3C RDF Schema a Web Ontology Language.`, 'cs'),
      namedNode(doap)
    ),
    quad(
      namedNode(doap),
      namedNode(`${dc11}description`),
      literal(`The Description of a Project (DOAP) vocabulary, described using W3C RDF Schema and the Web Ontology Language.`),
      namedNode(doap)
    ),
    quad(
      namedNode(doap),
      namedNode(`${dc11}description`),
      literal(`Vocabulário de descrição de um Projeto (DOAP - Description of a Project), descrito no esquema (schema) W3C RDF e na Web Ontology Language.`, 'pt'),
      namedNode(doap)
    ),
    quad(
      namedNode(doap),
      namedNode(`${dc11}format`),
      literal(`application/rdf+xml`),
      namedNode(doap)
    ),
    quad(
      namedNode(doap),
      namedNode(`${dc11}rights`),
      literal(`Copyright © 2004-2018 Edd Dumbill, Edd Wilder-James`),
      namedNode(doap)
    ),
    quad(
      namedNode(doap),
      namedNode(`${dc11}title`),
      literal(`Description of a Project (DOAP) vocabulary`),
      namedNode(doap)
    ),
    quad(
      namedNode(doap),
      namedNode(`${rdf}type`),
      namedNode(`${owl}Ontology`),
      namedNode(doap)
    ),
    quad(
      namedNode(doap),
      namedNode(`${owl}imports`),
      namedNode(`${foaf}index.rdf`),
      namedNode(doap)
    ),
    quad(
      namedNode(doap),
      namedNode(`${foaf}maker`),
      blankNodes[0],
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}ArchRepository`),
      namedNode(`${rdf}type`),
      namedNode(`${rdfs}Class`),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}ArchRepository`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}Class`),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}ArchRepository`),
      namedNode(`${rdfs}comment`),
      literal(`Dépôt GNU Arch du code source.`, 'fr'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}ArchRepository`),
      namedNode(`${rdfs}comment`),
      literal(`GNU Arch Quellcode-Versionierungssystem.`, 'de'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}ArchRepository`),
      namedNode(`${rdfs}comment`),
      literal(`GNU Arch source code repository.`, 'en'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}ArchRepository`),
      namedNode(`${rdfs}comment`),
      literal(`Repositorio GNU Arch del código fuente.`, 'es'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}ArchRepository`),
      namedNode(`${rdfs}comment`),
      literal(`Repositório GNU Arch do código fonte.`, 'pt'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}ArchRepository`),
      namedNode(`${rdfs}comment`),
      literal(`Úložiště zdrojových kódů GNU Arch.`, 'cs'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}ArchRepository`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(doap),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}ArchRepository`),
      namedNode(`${rdfs}label`),
      literal(`Dépôt GNU Arch`, 'fr'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}ArchRepository`),
      namedNode(`${rdfs}label`),
      literal(`GNU Arch repository`, 'de'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}ArchRepository`),
      namedNode(`${rdfs}label`),
      literal(`GNU Arch repository`, 'en'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}ArchRepository`),
      namedNode(`${rdfs}label`),
      literal(`Repositorio GNU Arch`, 'es'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}ArchRepository`),
      namedNode(`${rdfs}label`),
      literal(`Repositório GNU Arch`, 'pt'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}ArchRepository`),
      namedNode(`${rdfs}label`),
      literal(`Úložiště GNU Arch`, 'cs'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}ArchRepository`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${doap}Repository`),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}BKRepository`),
      namedNode(`${rdf}type`),
      namedNode(`${rdfs}Class`),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}BKRepository`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}Class`),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}BKRepository`),
      namedNode(`${rdfs}comment`),
      literal(`BitKeeper Quellcode-Versionierungssystem.`, 'de'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}BKRepository`),
      namedNode(`${rdfs}comment`),
      literal(`BitKeeper source code repository.`, 'en'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}BKRepository`),
      namedNode(`${rdfs}comment`),
      literal(`Dépôt BitKeeper du code source.`, 'fr'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}BKRepository`),
      namedNode(`${rdfs}comment`),
      literal(`Repositorio BitKeeper del código fuente.`, 'es'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}BKRepository`),
      namedNode(`${rdfs}comment`),
      literal(`Repositório BitKeeper do código fonte.`, 'pt'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}BKRepository`),
      namedNode(`${rdfs}comment`),
      literal(`Úložiště zdrojových kódů BitKeeper.`, 'cs'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}BKRepository`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(doap),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}BKRepository`),
      namedNode(`${rdfs}label`),
      literal(`BitKeeper Repository`, 'de'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}BKRepository`),
      namedNode(`${rdfs}label`),
      literal(`BitKeeper Repository`, 'en'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}BKRepository`),
      namedNode(`${rdfs}label`),
      literal(`Dépôt BitKeeper`, 'fr'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}BKRepository`),
      namedNode(`${rdfs}label`),
      literal(`Repositorio BitKeeper`, 'es'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}BKRepository`),
      namedNode(`${rdfs}label`),
      literal(`Repositório Bitkeeper`, 'pt'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}BKRepository`),
      namedNode(`${rdfs}label`),
      literal(`Úložiště BitKeeper`, 'cs'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}BKRepository`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${doap}Repository`),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}BazaarBranch`),
      namedNode(`${rdf}type`),
      namedNode(`${rdfs}Class`),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}BazaarBranch`),
      namedNode(`${rdfs}comment`),
      literal(`Bazaar source code branch.`, 'en'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}BazaarBranch`),
      namedNode(`${rdfs}comment`),
      literal(`Código fonte da ramificação Bazaar.`, 'pt'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}BazaarBranch`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(doap),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}BazaarBranch`),
      namedNode(`${rdfs}label`),
      literal(`Bazaar Branch`, 'en'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}BazaarBranch`),
      namedNode(`${rdfs}label`),
      literal(`Ramificação Bazaar`, 'pt'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}BazaarBranch`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${doap}Repository`),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}CVSRepository`),
      namedNode(`${rdf}type`),
      namedNode(`${rdfs}Class`),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}CVSRepository`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}Class`),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}CVSRepository`),
      namedNode(`${rdfs}comment`),
      literal(`CVS Quellcode-Versionierungssystem.`, 'de'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}CVSRepository`),
      namedNode(`${rdfs}comment`),
      literal(`CVS source code repository.`, 'en'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}CVSRepository`),
      namedNode(`${rdfs}comment`),
      literal(`Dépôt CVS du code source.`, 'fr'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}CVSRepository`),
      namedNode(`${rdfs}comment`),
      literal(`Repositorio CVS del código fuente.`, 'es'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}CVSRepository`),
      namedNode(`${rdfs}comment`),
      literal(`Repositório CVS do código fonte.`, 'pt'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}CVSRepository`),
      namedNode(`${rdfs}comment`),
      literal(`Úložiště zdrojových kódů CVS.`, 'cs'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}CVSRepository`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(doap),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}CVSRepository`),
      namedNode(`${rdfs}label`),
      literal(`CVS Repository`, 'de'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}CVSRepository`),
      namedNode(`${rdfs}label`),
      literal(`CVS Repository`, 'en'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}CVSRepository`),
      namedNode(`${rdfs}label`),
      literal(`Dépôt CVS`, 'fr'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}CVSRepository`),
      namedNode(`${rdfs}label`),
      literal(`Repositorio CVS`, 'es'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}CVSRepository`),
      namedNode(`${rdfs}label`),
      literal(`Repositório CVS`, 'pt'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}CVSRepository`),
      namedNode(`${rdfs}label`),
      literal(`Úložiště CVS`, 'cs'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}CVSRepository`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${doap}Repository`),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}DarcsRepository`),
      namedNode(`${rdf}type`),
      namedNode(`${rdfs}Class`),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}DarcsRepository`),
      namedNode(`${rdfs}comment`),
      literal(`Dépôt darcs du code source.`, 'fr'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}DarcsRepository`),
      namedNode(`${rdfs}comment`),
      literal(`Repositorio darcs del código fuente.`, 'es'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}DarcsRepository`),
      namedNode(`${rdfs}comment`),
      literal(`Repositório darcs do código fonte.`, 'pt'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}DarcsRepository`),
      namedNode(`${rdfs}comment`),
      literal(`darcs source code repository.`, 'en'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}DarcsRepository`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(doap),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}DarcsRepository`),
      namedNode(`${rdfs}label`),
      literal(`Dépôt darcs`, 'fr'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}DarcsRepository`),
      namedNode(`${rdfs}label`),
      literal(`Repositorio darcs`, 'es'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}DarcsRepository`),
      namedNode(`${rdfs}label`),
      literal(`Repositório darcs`, 'pt'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}DarcsRepository`),
      namedNode(`${rdfs}label`),
      literal(`darcs Repository`, 'en'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}DarcsRepository`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${doap}Repository`),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}GitBranch`),
      namedNode(`${rdf}type`),
      namedNode(`${rdfs}Class`),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}GitBranch`),
      namedNode(`${rdfs}comment`),
      literal(`Código fonte da ramificação Git.`, 'pt'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}GitBranch`),
      namedNode(`${rdfs}comment`),
      literal(`Git source code branch.`, 'en'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}GitBranch`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(doap),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}GitBranch`),
      namedNode(`${rdfs}label`),
      literal(`Git Branch`, 'en'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}GitBranch`),
      namedNode(`${rdfs}label`),
      literal(`Ramificação Git`, 'pt'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}GitBranch`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${doap}Repository`),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}GitRepository`),
      namedNode(`${rdf}type`),
      namedNode(`${rdfs}Class`),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}GitRepository`),
      namedNode(`${rdfs}comment`),
      literal(`Dépôt Git du code source.`, 'fr'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}GitRepository`),
      namedNode(`${rdfs}comment`),
      literal(`Git Quellcode-Versionierungssystem.`, 'de'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}GitRepository`),
      namedNode(`${rdfs}comment`),
      literal(`Git source code repository.`, 'en'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}GitRepository`),
      namedNode(`${rdfs}comment`),
      literal(`Repositorio Git del código fuente.`, 'es'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}GitRepository`),
      namedNode(`${rdfs}comment`),
      literal(`Repositório Git do código fonte.`, 'pt'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}GitRepository`),
      namedNode(`${rdfs}comment`),
      literal(`Úložiště zdrojových kódů Git.`, 'cs'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}GitRepository`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(doap),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}GitRepository`),
      namedNode(`${rdfs}label`),
      literal(`Dépôt Git`, 'fr'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}GitRepository`),
      namedNode(`${rdfs}label`),
      literal(`Git Repository`, 'de'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}GitRepository`),
      namedNode(`${rdfs}label`),
      literal(`Git Repository`, 'en'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}GitRepository`),
      namedNode(`${rdfs}label`),
      literal(`Repositorio Git`, 'es'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}GitRepository`),
      namedNode(`${rdfs}label`),
      literal(`Repositório Git`, 'pt'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}GitRepository`),
      namedNode(`${rdfs}label`),
      literal(`Úložiště Git`, 'cs'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}GitRepository`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${doap}Repository`),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}HgRepository`),
      namedNode(`${rdf}type`),
      namedNode(`${rdfs}Class`),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}HgRepository`),
      namedNode(`${rdfs}comment`),
      literal(`Mercurial source code repository.`, 'en'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}HgRepository`),
      namedNode(`${rdfs}comment`),
      literal(`Repositório Mercurial do código fonte.`, 'pt'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}HgRepository`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(doap),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}HgRepository`),
      namedNode(`${rdfs}label`),
      literal(`Mercurial Repository`, 'en'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}HgRepository`),
      namedNode(`${rdfs}label`),
      literal(`Repositório Mercurial`, 'pt'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}HgRepository`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${doap}Repository`),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}Project`),
      namedNode(`${rdf}type`),
      namedNode(`${rdfs}Class`),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}Project`),
      namedNode(`${rdfs}comment`),
      literal(`A project.`, 'en'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}Project`),
      namedNode(`${rdfs}comment`),
      literal(`Ein Projekt.`, 'de'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}Project`),
      namedNode(`${rdfs}comment`),
      literal(`Projekt.`, 'cs'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}Project`),
      namedNode(`${rdfs}comment`),
      literal(`Projeto.`, 'pt'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}Project`),
      namedNode(`${rdfs}comment`),
      literal(`Un projet.`, 'fr'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}Project`),
      namedNode(`${rdfs}comment`),
      literal(`Un proyecto.`, 'es'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}Project`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(doap),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}Project`),
      namedNode(`${rdfs}label`),
      literal(`Project`, 'en'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}Project`),
      namedNode(`${rdfs}label`),
      literal(`Projekt`, 'cs'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}Project`),
      namedNode(`${rdfs}label`),
      literal(`Projekt`, 'de'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}Project`),
      namedNode(`${rdfs}label`),
      literal(`Projet`, 'fr'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}Project`),
      namedNode(`${rdfs}label`),
      literal(`Projeto`, 'pt'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}Project`),
      namedNode(`${rdfs}label`),
      literal(`Proyecto`, 'es'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}Project`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${foaf}Project`),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}Project`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${ns7}Project`),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}Repository`),
      namedNode(`${rdf}type`),
      namedNode(`${rdfs}Class`),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}Repository`),
      namedNode(`${rdfs}comment`),
      literal(`Dépôt du code source.`, 'fr'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}Repository`),
      namedNode(`${rdfs}comment`),
      literal(`Quellcode-Versionierungssystem.`, 'de'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}Repository`),
      namedNode(`${rdfs}comment`),
      literal(`Repositorio del código fuente.`, 'es'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}Repository`),
      namedNode(`${rdfs}comment`),
      literal(`Repositório do código fonte.`, 'pt'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}Repository`),
      namedNode(`${rdfs}comment`),
      literal(`Source code repository.`, 'en'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}Repository`),
      namedNode(`${rdfs}comment`),
      literal(`Úložiště zdrojových kódů.`, 'cs'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}Repository`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(doap),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}Repository`),
      namedNode(`${rdfs}label`),
      literal(`Dépôt`, 'fr'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}Repository`),
      namedNode(`${rdfs}label`),
      literal(`Repositorio`, 'es'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}Repository`),
      namedNode(`${rdfs}label`),
      literal(`Repository`, 'de'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}Repository`),
      namedNode(`${rdfs}label`),
      literal(`Repository`, 'en'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}Repository`),
      namedNode(`${rdfs}label`),
      literal(`Repositório`, 'pt'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}Repository`),
      namedNode(`${rdfs}label`),
      literal(`Úložiště`, 'cs'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}SVNRepository`),
      namedNode(`${rdf}type`),
      namedNode(`${rdfs}Class`),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}SVNRepository`),
      namedNode(`${rdfs}comment`),
      literal(`Dépôt Subversion du code source.`, 'fr'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}SVNRepository`),
      namedNode(`${rdfs}comment`),
      literal(`Repositorio Subversion del código fuente.`, 'es'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}SVNRepository`),
      namedNode(`${rdfs}comment`),
      literal(`Repositório Subversion do código fonte.`, 'pt'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}SVNRepository`),
      namedNode(`${rdfs}comment`),
      literal(`Subversion Quellcode-Versionierungssystem.`, 'de'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}SVNRepository`),
      namedNode(`${rdfs}comment`),
      literal(`Subversion source code repository.`, 'en'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}SVNRepository`),
      namedNode(`${rdfs}comment`),
      literal(`Úložiště zdrojových kódů Subversion.`, 'cs'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}SVNRepository`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(doap),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}SVNRepository`),
      namedNode(`${rdfs}label`),
      literal(`Dépôt Subversion`, 'fr'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}SVNRepository`),
      namedNode(`${rdfs}label`),
      literal(`Repositorio Subversion`, 'es'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}SVNRepository`),
      namedNode(`${rdfs}label`),
      literal(`Repositório Subversion`, 'pt'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}SVNRepository`),
      namedNode(`${rdfs}label`),
      literal(`Subversion Repository`, 'de'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}SVNRepository`),
      namedNode(`${rdfs}label`),
      literal(`Subversion Repository`, 'en'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}SVNRepository`),
      namedNode(`${rdfs}label`),
      literal(`Úložiště Subversion`, 'cs'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}SVNRepository`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${doap}Repository`),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}Specification`),
      namedNode(`${rdf}type`),
      namedNode(`${rdfs}Class`),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}Specification`),
      namedNode(`${rdfs}comment`),
      literal(`A especificação de aspetos, técnicas ou outros do sistema.`, 'pt'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}Specification`),
      namedNode(`${rdfs}comment`),
      literal(`A specification of a system's aspects, technical or otherwise.`, 'en'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}Specification`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(doap),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}Specification`),
      namedNode(`${rdfs}label`),
      literal(`Especificação`, 'pt'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}Specification`),
      namedNode(`${rdfs}label`),
      literal(`Specification`, 'en'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}Specification`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${rdfs}Resource`),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}Version`),
      namedNode(`${rdf}type`),
      namedNode(`${rdfs}Class`),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}Version`),
      namedNode(`${rdfs}comment`),
      literal(`Détails sur une version d'une release d'un projet.`, 'fr'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}Version`),
      namedNode(`${rdfs}comment`),
      literal(`Informace o uvolněné verzi projektu.`, 'cs'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}Version`),
      namedNode(`${rdfs}comment`),
      literal(`Información sobre la versión de un release del proyecto.`, 'es'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}Version`),
      namedNode(`${rdfs}comment`),
      literal(`Informação sobre a versão do projeto lançado.`, 'pt'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}Version`),
      namedNode(`${rdfs}comment`),
      literal(`Version information of a project release.`, 'en'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}Version`),
      namedNode(`${rdfs}comment`),
      literal(`Versionsinformation eines Projekt Releases.`, 'de'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}Version`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(doap),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}Version`),
      namedNode(`${rdfs}label`),
      literal(`Version`, 'de'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}Version`),
      namedNode(`${rdfs}label`),
      literal(`Version`, 'en'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}Version`),
      namedNode(`${rdfs}label`),
      literal(`Version`, 'fr'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}Version`),
      namedNode(`${rdfs}label`),
      literal(`Versión`, 'es'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}Version`),
      namedNode(`${rdfs}label`),
      literal(`Versão`, 'pt'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}Version`),
      namedNode(`${rdfs}label`),
      literal(`Verze`, 'cs'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}anon-root`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}anon-root`),
      namedNode(`${rdfs}comment`),
      literal(`Dépôt pour accès anonyme.`, 'fr'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}anon-root`),
      namedNode(`${rdfs}comment`),
      literal(`Repositorio para acceso anónimo.`, 'es'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}anon-root`),
      namedNode(`${rdfs}comment`),
      literal(`Repository for anonymous access.`, 'en'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}anon-root`),
      namedNode(`${rdfs}comment`),
      literal(`Repository für anonymen Zugriff`, 'de'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}anon-root`),
      namedNode(`${rdfs}comment`),
      literal(`Repositório para acesso anónimo.`, 'pt'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}anon-root`),
      namedNode(`${rdfs}comment`),
      literal(`Úložiště pro anonymní přístup.`, 'cs'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}anon-root`),
      namedNode(`${rdfs}domain`),
      namedNode(`${doap}Repository`),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}anon-root`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(doap),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}anon-root`),
      namedNode(`${rdfs}label`),
      literal(`Anonymes Root`, 'de'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}anon-root`),
      namedNode(`${rdfs}label`),
      literal(`anonymní kořen`, 'cs'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}anon-root`),
      namedNode(`${rdfs}label`),
      literal(`anonymous root`, 'en'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}anon-root`),
      namedNode(`${rdfs}label`),
      literal(`racine anonyme`, 'fr'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}anon-root`),
      namedNode(`${rdfs}label`),
      literal(`raíz anónima`, 'es'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}anon-root`),
      namedNode(`${rdfs}label`),
      literal(`raíz anónima`, 'pt'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}anon-root`),
      namedNode(`${rdfs}range`),
      namedNode(`${rdfs}Literal`),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}audience`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}audience`),
      namedNode(`${rdfs}comment`),
      literal(`Description of target user base`, 'en'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}audience`),
      namedNode(`${rdfs}comment`),
      literal(`Descrição do utilizador base alvo`, 'pt'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}audience`),
      namedNode(`${rdfs}domain`),
      namedNode(`${doap}Project`),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}audience`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(doap),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}audience`),
      namedNode(`${rdfs}label`),
      literal(`audience`, 'en'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}audience`),
      namedNode(`${rdfs}label`),
      literal(`audiência`, 'pt'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}audience`),
      namedNode(`${rdfs}range`),
      namedNode(`${rdfs}Literal`),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}blog`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}blog`),
      namedNode(`${rdfs}comment`),
      literal(`URI de um blog relacionado com um projeto`, 'pt'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}blog`),
      namedNode(`${rdfs}comment`),
      literal(`URI of a blog related to a project`, 'en'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}blog`),
      namedNode(`${rdfs}domain`),
      namedNode(`${doap}Project`),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}blog`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(doap),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}blog`),
      namedNode(`${rdfs}label`),
      literal(`blog`, 'en'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}blog`),
      namedNode(`${rdfs}label`),
      literal(`blog`, 'pt'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}blog`),
      namedNode(`${rdfs}range`),
      namedNode(`${ns8}Weblog`),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}blog`),
      namedNode(`${rdfs}range`),
      namedNode(`${rdfs}Resource`),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}browse`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}browse`),
      namedNode(`${rdfs}comment`),
      literal(`Interface web au dépôt.`, 'fr'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}browse`),
      namedNode(`${rdfs}comment`),
      literal(`Interface web del repositorio.`, 'es'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}browse`),
      namedNode(`${rdfs}comment`),
      literal(`Interface web do repositório.`, 'pt'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}browse`),
      namedNode(`${rdfs}comment`),
      literal(`Web browser interface to repository.`, 'en'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}browse`),
      namedNode(`${rdfs}comment`),
      literal(`Web-Browser Interface für das Repository.`, 'de'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}browse`),
      namedNode(`${rdfs}comment`),
      literal(`Webové rozhraní pro prohlížení úložiště.`, 'cs'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}browse`),
      namedNode(`${rdfs}domain`),
      namedNode(`${doap}Repository`),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}browse`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(doap),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}browse`),
      namedNode(`${rdfs}label`),
      literal(`browse`, 'de'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}browse`),
      namedNode(`${rdfs}label`),
      literal(`browse`, 'en'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}browse`),
      namedNode(`${rdfs}label`),
      literal(`navegar`, 'es'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}browse`),
      namedNode(`${rdfs}label`),
      literal(`navegar`, 'pt'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}browse`),
      namedNode(`${rdfs}label`),
      literal(`prohlížeč`, 'cs'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}browse`),
      namedNode(`${rdfs}label`),
      literal(`visualiser`, 'fr'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}bug-database`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}bug-database`),
      namedNode(`${rdfs}comment`),
      literal(`Bug tracker for a project.`, 'en'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}bug-database`),
      namedNode(`${rdfs}comment`),
      literal(`Bug tracker para um projeto.`, 'pt'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}bug-database`),
      namedNode(`${rdfs}comment`),
      literal(`Bug tracker para un proyecto.`, 'es'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}bug-database`),
      namedNode(`${rdfs}comment`),
      literal(`Fehlerdatenbank eines Projektes.`, 'de'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}bug-database`),
      namedNode(`${rdfs}comment`),
      literal(`Správa chyb projektu.`, 'cs'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}bug-database`),
      namedNode(`${rdfs}comment`),
      literal(`Suivi des bugs pour un projet.`, 'fr'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}bug-database`),
      namedNode(`${rdfs}domain`),
      namedNode(`${doap}Project`),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}bug-database`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(doap),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}bug-database`),
      namedNode(`${rdfs}label`),
      literal(`Fehlerdatenbank`, 'de'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}bug-database`),
      namedNode(`${rdfs}label`),
      literal(`base de dados de bugs`, 'pt'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}bug-database`),
      namedNode(`${rdfs}label`),
      literal(`base de datos de bugs`, 'es'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}bug-database`),
      namedNode(`${rdfs}label`),
      literal(`bug database`, 'en'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}bug-database`),
      namedNode(`${rdfs}label`),
      literal(`databáze chyb`, 'cs'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}bug-database`),
      namedNode(`${rdfs}label`),
      literal(`suivi des bugs`, 'fr'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}category`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}category`),
      namedNode(`${rdfs}comment`),
      literal(`A category of project.`, 'en'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}category`),
      namedNode(`${rdfs}comment`),
      literal(`Eine Kategorie eines Projektes.`, 'de'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}category`),
      namedNode(`${rdfs}comment`),
      literal(`Kategorie projektu.`, 'cs'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}category`),
      namedNode(`${rdfs}comment`),
      literal(`Uma categoría de projeto.`, 'pt'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}category`),
      namedNode(`${rdfs}comment`),
      literal(`Una categoría de proyecto.`, 'es'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}category`),
      namedNode(`${rdfs}comment`),
      literal(`Une catégorie de projet.`, 'fr'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}category`),
      namedNode(`${rdfs}domain`),
      namedNode(`${doap}Project`),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}category`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(doap),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}category`),
      namedNode(`${rdfs}label`),
      literal(`Kategorie`, 'de'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}category`),
      namedNode(`${rdfs}label`),
      literal(`categoria`, 'pt'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}category`),
      namedNode(`${rdfs}label`),
      literal(`category`, 'en'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}category`),
      namedNode(`${rdfs}label`),
      literal(`categoría`, 'es'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}category`),
      namedNode(`${rdfs}label`),
      literal(`catégorie`, 'fr'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}category`),
      namedNode(`${rdfs}label`),
      literal(`kategorie`, 'cs'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}created`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}created`),
      namedNode(`${rdfs}comment`),
      literal(`Data em que algo foi criado, no formato AAAA-MM-DD. e.g. 2004-04-05`, 'pt'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}created`),
      namedNode(`${rdfs}comment`),
      literal(`Date when something was created, in YYYY-MM-DD form. e.g. 2004-04-05`, 'en'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}created`),
      namedNode(`${rdfs}comment`),
      literal(`Date à laquelle a été créé quelque chose, au format AAAA-MM-JJ (par ex. 2004-04-05)`, 'fr'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}created`),
      namedNode(`${rdfs}comment`),
      literal(`Datum, kdy bylo něco vytvořeno ve formátu RRRR-MM-DD, např. 2004-04-05`, 'cs'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}created`),
      namedNode(`${rdfs}comment`),
      literal(`Erstellungsdatum von Irgendwas, angegeben im YYYY-MM-DD Format, z.B. 2004-04-05.`, 'de'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}created`),
      namedNode(`${rdfs}comment`),
      literal(`Fecha en la que algo fue creado, en formato AAAA-MM-DD. e.g. 2004-04-05`, 'es'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}created`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(doap),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}created`),
      namedNode(`${rdfs}label`),
      literal(`creado`, 'es'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}created`),
      namedNode(`${rdfs}label`),
      literal(`created`, 'en'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}created`),
      namedNode(`${rdfs}label`),
      literal(`criado`, 'pt'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}created`),
      namedNode(`${rdfs}label`),
      literal(`créé`, 'fr'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}created`),
      namedNode(`${rdfs}label`),
      literal(`erstellt`, 'de'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}created`),
      namedNode(`${rdfs}label`),
      literal(`vytvořeno`, 'cs'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}created`),
      namedNode(`${rdfs}range`),
      namedNode(`${rdfs}Literal`),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}description`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}description`),
      namedNode(`${rdfs}comment`),
      literal(`Beschreibung eines Projekts als einfacher Text mit der Länge von 2 bis 4 Sätzen.`, 'de'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}description`),
      namedNode(`${rdfs}comment`),
      literal(`Descripción en texto plano de un proyecto, de 2 a 4 enunciados de longitud.`, 'es'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}description`),
      namedNode(`${rdfs}comment`),
      literal(`Descrição de um projeto em texto apenas, com 2 a 4 frases de comprimento.`, 'pt'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}description`),
      namedNode(`${rdfs}comment`),
      literal(`Plain text description of a project, of 2-4 sentences in length.`, 'en'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}description`),
      namedNode(`${rdfs}comment`),
      literal(`Texte descriptif d'un projet, long de 2 à 4 phrases.`, 'fr'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}description`),
      namedNode(`${rdfs}comment`),
      literal(`Čistě textový, 2 až 4 věty dlouhý popis projektu.`, 'cs'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}description`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(doap),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}description`),
      namedNode(`${rdfs}label`),
      literal(`Beschreibung`, 'de'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}description`),
      namedNode(`${rdfs}label`),
      literal(`descripción`, 'es'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}description`),
      namedNode(`${rdfs}label`),
      literal(`description`, 'en'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}description`),
      namedNode(`${rdfs}label`),
      literal(`description`, 'fr'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}description`),
      namedNode(`${rdfs}label`),
      literal(`descrição`, 'pt'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}description`),
      namedNode(`${rdfs}label`),
      literal(`popis`, 'cs'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}description`),
      namedNode(`${rdfs}range`),
      namedNode(`${rdfs}Literal`),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}developer-forum`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}developer-forum`),
      namedNode(`${rdfs}comment`),
      literal(`A forum or community for developers of this project.`, 'en'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}developer-forum`),
      namedNode(`${rdfs}domain`),
      namedNode(`${doap}Project`),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}developer-forum`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(doap),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}developer-forum`),
      namedNode(`${rdfs}label`),
      literal(`developer forum`, 'en'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}developer-forum`),
      namedNode(`${rdfs}range`),
      namedNode(`${sioc}Container`),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}developer`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}developer`),
      namedNode(`${rdfs}comment`),
      literal(`Desarrollador de software para el proyecto.`, 'es'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}developer`),
      namedNode(`${rdfs}comment`),
      literal(`Developer of software for the project.`, 'en'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}developer`),
      namedNode(`${rdfs}comment`),
      literal(`Développeur pour le projet.`, 'fr'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}developer`),
      namedNode(`${rdfs}comment`),
      literal(`Programador de software para o projeto.`, 'pt'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}developer`),
      namedNode(`${rdfs}comment`),
      literal(`Software-Entwickler für eine Projekt.`, 'de'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}developer`),
      namedNode(`${rdfs}comment`),
      literal(`Vývojář softwaru projektu.`, 'cs'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}developer`),
      namedNode(`${rdfs}domain`),
      namedNode(`${doap}Project`),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}developer`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(doap),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}developer`),
      namedNode(`${rdfs}label`),
      literal(`Entwickler`, 'de'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}developer`),
      namedNode(`${rdfs}label`),
      literal(`desarrollador`, 'es'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}developer`),
      namedNode(`${rdfs}label`),
      literal(`developer`, 'en'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}developer`),
      namedNode(`${rdfs}label`),
      literal(`développeur`, 'fr'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}developer`),
      namedNode(`${rdfs}label`),
      literal(`programador`, 'pt'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}developer`),
      namedNode(`${rdfs}label`),
      literal(`vývojář`, 'cs'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}developer`),
      namedNode(`${rdfs}range`),
      namedNode(`${foaf}Person`),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}documenter`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}documenter`),
      namedNode(`${rdfs}comment`),
      literal(`Collaborateur à la documentation du projet.`, 'fr'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}documenter`),
      namedNode(`${rdfs}comment`),
      literal(`Contribuidor para a documentação do projeto.`, 'pt'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}documenter`),
      namedNode(`${rdfs}comment`),
      literal(`Contributor of documentation to the project.`, 'en'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}documenter`),
      namedNode(`${rdfs}comment`),
      literal(`Mitarbeiter an der Dokumentation eines Projektes.`, 'de'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}documenter`),
      namedNode(`${rdfs}comment`),
      literal(`Proveedor de documentación para el proyecto.`, 'es'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}documenter`),
      namedNode(`${rdfs}comment`),
      literal(`Spoluautor dokumentace projektu.`, 'cs'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}documenter`),
      namedNode(`${rdfs}domain`),
      namedNode(`${doap}Project`),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}documenter`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(doap),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}documenter`),
      namedNode(`${rdfs}label`),
      literal(`Dokumentator`, 'de'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}documenter`),
      namedNode(`${rdfs}label`),
      literal(`documentador`, 'pt'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}documenter`),
      namedNode(`${rdfs}label`),
      literal(`documenter`, 'en'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}documenter`),
      namedNode(`${rdfs}label`),
      literal(`dokumentarista`, 'cs'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}documenter`),
      namedNode(`${rdfs}label`),
      literal(`escritor de ayuda`, 'es'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}documenter`),
      namedNode(`${rdfs}label`),
      literal(`rédacteur de l'aide`, 'fr'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}documenter`),
      namedNode(`${rdfs}range`),
      namedNode(`${foaf}Person`),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}download-mirror`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}download-mirror`),
      namedNode(`${rdfs}comment`),
      literal(`Miroir de la page de téléchargement du programme.`, 'fr'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}download-mirror`),
      namedNode(`${rdfs}comment`),
      literal(`Mirror da página web para fazer download.`, 'pt'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}download-mirror`),
      namedNode(`${rdfs}comment`),
      literal(`Mirror de la página web de descarga.`, 'es'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}download-mirror`),
      namedNode(`${rdfs}comment`),
      literal(`Mirror of software download web page.`, 'en'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}download-mirror`),
      namedNode(`${rdfs}comment`),
      literal(`Spiegel der Seite von die Projekt-Software heruntergeladen werden kann.`, 'de'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}download-mirror`),
      namedNode(`${rdfs}comment`),
      literal(`Zrcadlo stránky pro stažení softwaru.`, 'cs'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}download-mirror`),
      namedNode(`${rdfs}domain`),
      namedNode(`${doap}Project`),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}download-mirror`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(doap),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}download-mirror`),
      namedNode(`${rdfs}label`),
      literal(`Spiegel der Seite zum Herunterladen`, 'de'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}download-mirror`),
      namedNode(`${rdfs}label`),
      literal(`download mirror`, 'en'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}download-mirror`),
      namedNode(`${rdfs}label`),
      literal(`miroir pour le téléchargement`, 'fr'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}download-mirror`),
      namedNode(`${rdfs}label`),
      literal(`mirror de descarga`, 'es'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}download-mirror`),
      namedNode(`${rdfs}label`),
      literal(`mirror para download`, 'pt'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}download-mirror`),
      namedNode(`${rdfs}label`),
      literal(`zrcadlo stránky pro stažení`, 'cs'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}download-page`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}download-page`),
      namedNode(`${rdfs}comment`),
      literal(`Page web à partir de laquelle on peut télécharger le programme.`, 'fr'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}download-page`),
      namedNode(`${rdfs}comment`),
      literal(`Página web da qual o projeto de software pode ser descarregado.`, 'pt'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}download-page`),
      namedNode(`${rdfs}comment`),
      literal(`Página web de la cuál se puede bajar el software.`, 'es'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}download-page`),
      namedNode(`${rdfs}comment`),
      literal(`Web page from which the project software can be downloaded.`, 'en'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}download-page`),
      namedNode(`${rdfs}comment`),
      literal(`Web-Seite von der die Projekt-Software heruntergeladen werden kann.`, 'de'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}download-page`),
      namedNode(`${rdfs}comment`),
      literal(`Webová stránka, na které lze stáhnout projektový software.`, 'cs'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}download-page`),
      namedNode(`${rdfs}domain`),
      namedNode(`${doap}Project`),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}download-page`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(doap),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}download-page`),
      namedNode(`${rdfs}label`),
      literal(`Seite zum Herunterladen`, 'de'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}download-page`),
      namedNode(`${rdfs}label`),
      literal(`download page`, 'en'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}download-page`),
      namedNode(`${rdfs}label`),
      literal(`page de téléchargement`, 'fr'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}download-page`),
      namedNode(`${rdfs}label`),
      literal(`página de descarga`, 'es'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}download-page`),
      namedNode(`${rdfs}label`),
      literal(`página para download`, 'pt'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}download-page`),
      namedNode(`${rdfs}label`),
      literal(`stránka pro stažení`, 'cs'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}file-release`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}file-release`),
      namedNode(`${rdfs}comment`),
      literal(`URI adresa stažení asociované s revizí.`, 'cs'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}file-release`),
      namedNode(`${rdfs}comment`),
      literal(`URI of download associated with this release.`, 'en'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}file-release`),
      namedNode(`${rdfs}comment`),
      literal(`URI para download associado com a publicação.`, 'pt'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}file-release`),
      namedNode(`${rdfs}domain`),
      namedNode(`${doap}Version`),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}file-release`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(doap),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}file-release`),
      namedNode(`${rdfs}label`),
      literal(`file-release`, 'en'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}file-release`),
      namedNode(`${rdfs}label`),
      literal(`publicação do ficheiro`, 'pt'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}file-release`),
      namedNode(`${rdfs}label`),
      literal(`soubor revize`, 'cs'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}helper`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}helper`),
      namedNode(`${rdfs}comment`),
      literal(`Ajudante ou colaborador do projeto.`, 'pt'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}helper`),
      namedNode(`${rdfs}comment`),
      literal(`Colaborador del proyecto.`, 'es'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}helper`),
      namedNode(`${rdfs}comment`),
      literal(`Collaborateur au projet.`, 'fr'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}helper`),
      namedNode(`${rdfs}comment`),
      literal(`Project contributor.`, 'en'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}helper`),
      namedNode(`${rdfs}comment`),
      literal(`Projekt-Mitarbeiter.`, 'de'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}helper`),
      namedNode(`${rdfs}comment`),
      literal(`Spoluautor projektu.`, 'cs'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}helper`),
      namedNode(`${rdfs}domain`),
      namedNode(`${doap}Project`),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}helper`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(doap),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}helper`),
      namedNode(`${rdfs}label`),
      literal(`Helfer`, 'de'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}helper`),
      namedNode(`${rdfs}label`),
      literal(`colaborador`, 'es'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}helper`),
      namedNode(`${rdfs}label`),
      literal(`colaborador`, 'pt'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}helper`),
      namedNode(`${rdfs}label`),
      literal(`collaborateur`, 'fr'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}helper`),
      namedNode(`${rdfs}label`),
      literal(`helper`, 'en'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}helper`),
      namedNode(`${rdfs}label`),
      literal(`spoluautor`, 'cs'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}helper`),
      namedNode(`${rdfs}range`),
      namedNode(`${foaf}Person`),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}homepage`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}homepage`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}InverseFunctionalProperty`),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}homepage`),
      namedNode(`${rdfs}comment`),
      literal(`El URL de la página de un proyecto,
		asociada con exactamente un proyecto.`, 'es'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}homepage`),
      namedNode(`${rdfs}comment`),
      literal(`L'URL de la page web d'un projet,
		associée avec un unique projet.`, 'fr'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}homepage`),
      namedNode(`${rdfs}comment`),
      literal(`O URL da página de um projeto,
		asociada com exactamente um projeto.`, 'pt'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}homepage`),
      namedNode(`${rdfs}comment`),
      literal(`URL adresa domovské stránky projektu asociované s právě jedním projektem.`, 'cs'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}homepage`),
      namedNode(`${rdfs}comment`),
      literal(`URL der Projekt-Homepage,
		verbunden mit genau einem Projekt.`, 'de'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}homepage`),
      namedNode(`${rdfs}comment`),
      literal(`URL of a project's homepage,
		associated with exactly one project.`, 'en'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}homepage`),
      namedNode(`${rdfs}domain`),
      namedNode(`${doap}Project`),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}homepage`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(doap),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}homepage`),
      namedNode(`${rdfs}label`),
      literal(`Homepage`, 'de'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}homepage`),
      namedNode(`${rdfs}label`),
      literal(`domovská stránka`, 'cs'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}homepage`),
      namedNode(`${rdfs}label`),
      literal(`homepage`, 'en'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}homepage`),
      namedNode(`${rdfs}label`),
      literal(`page web`, 'fr'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}homepage`),
      namedNode(`${rdfs}label`),
      literal(`página web`, 'es'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}homepage`),
      namedNode(`${rdfs}label`),
      literal(`página web`, 'pt'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}homepage`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${foaf}homepage`),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}implements`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}implements`),
      namedNode(`${rdfs}comment`),
      literal(`A specification that a project implements. Could be a standard, API or legally defined level of conformance.`, 'en'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}implements`),
      namedNode(`${rdfs}comment`),
      literal(`Uma especificação que um projeto implementa. Pode ser uma padrão, API ou um nível de conformidade definida legalmente.`, 'pt'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}implements`),
      namedNode(`${rdfs}domain`),
      namedNode(`${doap}Project`),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}implements`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(doap),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}implements`),
      namedNode(`${rdfs}label`),
      literal(`Especificações para implementação`, 'pt'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}implements`),
      namedNode(`${rdfs}label`),
      literal(`Implements specification`, 'en'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}implements`),
      namedNode(`${rdfs}range`),
      namedNode(`${doap}Specification`),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}language`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}language`),
      namedNode(`${rdfs}comment`),
      literal(`Código de idioma ISO do projeto para o qual foi traduzido`, 'pt'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}language`),
      namedNode(`${rdfs}comment`),
      literal(`ISO language code a project has been translated into`, 'en'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}language`),
      namedNode(`${rdfs}domain`),
      namedNode(`${doap}Project`),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}language`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(doap),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}language`),
      namedNode(`${rdfs}label`),
      literal(`idioma`, 'pt'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}language`),
      namedNode(`${rdfs}label`),
      literal(`language`, 'en'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}language`),
      namedNode(`${rdfs}range`),
      namedNode(`${rdfs}Literal`),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}license`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}license`),
      namedNode(`${rdfs}comment`),
      literal(`Die URI einer RDF-Beschreibung einer Lizenz unter der die Software herausgegeben wird. z.B. eine SPDX Referenz`, 'de'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}license`),
      namedNode(`${rdfs}comment`),
      literal(`El URI de una descripción RDF de la licencia bajo la cuál se distribuye el software.`, 'es'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}license`),
      namedNode(`${rdfs}comment`),
      literal(`L'URI d'une description RDF de la licence sous laquelle le programme est distribué.`, 'fr'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}license`),
      namedNode(`${rdfs}comment`),
      literal(`O URI de uma descrição RDF da licença do software sob a qual é distribuída. Ex.: referência SPDX`, 'pt'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}license`),
      namedNode(`${rdfs}comment`),
      literal(`The URI of an RDF description of the license the software is distributed under. E.g. a SPDX reference`, 'en'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}license`),
      namedNode(`${rdfs}comment`),
      literal(`URI adresa RDF popisu licence, pod kterou je software distribuován.`, 'cs'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}license`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(doap),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}license`),
      namedNode(`${rdfs}label`),
      literal(`Lizenz`, 'de'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}license`),
      namedNode(`${rdfs}label`),
      literal(`licence`, 'cs'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}license`),
      namedNode(`${rdfs}label`),
      literal(`licence`, 'fr'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}license`),
      namedNode(`${rdfs}label`),
      literal(`licencia`, 'es'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}license`),
      namedNode(`${rdfs}label`),
      literal(`license`, 'en'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}license`),
      namedNode(`${rdfs}label`),
      literal(`licença`, 'pt'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}location`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}location`),
      namedNode(`${rdfs}comment`),
      literal(`Emplacement d'un dépôt.`, 'fr'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}location`),
      namedNode(`${rdfs}comment`),
      literal(`Localização de um repositório.`, 'pt'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}location`),
      namedNode(`${rdfs}comment`),
      literal(`Location of a repository.`, 'en'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}location`),
      namedNode(`${rdfs}comment`),
      literal(`Lokation eines Repositorys.`, 'de'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}location`),
      namedNode(`${rdfs}comment`),
      literal(`Umístění úložiště.`, 'cs'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}location`),
      namedNode(`${rdfs}comment`),
      literal(`lugar de un repositorio.`, 'es'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}location`),
      namedNode(`${rdfs}domain`),
      namedNode(`${doap}Repository`),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}location`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(doap),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}location`),
      namedNode(`${rdfs}label`),
      literal(`Repository Lokation`, 'de'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}location`),
      namedNode(`${rdfs}label`),
      literal(`emplacement du dépôt`, 'fr'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}location`),
      namedNode(`${rdfs}label`),
      literal(`localização do respositório`, 'pt'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}location`),
      namedNode(`${rdfs}label`),
      literal(`lugar del respositorio`, 'es'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}location`),
      namedNode(`${rdfs}label`),
      literal(`repository location`, 'en'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}location`),
      namedNode(`${rdfs}label`),
      literal(`umístění úložiště`, 'cs'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}mailing-list`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}mailing-list`),
      namedNode(`${rdfs}comment`),
      literal(`Domovská stránka nebo e–mailová adresa e–mailové diskuse.`, 'cs'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}mailing-list`),
      namedNode(`${rdfs}comment`),
      literal(`Homepage der Mailing Liste oder E-Mail Adresse.`, 'de'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}mailing-list`),
      namedNode(`${rdfs}comment`),
      literal(`Mailing list home page or email address.`, 'en'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}mailing-list`),
      namedNode(`${rdfs}comment`),
      literal(`Page web de la liste de diffusion, ou adresse de courriel.`, 'fr'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}mailing-list`),
      namedNode(`${rdfs}comment`),
      literal(`Página web da lista de distribuição de e-mail ou dos endereços.`, 'pt'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}mailing-list`),
      namedNode(`${rdfs}comment`),
      literal(`Página web de la lista de correo o dirección de correo.`, 'es'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}mailing-list`),
      namedNode(`${rdfs}domain`),
      namedNode(`${doap}Project`),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}mailing-list`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(doap),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}mailing-list`),
      namedNode(`${rdfs}label`),
      literal(`Mailing Liste`, 'de'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}mailing-list`),
      namedNode(`${rdfs}label`),
      literal(`e–mailová diskuse`, 'cs'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}mailing-list`),
      namedNode(`${rdfs}label`),
      literal(`lista de correo`, 'es'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}mailing-list`),
      namedNode(`${rdfs}label`),
      literal(`lista de distribuição de e-mail`, 'pt'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}mailing-list`),
      namedNode(`${rdfs}label`),
      literal(`liste de diffusion`, 'fr'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}mailing-list`),
      namedNode(`${rdfs}label`),
      literal(`mailing list`, 'en'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}mailing-list`),
      namedNode(`${rdfs}range`),
      namedNode(`${ns8}MailingList`),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}maintainer`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}maintainer`),
      namedNode(`${rdfs}comment`),
      literal(`Desarrollador principal de un proyecto, un líder de proyecto.`, 'es'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}maintainer`),
      namedNode(`${rdfs}comment`),
      literal(`Développeur principal d'un projet, un meneur du projet.`, 'fr'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}maintainer`),
      namedNode(`${rdfs}comment`),
      literal(`Hauptentwickler eines Projektes, der Projektleiter`, 'de'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}maintainer`),
      namedNode(`${rdfs}comment`),
      literal(`Maintainer of a project, a project leader.`, 'en'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}maintainer`),
      namedNode(`${rdfs}comment`),
      literal(`Programador principal de um projeto, um líder de projeto.`, 'pt'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}maintainer`),
      namedNode(`${rdfs}comment`),
      literal(`Správce projektu, vedoucí projektu.`, 'cs'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}maintainer`),
      namedNode(`${rdfs}domain`),
      namedNode(`${doap}Project`),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}maintainer`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(doap),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}maintainer`),
      namedNode(`${rdfs}label`),
      literal(`Projektverantwortlicher`, 'de'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}maintainer`),
      namedNode(`${rdfs}label`),
      literal(`desarrollador principal`, 'es'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}maintainer`),
      namedNode(`${rdfs}label`),
      literal(`développeur principal`, 'fr'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}maintainer`),
      namedNode(`${rdfs}label`),
      literal(`maintainer`, 'en'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}maintainer`),
      namedNode(`${rdfs}label`),
      literal(`programador principal`, 'pt'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}maintainer`),
      namedNode(`${rdfs}label`),
      literal(`správce`, 'cs'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}maintainer`),
      namedNode(`${rdfs}range`),
      namedNode(`${foaf}Person`),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}module`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}module`),
      namedNode(`${rdfs}comment`),
      literal(`Jméno modulu v CVS, BitKeeper nebo Arch úložišti.`, 'cs'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}module`),
      namedNode(`${rdfs}comment`),
      literal(`Modul-Name eines Subversion, CVS, BitKeeper oder Arch Repositorys.`, 'de'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}module`),
      namedNode(`${rdfs}comment`),
      literal(`Module name of a Subversion, CVS, BitKeeper or Arch repository.`, 'en'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}module`),
      namedNode(`${rdfs}comment`),
      literal(`Nom du module d'un dépôt Subversion, CVS, BitKeeper ou Arch.`, 'fr'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}module`),
      namedNode(`${rdfs}comment`),
      literal(`Nombre del módulo de un repositorio Subversion, CVS, BitKeeper o Arch.`, 'es'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}module`),
      namedNode(`${rdfs}comment`),
      literal(`Nome do módulo de um repositório Subversion, CVS, BitKeeper ou Arch.`, 'pt'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}module`),
      namedNode(`${rdfs}domain`),
      blankNodes[1],
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}module`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(doap),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}module`),
      namedNode(`${rdfs}label`),
      literal(`Modul`, 'de'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}module`),
      namedNode(`${rdfs}label`),
      literal(`modul`, 'cs'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}module`),
      namedNode(`${rdfs}label`),
      literal(`module`, 'en'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}module`),
      namedNode(`${rdfs}label`),
      literal(`module`, 'fr'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}module`),
      namedNode(`${rdfs}label`),
      literal(`módulo`, 'es'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}module`),
      namedNode(`${rdfs}label`),
      literal(`módulo`, 'pt'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}name`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}name`),
      namedNode(`${rdfs}comment`),
      literal(`A name of something.`, 'en'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}name`),
      namedNode(`${rdfs}comment`),
      literal(`Der Name von Irgendwas`, 'de'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}name`),
      namedNode(`${rdfs}comment`),
      literal(`El nombre de algo.`, 'es'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}name`),
      namedNode(`${rdfs}comment`),
      literal(`Jméno něčeho.`, 'cs'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}name`),
      namedNode(`${rdfs}comment`),
      literal(`Le nom de quelque chose.`, 'fr'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}name`),
      namedNode(`${rdfs}comment`),
      literal(`O nome de alguma coisa.`, 'pt'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}name`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(doap),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}name`),
      namedNode(`${rdfs}label`),
      literal(`Name`, 'de'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}name`),
      namedNode(`${rdfs}label`),
      literal(`jméno`, 'cs'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}name`),
      namedNode(`${rdfs}label`),
      literal(`name`, 'en'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}name`),
      namedNode(`${rdfs}label`),
      literal(`nom`, 'fr'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}name`),
      namedNode(`${rdfs}label`),
      literal(`nombre`, 'es'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}name`),
      namedNode(`${rdfs}label`),
      literal(`nome`, 'pt'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}name`),
      namedNode(`${rdfs}range`),
      namedNode(`${rdfs}Literal`),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}name`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${rdfs}label`),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}old-homepage`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}old-homepage`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}InverseFunctionalProperty`),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}old-homepage`),
      namedNode(`${rdfs}comment`),
      literal(`El URL de la antigua página de un proyecto,
		asociada con exactamente un proyecto.`, 'es'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}old-homepage`),
      namedNode(`${rdfs}comment`),
      literal(`L'URL d'une ancienne page web d'un
		projet, associée avec un unique projet.`, 'fr'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}old-homepage`),
      namedNode(`${rdfs}comment`),
      literal(`O URL antigo da página de um projeto,
		associada com exactamente um projeto.`, 'pt'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}old-homepage`),
      namedNode(`${rdfs}comment`),
      literal(`URL adresa předešlé domovské stránky projektu asociované s právě jedním projektem.`, 'cs'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}old-homepage`),
      namedNode(`${rdfs}comment`),
      literal(`URL der letzten Projekt-Homepage,
		verbunden mit genau einem Projekt.`, 'de'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}old-homepage`),
      namedNode(`${rdfs}comment`),
      literal(`URL of a project's past homepage,
		associated with exactly one project.`, 'en'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}old-homepage`),
      namedNode(`${rdfs}domain`),
      namedNode(`${doap}Project`),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}old-homepage`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(doap),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}old-homepage`),
      namedNode(`${rdfs}label`),
      literal(`Alte Homepage`, 'de'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}old-homepage`),
      namedNode(`${rdfs}label`),
      literal(`ancienne page web`, 'fr'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}old-homepage`),
      namedNode(`${rdfs}label`),
      literal(`old homepage`, 'en'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}old-homepage`),
      namedNode(`${rdfs}label`),
      literal(`página web antiga`, 'pt'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}old-homepage`),
      namedNode(`${rdfs}label`),
      literal(`página web antigua`, 'es'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}old-homepage`),
      namedNode(`${rdfs}label`),
      literal(`stará domovská stránka`, 'cs'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}old-homepage`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${foaf}homepage`),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}os`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}os`),
      namedNode(`${rdfs}comment`),
      literal(`Betriebssystem auf dem das Projekt eingesetzt werden kann. Diese Eigenschaft kann ausgelassen werden, wenn das Projekt nicht BS-spezifisch ist.`, 'de'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}os`),
      namedNode(`${rdfs}comment`),
      literal(`Operating system that a project is limited to.  Omit this property if the project is not OS-specific.`, 'en'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}os`),
      namedNode(`${rdfs}comment`),
      literal(`Operační systém, na jehož použití je projekt limitován. Vynechejte tuto vlastnost, pokud je projekt nezávislý na operačním systému.`, 'cs'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}os`),
      namedNode(`${rdfs}comment`),
      literal(`Sistema operativo a que o projeto está limitado. Omita esta propriedade se o projeto não é condicionado pelo SO usado.`, 'en'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}os`),
      namedNode(`${rdfs}comment`),
      literal(`Sistema opertivo al cuál está limitado el proyecto.  Omita esta propiedad si el proyecto no es específico
		de un sistema opertaivo en particular.`, 'es'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}os`),
      namedNode(`${rdfs}comment`),
      literal(`Système d'exploitation auquel est limité le projet. Omettez cette propriété si le
		projet n'est pas limité à un système d'exploitation.`, 'fr'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}os`),
      namedNode(`${rdfs}domain`),
      namedNode(`${doap}Project`),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}os`),
      namedNode(`${rdfs}domain`),
      namedNode(`${doap}Version`),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}os`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(doap),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}os`),
      namedNode(`${rdfs}label`),
      literal(`Betriebssystem`, 'de'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}os`),
      namedNode(`${rdfs}label`),
      literal(`operating system`, 'en'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}os`),
      namedNode(`${rdfs}label`),
      literal(`operační systém`, 'cs'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}os`),
      namedNode(`${rdfs}label`),
      literal(`sistema operativo`, 'es'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}os`),
      namedNode(`${rdfs}label`),
      literal(`sistema operativo`, 'pt'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}os`),
      namedNode(`${rdfs}label`),
      literal(`système d'exploitation`, 'fr'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}os`),
      namedNode(`${rdfs}range`),
      namedNode(`${rdfs}Literal`),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}platform`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}platform`),
      namedNode(`${rdfs}comment`),
      literal(`Indicador da plataforma do software (não específico a nenhum SO), ex.: Java, Firefox, ECMA CLR`, 'pt'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}platform`),
      namedNode(`${rdfs}comment`),
      literal(`Indicator of software platform (non-OS specific), e.g. Java, Firefox, ECMA CLR`, 'en'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}platform`),
      namedNode(`${rdfs}domain`),
      namedNode(`${doap}Project`),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}platform`),
      namedNode(`${rdfs}domain`),
      namedNode(`${doap}Version`),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}platform`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(doap),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}platform`),
      namedNode(`${rdfs}label`),
      literal(`plataforma`, 'pt'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}platform`),
      namedNode(`${rdfs}label`),
      literal(`platform`, 'en'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}platform`),
      namedNode(`${rdfs}range`),
      namedNode(`${rdfs}Literal`),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}programming-language`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}programming-language`),
      namedNode(`${rdfs}comment`),
      literal(`Langage de programmation avec lequel un projet est implémenté,
		ou avec lequel il est prévu de l'utiliser.`, 'fr'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}programming-language`),
      namedNode(`${rdfs}comment`),
      literal(`Lenguaje de programación en el que un proyecto es implementado o con el cuál pretende usarse.`, 'es'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}programming-language`),
      namedNode(`${rdfs}comment`),
      literal(`Linguagem de programação que o projeto usa ou é para ser utilizada.`, 'pt'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}programming-language`),
      namedNode(`${rdfs}comment`),
      literal(`Programmiersprache in der ein Projekt implementiert ist oder intendiert wird zu benutzen.`, 'de'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}programming-language`),
      namedNode(`${rdfs}comment`),
      literal(`Programming language a project is implemented in or intended for use with.`, 'en'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}programming-language`),
      namedNode(`${rdfs}comment`),
      literal(`Programovací jazyk, ve kterém je projekt implementován nebo pro který je zamýšlen k použití.`, 'cs'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}programming-language`),
      namedNode(`${rdfs}domain`),
      namedNode(`${doap}Project`),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}programming-language`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(doap),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}programming-language`),
      namedNode(`${rdfs}label`),
      literal(`Programmiersprache`, 'de'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}programming-language`),
      namedNode(`${rdfs}label`),
      literal(`langage de programmation`, 'fr'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}programming-language`),
      namedNode(`${rdfs}label`),
      literal(`lenguaje de programación`, 'es'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}programming-language`),
      namedNode(`${rdfs}label`),
      literal(`linguagem de programação`, 'pt'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}programming-language`),
      namedNode(`${rdfs}label`),
      literal(`programming language`, 'en'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}programming-language`),
      namedNode(`${rdfs}label`),
      literal(`programovací jazyk`, 'cs'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}programming-language`),
      namedNode(`${rdfs}range`),
      namedNode(`${rdfs}Literal`),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}release`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}release`),
      namedNode(`${rdfs}comment`),
      literal(`A project release.`, 'en'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}release`),
      namedNode(`${rdfs}comment`),
      literal(`A publicação de um projeto.`, 'pt'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}release`),
      namedNode(`${rdfs}comment`),
      literal(`Ein Release (Version) eines Projekts.`, 'de'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}release`),
      namedNode(`${rdfs}comment`),
      literal(`Relase (verze) projektu.`, 'cs'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}release`),
      namedNode(`${rdfs}comment`),
      literal(`Un release (versión) de un proyecto.`, 'es'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}release`),
      namedNode(`${rdfs}comment`),
      literal(`Une release (révision) d'un projet.`, 'fr'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}release`),
      namedNode(`${rdfs}domain`),
      namedNode(`${doap}Project`),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}release`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(doap),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}release`),
      namedNode(`${rdfs}label`),
      literal(`Release`, 'de'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}release`),
      namedNode(`${rdfs}label`),
      literal(`publicação`, 'pt'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}release`),
      namedNode(`${rdfs}label`),
      literal(`release`, 'cs'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}release`),
      namedNode(`${rdfs}label`),
      literal(`release`, 'en'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}release`),
      namedNode(`${rdfs}label`),
      literal(`release`, 'es'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}release`),
      namedNode(`${rdfs}label`),
      literal(`release`, 'fr'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}release`),
      namedNode(`${rdfs}range`),
      namedNode(`${doap}Version`),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}repository`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}repository`),
      namedNode(`${rdfs}comment`),
      literal(`Dépôt du code source.`, 'fr'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}repository`),
      namedNode(`${rdfs}comment`),
      literal(`Quellcode-Versionierungssystem.`, 'de'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}repository`),
      namedNode(`${rdfs}comment`),
      literal(`Repositorio del código fuente.`, 'es'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}repository`),
      namedNode(`${rdfs}comment`),
      literal(`Repositório do código fonte.`, 'pt'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}repository`),
      namedNode(`${rdfs}comment`),
      literal(`Source code repository.`, 'en'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}repository`),
      namedNode(`${rdfs}comment`),
      literal(`Úložiště zdrojových kódů.`, 'cs'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}repository`),
      namedNode(`${rdfs}domain`),
      namedNode(`${doap}Project`),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}repository`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(doap),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}repository`),
      namedNode(`${rdfs}label`),
      literal(`Repository`, 'de'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}repository`),
      namedNode(`${rdfs}label`),
      literal(`dépôt`, 'fr'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}repository`),
      namedNode(`${rdfs}label`),
      literal(`repositorio`, 'es'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}repository`),
      namedNode(`${rdfs}label`),
      literal(`repository`, 'en'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}repository`),
      namedNode(`${rdfs}label`),
      literal(`repositório`, 'pt'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}repository`),
      namedNode(`${rdfs}label`),
      literal(`úložiště`, 'cs'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}repository`),
      namedNode(`${rdfs}range`),
      namedNode(`${doap}Repository`),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}repository`),
      namedNode(`${owl}inverseOf`),
      namedNode(`${doap}repositoryOf`),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}repositoryOf`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}repositoryOf`),
      namedNode(`${rdfs}comment`),
      literal(`The project that uses a repository.`, 'en'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}repositoryOf`),
      namedNode(`${rdfs}domain`),
      namedNode(`${doap}Repository`),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}repositoryOf`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(doap),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}repositoryOf`),
      namedNode(`${rdfs}label`),
      literal(`repository of`, 'en'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}repositoryOf`),
      namedNode(`${rdfs}range`),
      namedNode(`${doap}Project`),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}repositoryOf`),
      namedNode(`${owl}inverseOf`),
      namedNode(`${doap}repository`),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}revision`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}revision`),
      namedNode(`${rdfs}comment`),
      literal(`Identifiant de révision d'une release du programme.`, 'fr'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}revision`),
      namedNode(`${rdfs}comment`),
      literal(`Identificador do lançamento da revisão do software.`, 'pt'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}revision`),
      namedNode(`${rdfs}comment`),
      literal(`Identifikátor zpřístupněné revize softwaru.`, 'cs'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}revision`),
      namedNode(`${rdfs}comment`),
      literal(`Indentificador de la versión de un release de software.`, 'es'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}revision`),
      namedNode(`${rdfs}comment`),
      literal(`Revision identifier of a software release.`, 'en'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}revision`),
      namedNode(`${rdfs}comment`),
      literal(`Versionsidentifikator eines Software-Releases.`, 'de'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}revision`),
      namedNode(`${rdfs}domain`),
      namedNode(`${doap}Version`),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}revision`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(doap),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}revision`),
      namedNode(`${rdfs}label`),
      literal(`Version`, 'de'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}revision`),
      namedNode(`${rdfs}label`),
      literal(`revision`, 'en'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}revision`),
      namedNode(`${rdfs}label`),
      literal(`revisão`, 'pt'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}revision`),
      namedNode(`${rdfs}label`),
      literal(`révision`, 'fr'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}revision`),
      namedNode(`${rdfs}label`),
      literal(`versión`, 'es'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}revision`),
      namedNode(`${rdfs}label`),
      literal(`verze`, 'cs'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}revision`),
      namedNode(`${rdfs}range`),
      namedNode(`${rdfs}Literal`),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}screenshots`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}screenshots`),
      namedNode(`${rdfs}comment`),
      literal(`Page web avec des captures d'écran du projet.`, 'fr'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}screenshots`),
      namedNode(`${rdfs}comment`),
      literal(`Página web com as capturas de ecrãn do projeto.`, 'pt'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}screenshots`),
      namedNode(`${rdfs}comment`),
      literal(`Página web con capturas de pantalla del proyecto.`, 'es'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}screenshots`),
      namedNode(`${rdfs}comment`),
      literal(`Web page with screenshots of project.`, 'en'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}screenshots`),
      namedNode(`${rdfs}comment`),
      literal(`Web-Seite mit Screenshots eines Projektes.`, 'de'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}screenshots`),
      namedNode(`${rdfs}comment`),
      literal(`Webová stránka projektu se snímky obrazovky.`, 'cs'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}screenshots`),
      namedNode(`${rdfs}domain`),
      namedNode(`${doap}Project`),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}screenshots`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(doap),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}screenshots`),
      namedNode(`${rdfs}label`),
      literal(`Screenshots`, 'de'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}screenshots`),
      namedNode(`${rdfs}label`),
      literal(`capturas de ecrãs`, 'pt'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}screenshots`),
      namedNode(`${rdfs}label`),
      literal(`capturas de pantalla`, 'es'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}screenshots`),
      namedNode(`${rdfs}label`),
      literal(`captures d'écran`, 'fr'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}screenshots`),
      namedNode(`${rdfs}label`),
      literal(`screenshots`, 'en'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}screenshots`),
      namedNode(`${rdfs}label`),
      literal(`snímek obrazovky`, 'cs'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}service-endpoint`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}service-endpoint`),
      namedNode(`${rdfs}comment`),
      literal(`The URI of a web service endpoint where software as a service may be accessed`, 'en'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}service-endpoint`),
      namedNode(`${rdfs}domain`),
      namedNode(`${doap}Project`),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}service-endpoint`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(doap),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}service-endpoint`),
      namedNode(`${rdfs}label`),
      literal(`service endpoint`, 'en'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}service-endpoint`),
      namedNode(`${rdfs}range`),
      namedNode(`${rdfs}Resource`),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}shortdesc`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}shortdesc`),
      namedNode(`${rdfs}comment`),
      literal(`Descripción corta (8 o 9 palabras) en texto plano de un proyecto.`, 'es'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}shortdesc`),
      namedNode(`${rdfs}comment`),
      literal(`Descrição curta (com 8 ou 9 palavras) de um projeto em texto apenas.`, 'pt'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}shortdesc`),
      namedNode(`${rdfs}comment`),
      literal(`Krátký (8 nebo 9 slov) čistě textový popis projektu.`, 'cs'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}shortdesc`),
      namedNode(`${rdfs}comment`),
      literal(`Kurzbeschreibung (8 oder 9 Wörter) eines Projects als einfacher Text.`, 'de'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}shortdesc`),
      namedNode(`${rdfs}comment`),
      literal(`Short (8 or 9 words) plain text description of a project.`, 'en'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}shortdesc`),
      namedNode(`${rdfs}comment`),
      literal(`Texte descriptif concis (8 ou 9 mots) d'un projet.`, 'fr'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}shortdesc`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(doap),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}shortdesc`),
      namedNode(`${rdfs}label`),
      literal(`Kurzbeschreibung`, 'de'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}shortdesc`),
      namedNode(`${rdfs}label`),
      literal(`descripción corta`, 'es'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}shortdesc`),
      namedNode(`${rdfs}label`),
      literal(`description courte`, 'fr'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}shortdesc`),
      namedNode(`${rdfs}label`),
      literal(`descrição curta`, 'pt'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}shortdesc`),
      namedNode(`${rdfs}label`),
      literal(`krátký popis`, 'cs'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}shortdesc`),
      namedNode(`${rdfs}label`),
      literal(`short description`, 'en'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}shortdesc`),
      namedNode(`${rdfs}range`),
      namedNode(`${rdfs}Literal`),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}support-forum`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}support-forum`),
      namedNode(`${rdfs}comment`),
      literal(`A forum or community that supports this project.`, 'en'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}support-forum`),
      namedNode(`${rdfs}domain`),
      namedNode(`${doap}Project`),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}support-forum`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(doap),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}support-forum`),
      namedNode(`${rdfs}label`),
      literal(`supporting forum`, 'en'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}support-forum`),
      namedNode(`${rdfs}range`),
      namedNode(`${sioc}Container`),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}tester`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}tester`),
      namedNode(`${rdfs}comment`),
      literal(`A tester or other quality control contributor.`, 'en'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}tester`),
      namedNode(`${rdfs}comment`),
      literal(`Ein Tester oder anderer Mitarbeiter der Qualitätskontrolle.`, 'de'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}tester`),
      namedNode(`${rdfs}comment`),
      literal(`Tester nebo jiný spoluautor kontrolující kvalitu.`, 'cs'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}tester`),
      namedNode(`${rdfs}comment`),
      literal(`Um controlador ou outro contribuidor para o controlo de qualidade.`, 'pt'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}tester`),
      namedNode(`${rdfs}comment`),
      literal(`Un tester u otro proveedor de control de calidad.`, 'es'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}tester`),
      namedNode(`${rdfs}comment`),
      literal(`Un testeur ou un collaborateur au contrôle qualité.`, 'fr'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}tester`),
      namedNode(`${rdfs}domain`),
      namedNode(`${doap}Project`),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}tester`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(doap),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}tester`),
      namedNode(`${rdfs}label`),
      literal(`Tester`, 'de'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}tester`),
      namedNode(`${rdfs}label`),
      literal(`controlador`, 'pt'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}tester`),
      namedNode(`${rdfs}label`),
      literal(`tester`, 'cs'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}tester`),
      namedNode(`${rdfs}label`),
      literal(`tester`, 'en'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}tester`),
      namedNode(`${rdfs}label`),
      literal(`tester`, 'es'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}tester`),
      namedNode(`${rdfs}label`),
      literal(`testeur`, 'fr'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}tester`),
      namedNode(`${rdfs}range`),
      namedNode(`${foaf}Person`),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}translator`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}translator`),
      namedNode(`${rdfs}comment`),
      literal(`Collaborateur à la traduction du projet.`, 'fr'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}translator`),
      namedNode(`${rdfs}comment`),
      literal(`Contribuidor das traduções para o projeto.`, 'pt'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}translator`),
      namedNode(`${rdfs}comment`),
      literal(`Contributor of translations to the project.`, 'en'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}translator`),
      namedNode(`${rdfs}comment`),
      literal(`Mitarbeiter an den Übersetzungen eines Projektes.`, 'de'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}translator`),
      namedNode(`${rdfs}comment`),
      literal(`Proveedor de traducciones al proyecto.`, 'es'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}translator`),
      namedNode(`${rdfs}comment`),
      literal(`Spoluautor překladu projektu.`, 'cs'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}translator`),
      namedNode(`${rdfs}domain`),
      namedNode(`${doap}Project`),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}translator`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(doap),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}translator`),
      namedNode(`${rdfs}label`),
      literal(`překladatel`, 'cs'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}translator`),
      namedNode(`${rdfs}label`),
      literal(`traducteur`, 'fr'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}translator`),
      namedNode(`${rdfs}label`),
      literal(`traductor`, 'es'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}translator`),
      namedNode(`${rdfs}label`),
      literal(`tradutor`, 'pt'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}translator`),
      namedNode(`${rdfs}label`),
      literal(`translator`, 'en'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}translator`),
      namedNode(`${rdfs}label`),
      literal(`Übersetzer`, 'de'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}translator`),
      namedNode(`${rdfs}range`),
      namedNode(`${foaf}Person`),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}vendor`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}vendor`),
      namedNode(`${rdfs}comment`),
      literal(`Vendor organization: commercial, free or otherwise`, 'en'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}vendor`),
      namedNode(`${rdfs}domain`),
      namedNode(`${doap}Project`),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}vendor`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(doap),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}vendor`),
      namedNode(`${rdfs}label`),
      literal(`vendor`, 'en'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}vendor`),
      namedNode(`${rdfs}range`),
      namedNode(`${foaf}Organization`),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}wiki`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}wiki`),
      namedNode(`${rdfs}comment`),
      literal(`L'URL du Wiki pour la discussion collaborative sur le projet.`, 'fr'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}wiki`),
      namedNode(`${rdfs}comment`),
      literal(`URL adresa wiki projektu pro společné diskuse.`, 'cs'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}wiki`),
      namedNode(`${rdfs}comment`),
      literal(`URL da Wiki para discussão em grupo do projeto.`, 'pt'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}wiki`),
      namedNode(`${rdfs}comment`),
      literal(`URL del Wiki para discusión colaborativa del proyecto.`, 'es'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}wiki`),
      namedNode(`${rdfs}comment`),
      literal(`URL of Wiki for collaborative discussion of project.`, 'en'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}wiki`),
      namedNode(`${rdfs}comment`),
      literal(`Wiki-URL für die kollaborative Dikussion eines Projektes.`, 'de'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}wiki`),
      namedNode(`${rdfs}domain`),
      namedNode(`${doap}Project`),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}wiki`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(doap),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}wiki`),
      namedNode(`${rdfs}label`),
      literal(`Wiki`, 'de'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}wiki`),
      namedNode(`${rdfs}label`),
      literal(`wiki`, 'cs'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}wiki`),
      namedNode(`${rdfs}label`),
      literal(`wiki`, 'en'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}wiki`),
      namedNode(`${rdfs}label`),
      literal(`wiki`, 'es'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}wiki`),
      namedNode(`${rdfs}label`),
      literal(`wiki`, 'fr'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}wiki`),
      namedNode(`${rdfs}label`),
      literal(`wiki`, 'pt'),
      namedNode(doap)
    ),
    quad(
      namedNode(`${doap}wiki`),
      namedNode(`${rdfs}range`),
      namedNode(`${ns8}Wiki`),
      namedNode(doap)
    ),
    quad(
      blankNodes[0],
      namedNode(`${rdf}type`),
      namedNode(`${foaf}Person`),
      namedNode(doap)
    ),
    quad(
      blankNodes[0],
      namedNode(`${foaf}mbox`),
      namedNode('mailto:edd@usefulinc.com'),
      namedNode(doap)
    ),
    quad(
      blankNodes[0],
      namedNode(`${foaf}name`),
      literal(`Edd Wilder-James`),
      namedNode(doap)
    ),
    quad(
      blankNodes[1],
      namedNode(`${rdf}type`),
      namedNode(`${owl}Class`),
      namedNode(doap)
    ),
    quad(
      blankNodes[1],
      namedNode(`${owl}unionOf`),
      blankNodes[2],
      namedNode(doap)
    ),
    quad(
      blankNodes[3],
      namedNode(`${rdf}first`),
      namedNode(`${doap}ArchRepository`),
      namedNode(doap)
    ),
    quad(
      blankNodes[3],
      namedNode(`${rdf}rest`),
      blankNodes[4],
      namedNode(doap)
    ),
    quad(
      blankNodes[4],
      namedNode(`${rdf}first`),
      namedNode(`${doap}BKRepository`),
      namedNode(doap)
    ),
    quad(
      blankNodes[4],
      namedNode(`${rdf}rest`),
      namedNode(`${rdf}nil`),
      namedNode(doap)
    ),
    quad(
      blankNodes[2],
      namedNode(`${rdf}first`),
      namedNode(`${doap}CVSRepository`),
      namedNode(doap)
    ),
    quad(
      blankNodes[2],
      namedNode(`${rdf}rest`),
      blankNodes[3],
      namedNode(doap)
    ),

  ]
}
