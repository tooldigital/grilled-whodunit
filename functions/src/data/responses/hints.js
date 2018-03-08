const keys = require('../../intent-keys')

const suggestPrimers = [
	'I have an idea.',
	'Let me help.',
	'Can I make a suggestion?',
]
const suggest = () => suggestPrimers[Math.floor(Math.random() * suggestPrimers.length)] + '<break time=".2s"/> '


module.exports = {
	common: [
		{key: 'PROMPT_RELATIONS', 			text: suggest() + 'Try asking if they know Brandi, Tucker, Pete, or Constance.<break time=".5s" /> After all Lockhart is a small town.'},
		{key: keys.WHOKILLEDBETSY, 			text: suggest() + 'Try asking who do they think killed Betsy.'},
		{key: 'PROMPT_FOLLOWUPS', 			text: 'Listen closely to the suspects’ responses. Are they revealing information you want to ask followup questions on?'},
		{key: keys.NIGHTOF, 				text: suggest() + 'Try asking, "Where were you on the night of the murder?"'},
		{key: 'PROMPT_HOWTOWIN', 			text: 'If you think you know who is lying and how they are lying say "I’d like to press charges."'},
		{key: keys.WHATRELATIONSHIPTOBETSY, text: suggest() + 'Try asking, "What was your relationship with Betsy?"'},
		{key: 'PROMPT_ALIBI', 				text: suggest() + 'Try to keep track of the stories. Are their alibis all lining up?'},
		{key: 'PROMPT_HOWTOWIN2', 			text: 'If you think you know who is lying and how they are lying say "I’d like to press charges."'},
		{key: 'PROMPT_SELECT_SUSPECT', 		text: suggest() + 'Try talking to a different suspect.'},
		{key: keys.HOWLONGKNOWBETSY, 		text: suggest() + 'Try asking, "How long have you known Betsy?"'},
		{key: 'PROMPT_COMPARE_ANSWERS', 	text: suggest() + 'Try asking each suspect the same questions and compare their answers.'},
		{key: keys.DIDYOUKILLHER, 			text: suggest() + 'Try asking if the suspect killed Betsy.'},
		// {key: keys.DIDYOUKILLHER, 			text: 'Try asking, Did you kill Betsy?'},
		{key: 'PROMPT_EVIDENCE', 			text: suggest() + 'Go back and listen to the case file. Has anyone mentioned a piece of evidence they shouldn’t have known about?'},
		{key: keys.ANGRYWITHBETSY, 			text: suggest() + 'Try asking the suspect if they were angry at Betsy.'},
		{key: keys.BETSYDOSOMETHINGTOYOU, 	text: suggest() + 'Try asking, "Did Betsy do something to you?"'},
	],
	variations: [
		// brandi is killer. suggest questions that will reveal faulty alibi
		[
			{
				key: 'HINT_BRANDI_ALIBI',
				text: 'I have a hunch. Talk to Tucker and ask him where he was on the night of the murder.'
			}
		],
		// pete is killer. suggest asking him a question that will reveal that he knows about turpentine
		[
			{
				key: 'HINT_PETE_EVIDENCE',
				text: 'Maybe Pete knows something. Ask who he thinks killed Betsy.'
			}
		],
		// constance is killer. suggest questions that will reveal faulty alibi
		[
			{
				key: 'HINT_BRANDI_ALIBI',
				text: 'I think I know what\'s going on here. Ask Brandi about her father.'
			}
		],
		// tucker is killer. suggest questions that will reveal his knowledge of the closet
		[
			{
				key: 'HINT_TUCKER_EVIDENCE',
				text: 'Tucker might know something. Ask who he thinks killed Betsy.'
			}
		]
	]
}