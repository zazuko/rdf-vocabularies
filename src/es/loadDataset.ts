import stringToStream from 'string-to-stream'

export async function loadDatasetStream (prefix: string) {
  return stringToStream((await import(`../../ontologies/${prefix}.nq`)).default)
}
