module.exports = {
  setupFiles: [
    '<rootDir>/test/setupJest.js'
  ],
  collectCoverage: true,
  coverageReporters: [
    'json'
  ],
  testMatch: [
    '<rootDir>/test/**/*.(spec|test).ts?(x)',
  ],
  testPathIgnorePatterns: [
    '<rootDir>//node_modules/',
    '<rootDir>/test/setupJest.js'
  ],
  globals: {
    usingJSDOM: true,
    usingJest: true,
    'ts-jest': {
      useBabelrc: true
    }
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  projects: [
    '<rootDir>'
  ],
  rootDir: __dirname,
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.tsx?$': '<rootDir>/node_modules/ts-jest/preprocessor.js'
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/(?!lodash-es)'],

  // setupTestFrameworkScriptFile: require.resolve('./JEST-DEBUG.js')
}
