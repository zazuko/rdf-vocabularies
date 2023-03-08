#!/bin/bash

VOCABS=$(jq '.name' ontologies/*/package.json)

for vocab in $VOCABS
do
  HAS_DEPENDENCY=$(grep "$vocab" packages/vocabularies/package.json)
  if [ "$HAS_DEPENDENCY" ]
  then
    echo "✔ ${vocab}"
  else
    MISSING=true
    echo "𝙭 ${vocab}"
  fi
done

if [ $MISSING ]
then
  exit 1
fi
