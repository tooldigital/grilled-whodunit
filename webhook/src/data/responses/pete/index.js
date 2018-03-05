//Pete
module.exports = {
	hawkins_intro: 'Meet Pete, owner of another BBQ shop in town. He was Betsy’s main competitor.',
	intro: 'How can I help?',
	fallback: `I don't understand?`,
	confession: `<emphasis level="strong"><emphasis level="strong">Fine!</emphasis> I killed Betsy. I worked my hands to the bone on my restaurant and she just parachutes in with a checkbook and a vendetta? That wasn't happening. <break time=".7s" /> I pushed her into that closet, turned on the burner and spilled the paint thinner everywhere. Finally I don't have to suffer for my mother's feuds anymore. It's haunted me my whole life!</emphasis>`,
	general: require('./general'),
	variations: [
		require('./variation0'),
		require('./variation1'),
		require('./variation2'),
		require('./variation3'),
	]
}