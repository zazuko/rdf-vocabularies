import fileFetch from 'file-fetch'
import httpFetch from 'node-fetch'
import protoFetch from 'proto-fetch'

export default protoFetch({
  file: fileFetch,
  http: httpFetch,
  https: httpFetch
})
