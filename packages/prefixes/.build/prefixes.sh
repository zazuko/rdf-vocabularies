#!/usr/bin/env bash

DIR_PATH=$(dirname $0)
IFS=;

PREFIX_MAP="$(jq -r '"  '"'\(.vocabulary.prefix)'"': '"'\(.vocabulary.namespace)'"',"' $DIR_PATH/../../../ontologies/*/package.json)"

echo "import prefixesOnly from './lib/prefixesOnly.js'

const packagedPrefixes = {
$PREFIX_MAP
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

export default prefixes as Prefixes & CustomPrefixes"
