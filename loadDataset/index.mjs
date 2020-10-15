import stringToStream from 'string-to-stream'
export async function loadDatasetStream (prefix) {
  return stringToStream((await import(`../ontologies/${prefix}.nq`)).default)
}
