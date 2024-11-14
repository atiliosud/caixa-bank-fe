module.exports = {
    testEnvironment: 'jsdom',
    transform: {
      '^.+\\.[tj]sx?$': 'babel-jest',
    },
    transformIgnorePatterns: [
      '/node_modules/(?!(@nanostores|nanostores)/)',
    ],
    moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
};