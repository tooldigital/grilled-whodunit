const Entity = require('../lib/entity')
module.exports = new Entity('evidence', [
	{
		value: 'paint thinner',
		synonyms: [
			'paint thinner',
			'turpentine',
		],
	},
	{
		value: 'broom closet',
		synonyms: [
			'closet',
			'broom closet',
			'the broom closet',
		],
	},
	{
		value: 'alibi',
		synonyms: [
			'alibi',
		],
	},
])
