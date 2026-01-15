#!/usr/bin/env sh

# find JS entrypoint
bin=$(node -e "console.log(require.resolve('@vocabulary/builder/bin/index.js'))" 2> /dev/null)

# if tsx or ts-node exists in path, use them
if command -v tsx > /dev/null 2>&1
then
  node --import tsx --no-warnings "$bin" "$@"
elif command -v ts-node > /dev/null 2>&1
then
  node --loader ts-node/esm/transpile-only --no-warnings "$bin" "$@"
else
  node "$bin" "$@"
fi
