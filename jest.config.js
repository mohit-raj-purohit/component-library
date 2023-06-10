module.exports = {
	transform: {
		'^.+\\.[t|j]sx?$': 'babel-jest',
	},
	testEnvironment: 'jest-environment-jsdom',
	moduleNameMapper: {
		'.(css|less|scss)$': 'identity-obj-proxy',
	},
};
