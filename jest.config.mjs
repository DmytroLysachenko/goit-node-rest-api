/** @type {import('jest').Config} */
const config = {
  clearMocks: true,
  coverageProvider: 'v8',
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
};

export default config;
