/* This file was automatically generated. Do not edit by hand. */

const {
  dcat,
  rdf,
  rdfs,
  owl,
  ns5,
  skos,
  dcmitype,
  dcterms,
  ns9,
  vcard,
  foaf,
  xsd,
  schema,
  ns14,
  ns15,
  ns16,
  ns17,
  ns18,
  ns19,
  ns20,
  ns21,
  ns22,
  ns23,
  prov,
  ns25,
  ns26,
  ns27,
  ns28,
  ns29,
  ns30,
  ns31,
  ns32,
  ns33,
  ns34,
  ns35,
  ns36,
  ns37
} = {
  'dcat': 'http://www.w3.org/ns/dcat#',
  'rdf': 'http://www.w3.org/1999/02/22-rdf-syntax-ns#',
  'rdfs': 'http://www.w3.org/2000/01/rdf-schema#',
  'owl': 'http://www.w3.org/2002/07/owl#',
  'ns5': 'http://www.w3.org/TR/vocab-dcat/',
  'skos': 'http://www.w3.org/2004/02/skos/core#',
  'dcmitype': 'http://purl.org/dc/dcmitype/',
  'dcterms': 'http://purl.org/dc/terms/',
  'ns9': 'https://www.w3.org/TR/vocab-dcat-2/',
  'vcard': 'http://www.w3.org/2006/vcard/ns#',
  'foaf': 'http://xmlns.com/foaf/0.1/',
  'xsd': 'http://www.w3.org/2001/XMLSchema#',
  'schema': 'http://schema.org/',
  'ns14': 'http://www.w3.org/ns/',
  'ns15': 'https://creativecommons.org/licenses/by/4.0/',
  'ns16': 'http://www.w3.org/2004/02/skos/',
  'ns17': 'http://www.w3.org/ns/prov-o#',
  'ns18': 'http://www.w3.org/2011/gld/',
  'ns19': 'https://jakub.klímek.com/#',
  'ns20': 'https://jakub.klímek.com/',
  'ns21': 'http://',
  'ns22': 'http://www.eurecom.fr/~atemezin/',
  'ns23': 'http://ec.europa.eu/dgs/informatics/',
  'prov': 'http://www.w3.org/ns/prov#',
  'ns25': 'http://www.w3.org/data#',
  'ns26': 'http://philarcher.org/foaf.rdf#',
  'ns27': 'http://www.w3.org/People/all#',
  'ns28': 'http://www.asahi-net.or.jp/~ax2s-kmtn/',
  'ns29': 'https://orcid.org/',
  'ns30': 'http://www.imati.cnr.it/index.php/people/8-curricula/',
  'ns31': 'https://w3id.org/people/ralbertoni/',
  'ns32': 'http://makxdekkers.com/makxdekkers.rdf#',
  'ns33': 'http://makxdekkers.com/',
  'ns34': 'http://people.csiro.au/',
  'ns35': 'https://',
  'ns36': 'http://www.andrea-perego.name/foaf/#',
  'ns37': 'http://fadmaa.me/'
}

export default ({ blankNode, literal, namedNode, quad }: import('rdf-js').DataFactory): import('rdf-js').Quad[] => {
  const blankNodes: import('rdf-js').BlankNode[] = []
  for (let i = 0; i < 31; i++) {
    blankNodes.push(blankNode())
  }

  return [
    quad(
      namedNode(`${dcat}Catalog`),
      namedNode(`${rdf}type`),
      namedNode(`${rdfs}Class`),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Catalog`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}Class`),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Catalog`),
      namedNode(`${rdfs}comment`),
      literal(`A curated collection of metadata about resources (e.g., datasets and data services in the context of a data catalog).`, 'en'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Catalog`),
      namedNode(`${rdfs}comment`),
      literal(`En udvalgt og arrangeret samling af metadata om ressourcer (fx datasæt og datatjenester i kontekst af et datakatalog). `, 'da'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Catalog`),
      namedNode(`${rdfs}comment`),
      literal(`Una colección curada de metadatos sobre recursos (por ejemplo, conjuntos de datos y servicios de datos en el contexto de un catálogo de datos).`, 'es'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Catalog`),
      namedNode(`${rdfs}comment`),
      literal(`Una raccolta curata di metadati sulle risorse (ad es. sui dataset e relativi servizi nel contesto di cataloghi di dati).`, 'it'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Catalog`),
      namedNode(`${rdfs}comment`),
      literal(`Une collection élaborée de métadonnées sur les jeux de données`, 'fr'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Catalog`),
      namedNode(`${rdfs}comment`),
      literal(`Řízená kolekce metadat o datových sadách a datových službách`, 'cs'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Catalog`),
      namedNode(`${rdfs}comment`),
      literal(`Μια επιμελημένη συλλογή μεταδεδομένων περί συνόλων δεδομένων`, 'el'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Catalog`),
      namedNode(`${rdfs}comment`),
      literal(`مجموعة من توصيفات قوائم البيانات`, 'ar'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Catalog`),
      namedNode(`${rdfs}comment`),
      literal(`データ・カタログは、データセットに関するキュレートされたメタデータの集合です。`, 'ja'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Catalog`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(ns5),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Catalog`),
      namedNode(`${rdfs}label`),
      literal(`Catalog`, 'en'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Catalog`),
      namedNode(`${rdfs}label`),
      literal(`Catalogo`, 'it'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Catalog`),
      namedNode(`${rdfs}label`),
      literal(`Catalogue`, 'fr'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Catalog`),
      namedNode(`${rdfs}label`),
      literal(`Catálogo`, 'es'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Catalog`),
      namedNode(`${rdfs}label`),
      literal(`Katalog`, 'cs'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Catalog`),
      namedNode(`${rdfs}label`),
      literal(`Katalog`, 'da'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Catalog`),
      namedNode(`${rdfs}label`),
      literal(`Κατάλογος`, 'el'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Catalog`),
      namedNode(`${rdfs}label`),
      literal(`فهرس قوائم البيانات`, 'ar'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Catalog`),
      namedNode(`${rdfs}label`),
      literal(`カタログ`, 'ja'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Catalog`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${dcat}Dataset`),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Catalog`),
      namedNode(`${skos}definition`),
      literal(`A curated collection of metadata about resources (e.g., datasets and data services in the context of a data catalog).`, 'en'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Catalog`),
      namedNode(`${skos}definition`),
      literal(`En samling af metadata om ressourcer (fx datasæt og datatjenester i kontekst af et datakatalog).`, 'da'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Catalog`),
      namedNode(`${skos}definition`),
      literal(`Una colección curada de metadatos sobre recursos (por ejemplo, conjuntos de datos y servicios de datos en el contexto de un catálogo de datos).`, 'es'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Catalog`),
      namedNode(`${skos}definition`),
      literal(`Una raccolta curata di metadati sulle risorse (ad es. sui dataset e relativi servizi nel contesto di cataloghi di dati).`, 'it'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Catalog`),
      namedNode(`${skos}definition`),
      literal(`Une collection élaborée de métadonnées sur les jeux de données.`, 'fr'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Catalog`),
      namedNode(`${skos}definition`),
      literal(`Řízená kolekce metadat o datových sadách a datových službách.`, 'cs'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Catalog`),
      namedNode(`${skos}definition`),
      literal(`Μια επιμελημένη συλλογή μεταδεδομένων περί συνόλων δεδομένων.`, 'el'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Catalog`),
      namedNode(`${skos}definition`),
      literal(`مجموعة من توصيفات قوائم البيانات`, 'ar'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Catalog`),
      namedNode(`${skos}definition`),
      literal(`データ・カタログは、データセットに関するキュレートされたメタデータの集合です。`, 'ja'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Catalog`),
      namedNode(`${skos}editorialNote`),
      literal(`English, Italian, Spanish definitions updated in this revision. Multilingual text not yet updated.`, 'en'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Catalog`),
      namedNode(`${skos}scopeNote`),
      literal(`A web-based data catalog is typically represented as a single instance of this class.`, 'en'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Catalog`),
      namedNode(`${skos}scopeNote`),
      literal(`Et webbaseret datakatalog repræsenteres typisk ved en enkelt instans af denne klasse.`, 'da'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Catalog`),
      namedNode(`${skos}scopeNote`),
      literal(`Normalmente, un catalogo di dati nel web viene rappresentato come una singola istanza di questa classe.`, 'it'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Catalog`),
      namedNode(`${skos}scopeNote`),
      literal(`Normalmente, un catálogo de datos disponible en la web se representa como una única instancia de esta clase.`, 'es'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Catalog`),
      namedNode(`${skos}scopeNote`),
      literal(`Webový datový katalog je typicky reprezentován jako jedna instance této třídy.`, 'cs'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Catalog`),
      namedNode(`${skos}scopeNote`),
      literal(`Συνήθως, ένας κατάλογος δεδομένων στον Παγκόσμιο Ιστό αναπαρίσταται ως ένα στιγμιότυπο αυτής της κλάσης.`, 'el'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Catalog`),
      namedNode(`${skos}scopeNote`),
      literal(`通常、ウェブ・ベースのデータ・カタログは、このクラスの1つのインスタンスとして表わされます。`, 'ja'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}CatalogRecord`),
      namedNode(`${rdf}type`),
      namedNode(`${rdfs}Class`),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}CatalogRecord`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}Class`),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}CatalogRecord`),
      namedNode(`${rdfs}comment`),
      literal(`1つのデータセットを記述したデータ・カタログ内のレコード。`, 'ja'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}CatalogRecord`),
      namedNode(`${rdfs}comment`),
      literal(`A record in a data catalog, describing the registration of a single dataset or data service.`, 'en'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}CatalogRecord`),
      namedNode(`${rdfs}comment`),
      literal(`En post i et datakatalog der beskriver registreringen af et enkelt datasæt eller en datatjeneste.`, 'da'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}CatalogRecord`),
      namedNode(`${rdfs}comment`),
      literal(`Un record in un catalogo di dati che descrive un singolo dataset o servizio di dati.`, 'it'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}CatalogRecord`),
      namedNode(`${rdfs}comment`),
      literal(`Un registre du catalogue ou une entrée du catalogue, décrivant un seul jeu de données.`, 'fr'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}CatalogRecord`),
      namedNode(`${rdfs}comment`),
      literal(`Un registro en un catálogo de datos que describe un solo conjunto de datos o un servicio de datos.`, 'es'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}CatalogRecord`),
      namedNode(`${rdfs}comment`),
      literal(`Záznam v datovém katalogu popisující jednu datovou sadu či datovou službu.`, 'cs'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}CatalogRecord`),
      namedNode(`${rdfs}comment`),
      literal(`Μία καταγραφή ενός καταλόγου, η οποία περιγράφει ένα συγκεκριμένο σύνολο δεδομένων.`, 'el'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}CatalogRecord`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(ns5),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}CatalogRecord`),
      namedNode(`${rdfs}label`),
      literal(`Catalog Record`, 'en'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}CatalogRecord`),
      namedNode(`${rdfs}label`),
      literal(`Katalogizační záznam`, 'cs'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}CatalogRecord`),
      namedNode(`${rdfs}label`),
      literal(`Katalogpost`, 'da'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}CatalogRecord`),
      namedNode(`${rdfs}label`),
      literal(`Record di catalogo`, 'it'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}CatalogRecord`),
      namedNode(`${rdfs}label`),
      literal(`Registre du catalogue`, 'fr'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}CatalogRecord`),
      namedNode(`${rdfs}label`),
      literal(`Registro del catálogo`, 'es'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}CatalogRecord`),
      namedNode(`${rdfs}label`),
      literal(`Καταγραφή καταλόγου`, 'el'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}CatalogRecord`),
      namedNode(`${rdfs}label`),
      literal(`سجل`, 'ar'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}CatalogRecord`),
      namedNode(`${rdfs}label`),
      literal(`カタログ・レコード`, 'ja'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}CatalogRecord`),
      namedNode(`${rdfs}subClassOf`),
      blankNodes[0],
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}CatalogRecord`),
      namedNode(`${rdfs}subClassOf`),
      blankNodes[1],
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}CatalogRecord`),
      namedNode(`${skos}definition`),
      literal(`1つのデータセットを記述したデータ・カタログ内のレコード。`, 'ja'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}CatalogRecord`),
      namedNode(`${skos}definition`),
      literal(`A record in a data catalog, describing the registration of a single dataset or data service.`, 'en'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}CatalogRecord`),
      namedNode(`${skos}definition`),
      literal(`En post i et datakatalog der beskriver registreringen af et enkelt datasæt eller en datatjeneste.`, 'da'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}CatalogRecord`),
      namedNode(`${skos}definition`),
      literal(`Un record in un catalogo di dati che descrive un singolo dataset o servizio di dati.`, 'it'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}CatalogRecord`),
      namedNode(`${skos}definition`),
      literal(`Un registre du catalogue ou une entrée du catalogue, décrivant un seul jeu de données.`, 'fr'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}CatalogRecord`),
      namedNode(`${skos}definition`),
      literal(`Un registro en un catálogo de datos que describe un solo conjunto de datos o un servicio de datos.`, 'es'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}CatalogRecord`),
      namedNode(`${skos}definition`),
      literal(`Záznam v datovém katalogu popisující jednu datovou sadu či datovou službu.`, 'cs'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}CatalogRecord`),
      namedNode(`${skos}definition`),
      literal(`Μία καταγραφή ενός καταλόγου, η οποία περιγράφει ένα συγκεκριμένο σύνολο δεδομένων.`, 'el'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}CatalogRecord`),
      namedNode(`${skos}editorialNote`),
      literal(`English definition updated in this revision. Multilingual text not yet updated except the Spanish one and the Czech one and Italian one.`, 'en'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}CatalogRecord`),
      namedNode(`${skos}scopeNote`),
      literal(`C'est une classe facultative et tous les catalogues ne l'utiliseront pas. Cette classe existe pour les catalogues	ayant une distinction entre les métadonnées sur le jeu de données et les métadonnées sur une entrée du jeu de données dans le catalogue.`, 'fr'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}CatalogRecord`),
      namedNode(`${skos}scopeNote`),
      literal(`Denne klasse er valgfri og ikke alle kataloger vil anvende denne klasse. Den kan anvendes i de kataloger hvor der skelnes mellem metadata om datasættet eller datatjenesten og metadata om selve posten til registreringen af datasættet eller datatjenesten i kataloget. Udgivelsesdatoen for datasættet afspejler for eksempel den dato hvor informationerne oprindeligt blev gjort tilgængelige af udgiveren, hvorimod udgivelsesdatoen for katalogposten er den dato hvor datasættet blev føjet til kataloget. I de tilfælde hvor de to datoer er forskellige eller hvor blot sidstnævnte er kendt, bør udgivelsesdatoen kun angives for katalogposten. Bemærk at W3Cs PROV ontologi gør til muligt at tilføje yderligere proveniensoplysninger eksempelvis om processen eller aktøren involveret i en given ændring af datasættet.`, 'da'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}CatalogRecord`),
      namedNode(`${skos}scopeNote`),
      literal(`Esta clase es opcional y no todos los catálogos la utilizarán. Esta clase existe para catálogos que hacen una distinción entre los metadatos acerca de un conjunto de datos o un servicio de datos y los metadatos acerca de una entrada en ese conjunto de datos en el catálogo. Por ejemplo, la propiedad sobre la fecha de la publicación de los datos refleja la fecha en que la información fue originalmente publicada, mientras que la fecha de publicación del registro del catálogo es la fecha en que los datos se agregaron al mismo. En caso en que ambas fechas fueran diferentes, o en que sólo la fecha de publicación del registro del catálogo estuviera disponible, sólo debe especificarse en el registro del catálogo. Tengan en cuenta que la ontología PROV de W3C permite describir otra información sobre la proveniencia de los datos, como por ejemplo detalles del proceso y de los agentes involucrados en algún cambio específico a los datos.`, 'es'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}CatalogRecord`),
      namedNode(`${skos}scopeNote`),
      literal(`Questa classe è opzionale e non tutti i cataloghi la utilizzeranno. Esiste per cataloghi in cui si opera una distinzione tra i metadati relativi al dataset ed i metadati relativi alla gestione del dataset nel catalogo. Ad esempio, la  proprietà per indicare la data di pubblicazione del dataset rifletterà la data in cui l'informazione è stata originariamente messa a disposizione dalla casa editrice, mentre la data di pubblicazione per il record nel catalogo rifletterà la data in cui il dataset è stato aggiunto al catalogo. Nei casi dove solo quest'ultima sia nota, si utilizzerà esclusivamente la data di  pubblicazione relativa al record del catalogo. Si noti che l'Ontologia W3C PROV permette di descrivere ulteriori informazioni sulla provenienza, quali i dettagli del processo, la procedura e l'agente coinvolto in una particolare modifica di un dataset.`, 'it'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}CatalogRecord`),
      namedNode(`${skos}scopeNote`),
      literal(`Tato třída je volitelná a ne všechny katalogy ji využijí. Existuje pro katalogy, ve kterých se rozlišují metadata datové sady či datové služby a metadata o záznamu o datové sadě či datové službě v katalogu. Například datum publikace datové sady odráží datum, kdy byla datová sada původně zveřejněna poskytovatelem dat, zatímco datum publikace katalogizačního záznamu je datum zanesení datové sady do katalogu. V případech kdy se obě data liší, nebo je známo jen to druhé, by mělo být specifikováno jen datum publikace katalogizačního záznamu. Všimněte si, že ontologie W3C PROV umožňuje popsat další informace o původu jako například podrobnosti o procesu konkrétní změny datové sady a jeho účastnících.`, 'cs'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}CatalogRecord`),
      namedNode(`${skos}scopeNote`),
      literal(`This class is optional and not all catalogs will use it. It exists for catalogs where a distinction is made between metadata about a dataset or data service and metadata about the entry for the dataset or data service in the catalog. For example, the publication date property of the dataset reflects the date when the information was originally made available by the publishing agency, while the publication date of the catalog record is the date when the dataset was added to the catalog. In cases where both dates differ, or where only the latter is known, the publication date should only be specified for the catalog record. Notice that the W3C PROV Ontology allows describing further provenance information such as the details of the process and the agent involved in a particular change to a dataset.`, 'en'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}CatalogRecord`),
      namedNode(`${skos}scopeNote`),
      literal(`Αυτή η κλάση είναι προαιρετική και δεν χρησιμοποιείται από όλους τους καταλόγους. Υπάρχει για τις περιπτώσεις καταλόγων όπου γίνεται διαχωρισμός μεταξύ των μεταδεδομένων για το σύνολο των δεδομένων και των μεταδεδομένων για την καταγραφή του συνόλου δεδομένων εντός του καταλόγου. Για παράδειγμα, η ιδιότητα της ημερομηνίας δημοσίευσης του συνόλου δεδομένων δείχνει την ημερομηνία κατά την οποία οι πληροφορίες έγιναν διαθέσιμες από τον φορέα δημοσίευσης, ενώ η ημερομηνία δημοσίευσης της καταγραφής του καταλόγου δείχνει την ημερομηνία που το σύνολο δεδομένων προστέθηκε στον κατάλογο. Σε περιπτώσεις που οι δύο ημερομηνίες διαφέρουν, ή που μόνο η τελευταία είναι γνωστή, η ημερομηνία δημοσίευσης θα πρέπει να δίνεται για την καταγραφή του καταλόγου. Να σημειωθεί πως η οντολογία W3C PROV επιτρέπει την περιγραφή επιπλέον πληροφοριών ιστορικού όπως λεπτομέρειες για τη διαδικασία και τον δράστη που εμπλέκονται σε μία συγκεκριμένη αλλαγή εντός του συνόλου δεδομένων.`, 'el'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}CatalogRecord`),
      namedNode(`${skos}scopeNote`),
      literal(`このクラスはオプションで、すべてのカタログがそれを用いるとは限りません。これは、データセットに関するメタデータとカタログ内のデータセットのエントリーに関するメタデータとで区別が行われるカタログのために存在しています。例えば、データセットの公開日プロパティーは、公開機関が情報を最初に利用可能とした日付を示しますが、カタログ・レコードの公開日は、データセットがカタログに追加された日付です。両方の日付が異っていたり、後者だけが分かっている場合は、カタログ・レコードに対してのみ公開日を指定すべきです。W3CのPROVオントロジー[prov-o]を用いれば、データセットに対する特定の変更に関連するプロセスやエージェントの詳細などの、さらに詳しい来歴情報の記述が可能となることに注意してください。`, 'ja'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}DataService`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}Class`),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}DataService`),
      namedNode(`${rdfs}comment`),
      literal(`A site or end-point providing operations related to the discovery of, access to, or processing functions on, data or related resources.`, 'en'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}DataService`),
      namedNode(`${rdfs}comment`),
      literal(`Et websted eller endpoint der udstiller operationer relateret til opdagelse af, adgang til eller behandlende funktioner på data eller relaterede ressourcer.`, 'da'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}DataService`),
      namedNode(`${rdfs}comment`),
      literal(`Umístění či přístupový bod poskytující operace související s hledáním, přistupem k, či výkonem funkcí na datech či souvisejících zdrojích.`, 'cs'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}DataService`),
      namedNode(`${rdfs}comment`),
      literal(`Un sitio o end-point que provee operaciones relacionadas a funciones de descubrimiento, acceso, o procesamiento de datos o recursos relacionados.`, 'es'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}DataService`),
      namedNode(`${rdfs}comment`),
      literal(`Un sito o end-point che fornisce operazioni relative alla scoperta, all'accesso o all'elaborazione di funzioni su dati o risorse correlate.`, 'it'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}DataService`),
      namedNode(`${rdfs}label`),
      literal(`Data service`, 'en'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}DataService`),
      namedNode(`${rdfs}label`),
      literal(`Datatjeneste`, 'da'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}DataService`),
      namedNode(`${rdfs}label`),
      literal(`Servicio de datos`, 'es'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}DataService`),
      namedNode(`${rdfs}label`),
      literal(`Servizio di dati`, 'it'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}DataService`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${dcmitype}Service`),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}DataService`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${dcat}Resource`),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}DataService`),
      namedNode(`${skos}altLabel`),
      literal(`Dataservice`, 'da'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}DataService`),
      namedNode(`${skos}changeNote`),
      literal(`New class added in DCAT 2.0.`, 'en'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}DataService`),
      namedNode(`${skos}changeNote`),
      literal(`Nová třída přidaná ve verzi DCAT 2.0.`, 'cs'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}DataService`),
      namedNode(`${skos}changeNote`),
      literal(`Nueva clase añadida en DCAT 2.0.`, 'es'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}DataService`),
      namedNode(`${skos}changeNote`),
      literal(`Nuova classe aggiunta in DCAT 2.0.`, 'it'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}DataService`),
      namedNode(`${skos}changeNote`),
      literal(`Ny klasse tilføjet i DCAT 2.0.`, 'da'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}DataService`),
      namedNode(`${skos}definition`),
      literal(`A site or end-point providing operations related to the discovery of, access to, or processing functions on, data or related resources.`, 'en'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}DataService`),
      namedNode(`${skos}definition`),
      literal(`Et site eller endpoint der udstiller operationer relateret til opdagelse af, adgang til eller behandlende funktioner på data eller relaterede ressourcer.`, 'da'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}DataService`),
      namedNode(`${skos}definition`),
      literal(`Umístění či přístupový bod poskytující operace související s hledáním, přistupem k, či výkonem funkcí na datech či souvisejících zdrojích.`, 'cs'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}DataService`),
      namedNode(`${skos}definition`),
      literal(`Un sitio o end-point que provee operaciones relacionadas a funciones de descubrimiento, acceso, o procesamiento de datos o recursos relacionados.`, 'es'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}DataService`),
      namedNode(`${skos}definition`),
      literal(`Un sito o end-point che fornisce operazioni relative alla scoperta, all'accesso o all'elaborazione di funzioni su dati o risorse correlate.`, 'it'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}DataService`),
      namedNode(`${skos}scopeNote`),
      literal(`Datatjenestetypen kan indikeres ved hjælp af egenskaben dct:type. Værdien kan tages fra kontrollerede udfaldsrum såsom INSPIRE spatial data service vocabulary.`, 'da'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}DataService`),
      namedNode(`${skos}scopeNote`),
      literal(`Druh služby může být indikován vlastností dct:type. Její hodnota může být z řízeného slovníku, kterým je například slovník typů prostorových datových služeb INSPIRE.`, 'cs'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}DataService`),
      namedNode(`${skos}scopeNote`),
      literal(`El tipo de servicio puede indicarse usando la propiedad dct:type. Su valor puede provenir de un vocabulario controlado, como por ejemplo el vocabulario de servicios de datos espaciales de INSPIRE.`, 'es'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}DataService`),
      namedNode(`${skos}scopeNote`),
      literal(`Hvis en dcat:DataService er bundet til en eller flere specifikke datasæt kan dette indikeres ved hjælp af egenskaben dcat:servesDataset. `, 'da'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}DataService`),
      namedNode(`${skos}scopeNote`),
      literal(`If a dcat:DataService is bound to one or more specified Datasets, they are indicated by the dcat:servesDataset property.`, 'en'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}DataService`),
      namedNode(`${skos}scopeNote`),
      literal(`Il tipo di servizio può essere indicato usando la proprietà dct:type. Il suo valore può essere preso da un vocabolario controllato come il vocabolario dei tipi di servizi per dati spaziali di INSPIRE.`, 'it'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}DataService`),
      namedNode(`${skos}scopeNote`),
      literal(`Pokud je dcat:DataService navázána na jednu či více Datových sad, jsou tyto indikovány vlstností dcat:servesDataset.`, 'cs'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}DataService`),
      namedNode(`${skos}scopeNote`),
      literal(`Se un dcat:DataService è associato a uno o più Dataset specificati, questi sono indicati dalla proprietà dcat:serveDataset.`, 'it'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}DataService`),
      namedNode(`${skos}scopeNote`),
      literal(`Si un dcat:DataService está asociado con uno o más conjuntos de datos especificados, dichos conjuntos de datos pueden indicarse con la propiedad dcat:servesDataset.`, 'es'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}DataService`),
      namedNode(`${skos}scopeNote`),
      literal(`The kind of service can be indicated using the dct:type property. Its value may be taken from a controlled vocabulary such as the INSPIRE spatial data service type vocabulary.`, 'en'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Dataset`),
      namedNode(`${rdf}type`),
      namedNode(`${rdfs}Class`),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Dataset`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}Class`),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Dataset`),
      namedNode(`${rdfs}comment`),
      literal(`1つのエージェントによって公開またはキュレートされ、1つ以上の形式でアクセスまたはダウンロードできるデータの集合。`, 'ja'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Dataset`),
      namedNode(`${rdfs}comment`),
      literal(`A collection of data, published or curated by a single source, and available for access or download in one or more representations.`, 'en'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Dataset`),
      namedNode(`${rdfs}comment`),
      literal(`En samling af data, udgivet eller udvalgt og arrangeret af en enkelt kilde og som er til råde for adgang til eller download af i en eller flere repræsentationer.`, 'da'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Dataset`),
      namedNode(`${rdfs}comment`),
      literal(`Kolekce dat poskytovaná či řízená jedním zdrojem, která je k dispozici pro přístup či stažení v jednom či více formátech.`, 'cs'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Dataset`),
      namedNode(`${rdfs}comment`),
      literal(`Raccolta di dati, pubblicati o curati da un'unica fonte, disponibili per l'accesso o il download in uno o più formati.`, 'it'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Dataset`),
      namedNode(`${rdfs}comment`),
      literal(`Una colección de datos, publicados o conservados por una única fuente, y disponibles para ser accedidos o descargados en uno o más formatos.`, 'es'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Dataset`),
      namedNode(`${rdfs}comment`),
      literal(`Une collection de données, publiée ou élaborée par une seule source, et disponible pour accès ou téléchargement dans un ou plusieurs formats.`, 'fr'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Dataset`),
      namedNode(`${rdfs}comment`),
      literal(`Μία συλλογή από δεδομένα, δημοσιευμένη ή επιμελημένη από μία και μόνο πηγή, διαθέσιμη δε προς πρόσβαση ή μεταφόρτωση σε μία ή περισσότερες μορφές.`, 'el'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Dataset`),
      namedNode(`${rdfs}comment`),
      literal(`قائمة بيانات منشورة أو مجموعة من قبل مصدر ما و متاح الوصول إليها أو تحميلها`, 'ar'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Dataset`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(ns5),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Dataset`),
      namedNode(`${rdfs}label`),
      literal(`Conjunto de datos`, 'es'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Dataset`),
      namedNode(`${rdfs}label`),
      literal(`Dataset`, 'en'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Dataset`),
      namedNode(`${rdfs}label`),
      literal(`Dataset`, 'it'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Dataset`),
      namedNode(`${rdfs}label`),
      literal(`Datasæt`, 'da'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Dataset`),
      namedNode(`${rdfs}label`),
      literal(`Datová sada`, 'cs'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Dataset`),
      namedNode(`${rdfs}label`),
      literal(`Jeu de données`, 'fr'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Dataset`),
      namedNode(`${rdfs}label`),
      literal(`Σύνολο Δεδομένων`, 'el'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Dataset`),
      namedNode(`${rdfs}label`),
      literal(`قائمة بيانات`, 'ar'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Dataset`),
      namedNode(`${rdfs}label`),
      literal(`データセット`, 'ja'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Dataset`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${dcat}Resource`),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Dataset`),
      namedNode(`${skos}altLabel`),
      literal(`Datasamling`, 'da'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Dataset`),
      namedNode(`${skos}changeNote`),
      literal(`2018-02 - odstraněno tvrzení o podtřídě dctype:Dataset, jelikož rozsah dcat:Dataset zahrnuje několik dalších typů ze slovníku dctype.`, 'cs'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Dataset`),
      namedNode(`${skos}changeNote`),
      literal(`2018-02 - se eliminó el axioma de subclase con dctype:Dataset porque el alcance de dcat:Dataset incluye muchos otros tipos del vocabulario dctype.`, 'es'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Dataset`),
      namedNode(`${skos}changeNote`),
      literal(`2018-02 - sottoclasse di dctype:Dataset rimosso perché l'ambito di dcat:Dataset include diversi altri tipi dal vocabolario dctype.`, 'it'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Dataset`),
      namedNode(`${skos}changeNote`),
      literal(`2018-02 - subclass of dctype:Dataset removed because scope of dcat:Dataset includes several other types from the dctype vocabulary.`, 'en'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Dataset`),
      namedNode(`${skos}changeNote`),
      literal(`2018-02 - subklasse af dctype:Dataset fjernet da scope af dcat:Dataset omfatter flere forskellige typer fra dctype-vokabularet.`, 'da'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Dataset`),
      namedNode(`${skos}definition`),
      literal(`1つのエージェントによって公開またはキュレートされ、1つ以上の形式でアクセスまたはダウンロードできるデータの集合。`, 'ja'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Dataset`),
      namedNode(`${skos}definition`),
      literal(`A collection of data, published or curated by a single source, and available for access or download in one or more represenations.`, 'en'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Dataset`),
      namedNode(`${skos}definition`),
      literal(`En samling a data, udgivet eller udvalgt og arrangeret af en enkelt kilde og som der er adgang til i en eller flere repræsentationer.`, 'da'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Dataset`),
      namedNode(`${skos}definition`),
      literal(`Kolekce dat poskytovaná či řízená jedním zdrojem, která je k dispozici pro přístup či stažení v jednom či více formátech.`, 'cs'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Dataset`),
      namedNode(`${skos}definition`),
      literal(`Raccolta di dati, pubblicati o curati da un'unica fonte, disponibili per l'accesso o il download in uno o più formati.`, 'it'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Dataset`),
      namedNode(`${skos}definition`),
      literal(`Una colección de datos, publicados o conservados por una única fuente, y disponibles para ser accedidos o descargados en uno o más formatos.`, 'es'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Dataset`),
      namedNode(`${skos}definition`),
      literal(`Une collection de données, publiée ou élaborée par une seule source, et disponible pour accès ou téléchargement dans un ou plusieurs formats.`, 'fr'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Dataset`),
      namedNode(`${skos}definition`),
      literal(`Μία συλλογή από δεδομένα, δημοσιευμένη ή επιμελημένη από μία και μόνο πηγή, διαθέσιμη δε προς πρόσβαση ή μεταφόρτωση σε μία ή περισσότερες μορφές.`, 'el'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Dataset`),
      namedNode(`${skos}definition`),
      literal(`قائمة بيانات منشورة أو مجموعة من قبل مصدر ما و متاح الوصول إليها أو تحميلها`, 'ar'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Dataset`),
      namedNode(`${skos}editorialNote`),
      literal(`2020-03-16 A new scopenote added and need to be translated`, 'en'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Dataset`),
      namedNode(`${skos}scopeNote`),
      literal(`Cette classe représente le jeu de données publié par le fournisseur de données. Dans les cas où une distinction est nécessaire entre le jeu de donénes et son entrée dans le catalogue, la classe registre de données peut être utilisée pour ce dernier.`, 'fr'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Dataset`),
      namedNode(`${skos}scopeNote`),
      literal(`Denne klasse beskriver det konceptuelle datasæt. En eller flere repræsentationer kan være tilgængelige med forskellige skematiske opsætninger, formater eller serialiseringer.`, 'da'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Dataset`),
      namedNode(`${skos}scopeNote`),
      literal(`Denne klasse repræsenterer det konkrete datasæt som det udgives af datasætleverandøren. I de tilfælde hvor det er nødvendigt at skelne mellem det konkrete datasæt og dets registrering i kataloget (fordi metadata såsom ændringsdato og vedligeholder er forskellige), så kan klassen katalogpost anvendes. `, 'da'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Dataset`),
      namedNode(`${skos}scopeNote`),
      literal(`Esta clase representa el conjunto de datos publicados. En los casos donde es necesario distinguir entre el conjunto de datos y su entrada en el catálogo de datos, se debe utilizar la clase 'registro del catálogo'.`, 'es'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Dataset`),
      namedNode(`${skos}scopeNote`),
      literal(`Questa classe descrive il dataset dal punto di vista concettuale. Possono essere disponibili una o più rappresentazioni, con diversi layout e formati schematici o serializzazioni.`, 'it'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Dataset`),
      namedNode(`${skos}scopeNote`),
      literal(`Questa classe rappresenta il dataset come pubblicato dall’editore. Nel caso in cui sia necessario operare  una distinzione fra i metadati originali del dataset e il record dei metadati ad esso associato nel catalogo (ad esempio, per distinguere la data di modifica del dataset da quella del dataset nel catalogo) si può impiegare la classe catalog record.`, 'it'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Dataset`),
      namedNode(`${skos}scopeNote`),
      literal(`Tato třída reprezentuje datovou sadu tak, jak je publikována poskytovatelem dat. V případě potřeby rozlišení datové sady a jejího katalogizačního záznamu (jelikož metadata jako datum modifikace se mohou lišit) pro něj může být použita třída "katalogizační záznam".`, 'cs'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Dataset`),
      namedNode(`${skos}scopeNote`),
      literal(`The notion of dataset in DCAT is broad and inclusive, with the intention of accommodating resource types arising from all communities. Data comes in many forms including numbers, text, pixels, imagery, sound and other multi-media, and potentially other types, any of which might be collected into a dataset.`, 'en'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Dataset`),
      namedNode(`${skos}scopeNote`),
      literal(`This class describes the conceptual dataset. One or more representations might be available, with differing schematic layouts and formats or serializations.`, 'en'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Dataset`),
      namedNode(`${skos}scopeNote`),
      literal(`This class represents the actual dataset as published by the dataset provider. In cases where a distinction between the actual dataset and its entry in the catalog is necessary (because metadata such as modification date and maintainer might differ), the catalog record class can be used for the latter.`, 'en'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Dataset`),
      namedNode(`${skos}scopeNote`),
      literal(`Η κλάση αυτή αναπαριστά το σύνολο δεδομένων αυτό καθ'εαυτό, όπως έχει δημοσιευθεί από τον εκδότη. Σε περιπτώσεις όπου είναι απαραίτητος ο διαχωρισμός μεταξύ του συνόλου δεδομένων και της καταγραφής αυτού στον κατάλογο (γιατί μεταδεδομένα όπως η ημερομηνία αλλαγής και ο συντηρητής μπορεί να διαφέρουν) η κλάση της καταγραφής καταλόγου μπορεί να χρησιμοποιηθεί για το τελευταίο.`, 'el'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Dataset`),
      namedNode(`${skos}scopeNote`),
      literal(`このクラスは、データセットの公開者が公開する実際のデータセットを表わします。カタログ内の実際のデータセットとそのエントリーとの区別が必要な場合（修正日と維持者などのメタデータが異なるかもしれないので）は、後者にcatalog recordというクラスを使用できます。`, 'ja'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Distribution`),
      namedNode(`${rdf}type`),
      namedNode(`${rdfs}Class`),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Distribution`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}Class`),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Distribution`),
      namedNode(`${rdfs}comment`),
      literal(`A specific representation of a dataset. A dataset might be available in multiple serializations that may differ in various ways, including natural language, media-type or format, schematic organization, temporal and spatial resolution, level of detail or profiles (which might specify any or all of the above).`, 'en'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Distribution`),
      namedNode(`${rdfs}comment`),
      literal(`En specifik repræsentation af et datasæt. Et datasæt kan være tilgængelig i mange serialiseringer der kan variere på forskellige vis, herunder sprog, medietype eller format, systemorganisering, tidslig- og geografisk opløsning, detaljeringsniveau eller profiler (der kan specificere en eller flere af ovenstående).`, 'da'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Distribution`),
      namedNode(`${rdfs}comment`),
      literal(`Konkrétní reprezentace datové sady. Datová sada může být dostupná v různých serializacích, které se mohou navzájem lišit různými způsoby, mimo jiné přirozeným jazykem, media-typem či formátem, schematickou organizací, časovým a prostorovým rozlišením, úrovní detailu či profily (které mohou specifikovat některé či všechny tyto rozdíly).`, 'cs'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Distribution`),
      namedNode(`${rdfs}comment`),
      literal(`Rappresenta una forma disponibile e specifica del dataset. Ciascun dataset può essere disponibile in forme differenti, che possono rappresentare formati diversi o diversi punti di accesso per un dataset. Esempi di distribuzioni sono un file CSV scaricabile, una API o un RSS feed.`, 'it'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Distribution`),
      namedNode(`${rdfs}comment`),
      literal(`Représente une forme spécifique d'un jeu de données. Caque jeu de données peut être disponible sous différentes formes, celles-ci pouvant représenter différents formats du jeu de données ou différents endpoint. Des exemples de distribution sont des fichirs CSV, des API ou des flux RSS.`, 'fr'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Distribution`),
      namedNode(`${rdfs}comment`),
      literal(`Una representación específica de los datos. Cada conjunto de datos puede estar disponible en formas diferentes, las cuáles pueden variar en distintas formas, incluyendo el idioma, 'media-type' o formato, organización esquemática, resolución temporal y espacial, nivel de detalle o perfiles (que pueden especificar cualquiera o todas las diferencias anteriores).`, 'es'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Distribution`),
      namedNode(`${rdfs}comment`),
      literal(`Αναπαριστά μία συγκεκριμένη διαθέσιμη μορφή ενός συνόλου δεδομένων. Κάθε σύνολο δεδομενων μπορεί να είναι διαθέσιμο σε διαφορετικές μορφές, οι μορφές αυτές μπορεί να αναπαριστούν διαφορετικές μορφές αρχείων ή διαφορετικά σημεία διάθεσης. Παραδείγματα διανομών συμπεριλαμβάνουν ένα μεταφορτώσιμο αρχείο μορφής CSV, ένα API ή ένα RSS feed.`, 'el'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Distribution`),
      namedNode(`${rdfs}comment`),
      literal(`شكل محدد لقائمة البيانات يمكن الوصول إليه. قائمة بيانات ما يمكن أن تكون متاحه باشكال و أنواع متعددة.  ملف يمكن تحميله أو واجهة برمجية يمكن من خلالها الوصول إلى البيانات هي أمثلة على ذلك.`, 'ar'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Distribution`),
      namedNode(`${rdfs}comment`),
      literal(`データセットの特定の利用可能な形式を表わします。各データセットは、異なる形式で利用できることがあり、これらの形式は、データセットの異なる形式や、異なるエンドポイントを表わす可能性があります。配信の例には、ダウンロード可能なCSVファイル、API、RSSフィードが含まれます。`, 'ja'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Distribution`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(ns5),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Distribution`),
      namedNode(`${rdfs}label`),
      literal(`Distribuce`, 'cs'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Distribution`),
      namedNode(`${rdfs}label`),
      literal(`Distribución`, 'es'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Distribution`),
      namedNode(`${rdfs}label`),
      literal(`Distribution`, 'da'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Distribution`),
      namedNode(`${rdfs}label`),
      literal(`Distribution`, 'en'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Distribution`),
      namedNode(`${rdfs}label`),
      literal(`Distribution`, 'fr'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Distribution`),
      namedNode(`${rdfs}label`),
      literal(`Distribuzione`, 'it'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Distribution`),
      namedNode(`${rdfs}label`),
      literal(`Διανομή`, 'el'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Distribution`),
      namedNode(`${rdfs}label`),
      literal(`التوزيع`, 'ar'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Distribution`),
      namedNode(`${rdfs}label`),
      literal(`配信`, 'ja'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Distribution`),
      namedNode(`${skos}altLabel`),
      literal(`Datadistribution`, 'da'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Distribution`),
      namedNode(`${skos}altLabel`),
      literal(`Datamanifestation`, 'da'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Distribution`),
      namedNode(`${skos}altLabel`),
      literal(`Datarepræsentation`, 'da'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Distribution`),
      namedNode(`${skos}altLabel`),
      literal(`Dataudstilling`, 'da'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Distribution`),
      namedNode(`${skos}definition`),
      literal(`A specific representation of a dataset. A dataset might be available in multiple serializations that may differ in various ways, including natural language, media-type or format, schematic organization, temporal and spatial resolution, level of detail or profiles (which might specify any or all of the above).`, 'en'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Distribution`),
      namedNode(`${skos}definition`),
      literal(`En specifik repræsentation af et datasæt. Et datasæt kan være tilgængelig i mange serialiseringer der kan variere på forskellige vis, herunder sprog, medietype eller format, systemorganisering, tidslig- og geografisk opløsning, detaljeringsniveau eller profiler (der kan specificere en eller flere af ovenstående).`, 'da'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Distribution`),
      namedNode(`${skos}definition`),
      literal(`Konkrétní reprezentace datové sady. Datová sada může být dostupná v různých serializacích, které se mohou navzájem lišit různými způsoby, mimo jiné přirozeným jazykem, media-typem či formátem, schematickou organizací, časovým a prostorovým rozlišením, úrovní detailu či profily (které mohou specifikovat některé či všechny tyto rozdíly).`, 'cs'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Distribution`),
      namedNode(`${skos}definition`),
      literal(`Rappresenta una forma disponibile e specifica del dataset. Ciascun dataset può essere disponibile in forme differenti, che possono rappresentare formati diversi o diversi punti di accesso per un dataset. Esempi di distribuzioni sono un file CSV scaricabile, una API o un RSS feed.`, 'it'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Distribution`),
      namedNode(`${skos}definition`),
      literal(`Représente une forme spécifique d'un jeu de données. Caque jeu de données peut être disponible sous différentes formes, celles-ci pouvant représenter différents formats du jeu de données ou différents endpoint. Des exemples de distribution sont des fichirs CSV, des API ou des flux RSS.`, 'fr'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Distribution`),
      namedNode(`${skos}definition`),
      literal(`Una representación específica de los datos. Cada conjunto de datos puede estar disponible en formas diferentes, las cuáles pueden variar en distintas formas, incluyendo el idioma, 'media-type' o formato, organización esquemática, resolución temporal y espacial, nivel de detalle o perfiles (que pueden especificar cualquiera o todas las diferencias anteriores).`, 'es'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Distribution`),
      namedNode(`${skos}definition`),
      literal(`Αναπαριστά μία συγκεκριμένη διαθέσιμη μορφή ενός συνόλου δεδομένων. Κάθε σύνολο δεδομενων μπορεί να είναι διαθέσιμο σε διαφορετικές μορφές, οι μορφές αυτές μπορεί να αναπαριστούν διαφορετικές μορφές αρχείων ή διαφορετικά σημεία διάθεσης. Παραδείγματα διανομών συμπεριλαμβάνουν ένα μεταφορτώσιμο αρχείο μορφής CSV, ένα API ή ένα RSS feed.`, 'el'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Distribution`),
      namedNode(`${skos}definition`),
      literal(`شكل محدد لقائمة البيانات يمكن الوصول إليه. قائمة بيانات ما يمكن أن تكون متاحه باشكال و أنواع متعددة.  ملف يمكن تحميله أو واجهة برمجية يمكن من خلالها الوصول إلى البيانات هي أمثلة على ذلك.`, 'ar'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Distribution`),
      namedNode(`${skos}definition`),
      literal(`データセットの特定の利用可能な形式を表わします。各データセットは、異なる形式で利用できることがあり、これらの形式は、データセットの異なる形式や、異なるエンドポイントを表わす可能性があります。配信の例には、ダウンロード可能なCSVファイル、API、RSSフィードが含まれます。`, 'ja'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Distribution`),
      namedNode(`${skos}scopeNote`),
      literal(`Ceci représente une disponibilité générale du jeu de données, et implique qu'il n'existe pas d'information sur la méthode d'accès réelle des données, par exple, si c'est un lien de téléchargement direct ou à travers une page Web.`, 'fr'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Distribution`),
      namedNode(`${skos}scopeNote`),
      literal(`Denne klasse repræsenterer datasættets overordnede tilgængelighed og giver ikke oplysninger om hvilken metode der kan anvendes til at få adgang til data, dvs. om adgang til datasættet realiseres ved direkte download, API eller via et websted. Anvendelsen af egenskaben dcat:downloadURL indikerer at distributionen kan downloades direkte.`, 'da'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Distribution`),
      namedNode(`${skos}scopeNote`),
      literal(`Esta clase representa una disponibilidad general de un conjunto de datos, e implica que no existe información acerca del método de acceso real a los datos, i.e., si es un enlace de descarga directa o a través de una página Web.`, 'es'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Distribution`),
      namedNode(`${skos}scopeNote`),
      literal(`Questa classe rappresenta una disponibilità generale di un dataset e non implica alcuna informazione sul metodo di accesso effettivo ai dati, ad esempio se si tratta di un accesso a download diretto, API, o attraverso una pagina Web. L'utilizzo della proprietà dcat:downloadURL indica distribuzioni direttamente scaricabili.`, 'it'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Distribution`),
      namedNode(`${skos}scopeNote`),
      literal(`This represents a general availability of a dataset it implies no information about the actual access method of the data, i.e. whether by direct download, API, or through a Web page. The use of dcat:downloadURL property indicates directly downloadable distributions.`, 'en'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Distribution`),
      namedNode(`${skos}scopeNote`),
      literal(`Toto popisuje obecnou dostupnost datové sady. Neimplikuje žádnou informaci o skutečné metodě přístupu k datům, tj. zda jsou přímo ke stažení, skrze API či přes webovou stránku. Použití vlastnosti dcat:downloadURL indikuje přímo stažitelné distribuce.`, 'cs'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Distribution`),
      namedNode(`${skos}scopeNote`),
      literal(`Αυτό αναπαριστά μία γενική διαθεσιμότητα ενός συνόλου δεδομένων και δεν υπονοεί τίποτα περί του πραγματικού τρόπου πρόσβασης στα δεδομένα, αν είναι άμεσα μεταφορτώσιμα, μέσω API ή μέσω μίας ιστοσελίδας. Η χρήση της ιδιότητας dcat:downloadURL δείχνει μόνο άμεσα μεταφορτώσιμες διανομές.`, 'el'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Distribution`),
      namedNode(`${skos}scopeNote`),
      literal(`これは、データセットの一般的な利用可能性を表わし、データの実際のアクセス方式に関する情報（つまり、直接ダウンロードなのか、APIなのか、ウェブページを介したものなのか）を意味しません。dcat:downloadURLプロパティーの使用は、直接ダウンロード可能な配信を意味します。`, 'ja'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Relationship`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}Class`),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Relationship`),
      namedNode(`${rdfs}comment`),
      literal(`An association class for attaching additional information to a relationship between DCAT Resources.`, 'en'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Relationship`),
      namedNode(`${rdfs}comment`),
      literal(`Asociační třída pro připojení dodatečných informací ke vztahu mezi zdroji DCAT.`, 'cs'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Relationship`),
      namedNode(`${rdfs}comment`),
      literal(`En associationsklasse til brug for tilknytning af yderligere information til en relation mellem DCAT-ressourcer.`, 'da'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Relationship`),
      namedNode(`${rdfs}comment`),
      literal(`Una clase de asociación para adjuntar información adicional a una relación entre recursos DCAT.`, 'es'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Relationship`),
      namedNode(`${rdfs}comment`),
      literal(`Una classe di associazione per il collegamento di informazioni aggiuntive a una relazione tra le risorse DCAT.`, 'it'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Relationship`),
      namedNode(`${rdfs}label`),
      literal(`Relación`, 'es'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Relationship`),
      namedNode(`${rdfs}label`),
      literal(`Relation`, 'da'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Relationship`),
      namedNode(`${rdfs}label`),
      literal(`Relationship`, 'en'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Relationship`),
      namedNode(`${rdfs}label`),
      literal(`Relazione`, 'it'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Relationship`),
      namedNode(`${rdfs}label`),
      literal(`Vztah`, 'cs'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Relationship`),
      namedNode(`${skos}changeNote`),
      literal(`New class added in DCAT 2.0.`, 'en'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Relationship`),
      namedNode(`${skos}changeNote`),
      literal(`Nová třída přidaná ve verzi DCAT 2.0.`, 'cs'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Relationship`),
      namedNode(`${skos}changeNote`),
      literal(`Nueva clase añadida en DCAT 2.0.`, 'es'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Relationship`),
      namedNode(`${skos}changeNote`),
      literal(`Nuova classe aggiunta in DCAT 2.0.`, 'it'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Relationship`),
      namedNode(`${skos}changeNote`),
      literal(`Ny klasse i DCAT 2.0.`, 'da'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Relationship`),
      namedNode(`${skos}definition`),
      literal(`An association class for attaching additional information to a relationship between DCAT Resources.`, 'en'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Relationship`),
      namedNode(`${skos}definition`),
      literal(`Asociační třída pro připojení dodatečných informací ke vztahu mezi zdroji DCAT.`, 'cs'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Relationship`),
      namedNode(`${skos}definition`),
      literal(`En associationsklasse til brug for tilknytning af yderligere information til en relation mellem DCAT-ressourcer.`, 'da'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Relationship`),
      namedNode(`${skos}definition`),
      literal(`Una clase de asociación para adjuntar información adicional a una relación entre recursos DCAT.`, 'es'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Relationship`),
      namedNode(`${skos}definition`),
      literal(`Una classe di associazione per il collegamento di informazioni aggiuntive a una relazione tra le risorse DCAT.`, 'it'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Relationship`),
      namedNode(`${skos}scopeNote`),
      literal(`Anvendes til at karakterisere en relation mellem datasæt, og potentielt andre ressourcer, hvor relationen er kendt men ikke tilstrækkeligt beskrevet af de standardiserede egenskaber i Dublin Core (dct:hasPart, dct:isPartOf, dct:conformsTo, dct:isFormatOf, dct:hasFormat, dct:isVersionOf, dct:hasVersion, dct:replaces, dct:isReplacedBy, dct:references, dct:isReferencedBy, dct:requires, dct:isRequiredBy) eller PROV-O-egenskaber (prov:wasDerivedFrom, prov:wasInfluencedBy, prov:wasQuotedFrom, prov:wasRevisionOf, prov:hadPrimarySource, prov:alternateOf, prov:specializationOf).`, 'da'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Relationship`),
      namedNode(`${skos}scopeNote`),
      literal(`Používá se pro charakterizaci vztahu mezi datovými sadami a případně i jinými zdroji, kde druh vztahu je sice znám, ale není přiměřeně charakterizován standardními vlastnostmi slovníku Dublin Core (dct:hasPart, dct:isPartOf, dct:conformsTo, dct:isFormatOf, dct:hasFormat, dct:isVersionOf, dct:hasVersion, dct:replaces, dct:isReplacedBy, dct:references, dct:isReferencedBy, dct:requires, dct:isRequiredBy) či vlastnostmi slovníku PROV-O (prov:wasDerivedFrom, prov:wasInfluencedBy, prov:wasQuotedFrom, prov:wasRevisionOf, prov:hadPrimarySource, prov:alternateOf, prov:specializationOf).`, 'cs'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Relationship`),
      namedNode(`${skos}scopeNote`),
      literal(`Se usa para caracterizar la relación entre conjuntos de datos, y potencialmente otros recursos, donde la naturaleza de la relación se conoce pero no está caracterizada adecuadamente con propiedades del estándar 'Dublin Core' (dct:hasPart, dct:isPartOf, dct:conformsTo, dct:isFormatOf, dct:hasFormat, dct:isVersionOf, dct:hasVersion, dct:replaces, dct:isReplacedBy, dct:references, dct:isReferencedBy, dct:requires, dct:isRequiredBy) or PROV-O properties (prov:wasDerivedFrom, prov:wasInfluencedBy, prov:wasQuotedFrom, prov:wasRevisionOf, prov:hadPrimarySource, prov:alternateOf, prov:specializationOf).`, 'es'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Relationship`),
      namedNode(`${skos}scopeNote`),
      literal(`Use to characterize a relationship between datasets, and potentially other resources, where the nature of the relationship is known but is not adequately characterized by the standard Dublin Core properties (dct:hasPart, dct:isPartOf, dct:conformsTo, dct:isFormatOf, dct:hasFormat, dct:isVersionOf, dct:hasVersion, dct:replaces, dct:isReplacedBy, dct:references, dct:isReferencedBy, dct:requires, dct:isRequiredBy) or PROV-O properties (prov:wasDerivedFrom, prov:wasInfluencedBy, prov:wasQuotedFrom, prov:wasRevisionOf, prov:hadPrimarySource, prov:alternateOf, prov:specializationOf).`, 'en'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Relationship`),
      namedNode(`${skos}scopeNote`),
      literal(`Viene utilizzato per caratterizzare la relazione tra insiemi di dati, e potenzialmente altri tipi di risorse, nei casi in cui la natura della relazione è nota ma non adeguatamente caratterizzata dalle proprietà dello standard 'Dublin Core' (dct:hasPart, dct:isPartOf, dct:conformsTo, dct:isFormatOf, dct:hasFormat, dct:isVersionOf, dct:hasVersion, dct:replaces, dct:isReplacedBy, dct:references, dct:isReferencedBy, dct:require, dct:isRequiredBy) o dalle propietà fornite da PROV-O  (prov:wasDerivedFrom, prov:wasInfluencedBy, prov:wasQuotedFrom, prov:wasRevisionOf, prov: hadPrimarySource, prov:alternateOf, prov:specializationOf).`, 'it'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Resource`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}Class`),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Resource`),
      namedNode(`${rdfs}comment`),
      literal(`Recurso publicado o curado por un agente único.`, 'es'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Resource`),
      namedNode(`${rdfs}comment`),
      literal(`Resource published or curated by a single agent.`, 'en'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Resource`),
      namedNode(`${rdfs}comment`),
      literal(`Ressource udgivet eller udvalgt og arrangeret af en enkelt aktør.`, 'da'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Resource`),
      namedNode(`${rdfs}comment`),
      literal(`Risorsa pubblicata o curata da un singolo agente.`, 'it'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Resource`),
      namedNode(`${rdfs}comment`),
      literal(`Zdroj publikovaný či řízený jediným činitelem.`, 'cs'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Resource`),
      namedNode(`${rdfs}label`),
      literal(`Catalogued resource`, 'en'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Resource`),
      namedNode(`${rdfs}label`),
      literal(`Katalogiseret ressource`, 'da'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Resource`),
      namedNode(`${rdfs}label`),
      literal(`Katalogizovaný zdroj`, 'cs'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Resource`),
      namedNode(`${rdfs}label`),
      literal(`Recurso catalogado`, 'es'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Resource`),
      namedNode(`${rdfs}label`),
      literal(`Risorsa catalogata`, 'it'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Resource`),
      namedNode(`${skos}changeNote`),
      literal(`New class added in DCAT 2.0.`, 'en'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Resource`),
      namedNode(`${skos}changeNote`),
      literal(`Nová třída přidaná ve verzi DCAT 2.0.`, 'cs'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Resource`),
      namedNode(`${skos}changeNote`),
      literal(`Nueva clase agregada en DCAT 2.0.`, 'es'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Resource`),
      namedNode(`${skos}changeNote`),
      literal(`Nuova classe aggiunta in DCAT 2.0.`, 'it'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Resource`),
      namedNode(`${skos}changeNote`),
      literal(`Ny klasse i DCAT 2.0.`, 'da'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Resource`),
      namedNode(`${skos}definition`),
      literal(`Recurso publicado o curado por un agente único.`, 'es'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Resource`),
      namedNode(`${skos}definition`),
      literal(`Resource published or curated by a single agent.`, 'en'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Resource`),
      namedNode(`${skos}definition`),
      literal(`Ressource udgivet eller udvalgt og arrangeret af en enkelt aktør.`, 'da'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Resource`),
      namedNode(`${skos}definition`),
      literal(`Risorsa pubblicata o curata da un singolo agente.`, 'it'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Resource`),
      namedNode(`${skos}definition`),
      literal(`Zdroj publikovaný či řízený jediným činitelem.`, 'cs'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Resource`),
      namedNode(`${skos}scopeNote`),
      literal(`Klassen for alle katalogiserede ressourcer, den overordnede klasse for dcat:Dataset, dcat:DataService, dcat:Catalog og enhvert medlem af et dcat:Catalog. Denne klasse bærer egenskaber der gælder alle katalogiserede ressourcer, herunder dataset og datatjenester. Det anbefales kraftigt at mere specifikke subklasser oprettes. Når der beskrives ressourcer der ikke er dcat:Dataset eller dcat:DataService, anbefales det at oprette passende subklasser af dcat:Resource eller at dcat:Resource anvendes sammen med egenskaben dct:type til opmærkning med en specifik typeangivelse.`, 'da'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Resource`),
      namedNode(`${skos}scopeNote`),
      literal(`La clase de todos los recursos catalogados, la superclase de dcat:Dataset, dcat:DataService, dcat:Catalog y cualquier otro miembro de un dcat:Catalog. Esta clase tiene propiedades comunes a todos los recursos catalogados, incluyendo conjuntos de datos y servicios de datos. Se recomienda fuertemente que se use una clase más específica. Cuando se describe un recurso que no es un dcat:Dataset o dcat:DataService, se recomienda crear una sub-clase apropiada de dcat:Resource, o usar dcat:Resource con la propiedad dct:type to indicar el tipo específico.`, 'es'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Resource`),
      namedNode(`${skos}scopeNote`),
      literal(`La classe di tutte le risorse catalogate, la Superclasse di dcat:Dataset, dcat:DataService, dcat:Catalog e qualsiasi altro membro di dcat:Catalog. Questa classe porta proprietà comuni a tutte le risorse catalogate, inclusi set di dati e servizi dati. Si raccomanda vivamente di utilizzare una sottoclasse più specifica. Quando si descrive una risorsa che non è un dcat:Dataset o dcat:DataService, si raccomanda di creare una sottoclasse di dcat:Resource appropriata, o utilizzare dcat:Resource con la proprietà dct:type per indicare il tipo specifico.`, 'it'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Resource`),
      namedNode(`${skos}scopeNote`),
      literal(`The class of all catalogued resources, the Superclass of dcat:Dataset, dcat:DataService, dcat:Catalog and any other member of a dcat:Catalog. This class carries properties common to all catalogued resources, including datasets and data services. It is strongly recommended to use a more specific sub-class. When describing a resource which is not a dcat:Dataset or dcat:DataService, it is recommended to create a suitable sub-class of dcat:Resource, or use dcat:Resource with the dct:type property to indicate the specific type.`, 'en'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Resource`),
      namedNode(`${skos}scopeNote`),
      literal(`Třída všech katalogizovaných zdrojů, nadtřída dcat:Dataset, dcat:DataService, dcat:Catalog a všech ostatních členů dcat:Catalog. Tato třída nese vlastnosti společné všem katalogizovaným zdrojům včetně datových sad a datových služeb. Je silně doporučeno používat specifičtější podtřídy, pokud je to možné. Při popisu zdroje, který není ani dcat:Dataset, ani dcat:DataService se doporučuje vytvořit odpovídající podtřídu dcat:Resrouce a nebo použít dcat:Resource s vlastností dct:type pro určení konkrétního typu.`, 'cs'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Resource`),
      namedNode(`${skos}scopeNote`),
      literal(`dcat:Resource er et udvidelsespunkt der tillader oprettelsen af enhver type af kataloger. Yderligere subklasser kan defineres i en DCAT-profil eller i en applikation til kataloger med andre typer af ressourcer.`, 'da'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Resource`),
      namedNode(`${skos}scopeNote`),
      literal(`dcat:Resource es un punto de extensión que permite la definición de cualquier tipo de catálogo. Se pueden definir subclases adicionales en perfil de DCAT o una aplicación para catálogos de otro tipo de recursos.`, 'es'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Resource`),
      namedNode(`${skos}scopeNote`),
      literal(`dcat:Resource is an extension point that enables the definition of any kind of catalog. Additional subclasses may be defined in a DCAT profile or application for catalogs of other kinds of resources.`, 'en'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Resource`),
      namedNode(`${skos}scopeNote`),
      literal(`dcat:Resource je bod pro rozšíření umožňující definici různých druhů katalogů. Další podtřídy lze definovat v profilech DCAT či aplikacích pro katalogy zdrojů jiných druhů.`, 'cs'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Resource`),
      namedNode(`${skos}scopeNote`),
      literal(`dcat:Resource è un punto di estensione che consente la definizione di qualsiasi tipo di catalogo. Sottoclassi aggiuntive possono essere definite in un profilo DCAT o in un'applicazione per cataloghi di altri tipi di risorse.`, 'it'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Role`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}Class`),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Role`),
      namedNode(`${rdfs}comment`),
      literal(`A role is the function of a resource or agent with respect to another resource, in the context of resource attribution or resource relationships.`, 'en'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Role`),
      namedNode(`${rdfs}comment`),
      literal(`En rolle er den funktion en ressource eller aktør har i forhold til en anden ressource, i forbindelse med ressourcekreditering eller ressourcerelationer.`, 'da'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Role`),
      namedNode(`${rdfs}comment`),
      literal(`Role je funkce zdroje či agenta ve vztahu k jinému zdroji, v kontextu přiřazení zdrojů či vztahů mezi zdroji.`, 'cs'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Role`),
      namedNode(`${rdfs}comment`),
      literal(`Un rol es la función de un recurso o agente con respecto a otro recuros, en el contexto de atribución del recurso o de las relaciones entre recursos.`, 'es'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Role`),
      namedNode(`${rdfs}comment`),
      literal(`Un ruolo è la funzione di una risorsa o di un agente rispetto ad un'altra risorsa, nel contesto dell'attribuzione delle risorse o delle relazioni tra risorse.`, 'it'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Role`),
      namedNode(`${rdfs}label`),
      literal(`Rol`, 'es'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Role`),
      namedNode(`${rdfs}label`),
      literal(`Role`, 'cs'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Role`),
      namedNode(`${rdfs}label`),
      literal(`Role`, 'en'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Role`),
      namedNode(`${rdfs}label`),
      literal(`Rolle`, 'da'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Role`),
      namedNode(`${rdfs}label`),
      literal(`Ruolo`, 'it'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Role`),
      namedNode(`${rdfs}seeAlso`),
      namedNode(`${dcat}hadRole`),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Role`),
      namedNode(`${rdfs}subClassOf`),
      namedNode(`${skos}Concept`),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Role`),
      namedNode(`${skos}changeNote`),
      literal(`New class added in DCAT 2.0.`, 'en'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Role`),
      namedNode(`${skos}changeNote`),
      literal(`Nová třída přidaná ve verzi DCAT 2.0.`, 'cs'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Role`),
      namedNode(`${skos}changeNote`),
      literal(`Nueva clase agregada en DCAT 2.0.`, 'es'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Role`),
      namedNode(`${skos}changeNote`),
      literal(`Nuova classe aggiunta in DCAT 2.0.`, 'it'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Role`),
      namedNode(`${skos}changeNote`),
      literal(`Ny klasse tilføjet i DCAT 2.0.`, 'en'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Role`),
      namedNode(`${skos}definition`),
      literal(`A role is the function of a resource or agent with respect to another resource, in the context of resource attribution or resource relationships.`, 'en'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Role`),
      namedNode(`${skos}definition`),
      literal(`En rolle er den funktion en ressource eller aktør har i forhold til en anden ressource, i forbindelse med ressourcekreditering eller ressourcerelationer.`, 'da'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Role`),
      namedNode(`${skos}definition`),
      literal(`Role je funkce zdroje či agenta ve vztahu k jinému zdroji, v kontextu přiřazení zdrojů či vztahů mezi zdroji.`, 'cs'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Role`),
      namedNode(`${skos}definition`),
      literal(`Un rol es la función de un recurso o agente con respecto a otro recuros, en el contexto de atribución del recurso o de las relaciones entre recursos.`, 'es'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Role`),
      namedNode(`${skos}definition`),
      literal(`Un ruolo è la funzione di una risorsa o di un agente rispetto ad un'altra risorsa, nel contesto dell'attribuzione delle risorse o delle relazioni tra risorse.`, 'it'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Role`),
      namedNode(`${skos}editorialNote`),
      literal(`Incluída en DCAT para complementar prov:Role (cuyo uso está limitado a roles en el contexto de una actividad, ya que es el rango es prov:hadRole).`, 'es'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Role`),
      namedNode(`${skos}editorialNote`),
      literal(`Introdotta in DCAT per completare prov:Role (il cui uso è limitato ai ruoli nel contesto di un'attività, in conseguenza alla definizione del codominio di prov:hadRole).`, 'it'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Role`),
      namedNode(`${skos}editorialNote`),
      literal(`Introduced into DCAT to complement prov:Role (whose use is limited to roles in the context of an activity, as the range of prov:hadRole).`, 'en'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Role`),
      namedNode(`${skos}editorialNote`),
      literal(`Introduceret i DCAT for at supplere prov:Role (hvis anvendelse er begrænset til roller i forbindelse med en aktivitet, som er rækkevidde for prov:hadRole).`, 'da'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Role`),
      namedNode(`${skos}editorialNote`),
      literal(`Přidáno do DCAT pro doplnění třídy prov:Role (jejíž užití je omezeno na role v kontextu aktivit, jakožto obor hodnot vlastnosti prov:hadRole).`, 'cs'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Role`),
      namedNode(`${skos}scopeNote`),
      literal(`Anvendes i forbindelse med kvalificerede krediteringer til at angive aktørens rolle i forhold til en entitet. Det anbefales at værdierne styres som et kontrolleret udfaldsrum med aktørroller, såsom http://registry.it.csiro.au/def/isotc211/CI_RoleCode.`, 'da'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Role`),
      namedNode(`${skos}scopeNote`),
      literal(`Anvendes i forbindelse med kvalificerede relationer til at specificere en entitets rolle i forhold til en anden entitet. Det anbefales at værdierne styres med et kontrolleret udfaldsrum for for entitetsroller såsom: ISO 19115 DS_AssociationTypeCode http://registry.it.csiro.au/def/isotc211/DS_AssociationTypeCode; IANA Registry of Link Relations https://www.iana.org/assignments/link-relation;  DataCite metadata schema;  MARC relators https://id.loc.gov/vocabulary/relators.`, 'da'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Role`),
      namedNode(`${skos}scopeNote`),
      literal(`Použito v kvalifikovaném přiřazení pro specifikaci role Agenta ve vztahu k Entitě. Je doporučeno množinu hodnot spravovat jako řízený slovník rolí agentů, jako například http://registry.it.csiro.au/def/isotc211/CI_RoleCode.`, 'cs'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Role`),
      namedNode(`${skos}scopeNote`),
      literal(`Použito v kvalifikovaném vztahu pro specifikaci role Entity ve vztahu k jiné Entitě. Je doporučeno množinu hodnot spravovat jako řízený slovník rolí entit, jako například ISO 19115 DS_AssociationTypeCode http://registry.it.csiro.au/def/isotc211/DS_AssociationTypeCode, IANA Registry of Link Relations https://www.iana.org/assignments/link-relation, DataCite metadata schema, či MARC relators https://id.loc.gov/vocabulary/relators.`, 'cs'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Role`),
      namedNode(`${skos}scopeNote`),
      literal(`Se usa en una atribución cualificada para especificar el rol de un Agente con respecto a una Entidad. Se recomienda que los valores se administren como un vocabulario controlado de roles de agente, como por ejemplo http://registry.it.csiro.au/def/isotc211/CI_RoleCode.`, 'es'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Role`),
      namedNode(`${skos}scopeNote`),
      literal(`Se usa en una relación cualificada para especificar el rol de una Entidad con respecto a otra Entidad. Se recomienda que los valores se administren como los valores de un vocabulario controlado de roles de entidad como por ejemplo: ISO 19115 DS_AssociationTypeCode http://registry.it.csiro.au/def/isotc211/DS_AssociationTypeCode; IANA Registry of Link Relations https://www.iana.org/assignments/link-relation; el esquema de metadatos de DataCite; MARC relators https://id.loc.gov/vocabulary/relators.`, 'es'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Role`),
      namedNode(`${skos}scopeNote`),
      literal(`Used in a qualified-attribution to specify the role of an Agent with respect to an Entity. It is recommended that the values be managed as a controlled vocabulary of agent roles, such as http://registry.it.csiro.au/def/isotc211/CI_RoleCode.`, 'en'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Role`),
      namedNode(`${skos}scopeNote`),
      literal(`Used in a qualified-relation to specify the role of an Entity with respect to another Entity. It is recommended that the values be managed as a controlled vocabulary of entity roles such as: ISO 19115 DS_AssociationTypeCode http://registry.it.csiro.au/def/isotc211/DS_AssociationTypeCode; IANA Registry of Link Relations https://www.iana.org/assignments/link-relation;  DataCite metadata schema;  MARC relators https://id.loc.gov/vocabulary/relators.`, 'en'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Role`),
      namedNode(`${skos}scopeNote`),
      literal(`Utilizzato in un'attribuzione qualificata per specificare il ruolo di un agente rispetto a un'entità. Si consiglia di attribuire i valori considerando un vocabolario controllato dei ruoli dell'agente, ad esempio http://registry.it.csiro.au/def/isotc211/CI_RoleCode.`, 'it'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}Role`),
      namedNode(`${skos}scopeNote`),
      literal(`Utilizzato in una relazione qualificata per specificare il ruolo di un'entità rispetto a un'altra entità. Si raccomanda che il valore sia preso da un vocabolario controllato di ruoli di entità come ISO 19115 DS_AssociationTypeCode http://registry.it.csiro.au/def/isotc211/DS_AssociationTypeCode, IANA Registry of Link Relations https://www.iana.org/assignments/link-relation, DataCite metadata schema, o MARC relators https://id.loc.gov/vocabulary/relators.`, 'it'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}accessService`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}ObjectProperty`),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}accessService`),
      namedNode(`${rdfs}comment`),
      literal(`A site or end-point that gives access to the distribution of the dataset.`, 'en'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}accessService`),
      namedNode(`${rdfs}comment`),
      literal(`Et websted eller endpoint der giver adgang til en repræsentation af datasættet.`, 'da'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}accessService`),
      namedNode(`${rdfs}comment`),
      literal(`Umístění či přístupový bod zpřístupňující distribuci datové sady.`, 'cs'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}accessService`),
      namedNode(`${rdfs}comment`),
      literal(`Un sitio o end-point que da acceso a la distribución de un conjunto de datos.`, 'es'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}accessService`),
      namedNode(`${rdfs}comment`),
      literal(`Un sito o end-point che dà accesso alla distribuzione del set di dati.`, 'it'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}accessService`),
      namedNode(`${rdfs}label`),
      literal(`data access service`, 'en'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}accessService`),
      namedNode(`${rdfs}label`),
      literal(`dataadgangstjeneste`, 'da'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}accessService`),
      namedNode(`${rdfs}label`),
      literal(`servicio de acceso de datos`, 'es'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}accessService`),
      namedNode(`${rdfs}label`),
      literal(`servizio di accesso ai dati`, 'it'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}accessService`),
      namedNode(`${rdfs}label`),
      literal(`služba pro přístup k datům`, 'cs'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}accessService`),
      namedNode(`${rdfs}range`),
      namedNode(`${dcat}DataService`),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}accessService`),
      namedNode(`${skos}changeNote`),
      literal(`New property added in DCAT 2.0.`, 'en'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}accessService`),
      namedNode(`${skos}changeNote`),
      literal(`Nová vlastnost přidaná ve verzi DCAT 2.0.`, 'cs'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}accessService`),
      namedNode(`${skos}changeNote`),
      literal(`Nueva propiedad agregada en DCAT 2.0.`, 'es'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}accessService`),
      namedNode(`${skos}changeNote`),
      literal(`Nuova proprietà aggiunta in DCAT 2.0.`, 'it'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}accessService`),
      namedNode(`${skos}changeNote`),
      literal(`Ny egenskab tilføjet i DCAT 2.0.`, 'da'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}accessService`),
      namedNode(`${skos}definition`),
      literal(`A site or end-point that gives access to the distribution of the dataset.`, 'en'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}accessService`),
      namedNode(`${skos}definition`),
      literal(`Et websted eller endpoint der giver adgang til en repræsentation af datasættet.`, 'da'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}accessService`),
      namedNode(`${skos}definition`),
      literal(`Umístění či přístupový bod zpřístupňující distribuci datové sady.`, 'cs'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}accessService`),
      namedNode(`${skos}definition`),
      literal(`Un sitio o end-point que da acceso a la distribución de un conjunto de datos.`, 'es'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}accessService`),
      namedNode(`${skos}definition`),
      literal(`Un sito o end-point che dà accesso alla distribuzione del set di dati.`, 'it'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}accessURL`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}accessURL`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}ObjectProperty`),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}accessURL`),
      namedNode(`${rdfs}comment`),
      literal(`A URL of a resource that gives access to a distribution of the dataset. E.g. landing page, feed, SPARQL endpoint. Use for all cases except a simple download link, in which case downloadURL is preferred.`, 'en'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}accessURL`),
      namedNode(`${rdfs}comment`),
      literal(`Ceci peut être tout type d'URL qui donne accès à une distribution du jeu de données. Par exemple, un lien à une page HTML contenant un lien au jeu de données, un Flux RSS, un point d'accès SPARQL. Utilisez le lorsque votre catalogue ne contient pas d'information sur quoi il est ou quand ce n'est pas téléchargeable.`, 'fr'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}accessURL`),
      namedNode(`${rdfs}comment`),
      literal(`En URL for en ressource som giver adgang til en repræsentation af datsættet. Fx destinationsside, feed, SPARQL-endpoint. Anvendes i alle sammenhænge undtagen til angivelse af et simpelt download link hvor anvendelse af egenskaben downloadURL foretrækkes.`, 'da'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}accessURL`),
      namedNode(`${rdfs}comment`),
      literal(`Puede ser cualquier tipo de URL que de acceso a una distribución del conjunto de datos, e.g., página de destino, descarga, URL feed, punto de acceso SPARQL. Esta propriedad se debe usar cuando su catálogo de datos no tiene información sobre donde está o cuando no se puede descargar.`, 'es'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}accessURL`),
      namedNode(`${rdfs}comment`),
      literal(`URL zdroje, přes které je přístupná distribuce datové sady. Příkladem může být vstupní stránka, RSS kanál či SPARQL endpoint. Použijte ve všech případech kromě URL souboru ke stažení, pro které je lepší použít dcat:downloadURL.`, 'cs'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}accessURL`),
      namedNode(`${rdfs}comment`),
      literal(`Un URL di una risorsa che consente di accedere a una distribuzione del set di dati. Per esempio, pagina di destinazione, feed, endpoint SPARQL. Da utilizzare per tutti i casi, tranne  quando  si tratta di un semplice link per il download nel qual caso è preferito downloadURL.`, 'it'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}accessURL`),
      namedNode(`${rdfs}comment`),
      literal(`Μπορεί να είναι οποιουδήποτε είδους URL που δίνει πρόσβαση στη διανομή ενός συνόλου δεδομένων. Π.χ. ιστοσελίδα αρχικής πρόσβασης, μεταφόρτωση, feed URL, σημείο διάθεσης SPARQL. Να χρησιμοποιείται όταν ο κατάλογος δεν περιέχει πληροφορίες εαν πρόκειται ή όχι για μεταφορτώσιμο αρχείο.`, 'el'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}accessURL`),
      namedNode(`${rdfs}comment`),
      literal(`أي رابط يتيح الوصول إلى البيانات. إذا كان الرابط هو ربط مباشر لملف يمكن تحميله استخدم الخاصية downloadURL`, 'ar'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}accessURL`),
      namedNode(`${rdfs}comment`),
      literal(`データセットの配信にアクセス権を与えるランディング・ページ、フィード、SPARQLエンドポイント、その他の種類の資源。`, 'ja'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}accessURL`),
      namedNode(`${rdfs}domain`),
      namedNode(`${dcat}Distribution`),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}accessURL`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(ns5),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}accessURL`),
      namedNode(`${rdfs}label`),
      literal(`URL d'accès`, 'fr'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}accessURL`),
      namedNode(`${rdfs}label`),
      literal(`URL de acceso`, 'es'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}accessURL`),
      namedNode(`${rdfs}label`),
      literal(`URL πρόσβασης`, 'el'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}accessURL`),
      namedNode(`${rdfs}label`),
      literal(`access address`, 'en'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}accessURL`),
      namedNode(`${rdfs}label`),
      literal(`adgangsadresse`, 'da'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}accessURL`),
      namedNode(`${rdfs}label`),
      literal(`indirizzo di accesso`, 'it'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}accessURL`),
      namedNode(`${rdfs}label`),
      literal(`přístupová adresa`, 'cs'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}accessURL`),
      namedNode(`${rdfs}label`),
      literal(`رابط وصول`, 'ar'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}accessURL`),
      namedNode(`${rdfs}label`),
      literal(`アクセスURL`, 'ja'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}accessURL`),
      namedNode(`${rdfs}range`),
      namedNode(`${rdfs}Resource`),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}accessURL`),
      namedNode(`${owl}propertyChainAxiom`),
      blankNodes[2],
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}accessURL`),
      namedNode(`${skos}altLabel`),
      literal(`adgangsURL`, 'da'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}accessURL`),
      namedNode(`${skos}definition`),
      literal(`A URL of a resource that gives access to a distribution of the dataset. E.g. landing page, feed, SPARQL endpoint. Use for all cases except a simple download link, in which case downloadURL is preferred.`, 'en'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}accessURL`),
      namedNode(`${skos}definition`),
      literal(`Ceci peut être tout type d'URL qui donne accès à une distribution du jeu de données. Par exemple, un lien à une page HTML contenant un lien au jeu de données, un Flux RSS, un point d'accès SPARQL. Utilisez le lorsque votre catalogue ne contient pas d'information sur quoi il est ou quand ce n'est pas téléchargeable.`, 'fr'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}accessURL`),
      namedNode(`${skos}definition`),
      literal(`En URL for en ressource som giver adgang til en repræsentation af datsættet. Fx destinationsside, feed, SPARQL-endpoint. Anvendes i alle sammenhænge undtagen til angivelse af et simpelt download link hvor anvendelse af egenskaben downloadURL foretrækkes.`, 'da'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}accessURL`),
      namedNode(`${skos}definition`),
      literal(`Puede ser cualquier tipo de URL que de acceso a una distribución del conjunto de datos, e.g., página de destino, descarga, URL feed, punto de acceso SPARQL. Esta propriedad se debe usar cuando su catálogo de datos no tiene información sobre donde está o cuando no se puede descargar.`, 'es'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}accessURL`),
      namedNode(`${skos}definition`),
      literal(`URL zdroje, přes které je přístupná distribuce datové sady. Příkladem může být vstupní stránka, RSS kanál či SPARQL endpoint. Použijte ve všech případech kromě URL souboru ke stažení, pro které je lepší použít dcat:downloadURL.`, 'cs'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}accessURL`),
      namedNode(`${skos}definition`),
      literal(`Un URL di una risorsa che consente di accedere a una distribuzione del set di dati. Per esempio, pagina di destinazione, feed, endpoint SPARQL. Da utilizzare per tutti i casi, tranne  quando  si tratta di un semplice link per il download nel qual caso è preferito downloadURL.`, 'it'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}accessURL`),
      namedNode(`${skos}definition`),
      literal(`Μπορεί να είναι οποιουδήποτε είδους URL που δίνει πρόσβαση στη διανομή ενός συνόλου δεδομένων. Π.χ. ιστοσελίδα αρχικής πρόσβασης, μεταφόρτωση, feed URL, σημείο διάθεσης SPARQL. Να χρησιμοποιείται όταν ο κατάλογος δεν περιέχει πληροφορίες εαν πρόκειται ή όχι για μεταφορτώσιμο αρχείο.`, 'el'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}accessURL`),
      namedNode(`${skos}definition`),
      literal(`أي رابط يتيح الوصول إلى البيانات. إذا كان الرابط هو ربط مباشر لملف يمكن تحميله استخدم الخاصية downloadURL`, 'ar'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}accessURL`),
      namedNode(`${skos}definition`),
      literal(`データセットの配信にアクセス権を与えるランディング・ページ、フィード、SPARQLエンドポイント、その他の種類の資源。`, 'ja'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}accessURL`),
      namedNode(`${skos}editorialNote`),
      literal(`Status: English Definition text modified by DCAT revision team, updated Italian and Czech translation provided, translations for other languages pending.`, 'en'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}accessURL`),
      namedNode(`${skos}editorialNote`),
      literal(`rdfs:label, rdfs:comment and skos:scopeNote have been modified. Non-english versions except for Italian must be updated.`, 'en'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}accessURL`),
      namedNode(`${skos}scopeNote`),
      literal(`El rango es una URL. Si la distribución es accesible solamente través de una página de destino (es decir, si no se conoce una URL de descarga directa), entonces el enlance a la página de destino debe ser duplicado como accessURL en la distribución.`, 'es'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}accessURL`),
      namedNode(`${skos}scopeNote`),
      literal(`Hvis en eller flere distributioner kun er tilgængelige via en destinationsside (dvs. en URL til direkte download er ikke kendt), så bør destinationssidelinket gentages som adgangsadresse for distributionen.`, 'da'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}accessURL`),
      namedNode(`${skos}scopeNote`),
      literal(`If the distribution(s) are accessible only through a landing page (i.e. direct download URLs are not known), then the landing page link should be duplicated as accessURL on a distribution.`, 'en'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}accessURL`),
      namedNode(`${skos}scopeNote`),
      literal(`La valeur est une URL. Si la distribution est accessible seulement au travers d'une page d'atterrissage (c-à-dire on n'ignore une URL de téléchargement direct), alors le lien à la page d'atterrissage doit être dupliqué comee accessURL sur la distribution.`, 'fr'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}accessURL`),
      namedNode(`${skos}scopeNote`),
      literal(`Pokud jsou distribuce přístupné pouze přes vstupní stránku (tj. URL pro přímé stažení nejsou známa), pak by URL přístupové stránky mělo být duplikováno ve vlastnosti distribuce accessURL.`, 'cs'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}accessURL`),
      namedNode(`${skos}scopeNote`),
      literal(`Se le distribuzioni sono accessibili solo attraverso una pagina web (ad esempio, gli URL per il download diretto non sono noti), allora il link della pagina web deve essere duplicato come accessURL sulla distribuzione.`, 'it'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}accessURL`),
      namedNode(`${skos}scopeNote`),
      literal(`Η τιμή είναι ένα URL. Αν η/οι διανομή/ές είναι προσβάσιμη/ες μόνο μέσω μίας ιστοσελίδας αρχικής πρόσβασης (δηλαδή αν δεν υπάρχουν γνωστές διευθύνσεις άμεσης μεταφόρτωσης), τότε ο σύνδεσμος της ιστοσελίδας αρχικής πρόσβασης πρέπει να αναπαραχθεί ως accessURL σε μία διανομή.`, 'el'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}accessURL`),
      namedNode(`${skos}scopeNote`),
      literal(`確実にダウンロードでない場合や、ダウンロードかどうかが不明である場合は、downloadURLではなく、accessURLを用いてください。ランディング・ページを通じてしか配信にアクセスできない場合（つまり、直接的なダウンロードURLが不明）は、配信におけるaccessURLとしてランディング・ページのリンクをコピーすべきです（SHOULD）。`, 'ja'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}bbox`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}bbox`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}DatatypeProperty`),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}bbox`),
      namedNode(`${rdfs}domain`),
      namedNode(`${dcterms}Location`),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}bbox`),
      namedNode(`${rdfs}label`),
      literal(`bounding box`, 'da'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}bbox`),
      namedNode(`${rdfs}label`),
      literal(`bounding box`, 'en'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}bbox`),
      namedNode(`${rdfs}label`),
      literal(`cuadro delimitador`, 'es'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}bbox`),
      namedNode(`${rdfs}label`),
      literal(`ohraničení oblasti`, 'cs'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}bbox`),
      namedNode(`${rdfs}label`),
      literal(`quadro di delimitazione`, 'it'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}bbox`),
      namedNode(`${rdfs}range`),
      namedNode(`${rdfs}Literal`),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}bbox`),
      namedNode(`${skos}changeNote`),
      literal(`New property added in DCAT 2.0.`, 'en'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}bbox`),
      namedNode(`${skos}changeNote`),
      literal(`Nová vlastnost přidaná ve verzi DCAT 2.0.`, 'cs'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}bbox`),
      namedNode(`${skos}changeNote`),
      literal(`Nuova proprietà aggiunta in DCAT 2.0.`, 'it'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}bbox`),
      namedNode(`${skos}changeNote`),
      literal(`Ny egenskab tilføjet i DCAT 2.0.`, 'da'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}bbox`),
      namedNode(`${skos}changeNote`),
      literal(`Propiedad nueva agregada en DCAT 2.0.`, 'es'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}bbox`),
      namedNode(`${skos}definition`),
      literal(`Den geografiske omskrevne firkant af en ressource.`, 'da'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}bbox`),
      namedNode(`${skos}definition`),
      literal(`El cuadro delimitador geográfico para un recurso.`, 'es'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}bbox`),
      namedNode(`${skos}definition`),
      literal(`Il riquadro di delimitazione geografica di una risorsa.`, 'it'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}bbox`),
      namedNode(`${skos}definition`),
      literal(`Ohraničení geografické oblasti zdroje.`, 'cs'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}bbox`),
      namedNode(`${skos}definition`),
      literal(`The geographic bounding box of a resource.`, 'en'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}bbox`),
      namedNode(`${skos}scopeNote`),
      literal(`El rango de esta propiedad es intencionalmente genérico con el propósito de permitir distintas codificaciones geométricas. Por ejemplo, la geometría puede ser codificada como WKT (geosparql:wktLiteral [GeoSPARQL]) o [GML] (geosparql:asGML [GeoSPARQL]).`, 'es'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}bbox`),
      namedNode(`${skos}scopeNote`),
      literal(`Il range di questa proprietà è volutamente generica, con lo scopo di consentire diverse codifiche geometriche. Ad esempio, la geometria potrebbe essere codificata con WKT (geosparql:wktLiteral [GeoSPARQL]) o [GML] (geosparql:asGML [GeoSPARQL]).`, 'it'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}bbox`),
      namedNode(`${skos}scopeNote`),
      literal(`Obor hodnot této vlastnosti je úmyslně obecný, aby umožnil různé kódování geometrií. Geometrie by kupříkladu mohla být kódována jako WKT (geosparql:wktLiteral [GeoSPARQL]) či [GML] (geosparql:asGML [GeoSPARQL]).`, 'cs'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}bbox`),
      namedNode(`${skos}scopeNote`),
      literal(`Rækkevidden for denne egenskab er bevidst generisk defineret med det formål at tillade forskellige kodninger af geometrier. Geometrien kan eksempelvis repræsenteres som WKT (geosparql:asWKT [GeoSPARQL]) eller [GML] (geosparql:asGML [GeoSPARQL]).`, 'da'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}bbox`),
      namedNode(`${skos}scopeNote`),
      literal(`The range of this property is intentionally generic, with the purpose of allowing different geometry encodings. E.g., the geometry could be encoded with as WKT (geosparql:wktLiteral [GeoSPARQL]) or [GML] (geosparql:asGML [GeoSPARQL]).`, 'en'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}byteSize`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}byteSize`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}DatatypeProperty`),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}byteSize`),
      namedNode(`${rdfs}comment`),
      literal(`El tamaño de una distribución en bytes.`, 'es'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}byteSize`),
      namedNode(`${rdfs}comment`),
      literal(`La dimensione di una distribuzione in byte.`, 'it'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}byteSize`),
      namedNode(`${rdfs}comment`),
      literal(`La taille de la distribution en octects`, 'fr'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}byteSize`),
      namedNode(`${rdfs}comment`),
      literal(`Størrelsen af en distributionen angivet i bytes.`, 'da'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}byteSize`),
      namedNode(`${rdfs}comment`),
      literal(`The size of a distribution in bytes.`, 'en'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}byteSize`),
      namedNode(`${rdfs}comment`),
      literal(`Velikost distribuce v bajtech.`, 'cs'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}byteSize`),
      namedNode(`${rdfs}comment`),
      literal(`Το μέγεθος μιας διανομής σε bytes.`, 'el'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}byteSize`),
      namedNode(`${rdfs}comment`),
      literal(`الحجم بالبايتات `, 'ar'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}byteSize`),
      namedNode(`${rdfs}comment`),
      literal(`バイトによる配信のサイズ。`, 'ja'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}byteSize`),
      namedNode(`${rdfs}domain`),
      namedNode(`${dcat}Distribution`),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}byteSize`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(ns5),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}byteSize`),
      namedNode(`${rdfs}label`),
      literal(`byte size`, 'en'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}byteSize`),
      namedNode(`${rdfs}label`),
      literal(`bytestørrelse`, 'da'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}byteSize`),
      namedNode(`${rdfs}label`),
      literal(`dimensione in byte`, 'it'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}byteSize`),
      namedNode(`${rdfs}label`),
      literal(`taille en octects`, 'fr'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}byteSize`),
      namedNode(`${rdfs}label`),
      literal(`tamaño en bytes`, 'es'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}byteSize`),
      namedNode(`${rdfs}label`),
      literal(`velikost v bajtech`, 'cs'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}byteSize`),
      namedNode(`${rdfs}label`),
      literal(`μέγεθος σε bytes`, 'el'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}byteSize`),
      namedNode(`${rdfs}label`),
      literal(`الحجم بالبايت`, 'ar'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}byteSize`),
      namedNode(`${rdfs}label`),
      literal(`バイト・サイズ`, 'ja'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}byteSize`),
      namedNode(`${rdfs}range`),
      namedNode(`${rdfs}Literal`),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}byteSize`),
      namedNode(`${skos}definition`),
      literal(`El tamaño de una distribución en bytes.`, 'es'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}byteSize`),
      namedNode(`${skos}definition`),
      literal(`La dimensione di una distribuzione in byte.`, 'it'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}byteSize`),
      namedNode(`${skos}definition`),
      literal(`La taille de la distribution en octects.`, 'fr'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}byteSize`),
      namedNode(`${skos}definition`),
      literal(`Størrelsen af en distribution angivet i bytes.`, 'da'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}byteSize`),
      namedNode(`${skos}definition`),
      literal(`The size of a distribution in bytes.`, 'en'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}byteSize`),
      namedNode(`${skos}definition`),
      literal(`Velikost distribuce v bajtech.`, 'cs'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}byteSize`),
      namedNode(`${skos}definition`),
      literal(`Το μέγεθος μιας διανομής σε bytes.`, 'el'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}byteSize`),
      namedNode(`${skos}definition`),
      literal(`الحجم بالبايتات `, 'ar'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}byteSize`),
      namedNode(`${skos}definition`),
      literal(`バイトによる配信のサイズ。`, 'ja'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}byteSize`),
      namedNode(`${skos}scopeNote`),
      literal(`Bytestørrelsen kan approximeres hvis den præcise størrelse ikke er kendt. Værdien af dcat:byteSize bør angives som xsd:decimal.`, 'da'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}byteSize`),
      namedNode(`${skos}scopeNote`),
      literal(`El tamaño en bytes puede ser aproximado cuando se desconoce el tamaño exacto. El valor literal de dcat:byteSize debe tener tipo 'xsd:decimal'.`, 'es'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}byteSize`),
      namedNode(`${skos}scopeNote`),
      literal(`La dimensione in byte può essere approssimata quando non si conosce la dimensione precisa. Il valore di dcat:byteSize dovrebbe essere espresso come un xsd:decimal.`, 'it'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}byteSize`),
      namedNode(`${skos}scopeNote`),
      literal(`La taille en octects peut être approximative lorsque l'on ignore la taille réelle. La valeur littérale de dcat:byteSize doit être de type xsd:decimal.`, 'fr'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}byteSize`),
      namedNode(`${skos}scopeNote`),
      literal(`The size in bytes can be approximated when the precise size is not known. The literal value of dcat:byteSize should by typed as xsd:decimal.`, 'en'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}byteSize`),
      namedNode(`${skos}scopeNote`),
      literal(`Velikost v bajtech může být přibližná, pokud její přesná hodnota není známa. Literál s hodnotou dcat:byteSize by měl mít datový typ xsd:decimal.`, 'cs'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}byteSize`),
      namedNode(`${skos}scopeNote`),
      literal(`Το μέγεθος σε bytes μπορεί να προσεγγιστεί όταν η ακριβής τιμή δεν είναι γνωστή. Η τιμή της dcat:byteSize θα πρέπει να δίνεται με τύπο δεδομένων xsd:decimal.`, 'el'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}byteSize`),
      namedNode(`${skos}scopeNote`),
      literal(`الحجم يمكن أن يكون تقريبي إذا كان الحجم الدقيق غير معروف`, 'ar'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}byteSize`),
      namedNode(`${skos}scopeNote`),
      literal(`正確なサイズが不明である場合、サイズは、バイトによる近似値を示すことができます。`, 'ja'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}catalog`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}ObjectProperty`),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}catalog`),
      namedNode(`${rdfs}comment`),
      literal(`A catalog whose contents are of interest in the context of this catalog.`, 'en'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}catalog`),
      namedNode(`${rdfs}comment`),
      literal(`Et katalog hvis indhold er relevant i forhold til det aktuelle katalog.`, 'da'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}catalog`),
      namedNode(`${rdfs}comment`),
      literal(`Katalog, jehož obsah je v kontextu tohoto katalogu zajímavý.`, 'cs'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}catalog`),
      namedNode(`${rdfs}comment`),
      literal(`Un catalogo i cui contenuti sono di interesse nel contesto di questo catalogo.`, 'it'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}catalog`),
      namedNode(`${rdfs}comment`),
      literal(`Un catálogo cuyo contenido es de interés en el contexto del catálogo que está siendo descripto.`, 'es'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}catalog`),
      namedNode(`${rdfs}domain`),
      namedNode(`${dcat}Catalog`),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}catalog`),
      namedNode(`${rdfs}label`),
      literal(`catalog`, 'en'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}catalog`),
      namedNode(`${rdfs}label`),
      literal(`catalogo`, 'it'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}catalog`),
      namedNode(`${rdfs}label`),
      literal(`catálogo`, 'es'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}catalog`),
      namedNode(`${rdfs}label`),
      literal(`katalog`, 'cs'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}catalog`),
      namedNode(`${rdfs}label`),
      literal(`katalog`, 'da'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}catalog`),
      namedNode(`${rdfs}range`),
      namedNode(`${dcat}Catalog`),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}catalog`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${dcterms}hasPart`),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}catalog`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${rdfs}member`),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}catalog`),
      namedNode(`${skos}altLabel`),
      literal(`har delkatalog`, 'da'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}catalog`),
      namedNode(`${skos}changeNote`),
      literal(`New property added in DCAT 2.0.`, 'en'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}catalog`),
      namedNode(`${skos}changeNote`),
      literal(`Nová vlastnost přidaná ve verzi DCAT 2.0.`, 'cs'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}catalog`),
      namedNode(`${skos}changeNote`),
      literal(`Nueva propiedad agregada en DCAT 2.0.`, 'es'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}catalog`),
      namedNode(`${skos}changeNote`),
      literal(`Nuova proprietà aggiunta in DCAT 2.0.`, 'it'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}catalog`),
      namedNode(`${skos}definition`),
      literal(`A catalog whose contents are of interest in the context of this catalog.`, 'en'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}catalog`),
      namedNode(`${skos}definition`),
      literal(`Et katalog hvis indhold er relevant i forhold til det aktuelle katalog.`, 'da'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}catalog`),
      namedNode(`${skos}definition`),
      literal(`Katalog, jehož obsah je v kontextu tohoto katalogu zajímavý.`, 'cs'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}catalog`),
      namedNode(`${skos}definition`),
      literal(`Un catalogo i cui contenuti sono di interesse nel contesto di questo catalogo.`, 'it'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}catalog`),
      namedNode(`${skos}definition`),
      literal(`Un catálogo cuyo contenido es de interés en el contexto del catálogo que está siendo descripto.`, 'es'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}centroid`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}centroid`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}DatatypeProperty`),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}centroid`),
      namedNode(`${rdfs}domain`),
      namedNode(`${dcterms}Location`),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}centroid`),
      namedNode(`${rdfs}label`),
      literal(`centroid`, 'cs'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}centroid`),
      namedNode(`${rdfs}label`),
      literal(`centroid`, 'en'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}centroid`),
      namedNode(`${rdfs}label`),
      literal(`centroide`, 'es'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}centroid`),
      namedNode(`${rdfs}label`),
      literal(`centroide`, 'it'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}centroid`),
      namedNode(`${rdfs}label`),
      literal(`geometrisk tyngdepunkt`, 'da'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}centroid`),
      namedNode(`${rdfs}range`),
      namedNode(`${rdfs}Literal`),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}centroid`),
      namedNode(`${skos}altLabel`),
      literal(`centroide`, 'da'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}centroid`),
      namedNode(`${skos}changeNote`),
      literal(`New property added in DCAT 2.0.`, 'en'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}centroid`),
      namedNode(`${skos}changeNote`),
      literal(`Nová vlastnost přidaná ve verzi DCAT 2.0.`, 'cs'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}centroid`),
      namedNode(`${skos}changeNote`),
      literal(`Nueva propiedad agregada en DCAT 2.0.`, 'es'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}centroid`),
      namedNode(`${skos}changeNote`),
      literal(`Nuova proprietà aggiunta in DCAT 2.0.`, 'it'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}centroid`),
      namedNode(`${skos}changeNote`),
      literal(`Ny egenskab tilføjet i DCAT 2.0.`, 'da'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}centroid`),
      namedNode(`${skos}definition`),
      literal(`Det geometrisk tyngdepunkt (centroid) for en ressource.`, 'da'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}centroid`),
      namedNode(`${skos}definition`),
      literal(`El centro geográfico (centroide) de un recurso.`, 'es'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}centroid`),
      namedNode(`${skos}definition`),
      literal(`Geografický střed (centroid) zdroje.`, 'cs'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}centroid`),
      namedNode(`${skos}definition`),
      literal(`Il centro geografico (centroide) di una risorsa.`, 'it'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}centroid`),
      namedNode(`${skos}definition`),
      literal(`The geographic center (centroid) of a resource.`, 'en'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}centroid`),
      namedNode(`${skos}scopeNote`),
      literal(`El rango de esta propiedad es intencionalmente genérico con el objetivo de permitir distintas codificaciones geométricas. Por ejemplo, la geometría puede codificarse como WKT (geosparql:wktLiteral [GeoSPARQL]) o [GML] (geosparql:asGML [GeoSPARQL]).`, 'es'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}centroid`),
      namedNode(`${skos}scopeNote`),
      literal(`Il range di questa proprietà è volutamente generica, con lo scopo di consentire diverse codifiche geometriche. Ad esempio, la geometria potrebbe essere codificata con WKT (geosparql:wktLiteral [GeoSPARQL]) o [GML] (geosparql:asGML [GeoSPARQL]).`, 'it'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}centroid`),
      namedNode(`${skos}scopeNote`),
      literal(`Obor hodnot této vlastnosti je úmyslně obecný, aby umožnil různé kódování geometrií. Geometrie by kupříkladu mohla být kódována jako WKT (geosparql:wktLiteral [GeoSPARQL]) či [GML] (geosparql:asGML [GeoSPARQL]).`, 'cs'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}centroid`),
      namedNode(`${skos}scopeNote`),
      literal(`Rækkevidden for denne egenskab er bevidst generisk definere med det formål at tillade forskellige geokodninger. Geometrien kan eksempelvis repræsenteres som WKT (geosparql:asWKT [GeoSPARQL]) eller [GML] (geosparql:asGML [GeoSPARQL]).`, 'da'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}centroid`),
      namedNode(`${skos}scopeNote`),
      literal(`The range of this property is intentionally generic, with the purpose of allowing different geometry encodings. E.g., the geometry could be encoded with as WKT (geosparql:wktLiteral [GeoSPARQL]) or [GML] (geosparql:asGML [GeoSPARQL]).`, 'en'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}compressFormat`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}compressFormat`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}ObjectProperty`),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}compressFormat`),
      namedNode(`${rdfs}comment`),
      literal(`El formato de la distribución en el que los datos están en forma comprimida, e.g. para reducir el tamaño del archivo a bajar.`, 'es'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}compressFormat`),
      namedNode(`${rdfs}comment`),
      literal(`Formát komprese souboru, ve kterém jsou data poskytována v komprimované podobě, např. ke snížení velikosti souboru ke stažení.`, 'cs'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}compressFormat`),
      namedNode(`${rdfs}comment`),
      literal(`Il formato di compressione della distribuzione nel quale i dati sono in forma compressa, ad es. per ridurre le dimensioni del file da scaricare.`, 'it'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}compressFormat`),
      namedNode(`${rdfs}comment`),
      literal(`Kompressionsformatet for distributionen som indeholder data i et komprimeret format, fx for at reducere størrelsen af downloadfilen.`, 'da'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}compressFormat`),
      namedNode(`${rdfs}comment`),
      literal(`The compression format of the distribution in which the data is contained in a compressed form, e.g. to reduce the size of the downloadable file.`, 'en'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}compressFormat`),
      namedNode(`${rdfs}domain`),
      namedNode(`${dcat}Distribution`),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}compressFormat`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(ns9),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}compressFormat`),
      namedNode(`${rdfs}label`),
      literal(`compression format`, 'en'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}compressFormat`),
      namedNode(`${rdfs}label`),
      literal(`formato de compresión`, 'es'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}compressFormat`),
      namedNode(`${rdfs}label`),
      literal(`formato di compressione`, 'it'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}compressFormat`),
      namedNode(`${rdfs}label`),
      literal(`formát komprese`, 'cs'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}compressFormat`),
      namedNode(`${rdfs}label`),
      literal(`kompressionsformat`, 'da'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}compressFormat`),
      namedNode(`${rdfs}range`),
      namedNode(`${dcterms}MediaType`),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}compressFormat`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${dcterms}format`),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}compressFormat`),
      namedNode(`${skos}changeNote`),
      literal(`New property added in DCAT 2.0.`, 'en'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}compressFormat`),
      namedNode(`${skos}changeNote`),
      literal(`Nová vlastnost přidaná ve verzi DCAT 2.0.`, 'cs'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}compressFormat`),
      namedNode(`${skos}changeNote`),
      literal(`Nueva propiedad agregada en DCAT 2.0.`, 'es'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}compressFormat`),
      namedNode(`${skos}changeNote`),
      literal(`Nuova proprietà aggiunta in DCAT 2.0.`, 'it'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}compressFormat`),
      namedNode(`${skos}changeNote`),
      literal(`Ny egenskab tilføjet i DCAT 2.0.`, 'da'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}compressFormat`),
      namedNode(`${skos}definition`),
      literal(`El formato de la distribución en el que los datos están en forma comprimida, e.g. para reducir el tamaño del archivo a bajar.`, 'es'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}compressFormat`),
      namedNode(`${skos}definition`),
      literal(`Formát komprese souboru, ve kterém jsou data poskytována v komprimované podobě, např. ke snížení velikosti souboru ke stažení.`, 'cs'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}compressFormat`),
      namedNode(`${skos}definition`),
      literal(`Il formato di compressione della distribuzione nel quale i dati sono in forma compressa, ad es. per ridurre le dimensioni del file da scaricare.`, 'it'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}compressFormat`),
      namedNode(`${skos}definition`),
      literal(`Kompressionsformatet for distributionen som indeholder data i et komprimeret format, fx for at reducere størrelsen af downloadfilen.`, 'da'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}compressFormat`),
      namedNode(`${skos}definition`),
      literal(`The compression format of the distribution in which the data is contained in a compressed form, e.g. to reduce the size of the downloadable file.`, 'en'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}compressFormat`),
      namedNode(`${skos}scopeNote`),
      literal(`Denne egenskab kan anvendes når filerne i en distribution er blevet komprimeret, fx i en ZIP-fil. Formatet BØR udtrykkes ved en medietype som defineret i 'IANA media types registry', hvis der optræder en relevant medietype dér: https://www.iana.org/assignments/media-types/.`, 'da'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}compressFormat`),
      namedNode(`${skos}scopeNote`),
      literal(`Esta propiedad se debe usar cuando los archivos de la distribución están comprimidos, por ejemplo en un archivo ZIP. El formato DEBERÍA expresarse usando un 'media type', tales como los definidos en el registro IANA de 'media types' https://www.iana.org/assignments/media-types/, si está disponibles.`, 'es'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}compressFormat`),
      namedNode(`${skos}scopeNote`),
      literal(`Questa proprietà deve essere utilizzata quando i file nella distribuzione sono compressi, ad es. in un file ZIP. Il formato DOVREBBE essere espresso usando un tipo di media come definito dal registro dei tipi di media IANA https://www.iana.org/assignments/media-types/, se disponibile.`, 'it'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}compressFormat`),
      namedNode(`${skos}scopeNote`),
      literal(`Tato vlastnost se použije, když jsou soubory v distribuci komprimovány, např. v ZIP souboru. Formát BY MĚL být vyjádřen pomocí typu média definovaného v registru IANA https://www.iana.org/assignments/media-types/, pokud existuje.`, 'cs'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}compressFormat`),
      namedNode(`${skos}scopeNote`),
      literal(`This property is to be used when the files in the distribution are compressed, e.g. in a ZIP file. The format SHOULD be expressed using a media type as defined by IANA media types registry https://www.iana.org/assignments/media-types/, if available.`, 'en'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}contactPoint`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}contactPoint`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}ObjectProperty`),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}contactPoint`),
      namedNode(`${rdfs}comment`),
      literal(`Información relevante de contacto para el recurso catalogado. Se recomienda el uso de vCard.`, 'es'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}contactPoint`),
      namedNode(`${rdfs}comment`),
      literal(`Informazioni di contatto rilevanti per la risorsa catalogata. Si raccomanda l'uso di vCard.`, 'it'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}contactPoint`),
      namedNode(`${rdfs}comment`),
      literal(`Relevant contact information for the catalogued resource. Use of vCard is recommended.`, 'en'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}contactPoint`),
      namedNode(`${rdfs}comment`),
      literal(`Relevante kontaktoplysninger for den katalogiserede ressource. Anvendelse af vCard anbefales.`, 'da'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}contactPoint`),
      namedNode(`${rdfs}comment`),
      literal(`Relevantní kontaktní informace pro katalogizovaný zdroj. Doporučuje se použít slovník VCard.`, 'cs'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}contactPoint`),
      namedNode(`${rdfs}comment`),
      literal(`Relie un jeu de données à une information de contact utile en utilisant VCard.`, 'fr'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}contactPoint`),
      namedNode(`${rdfs}comment`),
      literal(`Συνδέει ένα σύνολο δεδομένων με ένα σχετικό σημείο επικοινωνίας, μέσω VCard.`, 'el'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}contactPoint`),
      namedNode(`${rdfs}comment`),
      literal(`تربط قائمة البيانات بعنوان اتصال موصف  باستخدام VCard`, 'ar'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}contactPoint`),
      namedNode(`${rdfs}comment`),
      literal(`データセットを、VCardを用いて提供されている適切な連絡先情報にリンクします。`, 'ja'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}contactPoint`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(ns5),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}contactPoint`),
      namedNode(`${rdfs}label`),
      literal(`Punto de contacto`, 'es'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}contactPoint`),
      namedNode(`${rdfs}label`),
      literal(`contact point`, 'en'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}contactPoint`),
      namedNode(`${rdfs}label`),
      literal(`kontaktní bod`, 'cs'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}contactPoint`),
      namedNode(`${rdfs}label`),
      literal(`kontaktpunkt`, 'da'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}contactPoint`),
      namedNode(`${rdfs}label`),
      literal(`point de contact`, 'fr'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}contactPoint`),
      namedNode(`${rdfs}label`),
      literal(`punto di contatto`, 'it'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}contactPoint`),
      namedNode(`${rdfs}label`),
      literal(`σημείο επικοινωνίας`, 'el'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}contactPoint`),
      namedNode(`${rdfs}label`),
      literal(`عنوان اتصال`, 'ar'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}contactPoint`),
      namedNode(`${rdfs}label`),
      literal(`窓口`, 'ja'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}contactPoint`),
      namedNode(`${rdfs}range`),
      namedNode(`${vcard}Kind`),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}contactPoint`),
      namedNode(`${skos}definition`),
      literal(`Información relevante de contacto para el recurso catalogado. Se recomienda el uso de vCard.`, 'es'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}contactPoint`),
      namedNode(`${skos}definition`),
      literal(`Informazioni di contatto rilevanti per la risorsa catalogata. Si raccomanda l'uso di vCard.`, 'it'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}contactPoint`),
      namedNode(`${skos}definition`),
      literal(`Relevant contact information for the catalogued resource. Use of vCard is recommended.`, 'en'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}contactPoint`),
      namedNode(`${skos}definition`),
      literal(`Relevante kontaktoplysninger for den katalogiserede ressource. Anvendelse af vCard anbefales.`, 'da'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}contactPoint`),
      namedNode(`${skos}definition`),
      literal(`Relevantní kontaktní informace pro katalogizovaný zdroj. Doporučuje se použít slovník VCard.`, 'cs'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}contactPoint`),
      namedNode(`${skos}definition`),
      literal(`Relie un jeu de données à une information de contact utile en utilisant VCard.`, 'fr'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}contactPoint`),
      namedNode(`${skos}definition`),
      literal(`Συνδέει ένα σύνολο δεδομένων με ένα σχετικό σημείο επικοινωνίας, μέσω VCard.`, 'el'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}contactPoint`),
      namedNode(`${skos}definition`),
      literal(`تربط قائمة البيانات بعنوان اتصال موصف  باستخدام VCard`, 'ar'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}contactPoint`),
      namedNode(`${skos}definition`),
      literal(`データセットを、VCardを用いて提供されている適切な連絡先情報にリンクします。`, 'ja'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}contactPoint`),
      namedNode(`${skos}editorialNote`),
      literal(`Status: English Definition text modified by DCAT revision team, Italian, Spanish and Czech translations provided, other translations pending.`, 'en'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}dataset`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}dataset`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}ObjectProperty`),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}dataset`),
      namedNode(`${rdfs}comment`),
      literal(`A collection of data that is listed in the catalog.`, 'en'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}dataset`),
      namedNode(`${rdfs}comment`),
      literal(`En samling af data som er opført i kataloget.`, 'da'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}dataset`),
      namedNode(`${rdfs}comment`),
      literal(`Kolekce dat, která je katalogizována v katalogu.`, 'cs'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}dataset`),
      namedNode(`${rdfs}comment`),
      literal(`Relie un catalogue à un jeu de données faisant partie de ce catalogue.`, 'fr'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}dataset`),
      namedNode(`${rdfs}comment`),
      literal(`Un conjunto de datos que se lista en el catálogo.`, 'es'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}dataset`),
      namedNode(`${rdfs}comment`),
      literal(`Una raccolta di dati che è elencata nel catalogo.`, 'it'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}dataset`),
      namedNode(`${rdfs}comment`),
      literal(`Συνδέει έναν κατάλογο με ένα σύνολο δεδομένων το οποίο ανήκει στον εν λόγω κατάλογο.`, 'el'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}dataset`),
      namedNode(`${rdfs}comment`),
      literal(`تربط الفهرس بقائمة بيانات ضمنه`, 'ar'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}dataset`),
      namedNode(`${rdfs}comment`),
      literal(`カタログの一部であるデータセット。`, 'ja'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}dataset`),
      namedNode(`${rdfs}domain`),
      namedNode(`${dcat}Catalog`),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}dataset`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(ns5),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}dataset`),
      namedNode(`${rdfs}label`),
      literal(`conjunto de datos`, 'es'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}dataset`),
      namedNode(`${rdfs}label`),
      literal(`dataset`, 'en'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}dataset`),
      namedNode(`${rdfs}label`),
      literal(`dataset`, 'it'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}dataset`),
      namedNode(`${rdfs}label`),
      literal(`datasæt`, 'da'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}dataset`),
      namedNode(`${rdfs}label`),
      literal(`datová sada`, 'cs'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}dataset`),
      namedNode(`${rdfs}label`),
      literal(`jeu de données`, 'fr'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}dataset`),
      namedNode(`${rdfs}label`),
      literal(`σύνολο δεδομένων`, 'el'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}dataset`),
      namedNode(`${rdfs}label`),
      literal(`قائمة بيانات`, 'ar'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}dataset`),
      namedNode(`${rdfs}label`),
      literal(`データセット`, 'ja'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}dataset`),
      namedNode(`${rdfs}range`),
      namedNode(`${dcat}Dataset`),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}dataset`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${dcterms}hasPart`),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}dataset`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${rdfs}member`),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}dataset`),
      namedNode(`${skos}altLabel`),
      literal(`datasamling`, 'da'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}dataset`),
      namedNode(`${skos}altLabel`),
      literal(`har datasæt`, 'da'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}dataset`),
      namedNode(`${skos}definition`),
      literal(`A collection of data that is listed in the catalog.`, 'en'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}dataset`),
      namedNode(`${skos}definition`),
      literal(`En samling af data som er opført i kataloget.`, 'da'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}dataset`),
      namedNode(`${skos}definition`),
      literal(`Kolekce dat, která je katalogizována v katalogu.`, 'cs'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}dataset`),
      namedNode(`${skos}definition`),
      literal(`Relie un catalogue à un jeu de données faisant partie de ce catalogue.`, 'fr'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}dataset`),
      namedNode(`${skos}definition`),
      literal(`Un conjunto de datos que se lista en el catálogo.`, 'es'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}dataset`),
      namedNode(`${skos}definition`),
      literal(`Una raccolta di dati che è elencata nel catalogo.`, 'it'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}dataset`),
      namedNode(`${skos}definition`),
      literal(`Συνδέει έναν κατάλογο με ένα σύνολο δεδομένων το οποίο ανήκει στον εν λόγω κατάλογο.`, 'el'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}dataset`),
      namedNode(`${skos}definition`),
      literal(`تربط الفهرس بقائمة بيانات ضمنه`, 'ar'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}dataset`),
      namedNode(`${skos}definition`),
      literal(`カタログの一部であるデータセット。`, 'ja'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}dataset`),
      namedNode(`${skos}editorialNote`),
      literal(`Status: English Definition text modified by DCAT revision team, Italian, Spanish and Czech translation provided, other translations pending.`, 'en'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}distribution`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}distribution`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}ObjectProperty`),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}distribution`),
      namedNode(`${rdfs}comment`),
      literal(`An available distribution of the dataset.`, 'en'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}distribution`),
      namedNode(`${rdfs}comment`),
      literal(`Connecte un jeu de données à des distributions disponibles.`, 'fr'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}distribution`),
      namedNode(`${rdfs}comment`),
      literal(`Dostupná distribuce datové sady.`, 'cs'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}distribution`),
      namedNode(`${rdfs}comment`),
      literal(`En tilgængelig repræsentation af datasættet.`, 'da'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}distribution`),
      namedNode(`${rdfs}comment`),
      literal(`Una distribución disponible del conjunto de datos.`, 'es'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}distribution`),
      namedNode(`${rdfs}comment`),
      literal(`Una distribuzione disponibile per il set di dati.`, 'it'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}distribution`),
      namedNode(`${rdfs}comment`),
      literal(`Συνδέει ένα σύνολο δεδομένων με μία από τις διαθέσιμες διανομές του.`, 'el'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}distribution`),
      namedNode(`${rdfs}comment`),
      literal(`تربط قائمة البيانات بطريقة أو بشكل يسمح  الوصول الى البيانات`, 'ar'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}distribution`),
      namedNode(`${rdfs}comment`),
      literal(`データセットを、その利用可能な配信に接続します。`, 'ja'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}distribution`),
      namedNode(`${rdfs}domain`),
      namedNode(`${dcat}Dataset`),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}distribution`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(ns5),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}distribution`),
      namedNode(`${rdfs}label`),
      literal(`distribuce`, 'cs'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}distribution`),
      namedNode(`${rdfs}label`),
      literal(`distribución`, 'es'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}distribution`),
      namedNode(`${rdfs}label`),
      literal(`distribution`, 'da'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}distribution`),
      namedNode(`${rdfs}label`),
      literal(`distribution`, 'en'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}distribution`),
      namedNode(`${rdfs}label`),
      literal(`distribution`, 'fr'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}distribution`),
      namedNode(`${rdfs}label`),
      literal(`distribuzione`, 'it'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}distribution`),
      namedNode(`${rdfs}label`),
      literal(`διανομή`, 'el'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}distribution`),
      namedNode(`${rdfs}label`),
      literal(`توزيع`, 'ar'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}distribution`),
      namedNode(`${rdfs}label`),
      literal(`データセット配信`, 'ja'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}distribution`),
      namedNode(`${rdfs}range`),
      namedNode(`${dcat}Distribution`),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}distribution`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${dcterms}relation`),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}distribution`),
      namedNode(`${skos}altLabel`),
      literal(`har distribution`, 'da'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}distribution`),
      namedNode(`${skos}definition`),
      literal(`An available distribution of the dataset.`, 'en'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}distribution`),
      namedNode(`${skos}definition`),
      literal(`Connecte un jeu de données à des distributions disponibles.`, 'fr'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}distribution`),
      namedNode(`${skos}definition`),
      literal(`Dostupná distribuce datové sady.`, 'cs'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}distribution`),
      namedNode(`${skos}definition`),
      literal(`En tilgængelig repræsentation af datasættet.`, 'da'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}distribution`),
      namedNode(`${skos}definition`),
      literal(`Una distribución disponible del conjunto de datos.`, 'es'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}distribution`),
      namedNode(`${skos}definition`),
      literal(`Una distribuzione disponibile per il set di dati.`, 'it'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}distribution`),
      namedNode(`${skos}definition`),
      literal(`Συνδέει ένα σύνολο δεδομένων με μία από τις διαθέσιμες διανομές του.`, 'el'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}distribution`),
      namedNode(`${skos}definition`),
      literal(`تربط قائمة البيانات بطريقة أو بشكل يسمح  الوصول الى البيانات`, 'ar'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}distribution`),
      namedNode(`${skos}definition`),
      literal(`データセットを、その利用可能な配信に接続します。`, 'ja'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}distribution`),
      namedNode(`${skos}editorialNote`),
      literal(`Status: English Definition text modified by DCAT revision team, translations pending (except for Italian, Spanish and Czech).`, 'en'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}downloadURL`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}downloadURL`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}ObjectProperty`),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}downloadURL`),
      namedNode(`${rdfs}comment`),
      literal(`Ceci est un lien direct à un fichier téléchargeable en un format donnée. Exple fichier CSV ou RDF. Le format est décrit par les propriétés de distribution dct:format et/ou dcat:mediaType.`, 'fr'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}downloadURL`),
      namedNode(`${rdfs}comment`),
      literal(`La URL de un archivo descargable en el formato dato. Por ejemplo, archivo CSV o archivo RDF. El formato se describe con las propiedades de la distribución dct:format y/o dcat:mediaType.`, 'es'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}downloadURL`),
      namedNode(`${rdfs}comment`),
      literal(`Questo è un link diretto al file scaricabile in un dato formato. E.g. un file CSV o un file RDF. Il formato è descritto dal dct:format e/o dal dcat:mediaType della distribuzione.`, 'it'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}downloadURL`),
      namedNode(`${rdfs}comment`),
      literal(`The URL of the downloadable file in a given format. E.g. CSV file or RDF file. The format is indicated by the distribution's dct:format and/or dcat:mediaType.`, 'en'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}downloadURL`),
      namedNode(`${rdfs}comment`),
      literal(`URL souboru ke stažení v daném formátu, například CSV nebo RDF soubor. Formát je popsán vlastností distribuce dct:format a/nebo dcat:mediaType.`, 'cs'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}downloadURL`),
      namedNode(`${rdfs}comment`),
      literal(`URL til fil der kan downloades i et bestemt format. Fx en CSV-fil eller en RDF-fil. Formatet for distributionen angives ved hjælp af egenskaberne dct:format og/eller dcat:mediaType.`, 'da'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}downloadURL`),
      namedNode(`${rdfs}comment`),
      literal(`dcat:downloadURLはdcat:accessURLの特定の形式です。しかし、DCATプロファイルが非ダウンロード・ロケーションに対してのみaccessURLを用いる場合には、より強い分離を課すことを望む可能性があるため、この含意を強化しないように、DCATは、dcat:downloadURLをdcat:accessURLのサブプロパティーであると定義しません。`, 'ja'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}downloadURL`),
      namedNode(`${rdfs}comment`),
      literal(`Είναι ένας σύνδεσμος άμεσης μεταφόρτωσης ενός αρχείου σε μια δεδομένη μορφή. Π.χ. ένα αρχείο CSV ή RDF. Η μορφη αρχείου περιγράφεται από τις ιδιότητες dct:format ή/και dcat:mediaType της διανομής.`, 'el'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}downloadURL`),
      namedNode(`${rdfs}comment`),
      literal(`رابط مباشر لملف يمكن تحميله. نوع الملف يتم توصيفه باستخدام الخاصية dct:format dcat:mediaType `, 'ar'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}downloadURL`),
      namedNode(`${rdfs}domain`),
      namedNode(`${dcat}Distribution`),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}downloadURL`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(ns5),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}downloadURL`),
      namedNode(`${rdfs}label`),
      literal(`URL de descarga`, 'es'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}downloadURL`),
      namedNode(`${rdfs}label`),
      literal(`URL de téléchargement`, 'fr'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}downloadURL`),
      namedNode(`${rdfs}label`),
      literal(`URL di scarico`, 'it'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}downloadURL`),
      namedNode(`${rdfs}label`),
      literal(`URL souboru ke stažení`, 'cs'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}downloadURL`),
      namedNode(`${rdfs}label`),
      literal(`URL μεταφόρτωσης`, 'el'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}downloadURL`),
      namedNode(`${rdfs}label`),
      literal(`download URL`, 'en'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}downloadURL`),
      namedNode(`${rdfs}label`),
      literal(`downloadURL`, 'da'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}downloadURL`),
      namedNode(`${rdfs}label`),
      literal(`رابط تحميل`, 'ar'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}downloadURL`),
      namedNode(`${rdfs}label`),
      literal(`ダウンロードURL`, 'ja'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}downloadURL`),
      namedNode(`${rdfs}range`),
      namedNode(`${rdfs}Resource`),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}downloadURL`),
      namedNode(`${skos}definition`),
      literal(`Ceci est un lien direct à un fichier téléchargeable en un format donnée. Exple fichier CSV ou RDF. Le format est décrit par les propriétés de distribution dct:format et/ou dcat:mediaType.`, 'fr'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}downloadURL`),
      namedNode(`${skos}definition`),
      literal(`La URL de un archivo descargable en el formato dato. Por ejemplo, archivo CSV o archivo RDF. El formato se describe con las propiedades de la distribución dct:format y/o dcat:mediaType.`, 'es'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}downloadURL`),
      namedNode(`${skos}definition`),
      literal(`Questo è un link diretto al file scaricabile in un dato formato. E.g. un file CSV o un file RDF. Il formato è descritto dal dct:format e/o dal dcat:mediaType della distribuzione.`, 'it'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}downloadURL`),
      namedNode(`${skos}definition`),
      literal(`The URL of the downloadable file in a given format. E.g. CSV file or RDF file. The format is indicated by the distribution's dct:format and/or dcat:mediaType.`, 'en'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}downloadURL`),
      namedNode(`${skos}definition`),
      literal(`URL souboru ke stažení v daném formátu, například CSV nebo RDF soubor. Formát je popsán vlastností distribuce dct:format a/nebo dcat:mediaType.`, 'cs'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}downloadURL`),
      namedNode(`${skos}definition`),
      literal(`URL til fil der kan downloades i et bestemt format. Fx en CSV-fil eller en RDF-fil. Formatet for distributionen angives ved hjælp af egenskaberne dct:format og/eller dcat:mediaType.`, 'da'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}downloadURL`),
      namedNode(`${skos}definition`),
      literal(`dcat:downloadURLはdcat:accessURLの特定の形式です。しかし、DCATプロファイルが非ダウンロード・ロケーションに対してのみaccessURLを用いる場合には、より強い分離を課すことを望む可能性があるため、この含意を強化しないように、DCATは、dcat:downloadURLをdcat:accessURLのサブプロパティーであると定義しません。`, 'ja'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}downloadURL`),
      namedNode(`${skos}definition`),
      literal(`Είναι ένας σύνδεσμος άμεσης μεταφόρτωσης ενός αρχείου σε μια δεδομένη μορφή. Π.χ. ένα αρχείο CSV ή RDF. Η μορφη αρχείου περιγράφεται από τις ιδιότητες dct:format ή/και dcat:mediaType της διανομής.`, 'el'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}downloadURL`),
      namedNode(`${skos}definition`),
      literal(`رابط مباشر لملف يمكن تحميله. نوع الملف يتم توصيفه باستخدام الخاصية dct:format dcat:mediaType `, 'ar'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}downloadURL`),
      namedNode(`${skos}editorialNote`),
      literal(`Status: English  Definition text modified by DCAT revision team, Italian, Spanish and Czech translation updated, other translations pending.`, 'en'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}downloadURL`),
      namedNode(`${skos}editorialNote`),
      literal(`rdfs:label, rdfs:comment and/or skos:scopeNote have been modified. Non-english versions must be updated.`, 'en'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}downloadURL`),
      namedNode(`${skos}scopeNote`),
      literal(`El valor es una URL.`, 'es'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}downloadURL`),
      namedNode(`${skos}scopeNote`),
      literal(`La valeur est une URL.`, 'fr'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}downloadURL`),
      namedNode(`${skos}scopeNote`),
      literal(`dcat:downloadURL BY MĚLA být použita pro adresu, ze které je distribuce přímo přístupná, typicky skrze požadavek HTTP Get.`, 'cs'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}downloadURL`),
      namedNode(`${skos}scopeNote`),
      literal(`dcat:downloadURL BØR anvendes til angivelse af den adresse hvor distributionen er tilgængelig direkte, typisk gennem et HTTP Get request.`, 'da'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}downloadURL`),
      namedNode(`${skos}scopeNote`),
      literal(`dcat:downloadURL DOVREBBE essere utilizzato per l'indirizzo a cui questa distribuzione è disponibile direttamente, in genere attraverso una richiesta Get HTTP.`, 'it'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}downloadURL`),
      namedNode(`${skos}scopeNote`),
      literal(`dcat:downloadURL SHOULD be used for the address at which this distribution is available directly, typically through a HTTP Get request.`, 'en'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}downloadURL`),
      namedNode(`${skos}scopeNote`),
      literal(`Η τιμή είναι ένα URL.`, 'el'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}endDate`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}endDate`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}DatatypeProperty`),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}endDate`),
      namedNode(`${rdfs}domain`),
      namedNode(`${dcterms}PeriodOfTime`),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}endDate`),
      namedNode(`${rdfs}label`),
      literal(`data di fine`, 'it'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}endDate`),
      namedNode(`${rdfs}label`),
      literal(`datum konce`, 'cs'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}endDate`),
      namedNode(`${rdfs}label`),
      literal(`end date`, 'en'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}endDate`),
      namedNode(`${rdfs}label`),
      literal(`fecha final`, 'es'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}endDate`),
      namedNode(`${rdfs}label`),
      literal(`slutdato`, 'da'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}endDate`),
      namedNode(`${rdfs}range`),
      namedNode(`${rdfs}Literal`),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}endDate`),
      namedNode(`${skos}altLabel`),
      literal(`sluttidspunkt`, 'da'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}endDate`),
      namedNode(`${skos}changeNote`),
      literal(`New property added in DCAT 2.0.`, 'en'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}endDate`),
      namedNode(`${skos}changeNote`),
      literal(`Nová vlastnost přidaná ve verzi DCAT 2.0.`, 'cs'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}endDate`),
      namedNode(`${skos}changeNote`),
      literal(`Nueva propiedad agregada en DCAT 2.0.`, 'es'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}endDate`),
      namedNode(`${skos}changeNote`),
      literal(`Nuova proprietà aggiunta in DCAT 2.0.`, 'it'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}endDate`),
      namedNode(`${skos}changeNote`),
      literal(`Ny egenskab i DCAT 2.0.`, 'da'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}endDate`),
      namedNode(`${skos}definition`),
      literal(`El fin del período.`, 'es'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}endDate`),
      namedNode(`${skos}definition`),
      literal(`Konec doby trvání.`, 'cs'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}endDate`),
      namedNode(`${skos}definition`),
      literal(`La fine del periodo.`, 'it'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}endDate`),
      namedNode(`${skos}definition`),
      literal(`Slutningen på perioden.`, 'da'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}endDate`),
      namedNode(`${skos}definition`),
      literal(`The end of the period.`, 'en'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}endDate`),
      namedNode(`${skos}scopeNote`),
      literal(`El rango de esta propiedad es intencionalmente genérico con el propósito de permitir distintos niveles de precisión temporal para especificar el fin del período. Por ejemplo, puede expresarse como una fecha (xsd:date), una fecha y un tiempo (xsd:dateTime), o un año (xsd:gYear).`, 'es'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}endDate`),
      namedNode(`${skos}scopeNote`),
      literal(`La range di questa proprietà è volutamente generico, con lo scopo di consentire diversi livelli di precisione temporale per specificare la fine di un periodo. Ad esempio, può essere espresso con una data (xsd:date), una data e un'ora (xsd:dateTime), o un anno (xsd:gYear).`, 'it'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}endDate`),
      namedNode(`${skos}scopeNote`),
      literal(`Obor hodnot této vlastnosti je úmyslně obecný, aby umožnil různé úrovně časového rozlišení pro specifikaci konce doby trvání. Ten může být kupříkladu vyjádřen datumem (xsd:date), datumem a časem (xsd:dateTime) či rokem (xsd:gYear).`, 'cs'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}endDate`),
      namedNode(`${skos}scopeNote`),
      literal(`Rækkeviden for denne egenskab er bevidst generisk defineret med det formål at tillade forskellige niveauer af tidslig præcision ifm. angivelse af slutdatoen for en periode. Den kan eksempelvis udtrykkes som en dato (xsd:date), en dato og et tidspunkt (xsd:dateTime), eller et årstal (xsd:gYear).`, 'da'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}endDate`),
      namedNode(`${skos}scopeNote`),
      literal(`The range of this property is intentionally generic, with the purpose of allowing different level of temporal precision for specifying the end of a period. E.g., it can be expressed with a date (xsd:date), a date and time (xsd:dateTime), or a year (xsd:gYear).`, 'en'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}endpointDescription`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}ObjectProperty`),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}endpointDescription`),
      namedNode(`${rdfs}comment`),
      literal(`A description of the service end-point, including its operations, parameters etc.`, 'en'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}endpointDescription`),
      namedNode(`${rdfs}comment`),
      literal(`En beskrivelse af det pågældende tjenesteendpoint, inklusiv dets operationer, parametre etc.`, 'da'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}endpointDescription`),
      namedNode(`${rdfs}comment`),
      literal(`Popis přístupového bodu služby včetně operací, parametrů apod.`, 'cs'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}endpointDescription`),
      namedNode(`${rdfs}comment`),
      literal(`Una descripción del end-point del servicio, incluyendo sus operaciones, parámetros, etc.`, 'es'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}endpointDescription`),
      namedNode(`${rdfs}comment`),
      literal(`Una descrizione dell'endpoint del servizio, incluse le sue operazioni, parametri, ecc.`, 'it'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}endpointDescription`),
      namedNode(`${rdfs}domain`),
      namedNode(`${dcat}DataService`),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}endpointDescription`),
      namedNode(`${rdfs}label`),
      literal(`descripción del end-point del servicio`, 'es'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}endpointDescription`),
      namedNode(`${rdfs}label`),
      literal(`description of service end-point`, 'en'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}endpointDescription`),
      namedNode(`${rdfs}label`),
      literal(`descrizione dell'endpoint del servizio`, 'it'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}endpointDescription`),
      namedNode(`${rdfs}label`),
      literal(`endpointbeskrivelse`, 'da'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}endpointDescription`),
      namedNode(`${rdfs}label`),
      literal(`popis přístupového bodu služby`, 'cs'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}endpointDescription`),
      namedNode(`${skos}changeNote`),
      literal(`New property in DCAT 2.0.`, 'en'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}endpointDescription`),
      namedNode(`${skos}changeNote`),
      literal(`Nová vlastnost přidaná ve verzi DCAT 2.0.`, 'cs'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}endpointDescription`),
      namedNode(`${skos}changeNote`),
      literal(`Nueva propiedad agregada en DCAT 2.0.`, 'en'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}endpointDescription`),
      namedNode(`${skos}changeNote`),
      literal(`Nuova proprietà in DCAT 2.0.`, 'it'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}endpointDescription`),
      namedNode(`${skos}changeNote`),
      literal(`Ny egenskab i DCAT 2.0.`, 'da'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}endpointDescription`),
      namedNode(`${skos}definition`),
      literal(`A description of the service end-point, including its operations, parameters etc.`, 'en'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}endpointDescription`),
      namedNode(`${skos}definition`),
      literal(`En beskrivelse af det pågældende tjenesteendpoint, inklusiv dets operationer, parametre etc.`, 'da'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}endpointDescription`),
      namedNode(`${skos}definition`),
      literal(`Popis přístupového bodu služby včetně operací, parametrů apod.`, 'cs'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}endpointDescription`),
      namedNode(`${skos}definition`),
      literal(`Una descripción del end-point del servicio, incluyendo sus operaciones, parámetros, etc..`, 'es'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}endpointDescription`),
      namedNode(`${skos}definition`),
      literal(`Una descrizione dell'endpoint del servizio, incluse le sue operazioni, parametri, ecc.`, 'it'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}endpointDescription`),
      namedNode(`${skos}scopeNote`),
      literal(`An endpoint description may be expressed in a machine-readable form, such as an OpenAPI (Swagger) description, an OGC GetCapabilities response, a SPARQL Service Description, an OpenSearch or WSDL document, a Hydra API description, else in text or some other informal mode if a formal representation is not possible.`, 'en'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}endpointDescription`),
      namedNode(`${skos}scopeNote`),
      literal(`En beskrivelse af et endpoint kan udtrykkes i et maskinlæsbart format, såsom OpenAPI (Swagger)-beskrivelser, et OGC GetCapabilities svar, en SPARQL tjenestebeskrivelse, en OpenSearch- eller et WSDL-dokument, en Hydra-API-beskrivelse, eller i tekstformat eller i et andet uformelt format, hvis en formel repræsentation ikke er mulig.`, 'da'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}endpointDescription`),
      namedNode(`${skos}scopeNote`),
      literal(`Endpointbeskrivelsen giver specifikke oplysninger om den konkrete endpointinstans, mens dct:conformsTo anvendes til at indikere den overordnede standard eller specifikation som endpointet er i overensstemmelse med.`, 'da'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}endpointDescription`),
      namedNode(`${skos}scopeNote`),
      literal(`La descripción del endpoint brinda detalles específicos de la instancia del endpoint, mientras que dct:conformsTo se usa para indicar el estándar general o especificación que implementa el endpoint.`, 'es'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}endpointDescription`),
      namedNode(`${skos}scopeNote`),
      literal(`La descrizione dell'endpoint fornisce dettagli specifici dell'istanza dell'endpoint reale, mentre dct:conformsTo viene utilizzato per indicare lo standard o le specifiche implementate dall'endpoint.`, 'it'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}endpointDescription`),
      namedNode(`${skos}scopeNote`),
      literal(`Popis přístupového bodu dává specifické detaily jeho konkrétní instance, zatímco dct:conformsTo indikuje obecný standard či specifikaci kterou přístupový bod implementuje.`, 'cs'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}endpointDescription`),
      namedNode(`${skos}scopeNote`),
      literal(`Popis přístupového bodu může být vyjádřen ve strojově čitelné formě, například jako popis OpenAPI (Swagger), odpověď služby OGC getCapabilities, pomocí slovníku SPARQL Service Description, jako OpenSearch či WSDL document, jako popis API dle slovníku Hydra, a nebo textově nebo jiným neformálním způsobem, pokud není možno použít formální reprezentaci.`, 'cs'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}endpointDescription`),
      namedNode(`${skos}scopeNote`),
      literal(`The endpoint description gives specific details of the actual endpoint instance, while dct:conformsTo is used to indicate the general standard or specification that the endpoint implements.`, 'en'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}endpointDescription`),
      namedNode(`${skos}scopeNote`),
      literal(`Una descripción del endpoint del servicio puede expresarse en un formato que la máquina puede interpretar, tal como una descripción basada en OpenAPI (Swagger), una respuesta OGC GetCapabilities, una descripción de un servicio SPARQL, un documento OpenSearch o WSDL, una descripción con la Hydra API, o en texto u otro modo informal si la representación formal no es posible.`, 'es'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}endpointDescription`),
      namedNode(`${skos}scopeNote`),
      literal(`Una descrizione dell'endpoint può essere espressa in un formato leggibile dalla macchina, come una descrizione OpenAPI (Swagger), una risposta GetCapabilities OGC, una descrizione del servizio SPARQL, un documento OpenSearch o WSDL, una descrizione API Hydra, o con del testo o qualche altra modalità informale se una rappresentazione formale non è possibile.`, 'it'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}endpointURL`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}ObjectProperty`),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}endpointURL`),
      namedNode(`${rdfs}comment`),
      literal(`Kořenové umístění nebo hlavní přístupový bod služby (IRI přístupné přes Web).`, 'cs'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}endpointURL`),
      namedNode(`${rdfs}comment`),
      literal(`La locazione principale o l'endpoint primario del servizio (un IRI risolvibile via web).`, 'it'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}endpointURL`),
      namedNode(`${rdfs}comment`),
      literal(`La posición raíz o end-point principal del servicio (una IRI web).`, 'es'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}endpointURL`),
      namedNode(`${rdfs}comment`),
      literal(`Rodplaceringen eller det primære endpoint for en tjeneste (en web-resolverbar IRI).`, 'da'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}endpointURL`),
      namedNode(`${rdfs}comment`),
      literal(`The root location or primary endpoint of the service (a web-resolvable IRI).`, 'en'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}endpointURL`),
      namedNode(`${rdfs}domain`),
      namedNode(`${dcat}DataService`),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}endpointURL`),
      namedNode(`${rdfs}label`),
      literal(`end-point del servicio`, 'es'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}endpointURL`),
      namedNode(`${rdfs}label`),
      literal(`end-point del servizio`, 'it'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}endpointURL`),
      namedNode(`${rdfs}label`),
      literal(`přístupový bod služby`, 'cs'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}endpointURL`),
      namedNode(`${rdfs}label`),
      literal(`service end-point`, 'en'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}endpointURL`),
      namedNode(`${rdfs}label`),
      literal(`tjenesteendpoint`, 'da'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}endpointURL`),
      namedNode(`${rdfs}range`),
      namedNode(`${rdfs}Resource`),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}endpointURL`),
      namedNode(`${skos}changeNote`),
      literal(`New property in DCAT 2.0.`, 'en'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}endpointURL`),
      namedNode(`${skos}changeNote`),
      literal(`Nová vlastnost přidaná ve verzi DCAT 2.0.`, 'cs'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}endpointURL`),
      namedNode(`${skos}changeNote`),
      literal(`Nueva propiedad agregada en DCAT 2.0.`, 'es'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}endpointURL`),
      namedNode(`${skos}changeNote`),
      literal(`Nuova proprietà in DCAT 2.0.`, 'it'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}endpointURL`),
      namedNode(`${skos}definition`),
      literal(`Kořenové umístění nebo hlavní přístupový bod služby (IRI přístupné přes Web).`, 'cs'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}endpointURL`),
      namedNode(`${skos}definition`),
      literal(`La locazione principale o l'endpoint primario del servizio (un IRI risolvibile via web).`, 'it'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}endpointURL`),
      namedNode(`${skos}definition`),
      literal(`La posición raíz o end-point principal del servicio (una IRI web).`, 'es'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}endpointURL`),
      namedNode(`${skos}definition`),
      literal(`Rodplaceringen eller det primære endpoint for en tjeneste (en web-resolverbar IRI).`, 'da'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}endpointURL`),
      namedNode(`${skos}definition`),
      literal(`The root location or primary endpoint of the service (a web-resolvable IRI).`, 'en'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}hadRole`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}ObjectProperty`),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}hadRole`),
      namedNode(`${rdfs}comment`),
      literal(`Den funktion en entitet eller aktør har i forhold til en anden ressource.`, 'da'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}hadRole`),
      namedNode(`${rdfs}comment`),
      literal(`Funkce entity či agenta ve vztahu k jiné entitě či zdroji.`, 'cs'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}hadRole`),
      namedNode(`${rdfs}comment`),
      literal(`La función de una entidad o agente con respecto a otra entidad o recurso.`, 'es'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}hadRole`),
      namedNode(`${rdfs}comment`),
      literal(`La funzione di un'entità o un agente rispetto ad un'altra entità o risorsa.`, 'it'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}hadRole`),
      namedNode(`${rdfs}comment`),
      literal(`The function of an entity or agent with respect to another entity or resource.`, 'en'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}hadRole`),
      namedNode(`${rdfs}domain`),
      blankNodes[3],
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}hadRole`),
      namedNode(`${rdfs}label`),
      literal(`haRuolo`, 'it'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}hadRole`),
      namedNode(`${rdfs}label`),
      literal(`hadRole`, 'en'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}hadRole`),
      namedNode(`${rdfs}label`),
      literal(`havde rolle`, 'da'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}hadRole`),
      namedNode(`${rdfs}label`),
      literal(`sehraná role`, 'cs'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}hadRole`),
      namedNode(`${rdfs}label`),
      literal(`tiene rol`, 'it'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}hadRole`),
      namedNode(`${rdfs}range`),
      namedNode(`${dcat}Role`),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}hadRole`),
      namedNode(`${skos}changeNote`),
      literal(`New property added in DCAT 2.0.`, 'en'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}hadRole`),
      namedNode(`${skos}changeNote`),
      literal(`Nová vlastnost přidaná ve verzi DCAT 2.0.`, 'cs'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}hadRole`),
      namedNode(`${skos}changeNote`),
      literal(`Nueva propiedad agregada en DCAT 2.0.`, 'es'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}hadRole`),
      namedNode(`${skos}changeNote`),
      literal(`Nuova proprietà aggiunta in DCAT 2.0.`, 'it'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}hadRole`),
      namedNode(`${skos}definition`),
      literal(`Den funktion en entitet eller aktør har i forhold til en anden ressource.`, 'da'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}hadRole`),
      namedNode(`${skos}definition`),
      literal(`Funkce entity či agenta ve vztahu k jiné entitě či zdroji.`, 'cs'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}hadRole`),
      namedNode(`${skos}definition`),
      literal(`La función de una entidad o agente con respecto a otra entidad o recurso.`, 'es'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}hadRole`),
      namedNode(`${skos}definition`),
      literal(`La funzione di un'entità o un agente rispetto ad un'altra entità o risorsa.`, 'it'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}hadRole`),
      namedNode(`${skos}definition`),
      literal(`The function of an entity or agent with respect to another entity or resource.`, 'en'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}hadRole`),
      namedNode(`${skos}editorialNote`),
      literal(`Agregada en DCAT para complementar prov:hadRole (cuyo uso está limitado a roles en el contexto de una actividad, con dominio prov:Association.`, 'es'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}hadRole`),
      namedNode(`${skos}editorialNote`),
      literal(`Introdotta in DCAT per completare prov:hadRole (il cui uso è limitato ai ruoli nel contesto di un'attività, con il dominio di prov:Association.`, 'it'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}hadRole`),
      namedNode(`${skos}editorialNote`),
      literal(`Introduced into DCAT to complement prov:hadRole (whose use is limited to roles in the context of an activity, with the domain of prov:Association.`, 'en'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}hadRole`),
      namedNode(`${skos}editorialNote`),
      literal(`Introduceret i DCAT for at supplere prov:hadRole (hvis anvendelse er begrænset til roller i forbindelse med en aktivitet med domænet prov:Association).`, 'da'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}hadRole`),
      namedNode(`${skos}editorialNote`),
      literal(`Přidáno do DCAT pro doplnění vlastnosti prov:hadRole (jejíž užití je omezeno na role v kontextu aktivity, s definičním oborem prov:Association).`, 'cs'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}hadRole`),
      namedNode(`${skos}scopeNote`),
      literal(`Kan vendes ved kvalificerede krediteringer til at angive en aktørs rolle i forhold en entitet. Det anbefales at værdierne styres som et kontrolleret udfaldsrum med aktørroller, såsom http://registry.it.csiro.au/def/isotc211/CI_RoleCode.`, 'da'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}hadRole`),
      namedNode(`${skos}scopeNote`),
      literal(`May be used in a qualified-attribution to specify the role of an Agent with respect to an Entity. It is recommended that the value be taken from a controlled vocabulary of agent roles, such as http://registry.it.csiro.au/def/isotc211/CI_RoleCode.`, 'en'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}hadRole`),
      namedNode(`${skos}scopeNote`),
      literal(`May be used in a qualified-relation to specify the role of an Entity with respect to another Entity.  It is recommended that the value be taken from a controlled vocabulary of entity roles such as: ISO 19115 DS_AssociationTypeCode http://registry.it.csiro.au/def/isotc211/DS_AssociationTypeCode; IANA Registry of Link Relations https://www.iana.org/assignments/link-relation; DataCite metadata schema; MARC relators https://id.loc.gov/vocabulary/relators.`, 'en'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}hadRole`),
      namedNode(`${skos}scopeNote`),
      literal(`Může být použito v kvalifikovaném přiřazení pro specifikaci role Agenta ve vztahu k Entitě. Je doporučeno hodnotu vybrat z řízeného slovníku rolí agentů, jako například http://registry.it.csiro.au/def/isotc211/CI_RoleCode.`, 'cs'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}hadRole`),
      namedNode(`${skos}scopeNote`),
      literal(`Může být použito v kvalifikovaném vztahu pro specifikaci role Entity ve vztahu k jiné Entitě. Je doporučeno použít hodnotu z řízeného slovníku rolí entit, jako například ISO 19115 DS_AssociationTypeCode http://registry.it.csiro.au/def/isotc211/DS_AssociationTypeCode, IANA Registry of Link Relations https://www.iana.org/assignments/link-relation, DataCite metadata schema, MARC relators https://id.loc.gov/vocabulary/relators.`, 'cs'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}hadRole`),
      namedNode(`${skos}scopeNote`),
      literal(`Puede usarse en una atribución cualificada para especificar el rol de un Agente con respecto a una Entidad. Se recomienda que el valor sea de un vocabulario controlado de roles de agentes, como por ejemplo http://registry.it.csiro.au/def/isotc211/CI_RoleCode.`, 'es'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}hadRole`),
      namedNode(`${skos}scopeNote`),
      literal(`Puede usarse en una atribución cualificada para especificar el rol de una Entidad con respecto a otra Entidad. Se recomienda que su valor se tome de un vocabulario controlado de roles de entidades como por ejemplo: ISO 19115 DS_AssociationTypeCode http://registry.it.csiro.au/def/isotc211/DS_AssociationTypeCode; IANA Registry of Link Relations https://www.iana.org/assignments/link-relation; esquema de metadatos de DataCite; MARC relators https://id.loc.gov/vocabulary/relators.`, 'es'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}hadRole`),
      namedNode(`${skos}scopeNote`),
      literal(`Può essere utilizzata in una relazione qualificata per specificare il ruolo di un'entità rispetto a un'altra entità. Si raccomanda che il valore sia preso da un vocabolario controllato di ruoli di entità come ISO 19115 DS_AssociationTypeCode http://registry.it.csiro.au/def/isotc211/DS_AssociationTypeCode, IANA Registry of Link Relations https://www.iana.org/assignments/link-relation, DataCite metadata schema, o MARC relators https://id.loc.gov/vocabulary/relators.`, 'it'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}hadRole`),
      namedNode(`${skos}scopeNote`),
      literal(`Può essere utilizzato in un'attribuzione qualificata per specificare il ruolo di un agente rispetto a un'entità. Si raccomanda che il valore sia preso da un vocabolario controllato di ruoli di agente, come ad esempio http://registry.it.csiro.au/def/isotc211/CI_RoleCode.`, 'it'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}keyword`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}keyword`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}DatatypeProperty`),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}keyword`),
      namedNode(`${rdfs}comment`),
      literal(`A keyword or tag describing a resource.`, 'en'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}keyword`),
      namedNode(`${rdfs}comment`),
      literal(`Et nøgleord eller tag til beskrivelse af en ressource.`, 'da'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}keyword`),
      namedNode(`${rdfs}comment`),
      literal(`Klíčové slovo nebo značka popisující zdroj.`, 'cs'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}keyword`),
      namedNode(`${rdfs}comment`),
      literal(`Un mot-clé ou étiquette décrivant une ressource.`, 'fr'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}keyword`),
      namedNode(`${rdfs}comment`),
      literal(`Una palabra clave o etiqueta que describe un recurso.`, 'es'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}keyword`),
      namedNode(`${rdfs}comment`),
      literal(`Una parola chiave o un'etichetta per descrivere la risorsa.`, 'it'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}keyword`),
      namedNode(`${rdfs}comment`),
      literal(`Μία λέξη-κλειδί ή μία ετικέτα που περιγράφει το σύνολο δεδομένων.`, 'el'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}keyword`),
      namedNode(`${rdfs}comment`),
      literal(`كلمة  مفتاحيه توصف قائمة البيانات`, 'ar'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}keyword`),
      namedNode(`${rdfs}comment`),
      literal(`データセットを記述しているキーワードまたはタグ。`, 'ja'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}keyword`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(ns5),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}keyword`),
      namedNode(`${rdfs}label`),
      literal(`keyword`, 'en'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}keyword`),
      namedNode(`${rdfs}label`),
      literal(`klíčové slovo`, 'cs'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}keyword`),
      namedNode(`${rdfs}label`),
      literal(`mot-clés `, 'fr'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}keyword`),
      namedNode(`${rdfs}label`),
      literal(`nøgleord`, 'da'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}keyword`),
      namedNode(`${rdfs}label`),
      literal(`palabra clave`, 'es'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}keyword`),
      namedNode(`${rdfs}label`),
      literal(`parola chiave`, 'it'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}keyword`),
      namedNode(`${rdfs}label`),
      literal(`λέξη-κλειδί`, 'el'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}keyword`),
      namedNode(`${rdfs}label`),
      literal(`كلمة  مفتاحية `, 'ar'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}keyword`),
      namedNode(`${rdfs}label`),
      literal(`キーワード/タグ`, 'ja'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}keyword`),
      namedNode(`${rdfs}range`),
      namedNode(`${rdfs}Literal`),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}keyword`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${dcterms}subject`),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}keyword`),
      namedNode(`${skos}definition`),
      literal(`A keyword or tag describing a resource.`, 'en'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}keyword`),
      namedNode(`${skos}definition`),
      literal(`Et nøgleord eller tag til beskrivelse af en ressource.`, 'da'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}keyword`),
      namedNode(`${skos}definition`),
      literal(`Klíčové slovo nebo značka popisující zdroj.`, 'cs'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}keyword`),
      namedNode(`${skos}definition`),
      literal(`Un mot-clé ou étiquette décrivant une ressource.`, 'fr'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}keyword`),
      namedNode(`${skos}definition`),
      literal(`Una palabra clave o etiqueta que describe un recurso.`, 'es'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}keyword`),
      namedNode(`${skos}definition`),
      literal(`Una parola chiave o un'etichetta per descrivere la risorsa.`, 'it'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}keyword`),
      namedNode(`${skos}definition`),
      literal(`Μία λέξη-κλειδί ή μία ετικέτα που περιγράφει το σύνολο δεδομένων.`, 'el'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}keyword`),
      namedNode(`${skos}definition`),
      literal(`كلمة  مفتاحيه توصف قائمة البيانات`, 'ar'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}keyword`),
      namedNode(`${skos}definition`),
      literal(`データセットを記述しているキーワードまたはタグ。`, 'ja'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}landingPage`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}landingPage`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}ObjectProperty`),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}landingPage`),
      namedNode(`${rdfs}comment`),
      literal(`A Web page that can be navigated to in a Web browser to gain access to the catalog, a dataset, its distributions and/or additional information.`, 'en'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}landingPage`),
      namedNode(`${rdfs}comment`),
      literal(`En webside som der kan navigeres til i en webbrowser for at få adgang til kataloget, et datasæt, dets distributioner og/eller yderligere information.`, 'da'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}landingPage`),
      namedNode(`${rdfs}comment`),
      literal(`Una pagina web che può essere navigata per ottenere l'accesso al catalogo, ad un dataset, alle distribuzioni del dataset e/o ad informazioni addizionali.`, 'it'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}landingPage`),
      namedNode(`${rdfs}comment`),
      literal(`Una página web que puede ser visitada en un explorador Web para tener acceso el catálogo, un conjunto de datos, sus distribuciones y/o información adicional.`, 'es'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}landingPage`),
      namedNode(`${rdfs}comment`),
      literal(`Une page Web accessible par un navigateur Web donnant accès au catalogue, un jeu de données, ses distributions et/ou des informations additionnelles.`, 'fr'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}landingPage`),
      namedNode(`${rdfs}comment`),
      literal(`Webová stránka, na kterou lze pro získání přístupu ke katalogu, datové sadě, jejím distribucím a/nebo dalším informacím přistoupit webovým prohlížečem.`, 'cs'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}landingPage`),
      namedNode(`${rdfs}comment`),
      literal(`Μία ιστοσελίδα πλοηγίσιμη μέσω ενός φυλλομετρητή (Web browser) που δίνει πρόσβαση στο σύνολο δεδομένων, τις διανομές αυτού ή/και επιπρόσθετες πληροφορίες.`, 'el'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}landingPage`),
      namedNode(`${rdfs}comment`),
      literal(`صفحة وب يمكن من خلالها الوصول الى قائمة البيانات أو إلى معلومات إضافية متعلقة بها `, 'ar'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}landingPage`),
      namedNode(`${rdfs}comment`),
      literal(`データセット、その配信および（または）追加情報にアクセスするためにウエブ・ブラウザでナビゲートできるウェブページ。`, 'ja'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}landingPage`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(ns5),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}landingPage`),
      namedNode(`${rdfs}label`),
      literal(`destinationsside`, 'da'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}landingPage`),
      namedNode(`${rdfs}label`),
      literal(`landing page`, 'en'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}landingPage`),
      namedNode(`${rdfs}label`),
      literal(`page d'atterrissage`, 'fr'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}landingPage`),
      namedNode(`${rdfs}label`),
      literal(`pagina di destinazione`, 'it'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}landingPage`),
      namedNode(`${rdfs}label`),
      literal(`página de destino`, 'es'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}landingPage`),
      namedNode(`${rdfs}label`),
      literal(`vstupní stránka`, 'cs'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}landingPage`),
      namedNode(`${rdfs}label`),
      literal(`ιστοσελίδα αρχικής πρόσβασης`, 'el'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}landingPage`),
      namedNode(`${rdfs}label`),
      literal(`صفحة وصول`, 'ar'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}landingPage`),
      namedNode(`${rdfs}label`),
      literal(`ランディング・ページ`, 'ja'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}landingPage`),
      namedNode(`${rdfs}range`),
      namedNode(`${foaf}Document`),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}landingPage`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${foaf}page`),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}landingPage`),
      namedNode(`${skos}definition`),
      literal(`A Web page that can be navigated to in a Web browser to gain access to the catalog, a dataset, its distributions and/or additional information.`, 'en'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}landingPage`),
      namedNode(`${skos}definition`),
      literal(`En webside som en webbrowser kan navigeres til for at få adgang til kataloget, et datasæt, dets distritbutioner og/eller yderligere information.`, 'da'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}landingPage`),
      namedNode(`${skos}definition`),
      literal(`Una pagina web che può essere navigata per ottenere l'accesso al catalogo, ad un dataset, alle distribuzioni del dataset e/o ad informazioni addizionali.`, 'it'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}landingPage`),
      namedNode(`${skos}definition`),
      literal(`Una página web que puede ser visitada en un explorador Web para tener acceso el catálogo, un conjunto de datos, sus distribuciones y/o información adicional.`, 'es'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}landingPage`),
      namedNode(`${skos}definition`),
      literal(`Une page Web accessible par un navigateur Web donnant accès au catalogue, un jeu de données, ses distributions et/ou des informations additionnelles.`, 'fr'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}landingPage`),
      namedNode(`${skos}definition`),
      literal(`Webová stránka, na kterou lze pro získání přístupu ke katalogu, datové sadě, jejím distribucím a/nebo dalším informacím přistoupit webovým prohlížečem.`, 'cs'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}landingPage`),
      namedNode(`${skos}definition`),
      literal(`Μία ιστοσελίδα πλοηγίσιμη μέσω ενός φυλλομετρητή (Web browser) που δίνει πρόσβαση στο σύνολο δεδομένων, τις διανομές αυτού ή/και επιπρόσθετες πληροφορίες.`, 'el'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}landingPage`),
      namedNode(`${skos}definition`),
      literal(`صفحة وب يمكن من خلالها الوصول الى قائمة البيانات أو إلى معلومات إضافية متعلقة بها `, 'ar'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}landingPage`),
      namedNode(`${skos}definition`),
      literal(`データセット、その配信および（または）追加情報にアクセスするためにウエブ・ブラウザでナビゲートできるウェブページ。`, 'ja'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}landingPage`),
      namedNode(`${skos}scopeNote`),
      literal(`Hvis en eller flere distributioner kun er tilgængelige via en destinationsside (dvs. en URL til direkte download er ikke kendt), så bør destinationssidelinket gentages som adgangsadresse for en distribution.`, 'da'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}landingPage`),
      namedNode(`${skos}scopeNote`),
      literal(`If the distribution(s) are accessible only through a landing page (i.e. direct download URLs are not known), then the landing page link should be duplicated as accessURL on a distribution.`, 'en'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}landingPage`),
      namedNode(`${skos}scopeNote`),
      literal(`Pokud je distribuce dostupná pouze přes vstupní stránku, t.j. přímý URL odkaz ke stažení není znám, URL přístupové stránky by mělo být duplikováno ve vlastnosti distribuce accessURL.`, 'cs'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}landingPage`),
      namedNode(`${skos}scopeNote`),
      literal(`Se la distribuzione è accessibile solo attraverso una pagina di destinazione (cioè, un URL di download diretto non è noto), il link alla pagina di destinazione deve essere duplicato come accessURL sulla distribuzione.`, 'it'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}landingPage`),
      namedNode(`${skos}scopeNote`),
      literal(`Si la distribución es accesible solamente través de una página de aterrizaje (i.e., no se conoce una URL de descarga directa), entonces el enlance a la página de aterrizaje debe ser duplicado como accessURL sobre la distribución.`, 'es'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}landingPage`),
      namedNode(`${skos}scopeNote`),
      literal(`Si la distribution est seulement accessible à travers une page d'atterrissage (exple. pas de connaissance d'URLS de téléchargement direct ), alors le lien de la page d'atterrissage doit être dupliqué comme accessURL sur la distribution.`, 'fr'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}landingPage`),
      namedNode(`${skos}scopeNote`),
      literal(`Αν η/οι διανομή/ές είναι προσβάσιμη/ες μόνο μέσω μίας ιστοσελίδας αρχικής πρόσβασης (δηλαδή αν δεν υπάρχουν γνωστές διευθύνσεις άμεσης μεταφόρτωσης), τότε ο σύνδεσμος της ιστοσελίδας αρχικής πρόσβασης πρέπει να αναπαραχθεί ως accessURL σε μία διανομή.`, 'el'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}landingPage`),
      namedNode(`${skos}scopeNote`),
      literal(`ランディング・ページを通じてしか配信にアクセスできない場合（つまり、直接的なダウンロードURLが不明）には、配信におけるaccessURLとしてランディング・ページのリンクをコピーすべきです（SHOULD）。`, 'ja'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}mediaType`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}mediaType`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}ObjectProperty`),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}mediaType`),
      namedNode(`${rdfs}comment`),
      literal(`Cette propriété doit être utilisée quand c'est définit le type de média de la distribution en IANA, sinon dct:format DOIT être utilisé avec différentes valeurs.`, 'fr'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}mediaType`),
      namedNode(`${rdfs}comment`),
      literal(`Esta propiedad debe ser usada cuando está definido el tipo de media de la distribución en IANA, de otra manera dct:format puede ser utilizado con diferentes valores`, 'es'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}mediaType`),
      namedNode(`${rdfs}comment`),
      literal(`Il tipo di media della distribuzione come definito da IANA`, 'it'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}mediaType`),
      namedNode(`${rdfs}comment`),
      literal(`Medietypen for distributionen som den er defineret af IANA.`, 'da'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}mediaType`),
      namedNode(`${rdfs}comment`),
      literal(`The media type of the distribution as defined by IANA`, 'en'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}mediaType`),
      namedNode(`${rdfs}comment`),
      literal(`Typ média distribuce definovaný v IANA.`, 'cs'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}mediaType`),
      namedNode(`${rdfs}comment`),
      literal(`Η ιδιότητα αυτή ΘΑ ΠΡΕΠΕΙ να χρησιμοποιείται όταν ο τύπος μέσου μίας διανομής είναι ορισμένος στο IANA, αλλιώς η ιδιότητα dct:format ΔΥΝΑΤΑΙ να χρησιμοποιηθεί με διαφορετικές τιμές.`, 'el'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}mediaType`),
      namedNode(`${rdfs}comment`),
      literal(`يجب استخدام هذه الخاصية إذا كان نوع الملف معرف ضمن IANA`, 'ar'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}mediaType`),
      namedNode(`${rdfs}comment`),
      literal(`このプロパティーは、配信のメディア・タイプがIANAで定義されているときに使用すべきで（SHOULD）、そうでない場合には、dct:formatを様々な値と共に使用できます（MAY）。`, 'ja'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}mediaType`),
      namedNode(`${rdfs}domain`),
      namedNode(`${dcat}Distribution`),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}mediaType`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(ns5),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}mediaType`),
      namedNode(`${rdfs}label`),
      literal(`media type`, 'en'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}mediaType`),
      namedNode(`${rdfs}label`),
      literal(`medietype`, 'da'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}mediaType`),
      namedNode(`${rdfs}label`),
      literal(`tipo de media`, 'es'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}mediaType`),
      namedNode(`${rdfs}label`),
      literal(`tipo di media`, 'it'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}mediaType`),
      namedNode(`${rdfs}label`),
      literal(`typ média`, 'cs'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}mediaType`),
      namedNode(`${rdfs}label`),
      literal(`type de média`, 'fr'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}mediaType`),
      namedNode(`${rdfs}label`),
      literal(`τύπος μέσου`, 'el'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}mediaType`),
      namedNode(`${rdfs}label`),
      literal(`نوع الميديا`, 'ar'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}mediaType`),
      namedNode(`${rdfs}label`),
      literal(`メディア・タイプ`, 'ja'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}mediaType`),
      namedNode(`${rdfs}range`),
      namedNode(`${dcterms}MediaType`),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}mediaType`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${dcterms}format`),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}mediaType`),
      namedNode(`${skos}changeNote`),
      literal(`Il range di dcat:mediaType è stato ristretto  come parte della revisione di DCAT.`, 'it'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}mediaType`),
      namedNode(`${skos}changeNote`),
      literal(`Obor hodnot dcat:mediaType byl zúžen v této revizi DCAT.`, 'cs'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}mediaType`),
      namedNode(`${skos}changeNote`),
      literal(`The range of dcat:mediaType has been tightened as part of the revision of DCAT.`, 'en'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}mediaType`),
      namedNode(`${skos}definition`),
      literal(`Cette propriété doit être utilisée quand c'est définit le type de média de la distribution en IANA, sinon dct:format DOIT être utilisé avec différentes valeurs.`, 'fr'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}mediaType`),
      namedNode(`${skos}definition`),
      literal(`Esta propiedad debe ser usada cuando está definido el tipo de media de la distribución en IANA, de otra manera dct:format puede ser utilizado con diferentes valores.`, 'es'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}mediaType`),
      namedNode(`${skos}definition`),
      literal(`Il tipo di media della distribuzione come definito da IANA.`, 'it'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}mediaType`),
      namedNode(`${skos}definition`),
      literal(`Medietypen for distributionen som den er defineret af IANA.`, 'da'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}mediaType`),
      namedNode(`${skos}definition`),
      literal(`The media type of the distribution as defined by IANA.`, 'en'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}mediaType`),
      namedNode(`${skos}definition`),
      literal(`Typ média distribuce definovaný v IANA.`, 'cs'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}mediaType`),
      namedNode(`${skos}definition`),
      literal(`Η ιδιότητα αυτή ΘΑ ΠΡΕΠΕΙ να χρησιμοποιείται όταν ο τύπος μέσου μίας διανομής είναι ορισμένος στο IANA, αλλιώς η ιδιότητα dct:format ΔΥΝΑΤΑΙ να χρησιμοποιηθεί με διαφορετικές τιμές.`, 'el'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}mediaType`),
      namedNode(`${skos}definition`),
      literal(`يجب استخدام هذه الخاصية إذا كان نوع الملف معرف ضمن IANA`, 'ar'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}mediaType`),
      namedNode(`${skos}definition`),
      literal(`このプロパティーは、配信のメディア・タイプがIANAで定義されているときに使用すべきで（SHOULD）、そうでない場合には、dct:formatを様々な値と共に使用できます（MAY）。`, 'ja'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}mediaType`),
      namedNode(`${skos}editorialNote`),
      literal(`Status: English Definition text modified by DCAT revision team, Italian and Czech translation provided, other translations pending. Note some inconsistency on def vs. usage.`, 'en'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}mediaType`),
      namedNode(`${skos}scopeNote`),
      literal(`Denne egenskab BØR anvendes hvis distributionens medietype optræder i 'IANA media types registry' https://www.iana.org/assignments/media-types/, ellers KAN egenskaben dct:format anvendes med et andet udfaldsrum.`, 'da'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}mediaType`),
      namedNode(`${skos}scopeNote`),
      literal(`Esta propiedad DEBERÍA usarse cuando el 'media type' de la distribución está definido en el registro IANA de 'media types' https://www.iana.org/assignments/media-types/, de lo contrario, dct:format PUEDE usarse con distintos valores.`, 'es'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}mediaType`),
      namedNode(`${skos}scopeNote`),
      literal(`Questa proprietà DEVE essere usata quando il tipo di media della distribuzione è definito nel registro dei tipi di media IANA https://www.iana.org/assignments/media-types/, altrimenti dct:format PUO 'essere usato con differenti valori.`, 'it'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}mediaType`),
      namedNode(`${skos}scopeNote`),
      literal(`Tato vlastnost BY MĚLA být použita, je-li typ média distribuce definován v registru IANA https://www.iana.org/assignments/media-types/. V ostatních případech MŮŽE být použita vlastnost dct:format s jinými hodnotami.`, 'cs'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}mediaType`),
      namedNode(`${skos}scopeNote`),
      literal(`This property SHOULD be used when the media type of the distribution is defined in the IANA media types registry https://www.iana.org/assignments/media-types/, otherwise dct:format MAY be used with different values.`, 'en'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}packageFormat`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}packageFormat`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}ObjectProperty`),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}packageFormat`),
      namedNode(`${rdfs}comment`),
      literal(`Balíčkový formát souboru, ve kterém je jeden či více souborů seskupeno dohromady, např. aby bylo možné stáhnout sadu souvisejících souborů naráz.`, 'cs'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}packageFormat`),
      namedNode(`${rdfs}comment`),
      literal(`El formato del archivo en que se agrupan uno o más archivos de datos, e.g. para permitir que un conjunto de archivos relacionados se bajen juntos.`, 'es'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}packageFormat`),
      namedNode(`${rdfs}comment`),
      literal(`Format til pakning af data med henblik på distribution af en eller flere relaterede datafiler der samles til en enhed med henblik på samlet distribution. `, 'da'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}packageFormat`),
      namedNode(`${rdfs}comment`),
      literal(`Il formato di impacchettamento della distribuzione in cui uno o più file di dati sono raggruppati insieme, ad es. per abilitare un insieme di file correlati da scaricare insieme.`, 'it'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}packageFormat`),
      namedNode(`${rdfs}comment`),
      literal(`The package format of the distribution in which one or more data files are grouped together, e.g. to enable a set of related files to be downloaded together.`, 'en'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}packageFormat`),
      namedNode(`${rdfs}domain`),
      namedNode(`${dcat}Distribution`),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}packageFormat`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(ns9),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}packageFormat`),
      namedNode(`${rdfs}label`),
      literal(`formato de empaquetado`, 'es'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}packageFormat`),
      namedNode(`${rdfs}label`),
      literal(`formato di impacchettamento`, 'it'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}packageFormat`),
      namedNode(`${rdfs}label`),
      literal(`formát balíčku`, 'cs'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}packageFormat`),
      namedNode(`${rdfs}label`),
      literal(`packaging format`, 'en'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}packageFormat`),
      namedNode(`${rdfs}label`),
      literal(`pakkeformat`, 'da'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}packageFormat`),
      namedNode(`${rdfs}range`),
      namedNode(`${dcterms}MediaType`),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}packageFormat`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${dcterms}format`),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}packageFormat`),
      namedNode(`${skos}changeNote`),
      literal(`New property added in DCAT 2.0.`, 'en'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}packageFormat`),
      namedNode(`${skos}changeNote`),
      literal(`Nová vlastnost přidaná ve verzi DCAT 2.0.`, 'cs'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}packageFormat`),
      namedNode(`${skos}changeNote`),
      literal(`Nueva propiedad agregada en DCAT 2.0.`, 'es'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}packageFormat`),
      namedNode(`${skos}changeNote`),
      literal(`Nuova proprietà aggiunta in DCAT 2.0.`, 'it'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}packageFormat`),
      namedNode(`${skos}changeNote`),
      literal(`Ny egenskab tilføjet i DCAT 2.0.`, 'da'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}packageFormat`),
      namedNode(`${skos}definition`),
      literal(`Balíčkový formát souboru, ve kterém je jeden či více souborů seskupeno dohromady, např. aby bylo možné stáhnout sadu souvisejících souborů naráz.`, 'cs'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}packageFormat`),
      namedNode(`${skos}definition`),
      literal(`El formato del archivo en que se agrupan uno o más archivos de datos, e.g. para permitir que un conjunto de archivos relacionados se bajen juntos.`, 'es'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}packageFormat`),
      namedNode(`${skos}definition`),
      literal(`Il formato di impacchettamento della distribuzione in cui uno o più file di dati sono raggruppati insieme, ad es. per abilitare un insieme di file correlati da scaricare insieme.`, 'it'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}packageFormat`),
      namedNode(`${skos}definition`),
      literal(`The package format of the distribution in which one or more data files are grouped together, e.g. to enable a set of related files to be downloaded together.`, 'en'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}packageFormat`),
      namedNode(`${skos}scopeNote`),
      literal(`Denne egenskab kan anvendes hvis filerne i en distribution er pakket, fx i en TAR-fil, en Frictionless Data Package eller en Bagit-fil. Formatet BØR udtrykkes ved en medietype som defineret i 'IANA media types registry', hvis der optræder en relevant medietype dér: https://www.iana.org/assignments/media-types/.`, 'da'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}packageFormat`),
      namedNode(`${skos}scopeNote`),
      literal(`Esta propiedad se debe usar cuando los archivos de la distribución están empaquetados, por ejemplo en un archivo TAR, Frictionless Data Package o Bagit. El formato DEBERÍA expresarse usando un 'media type', tales como los definidos en el registro IANA de 'media types' https://www.iana.org/assignments/media-types/, si está disponibles.`, 'es'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}packageFormat`),
      namedNode(`${skos}scopeNote`),
      literal(`Questa proprietà deve essere utilizzata quando i file nella distribuzione sono impacchettati, ad esempio in un file TAR, Frictionless Data Package o Bagit. Il formato DOVREBBE essere espresso utilizzando un tipo di supporto come definito dal registro dei tipi di media IANA https://www.iana.org/assignments/media-types/, se disponibili.`, 'it'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}packageFormat`),
      namedNode(`${skos}scopeNote`),
      literal(`Tato vlastnost se použije, když jsou soubory v distribuci zabaleny, např. v souboru TAR, v balíčku Frictionless Data Package nebo v souboru Bagit. Formát BY MĚL být vyjádřen pomocí typu média definovaného v registru IANA https://www.iana.org/assignments/media-types/, pokud existuje.`, 'cs'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}packageFormat`),
      namedNode(`${skos}scopeNote`),
      literal(`This property to be used when the files in the distribution are packaged, e.g. in a TAR file, a Frictionless Data Package or a Bagit file. The format SHOULD be expressed using a media type as defined by IANA media types registry https://www.iana.org/assignments/media-types/, if available.`, 'en'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}qualifiedRelation`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}ObjectProperty`),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}qualifiedRelation`),
      namedNode(`${rdfs}comment`),
      literal(`Enlace a una descripción de la relación con otro recurso.`, 'es'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}qualifiedRelation`),
      namedNode(`${rdfs}comment`),
      literal(`Link a una descrizione di una relazione con un'altra risorsa.`, 'it'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}qualifiedRelation`),
      namedNode(`${rdfs}comment`),
      literal(`Link to a description of a relationship with another resource.`, 'en'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}qualifiedRelation`),
      namedNode(`${rdfs}comment`),
      literal(`Odkaz na popis vztahu s jiným zdrojem.`, 'cs'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}qualifiedRelation`),
      namedNode(`${rdfs}comment`),
      literal(`Reference til en beskrivelse af en relation til en anden ressource.`, 'da'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}qualifiedRelation`),
      namedNode(`${rdfs}domain`),
      namedNode(`${dcat}Resource`),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}qualifiedRelation`),
      namedNode(`${rdfs}label`),
      literal(`Kvalificeret relation`, 'da'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}qualifiedRelation`),
      namedNode(`${rdfs}label`),
      literal(`kvalifikovaný vztah`, 'cs'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}qualifiedRelation`),
      namedNode(`${rdfs}label`),
      literal(`qualified relation`, 'en'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}qualifiedRelation`),
      namedNode(`${rdfs}label`),
      literal(`relación calificada`, 'es'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}qualifiedRelation`),
      namedNode(`${rdfs}label`),
      literal(`relazione qualificata`, 'it'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}qualifiedRelation`),
      namedNode(`${rdfs}range`),
      namedNode(`${dcat}Relationship`),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}qualifiedRelation`),
      namedNode(`${skos}changeNote`),
      literal(`New property added in DCAT 2.0.`, 'en'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}qualifiedRelation`),
      namedNode(`${skos}changeNote`),
      literal(`Nová vlastnost přidaná ve verzi DCAT 2.0.`, 'cs'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}qualifiedRelation`),
      namedNode(`${skos}changeNote`),
      literal(`Nuova proprietà aggiunta in DCAT 2.0.`, 'it'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}qualifiedRelation`),
      namedNode(`${skos}changeNote`),
      literal(`Ny egenskab tilføjet i DCAT 2.0.`, 'da'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}qualifiedRelation`),
      namedNode(`${skos}changeNote`),
      literal(`Propiedad nueva añadida en DCAT 2.0.`, 'es'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}qualifiedRelation`),
      namedNode(`${skos}definition`),
      literal(`Enlace a una descripción de la relación con otro recurso.`, 'es'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}qualifiedRelation`),
      namedNode(`${skos}definition`),
      literal(`Link a una descrizione di una relazione con un'altra risorsa.`, 'it'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}qualifiedRelation`),
      namedNode(`${skos}definition`),
      literal(`Link to a description of a relationship with another resource.`, 'en'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}qualifiedRelation`),
      namedNode(`${skos}definition`),
      literal(`Odkaz na popis vztahu s jiným zdrojem.`, 'cs'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}qualifiedRelation`),
      namedNode(`${skos}definition`),
      literal(`Reference til en beskrivelse af en relation til en anden ressource.`, 'da'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}qualifiedRelation`),
      namedNode(`${skos}editorialNote`),
      literal(`Introdotta in DCAT per integrare le altre relazioni qualificate di PROV.`, 'it'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}qualifiedRelation`),
      namedNode(`${skos}editorialNote`),
      literal(`Introduced into DCAT to complement the other PROV qualified relations. `, 'en'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}qualifiedRelation`),
      namedNode(`${skos}editorialNote`),
      literal(`Introduceret i DCAT med henblik på at supplere de øvrige kvalificerede relationer fra PROV. `, 'da'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}qualifiedRelation`),
      namedNode(`${skos}editorialNote`),
      literal(`Přidáno do DCAT k doplnění jiných kvalifikovaných vztahů ze slovníku PROV.`, 'cs'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}qualifiedRelation`),
      namedNode(`${skos}editorialNote`),
      literal(`Se incluyó en DCAT para complementar las relaciones calificadas disponibles en PROV.`, 'es'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}qualifiedRelation`),
      namedNode(`${skos}scopeNote`),
      literal(`Anvendes til at referere til en anden ressource hvor relationens betydning er kendt men ikke matcher en af de standardiserede egenskaber fra Dublin Core (dct:hasPart, dct:isPartOf, dct:conformsTo, dct:isFormatOf, dct:hasFormat, dct:isVersionOf, dct:hasVersion, dct:replaces, dct:isReplacedBy, dct:references, dct:isReferencedBy, dct:requires, dct:isRequiredBy) eller PROV-O-egenskaber (prov:wasDerivedFrom, prov:wasInfluencedBy, prov:wasQuotedFrom, prov:wasRevisionOf, prov:hadPrimarySource, prov:alternateOf, prov:specializationOf).`, 'da'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}qualifiedRelation`),
      namedNode(`${skos}scopeNote`),
      literal(`Použito pro odkazování na jiný zdroj, kde druh vztahu je znám, ale neodpovídá standardním vlastnostem ze slovníku Dublin Core (dct:hasPart, dct:isPartOf, dct:conformsTo, dct:isFormatOf, dct:hasFormat, dct:isVersionOf, dct:hasVersion, dct:replaces, dct:isReplacedBy, dct:references, dct:isReferencedBy, dct:requires, dct:isRequiredBy) či slovníku PROV-O (prov:wasDerivedFrom, prov:wasInfluencedBy, prov:wasQuotedFrom, prov:wasRevisionOf, prov:hadPrimarySource, prov:alternateOf, prov:specializationOf).`, 'cs'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}qualifiedRelation`),
      namedNode(`${skos}scopeNote`),
      literal(`Se usa para asociar con otro recurso para el cuál la naturaleza de la relación es conocida pero no es ninguna de las propiedades que provee el estándar Dublin Core (dct:hasPart, dct:isPartOf, dct:conformsTo, dct:isFormatOf, dct:hasFormat, dct:isVersionOf, dct:hasVersion, dct:replaces, dct:isReplacedBy, dct:references, dct:isReferencedBy, dct:requires, dct:isRequiredBy) or PROV-O properties (prov:wasDerivedFrom, prov:wasInfluencedBy, prov:wasQuotedFrom, prov:wasRevisionOf, prov:hadPrimarySource, prov:alternateOf, prov:specializationOf).`, 'es'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}qualifiedRelation`),
      namedNode(`${skos}scopeNote`),
      literal(`Used to link to another resource where the nature of the relationship is known but does not match one of the standard Dublin Core properties (dct:hasPart, dct:isPartOf, dct:conformsTo, dct:isFormatOf, dct:hasFormat, dct:isVersionOf, dct:hasVersion, dct:replaces, dct:isReplacedBy, dct:references, dct:isReferencedBy, dct:requires, dct:isRequiredBy) or PROV-O properties (prov:wasDerivedFrom, prov:wasInfluencedBy, prov:wasQuotedFrom, prov:wasRevisionOf, prov:hadPrimarySource, prov:alternateOf, prov:specializationOf).`, 'en'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}qualifiedRelation`),
      namedNode(`${skos}scopeNote`),
      literal(`Viene utilizzato per associarsi a un'altra risorsa nei casi per i quali la natura della relazione è nota ma non è alcuna delle proprietà fornite dallo standard Dublin Core (dct:hasPart, dct:isPartOf, dct:conformsTo, dct:isFormatOf, dct:hasFormat , dct:isVersionOf, dct:hasVersion, dct:replaces, dct:isReplacedBy, dct:references, dct:isReferencedBy, dct:require, dct:isRequiredBy) o dalle proprietà fornite da PROV-O (prov:wasDerivedFrom, prov:wasInfluencedBy, prov:wasQuotedFrom , prov:wasRevisionOf, prov:hadPrimarySource, prov:alternateOf, prov:specializationOf).`, 'it'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}record`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}record`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}ObjectProperty`),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}record`),
      namedNode(`${rdfs}comment`),
      literal(`A record describing the registration of a single dataset or data service that is part of the catalog.`, 'en'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}record`),
      namedNode(`${rdfs}comment`),
      literal(`Describe la registración de un conjunto de datos o un servicio de datos en el catálogo.`, 'es'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}record`),
      namedNode(`${rdfs}comment`),
      literal(`En post der beskriver registreringen af et enkelt datasæt eller en datatjeneste som er opført i kataloget.`, 'da'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}record`),
      namedNode(`${rdfs}comment`),
      literal(`Propojuje katalog a jeho záznamy.`, 'cs'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}record`),
      namedNode(`${rdfs}comment`),
      literal(`Relie un catalogue à ses registres.`, 'fr'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}record`),
      namedNode(`${rdfs}comment`),
      literal(`Un record che descrive la registrazione di un singolo set di dati o di un servizio dati che fa parte del catalogo.`, 'it'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}record`),
      namedNode(`${rdfs}comment`),
      literal(`Záznam popisující registraci jedné datové sady či datové služby jakožto součásti katalogu.`, 'cs'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}record`),
      namedNode(`${rdfs}comment`),
      literal(`Συνδέει έναν κατάλογο με τις καταγραφές του.`, 'el'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}record`),
      namedNode(`${rdfs}comment`),
      literal(`تربط الفهرس بسجل ضمنه`, 'ar'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}record`),
      namedNode(`${rdfs}comment`),
      literal(`カタログの一部であるカタログ・レコード。`, 'ja'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}record`),
      namedNode(`${rdfs}domain`),
      namedNode(`${dcat}Catalog`),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}record`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(ns5),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}record`),
      namedNode(`${rdfs}label`),
      literal(`post`, 'da'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}record`),
      namedNode(`${rdfs}label`),
      literal(`record`, 'en'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}record`),
      namedNode(`${rdfs}label`),
      literal(`record`, 'it'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}record`),
      namedNode(`${rdfs}label`),
      literal(`registre`, 'fr'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}record`),
      namedNode(`${rdfs}label`),
      literal(`registro`, 'es'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}record`),
      namedNode(`${rdfs}label`),
      literal(`záznam`, 'cs'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}record`),
      namedNode(`${rdfs}label`),
      literal(`καταγραφή`, 'el'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}record`),
      namedNode(`${rdfs}label`),
      literal(`سجل`, 'ar'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}record`),
      namedNode(`${rdfs}label`),
      literal(`カタログ・レコード`, 'ja'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}record`),
      namedNode(`${rdfs}range`),
      namedNode(`${dcat}CatalogRecord`),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}record`),
      namedNode(`${skos}altLabel`),
      literal(`har post`, 'da'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}record`),
      namedNode(`${skos}definition`),
      literal(`A record describing the registration of a single dataset or data service that is part of the catalog.`, 'en'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}record`),
      namedNode(`${skos}definition`),
      literal(`Describe la registración de un conjunto de datos o un servicio de datos en el catálogo.`, 'es'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}record`),
      namedNode(`${skos}definition`),
      literal(`En post der beskriver registreringen af et enkelt datasæt eller en datatjeneste som er opført i kataloget.`, 'da'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}record`),
      namedNode(`${skos}definition`),
      literal(`Propojuje katalog a jeho záznamy.`, 'cs'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}record`),
      namedNode(`${skos}definition`),
      literal(`Relie un catalogue à ses registres.`, 'fr'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}record`),
      namedNode(`${skos}definition`),
      literal(`Un record che descrive la registrazione di un singolo set di dati o di un servizio dati che fa parte del catalogo.`, 'it'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}record`),
      namedNode(`${skos}definition`),
      literal(`Záznam popisující registraci jedné datové sady či datové služby jakožto součásti katalogu.`, 'cs'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}record`),
      namedNode(`${skos}definition`),
      literal(`Συνδέει έναν κατάλογο με τις καταγραφές του.`, 'el'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}record`),
      namedNode(`${skos}definition`),
      literal(`تربط الفهرس بسجل ضمنه`, 'ar'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}record`),
      namedNode(`${skos}definition`),
      literal(`カタログの一部であるカタログ・レコード。`, 'ja'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}record`),
      namedNode(`${skos}editorialNote`),
      literal(`Status: English, Italian, Spanish and Czech Definitions modified by DCAT revision team, other translations pending.`, 'en'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}servesDataset`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}ObjectProperty`),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}servesDataset`),
      namedNode(`${rdfs}comment`),
      literal(`A collection of data that this DataService can distribute.`, 'en'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}servesDataset`),
      namedNode(`${rdfs}comment`),
      literal(`En samling af data som denne datatjeneste kan distribuere.`, 'da'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}servesDataset`),
      namedNode(`${rdfs}comment`),
      literal(`Kolekce dat, kterou je tato Datová služba schopna poskytnout.`, 'cs'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}servesDataset`),
      namedNode(`${rdfs}comment`),
      literal(`Una colección de datos que este Servicio de Datos puede distribuir.`, 'es'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}servesDataset`),
      namedNode(`${rdfs}comment`),
      literal(`Una raccolta di dati che questo DataService può distribuire.`, 'it'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}servesDataset`),
      namedNode(`${rdfs}domain`),
      namedNode(`${dcat}DataService`),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}servesDataset`),
      namedNode(`${rdfs}label`),
      literal(`datatjeneste for datasæt`, 'da'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}servesDataset`),
      namedNode(`${rdfs}label`),
      literal(`poskytuje datovou sadu`, 'cs'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}servesDataset`),
      namedNode(`${rdfs}label`),
      literal(`provee conjunto de datos`, 'es'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}servesDataset`),
      namedNode(`${rdfs}label`),
      literal(`serve set di dati`, 'it'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}servesDataset`),
      namedNode(`${rdfs}label`),
      literal(`serves dataset`, 'en'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}servesDataset`),
      namedNode(`${rdfs}range`),
      namedNode(`${dcat}Dataset`),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}servesDataset`),
      namedNode(`${skos}altLabel`),
      literal(`distribuerer`, 'da'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}servesDataset`),
      namedNode(`${skos}altLabel`),
      literal(`ekspederer`, 'da'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}servesDataset`),
      namedNode(`${skos}altLabel`),
      literal(`udstiller`, 'da'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}servesDataset`),
      namedNode(`${skos}changeNote`),
      literal(`New property in DCAT 2.0.`, 'en'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}servesDataset`),
      namedNode(`${skos}changeNote`),
      literal(`Nová vlastnost přidaná ve verzi DCAT 2.0.`, 'cs'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}servesDataset`),
      namedNode(`${skos}changeNote`),
      literal(`Nueva propiedad agregada en DCAT 2.0.`, 'es'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}servesDataset`),
      namedNode(`${skos}changeNote`),
      literal(`Nuova proprietà in DCAT 2.0.`, 'it'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}servesDataset`),
      namedNode(`${skos}definition`),
      literal(`A collection of data that this DataService can distribute.`, 'en'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}servesDataset`),
      namedNode(`${skos}definition`),
      literal(`En samling af data som denne datatjeneste kan distribuere.`, 'da'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}servesDataset`),
      namedNode(`${skos}definition`),
      literal(`Kolekce dat, kterou je tato Datová služba schopna poskytnout.`, 'cs'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}servesDataset`),
      namedNode(`${skos}definition`),
      literal(`Una colección de datos que este Servicio de Datos puede distribuir.`, 'es'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}servesDataset`),
      namedNode(`${skos}definition`),
      literal(`Una raccolta di dati che questo DataService può distribuire.`, 'it'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}service`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}ObjectProperty`),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}service`),
      namedNode(`${rdfs}comment`),
      literal(`A site or endpoint that is listed in the catalog.`, 'en'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}service`),
      namedNode(`${rdfs}comment`),
      literal(`Et websted eller et endpoint som er opført i kataloget.`, 'da'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}service`),
      namedNode(`${rdfs}comment`),
      literal(`Umístění či přístupový bod registrovaný v katalogu.`, 'cs'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}service`),
      namedNode(`${rdfs}comment`),
      literal(`Un sitio o 'endpoint' que está listado en el catálogo.`, 'es'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}service`),
      namedNode(`${rdfs}comment`),
      literal(`Un sito o endpoint elencato nel catalogo.`, 'it'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}service`),
      namedNode(`${rdfs}domain`),
      namedNode(`${dcat}Catalog`),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}service`),
      namedNode(`${rdfs}label`),
      literal(`datatjeneste`, 'da'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}service`),
      namedNode(`${rdfs}label`),
      literal(`service`, 'en'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}service`),
      namedNode(`${rdfs}label`),
      literal(`servicio`, 'es'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}service`),
      namedNode(`${rdfs}label`),
      literal(`servizio`, 'it'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}service`),
      namedNode(`${rdfs}label`),
      literal(`služba`, 'cs'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}service`),
      namedNode(`${rdfs}range`),
      namedNode(`${dcat}DataService`),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}service`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${dcterms}hasPart`),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}service`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${rdfs}member`),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}service`),
      namedNode(`${skos}altLabel`),
      literal(`har datatjeneste`, 'da'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}service`),
      namedNode(`${skos}changeNote`),
      literal(`New property added in DCAT 2.0.`, 'en'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}service`),
      namedNode(`${skos}changeNote`),
      literal(`Nová vlastnost přidaná ve verzi DCAT 2.0.`, 'cs'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}service`),
      namedNode(`${skos}changeNote`),
      literal(`Nueva propiedad añadida en DCAT 2.0.`, 'es'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}service`),
      namedNode(`${skos}changeNote`),
      literal(`Nuova proprietà aggiunta in DCAT 2.0.`, 'it'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}service`),
      namedNode(`${skos}definition`),
      literal(`A site or endpoint that is listed in the catalog.`, 'en'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}service`),
      namedNode(`${skos}definition`),
      literal(`Et websted eller et endpoint som er opført i kataloget.`, 'da'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}service`),
      namedNode(`${skos}definition`),
      literal(`Umístění či přístupový bod registrovaný v katalogu.`, 'cs'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}service`),
      namedNode(`${skos}definition`),
      literal(`Un sitio o 'endpoint' que está listado en el catálogo.`, 'es'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}service`),
      namedNode(`${skos}definition`),
      literal(`Un sito o endpoint elencato nel catalogo.`, 'it'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}spatialResolutionInMeters`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}DatatypeProperty`),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}spatialResolutionInMeters`),
      namedNode(`${rdfs}comment`),
      literal(`mindste geografiske afstand som kan erkendes i et datasæt, målt i meter.`, 'da'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}spatialResolutionInMeters`),
      namedNode(`${rdfs}comment`),
      literal(`minimum spatial separation resolvable in a dataset, measured in meters.`, 'en-US'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}spatialResolutionInMeters`),
      namedNode(`${rdfs}comment`),
      literal(`minimum spatial separation resolvable in a dataset, measured in metres.`, 'en-GB'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}spatialResolutionInMeters`),
      namedNode(`${rdfs}comment`),
      literal(`minimální prostorový rozestup rozeznatelný v datové sadě, měřeno v metrech.`, 'cs'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}spatialResolutionInMeters`),
      namedNode(`${rdfs}comment`),
      literal(`mínima separacíon espacial disponible en un conjunto de datos, medida en metros.`, 'es'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}spatialResolutionInMeters`),
      namedNode(`${rdfs}comment`),
      literal(`separazione spaziale minima risolvibile in un set di dati, misurata in metri.`, 'it'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}spatialResolutionInMeters`),
      namedNode(`${rdfs}label`),
      literal(`geografisk opløsning (meter)`, 'da'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}spatialResolutionInMeters`),
      namedNode(`${rdfs}label`),
      literal(`prostorové rozlišení (metry)`, 'cs'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}spatialResolutionInMeters`),
      namedNode(`${rdfs}label`),
      literal(`resolución espacial (metros)`, 'es'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}spatialResolutionInMeters`),
      namedNode(`${rdfs}label`),
      literal(`risoluzione spaziale (metros)`, 'it'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}spatialResolutionInMeters`),
      namedNode(`${rdfs}label`),
      literal(`spatial resolution (meters)`, 'en-US'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}spatialResolutionInMeters`),
      namedNode(`${rdfs}label`),
      literal(`spatial resolution (metres)`, 'en-GB'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}spatialResolutionInMeters`),
      namedNode(`${rdfs}range`),
      namedNode(`${xsd}decimal`),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}spatialResolutionInMeters`),
      namedNode(`${skos}changeNote`),
      literal(`New property added in DCAT 2.0.`, 'en'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}spatialResolutionInMeters`),
      namedNode(`${skos}changeNote`),
      literal(`Nová vlastnost přidaná ve verzi DCAT 2.0.`, 'cs'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}spatialResolutionInMeters`),
      namedNode(`${skos}changeNote`),
      literal(`Nueva propiedad añadida en DCAT 2.0.`, 'es'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}spatialResolutionInMeters`),
      namedNode(`${skos}changeNote`),
      literal(`Nuova proprietà aggiunta in DCAT 2.0.`, 'it'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}spatialResolutionInMeters`),
      namedNode(`${skos}changeNote`),
      literal(`Ny genskab tilføjet i DCAT 2.0.`, 'da'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}spatialResolutionInMeters`),
      namedNode(`${skos}definition`),
      literal(`mindste geografiske afstand som kan resolveres i et datasæt, målt i meter.`, 'da'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}spatialResolutionInMeters`),
      namedNode(`${skos}definition`),
      literal(`minimum spatial separation resolvable in a dataset, measured in meters.`, 'en-US'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}spatialResolutionInMeters`),
      namedNode(`${skos}definition`),
      literal(`minimum spatial separation resolvable in a dataset, measured in metres.`, 'en-GB'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}spatialResolutionInMeters`),
      namedNode(`${skos}definition`),
      literal(`minimální prostorový rozestup rozeznatelný v datové sadě, měřeno v metrech.`, 'cs'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}spatialResolutionInMeters`),
      namedNode(`${skos}definition`),
      literal(`mínima separacíon espacial disponible en un conjunto de datos, medida en metros.`, 'es'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}spatialResolutionInMeters`),
      namedNode(`${skos}definition`),
      literal(`separazione spaziale minima risolvibile in un set di dati, misurata in metri.`, 'it'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}spatialResolutionInMeters`),
      namedNode(`${skos}editorialNote`),
      literal(`Kan optræde i forbindelse med beskrivelse af datasættet eller datasætditributionen, så der er ikke angivet et domæne for egenskaben.`, 'da'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}spatialResolutionInMeters`),
      namedNode(`${skos}editorialNote`),
      literal(`Might appear in the description of a Dataset or a Distribution, so no domain is specified.`, 'en'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}spatialResolutionInMeters`),
      namedNode(`${skos}editorialNote`),
      literal(`Může se vyskytnout v popisu Datové sady nebo Distribuce, takže nebyl specifikován definiční obor.`, 'cs'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}spatialResolutionInMeters`),
      namedNode(`${skos}scopeNote`),
      literal(`Alternative geografiske opløsninger kan leveres som forskellige datasætdistributioner.`, 'da'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}spatialResolutionInMeters`),
      namedNode(`${skos}scopeNote`),
      literal(`Alternative spatial resolutions might be provided as different dataset distributions.`, 'en'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}spatialResolutionInMeters`),
      namedNode(`${skos}scopeNote`),
      literal(`Distintas distribuciones de un conjunto de datos pueden tener resoluciones espaciales diferentes.`, 'es'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}spatialResolutionInMeters`),
      namedNode(`${skos}scopeNote`),
      literal(`Hvis datasættet udgøres af et billede eller et grid, så bør dette svare til afstanden mellem elementerne. For andre typer af spatiale datasæt, vil denne egenskab typisk indikere den mindste afstand mellem elementerne i datasættet.`, 'da'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}spatialResolutionInMeters`),
      namedNode(`${skos}scopeNote`),
      literal(`If the dataset is an image or grid this should correspond to the spacing of items. For other kinds of spatial dataset, this property will usually indicate the smallest distance between items in the dataset.`, 'en'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}spatialResolutionInMeters`),
      namedNode(`${skos}scopeNote`),
      literal(`Pokud je datová sada obraz či mřížka, měla by tato vlastnost odpovídat rozestupu položek. Pro ostatní druhy prostorových datových sad bude tato vlastnost obvykle indikovat nejmenší vzdálenost mezi položkami této datové sady.`, 'cs'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}spatialResolutionInMeters`),
      namedNode(`${skos}scopeNote`),
      literal(`Risoluzioni spaziali alternative possono essere fornite come diverse distribuzioni di set di dati.`, 'it'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}spatialResolutionInMeters`),
      namedNode(`${skos}scopeNote`),
      literal(`Různá prostorová rozlišení mohou být poskytována jako různé distribuce datové sady.`, 'cs'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}spatialResolutionInMeters`),
      namedNode(`${skos}scopeNote`),
      literal(`Se il set di dati è un'immagine o una griglia, questo dovrebbe corrispondere alla spaziatura degli elementi. Per altri tipi di set di dati spaziali, questa proprietà di solito indica la distanza minima tra gli elementi nel set di dati.`, 'it'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}spatialResolutionInMeters`),
      namedNode(`${skos}scopeNote`),
      literal(`Si el conjunto de datos es una imágen o grilla, esta propiedad corresponde al espaciado de los elementos. Para otro tipo de conjunto de datos espaciales, esta propieda usualmente indica la menor distancia entre los elementos de dichos datos.`, 'es'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}startDate`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}startDate`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}DatatypeProperty`),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}startDate`),
      namedNode(`${rdfs}domain`),
      namedNode(`${dcterms}PeriodOfTime`),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}startDate`),
      namedNode(`${rdfs}label`),
      literal(`data di inizio`, 'it'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}startDate`),
      namedNode(`${rdfs}label`),
      literal(`datum začátku`, 'cs'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}startDate`),
      namedNode(`${rdfs}label`),
      literal(`start date`, 'en'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}startDate`),
      namedNode(`${rdfs}label`),
      literal(`startdato`, 'da'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}startDate`),
      namedNode(`${rdfs}range`),
      namedNode(`${rdfs}Literal`),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}startDate`),
      namedNode(`${skos}altLabel`),
      literal(`starttidspunkt`, 'da'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}startDate`),
      namedNode(`${skos}changeNote`),
      literal(`New property added in DCAT 2.0.`, 'en'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}startDate`),
      namedNode(`${skos}changeNote`),
      literal(`Nová vlastnost přidaná ve verzi DCAT 2.0.`, 'cs'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}startDate`),
      namedNode(`${skos}changeNote`),
      literal(`Nueva propiedad agregada en DCAT 2.0.`, 'es'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}startDate`),
      namedNode(`${skos}changeNote`),
      literal(`Nuova proprietà aggiunta in DCAT 2.0.`, 'it'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}startDate`),
      namedNode(`${skos}changeNote`),
      literal(`Ny egenskab tilføjet i DCAT 2.0.`, 'da'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}startDate`),
      namedNode(`${skos}definition`),
      literal(`El comienzo del período`, 'es'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}startDate`),
      namedNode(`${skos}definition`),
      literal(`L'inizio del periodo`, 'it'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}startDate`),
      namedNode(`${skos}definition`),
      literal(`Start på perioden.`, 'da'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}startDate`),
      namedNode(`${skos}definition`),
      literal(`The start of the period`, 'en'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}startDate`),
      namedNode(`${skos}definition`),
      literal(`Začátek doby trvání`, 'cs'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}startDate`),
      namedNode(`${skos}scopeNote`),
      literal(`El rango de esta propiedad es intencionalmente genérico con el propósito de permitir distintos niveles de precisión temporal para especificar el comienzo de un período. Por ejemplo, puede expresarse como una fecha (xsd:date), una fecha y un tiempo (xsd:dateTime), o un año (xsd:gYear).`, 'es'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}startDate`),
      namedNode(`${skos}scopeNote`),
      literal(`Il range di questa proprietà è volutamente generico, con lo scopo di consentire diversi livelli di precisione temporale per specificare l'inizio di un periodo. Ad esempio, può essere espresso con una data (xsd:date), una data e un'ora (xsd:dateTime), o un anno (xsd:gYear).`, 'it'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}startDate`),
      namedNode(`${skos}scopeNote`),
      literal(`Obor hodnot této vlastnosti je úmyslně obecný, aby umožnil různé úrovně časového rozlišení pro specifikaci začátku doby trvání. Ten může být kupříkladu vyjádřen datumem (xsd:date), datumem a časem (xsd:dateTime) či rokem (xsd:gYear).`, 'cs'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}startDate`),
      namedNode(`${skos}scopeNote`),
      literal(`Rækkeviden for denne egenskab er bevidst generisk defineret med det formål at tillade forskellige niveauer af tidslig præcision ifm. angivelse af startdatoen for en periode. Den kan eksempelvis udtrykkes som en dato (xsd:date), en dato og et tidspunkt (xsd:dateTime), eller et årstal (xsd:gYear).`, 'da'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}startDate`),
      namedNode(`${skos}scopeNote`),
      literal(`The range of this property is intentionally generic, with the purpose of allowing different level of temporal precision for specifying the start of a period. E.g., it can be expressed with a date (xsd:date), a date and time (xsd:dateTime), or a year (xsd:gYear).`, 'en'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}temporalResolution`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}DatatypeProperty`),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}temporalResolution`),
      namedNode(`${rdfs}comment`),
      literal(`mindste tidsperiode der kan resolveres i datasættet.`, 'da'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}temporalResolution`),
      namedNode(`${rdfs}comment`),
      literal(`minimum time period resolvable in a dataset.`, 'en'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}temporalResolution`),
      namedNode(`${rdfs}comment`),
      literal(`minimální doba trvání rozlišitelná v datové sadě.`, 'cs'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}temporalResolution`),
      namedNode(`${rdfs}comment`),
      literal(`periodo di tempo minimo risolvibile in un set di dati.`, 'it'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}temporalResolution`),
      namedNode(`${rdfs}comment`),
      literal(`período de tiempo mínimo en el conjunto de datos.`, 'es'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}temporalResolution`),
      namedNode(`${rdfs}label`),
      literal(`resolución temporal`, 'es'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}temporalResolution`),
      namedNode(`${rdfs}label`),
      literal(`risoluzione temporale`, 'it'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}temporalResolution`),
      namedNode(`${rdfs}label`),
      literal(`temporal resolution`, 'en'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}temporalResolution`),
      namedNode(`${rdfs}label`),
      literal(`tidslig opløsning`, 'da'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}temporalResolution`),
      namedNode(`${rdfs}label`),
      literal(`časové rozlišení`, 'cs'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}temporalResolution`),
      namedNode(`${rdfs}range`),
      namedNode(`${xsd}duration`),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}temporalResolution`),
      namedNode(`${skos}changeNote`),
      literal(`New property added in DCAT 2.0.`, 'en'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}temporalResolution`),
      namedNode(`${skos}changeNote`),
      literal(`Nová vlastnost přidaná ve verzi DCAT 2.0.`, 'cs'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}temporalResolution`),
      namedNode(`${skos}changeNote`),
      literal(`Nueva propiedad añadida en DCAT 2.0.`, 'es'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}temporalResolution`),
      namedNode(`${skos}changeNote`),
      literal(`Nuova proprietà aggiunta in DCAT 2.0.`, 'it'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}temporalResolution`),
      namedNode(`${skos}definition`),
      literal(`mindste tidsperiode der kan resolveres i datasættet.`, 'da'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}temporalResolution`),
      namedNode(`${skos}definition`),
      literal(`minimum time period resolvable in a dataset.`, 'en'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}temporalResolution`),
      namedNode(`${skos}definition`),
      literal(`minimální doba trvání rozlišitelná v datové sadě.`, 'cs'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}temporalResolution`),
      namedNode(`${skos}definition`),
      literal(`periodo di tempo minimo risolvibile in un set di dati.`, 'it'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}temporalResolution`),
      namedNode(`${skos}definition`),
      literal(`período de tiempo mínimo en el conjunto de datos.`, 'es'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}temporalResolution`),
      namedNode(`${skos}editorialNote`),
      literal(`Kan optræde i forbindelse med beskrivelse af datasættet eller datasætditributionen, så der er ikke angivet et domæne for egenskaben.`, 'da'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}temporalResolution`),
      namedNode(`${skos}editorialNote`),
      literal(`Might appear in the description of a Dataset or a Distribution, so no domain is specified.`, 'en'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}temporalResolution`),
      namedNode(`${skos}editorialNote`),
      literal(`Může se vyskytnout v popisu Datové sady nebo Distribuce, takže nebyl specifikován definiční obor.`, 'cs'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}temporalResolution`),
      namedNode(`${skos}scopeNote`),
      literal(`Alternative temporal resolutions might be provided as different dataset distributions.`, 'en'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}temporalResolution`),
      namedNode(`${skos}scopeNote`),
      literal(`Alternative tidslige opløsninger kan leveres som forskellige datasætdistributioner.`, 'da'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}temporalResolution`),
      namedNode(`${skos}scopeNote`),
      literal(`Distintas distribuciones del conjunto de datos pueden tener resoluciones temporales diferentes.`, 'es'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}temporalResolution`),
      namedNode(`${skos}scopeNote`),
      literal(`Hvis datasættet er en tidsserie, så bør denne egenskab svare til afstanden mellem elementerne i tidsserien. For andre typer af datasæt indikerer denne egenskab den mindste tidsforskel mellem elementer i datasættet.`, 'da'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}temporalResolution`),
      namedNode(`${skos}scopeNote`),
      literal(`If the dataset is a time-series this should correspond to the spacing of items in the series. For other kinds of dataset, this property will usually indicate the smallest time difference between items in the dataset.`, 'en'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}temporalResolution`),
      namedNode(`${skos}scopeNote`),
      literal(`Pokud je datová sada časovou řadou, měla by tato vlastnost odpovídat rozestupu položek v řadě. Pro ostatní druhy datových sad bude tato vlastnost obvykle indikovat nejmenší časovou vzdálenost mezi položkami této datové sady.`, 'cs'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}temporalResolution`),
      namedNode(`${skos}scopeNote`),
      literal(`Risoluzioni temporali alternative potrebbero essere fornite come diverse distribuzioni di set di dati.`, 'it'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}temporalResolution`),
      namedNode(`${skos}scopeNote`),
      literal(`Různá časová rozlišení mohou být poskytována jako různé distribuce datové sady.`, 'cs'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}temporalResolution`),
      namedNode(`${skos}scopeNote`),
      literal(`Se il set di dati è una serie temporale, questo dovrebbe corrispondere alla spaziatura degli elementi della serie. Per altri tipi di set di dati, questa proprietà di solito indica la più piccola differenza di tempo tra gli elementi nel set di dati.`, 'it'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}temporalResolution`),
      namedNode(`${skos}scopeNote`),
      literal(`Si el conjunto de datos es una serie temporal, debe corresponder al espaciado de los elementos de la serie. Para otro tipo de conjuntos de datos, esta propiedad indicará usualmente la menor diferencia de tiempo entre elementos en el dataset.`, 'es'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}theme`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}theme`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}ObjectProperty`),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}theme`),
      namedNode(`${rdfs}comment`),
      literal(`A main category of the resource. A resource can have multiple themes.`, 'en'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}theme`),
      namedNode(`${rdfs}comment`),
      literal(`Et centralt emne for ressourcen. En ressource kan have flere centrale emner.`, 'da'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}theme`),
      namedNode(`${rdfs}comment`),
      literal(`Hlavní téma zdroje. Zdroj může mít více témat.`, 'cs'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}theme`),
      namedNode(`${rdfs}comment`),
      literal(`La categoria principale della risorsa. Una risorsa può avere più temi.`, 'it'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}theme`),
      namedNode(`${rdfs}comment`),
      literal(`La categoría principal del recurso. Un recurso puede tener varios temas.`, 'es'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}theme`),
      namedNode(`${rdfs}comment`),
      literal(`La catégorie principale de la ressource. Une ressource peut avoir plusieurs thèmes.`, 'fr'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}theme`),
      namedNode(`${rdfs}comment`),
      literal(`Η κύρια κατηγορία του συνόλου δεδομένων. Ένα σύνολο δεδομένων δύναται να έχει πολλαπλά θέματα.`, 'el'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}theme`),
      namedNode(`${rdfs}comment`),
      literal(`التصنيف الرئيسي لقائمة البيانات. قائمة البيانات يمكن أن تملك أكثر من تصنيف رئيسي واحد.`, 'ar'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}theme`),
      namedNode(`${rdfs}comment`),
      literal(`データセットの主要カテゴリー。データセットは複数のテーマを持つことができます。`, 'ja'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}theme`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(ns5),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}theme`),
      namedNode(`${rdfs}label`),
      literal(`emne`, 'da'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}theme`),
      namedNode(`${rdfs}label`),
      literal(`tema`, 'es'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}theme`),
      namedNode(`${rdfs}label`),
      literal(`tema`, 'it'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}theme`),
      namedNode(`${rdfs}label`),
      literal(`theme`, 'en'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}theme`),
      namedNode(`${rdfs}label`),
      literal(`thème`, 'fr'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}theme`),
      namedNode(`${rdfs}label`),
      literal(`téma`, 'cs'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}theme`),
      namedNode(`${rdfs}label`),
      literal(`Θέμα`, 'el'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}theme`),
      namedNode(`${rdfs}label`),
      literal(`التصنيف`, 'ar'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}theme`),
      namedNode(`${rdfs}label`),
      literal(`テーマ/カテゴリー`, 'ja'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}theme`),
      namedNode(`${rdfs}range`),
      namedNode(`${skos}Concept`),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}theme`),
      namedNode(`${rdfs}subPropertyOf`),
      namedNode(`${dcterms}subject`),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}theme`),
      namedNode(`${skos}altLabel`),
      literal(`tema`, 'da'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}theme`),
      namedNode(`${skos}definition`),
      literal(`A main category of the resource. A resource can have multiple themes.`, 'en'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}theme`),
      namedNode(`${skos}definition`),
      literal(`Et centralt emne for ressourcen. En ressource kan have flere centrale emner.`, 'da'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}theme`),
      namedNode(`${skos}definition`),
      literal(`Hlavní téma zdroje. Zdroj může mít více témat.`, 'cs'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}theme`),
      namedNode(`${skos}definition`),
      literal(`La categoria principale della risorsa. Una risorsa può avere più temi.`, 'it'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}theme`),
      namedNode(`${skos}definition`),
      literal(`La categoría principal del recurso. Un recurso puede tener varios temas.`, 'es'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}theme`),
      namedNode(`${skos}definition`),
      literal(`La catégorie principale de la ressource. Une ressource peut avoir plusieurs thèmes.`, 'fr'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}theme`),
      namedNode(`${skos}definition`),
      literal(`Η κύρια κατηγορία του συνόλου δεδομένων. Ένα σύνολο δεδομένων δύναται να έχει πολλαπλά θέματα.`, 'el'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}theme`),
      namedNode(`${skos}definition`),
      literal(`التصنيف الرئيسي لقائمة البيانات. قائمة البيانات يمكن أن تملك أكثر من تصنيف رئيسي واحد.`, 'ar'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}theme`),
      namedNode(`${skos}definition`),
      literal(`データセットの主要カテゴリー。データセットは複数のテーマを持つことができます。`, 'ja'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}theme`),
      namedNode(`${skos}editorialNote`),
      literal(`Status: English Definition text modified by DCAT revision team, all except for Italian and Czech translations are pending.`, 'en'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}theme`),
      namedNode(`${skos}scopeNote`),
      literal(`El conjunto de skos:Concepts utilizados para categorizar los recursos están organizados en un skos:ConceptScheme que describe todas las categorías y sus relaciones en el catálogo.`, 'es'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}theme`),
      namedNode(`${skos}scopeNote`),
      literal(`Il set di concetti skos usati per categorizzare le risorse sono organizzati in skos:ConceptScheme che descrive tutte le categorie e le loro relazioni nel catalogo.`, 'it'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}theme`),
      namedNode(`${skos}scopeNote`),
      literal(`Sada instancí třídy skos:Concept použitá pro kategorizaci zdrojů je organizována do schématu konceptů skos:ConceptScheme, které popisuje všechny kategorie v katalogu a jejich vztahy.`, 'cs'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}theme`),
      namedNode(`${skos}scopeNote`),
      literal(`Samlingen af begreber (skos:Concept) der anvendes til at emneinddele ressourcer organiseres i et begrebssystem (skos:ConceptScheme) som beskriver alle emnerne og deres relationer i kataloget.`, 'da'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}theme`),
      namedNode(`${skos}scopeNote`),
      literal(`The set of skos:Concepts used to categorize the resources are organized in a skos:ConceptScheme describing all the categories and their relations in the catalog.`, 'en'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}theme`),
      namedNode(`${skos}scopeNote`),
      literal(`Un ensemble de skos:Concepts utilisés pour catégoriser les ressources sont organisés en un skos:ConceptScheme décrivant toutes les catégories et ses relations dans le catalogue.`, 'fr'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}theme`),
      namedNode(`${skos}scopeNote`),
      literal(`Το σετ των skos:Concepts που χρησιμοποιείται για να κατηγοριοποιήσει τα σύνολα δεδομένων είναι οργανωμένο εντός ενός skos:ConceptScheme που περιγράφει όλες τις κατηγορίες και τις σχέσεις αυτών στον κατάλογο.`, 'el'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}theme`),
      namedNode(`${skos}scopeNote`),
      literal(`データセットを分類するために用いられるskos:Conceptの集合は、カタログのすべてのカテゴリーとそれらの関係を記述しているskos:ConceptSchemeで組織化されます。`, 'ja'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}themeTaxonomy`),
      namedNode(`${schema}rangeIncludes`),
      namedNode(`${owl}Ontology`),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}themeTaxonomy`),
      namedNode(`${schema}rangeIncludes`),
      namedNode(`${skos}Collection`),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}themeTaxonomy`),
      namedNode(`${schema}rangeIncludes`),
      namedNode(`${skos}ConceptScheme`),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}themeTaxonomy`),
      namedNode(`${rdf}type`),
      namedNode(`${rdf}Property`),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}themeTaxonomy`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}ObjectProperty`),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}themeTaxonomy`),
      namedNode(`${rdfs}comment`),
      literal(`El sistema de organización del conocimiento utilizado para clasificar conjuntos de datos de catálogos.`, 'es'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}themeTaxonomy`),
      namedNode(`${rdfs}comment`),
      literal(`Il sistema di organizzazione della conoscenza (KOS) usato per classificare i dataset del catalogo.`, 'it'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}themeTaxonomy`),
      namedNode(`${rdfs}comment`),
      literal(`Le systhème d'ogranisation de connaissances utilisé pour classifier les jeux de données du catalogue.`, 'fr'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}themeTaxonomy`),
      namedNode(`${rdfs}comment`),
      literal(`Systém organizace znalostí (KOS) použitý pro klasifikaci datových sad v katalogu.`, 'cs'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}themeTaxonomy`),
      namedNode(`${rdfs}comment`),
      literal(`The knowledge organization system (KOS) used to classify catalog's datasets.`, 'en'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}themeTaxonomy`),
      namedNode(`${rdfs}comment`),
      literal(`Vidensorganiseringssystem (KOS) som anvendes til at klassificere datasæt i kataloget.`, 'da'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}themeTaxonomy`),
      namedNode(`${rdfs}comment`),
      literal(`Το σύστημα οργάνωσης γνώσης που χρησιμοποιείται για την κατηγοριοποίηση των συνόλων δεδομένων του καταλόγου.`, 'el'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}themeTaxonomy`),
      namedNode(`${rdfs}comment`),
      literal(`لائحة التصنيفات المستخدمه لتصنيف قوائم البيانات ضمن الفهرس`, 'ar'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}themeTaxonomy`),
      namedNode(`${rdfs}comment`),
      literal(`カタログのデータセットを分類するために用いられる知識組織化体系（KOS；knowledge organization system）。`, 'ja'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}themeTaxonomy`),
      namedNode(`${rdfs}domain`),
      namedNode(`${dcat}Catalog`),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}themeTaxonomy`),
      namedNode(`${rdfs}isDefinedBy`),
      namedNode(ns5),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}themeTaxonomy`),
      namedNode(`${rdfs}label`),
      literal(`emnetaksonomi`, 'da'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}themeTaxonomy`),
      namedNode(`${rdfs}label`),
      literal(`tassonomia dei temi`, 'it'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}themeTaxonomy`),
      namedNode(`${rdfs}label`),
      literal(`taxonomie de thèmes`, 'fr'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}themeTaxonomy`),
      namedNode(`${rdfs}label`),
      literal(`taxonomie témat`, 'cs'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}themeTaxonomy`),
      namedNode(`${rdfs}label`),
      literal(`taxonomía de temas`, 'es'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}themeTaxonomy`),
      namedNode(`${rdfs}label`),
      literal(`theme taxonomy`, 'en'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}themeTaxonomy`),
      namedNode(`${rdfs}label`),
      literal(`Ταξινομία θεματικών κατηγοριών.`, 'el'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}themeTaxonomy`),
      namedNode(`${rdfs}label`),
      literal(`قائمة التصنيفات`, 'ar'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}themeTaxonomy`),
      namedNode(`${rdfs}label`),
      literal(`テーマ`, 'ja'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}themeTaxonomy`),
      namedNode(`${rdfs}range`),
      namedNode(`${rdfs}Resource`),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}themeTaxonomy`),
      namedNode(`${skos}altLabel`),
      literal(`temataksonomi`, 'da'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}themeTaxonomy`),
      namedNode(`${skos}definition`),
      literal(`El sistema de organización del conocimiento utilizado para clasificar conjuntos de datos de catálogos.`, 'es'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}themeTaxonomy`),
      namedNode(`${skos}definition`),
      literal(`Il sistema di organizzazione della conoscenza (KOS) usato per classificare i dataset del catalogo.`, 'it'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}themeTaxonomy`),
      namedNode(`${skos}definition`),
      literal(`Le systhème d'ogranisation de connaissances utilisé pour classifier les jeux de données du catalogue.`, 'fr'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}themeTaxonomy`),
      namedNode(`${skos}definition`),
      literal(`Systém organizace znalostí (KOS) použitý pro klasifikaci datových sad v katalogu.`, 'cs'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}themeTaxonomy`),
      namedNode(`${skos}definition`),
      literal(`The knowledge organization system (KOS) used to classify catalog's datasets.`, 'en'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}themeTaxonomy`),
      namedNode(`${skos}definition`),
      literal(`Vidensorganiseringssystem (KOS) som anvendes til at klassificere datasæt i kataloget.`, 'da'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}themeTaxonomy`),
      namedNode(`${skos}definition`),
      literal(`Το σύστημα οργάνωσης γνώσης που χρησιμοποιείται για την κατηγοριοποίηση των συνόλων δεδομένων του καταλόγου.`, 'el'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}themeTaxonomy`),
      namedNode(`${skos}definition`),
      literal(`لائحة التصنيفات المستخدمه لتصنيف قوائم البيانات ضمن الفهرس`, 'ar'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}themeTaxonomy`),
      namedNode(`${skos}definition`),
      literal(`カタログのデータセットを分類するために用いられる知識組織化体系（KOS；knowledge organization system）。`, 'ja'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}themeTaxonomy`),
      namedNode(`${skos}scopeNote`),
      literal(`Det anbefales at taksonomien organiseres i et skos:ConceptScheme, skos:Collection, owl:Ontology eller lignende, som giver mulighed for at ethvert medlem af taksonomien kan forsynes med en IRI og udgives som linked-data.`, 'da'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}themeTaxonomy`),
      namedNode(`${skos}scopeNote`),
      literal(`It is recommended that the taxonomy is organized in a skos:ConceptScheme, skos:Collection, owl:Ontology or similar, which allows each member to be denoted by an IRI and published as linked-data.`, 'en'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}themeTaxonomy`),
      namedNode(`${skos}scopeNote`),
      literal(`Je doporučeno, aby byla taxonomie vyjádřena jako skos:ConceptScheme, skos:Collection, owl:Ontology nebo podobné, aby mohla být každá položka identifikována pomocí IRI a publikována jako propojená data.`, 'cs'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}themeTaxonomy`),
      namedNode(`${skos}scopeNote`),
      literal(`Se recomienda que la taxonomía se organice como un skos:ConceptScheme, skos:Collection, owl:Ontology o similar, los cuáles permiten que cada miembro se denote con una IRI y se publique como datos enlazados.`, 'es'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${dcat}themeTaxonomy`),
      namedNode(`${skos}scopeNote`),
      literal(`Si raccomanda che la tassonomia sia organizzata in uno skos:ConceptScheme, skos:Collection, owl:Ontology o simili, che permette ad ogni membro di essere indicato da un IRI e pubblicato come linked-data.`, 'it'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${ns14}dcat`),
      namedNode(`${dcterms}contributor`),
      blankNodes[4],
      namedNode(dcat)
    ),
    quad(
      namedNode(`${ns14}dcat`),
      namedNode(`${dcterms}contributor`),
      blankNodes[5],
      namedNode(dcat)
    ),
    quad(
      namedNode(`${ns14}dcat`),
      namedNode(`${dcterms}contributor`),
      blankNodes[6],
      namedNode(dcat)
    ),
    quad(
      namedNode(`${ns14}dcat`),
      namedNode(`${dcterms}contributor`),
      blankNodes[7],
      namedNode(dcat)
    ),
    quad(
      namedNode(`${ns14}dcat`),
      namedNode(`${dcterms}contributor`),
      blankNodes[8],
      namedNode(dcat)
    ),
    quad(
      namedNode(`${ns14}dcat`),
      namedNode(`${dcterms}contributor`),
      blankNodes[9],
      namedNode(dcat)
    ),
    quad(
      namedNode(`${ns14}dcat`),
      namedNode(`${dcterms}contributor`),
      blankNodes[10],
      namedNode(dcat)
    ),
    quad(
      namedNode(`${ns14}dcat`),
      namedNode(`${dcterms}contributor`),
      blankNodes[11],
      namedNode(dcat)
    ),
    quad(
      namedNode(`${ns14}dcat`),
      namedNode(`${dcterms}contributor`),
      blankNodes[12],
      namedNode(dcat)
    ),
    quad(
      namedNode(`${ns14}dcat`),
      namedNode(`${dcterms}contributor`),
      blankNodes[13],
      namedNode(dcat)
    ),
    quad(
      namedNode(`${ns14}dcat`),
      namedNode(`${dcterms}contributor`),
      blankNodes[14],
      namedNode(dcat)
    ),
    quad(
      namedNode(`${ns14}dcat`),
      namedNode(`${dcterms}contributor`),
      blankNodes[15],
      namedNode(dcat)
    ),
    quad(
      namedNode(`${ns14}dcat`),
      namedNode(`${dcterms}contributor`),
      blankNodes[16],
      namedNode(dcat)
    ),
    quad(
      namedNode(`${ns14}dcat`),
      namedNode(`${dcterms}contributor`),
      blankNodes[17],
      namedNode(dcat)
    ),
    quad(
      namedNode(`${ns14}dcat`),
      namedNode(`${dcterms}contributor`),
      blankNodes[18],
      namedNode(dcat)
    ),
    quad(
      namedNode(`${ns14}dcat`),
      namedNode(`${dcterms}contributor`),
      blankNodes[19],
      namedNode(dcat)
    ),
    quad(
      namedNode(`${ns14}dcat`),
      namedNode(`${dcterms}creator`),
      blankNodes[20],
      namedNode(dcat)
    ),
    quad(
      namedNode(`${ns14}dcat`),
      namedNode(`${dcterms}creator`),
      blankNodes[21],
      namedNode(dcat)
    ),
    quad(
      namedNode(`${ns14}dcat`),
      namedNode(`${dcterms}license`),
      namedNode(ns15),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${ns14}dcat`),
      namedNode(`${dcterms}modified`),
      literal(`2012-04-24`, namedNode(`${xsd}date`)),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${ns14}dcat`),
      namedNode(`${dcterms}modified`),
      literal(`2013-09-20`, namedNode(`${xsd}date`)),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${ns14}dcat`),
      namedNode(`${dcterms}modified`),
      literal(`2013-11-28`, namedNode(`${xsd}date`)),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${ns14}dcat`),
      namedNode(`${dcterms}modified`),
      literal(`2017-12-19`, namedNode(`${xsd}date`)),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${ns14}dcat`),
      namedNode(`${dcterms}modified`),
      literal(`2019`),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${ns14}dcat`),
      namedNode(`${dcterms}modified`),
      literal(`2020-11-30`, namedNode(`${xsd}date`)),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${ns14}dcat`),
      namedNode(`${dcterms}modified`),
      literal(`2021-09-14`, namedNode(`${xsd}date`)),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${ns14}dcat`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}Ontology`),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${ns14}dcat`),
      namedNode(`${rdfs}comment`),
      literal(`DCAT er et RDF-vokabular som har til formål at understøtte interoperabilitet mellem datakataloger udgivet på nettet. Ved at anvende DCAT til at beskrive datasæt i datakataloger, kan udgivere øge findbarhed og gøre det gøre det lettere for applikationer at anvende metadata fra forskellige kataloger. Derudover understøttes decentraliseret udstilling af kataloger og fødererede datasætsøgninger på tværs af websider. Aggregerede DCAT-metadata kan fungere som fortegnelsesfiler der kan understøtte digital bevaring. DCAT er defineret på http://www.w3.org/TR/vocab-dcat/. Enhver forskel mellem det normative dokument og dette schema er en fejl i dette schema.`, 'da'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${ns14}dcat`),
      namedNode(`${rdfs}comment`),
      literal(`DCAT es un vocabulario RDF diseñado para facilitar la interoperabilidad entre catálogos de datos publicados en la Web. Utilizando DCAT para describir datos disponibles en catálogos se aumenta la posibilidad de que sean descubiertos y se permite que las aplicaciones consuman fácilmente los metadatos de varios catálogos.`, 'es'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${ns14}dcat`),
      namedNode(`${rdfs}comment`),
      literal(`DCAT est un vocabulaire développé pour faciliter l'interopérabilité entre les jeux de données publiées sur le Web. En utilisant DCAT pour décrire les jeux de données dans les catalogues de données, les fournisseurs de données augmentent leur découverte et permettent que les applications facilement les métadonnées de plusieurs catalogues. Il permet en plus la publication décentralisée des catalogues et facilitent la recherche fédérée des données entre plusieurs sites. Les métadonnées DCAT aggrégées peuvent servir comme un manifeste pour faciliter la préservation digitale des ressources. DCAT est définie à l'adresse http://www.w3.org/TR/vocab-dcat/. Une quelconque version de ce document normatif et ce vocabulaire est une erreur dans ce vocabulaire.`, 'fr'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${ns14}dcat`),
      namedNode(`${rdfs}comment`),
      literal(`DCAT is an RDF vocabulary designed to facilitate interoperability between data catalogs published on the Web. By using DCAT to describe datasets in data catalogs, publishers increase discoverability and enable applications easily to consume metadata from multiple catalogs. It further enables decentralized publishing of catalogs and facilitates federated dataset search across sites. Aggregated DCAT metadata can serve as a manifest file to facilitate digital preservation. DCAT is defined at http://www.w3.org/TR/vocab-dcat/. Any variance between that normative document and this schema is an error in this schema.`, 'en'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${ns14}dcat`),
      namedNode(`${rdfs}comment`),
      literal(`DCAT je RDF slovník navržený pro zprostředkování interoperability mezi datovými katalogy publikovanými na Webu. Poskytovatelé dat používáním slovníku DCAT pro popis datových sad v datových katalozích zvyšují jejich dohledatelnost a umožňují aplikacím konzumovat metadata z více katalogů. Dále je umožňena decentralizovaná publikace katalogů a federované dotazování na datové sady napříč katalogy. Agregovaná DCAT metadata mohou také sloužit jako průvodka umožňující digitální uchování informace. DCAT je definován na http://www.w3.org/TR/vocab-dcat/. Jakýkoliv nesoulad mezi odkazovaným dokumentem a tímto schématem je chybou v tomto schématu.`, 'cs'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${ns14}dcat`),
      namedNode(`${rdfs}comment`),
      literal(`DCAT è un vocabolario RDF progettato per facilitare l'interoperabilità tra i cataloghi di dati pubblicati nel Web. Utilizzando DCAT per descrivere i dataset nei cataloghi di dati, i fornitori migliorano la capacità di individuazione dei dati e abilitano le  applicazioni al consumo di dati provenienti da cataloghi differenti. DCAT permette di decentralizzare la pubblicazione di cataloghi e facilita la ricerca federata dei dataset. L'aggregazione dei metadati federati può fungere da file manifesto per facilitare la conservazione digitale. DCAT è definito all'indirizzo http://www.w3.org/TR/vocab-dcat/. Qualsiasi scostamento tra tale definizione normativa e questo schema è da considerarsi un errore di questo schema.`, 'it'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${ns14}dcat`),
      namedNode(`${rdfs}comment`),
      literal(`DCATは、ウェブ上で公開されたデータ・カタログ間の相互運用性の促進を目的とするRDFの語彙です。このドキュメントでは、その利用のために、スキーマを定義し、例を提供します。データ・カタログ内のデータセットを記述するためにDCATを用いると、公開者が、発見可能性を増加させ、アプリケーションが複数のカタログのメタデータを容易に利用できるようになります。さらに、カタログの分散公開を可能にし、複数のサイトにまたがるデータセットの統合検索を促進します。集約されたDCATメタデータは、ディジタル保存を促進するためのマニフェスト・ファイルとして使用できます。`, 'ja'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${ns14}dcat`),
      namedNode(`${rdfs}comment`),
      literal(`Το DCAT είναι ένα RDF λεξιλόγιο που σχεδιάσθηκε για να κάνει εφικτή τη διαλειτουργικότητα μεταξύ καταλόγων δεδομένων στον Παγκόσμιο Ιστό. Χρησιμοποιώντας το DCAT για την περιγραφή συνόλων δεδομένων, οι εκδότες αυτών αυξάνουν την ανακαλυψιμότητα και επιτρέπουν στις εφαρμογές την εύκολη κατανάλωση μεταδεδομένων από πολλαπλούς καταλόγους. Επιπλέον, δίνει τη δυνατότητα για αποκεντρωμένη έκδοση και διάθεση καταλόγων και επιτρέπει δυνατότητες ενοποιημένης αναζήτησης μεταξύ διαφορετικών πηγών. Συγκεντρωτικά μεταδεδομένα που έχουν περιγραφεί με το DCAT μπορούν να χρησιμοποιηθούν σαν ένα δηλωτικό αρχείο (manifest file) ώστε να διευκολύνουν την ψηφιακή συντήρηση.`, 'el'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${ns14}dcat`),
      namedNode(`${rdfs}comment`),
      literal(`هي أنطولوجية تسهل تبادل البيانات بين مختلف الفهارس على الوب. استخدام هذه الأنطولوجية يساعد على اكتشاف قوائم  البيانات المنشورة على الوب و يمكن التطبيقات المختلفة من الاستفادة أتوماتيكيا من البيانات المتاحة من مختلف الفهارس.`, 'ar'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${ns14}dcat`),
      namedNode(`${rdfs}label`),
      literal(`Datakatalogvokabular`, 'da'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${ns14}dcat`),
      namedNode(`${rdfs}label`),
      literal(`El vocabulario de catálogo de datos`, 'es'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${ns14}dcat`),
      namedNode(`${rdfs}label`),
      literal(`Il vocabolario del catalogo dei dati`, 'it'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${ns14}dcat`),
      namedNode(`${rdfs}label`),
      literal(`Le vocabulaire des jeux de données`, 'fr'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${ns14}dcat`),
      namedNode(`${rdfs}label`),
      literal(`Slovník pro datové katalogy`, 'cs'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${ns14}dcat`),
      namedNode(`${rdfs}label`),
      literal(`The data catalog vocabulary`, 'en'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${ns14}dcat`),
      namedNode(`${rdfs}label`),
      literal(`Το λεξιλόγιο των καταλόγων δεδομένων`, 'el'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${ns14}dcat`),
      namedNode(`${rdfs}label`),
      literal(`أنطولوجية فهارس قوائم البيانات`, 'ar'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${ns14}dcat`),
      namedNode(`${rdfs}label`),
      literal(`データ・カタログ語彙（DCAT）`, 'ja'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${ns14}dcat`),
      namedNode(`${owl}imports`),
      namedNode(dcterms),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${ns14}dcat`),
      namedNode(`${owl}imports`),
      namedNode(`${ns16}core`),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${ns14}dcat`),
      namedNode(`${owl}imports`),
      namedNode(ns17),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${ns14}dcat`),
      namedNode(`${owl}versionInfo`),
      literal(`Dette er en opdateret kopi af DCAT v. 2.0 som er tilgænglig på https://www.w3.org/ns/dcat.ttl`, 'da'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${ns14}dcat`),
      namedNode(`${owl}versionInfo`),
      literal(`Esta es una copia del vocabulario DCAT v2.0 disponible en https://www.w3.org/ns/dcat.ttl`, 'es'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${ns14}dcat`),
      namedNode(`${owl}versionInfo`),
      literal(`Questa è una copia aggiornata del vocabolario DCAT v2.0 disponibile in https://www.w3.org/ns/dcat.ttl`, 'en'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${ns14}dcat`),
      namedNode(`${owl}versionInfo`),
      literal(`This is an updated copy of v2.0 of the DCAT vocabulary, taken from https://www.w3.org/ns/dcat.ttl`, 'en'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${ns14}dcat`),
      namedNode(`${owl}versionInfo`),
      literal(`Toto je aktualizovaná kopie slovníku DCAT verze 2.0, převzatá z https://www.w3.org/ns/dcat.ttl`, 'cs'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${ns14}dcat`),
      namedNode(`${skos}editorialNote`),
      literal(`English language definitions updated in this revision in line with ED. Multilingual text unevenly updated.`, 'en'),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${ns14}dcat`),
      namedNode(`${foaf}maker`),
      blankNodes[22],
      namedNode(dcat)
    ),
    quad(
      namedNode(`${foaf}homepage`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}ObjectProperty`),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${foaf}homepage`),
      namedNode(`${rdfs}comment`),
      literal(`This axiom needed so that Protege loads DCAT2 without errors.`),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${foaf}primaryTopic`),
      namedNode(`${rdf}type`),
      namedNode(`${owl}ObjectProperty`),
      namedNode(dcat)
    ),
    quad(
      namedNode(`${foaf}primaryTopic`),
      namedNode(`${rdfs}comment`),
      literal(`This axiom needed so that Protege loads DCAT2 without errors.`),
      namedNode(dcat)
    ),
    quad(
      blankNodes[22],
      namedNode(`${foaf}homepage`),
      namedNode(ns18),
      namedNode(dcat)
    ),
    quad(
      blankNodes[22],
      namedNode(`${foaf}name`),
      literal(`Government Linked Data WG`),
      namedNode(dcat)
    ),
    quad(
      blankNodes[4],
      namedNode(`${rdfs}seeAlso`),
      namedNode(`${ns19}me`),
      namedNode(dcat)
    ),
    quad(
      blankNodes[4],
      namedNode(`${foaf}homepage`),
      namedNode(ns20),
      namedNode(dcat)
    ),
    quad(
      blankNodes[4],
      namedNode(`${foaf}name`),
      literal(`Jakub Klímek`),
      namedNode(dcat)
    ),
    quad(
      blankNodes[23],
      namedNode(`${foaf}homepage`),
      namedNode(`${ns21}www.refinitiv.com`),
      namedNode(dcat)
    ),
    quad(
      blankNodes[23],
      namedNode(`${foaf}name`),
      literal(`Refinitiv`),
      namedNode(dcat)
    ),
    quad(
      blankNodes[5],
      namedNode(`${rdfs}seeAlso`),
      namedNode(`${ns22}gatemezing-foaf.rdf`),
      namedNode(dcat)
    ),
    quad(
      blankNodes[5],
      namedNode(`${foaf}name`),
      literal(`Ghislain Auguste Atemezing`),
      namedNode(dcat)
    ),
    quad(
      blankNodes[24],
      namedNode(`${rdf}first`),
      namedNode(`${dcat}Relationship`),
      namedNode(dcat)
    ),
    quad(
      blankNodes[24],
      namedNode(`${rdf}rest`),
      namedNode(`${rdf}nil`),
      namedNode(dcat)
    ),
    quad(
      blankNodes[25],
      namedNode(`${foaf}homepage`),
      namedNode(ns23),
      namedNode(dcat)
    ),
    quad(
      blankNodes[25],
      namedNode(`${foaf}name`),
      literal(`European Commission, DG DIGIT`),
      namedNode(dcat)
    ),
    quad(
      blankNodes[6],
      namedNode(`${schema}affiliation`),
      blankNodes[25],
      namedNode(dcat)
    ),
    quad(
      blankNodes[6],
      namedNode(`${foaf}name`),
      literal(`Vassilios Peristeras`),
      namedNode(dcat)
    ),
    quad(
      blankNodes[7],
      namedNode(`${foaf}name`),
      literal(`Martin Alvarez-Espinar`),
      namedNode(dcat)
    ),
    quad(
      blankNodes[26],
      namedNode(`${rdf}first`),
      namedNode(`${prov}Attribution`),
      namedNode(dcat)
    ),
    quad(
      blankNodes[26],
      namedNode(`${rdf}rest`),
      blankNodes[24],
      namedNode(dcat)
    ),
    quad(
      blankNodes[8],
      namedNode(`${schema}affiliation`),
      blankNodes[23],
      namedNode(dcat)
    ),
    quad(
      blankNodes[8],
      namedNode(`${foaf}name`),
      literal(`David Browning`),
      namedNode(dcat)
    ),
    quad(
      blankNodes[9],
      namedNode(`${foaf}name`),
      literal(`Boris Villazón-Terrazas`),
      namedNode(dcat)
    ),
    quad(
      blankNodes[27],
      namedNode(`${rdf}first`),
      namedNode(`${dcat}endpointURL`),
      namedNode(dcat)
    ),
    quad(
      blankNodes[27],
      namedNode(`${rdf}rest`),
      namedNode(`${rdf}nil`),
      namedNode(dcat)
    ),
    quad(
      blankNodes[10],
      namedNode(`${schema}affiliation`),
      namedNode(`${ns25}W3C`),
      namedNode(dcat)
    ),
    quad(
      blankNodes[10],
      namedNode(`${rdfs}seeAlso`),
      namedNode(`${ns26}me`),
      namedNode(dcat)
    ),
    quad(
      blankNodes[10],
      namedNode(`${foaf}homepage`),
      namedNode(`${ns27}phila`),
      namedNode(dcat)
    ),
    quad(
      blankNodes[10],
      namedNode(`${foaf}name`),
      literal(`Phil Archer`),
      namedNode(dcat)
    ),
    quad(
      blankNodes[11],
      namedNode(`${foaf}homepage`),
      namedNode(ns28),
      namedNode(dcat)
    ),
    quad(
      blankNodes[11],
      namedNode(`${foaf}name`),
      literal(`Shuji Kamitsuna`),
      namedNode(dcat)
    ),
    quad(
      blankNodes[12],
      namedNode(`${schema}affiliation`),
      blankNodes[28],
      namedNode(dcat)
    ),
    quad(
      blankNodes[12],
      namedNode(`${foaf}name`),
      literal(`Rufus Pollock`),
      namedNode(dcat)
    ),
    quad(
      blankNodes[13],
      namedNode(`${rdfs}seeAlso`),
      namedNode(`${ns29}0000-0001-5648-2713`),
      namedNode(dcat)
    ),
    quad(
      blankNodes[13],
      namedNode(`${foaf}homepage`),
      namedNode(`${ns30}178-riccardo-albertoni`),
      namedNode(dcat)
    ),
    quad(
      blankNodes[13],
      namedNode(`${foaf}homepage`),
      namedNode(ns31),
      namedNode(dcat)
    ),
    quad(
      blankNodes[13],
      namedNode(`${foaf}name`),
      literal(`Riccardo Albertoni`),
      namedNode(dcat)
    ),
    quad(
      blankNodes[3],
      namedNode(`${rdf}type`),
      namedNode(`${owl}Class`),
      namedNode(dcat)
    ),
    quad(
      blankNodes[3],
      namedNode(`${owl}unionOf`),
      blankNodes[26],
      namedNode(dcat)
    ),
    quad(
      blankNodes[14],
      namedNode(`${foaf}name`),
      literal(`Marios Meimaris`),
      namedNode(dcat)
    ),
    quad(
      blankNodes[15],
      namedNode(`${rdfs}seeAlso`),
      namedNode(`${ns32}me`),
      namedNode(dcat)
    ),
    quad(
      blankNodes[15],
      namedNode(`${foaf}homepage`),
      namedNode(ns33),
      namedNode(dcat)
    ),
    quad(
      blankNodes[15],
      namedNode(`${foaf}name`),
      literal(`Makx Dekkers`),
      namedNode(dcat)
    ),
    quad(
      blankNodes[16],
      namedNode(`${schema}affiliation`),
      blankNodes[29],
      namedNode(dcat)
    ),
    quad(
      blankNodes[16],
      namedNode(`${rdf}type`),
      namedNode(`${foaf}Person`),
      namedNode(dcat)
    ),
    quad(
      blankNodes[16],
      namedNode(`${rdfs}seeAlso`),
      namedNode(`${ns29}0000-0002-3884-3420`),
      namedNode(dcat)
    ),
    quad(
      blankNodes[16],
      namedNode(`${foaf}name`),
      literal(`Simon J D Cox`),
      namedNode(dcat)
    ),
    quad(
      blankNodes[16],
      namedNode(`${foaf}workInfoHomepage`),
      namedNode(`${ns34}Simon-Cox`),
      namedNode(dcat)
    ),
    quad(
      blankNodes[20],
      namedNode(`${foaf}name`),
      literal(`John Erickson`),
      namedNode(dcat)
    ),
    quad(
      blankNodes[17],
      namedNode(`${schema}affiliation`),
      blankNodes[30],
      namedNode(dcat)
    ),
    quad(
      blankNodes[17],
      namedNode(`${rdfs}seeAlso`),
      namedNode(`${ns29}0000-0003-3499-8262`),
      namedNode(dcat)
    ),
    quad(
      blankNodes[17],
      namedNode(`${foaf}homepage`),
      namedNode(`${ns35}agbeltran.github.io`),
      namedNode(dcat)
    ),
    quad(
      blankNodes[17],
      namedNode(`${foaf}name`),
      literal(`Alejandra Gonzalez-Beltran`),
      namedNode(dcat)
    ),
    quad(
      blankNodes[2],
      namedNode(`${rdf}first`),
      namedNode(`${dcat}accessService`),
      namedNode(dcat)
    ),
    quad(
      blankNodes[2],
      namedNode(`${rdf}rest`),
      blankNodes[27],
      namedNode(dcat)
    ),
    quad(
      blankNodes[28],
      namedNode(`${foaf}homepage`),
      namedNode(`${ns21}okfn.org`),
      namedNode(dcat)
    ),
    quad(
      blankNodes[28],
      namedNode(`${foaf}name`),
      literal(`Open Knowledge Foundation`),
      namedNode(dcat)
    ),
    quad(
      blankNodes[29],
      namedNode(`${foaf}homepage`),
      namedNode(`${ns35}csiro.au`),
      namedNode(dcat)
    ),
    quad(
      blankNodes[29],
      namedNode(`${foaf}name`),
      literal(`Commonwealth Scientific and Industrial Research Organisation`),
      namedNode(dcat)
    ),
    quad(
      blankNodes[30],
      namedNode(`${foaf}homepage`),
      namedNode(`${ns21}stfc.ac.uk`),
      namedNode(dcat)
    ),
    quad(
      blankNodes[30],
      namedNode(`${foaf}name`),
      literal(`Science and Technology Facilities Council, UK`),
      namedNode(dcat)
    ),
    quad(
      blankNodes[0],
      namedNode(`${rdf}type`),
      namedNode(`${owl}Restriction`),
      namedNode(dcat)
    ),
    quad(
      blankNodes[0],
      namedNode(`${owl}allValuesFrom`),
      namedNode(`${dcat}Resource`),
      namedNode(dcat)
    ),
    quad(
      blankNodes[0],
      namedNode(`${owl}onProperty`),
      namedNode(`${foaf}primaryTopic`),
      namedNode(dcat)
    ),
    quad(
      blankNodes[18],
      namedNode(`${rdfs}seeAlso`),
      namedNode(`${ns29}0000-0001-9300-2694`),
      namedNode(dcat)
    ),
    quad(
      blankNodes[18],
      namedNode(`${foaf}homepage`),
      namedNode(`${ns36}me`),
      namedNode(dcat)
    ),
    quad(
      blankNodes[18],
      namedNode(`${foaf}name`),
      literal(`Andrea Perego`),
      namedNode(dcat)
    ),
    quad(
      blankNodes[1],
      namedNode(`${rdf}type`),
      namedNode(`${owl}Restriction`),
      namedNode(dcat)
    ),
    quad(
      blankNodes[1],
      namedNode(`${owl}cardinality`),
      literal(`1`, namedNode(`${xsd}nonNegativeInteger`)),
      namedNode(dcat)
    ),
    quad(
      blankNodes[1],
      namedNode(`${owl}onProperty`),
      namedNode(`${foaf}primaryTopic`),
      namedNode(dcat)
    ),
    quad(
      blankNodes[21],
      namedNode(`${rdfs}seeAlso`),
      namedNode(`${ns37}foaf.ttl`),
      namedNode(dcat)
    ),
    quad(
      blankNodes[21],
      namedNode(`${foaf}name`),
      literal(`Fadi Maali`),
      namedNode(dcat)
    ),
    quad(
      blankNodes[19],
      namedNode(`${foaf}name`),
      literal(`Richard Cyganiak`),
      namedNode(dcat)
    ),

  ]
}
