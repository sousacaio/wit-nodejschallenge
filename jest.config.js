module.exports = {
    collectCoverage: false,
    collectCoverageFrom: ['<rootDIr>/src/**/*.ts'],
    coverageDirectory: 'coverage',
    roots: ['<rootDir>/src'],
    coverageProvider: 'v8',
    testEnvironment: 'node',
    transform: {
      '.+\\.ts$': 'ts-jest'
    }
  }
  