module.exports = {
	clearMocks: true,
	moduleFileExtensions: ['js', 'json'],
	testMatch: ['**/__tests__/**/*.js?(x)', '**/?(*.)+(spec|test).js?(x)'],
	testPathIgnorePatterns: ['\\\\node_modules\\\\'],
	transformIgnorePatterns: ['<rootDir>/node_modules/'],
	verbose: false,
	collectCoverage: false,
	coverageDirectory: 'coverage',
	collectCoverageFrom: ['src/**/*.{js,jsx}'],
	coveragePathIgnorePatterns: ['/node_modules/']
};
