module.exports = {
  'roots': [
    '<rootDir>/src'
  ],
  collectCoverageFrom: [
    'src/**/{!(datasets)}/*.js'
  ],
  'testRegex': '.+\\.test\\.ts',
  'transform': {
    '^.+\\.tsx?$': 'ts-jest'
  }
}
