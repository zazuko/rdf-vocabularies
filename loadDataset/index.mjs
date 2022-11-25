import stringToStream from 'string-to-stream'

const AsyncFunction = (async function () {}).constructor;

export async function loadDatasetStream (prefix) {
  if (is_node()) {
    const path = new URL(`../ontologies/${prefix}.nq`, import.meta.url).toString()
    const nodeLoad = new AsyncFunction('path', `
      const { createReadStream } = await import('fs')
      const url = await import('url')
      return createReadStream(url.fileURLToPath(path))
    `)

    return nodeLoad(path)
  }

  return stringToStream((await import(`../ontologies/${prefix}.nq`)).default)
}

function is_node() {
  return typeof global !== 'undefined' && global.global === global;
}
