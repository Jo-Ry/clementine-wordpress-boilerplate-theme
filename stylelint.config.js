/** @type {import('stylelint').Config} */

export default {
	plugins: ['@stylistic/stylelint-plugin'],
	extends: '@wordpress/stylelint-config/scss', // https://developer.wordpress.org/block-editor/reference-guides/packages/packages-stylelint-config/
	rules: {
		'at-rule-no-unknown': null,
		'selector-class-pattern': null,
		'scss/at-rule-no-unknown': true,
		'@stylistic/max-line-length': null,
		'@stylistic/number-leading-zero': 'always',
		'@stylistic/unit-case': 'lower',
		
		// @wordpress/stylelint-config CSS overrides.
		'at-rule-empty-line-before': [
			'always',
			{
				except: [ 'blockless-after-blockless' ],
				ignore: ['after-comment'],
				ignoreAtRules: ['return', 'else'],
			},
		],
	},
};
