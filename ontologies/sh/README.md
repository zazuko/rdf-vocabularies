# @vocabulary/sh

This package contains a snapshot of the SHACL vocabulary with the addition of
an unofficial rendition of the latest [SHACL Advanced Features](https://w3c.github.io/shacl/shacl-af/) 
draft.

## SHACL Advanced Features

SHACL-AF adds a handful of properties and node expressions. The latter are expressed here as
node shapes.

### Known issues

The node shape `sh:FunctionExpression` currently does not work and will cause false negatives when
validation a shape which uses function expressions.
