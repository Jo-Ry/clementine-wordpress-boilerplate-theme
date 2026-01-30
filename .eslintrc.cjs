module.exports = {
	plugins: ['@wordpress/eslint-plugin'],

	extends: [
		'plugin:@wordpress/eslint-plugin/esnext',
		'plugin:@wordpress/eslint-plugin/custom',
		'plugin:@wordpress/eslint-plugin/i18n',
		'prettier',
	],
	env: { browser: true, jquery: true, node: true, es6: true },
	settings: {
		// Allow style imports like: import './style.scss';
		'import/ignore': ['\\.scss$', '\\.css$'],
	},
	rules: {
		'no-console': 'off',
		'no-unused-vars': 'warn',
		// Disables Unix linebreak enforcement for Windows compatibility
		// due to 'plugin:@wordpress/eslint-plugin/esnext'
		'linebreak-style': 'off',
	},
};
