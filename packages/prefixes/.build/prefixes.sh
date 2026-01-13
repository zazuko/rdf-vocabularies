#!/usr/bin/env bash

DIR_PATH=$(dirname $0)
IFS=;

PREFIX_MAP=$(
  node -e "
    const fs = require('node:fs');
    const path = require('node:path');
    const glob = require('glob');
    const files = glob.sync(path.join('$DIR_PATH/../../../ontologies/*/package.json'));
    for (const file of files) {
      const pkg = JSON.parse(fs.readFileSync(file, 'utf8'));
      if (pkg.vocabulary && pkg.vocabulary.prefix && pkg.vocabulary.namespace) {
        console.log(\`  '\` + pkg.vocabulary.prefix + \`': '\` + pkg.vocabulary.namespace + \`',\`);
      }
    }
  "
)

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
