module.exports = {
	root: true,
	env: {
		browser: true,
		es2022: true,
		node: true,
	},
	extends: ['eslint:recommended', 'plugin:astro/recommended'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['@typescript-eslint', 'astro'],
	rules: {
		// General JavaScript/TypeScript rules
		'no-console': 'warn',
		'no-debugger': 'error',
		'no-unused-vars': 'off', // Handled by TypeScript version
		'prefer-const': 'error',
		'no-var': 'error',
		'object-shorthand': 'error',
		'prefer-template': 'error',
		'template-curly-spacing': 'error',
		'arrow-spacing': 'error',
		'comma-dangle': ['error', 'always-multiline'],
		'comma-spacing': 'error',
		'comma-style': 'error',
		'computed-property-spacing': 'error',
		'func-call-spacing': 'error',
		'key-spacing': 'error',
		'keyword-spacing': 'error',
		'object-curly-spacing': ['error', 'always'],
		semi: ['error', 'always'],
		'semi-spacing': 'error',
		'space-before-blocks': 'error',
		'space-before-function-paren': ['error', 'never'],
		'space-in-parens': 'error',
		'space-infix-ops': 'error',
		'space-unary-ops': 'error',
		'spaced-comment': 'error',

		// Indentation rules - use tabs
		indent: ['error', 'tab'],
		'no-tabs': 'off',
	},
	overrides: [
		{
			files: ['*.astro'],
			parser: 'astro-eslint-parser',
			parserOptions: {
				parser: '@typescript-eslint/parser',
				extraFileExtensions: ['.astro'],
			},
			rules: {
				// Astro-specific rules
				'astro/no-conflict-set-directives': 'error',
				'astro/no-unused-define-vars-in-style': 'error',
				'astro/prefer-class-list-directive': 'error',
				'astro/prefer-object-class-list': 'error',
				'astro/prefer-split-class-list': 'error',
				'astro/no-set-html-directive': 'error',
				'astro/no-set-text-directive': 'error',
				'astro/valid-compile': 'error',
			},
		},
	],
};
