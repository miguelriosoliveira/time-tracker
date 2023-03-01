module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
		jest: true,
	},
	extends: [
		'next/core-web-vitals',
		'plugin:react/recommended',
		'standard-with-typescript',
		'plugin:prettier/recommended',
		'plugin:unicorn/recommended',
	],
	overrides: [],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		project: __dirname + '/tsconfig.json',
	},
	plugins: ['react', 'react-hooks', '@typescript-eslint', 'prettier', 'unicorn'],
	rules: {
		camelcase: 'off',
		'no-case-declarations': 'off',
		'no-unused-vars': 'off',

		'@typescript-eslint/explicit-function-return-type': 'off',
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		'@typescript-eslint/no-unused-vars': 'error',
		'@typescript-eslint/no-use-before-define': 'error',

		'import/extensions': ['error', 'ignorePackages', { ts: 'never', tsx: 'never' }],
		'import/no-extraneous-dependencies': [
			'error',
			{ devDependencies: ['!**/*.test.js', '!**/*.spec.js'] },
		],
		'import/order': [
			'error',
			{
				'newlines-between': 'always',
				alphabetize: {
					order: 'asc',
					caseInsensitive: true,
				},
			},
		],
		'import/prefer-default-export': 'off',

		'prettier/prettier': 'error',

		'react/function-component-definition': [
			'warn',
			{ namedComponents: ['function-declaration', 'arrow-function'] },
		],
		'react/prop-types': 'off',
		'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
		'react/jsx-indent': ['warn', 'tab'],
		'react/jsx-props-no-spreading': 'off',
		'react/react-in-jsx-scope': 'off',
		'react/require-default-props': 'off',

		'react-hooks/exhaustive-deps': 'warn',
		'react-hooks/rules-of-hooks': 'error',

		'unicorn/filename-case': 'off',
		'unicorn/no-array-for-each': 'off',
		'unicorn/no-nested-ternary': 'off',
		'unicorn/no-null': 'off',
		'unicorn/prevent-abbreviations': 'off',
	},
};
