//Buck Interrogation
const keys = require('../../../functions/src/intent-keys')
const contexts = require('../../../functions/src/context-keys')
const intents = {

	[keys.PETE_WHODAUGHTER]: {
		userPhrases: [
			'Who is your daughter?',
			'What is your daughter’s name?',
		],
	},
	[keys.PETE_WHYGOOUTOFBUSINESS]: {
		userPhrases: [
			'Why are you going out of business?',
			'You are going out of business?',
			'What happened with the business?',
		],
	},	
	[keys.PETE_WHATSPEAKABOUTDAUGHTER]: {
		userPhrases: [
			'What did you speak about with your daughter?',
			'What did you and Brandi talk about?',
			'What did Brandi say?',
		],
	},
	[keys.PETE_WHOMOTHER]: {
		userPhrases: [
			'Who is your mother?',
			'Who is your mom?',
			'Is your mother Constance?',
			'Is Constance Florentine your mother?',
		],
	},
	[keys.PETE_HOWBETSYPUTYOUOUTBIZ]: {
		userPhrases: [
			'How was she trying to ruin your business?',
			'Why was Betsy trying to put you out of business?',
		],
	},
	[keys.PETE_WHYDAUGHTERFIRED]: {
		userPhrases: [
			'Why did she get fired?', 
			'Why did your daughter get fired?', 
			'Why did Betsy fire her?',
			'Why did Betsy fire Brandy',
		],
	},
	[keys.PETE_WHYDAUGHTERWORKFORCOMP]: {
		userPhrases: [
			'Why did she work for your competitor?', 
			'Why did your daughter work for Betsy?',
		],
	},
	[keys.PETE_WHODAUGHTERBF]: {
		userPhrases: [
			'Who is your daughter\'s boyfriend?',
			'Who is Brandi\'s boyfriend?',
			'Who is Brandy\'s boyfriend?',
		],
	},
	[keys.PETE_WHYYOURFAULT]: {
		userPhrases: [
			'Why is this your fault?',
			'Why do you think this is your fault?',
		],
	},
	[keys.PETE_WHYTUCKERHAPPY]: {
		userPhrases: [
			'Why would Tucker be happy?',
			'Why do you think Tucker would be happy?',
			'Why is Tucker happy?',
			'Why would Tucker be rich?',
			'How would Tucker be stinking rich?',
		],
	},
	[keys.PETE_WHYANGRYWITHBETSY]: {
		userPhrases: [
			'What reasons did you have to be angry with Betsy?',
			'Why were you angry with Betsy?',
		],
	},
	[keys.PETE_WHYENEMYOFFAM]: {
		userPhrases: [
			'Why was she an enemy of the family?',
			'Why did Betsy hate your family?',
		],
	},
	[keys.PETE_BETSYHATEBEFOREBORN]: {
		userPhrases: [
			'Why did she hate you before you were born?',
			'Why did Betsy hate you before you were born?',
			'She hated you before you were born?',
		],
	},
	[keys.PETE_WHEREDAUGHTERGOING]: {
		userPhrases: [
			'Where was Brandi going?',
			'Where was your daughter driving?',
			'Where was she driving?',
			'Do you know where Brandi was going?',
		],
	},
	[keys.PETE_WHYNOTTRUSTTUCKER]: {
		userPhrases: [
			'Why don’t you trust Tucker?',
			'What do you have against Tucker?',
		],
	},
	[keys.PETE_HOWFARRESTAURANTFROMBETSY]: {
		userPhrases: [
			'How far is your restaurant from Betsy’s?',
			'How far is your place from hers?',
		],
	},
	[keys.PETE_BRANDICALLLASTNIGHT]: {
		userPhrases: [
			'Brandi called you last night is that true?',
			'Did brandi call you last night?',
		],
	},
	[keys.PETE_ALONELASTNIGHT]: {
		userPhrases: [
			`Where you alone last night?`,
			`Did you see your mother last night?`,
		],
	},
	[keys.PETE_CATCH_IN_LIE]: {
		userPhrases: [
			`How did you know turpentine was used?`,
			`You knew turpentine was doused on the fire?`,
			`How did you know about the turpentine?`,
		],
	},
	[keys.PETE_DIDBETSYHATEBRANDI]: {
		userPhrases: [
			"did @betsy hate brandi?",
			"did @betsy hate brandi?",
			"did she hate brandy",
		],
		parameters:  [{ name: 'betsy', opts: { required: false }}]
	},
	[keys.PETE_WHYBRANDICALL]: {
		userPhrases: [
			"why did she call you",
			"what did she call you about",
			"what did Brandi call you about",
			"what did you and Brandi talk about",
		],
	},
	[keys.PETE_WHATDAUGHTERRAMBLING]: {
		userPhrases: [
			"what what was your daughter rambling about",
			"how was she rambling",
		],
		parameters:  [{ name: 'betsy', opts: { required: false }}],
		outputContexts: [contexts.doyoutrustothersuspect]
	},
	[keys.PETE_DIDDAUGHTERWORKFORBETSY]: {
		userPhrases: [
			"did your daughter work for @betsy",
			"did Brandi work for her",
		],
		parameters:  [{ name: 'betsy', opts: { required: false }}],
		outputContexts: [contexts.doyoutrustothersuspect]
	},
	
}

Object.keys(intents).forEach((k) => {
	intents[k].contexts = [contexts.question_suspect]
	if(!intents[k].outputContexts) intents[k].outputContexts = []
	if(!intents[k].parameters) intents[k].parameters = []
})

module.exports = intents
