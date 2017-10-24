module.exports = {
  setupFiles: [
    './src/test/setupJest.js'
  ],
  collectCoverage: true,
  coverageReporters: [
    'json'
  ],
  testMatch: [
    '<rootDir>/src/**/test/**/*.ts?(x)',
    '<rootDir>/src/**/?(*.)(spec|test).ts?(x)'
  ],
  testPathIgnorePatterns: [
    '/node_modules/',
    '/fixtures/',
    'setupJest.js'
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
    '<rootDir>/src/'
  ],
  rootDir: __dirname,
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.tsx?$': '<rootDir>/node_modules/ts-jest/preprocessor.js'
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/(?!lodash-es)'],

  // setupTestFrameworkScriptFile: require.resolve('./JEST-DEBUG.js')
}
