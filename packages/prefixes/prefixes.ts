import prefixesOnly from './lib/prefixesOnly.js'

const packagedPrefixes = {

}

const prefixes = {
  ...packagedPrefixes,
  ...prefixesOnly,
} as const

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Prefixes extends Readonly<typeof prefixes> {

}
export interface CustomPrefixes {
  [key: string]: string
}

export default prefixes as Prefixes & CustomPrefixes
