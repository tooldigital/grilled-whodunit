// General Interrogation
const keys = require('../../../functions/src/config/intent-keys')
const contexts = require('../../../functions/src/config/context-keys')

const betsyParam = { name: 'betsy', opts: { required: false } }
const intents = {

	[keys.FIRSTNAME]: {
		userPhrases: [
			'What’s your first name?',
			'What is your given name?',
			'Tell me your first name',
		],
	},

	[keys.FULLNAME]: {
		userPhrases: [
			'What’s your full name?', 
			'What is your name?',
			'Tell me your name',
		],
	},
	
	[keys.TELLABOUTSELF]: {
		userPhrases: [
			'Tell me about yourself',
			'Who are you',
			'What\'s your story?',
		],
	},

	[keys.NIGHTOF]: {
		userPhrases: [
			'Where were you on the night of April 11th?', 
			'Where were you on the night of the murder?',
			'What were you doing on the night of the murder?',
			'Where were you last night?',
			'Where were you on the night of her death',
			'Where were you on the night of her murder',
			'Where were you when she died',
			'Where were you the night she died',
			'Where were you the night that she died',
			'What were you doing last night?',
			'What were you up to last night?',
			'What is your alibi?',
			'Tell me what you were doing last night.',
			'I\'d like to know what you were doing last night.',
			'where you at @time last night',
			'Where were you at the time of the fire?',
		],
		parameters: [{ name: 'time', opts: { required: false , dataType: '@sys.time' }}],
	},

	[keys.WHATRELATIONSHIPTOBETSY]: {
		userPhrases: [
			'What was your relationship to @betsy',
			'What was your relationship with @betsy',
			'How did you know @betsy',
			'Who is @betsy to you?',
			'What did you think of @betsy',
			'How do you know @betsy',
			'How did you know @betsy',
			'Did you like @betsy',
			'Tell me how you know @betsy',
			'Were you and @betsy friends?',
			'Were you friends with @betsy',
		],
		parameters: [betsyParam],
	},

	[keys.HOWLONGKNOWBETSY]: {
		userPhrases: [
			'How long have you known @betsy',
			'How long did you know @betsy',
		],
		parameters: [betsyParam],
	},

	[keys.ANGRYWITHBETSY]: {
		userPhrases: [
			'Were you angry at @betsy',
			'Were you angry with @betsy',
			'Were you mad at @betsy',
			'Did you hate @betsy',
			'Did you hate @betsy',
			'Do you hate @betsy',
		],
		parameters: [betsyParam],
	},

	[keys.DIDYOUKILLHER]: {
		userPhrases: [
			'Did you kill her?',
			'Did you kill @betsy',
			'Are you responsible for the murder?',
			'Would you want @betsy dead?',
		],
		parameters: [betsyParam],
	},

	[keys.WHOKILLEDBETSY]: {
		userPhrases: [
			'Who killed her?',
			'Who do you think killed @betsy',
			'Do you know who killed @betsy',
			'What do you think happened to @betsy',
			'Who could have killed @betsy',
		],
		parameters: [betsyParam],
	},

	[keys.BETSYDOSOMETHINGTOYOU]: {
		userPhrases: [
			'Did @betsy do something to you?',
			'What did @betsy do to you?',
		],
		parameters: [betsyParam],
	},

	[keys.WHATRECIPE]: {
		userPhrases: [
			'What was the recipe?',
			'What recipe?',
		],
	},

	[keys.WHYCONSTBETSYHATEEACHOTHER]: {
		userPhrases: [
			'Why did Constance and @betsy hate each other?',
			'Why did Constance hate her?',
			'Why did Constance hate @betsy',
			'Why did @betsy hate her?',
			'Why did they hate each other?',
			'Why did she hate @betsy',
		],
		parameters: [betsyParam],
	},

	[keys.WHATBETSYDOBRANDI]: {
		userPhrases: [
			'What did @betsy do to Brandi?',
			'What did @betsy do to your daughter?',
		],
		parameters: [betsyParam],
	},

	[keys.WHENLASTSEEBETSY]: {
		userPhrases: [
			'When did you last see @betsy',
			'Did you see @betsy yesterday?',
		],
		parameters: [betsyParam],
	},

	[keys.WHOBETSYHEADCHEF]: {
		userPhrases: [
			`Who was Betsy's head chef?`,
			'Who was her head chef?',
		],
	},

	[keys.TELLABOUT]: {
		userPhrases: [
			'Tell me about @suspect',
			'What do you know about @suspect',
			'Tell me what you know about @suspect',
			'Who is @suspect',
			'Tell me a little be more about @suspect',
			'do you know who @suspect is?',
			'how do you know @suspect',
			'Do you know @suspect',
		],
		parameters: [{ name: 'suspect' }],
		outputContexts: [contexts.tellabout],
	},

	//////////////////////////////////////////////////////
	//////////////////////////////////////////////////////

	[keys.TALKABOUTMURDER]: {
		userPhrases: [
			"I want to talk to you about @betsy's murder",
			"I want to talk to you about the murder of @betsy",
			"I want to know to you about @betsy's murder",
			"I want to know to you about the murder",
		],
		parameters: [betsyParam],
	},

	[keys.WHENBESTYFINDOUTBRANDI]: {
		userPhrases: [
			"when did she find out that Brandi was Pete's daughter",
			"when did Betsy find out that Brandy is Pete's daughter",
		],
	},

	[keys.OTHERSUSPECTSUSPICIOUS]: {
		userPhrases: [
			"does @suspect seem suspicious",
			"is @suspect suspicious",
			"do you think @suspect is suspicious",
		],
		parameters: [{ name: 'suspect' }],
		outputContexts: [contexts.othersuspectsuspicious],
	},

	[keys.WHATBETSYDOINGNIGHTOFMURDER]: {
		userPhrases: [
			"what was @betsy doing the night at the murder",
			"what was @betsy doing the night of the fire",
			"what was @betsy doing the night she died",
		],
		parameters: [betsyParam],
	},

	[keys.TELLABOUTMURDER]: {
		userPhrases: [
			"I'd like like to talk to you about the murder",
			"tell me about the murder",
			"do you know anything about the murder",
		],
	},

	[keys.HOWOLDBRANDI]: {
		userPhrases: [
			"how old is she",
			"how young is she",
			"how old is Brandy",
		],
	},

	[keys.WHYBETSYMURDERED]: {
		userPhrases: [
			"why do you think @betsy was murdered",
			"why was @betsy murdered",
			"why was she murdered",
		],
		parameters: [betsyParam],
	},

	[keys.THINKOTHERSUSPECTKILLED]: {
		userPhrases: [
			"you think @suspect killed Betsy",
			"do you think @suspect kill Betsy",
			'I think @suspect killed her.',
			"do you suspect @suspect",
			"did @suspect kill Betsy",
		],
		parameters: [{ name: 'suspect' }, betsyParam],
		outputContexts: [contexts.thinkothersuspectkilled],
	},

	[keys.KNOWOTHERSUSPECT]: {
		userPhrases: [
			"do you know @suspect",
			"do you know @suspect",
			"do you know @suspect",
			"do you know @suspect",
			"do you know @suspect",
			"do you know @suspect",
			"do you know @suspect",
			"do you know @suspect",
			"do you know @suspect",
			"do you know @suspect",
		],
		parameters: [{ name: 'suspect' }],
		outputContexts: [contexts.knowothersuspect],
	},

	[keys.DOYOUTRUSTOTHERSUSPECT]: {
		userPhrases: [
			"do you trust @suspect",
			"can you trust @suspect",
			"should we trust @suspect",
		],
		parameters: [{ name: 'suspect' }],
		outputContexts: [contexts.doyoutrustothersuspect],
	},

	[keys.KNOWBETSY]: {
		userPhrases: [
			"did you know @betsy",
			"do you know @betsy",
			"@suspect did you know @betsy",
			"@suspect do you know @betsy",
			"I want to ask you about @betsy do you know her",
		],
		parameters: [{ name: 'suspect', opts: { required: false }}, betsyParam],
	},

	[keys.WHOISBETSY]: {
		userPhrases: [
			"who is @betsy",
			"who is @betsy again",
			"@suspect who is @betsy",
		],
		parameters: [{ name: 'suspect', opts: { required: false }}, betsyParam],
	},

	[keys.HOWFEELABOUTBETSY]: {
		userPhrases: [
			"what is your opinion about @betsy",
			"what is your opinion about @betsy",
			"@suspect how did you feel about @betsy",
			"@suspect how do you feel about @betsy",
		],
		parameters: [{ name: 'suspect', opts: { required: false }}, betsyParam],
	},

	[keys.WHYBETSYMURDERED]: {
		userPhrases: [
			"why do you think @betsy was murdered",
			"why do you think she was murdered",
			"what reason was @betsy murdered",
		],
		parameters: [betsyParam],
	},

	[keys.GETALONGBETSY]: {
		userPhrases: [
			"do you have a good relationship with @besty?",
			"did you get along with @betsy",
		],
		parameters: [betsyParam],
	},

	[keys.DIDBETSYCONSTNOTLIKEEACHOTHER]: {
		userPhrases: [
			"did you see any issues between Betsy and Constance",
		],
	},

	[keys.OTHERSUSPECTALIBI]: {
		userPhrases: [
			"when did you last see @suspect",
			"do you know where @suspect was last night?",
			"where was @suspect last night?",
			"do you know where @suspect was on the night of the murder",
		],
		parameters: [{ name: 'suspect' }],
		outputContexts: [contexts.othersuspectalibi],
	},

	[keys.TALKTOBETSY]: {
		userPhrases: [
			"interview to @betsy",
			"question @betsy",
			"let's talk to @betsy",
		],
		parameters: [betsyParam],
	},

	[keys.WHATTHINKOTHERSUSPECT]: {
		userPhrases: [
			"what do you think of @suspect",
			"how do you feel about @suspect",
		],
		parameters: [{ name: 'suspect' }],
		outputContexts: [contexts.whatthinkothersuspect],
	},

	[keys.YOUWANTTOKILLBETSY]: {
		userPhrases: [
			"did you want to kill Betsy",
			"so did you want Betsy dead",
			"did you want Betsy dead",
			"did you want Betsy to die",
			"did you want Betsy dead",
			"what you want Betsy to die",
			"did you want Betsy dead",
			"did it make you want to kill her",
		],
	},
	[keys.WHOBETSYENEMIES]: {
		userPhrases: [
			"who were her enemies",
			"who were Betsy's enemies",
		],
	},
	[keys.WEREYOUALONE]: {
		userPhrases: [
			"were you alone",
			"who are you with",
			"who else was with you",
			"who were you with",
		],
	},
	[keys.WHENBUYRECIPE]: {
		userPhrases: [
			"when did she buy the recipe",
		],
	},
	[keys.CONFIRMALIBI]: {
		userPhrases: [
			"can anyone verify that you were reading a book",
		],
	},
	[keys.WHENHEARMURDER]: {
		userPhrases: [
			"when did you find out she died",
		],
	},
	[keys.FIGHTWITHBETSY]: {
		userPhrases: [
			"did you fight with Betsy",
		],
	},
	[keys.WHOOTHERSUSPECT]: {
		userPhrases: [
			"who is @suspect",
			"who's your @suspect",
		],
		parameters: [{ name: 'suspect' }],
	},
	[keys.WITHOTHERSUSPECT]: {
		userPhrases: [
			"was your boyfriend with you on the night of the murder",
		],
	},
	[keys.OTHERSUSPECTANGRYBETSY]: {
		userPhrases: [
			"did your boyfriend hate Betsy",
			"was Pete angry with Betsy",
		],
	},
 
}

Object.keys(intents).forEach((k) => {
	intents[k].contexts = [contexts.question_suspect]
	if(!intents[k].outputContexts) intents[k].outputContexts = []
	if(!intents[k].parameters) intents[k].parameters = []
})

module.exports = intents







