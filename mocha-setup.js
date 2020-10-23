/* eslint-disable @typescript-eslint/no-var-requires */
require('@babel/register')({
  configFile: './babel.test.config.json',
  extensions: ['.ts', '.js', '.jsx', '.tsx']
})
