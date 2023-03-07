interface FileSpec {
  file?: string
  mediaType?: string
  xmlParserOptions?: {
    baseIRI: string
  }
}

export interface Override extends FileSpec {
  files?: FileSpec[]
}
