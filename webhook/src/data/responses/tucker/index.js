//Tucker
module.exports = {
	hawkins_intro: 'Meet Tucker Mitts, Betsy’s business partner and head chef. ',
	intro: 'What do you want??',
	fallback: 'I don’t get what you’re saying, pal.',
	confession: '<emphasis level="reduced" >Ok<break time=".8s" /> You got me. <break time=".3s" /> I didn\'t care about Betsy, her restaurant or the Judsens.<break time=".8s" /> Brandi was alot of fun, but it was just a temporary thing. I\'m ready to get out of this sleepy town, so let me go in and do my time. The most I could get is Murder 2 and a few years. You don\'t have a strong enough case for Murder 1.<break time=".8s" /> You can get your detective bonus and I\'ll keep on with my long term plans. Well done, detective.<break time=".8s" /> Can I go now?</emphasis>',
	general: require('./general'),
	variations: [
		require('./variation0'),
		require('./variation1'),
		require('./variation2'),
		require('./variation3'),
	]
}
