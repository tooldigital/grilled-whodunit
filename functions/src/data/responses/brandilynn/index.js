//Brandi
module.exports = {
	hawkins_intro: `Meet Brandi Lynn, a 21 year old Lockhart native. Brandi Lynn is a regular in the local nightlife, and worked at Betsy's BBQ.`,
	intro: 'What’s up detective?',
	fallback: 'I don’t understand',
	confession: '<emphasis level="strong">I didn’t mean for this all to go so wrong. I went to the restaurant to try to steal her secret recipe and she was standing right there. We began to fight for that little piece of paper and started knocking things off of the wall. I pushed her and she tripped and fell into the closet. I closed and locked the door and started running. I didn’t notice that the stove got turned on and caught some rags on fire. I was just outside and the blast knocked me to the ground. I got up and kept running. It’s just so horrible. I never meant for any of this to happen.</emphasis>',
	general: require('./general'),
	variations: [
		require('./variation0'),
		require('./variation1'),
		require('./variation2'),
		require('./variation3'),
	],
}

