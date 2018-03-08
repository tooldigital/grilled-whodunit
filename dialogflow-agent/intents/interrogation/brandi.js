//BrandiLynn Interrogation
const keys = require('../../../functions/src/intent-keys')
const contexts = require('../../../functions/src/context-keys')
const intents = {

	[keys.BRANDI_WHOBOYFRIEND]: {
		userPhrases: [
			'Who is your boyfriend?',
			'What is your boyfriend’s name?',
			'Who are you dating?',
			'Who are you going out with?',
		],
	},
	[keys.BRANDI_WHYFIRE]: {
		userPhrases: [
			'Why did she fire you?',
			'Why did Betsy fire you?',
			'Why did you get fired?',
			'Why were you fired?',
			'And she fired you?',
			'Why were you on bad terms with her?',
			'Why was she so rotten to you?',
			'How was she rotten to you?',
		],
	},
	[keys.BRANDI_WHYFAMILYHATETUCKER]: {
		userPhrases: [
			'Why does your family hate Tucker?',
			'Why did they hate him?',
			'Why do they hate him?',
		],
	},
	[keys.BRANDI_WHYTUCKERWORKFORBETSY]: {
		userPhrases: [
			'Why did Tucker go to work for Betsy?',
		],
	},
	[keys.BRANDI_WHODAD]: {
		userPhrases: [
			'Who is your dad?',
			'Who is your father?',
			'What is your father’s name?',
		],
	},
	[keys.BRANDI_WHATDADBUSINESS]: {
		userPhrases: [
			'What is your dad’s business?',
			'What is your father’s business?',
		],
	},
	[keys.BRANDI_WHOGRANDMOTHER]: {
		userPhrases: [
			'Who is your grandma?',
			'Who is your grandmother?',
			'Is Constance your grandmother?',
		],
	},
	[keys.BRANDI_HOWLONGDATINGTUCKER]: {
		userPhrases: [
			'how long have you and Tucker been dating?',
			'how long have you dated Tucker?',
			'how long have you been with your boyfriend?',
			'how long have you been going out with Tucker?',
		],
	},
	[keys.BRANDI_WHATBETSYDOLASTWEEK]: {
		userPhrases: [
			'What did Betsy do to you?',
			'What did Betsy do last week?',
			'What did she do last week?',
		],
	},
	[keys.BRANDI_WHYGMFAULT]: {
		userPhrases: [
			'Why is this your grandmother’s fault?',
		],
	},
	[keys.BRANDI_INSURANCE]: {
		userPhrases: [
			'What is the insurance?',
			'What is the story with the insurance?',
			'What’s with the insurance?',
		],
	},
	[keys.BRANDI_HOWBETSYSCARY]: {
		userPhrases: [
			'How was Betsy scary?',
			'Why do you think Betsy was scary?',
		],
	},
	[keys.BRANDI_THINKGMKILLEDBETSY]: {
		userPhrases: [
			'Do you think your grandmother killed her?',
			'Are you saying your grandmother killed her?',
		],
	},
	[keys.BRANDI_HOWMEETBF]: {
		userPhrases: [
			'How did you meet your boyfriend?',
			'Did you meet Tucker at Betsy’s?',
		],
	},
	[keys.BRANDI_WHATBETSYFIGHTABOUT]: {
		userPhrases: [
			'What did you and Betsy fight about?',
			'What were you and Betsy fighting about?',
		],
	},
	[keys.BRANDI_CATCH_IN_LIE]: {
		userPhrases: [
			'tucker said you went to the dry cleaners last night',
			'did you call your grandmother last night?',
			'did you go out driving last night?',
			'Did you go out last night?',
			'what were you doing at 8:30',
			'did you go out driving last night?',
			'did you call your dad last night?',
			'where you out last night between the hours of 8 and midnight?',
			'where were you at 8:30',
			'did you speak to your dad at 8:30',
			'did you speak with your grandmother at 8:30?',
			'your dad said you called him while driving',
			'your grandmother said you called her while driving',
			'did you leave your apartment last night?',
			'did you stay in your apartment all night?',
			'Brandy your boyfriend says that you left at around 8:45 is that true?',
			'Brandi did you leave the apartment at all last night?',
			'Why did your boyfriend tell me you left the apartment?',
		],
	},
	[keys.BRANDI_WHENTALKTODAD]: {
		userPhrases: [
			`When did you talk to your dad last night?`,
			`What time did you talk to your dad last night?`,
		],
	},
	[keys.BRANDI_DADALONELASTNIGHT]: {
		userPhrases: [
			`Was your dad alone last night?`,
			`Was your dad with anyone last night? `,
		],
	},
	[keys.BRANDI_WHYTUCKERSHOWER]: {
		userPhrases: [
			'Why did Tucker take a shower?',
			'Why was Tucker showering?',
			'What reason did Tucker take a shower?',
		],
	},
	[keys.BRANDI_WHYTUCKERGOOUT]: {
		userPhrases: [
			`Did Tucker go out last night?`,
			`Why did Tucker go out?`,
		],
	},
	///


	[keys.BRANDI_WHEREBFLASTNIGHT]: {
		userPhrases: [
			"where was your boyfriend last night?",
		],
	},

	[keys.BRANDI_WHENWORKBETSY]: {
		userPhrases: [
			"Brandy when did you work for the barbeque",
			"Brandy when did you work for @betsy",
			"When did you work at the restaurant",
		],
		parameters: [{ name: 'betsy', opts: { required: false }}],
	},
	[keys.BRANDI_NIGHTOF]: {
		userPhrases: [
			"what did you and your boyfriend do the night Betsy die",
		],
	},
	[keys.BRANDI_BETSYKNOWBF]: {
		userPhrases: [
			"what is your boyfriends connection to @betsy",
			"does @betsy know your boyfriend",
		],
		parameters: [{ name: 'betsy', opts: { required: false }}],
	},
	[keys.BRANDI_LIKEGRANDMOTHER]: {
		userPhrases: [
			"Brandy do you like your grandmother",
		],
	},
	[keys.BRANDI_DIDYOUGETFIRED]: {
		userPhrases: [
			"did you get fired from Betsy's BBQ",
		],
	},
	[keys.BRANDI_TIMEATBF]: {
		userPhrases: [
			"brandi what time were you at your boyfriend's?",
			"when were you at your boyfriend's?",
		],
	},
	[keys.BRANDI_WHENFIRED]: {
		userPhrases: [
			"when did you get fired",
			"when were you fired",
		],
	},
	[keys.BRANDI_BFCONFIRM]: {
		userPhrases: [
			"can your boyfriend confirm you were there?",
			"can he confirm you were there?",
		],
	},
	[keys.BRANDI_LEAVELASTNIGHT]: {
		userPhrases: [
			"you didn't leave at all",
			"did you leave at any time",
		],
	},

	[keys.BRANDI_WHATDOINGWITHBOYFRIEND]: {  
		"userPhrases": [  
			"what were you doing at your boyfriend's apartment",
			"what were you doing with your boyfriend",
			"what did you and your boyfriend do",
		],
	},
   
}

Object.keys(intents).forEach((k) => {
	intents[k].contexts = [contexts.question_suspect]
	if(!intents[k].outputContexts) intents[k].outputContexts = []
	if(!intents[k].parameters) intents[k].parameters = []
})

module.exports = intents


