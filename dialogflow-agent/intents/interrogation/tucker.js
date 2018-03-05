//Tucker Interrogation
const keys = require('../../../webhook/src/intent-keys')
const contexts = require('../../../webhook/src/context-keys')
const intents = {
	[keys.TUCKER_WHOGIRLFRIEND]: {
		userPhrases: [
			'Who are you dating?',
			'Who is your girlfriend?',
			'What is your girlfriend’s name?',
		],
	},
	[keys.TUCKER_BRANDIGIRLFRIEND]: {
		userPhrases: [
			'Are you dating Brandi Lynn?',
			'Are you going out with Brandi Lynn?',
			'Are you seeing Brandi Lynn?',
		],
	},
	[keys.TUCKER_WHATWATCHING]: {
		userPhrases: [
			'What were you watching?',
			'What did you watch?',
		],
	},
	[keys.TUCKER_WHYFAMNOTLIKEYOU]: {
		userPhrases: [
			'Why does her family not like you?',
			'How come her family hates you?',
		],
	},
	[keys.TUCKER_WHYCHANGERESTAURANTS]: {
		userPhrases: [
			'Why did you change restaurants?',
			'Why did you quit?',
			'Why did you go work for Betsy?',
		],
	},
	[keys.TUCKER_WHOPETEMOM]: {
		userPhrases: [
			'Who is Pete’s mother?',
			'Who is Pete’s mom?',
			'Who is his mom?',
		],
	},
	[keys.TUCKER_WHYBRANDIFIRED]: {
		userPhrases: [
			'Why did she get fired?',
			'Why did Betsy fire Brandi Lynn',
			'Why did Betsy fire Brandy',
		],
	},
	[keys.TUCKER_WHATTIMEBRANDYHOME]: {
		userPhrases: [
			'What time did she get home?',
			'When did Brandi get back?',
		],
	},
	[keys.TUCKER_INSURANCE]: {
		userPhrases: [
			'Will you make any money off of the insurance?',
			'What is the insurance?',
			'What is the story with the insurance?',
		],
	},
	[keys.TUCKER_INSURANCEAMOUNT]: {
		userPhrases: [
			'How much money will you make off of the insurance?',
			'How much will the insurance pay you?',
		],
	},
	[keys.TUCKER_WHEREGFGO]: {
		userPhrases: [
			'Where did your girlfriend go?',
			'Where did Brandi go?',
		],
	},
	[keys.TUCKER_WHOGFDAD]: {
		userPhrases: [
			'Who is your girlfriend’s dad?',
			'Who is Brandi’s dad?',
			'What is Brandi’s dad’s name?',
		],
	},
	[keys.TUCKER_WHOBRANDIGM]: {
		userPhrases: [
			'Who is Brandi’s grandmother?',
			'Who is your girlfriend’s grandmother?'
		],
	},
	[keys.TUCKER_WHEREBRANDYGO]: {
		userPhrases: [
			'Where was Brandi going?',
			'Where did Brandi go?',
		],
	},
	[keys.TUCKER_WHYBRANDYGO]: {
		userPhrases: [
			'Why did Brandi leave?',
			'What was the reason Brandi left?',
		],
	},
	[keys.TUCKER_WHATLASTJOB]: {
		userPhrases: [
			'What was your last job?',
			'Where did you work last?',
			'what job was that?',
			'what was the job?',
		],
	},
	[keys.TUCKER_HOWLONGDATING]: {
		userPhrases: [
			'How long have you been dating?',
			'How long have you and Brandi been together?',
		],
	},
	[keys.TUCKER_WHYPETENOTRESPECTYOU]: {
		userPhrases: [
			'Why didn’t Pete see you as more than a line cook?',
			'Why didn’t Pete respect you?',
			'Why do you think Pete didn’t respect you?',
		],
	},
	[keys.TUCKER_MADATPETE]: {
		userPhrases: [
			'Are you mad at Pete?',
			'Are you pissed off at Pete',
		],
	},
	[keys.TUCKER_WHATWORKINGON]: {
		userPhrases: [
			'What were you working on?',
			'What work did you do?',
		],
	},
	[keys.TUCKER_HOWMEETBRANDI]: {
		userPhrases: [
			'How did you meet Brandi?',
			'How did you and Brandi meet?',
		],
	},
	[keys.TUCKER_BRANDYLEAVE]: {
		userPhrases: [
			'Was your girlfriend home all night?',
			'Did Brandi leave last night?',
		],
	},
	[keys.TUCKER_WHATTIMESEECONSTANCE]: {
		userPhrases: [
			`What was she doing on this side of town?`,
			`Why was she on this side of the tracks?`,
		],
	},
	[keys.TUCKER_WHYCONSTANCEAROUND]: {
		userPhrases: [
			`What time did you see Constance?`,
			`When did you see her?`,
		],
	},
	[keys.TUCKER_SHOWERLASTNIGHT]: {
		userPhrases: [
			`Why did you take a shower last night?`,
			`Did you take a shower last night?`,
			`Brandi said you took a shower.`
		],
	},
	[keys.TUCKER_CATCH_IN_LIE]: {
		userPhrases: [
			`How do you know that Betsy was locked in a broom closet?`,
			`How did you know about the broom closet?`,
			`How did you know about the closet?`,
			`How did you know she was locked in the closed?`
		],
	},




	////
	[keys.TUCKER_HOWLONGWORKBETSY]: {
		userPhrases: [
			"how long have you worked with Betsy",
			"how long did you work for Betsy"
		],
	},

	[keys.TUCKER_DIDBRANDYGOTOSLEEP]: {
		userPhrases: [
			"did Brandy go to sleep",
			"on the night of the murder when you were with Brandi did she go to sleep","was Brandi asleep",
			"did Brandy go to sleep",
			"on the night of the murder when you were with Brandi did she go to sleep",
			"was Brandi asleep",
			"did Brandy go to sleep",
			"on the night of the murder when you were with Brandi did she go to sleep",
			"was "
		],
	},

	[keys.TUCKER_STILLWORKATBBQ]: {
		userPhrases: ["do you still work for Betsy"],
	},

	
	[keys.TUCKER_PETEFIRED]:{  
		"userPhrases":[  
			"were you fired"
		]
	},
	[keys.TUCKER_BETSYFIRED]:{  
		"userPhrases":[  
			"did Betsy fire you"
		]
	},

}

Object.keys(intents).forEach((k) => {
	intents[k].contexts = [contexts.question_suspect]
	if(!intents[k].outputContexts) intents[k].outputContexts = [];
	if(!intents[k].parameters) intents[k].parameters = [];
})

module.exports = intents;


