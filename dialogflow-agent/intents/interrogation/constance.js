// Constance Interrogation
const keys = require('../../../functions/src/config/intent-keys')
const contexts = require('../../../functions/src/config/context-keys')
const intents = {

	[keys.CONST_WHATTERRIBLETHINGS]: {
		userPhrases: [
			'What terrible things did she do?',
			'What terrible things?',
			'What terrible deeds did she do?',
			'What terrible deeds?',
			'What did she do?',
			'What did she do to you?',
			'How would she ruin you?',
			'Why would she ruin you?',
			'How did she ruin you?',
			'Why would she want to ruin you?',
			'What would she do to ruin you?',
			'What kind of terrible deeds?',
		],
		parameters: [{ name: 'betsy', opts: { required: false }}],
	},

	[keys.CONST_WHOSON]: {
		userPhrases: [
			'Who is your son?',
			'Who’s your son?',
			'What is your son’s name?',
		],
	},

	[keys.CONST_WHATREADING]: {
		userPhrases: [
			'What were you reading?',
			'What book was it?',
			'What did you read last night',
		],
	},

	[keys.CONST_WHOGRANDDAUGHTER]: {
		userPhrases: [
			'Who is your granddaughter?',
			'Is Brandi your granddaughter?',
		],
	},

	[keys.CONST_WHOGDBOYFRIEND]: {
		userPhrases: [
			'Who is your granddaughter’s boyfriend?',
			'Who is her boyfriend?',
			'Who is Brandi’s boyfriend?',
			'What is her boyfriend’s name?',
			'What is your granddaughter’s boyfriend’s name?',
		],
	},

	[keys.CONST_WHATELSEBETSYDO]: {
		userPhrases: [
			'What else did Betsy do?',
			'What else did she do?',
		],
	},

	[keys.CONST_HOWSONOUTOFBUSINESS]: {
		userPhrases: [
			'How did she put your son out of business?',
			'How did she put him out of business?',
		],
	},

	[keys.CONST_WHYGDFIRED]: {
		userPhrases: [
			'Why did Betsy fire her?',
			'Why did she fire her?',
			'Why did Betsy fire your granddaughter?',
			'Why did Betsy fire Brandi?',
			'Why did your granddaughter get fired?',
		],
	},

	[keys.CONST_WHEREGDDRIVING]: {
		userPhrases: [
			'Where was she going?',
			'Where was she driving?',
			'Where was Brandi going?',
			'Where was your granddaughter driving?',
			'Where was she headed?',
		],
	},

	[keys.CONST_WHATTIMEGDCALL]: {
		userPhrases: [
			'What time did she call you?',
			'When did she call you?',
			'What time did your granddaughter call you?',
			'When did your granddaughter call you?',
			'When did Brandi call you?',
			'What time was the call?',
		],
	},

	[keys.CONST_YOUANDBETSYHATE]: {
		userPhrases: [
			'Why did you hate Betsy',
			'Why did she hate you?',
			'Why did you and Betsy hate each other?',
		],
	},

	[keys.CONST_WHATSTRATEGY]: {
		userPhrases: [
			'What was the strategy?',
			'What strategy did she mess up?',
			'What did Brandi mess up?',
			'What little strategy?',
		],
	},

	[keys.CONST_WHYTUCKERTHRILLED]: {
		userPhrases: [
			'Why would Tucker be thrilled?',
			'Why would he be thrilled?',
			'Why do you think Tucker is thrilled?',
			'Why would Tucker be thrilled with this?',
		],
	},

	[keys.CONST_WHYNOLIKETUCKER]: {
		userPhrases: [
			'Why don’t you like Tucker?',
			'Why don’t you like Brandi’s boyfriend?',
		],
	},

	[keys.CONST_WHYWANTBETSYOUTOFBIZ]: {
		userPhrases: [
			'Why did you want her to go out of business?',
			'Why did you want Betsy’s business to fail?',
			'Why did you want Betsy to go out of business?',
		],
	},

	[keys.CONST_HOWBETSYHUMILIATEBRANDI]: {
		userPhrases: [
			'How did she humiliate her?',
			'How did Betsy humiliate Brandi?',
		],
		parameters: [{ name: 'betsy', opts: { required: false }}],
		outputContexts: [contexts.doyoutrustothersuspect],
	},

	[keys.CONST_WHATTALKABOUTWITHGD]: {
		userPhrases: [
			'What did you talk about with your granddaughter?',
			'What did you chat about with Brandi?',
			'What did you and Brandi chat about?',
		],
	},

	[keys.CONST_WHATTIMETOSLEEP]: {
		userPhrases: [
			'What time did you go to sleep?',
			'What time did you turn out the light?',
			'When did you go to sleep?',
		],
	},

	[keys.CONST_CATCH_IN_LIE]: {
		userPhrases: [
			'Your son said he was alone.',
			'Tucker said he saw you.',
			`You didn't go to your son's restaurant`,
			`Why does your son say he was alone?`,
		],
	},

	[keys.CONST_WHYBRANDYROUGH]: {
		userPhrases: [
			"Constance why you think she's rough around the edges",
			"Constance why you think Brandi is rough around the edges",
		],
	},

	[keys.CONST_WEREHOMEALLNIGHT]: {
		userPhrases: [
			"you stayed home in the whole night",
			"were you home the whole night",
			"did you stay in all night",
		],
	},
	
	[keys.CONST_LIKEGRANDDAUGHTER]: {
		userPhrases: [
			"Constance did you like your granddaughter",
			"Constance did you like brandy",
			"constant constant what is your relationship with brandy",
			"Constance did you like your granddaughter",
			"Constance did you like brandy",
			"constant constant what is your relationship with brandy",
		],
	},

	[keys.CONST_ALONEALIBI]: {
		userPhrases: [
			"were you alone that night",
			"were you alone that night",
			"Constance where you alone tonight that's he died",
			"Constance where you alone tonight that's he died",
		],
	},

	[keys.CONST_WHYBRANDICALL]: {
		userPhrases: [
			"why did she call you",
			"what is she call you about",
			"What did brandi call you about",
		],
	},

	[keys.CONST_CHARASS]: {
		userPhrases: [
			"what do you mean character assassination",
			"what character assassination",
		],
	},

}

Object.keys(intents).forEach((k) => {
	intents[k].contexts = [contexts.question_suspect]
	if(!intents[k].outputContexts) intents[k].outputContexts = []
	if(!intents[k].parameters) intents[k].parameters = []
})

module.exports = intents
