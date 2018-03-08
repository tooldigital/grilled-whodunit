const Entity = require('./entity')
const suspects = require('../../functions/src/data/suspects')
module.exports = new Entity('suspect', [
	{
		value: suspects.TUCKER,
		synonyms: [
			'Tucker',
			'Mr. Mitts',
			'Mitts',
			'Tucker Mitts',
			'Tucker Mintz',
			'suspect one',
			'suspect number one',
		],
	},
	{
		value: suspects.CONSTANCE,
		synonyms: [
			'Constance',
			'Mrs. Florentine',
			'Ms. Florentine',
			'Florentine',
			'Constance Florentine',
			'suspect two',
			'suspect number two',
		],
	},
	{
		value: suspects.PETE,
		synonyms: [
			'Pete',
			'Peter',
			'Judsen',
			'Judson',
			'Mr. Judson',
			'Mr. Judsen',
			'Pete Judsen',
			'suspect three',
			'suspect number three',
		],
	},
	{
		value: suspects.BRANDI,
		synonyms: [
			'Brandi',
			'Brandi Lynn',
			'Brandi Lynn Michelle',
			'Mrs. Michelle',
			'Ms. Michelle',
			'Brandi Michelle',
			'Brandy',
			'Brandy Lynn',
			'Brandy Linn',
			'suspect four',
			'suspect number four',
		],
	},
])