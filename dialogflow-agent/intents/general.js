//general intents
const Intent = require('./intent')
const actions = require('../../webhook/src/action-keys')
const intents = require('../../webhook/src/intent-keys')
const contexts = require('../../webhook/src/context-keys')
const yesInputs = ['confirm', 'ok', 'of course', 'sure', 'I don’t mind', 'yes', 'that’s correct', 'I agree', 'do it', 'exactly', 'sounds good']
const noInputs = ['not really', 'I don’t think so', 'not interested', 'definitely not', 'I don’t want that', 'no', 'thanks but no', 'I disagree', 'don’t do it']
const helpInputs = ['What are the rules', 'How do I play', 'help', 'I need help', 'help me out', 'I’m not sure what to do', 'I don’t know what to say', 'I need a hint']
const repeatInputs = ['Can you repeat that?', 'Please repeat yourself', 'Can you say that again?', 'Say again', 'Say that again', 'I didn’t hear you', 'Can you repeat that?', 'Go back', 'What did you say?', 'What?', 'What was that?',]

module.exports = {
	
	[intents.HELP]: {
		userPhrases: helpInputs,
		parameters: [],
		contexts: [contexts.intro],
		action: actions.HOWTO,
	},

	[intents.REPEAT]: {
		userPhrases:repeatInputs,
		parameters: [],
		contexts: [],
		outputContexts: [],
		action: actions.REPEAT
	},

	[intents.TALK_TO_HAWKINS]: {
		userPhrases:[
			'let me talk to hawkins',
			'let me talk to the chief',
			'I want to talk hawkins',
			'can I talk to hawkins',
			'Talk to hawkins',
			'Talk to the detective',
			'hawkins',
			'that will be all',
			'you are dismissed',
			'I’m done talking to you',
			'I’m finished with you',
		],
		parameters: [],
		contexts: [],
		outputContexts: [],
		action: actions.ASKHAWKINS
	},

	[intents.ASKFORCASEFILE]: {
		userPhrases:[
			'Give me information on the case',
			'Get more information',
			'what is the evidence?',
			'is there any evidence?',
			'What is the story?',
			'I want to review the case file',
			'I want to see the crime scene',
			'Investigate the crime scene',
			'Take me to the crime scene',
			'Review the crime scene',
			'Review the case file',
			'Show me the crime scene',
            'Tell me about the case',
            'Tell me about the crime scene',
			'hawkins review the case file', 
			'hawkins what is this case about',
			'hawkins tell me about this case',
			'hawkins show me the case file',
			'hawkins I want to review the case file',
			'hawkins review the case file for me',
			'hawkins let’s go over the case',
			'hawkins what is the story',
			'Read the case file to me, hawkins',
			'How did betsy die?',
			'How was Betsy murdered',
			'Go over the crime scene',
			'Review crime scene',
		],
		parameters: [],
		contexts: [],
		outputContexts: [contexts.askhawkins],
		action: actions.ASKHAWKINS
	},

	[intents.SUGGESTIONINTERVIEW]: {
		userPhrases:[
			'How do I interview?',
			'how do I interview the suspects',
			'What questions should I ask?',
			'What do I ask?',
			'What questions can I ask?',
			'What questions do I ask?',
			'What other questions can I ask?',
			'What do I say?',
			'What should I ask?',
			'I don’t know what to say',
			'Give me some suggested questions'
		],
		parameters: [],
		contexts: [],
		outputContexts: [contexts.askhawkins],
		action: actions.ASKHAWKINS
	},

	[intents.SUGGESTIONCATCHKILLER]: {
		userPhrases:[
			'How do I catch the killer?',
			'How do I catch the killer in a lie?',
			'How do I win?',
			'How do get a confession?',
			'How do I accuse the killer?',
			'How do I catch the lie?'
		],
		parameters: [],
		contexts: [],
		outputContexts: [contexts.askhawkins],
		action: actions.ASKHAWKINS
	},

	[intents.INTRO_INTERROGATE]: {
		userPhrases:[
			'Interrogate',
			'Question the suspects',
			'Question another suspect',
			'Interview the suspects',
			'I want to question the suspects',
			'I want to interview the suspects',
			'I want to interrogate a suspect',
			'I want to see the suspects',
			'I’d like to question a suspect',
			'Let’s interview the suspects',
			'lets go check out those suspects',
			'talk to the suspects',
			'interview another suspect',
			'question another suspect',
			'speak to suspects',
			'can i speak to somebody else',
			'talk to the next suspect',
			'I want to talk to someone else',
			'I would like to interrogate the suspects',
		],
		parameters: [],
		contexts: [],
		outputContexts: [contexts.intro_interrogate_followup],
		action: actions.INTRO_INTERROGATE_SUSPECTS
	},

	[intents.INTRO_INTERROGATE_SELECT]: {
		userPhrases:[
			'@suspect',
			'@suspect',
			'@suspect',
			'@suspect',
			'@suspect',
			'@suspect',
			'@suspect',
		],
		parameters: [{name: 'suspect'}],
		contexts: [contexts.intro_interrogate_followup],
		outputContexts: [contexts.question_suspect],
		action: actions.SELECT_SUSPECT
	},

	[intents.SELECT_SUSPECT]: {
		userPhrases:[
			'Let me talk to @suspect',
			'Let me talk with @suspect',
			'Talk with @suspect',
			'I’d like to speak with @suspect', 
			'Question @suspect',
			'Interview @suspect',
			'Speak to @suspect',
			'Talk to @suspect',
			'Bring @suspect in for questioning',
			'Bring in @suspect',
			'Let me interview @suspect',
			'I want to interview @suspect',
			'I’ll talk with @suspect',
			'Question @suspect',
			'Can we go back to @suspect',
			'Can I talk to @suspect',
		],
		parameters: [{name: 'suspect'}],
		contexts: [],
		outputContexts: [contexts.question_suspect],
		action: actions.SELECT_SUSPECT
	},

	[intents.LIST_SUSPECTS]: {
		userPhrases:[
			'Who are the suspects',
			'Who are the other suspects',
			'List of suspects',
			'What are the suspect’s names',
			'List the suspects for me',
			'List the names of the suspects',
			'Who do we have in holding?',
			'Who can I interrogate?',
			'Who are the suspects again?',
			'repeat the suspects',
			'who are the other suspects',
			'suspect lineup',
			'I want to know who the suspects are',
			'Tell me the list of suspects',
			'what’s their names',
		],
		parameters: [],
		contexts: [],
		outputContexts: [],
		action: actions.LIST_SUSPECTS
	},

	[intents.HOWTO]: {
		userPhrases:[
			'How to play',
			'How do you play?',
			'How do I play?',
			'How do I play the game?',
			'What are the rules?',
			'What are the rules of the game?',
			'How do I win?',
			'Tell me the rules',
			'Tell me how to win',
			'What can I do?',
			'How do you play the game?',
			'How can I catch the killer?',
			'What can I do to catch the killer?',
		],
		parameters: [],
		contexts: [],
		outputContexts: [],
		action: actions.HOWTO
	},

	[intents.TOOGENERIC]: {
		userPhrases:[
			'What did she do?',
			'What did he do?',
			'How is that?',
			'What?',
			'Why?',
			'How?',
		],
		parameters: [],
		contexts: [],
		outputContexts: [],
		action: actions.TOOGENERIC
	},


	[intents.CANMULTIPLEPEOPLEMURDER]:{  
		"userPhrases":[  
			"can two people commit the murder"
		],
		parameters: [],
		contexts: [],
		outputContexts: [],
		action: actions.ASKHAWKINS
	},

}


