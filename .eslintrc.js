module.exports = {
	'env': {
		'browser': true
	},
	'parserOptions': {
		'ecmaFeatures': {
			'jsx': true
		},
		'ecmaVersion': 2020,
		'sourceType': 'module'
	},
	'extends': [
		'eslint:recommended',
		'plugin:react/recommended'
	],
	'settings': {
		'react': {
			'createClass': 'createReactClass',
			'pragma': 'React',
			'fragment': 'Fragment',
			'version': 'detect',
			'flowVersion': '0.53'
		},
		'propWrapperFunctions': [
			'forbidExtraProps',
			{'property': 'freeze', 'object': 'Object'},
			{'property': 'myFavoriteWrapper'}
		],
		'linkComponents': [
			'Hyperlink',
			{'name': 'Link', 'linkAttribute': 'to'}
		]
	},
	'plugins': [
		'react'
	],
	'rules': {
		'indent': [
			'error',
			'tab'
		],
		'linebreak-style': [
			'error',
			'unix'
		],
		'quotes': [
			'error',
			'single'
		],
		'semi': [
			'error',
			'always'
		]
	}
};