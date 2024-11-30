export default {
  clearMocks: true,
  coverageProvider: 'v8',
  moduleFileExtensions: ['js', 'vue', 'mjs', 'ts', 'json'],
  moduleNameMapper: {
    '^@/(.*)': '<rootDir>/$1',
    '#app': '<rootDir>/node_modules/nuxt3/dist/app/index.mjs',
  },
  // preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(js|jsx|mjs)$': 'babel-jest',
    '^.+\\.(ts|tsx)$': 'ts-jest',
    '.+\\.(css|scss|png|jpg|svg)$': 'jest-transform-stub',
    '.*\\.(vue)$': '@vue/vue3-jest',
  },
  transformIgnorePatterns: ['node_modules/(?!(nuxt3|unenv))'],
};
